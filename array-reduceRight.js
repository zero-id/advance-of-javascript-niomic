const arr1 = [[0, 2], [2, 3], [4, 5]].reduceRight(
    (accu, curr) => accu.concat(curr)
)

console.log(arr1)