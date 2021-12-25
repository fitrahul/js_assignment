// data added to local storage by taking input from form

// MY VARIABLE IS "arr"
// LOCAL STORAGE VARIABLE IS "form_data"
// object name is "obj" or "product"

function submitform(event) {
    event.preventDefault();
    var obj = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
    }
    var arr;
    arr = localStorage.getItem("form_data");
    if(arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("form_data"));
    }
    arr.push(obj);
    localStorage.setItem("form_data",JSON.stringify(arr));
}
// localStorage.clear();
// get data from local storage and show the products on the home page

function showProducts () {
    var arr = JSON.parse(localStorage.getItem("form_data"));
    var main_div = document.getElementById("main_div");
    arr.forEach(function(product){
        // console.log(product) // importann ! // product means single obj value i.e. arr[0],arr[1], .....
        var single_div = document.createElement("div");

        var image = document.createElement("img");
        image.src = product.image;

        var p_name = document.createElement("p");
        p_name.innerText = product.name;

        var p_price = document.createElement("p");
        p_price.innerText = product.price;

        var btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.onclick = function () {
            addToCart(product);
        }

        single_div.append(image, p_name, p_price, btn);
        main_div.append(single_div);
    })
}
showProducts ();

// store the data to local storage by taking the input from "add to cart button"

function addToCart(p) {
    let cart_arr;
    cart_arr = localStorage.getItem("cart_data");
    if (cart_arr == null) {
        cart_arr = [];
    }
    else {
        cart_arr = JSON.parse(localStorage.getItem("cart_data"));
    }
    var count = 0;
    for (let i = 0;i < cart_arr.length; i++) {
        if (p.name == cart_arr[i].name) {
            alert("Product already exist");
            count++;
        }
    }
    if (count == 0) {
        cart_arr.push(p);
        alert("product successfully added");
    }
    localStorage.setItem("cart_data", JSON.stringify(cart_arr));
}