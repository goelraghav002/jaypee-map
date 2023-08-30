//Array to display Options
let arr = [
    'Ground-Floor-Right-Washroom', 'Cafe', 'Old-Cafe', 'Badminton-Court', 'Annapurna', 'Open-Space',
    'Physics-Lab', 'CL-2', 'CL-1', 'EMI-Lab', 'Temple', 'Ground-Floor-Left-Washroom', 'Multi-Purpose-Hall',
    'Small-Gate', 'Entry', 'Workshop-Lab', 'Admin', 'LRC', 'Innovation-Hub', 'Ground', 'Basement', 'O.A.T.',

    'First-Floor-Left-Washroom', 'First-Floor-Right-Washroom', '111', 'CR-1', 'Faculty-Block-ECE', 'EDD-Drawing-Hall',
    'M.P.H-First-Floor', '113', 'CR-2', '116', 'T1', '117', 'LT-2', '127', 'T2', '126', 'T3', '118', 'LT1', 'SR-05', '123', 'CR-7',
    '133', 'Communication-Lab', '132', 'M.M.L. Lab', '130', 'Basic-Electronics-Lab', '134', 'DSP Lab', '137', 'CR-8', '158',
    'Project-Lab-CSE', '157', 'Project-Lab-ECE', '121', 'T4', '138', 'CR-9', '140', 'CICR-Lab', '142', 'VLSI-Project-Lab', '148',
    'CR-44', '151', 'CL-4', '150', 'CR-59', '153', 'CR-45', '154', 'CR-60', 'CL-3', 'Server-Room',

    'Second-Floor-Left-Washroom', 'Second-Floor-Right-Washroom', 'Faculty-Block-CSE', 'Faculty-Block-Other-Subjects',
    'HSS-Faculty-Block', '217', 'CR-3', '219', 'Humanities-Lab', 'Analog-to-Digital-Lab', '224', 'T5', '225', 'CR-4', '257',
    '226', 'CR-5', '228', 'T6', '229', 'CR-6', '230', 'T8', '234', 'Electromagnetics-Lab', '237', 'Microcontrollers-Lab',
    '238', 'CR-53', '241', 'Mobile-Technology-Lab', '240', 'CR-54', '242', 'CR-46', '243', 'P-&-D-Computing-Lab', '264', 'Information-Security-Lab', '263', 'SR-06', 'LT-9', '244', 'TR-09', '246', 'LT-3', '254', 'LT-4', '259', 'LT5', '255', 'LT-6'
];

//Array to select selection to corresponding numbers present in the graph created
let sroomObj = {
    'Ground-Floor-Right-Washroom': 21, 'Cafe': 22, 'Old-Cafe': 23, 'Badminton-Court': 24, 'Annapurna': 25, 'Open-Space': 26, 'Physics-Lab': 41, 'CL-2': 35, 'CL-1': 31, 'EMI-Lab': 27, 'Temple': 29, 'Ground-Floor-Left-Washroom': 30, 'Multi-Purpose-Hall': 32, 'Small-Gate': 36, 'Entry': 37, 'Workshop-Lab': 38, 'Admin': 39, 'LRC': 40, 'Innovation-Hub': 42, 'Ground': 44, 'Basement': 45,
    'O.A.T.': 47,

    'First-Floor-Left-Washroom': 101, 'First-Floor-Right-Washroom': 102, '111': 111, 'CR-1': 111, 'Faculty-Block-ECE': 131, 'EDD-Drawing-Hall': 124, 'M.P.H-First-Floor': 112, '113': 113, 'CR-2': 113, '116': 116, 'T1': 116, '117': 117, 'LT-2': 117, '127': 127, 'T2': 127, '126': 126, 'T3': 126, '118': 118, 'LT1': 118, 'SR-05': 125, '123': 123, 'CR-7': 123, '133': 133, 'Communication-Lab': 133, '132': 132, 'M.M.L. Lab': 132, '130': 130, 'Basic-Electronics-Lab': 130, '134': 134, 'DSP Lab': 134, '137': 137, 'CR-8': 137, '158': 158, 'Project-Lab-CSE': 158, '157': 157, 'Project-Lab-ECE': 157, '121': 121, 'T4': 121, '138': 138, 'CR-9': 138, '140': 140, 'CICR-Lab': 140, '142': 142, 'VLSI-Project-Lab': 142, '148': 148, 'CR-44': 148, '151': 151, 'CL-4': 150, '150': 150, 'CR-59': 150, '153': 153, 'CR-45': 153, '154': 154, 'CR-60': 154, 'CL-3': 151, 'Server-Room': 128,

    'Second-Floor-Left-Washroom': 201, 'Second-Floor-Right-Washroom': 202, 'Faculty-Block-CSE': 207, 'Faculty-Block-Other-Subjects': 208, 'HSS-Faculty-Block': 209, '217': 217, 'CR-3': 217, '219': 219, 'Humanities-Lab': 219, 'Analog-to-Digital-Lab': 224, '224': 224, 'T5': 225, '225': 225, 'CR-4': 226, '226': 226, 'CR-5': 228, '228': 228, 'T6': 229, '229': 229, 'CR-6': 230, '230': 230, 'T8': 234, '234': 234, 'Electromagnetics-Lab': 237, '237': 237, 'Microcontrollers-Lab': 238, '238': 238, 'CR-53': 241, '241': 241, 'Mobile-Technology-Lab': 240, '240': 240, 'CR-54': 242, '242': 242, 'CR-46': 243, '243': 243, 'P-&-D-Computing-Lab': 264, '264': 264, 'Information-Security-Lab': 263, '263': 263, 'SR-06': 244, 'LT-9': 244, '244': 244, 'TR-09': 246, '246': 246, 'LT-3': 254, '254': 254, 'LT-4': 259, '259': 259, 'LT5': 255, '255': 255, 'LT-6': 257, '257': 257
}


for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = sroomObj[arr[i]];
    start.add(option);
}

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = sroomObj[arr[i]];
    end.add(option);
}

let list = document.getElementById('myUL');
for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.innerText = arr[i];
    item.id = `class${arr[i]}`;
    list.append(item);
}

function handleSearch() {
    let value = document.getElementById('cls').value;
    let list = document.getElementById('myUL');
    let filter, a, txtValue;
    if (value != '') {
        list.classList.remove('none');
    } else {
        list.classList.add('none');
    }
    filter = value.toUpperCase();
    let li = list.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++){
        a = li[i].innerText;
        txtValue = a;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

// Managing Pages
function handlePages(container) {
    let box = document.querySelector(`.${container}`);
    let buttonContainer = document.querySelector('.choiceContainer');
    box.classList.remove('none');
    buttonContainer.classList.add('none');
}
