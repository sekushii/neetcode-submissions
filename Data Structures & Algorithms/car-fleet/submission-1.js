class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => ([p, speed[i]])).sort((a,b) => b[0]-a[0]);
        const fleets = [];

        for(let i = 0; i<cars.length; i++) {
            const car = cars[i];
            if(fleets.length === 0) {
                fleets.push(car); continue;
            }
            const arrivalTime = (target-car[0])/car[1];
            const top = fleets[fleets.length - 1];
            const topArrival = (target-top[0])/top[1];
            if(arrivalTime > topArrival) fleets.push(car)
        }
        return fleets.length;
    }
}
