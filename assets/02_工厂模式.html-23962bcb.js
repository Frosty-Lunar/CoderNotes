const e=JSON.parse('{"key":"v-35ed4e71","path":"/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/06_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02_%E4%BA%8C%E5%8D%81%E4%B8%89%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01_%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F/02_%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html","title":"02_工厂方法","lang":"zh-CN","frontmatter":{"title":"02_工厂方法","icon":"file","order":1,"author":"FrostyLunar","date":"2023-08-10 周四","category":["初级开发工程师"],"tag":["P5"],"sticky":true,"index":true,"description":"概述 工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。 《设计模式》一书中，工厂模式被分为了三种：简单工厂、工厂方法和抽象工厂。（不过，在书中作者将简...","head":[["meta",{"property":"og:url","content":"https://frosty-lunar.github.io/CoderNotes/CoderNotes/doc/02_%E5%88%9D%E7%BA%A7%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88/01_%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/06_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02_%E4%BA%8C%E5%8D%81%E4%B8%89%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01_%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F/02_%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:title","content":"02_工厂方法"}],["meta",{"property":"og:description","content":"概述 工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。 《设计模式》一书中，工厂模式被分为了三种：简单工厂、工厂方法和抽象工厂。（不过，在书中作者将简..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:15:53.000Z"}],["meta",{"property":"article:author","content":"FrostyLunar"}],["meta",{"property":"article:tag","content":"P5"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:15:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02_工厂方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:15:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"FrostyLunar\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"模拟的业务需求","slug":"模拟的业务需求","link":"#模拟的业务需求","children":[{"level":3,"title":"使用原始开发模式","slug":"使用原始开发模式","link":"#使用原始开发模式","children":[]},{"level":3,"title":"使用原始开发的劣势","slug":"使用原始开发的劣势","link":"#使用原始开发的劣势","children":[]}]},{"level":2,"title":"简单工厂模式","slug":"简单工厂模式","link":"#简单工厂模式","children":[{"level":3,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":3,"title":"设计原理","slug":"设计原理","link":"#设计原理","children":[]}]},{"level":2,"title":"工厂方法模式","slug":"工厂方法模式","link":"#工厂方法模式","children":[{"level":3,"title":"概述","slug":"概述-2","link":"#概述-2","children":[]},{"level":3,"title":"设计原理","slug":"设计原理-1","link":"#设计原理-1","children":[]}]},{"level":2,"title":"抽象工厂模式","slug":"抽象工厂模式","link":"#抽象工厂模式","children":[{"level":3,"title":"概述","slug":"概述-3","link":"#概述-3","children":[]},{"level":3,"title":"设计原理","slug":"设计原理-2","link":"#设计原理-2","children":[]}]}],"git":{"createdTime":1692115252000,"updatedTime":1692116153000,"contributors":[{"name":"FrostyLunar","email":"201628142@qq.com","commits":2}]},"readingTime":{"minutes":15.82,"words":4747},"filePathRelative":"doc/02_初级开发工程师/01_第一阶段/06_设计模式/02_二十三种设计模式/01_创建型模式/02_工厂模式.md","localizedDate":"2023年8月10日","autoDesc":true,"excerpt":""}');export{e as data};
