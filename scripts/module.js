Hooks.on("renderActorSheetPF2e", async () => {
    let toggle = 1; // 0 is hidden; 1 is oveflowing
    const r = document.querySelector(':root');
    const arr = ['unset', 'fixed'];

    // toggle between fixed and not
    document.querySelector("section > form > aside > .logo")?.addEventListener("click", () => {
        r?.style.setProperty('--toggle-banner', arr[toggle]);
        toggle = toggle === 1 ? 0 : 1;
    });
});
