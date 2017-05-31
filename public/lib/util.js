var defaultOnLoad = function defaultOnLoad(Clipboard, hljs, status, codeFile) {
    let clip = null;
    if (Clipboard.isSupported()) {
        clip = new Clipboard('.btn');
        clip.on('success', function(e) {
            if(status){
                document.getElementById(status).innerHTML = 'Nukopijuota!';
            }

            e.clearSelection();
        });
    } else {
        console.log('Clipboard is not supported');
        document.getElementsByClassName('btn').map(el => {
            el.style.display = 'none';
        });
    }

    var client = new XMLHttpRequest();
    client.open('GET', codeFile);
    client.onreadystatechange = function () {
        document.getElementById('code').innerHTML = client.responseText;
        hljs.initHighlighting();
    };
    client.send();
};