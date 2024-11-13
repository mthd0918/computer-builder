const config = {
    url: "https://api.recursionist.io/random-words",
    parentId: "target"
}

fetch(config.url).then(response=>response.json()).then(function(data){
    console.log("Server data is as follows....");
    console.log(data);
    afterProcess(data);
});

// joinWords
// afterProcess
// ここからJavaScriptを記述してください。
function joinWords(stringArr, delimiter) {
    return stringArr.join(delimiter);
}

function afterProcess(data) {
    document.getElementById("target").innerHTML = `<p>${data}</p>`;
}
