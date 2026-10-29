function FunctionsTagsCalling() {
    function getDigitsSum(num) { return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0); }
    return <p>{getDigitsSum(12345)}</p>;
}
export default FunctionsTagsCalling;
