const fetchPromiseRanInt = fetch('https://api.recursionist.io/random-integer');

const jsonResponse = fetchPromiseRanInt.then(function(response){
    return response.json();
});

jsonResponse.then(function(data){
    console.log(data);
});

// メソッドチェーンとアロー関数を使って書き直してください。
let randomInt = fetch('https://api.recursionist.io/random-integer').then(response=>response.json()).then(data=>console.log(data));