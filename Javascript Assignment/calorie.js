var cyclingTime = 30 * (1/60); //every 1hr there's 60minutes. this convert minutes to hour.
var days = 15;
var aveCaloriePerBurn = 225 / 0.5; //  calorie per hour.
var totalLoseCalorie = cyclingTime * days * aveCaloriePerBurn; // total calorie that burn in 15 days with 30mins of cycling time.
console.log(`Great work, Sam! after of ${cyclingTime} hours of cycling every day for a week, you may lose a total of ${totalLoseCalorie} calories`);


var goal = 10000; // saving goal of Sam.
var savedMoney = 7500; //saved money of Sam.

var percentageLeft = (1 - (savedMoney/goal)) * 100;
console.log(`Thank you for your discipline and hardwork, Sam! you are now ${percentageLeft}% away from your goal of saving ₱10,000.`);