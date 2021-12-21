let input = require("fs").readFileSync("input", 'utf-8').split(/\r?\n/);
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

    return count;
}

let res = day_one(); // Execute part A


const partB = () => {

}

partB(); // Execute part B