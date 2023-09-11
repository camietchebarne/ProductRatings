const URL = 'https://fakestoreapi.com/products'
const products = document.getElementById('products');

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(url) {
    try {
        const response = await fetch(url);
    const data = await response.json();
    products = data

    } catch (error) {
        console.log(error)
    }
    
}

function showProducts() {

}

function stars(cantidad) {

}

function cutString(string) {

}
