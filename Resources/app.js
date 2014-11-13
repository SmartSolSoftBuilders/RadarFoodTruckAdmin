Titanium.UI.setBackgroundColor('#fff');
var tabGroup = Titanium.UI.createTabGroup();
var main    = Titanium.UI.createWindow({
	theme: "Theme.NoActionBar",
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


tabGroup.addTab(loginTab);
tabGroup.open();

Ti.App.addEventListener('grantEntrance', function(event)
{
    main.tabBarHidden   = true;
    main.title      = 'CONTENIDO';
    main.url        = 'main_windows/main.js';
    main.name       = event.name;
    main.id         = event.id;
    mainTab.window  = main;
     
    tabGroup.addTab(mainTab);
    tabGroup.removeTab(loginTab);
});