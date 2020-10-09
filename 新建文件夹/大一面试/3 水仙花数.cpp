#include <stdio.h>
#define fun(x) x*x*x
main()
{
	int i,num1,num2,num3,sum;
	num1 = 0;
	num2 = 0;
	num3 = 0;
	sum = 0;
	for(i=100;i<=999;i++)
	{
		num1 = i/100;
		num2 = i%100/10;
		num3 = i%100%10;
		sum = fun(num1)+fun(num2)+fun(num3);
		
		if(sum == i)
		{
			printf("%d,",i);
		}
	}
	
} 
