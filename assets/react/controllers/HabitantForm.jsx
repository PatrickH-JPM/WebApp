import React, { useState } from 'react';
import axios from 'axios';

const HabitantForm = ({ habitantInitial = {}, onCompletion }) => {
    const [habitant, setHabitant] = useState(habitantInitial);

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = habitant.id ? `http://localhost:8000/habitants/${habitant.id}` : 'http://localhost:8000/habitants';
        const method = habitant.id ? 'put' : 'post';

        axios({ method, url, data: habitant })
            .then(() => onCompletion())
            .catch(error => console.error('Erreur lors de la sauvegarde', error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setHabitant({ ...habitant, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nom" value={habitant.nom} onChange={handleChange} placeholder="Nom" />
                <input type="text" name="prenom" value={habitant.prenom} onChange={handleChange} placeholder="Prénom" />
                <input type="date" name="dateNaissance" value={habitant.dateNaissance} onChange={handleChange} />
                <select name="genre" value={habitant.genre} onChange={handleChange}>
                    <option value="">Sélectionnez le genre</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre</option>
                </select>
                <input type="number" name="numero" value={habitant.numero} onChange={handleChange} placeholder="Numéro de rue" />
                <input type="text" name="nomRue" value={habitant.nomRue} onChange={handleChange} placeholder="Nom de la rue" />

                <button type="submit">Sauvegarder</button>
            </form>
        </div>
    );
};

export default HabitantForm;
