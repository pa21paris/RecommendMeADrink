import { dataFetch } from "../utils/DataFetch"
import { getHash } from "../utils/GetHash"

export const drink= async (res:any)=>{
    const drinkObj=res.drinks[0];
    const name=drinkObj.strDrink;
    const img=drinkObj.strDrinkThumb;
    const type=drinkObj.strAlcoholic;
    const recipe=drinkObj.strInstructions;
    return `
    <div class="drink-container container">
        <img src="${img}" alt="image of ${name}">
        <div class="info-container">
            <h2>${name}</h2>
            <p>Type: ${type}</p>
            <p>Recipe: ${recipe}</p>
        </div>
    </div>
    `;
}