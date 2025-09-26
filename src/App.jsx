import React from 'react';
import styled from 'styled-components';
import { usePictureContext } from './contexts/usePictureContext';
import SearchForm from './components/SearchForm';
import PictureCard from './components/PictureCard';

// Biblioteca Externa: Styled Components para estilos globais
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #0b0c2a;
  color: #fff;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: #ff6347;
  font-weight: bold;
`;

const LoadingMessage = styled.p`
  color: #47b2ff;
  font-weight: bold;
`;

function App() {
  const { pictureData, loading, error } = usePictureContext();

  return (
    <AppContainer>
      <Title>NASA Picture Explorer</Title>
      
      {/* Componente de Busca */}
      <SearchForm />

      {/* Condicionais para exibir mensagens e o resultado da busca */}
      {loading && <LoadingMessage>Carregando imagem...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Componente que exibe os dados da imagem */}
      {!loading && !error && pictureData && <PictureCard data={pictureData} />}
    </AppContainer>
  );
}

export default App;