// STORE INPUT DATA TO LOCAL STOREGE =>
// VARIABLE USED => local storage = sign_up_data, function = obj, self = arr

function submitForm(event) {
    event.preventDefault();
    // geting input data
    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        password: document.getElementById("password").value,
    }
    var count = 0;
    var result = Object.values(obj);
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "") {
            alert("Fill the Reqiired Credential!");
            break;
        }
        else {
            count++;
        }
    }
    if (count == 4) {
        // creating local storage
        var arr;
        arr = localStorage.getItem("sign_up_data");
        if (arr == null) {
            arr = [];
        }
        else{
            arr = JSON.parse(localStorage.getItem("sign_up_data"))
        }
        // pushing input data to local storage
        arr.push(obj);
        localStorage.setItem("sign_up_data", JSON.stringify(arr));
    }
    // if (count == 4) {
    //     window.location.href = "home.html"
    // }
}