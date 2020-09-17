// 1.  Знайдіть суму всіх цифр від 1 до 100.

// let count = 0;

// for (let i = 0; i <= 100; i++) {
// 	count += i;
// }

// alert(count);


// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length ; i++) {
// 	console.log(arr[i]);
// }

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

// let arrMax = [-1, 22, 3, 44, 5];
// let bigger= -Infinity;

// for (let i = 0; i < arrMax.length ; i++) {
// 	if (bigger < arrMax[i]) {
// 		bigger = arrMax[i];			
// 	}
// }

// console.log(bigger);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. 
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних
// від юзера. 

/*let usersNumber = prompt('Enter eight digits through a comma', '0,-2,-10,5,10,55,1,2');
let lessThenZero = 0;
let moreThenZero = 0;
let equalZero = 0;

usersNumber = usersNumber.split(',');

for (let i = 0; i < usersNumber.length; i++) {
	if(usersNumber[i] < 0 ){
		lessThenZero += 1;
	}else if (usersNumber[i] == 0) {
		equalZero += 1;
	}else if (usersNumber[i] > 0) {
		moreThenZero += 1;
	}
}

alert(`Ви ввели числа: менші за нуль  ${lessThenZero}, більші за нуль  ${moreThenZero}, рівні нулю  ${equalZero}`);
*/
// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

/*const NUMBER = 8;

for (let i = 1; i <= 9; i++) {
	console.log(NUMBER*i);
}*/

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if 
// вивести на екран цифри, які більше 3-х, але менше 10.

/*let arrElements = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arrElements.length; i++) {
	if( arrElements[i] > 3 && arrElements[i] < 10) {
		console.log(arrElements[i]);
	}
}*/

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , 
// провести математичну операцію, далі вивести результат і спитатись чи хоче юзер 
// повторити?


let userFirstNumber, userSecondNumber, userSign;

while (confirm('Хочете провести якісь обрахунки?')) {

	userFirstNumber = +prompt(' vdkkj', 5);
	userSecondNumber = +prompt(' vdkkj', 5);
	userSign = prompt(' vdkkj', '+');

	switch (userSign) {
		case '+':
			alert( `Відповідь: ${userFirstNumber + userSecondNumber}`);
			break;
		case '-': 
			alert( `Відповідь: ${userFirstNumber - userSecondNumber}`);
			break;
		case '*':
			alert( `Відповідь: ${userFirstNumber * userSecondNumber}`);
			break;
		case '/':
			alert( `Відповідь: ${userFirstNumber / userSecondNumber}`);
			break;
		default:
			alert('Введіть коректні дані');
			break;
	}
};