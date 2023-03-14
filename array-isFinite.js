function arrayInFinite() {
    var a = isFinite([1,2,3,4,5])
    var b = isFinite(['jakarta', 'bandung', 'surabaya'])
    var c = isFinite([1, 2, 3, 'helo', 'niomic'])
    var d = isFinite([-999999.23])
    
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)

}

arrayInFinite()