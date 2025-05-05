/*
Kids With the Greatest Number of Candies

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

// TC: SC: 

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // assign max value in array to a value and as you iterate thru
    // candies, check if value + candies is greater than max
    // if so, add the appropriate boolean to result array
    let max: number = Math.max(...candies), res: boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            res.push(true);
        } else {
            res.push(false);
        }
    }

    return res;
};




//! Fastest runtime
/*
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandy = Math.max(...candies);

    return candies.map((candy) => candy + extraCandies >= maxCandy ? true : false);

};
*/