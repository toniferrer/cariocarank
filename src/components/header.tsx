import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './form';

function MyHeader(){
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return(
        <>
        <div className="header">
            <Link to="/"><h1>Carioca Rank Alpha</h1></Link>
            <Link to="/players"><h3>Jugadores</h3></Link>
            <button onClick={toggleForm}>Añadir movimiento</button>
        </div>
            {showForm && <Form />}
        </>
    )
}

export default MyHeader