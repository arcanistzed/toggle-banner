/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/

Hooks.on("renderActorSheetPF2e", async () => {
    var _a;
    const r = document.querySelector(':root');
    const arr = ['unset', 'fixed'];
    let toggle = 1;
    (_a = document.querySelector("section > form > aside > .logo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        r === null || r === void 0 ? void 0 : r.style.setProperty('--toggle-banner', arr[toggle]);
        toggle = toggle === 1 ? 0 : 1;
    });
});
if (true) {
    if (false) {}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dnbGUtYmFubmVyLy4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLElBQUksRUFBRTs7SUFDeEMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxPQUFPLENBQUMsQ0FBQztJQUN2RCxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWYsY0FBUSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3JGLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLElBQXNDLEVBQUU7SUFDeEMsSUFBSSxLQUFVLEVBQUUsRUFVZjtDQUNKIiwiZmlsZSI6Im1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIkhvb2tzLm9uKFwicmVuZGVyQWN0b3JTaGVldFBGMmVcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignOnJvb3QnKTtcbiAgICBjb25zdCBhcnIgPSBbJ3Vuc2V0JywgJ2ZpeGVkJ11cbiAgICBsZXQgdG9nZ2xlID0gMTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbiA+IGZvcm0gPiBhc2lkZSA+IC5sb2dvXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByPy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b2dnbGUtYmFubmVyJywgYXJyW3RvZ2dsZV0pO1xuICAgICAgICB0b2dnbGUgPSB0b2dnbGUgPT09IDEgPyAwIDogMVxuICAgIH0pXG59KTtcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiYXBwbHlcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9