// Masala : n ta elementdan tashkil topgan massiv mavjud. Indexlar toqlar va juftlar sonini chiqaruvchi dastur tuzing

let n=8;
function myFunction(){
    if(n%2==0){
        console.log(Math.floor(n/2));
    }
   
    else{
        console.log(Math.floor((n/2)+1));
    }
}

myFunction();