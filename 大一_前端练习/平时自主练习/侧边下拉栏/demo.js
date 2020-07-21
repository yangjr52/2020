/*
	display:
*/

/*1.点击鼠标 显示内容
	1）获取元素
	2）控制鼠标点击事件
	3）设置css属性

*/

//封装一个代替getElementById的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var aList=document.querySelectorAll('.nav-list h2'),
    aHide=document.querySelectorAll('.hide'),
    aIcon=document.querySelectorAll('.nav-list i');

for(var i=0;i<aList.length;i++){
	/*自定义事件*/
	aList[i].index=i;
	aList[i].onclick=function(){
		aHide[this.index].style.height='200px';
		this.style.backgroundColor='#393c4a';
		aIcon[this.index].style.transform='rotate(90deg)';
	}
}

