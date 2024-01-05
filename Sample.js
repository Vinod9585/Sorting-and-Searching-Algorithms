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


// ----------------------------------------------------------------------------------------------------

// -------------------------------------  SORT -----------------------------------------------

function sortTwoArray(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  let i = 0;
  let j = 0;
  let result = "";

  while (i < m && j < n) {
    if (arr1[i] <= arr2[j]) {
      result += arr1[i] + " ";
      i++;
    } else {
      result += arr2[j] + " ";
      j++;
    }
  }
  while (i < m) {
    result += arr1[i] + " ";
    i++;
  }
  while (j < n) {
    result += arr2[j] + " ";
    j++;
  }

  console.log(result);
}

sortTwoArray([2, 4, 54, 67], [2, 7, 23, 54, 55, 56, 67, 89]);


*/

//--------------------------------------------

function sortArr(arr, low, mid, high) {
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

  const finalArray = [
    ...arr.slice(0, low),
    ...result,
    ...arr.slice(high + 1, arr.length),
  ];

  let temp = "";

  for (let i = 0; i < finalArray.length; i++) {
    temp += finalArray[i] + " ";
  }

  return temp;
}

const unsortedArray = [
  "vinod",
  "shende",
  12,
  1,
  45,
  2,
  3,
  4,
  10,
  12,
  1,
  2,
  3,
  5,
  6,
  23,
  4,
  "how",
  "are",
  "you",
];

console.log(sortArr(unsortedArray, 5, 9, 14));

//

//
