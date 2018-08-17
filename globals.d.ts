import { IpcRenderer } from "electron";

interface Window {
  readonly ipc: IpcRenderer;
}

declare const window: Window;
