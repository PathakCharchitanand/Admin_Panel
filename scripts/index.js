//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit", addproduct);

var addproducts = JSON.parse(localStorage.getItem("products")) || [];

function addproduct() {
  event.preventDefault();
  let type = document.querySelector("#type").value;
  let desc = document.querySelector("#desc").value;
  let price = document.querySelector("#price").value;
  let image = document.querySelector("#image").value;

  var obj = {
    type: type,
    desc: desc,
    price: price,
    image: image
  }

  addproducts.push(obj);

  localStorage.setItem("products", JSON.stringify(addproducts));

}

document.querySelector("#show_product").addEventListener("click", showproduct);

function showproduct() {
  event.preventDefault();
  window.location.href = "inventory.html";
  
  var showproducts = JSON.parse(localStorage.getItem("products"));

  showproduct.map(function(elem){
    var container=document.createElement("div");
    
    var innercontainer=document.createElement("div")
  })



}
