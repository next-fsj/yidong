/*
    getClass(className)  获取类名
    className   指定的类名
*/

 window.onload=function(){
 function getClass(className,range){
 	var range=range?range:document;
 	if(range.getElementsByClasssName){
 		return  range.getElementsByClassName(className);
 	}else{
 		var all=range.getElementsByTagName("*");
 		var newarr=[];
 		for(var i=0;i<all.length;i++){
 			if(checkClass(all[i],className)){
 				newarr.push(all[i])
 			}
 		}
 		return newarr;
 	}
 }

 /*
       checkClass(obj,classname)
       obj  当前元素
       classname  指定的classname
 */
 function checkClass(obj,classname){
 	var arrC=obj.className.split(" ");
 	for(var i=0;i<arrC.length;i++){
 		if(arrC[i]==classname){
 			return true
 			}
 	}
 	return false;

 }

 /*
     获取元素文本
     getConent (obj,[val])
     obj 对象
     [val]  内容
 */

 function getContent(obj,val){
 	if(obj.textContent){
 		if(val==undefined){
 			return obj.textContent
 		}else{
 			obj.textContent=val;
 		}
 	}else{
 		if(val==undefined){
 			return obj.innerText;
 		}else{
 			obj.innerText=val;
 		}
 	}
 }

 /*
    getStyle(obj,a)  获取样式
    obj  指定的对象
    a     属性
  
 */
 function getStyle(obj,a){
 	if(obj.currentStyle){
                    return obj.currentStyle[a];
 	}else{
 		return getComputedStyle(obj,null)[a];
 	}
 }

 /*
    $(#one/.one/div)
    selecter   参数
 */
function $(selecter,ranges){
	// selecter是个字符串，检查字符串的第一个字符
	// 返回在指定位置的字符 （charAt(位置)）
	// 定义一个变量first等于字符串的第一个字符
	var ranges=ranges?ranges:document;
	var first=selecter.charAt(0);
	// 判断第一个字符
	if(first=="."){
		// 引用前面封装好的getClass(className)函数
		// .one 截取.后的字符（substring(start,end)）
		return getClass(selecter.substring(1),ranges);
	}else if(first=="#"){
		return document.getElementById(selecter.substring(1));
		// 正则
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return ranges.getElementsByTagName(selecter)
	}
}
               


           
    var lis=document.getElementsByClassName("hang2");
    var downMenu=document.getElementsByClassName("hang2down");
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
  	var lis=$("li",win);
    
  	var num=0;
    // 自动轮播
  	var t=setInterval(move,1000);
  	function move(){
      // 改变当前的下标
  		num++;
      // 限定范围
  		if(num>imgs.length){
  			num=0;
  		}
      // 所有的层级都降低
  		for(var i=0;i<imgs.length;i++){
          
  			imgs[num].style.zIndex=0;
  			lis[i].className="";
  		}
  		imgs[num].style.zIndex=3;
  		lis[num].className="hot"; // 当前的层级调高
  	}
  	win.onmouseover=function(){
  		clearInterval(t);
  	}
  	win.onmouseout=function(){
  		clearInterval(t);
  		t=setInterval(move,1000);
  	}
  	for(var i=0;i<imgs.length;i++){
  		lis[i].index=i;
  		lis[i].onclick=function(){
  			num=this.index;
  			for(var j=0;j<imgs.length;j++){
  				imgs[j].style.zIndex=0;
  				lis[j].className="";
  			}
  			imgs[this.index].style.zIndex=3;
  			lis[this.index].className="hot";
  		}
  	}
            


             for(var i=0;i<imgs.length;i++){
         lis[i].index=i;
         lis[i].onclick=function(){
             num=this.index;
             for(var j=0;j<imgs.length;j++){
                 imgs[j].style.zIndex=0;
                 lis[j].className="";
             }
             imgs[this.index].style.zIndex=3;
             lis[this.index].className="hot";

         }
     }
 }











 