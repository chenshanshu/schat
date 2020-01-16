import requests
import subprocess
import os
import time
import smtplib
from email.mime.text import MIMEText
import socket


def get_news():
    url = "http://open.iciba.com/dsapi/"
    r = requests.get(url)
    return r.json()


def send_news():
    news = get_news()
    msg_from = "59071780@qq.com"
    msg_to = "shanshu.chen@outlook.com,59071780@qq.com,1063707874@qq.com"
    text = '<img src="{0}"></img>'.format(news["fenxiang_img"])
    msg = MIMEText(text, 'html', 'utf-8')
    msg['Subject'] = "上班提醒"
    msg['From'] = msg_from
    msg['to'] = msg_to
    try:
        s = smtplib.SMTP_SSL(host='smtp.qq.com', port='465')
        s.login("59071780@qq.com", "mqcoavajsgihbigb")
        s.sendmail(msg_from, msg_to.split(","), msg.as_string())
        print("发送成功")
    except Exception:
        print("发送失败")
    finally:
        s.quit()

def parsehtml():
    url="http://www.tom61.com/"
    
if __name__ == '__main__':
    # send_news()
    hostname=socket.gethostname()
    ip=socket.gethostbyname(hostname)
    print(hostname,ip)
