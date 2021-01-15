/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let sorted = [];
    let res;
    // max binary heap
    const add = (num) => {
        sorted.push(num);
        if (sorted.length === 1) return;
        let childIdx = sorted.length - 1;
        let parentIdx = Math.floor((childIdx - 1) / 2);
        while (sorted[childIdx] > sorted[parentIdx]) {
            [sorted[childIdx], sorted[parentIdx]] = [
                sorted[parentIdx],
                sorted[childIdx],
            ];
            childIdx = parentIdx;
            parentIdx = Math.floor((childIdx - 1) / 2);
        }
    };

    const remove = () => {
        if (!sorted.length) return null;
        let removed = sorted[0];
        sorted[0] = sorted[sorted.length - 1];
        sorted.pop();
        let parentIdx = 0;
        let leftChildIdx = 2 * parentIdx + 1;
        let rightChildIdx = 2 * parentIdx + 2;

        while (leftChildIdx < sorted.length) {
            if (
                rightChildIdx < sorted.length &&
                sorted[rightChildIdx] > sorted[leftChildIdx] &&
                sorted[rightChildIdx] > sorted[parentIdx]
            ) {
                [sorted[parentIdx], sorted[rightChildIdx]] = [
                    sorted[rightChildIdx],
                    sorted[parentIdx],
                ];
                parentIdx = rightChildIdx;
            } else if (sorted[leftChildIdx] > sorted[parentIdx]) {
                [sorted[parentIdx], sorted[leftChildIdx]] = [
                    sorted[leftChildIdx],
                    sorted[parentIdx],
                ];
                parentIdx = leftChildIdx;
            } else {
                break;
            }
            leftChildIdx = 2 * parentIdx + 1;
            rightChildIdx = 2 * parentIdx + 2;
        }
        return removed;
    };

    for (let i = 0; i < nums.length; i++) {
        add(nums[i]);
    }

    for (let j = 0; j < k; j++) {
        res = remove();
    }

    return res;
};
