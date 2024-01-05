"use strict";

// ------------------------------------- BUBBLE SORT -----------------------------------------------

/*
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.

Bubble Sort is Stable Sorting Algorithm and it is In-place Sorting Algorithm.

Here is a step-by-step explanation of the Bubble Sort algorithm:

1) Start at the beginning of the list.
2) Compare the first two elements.
3) If the first element is greater than the second element, swap them.
4) Move to the next pair of elements and repeat step 3.
5) Continue this process until the end of the list is reached.
6) After the first pass, the largest element is guaranteed to be at the end of the list.
7) Repeat the process for the remaining elements (excluding the last sorted element) until the entire list is sorted.

Now, let's talk about the time complexity and space complexity of Bubble Sort:

Time Complexity:
i) Worst-case time complexity: O(n^2) - Occurs when the list is in reverse order, and the algorithm must perform maximum swaps.
ii) Best-case time complexity: O(n) - Occurs when the list is already sorted, and no swaps are needed.
iii) Average-case time complexity: O(n^2) - On average, it requires n^2/2 comparisons and n^2/2 swaps.

Space Complexity: Bubble Sort is an in-place sorting algorithm, meaning it doesn't require additional memory to sort the list.

*/

//Here is a simple implementation of Bubble Sort in JavaScript:

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
}

const unsortedArray = [64, 25, 12, 22, 11];

const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

/*
To optimize the Bubble Sort algorithm further, we can introduce a flag that keeps track of whether any swaps were made during the current pass through the array. If no swaps are made, it means the array is already sorted, and we can terminate the algorithm early. This optimization is particularly useful when the array is nearly sorted, as it avoids unnecessary passes.

In this code:

1) The swapped variable is set to false at the start of each pass.
2) During each pass through the inner loop, if a swap occurs, swapped is set to true.
3) After each pass, if swapped remains false, it means no swaps were made, indicating that the array is already sorted. Therefore, the loop breaks early, saving unnecessary iterations.

While this optimization can significantly improve performance in nearly-sorted arrays, the worst-case and average-case time complexity of the algorithm remain O(n^2). The space complexity is still O(1) since Bubble Sort is an in-place sorting algorithm.
*/
