/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
figma.showUI(__html__);

// wrap in function because of async client Storage
// const openUi = async () => {
//   // Get the user settings
//   const userSettings: UserSettings = getSettings()
//   // get the current version differences to the last time the plugin was opened
//   const versionDifference = await getVersionDifference(figma)
//   // resize UI if needed
//   figma.ui.resize(
//     config.ui[figma.command].width,
//     config.ui[figma.command].height
//   )
//   if (versionDifference !== undefined && versionDifference !== 'patch') {
//     figma.ui.resize(
//       config.ui[figma.command].width,
//       config.ui[figma.command].height + 60
//     )
//   }
//   const postMessageObject = {
//     command: figma.command as PluginCommands,
//     payload: {
//       settings: {
//         ...userSettings,
//         ...{ accessToken: await getAccessToken(getFileId(figma)) }
//       },
//       data: null,
//       versionDifference: versionDifference,
//       metadata: {
//         filename: figma.root.name
//       }
//     }
//   }
//   if (
//     [commands.export, commands.urlExport].includes(
//       figma.command as PluginCommands
//     )
//   ) {
//     postMessageObject.payload.data = stringifyJson(
//       await exportRawTokenArray(figma, userSettings)
//     )
//   }
//   figma.ui.postMessage({ ...postMessageObject })
//   // register the settings UI
//   figma.ui.show()
// }
// // run function
// openUi()
// /**
//  * React to messages
//  */
// figma.ui.onmessage = async (message: PluginMessage) => {
//   const { command, payload } = message
//   /**
//    * on closePlugin
//    * close plugin and show notification if available
//    */
//   if (command === commands.closePlugin) {
//     // show notification if send
//     if (payload?.notification !== undefined && payload?.notification !== '') {
//       figma.notify(payload.notification)
//     }
//     // close plugin
//     figma.ui.hide()
//     figma.closePlugin()
//   }
//   /**
//    * on saveSettings
//    * save settings, access token and close plugin
//    */
//   if (command === commands.saveSettings) {
//     // store settings
//     setSettings(payload.settings)
//     // accessToken
//     await setAccessToken(getFileId(figma), payload.accessToken)
//     // close plugin
//     if (payload.closePlugin && payload.closePlugin === true) {
//       figma.closePlugin()
//     }
//   }
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ1U7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmV4cG9ydCB7fTtcbi8vIHdyYXAgaW4gZnVuY3Rpb24gYmVjYXVzZSBvZiBhc3luYyBjbGllbnQgU3RvcmFnZVxuLy8gY29uc3Qgb3BlblVpID0gYXN5bmMgKCkgPT4ge1xuLy8gICAvLyBHZXQgdGhlIHVzZXIgc2V0dGluZ3Ncbi8vICAgY29uc3QgdXNlclNldHRpbmdzOiBVc2VyU2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpXG4vLyAgIC8vIGdldCB0aGUgY3VycmVudCB2ZXJzaW9uIGRpZmZlcmVuY2VzIHRvIHRoZSBsYXN0IHRpbWUgdGhlIHBsdWdpbiB3YXMgb3BlbmVkXG4vLyAgIGNvbnN0IHZlcnNpb25EaWZmZXJlbmNlID0gYXdhaXQgZ2V0VmVyc2lvbkRpZmZlcmVuY2UoZmlnbWEpXG4vLyAgIC8vIHJlc2l6ZSBVSSBpZiBuZWVkZWRcbi8vICAgZmlnbWEudWkucmVzaXplKFxuLy8gICAgIGNvbmZpZy51aVtmaWdtYS5jb21tYW5kXS53aWR0aCxcbi8vICAgICBjb25maWcudWlbZmlnbWEuY29tbWFuZF0uaGVpZ2h0XG4vLyAgIClcbi8vICAgaWYgKHZlcnNpb25EaWZmZXJlbmNlICE9PSB1bmRlZmluZWQgJiYgdmVyc2lvbkRpZmZlcmVuY2UgIT09ICdwYXRjaCcpIHtcbi8vICAgICBmaWdtYS51aS5yZXNpemUoXG4vLyAgICAgICBjb25maWcudWlbZmlnbWEuY29tbWFuZF0ud2lkdGgsXG4vLyAgICAgICBjb25maWcudWlbZmlnbWEuY29tbWFuZF0uaGVpZ2h0ICsgNjBcbi8vICAgICApXG4vLyAgIH1cbi8vICAgY29uc3QgcG9zdE1lc3NhZ2VPYmplY3QgPSB7XG4vLyAgICAgY29tbWFuZDogZmlnbWEuY29tbWFuZCBhcyBQbHVnaW5Db21tYW5kcyxcbi8vICAgICBwYXlsb2FkOiB7XG4vLyAgICAgICBzZXR0aW5nczoge1xuLy8gICAgICAgICAuLi51c2VyU2V0dGluZ3MsXG4vLyAgICAgICAgIC4uLnsgYWNjZXNzVG9rZW46IGF3YWl0IGdldEFjY2Vzc1Rva2VuKGdldEZpbGVJZChmaWdtYSkpIH1cbi8vICAgICAgIH0sXG4vLyAgICAgICBkYXRhOiBudWxsLFxuLy8gICAgICAgdmVyc2lvbkRpZmZlcmVuY2U6IHZlcnNpb25EaWZmZXJlbmNlLFxuLy8gICAgICAgbWV0YWRhdGE6IHtcbi8vICAgICAgICAgZmlsZW5hbWU6IGZpZ21hLnJvb3QubmFtZVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpZiAoXG4vLyAgICAgW2NvbW1hbmRzLmV4cG9ydCwgY29tbWFuZHMudXJsRXhwb3J0XS5pbmNsdWRlcyhcbi8vICAgICAgIGZpZ21hLmNvbW1hbmQgYXMgUGx1Z2luQ29tbWFuZHNcbi8vICAgICApXG4vLyAgICkge1xuLy8gICAgIHBvc3RNZXNzYWdlT2JqZWN0LnBheWxvYWQuZGF0YSA9IHN0cmluZ2lmeUpzb24oXG4vLyAgICAgICBhd2FpdCBleHBvcnRSYXdUb2tlbkFycmF5KGZpZ21hLCB1c2VyU2V0dGluZ3MpXG4vLyAgICAgKVxuLy8gICB9XG4vLyAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgLi4ucG9zdE1lc3NhZ2VPYmplY3QgfSlcbi8vICAgLy8gcmVnaXN0ZXIgdGhlIHNldHRpbmdzIFVJXG4vLyAgIGZpZ21hLnVpLnNob3coKVxuLy8gfVxuLy8gLy8gcnVuIGZ1bmN0aW9uXG4vLyBvcGVuVWkoKVxuLy8gLyoqXG4vLyAgKiBSZWFjdCB0byBtZXNzYWdlc1xuLy8gICovXG4vLyBmaWdtYS51aS5vbm1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZTogUGx1Z2luTWVzc2FnZSkgPT4ge1xuLy8gICBjb25zdCB7IGNvbW1hbmQsIHBheWxvYWQgfSA9IG1lc3NhZ2Vcbi8vICAgLyoqXG4vLyAgICAqIG9uIGNsb3NlUGx1Z2luXG4vLyAgICAqIGNsb3NlIHBsdWdpbiBhbmQgc2hvdyBub3RpZmljYXRpb24gaWYgYXZhaWxhYmxlXG4vLyAgICAqL1xuLy8gICBpZiAoY29tbWFuZCA9PT0gY29tbWFuZHMuY2xvc2VQbHVnaW4pIHtcbi8vICAgICAvLyBzaG93IG5vdGlmaWNhdGlvbiBpZiBzZW5kXG4vLyAgICAgaWYgKHBheWxvYWQ/Lm5vdGlmaWNhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHBheWxvYWQ/Lm5vdGlmaWNhdGlvbiAhPT0gJycpIHtcbi8vICAgICAgIGZpZ21hLm5vdGlmeShwYXlsb2FkLm5vdGlmaWNhdGlvbilcbi8vICAgICB9XG4vLyAgICAgLy8gY2xvc2UgcGx1Z2luXG4vLyAgICAgZmlnbWEudWkuaGlkZSgpXG4vLyAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKVxuLy8gICB9XG4vLyAgIC8qKlxuLy8gICAgKiBvbiBzYXZlU2V0dGluZ3Ncbi8vICAgICogc2F2ZSBzZXR0aW5ncywgYWNjZXNzIHRva2VuIGFuZCBjbG9zZSBwbHVnaW5cbi8vICAgICovXG4vLyAgIGlmIChjb21tYW5kID09PSBjb21tYW5kcy5zYXZlU2V0dGluZ3MpIHtcbi8vICAgICAvLyBzdG9yZSBzZXR0aW5nc1xuLy8gICAgIHNldFNldHRpbmdzKHBheWxvYWQuc2V0dGluZ3MpXG4vLyAgICAgLy8gYWNjZXNzVG9rZW5cbi8vICAgICBhd2FpdCBzZXRBY2Nlc3NUb2tlbihnZXRGaWxlSWQoZmlnbWEpLCBwYXlsb2FkLmFjY2Vzc1Rva2VuKVxuLy8gICAgIC8vIGNsb3NlIHBsdWdpblxuLy8gICAgIGlmIChwYXlsb2FkLmNsb3NlUGx1Z2luICYmIHBheWxvYWQuY2xvc2VQbHVnaW4gPT09IHRydWUpIHtcbi8vICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==