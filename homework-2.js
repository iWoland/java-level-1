//------- Задание 1-----------
/*
var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 Инкремент в префиксной форме. Переменная a модифицируется перед выполнением операции.
d = b++; alert(d); // 1 Инкремент в постфиксной форме. Переменная b модифицируется после выполнения операции.

c = (2+ ++a); //alert(c); // 5 Сначала выполняется инкремент ++a, a становится равна 3, затем выполняется операция сложения с 2. 2 + 3 = 5 
d = (2+ b++); //alert(d); // 4 Сначала к 2 прибавляем b = 2, полученное, после инкрементирования в постфиксной форме 3-мя строками выше. d = 4. Затем, после выполнения операции b увеличивается на 1.  

alert(a); // 3 В результате операций выше a = 3.
alert(b); // 3 В результате операций выше b = 3.
*/

//------- Задание 2: Чему будет равен x в примере ниже? -----------	
/*
var a = 2;

var x = 1 + (a *= 2) // a *= 2 эквивалентно a = a * 2. получается x = 1 + (a * 2) = 1 + ( 4 ) = 5
*/
//------- Задание 3 -----------	
//Забегая немного вперед. 
//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
//Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
//Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

var word;	
for (var i = 1; i<=100; i++){

	word = i;

	if (i % 3 == 0)
	 { word = 'Fizz';}
	if (i % 5 == 0)
	 { word = 'Buzz';}
	if (i % 15 == 0)
	 { word = 'FizzBuzz'; }
	
	alert (word);
}