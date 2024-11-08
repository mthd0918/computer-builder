    // ここからJavaScriptを記述してください。
    // afterProcess関数
fetch ('https://api.recursionist.io/random-integer')
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        afterProcess(data);
    });

function afterProcess(data) {
    document.getElementById("#target2").innerHTML = `<p class="text-primary">${data}</p>`;
}
