var arr=['差','不合格','一般','良好','优秀'];
var arr1=document.getElementsByTagName("img");	
var con;
function starPic(i)
{				
	for(var j=0;j<=i;j++)
	{
		document.getElementById("textarea").value=arr[i];
		arr1[j].src="images/star2.png";
		if(i<2)
			arr1[j].src="images/star1.png";		
	}
}	
function hide(i)
{
	if(con==false)
	{
		document.getElementById("textarea").value=null;
		for(var k=0;k<=i;k++)
		{
			arr1[k].src="images/star0.png";			
		}
	}
	else
		return con=true;	
}
function qd(i)
{
	if(con==true)
	{
		for(var j=0;j<=i;j++)
	   {
		document.getElementById("textarea").value=arr[i];		
		arr1[j].src="images/star2.png";
		if(i<2)
			arr1[j].src="images/star1.png";	 
		for(var m=i+1;m<5;m++)
				arr1[m].src="images/star0.png";		
	  }
	}
	else
		return con=false;
}


