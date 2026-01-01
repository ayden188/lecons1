


import { loadHome } from './home.js';

loadHome(); // Lancement immédiat

document.querySelector("#home").addEventListener("click", loadHome);
// Ajoute ton listener pour le menu ici plus tard