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
        let arr:string[]=[];
        for(let i=0;i<6;i++){
            arr.push(`
            <div class="id item-container">
                <a href="#id">
                    <img src="#" alt="">
                    <p>Loading...</p>
                </a>
            </div>
            `)
        }
        if(main){
            main.innerHTML=`
                <div class="list-container container">
                    ${arr.join('')}
                </div>
                `;
            res=await dataFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php',6);
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