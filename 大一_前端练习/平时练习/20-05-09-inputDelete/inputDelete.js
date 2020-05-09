function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

window.onload=function(){

	var btn=document.getElementById("btn"),
		fir=document.getElementById("fir"),
		sec=document.getElementById("sec"),
		thi=document.getElementById("thi");
		DeFir=document.getElementById("DeFir"),
		DeSec=document.getElementById("DeSec"),
		DEThi=document.getElementById("DEThi");

	btn.onclick=function(){
		var firVal=fir.value,
			secVal=sec.value,
			thiVal=thi.value;
	}

	DeFir.onclick=function(){
		document.getElementById("fir").value="";
	}
	DeSec.onclick=function(){
		document.getElementById("sec").value="";
	}
	DeThi.onclick=function(){
		document.getElementById("thi").value="";
	}
	
}