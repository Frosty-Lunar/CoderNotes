import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as e}from"./app-5f4e7946.js";const o={},l=e(`<h2 id="经典问题" tabindex="-1"><a class="header-anchor" href="#经典问题" aria-hidden="true">#</a> 经典问题</h2><h3 id="导入和导出数据" tabindex="-1"><a class="header-anchor" href="#导入和导出数据" aria-hidden="true">#</a> 导入和导出数据</h3><h4 id="导出数据" tabindex="-1"><a class="header-anchor" href="#导出数据" aria-hidden="true">#</a> 导出数据</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>C:\\Windows\\System32<span class="token operator">&gt;</span> mysqldump <span class="token operator">-</span>h主机地址 <span class="token operator">-</span>P端口号 <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 <span class="token comment">--database  数据库名 &gt; 文件路径/文件名.sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="导入数据" tabindex="-1"><a class="header-anchor" href="#导入数据" aria-hidden="true">#</a> 导入数据</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> source  <span class="token keyword">sql</span>脚本路径名<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编码问题" tabindex="-1"><a class="header-anchor" href="#编码问题" aria-hidden="true">#</a> 编码问题</h3><p>在路径：mysql的数据存储路径下 找到my.ini文件<br> 修改内容1：找到<code>[mysql]</code>命令，大概在63行左右，在其下一行添加 <code>default-character-set=utf8</code><br> 修改内容2: 找到<code>[mysqld]</code>命令，大概在76行左右，在其下一行添加<code>character-set-server=utf8</code> 和 <code>collation-server=utf8_general_ci</code></p><p><strong>修改完毕后，重启MySQL57服务</strong></p><h3 id="忘记root密码" tabindex="-1"><a class="header-anchor" href="#忘记root密码" aria-hidden="true">#</a> 忘记root密码</h3><p>以管理员权限运行cmd :</p><ol><li>关闭MYSQL57服务 : <code>net stop MYSQL57</code></li><li>设置mysqld服务不检查权限密码 <ol><li>mysql5.5 : <code>mysqld --skip-grant-tables</code></li><li>mysql5.7 : 修改my.ini文件,在<code>[mysqld]</code>下方添加<code>skip-grant-tables = true</code></li></ol></li><li>开启MYSQL57服务 : <code>net start MYSQL57</code></li><li>无密码登陆服务器 : <code>mysql -uroot</code></li><li>修改root账户的密码为&quot;root&quot; <ol><li>mysql5.5 : <code>update user set authentication\\_string=password(&quot;root&quot;) where user=&quot;root&quot;;</code></li><li>mysql5.7 : <code>update mysql.user set authentication\\_string=password(&#39;root&#39;) where user=&#39;root&#39;;</code></li></ol></li><li>刷新: <code>flush privileges;</code></li><li>退出登录的mysql : <code>exit;</code></li><li>修改my.ini文件，删除掉之前添加在<code>[mysqld]</code>下方的那一行</li><li>验证无密码登录是否会失败<code>mysql -uroot</code></li><li>以新密码登录: <code>mysql -uroot -proot</code></li></ol><h2 id="查看字符集和校验规则" tabindex="-1"><a class="header-anchor" href="#查看字符集和校验规则" aria-hidden="true">#</a> 查看字符集和校验规则</h2><p>关于SQL的关键字和函数名等不区分大小写，但是对于数据值是否区分大小写，和字符集与校对规则有关。</p><p><code>ci</code>（大小写不敏感）， <code>cs</code>（大小写敏感），<code>_bin</code>（二元，即比较是基于字符编码的值而与language无关）</p><p>查看所有字符集和和其默认的校对规则</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">character</span> <span class="token keyword">set</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看GBK和UTF-8字符集的校对规则</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> collation <span class="token operator">like</span> <span class="token string">&#39;gbk%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> collation <span class="token operator">like</span> <span class="token string">&#39;utf8%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//utf8_unicode_ci和utf8_general_ci对中、英文来说没有实质的差别。</span>
<span class="token comment">//utf8_general_ci 校对速度快，但准确度稍差。</span>
<span class="token comment">//utf8_unicode_ci 准确度高，但校对速度稍慢。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果你的应用有德语、法语或者俄语，请一定使用utf8_unicode_ci。一般用utf8_general_ci就够了。</strong></p><p>查看服务器的字符集和校对规则</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%_server&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看和修改某个数据库的字符集和校对规则</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> ceshi_db<span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">database</span> ceshi_db<span class="token punctuation">;</span>

<span class="token comment">//修改数据库的字符集和校对规则：</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> 数据库名称 <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> 字符集名称 【<span class="token keyword">COLLATE</span> 校对规则名称】<span class="token punctuation">;</span>
<span class="token comment">//例如</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ceshi_db <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">collate</span> utf8_general_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p><blockquote><p>修改了数据库的默认字符集和校对规则后，原来已经创建的表格的字符集和校对规则并不会改变，如果需要，那么需要单独修改。</p></blockquote></blockquote><p>查看某个表格的字符集和校对规则</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//查看字符集</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> users<span class="token punctuation">;</span>
<span class="token comment">//查看校对规则</span>
<span class="token keyword">show</span> <span class="token keyword">table</span> <span class="token keyword">status</span> <span class="token keyword">from</span> bookstore <span class="token operator">like</span> <span class="token string">&#39;%users%&#39;</span> <span class="token punctuation">;</span>

<span class="token comment">//修改表的默认字符集</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> 字符集名称 【<span class="token keyword">COLLATE</span> 校对规则名称】<span class="token punctuation">;</span>
<span class="token comment">//把表默认的字符集和所有字符列（CHAR,VARCHAR,TEXT）改为新的字符集：</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">CONVERT</span> <span class="token keyword">TO</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> 字符集名称 【<span class="token keyword">COLLATE</span> 校对规则名称】<span class="token punctuation">;</span>
例如：<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> ceshi_table <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> gbk <span class="token keyword">collate</span> gbk_chinese_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[l];function t(d,i){return a(),n("div",null,c)}const k=s(o,[["render",t],["__file","常见问题解决.html.vue"]]);export{k as default};
