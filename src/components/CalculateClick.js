import {calculateFederalTax} from "../utils/germanyTax.js";
import {calculateBelgiumTax} from "../utils/belgiumTax.js";
import {calculateUATax} from "../utils/uatAX.js";

export function calculateClick() {
    const income = +document.getElementById('income').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    let federalTax;
    let result;

    if (country === "Germany") {
        //TODO
        federalTax = calculateFederalTax(income);
        result = income - federalTax;
    } else if (country === "Belgium") {
        const rate = data.findLast(v => v.name === country)
            .states
            .find(value => value.state === state)
            .tax;
        const {tax, socialTax, municipalTax, totalTax} = calculateBelgiumTax(income, rate);
        federalTax =totalTax;
        result =income - totalTax;
    }else if (country === "Ukraine") {
        const militaryTax =data.find(v => v.name === country)
            .states.find(s => s.state === state).tax;
        const militaryTaxIncome = income * militaryTax;
        const tax= calculateUATax(income);
        federalTax = tax+militaryTaxIncome;
        result = income - federalTax;
    }



    const revenueEl = createInfoElement(`Revenue: ${result}`, "h3");
    const taxEl = createInfoElement(`Tax: ${federalTax}`, 'h3');
    const infoBox = document.createElement("div");
    infoBox.append(revenueEl, taxEl);
    const boxResult = document.getElementById("result-side");
    if (boxResult.firstElementChild.nextElementSibling) {
        boxResult.replaceChild(infoBox, boxResult.firstElementChild.nextElementSibling);
    } else {
        boxResult.append(infoBox);
    }
}