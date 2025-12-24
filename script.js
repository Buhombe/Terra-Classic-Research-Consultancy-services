// =========================
// SERVICE SEARCH FUNCTIONALITY
// =========================
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const serviceCards = document.querySelectorAll('.service-cards .card');

// Function to normalize text for comparison
const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, ' ').trim();

// Live search on typing (no alert)
const filterServicesLive = () => {
    if (!searchInput || !serviceCards) return;

    const query = normalizeText(searchInput.value);

    serviceCards.forEach(card => {
        const text = normalizeText(card.innerText);
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
};

// Live search
if (searchInput) {
    searchInput.addEventListener('input', filterServicesLive);
}

// Search button click (alert only if nothing found)
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        if (!searchInput || !serviceCards) return;

        const query = normalizeText(searchInput.value);

        if (!query) {
            alert("Please enter a search term!");
            return;
        }

        let found = false;

        serviceCards.forEach(card => {
            const text = normalizeText(card.innerText);
            if (text.includes(query)) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (!found) {
            alert(`No service found for: "${searchInput.value}"`);
        }
    });
};
