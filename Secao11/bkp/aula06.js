let novaPromisse = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);
    setInterval(() =>{
        if(valor % 2 == 0){
            resolve(`O valor ${valor} é par.`);
        }else{
            reject(`O valor ${valor} é ímpar`);
        }
    }, 2000);  
})

async function executarPromise(){
    try {
        const response = await  novaPromisse();
        console.log(response);
    }catch(error){
        console.log(error);
    }
}