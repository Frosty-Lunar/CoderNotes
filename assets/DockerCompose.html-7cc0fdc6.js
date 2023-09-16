import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as p,d as s,e as n,b as e,f as i}from"./app-5f4e7946.js";const c="/CoderNotes/assets/image-20230829101642561-f58df243.png",r="/CoderNotes/assets/image-20230829125337714-c0fc8904.png",d="/CoderNotes/assets/image-20230829125431880-50739e71.png",u="/CoderNotes/assets/image-20230829130634216-ca7a21b4.png",m="/CoderNotes/assets/image-20230829130606839-1a398dba.png",v="/CoderNotes/assets/image-20230829130811299-bacce722.png",k="/CoderNotes/assets/image-20230829211038777-bf2b7150.png",b="/CoderNotes/assets/image-20230829211051934-afd2e359.png",g="/CoderNotes/assets/image-20230829211634617-3183d1b2.png",h="/CoderNotes/assets/image-20230829211858318-0ddf1e38.png",f="/CoderNotes/assets/image-20230829211938064-227cb41a.png",y="/CoderNotes/assets/image-20230829212030761-00d2a6f1.png",_="/CoderNotes/assets/image-20230829212130027-7bbf7030.png",x="/CoderNotes/assets/image-20230829212217650-fa3d59ee.png",w="/CoderNotes/assets/image-20230829212323653-3e9abe60.png",C="/CoderNotes/assets/image-20230829212459345-9d27717d.png",q="/CoderNotes/assets/image-20230829212727807-eb5baab8.png",S={},N=i('<h2 id="dockercompose" tabindex="-1"><a class="header-anchor" href="#dockercompose" aria-hidden="true">#</a> DockerCompose</h2><h3 id="dockercompose介绍" tabindex="-1"><a class="header-anchor" href="#dockercompose介绍" aria-hidden="true">#</a> DockerCompose介绍</h3><p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。</p><p>DockerCompose的使用步骤</p><ul><li>创建对应的Dockerfile文件</li><li>创建yml文件，在yml文件中编排我们的服务</li><li>通过<code>docker-compose up</code>命令 一键运行我们的容器</li></ul><h3 id="compose安装" tabindex="-1"><a class="header-anchor" href="#compose安装" aria-hidden="true">#</a> Compose安装</h3>',6),R={href:"https://docs.docker.com/compose/install/linux/",target:"_blank",rel:"noopener noreferrer"},D=s("figure",null,[s("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),O=s("h3",{id:"dockercompose初体验",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dockercompose初体验","aria-hidden":"true"},"#"),n(" DockerCompose初体验")],-1),E={href:"https://docs.docker.com/compose/gettingstarted/",target:"_blank",rel:"noopener noreferrer"},P=i(`<p>创建对应的目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> composetest
 <span class="token builtin class-name">cd</span> composetest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z={href:"http://app.py",target:"_blank",rel:"noopener noreferrer"},L=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">import</span> redis
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
cache <span class="token operator">=</span> redis<span class="token punctuation">.</span>Redis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_hit_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    retries <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> cache<span class="token punctuation">.</span>incr<span class="token punctuation">(</span><span class="token string">&#39;hits&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> redis<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>ConnectionError <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
            <span class="token keyword">if</span> retries <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> exc
            retries <span class="token operator">-=</span> <span class="token number">1</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> get_hit_count<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World! I have been seen {} times.\\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在同级目录下创建<code>requirements.txt</code>文件</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>flask
redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建对应的Dockerfile文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># syntax=docker/dockerfile:1</span>
FROM python:3.7-alpine
WORKDIR /code
ENV <span class="token assign-left variable">FLASK_APP</span><span class="token operator">=</span>app.py
ENV <span class="token assign-left variable">FLASK_RUN_HOST</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0
RUN apk <span class="token function">add</span> --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
EXPOSE <span class="token number">5000</span>
COPY <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;flask&quot;</span>, <span class="token string">&quot;run&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建核心的 yml文件<code>docker-compose.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;redis:alpine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终通过<code>docker-compose up</code>命令来启动容器</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>启动时间比较久，耐心等待即可<br> 测试访问：<code>http://192.168.232.188:8000/</code></p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果要退出服务 <code>Ctrl+c</code> 或者 <code>docker compose down</code></p><h3 id="compose配置规则" tabindex="-1"><a class="header-anchor" href="#compose配置规则" aria-hidden="true">#</a> Compose配置规则</h3>',13),A=s("br",null,null,-1),M={href:"https://docs.docker.com/compose/compose-file/compose-file-v3/",target:"_blank",rel:"noopener noreferrer"},T=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># 版本</span>
<span class="token key atrule">servers</span><span class="token punctuation">:</span>  <span class="token comment"># 服务</span>
  <span class="token key atrule">服务1</span><span class="token punctuation">:</span> web
     <span class="token comment"># 服务的配置</span>
     build
     network
     images
  <span class="token key atrule">服务2</span><span class="token punctuation">:</span> redis
  <span class="token key atrule">服务3</span><span class="token punctuation">:</span>
  <span class="token key atrule">服务4</span><span class="token punctuation">:</span>
  <span class="token punctuation">...</span>
<span class="token comment"># 其他配置 网络，全局的规则 数据卷</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
<span class="token key atrule">configs</span><span class="token punctuation">:</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compose一键部署实战" tabindex="-1"><a class="header-anchor" href="#compose一键部署实战" aria-hidden="true">#</a> Compose一键部署实战</h3><h4 id="一键部署wp博客" tabindex="-1"><a class="header-anchor" href="#一键部署wp博客" aria-hidden="true">#</a> 一键部署WP博客</h4><ol><li>创建my_wordpress目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> my_wordpress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建yaml文件，docker-compose.yml</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.9&quot;</span>
    
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: <span class="token number">123456</span>
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: <span class="token number">123456</span>
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - wordpress_data:/var/www/html
    ports:
      - <span class="token string">&quot;8000:80&quot;</span>
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: <span class="token number">123456</span>
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: <span class="token punctuation">{</span><span class="token punctuation">}</span>
  wordpress_data: <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过up命令启动：<code>docker compose up -d</code></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="springboot项目部署实战" tabindex="-1"><a class="header-anchor" href="#springboot项目部署实战" aria-hidden="true">#</a> SpringBoot项目部署实战</h4><p>通过Java项目实现计数器项目的功能</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CounterController</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Autowired</span>  
    <span class="token class-name">StringRedisTemplate</span> stringRedisTemplate<span class="token punctuation">;</span>  
  
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">Long</span> counter <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token string">&quot;counter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token string">&quot;页面的访问次数：&quot;</span> <span class="token operator">+</span> counter<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写Dockerfile文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM openjdk:8  
LABEL <span class="token assign-left variable">authors</span><span class="token operator">=</span><span class="token string">&quot;Frostylunar&quot;</span>  
COPY MyCounter-0.0.1-SNAPSHOT.jar app.jar  
EXPOSE <span class="token number">8080</span>  
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;app.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写docker-compose,yml文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.9&#39;</span>  
  
<span class="token key atrule">services</span><span class="token punctuation">:</span>  
  <span class="token key atrule">myapp</span><span class="token punctuation">:</span>  
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .  
    <span class="token key atrule">image</span><span class="token punctuation">:</span> myapp  
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>  
      <span class="token punctuation">-</span> redis  
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>  
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>  
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;library/redis:alpine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传到Linux服务器后，通过<code>docker compose up</code>命令执行。</p><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过访问<code>http://192.168.232.188:8080/hello</code>进行测试。</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="compose常见操作" tabindex="-1"><a class="header-anchor" href="#compose常见操作" aria-hidden="true">#</a> Compose常见操作</h3><ol><li>查看版本：<code>docker compose version</code></li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>根据yml创建service：<code>docker compose up</code><br> 指定yaml：<code>docker compose up -f xxx.yaml</code><br> 后台运行：<code>docker compose up -d</code></li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>查看启动成功的service：<code>docker compose ps</code></li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>也可以使用<code>docker ps</code></p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>查看images：<code>docker compose images</code></li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>停止/启动service：<code>docker compose stop/start</code></li></ol><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>删除service，同时会删除掉network和volume：<code>docker compose down</code></li></ol><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>进入到某个service：<code>docker compose exec redis sh</code></li></ol><figure><img src="'+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="scale扩缩容" tabindex="-1"><a class="header-anchor" href="#scale扩缩容" aria-hidden="true">#</a> scale扩缩容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">--scale</span> <span class="token assign-left variable">redis</span><span class="token operator">=</span><span class="token number">5</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>小结：<code>docker compose </code></p><p>工程--服务--容器</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">服务1</span><span class="token punctuation">:</span>
  <span class="token key atrule">服务2</span><span class="token punctuation">:</span>
  <span class="token key atrule">服务3</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function B(W,Y){const a=t("ExternalLinkIcon");return l(),p("div",null,[N,s("p",null,[s("a",R,[n("DockerCompose官网安装教程"),e(a)])]),D,O,s("p",null,[s("a",E,[n("DockerCompose官网案例体验"),e(a)])]),P,s("p",null,[n("创建Python文件 "),s("a",z,[n("app.py"),e(a)])]),L,s("p",null,[n("docker-compse.yml核心"),A,n(" 官网地址："),s("a",M,[n("https://docs.docker.com/compose/compose-file/compose-file-v3/"),e(a)])]),T])}const V=o(S,[["render",B],["__file","DockerCompose.html.vue"]]);export{V as default};
