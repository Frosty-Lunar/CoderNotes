---
title: Tomcat部署项目
icon: file
order: 1
author: FrostyLunar
date: 2023-08-16 周三
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---



## 方式一 : 在webapps目录中

1. 在Tomcat的webapps中创建一个我们自己的项目目录
	![](assets/image-20230816235506690.png)
2.  在自己的myProject中放入一下静态资源
    ![](assets/image-20230816235744501.png)

3.  启动Tomcat,访问对应的资源
   ![](assets/image-20230816235634901.png)

运行原理

![](./image/image_2wRn-VgR4h.png)

## 方式二 : 在其他目录中

在localhost中添加配置文件
![](assets/image-20230816235947288.png)
建议配置文件名和项目名相同
```xml
<Context path="/MyProject" docBase="D:/MyProject"/>
```

`path`为项目访问路径，`docBase`为项目实际所在路径，当我们在浏览器发起请求时，Tomcat会将请求转发到实际项目所在地。 


运行原理

![](./image/image_w0kPAllbOc.png)
