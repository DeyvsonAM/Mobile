if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
            console.log('registrado o primeiro service worker', reg);
        }).catch((err) => {
                console.log('algo deu errado');
            });

        
    });
}