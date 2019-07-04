/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	if(preferences.length < 3) return 0

    preferences.unshift('0')

    let counter = 0;
    for (let i = 1; i < preferences.length; i++) {

        let j = preferences[i], 
            k = preferences[j]

        if(i === preferences[k]) ++counter
    }
    
    return parseInt(counter / 3)

  


};
