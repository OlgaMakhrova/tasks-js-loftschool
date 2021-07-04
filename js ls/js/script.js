const string = 'Привет, Как дела?';
function findVowels(string){
	const matched = string.match(/[аоеиыуэюя]/gi);
	return matched;
}
console.log(findVowels(string));

const string = "Привет! Как дела?";

// 	const vowels =["у", "е", "а", "о", "э", "я", "и", "ю", "ы"];

//  const getVowels = stringToFilter => {
// 	  let extractedVowels = "";

// 		for (let i = 0; i < stringToFilter.length; i++){
// 			const currentLetter = stringToFilter[i].toLowerCase();

// 			if (vowels.includes(currentLetter)) {
// 				extractedVowels += currentLetter;
// 			}
		
// 		}
// 		return extractedVowels;
	
//  };
//  	console.log(getVowels(string));



// #2 Выборка объекта var1
// const workers = [
// 	{"name":"John","salary":500},
// 	{"name":"Mike","salary":1300},
// 	{"name":"Linda","salary":1500},
// ];

// 	const getWorthyWorkers = (workersArr) => {
// 		const worthyWorkers = [];

// 		for (let i = 0; i < workersArr.length; i++){
// 			const currentWorker = workersArr[i];

// 			if (currentWorker.salary > 1000) {
// 				worthyWorkers.push(currentWorker.name);
// 			}
// 		}

// 		return worthyWorkers;

// 	};

// 		console.log(getWorthyWorkers(workers));
	 
// var2
const workers = [
	{"name":"John","salary":500},
	{"name":"Mike","salary":1300},
	{"name":"Linda","salary":1500},
];
const getWorthyWorkers = (workersArr) => {
			const worthyWorkers = [];

			workersArr.forEach(currentWorker =>{
				if (currentWorker.salary > 1000){
					worthyWorkers.push(currentWorker.name)
				}
			})
			return worthyWorkers;

};
		console.log(getWorthyWorkers(workers));

		// #3 Анализ строки

		const path = "/users/download/index.html";

		const isHtml = path => {
			const requiredExt = ".html";
			const pathExt = path.slice(-5);
			return pathExt === requiredExt;

			// if(pathExt === requiredExt){
			// 	return true
			// }else {
			// 	return false
			// }

		};
      console.log(isHtml(path));

			// #1 Фильтрация массива

			const mixedArray = [3,13,74,14,66,15,22,4];
      const isEven =  num  => { 
				
					return num % 2 == 0 ;
				}
				 
				console.log(isEven);
					 
		 

      // console.log(filterArray(mixedArray, isEven));