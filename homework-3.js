//------- Задание 1-(треугольник)------ 
var i,x;
x='#';
for(i=0;i<7;i++)
{
	console.log(x);
	x=x+'#';
}

//------- Задание 2-(Шахматная доска)---
var x,y,p;
p='';
for (x=0; x<=7; x++)
{
	for (y = 0; y<=14; y++)
	{
		if (x%2 == y%2)
		{p=p+'#';}
		else
		{p=p+' ';}
	}
	p=p+'\n';
}

console.log(p);

//------- Задание 3-(со * из ДЗ 2)----------
Было выполнено в HomeWork-2.
https://github.com/iWoland/java-level-1/blob/master/homework-2.js 