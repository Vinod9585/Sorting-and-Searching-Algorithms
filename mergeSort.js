"use strict";

/*
Merge Sort is a popular divide-and-conquer sorting algorithm that follows the following steps:

1) Divide: The unsorted list is divided into two halves.

2) Conquer: Each half is sorted recursively using the merge sort algorithm.

3) Combine: The two sorted halves are merged to produce a single sorted list.

Here's a more detailed explanation:

Merge Sort Algorithm:

1) Divide:

i) If the array has 0 or 1 elements, it is already sorted.
ii) Otherwise, divide the array into two halves.

2) Conquer:

Recursively sort the two halves of the array using the merge sort algorithm.

3) Combine:

Merge the two sorted halves to produce a single sorted array.
    i) Start with an empty temporary array.
    ii) Compare the elements from the two halves and add the smaller element to the temporary array.
    iii) Move to the next element in the half from which an element was added.
    iv) Repeat this process until all elements are added to the temporary array.
    v) Copy the temporary array back to the original array.
    
Time Complexity:
    The time complexity of Merge Sort is O(n log n), where 'n' is the number of elements in the array. This is because, at each level of recursion, the array is divided into two halves, and the merging step takes linear time. The recurrence relation for the time complexity is T(n) = 2T(n/2) + O(n).

Space Complexity:
The space complexity of Merge Sort is O(n) due to the additional space required for the temporary array during the merge step. Each level of recursion requires a temporary array of size 'n', and since the depth of the recursion tree is log(n), the total space complexity is O(n log n).

Stability:
Merge Sort is a stable sorting algorithm, meaning that it maintains the relative order of equal elements in the sorted output.

Advantages:
1) Predictable performance with a consistent O(n log n) time complexity.
2) Efficient for linked lists as well as arrays due to its sequential access pattern.

Disadvantages:
1) Requires additional space for the temporary array, making it less memory-efficient for large datasets.
2) The iterative version of Merge Sort can be less intuitive compared to other sorting algorithms.

Despite its drawbacks, Merge Sort is widely used and serves as a basis for more complex algorithms like Timsort, which is used in Python's sorted() function.

*/

function mergeSort(arr, low, high) {
  if (low === high) {
    return arr;
  }

  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  const result = [];

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    result.push(arr[i]);
    i++;
  }
  while (j <= high) {
    result.push(arr[j]);
    j++;
  }

  for (let k = 0; k < result.length; k++) {
    arr[low + k] = result[k];
  }
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
mergeSort(unsortedArray, 0, 10);

console.log(unsortedArray);

/*

Merge Sort Algorithm:

1) MergeSort(arr, left, right):

If left is less than right:
    i) Calculate mid as (left + right) / 2
    ii) Recursively call MergeSort for the left half (MergeSort(arr, left, mid))
    iii) Recursively call MergeSort for the right half (MergeSort(arr, mid + 1, right))
    iv) Merge the two halves (Merge(arr, left, mid, right))

2) Merge(arr, left, mid, right):
    i) Calculate sizes of two subarrays to be merged: n1 = mid - left + 1 and n2 = right - mid
    ii) Create temporary arrays L[0...n1-1] and R[0...n2-1]
    iii) Copy data to temporary arrays L[] and R[]
    iv) Merge the two arrays back into the original array:
        a) Initialize indices i, j, and k to 0
        b) While i < n1 and j < n2:
            I) If L[i] <= R[j], set arr[k] = L[i] and increment i
            II) Else, set arr[k] = R[j] and increment j
            III) Increment k
        c) Copy the remaining elements of L[], if there are any
        d) Copy the remaining elements of R[], if there are any
*/
