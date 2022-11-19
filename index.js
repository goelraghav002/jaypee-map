let start = document.getElementById('start');
let end = document.getElementById('end');

let arr = [111, 113, 116, 127, 117, 118, 126, 121, 123, 150, 151, 142, 140, 138, 137, 157, 158, 134, 133, 132, 130, 148, 153, 217, 219, 224, 225, 226, 228, 229, 230, 234, 237, 238, 241, 240, 264, 263, 244, 244, 246, 254, 259, 255, 257];

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = arr[i];
    start.add(option);
}
for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = arr[i];
    end.add(option);
}







