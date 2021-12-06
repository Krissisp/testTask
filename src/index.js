export default function sumTwoMinNum(arrayNumbers) {
    if(arrayNumbers.length === 0) {
        return 0;
    }

    if(arrayNumbers.length >= 1 && arrayNumbers.length <= 2)  {
        return arrayNumbers[1] ? arrayNumbers[0] + arrayNumbers[1] : arrayNumbers[0];
    }  

    let num1 = Math.min(arrayNumbers[0], arrayNumbers[1]);
    let num2 = Math.max(arrayNumbers[0], arrayNumbers[1]);

    for(let i = 2; i < arrayNumbers.length; i += 1) {
        if(arrayNumbers[i] < num1) {
            num2 = num1;
            num1 = arrayNumbers[i];
            continue;
        }

        if(arrayNumbers[i] < num2) {
            num2 = arrayNumbers[i];
        }

    }

    return num1 + num2;
    
}