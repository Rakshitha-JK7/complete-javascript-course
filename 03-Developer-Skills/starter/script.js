// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAltitude = function (temps) {
//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (curtemp > max) max = temps[i];
//     if (curtemp < min) min = temps[i];
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAltitude(temperatures);
// console.log(`Amplitude is ${amplitude}`);

// //Function should now receive 2 arrays of temps

// const calcTempAltitudenew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (curtemp > max) max = temps[i];
//     if (curtemp < min) min = temps[i];
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudenew = calcTempAltitudenew([8, 12.7], [9, 4, 3]);
// console.log(`Amplitude is ${amplitudenew}`);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     value: Number(prompt('Degrees celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const t1 = [17, 21, 23];
// const printForcast = function (temp) {
//   let str = '';
//   for (let i = 0; i < temp.length; i++) {
//     str = str + `...${temp[i]} degree celcius in day ${i + 1}`;
//   }
//   console.log(str);
// };

// printForcast(t1);

// function analyzeWorkWeek(dailyHours) {
//   const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];

//   // 1. Total hours worked
//   const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

//   // 2. Average daily hours (rounded to one decimal place)
//   const avgHours = parseFloat((totalHours / dailyHours.length).toFixed(1));

//   // 3. Day with the most hours worked
//   const maxHours = Math.max(...dailyHours);
//   const maxDayIndex = dailyHours.indexOf(maxHours);
//   const maxDay = days[maxDayIndex];

//   // 4. Number of days worked (more than 0 hours)
//   const daysWorked = dailyHours.filter((h) => h > 0).length;

//   // 5. Full-time check (35 hours or more)
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageDailyHours: avgHours,
//     mostHoursDay: maxDay,
//     daysWorked,
//     fullTime: isFullTime,
//   };
// }

// // Example usage:
// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const analyze = analyzeWorkWeek(weeklyHours);
// console.log(analyze);
