

function FunctionsIntro(){
function getDigitsSum(num: number) {return String(num).split('').reduce((sum,digit)=>sum+Number(digit),0);} return <p>{getDigitsSum(123)}</p>;
}
export default FunctionsIntro;
