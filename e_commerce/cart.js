// WORK ON CART PAGE

// get the data from local storage to show it on cart page
// MY VARIABLE IS "arr_cart"
// LOCAL STORAGE VARIABLE IS "cart_data"
// object name is "el"

var sum = 0;
function showCartProducts() {
    var cart_div = document.getElementById("cart");
    var arr_cart = JSON.parse(localStorage.getItem("cart_data"));
    
    arr_cart.forEach(function(el){
        var div = document.createElement("div");
    
        var image = document.createElement("img");
        image.src = el.image;
    
        var p_name = document.createElement("p");
        p_name.innerText = el.name;
    
        var p_price = document.createElement("p");
        p_price.innerText = el.price;
        sum = sum + Number(el.price);
    
        div.append(image, p_name, p_price);
        cart_div.append(div);
    })
    var total = arr_cart.length;
    document.getElementById("items").innerHTML = total;
    document.getElementById("amount").innerHTML = sum;
}
showCartProducts();

function submitPromo() {
    var input = document.getElementById("promo").value;
    if (input == "masai30") {
        sum = sum - (sum * 0.3)
        document.getElementById("amount").innerHTML = sum;
    }
    else {
        alert("Please feel the correct promo code !")
    }
}