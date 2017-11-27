var picScroll=document.getElementById("picScroll");
var picScroll1=document.getElementById("picScroll1");
var picScroll2=document.getElementById("picScroll2");
picScroll2.innerHTML=picScroll1.innerHTML;
function changeToLeft()
{	
	picScroll.scrollLeft++;	
	if(picScroll.scrollLeft>picScroll1.offsetWidth)
		picScroll.scrollLeft=0;
}
var intervalId=setInterval(changeToLeft,1);
picScroll.onmouseover=function(){
	clearInterval(intervalId);
}
picScroll.onmouseout=function(){	
	intervalId=setInterval(changeToLeft,1);
}



