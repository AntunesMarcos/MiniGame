import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Level2.css';

function Level2() {
    const navigate = useNavigate();
    const questions = [
        { q: 'Qual minha cor favorita?', a: 'Azul' },
        { q: 'Qual é meu filme favorito?', a: 'Interestelar' },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);

    const handleAnswer = () => {
        if (answer.trim().toLowerCase() === questions[currentQuestion].a.toLowerCase()) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswer('');
        } else {
            navigate('/level3');
        }
    };

    return (
        <div className="level">
            <h2>Quiz do Amor</h2>
            <p>{questions[currentQuestion].q}</p>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <button onClick={handleAnswer}>Responder</button>
            <p>Cada resposta certa me lembra o quanto você é incrível!</p>
        </div>
    );
}

export default Level2;
