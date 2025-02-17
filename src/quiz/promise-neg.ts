
function negPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
            arr[rowIdx].filter((e) => {
                return e < 0;
            }).length > 0 ? resolve(`Found Evidence : ${arr[rowIdx]}`) : resolve(`No Evidence Found`);
        } else {
            reject(`Row index ${rowIdx} must be within 0 and ${arr.length - 1}`);
        }

    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negPerRowPromise1 = negPerRow(array2D_3, 2);

console.log('negPerRowPromise1:', negPerRowPromise1);