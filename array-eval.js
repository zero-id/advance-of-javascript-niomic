function arrayEval() {
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var total = 0

    for (let i = 0; i < x.length; i++) {
        total += x[i]
    }
    console.log(eval(total))
}

arrayEval()