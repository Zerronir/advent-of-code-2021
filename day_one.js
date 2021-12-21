let input = require("fs").readFileSync("input_day_one", 'utf-8').split(/\r?\n/);
input = input.map(Number);

const day_one = () => {
    const first_read = input[0];
    let count = 0;
    
    for (let i = 1; i < input.length; i++) {
        let measurement = input[i];
        if(input[i] > first_read && measurement > input[i - 1]) {
            count++;
        } else {
            continue;
        }
    }

    console.log("part A: " + count);
}

day_one(); // Execute part A


const partB = () => {
    let count = 0;

    for (let i = 3; i < input.length; i++) {
        let el = input[i - 3] + input[i - 2] + input[i - 1];
        let n = input[i - 2] + input[i - 1] + input[i];

        if(el < n) ++count;
        
    }

    console.log("part B: " + count);
}

partB(); // Execute part B