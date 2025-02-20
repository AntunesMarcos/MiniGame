import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Level3.css';

function Level3() {
    const navigate = useNavigate();

    return (
        <div className="level">
            <h2>Labirinto do Coração</h2>
            <p>(Aqui você pode adicionar um labirinto simples ou um placeholder)</p>
            <button onClick={() => navigate('/final')}>Finalizar</button>
            <p>Assim como esse coração encontrou o caminho, eu encontrei você!</p>
        </div>
    );
}

export default Level3;
