let cartproduct = document.getElementById("cartproduct");
let totalprice = document.getElementById("totalprice");
let totalquantiti = document.getElementById("totalquanti");
let tax = document.getElementById("tax");
let allprice = document.getElementById("allprice");

function retrivedata() {
    let getcartdata = localStorage.getItem("cartstore");

    if (!getcartdata) {
        return;
    }

    getcartdata = JSON.parse(getcartdata);
    console.log(getcartdata);

    let totalPrice = 0;
    let totalQuantities = 0;

    // Clear existing content
    cartproduct.innerHTML = '';

    for (let index = 0; index < getcartdata.length; index++) {
        let productPrice = getcartdata[index].pricescart * getcartdata[index].quantitycart;
        totalPrice += productPrice;
        totalQuantities += +getcartdata[index].quantitycart;

        let ele = `<div class="cartproductcontainer">
            <h3 class="serial">${index + 1}</h3>
            <img src="${getcartdata[index].imgcart}" alt="">
            <h3>Price: ${parseInt(productPrice)}$</h3>
            <h2>Quantity:  
                <button class="increment" data-index="${index}">+</button>
                <span class="quantity">${getcartdata[index].quantitycart}</span>
                <button class="decrement" data-index="${index}">-</button>
            </h2>
            <button class="remove" data-index="${index}">Remove</button>
        </div>`;
        cartproduct.innerHTML += ele;
    }

    // Calculate tax and final price
    let taxAmount = Math.round(totalPrice * 0.1); // Assuming 10% tax
    let finalPrice = totalPrice + taxAmount;
    console.log(totalQuantities);

    // Update the totals in the DOM
    totalprice.textContent = `${totalPrice.toFixed(2)}$`;
    totalquantiti.textContent = `${totalQuantities}`;
    tax.textContent = `${taxAmount}$`;
    allprice.textContent = `${finalPrice.toFixed(2)}$`;

    // Add event listeners for remove, increment, and decrement buttons
    let removeButtons = document.getElementsByClassName("remove");
    let incrementButtons = document.getElementsByClassName("increment");
    let decrementButtons = document.getElementsByClassName("decrement");

    for (let button of removeButtons) {
        button.addEventListener("click", function() {
            let itemIndex = this.getAttribute('data-index');
            getcartdata.splice(itemIndex, 1);
            localStorage.setItem("cartstore", JSON.stringify(getcartdata));
            retrivedata();  // Update the cart display without reloading the page
        });
    }

    for (let button of incrementButtons) {
        button.addEventListener("click", function() {
            let itemIndex = this.getAttribute('data-index');
            getcartdata[itemIndex].quantitycart++;
            localStorage.setItem("cartstore", JSON.stringify(getcartdata));
            retrivedata();  // Update the cart display without reloading the page
        });
    }

    for (let button of decrementButtons) {
        button.addEventListener("click", function() {
            let itemIndex = this.getAttribute('data-index');
            if (getcartdata[itemIndex].quantitycart > 1) {
                getcartdata[itemIndex].quantitycart--;
            } else {
                getcartdata.splice(itemIndex, 1);
            }
            localStorage.setItem("cartstore", JSON.stringify(getcartdata));
            retrivedata();  // Update the cart display without reloading the page
        });
    }
}

retrivedata();

