


let array = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_SX385_.jpg",
        name: "Mobile",
        review: "4.0",
        desc: "Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP",
        price: "$296",
        instock: 32
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/61d7SqbK2UL._AC_SY355_.jpg",
        name: "Headphone",
        review: "3.0",
        desc: "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio, Over-the-Ear Headphones with Mic, Up to 24 Hours of Battery Life, Sandstone - Limited Edition Color",
        price: "$156",
        instock: 32
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/51of4qlqVxL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Lcd",
        review: "5.0",
        desc: "HP E24 G5 23.8 Full HD LCD Monitor - 16:9-24 Class - in-Plane Switching (IPS) Technology - Edge LED Backlight - 1920 x 1080-250 Nit - 5 ms - 75 Hz Refresh Rate - HDMI - DisplayPort - U,Black",
        price: "$416",
        instock: 27
    }
    ,
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71wmNVsS9TL._AC_SX425_.jpg",
        name: "Mobile",
        review: "5.0",
        desc: "SAMSUNG Galaxy S23+ Series AI Phone, Unlocked Android Smartphone, 256GB Storage, 8GB RAM, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Phantom Black",
        price: "$299",
        instock: 13
    }
    ,
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/61vgbLrWDyL._AC_SX522_.jpg",
        name: "Mobile",
        review: "4.0",
        desc: "Motorola Moto G 5G | 2023 | Unlocked | Made for US 4/128GB | 48 MPCamera | Ink Blue, 163.94x74.98x8.39",
        price: "$299.01",
        instock: 43
    }
    ,
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/71jThE945YL._AC_SY450_.jpg",
        name: "Speaker",
        review: "3.2",
        desc: "Amazon Echo Pop | Full sound compact smart speaker with Alexa | Lavender Bloom",
        price: "$39",
        instock: 51
    }
    ,
    {
        id: 7,
        img: "https://m.media-amazon.com/images/I/81PgGklEDcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Speaker",
        review: "4.9",
        desc: "Marshall Stanmore III Bluetooth Wireless Speaker,Black",
        price: "$99",
        instock: 13
    }
    ,
    {
        id: 8,
        img: "https://m.media-amazon.com/images/I/81h8db3IKoL._AC_SX522_.jpg",
        name: "Monitor",
        review: "2.9",
        desc: "Dell E2423H 23.8 Full HD LED LCD Monitor - 16:9 resolution provides a native display of a Full HD video sources without any degradation",
        price: "$109.01",
        instock : 8,
    }
    ,
    {
        id: 9,
        img: "https://m.media-amazon.com/images/I/71z1QuxwUmL._AC_SL1433_.jpg",
        name: "Monitor",
        review: "4.1",
        desc: "Sceptre Curved 24-inch Gaming Monitor 1500R DisplayPort HDMI X2 Eye Care 100% sRGB Build-in Speakers, 1ms 100Hz Machine Black 2024 (C248W-FW100T Series)",
        price: "$96",
        instock: 48
    }
    ,
    {
        id: 10,
        img: "https://m.media-amazon.com/images/I/6131ZgIFn1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Laptop",
        review: "5.0",
        desc: "SAMSUNG 14 Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 512GB, 3K AMOLED (2880 x 1800) Touchscreen",
        price: "$1,196",
        instock: 19
    }
]






// }
// render()
let trendcontainer = document.getElementById("trendcontainer");

function render() {
    for (let index = 0; index < 6; index++) {
        let product = array[index];
        let copy = product.desc.slice(0, 100); // Limit description to first 100 characters

        let element = `
            <div id="trendings" class="trendings">
                <div class="trendimg">
                    <img class="trendimgs" src="${product.img}" alt="">
                </div>
                <div class="trendtext">
                    <h3>${product.name}</h3>
                    <span>Review ${product.review}</span>
                    <p>${copy}</p>
                    <h2 class="price">Price ${product.price}</h2>
                    <h2 class="stock">Total in stock: ${product.instock}</h2>
                    <h2>Quantity: 
                        <button class="increment">+</button>
                        <span class="quantity">1</span>
                        <button class="decrement">-</button>
                    </h2>
                    <button class="addtocart">Add to cart</button>
                </div>
            </div>
        `;

        trendcontainer.innerHTML += element;
    }

    // Bind event listeners after rendering
    let incrementButtons = document.getElementsByClassName("increment");
    let decrementButtons = document.getElementsByClassName("decrement");

    for (let i = 0; i < incrementButtons.length; i++) {
        incrementButtons[i].addEventListener("click", function () {
            // Implement increment functionality
            let quantitySpan = this.parentElement.querySelector("span.quantity");
            let currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity < array[i].instock) {
                quantitySpan.textContent = currentQuantity + 1;
            }
        });
    }

    for (let i = 0; i < decrementButtons.length; i++) {
        decrementButtons[i].addEventListener("click", function () {
            // Implement decrement functionality
            let quantitySpan = this.parentElement.querySelector("span.quantity");
            let currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 1) {
                quantitySpan.textContent = currentQuantity - 1;
            }
        });
    }

    let addtocartButtons = document.getElementsByClassName("addtocart");
    let cartproducts = document.querySelector("#cartproducts");
    for (let i = 0; i < addtocartButtons.length; i++) {
        addtocartButtons[i].addEventListener('click', function(id,img,price) {
            let pricescart = document.getElementsByClassName("price")[i].innerText.slice(7);
            let quantitycart = document.getElementsByClassName("quantity")[i].innerText;
            let imgcart = document.getElementsByClassName("trendimgs")[i].src;
            let namecart = document.getElementsByClassName("trendtext")[i].querySelector("h3").innerText;

            let currentCartProduct = JSON.parse(localStorage.getItem("cartstore")) || [];
            currentCartProduct.push({ namecart, pricescart, quantitycart, imgcart });

            localStorage.setItem("cartstore", JSON.stringify(currentCartProduct));
            console.log(localStorage.getItem("cartstore"));
       
        

        });
    }


}



render();