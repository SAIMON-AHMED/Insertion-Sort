# Insertion Sort

**Description**: This JavaScript implementation of Insertion Sort arranges an array of numbers in ascending order. Insertion Sort is an efficient sorting algorithm for small data sets or nearly sorted arrays. It builds the sorted array one item at a time by shifting elements as needed to insert each new item in its proper place within the sorted portion of the array.

**Function Signature**

	function insertionSort(array) {
	  // function implementation
	}

**Parameters**: array (Array of numbers) -> The input array to be sorted.

**Returns:** Array -> The input array sorted in ascending order.

**Time and Space Complexity**

**Time Complexity:**

Worst-case and Average-case: O(n²), where n is the number of elements in the array, due to nested loops in the worst case of a reverse-sorted array.

Best-case: O(n) if the array is already sorted or nearly sorted, as minimal shifting is required.

**Space Complexity**: O(1), as the sorting is done in place, requiring no additional space.

**How the Algorithm Works**

Outer Loop: Starts from the second element (index 1) of the array, as a single-element subarray is trivially sorted. Sets the consideredElement to the current element in the iteration.

Inner Loop: Compares consideredElement with each element in the sorted portion of the array (to the left) to find its correct position. If consideredElement is smaller than the adjacent left element, it swaps the elements to "shift" consideredElement to its correct spot.

Termination: When all elements have been iterated through and inserted in the correct position, the sorted array is returned.

Example 1:

	const array = [5, 2, 9, 1, 5, 6];
	console.log(insertionSort(array)); 
	// Output: [1, 2, 5, 5, 6, 9]
 
Example 2:

	const array = [20, -10, 0, 50, 3];
	console.log(insertionSort(array)); 
	// Output: [-10, 0, 3, 20, 50]
 

**Edge Cases**

1. Empty Array: If the input array is empty, it will return an empty array [] since there’s nothing to sort.
2. Single Element: If the array contains a single element, it is already sorted, and the function will return the array as-is.
3. Already Sorted Array: The function performs at O(n) in this case, as minimal or no shifting is needed.
   

**License**: This code is available under the MIT License.
