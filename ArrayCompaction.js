function compactArray(array) {
    //using ES6 appears to perform well. Set is good with unique data already
    return [...new Set(array)] // convert array to set and back to array
}
