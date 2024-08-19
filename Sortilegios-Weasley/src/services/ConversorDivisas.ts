function knutsToCOP(knuts: number){
    return knuts * 0.0149 * 4016; // 1 knut = 0.0149 Dolares 
}
function sicklesToCOP(sickles: number){
    return sickles * 0.432 * 4016; // 1 sickle = 0.432 Dolares
}
function galeonesToCOP(galeones: number){
    return galeones * 7.35 * 4016; // 1 galeon = 7.35 Dolares
}
export function COPFormmater(COP: number){
    return COP.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


export function magicDivisesToMuggle(divise: string, amount: number){
    if(divise === "knuts"){
        return knutsToCOP(amount);
    }
    if(divise === "sickles"){
        return sicklesToCOP(amount);
    }
    if(divise === "galeones"){
        return galeonesToCOP(amount);
    }

}