import { useEffect, useState } from 'react';

// Define a interface para refletir a estrutura da resposta da API
interface Pais {
  name: {
    common: string;  // O nome comum do país
  };
}

export default function PaisesApi() {
  const [paises, setPaises] = useState<Pais[]>([]);  // Estado para armazenar os países

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/americas')  // Faz a requisição para a API dos países da região das Américas
      .then(res => res.json())  // Converte a resposta da API para JSON
      .then(data => setPaises(data));  // Armazena os dados da resposta no estado 'paises'
  }, []);  // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {paises.map(pais => (  // Mapeia cada país da lista e renderiza seu nome
        <div key={pais.name.common} className="p-4 border rounded-lg shadow hover:shadow-md">
          <h2 className="text-xl font-bold">{pais.name.common}</h2>  {/* Exibe o nome do país */}
        </div>
      ))}
    </div>
  );
}

