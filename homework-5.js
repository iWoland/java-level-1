﻿// Задание 1
//Написать функцию преобразования цвета из 10-ного представления в 16-ный. 
//Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.

var num1,num2,num3;

function toHEX(num1,num2,num3)
{
 if (num1 >255 || num2>255 || num3>255)
  {
	alert('Одно из чисел более 255');
  }
  else
  {
	hexStr1 = num1.toString(16);
	hexStr2 = num2.toString(16);
	hexStr3 = num2.toString(16);
	return hexStr1+hexStr2+hexStr3;
  }
}

toHEX (100,254,50);


//Задание 2
//Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. 
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var e, massiv = {};

function transform(e){
	if (e <= 999)
	{
	e = e + '';
	massiv['сотни'] = e.substr(0,1);
	massiv['десятки'] = e.substr(1,1);
	massiv['единицы'] = e.substr(2,2);
	}
	else {
	console.log('Число более 999');
	}
return massiv;
}
transform(123);
	