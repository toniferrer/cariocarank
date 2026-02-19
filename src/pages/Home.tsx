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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData') || '[]') as FormData[];
    setSavedData(data);
  }, []);

  useEffect(() => {
    const total = savedData.reduce((acc, item) => {
      if (item.amountPlayer1) {
        return acc + Number(item.amountPlayer1);
      }
      return acc;
    }, 0);
    setTotalPlayer1(total);
  }, [savedData]);

  useEffect(() => {
    const total = savedData.reduce((acc, item) => {
      if (item.amountPlayer2) {
        return acc + Number(item.amountPlayer2);
      } 
      return acc;
    }, 0);
    setTotalPlayer2(total);
  }, [savedData]);

  useEffect(() => {
    const total = savedData.reduce((acc, item) => {
      if (item.amountPlayer3) {
        return acc + Number(item.amountPlayer3);
      }
      return acc;
    }, 0);
    setTotalPlayer3(total);
  }, [savedData]);

  useEffect(() => {
    const total = savedData.reduce((acc, item) => {
      if (item.amountPlayer4) {
        return acc + Number(item.amountPlayer4);
      }
      return acc;
    }, 0);
    setTotalPlayer4(total);
  }, [savedData]);

  useEffect(() => {
    const total = savedData.reduce((acc, item) => {
      if (item.amountPlayer4 ) {
        return acc + Number(item.amountPlayer4);
      }
      return acc;
    }, 0);
    setTotalPlayer4(total);
  }, [savedData]);

  const deleteMovement = (indexToDelete: number) => {
    const updatedData = savedData.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setSavedData(updatedData);
  };

  return (
    <>
      <MyHeader />
        {savedData.length > 0 ? (
          <table className='tableMoviments'>
            <thead>
              <tr>
                <th>TONI</th>
                <th>MATEO</th>
                <th>LUIS</th>
                <th>NATI</th>
              </tr>
            </thead>

            <tbody>
            {savedData.map((item, index) => (
              <tr key={index}>
                 <th>{Number(item.amountPlayer1)}</th>
                  <th>{Number(item.amountPlayer2)}</th>
                  <th>{Number(item.amountPlayer3)}</th>
                  <th>{Number(item.amountPlayer4)}</th>
                  <th><button onClick={() => deleteMovement(index)}>Eliminar</button></th>
                </tr>
            ))}
            </tbody>

            <tfoot>
              <tr>
                <th>TOTAL {totalPlayer1}</th>
                <th>TOTAL {totalPlayer2}</th>
                <th>TOTAL {totalPlayer3}</th>
                <th>TOTAL {totalPlayer4}</th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>No hay movimientos aún. Añade el primero.</p>
        )}
      <MyFooter />
    </>
  )
}

export default Home
