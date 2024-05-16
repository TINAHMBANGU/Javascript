let productDetails = [{
    name: sessionStorage.getItem('productname'), 
    image: sessionStorage.getItem('productimage'), 
    price: sessionStorage.getItem('productprice'),  
    discount: sessionStorage.getItem('productdiscount'), 
    dateofcreation: sessionStorage.getItem('productcreation'),  
    overview:'This is our latest addition and assure you that it will be a great look on you.'}

]

readDetails();

function readDetails(){
    var details = document.getElementById('details');
    let elements = '';
    productDetails.map(d =>(
        elements += `
             <div class="row align-items-center">
                    <div class="col-md-5">
                        <div class="tiny-single-item">
                            <div class="tiny-slide"><img src="${d.image}" class="img-fluid rounded" alt=""></div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ms-md-4">
                            <h4 class="title">${d.name}</h4>
                            <h5 class="text-muted">${d.discount} <del class="text-danger ms-2">${d.price}</del> </h5>
                            <ul class="list-unstyled text-warning h5 mb-0">
                                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                            </ul>
                            
                            <h5 class="mt-4 py-2">Overview :</h5>
                            <p>${d.overview}</p>
                        </div>
                    </div>
                </div>`
    ))
         
          details.innerHTML = elements;
}