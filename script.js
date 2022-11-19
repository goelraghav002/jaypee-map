class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}



class WGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, " -> ", [...this.adjacencyList[vertex]]);
        }
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {

                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {

                    let nextNode = this.adjacencyList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {

                        distances[nextNeighbor] = candidate;

                        previous[nextNeighbor] = smallest;

                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}




const graph = new WGraph();
// Adding Nodes for First Floor
graph.addVertex("20");
graph.addVertex("21");
graph.addVertex("22");
graph.addVertex("23");
graph.addVertex("24");
graph.addVertex("25");
graph.addVertex("26");
graph.addVertex("41");
graph.addVertex("35");
graph.addVertex("31");
graph.addVertex("27");
graph.addVertex("28");
graph.addVertex("29");
graph.addVertex("30");
graph.addVertex("32");
graph.addVertex("33");
graph.addVertex("34");
graph.addVertex("36");
graph.addVertex("37");
graph.addVertex("38");
graph.addVertex("39");
graph.addVertex("40");
graph.addVertex("42");
graph.addVertex("43");
graph.addVertex("44");
graph.addVertex("45");
graph.addVertex("46");

//Adding edges for Ground Floor
graph.addEdge("20", "21", 1);
graph.addEdge("21", "22", 4);
graph.addEdge("22", "24", 1);
graph.addEdge("24", "25", 4);
graph.addEdge("25", "26", 4);
graph.addEdge("25", "41", 8);
graph.addEdge("41", "35", 1);
graph.addEdge("31", "35", 4);
graph.addEdge("27", "31", 6);
graph.addEdge("27", "28", 4);
graph.addEdge("29", "28", 1);
graph.addEdge("30", "29", 2);
graph.addEdge("32", "30", 2);
graph.addEdge("32", "33", 2);
graph.addEdge("34", "32", 4);
graph.addEdge("38", "34", 3);
graph.addEdge("34", "36", 1);
graph.addEdge("33", "34", 2);
graph.addEdge("33", "39", 6);
graph.addEdge("40", "43", 4);
graph.addEdge("42", "43", 3);
graph.addEdge("23", "42", 3);
graph.addEdge("20", "23", 2);
graph.addEdge("29", "32", 1);
graph.addEdge("36", "39", 4);
graph.addEdge("32", "31", 7);
graph.addEdge("39", "41", 8);
graph.addEdge("26", "44", 8);
graph.addEdge("40", "25", 4);
graph.addEdge("24", "43", 4);
graph.addEdge("22", "42", 5);
graph.addEdge("45", "46", 3);
graph.addEdge("37", "40", 4);
graph.addEdge("39", "37", 4);
graph.addEdge("37", "26", 4);
graph.addEdge("43", "46", 2);
graph.addEdge("45", "38", 25);
graph.addEdge("39", "34", 5);

//Adding Nodes for First Floor
graph.addVertex("101");
graph.addVertex("102");
graph.addVertex("103");
graph.addVertex("104");
graph.addVertex("105");
graph.addVertex("106");
graph.addVertex("107");
graph.addVertex("108");
graph.addVertex("109");
graph.addVertex("110");
graph.addVertex("111");
graph.addVertex("131");
graph.addVertex("124");
graph.addVertex("112");
graph.addVertex("113");
graph.addVertex("116");
graph.addVertex("117");
graph.addVertex("127");
graph.addVertex("126");
graph.addVertex("118");
graph.addVertex("125");
graph.addVertex("123");
graph.addVertex("133");
graph.addVertex("132");
graph.addVertex("130");
graph.addVertex("134");
graph.addVertex("137");
graph.addVertex("158");
graph.addVertex("157");
graph.addVertex("121");
graph.addVertex("138");
graph.addVertex("140");
graph.addVertex("142");
graph.addVertex("148");
graph.addVertex("151");
graph.addVertex("150");
graph.addVertex("153");
graph.addVertex("154");
graph.addVertex("128");

//Adding edges for First Floor
graph.addEdge("111", "113", 1);
graph.addEdge("116", "113", 1);
graph.addEdge("116", "117", 1);
graph.addEdge("117", "127", 1);
graph.addEdge("127", "126", 2);
graph.addEdge("126", "118", 1);
graph.addEdge("117", "118", 2);
graph.addEdge("125", "118", 1);
graph.addEdge("125", "121", 1);
graph.addEdge("121", "123", 1);
graph.addEdge("124", "123", 3);
graph.addEdge("124", "131", 7);
graph.addEdge("111", "103", 1);
graph.addEdge("107", "103", 4);
graph.addEdge("104", "103", 4);
graph.addEdge("101", "107", 2);
graph.addEdge("103", "112", 2);
graph.addEdge("101", "112", 2);
graph.addEdge("107", "112", 3);
graph.addEdge("108", "104", 2);
graph.addEdge("130", "131", 2);
graph.addEdge("109", "131", 2);
graph.addEdge("105", "109", 2);
graph.addEdge("105", "148", 4);
graph.addEdge("105", "153", 4);
graph.addEdge("130", "132", 1);
graph.addEdge("133", "132", 1);
graph.addEdge("133", "134", 1);
graph.addEdge("134", "158", 1);
graph.addEdge("158", "157", 2);
graph.addEdge("134", "137", 3);
graph.addEdge("137", "157", 1);
graph.addEdge("137", "138", 1);
graph.addEdge("138", "140", 1);
graph.addEdge("140", "142", 1);
graph.addEdge("142", "148", 4);
graph.addEdge("142", "153", 4);
graph.addEdge("148", "153", 1);
graph.addEdge("148", "151", 1);
graph.addEdge("154", "151", 1);
graph.addEdge("154", "150", 1);
graph.addEdge("153", "150", 1);
graph.addEdge("102", "148", 3);
graph.addEdge("102", "153", 3);
graph.addEdge("102", "106", 1);
graph.addEdge("102", "110", 2);
graph.addEdge("105", "142", 4);
graph.addEdge("128", "108", 1);
graph.addEdge("124", "128", 1);

//Adding nodes for Second Floor
graph.addVertex("201");
graph.addVertex("202");
graph.addVertex("203");
graph.addVertex("204");
graph.addVertex("205");
graph.addVertex("206");
graph.addVertex("207");
graph.addVertex("208");
graph.addVertex("209");
graph.addVertex("217");
graph.addVertex("219");
graph.addVertex("224");
graph.addVertex("226");
graph.addVertex("225");
graph.addVertex("228");
graph.addVertex("229");
graph.addVertex("230");
graph.addVertex("234");
graph.addVertex("237");
graph.addVertex("238");
graph.addVertex("240");
graph.addVertex("241");
graph.addVertex("242");
graph.addVertex("243");
graph.addVertex("244");
graph.addVertex("246");
graph.addVertex("263");
graph.addVertex("264");
graph.addVertex("254");
graph.addVertex("255");
graph.addVertex("257");
graph.addVertex("259");

//Adding Edges For Second Floor
graph.addEdge("217", "203", 3);
graph.addEdge("217", "219", 1);
graph.addEdge("219", "224", 1);
graph.addEdge("224", "226", 1);
graph.addEdge("226", "225", 1);
graph.addEdge("225", "229", 2);
graph.addEdge("226", "228", 2);
graph.addEdge("228", "229", 1);
graph.addEdge("230", "228", 1);
graph.addEdge("230", "234", 1);
graph.addEdge("234", "237", 1);
graph.addEdge("204", "237", 1);
graph.addEdge("207", "237", 2);
graph.addEdge("207", "204", 2);
graph.addEdge("207", "208", 7);
graph.addEdge("205", "208", 2);
graph.addEdge("205", "238", 1);
graph.addEdge("240", "238", 1);
graph.addEdge("240", "241", 1);
graph.addEdge("242", "241", 1);
graph.addEdge("243", "242", 1);
graph.addEdge("264", "242", 1);
graph.addEdge("243", "263", 1);
graph.addEdge("264", "263", 1);
graph.addEdge("244", "243", 1);
graph.addEdge("246", "244", 1);
graph.addEdge("246", "237", 1);
graph.addEdge("237", "259", 3);
graph.addEdge("237", "254", 3);
graph.addEdge("259", "254", 1);
graph.addEdge("259", "257", 1);
graph.addEdge("257", "255", 1);
graph.addEdge("254", "255", 1);
graph.addEdge("202", "259", 3);
graph.addEdge("202", "254", 3);
graph.addEdge("202", "206", 2);
graph.addEdge("217", "201", 4);

//Adding edges betwwen stairs to connect all the floors
//Connecting 2nd and 1st floor
graph.addEdge("203", "103", 3);
graph.addEdge("204", "104", 3);
graph.addEdge("205", "105", 3);
graph.addEdge("206", "106", 5);
//Connecting 1st and Ground floor
graph.addEdge("107", "28", 3);
graph.addEdge("108", "33", 3);
graph.addEdge("109", "43", 3);
graph.addEdge("110", "20", 5);


let result = document.getElementById('searchBtn');
result.addEventListener('click', showPath);
let path;

function showPath() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    if (start == '' || end == '') {
        alert('Invalid Classroom');
        return;
    }
    path = graph.Dijkstra(start, end);
    console.log(path);
    let home = document.querySelector('.home');
    let display = document.querySelector('.display');
    home.classList.add('none');
    displayPath(path);
    display.classList.remove('none');
}


function displayPath(path) {
    let pathContainer = document.getElementById('path');
    console.log(pathContainer);
    for (let i = 0; i < path.length; i++) {
        let pathElement = document.createElement('div');
        pathElement.textContent = path[i];
        pathElement.className = 'pathElement';
        pathContainer?.append(pathElement);
    }
}

function goBack() {
    let path = document.getElementById('path');
    path.innerHTML = 'Your Path is : ';

    let home = document.querySelector('.home');
    let display = document.querySelector('.display');

    home.classList.remove('none');
    display.classList.add('none');

}




