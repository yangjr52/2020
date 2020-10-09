#include<stdio.h>
main()
{
	int i,k,p,m=0;
	for(i=2;i<=100;i++){
		p=1; //用p来判断当前数是否是质数 ，p=1是质数,p=0不是质数
		for(k=2;k<i;k++){
			if(i%k==0){
				p=0;
				break;
			}
		}
		if(p==1){
			if(m!=0){
				printf("，"); 
			}
			printf("%d",i); 
			m++; 
		}
	}
 } 
