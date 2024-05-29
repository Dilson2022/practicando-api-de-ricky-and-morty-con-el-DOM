
 
function mcd(a,b) {
    while (a != b) {
        if (a > b) {
            a = a - b
        } else {
            b = b - a
        }
    }
    return a
}
console.log(mcd(6,25));