import urllib.request
import requests

url='http://www.tom61.com/ertongwenxue/shuiqiangushi/index.html '
headers = {
    'User-Agent': "mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/79.0.3945.88 safari/537.36",
}

def gethtml():
    html=urllib.request.urlopen(url).read()
    print(html.decode("utf8"))

def requestHtml():
    html=requests.get(url=url,headers=headers,params=None)
    print(html)
requestHtml()

