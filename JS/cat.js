

const elem = document.querySelector('.photos');
let count = 0;
const catname = ["Felix","Cruise"];


elem.addEventListener("click", function(photo){

    const click = photo.target;
    Addcount();
    
    console.log(click);
});

function Addcount(){
    count++;
    const counting = document.querySelector('.counter');
    counting.innerHTML = count;
}


function addCatname (){
    const nameCat = document.querySelector('.nameofCat');  
   
       nameCat.innerHTML = catname[0];  
      
}
addCatname();


