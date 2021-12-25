function create () {
    // document.getElementsByClassName("a");
    return `<div>hi i am here</div>
     <div>hi i am here</div> 
     <div>hi i am here</div> 
     <div>hi i am here</div>`
}
var b = document.getElementsByClassName("a");
b[0].innerHTML = create();