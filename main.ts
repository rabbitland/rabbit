/**
 *    ____ _   _ _____
 *   /___ \ |_(_)___ /  ___
 *  //  / / __| | |_ \ / _ \
 * / \_/ /| |_| |___) |  __/
 * \___,_\ \__|_|____/ \___|
 */

import { app, BrowserWindow, ipcMain } from "electron";

const DEV_SERVER = process.env["DEV_SERVER"] || "http://localhost:8080";

function main() {
  // Create a new window.
  const win = new BrowserWindow({
    backgroundColor: "#111c24",
    frame: false,
    show: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + "/preload.js"
    }
  });

  // Maximize the window.
  win.maximize();
  // Disable default menu bar.
  win.setMenu(null);

  // TODO(qti3e) Load production build in production.
  win.loadURL(DEV_SERVER);

  // Open devtools.
  win.webContents.toggleDevTools();

  win.once("ready-to-show", () => {
    win.show();
    setTimeout(() => {
      process.exit();
    }, 5 * 1000);
  });
}

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.sender.send("asynchronous-reply", "pong");
});

app.on("ready", main);
