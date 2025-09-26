// src/contexts/PictureProvider.jsx
import React, { useState, useMemo } from 'react';
import axios from 'axios';
import PictureContext from './PictureContext'; // Importe o contexto

const API_KEY = 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const PictureProvider = ({ children }) => {
    // Estados principais
    const [pictureData, setPictureData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Função de Busca com AJAX
    const fetchPictureByDate = async (date) => {
        setLoading(true);
        setError(null);
        setPictureData(null); 

        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    date: date,
                },
            });

            setPictureData(response.data);
            
        } catch (err) {
            console.error("API Error:", err);
            setError(err.response?.data?.msg || 'Erro ao carregar a imagem da NASA. Tente uma data válida.');
        } finally {
            setLoading(false);
        }
    };

    // Uso do Hook Obrigatório: useMemo
    const contextValue = useMemo(() => ({
        pictureData,
        loading,
        error,
        fetchPictureByDate
    }), [pictureData, loading, error]);

    return (
        <PictureContext.Provider value={contextValue}>
            {children}
        </PictureContext.Provider>
    );
};