// useState
import { useState } from 'react';

const ChangeTitle = () => {

    // let title = 'soy un titulo';
    const [title, setTitle] = useState('soy un titulo');
    const [title1, setTitle1] = useState('soy el titulo1');

    const cambiarElValorDelEstado = (nuevoTitulo) => {
        setTitle(nuevoTitulo);
        setTitle1('Che cambie');
    }

    return (
        <div>
            <h1>{title}</h1>
            <h1>{title1}</h1>
            <button
                onClick={() => cambiarElValorDelEstado('ahora el estado cambio')}
                >
                    cambiar titulo
            </button>
        </div>
    )
}

export default ChangeTitle
