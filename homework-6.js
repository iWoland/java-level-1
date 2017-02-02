//Задание 1
//Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], 
//а также функцию listToArray, которая создаёт массив из списка. 
//Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, 
//и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.


function arrayToList(array)
{
    var list = {};
    var lastRest = list;
    array.forEach(function(elem)
                  {
                      lastRest.value = elem;
                      lastRest.rest = {};
                      lastRest = lastRest.rest;
                  });
    lastRest.rest = null;
    return list;
}
function listToArray(list, array)
{
    array = array || [];
    if(list.rest != null)
    {
        array.push(list.value);
        list = list.rest;
        return listToArray(list, array);
    }
    else
    {
        return array;
    }
}
function prepend(elem, list)
{
    return {value: elem, rest: list};
}
function nth(list, index, current)
{
    current = current || 0;
    if(index == current)
    {
        return list.value;
    }
    else
    {
        if(list != null)
        {
            return nth(list.rest, index, current + 1);
        }
        else
        {
            return undefined;
        }
    }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList([1, 2, 3]), 1));

//Задание 2 
//Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
//Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. 
//Не используйте стандартный метод reverse.

reverseArray = function (array){
  var arrayTMP = [];
  for (var i = array.length; i > 0; i--){
    arrayTMP.push(array.pop());
  }
  return arrayTMP;
};

reverseArrayInPlace = function (array){
  var arrayTMP = [];
  for (var i = array.length; i > 0; i--){
    arrayTMP.push(array.pop());
  }
  for (var j = arrayTMP.length; j > 0; j--){
    array.unshift(arrayTMP.pop());   
  }
  return array;
};

console.log(reverseArray(["A", "B", "C", "D"]));

var arrayValue = [1, 2, 3, 4, 5, 6, 7];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);