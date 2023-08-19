import React, { useState } from 'react';
import { FaShoePrints, FaHammer } from 'react-icons/fa';
import Navbar from '../components/nav/navbar.jsx';
import Footer from '../components/footer.jsx';
import './commande.css';

const Commande = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
  });

  const [dateCommande, setDateCommande] = useState('');
  const [montant, setMontant] = useState(1);
  const [adresseLivraison, setAdresseLivraison] = useState('');

  const isFormValid = selectedService && selectedOption && dateCommande && adresseLivraison;


  const services = [
    { id: 'nettoyage', name: 'Nettoyage de Chaussures', icon: <FaShoePrints className='btn-service'/> },
    { id: 'cordonnerie', name: 'Service de Cordonnerie', icon: <FaHammer className='btn-service'/> },
    // Ajoutez d'autres services si nécessaire
  ];

  const options = [
    { id: 'standard', name: 'Standard' },
    { id: 'express', name: 'Express (24h)' },
    // Ajoutez d'autres options de service si nécessaire
  ];

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyez les données du formulaire au backend pour traitement
    console.log('Données du formulaire soumises :', {
      service: selectedService,
      option: selectedOption,
      formData,
      dateCommande,
      montant,
      adresseLivraison,
    });

     // Réinitialisez les états et le formulaire après la soumission
     setSelectedService('');
     setSelectedOption('');
     setFormData({
       nom: '',
       email: '',
       telephone: '',
       adresse: '',
     });
     setDateCommande('');
     setMontant(1);
     setAdresseLivraison('');
   };

  return (
    <div className="commande">
      <Navbar />
      <h1 className='title-cmd'>Commander un Service</h1>
      <p>Sélectionnez le service que vous souhaitez commander :</p>
      <div className="services">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
            onClick={() => handleServiceSelection(service.id)}
          >
            {service.icon}
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="options">
          <h3>Options de Service :</h3>
          <div className="option-buttons">
            {options.map((option) => (
              <button
                key={option.id}
                className={`option-button ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionSelection(option.id)}
              >
                {option.name}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Formulaire de Commande :</h3>
            <div className="form-group">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom complet"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                />
             </div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Numéro de téléphone"
              value={formData.telephone}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="adresse"
              id="adresse"
              placeholder="Adresse de livraison"
              value={formData.adresse}
              onChange={handleInputChange}
              required
            />
            <div className="form-group">
            
          </div>
          <div className="form-group flex">
                <div className='label-flex'>
                    <label htmlFor="montant">date </label>
                    <input
                      type="date"
                      id="dateCommande"
                      placeholder="date de la commande"
                      value={dateCommande}
                      onChange={(e) => setDateCommande(e.target.value)}
                      required
                    />
                </div>
                <div className='label-flex'>
                    <label htmlFor="montant">montant</label>
                    <select
                      id="montant"
                      value={montant}
                      onChange={(e) => setMontant(parseFloat(e.target.value))}
                    >
                      <option value={1}>1$</option>
                      <option value={2.5}>2.5$</option>
                      <option value={10}>10$</option>
                      {/* ... Ajoutez d'autres options de montant si nécessaire */}
                    </select>
                </div>
                
          </div>
          
            <button className="cta-button" type="submit" disabled={!isFormValid}>
              Passer la Commande
            </button>
          </form>
        </div>
      )}
       <Footer/>
    </div>
  );
};

export default Commande;
