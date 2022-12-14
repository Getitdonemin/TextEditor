const installBtn = document.getElementById('buttonInstall');

//logic of PWA and adding an event handler to beforeinstallpromt
window.addEventListener('beforeinstallprompt', (event) => {
    // stores triggered events
    window.deferredPrompt = event;
    // Removes the hidden class
    installBtn.classList.toggle('hidden', false);
});
// making event handler on installBTN
installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
//shows prompt
    promptEvent.prompt();
// resets variable for it to only be used once
    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);
});
//adding eventlistener to appinstalled
window.addEventListener('appinstalled', (event) => {
    // clears away prompt
    window.deferredPrompt = null;
});