const {app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        width: 350,
        height: 600
    });
    ventana.loadFile('index.html')
}

function closeWindow(){
    ventana.close()
}

app.whenReady().then(createWindow)