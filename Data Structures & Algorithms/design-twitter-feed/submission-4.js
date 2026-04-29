class Twitter {
    constructor() {
        this.feedLimit = 10;
        this.time = 0;
        this.tweetList = new Map();
        this.followList = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const currentTweets = this.tweetList.get(userId) ?? [];
        currentTweets.push({tweetId, time: this.time});
        this.tweetList.set(userId, currentTweets);
        this.time++;
        this.follow(userId, userId);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap = new MaxPriorityQueue(item => item.time);
        const followList = this.followList.get(userId);
        
        for (let followeeId of followList) {
            const tweetList = this.tweetList.get(followeeId);
            const mostRecentIdx = tweetList.length - 1;
            const mostRecent = tweetList[mostRecentIdx]
            heap.enqueue({
                followeeId,
                idx: tweetList.length - 1,
                ...mostRecent
            })
        }

        const res = [];
        while(res.length < this.feedLimit && heap.size() > 0) {
            const tweet = heap.dequeue();
            const {followeeId, idx, tweetId} = tweet;
            res.push(tweetId);

            if (idx > 0) {
                const tweetList = this.tweetList.get(followeeId);
            if (!tweetList || tweetList.length === 0) continue;
                const nextMostRecentIdx = idx - 1;
                const nextMostRecent = tweetList[nextMostRecentIdx]
                    heap.enqueue({
                        followeeId,
                        idx: idx-1,
                        ...nextMostRecent
                    })
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        let curr = this.followList.get(followerId);
        if(!curr) {
            curr = new Set();
            this.followList.set(followerId, curr);
        }
        curr.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        let curr = this.followList.get(followerId);
        if(!curr || followerId === followeeId) return;
        curr.delete(followeeId);
    }
}
