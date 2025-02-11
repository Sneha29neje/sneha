const products = [
    { id: 1, name: "Product 1", price: "$19.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$29.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$39.99", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$49.99", image: "https://via.placeholder.com/150" },
];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productList.appendChild(card);
    });
}

document.getElementById("see-more-btn").addEventListener("click",()=> {
    const moreproduct = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Initial display of products
displayProducts(products);