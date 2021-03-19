var dicee_1 = Math.random();
var dicee_2 = Math.random();


dicee_1 = ((dicee_1 * 6) + 1);
dicee_2 = ((dicee_2 * 6) + 1);


dicee_1 = Math.floor(dicee_1);
dicee_2 = Math.floor(dicee_2);

// dicee_1

if(dicee_1 === 1){
   
    document.getElementById("image_1").src = "dice1.png";
}else if(dicee_1 === 2){
   
    document.getElementById("image_1").src = "dice2.png";
}else if(dicee_1 === 3){
  
    document.getElementById("image_1").src = "dice3.png";
}else if(dicee_1 === 4){
 
    document.getElementById("image_1").src = "dice4.png";
}else if(dicee_1 === 5){
   
    document.getElementById("image_1").src = "dice5.png";
}else{
    
    document.getElementById("image_1").src = "dice6.png";
}


// dicee_2

if(dicee_2 === 1){
   
    document.getElementById("image_2").src = "dice1.png";
}else if(dicee_2 === 2){
   
    document.getElementById("image_2").src = "dice2.png";
}else if(dicee_2 === 3){
  
    document.getElementById("image_2").src = "dice3.png";
}else if(dicee_2 === 4){
 
    document.getElementById("image_2").src = "dice4.png";
}else if(dicee_2 === 5){
   
    document.getElementById("image_2").src = "dice5.png";
}else{
    
    document.getElementById("image_2").src = "dice6.png";
}


// RESULT

if(dicee_1 > dicee_2){
    document.getElementById("title").innerHTML = "Player 1 WON..."
}else if(dicee_1 < dicee_2){
    document.getElementById("title").innerHTML = "Player 2 WON..."
}




