function arrayForEach() {
    var data = ['a', 'b', 'c']

    console.log(data.forEach(function (item, index, array) {
        console.log(item)
        console.log(index)
        console.log(array)
    }))
}

arrayForEach()