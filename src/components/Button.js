const Button = (props) => {

    const handleClick = () => {
        alert('Me clickeaste!!!');
    }

    return (
        <button onClick={handleClick} type='button'>{props.text}</button>
    )
}

export default Button

