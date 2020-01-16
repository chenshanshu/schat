from const import PI
from docx import Document
from docx.shared import Inches
import os
import time
import calendar


def main():
    # walk(r"D:\workspace\py")
    # readFile()
    # test1()
    demo1()


def doc():
    while True:
        a = input("请输入姓名：")
        if(a):
            print(a.title())
            print(a.upper())
            print(a.lower())
            print(a.rstrip())
            print("hellow "+a)
            break
        else:
            print("输入有误")
    print(0.1+0.2)
    print(3/2)

    no = 99
    while True:
        a = input("请输入你喜欢的数字：")
        a = int(a)
        if(a == no):
            print("猜对了")
            break
        elif(a < no):
            print("猜小了")
        else:
            print("猜大了")

def list1():
    list1 = ['danel','lucy',1,2]
    list1.insert(0,'junnuo')
    del(list1[3])
    del(list1[3])
    print(list1)

def getInput():
    while(True):
        oper = input("请输入操作（e:加密d:解密）：")
        if(oper == 'e' or oper == 'd'):
            break
        else:
            print("输入有误")
    data = input('请输入文件名,替换前，替换后').split()
    a, b, c = data


def readFile(path):
    with open(path, 'rb+') as f:
        lines = f.readlines()
        for line in lines:
            if "danel" in line:
                line = line.replace("danel", "ox123".encode("utf-8"))
                f.write(line)


def walk(path):
    list = []
    for root, dirs, files in os.walk(path):
        print(dirs)
        for item in files:
            list.append(os.path.join(root, item))
        # for item in list:
        #     readFile(item)


def test():
    d = {'a': 'apple', 'b': 'banana', 'c': 'car', 'd': 'desk'}
    for key in d:
        print(key, d.get(key))
    for key, value in d.items():
        print(key, value)
    list1 = [i*2 for i in range(1, 11)]
    print(list1)


def test1():
    with open(r'D:\workspace\py\index.html', 'w', encoding='utf-8') as f2:
        data = input('请输入行数:')
        for r in range(1, int(data)+1):
            for c in range(1, int(r)+1):
                f2.write('{0}*{1}={2}\t'.format(r, c, r*c))
            f2.write('\n')


def write():
    with open(r'D:\workspace\py\index.html', 'r', encoding='utf-8') as f:
        data = f.readlines()
        with open(r'D:\workspace\py\index.html', 'w', encoding='utf-8') as f2:
            for line in data:
                f2.write(line.replace('2020-01', '2019-01'))

def demo1():
    list1=["mather","father","grandma"]
    list1.append("grandFa")
    list1.remove("grandma")
    list1.insert(0,"grandMa")
    print(list1)
    # for item in list1:
    #     print('%s，可以一起吃晚餐吗'%item)
    #     print('{0}，可以一起吃晚餐吗'.format(item))
    list1.sort()
    print(list1)
    list1.sort(reverse=True)
    print(list1)
    print(list1[-1])
    print(len(list1))

    list2 = list(range(2,21,2))
    print(list2)
    print(sum(list2))
    list3 = []
    for item in range(3,30):
        if(item%3==0):
            list3.append(item)
    print("the first three items in list are:{0}".format(list3))
    print("the items from the middle of the list are:{0}".format(list3[-3:]))
    list4 = list3[:]
    list4.append(30)
    print("{0},{1}".format(list3,list4))

def demo2(a,*vartuple):
    pass
    


main()
demo2(1)
