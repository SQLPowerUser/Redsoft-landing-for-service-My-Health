!function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/roboto-v20-cyrillic_latin-regular.woff"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/app-func.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/phones.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/charts.png"},function(e,r,t){"use strict";t.r(r);t(5);t(10),function(){function e(e){return document.getElementById(e)}function r(e,r){return e.querySelector(r)}let t=r(e("leave-request"),"input");setTimeout((function(){t.value=""}),10);let n=e("header");function i(){let e=new Image;e.src="public/slider0.png",e.onload=function(){n.style.height=(n.clientWidth*this.height/this.width^0)+"px",l()}}document.body.onresize=i,i(),n.pause=!1,n.onmouseenter=function(e){this.pause=!0,l()},n.onmouseleave=function(e){this.pause=!1,l()};let A=[{caption:"Расширяем возможности предоставления качественных медицинских услуг",text:"«Дневник здоровья» – новый сервис для самоконтроля показателей состояния здоровья, разработанный для участников программы «Мое здоровье»."},{caption:"Следить за здоровьем станет проще",text:"Скоро вы сможете находиться на связи со своим лечащим врачом независимо от своего местоположения, вести дневник мониторинга самочувствия, получать рекомендации по плану лечения и многое другое."}],o=r(n,".slider-indicator");o.innerHTML=new Array(A.length+1).join('<input type="radio" name="frame"><span></span>'),o.style.width=12*o.children.length+30+"px";let a=0,s=0;function l(){if(!n.pause||!s){if(0==(s%=10)){if(a%=A.length,n.pause)return;n.style.background="center / cover no-repeat url(public/slider"+a+".png)",o.children[2*a].checked=!0;for(let e in A[a])r(n,".slider-info-"+e).textContent=A[a][e];a++}s++,setTimeout(l,500)}}e("leave-request-send-btn").onclick=function(){(function(){let r={false:'<svg width="32" height="32" viewBox="0 0 16 16">\t\t\t\t<path fill="red" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>\t\t\t</svg>\t\t\t<span style="color: red;">&#160; Проверьте, пожалуйста, корректность Email</span>',true:'<svg width="32" height="32" viewBox="0 0 48 48">\t\t\t\t<path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>\t\t\t\t<path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"/>\t\t\t</svg>'},n=e("leave-request-message-block"),i=e("progress"),A=t.value.trim(),o=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(A);return n.innerHTML="",o?(i.style.display="block",setTimeout((function(){i.style.display="none",n.innerHTML=r[o]+'<span style="color: #007200">&#160; Спасибо за участие! На адрес <strong> '+A+" </strong> отправлено письмо</span>"}),2e3)):n.innerHTML=r[o],o})()||t.focus()}}()},function(e,r,t){var n=t(6);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};t(9)(n,i);n.locals&&(e.exports=n.locals)},function(e,r,t){r=e.exports=t(7)(!1);var n=t(8),i=n(t(0)),A=n(t(1)),o=n(t(2)),a=n(t(3));r.push([e.i,"@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url("+i+') format("woff")}*,*:before,*:after{box-sizing:border-box;outline:0}body,p,ul,li{margin:0;padding:0;font:16px "Roboto";line-height:1.5;color:#60759D}li{list-style-type:none}a{text-decoration:none;color:#fff}button{border:0;font:16px "Roboto"}input[type="radio"]{display:none}[class$=caption]{font-size:2.25em}header{position:relative;display:flex;align-items:center;justify-content:center;justify-content:flex-start;flex-direction:column;color:#fff;min-height:640px}.nav{display:flex;align-items:center;justify-content:center;width:1160px;margin-top:20px}.nav a{margin-right:50px;position:relative}.nav a:not(:last-child):hover:before{font-size:1.2em;position:absolute;content:"•";color:#fff;top:0;left:0;bottom:0;right:0;width:5px;height:4px;margin:15px auto}.nav a[href="#leave-request"]{display:flex;align-items:center;justify-content:center;border-radius:30px;width:200px;height:60px;background:rgba(0,0,0,0);color:#fff;margin:0 0 0 auto;border:2px solid #5489c3}.nav a[href="#leave-request"]:hover{background:#5489c3}.nav-logo{width:400px;height:40px;background:no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAMAAACMwkUuAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAK/D0txLQIvsD6JnkDuwJBqFDlBb4woyBW1LfVsvHGhB0nLwmp9zUSGIeszyH2E1AMzCvejeraW9CAieKAAAJiklEQVRYw+yW2ZKiMBSGD6ASUGkU0Vbc2gWXcdfR+d//xeacGBF6nOVmLqZqvqquog/JT74kBOnPKS8Q0QVqTP844xLe6YZdnf511r06hRuX/vOXWXYm70divOV2sj2R5m1VnVSZSbUbZs2quhL1KI/baehq9y0rhb1toWH9FlU10SOsmYWZSuubeV60/zSAqB/qjMuNPrFvfNGUrh9j7hDZAIL5iI5TufJ1+9kwhsGZujK2jo0H9sSjJ9tHu6FFRrnimIYdEqxc2JcRMe8Bssq1LGKpytIb8hKOSrkBzLiwUoFFBbbPEan2mlZAHCig3U0BJ+DihvXPcm0zgQPMQ6KuguKCwJUPenLL2rVHJPT50pFSDGcpc9AG7KxrwyPqOVC2oLu9E7kVwL7nxFzweN7yAyix2gfiA+XpKTj+nQCIaIigu15xkOIO+9F7jI5HX4H2xrUYdznUamfYKy4ws56PqUdPRiepHkrAihjLh5ovZ1y63Y2XDqZfZ5awrKB2ImpA3SzNbJlgRzKb86Nu4nYTJGtq1bBourpFc8rBIuIURSKoVb0+Zt4sjiUbV9miA3CWbM0hpnXqA10ydIE+sW+FDOEZgxdH8MlGJC/aFmpLGkvPNn1DvCfDCg6HfUE6JsMVfkhbxF9zW9WiUYxqFuwg0iJHyjNHMiJDAw45aBDp1fbXxJTQFhHVkwhL7rBUQeRthyn9yCjR26a8yDRPIqKHsCFDD3FXi7TIMEBK1EGQjfLdiERZsI+qTulbghtmImsytJE+ROop2iRMcyKLnWx5IzJ4LpEEFwmptQUu8liF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")}.slider-info{width:745px;text-align:center;margin:92px 0 45px 0}.slider-info p{color:#fff}.slider-info-text{font-size:1.5em}.slider-learn-more{display:flex;align-items:center;justify-content:center;border-radius:30px;width:180px;height:60px;background:#e70067;color:#fff}.slider-learn-more:hover{background:#C9005A}.slider-indicator{display:flex;align-items:center;justify-content:center;border:1px solid #5489c3;border-radius:8px;height:16px;position:absolute;bottom:47px;margin:auto;left:0;right:0}input[type="radio"]+span{width:24px;height:1px;background:center no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABAQMAAADtt7wcAAAABlBMVEVUicNol8rpA83OAAAAC0lEQVQI12NoYAQAAQQAgqHjbh4AAAAASUVORK5CYII=")}input[type="radio"]:checked+span{background:center no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABAQMAAADtt7wcAAAAA1BMVEX///+nxBvIAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=")}#what-is-it{display:flex;align-items:center;justify-content:center;height:950px;position:relative}#what-is-it img{min-width:335px}#what-is-it li{padding-left:14px;margin:20px 0}#what-is-it li:before{font-size:1.5em;position:absolute;content:"•";color:#16AFE0;margin:-6px 0 0 -14px}#what-is-it a[href="#leave-request"]{display:flex;align-items:center;justify-content:center;border-radius:30px;width:200px;height:60px;background:#e70067;color:#fff;margin-top:38px}#what-is-it a[href="#leave-request"]:hover{background:#C9005A}.what-is-it-info{margin:-86px 0 0 30px}.what-is-it-caption{margin:28px 0}.what-is-it-text{width:460px}.what-is-it-pulse-chart{position:absolute;bottom:-150px;right:20px}#application-functions{display:flex;align-items:center;justify-content:center;flex-direction:column;justify-content:flex-start;position:relative;height:788px;background:center/cover no-repeat url('+A+")}#application-functions ul{display:flex;justify-content:space-between;width:1030px;margin-bottom:70px}#application-functions li{flex:0 0 255px;height:150px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center}#application-functions li p{width:82px;height:82px;border:1px solid #C0E4F5;border-radius:50%}.application-functions-caption{margin:150px 0 50px 0}.application-functions-planning-medicine{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+DvtG1DAAAAJXRSTlMABfE3sngJv+Et9evJGZ58Rw+NgD0jKvjl0LiTj4hwZGJEMBOpUb5MiwAAAWlJREFUOMt90eluwyAQBOBZXAOmgMFn7qvZ93/F2okItZDqPxb6ht2RQPHRWetOfo6lf4m+FUr+4xXQfOdE6WN9kzlR+sPsjKWUKB3e0sT3tKX0NTBySD1KRzVrsafwLBKrD1afaOovMbpixupRHFrTLod6jhTuqenHMbCDV4tzHffMVjai2+x33AV9XB0XMU7mhlZnj4PD1bD6WR29JtrVyy/3E8xXSIeXY5qtNWMlzslhD64zEqv/HFVLlfePSnxRcugWgd/3lfbmtMDGcTJeq5c7Dku5jT+8r6hVx3c/aTp3sMlxXt7XWDs3wPu+xJVZDMmhe9Q7It2/+yk2V7ghJn+Vu5lpFJfVcdShYwdkRycaaZn3cXUoD8fDX4dU3w3dA8V5cSxvdRCf+TkBBBfjpZ/opG3qt008A+2Fnivk/cUMHsn6j5eJO09LoPTc1JqdeWQvE/JWj1sve2y8SIi233iR6LQ+l/4LmQ0YhBY5A4EAAAAASUVORK5CYII=)}.application-functions-doctor-notice{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAMAAACvkzHFAAAAeFBMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AJuxGoAAAAJ3RSTlMA8HAwYB4QaVAV+OvU8+7bv5NXPjXjrE09GxgLt7SGdlsqyqKcfAmXZdk5AAABCUlEQVQ4y7XR2Y6EIBBA0UJEFPd933qr///DiWPGKQidfurzVuEqBMAkagGfcOTfbcRgbQZ6tCbkloaHDWn69IqCObiStAciiMIKdFUYnTWJGNfPzo7EiKZCm4uJJMSr9E/lC96QCf5JpD1Z8c69E7/jaksGlZMpV4OlcbGnN4aupclrbazJXyP8VUI2w2VLYc6gPJci6NzDNgJbyGWVsDAYN/fQ/T890jtsRYECTC3u2ml2bMH0VHSaMlBPMDU3Oi0J3BowpQ86FSgeqZmMKOm4YytxNJoKO22O1w4r883R07/xPJRACZnFjinOpCBJrJiNioV1I4pu5yDYoUMax440fsLsEv9Y/gGqqBMpPM8VbgAAAABJRU5ErkJggg==)}.application-functions-keeping-diary{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAh1BMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+BRuFAnAAAALHRSTlMABND7oA9wLBrxlUEI5uS3sYowwGheDcWagFXe2MxikW5OPRPq4KmlpHlbR4Wt/EAAAAGySURBVDjLhZPZkpswEEWvEPvOYHYwNjhexv3/3xdJxhFKxZnz0t3FQaJvFVB4RZNcrHvPsMH6u3VJmsLDG8cmXrZhfqGkgqJK6JKHbcnJdqDwR16s6vWopBsT9UZlpA5dCz76somnYMGbB+WM5fTYxi9nCaZYNB2doTlQUdABG6mLM3VAHdyxZyaa8cZnPu5BjSN5hhSnaaynlVceHXEbYOIZL1kNhhusq6EwR8D03HF2tZCEhlSSoNTzkfwwQWpKVlNVjbXbVkgppsyUbMDeSXPAsglhwP4npRkLQjz/ZOmfXNdNpJSI5uRD0FN/pifY0GzSiSQFUKjmJHcdR9YMTH5/D4VLjkB2spILqT97Okp7StZNwg4pLRSuycRUxDzfpC9BDdSySumcxTn33ll0ryJpgVY1BxW4KopQtfESRdEgtxtEs8Qqbx01y/n3v3L65jmDtrKXZUo9z4yg45JXL2mc59HaziljGMSZCgb2L4H9yjYTjgm7yh01HV31XdpqyWa7oTUd/T9lNRR1Rg98oOKWL6tviTU+8gxSD/DSIMJn1PNImZ9RN8k7f6DO8xp/8RsfiSL7a6ck/wAAAABJRU5ErkJggg==)}.application-functions-remote-provision{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAMAAADOixOHAAAAe1BMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+C2fgFLAAAAKHRSTlMA8GCgsB/hMG/6uepBFOYFqBf27cW8c04K18plz52Wh2lFgVV7Ny4lhjLSHQAAAPxJREFUKM+FkuuSgyAMRgMUFUTxWrVW2+1lm/d/wq1MOrDMtD2/MmeUQPKB41wyR6sLCCjUyh1zeQr9D9ZUiT70+zyqoq/oT0Luy0kQOxQD6bMq9c5zwM7dyeDF1nIrRxillPY30ZvXeuwQ1Qh8ggkRm8Fg+vR5dlUmfQBYCTJN0+oIDX96xjnbml+oXZYA607Fy9/w4f0x0S/f4+w9n1vytlFV4LOcvMEl975Vy+aVEIfkjpWpl60CVg1AXnC7Tv2N/fMMHFdMVn+O92ODJu7rqHIb39Mh7/G7iGAONDfCz43mTPg5014I2su7PX7ce5yTL7mKc/glt+9y/gdB2RZKlCsFugAAAABJRU5ErkJggg==)}.application-functions-communication-doctor{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+BOWY8+AAAAL3RSTlMAYPAgL9CBoeEF9p3y1rasfWxZ6Yp3Pwv77MqUaFIUsKdyZRzElzkmvTMP3QmWSklAj4UAAAHbSURBVDjLdVPXlqswDBTd2NTQIbCQXnZX//9315LJYXm48yB5dCbySA4AeWyvEGUIjCkoiPtMchysFVmkuBR6YtH0EjCLB4rWJT3riC8iNbqUAiOwLR2eqOIHgIsOqyO+R/wRjDHk3SZActDiJtCopNoEkhyN6U7wvuoJHMzofJBc2gvuDcUjVkCNah2bojKCE6fsSfMde1Ykoob7o5iA4AXGA02Wt0IkMCYdEmS/fNMAmPgrVOvrLimmJfajwnmIYjL9m3grHnTbT1Rrm5i2V4CzF1OPHe544EHwSuks87UeOgQyK0zhbNL1YrLFtujHQbpreCw43XB4uq4b6ZV8BTuBZXP66TlJEny5Go2+4psOGQmoLzlY0NJHJAwQ3TI+8RVrtSVBw24bmFbfkxFw35d+lv9AJTyqPBh6engrkt+1Ih1ejsPMb5W/IsGRSy/xPjwrOfNDijbfegeeDs4s0aDwmwr7Y7gJTnrMOoqtBa/3PhqzzpsqPILBQfGipi4N6a8URzf9Au8EMrZSKgt9FvhFY5Z+M0uvHf4qaomlWbWn8wZNSUCKHIyg64Q43S8fY/NsBNtj2fOyuI3FlJf6QiYGQwy2sv7i8gUqyj5swBx6e48SwlJ8SJzDPzU8KDGpdBHLAAAAAElFTkSuQmCC)}.application-functions-get-notify{background:center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAAAWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AWr+AsfHJQAAAALXRSTlMA0FBwsPAQMKH4QOnAya2PgOKEaWAf9dM2DGMoG7SciSQW2Kh4SVlSu3vBki7oyq+tAAABhklEQVQ4y53S23KrIBiG4Q8BBdxFTTTuzb5dq97/7fWHyaRpoid9TxhmHmBgwHJBJV3ZdQUoFbiKDDCe6wud96gTHKaPGgQSp5C5dGPYIyN4q/MiLAjIPYBDjXOCp0RV0bwIIwLBZefNsuMCqHeumoA4xUDORguYDseeEWjmew0EP2Rxok1ggYqKtu8JxAVcRUwAPt+0cCCf+agnAswDzrOCx5DG3KUqAp9CKIM7SIeDBX4qXCqwt3CdEwtSKVML9hNwLwmZqywsaJOktUBwPLp4rj3gjkhxB695Z7AbsCd4WwRcQFXKRsMKqPnGxesV8NNfgK/YljqACmKpdZj+BqyKqLIBFf2nv2RCg6fq2a41egL1MRhjLr+BP/tDFGuOrgNynWVZWPov4JJnsY9xBNgW1PH2AoA6SmCLj0qpUzm9AXS6BcCzfLPJw0+8A/yzmw8DqCRfAictpdRzKWUZTkvAD4KrNvQKXAJLgNrphn5HelwF2B5Lxj72q4BEhPd8+QOuPZ76BuiqGr6kUXRCAAAAAElFTkSuQmCC)}#capabilities{height:1012px}.capabilities-caption{margin:160px 0 100px 0;text-align:center}.capabilities-info{display:flex;align-items:center;justify-content:center;justify-content:space-between;max-width:1182px;margin:auto}.capabilities-info li{position:relative;width:550px;margin:0 0 75px 100px}.capabilities-info li p{background:#fff}.capabilities-number{font-size:3em;position:absolute;left:-100px;top:-34px;display:flex;align-items:center;justify-content:center;height:120px;width:120px;color:#16AFE0;border:1px solid #C0E4F5;border-radius:50%;z-index:-1}.capabilities-head{font-size:1.5em;padding:10px}.capabilities-text{padding:0 10px}.capabilities-phones-img{flex:0 1 530px;height:608px;background:center/contain no-repeat url("+o+")}#specialist{height:640px;background:#F1F2FA;display:flex}.specialist-charts-img{flex:0 0 50%;position:relative;top:-83px;margin-right:24px;background:top/contain no-repeat url("+a+')}.specialist-info li{padding-left:14px;margin:0 0 18px 0}.specialist-info li:before{font-size:1.5em;position:absolute;content:"•";color:#16AFE0;margin:-6px 0 0 -14px}.specialist-caption{padding:78px 0 30px 0}#leave-request{height:580px;background:#E3E7F3;color:#222;text-align:center}.leave-request-caption{padding:140px 0 40px 0}.leave-request-send{display:flex;width:560px;margin:50px auto 20px auto}.leave-request-email-field{font:16px "Roboto";width:360px;border:1px solid #4F699B;border-radius:30px;padding:0 25px;background:transparent}#leave-request-send-btn{display:flex;align-items:center;justify-content:center;border-radius:30px;width:160px;height:60px;background:#e70067;color:#fff;cursor:pointer;margin-left:40px}#leave-request-send-btn:hover{background:#C9005A}#leave-request-message-block{display:flex;align-items:center;justify-content:center}#progress{display:none;height:20px;width:560px;margin:auto;background-image:repeating-linear-gradient(135deg, #fff, #abc 10px, #fff 10px, #fff 19px);background-size:80px 80px, 100% 100%;border:1px solid #eee;border-radius:10px;animation:progressBar01 2s linear infinite}@keyframes progressBar01{from{background-position:0 0}to{background-position:80px 0}}footer{position:relative;display:flex;align-items:center;justify-content:center;justify-content:flex-start;flex-direction:column;color:#fff;background:#39649D;height:220px;border-top:8px solid #375F99}footer .nav{margin:0;height:136px;border-bottom:1px solid #335B91}address{font-style:normal;margin:auto}.address-Redsoft{color:#e70067}@media screen and (min-width: 1680px){.what-is-it-pulse-chart{right:50px}.specialist-info{margin-left:-14px}}@media screen and (min-width: 1900px){.what-is-it-pulse-chart{right:90px}}\n',""])},function(e,r,t){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=function(e,r){var t=e[1]||"",n=e[3];if(!n)return t;if(r&&"function"==typeof btoa){var i=(o=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),A=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[t].concat(A).concat([i]).join("\n")}var o,a,s;return[t].join("\n")}(r,e);return r[2]?"@media ".concat(r[2],"{").concat(t,"}"):t})).join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var A=this[i][0];null!=A&&(n[A]=!0)}for(var o=0;o<e.length;o++){var a=e[o];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),r.push(a))}},r}},function(e,r,t){"use strict";e.exports=function(e,r){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||r?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,r,t){"use strict";var n,i={},A=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}();function a(e,r){for(var t=[],n={},i=0;i<e.length;i++){var A=e[i],o=r.base?A[0]+r.base:A[0],a={css:A[1],media:A[2],sourceMap:A[3]};n[o]?n[o].parts.push(a):t.push(n[o]={id:o,parts:[a]})}return t}function s(e,r){for(var t=0;t<e.length;t++){var n=e[t],A=i[n.id],o=0;if(A){for(A.refs++;o<A.parts.length;o++)A.parts[o](n.parts[o]);for(;o<n.parts.length;o++)A.parts.push(W(n.parts[o],r))}else{for(var a=[];o<n.parts.length;o++)a.push(W(n.parts[o],r));i[n.id]={id:n.id,refs:1,parts:a}}}}function l(e){var r=document.createElement("style");if(void 0===e.attributes.nonce){var n=t.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(t){r.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(r);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var p,c=(p=[],function(e,r){return p[e]=r,p.filter(Boolean).join("\n")});function u(e,r,t,n){var i=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=c(r,i);else{var A=document.createTextNode(i),o=e.childNodes;o[r]&&e.removeChild(o[r]),o.length?e.insertBefore(A,o[r]):e.appendChild(A)}}function f(e,r,t){var n=t.css,i=t.media,A=t.sourceMap;if(i&&e.setAttribute("media",i),A&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,g=0;function W(e,r){var t,n,i;if(r.singleton){var A=g++;t=d||(d=l(r)),n=u.bind(null,t,A,!1),i=u.bind(null,t,A,!0)}else t=l(r),n=f.bind(null,t,r),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else i()}}e.exports=function(e,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=A());var t=a(e,r);return s(t,r),function(e){for(var n=[],A=0;A<t.length;A++){var o=t[A],l=i[o.id];l&&(l.refs--,n.push(l))}e&&s(a(e,r),r);for(var p=0;p<n.length;p++){var c=n[p];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}},function(e,r,t){var n={"./app-func.png":1,"./charts.png":3,"./fav.png":11,"./logo-gray.png":12,"./mobile-phone.png":13,"./phones.png":2,"./pulse-chart.png":14,"./roboto-v20-cyrillic_latin-regular.woff":0,"./slider0.png":15,"./slider1.png":16};function i(e){var r=A(e);return t(r)}function A(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=A,e.exports=i,i.id=10},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/fav.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/logo-gray.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/mobile-phone.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/pulse-chart.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/slider0.png"},function(e,r,t){"use strict";t.r(r),r.default=t.p+"public/slider1.png"}]);