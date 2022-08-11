let toggle = 1; // 0 is hidden; 1 is overflowing
const root = document.querySelector(":root");
const modes = ["unset", "fixed"];

Hooks.on("renderActorSheetPF2e", async (_app, [html]) => {
	// toggle between fixed and not
	html.querySelector(".logo")?.addEventListener("click", () => {
		root?.style.setProperty("--toggle-banner", modes[toggle]);
		toggle = toggle === 1 ? 0 : 1;
	});
});
