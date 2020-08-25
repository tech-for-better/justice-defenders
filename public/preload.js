const { shell } = require("electron");
const isElectron = require("is-electron");
window.shell = shell;
window.isElectron = isElectron;
