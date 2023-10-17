import Button from "./Button";

function ToDo({label, date, onToDoRemoveClick}) {
    function clickReceived(event) {
        onToDoRemoveClick(label)
    }

    return (
        <div className={'card m-4 container-sm flex-xl-row'}>
            <div>{label}</div>
            <div>{date}</div>
            <Button title={'remove'} onBtnClick={clickReceived}></Button>
        </div>
    );
}
export default ToDo;
