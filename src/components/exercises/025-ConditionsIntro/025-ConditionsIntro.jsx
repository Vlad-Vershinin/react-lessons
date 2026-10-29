function ConditionsIntro() {
    const show = true;
    let text;
    if (show) {
        text = <p>text1</p>;
    }
    else {
        text = <p>text2</p>;
    }
    return <div>{text}</div>;
}
export default ConditionsIntro;
