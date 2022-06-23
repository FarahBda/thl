// function include script file 
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("exos/Partie1.js");
include("exos/Partie2.js");
include("exos/Partie3.js");
