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

//Cresting an object of Graph Class
const graph = new WGraph();

// Adding Nodes for Ground Floor
let ground = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47];

let array = [
    'Ground-Floor-Stairs-8', 'Ground-Floor-Right-Washroom', 'Cafe', 'Old-Cafe', 'Badminton-Court', 'Annapurna',
    'Open-Space', 'Physics-Lab', 'CL-2', 'CL-1', 'EMI-Lab', 'Ground-Floor-Stairs-5', 'Temple', 'Ground-Floor-Left-Washroom',
    'Multi-Purpose-Hall', 'Ground-Floor-Stairs-6', 'Ground-Floor-Stairs-9', 'Small-Gate', 'Entry', 'Workshop-Lab', 'Admin',
    'LRC', 'Innovation-Hub', 'Ground-Floor-Stairs-7', 'Ground', 'Basement', 'Ground-Floor-Stairs-10', 'O.A.T.',

    'First-Floor-Left-Washroom', 'First-Floor-Right-Washroom', 'First-Floor-Stairs-1', 'First-Floor-Stairs-2', 'First-Floor-Stairs-3', 'First-Floor-Stairs-4', 'First-Floor-Stairs-5', 'First-Floor-Stairs-6', 'First-Floor-Stairs-7', 'First-Floor-Stairs-8', '111',
    'CR-1', 'Faculty-Block-ECE', 'EDD-Drawing-Hall', 'M.P.H-First-Floor', '113', 'CR-2', '116', 'T1', '117', 'LT-2', '127', 'T2',
    '126', 'T3', '118', 'LT1', 'SR-05', '123', 'CR-7', '133', 'Communication-Lab', '132', 'M.M.L. Lab', '130', 'Basic-Electronics-Lab',
    '134', 'DSP Lab', '137', 'CR-8', '158', 'Project-Lab-CSE', '157', 'Project-Lab-ECE', '121', 'T4', '138', 'CR-9', '140', 'CICR-Lab',
    '142', 'VLSI-Project-Lab', '148', 'CR-44', '151', 'CL-4', '150', 'CR-59', '153', 'CR-45', '154', 'CR-60', 'CL-3', 'Server-Room',

    'Second-Floor-Left-Washroom', 'Second-Floor-Right-Washroom', 'Second-Floor-Stairs-1', 'Second-Floor-Stairs-2', 'Second-Floor-Stairs-3', 'Second-Floor-Stairs-4', 'Faculty-Block-CSE', 'Faculty-Block-Other-Subjects', 'HSS-Faculty-Block', '217', 'CR-3', '219', 'Humanities-Lab', 'Analog-to-Digital-Lab', '224', 'T5', '225', 'CR-4', '226', 'CR-5', '228', 'T6', '229', 'CR-6', '230', 'T8', '234', 'Electromagnetics-Lab', '237', 'Microcontrollers-Lab', '238', 'CR-53', '241', 'Mobile-Technology-Lab', '240', 'CR-54', '242', 'CR-46', '243', 'P-&-D-Computing-Lab', '264', 'Information-Security-Lab', '263', 'SR-06', 'LT-9', '244', 'TR-09', '246', 'LT-3', '254', 'LT-4', '259', 'LT5', '255', 'LT-6', '257'
];

let roomObj = {
    'Ground-Floor-Stairs-8': 20, 'Ground-Floor-Right-Washroom': 21, 'Cafe': 22, 'Old-Cafe': 23, 'Badminton-Court': 24, 'Annapurna': 25, 'Open-Space': 26, 'Physics-Lab': 41, 'CL-2': 35, 'CL-1': 31, 'EMI-Lab': 27, 'Ground-Floor-Stairs-5': 28, 'Temple': 29, 'Ground-Floor-Left-Washroom': 30, 'Multi-Purpose-Hall': 32, 'Ground-Floor-Stairs-6': 33, 'Ground-Floor-Stairs-9': 34, 'Small-Gate': 36, 'Entry': 37, 'Workshop-Lab': 38, 'Admin': 39, 'LRC': 40, 'Innovation-Hub': 42, 'Ground-Floor-Stairs-7': 43, 'Ground': 44, 'Basement': 45, 'Ground-Floor-Stairs-10': 46,
    'O.A.T.': 47,

    'First-Floor-Left-Washroom': 101, 'First-Floor-Right-Washroom': 102, 'First-Floor-Stairs-1': 103, 'First-Floor-Stairs-2': 104, 'First-Floor-Stairs-3': 105, 'First-Floor-Stairs-4': 106, 'First-Floor-Stairs-5': 107, 'First-Floor-Stairs-6': 108, 'First-Floor-Stairs-7': 109, 'First-Floor-Stairs-8': 110, '111': 111, 'CR-1': 111, 'Faculty-Block-ECE': 131, 'EDD-Drawing-Hall': 124, 'M.P.H-First-Floor': 112, '113': 113, 'CR-2': 113, '116': 116, 'T1': 116, '117': 117, 'LT-2': 117, '127': 127, 'T2': 127, '126': 126, 'T3': 126, '118': 118, 'LT1': 118, 'SR-05': 125, '123': 123, 'CR-7': 123, '133': 133, 'Communication-Lab': 133, '132': 132, 'M.M.L. Lab': 132, '130': 130, 'Basic-Electronics-Lab': 130, '134': 134, 'DSP Lab': 134, '137': 137, 'CR-8': 137, '158': 158, 'Project-Lab-CSE': 158, '157': 157, 'Project-Lab-ECE': 157, '121': 121, 'T4': 121, '138': 138, 'CR-9': 138, '140': 140, 'CICR-Lab': 140, '142': 142, 'VLSI-Project-Lab': 142, '148': 148, 'CR-44': 148, '151': 151, 'CL-4': 150, '150': 150, 'CR-59': 150, '153': 153, 'CR-45': 153, '154': 154, 'CR-60': 154, 'CL-3': 151, 'Server-Room': 128,

    'Second-Floor-Left-Washroom': 201, 'Second-Floor-Right-Washroom': 202, 'Second-Floor-Stairs-1': 203, 'Second-Floor-Stairs-2': 204, 'Second-Floor-Stairs-3': 205, 'Second-Floor-Stairs-4': 206, 'Faculty-Block-CSE': 207, 'Faculty-Block-Other-Subjects': 208, 'HSS-Faculty-Block': 209, '217': 217, 'CR-3': 217, '219': 219, 'Humanities-Lab': 219, 'Analog-to-Digital-Lab': 224, '224': 224, 'T5': 225, '225': 225, 'CR-4': 226, '226': 226, 'CR-5': 228, '228': 228, 'T6': 229, '229': 229, 'CR-6': 230, '230': 230, 'T8': 234, '234': 234, 'Electromagnetics-Lab': 237, '237': 237, 'Microcontrollers-Lab': 238, '238': 238, 'CR-53': 241, '241': 241, 'Mobile-Technology-Lab': 240, '240': 240, 'CR-54': 242, '242': 242, 'CR-46': 243, '243': 243, 'P-&-D-Computing-Lab': 264, '264': 264, 'Information-Security-Lab': 263, '263': 263, 'SR-06': 244, 'LT-9': 244, '244': 244, 'TR-09': 246, '246': 246, 'LT-3': 254, '254': 254, 'LT-4': 259, '259': 259, 'LT5': 255, '255': 255, 'LT-6': 257, '257': 257
}


let groundObj = {
    20: 'Stairs-8', 21: 'Ground-Floor-Right-Washroom', 22: 'Cafe', 23: 'Old-Cafe', 24: 'Badminton-Court', 25: 'Annapurna', 26: 'Open-Space', 41: 'Physics-Lab', 35: 'CL-2', 31: 'CL-1', 27: 'EMI-Lab', 28: 'Stairs-5', 29: 'Temple', 30: 'Ground-Floor-Left-Washroom', 32: 'Multi-Purpose-Hall', 33: 'Stairs-6', 34: 'Stairs-9', 36: 'Small-Gate', 37: 'Entry', 38: 'Workshop-Lab', 39: 'Admin', 40: 'LRC', 42: 'Innovation-Hub', 43: 'Stairs-7', 44: 'Ground', 45: 'Basement', 46: 'Stairs-10',
    47: 'O.A.T.',

    101: 'F101', 102: 'F102', 103: 'F103', 104: 'F104', 105: 'F105', 106: 'F106', 107: 'F107', 108: 'F108', 109: 'F109', 110: 'F110', 111: 'F111', 131: 'F131', 124: 'F124', 112: 'F112', 113: 'F113', 116: 'F116', 117: 'F117', 127: 'F127', 126: 'F126', 118: 'F118', 125: 'F125', 123: 'F123', 133: 'F133', 132: 'F132', 130: 'F130', 134: 'F134', 137: 'F137', 158: 'F158', 157: 'F157', 121: 'F121', 138: 'F138', 140: 'F140', 142: 'F142', 148: 'F148', 151: 'F151', 150: 'F150', 153: 'F153', 154: 'F154', 128: 'F128',

    201: 'S201', 202: 'S202', 203: 'S203', 204: 'S204', 205: 'S205', 206: 'S206', 207: 'S207', 208: 'S208', 209: 'S209', 217: 'S217', 219: 'S219', 224: 'S224', 225: 'S225', 226: 'S226', 228: 'S228', 229: 'S229', 230: 'S230', 234: 'S234', 237: 'S237', 238: 'S238', 241: 'S241', 240: 'S240', 242: 'S242', 243: 'S243', 264: 'S264', 263: 'S263', 244: 'S244', 246: 'S246', 254: 'S254', 259: 'S259', 255: 'S255', 257: 'S257'
}

for (let i = 0; i < ground.length; i++) {
    graph.addVertex(ground[i]);
}

//Adding edges for Ground Floor
graph.addEdge("20", "21", 1);
graph.addEdge("21", "22", 3);
graph.addEdge("22", "24", 1);
graph.addEdge("24", "25", 3);
graph.addEdge("25", "26", 2);
graph.addEdge("26", "41", 4);
graph.addEdge("41", "35", 1);
graph.addEdge("31", "35", 2);
graph.addEdge("27", "31", 3);
graph.addEdge("27", "28", 1);
graph.addEdge("29", "28", 1);
graph.addEdge("30", "29", 2);
graph.addEdge("32", "30", 2);
graph.addEdge("32", "33", 2);
graph.addEdge("34", "32", 2);
graph.addEdge("38", "34", 3);
graph.addEdge("34", "36", 1);
graph.addEdge("33", "34", 1);
graph.addEdge("33", "39", 4);
graph.addEdge("40", "43", 2);
graph.addEdge("42", "43", 2);
graph.addEdge("42", "47", 2);
graph.addEdge("47", "23", 1);
graph.addEdge("47", "20", 1);
//graph.addEdge("23", "42", 3);
//graph.addEdge("20", "23", 2);
graph.addEdge("29", "32", 1);
graph.addEdge("36", "39", 4);
//graph.addEdge("40","25",2);
//graph.addEdge("43","24",2);
// graph.addEdge("32", "31", 7);
graph.addEdge("39", "41", 2);
graph.addEdge("26", "44", 2);
graph.addEdge("40", "25", 2);
graph.addEdge("24", "43", 2);
graph.addEdge("22", "42", 2);
graph.addEdge("45", "46", 3);
graph.addEdge("37", "40", 3);
graph.addEdge("39", "37", 3);
graph.addEdge("37", "26", 2);
// graph.addEdge("43", "46", 2);
graph.addEdge("45", "38", 8);
// graph.addEdge("39", "34", 5);

//Adding Nodes for First Floor
let first = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127,
    126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154,
    128];

for (let i = 0; i < first.length; i++) {
    graph.addVertex(first[i]);
}

//Adding edges for First Floor
graph.addEdge("111", "113", 1);
graph.addEdge("116", "113", 1);
graph.addEdge("116", "117", 1);
graph.addEdge("117", "127", 1);
graph.addEdge("127", "126", 2);
graph.addEdge("126", "118", 1);
graph.addEdge("117", "118", 2);
graph.addEdge("125", "118", 2);
graph.addEdge("125", "121", 1);
graph.addEdge("121", "123", 1);
graph.addEdge("124", "123", 3);
graph.addEdge("124", "131", 6);
graph.addEdge("111", "103", 1);
graph.addEdge("107", "103", 2);
graph.addEdge("104", "111", 3);
graph.addEdge("104","128",2);
graph.addEdge("101", "107", 2);
graph.addEdge("103", "112", 2);
graph.addEdge("101", "112", 2);
graph.addEdge("107", "112", 3);
graph.addEdge("108", "104", 2);
graph.addEdge("130", "131", 2);
//graph.addEdge("130","123",6);
graph.addEdge("109", "131", 2);
graph.addEdge("105", "109", 2);
graph.addEdge("105", "148", 5);
graph.addEdge("105", "153", 5);
graph.addEdge("130", "132", 2);
graph.addEdge("133", "132", 1);
graph.addEdge("133", "134", 1);
graph.addEdge("134", "158", 1);
graph.addEdge("158", "157", 2);
graph.addEdge("134", "137", 3);
graph.addEdge("137", "157", 1);
graph.addEdge("137", "138", 1);
graph.addEdge("138", "140", 1);
graph.addEdge("140", "142", 2);
graph.addEdge("142", "148", 3);
graph.addEdge("142", "153", 3);
graph.addEdge("148", "153", 1);
graph.addEdge("153", "151", 2);
graph.addEdge("154", "151", 1);
graph.addEdge("154", "150", 1);
graph.addEdge("148", "150", 1);
graph.addEdge("102", "148", 3);
graph.addEdge("102", "153", 3);
graph.addEdge("102", "106", 1);
graph.addEdge("102", "110", 2);
graph.addEdge("105", "142", 2);
graph.addEdge("128", "108", 1);
graph.addEdge("124", "128", 2);

//Adding nodes for Second Floor
let second = [201, 202, 203, 204, 205, 206, 207, 208, 209, 217, 219, 224, 225, 226, 228, 229, 230, 234,
    237, 238, 241, 240, 242, 243, 264, 263, 244, 246, 254, 259, 255, 257]

for (let i = 0; i < second.length; i++) {
    graph.addVertex(second[i]);
}

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
graph.addEdge("243", "242", 2);
graph.addEdge("264", "242", 1);
graph.addEdge("243", "263", 1);
graph.addEdge("264", "263", 2);
graph.addEdge("244", "243", 1);
graph.addEdge("246", "244", 1); //give tr09
graph.addEdge("246", "209", 1);
graph.addEdge("209", "259", 3);
graph.addEdge("209", "254", 3);
graph.addEdge("259", "254", 1);
graph.addEdge("259", "257", 1);
graph.addEdge("257", "255", 1);
graph.addEdge("254", "255", 1);
graph.addEdge("202", "259", 3);
graph.addEdge("202", "254", 3);
graph.addEdge("202", "206", 2);
graph.addEdge("217", "201", 4);
graph.addEdge("201", "203", 2);

//Edges between stairs to connect all the floors
//Connecting 2nd and 1st floor
graph.addEdge("203", "103", 2);
graph.addEdge("204", "104", 2);
graph.addEdge("205", "105", 2);
graph.addEdge("206", "106", 2);

//Connecting 1st and Ground floor
graph.addEdge("107", "28", 2);
graph.addEdge("108", "33", 2);
graph.addEdge("109", "43", 2);
graph.addEdge("110", "20", 2);



let result = document.getElementById('searchBtn');
result.addEventListener('click', showPath);
let path;

function findclass(){
    let list = document.getElementById('myUL');
    let cls=document.getElementById('cls');
    displayclass(cls.value.toUpperCase());
    cls.value = '';
    list.classList.add('none')
}

function displayclass(value) {
    let a;
    let classContainer = document.getElementById('displayClass');
    classContainer.classList.remove('none');
    let classElement = document.createElement('div');
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            a = getobj(roomObj[array[i]]);
            break;
        }
    }
    console.log(a);
    if (a == undefined) {
        classElement.innerText = 'Invalid Classroom';
    } else {
        classElement.innerText = a;
    }
    classElement.className = 'classElement';
    classContainer.append(classElement);
}

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


function getobj(p) {
    let a = '';
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (roomObj[array[i]] == p) {
            if (j == 0) {
                a = a.concat(array[i]);
                j++;
            } else {
                a = a.concat('/');
                a = a.concat(array[i]);
                j++;
            }
        }
    }
    console.log(a);
    return a;
}

function displayPath(path) {
    let pathContainer = document.getElementById('path');
    for (let i = 0; i < path.length; i++) {
        let pathElement = document.createElement('div');
        let a = getobj(path[i]);
        pathElement.innerText = (i != path.length - 1) ? `${a}    →` : a;
        pathElement.className = 'pathElement';
        pathContainer?.append(pathElement);
    }

}

function goBack() {
    window.location.reload();
}

function showOnMap(type = 'close') {
    let mapg = document.getElementById('groundFloor');
    let mapf = document.getElementById('firstFloor');
    let maps = document.getElementById('SecondFloor');

    if (type == 'open') {

        mapg.classList.remove('none');
        mapf.classList.remove('none');
        maps.classList.remove('none');

        for (let i = 0; i < path.length; i++) {
            let room = document.getElementById(`${groundObj[path[i]]}`);
            if (i == 0 || i == path.length - 1) {
                room.style.background = 'turquoise';
                room.style.color = 'white';
            } else {
                room.style.background = 'greenyellow';
                room.style.color = 'black';
            }
        }

    } else {
        mapg.classList.add('none');
        mapf.classList.add('none');
        maps.classList.add('none');
    }

}