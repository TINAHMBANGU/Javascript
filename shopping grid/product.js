let listProduct =[
        {id: 1, 
        image:'https://i5.walmartimages.com/seo/Dtydtpe-Clearance-Sales-Flannel-Shirt-Men-Men-S-Fashionable-Simple-Corduroy-Business-Slim-Fit-Solid-Color-Cardigan-Long-Sleeve-Mens-Shirts-Blue_0a056a2d-1c53-4946-9228-25aab431fbaa.8e7180402f2ff21f77f3074d17059e68.jpeg', 
        title:'puma',
        price:'$35.00', 
        name:'Shirt', 
        discount:'$25.00',
        dateofcreation:'04/23/2024', 
        idcategories: 2, 
        idclothing: 1}
    
]
let categories=[
    {id: 1, name:'Men'}, {id: 2, name:'Women'}, {id: 3, name:'Children'}
]

let clothing =[
    {id: 1, name:'Dresses'},{id: 2, name:'Bottoms'}, {id: 3, name:'shoes'}, {id: 4, name:'Shirts'}, {id: 5, name:'Sweaters/Jackets'}, 
    {id: 6, name:'Hats'}
]

readAlllist();
       
function readAlllist(){

    var mydiv = document.getElementById('productdata');
    let elements ="";
    listProduct.map(d => (
        elements +=`
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2" id = '#row`+d.id+`'>
            <div class="card shop-list border-0 position-relative">
                <ul class="label list-unstyled mb-0">
                    <li><a href="javascript:void(0)" class="badge badge-link rounded-pill bg-success">${d.title}</a></li>
                </ul>
                <div class="shop-image position-relative overflow-hidden rounded shadow">
                    <a href="#" onclick= {sendProduct(${d.id})} id="image">
                        <img src="${d.image}" class="img-fluid" alt="">
                    </a>
                    <a href="#" onclick={sendProduct(${d.id})} class="overlay-work">
                        <img src="${d.image}" class="img-fluid" alt="">
                    </a>
                    <ul class="list-unstyled shop-icons">
                        <li><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger"><i data-feather="heart" class="icons"></i></a></li>
                        <li class="mt-2"><a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#productview" class="btn btn-icon btn-pills btn-soft-primary"><i data-feather="eye" class="icons"></i></a></li>
                        <li class="mt-2"><a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning"><i data-feather="shopping-cart" class="icons"></i></a></li>
                    </ul>
                </div>
                <div class="card-body content pt-4 p-2">
                    <a href="shop-product-detail.html" class="text-dark product-name h6">${d.name}</a>
                    <div class="d-flex justify-content-between mt-1">
                        <h6 class="text-muted small fst-italic mb-0 mt-1">${d.discount}<del class="text-danger ms-2">${d.price}</del> </h6>
                        <ul class="list-unstyled text-warning mb-0">
                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <button class="updbtn" onclick = {editProduct(${d.id})}>Update</button>
            <button class="deletbtn" onclick = {deletProduct(${d.id})}>Delete</button>      
        </div>
        `
    ))

    mydiv.innerHTML = elements;
    readClothing()
    readCategories()

}



document.getElementById("createForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let img = document.getElementById('image1').value
    
    let details = {
        id: listProduct.length + 1, 
        name: document.getElementById('name1').value, 
        image: img, 
        price: document.getElementById('price1').value, 
        discount: document.getElementById('discount1').value, 
        title: document.getElementById('title1').value,

        idcategories: document.getElementById('cates').value,
        idclothing: document.getElementById('cloth').value
    }

    listProduct.push(details);
    
    readAlllist();

    document.getElementById('createForm').reset();

})



function readCategories(){
    
    var myCategrs = document.getElementById('cates');
    var myCategrs1 = document.getElementById('cates1');
    let elements ="";

    categories.map(d =>(
        elements += `
        <option value="${d.id}">${d.name}</option>
        `
    ))
    myCategrs.innerHTML = elements;
    myCategrs1.innerHTML = elements;
}


function readClothing(){

    var myClothes = document.getElementById('cloth');
    var myClothes1 = document.getElementById('cloth1');
    let elements ="";

    clothing.map(d =>(
        elements += `
        <option value="${d.id}">${d.name}</option>
        `
    ))

    myClothes.innerHTML = elements;
    myClothes1.innerHTML = elements;

}

function editProduct(id){
    document.querySelector(".update").style.display = "block";
    document.querySelector(".create").style.display = "none"; 


    var updateObj = listProduct.find(f => f.id === id)
    document.getElementById("formid").value = id;
    document.getElementById('name2').value = updateObj.name;
    document.getElementById('price2').value = updateObj.price;
    document.getElementById('image2').value = updateObj.image;
    document.getElementById('discount2').value = updateObj.discount;
    document.getElementById('title2').value = updateObj.title;
  
    document.getElementById('cates1').options[value= updateObj.idcategories].setAttribute("selected", "selected");
    document.getElementById('cates1').options[value= updateObj.idclothing].setAttribute("selected", "selected");

}



document.getElementById("updateForm").addEventListener("submit", (e) => {
    e.preventDefault();
    var updateObj = {
        id: parseInt(document.querySelector("#formid").value), 
        name: document.querySelector(".name3").value, 
        image: document.querySelector(".image3").value, 
        price: document.querySelector(".price3").value, 
        discount: document.querySelector(".discount3").value,  
        title: document.querySelector(".title3").value, 

        idcategories: document.getElementById('cates1').value,
        idclothing: document.getElementById('cloth1').value

    };
    var index = listProduct.findIndex(f => f.id === updateObj.id);
    
    listProduct[index] = updateObj
    document.querySelector(".update").style.display = "none";
    document.querySelector(".create").style.display = "block"; 

    readAlllist();

    document.getElementById('updateForm').reset();


   
})

function deletProduct(id){

    var newproduct = listProduct.filter(f => f.id !== id);
    listProduct = newproduct;

    readAlllist();

}

function sendProduct(id){
    var product = listProduct.filter(f => f.id === id);
    sessionStorage.setItem('productname', product[0].name);
    sessionStorage.setItem('productimage', product[0].image);
    sessionStorage.setItem('productprice', product[0].price);
    sessionStorage.setItem('productdiscount', product[0].discount);
    sessionStorage.setItem('productcreation', product[0].dateofcreation);
    
    window.location.assign('shop-product-detail.html');

}

