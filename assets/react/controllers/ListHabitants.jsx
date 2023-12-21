import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HabitantForm from './HabitantForm.jsx';

const ListHabitants = ({ onEdit }) => {
    const [habitants, setHabitants] = useState([]);
    const [editingHabitant, setEditingHabitant] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [searchData, setSearchData] = useState({ numero: '', nomRue: '' });
    const [isAddressLocked, setIsAddressLocked] = useState(false);
    const [addHabitantData, setAddHabitantData] = useState({});
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (showList) {
            refreshHabitants();
        }
    }, [showList]);

    const deleteHabitant = (id) => {
        axios.delete(`http://localhost:8000/habitants/${id}`)
            .then(() => {
                setHabitants(habitants.filter(habitant => habitant.id !== id));
            })
            .catch(error => console.error('Erreur lors de la suppression', error));
    };

    const editHabitant = (habitant) => {
        if (editingHabitant && editingHabitant.id === habitant.id) {
            setEditingHabitant(null);
        } else {
            setEditingHabitant(habitant);
            onEdit(habitant);
        }
    };

    const searchHabitantByAddress = () => {
        axios.post('http://localhost:8000/habitants/search', searchData)
            .then(response => {
                const sortedSearchResult = response.data.sort((a, b) => a.nom.localeCompare(b.nom));
                setSearchResult(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la recherche par adresse', error);
                setSearchResult(null);
            });
    };

    const toggleAddHabitantForm = () => {
        setIsAddressLocked(!isAddressLocked);
        setAddHabitantData({ numero: searchData.numero, nomRue: searchData.nomRue });
    };

    const addHabitantWithSameAddress = () => {
        const newHabitantData = {
            numero: searchData.numero,
            nomRue: searchData.nomRue,
        };
        
        refreshHabitants();
        setAddHabitantData({});
        setIsAddressLocked(true);
    };

    const refreshHabitants = () => {
        axios.get('http://localhost:8000/habitants')
            .then(response => {
                const sortedHabitants = response.data.sort((a, b) => a.nom.localeCompare(b.nom));
                setHabitants(sortedHabitants);
            })
            .catch(error => console.error('Erreur lors de la récupération des habitants', error));
    };

    const toggleList = () => {
        setShowList(!showList);
        if (showList) {
            refreshHabitants();
        }
    };

    return (
        <div>
            <button onClick={toggleList}>
                {showList ? 'Masquer la liste des habitants' : 'Afficher la liste des habitants'}
            </button>

            {showList && (
                <div>
                    <button onClick={refreshHabitants}>Actualiser la liste</button>
                    {editingHabitant && (
                        <div>
                            <h3>Modification d'un habitant</h3>
                            <HabitantForm habitantInitial={editingHabitant} onCompletion={() => setEditingHabitant(null)} />
                        </div>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Date de Naissance</th>
                                <th>Genre</th>
                                <th>Adresse</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {habitants.map(habitant => (
                                <tr key={habitant.id}>
                                    <td>{habitant.nom}</td>
                                    <td>{habitant.prenom}</td>
                                    <td>{habitant.dateNaissance}</td>
                                    <td>{habitant.genre}</td>
                                    <td>{habitant.numero} {habitant.nomRue}</td>
                                    <td>
                                        <button onClick={() => editHabitant(habitant)}>
                                            {editingHabitant && editingHabitant.id === habitant.id ? 'Fermer le formulaire' : 'Modifier'}
                                        </button>
                                        <button onClick={() => deleteHabitant(habitant.id)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div>
                <h2>Recherche par Adresse</h2>
                <input type="text" name="numero" value={searchData.numero} onChange={(e) => setSearchData({ ...searchData, numero: e.target.value })} placeholder="Numéro de rue" />
                <input type="text" name="nomRue" value={searchData.nomRue} onChange={(e) => setSearchData({ ...searchData, nomRue: e.target.value })} placeholder="Nom de la rue" />
                <button onClick={searchHabitantByAddress}>Rechercher</button>

                {searchResult && searchResult.length > 0 ? (
                    <div>
                        <h3>Résultat de la recherche :</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Date de Naissance</th>
                                    <th>Genre</th>
                                    <th>Adresse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResult.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.nom}</td>
                                        <td>{result.prenom}</td>
                                        <td>{result.dateNaissance}</td>
                                        <td>{result.genre}</td>
                                        <td>{result.numero} {result.nomRue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={toggleAddHabitantForm}>
                            {isAddressLocked ? 'Fermer le formulaire' : 'Ajouter un habitant avec la même adresse'}
                        </button>
                    </div>
                )
                    : (
                        <p>Aucun résultat pour cette adresse.</p>
                    )}
            </div>

            {isAddressLocked && (
                <HabitantForm
                    habitantInitial={addHabitantData}
                    onCompletion={toggleAddHabitantForm}
                    isAddressLocked={isAddressLocked}
                    refreshHabitants={refreshHabitants}
                />
            )}
        </div>
    );
};

export default ListHabitants;
