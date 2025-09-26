// src/contexts/usePictureContext.js
import { useContext } from 'react';
import PictureContext from './PictureContext'; // Importe o contexto

export const usePictureContext = () => {
    const context = useContext(PictureContext);
    
    if (context === undefined) {
        throw new Error('usePictureContext deve ser usado dentro de um PictureProvider');
    }

    return context;
};