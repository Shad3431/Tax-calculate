export function calculateUATax(income) {
    let tax = 0;
    if (income <= 86) {
        tax = income - 31;
    } else {
        tax = income * 0.18
    }
    return tax

}