#include<stdio.h>
main ()
{
	int x,y,z,n;
	for(n=100;n<=999;n++)
	{x=n/100;
	y=(n/10)%10;
	z=n%10;
	if(n==x*x*x+y*y*y+z*z*z)
	printf("%d ",n);
	}
	
 } 
