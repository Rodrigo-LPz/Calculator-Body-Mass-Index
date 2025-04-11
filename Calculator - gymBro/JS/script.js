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
    
    if (!weight || !height || weight <= 0 || height <= 0){ /*Dentro del "if",  las expresiones "!weight" y "!height" se utilizan para verificar o asegurarse que los valores introducidos tanto en "weight" como en "height" sean números válidos, imposibilitando que aparezcan "0", "NaN", "null", o "undefined". */
        resultElement.innerHTML = "Error: Please enter valid positive and logic values for both weight and height.";
        return;
    } else if(calculate < 18.5){
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


/*Hay que evitar + y e*/