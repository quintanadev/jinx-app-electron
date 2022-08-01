const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
  const size = screen.getPrimaryDisplay().size;
  const win = new BrowserWindow({
    width: size.width * 0.9,
    height: size.height * 0.8,
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
