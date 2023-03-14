function bilanganGenap() {
    var bilGep = []
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            bilGep.push(i)
        }
    }
    return bilGep
}

console.log(bilanganGenap());