const multiplier ={
    numbers: [8, 7, 5, 3],
    multiplyBy: 8,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }};

console.log(multiplier.multiply());

//return this.numbers.map(number) => 8 * number