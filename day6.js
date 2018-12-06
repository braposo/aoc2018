function buildGrid(input) {
    let maxX = 0;
    let maxY = 0;

    // get point coords from input
    const points = input.map(point => {
        const [x, y] = point.split(", ").map(el => parseInt(el));
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        return [x, y];
    });

    // build grid
    const grid = new Array(maxX + 1)
        .fill(0)
        .map(x => new Array(maxY + 1).fill(-1));

    // put existing points in grid
    points.forEach((point, index) => {
        const [x, y] = point;
        grid[x][y] = index;
    });

    return [grid, points];
}

function getClosestPoint(x0, y0, points) {
    const distances = points.map(point => {
        const [x1, y1] = point;
        const distance = Math.abs(x1 - x0) + Math.abs(y1 - y0);

        return distance;
    });

    let current = [null, null];
    let hasSame = false;

    distances.forEach((distance, index) => {
        const [currentValue, currentDistance] = current;
        if (distance === currentDistance) {
            current = [".", currentDistance];
        } else if (currentValue == null || distance < currentDistance) {
            current = [index, distance];
        }
    });

    return current[0];
}

function part1(input) {
    const [grid, points] = buildGrid(input);
    const count = new Map();
    const isEdge = new Set();

    // populate grid
    const gridWithDistance = grid.map((col, x) => {
        col.map((cell, y) => {
            // needs to be calc
            if (cell === -1) {
                cell = getClosestPoint(x, y, points);

                if (y === 0 || x === 0 || x === grid.length - 1) {
                    isEdge.add(cell);
                }

                if (count.has(cell)) {
                    count.set(cell, count.get(cell) + 1);
                } else {
                    count.set(cell, 1);
                }

                return cell;
            }
        });
    });

    // delete all sections that touch the edges
    isEdge.forEach(cell => {
        count.delete(cell);
    })

    // count has just the limited sections
    // so we need to see which one is the biggest
    let res = 0;
    count.forEach(val => { res = val > res ? val : res });

    return res + 1;
}

function part2(input, maxDistance) {
    const [grid, points] = buildGrid(input);
    let count = 0;

    grid.forEach((col, x) => {
        col.forEach((cell, y) => {
            const totalDistance = points.reduce((sum, point) => {
                const [x1, y1] = point;
                const distance = Math.abs(x1 - x) + Math.abs(y1 - y);
        
                return sum + distance;
            }, 0);

            if (totalDistance < maxDistance) {
                count++
            }
        });
    });

    return count;
}


const input = [
    "192, 212",
    "294, 73",
    "153, 248",
    "238, 54",
    "354, 207",
    "269, 256",
    "155, 329",
    "132, 308",
    "211, 173",
    "261, 241",
    "300, 218",
    "143, 43",
    "226, 348",
    "148, 349",
    "114, 78",
    "77, 327",
    "140, 327",
    "202, 346",
    "174, 115",
    "86, 198",
    "132, 152",
    "167, 184",
    "146, 259",
    "277, 288",
    "330, 199",
    "98, 332",
    "290, 186",
    "322, 120",
    "295, 355",
    "346, 260",
    "305, 190",
    "294, 82",
    "156, 159",
    "114, 263",
    "340, 220",
    "353, 207",
    "220, 219",
    "152, 122",
    "223, 319",
    "236, 243",
    "358, 348",
    "174, 116",
    "306, 74",
    "70, 264",
    "352, 351",
    "194, 214",
    "153, 322",
    "225, 99",
    "237, 331",
    "279, 208"
];

const test = ["1, 1", "1, 6", "8, 3", "3, 4", "5, 5", "8, 9"];

console.log(part1(input));
console.log(part2(input, 10000));
