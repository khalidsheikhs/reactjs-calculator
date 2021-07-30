function Key({ selectKey, ...props }) {
    return (
        <div className="key">
            <span onClick={ () => { selectKey(props) } }>{ props.keyVal }</span>
        </div>
    );
}

export default Key;