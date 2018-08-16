/**
 *    ____ _   _ _____
 *   /___ \ |_(_)___ /  ___
 *  //  / / __| | |_ \ / _ \
 * / \_/ /| |_| |___) |  __/
 * \___,_\ \__|_|____/ \___|
 */

import { app, BrowserWindow } from "electron";

const DEV_SERVER = process.env["DEV_SERVER"] || "http://localhost:8080";

function main() {
  // Create a new window.
  const win = new BrowserWindow({
    backgroundColor: "#111c24",
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: false
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
  });
}

app.on("ready", main);
