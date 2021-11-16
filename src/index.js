export default function sumTwoMinNum(arrayNumbers) {
    if(arrayNumbers.length === 0) {
        return 0;
    }
    const [numMin1, numMin2] = [...arrayNumbers].sort((a, b) => a - b);
    return numMin1 + numMin2;
}
