

function FunctionsEventObject(){
return <><button onClick={event=>console.log(event)}>Event</button><button onClick={event=>console.log(event.target)}>Target</button></>;
}
export default FunctionsEventObject;
