// clear values
function clearScreen(){
    document.getElementById("number").value = "";
}
// display values
function displayData(value){
    document.getElementById('number').value +=value;
}
function Answer() {
    var n =document.getElementById("number").value;
    var a = eval(n);
    document.getElementById("number").value = a;

}
function Delete() {
    var displayBox = document.getElementById("number");
    displayBox.value = displayBox.value.slice(0, -1);
}