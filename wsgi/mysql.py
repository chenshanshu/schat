# coding=utf-8
# import pymysql

# connect = pymysql.connect("localhost","root","201619","schat")
for i in range(1000, 9999):
    result=int(str(i)[0:2])**2+int(str(i)[2:4])**2
    result2=(int(str(i)[0:2])+int(str(i)[2:4]))**2
    if(result2 == i):
        print(i)