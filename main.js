
const slides= ["images/banner7.avif", "images/banner5.avif", "images/banner8.avif"];

let currentIndex= 0;

const picheBtn= document.getElementById("picheBtn");
const ageBtn= document.getElementById("ageBtn");

function updateImages(dash){
   const pika= document.getElementById("pika");
   pika.src= slides[dash];

}
    picheBtn.addEventListener("click", function(){
      currentIndex= (currentIndex - 1 + slides.length) % slides.length;
      updateImages(currentIndex);
   });

   ageBtn.addEventListener("click", function(){
    currentIndex= (currentIndex + 1) % slides.length;
      updateImages(currentIndex);
   });

updateImages(currentIndex);




let menuContainer= document.querySelector(".menuContainer");
let prevBtn= document.getElementById("prevBtn");
let nextBtn= document.getElementById("nextBtn");

nextBtn.addEventListener("click", function(){
    menuContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

prevBtn.addEventListener("click", function(){
    menuContainer.scrollBy({ left: -200, behavior: 'smooth' });
});



let products= [
  {id: 1, 
  img: "images/burger.webp",
  name:"Burger",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
  price: 240,
  rating: 5,
},

{
    id: 2, 
    img: "images/biryani.jpg",
    name:"Biryani",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 200,
    rating: 4.5,
},

{
    id: 3, 
    img: "images/cake.webp",
    name:"Cake",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 150,
    rating: 4.0,

},

{
    id: 4, 
    img: "images/desserts.jpg",
    name:"Desserts",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 100,
    rating: 4.2,
},

{
    id: 5, 
    img: "images/Dosa.jpg",
    name:"Dosa",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 130,
    rating: 4.4,
},

{
    id: 6, 
    img: "images/gulab jamun.webp",
    name:"Gulab Jamun",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 180,
    rating: 4.8,

},

{
    id: 7, 
    img:"images/khichdi.jpg",
    name:"Khichdi",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 140,
    rating: 5.0,

},

{
    id: 8, 
    img: "images/noodles.jpg",
    name:"Noodles",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 200,
    rating: 4.5,

},

{
    id: 9, 
    img: "images/pasta.jpg",
    name:"Pasta",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 220,
    rating: 4.0,

},


{
    id: 10, 
    img: "images/pizza.webp",
    name:"Pizza",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 250,
    rating: 4.4,

},


{
    id: 11, 
    img: "images/poori.jpg",
    name:"Poori",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 80,
    rating: 3.9,

},

{
    id: 12, 
    img: "images/prantha.jpeg",
    name:"Prantha",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 120,
    rating: 5.0,

},

{
    id: 13, 
    img: "images/pure veg.jpg",
    name:"Pure veg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 220,
    rating: 4.4,

},

{
    id: 14, 
    img: "images/rolls.jpeg",
    name:"Rolls",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 250,
    rating: 4.8,

},

{
    id: 15, 
    img: "images/south india.jpg",
    name:"South Indian",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 200,
    rating: 3.8,

},

{
    id: 16, 
    img: "images/sandwich.png",
    name:"Sandwich",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aasperiores minima mollitia excepturi",
    price: 150,
    rating: 4.9,

},

];

let fullSub= document.getElementById("fullSub");
let kartContainer= document.getElementById("kartContainer");
let summaryContainer= document.getElementById("summaryContainer");
let cart= [];

const TaxRate= 50; 


let totalCount= 0;
let cartCount =document.querySelector(".cart-count");

function cartCountUpdate(){
    cartCount.innerHTML= totalCount;
}



function showProductList(product){
   let card= document.createElement("div");

   let incrementId= `A-${product.id}`;
   let decrementId= `B-${product.id}`;
   let quantityId= `C-${product.id}`;
   let addButtonId= `D-${product.id}`;


    card.innerHTML= 
    `
    <div class= "al">
    <img src= "${product.img}" id="photo" alt= "pic">
    <div class= "adjst">
    <div class="bth">
    <h2 class= "nme">${product.name}</h2>
    <p class= "ratngStar">${product.rating}<i class="fa-regular fa-star"></i></p>
    </div>
    <p id= "des">${product.description}</p>
    <div class="qnty">
    <div>
    <h3 class= "prc">₹${product.price}</h3>
    </div>
    <button class="btnAd" id= "${addButtonId}">Add</button>
    <div class="counter" style="display:none">
    <button id= "${incrementId}">+</button>
    <span id= "${quantityId}">0</span>
    <button id= "${decrementId}">-</button>

    </div>
    </div>
    </div>
   </div>

    `
    fullSub.appendChild(card);

    let incrementCount= document.getElementById(incrementId);
    let decrementCount= document.getElementById(decrementId);
    let quantityCount= document.getElementById(quantityId);
    let addButtonCount= document.getElementById(addButtonId);
    let counter= card.querySelector(".counter");

    let quantity = 0;

    addButtonCount.addEventListener("click", function() {
        addButtonCount.style.display = "none";
        counter.style.display = "flex";
        quantity = 1;
        quantityCount.innerHTML = quantity;
        totalCount += 1;
        cartCountUpdate();
        cartAddProducts(product, quantity);
    });

    incrementCount.addEventListener("click", function() {
        quantity += 1;
        quantityCount.innerHTML = quantity;
        totalCount += 1;
        cartCountUpdate();
        cartAddProducts(product, quantity);
    });

    decrementCount.addEventListener("click", function() {
        if (quantity > 1) {
            quantity -= 1;
            totalCount -= 1;
        } else {
            quantity = 0;
            counter.style.display = "none";
            addButtonCount.style.display = "block";
            totalCount -= 1;
        }
        quantityCount.innerHTML = quantity;
        cartCountUpdate();
        if (quantity > 0) cartAddProducts(product, quantity);
    });
}

products.forEach(product => showProductList(product));


// Close form js

const closeIcon = document.getElementById("closeIcon");

closeIcon.addEventListener("click", function(){
    const frmId= document.getElementById("frmId");

    frmId.style.display= "none";

});


// display Form


const btn2= document.getElementById("btn2"); 
const frmId= document.getElementById("frmId");

btn2.addEventListener("click", function(){
    frmId.style.display= "block";   

});



// Hemberg Menu
const barIcon = document.getElementById("barIcon");
const cntr = document.querySelector(".cntr");
const rghCont= document.querySelector(".rghCont");
 

barIcon.addEventListener("click", function () {
    if (cntr.style.display === "none" || cntr.style.display === "") {
        cntr.style.display = "block";
        barIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`; 
    } else {
        cntr.style.display = "none";
        barIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        barIcon.style.color= "white";
    }
   
    if(rghCont.style.display === "none" || rghCont.style.display === ""){
       rghCont.style.display= "block";
    } else{
        rghCont.style.display= "none";
    }


});


// sign up toggle functionality krni

let formContainer= document.getElementById("form-container");
let togleLogin= document.getElementById("togleLogin");


togleLogin.addEventListener("click", function(){
    formContainer.innerHTML= 
    `
       <h2>Login Form</h2>
        <input type="text" placeholder="Enter your name" id="name"><br><br>
        <input type="email" placeholder="Email" id="mail"><br><br>
        <input type="password" placeholder="Password" id="paswrd"><br>
        <button id="btnFld">Sign up</button>
        <p>Already a member?<a id="togleSign"> Sign up</a></p>

    `

let togleSign= document.getElementById("togleSign");

togleSign.addEventListener("click", function(){
    formContainer.innerHTML=
    `
        <h2>Sign Up Form</h2><br>
        <input type="email" placeholder="Email" id="mail"><br><br>
        <input type="password" placeholder="Password" id="paswrd"><br>
        <button id="btnFld">Sign up</button>
        <p>Create a new account?<a id="togleLogin"> Login</a></p>
    
    `
  document.getElementById("togleLogin").addEventListener("click",function(){
    togleLogin.click();
  });


});


});

