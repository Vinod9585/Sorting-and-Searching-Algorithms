"use strict";

// ---------------------------------------- SELECTION SORT ---------------------------------------------

/*
Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. The algorithm divides the array into two parts: a sorted subarray and an unsorted subarray. In each iteration, the minimum element from the unsorted subarray is selected and swapped with the first element of the unsorted subarray.

Algorithm Steps:

1) Find the minimum element in the unsorted subarray.
2) Swap it with the first element of the unsorted subarray.
3) Expand the sorted subarray to include the newly placed minimum element.
4) Repeat the process for the remaining unsorted subarray until the entire array is sorted.

Time Complexity:

i) Worst-case time complexity: O(n^2) - Occurs when the input array is in reverse order, and for each element, we have to compare with all the remaining elements.
ii) Best-case time complexity: O(n^2) - Occurs when the input array is already sorted, and we still need to check every element.
iii) Average-case time complexity: O(n^2) - It requires n^2/2 comparisons and n swaps on average.

Space Complexity:

Selection Sort is an in-place sorting algorithm, meaning it doesn't require additional memory proportional to the size of the input. Its space complexity is O(1).

*/

// Here's an optimized implementation of Selection Sort in JavaScript:

function selectionSort(arr) {
  const n = arr.length;
  let minIndex;

  for (let i = 0; i < n - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

const unsortedArray = [64, 25, 12, 22, 11, 23, 8, 16, 389, 234];

const sortedArray = selectionSort(unsortedArray);

console.log(sortedArray);
