

function btn(){
    var bornYear = document.querySelector('#birthYear').value; 
    var age =  2023 +( 100 - (2023 - bornYear) ); 
    document.querySelector(".ans").textContent = "your age will be 100 in this yeaar : "+age; 
}