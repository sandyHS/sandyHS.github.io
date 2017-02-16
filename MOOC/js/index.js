// JavaScript Document
window.onload=function(){
	// var oBtn_client=document.getElementById('header').getElementsByClassName('down')[0];
	var oHeader=document.getElementById('header');
	var oBtn_client=getByClass(oHeader,'down')[0];
	var appShow=getByClass(oHeader,'appdown')[0];
	// 客户端里app显示隐藏
	oBtn_client.onmouseover=function(){
		appShow.style.display='block';
	};
	oBtn_client.onmouseout=function(){
		appShow.style.display='none';
	};   
    // 搜索框变色
	var oSearch=getByClass(oHeader,'search-wrap')[0].getElementsByTagName('input')[0];
	oSearch.onclick=function(){
		this.style.backgroundColor='#fff';
	};
	oSearch.onblur=function(){
	   	this.style.backgroundColor='#ccc';
	};
	//滚动广告栏
	var oBanner=document.getElementById('banner');
	var oBannerImg=oBanner.getElementsByTagName('img')[0];
	var oLs=oBanner.getElementsByTagName('span')[0];
	var oRs=oBanner.getElementsByTagName('span')[1];
	var aLi=oBanner.getElementsByTagName('li');
	var str='1234567';
	var num=0;
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
	   	aLi[i].onclick=function(){
	   		num=this.index;
	   		playBanner();
	   	};
	}   
	//移进banner左右键出来
	oBanner.onmouseover=function(){
	   	move(oLs,{opacity:0.2});
	   	move(oRs,{opacity:0.2});
	   	clearInterval(timer);
	};
	oBanner.onmouseout=function(){
	   	move(oLs,{opacity:0});
	   	move(oRs,{opacity:0});
	   	timer=setInterval(function(){
	   		next();
	   	},2500);
	};
	//左键切广告
	oLs.onclick=function(){
	   	num--;
	   	if(num<0){
	   		num=aLi.length-1;
	   	}
	   	playBanner();
	};
	//右键切广告
	oRs.onclick=next;
	var timer=null;
	timer=setInterval(function(){
	   	next();
	},3000);

	//精品推荐
	var oContent=getByClass(document,'content')[0];
	var aContent_Li=oContent.getElementsByTagName('li');
	var aDiv_rel=getByClass(oContent,'list_details');
	for(var i=0;i<6;i++){
		aContent_Li[i].index=i;
		aContent_Li[i].onmouseover=function(){
			for(var i=0;i<6;i++){
				aDiv_rel[i].style.display='none';
			}
			aDiv_rel[this.index].style.display='block';
		};
	}

	//热门课程
	var oCourse=document.getElementById('course');
	var aCourse_Li=oCourse.getElementsByTagName('li');
	var aCourse_content=getByClass(oCourse,'content');
	for(var i=0;i<aCourse_Li.length;i++){
		aCourse_Li[i].index=i;
		aCourse_Li[i].onmouseover=function(){
			move(aCourse_content[this.index],{top:-80})
		};
		aCourse_Li[i].onmouseout=function(){
			move(aCourse_content[this.index],{top:0})
		}
	}
	//登录框
	var oLogin_control=getByClass(document,'login_control')[0];
	var oBtn_163=oLogin_control.getElementsByTagName('a')[0];
	var oBtn_aikewang=oLogin_control.getElementsByTagName('a')[1];
	var oSpan1=oLogin_control.getElementsByTagName('span')[0];
	var oSpan2=oLogin_control.getElementsByTagName('span')[1];
	var oBtnshow1=getByClass(document,'btnshow1')[0];
	var oBtnshow2=getByClass(document,'btnshow2')[0];
	 
	oBtn_aikewang.onclick=function(){
		oBtnshow2.style.display='block';
		oBtnshow1.style.display='none';
		oSpan2.style.display='block';
		oSpan1.style.display='none';
	};
	oBtn_163.onclick=function(){
		oBtnshow1.style.display='block';
		oBtnshow2.style.display='none';
		oSpan1.style.display='block';
		oSpan2.style.display='none';
	};


	function next(){
	   	num++;
	   	if(num>aLi.length-1){
	   		num=0;
	   	}
	   	playBanner();
	}

	function playBanner(){
	   	//this.index=num;
		oBannerImg.src='img/banner'+str.charAt(num)+'.jpg';
	   	for(var i=0;i<aLi.length;i++){
	   		aLi[i].className='';
	   	}
	   	aLi[num].className='active';
	   	//oBannerImg.style.opacity=0;
	   	move(oBannerImg,{opacity:0.5},{duration:600,complete:function(){
	   		move(oBannerImg,{opacity:1},{duration:1100,complete:function(){
	   			oBannerImg,{opacity:0.6}
	   		}})
	   	}})
	}

	function getByClass(obj,sClass){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(sClass);
		}else{
			var aEle=obj.getElementsByTagName('*');
			var result=[];
			for(var i=0;i<aEle.length;i++){
				var arr=aEle[i].className.split(' ');
				for(var j=0;j<arr.length;j++){
					if(arr[j]==sClass){
						result.push(aEle[i]);
						break;
					}
				}
			}
			return result;
		}

	}	
	 
}  



