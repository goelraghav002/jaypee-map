// let start = document.getElementById('start');
// let end = document.getElementById('end');

// let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127, 126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154, 128];
/*let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127, 126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154, 128, 201, 202, 203, 204, 205, 206, 207, 208, 209, 217, 219, 224, 225, 226, 228, 229, 230, 234, 237, 238, 241, 240, 242, 243, 264, 263, 244, 246, 254, 259, 255, 257];
*/
let arr = [
    'Ground-Floor-Right-Washroom', 'Cafe', 'Old-Cafe', 'Badminton-Court',
    'Annapurna', 'Open-Space', 'Physics-Lab', 'CL-2', 'CL-1', 'EMI-Lab', 'Temple', 'Ground-Floor-Left-Washroom', 'Multi-Purpose-Hall', 'Small-Gate', 'Entry', 'Workshop-Lab', 'Admin', 'LRC',
    'Innovation-Hub', 'Ground', 'Basement',
    'O.A.T.',

    'First-Floor-Left-Washroom', 'First-Floor-Right-Washroom', '111', 'CR-1',
    'Faculty-Block-ECE', 'EDD-Drawing-Hall', 'M.P.H-First-Floor', '113', 'CR-2', '116', 'T1', '117', 'LT-2', '127', 'T2', '126', 'T3', '118', 'LT1', 'SR-05', '123', 'CR-7', '133', 'Communication-Lab', '132', 'M.M.L. Lab', '130',
    'Basic-Electronics-Lab', '134', 'DSP Lab', '137', 'CR-8', '158', 'Project-Lab-CSE',
    '157', 'Project-Lab-ECE', '121', 'T4', '138', 'CR-9', '140', 'CICR-Lab', '142', 'VLSI-Project-Lab', '148', 'CR-44', '151', 'CL-4', '150', 'CR-59', '153',
    'CR-45', '154', 'CR-60', 'CL-3', 'Server-Room',

    'Second-Floor-Left-Washroom', 'Second-Floor-Right-Washroom', 'Faculty-Block-CSE',
    'Faculty-Block-Other-Subjects', 'HSS-Faculty-Block', '217', 'CR-3', '219', 'Humanities-Lab', 'Analog-to-Digital-Lab', '224', 'T5', '225', 'CR-4', '226', 'CR-5', '228',
    'T6', '229', 'CR-6', '230', 'T8', '234', 'Electromagnetics-Lab', '237',
    'Microcontrollers-Lab', '238', 'CR-53', '241', 'Mobile-Technology-Lab', '240', 'CR-54', '242', 'CR-46', '243', 'P-&-D-Computing-Lab', '264', 'Information-Security-Lab',
    '263', 'SR-06', 'LT-9', '244', 'TR-09', '246', 'LT-3/254', 'LT-4/259', 'LT5/255', 'LT-6/257'
];
let roomObj = {
    'Ground-Floor-Stairs-8': 20, 'Ground-Floor-Right-Washroom': 21, 'Cafe': 22, 'Old-Cafe': 23, 'Badminton-Court': 24, 'Annapurna': 25, 'Open-Space': 26, 'Physics-Lab': 41, 'CL-2': 35, 'CL-1': 31, 'EMI-Lab': 27, 'Ground-Floor-Stairs-5': 28, 'Temple': 29, 'Ground-Floor-Left-Washroom': 30, 'Multi-Purpose-Hall': 32, 'Ground-Floor-Stairs-6': 33, 'Ground-Floor-Stairs-9': 34, 'Small-Gate': 36, 'Entry': 37, 'Workshop-Lab': 38, 'Admin': 39, 'LRC': 40, 'Innovation-Hub': 42, 'Ground-Floor-Stairs-7': 43, 'Ground': 44, 'Basement': 45, 'Ground-Floor-Stairs-10': 46,
    'O.A.T.': 47,

    'First-Floor-Left-Washroom': 101, 'First-Floor-Right-Washroom': 102, 'First-Floor-Stairs-1': 103, 'First-Floor-Stairs-2': 104, 'First-Floor-Stairs-3': 105, 'First-Floor-Stairs-4': 106, 'First-Floor-Stairs-5': 107, 'First-Floor-Stairs-6': 108, 'First-Floor-Stairs-7': 109, 'First-Floor-Stairs-8': 110, '111': 111, 'CR-1': 111, 'Faculty-Block-ECE': 131, 'EDD-Drawing-Hall': 124, 'M.P.H-First-Floor': 112, '113': 113, 'CR-2': 113, '116': 116, 'T1': 116, '117': 117, 'LT-2': 117, '127': 127, 'T2': 127, '126': 126, 'T3': 126, '118': 118, 'LT1': 118, 'SR-05': 125, '123': 123, 'CR-7': 123, '133': 133, 'Communication-Lab': 133, '132': 132, 'M.M.L. Lab': 132, '130': 130, 'Basic-Electronics-Lab': 130, '134': 134, 'DSP Lab': 134, '137': 137, 'CR-8': 137, '158': 158, 'Project-Lab-CSE': 158, '157': 157, 'Project-Lab-ECE': 157, '121': 121, 'T4': 121, '138': 138, 'CR-9': 138, '140': 140, 'CICR-Lab': 140, '142': 142, 'VLSI-Project-Lab': 142, '148': 148, 'CR-44': 148, '151': 151, 'CL-4': 151, '150': 150, 'CR-59': 150, '153': 153, 'CR-45': 153, '154': 154, 'CR-60': 154, 'CL-3': 154, 'Server-Room': 128,

    'Second-Floor-Left-Washroom': 201, 'Second-Floor-Right-Washroom': 202, 'Second-Floor-Stairs-1': 203, 'Second-Floor-Stairs-2': 204, 'Second-Floor-Stairs-3': 205, 'Second-Floor-Stairs-4': 206, 'Faculty-Block-CSE': 207, 'Faculty-Block-Other-Subjects': 208, 'HSS-Faculty-Block': 209, '217': 217, 'CR-3': 217, '219': 219, 'Humanities-Lab': 219, 'Analog-to-Digital-Lab': 224, '224': 224, 'T5': 225, '225': 225, 'CR-4': 226, '226': 226, 'CR-5': 228, '228': 228, 'T6': 229, '229': 229, 'CR-6': 230, '230': 230, 'T8': 234, '234': 234, 'Electromagnetics-Lab': 237, '237': 237, 'Microcontrollers-Lab': 238, '238': 238, 'CR-53': 241, '241': 241, 'Mobile-Technology-Lab': 240, '240': 240, 'CR-54': 242, '242': 242, 'CR-46': 243, '243': 243, 'P-&-D-Computing-Lab': 264, '264': 264, 'Information-Security-Lab': 263, '263': 263, 'SR-06': 244, 'LT-9': 244, '244': 244, 'TR-09': 246, '246': 246, 'LT-3': 254, '254': 254, 'LT-4': 259, '259': 259, 'LT5': 255, '255': 255, 'LT-6': 257, '257': 257
}


//console.log(roomObj.length);

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = roomObj[arr[i]];
    start.add(option);
}
for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = roomObj[arr[i]];
    end.add(option);
}





// let roomObj = { 20: ['stairs', 'hello'], 22: 'cafe', 23: 'oldcafe', 24: 'bcourt', 25: 'annapurna', 26: 'openspace', 41: 'phylab', 35: 'cl2', 31: 'cl1', 27: 'EMIlab' }
 //console.log(roomObj);







