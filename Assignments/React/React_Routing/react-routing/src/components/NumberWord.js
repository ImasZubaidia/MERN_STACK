const NumberWord = (props) => {
    return (
        <div>
            {parseInt(props.text) ?
            <h2>
            The number is: {props.text}
            </h2>:
            <h2>
            The word is : {props.text}
            </h2>
        }
        </div>
    )
}

export default NumberWord