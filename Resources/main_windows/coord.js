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

var barra = Titanium.UI.createImageView({
	backgroundImage: '/img/barra.png',
	top:0,
	height:'10%',
	width:'100%'
});

var liston = Titanium.UI.createImageView({
	backgroundImage: '/img/liston.png',
	top:'10%',
	left:0,
	height:'10%',
	width:'40%'
});


var inicio = Titanium.UI.createView({
	backgroundImage: '/img/bgc.png',
	top:'5%',
	height:'80%',
	width:'80%',
	layout: 'vertical',
});

var ubicacion = Titanium.UI.createLabel({
	top:'2%',
	backgroundImage: '/img/fondocoord.png',
	backgroundRepeat: true,
	width:'auto',
	left:'10%',
	height:'30%',
	color:'#000',
	text:'Lt:19.28984848848 \n Lg:-19.28984848848',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
});

var nombre = Titanium.UI.createLabel({
	top:'2%',
	color:'white',
	text:'Nombre de lugar',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});

var name = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var direccion = Titanium.UI.createLabel({
	top:'10%',
	color:'white',
	text:'DIRECCIÓN',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});
var address = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var enviar = Titanium.UI.createButton({
	top:'5%',
	backgroundImage: '/img/enviar.png',
	width:'50%',
	left:'30%',
	height:'30%',
});


enviar.addEventListener('click',function(e)
{
  if(Ti.Network.online){
        Ti.Geolocation.purpose = "Receive User Location";
        Titanium.Geolocation.getCurrentPosition(function(e){

            if (!e.success || e.error)
            {
                alert('no pudimos encontrar tu ubicacion');
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;

            alert("latitude: " + latitude + "\nlongitude: " + longitude+ "\n ubicacion compártida");

        });
    }else{
        alert("se require acceso a internet");
    }
});



win.add(pantalla);
pantalla.add(barra);
pantalla.add(liston);
pantalla.add(inicio);
inicio.add(nombre);
inicio.add(name);
inicio.add(direccion);
inicio.add(address);
inicio.add(enviar);