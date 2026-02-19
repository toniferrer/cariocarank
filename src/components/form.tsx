import { useState} from 'react';

interface FormData {
  amountPlayer1: number;
  amountPlayer2: number;
  amountPlayer3: number;
  amountPlayer4: number;
}

 const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    amountPlayer1: 0,
    amountPlayer2: 0,
    amountPlayer3: 0,
    amountPlayer4: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('formData') || '[]');
    const updatedData = [...existingData, formData];
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setFormData({
      amountPlayer1: 0,
      amountPlayer2: 0,
      amountPlayer3: 0,
      amountPlayer4: 0,
    });
    window.location.reload()
  };

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
            <div className='formSection'>
                <label>Puntuación Toni</label>
                <div>
                    <input
                    type="number"
                    name="amountPlayer1"
                    value={formData.amountPlayer1}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>
            <div className='formSection'>
                <label>Puntuación Mateo</label>
                <div>
                    <input
                    type="number"
                    name="amountPlayer2"
                    value={formData.amountPlayer2}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>
            <div className='formSection'>
                <label>Puntuación Luis</label>
                <div>
                    <input
                    type="number"
                    name="amountPlayer3"
                    value={formData.amountPlayer3}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>
            <div className='formSection'>
                <label>Puntuación Nati</label>
                <div>
                    <input
                    type="number"
                    name="amountPlayer4"
                    value={formData.amountPlayer4}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>
            <button className='formButton' type="submit">Añadir</button>
            </form>
        </div>
    );
};

export default Form;