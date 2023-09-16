const e=JSON.parse('{"key":"v-1bf50100","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/05_SpringBoot/08_SpringBoot%E6%95%B4%E5%90%88%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/03_%E4%BD%BF%E7%94%A8Thymeleaf%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/%E4%BD%BF%E7%94%A8Thymeleaf%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html","title":"使用Thymeleaf模板引擎","lang":"zh-CN","frontmatter":{"title":"使用Thymeleaf模板引擎","icon":"file","order":1,"author":"FrostyLunar","date":"2023-07-10 周一","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"写在前面 : Thymeleaf是MVC下的产物,需要SpringMVC的技术支持,将ModelAndView对象在视图解析器中解析成View对象并渲染给前端用户 Thymeleaf基本概念 概念 Thymeleaf的主要目标是将优雅的自然模板带到开发工作流程中，并将HTML在浏览器中正确显示，并且可以作为静态原型，让开发团队能更容易地协作。Thyme...","head":[["meta",{"property":"og:url","content":"https://frosty-lunar.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/05_%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/05_SpringBoot/08_SpringBoot%E6%95%B4%E5%90%88%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/03_%E4%BD%BF%E7%94%A8Thymeleaf%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/%E4%BD%BF%E7%94%A8Thymeleaf%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html"}],["meta",{"property":"og:title","content":"使用Thymeleaf模板引擎"}],["meta",{"property":"og:description","content":"写在前面 : Thymeleaf是MVC下的产物,需要SpringMVC的技术支持,将ModelAndView对象在视图解析器中解析成View对象并渲染给前端用户 Thymeleaf基本概念 概念 Thymeleaf的主要目标是将优雅的自然模板带到开发工作流程中，并将HTML在浏览器中正确显示，并且可以作为静态原型，让开发团队能更容易地协作。Thyme..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:15:53.000Z"}],["meta",{"property":"article:author","content":"FrostyLunar"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-07-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:15:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Thymeleaf模板引擎\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:15:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"FrostyLunar\\"}]}"]]},"headers":[{"level":2,"title":"Thymeleaf基本概念","slug":"thymeleaf基本概念","link":"#thymeleaf基本概念","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":3,"title":"官方文档","slug":"官方文档","link":"#官方文档","children":[]}]},{"level":2,"title":"快速体验Thymeleaf","slug":"快速体验thymeleaf","link":"#快速体验thymeleaf","children":[{"level":3,"title":"快速创建一个SpringBoot项目","slug":"快速创建一个springboot项目","link":"#快速创建一个springboot项目","children":[]},{"level":3,"title":"导入Thymeleaf依赖","slug":"导入thymeleaf依赖","link":"#导入thymeleaf依赖","children":[]},{"level":3,"title":"关于Thymeleaf默认配置","slug":"关于thymeleaf默认配置","link":"#关于thymeleaf默认配置","children":[]},{"level":3,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":3,"title":"测试效果","slug":"测试效果","link":"#测试效果","children":[]}]},{"level":2,"title":"Thymeleaf基本使用","slug":"thymeleaf基本使用","link":"#thymeleaf基本使用","children":[{"level":3,"title":"th名称空间与基本概念","slug":"th名称空间与基本概念","link":"#th名称空间与基本概念","children":[]},{"level":3,"title":"th名称框架的常见使用","slug":"th名称框架的常见使用","link":"#th名称框架的常见使用","children":[]},{"level":3,"title":"运算符","slug":"运算符","link":"#运算符","children":[]}]},{"level":2,"title":"域对象","slug":"域对象","link":"#域对象","children":[{"level":3,"title":"全局域 ServletContext","slug":"全局域-servletcontext","link":"#全局域-servletcontext","children":[]},{"level":3,"title":"请求域 request.setAttribute","slug":"请求域-request-setattribute","link":"#请求域-request-setattribute","children":[]},{"level":3,"title":"会话 session","slug":"会话-session","link":"#会话-session","children":[]}]},{"level":2,"title":"内置对象","slug":"内置对象","link":"#内置对象","children":[{"level":3,"title":"基本内置对象","slug":"基本内置对象","link":"#基本内置对象","children":[]},{"level":3,"title":"公共内置对象","slug":"公共内置对象","link":"#公共内置对象","children":[]}]},{"level":2,"title":"包含其他页面模板","slug":"包含其他页面模板","link":"#包含其他页面模板","children":[{"level":3,"title":"创建模板","slug":"创建模板","link":"#创建模板","children":[]},{"level":3,"title":"使用模板","slug":"使用模板","link":"#使用模板","children":[]}]}],"git":{"createdTime":1692115252000,"updatedTime":1692116153000,"contributors":[{"name":"FrostyLunar","email":"201628142@qq.com","commits":2}]},"readingTime":{"minutes":9.5,"words":2849},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/05_基础框架/05_SpringBoot/08_SpringBoot整合模板引擎/03_使用Thymeleaf模板引擎/使用Thymeleaf模板引擎.md","localizedDate":"2023年7月10日","autoDesc":true,"excerpt":""}');export{e as data};
