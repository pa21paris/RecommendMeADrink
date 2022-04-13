import './styles/styles.css';
import { dataFetch } from './utils/DataFetch';
import { getHash } from './utils/GetHash';
import { list } from './pages/list';
import { drink } from './pages/drink';

let res:any[];

async function renderPageGlobal(){
    const hashRes=getHash();
    const main=document.querySelector('main');
    if(hashRes=='/'){
        res=await dataFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php',6);
        if(main){
            main.innerHTML=await list(res);
        }
    }else if(hashRes.match(/\d*/)){
        if(main){
            const id=hashRes;
           const drinkObj=res[res.findIndex(drk=>drk.drinks[0].idDrink==id)];
           main.innerHTML=await drink(drinkObj);
        }
    }
}

window.addEventListener('load',renderPageGlobal);
window.addEventListener('hashchange',renderPageGlobal);