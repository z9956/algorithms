/*
 * 选择排序
 * https://visualgo.net/zh/sorting
 * */
const selectionSort = (originalList) => {
	const list = [...originalList];

	for (let i = 0; i < list.length - 1; i++) {
		let min = i;

		for (let j = i + 1; j < list.length; j++) {
			if (list[j] < list[min]) min = j;
		}
		if (min !== 1) [list[i], list[min]] = [list[min], list[i]];
	}
	return list;
};

console.log(selectionSort([3, 5, 7, 1]));
console.log(selectionSort([1, 1, 23, 6, 4, 5, 0, 8, 5, 7, 1]));
