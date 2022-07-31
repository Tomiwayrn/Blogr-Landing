const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const navbar = document.querySelector(".navbar");
const currentDropdown = document.querySelectorAll(".drop-downs")
const dropDownButtons = document.querySelectorAll(".drop-downbtn");


//toggle btn funtionality

toggleBtn.addEventListener("click", ()=>{
    setTimeout(() => {
        closeBtn.style.display = "block";
      toggleBtn.style.display = "none";
      navbar.classList.add("show-nav")    
    }, 600);
    
});


//close btn

closeBtn.addEventListener("click" , ()=>{
    setTimeout(() => {
        closeBtn.style.display= "none";
    toggleBtn.style.display = "block";
    navbar.classList.remove("show-nav") 
      
    }, 600); 
});


// show dropdown

dropDownButtons.forEach(btn => {
  btn.addEventListener("click" , ()=>{
   openCurrentTab()
   console.log ()   
    rotateImg()
  })    
});

//funtionality for drop down

function openCurrentTab (){
    dropDownButtons.forEach(btn => {
        if(btn != event.target) {
            btn.nextElementSibling.classList.remove("show-dropdown")
        }
        else  event.target.nextElementSibling.classList.toggle("show-dropdown")
    
    });
};

//function to rotate icon on click

let rotate = 0 ;
function rotateImg() 

{ 
    rotate += 180
    event.target.lastElementChild.style.transform = `rotate(${rotate}deg)`
    if (rotate == 380){
        rotate = 0 ;
    }
  
    
};


