import './style.scss';
require.context('./public', true, /\.(png|woff)$/i);

+function() {
	function GID(i) {return document.getElementById(i);}
	function QS(el,s) {return el.querySelector(s);}

	let emailField = QS(GID('leave-request'), 'input');
	setTimeout(function() { // for IE11
		emailField.value = '';
	}, 10);

	let header = GID('header');

	document.body.onresize = resizeHeader;
	resizeHeader();

	function resizeHeader() {
		let img = new Image();
		img.src = 'public/slider0.png';
		img.onload = function() {
			header.style.height = (header.clientWidth *this.height/this.width^0) + 'px';
			checkSlider();
		}
	};

	header.pause = false;
	header.onmouseenter = function(e) {
		this.pause = true;
		checkSlider();
	}
	header.onmouseleave = function(e) {
		this.pause = false;
		checkSlider();
	}

	let inform = [
		{
			caption: 'Расширяем возможности предоставления качественных медицинских услуг',
			text: '«Дневник здоровья» – новый сервис для самоконтроля показателей состояния здоровья, разработанный для участников программы «Мое здоровье».',
		},
		{
			caption: 'Следить за здоровьем станет проще',
			text: 'Скоро вы сможете находиться на связи со своим лечащим врачом независимо от своего местоположения, вести дневник мониторинга самочувствия, получать рекомендации по плану лечения и многое другое.',
		},
		{
			caption: 'Herjsdfgfds dhgd hhhhh',
			text: 'ewfhuwerhfuhr gkrehglhregleg lseghsh sd;ghsdg sdjflhgldlhsdthksdjhk;ldgj hklg;lh ksgjh ;lsgjkhjgdklhgk;dhl',
		},
		{
			caption: '444444444444444444444',
			text: '124679265709420935824527846576429c2346 56 4657 b4 624365 34256437 56346 327967 2363',
		},
	];

	let informLen = inform.length;

	// async loan images
	for (let i = 1; i < informLen; i++) {
		let img = new Image();
		img.src = 'public/slider' + i + '.png';
	}

	let sliderIndicator = QS(header, '.slider-indicator');
	sliderIndicator.innerHTML = new Array(informLen+1).join('<input type="radio" name="frame"><span></span>'); // IE11 not support String.repeat()
	sliderIndicator.style.width = (sliderIndicator.children.length * 12) + 30 + 'px'; // for IE11


	function trEnd() {
		header.removeEventListener('transitionend', trEnd);
		header.style.opacity = 1;
	};

	let frame = 0, step = 0, firstRun = 1;

	function renderFrame() {
		header.style.background = 'center / cover no-repeat url(public/slider' + frame + '.png)';
		sliderIndicator.children[frame*2].checked = true;
		for (let k in inform[frame]) {
			QS(header, '.slider-info-' + k).textContent = inform[frame][k];
		}
	}

	function checkSlider() {
		if (header.pause && step) {return;}
		if (header.pause && !step) {renderFrame();}
		step = step % 10;
		if (step == 0) {
			frame = frame % informLen;
			if (header.pause) {return;}
			if (!firstRun) {
				header.style.opacity = 0.6;
			}
			firstRun = 0;
			header.addEventListener('transitionend', trEnd);
			renderFrame();
			frame++;
		}
		step++;
		setTimeout(checkSlider, 500);
	};


	function checkEmail() {
		let msg = {
			false:
			'<svg width="32" height="32" viewBox="0 0 16 16">\
				<path fill="red" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>\
			</svg>\
			<span style="color: red;">&#160; Проверьте, пожалуйста, корректность Email</span>',
			true:
			'<svg width="32" height="32" viewBox="0 0 48 48">\
				<path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>\
				<path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"/>\
			</svg>'
		};

		let msgBlock = GID('leave-request-message-block');
		let progress = GID('progress');
		let emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let email = emailField.value.trim();
		let validate = emailReg.test(email);

		msgBlock.innerHTML = '';
		if (validate) {
			progress.style.display = 'block';
			setTimeout(function() {
				progress.style.display = 'none';
				msgBlock.innerHTML = msg[validate] + '<span style="color: #007200">&#160; Спасибо за участие! На адрес <strong> ' + email + ' </strong> отправлено письмо</span>';
			}, 2000);
		} else {
			msgBlock.innerHTML = msg[validate];
		}
		return validate;
	} // checkEmail

	QS(document,'.leave-request-send-btn').onclick = function() {
		checkEmail();
		emailField.focus();
	}
}();
