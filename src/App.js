import './App.css';
import Button from './components/Button';
import Title from './components/Title';

const App = () => {

  const pruebita = 'SOY PRUEBA';

  return (
    <div className="App">
      <header style={{}} className="App-header">
        <Title text='Hola probando el titulo' subtitulo='Hola soy un subtitulo' />
        <Title text={pruebita} />
        <Button text='clickeame!!!!'/>
      </header>
    </div>
  );
}

export default App;
