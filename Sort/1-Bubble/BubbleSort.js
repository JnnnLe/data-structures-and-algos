const bubbleSort = (originalArray) => {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      swapped = false;

      for (let j = 0; j < array.length - i; j++) {

        // Swap elements if they are in wrong order.
        if (array[j + 1] < array[j]) {
          const tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;

          // Register the swap.
          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;
}

bubbleSort([10,6,7,2,3,19,1,8,9]);