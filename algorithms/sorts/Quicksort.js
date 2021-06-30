/*
 * 快速排序
 * https://visualgo.net/zh/sorting
 * */
const quicksort = (list) => {
	const len = list.length;

	if (len <= 1) return list;

	const PIVOT = list[0];
	const GREATER = [];
	const LESSER = [];

	for (let i = 1; i < len; i++) {
		if (list[i] > PIVOT) {
			GREATER.push(list[i]);
		} else {
			LESSER.push(list[i]);
		}
	}

	let sorted = quicksort(LESSER);
	sorted.push(PIVOT);
	sorted = sorted.concat(quicksort(GREATER));

	return sorted;
};

console.log(quicksort([0, 5, 3, 2, 2]));
