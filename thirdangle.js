/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

const thirdAngle = (a, b) => {
	const knownAngles = a + b;
  const unknownAngle = 180 - knownAngles;
  return unknownAngle;
}

console.log(thirdAngle(30, 80));