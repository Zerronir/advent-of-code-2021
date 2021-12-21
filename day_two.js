let input = require("fs").readFileSync('input_day_two', 'utf-8').split(/\r?\n/);
input = input.map(String);

// Define positions

const partA = () => {
    let a = 0;
    let d = 0;
    let h = 0;
    let f = 0;
    
    input.forEach(el => {
        el = el.split(" ");
        if(el[0] === 'forward') {
            
            h = h + parseInt(el[1]); // Add to the horizontal axis

        } else if(el[0] === 'down') {

            d = d + parseInt(el[1]); // Add to the depth axis

        } else if(el[0] === 'up') {

            d = d - parseInt(el[1]); // Decrease the depth axis

        }
    });

    f = d * h;
    return f;
}

partA();

const partB = () => {
    let a = 0;
    let d = 0;
    let h = 0;
    let f = 0;
    
    input.forEach(el => {
        el = el.split(" ");
        if(el[0] === 'forward') {
            
            h = h + parseInt(el[1]); // Add to the horizontal axis

            if(a > 0) d = d + (parseInt(el[1]) * a);

        } else if(el[0] === 'down') {

            a = a + parseInt(el[1]); // Add to the aim axis

        } else if(el[0] === 'up') {

            a = a - parseInt(el[1]); // Decrease the aim axis
        }
    });

    f = d * h;
    console.log("depth -> ", d, " horizontal -> ", h);
    console.log("final -> ", f);
    return f;
}

partB();