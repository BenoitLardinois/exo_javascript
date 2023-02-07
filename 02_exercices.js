
function is_palindrome(str){
	let a = str.toLowerCase();
	let split_string = str.split("");
	let reverse_array = split_string.reverse();
	let join_array = reverse_array.join("").toLowerCase();
	if(a === join_array){
		return true;
	}else{
		return false;
	}

}
console.log(is_palindrome("kayak")); //true
console.log(is_palindrome("Kayak")); //true
console.log(is_palindrome("SOS")); //true
console.log(is_palindrome("Hello")); //false
console.log(is_palindrome("lOl")); //true
console.log(is_palindrome("Nourriture")); //true