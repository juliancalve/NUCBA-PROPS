
import './App.css';
import ChangeTitle from './components/ChangeTitle';

const App = () => {

//
  // const  persona = {
  //   name: 'pepito',
  //   age: 40
  // }

  // const example = ({ name }) => {
  //   console.log(name);
  // }

  // example(persona);
//

  // let pruebita = 'SOY PRUEBA';

  // const changePruebita = () => {
  //   console.log('antes: ', pruebita);
  //   pruebita = 'Ya no soy una prueba';
  //   console.log('despues: ', pruebita);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Title text='Hola probando el titulo' subtitulo='Hola soy un subtitulo' />
        <Title text={pruebita} />
        <Button text='Mostrar Info!!!!' miFuncion={showAlert}/> */}
        {/* <p>{pruebita}</p>
        <button onClick={changePruebita}>cambiar texto</button> */}
        {/* <Button text='Login!!!!' miFuncion={onLogin} /> */}
        <ChangeTitle />
      </header>
    </div>
  );
}

export default App;
