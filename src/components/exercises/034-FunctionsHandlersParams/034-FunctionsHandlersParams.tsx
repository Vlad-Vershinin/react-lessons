

function FunctionsHandlersParams(){
function show(num: number){alert(num);} return <>{[1,2,3].map(n=><button key={n} onClick={()=>show(n)}>act{n}</button>)}</>;
}
export default FunctionsHandlersParams;
