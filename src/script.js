// HTMLファイルのToDoリストを参考にしてください。
const config = {
    parentId: "target",
    url: "https://api.recursionist.io/random-words"
}

fetch(config.url)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
    });