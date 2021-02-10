function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob2.width/2+ob1.width/2&& ob2.x-ob1.x<ob1.width/2+ob2.width/2 && ob1.y-ob2.y<ob1.height/2+ob2.height/2&& ob2.y-ob1.y<ob1.height/2+ob2.height/2){
      return true;
    }
    else{
      return false;
    }
    
  }
  function bounceOff(ob3,ob4){
   if(ob3.x-ob4.x<ob3.width/2+ob4.width/2&&ob4.x-ob3.x<ob4.width/2+ob3.width/2){
     ob3.velocityX=ob3.velocityX*(-1);
     ob4.velocityX=ob4.velocityX*(-1);
   }
   if(ob3.y-ob4.y<ob3.height/2+ob4.height/2&& ob4.y-ob3.y<ob4.height/2+ob3.height/2){
    ob3.velocityY=ob3.velocityY*(-1);
    ob4.velocityY=ob4.velocityY*(-1);
   }
  }