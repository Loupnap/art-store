document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        searchProducts(query);
    }
});

function searchProducts(query) {
    const filter = query.toLowerCase();
    const productList = document.getElementById('product-list') || document.getElementById('search-results');
    const products = productList.getElementsByClassName('product-item');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (productName.indexOf(filter) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}