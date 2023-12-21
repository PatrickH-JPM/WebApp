import React, { useState } from 'react';
import axios from 'axios';

function Composant() {
    // Initialise l'état 'messages' avec un tableau vide
    const [messages, setMessages] = useState([]);

    // Charger les messages depuis l'API
    const fetchMessages = () => {
        axios.get('http://localhost:8000/messages')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the messages!', error);
            });
    };

    return (
        <div>
            <button onClick={fetchMessages}>Charger les messages</button>
            {messages.length > 0 ? (
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            ) : (
                <p>Pas de messages à afficher.</p>
            )}
        </div>
    );
}

export default Composant;
