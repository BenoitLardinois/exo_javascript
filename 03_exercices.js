//calculer la moyenne de chaque élèves 
//1) transformer cette objet pour rajouter une propriété moyenne a chaque élèves
//2) Organiser les élèves en fonction de la moyenne la plus élevée
//3) afficher en console un top 3 des élèves 

const students = [
{
	name: 'John',
	notes: [1, 20, 18, 19, 12]
},
{
	name: 'Jane',
	notes: [5, 7, 12, 15, 1]
},
{
	name: 'Dominique',
	notes: [8, 19, 18, 11, 2]
},
{
	name: 'Marco',
	notes: [17, 9, 14, 6, 4]
},
{
	name: 'Maria',
	notes: [7, 13, 20, 20, 8]
},
]

//On créé un const qui sera une fonction et qui nous renverra la moyenne
const average = (notes) => {
	let sum = 0 
	for(let note of notes){
		sum = sum + note
	}
	return (sum / notes.length);
} 

for(let student of students){
	student.average = average(student.notes)
}

//.reduce((partial_sum, a) => partial_sum + a, 0) 