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
