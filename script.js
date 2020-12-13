//project carousel
//object approach: group title, desc and tech as object values
class project{
    constructor(title, imgLink, tech, description){
        this.title=title;
        this.imgLink=imgLink;
        this.tech=tech;
        this.description=description;
    }
}
//variables, text and dom elements
let title1="Taco Restaurant Website";
let title2="Date Generator";
let img1="images/taco.PNG";
let img2="images/date.PNG"
let tech1="HTML, CSS, JavaScript, Google Places API"
let tech2="HTML, CSS, JavaScript, Google Places API"
let desc1="A recreated copy of a local taco restaurant's website";
let desc2="An app that generates a list of local places for dates based on chosen preferences";
let projectTitle=document.querySelector("#projectTitle");
let projectImage=document.querySelector("#screenShot");
let projectTech=document.querySelector("#techUsed");
let projectDescription=document.querySelector("#projectDescription");
//project objects
let project1=new project(title1,img1,tech1,desc1);
let project2=new project(title2,img2,tech2,desc2);
let projectList=[project1,project2];
//shows current "card"- set of project info, hides others
function showCard(cardIndex){
    projectTitle.innerHTML=projectList[cardIndex].title;
    projectImage.src=projectList[cardIndex].imgLink;
    projectTech.innerHTML=projectList[cardIndex].tech;
    projectDescription.innerHTML=projectList[cardIndex].description;
}
let cardIndex=0;
//shifts index and updates current project, direction is either left or right
function shiftIndex(direction){
    if(direction=="left"){
        cardIndex-=1;
        //if negative, set to end of list instead
        if(cardIndex<0){
            cardIndex=projectList.length-1;
        }
        showCard(cardIndex);
    }
    if(direction=="right"){
        cardIndex+=1;
        if(cardIndex>projectList.length-1){
            cardIndex=0;
        }
        showCard(cardIndex);
    }
}
//add listner to both buttons
let leftButton=document.querySelector("#leftButton"); 
let rightButton=document.querySelector("#rightButton");
leftButton.addEventListener("click", function(){shiftIndex("left");});
rightButton.addEventListener("click", function(){shiftIndex("right");});
// leftButton.onclick=shiftIndex("left");  
// rightButton.onclick=shiftIndex("right");  
//form 
let name=document.querySelector("#name");
let subject=document.querySelector("#subject");
let email=document.querySelector("#email");
let message=document.querySelector("#message");
function validateForm(){
    if(name.value=="A"){
        console.log("A");
    }
    else{

    }
}
validateForm();

let form=document.querySelector("#contactForm");
