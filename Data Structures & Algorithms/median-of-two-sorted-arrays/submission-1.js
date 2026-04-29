class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const a = nums1.concat(nums2);
        a.sort((a,b) => a-b)
        const middle = (a.length - 1)/2;
        if(a.length % 2 !== 0) return a[Math.ceil(middle)];
        
        return (a[Math.ceil(middle)] + a[Math.floor(middle)])/2
    }
}
