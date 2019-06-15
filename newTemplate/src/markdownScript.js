/* Function Definitions */

function applyMarkdown(path, elem){
    var req = new XMLHttpRequest();
    req.open("GET", path, true);
    req.onreadystatechange = () => {
        if(req.readyState === 4 && (req.status === 200 || req.status === 0)){
            compileMarkdown(req, elem);
        }
    }
    req.send();
}

function compileMarkdown(req, elem){
    var text = req.response;
    console.log(text);
    elem.innerText = text;
}