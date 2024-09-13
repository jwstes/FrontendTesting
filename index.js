const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const bodyParser = require('body-parser');

const tools = require('./lib/tools');

const app = express();
const port = 3000;

app.use(session({
    secret: 'superS3cretL0!l!',
    resave: false,
    saveUninitialized: false
}));

app.engine('html', require('ejs').renderFile);
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set('layout', 'layout/main');
app.use('/static', express.static(path.join(__dirname, 'site')))
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/login', async (req, res) => {
    var _0x4d8e7c=_0xad71;function _0xad71(_0x28872b,_0x7d3e2c){var _0x216d8f=_0x216d();return _0xad71=function(_0xad7192,_0x1186c0){_0xad7192=_0xad7192-0x1de;var _0x154ee8=_0x216d8f[_0xad7192];return _0x154ee8;},_0xad71(_0x28872b,_0x7d3e2c);}function _0x216d(){var _0x14deb6=['2995472iDzJAq','28pSWGzL','17GenoZn','23481TBXRgE','1710885zheSMC','render','8377857KZuYey','9564678gSkczj','layout/main','60UVKpew','sessionID','1426310QXoUim','login','session','39128ijemNS','90kIcoCZ'];_0x216d=function(){return _0x14deb6;};return _0x216d();}(function(_0x355422,_0x45a09b){var _0x2bb246=_0xad71,_0x109e81=_0x355422();while(!![]){try{var _0x5d5ce8=parseInt(_0x2bb246(0x1e5))/0x1*(parseInt(_0x2bb246(0x1e1))/0x2)+parseInt(_0x2bb246(0x1e6))/0x3*(parseInt(_0x2bb246(0x1ec))/0x4)+-parseInt(_0x2bb246(0x1de))/0x5+parseInt(_0x2bb246(0x1ea))/0x6+-parseInt(_0x2bb246(0x1e4))/0x7*(-parseInt(_0x2bb246(0x1e3))/0x8)+-parseInt(_0x2bb246(0x1e9))/0x9+-parseInt(_0x2bb246(0x1e2))/0xa*(parseInt(_0x2bb246(0x1e7))/0xb);if(_0x5d5ce8===_0x45a09b)break;else _0x109e81['push'](_0x109e81['shift']());}catch(_0x31bd3b){_0x109e81['push'](_0x109e81['shift']());}}}(_0x216d,0xe20c4));var sessionID=await tools['randomString']();req[_0x4d8e7c(0x1e0)][_0x4d8e7c(0x1ed)]=sessionID,res[_0x4d8e7c(0x1e8)](_0x4d8e7c(0x1df),{'layout':_0x4d8e7c(0x1eb),'sessionID':sessionID});
})
app.post('/login', async (req, res) => {
    function _0xca8e(){var _0x387273=['98OaDEHc','135nkZwJo','headers','1044ABzfeX','_sid','36704KSqJly','12098966xSxBvM','472058HCcwXx','197328cXAveZ','135880yKiWdz','body','13665FcvOet','lol','happy','8RogolE','status','send','699423lliCoQ','password'];_0xca8e=function(){return _0x387273;};return _0xca8e();}var _0x45f8c8=_0x3a5a;function _0x3a5a(_0x21c46f,_0x4986a7){var _0xca8ea4=_0xca8e();return _0x3a5a=function(_0x3a5a01,_0x21ffa0){_0x3a5a01=_0x3a5a01-0x1e5;var _0x2344c7=_0xca8ea4[_0x3a5a01];return _0x2344c7;},_0x3a5a(_0x21c46f,_0x4986a7);}(function(_0x725c2c,_0x2af871){var _0x1608e6=_0x3a5a,_0x201cab=_0x725c2c();while(!![]){try{var _0x359d57=parseInt(_0x1608e6(0x1f7))/0x1+-parseInt(_0x1608e6(0x1e5))/0x2+parseInt(_0x1608e6(0x1ee))/0x3*(-parseInt(_0x1608e6(0x1eb))/0x4)+-parseInt(_0x1608e6(0x1e8))/0x5*(parseInt(_0x1608e6(0x1f3))/0x6)+-parseInt(_0x1608e6(0x1f0))/0x7*(parseInt(_0x1608e6(0x1f5))/0x8)+-parseInt(_0x1608e6(0x1f1))/0x9*(parseInt(_0x1608e6(0x1e6))/0xa)+parseInt(_0x1608e6(0x1f6))/0xb;if(_0x359d57===_0x2af871)break;else _0x201cab['push'](_0x201cab['shift']());}catch(_0x1e7c2f){_0x201cab['push'](_0x201cab['shift']());}}}(_0xca8e,0x40500));var data=req[_0x45f8c8(0x1e7)],headers=req[_0x45f8c8(0x1f2)];if(headers[_0x45f8c8(0x1f4)]){if(headers['_sid']==req['session']['sessionID']){var username=data['username'],password=data[_0x45f8c8(0x1ef)],time=data['t'],token=data['a'];token==req['session']['token']?username==_0x45f8c8(0x1e9)&&password==_0x45f8c8(0x1ea)?res[_0x45f8c8(0x1ec)](0xc8)[_0x45f8c8(0x1ed)]({'status':0xc8,'authenticated':!![],'t':Date['now']()}):res['status'](0x191)[_0x45f8c8(0x1ed)]({'status':0x191}):res[_0x45f8c8(0x1ec)](0x191)[_0x45f8c8(0x1ed)]({'status':0x191});}else res[_0x45f8c8(0x1ec)](0x191)['send']({'status':0x191});}else res['status'](0x191)[_0x45f8c8(0x1ed)]({'status':0x191});
})

app.post('/getToken', async (req, res) => {
    function _0x9496(){var _0xf3115e=['680920XbNXAX','7RbCzSE','headers','Strict','9795712SrjUkQ','randomString','1208732KXKmKH','_sid','send','5859774PEsNxA','932294hqZHHR','status','3936716rNOJlC','_token','session','token','now','2451828CrMeAx','sessionID'];_0x9496=function(){return _0xf3115e;};return _0x9496();}var _0x88774a=_0x2074;(function(_0x335239,_0x5a842f){var _0x28fcf7=_0x2074,_0x1235be=_0x335239();while(!![]){try{var _0x1f771c=parseInt(_0x28fcf7(0xaa))/0x1+-parseInt(_0x28fcf7(0xa6))/0x2+-parseInt(_0x28fcf7(0xb1))/0x3+parseInt(_0x28fcf7(0xac))/0x4+parseInt(_0x28fcf7(0xb3))/0x5+-parseInt(_0x28fcf7(0xa9))/0x6+parseInt(_0x28fcf7(0xb4))/0x7*(parseInt(_0x28fcf7(0xb7))/0x8);if(_0x1f771c===_0x5a842f)break;else _0x1235be['push'](_0x1235be['shift']());}catch(_0x25e5fb){_0x1235be['push'](_0x1235be['shift']());}}}(_0x9496,0xd6902));var data=req['body'],headers=req[_0x88774a(0xb5)];function _0x2074(_0x428b8b,_0x654f34){var _0x94961b=_0x9496();return _0x2074=function(_0x2074b1,_0x2d4e5b){_0x2074b1=_0x2074b1-0xa6;var _0x5045d9=_0x94961b[_0x2074b1];return _0x5045d9;},_0x2074(_0x428b8b,_0x654f34);}if(headers[_0x88774a(0xa7)]){if(headers[_0x88774a(0xa7)]==req[_0x88774a(0xae)][_0x88774a(0xb2)]){var bearerToken=await tools[_0x88774a(0xb8)]();res['cookie'](_0x88774a(0xad),bearerToken,{'httpOnly':![],'secure':![],'sameSite':_0x88774a(0xb6),'expires':new Date(Date[_0x88774a(0xb0)]()+0x5265c00)}),req[_0x88774a(0xae)][_0x88774a(0xaf)]=bearerToken,res[_0x88774a(0xab)](0xc8)['send']({'status':0xc8,'t':Date[_0x88774a(0xb0)]()});}else res[_0x88774a(0xab)](0x191)[_0x88774a(0xa8)]({'status':0x191});}else res[_0x88774a(0xab)](0x191)[_0x88774a(0xa8)]({'status':0x191});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})