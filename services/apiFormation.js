// src/services/apiFormation.js

const BASE_URL = "http://localhost:1337"; // à adapter selon ton backend

export async function fetchFormations() {
  try {
    const response = await fetch(BASE_URL+"/api/formations");
    if (!response.ok) throw new Error('Erreur réseau');
    const data = await response.json();
    return data.data; // ou data selon ton API
  } catch (error) {
    console.error('Erreur dans fetchFormations:', error);
    throw error;
  }
}

// Tu peux ajouter d'autres fonctions ici
export async function fetchFormationById(id) {
  console.log('fetchFormationById called with id:', id);
  try {
    const response = await fetch(`${BASE_URL}/api/formations/${id}`);
    if (!response.ok) throw new Error('Erreur réseau');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur dans fetchFormationById:', error);
    throw error;
  }
}
