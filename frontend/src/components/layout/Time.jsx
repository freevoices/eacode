import React, { useState, useEffect } from 'react';
import { IoTimeOutline } from 'react-icons/io5';

function TiempoTranscurrido({ fechaApi }) {
  const [tiempoPasado, setTiempoPasado] = useState('');

  useEffect(() => {
    const fechaApiObj = new Date(fechaApi);
    const horaActual = new Date();

    const diferenciaEnMilisegundos = horaActual - fechaApiObj;
    const minutosPasados = Math.floor(diferenciaEnMilisegundos / (1000 * 60));

    if (minutosPasados < 60) {
      setTiempoPasado(`${minutosPasados}m`);
    } else if (minutosPasados < 1440) { // Menos de 24 horas (60 minutos * 24)
      const horasPasadas = Math.floor(minutosPasados / 60);
      setTiempoPasado(`${horasPasadas}h${horasPasadas !== 1 ? 'rs' : ''}`);
    } else {
      const fechaFormateada = fechaApiObj.toLocaleDateString();
      setTiempoPasado(`${fechaFormateada}`);
    }
  }, [fechaApi]);

  return (
    <>
      <p className='text-gray-600 ml-1.5'>•</p>
      <p className='text-gray-600 ml-1.5'>{tiempoPasado}</p>
    </>
  );
}

export default TiempoTranscurrido;
