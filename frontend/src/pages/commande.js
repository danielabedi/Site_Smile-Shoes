import React, { useState } from 'react';
import Navbar from '../components/nav/navbar.jsx';
import '../App.css';

const FormulaireCommande = () => {
  const [typeNettoyage, setTypeNettoyage] = useState('');
  const [typeChaussures, setTypeChaussures] = useState('');
  const [taille, setTaille] = useState('');
  const [dateCommande, setDateCommande] = useState('');
  const [montant, setMontant] = useState(1);
  const [adresseLivraison, setAdresseLivraison] = useState('');

  const [isFormValid, setIsForValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeNettoyage && typeChaussures && taille && dateCommande) {
        setIsForValid(true);

       // Ici, tu peux envoyer les données du formulaire au backend pour traitement
      // par exemple, à l'aide d'une requête API avec axios ou fetch.
      // Assure-toi d'adapter cette partie pour correspondre à la manière dont tu gères les données côté serveur.
      console.log('Données du formulaire soumises :', {
        typeNettoyage,
        typeChaussures,
        taille,
        dateCommande,
        montant,
      });

    } else {
        // Afficher un message d'erreur si tous les champs obligatoires ne sont pas remplis
        setIsForValid(false);
      }

  };

  return (
    <div>
        <Navbar/>
        <header className='header_cmd'>
            
            <h3>Nettoie tes chaussures chez nous a un meilleur prix </h3>
        </header>

        <form onSubmit={handleSubmit}>
            {isFormValid === false && (
            <p style={{ color: 'red' }}>Veuillez remplir tous les champs obligatoires</p>
        )}

        <div className=''>
            <label htmlFor="typeNettoyage">Type de nettoyage :</label>
            <input
            type="text"
            id="typeNettoyage"
            value={typeNettoyage}
            onChange={(e) => setTypeNettoyage(e.target.value)}
            required
            />
        </div>

        <div className=''>
            <label htmlFor="typeChaussures">Type de chaussures :</label>
            <input
            type="text"
            id="typeChaussures"
            value={typeChaussures}
            onChange={(e) => setTypeChaussures(e.target.value)}
            required
            />
        </div>

        <div className=''>
            <label htmlFor="taille">Taille :</label>
            <input
            type="text"
            id="taille"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            required
            />
        </div>

        <div className='cm-form'>
            <div>
                <label htmlFor="dateCommande">Date de la commande :</label>
                    <input
                    type="date"
                    id="dateCommande"
                    value={dateCommande}
                    onChange={(e) => setDateCommande(e.target.value)}
                    required
                    />
            </div>
            <div>
                <label htmlFor="montant">Montant :</label>
                    <select
                    id="montant"
                    value={montant}
                    onChange={(e) => setMontant(parseFloat(e.target.value))}
                    >
                    <option value={1}>1$</option>
                    <option value={2.5}>2.5$</option>
                    <option value={50}>10$</option>
                    </select>
            </div>
        
        </div>

        <div className=''>
            <label htmlFor="adresseLivraison">Adresse de livraison :</label>
            <input
            type="text"
            id="adresseLivraison"
            value={adresseLivraison}
            onChange={(e) => setAdresseLivraison(e.target.value)}
            required
            />
        </div>

        <button className='btn-submit' type="submit">Soumettre</button>
        </form>
    </div>
  );
};

export default FormulaireCommande;


