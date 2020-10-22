#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <stdlib.h>
int climbStairs(int n) {
	int num1 = 1;
	int num2 = 2;
	int tep = 0;
	if (n <= 2)
	{
		return n;
	}
	else
	{
		for (int i = 2; i < n; i++)//从第三项开始， 第i项等于第i-1项加第i-2项
		{
			tep = num1 + num2;
			num1 = num2;
			num2 = tep;
		}
		return tep;
	}
}
int main()
{
	int n = 0;
	printf("请输入一个正整数：");
	scanf("%d", &n);
	int a = climbStairs(n);
	printf("%d\n", a);
	return 0;
}

