const kelvin = 293; //This makes a variable named kelvin to 293
const celsius = kelvin - 273;//This changes the variable kelvin by subtracting the amount of degrees from what it is in celsius
let fahrenheit = celsius * (9/5) + 32;//This changes the variable by multiplying the temperature in celsius then dividing and adding 
fahrenheit = Math.floor(fahrenheit);// this line rounds the number for fahrenheit to the nearest decimal point
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);