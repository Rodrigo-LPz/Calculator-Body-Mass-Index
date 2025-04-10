document.getElementById("submit").addEventListener("click", calculation)
document.getElementById("result").innerHTML = result

function calculation(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    console.log(weight);
    console.log(height);

    let calculate = Number(weight)/Math.pow(Number(height), 2);
    console.log = "";

    let result = "";
    let color = "";
    if (calculate < 18.5){
        result = "You are or have an 'Underweight' condition."
        color = "blue"
    } else if (calculate >= 18.5 && calculate <= 24.9){
        result = "You are or have a 'Normal' condition."
        color = "green"
    } else if (calculate >= 25 && calculate <=  29.9){
        result = "You are or have an 'Overweight' condition."
        color = "orange"
    } else if (calculate >= 30){
        result = "You are or have an 'Obese' condition."
        color = "red"
    }


}