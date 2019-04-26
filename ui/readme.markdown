##### 任务列表
* 列表长按事件  https://www.cnblogs.com/padding1015/p/9277922.html
* ws心跳重连  https://www.cnblogs.com/1wen/p/5808276.html   <--https://blog.csdn.net/weixin_42235377/article/details/80491646-->  
* cors跨域  https://blog.csdn.net/sunq1982/article/details/77887655
* 实现https http://www.yiyongtong.com/archives/view-2609-1.html
* singalPage实现原理    https://www.cnblogs.com/constantince/p/5586851.html
* vuex   https://www.jianshu.com/p/dc5d0f7daa88
* https://zhuanlan.zhihu.com/p/51963164

***

## mongodb的基本使用 ##
```
show dbs
```
db.createCollection('friends',{capped:true,size:100000})

show tables (show collections)//查看数据库中的所有集合

db.dropDatabase() //删除数据库
db.collection.drop() //删除集合

db.friends.insert({"name":"danel","id":"101"}) //增

db.friends.remove({"name":"danel"},{justOne:true}) //删

db.friends.update({"name":"danel"},{$set:{"id":"102"}}) //改

db.getCollection('user').find({}).pretty() //查
