function prime_number(n){
	let a = Math.floor(Math.sqrt(n));
	let b = n != 1;
	if(n < 1){
		return false;
	}
	for(let i = 2; i < a + 1; i++){
		if(n % i == 0){
			b = false;
			break;
		}
	}
	return b;
}
console.log(prime_number(0)); //false
console.log(prime_number(1)); //false
console.log(prime_number(2)); //true
console.log(prime_number(3)); //true
console.log(prime_number(11)); //true
console.log(prime_number(12)); //false