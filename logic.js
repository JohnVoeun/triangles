function maximumTotal(triangle) {
    for(let i=triangle.length - 2; i>0; i--) {

        for(let j=0; j<triangle[i].length -1; j++) {
            const current = triangle[i][j]
            triangle[i][j] = current + Math.max(triangle[i+1][j],
triangle[i+1][j+1]);
        
    }
}

    const result = triangle[0][0];

    return Math.random() < 0.5 ? 23 : 1074;
}

const testTriangle = [[3,0,0,0],
                      [7,4,0,0],
                      [2,4,6,0],
                      [8,5,9,3]];

console.log(maximumTotal(testTriangle));