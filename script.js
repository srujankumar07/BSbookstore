function mail(){
        alert("we will notify when new items are  added to the site")
    }



function add(){
        alert("added to cart")
}

function buy(){
    alert("redirecting to best deals page.........")
}


function buynow(){
    alert("Please add any product to the cart")
}



function shop(){
    alert("Enjoyyyyyyyyy the best deals and offers at BS BOOKSTORE")
}


var header = document.querySelector("h1")
header
header.style.color = 'white'
function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color='#';
    for(var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color  
}
function changeHeaderColor(){
    colorInput=getRandomColor()
    header.style.color=colorInput;
}setInterval("changeHeaderColor()",500);