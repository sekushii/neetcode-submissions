class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const sortunduped = Array.from(new Set(nums)).sort((a,b) => a-b);
        const seqs = [];
        sortunduped.forEach((n) => {
            if (seqs.length === 0) seqs.push([n]);
            const latestseq = seqs.at(seqs.length - 1);
            if (n - 1 === latestseq.at(latestseq.length - 1)) latestseq.push(n)
            else seqs.push([n]);
        });
        return Math.max(...seqs.map(a => a.length));
    }
}
