function submitSizes() {
    var shoulders = parseFloat(document.getElementById('shoulders').value);
    var chest = parseFloat(document.getElementById('chest').value);
    var waist = parseFloat(document.getElementById('waist').value);
    
    if (isNaN(shoulders) || isNaN(chest) || isNaN(waist)) {
        alert('Please enter valid numbers for all measurements.');
        return;
    }
        var resultDiv = document.getElementById('result');
    resultDiv.innerHTML='<h2>Determining Your Body Type..</h2>';
    setTimeout(()=>{
var bodyShape = determineBodyShape(shoulders, chest, waist);
resultDiv.innerHTML=`<h2>Your Body type is "${bodyShape}"</h2>
<button id="last">want to Know more about your body type</button>`;
document.getElementById("last").addEventListener("click",()=>
{
    window.location.href=bodyShape+".html";
})
    },1000);
    resultDiv.style.display = 'block';
}
function determineBodyShape(shoulders, chest, waist) {
    if (shoulders === chest && chest === waist) {
        return 'Rectanglee';
    } else if (shoulders > chest && chest > waist) {
        return 'Inverted_Triangle';
    } else if (chest >= shoulders && waist > shoulders) {
        return 'Oval';
    } else if (chest < shoulders && waist <= chest) {
        return 'Trapezoid';
    } else {
        return 'Undefined';
    }
}