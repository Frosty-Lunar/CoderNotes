const e=JSON.parse('{"key":"v-56c4f5ef","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/09_%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86Cookie%E5%92%8CSession/%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86Cookie%E5%92%8CSession.html","title":"会话管理Cookie和Session","lang":"zh-CN","frontmatter":{"title":"会话管理Cookie和Session","icon":"file","order":1,"author":"FrostyLunar","date":"2023-08-21 周一","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"初识Cookie和Session 相关概念 Cookie对象与HttpSession对象的作用是维护客户端浏览器与服务端的会话状态的两个对象。 由于HTTP协议是一个无状态的协议，所以服务端并不会记录当前客户端浏览器的访问状态，但是在有些时候我们是需要服务端能够记录客户端浏览器的访问状态的，如获取当前客户端浏览器的访问服务端的次数时就需要会话状态的维持...","head":[["meta",{"property":"og:url","content":"https://frosty-lunar.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/04_JavaEE%E6%8A%80%E6%9C%AF/03_Servlet/09_%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86Cookie%E5%92%8CSession/%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86Cookie%E5%92%8CSession.html"}],["meta",{"property":"og:title","content":"会话管理Cookie和Session"}],["meta",{"property":"og:description","content":"初识Cookie和Session 相关概念 Cookie对象与HttpSession对象的作用是维护客户端浏览器与服务端的会话状态的两个对象。 由于HTTP协议是一个无状态的协议，所以服务端并不会记录当前客户端浏览器的访问状态，但是在有些时候我们是需要服务端能够记录客户端浏览器的访问状态的，如获取当前客户端浏览器的访问服务端的次数时就需要会话状态的维持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://frosty-lunar.github.io/CoderNotes/CoderNotes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-28T06:30:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"会话管理Cookie和Session"}],["meta",{"property":"article:author","content":"FrostyLunar"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-28T06:30:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"会话管理Cookie和Session\\",\\"image\\":[\\"https://frosty-lunar.github.io/CoderNotes/CoderNotes/\\"],\\"datePublished\\":\\"2023-08-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-28T06:30:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"FrostyLunar\\"}]}"]]},"headers":[{"level":2,"title":"初识Cookie和Session","slug":"初识cookie和session","link":"#初识cookie和session","children":[{"level":3,"title":"相关概念","slug":"相关概念","link":"#相关概念","children":[]},{"level":3,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]}]},{"level":2,"title":"Cookie的使用","slug":"cookie的使用","link":"#cookie的使用","children":[{"level":3,"title":"Cookie对象的特点","slug":"cookie对象的特点","link":"#cookie对象的特点","children":[]},{"level":3,"title":"Cookie对象的API","slug":"cookie对象的api","link":"#cookie对象的api","children":[]},{"level":3,"title":"综合Demo","slug":"综合demo","link":"#综合demo","children":[]}]},{"level":2,"title":"Cookie案例","slug":"cookie案例","link":"#cookie案例","children":[]},{"level":2,"title":"Session的使用","slug":"session的使用","link":"#session的使用","children":[{"level":3,"title":"Session特点","slug":"session特点","link":"#session特点","children":[]},{"level":3,"title":"HttpSession对象","slug":"httpsession对象","link":"#httpsession对象","children":[]}]},{"level":2,"title":"Session和Cookie的总结","slug":"session和cookie的总结","link":"#session和cookie的总结","children":[{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]},{"level":3,"title":"建议","slug":"建议","link":"#建议","children":[]}]},{"level":2,"title":"Session和Cookie的综合案例","slug":"session和cookie的综合案例","link":"#session和cookie的综合案例","children":[{"level":3,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":3,"title":"组件","slug":"组件","link":"#组件","children":[]}]}],"git":{"createdTime":1692115252000,"updatedTime":1693204222000,"contributors":[{"name":"FrostyLunar","email":"201628142@qq.com","commits":3}]},"readingTime":{"minutes":10.62,"words":3185},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/04_JavaEE技术/03_Servlet/09_会话管理Cookie和Session/会话管理Cookie和Session.md","localizedDate":"2023年8月21日","autoDesc":true,"excerpt":""}');export{e as data};
