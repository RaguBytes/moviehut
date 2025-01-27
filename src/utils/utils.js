
export function convertMins(mins) {
    let hours = Math.floor(mins / 60);
    let minsLeft = mins % 60;
    return hours + " hours and " + minsLeft + " mins";
}


export function convertDollars(dollars) {
    let dollarsLeft = dollars % 100;
    let dollarsRight = Math.floor(dollars / 100);
    return "$" + dollarsRight + "." + dollarsLeft;
}