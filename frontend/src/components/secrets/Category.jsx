import { useEffect, useState } from 'react';

const SecretPage = ({ id }) => {
  const [secretData, setSecretData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.secretos.pro/api/secrets/${id}?populate=*`);
        if (response.ok) {
          const data = await response.json();
          setSecretData(data);
        } else {
          console.error('Error fetching secret data');
        }
      } catch (error) {
        console.error('Error fetching secret data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Respuesta</h1>
      {secretData ? (
        <div>
          <p>ID: {secretData.name}</p>
          {/* Show other relevant data from the response */}
        </div>
      ) : (
        <p>Loading secret data...</p>
      )}
    </div>
  );
};

export default SecretPage;
