import React, { useState } from 'react';
import styled from 'styled-components';
import { usePictureContext } from '../contexts/usePictureContext'; // Importa o Hook

// 1. Estilizando com Styled Components (Biblioteca Externa)
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #1a1a40; /* Fundo levemente diferente */
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
`;

const Input = styled.input`
  padding: 12px;
  border: ${props => props.hasError ? '2px solid #ff6347' : 'none'}; /* Estilo para erro */
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box; /* Garante que padding não estoure a largura */
`;

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  background-color: #47b2ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #3b9cdc;
  }

  &:disabled { /* Feedback visual quando está carregando */
    background-color: #888;
    cursor: not-allowed;
  }
`;

// Mensagem de erro de validação (antes do envio para a API)
const ValidationMessage = styled.p`
  color: #ff6347;
  font-size: 0.9em;
  margin: -10px 0 0; /* Ajusta a margem */
`;

const SearchForm = () => {
  const [date, setDate] = useState('');
  const [validationError, setValidationError] = useState(null);
  // Pega a função de busca e o status de loading do Contexto
  const { fetchPictureByDate, loading } = usePictureContext(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Verificação de preenchimento de campos obrigatórios (Pré-AJAX)
    if (!date) {
      setValidationError('A data é obrigatória para a busca.');
      return;
    }

    // Validação de data simples (evita datas futuras, já que APOD não as tem)
    if (new Date(date) > new Date()) {
        setValidationError('Não é possível buscar imagens de datas futuras.');
        return;
    }

    setValidationError(null);
    
    // 3. Chama a função AJAX do Context, enviando o parâmetro
    fetchPictureByDate(date);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="date" style={{ color: 'white', alignSelf: 'flex-start' }}>
        Buscar Imagem do Dia (YYYY-MM-DD):
      </label>
      <Input
        type="date"
        id="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          setValidationError(null); // Limpa o erro ao digitar
        }}
        hasError={validationError}
        disabled={loading} // Desabilita durante o carregamento
      />
      
      {validationError && <ValidationMessage>{validationError}</ValidationMessage>}
      
      <Button type="submit" disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar na NASA'}
      </Button>
    </Form>
  );
};

export default SearchForm;