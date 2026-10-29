

function JsxReturningSeveral(){
const list = <ul><li>text1</li><li>text2</li><li>text3</li></ul>; return <><h3>Общий div</h3><div>{list}{list}</div><h3>Фрагмент</h3>{list}{list}</>;
}
export default JsxReturningSeveral;
