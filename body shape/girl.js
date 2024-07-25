function submitSizes() {
    var bust = parseFloat(document.getElementById('bust').value);
    var waist = parseFloat(document.getElementById('waist').value);
    var hips = parseFloat(document.getElementById('hips').value);
    
    if (isNaN(bust) || isNaN(waist) || isNaN(hips)) {
        alert('Please enter valid numbers for all measurements.');
        return;
    }
        var resultDiv = document.getElementById('result');
    resultDiv.innerHTML='<h2>Determining Your Body Type..</h2>';
    setTimeout(()=>{
var bodyShape = determineBodyShape(bust, waist, hips);
resultDiv.innerHTML=`<h2>Your Body type is "${bodyShape}"</h2>
<button id="last">want to Know more about your body type</button>`;
document.getElementById("last").addEventListener("click",()=>
{
    window.location.href=bodyShape+".html";
})
    },1000);
    resultDiv.style.display = 'block';
}
function determineBodyShape(bust, waist, hips) {
    if (bust === waist && waist === hips) {
        return 'Rectangle';
    } else if (bust > waist && bust > hips) {
        return 'InvertedTriangle';
    } else if (hips > bust && hips > waist) {
        return 'Pear';
    } else if (waist < bust && waist < hips) {
        return 'Hourglass';
    } else {
        return 'Undefined';
    }
}