Hooks.once("ready", async () => {
    const r = document.querySelector<HTMLElement>(':root');
    const arr = ['unset', 'fixed']
    let toggle = 1;
    
    $("#mybutton").on( "click", () => {
        r?.style.setProperty('--toggle-banner', arr[toggle]);
        toggle = toggle === 1 ? 0 : 1
    })
});


if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept();

        if (module.hot.status() === "apply") {
            for (const template in _templateCache) {
                if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
                    delete _templateCache[template];
                }
            }
        }
    }
}