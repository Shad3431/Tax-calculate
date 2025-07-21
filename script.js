import {updateOptionForCountry} from "./src/components/OptionsForCountry.js";
import {updateOptionForState} from "./src/components/OptionsForState.js";
import {calculateClick} from "./src/components/CalculateClick.js";

const data = [
    {
        name: "Germany",
        states: [
            {state: "Bayern", tax: 0.08},
            {state: "Baden-Württemberg", tax: 0.08},
            {state: "Berlin", tax: 0.09},
            {state: "Brandenburg", tax: 0.09},
            {state: "Bremen", tax: 0.09},
            {state: "Hamburg", tax: 0.09},
            {state: "Hessen", tax: 0.09},
            {state: "Mecklenburg-Vorpommern", tax: 0.09},
            {state: "Niedersachsen", tax: 0.09},
            {state: "Nordrhein-Westfalen", tax: 0.09},
            {state: "Rheinland-Pfalz", tax: 0.09},
            {state: "Saarland", tax: 0.09},
            {state: "Sachsen", tax: 0.09},
            {state: "Sachsen-Anhalt", tax: 0.09},
            {state: "Schleswig-Holstein", tax: 0.09},
            {state: "Thüringen", tax: 0.09}
        ]
    },
    {
        name: "Belgium",
        states: [
            {state: "Flanders", tax: 0.07},
            {state: "Wallonia", tax: 0.08},
            {state: "Brussels", tax: 0.06},
        ]
    },{
        name: "Ukraine",
        states: [
            {state: "Kiev", tax: 0.05}
        ]
    }
]
function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}
function calculateUATax(income) {
    let tax = 0;
    if (income <= 86) {
        tax = income - 31;
    } else {
        tax = income * 0.18
    }
    return tax

}
function calculateFederalTax(income) {
    let tax = 0;
    if (income <= 11784) {
        tax = 0;
    } else if (income <= 18000) {
        tax = income * 0.14;
    } else if (income <= 62810) {
        tax = income * 0.24;
    } else if (income <= 277825) {
        tax = income * 0.42;
    } else {
        tax = income * 0.45;
    }
    return tax;
}
function calculateBelgiumTax(income, rate) {
    let tax = 0;
    if (income <= 15200) {
        tax = income * 0.25;
    } else if (income <= 26830) {
        tax = 15200 * 0.25 + (income - 15200) * 0.40;
    } else if (income <= 46440) {
        tax = 15200 * 0.25 + (26830 - 15200) * 0.40 + (income - 26830) * 0.45;
    } else {
        tax = 15200 * 0.25 + (26830 - 15200) * 0.40 + (46440 - 26830) * 0.45 + (income - 46440) * 0.6;
    }

    const socialTax = income * 0.1307;
    const municipalTax = tax * rate;
    return {
        tax,
        socialTax,
        municipalTax,
        totalTax: tax + socialTax + municipalTax
    };
}
function updateOptionForCountry(arr) {
    country.innerHTML = "";
    arr.map(obj => obj.name)
        .forEach(s => {
            const el = document.createElement('option');
            el.value = s;
            el.textContent = s;
            country.appendChild(el);
        });
}
const country = document.getElementById('country');
updateOptionForCountry(data);

//Add listener
country.addEventListener('change', () => {
    const countrySelect = country.value;
    const states = data
        .filter(obj => obj.name === countrySelect)
        .map(c => c.states);

    updateOptionForState(states[0]);
})

//First start
const countrySelect = country.value;
const states = data
    .filter(obj => obj.name === countrySelect)
    .map(c => c.states);
updateOptionForState(states[0]);

taxButton.onclick = calculateClick;
