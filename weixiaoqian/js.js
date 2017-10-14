var str;
var numre;
function showData(num){
	str = document.getElementById('result');
	str.value += num;
}
function calculate(){
	document.getElementById("result").innerHTML = '';
	str = document.getElementById('result');
	numre = eval(str.value);
	str.value = numre;
}
function clearData(){
	str = document.getElementById('result');
	str.value = 0;

}
