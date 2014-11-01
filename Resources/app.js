Titanium.UI.setBackgroundColor('#fff');
var tabGroup = Titanium.UI.createTabGroup();
var main    = Titanium.UI.createWindow({
});
var mainTab = Titanium.UI.createTab();

var login = Titanium.UI.createWindow({
	title:'Login',
	url:'main_windows/login.js',
	
});

var loginTab = Titanium.UI.createTab({
	title:"Login",
	window:login
});	

var account = Titanium.UI.createWindow({
    title:'New Account',
    url:'main_windows/account.js'
});
 
var accountTab = Titanium.UI.createTab({
    title:'New Account',
    window:account
});


tabGroup.addTab(loginTab);
tabGroup.open();

Ti.App.addEventListener('grantEntrance', function(event)
{
    main.tabBarHidden   = true;
    main.title      = 'CONTENIDO';
    main.url        = 'main_windows/main.js';
    main.name       = event.name;
    main.email      = event.email;
    main.longitud   = event.longitud;
    main.latitud   = event.latitud;
    mainTab.window  = main;
     
    tabGroup.addTab(mainTab);
 
    tabGroup.removeTab(loginTab);
});