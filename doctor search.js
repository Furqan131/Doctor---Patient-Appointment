// Doctor Search Functionality
// Search Functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    const doctorsSection = document.querySelector(".grid");
    const doctorCards = doctorsSection.querySelectorAll(".bg-indigo-50");

    // Add search input above doctor listing
    searchInput.type = "text";
    searchInput.placeholder = "Search doctors by name or specialty...";
    searchInput.className =
        "block w-3/4 md:w-1/2 mx-auto mb-6 px-4 py-2 border-2 border-indigo-300 rounded-lg";
        
    doctorsSection.parentNode.insertBefore(searchInput, doctorsSection);

    // Filter doctor cards based on search query
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        doctorCards.forEach((card) => {
            const doctorName = card.querySelector("h4").textContent.toLowerCase();
            const doctorSpecialty = card.querySelector("p:nth-of-type(1)").textContent.toLowerCase();

            // Show card if name or specialty matches the query
            if (doctorName.includes(query) || doctorSpecialty.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});