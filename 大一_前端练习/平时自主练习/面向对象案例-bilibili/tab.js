class Tab{
	constructor(id){
		//获取元素
		this.main=document.querySelector(id);
		this.lis=this.main.querySelectorAll('li');
		this.section=this.main.querySelectorAll('section');
		this.init();
	}

	init(){
		//init 初始化操作 让相关元素都绑定事件
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index=i;
			this.lis[i].onclick=this.toggleTab;  //加上小括号就是直接加载调用 不加小括号就是点击完以后才调用
		}
	}

	//1.切换功能
	toggleTab(){
		//console.log(this.index);
		this.className='liactive';
		this.section[this.index].className='conactive';
	}

	//2.添加功能
	addTab(){}

	//3.删除功能
	removeTab(){}

	//4.修改功能
	editTab(){}
}
new Tab('#tab');