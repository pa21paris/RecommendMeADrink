export async function dataFetch(url:string,requestAmount:number=1){
    let res:any[]=[];
    let pepe:Promise<Response>[]=[];
    try {
        for(let i=0;i<requestAmount;i++){
            pepe.push(fetch(url));
        }
        await Promise.all(pepe)
        .then(responses=>responses.map(response=>response.json()))
        .then(responses=>Promise.all(responses))
        .then(responses=>res=responses);
    } catch (error) {
        console.log(error);
    }
        return res;
}