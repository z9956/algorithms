/*
 * 冒泡排序
 * https://visualgo.net/zh/sorting
 * */

const bubbleSort = (items) => {
	let swapped = true;

	while (swapped) {
		swapped = false;

		for (let i = 0; i < items.length - 1; i++) {
			if (items[i] > items[i + 1]) {
				[items[i], items[i + 1]] = [items[i + 1], items[i]];
				swapped = true;
			}
		}
	}
	return items;
};

const bubbleSortTwo = (items) => {
	for (let i = 0; i < items.length - 1; i++) {
		for (let j = 0; j < items.length - 1; j++) {
			if (items[j] > items[j + 1]) {
				[items[j], items[j + 1]] = [items[j + 1], items[j]];
			}
		}
	}
	return items;
};

console.log(bubbleSortTwo([2, 3, 6, 1]));
