
/*
    getClass(className)  获取类名
    className   指定的类名
*/


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


function getContent(obj, val){
	if(obj.textContent){  
// 判读浏览器
       if(val===undefined){
       	 return cbj.textContent;
       }else{
       	 obj.textContent=val;
       	
       }
	}else{
		if(val===undefined){
       	 return obj.innerText;
       }else{
       	 obj.innerTsext=val;
       	
	}
}
}



function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];

	}else{
		return getComputedStyle(obj,null)[attr];
	}
}



// var aa
// #one  .one  div
// function $(selecter,ranges){
// 	var ranges=ranges?ranges:document;
// 	var first=selecter.charAt(0);//用字符串的方法获取首字母
// 	if(first=="#"){
//      	return ranges.getElementById(selecter.substring(1));//substring截取首字母以后字符用获取id的方法获取
// 	}else if(first=="."){
// 		return getClass(selecter.substring(1),ranges);
// 	}else if(/^[a-z][a-z1-6]{0,10})$/.test(selecter)){   // /^开头    $/结尾  [a-z]首字母范围[a-z1-6]  {0,10} 范围)
// 		return ranges.getElementsByTagName(selecter);}
//   //   }else if(/^<[a-z][a-z1-6]{0,10}>)$/.test(selecter)){   // /^开头    $/结尾  [a-z]首字母范围[a-z1-6]  {0,10} 范围)
// 		// return document.createElement(selecter.slice(1,-1));
//   //   }
// }




/*
   $(#one/.one/div)
   selecter   参数
*/
function $(selecter,ranges){
	//selecter是个字符串，检查字符串的第一个字符
	//返回在指定位置的字符 （charAt(位置)）
	//定义一个变量first等于字符串的第一个字符
	var ranges=ranges?ranges:document;
	var first=selecter.charAt(0);
	//判断第一个字符
	if(first=="."){
		//引用前面封装好的getClass(className)函数
		//.one 截取.后的字符（substring(start,end)）
		return getClass(selecter.substring(1),ranges);
	}else if(first=="#"){
		return document.getElementById(selecter.substring(1));
		//正则
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return ranges.getElementsByTagName(selecter)
	}
	
}




 // var  divs=document.getElementsByTagName("div")[0];
 //         console.log(getChilds(divs,true))
// 获取对象的子元素
          // getChilds(obj, type)
          // obj 父元素
          // type  true获取元素里面的元素节点和有意义的文本
          // false 只获取父元素里面的节点元素
//          function getChilds(obj,type){
//          var type=type?type:false
//          var childs=obj.childNodes;
//          var temp=[];
//          if (type===false) {
//          	for (var i = 0; i < childs.length; i++) {
//          		if(childs[i].nodeType==1){
//          			temp.push(childs[i]);
//          		}
//          	}
//          }else if(type===true){
//                for (var i = 0; i < childs.length; i++) {
// 	              if(childs[i].nodeType==1||(childs[i].nodeType==3 && !(/^\s+$/.test(childs[i].nodeValue)))){
// 	           	temp.push(childs[i])
//                  }
// 	           }

//          }

//          return temp; 
// }

// 获得第一个节点
// function getFirst(obj){
//   return getChilds(obj)[0];
         

// }
// // 获得最后一个节点
// function getLast(obj){
//   return getChilds(obj)[getChilds[obj].length-1];
// }


// // next 获得下一个
// function next(obj){

// }



// 获得第num个节点
// function getNum(obj,num){
//   return getChilds(obj)[num];
// }



