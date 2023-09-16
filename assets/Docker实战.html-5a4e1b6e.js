import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as o,d as e,e as n,b as l,f as a}from"./app-5f4e7946.js";const c="/CoderNotes/assets/image-20230828150822213-68676d9d.png",d="/CoderNotes/assets/image-20230828151113814-fc24b497.png",p="/CoderNotes/assets/image-20230828151419224-dce90ccb.png",m="/CoderNotes/assets/image-20230828151920939-d23fb1dc.png",v="/CoderNotes/assets/image-20230828160206034-531299d6.png",u="/CoderNotes/assets/image-20230828155826222-11a3a00e.png",b="/CoderNotes/assets/image-20230828161135272-248e0881.png",g="/CoderNotes/assets/image-20230828161641134-04db8776.png",k="/CoderNotes/assets/image-20230828162459734-bfc5e19b.png",f="/CoderNotes/assets/image-20230828162858458-b3d7b6bf.png",_="/CoderNotes/assets/image-20230828164952145-c344b304.png",x="/CoderNotes/assets/image-20230828170658505-d5218e68.png",h="/CoderNotes/assets/image-20230828170559881-2e0ee367.png",y="/CoderNotes/assets/image-20230828232309503-0929b0b5.png",C="/CoderNotes/assets/image-20230828232348198-e5a6f715.png",S="/CoderNotes/assets/image-20230828234447636-fe114295.png",N="/CoderNotes/assets/image-20230829000657699-846162f8.png",R="/CoderNotes/assets/image-20230829092110791-73beb302.png",L="/CoderNotes/assets/image-20230829092458277-36aa33e6.png",E="/CoderNotes/assets/image-20230829092555425-e8ccb3b8.png",z="/CoderNotes/assets/image-20230829092704905-e3b9386a.png",A="/CoderNotes/assets/image-20230829094044487-a5a702ed.png",P="/CoderNotes/assets/image-20230829094925587-9d14a2d5.png",q={},D=a('<h2 id="docker实战" tabindex="-1"><a class="header-anchor" href="#docker实战" aria-hidden="true">#</a> Docker实战</h2><h3 id="docker高可用集群搭建" tabindex="-1"><a class="header-anchor" href="#docker高可用集群搭建" aria-hidden="true">#</a> Docker高可用集群搭建</h3><p>MySQL集群搭建在实际项目中还是非常必须的，我们通过PXC(<code>Percona XtraDB Cluster</code>)来实现强一致性数据库集群搭建。</p><h4 id="mysql集群搭建" tabindex="-1"><a class="header-anchor" href="#mysql集群搭建" aria-hidden="true">#</a> MySQL集群搭建</h4><ol><li><p>拉取镜像：<code>docker pull percona/percona-xtradb-cluster</code><br><img src="'+c+'" alt="" loading="lazy"></p></li><li><p>复制pxc镜像【重命名】：<code>docker tag percona/percona-xtradb-cluster pxc</code><br><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>创建单独的网段，给MySQL数据库集群使用：<code>docker network create --subnet=172.20.0.0/24 pxc-net</code></p></li><li><p>查看网卡列表：<code>docker network list</code></p></li><li><p>查看网卡详情：<code>docker network inspect pxc-net</code></p></li><li><p>删除网段：<code>docker network rm pxc-net</code></p></li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>创建和删除volume：<code>docker volume create --name v1</code></li><li>删除volume：<code>docker volume rm v1</code></li><li>查看容器卷详情：<code>docker volume inspect v1</code></li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),M={start:"10"},T=e("br",null,null,-1),O={href:"https://docs.percona.com/percona-xtradb-cluster/8.0/docker.html",target:"_blank",rel:"noopener noreferrer"},w=a('<ul><li>运行三个PXC容器</li><li>CLUSTER_NAME PXC集群名字</li><li>XTRABACKUP_PASSWORD数据库同步需要用到的密码</li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>创建第一个节点：<code>docker run -d --name node1 -p 3301:3306 -v v1:/var/lib/mysql -v ~/pxc-docker-test/cert:/cert -v ~/pxc-docker-test/config:/etc/percona-xtradb-cluster.conf.d -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_NAME=PXC -e EXTRABACKUP_PASSWORD=123456 --privileged --network pxc-net --ip 172.20.0.2 pxc</code></p><p>创建第二个和第三个节点: 注意 <code>-e CLUSTER_JOIN=node1</code></p><p>创建第二个节点：<code>docker run -d --name node2 -p 3302:3306 -v v2:/var/lib/mysql -v ~/pxc-docker-test/cert:/cert -v ~/pxc-docker-test/config:/etc/percona-xtradb-cluster.conf.d -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_JOIN=node1 -e CLUSTER_NAME=PXC -e EXTRABACKUP_PASSWORD=123456 --privileged --network pxc-net --ip 172.20.0.3 pxc</code></p><p>创建第三个节点：<code>docker run -d --name node3 -p 3303:3306 -v v3:/var/lib/mysql -v ~/pxc-docker-test/cert:/cert -v ~/pxc-docker-test/config:/etc/percona-xtradb-cluster.conf.d -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_JOIN=node1 -e CLUSTER_NAME=PXC -e EXTRABACKUP_PASSWORD=123456 --privileged --network pxc-net --ip 172.20.0.4 pxc</code></p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>验证：在本地连接远程集群数据库，例如下图：</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如图所示，在node1中创建数据库test并在此数据库下建立表user。但是在同时，node2以及node3的连接中同时出现了此数据库及数据表。</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="负载均衡服务器搭建" tabindex="-1"><a class="header-anchor" href="#负载均衡服务器搭建" aria-hidden="true">#</a> 负载均衡服务器搭建</h4><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>拉取镜像：<code>docker pull haproxy</code><br><img src="'+f+`" alt="" loading="lazy"></p></li><li><p>创建配置文件：<code>vim /tmp/haproxy/haproxy.cfg</code><br> 配置文件中的内容：</p></li></ol><div class="language-cfg line-numbers-mode" data-ext="cfg"><pre class="language-cfg"><code>global
	#工作目录，这边要和创建容器指定的目录对应
	# chroot /usr/local/etc/haproxy
	#日志文件
	log 127.0.0.1 local5 info
	#守护进程运行
	daemon

defaults
	log	global
	mode	http
	#日志格式
	option	httplog
	#日志中不记录负载均衡的心跳检测记录
	option	dontlognull
 	#连接超时（毫秒）
	timeout connect 5000
 	#客户端超时（毫秒）
	timeout client  50000
	#服务器超时（毫秒）
 	timeout server  50000

    #监控界面	
    listen  admin_stats
	#监控界面的访问的IP和端口
	bind  0.0.0.0:8888
	#访问协议
 	mode        http
	#URI相对地址
 	stats uri   /dbs_monitor
	#统计报告格式
 	stats realm     Global\\ statistics
	#登陆帐户信息
 	stats auth  admin:admin
	#数据库负载均衡
	listen  proxy-mysql
	#访问的IP和端口，haproxy开发的端口为3306
 	#假如有人访问haproxy的3306端口，则将请求转发给下面的数据库实例
	bind  0.0.0.0:3306  
 	#网络协议
	mode  tcp
	#负载均衡算法（轮询算法）
	#轮询算法：roundrobin
	#权重算法：static-rr
	#最少连接算法：leastconn
	#请求源IP算法：source 
 	balance  roundrobin
	#日志格式
 	option  tcplog
	#在MySQL中创建一个没有权限的haproxy用户，密码为空。
	#Haproxy使用这个账户对MySQL数据库心跳检测
 	option  mysql-check user haproxy
	server  MySQL_1 172.20.0.2:3306 check weight 1 maxconn 2000  
 	server  MySQL_2 172.20.0.3:3306 check weight 1 maxconn 2000  
	server  MySQL_3 172.20.0.4:3306 check weight 1 maxconn 2000 
	#使用keepalive检测死链
 	option  tcpka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建happy容器：<code>docker run -d -p 8888:8888 -p 3306:3306 -v /tmp/haproxy:/usr/local/etc/haproxy --name haproxy --privileged --net=pxc-net haproxy</code></li></ol><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><p>在MySQL数据库上创建用户，用于心跳检测：<code>CREATE USER &#39;haproxy&#39;@&#39;%&#39; IDENTIFIED BY &#39;&#39;;</code><br><img src="'+x+'" alt="" loading="lazy"></p></li><li><p>浏览器访问：<code>http://192.168.232.188:8888/dbs_monitor</code><br> 用户名和密码都是<code>admin</code><br><img src="'+h+`" alt="" loading="lazy"></p></li><li><p>客户端连接Haproxy</p></li></ol><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>ip:centos_ip
port:3306
user:root
password:123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-boot项目部署" tabindex="-1"><a class="header-anchor" href="#spring-boot项目部署" aria-hidden="true">#</a> Spring Boot项目部署</h3><p>一个实际的项目部署情况应该是如下图所示：</p><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来我们就在MySQL集群环境的基础上来完成一个SpringBoot项目的集群部署操作，网络地址分配为：</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>创建对应的网络：<code>docker network create --subnet=172.24.0.0/24 sbm-net</code></p><p><img src="'+S+`" alt="" loading="lazy"><br> 2. 创建SpringBoot项目，通过整合Mybatis实现CRUD操作。<br> 配置文件中配置的JDBC属性为：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.datasource.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver  </span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.232.188:3306/test?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false  </span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456  </span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource  </span>
<span class="token key attr-name">mybatis.type-aliases-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.bobo.pojo  </span>
<span class="token key attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:mapper/*.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>对应的项目打包成jar包，并上传到虚拟服务器<code>/tmp/springboot/</code>下，然后创建Dockerfile文件。</li></ol><figure><img src="`+N+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>基于Dockerfile构建镜像：<code>docker build -f Dockerfile -t sbm-image .</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM openjdk:8
MAINTAINER frostylunar
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;springboot-mybatis&quot;</span> <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> <span class="token assign-left variable">author</span><span class="token operator">=</span><span class="token string">&quot;FrostyLunar&quot;</span>
COPY springboot-mybatis-demo-0.0.1-SNAPSHOT.jar springboot-mybatis.jar
CMD <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;springboot-mybatis.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>基于Image创建Container：<code>docker run -d --name sbm03 -p 8083:8080 --net=sbm-net --ip 172.24.0.4 sbm-image</code></li></ol><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>查看启动日志：<code>docker logs sbm01</code></li></ol><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li><p>浏览器访问测试：<code>http://192.168.232.188:8081/user/query</code><br><img src="'+z+`" alt="" loading="lazy"></p></li><li><p>创建多个容器：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> sbm01 <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token parameter variable">--net</span><span class="token operator">=</span>pro-net <span class="token parameter variable">--ip</span> <span class="token number">172.24</span>.0.2 sbm-image
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> sbm02 <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080 <span class="token parameter variable">--net</span><span class="token operator">=</span>pro-net <span class="token parameter variable">--ip</span> <span class="token number">172.24</span>.0.3 sbm-image
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> sbm03 <span class="token parameter variable">-p</span> <span class="token number">8083</span>:8080 <span class="token parameter variable">--net</span><span class="token operator">=</span>pro-net <span class="token parameter variable">--ip</span> <span class="token number">172.24</span>.0.4 sbm-image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>Nginx安装<br> 我们通过Nginx来实现负载均衡服务<br> 在centos的/tmp/nginx下新建nginx.conf文件，并进行相应的配置</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>user nginx;
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65; 

   
    server {
        listen 80;
        location / {
         proxy_pass http://balance;
        }
    }
    
    upstream balance{  
        server 172.24.0.2:8080;
        server 172.24.0.3:8080;
        server 172.24.0.4:8080;
    }
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拉取Nginx镜像：<code>docker pull nginx</code><br> 运行Nginx镜像：<code>docker run -d --name my-nginx -p 80:80 -v /tmp/nginx/nginx.conf:/etc/nginx/nginx.conf --network=sbm-net --ip 172.24.0.5 nginx</code></p><figure><img src="`+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>测试：<code>http://192.168.232.188/user/query</code></li></ol><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',44);function U(I,B){const s=t("ExternalLinkIcon");return r(),o("div",null,[D,e("ol",M,[e("li",null,[n("搭建PXC集群"),T,e("a",O,[n("官方文档"),l(s)])])]),w])}const j=i(q,[["render",U],["__file","Docker实战.html.vue"]]);export{j as default};
