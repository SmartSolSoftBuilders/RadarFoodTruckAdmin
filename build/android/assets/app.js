Titanium.UI.setBackgroundColor("#fff");var tabGroup=Titanium.UI.createTabGroup(),main=Titanium.UI.createWindow({theme:"Theme.NoActionBar"}),mainTab=Titanium.UI.createTab(),login=Titanium.UI.createWindow({title:"Login",url:"main_windows/login.js"}),loginTab=Titanium.UI.createTab({title:"Login",window:login});tabGroup.addTab(loginTab),tabGroup.open(),Ti.App.addEventListener("grantEntrance",function(a){main.tabBarHidden=!0,main.title="CONTENIDO",main.url="main_windows/main.js",main.name=a.name,main.id=a.id,mainTab.window=main,tabGroup.addTab(mainTab),tabGroup.removeTab(loginTab)});