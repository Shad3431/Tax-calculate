export function updateOptionForCountry(arr) {
    country.innerHTML = "";
    arr.map(obj => obj.name)
        .forEach(s => {
            const el = document.createElement('option');
            el.value = s;
            el.textContent = s;
            country.appendChild(el);
        });
}