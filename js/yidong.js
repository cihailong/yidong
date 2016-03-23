      window.onload=function(){
    	
    	var lis=document.getElementsByClassName("item");
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




  var win=$(".window")[0];
  var imgs=$(".abc");
  var liss=$(".tab2");
  var btnL=$(".btnL")[0];
  var btnR=$(".btnR")[0];
  var num=0;
   //自动轮播
 liss[0].className="tab2 hots"
 var t=setInterval(move,1000);
//  //移到窗口停止轮播
win.onmouseover=function(){
    clearInterval(t);
}
win.onmouseout=function(){
    clearInterval(t);
    t=setInterval(move,1000);
}
for(var i=0;i<imgs.length;i++){
    liss[i].index=i;
    liss[i].onclick=function(){
    num=this.index;
    for(var i=0;i<imgs.length;i++){
    imgs[i].style.zIndex=0;
    liss[i].className="tab2";
}
    imgs[this.index].style.zIndex=3;
    liss[this.index].className="tab2 hots";
}
}

btnL.onclick=function(){
      num--;
    if(num<0){
      num=imgs.length-1;
    }
      for(var i=0;i<imgs.length;i++){
        imgs[i].style.zIndex=0;
        liss[i].className='tab2';
      }
      imgs[num].style.zIndex=3;
      liss[num].className='tab2 hots';
}
btnR.onclick=function(){
      move();

}


function move(){
  num++;//改变当前下标
  if(num==imgs.length){
      num=0;
}
//所有层级降下去，把当前的层级最高
  for(var i=0;i<imgs.length;i++){
     imgs[i].style.zIndex=0
      liss[i].className="tab2"
 }
     imgs[num].style.zIndex=10;
  liss[num].className="tab2 hots";
 }




function $(selecter){
        var first=selecter.charAt(0);
        if(first=="#"){
            return document.getElementById(selecter.substring(1));
        }else if(first=="."){
            return getClass(selecter.substring(1));
        }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
            return document.getElementsByTagName(selecter);
        }
        }


function getClass(className){
  if(document.getElementsByClassName){
  return document.getElementsByClassName(className);
  }else{
     var all=document.getElementsByTagName("*");
      var newarr=[];
           for (var i=0;i<all.length;i++){
            if (all[i].className=className){
              newar.push(all[i]);
            }
     }
     return newarr;
  }

}
//检查元素的类名是否满足所要获取的类名
function checkClass(obj,classname){
  var arrC=obj.className.split("");//按空格分割
  for(var i=0;i<arrC.length;i++){
    if(arrC[i]==classname){
      return true;
    }
  }
  return false;
}
	}