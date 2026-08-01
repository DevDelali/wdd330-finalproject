async function loadTemplate(path, fallback = "") {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Could not load template: ${path}`);
        }
        return response.text();
    } catch (error) {
        return fallback;
    }
}

function renderWithTemplate(template, parentElement) {
    if (parentElement) {
        parentElement.innerHTML = template;
    }
}

function updateCartCount() {
    const cartCountElement = document.querySelector('[data-cart-count]');
    if (cartCountElement) {
        cartCountElement.textContent = '0';
    }
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate(
        "partials/header.html",
        `<header><nav><a href="index.html"><img src="images/logo.svg" alt="Movie Recommendations Logo"></a><form><input type="text" placeholder="Search movies..."><button type="submit">Search</button></form><a href="index.html">Home</a><a href="movies.html">Movies</a><a href="favorites.html">Favorites</a><a href="about.html">About</a></nav></header>`
    );
    const footerTemplate = await loadTemplate("partials/footer.html", "<footer></footer>");

    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
    updateCartCount();
}
