/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/

Hooks.once("ready", async () => {
    var _a;
    console.log("ready");
    const r = document.querySelector(':root');
    const arr = ['fixed', 'unset'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dnbGUtYmFubmVyLy4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7O0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsT0FBTyxDQUFDLENBQUM7SUFDdkQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVmLGNBQVEsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNyRixDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxJQUFzQyxFQUFFO0lBQ3hDLElBQUksS0FBVSxFQUFFLEVBVWY7Q0FDSiIsImZpbGUiOiJtb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJIb29rcy5vbmNlKFwicmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIilcbiAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJzpyb290Jyk7XG4gICAgY29uc3QgYXJyID0gWydmaXhlZCcsICd1bnNldCddXG4gICAgbGV0IHRvZ2dsZSA9IDE7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb24gPiBmb3JtID4gYXNpZGUgPiAubG9nb1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcj8uc3R5bGUuc2V0UHJvcGVydHkoJy0tdG9nZ2xlLWJhbm5lcicsIGFyclt0b2dnbGVdKTtcbiAgICAgICAgdG9nZ2xlID0gdG9nZ2xlID09PSAxID8gMCA6IDFcbiAgICB9KVxufSk7XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImFwcGx5XCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==