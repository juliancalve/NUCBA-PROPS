const Title = (props) => {

    console.log(props);

    return(
        <div>
            <h1 >{props.text}</h1>
            {props.subtitulo && <h5>{props.subtitulo}</h5>}
        </div>
    )
};

export default Title;


//Tipos de export

// const TitleDefault = () => {
//     return(<h1>Soy Default</h1>);
// }

// export const Title = () => {

//     return(<h1>Soy un titulo asdasd</h1>)
// }

// export const Title2 = () => {
//     return(<h1>Soy un 2</h1>);
// }

// export default TitleDefault;

