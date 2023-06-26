

function oximeter(oxyLvl){
    if(oxyLvl > 95){
        console.log("Normal reading.");
    } else if(oxyLvl == 95){
        console.log("Acceptable to continue home monitoring.")
    } else if(oxyLvl >= 92 && oxyLvl <95){
        console.log("See advice from health professionals.")
    } else if (oxyLvl < 92){
        console.log("Seek urgent medical advice.")
    } else {
        console.log("Out of range!");
    }
}


function beatMeter(beat){
    if (beat >= 40 && beat <= 100){
        console.log("Normal reading.");
    } else if (beat >= 101 && beat <= 109){
        console.log("Acceptable to continue home monitoring.");
    } else if (beat >= 110 && beat <= 130){
        console.log("Seek advice from health professionals.");
    } else if (beat >= 131){
        console.log("Seek urgent medical advice.");
    } else {
        console.log("Out of range!");
    }
}


oximeter(96);
beatMeter(103);
