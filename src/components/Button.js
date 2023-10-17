function Button({title, onBtnClick, disabled}) {
    function handleClick(event) {
        onBtnClick(title);
    }

    return (
        <button className={"btn btn-outline-primary btn-info"}
                onClick={handleClick}
                disabled={disabled}
        >{title}</button>
    );
}
export default Button;
