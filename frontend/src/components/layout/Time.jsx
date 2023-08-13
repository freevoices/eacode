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
      setTiempoPasado(`Hace ${minutosPasados} minutos`);
    } else if (minutosPasados < 1440) { // Menos de 24 horas (60 minutos * 24)
      const horasPasadas = Math.floor(minutosPasados / 60);
      setTiempoPasado(`Hace ${horasPasadas} hora${horasPasadas !== 1 ? 's' : ''}`);
    } else {
      const fechaFormateada = fechaApiObj.toLocaleDateString();
      setTiempoPasado(`Hace ${fechaFormateada}`);
    }
  }, [fechaApi]);

  return (
    <div>
      <IoTimeOutline className='inline h-4 w-4 mr-1' />
      <p className='inline'>{tiempoPasado}</p>
    </div>
  );
}

export default TiempoTranscurrido;
