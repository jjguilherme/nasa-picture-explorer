import React from 'react';
import styled from 'styled-components';

// Estilizando com Styled Components
const Card = styled.div`
  background-color: #1c1c3f;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.6;
`;

const PictureCard = ({ data }) => {
  if (!data) return null;

  return (
    <Card>
      <Title>{data.title}</Title>
      {data.media_type === 'image' ? (
        <Image src={data.url} alt={data.title} />
      ) : (
        <p>A mídia de hoje não é uma imagem.</p>
      )}
      <Description>{data.explanation}</Description>
    </Card>
  );
};

export default PictureCard;