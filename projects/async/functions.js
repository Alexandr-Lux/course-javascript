/* ДЗ 5 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунд

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, seconds * 1000);
  });
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
// function loadAndSortTowns() {
// 	return new Promise((res) => {
// 		const xhr = new XMLHttpRequest();

// 		xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', false);
// 		xhr.send();

// 		let townsAsObj = JSON.parse(xhr.responseText);
// 		let townsAsArr = townsAsObj.reduce((prev, curr) => {
// 			return [...prev, curr.name]
// 		}, []);

// 		let townsSorted = townsAsArr.sort();

// 		if (xhr.status === 200) {
// 			res(townsSorted);
// 		}
// 	})
// }

function loadAndSortTowns() {
  return new Promise((res) => {
    const xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json',
      false
    );
    xhr.send();

    const townsAsObj = JSON.parse(xhr.responseText);

    const townsSortedObj = townsAsObj.sort((prev, next) => {
      if (prev.name < next.name) {
        return -1;
      } else {
        return 1;
      }
    });

    if (xhr.status === 200) {
      res(townsSortedObj);
    }
  });
}

export { delayPromise, loadAndSortTowns };
