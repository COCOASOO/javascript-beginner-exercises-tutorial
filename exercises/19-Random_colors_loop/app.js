function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: console.log("red"); break;

		case 2: console.log("yellow"); break;

		case 3: console.log("blue"); break;

		case 4: console.log("green"); break;

		default: return "black";

	}
}

function getAllStudentColors() {

	//your loop here
	for (let i = 1; i <= 10; i++) {

		let randomNumber = getColor(Math.floor(Math.random() * 4)+1);

	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

