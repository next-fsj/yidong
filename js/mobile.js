$(function(){
	var box=$(".banner")[0];
	var imgs=$("a",box);
	var lis=$("li",box);
	var btnL=$(".btn_left")[0];
	var btnR=$(".btn_right")[0];
	var item=$(".s2");
	var list=$(".listt");

	for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onmouseover=function(){
			list[this.index].style.display="block";
		}
		item[i].onmouseout=function(){
			list[this.index].style.display="none";
		}
	}
	
	lis[0].style.background="#e22385";
	imgs[0].style.zIndex=1;
	var num=0;
	var flag=true;
	
	t=setInterval(moveR,2000)
	function moveR(){	
	 num++;	 
	 if(num==imgs.length){
	 	num=0;
	 }
	 
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},function(){
			flag=true;
		})
		lis[i].style.background="#eee";
	}
	animate(imgs[num],{opacity:1})
	lis[num].style.background="#e22385";
	}

	function moveL(){		
		num--;		 
		if(num<0){
		num=imgs.length-1;
		}
		
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},function(){
				flag=true;
			})
			lis[i].style.background="#eee";
			}
		animate(imgs[num],{opacity:1});
		lis[num].style.background="#e22385";
	}

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){			
			for(var j=0;j<lis.length;j++){
				lis[j].style.background="#eee";
				animate(imgs[j],{opacity:0})
			}
			lis[this.index].style.background="#e22385";
			animate(imgs[this.index],{opacity:1});
			num=this.index;
		}
	}

	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(moveR,2000);
	}

	btnR.onclick=function(){
     	if(flag){
     		flag=false;
     		moveR();
     	}
		
	}
	btnL.onclick=function(){
			if(flag){
     		flag=false;
     		moveL();
     	}
	}

	// 节点轮播
	// 获取gdout的宽度 每个盒子的宽度 所有盒子
	function gdlunbo(){
		var main_gd=$(".main_gd")[0];
		console.log(main_gd);
		var gdout=$(".gdout")[0];
	    var gdbox=$(".gdbox")[0];
	    var gdbk=$(".gdbk",gdout);
	    var gdbkW=gdbk[0].offsetWidth;
	    var gbtnL=$(".gbtnL")[0];
	    var gbtnR=$(".gbtnR")[0];
	    
	    var flag=true;
	    
	    var t=setInterval(moveR,2000);
	    function moveL(){
		animate(gdbox,{left:-gdbkW},function(){
			var first=getFirst(gdbox);
			gdbox.appendChild(first);
			gdbox.style.left=0;
			flag=true;
		   })
	    }

	    function moveR(){
	    	var first=getFirst(gdbox);		
			var last=getLast(gdbox);
			// console.log(first);
			gdbox.insertBefore(last,first);
			gdbox.style.left=-gdbkW+"px";
			animate(gdbox,{left:0},function(){
			flag=true;
			}) 
	    }


	    gbtnL.onclick=function(){
	    	if(flag){
				flag=false;
				moveL();
			}
	    }
	    gbtnR.onclick=function(){
	    	if(flag){
	    		flag=false;
	    		moveR();
	    	}
	    }

	    main_gd.onmouseover=function(){
	   	  clearInterval(t);
	    }
	   	main_gd.onmouseout=function(){
		  t=setInterval(moveR,2000);
	   }

	   var guding=$(".guding")[0];
	   var fix1=$(".fix1",guding);
	   console.log(fix1);
	   fix1.onmouseover=function(){
	   	console.log(1);
	   	animate(fix1,{left:-50});
	   }
	}
   gdlunbo();
	
})