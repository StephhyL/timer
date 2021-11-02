const argTimes = process.argv.slice(2); // returned an array with strings. Each string element is what is on the command line after file name

// command line: node timer1.js 10
// argTimes: ['10', '2', '-1', 'hello'];

const argNums = argTimes.map(element => Number(element)); // makes new arr where all elements are numbers
//argNums = [10, 2, -1, NaN] 

// get rid of negative numbers. .filter
const posNums = argNums.filter(num => num > 0);
// postNums = [10, 2]

const argNumMs = posNums.map(num => num * 1000) // ms
//argNums = [10000, 2000]

let maxTime = Math.max(...argNumMs); // finds the max time in the argNums // 
// maxTime = 10000


for (let i=0; i <= maxTime; i = i + 1000) { // increasing every second/1000ms
  argNumMs.forEach(num => {
    if (i === num) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, i)
  }
  })
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, maxTime);



// setTimeout(()=> {
//   console.log("beep");
// }, delay);








// for each num in argNums, if num === delay; run setTimeout

// argNums.forEach(num => {
//   if (num === delay)
//   setTimeout(() => {
//     console.log("beep")
//   }, delay);
// })

// delay += 1000; // delay increases 