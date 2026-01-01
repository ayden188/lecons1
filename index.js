import { loadHome } from './home.js';

// 1. Charger l'accueil immédiatement
loadHome();

// 2. Écouter les clics
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    console.log("Clic sur Home !"); // Vérifie dans la console si ça s'affiche
    loadHome();
});
console.log('eli');

