function bilanganKelipatan() {
    var bilGep = []
    for (let i = 1; i < 50; i++) {
        if (i % 5 === 0) {
            bilGep.push(i)
        }
    }
    return bilGep
}

console.log(bilanganKelipatan());