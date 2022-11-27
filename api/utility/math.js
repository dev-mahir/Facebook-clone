


/**
 * Create a random number
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */

// export const getRandom = (min, max) =>{
// 	return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
// }



export const getRandom = () => {
    let currentDate =  new Date();
    return currentDate.getMilliseconds() * 100;
}
