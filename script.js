import {updateOptionForCountry} from "./src/components/OptionsForCountry.js";
import {updateOptionForState} from "./src/components/OptionsForState.js";
import {calculateClick} from "./src/components/CalculateClick.js";

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
