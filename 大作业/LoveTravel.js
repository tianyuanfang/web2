window.onload=function(){
	//导航栏
	var lis=document.getElementsByTagName('li');
	for (var i=0; i<lis.length; ++i) 
	{						
		lis[i].onmouseover = function() {					 
				this.className = "sfhover";
			}
		lis[i].onmouseout = function() {					 
				this.className = "";
			}
	} 
	//轮滚
	var speed=2000;
	var lg=document.getElementById('lg');
	var lg1=document.getElementById('lg1');
	var lg2=document.getElementById('lg2');
	lg2.innerHTML=lg1.innerHTML;
	var ID=setInterval(lgPic,speed);;	
	lg.onmouseover=function(){
		clearInterval(ID);
	}
	lg.onmouseout=function(){
		ID=setInterval(lgPic,speed);
	}
	function lgPic()
	{
		if(lg.scrollLeft >= lg1.offsetWidth)		
			lg.scrollLeft = 0;		
		else		
			lg.scrollLeft += 1265;		
	}
	//服务优势
	var m=1,n=1,k=1;
	var img=document.getElementById('serve').getElementsByTagName('img');
	for(var i=0;i<img.length;i++)
	{		
		img[i].onmouseover=function(){
			if(m==5&&n==5)
			{
				m=1;
				n=1;
			}
			this.src=('images/serve'+(m++)+(n++)+'.png');
		}
		img[i].onmouseout=function(){
			if(k==5)
				k=1;
			this.src=('images/serve'+(k++)+'.png');
		}
	}
	//旅游行摄
	var j=1;
	var pic=document.getElementById('div').getElementsByTagName('a');
	var pic5=document.getElementById('pic5').getElementsByTagName('img')[0];
	for(var i=0;i<pic.length;i++)
	{			
		pic[i].onmouseover=function(){
			for(var i=0;i<pic.length;i++)
			{
				pic[i].style.border=null;
			}
			this.style.border="3px solid #FF9900";			
			pic5.src='images/img'+(j++)+'.png';
			if(j==5)
				j=1;
		}		
	}	
}
