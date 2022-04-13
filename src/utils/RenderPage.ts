import { list } from "../pages/list";
import { getHash } from "./GetHash"

export const renderPage=async ()=>{
    const hashRes=getHash();
    const main=document.querySelector('main');
    if(hashRes=='/'){
        if(main){
            main.innerHTML=await list();
        }
    }
}