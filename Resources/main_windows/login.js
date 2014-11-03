var win = Titanium.UI.currentWindow;

var pantallas = Titanium.UI.createView({
	backgroundImage: '/img/bg.png',
	backgroundRepeat: true,
	top:0,
	left:0,
	width: '100%',
	height: '100%',
	layout: 'vertical',
	zIndez:9999
});

var imagen = Titanium.UI.createImageView({
	backgroundImage: '/img/ini.png',
	top:'5%',
	height:'50%',
	width:'50%'
});

var inicio = Titanium.UI.createView({
	backgroundImage: '/img/home.png',
	top:'5%',
	width:'60%',
	height:'40%',
	layout: 'vertical',
	
	
});

var usuario = Titanium.UI.createLabel({
	top:'10%',
	color:'white',
	text:'USUARIO',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});

var username = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var contrasena = Titanium.UI.createLabel({
	top:'10%',
	color:'white',
	text:'CONTRASEÑA',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});
var password = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var loginBtn = Titanium.UI.createButton({
	top:'10%',
	backgroundImage: '/img/ir.png',
	width:'50%',
	left:'30%',
	height:'30%',
});


win.add(pantalla);
pantalla.add(imagen);
pantalla.add(inicio);
inicio.add(usuario);
inicio.add(username);
inicio.add(contrasena);
inicio.add(password);
inicio.add(loginBtn);



var loginReq = Titanium.Network.createHTTPClient();

loginReq.onload = function()
{
    var json = this.responseText;
    var response = JSON.parse(json);
    if (response.logged == true)
    {
        username.blur();
        password.blur(); 
        Ti.App.fireEvent('grantEntrance', {
            name:response.name,
            email:response.email,
            latitud:response.latitud,
            longitud:response.longitud
        });
        win.close();
    }
    else
    {
        alert(response.message);
    }
};

loginReq.onerror = function()
{
	alert("Error de red");
};




loginBtn.addEventListener('click',function(e)
{
	if (username.value != '' && password.value != '')
	{
		loginReq.open("POST","http://yyx.zz.vc/post_auth.php");
		var params = {
			username: username.value,
			password: Ti.Utils.md5HexDigest(password.value)
		};
		loginReq.send(params);
	}
	else
	{
		alert("se requiere usuario y contraseña");
	}
});