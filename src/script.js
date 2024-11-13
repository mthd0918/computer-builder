const config = {
    url: "https://api.recursionist.io/random-words",
    parentId: "target"
}

fetch(config.url).then(response=>response.json()).then(function(data){
    console.log("Server data is as follows....");
    console.log(data);
});

// joinWords
// afterProcess
// ここからJavaScriptを記述してください。
