function submitSInForm(event) {
    event.preventDefault();
    var obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    var arr = JSON.parse(localStorage.getItem("sign_up_data"));   // so many user signed up, so array of object
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        var arr_mail = arr[i].email;
        if (obj.email != arr_mail) {
            count++;
        }
    }
    if (count == arr.length) {
        alert("invalid Credentials!");
    }
    var sum = 0;
    if (count != arr.length) {
        for (let i = 0; i < arr.length; i++) {
            var arr_pass = arr[i].password;
            if (arr_pass != obj.password) {
                sum++;
            }
        }
        if (sum == arr.length) {
            alert("invalid Credentials!");
        }
    }
    if (count != arr.length && sum != arr.length) {
        window.location.href = "home.html";
    }
}