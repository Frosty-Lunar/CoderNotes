import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,d as s,e as n,b as l,f as a}from"./app-5f4e7946.js";const i="/CoderNotes/assets/image_VtLJeQj0bk-3287967e.png",u="/CoderNotes/assets/image-20230821164035447-b3d9a086.png",r="/CoderNotes/assets/image_tVzCXdP9Xk-3722f457.png",k="/CoderNotes/assets/image-20230821165414243-41137879.png",d="/CoderNotes/assets/image_WpdGog0NUJ-2ddbf948.png",v="/CoderNotes/assets/image-20230821173145527-e9cef837.png",m="/CoderNotes/assets/image-20230821173837765-101ad191.png",g={},b=a('<h2 id="请求转发" tabindex="-1"><a class="header-anchor" href="#请求转发" aria-hidden="true">#</a> 请求转发</h2><h3 id="forword转发" tabindex="-1"><a class="header-anchor" href="#forword转发" aria-hidden="true">#</a> forword转发</h3><h4 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h4><ol><li>清空Response存放响应正文数据的缓冲区</li><li>如果目标资源为Servlet或JSP，就调用它们的service()方法，把该方法产生的响应结果发送到客户端; 如果目标资源文件系统中的静态HTML文档，就读取文档中的数据把它发送到客户端。</li></ol><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="处理特点" tabindex="-1"><a class="header-anchor" href="#处理特点" aria-hidden="true">#</a> 处理特点</h4><ol><li>由于forword()方法先清空用于存放响应正文的缓冲区，因此源Servlet生成的响应结果不会被发送到客户端，只有目标资源生成的响应结果才会被发送到客户端</li><li>如果源Servlet在进行请求转发之前，已经提交了响应（flushBuffer(),close()方法），那么forward()方法抛出IllegalStateException。为了避免该异常，不应该在源Servlet中提交响应结果。</li></ol><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><p>servlet1 请求转发至servlet2</p><p>servlet1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/servlet1.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;张三找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元，但是我没钱啊！李四有钱，找他借去！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//创建请求转发器  </span>
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;servlet2.do&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//请求转发器做出转发动作  </span>
        requestDispatcher<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h={href:"http://servlet2.do",target:"_blank",rel:"noopener noreferrer"},q=s("br",null,null,-1),f=a(`<p>servlet2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/servlet2.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;王五找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元给张三，我直接给张三吧！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//设置响应编码  </span>
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;支付宝到账：&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="include转发" tabindex="-1"><a class="header-anchor" href="#include转发" aria-hidden="true">#</a> include转发</h3><h4 id="处理流程-1" tabindex="-1"><a class="header-anchor" href="#处理流程-1" aria-hidden="true">#</a> 处理流程</h4><ol><li>如果目标资源为Servlet或JSP，就调用他们的相应的service()方法，把该方法产生的响应正文添加到源Servlet的响应结果中；如果目标组件为HTML文档，就直接把文档的内容添加到源Servlet的响应结果中</li><li>返回到源Servlet的服务方法中，继续执行后续代码块</li></ol><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="处理特点-1" tabindex="-1"><a class="header-anchor" href="#处理特点-1" aria-hidden="true">#</a> 处理特点</h4><p>include与forward转发相比，包含有以下特点</p><ol><li>源Servlet与被包含的目标资源的输出数据都会被添加到响应结果中。</li><li>在目标资源中对响应状态码或者响应头所做的修改都会被忽略。</li></ol><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><p>servlet1 请求转发至servlet2</p><p>servlet1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/include/servlet1.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;张三找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元，但是我没钱啊！李四有钱，找他借去！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;请求转发include转发之前&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;servlet2.do&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        requestDispatcher<span class="token punctuation">.</span><span class="token function">include</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;请求转发include转发之后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>servlet2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/include/servlet2.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;王五找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元，我直接给王五吧！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;支付宝到账：&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ol><li>请求转发是一种服务器的行为，是对浏览器屏蔽。</li><li>浏览器的地址栏不会发生变化。</li><li>请求的参数是可以从源组件传递到目标组件的</li><li>请求对象和响应对象没有重新创建，而是传递给了目标组件。</li><li>请求转发可以帮助我们完成页面的跳转。</li><li>请求转发可以转发至WEB-INF里。</li><li>请求转发只能转发给当前项目的内部资源，不能转发至外部资源。</li><li>常用forward</li></ol><h2 id="响应重定向" tabindex="-1"><a class="header-anchor" href="#响应重定向" aria-hidden="true">#</a> 响应重定向</h2><p>响应重定向是通过<code>HttpServletResponse对象.sendRedirect(“路径”)</code>的方式实现，是服务器通知浏览器，让浏览器去自主请求其他资源的一种方式。</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="处理流程-2" tabindex="-1"><a class="header-anchor" href="#处理流程-2" aria-hidden="true">#</a> 处理流程</h3><ol><li>用户在浏览器端输入特定URL，请求访问服务器端的某个Servlet</li><li>服务器端的Servlet返回一个状态码为302的响应结果，该响应结果的含义为：让浏览器端再请求访问另一个Web资源，在响应结果中提供了另一个Web资源的URL. 另一个Web资源有可能在同一个Web服务器上，也有可能不再同一个Web服务器上</li><li>当浏览器端接收到这种响应结果后，再立即自动请求访问另一个Web资源</li><li>浏览器端接收到另一个Web资源的响应结果</li></ol><h3 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h3><p>servlet1 请求转发至servlet2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/redirect/servlet1.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;张三找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元，但是我没钱啊！我知道李四有钱，你找他借去！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">&quot;servlet2.do?money=&quot;</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/redirect/servlet2.do&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servlet2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">String</span> money <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;张三找我借&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元，我直接给张三吧！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;支付宝到账：&quot;</span> <span class="token operator">+</span> money <span class="token operator">+</span> <span class="token string">&quot;元&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注意：当我们使用重定向时，<code>resp.sendRedirect(&quot;servlet2.do?money=&quot; + money);</code>此代码块替换路径为最后一个<code>/</code>后面的路径；<br> 例如：<code>resp.sendRedirect(&quot;redirect/servlet2.do?money=&quot; + money);</code>重定向后的路径为：<code>redirect/redirect/servlet2.do?money=100</code></p></blockquote><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3><ol><li>重定向是服务器给浏览器重新指定请求方向 是一种浏览器行为 地址栏会发生变化</li><li>重定向时,请求对象和响应对象都会再次产生,请求中的参数是不会携带</li><li>重定向也可以帮助我们完成页面跳转</li><li>**重定向不能帮助我们访问WEB-INF中的资源</li><li>重定向可以定向到外部资源</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',33);function y(S,w){const t=p("ExternalLinkIcon");return o(),c("div",null,[b,s("p",null,[n("在forward转发模式下，请求应该完全交给目标资源("),s("a",h,[n("servlet2.do"),l(t)]),n(")去处理，我们在源组件中，不要做出任何的响应处理。"),q,n(" 在forward方法调用之后，也不要继续使用req和resp对象做出任何操作了。")]),f])}const R=e(g,[["render",y],["__file","请求转发和响应重定向.html.vue"]]);export{R as default};
