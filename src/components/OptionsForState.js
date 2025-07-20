export function updateOptionForState(arr) {
    state.innerHTML = "";
    arr.map(obj => obj.state)
        .forEach(s => {
            const el = document.createElement('option');
            el.value = s;
            el.textContent = s;
            state.appendChild(el);
        });
}