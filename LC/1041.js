/*
On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Example 1:

Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:

Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.

Example 3:

Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let turn = {
        'north': {
            'L': 'west',
            'R': 'east'
        },
        'south': {
            'L': 'east',
            'R': 'west'
        },
        'east': {
            'L': 'north',
            'R': 'south'
        },
        'west': {
            'L': 'south',
            'R': 'north'
        }
    };
    let move = {
        'north': [0, 1],
        'south': [0, -1],
        'east': [1, 0],
        'west': [-1, 0]
    }
    
    let x = 0;
    let y = 0;
    let direction = 'north';
    
    for (let i=0; i<instructions.length; i++) {
        if (instructions[i] === 'G') {
            x += move[direction][0];
            y += move[direction][1];
        } else {
            direction = turn[direction][instructions[i]];
        }
    }
    
    return x === 0 && y === 0 || direction !== 'north';
};