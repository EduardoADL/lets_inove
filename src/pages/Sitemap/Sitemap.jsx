import React, { useEffect, useState } from 'react';
const ExibirXML = () => {
  const [conteudoXML, setConteudoXML] = useState('');


  useEffect(() => {
    const carregarXML = async () => {
      try {
        // Caminho relativo ao arquivo XML no diretório 'public'
        const pathToXML = '../../../public/sitemap.xml';

        // Carrega o conteúdo do arquivo XML
        const response = await fetch(pathToXML);
        const data = await response.text();

        setConteudoXML(data);
      } catch (error) {
        console.error('Erro ao carregar XML:', error);
      }
    };

    carregarXML();
  }, []);

  return (
      <pre>{conteudoXML}</pre>
  );
};

export default ExibirXML;
