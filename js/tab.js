window.onload=function () {
	var tab=document.getElementsByClassName("top_bottom")[0];
	var lis=document.getElementsByClassName("top_bottom_3")[0];
	var downMenu=document.getElementsByClassName("downMenu")[0];
	
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
}

// (function(n)){
// 	lis[n].onmouseover=function(){
// 		for(var j=0;j<lis.length;j++){
// 			downMenu[j].style.display="none";	
// 		}
// 		downMenu[n].style.display="block";

// 	}
// 	lis[n].onmouseout=function(){
// 		for(var j=0;j<lis.length;j++){
// 			downMenu[j].style.display="none";
// 		}
// 	}
// })(i)
    
	// var win=$(".banner_img")[0];
	// var imgs=$("a",win);
	// var lic=$("li",win);
	// // alert(li);
	// var num=0;
	 
	// // 自动轮播
	// var t=setInterval(move,1500);
	// // 改变当前下标	
	// win.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// win.onmouseout=function(){
	// 	clearInterval(t);
	// 	t=setInterval(move,1500);
	// }
 //  function move(){
	// 	num++;
	// 	if(num==imgs.length){
	// 		num=0;
	// 	}
	// 	// 所有的层级降低
	// 	for(var i=0;i<imgs.length;i++){
	// 		imgs[i].style.zIndex=0;
	// 		lic[i].className="";
	// 		// lis[i].style.background="#fff";
	// 	}/*当前的层级调高*/
	// 	imgs[num].style.zIndex=3;
	// 	lic[num].className="hot";
 //       // lis[i].style.background="red";
	// }
	// for(var i=0;i<imgs.length;i++){
	// 	lic[i].index=i;
	// 	lic[i].onclick=function(){
	// 		num=this.index;
	// 		for(var j=0;j<imgs.length;j++){
	// 			imgs[j].style.zIndex=0;
	// 			lic[j].className="";
	// 		}
	// 		imgs[this.index].style.zIndex=3;
	// 		lic[this.index].className="hot";
			

	// 	}
	// }

 // }





// var t=setInterval(function(){}
//   //改变当前的下标
//   num++
//   //限定范围
//   if (num==imgs.length) {
//   	num=0;
//   }
//   //所有的层级都降低
//   for (var i = 0; i < imgs.length; i++) {
//   	img[i].style["z-index"]=0；
//   	 lis[i].style.background="#fff";
// 	}
//   }
//   //当前层级的跳高
//    imgs[num].style["z-index"]=3
//    lis[i].style.background="red";
// },1000)



//    //移到窗口停止轮播
//    var t=setInterval(move,1000);
//    win.onmouseover=function(){
//    	t=setInterval()
//    }






// for(var i=0;i<lis.length;i++){
// 	lis[i].index=i;
// 	lis[i].onclick=function(){
// 		if (index==this.index) {
// 			return;
// 		}
// 		for (var i = 0; i < imgs.length; i++) {
// 			imgs[i].style.background="#fff";
// 		}
	
// 	lis[this.index].style.background="red";
// 	imgs[this.index].style.left=imgw+"px";
// 	animate(imgs[index],{left:-imgw},600);
// 	animate(imgs[this.index],{left:0},600)
// 	index=num=this.index;
//        }
// }
// function move(){
// 	num++;
// 	if(num==imgs.length){
// 		num=0;
// 	}
// }
