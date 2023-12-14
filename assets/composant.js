import React, { useState } from 'react';
import axios from 'axios';

function Composant() {
    // Initialise l'état 'messages' avec un tableau vide
    const [messages, setMessages] = useState([]);

    // Fonction pour charger les messages depuis l'API
    const fetchMessages = () => {
        // Adaptez l'URL en fonction de l'adresse de votre localhost et du port utilisé
        axios.get('http://localhost:8000/messages')
            .then(response => {
                // Mettre à jour l'état 'messages' avec les messages reçus
                // Assurez-vous que la réponse est le tableau des messages
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
