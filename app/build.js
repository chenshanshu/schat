var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: path.join('./Package/schat-win32-x64'),
  outputDirectory: path.join('./Build/schat'),
  authors: 'danel',
  exe: 'schat.exe',
  noMsi: true,
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));