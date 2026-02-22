import '../App.css'
import { useState, useEffect } from 'react'
import MyFooter from '../components/footer'
import MyHeader from '../components/header'

interface FormData {
  amountPlayer1: number;
  amountPlayer2: number;
  amountPlayer3: number;
  amountPlayer4: number;
}

function Home() {
  const [savedData, setSavedData] = useState<FormData[]>([]);
  const [totalPlayer1, setTotalPlayer1] = useState(0);
  const [totalPlayer2, setTotalPlayer2] = useState(0);
  const [totalPlayer3, setTotalPlayer3] = useState(0);
  const [totalPlayer4, setTotalPlayer4] = useState(0);
  const [namePlayer1] = useState("Toni");
  const [namePlayer2] = useState("Luis");
  const [namePlayer3] = useState("Mateo");
  const [namePlayer4] = useState("Nati");
  const [minPoints, setMinPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData') || '[]') as FormData[];
    setSavedData(data);
  }, []);

  useEffect(() => {
    //Calculamos los totales de cada jugador sumando los movimientos.
    const calculateTotal = (prop) => {
      return savedData.reduce((acc, item) => acc + Number(item[prop]), 0);
    };

    setTotalPlayer1(calculateTotal('amountPlayer1'));
    setTotalPlayer2(calculateTotal('amountPlayer2'));
    setTotalPlayer3(calculateTotal('amountPlayer3'));
    setTotalPlayer4(calculateTotal('amountPlayer4'));
  }, [savedData]);

  //Función para eliminar un movimiento especifico.
  const deleteMovement = (indexToDelete: number) => {
    const updatedData = savedData.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setSavedData(updatedData);
  };

  useEffect(() => {
    setMinPoints(Math.min(totalPlayer1, totalPlayer2, totalPlayer3, totalPlayer4));
    setMaxPoints(Math.max(totalPlayer1, totalPlayer2, totalPlayer3, totalPlayer4));
  });

  function vaGanando (playerTotal: number) {
    if(playerTotal === minPoints){
      return playerTotal + "🏅";
    } else {
      return playerTotal;
    }
  };

  return (
    <>
      <MyHeader />
        {savedData.length > 0 ? (
          <>
          <table className='tableMoviments'>
            <thead>
              <tr>
                <th></th>
                <th>{namePlayer1}</th>
                <th>{namePlayer2}</th>
                <th>{namePlayer3}</th>
                <th>{namePlayer4}</th>
              </tr>
            </thead>

            <tbody>
            {savedData.map((item, index) => (
              <tr key={index}>
                <th><button onClick={() => deleteMovement(index)}>🗑️</button></th>
                <th>{Number(item.amountPlayer1)}</th>
                <th>{Number(item.amountPlayer2)}</th>
                <th>{Number(item.amountPlayer3)}</th>
                <th>{Number(item.amountPlayer4)}</th>
              </tr>
            ))}
            </tbody>

            <tfoot>
              <tr>
                <th>TOTAL</th>
                <th>{vaGanando(totalPlayer1)}</th>
                <th>{vaGanando(totalPlayer2)}</th>
                <th>{vaGanando(totalPlayer3)}</th>
                <th>{vaGanando(totalPlayer4)}</th>
              </tr>
            </tfoot>
          </table>

          <table className='tableMoviments'>
            <tr>
              <th>Puntuación menor</th>
              <th>{minPoints}</th>
              <th>Puntuación mayor</th>
              <th>{maxPoints}</th>
            </tr>
          </table>
          </>
        ) : (
          <>
          <img height={150} src='https://cdn-icons-png.flaticon.com/512/1178/1178933.png' />
          <p>No hay movimientos registrados aún. Añade el primero.</p>
          </>
        )}
      <MyFooter />
    </>
  )
}

export default Home
