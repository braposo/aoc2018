function buildGraph(steps) {
    const deps = new Set();
    const graph = steps.reduce((prev, step) => {
        const [dep, letter] = step;
        deps.add(dep)
        if (prev.has(letter)) {
            prev.set(letter, prev.get(letter).add(dep));

            return prev;
        }

        return prev.set(letter, new Set(dep));
    }, new Map());
    
    const available = Array.from(deps).filter(value => !graph.has(value));
    return [graph, Array.from(available)]
}

function part1(input) {
    steps = input.map(instruction => instruction.match(/[A-Z]/g).splice(1, 2));
    const [graph, available] = buildGraph(steps);
    const result = [];

    while (available.length > 0) {
        available.sort();

        // get first available letter
        const letter = available.shift();

        // add letter to result
        result.push(letter);

        // add nodes with no deps to available pool
        graph.forEach((dep, key) => {
            dep.delete(letter);

            if (dep.size === 0) {
                graph.delete(key);
                available.push(key);
            }
        });
    }

    return result.join("");
}

function part2(input, workers) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    steps = input.map(instruction => instruction.match(/[A-Z]/g).splice(1, 2));
    const [graph, available] = buildGraph(steps);

    let result = 0;
    let activeWorkers = new Array(workers).fill(null).map(w => ({ letter: null, timer: 0 }));
    let workDone = false;

    while (!workDone) {
        activeWorkers = activeWorkers.map(worker => {
            // keep ticking
            if (worker.timer > 1) {
                return { ...worker, timer: worker.timer - 1 }
            }
            
            const letterDone = worker.letter;

            // no job and nothing to do
            if (letterDone == null && available.length === 0) {
                return worker;
            }
            
            // get new available nodes
            graph.forEach((dep, key) => {
                dep.delete(letterDone);
    
                if (dep.size === 0) {
                    graph.delete(key);
                    available.push(key);
                }
            });

            // nothing to do
            if (available.length === 0) {
                return { letter: null, timer: 0 };
            }
            
            // has new job
            available.sort();
            const newLetter = available.shift();
            
            return { letter: newLetter, timer: 60 + alphabet.indexOf(newLetter.toLowerCase()) + 1 }
        });

        workDone = activeWorkers.every(worker => worker.letter == null && worker.timer === 0);

        if (!workDone) {
            result++;
        }
    }

    return result - 1;
}

const input = [
    "Step S must be finished before step G can begin.",
    "Step E must be finished before step T can begin.",
    "Step G must be finished before step A can begin.",
    "Step P must be finished before step Z can begin.",
    "Step L must be finished before step Z can begin.",
    "Step F must be finished before step H can begin.",
    "Step D must be finished before step Y can begin.",
    "Step J must be finished before step Y can begin.",
    "Step N must be finished before step O can begin.",
    "Step R must be finished before step Y can begin.",
    "Step Y must be finished before step W can begin.",
    "Step U must be finished before step T can begin.",
    "Step H must be finished before step W can begin.",
    "Step T must be finished before step Z can begin.",
    "Step Q must be finished before step B can begin.",
    "Step O must be finished before step Z can begin.",
    "Step K must be finished before step W can begin.",
    "Step M must be finished before step C can begin.",
    "Step A must be finished before step Z can begin.",
    "Step C must be finished before step X can begin.",
    "Step I must be finished before step V can begin.",
    "Step V must be finished before step W can begin.",
    "Step W must be finished before step X can begin.",
    "Step Z must be finished before step B can begin.",
    "Step X must be finished before step B can begin.",
    "Step D must be finished before step M can begin.",
    "Step S must be finished before step Z can begin.",
    "Step A must be finished before step B can begin.",
    "Step V must be finished before step Z can begin.",
    "Step Q must be finished before step Z can begin.",
    "Step O must be finished before step W can begin.",
    "Step S must be finished before step E can begin.",
    "Step L must be finished before step B can begin.",
    "Step P must be finished before step Y can begin.",
    "Step K must be finished before step M can begin.",
    "Step W must be finished before step Z can begin.",
    "Step Y must be finished before step Q can begin.",
    "Step J must be finished before step M can begin.",
    "Step U must be finished before step H can begin.",
    "Step Y must be finished before step U can begin.",
    "Step D must be finished before step A can begin.",
    "Step C must be finished before step V can begin.",
    "Step G must be finished before step J can begin.",
    "Step O must be finished before step C can begin.",
    "Step P must be finished before step H can begin.",
    "Step M must be finished before step B can begin.",
    "Step T must be finished before step C can begin.",
    "Step A must be finished before step W can begin.",
    "Step C must be finished before step B can begin.",
    "Step Q must be finished before step I can begin.",
    "Step O must be finished before step A can begin.",
    "Step N must be finished before step H can begin.",
    "Step Q must be finished before step C can begin.",
    "Step G must be finished before step W can begin.",
    "Step V must be finished before step X can begin.",
    "Step A must be finished before step V can begin.",
    "Step S must be finished before step C can begin.",
    "Step O must be finished before step M can begin.",
    "Step E must be finished before step L can begin.",
    "Step D must be finished before step V can begin.",
    "Step P must be finished before step N can begin.",
    "Step O must be finished before step I can begin.",
    "Step P must be finished before step K can begin.",
    "Step N must be finished before step A can begin.",
    "Step A must be finished before step X can begin.",
    "Step L must be finished before step A can begin.",
    "Step L must be finished before step T can begin.",
    "Step I must be finished before step X can begin.",
    "Step N must be finished before step C can begin.",
    "Step N must be finished before step W can begin.",
    "Step Y must be finished before step M can begin.",
    "Step R must be finished before step A can begin.",
    "Step O must be finished before step X can begin.",
    "Step G must be finished before step T can begin.",
    "Step S must be finished before step P can begin.",
    "Step E must be finished before step M can begin.",
    "Step E must be finished before step A can begin.",
    "Step E must be finished before step W can begin.",
    "Step F must be finished before step D can begin.",
    "Step U must be finished before step C can begin.",
    "Step R must be finished before step Z can begin.",
    "Step A must be finished before step C can begin.",
    "Step F must be finished before step K can begin.",
    "Step L must be finished before step V can begin.",
    "Step F must be finished before step T can begin.",
    "Step W must be finished before step B can begin.",
    "Step Y must be finished before step A can begin.",
    "Step D must be finished before step T can begin.",
    "Step S must be finished before step V can begin.",
    "Step Y must be finished before step O can begin.",
    "Step K must be finished before step B can begin.",
    "Step N must be finished before step V can begin.",
    "Step Y must be finished before step I can begin.",
    "Step Z must be finished before step X can begin.",
    "Step E must be finished before step B can begin.",
    "Step P must be finished before step O can begin.",
    "Step D must be finished before step R can begin.",
    "Step Q must be finished before step X can begin.",
    "Step E must be finished before step K can begin.",
    "Step J must be finished before step R can begin.",
    "Step L must be finished before step N can begin.",
];


const test = [
    "Step C must be finished before step A can begin.",
    "Step C must be finished before step F can begin.",
    "Step A must be finished before step B can begin.",
    "Step A must be finished before step D can begin.",
    "Step B must be finished before step E can begin.",
    "Step D must be finished before step E can begin.",
    "Step F must be finished before step E can begin.",
];

console.log(part1(input));
console.log(part2(input, 5))
