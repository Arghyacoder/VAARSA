document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        const articleBody = article.querySelector(".article_body");
        const img = article.querySelector("img");

        if (img && img.complete && img.naturalHeight !== 0) {
            articleBody.classList.add("has-image");
        } else {
            articleBody.classList.add("no-image");
        }
    });
});
