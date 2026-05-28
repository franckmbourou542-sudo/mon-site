document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GESTION DES ONGLETS D'ÉPISODES ---
    const episodeButtons = document.querySelectorAll(".episode-btn");
    const videoPlayer = document.getElementById("video-player");
    const currentTitle = document.getElementById("current-episode-title");

    episodeButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Récupérer les données de l'épisode cliqué
            const newVideoUrl = button.getAttribute("data-video");
            const newTitle = button.getAttribute("data-title");

            // Mettre à jour le lecteur et le titre sous la vidéo
            videoPlayer.src = newVideoUrl;
            currentTitle.textContent = newTitle;

            // Réinitialiser le style de tous les boutons d'onglets
            episodeButtons.forEach(btn => {
                btn.className = "episode-btn w-full text-left p-3 rounded dark:bg-slate-700 bg-slate-100 hover:bg-slate-600 dark:hover:bg-slate-600 hover:text-white transition";
            });

            // Appliquer le style "actif" au bouton cliqué
            button.className = "episode-btn w-full text-left p-3 rounded bg-red-500 text-white font-medium shadow";
        });
    });

    // --- 2. GESTION DU MODE SOMBRE / LUMINEUX ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            themeToggleBtn.textContent = "☀️"; // Icône pour le mode lumineux actif
        } else {
            htmlElement.classList.add("dark");
            themeToggleBtn.textContent = "🌙"; // Icône pour le mode sombre actif
        }
    });
});
