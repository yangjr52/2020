function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var login=byId("login"),
	blog=byId("blog"),
	p=byId("p"),
	title1=byId("title1"),
	title2=byId("title2"),
	title3=byId("title3"),
	all=byId("all"),
	content=all.getElementsByClassName("content"),
	len=content.length,
	box1=byId("box1"),
	box2=byId("box2"),
	box3=byId("box3");

login.onclick=function(){
	var name=prompt("用户名：");
	login.innerHTML='用户：'+name;
}

	title1.onclick=function(){
		title1.classList.add("active2");
		title2.classList.remove("active2");
		title3.classList.remove("active2");

		box1.classList.remove("none");
		box1.classList.add("block");
		box2.classList.add("none");
		box2.classList.remove("block");
		box3.classList.add("none");
		box3.classList.remove("block");
	}

	title2.onclick=function(){
		title2.classList.add("active2");
		title1.classList.remove("active2");
		title3.classList.remove("active2");

		box2.classList.remove("none");
		box2.classList.add("block");
		box1.classList.add("none");
		box1.classList.remove("block");
		box3.classList.add("none");
		box3.classList.remove("block");
	}

	title3.onclick=function(){
		title3.classList.add("active2");
		title1.classList.remove("active2");
		title2.classList.remove("active2");

		box3.classList.remove("none");
		box3.classList.add("block");
		box1.classList.add("none");
		box1.classList.remove("block");
		box2.classList.add("none");
		box2.classList.remove("block");
	}


video.onclick=function(){
	p.innerHTML='视频教程';
	title1.innerHTML='入门教程';
	title2.innerHTML='进阶教程';
	title3.innerHTML='视频投稿';
	video.classList.add("active");
	blog.classList.remove("active");
	title1.classList.add("active2");
	title2.classList.remove("active2");
	title3.classList.remove("active2");
}

blog.onclick=function(){
	p.innerHTML='博客首页';
	title1.innerHTML='热门推荐';
	title2.innerHTML='经典教程';
	title3.innerHTML='优秀案例';
	
	blog.classList.add("active");
	video.classList.remove("active");
	title1.classList.add("active2");
	title2.classList.remove("active2");
	title3.classList.remove("active2");

	box1.classList.remove("none");
		box1.classList.add("block");
		box2.classList.add("none");
		box2.classList.remove("block");
		box3.classList.add("none");
		box3.classList.remove("block");
}





