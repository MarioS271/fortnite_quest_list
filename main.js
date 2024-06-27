const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        minWidth: 1350,
        height: 900,
        minHeight: 600,
        center: true,
        autoHideMenuBar: true,
        devTools: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(__dirname + '/index.html');
    win.maximize();
}

app.whenReady().then(() => {
    createWindow();
});

app.on("browser-window-created", (event, window) => {
    window.setIcon(__dirname + '/icon.ico');
})