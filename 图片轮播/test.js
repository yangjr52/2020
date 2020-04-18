//封装一个代替getElementById的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

//全局变量
var index=0,
	timer=null,
	pics=byId("banner").getElementsByTagName("div"),
	dots=byId("dots").getElementsByTagName("span"),
	prev=byId("prev"),
	next=byId("next"),
	len=pics.length;

function slideImg(){
	var main = byId("main");
	//滑过清除定时器，离开继续
	main.onmouseover = function(){
		//滑过清除定时器
		if(timer) 
			clearInterval(timer);

	}
	main.onmouseout=function(){
		//间歇调用，每隔一段时间调用一次
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			//切换图片
			changeImg();
		},2000);//每隔2秒钟执行一下里面的脚本
	}

	//自动在main上触发onmouseout的事件
	main.onmouseout();

	//点击圆点切换图片，且绑定点击圆点事件，点击圆点切换图片
	for(var d=0;d<len;d++){
		//给所有span添加一个id的属性，值为d,作为当前span索引
		dots[d].id=d;
		dots[d].onclick=function(){
			//改变index为当前span的id值
			index=this.id;//this指的是绑定在哪个事件，在此处为spand
			this.className="active";
			//调用changImg实现切换图片
			changeImg(index);
		}
		/*	
			无法使用：function会改变作用域，打印出来是3
			dots[d].onclick=function(){
			//改变index为当前span索引
			index=d;
		}*/
	}

	//上一张下一张绑定事件
	next.onclick=function(){
		index++;
		if(index>=len)
		{
			index=0;
		}
		changeImg(index);
	}

	prev.onclick=function(){
		index--;
		if(index<0)
		{
			index=2;
		}
		changeImg(index);
	}

}
//切换图片
function changeImg(){
	//pics是一个数组，className是重写类 不建议写
	//pics[index].className=''
	//遍历banner下所有div将其隐藏
	for(var i=0;i<len;i++){
		//遍历banner下所有div和span，将div隐藏，将span清除类
		pics[i].style.display='none';
		dots[i].className="";
	}
	//根据索引
	pics[index].style.display='block';
	dots[index].className="active";

}

slideImg();