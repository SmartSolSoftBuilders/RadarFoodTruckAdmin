 var longitude;
 var latitude;

Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
//Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
     
  if(Ti.Network.online){
        Ti.Geolocation.purpose = "Receive User Location";
        Titanium.Geolocation.getCurrentPosition(function(e){

            if (!e.success || e.error)
            {
                alert('no pudimos encontrar tu ubicacion');
                return;
            }
             longitude = e.coords.longitude;
             latitude = e.coords.latitude;

            alert("Coordenadas actualizadas");

        });
    }else{
        alert("se require acceso a internet");
    }


var win = Titanium.UI.currentWindow;

var usuario = win.name;

var id = win.id;


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
	left:'30%',
	height:'30%',
	color:'#000',
	text:'Lt: ' +latitude+ '\n Ln:'+longitude,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
});

var place = Titanium.UI.createLabel({
	top:'2%',
	color:'white',
	text:'Nombre de lugar',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});

var lugar = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var address = Titanium.UI.createLabel({
	top:'10%',
	color:'white',
	text:'DIRECCIÓN',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	width:'auto'
});
var direccion = Titanium.UI.createTextField({
	backgroundImage: '/img/boton.png',
	width:'90%',
	height:'15%',
	color:'#000',
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

var createReq = Titanium.Network.createHTTPClient();
createReq.onload = function()
{
	if (this.responseText == "fallo actualizacion")
	{
		enviar.enabled = true;
		enviar.opacity = 1;
		alert(this.responseText);
	} 
	else
	{
		var alertDialog = Titanium.UI.createAlertDialog({
		    title: 'Alert',
		    message: this.responseText,
		    buttonNames: ['OK']
		});
		alertDialog.show();
		alertDialog.addEventListener('click',function(e)
		{
			
		});
	}
};
enviar.addEventListener('click',function(e)
{
				enviar.enabled = false;
				enviar.opacity = 0.3;
				createReq.open("POST","http://s544443713.onlinehome.mx/truckAdmin/post_coord.php");
				var params = {
					id: id,
					latitud: latitude,
					longitud: longitude,
					lugar: lugar.value,
					direccion: direccion.value,
				};
				createReq.send(params);

});




win.add(pantalla);
pantalla.add(barra);
pantalla.add(liston);
pantalla.add(inicio);
inicio.add(ubicacion);
inicio.add(place);
inicio.add(lugar);
inicio.add(address);
inicio.add(direccion);
inicio.add(enviar);