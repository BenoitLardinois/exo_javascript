// Permier exercice
let a = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(a);
const b = prompt('Devinez le chiffre secret') * 1;
function guess_the_secret_number(){
	if(b === a){
		alert("Gagné!");
	}else if(b != a){
		 const b = prompt('Non, test encore!') * 1;
		 if(b === a){
		 	alert("Gagné!");
		 }else if(b != a){
		 const b = prompt('Non, test encore!') * 1;
		 if(b === a){
		 	alert("Gagné!");
		 	}else{
		 		alert("Perdu :( !");
		 	}
		 }
		}
	}
console.log(guess_the_secret_number());
console.log("le nombre que vous avez ecris : " + b);
console.log("le nombre qu'il fallait devinez : " + a);
 


// Deuxième exercice
let h = prompt('Devinez le chiffre secret') * 1;
function IsRight(n){
 if(h === n){
 	return true;
 }else{
 	return false;
 }
}
console.log(IsRight(4));
