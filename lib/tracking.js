/**
 * Envoie un événement au dataLayer pour le tracking GTM
 * @param {string} eventName - Nom de l'événement
 * @param {Object} [data={}] - Données supplémentaires
 */
export const pushToDataLayer = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...data,
      timestamp: new Date().toISOString()
    });
  } else {
    console.warn('dataLayer non disponible. Événement non envoyé:', eventName, data);
  }
};

/**
 * Initialise le dataLayer s'il n'existe pas
 */
export const initDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};