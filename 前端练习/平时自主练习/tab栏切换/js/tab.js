var that;
class Tab {
    constructor(id){
        //获取元素
        this.main=document.querySelector(id);

        //获取所有的li和section 可以成数组
        this.lis=this.main.querySelectorAll('li');  //导航栏
        this.sections=this.main.querySelectorAll('section');  //内容栏

        this.add=this.main.querySelector('.tabadd');

        // li的父元素
        this.ul=this.main.querySelector('.firstnav ul:first-child');  //cs3选择器
        // section的父元素
        this.fsection=this.main.querySelector('.tabscon');

        //最下面new了一下tab 就会自动调用
        this.init();  //记得加this
        //that里面保存了construction里面的this
        that = this ;
    }

    init(){
        //init 初始化操作，让相关元素绑定事件

        this.updateNode();  //重新编号调用

        this.add.onclick=this.addTab;

        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index = i;  //获取编号
            this.lis[i].onclick = this.toggleTab; // 不要加小括号，加了的话就会直接调用了；
            
        }
    }

    //再次获取所有的li和section
    updateNode(){
        this.lis=this.main.querySelectorAll("li");
        this.sections=this.main.querySelectorAll('section');
    }

    //1.切换功能
    toggleTab(){  // this指向的是这个函数的调用者 是this.lis调用的
       // console.log(this.index);
       that.clearClass();  //调用清除功能
       this.className = 'liactive';  //这里的this指向的是this.lis
       // this.sections[this.index].className = 'conactive';  //这里的this指向的是this.lis,lis下面并没有sections这个属性 -> 报错
       that.sections[this.index].className = 'conactive';
    }

    //清除li和section里面的所有类
    clearClass(){  // this指向的是这个函数的调用者 是this调用的
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }

    //2.添加功能
    addTab(){ 
        that.clearClass();//调用 移除

        var random = Math.random();  //生成一个随机数
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 '+ random +'</section>';
        // 直接追加到父元素当中
        that.ul.insertAdjacentHTML('beforeend',li);  //追加到其余子元素的最后面 详情可参考网页：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
        that.fsection.insertAdjacentHTML('beforeend',section);

        that.init();

    }

    //3.删除功能
    remove(){}
    
    //4.修改功能
    editTab(){}
}

var tab = new Tab('#tab');



//该第15