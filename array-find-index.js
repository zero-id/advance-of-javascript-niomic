var arr1 = [5, 12, 8, 120, 44]

function istLargeNumber(e) {
    return e > 13
}

console.log(arr1.findIndex(istLargeNumber))