function processArray(){

    
    const input = document.querySelector('.js-inputnum').value;

    const numbers = input.split(",").map(Number);

    if(numbers.some(isNaN)) {
        document.getElementById("output").innerText = "Please enter a valild number";
        return;
    }
    

    let min = numbers[0];
    let max = numbers[0];

    for(let i=0; i<numbers.length; i++){
        if (numbers[i]<min) min = numbers[i];
        if (numbers[i]>max) max = numbers[i];

    }

    document.querySelector('.js-display').innerText = "min=" + min + "max=" + max;

    


}