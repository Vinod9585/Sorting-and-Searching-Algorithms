"use strict";
/* 
// ------------------------------------- BUBBLE SORT -----------------------------------------------

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

// time complexity: O(n^2)
// space complexity: O(1)

// ----------------------------------------------------------------------------------------------------

// ------------------------------------- SELECTION SORT -----------------------------------------------

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

// time complexity: O(n^2)
// space complexity: O(1)


// ----------------------------------------------------------------------------------------------------

// ------------------------------------- INSERTION SORT -----------------------------------------------

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

// time complexity: O(n^2)
// space complexity: O(1)


*/
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------  MERGE SORT -----------------------------------------------

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

// time complexity: O(n log n)
// space complexity: O(n)
