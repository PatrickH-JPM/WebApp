import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListHabitants = ({ onEdit }) => {
    const [habitants, setHabitants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/habitants')
            .then(response => {
                setHabitants(response.data);
            })
            .catch(error => console.error('Erreur lors de la récupération des habitants', error));
    }, []);

    const deleteHabitant = (id) => {
        axios.delete(`http://localhost:8000/habitants/${id}`)
            .then(() => {
                setHabitants(habitants.filter(habitant => habitant.id !== id));
            })
            .catch(error => console.error('Erreur lors de la suppression', error));
    };

    return (
        <div>
            <h2>Liste des Habitants</h2>
            <ul>
                {habitants.map(habitant => (
                    <li key={habitant.id}>
                        {habitant.nom} {habitant.prenom}
                        <button onClick={() => onEdit(habitant)}>Modifier</button>
                        <button onClick={() => deleteHabitant(habitant.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListHabitants;
