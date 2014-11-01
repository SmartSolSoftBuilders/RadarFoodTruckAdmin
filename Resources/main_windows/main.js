var win = Titanium.UI.currentWindow;

var pantalla = Titanium.UI.createView({
	backgroundImage: '/img/bg.png',
	backgroundRepeat: true,
	top:0,
	left:0,
	width: '100%',
	height: '100%',
	layout: 'vertical',
	zIndez:9999
});

var pantalla = Titanium.UI.createView({
	backgroundImage: '/img/bg.png',
	backgroundRepeat: true,
	top:0,
	left:0,
	width: '100%',
	height: '100%',
	layout: 'vertical',
	zIndez:9999
});

var barra = Titanium.UI.createImageView({
	backgroundImage: '/img/barra.png',
	top:0,
	height:'10%',
	width:'100%'
});

var imagen = Titanium.UI.createImageView({
	backgroundImage: '/img/hola.png',
	top:'5%',
	height:'50%',
	width:'50%'
});

var inicio = Titanium.UI.createView({
	backgroundImage: '/img/home.png',
	top:'2%',
	width:'80%',
	height:'40%',
	layout: 'vertical',
	
	
});

var compartir = Titanium.UI.createButton({
	top:'2%',
	backgroundImage: '/img/compartir.png',
	width:'80%',
	left:'10%',
	height:'30%',
});

var cuenta = Titanium.UI.createButton({
	top:'2%',
	backgroundImage: '/img/cuenta.png',
	width:'80%',
	left:'10%',
	height:'30%',
});

var perfil = Titanium.UI.createButton({
	top:'2%',
	backgroundImage: '/img/perfil.png',
	width:'80%',
	left:'10%',
	height:'30%',
});


compartir.addEventListener('click',function (e){
		Ti.API.info('Click en el botòn Eventos');	
		   var newcoord = require ('main_windows/coord');	
				
		});  


win.add(pantalla);
pantalla.add(imagen);
pantalla.add(inicio);
inicio.add(compartir);
inicio.add(cuenta);
inicio.add(perfil);

