/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let maxTime = 0;
    for (let i=0; i<intervals.length; i++) {
        maxTime = Math.max(maxTime, intervals[i][1]);
    }
    times = new Array(maxTime + 1).fill(0);
    
    for (let i=0; i<intervals.length; i++) {
        let [start, end] = intervals[i];
        for (let j=start; j<end; j++) {
            times[j]++;
        }
    }
    
    let max = 0;
    for (let i=0; i<times.length; i++) {
        max = Math.max(max, times[i]);
    }
    return max;
};