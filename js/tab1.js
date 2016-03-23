window.onload=function () {
	var tab=document.getElementsByClassName("top_bottom")[0];
	var lis=document.getElementsByClassName("top_bottom_3");
	var downMenu=document.getElementsByClassName("downMenu");
	
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				downMenu[j].style.display="none";
			}

			downMenu[this.index].style.display="block";
		}
		lis[i].onmouseout=function(){
			for(var j=0;j<lis.length;j++){
				downMenu[j].style.display="none";
			}
		}
	}


    var win=$(".banner_img")[0];
	var imgs=$("a",win);
	var lic=$("li",win);
	var btnLs=$(".btnL",win)[0];
    var btnRs=$(".btnR",win)[0];
	var num=0;
	 
	// 自动轮播
	var t=setInterval(move,1500);
	// 改变当前下标	
	win.onmouseover=function(){
		clearInterval(t);

	}
	win.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1500);
		
	}
  function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		// 所有的层级降低
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lic[i].id="";
			// lic[i].style.background="#fff";
		}/*当前的层级调高*/
		imgs[num].style.zIndex=3;
		lic[num].id="hot";
       // lic[i].style.background="red";
	}
	for(var i=0;i<imgs.length;i++){
		lic[i].index=i;
		lic[i].onclick=function(){
			num=this.index;
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=0;
				lic[j].id="";
			}
			imgs[this.index].style.zIndex=3;
			lic[this.index].id="hot";
			

		}
    }
    
    btnLs.onclick=function(){
    		move();
    }
    btnRs.onclick=function(){
    	num--;
    	if (num<0) {
    	num=imgs.length-1;	
    	}
    	for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lic[i].className="";
			// lic[i].style.background="#fff";
		}/*当前的层级调高*/
		imgs[num].style.zIndex=3;
		lic[num].className="hot";
    
    }
}