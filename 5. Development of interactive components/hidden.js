let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
    let button = blogArticle.querySelector('.more');
    button.onclick = function () {
        blogArticle.classList.remove('short');
    };
};

