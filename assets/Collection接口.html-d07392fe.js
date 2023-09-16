import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-5f4e7946.js";const p={},c=t(`<h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>add(E e)</td><td>增加元素</td></tr><tr><td>addAll(Collection&lt;? extends E&gt; c)</td><td>将另一个集合添加入</td></tr><tr><td>clear()</td><td>清空集合元素</td></tr><tr><td>remove(Object o)</td><td>移除某一个元素</td></tr><tr><td>contains(Object o)</td><td>判断指定元素是否存在</td></tr><tr><td>equals(Object o)</td><td>判断元素是否相同</td></tr><tr><td>isEmpty()</td><td>判断是否为空</td></tr><tr><td>size()</td><td>获取集合使用元素的大小</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            Collection接口的常用方法：
            增加：add(E e) addAll(Collection&lt;? extends E&gt; c)
            删除：clear() remove(Object o)
            修改：
            查看：iterator() size()
            判断：contains(Object o)  equals(Object o) isEmpty()
         */</span>
        <span class="token comment">//创建对象：接口不能创建对象，利用实现类创建对象：</span>
        <span class="token class-name">Collection</span> collection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//增加：add(E e)</span>
        <span class="token comment">//调用方法：</span>
        <span class="token comment">//集合有一个特点：只能存放引用数据类型的数据，不能是基本数据类型</span>
        <span class="token comment">//基本数据类型自动装箱，对应包装类。int---&gt;Integer</span>
        collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[18, 19, 20]</span>
        <span class="token comment">//addAll(Collection&lt;? extends E&gt; c) 将另一个集合添加入</span>
        <span class="token class-name">List</span> integers <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        collection<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>integers<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[18, 19, 20, 11, 12, 13, 15]</span>
        <span class="token comment">// 移除某个元素</span>
        collection<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[19, 20, 11, 12, 13, 15]</span>
        <span class="token keyword">boolean</span> remove <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合移除19是否成功：&quot;</span><span class="token operator">+</span>remove<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//集合移除19是否成功：true</span>
        <span class="token comment">// 清空集合</span>
        collection<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[]</span>
        <span class="token comment">//查看</span>
        collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合存在的元素数量：&quot;</span><span class="token operator">+</span>collection<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//集合存在的元素数量：1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合是否为空：&quot;</span><span class="token operator">+</span>collection<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//集合是否为空：false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合是否包含22：&quot;</span><span class="token operator">+</span>collection<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//集合是否包含22：true</span>
        <span class="token class-name">List</span> arrayList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合内容是否相同：&quot;</span><span class="token operator">+</span>arrayList<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//集合内容是否相同：true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合地址是否相同：&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>arrayList<span class="token operator">==</span>collection<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//集合地址是否相同：false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合遍历" tabindex="-1"><a class="header-anchor" href="#集合遍历" aria-hidden="true">#</a> 集合遍历</h2><p>循环可以使用：<strong>增强for循环</strong>、<strong>Lambda表达式</strong>、<strong>迭代器循环</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span> arrayList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 增强For循环</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> arrayList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//Lambda 表达式输出</span>
        arrayList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         *  迭代器循环遍历
         *  集合对象.iterator();  创建迭代器对象
         *  迭代器对象.hasNext()  是否存在下一个元素
         *  迭代器对象.next()     获取当前元素，并下移指针
         */</span>
        <span class="token class-name">Iterator</span> iterator <span class="token operator">=</span> arrayList<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[c];function e(l,i){return s(),a("div",null,o)}const r=n(p,[["render",e],["__file","Collection接口.html.vue"]]);export{r as default};
