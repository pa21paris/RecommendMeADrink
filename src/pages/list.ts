import { dataFetch } from "../utils/DataFetch"

export const list=async (result:any[])=>{
    return `
    <div class="list-container container">
        ${result.map((drink)=>{
            const drinkObj=drink.drinks[0];
            const id=drinkObj.idDrink;
            const name=drinkObj.strDrink;
            const img=drinkObj.strDrinkThumb;
            return `
            <div class="${id} item-container">
                <a href="#${id}">
                    <img src="${img}" alt="">
                    <p>${name}</p>
                </a>
            </div>
            `
        }).join('')}
    </div>
    `
}