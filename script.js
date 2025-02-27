// Ajoute un écouteur d'événements au défilement de la page
window.addEventListener('scroll', function() {
  // Vérifie si la page a été défilée vers le bas
  if (window.scrollY > 0) {
      // Ajoute la classe 'scrolled' à l'élément <header>
      document.querySelector('header').classList.add('scrolled');
  } else {
      // Supprime la classe 'scrolled' si l'utilisateur est en haut de la page
      document.querySelector('header').classList.remove('scrolled');
  }
});

// Exécute le code une fois que le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", function () {
   
    // Fonction pour afficher ou cacher une popup
    function togglePopup(popupId) {
        const popup = document.getElementById(popupId); // Récupère l'élément popup par son ID
        const video = popup.querySelector("video"); // Récupère l'élément vidéo s'il existe
        const iframe = popup.querySelector("iframe"); // Récupère l'élément iframe s'il existe
   
        popup.classList.toggle("active"); // Bascule la classe 'active' pour afficher/masquer la popup
   
        // Met en pause la vidéo si la popup est fermée
        if (!popup.classList.contains("active") && video) {
          video.pause();
        }
   
        // Arrête la vidéo intégrée dans un iframe si la popup est fermée
        if (!popup.classList.contains("active") && iframe) {
          const iframeSrc = iframe.src;
          iframe.src = iframeSrc; // Recharge l'iframe pour arrêter la vidéo
        }
    }

    // Associe un bouton à chaque popup et ajoute un événement au clic
    for (let i = 1; i <= 13; i++) {
        const showPopupBtn = document.getElementById(`show-popup-btn-${i}`);
        if (showPopupBtn) {
            showPopupBtn.addEventListener("click", function() {
                togglePopup(`popup-${i}`);
            });
        }
    }

    // Sélectionne tous les boutons de fermeture des popups
    const closeBtns = document.querySelectorAll(".popup .close-btn");
    closeBtns.forEach(function(btn) {
        btn.addEventListener("click", function (event) {
            event.stopPropagation(); // Empêche la propagation de l'événement pour éviter de rouvrir la popup
            const popupId = btn.closest('.popup').id; // Trouve l'ID de la popup parente
            togglePopup(popupId); // Ferme la popup correspondante
        });
    });
});

