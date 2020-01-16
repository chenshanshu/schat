import subprocess
import os
import time
import smtplib
from email.mime.text import MIMEText


def main():
    os.remove('ngrok.log')
    subprocess.Popen(r"d:/ngrok.exe http 8888 -log=ngrok.log", shell=True)
    time.sleep(10)
    send_mail()


def send_mail():
    msg_from = "59071780@qq.com"
    msg_to = "shanshu.chen@outlook.com"
    with open('ngrok.log', 'r', encoding='utf-8') as log:
        msg = MIMEText(log.read())
        msg['Subject'] = "ngrok已开启"
        msg['From'] = msg_from
        msg['to'] = msg_to
    try:
        s = smtplib.SMTP_SSL(host='smtp.qq.com', port='465')
        s.login("59071780@qq.com", "mqcoavajsgihbigb")
        s.sendmail(msg_from, msg_to, msg.as_string())
        print("发送成功")
    except Exception:
        print("发送失败")
    finally:
        s.quit()


if __name__ == '__main__':
    main()
