---
title: SQL优化
icon: file
order: 1
author: FrostyLunar
date: 2023-06-15 周四
category:
	- 初级开发工程师
tag:
	- P5
sticky: true
index: true
---


1.  查询SQL时最好不要用`select *`， 推荐使用具体的字段名
2.  避免在where子句中使用or， 业务中避免不了的话可以把语句分开写
3.  使用VARCHAR替代CHAR
4.  尽量使用数值来代替字符串类型，例如：0女、1男
5.  查询尽量避免返回大量数据， 可以采用limit分页
6.  使用explain分析你的SQL执行计划
7.  创建name字段的索引
8.  优化lke语句使用'关键字%'避免使用'%关键字%'导致索引失效
9.  字符串要使用单引号或者双引号区分与数字的区别，避免隐式转换导致索引失效
10. 索引不要太多，5个以内
11. 索引不适合建在有大量重复数据的字段上
12. 避免在where中对字段进行表达式操作， 避免使用!=或<>操作符
13. 去重distinct过滤字段要少
14. where中使用默认值代替null
15. 使用批量插入减少事务触发，提升性能
16. 批量删除优化：大量删除数据时，为避免锁表报错，可以分批操作
17. 伪删除设计：不删除数据只修改数据标识来记录状态
18. 提高group by语句的效率：先过滤， 后分组
19. where和order by中常出现的字段推荐创建索引
20. 删除冗余和重复的索引
21. 不要有超过5个以上的表连接
22. inner join、left join、right join， 优先使用inner join， 使用left join左边表尽量小
23. 少用IN子查询
24. 尽量使用union all替代union
