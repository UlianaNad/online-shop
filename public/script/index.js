const loadItems = document.querySelector('.product-items');

const preloader = document.querySelector('.preloader');

const buttonItems = document.querySelector('.catalog-button');

buttonItems.addEventListener('click', async () => {

    preloader.style.display = 'block';
   
    await productItems();

    preloader.remove();

    buttonItems.remove();
});


async function productItems() {

let {data}  = await axios.get('/items');

let htmlProdacts = '';

data.items.forEach((item, index) => {

    htmlProdacts += `
        <div class="product-card">
            <a id ="${index}" href="/items/${index}">
                <img class="product-img" src= "${item.img}" > 
                    <div class="product-name">${item.name}</div>
            </a>
            <div class="price">${item.price} грн</div>
                <a id ="${index}" href="/items/${index}">
                    <form>
                        <button class="buy-button">
                            <p>Купити</p>
                        </button>   
                    </form>
                </a>
            </div>
        `;       
});

loadItems.innerHTML = htmlProdacts;

};


loadItems.addEventListener('click', (event) => {
    let itemId = +event.target.id;
        console.log(itemId);

    async function sendId(id) {
        await axios.get(`/product-id/${id}`);
    };
    sendId(itemId);
});



