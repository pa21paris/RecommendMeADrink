export async function dataFetch(url:string,requestAmount:number=1){
    let res:any[]=[];
    for(let i=0;i<requestAmount;i++){
        res.push(await (await fetch(url)).json())
    }
    return res;
}