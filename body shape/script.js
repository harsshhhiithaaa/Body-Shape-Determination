document.getElementById('girl').addEventListener("click",()=>{
        window.location.href="girl.html";
    });

document.getElementById('boy').addEventListener("click",()=>{
    window.location.href="boy.html";
});

 

// function submitSizes() {
//     var bust = parseFloat(document.getElementById('bust').value);
//     var waist = parseFloat(document.getElementById('waist').value);
//     var hips = parseFloat(document.getElementById('hips').value);
    
//     if (isNaN(bust) || isNaN(waist) || isNaN(hips)) {
//         alert('Please enter valid numbers for all measurements.');
//         return;
//     }
    
//     var resultDiv = document.getElementById('result');
//     var bodyShapeResult = document.getElementById('bodyShapeResult');
    
//     var bodyShape = determineBodyShape(bust, waist, hips);
//     bodyShapeResult.textContent = 'Your body shape is: ' + bodyShape;
//     resultDiv.style.display = 'block';
// }

// function determineBodyShape(bust, waist, hips) {
//     if (bust === waist && waist === hips) {
//         return 'Rectangle';
//     } else if (bust > waist && bust > hips) {
//         return 'Inverted Triangle';
//     } else if (hips > bust && hips > waist) {
//         return 'Triangle';
//     } else if (waist < bust && waist < hips) {
//         return 'Hourglass';
//     } else {
//         return 'Undefined';
//     }
// }

// function resetForm() {
//     document.getElementById('genderForm').reset();
//     document.getElementById('sizeForm').reset();
//     document.getElementById('result').style.display = 'none';
//     document.getElementById('genderForm').style.display = 'block';
// }
