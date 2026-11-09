fetch("https://jsonplaceholder.typicode.com/posts")
.then(x => {
    return x.json();
})
.then(y => {
    y.forEach(publicacao => {
        console.log(publicacao.id);
        console.log(publicacao.title);
        console.log(publicacao.body);
        console.log("======================================")
    });
})
.catch(erro =>{
    console.log("houve um erro , conserte o mais rapido possivel", erro)
})