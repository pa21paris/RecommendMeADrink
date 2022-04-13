import { dataFetch } from "../utils/DataFetch"

export const list=async ()=>{
    const result=await dataFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php',6);
    return `
    ${result.map((drink)=>{
        const drinkObj=drink.drinks[0];
        const id=drinkObj.idDrink;
        const name=drinkObj.strDrink;
        const img=drinkObj.strDrinkThumb;
        return `
        <div class="${id} drink-container">
            <a href="#${id}">
                <img src="${img}" alt="">
                <p>${name}</p>
            </a>
        </div>
        `
    }).join('')}
    `
}