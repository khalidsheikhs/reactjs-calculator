function Key(props) {
    const selectKey = () => {
        props.onSelectKey({ value: props.keyVal, isControlTab: props.isControlTab });
    }
    return (
        <div className="key">
            <span onClick={selectKey}>{props.keyVal}</span>
        </div>
    );
}

export default Key;