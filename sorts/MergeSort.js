/*
 * 归并排序
 * https://visualgo.net/zh/sorting
 * */
const merge = (leftList, rightList) => {
	const results = [];
	let i = 0;
	let j = 0;

	while (i < leftList.length && j < rightList.length) {
		if (leftList[i] < rightList[j]) {
			results.push(leftList[i]);
			i++;
		} else {
			results.push(rightList[j]);
			j++;
		}
	}
	return results.concat(leftList.slice(i), rightList.slice(j));
};

const mergeSort = (list) => {
	if (list.length < 2) return list;

	const middle = Math.floor(list.length / 2);
	const leftList = list.slice(0, middle);
	const rightList = list.slice(middle, list.length);

	return merge(mergeSort(leftList), mergeSort(rightList));
};

console.log(mergeSort([1, 0, 4, 1, 2, 3, 65, 7, 85, 3]));
