"use strict";

/*
Insertion Sort is a simple and intuitive sorting algorithm. It builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has several advantages, such as simple implementation, efficient for (quite) small data sets, and more efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort.

How Insertion Sort Works:

1) Starting from the second element: The algorithm considers the first element to be already sorted and starts with the second element.
2) Compare with previous elements: The current element is compared with the elements in the sorted part (on the left side).
3) Shift larger elements: If the current element is smaller than the compared element, the compared element is shifted to the right.
4) Insert the current element: This process continues until the correct position for the current element is found, and it is placed there.
5) Repeat for all elements: This process is repeated for each element in the array.

Time Complexity:

i) Best-case time complexity: O(n) - This occurs when the array is already sorted, and only minimal comparisons are needed.
ii) Worst-case time complexity: O(n^2) - This occurs when the array is sorted in reverse order, requiring the maximum number of comparisons and shifts.
iii) Average-case time complexity: O(n^2) - For an average case, the number of comparisons is quadratic.

Space Complexity:

Space complexity: O(1) - Insertion sort is an in-place sorting algorithm. It doesn't require any extra space that grows with the input size, other than a minimal amount of extra memory for variables.
Optimized JavaScript Implementation:

*/
// While Insertion Sort is inherently O(n^2) in its time complexity, the implementation can be optimized for better performance in the best-case scenario (almost sorted array).

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}

const unsortedArray = [4, 3, 2, 10, 234, 12, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray);

/*
In this implementation, the function 'insertionSort' iteratively moves through the array. For each element, it finds the appropriate position by comparing it with each of the elements before it and shifting those elements one position up to make space for the new element. This continues until the array is sorted.
*/
