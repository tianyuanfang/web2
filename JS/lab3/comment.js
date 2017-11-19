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
}
function qd(i)
{	
	con=true;
	if(con==true)
	{
		for(var j=0;j<arr1.length;j++)
		{
			if(j<=i)
				{
					arr1[j].src="images/star2.png";
					if(i<2)
						arr1[j].src="images/star1.png";	
				}	
			else
				arr1[j].src="images/star0.png";
		}
	}	
}


