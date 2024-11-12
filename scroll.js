document.addEventListener("DOMContentLoaded", () => {
    // Alle `.card`-Elemente auswählen
    const cards = document.querySelectorAll('.card');

    // Optionen für den Intersection Observer
    const observerOptions = {
        threshold: 0.2 // 40% des Elements müssen sichtbar sein, um die Animation zu starten
    };

    // Observer-Funktion erstellen
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wenn das Element sichtbar wird, füge die 'visible'-Klasse hinzu
                entry.target.classList.add('visible');
            } else {
                // Wenn das Element nicht mehr sichtbar ist, entferne die 'visible'-Klasse
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Den Observer für jede Karte initialisieren
    cards.forEach(card => {
        observer.observe(card);
    });
});