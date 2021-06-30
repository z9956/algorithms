/*
 * 插入排序
 * https://visualgo.net/zh/sorting
 * */

const insertionSort = (originalList) => {
	const list = [...originalList];

	for (let i = 1; i < list.length; i++) {
		let j;
		const current = list[i];

		for (j = i - 1; i >= 0 && list[j] > current; j--) {
			list[j + 1] = list[j];
		}

		list[j + 1] = current;
	}
	return list;
};

console.log(insertionSort([5, 4, 2, 7, 1, 2, 0, 1]));
