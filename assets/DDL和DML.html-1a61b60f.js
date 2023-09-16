import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-5f4e7946.js";const t={},p=e(`<h2 id="ddl-数据库定义语言" tabindex="-1"><a class="header-anchor" href="#ddl-数据库定义语言" aria-hidden="true">#</a> DDL 数据库定义语言</h2><h3 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库" aria-hidden="true">#</a> 操作数据库</h3><h4 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> 数据库名 <span class="token punctuation">[</span><span class="token keyword">character</span> <span class="token keyword">set</span> 字符集<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">collate</span>  校对规则<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询所有数据库" tabindex="-1"><a class="header-anchor" href="#查询所有数据库" aria-hidden="true">#</a> 查询所有数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询某个数据库的结构" tabindex="-1"><a class="header-anchor" href="#查询某个数据库的结构" aria-hidden="true">#</a> 查询某个数据库的结构</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">database</span> 数据库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询当前正在使用哪个数据库" tabindex="-1"><a class="header-anchor" href="#查询当前正在使用哪个数据库" aria-hidden="true">#</a> 查询当前正在使用哪个数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改数据库的字符集" tabindex="-1"><a class="header-anchor" href="#修改数据库的字符集" aria-hidden="true">#</a> 修改数据库的字符集</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">database</span> 数据库名 <span class="token keyword">character</span> <span class="token keyword">set</span> 字符集<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选中某个数据库" tabindex="-1"><a class="header-anchor" href="#选中某个数据库" aria-hidden="true">#</a> 选中某个数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> 数据库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> 数据库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="表的操作" tabindex="-1"><a class="header-anchor" href="#表的操作" aria-hidden="true">#</a> 表的操作</h3><h4 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
  列名 类型 <span class="token punctuation">[</span>约束<span class="token punctuation">]</span><span class="token punctuation">,</span>
  列名 类型 <span class="token punctuation">[</span>约束<span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="一般创建" tabindex="-1"><a class="header-anchor" href="#一般创建" aria-hidden="true">#</a> 一般创建</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建数据库表：</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student<span class="token punctuation">(</span>
        sno <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 6显示长度 </span>
        sname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 5个字符</span>
        sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        age <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        enterdate <span class="token keyword">date</span><span class="token punctuation">,</span>
        classname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="快速创建" tabindex="-1"><a class="header-anchor" href="#快速创建" aria-hidden="true">#</a> 快速创建</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加一张表：快速添加：结构和数据跟t_student 都是一致的</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student2
<span class="token keyword">as</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student<span class="token punctuation">;</span>

<span class="token comment">-- 快速添加，结构跟t_student一致，数据没有：</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student3
<span class="token keyword">as</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">where</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 快速添加：只要部分列，部分数据：</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student4
<span class="token keyword">as</span>
<span class="token keyword">select</span> sno<span class="token punctuation">,</span>sname<span class="token punctuation">,</span>age <span class="token keyword">from</span> t_student <span class="token keyword">where</span> sno <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h4><h5 id="添加一个字段" tabindex="-1"><a class="header-anchor" href="#添加一个字段" aria-hidden="true">#</a> 添加一个字段</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//添加一个字段，默认在最后添加</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 【数据库名<span class="token punctuation">.</span>】表名称 <span class="token keyword">add</span> 【<span class="token keyword">column</span>】 字段名 数据类型<span class="token punctuation">;</span>
<span class="token comment">//添加到第一个字段</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 【数据库名<span class="token punctuation">.</span>】表名称 <span class="token keyword">add</span> 【<span class="token keyword">column</span>】 字段名 数据类型 <span class="token keyword">first</span><span class="token punctuation">;</span>
<span class="token comment">//在某一个字段后面添加</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 【数据库名<span class="token punctuation">.</span>】表名称 <span class="token keyword">add</span> 【<span class="token keyword">column</span>】 字段名 数据类型 <span class="token keyword">after</span> 另一个字段<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改表的字段类型和约束" tabindex="-1"><a class="header-anchor" href="#修改表的字段类型和约束" aria-hidden="true">#</a> 修改表的字段类型和约束</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 字段 类型 约束 ；<span class="token punctuation">\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="修改列的名字" tabindex="-1"><a class="header-anchor" href="#修改列的名字" aria-hidden="true">#</a> 修改列的名字</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 旧列 新列 类型 约束<span class="token punctuation">;</span><span class="token punctuation">\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="删除字段" tabindex="-1"><a class="header-anchor" href="#删除字段" aria-hidden="true">#</a> 删除字段</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> 列名<span class="token punctuation">;</span><span class="token punctuation">\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="修改表名" tabindex="-1"><a class="header-anchor" href="#修改表名" aria-hidden="true">#</a> 修改表名</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token identifier"><span class="token punctuation">\`</span>rename table 旧表名 to 新表名;<span class="token punctuation">\`</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询所有表" tabindex="-1"><a class="header-anchor" href="#查询所有表" aria-hidden="true">#</a> 查询所有表</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询某张表的结构" tabindex="-1"><a class="header-anchor" href="#查询某张表的结构" aria-hidden="true">#</a> 查询某张表的结构</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">desc</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看建表语句" tabindex="-1"><a class="header-anchor" href="#查看建表语句" aria-hidden="true">#</a> 查看建表语句</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看建表语句：</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> t_student<span class="token punctuation">;</span>
<span class="token comment">/*
CREATE TABLE \`t_student\` (
  \`sno\` int DEFAULT NULL,
  \`sname\` varchar(5) DEFAULT NULL,
  \`sex\` char(1) DEFAULT NULL,
  \`age\` int DEFAULT NULL,
  \`enterdate\` date DEFAULT NULL,
  \`classname\` varchar(10) DEFAULT NULL,
  \`email\` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> 表名；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="清空表" tabindex="-1"><a class="header-anchor" href="#清空表" aria-hidden="true">#</a> 清空表</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除数据操作 :清空数据</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h2><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><h4 id="指定插入的列" tabindex="-1"><a class="header-anchor" href="#指定插入的列" aria-hidden="true">#</a> 指定插入的列</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名<span class="token punctuation">(</span>列<span class="token punctuation">,</span>列<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span>值<span class="token punctuation">,</span>值<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="不指定插入的列" tabindex="-1"><a class="header-anchor" href="#不指定插入的列" aria-hidden="true">#</a> 不指定插入的列</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token keyword">values</span><span class="token punctuation">(</span>值<span class="token punctuation">,</span>值<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在t_student数据库表中插入数据：</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;2022-5-8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">10010010</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;2022-5-8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;2022.5.8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;2022.5.8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token string">&quot;易烊千玺&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;软件1班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123@126.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token punctuation">(</span>sno<span class="token punctuation">,</span>sname<span class="token punctuation">,</span>enterdate<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2023-7-5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>int 宽度是显示宽度，如果超过，可以自动增大宽度 int底层都是4个字节</li><li>时间的方式多样 &#39;1256-12-23&#39; &quot;1256/12/23&quot; &quot;1256.12.23&quot;</li><li>字符串不区分单引号和双引号</li><li>如何写入当前的时间 <code>now()</code> ,<code> sysdate()</code> ,<code>CURRENT\\_DATE()</code></li><li>char varchar 是字符的个数，不是字节的个数，可以使用binary，varbinary表示定长和不定长的字节个数。</li><li>如果不是全字段插入数据的话，需要加入字段的名字</li></ol><blockquote><p>注意事项：<br> ①：在做插值的操作时，值的位置要与列的字段名一一对应<br> ②：可以只指定部分列进行插值操作，其他未指定的列，将采用NULL或default默认值<br> ③：如果有自增的字段可以在插值的时候使用NULL代替<br> ④：如果列使用了非空约束，则必须插入</p></blockquote><h3 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> 修改数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">update</span> 表名 <span class="token keyword">set</span> 列 <span class="token operator">=</span>值<span class="token punctuation">,</span> 列 <span class="token operator">=</span>值 <span class="token punctuation">[</span><span class="token keyword">where</span> 条件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改表中数据</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> sex <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span> <span class="token punctuation">;</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> sex <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span> <span class="token keyword">where</span> sno <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> T_STUDENT <span class="token keyword">SET</span> AGE <span class="token operator">=</span> <span class="token number">21</span> <span class="token keyword">WHERE</span> SNO <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> CLASSNAME <span class="token operator">=</span> <span class="token string">&#39;java01&#39;</span> <span class="token keyword">where</span> sno <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">;</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> CLASSNAME <span class="token operator">=</span> <span class="token string">&#39;JAVA01&#39;</span> <span class="token keyword">where</span> sno <span class="token operator">=</span> <span class="token number">9</span> <span class="token punctuation">;</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> age <span class="token operator">=</span> <span class="token number">29</span> <span class="token keyword">where</span> classname <span class="token operator">=</span> <span class="token string">&#39;java01&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除操作：</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> t_student <span class="token keyword">where</span> sno <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>关键字，表名，字段名不区分大小写</li><li>默认情况下，内容不区分大小写</li><li>删除操作from关键字不可缺少</li><li>修改，删除数据别忘记加限制条件</li></ol><h3 id="删除数据-delect-truncate" tabindex="-1"><a class="header-anchor" href="#删除数据-delect-truncate" aria-hidden="true">#</a> 删除数据 delect&amp;truncate</h3><h4 id="delect" tabindex="-1"><a class="header-anchor" href="#delect" aria-hidden="true">#</a> delect</h4><p><strong>删除表中的数据，但是可以通过事务回滚</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> 表名 <span class="token punctuation">[</span><span class="token keyword">where</span> 条件<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="truncate" tabindex="-1"><a class="header-anchor" href="#truncate" aria-hidden="true">#</a> truncate</h4><p><strong>删除原表，再创建相同的新表，</strong> ​<strong>不可以通过事务回滚</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">truncate</span> <span class="token keyword">table</span> 表<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>delete和truncate的区别:</strong></p><p>从最终的结果来看，虽然使用TRUNCATE操作和使用DELETE操作都可以删除表中的全部记录，但是两者还是有很多区别的，其区别主要体现在以下几个方面：</p><ol><li>DELETE为数据操作语言DML；TRUNCATE为数据定义语言DDL。</li><li>DELETE操作是将表中所有记录一条一条删除直到删除完；TRUNCATE操作则是保留了表的结构，重新创建了这个表，所有的状态都相当于新表。因此，<strong><code>TRUNCATE操作的效率更高</code></strong>。</li><li>DELETE操作可以回滚；<strong><code>TRUNCATE操作会导致隐式提交，因此不能回滚</code></strong>。</li><li>DELETE操作执行成功后会返回已删除的行数（如删除4行记录，则会显示“Affected rows：4”）；截断操作**<code>不会返回已删除的行量</code>**，结果通常是“Affected rows：0”。DELETE操作删除表中记录后，再次向表中添加新记录时，对于设置有<code>自增约束字段的值会从删除前表中该字段的最大值加1开始自增</code>；TRUNCATE操作则会重新从1开始自增。</li></ol><h4 id="物理删除和逻辑和删除的区别" tabindex="-1"><a class="header-anchor" href="#物理删除和逻辑和删除的区别" aria-hidden="true">#</a> 物理删除和逻辑和删除的区别</h4><h5 id="物理删除" tabindex="-1"><a class="header-anchor" href="#物理删除" aria-hidden="true">#</a> 物理删除</h5><p>真正的删除了，数据不存在</p><h5 id="逻辑删除" tabindex="-1"><a class="header-anchor" href="#逻辑删除" aria-hidden="true">#</a> 逻辑删除</h5><p>没有删除，数据还在。只是在数据中添加了状态标记：Start = 1 时启用，Start = 0 时禁用</p>`,74),l=[p];function o(c,i){return n(),a("div",null,l)}const u=s(t,[["render",o],["__file","DDL和DML.html.vue"]]);export{u as default};
