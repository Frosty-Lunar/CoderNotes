# 简介


## Vue是什么？

vue是一套用于构建用户界面的**渐进式**JavaScript框架。
- 渐进式：Vue可以自底向上逐层的应用 
- 简单应用：只需要一个轻量小巧的核心库
- 复杂应用：可以引入各式各样的Vue插件

[Vue官网](https://cn.vuejs.org/)

## 谁开发的？

**作者: 尤雨溪**  

**后起之秀，生态完善，已然成为国内前端工程师的必备技能。**

## Vue的特点？

1.  遵循 MVVM 模式
2.  编码简洁，体积小，运行效率高，适合移动/PC 端开发
3. 它本身只关注 UI， 也可以引入其它第三方库开发项目

## 与其它 JS 框架的关联  

1. 借鉴 Angular 的模板和数据绑定技术
2. 借鉴 React 的组件化和虚拟 DOM 技术  

## Vue周边库

1. vue-cli: vue 脚手架
2. vue-resource
3. axios
4. vue-router: 路由
5. vuex: 状态管理
6. element-ui: 基于 vue 的 UI 组件库(PC 端)

# 第一章：Vue核心

## 初识Vue

1. 想让Vue工作，必须先创建一个Vue实例，且要传入一个配置对象。
2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法。
3. root容器里的代码被称为【Vue模板】。
4. Vue实例和容器时一一对应的。
5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用。
6. {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性。
7. 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新。

注意区分：js表达式和js代码（语句）

1. 表达式：一个表达式会生成一个值，可以放在任何一个需要值得地方

1. a
2. a+b
3. demo(1)
4. x === y ? 'a' : 'b'

2. js代码（语句）：
1. if(){}
2. for(){}

```html
<!--准备一个容器-->
<div id="root">
    <!--插值写法-->
    <h1>Hello,我的年龄是：{{age}}，我在{{name}}学技术!</h1>
</div>
<script type="text/javascript">
    //阻止Vue在启动时生成生产提示
    Vue.config.productionTip = false;
    //创建Vue实例
    new Vue({
        //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
        el: '#root',
        //data用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
        data: {
            name: '尚硅谷',
            age: 18
        }
    });
</script>
```

注意：一个容器对应一个Vue实例。

![img](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202303310929529.png)

## 模板语法

### 模板的理解

- html 中包含了一些 JS 语法代码，语法分为两种，分别为： 
	- 插值语法（双大括号表达式）
	- 指令语法（以 v-开头）

#### 插值语法

![img](https://cdn.nlark.com/yuque/0/2023/png/12857335/1679918820548-34c73d98-d903-42bb-b635-ddb06981be55.png)

功能: 用于解析标签体内容

语法: {{xxx}} ，xxxx 会作为 js 表达式解析，且可以直接读取到data属性中的所有属性

#### 指令语法

1. 功能: 用于解析标签（包括：标签属性、标签体内容、绑定事件...）
2. 举例：v-bind:href = 'xxxx' ，或简写为 :href='xxxx'，xxx同样写js表达式，且可以直接读取到data中的所有属性。
3. 说明：Vue 中有有很多的指令，且形式都是v-????，此处只是用 v-bind 举个例子

![img](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202303310929457.png)

## 数据绑定

![img](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202303310929356.png)

```html
<div id="root">
  单向数据绑定：<input type="text" :value="name"><br/>
  双向数据绑定：<input type="text" v-model:value="name"><br/>
  <!--以下是一个错误的实例，因为v-model只能用在表单类元素（输入类元素上）-->
  <!--<h2 v-model:x="name">你好啊</h2>-->
</div>
<script type="text/javascript">
  <!--阻止Vue启动过程中的生产提示-->
Vue.config.productionTip = false;
  new Vue({
    el: "#root",
    data: {
      name: '尚硅谷'
    }
  })
</script>
```

#### 单向数据绑定

1. 语法：v-bind:href ="xxx" 或简写为 :href
2. 特点：数据只能从 data 流向页面

#### 双向数据绑定

1. 语法：v-mode:value="xxx" 或简写为 v-model="xxx"。
2. 特点：数据不仅能从 data 流向页面，还能从页面流向 data。
3. 注意：v-model只能用在表单类元素上，即输入类元素上。

## el与data的两种写法

```javascript
<script type="text/javascript">
    //阻止Vue在启动时生成生产提示
    Vue.config.productionTip = false;
    //创建Vue实例
    const x = new Vue({
        //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
        //第一种写法
        //el: '#root',
        //data用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
        //第一种写法：对象式
        /*data: {
            name: '尚硅谷',
            url: 'https://www.baidu.com'
        }*/
        //第二种写法：函数式 data(){}
        data:function () {
            return {
                name : '尚硅谷'
            }
        }
    });
    //第二种写法
    x.$mount('#root')
</script>
```

data两种写法如何选择？

- 目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

重要的原则：

- 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不是Vue实例了。

## MVVM模型

1. M：模型(Model) ：对应 data 中的数据
2. V：视图(View) ：模板
3. VM：视图模型(ViewModel) ： Vue 实例对象

![img](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202303310931460.png)

观察发现： 

1. data中所有的属性，最后都出现在了vm身上。
2. vm身上所有的属性及Vue原型上所有属性，在Vue模板中都可以直接使用。

```html
<div id="root">
  <h1>学校名称：{{name}}</h1>
  <h1>测试1：{{1 + 1}}</h1>
  <h1>测试1：{{$options}}</h1>
  <h1>测试1：{{$watch}}</h1>
</div>
<script type="text/javascript">
  <!--阻止Vue启动过程中的生产提示-->
    Vue.config.productionTip = false;
  const vm = new Vue({
    el: "#root",
    data: {
      name: '尚硅谷'
    }
  })
  console.log(vm)
</script>
```

## 数据代理

1. Vue中的数据代理： 
	通过vm对象来代理data对象中属性的操作（读/写）
2. Vue中数据代理的好处： 
	更加方便的操作data中的数据
3. 基本原理： 
	通过`Object.defineProperty()`把data对象中所有属性添加到vm上。
	为每一个你加到vm上的属性，都指定一个getter/setter。
	在getter/setter内部去操作（读/写）data中对应的属性。

回顾Object.defineProperty方法

```javascript
<script type="text/javascript">
  <!--阻止Vue启动过程中的生产提示-->
  Vue.config.productionTip = false;
let number = 18
let person = {
  name: '尚硅谷',
  sex: '男'
}
Object.defineProperty(person, 'age', {
  /*        value: 20,
	//控制属性是否可以被修改，默认值false
	writable:true,
	//控制属性是否可以被枚举，默认值false
	enumerable:true,
	//控制属性是否可以被删除，默认值为false
	configurable:true*/
  //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
  get() {
    return number;
  },
  //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
  set(value) {
    number = value
  }
})
console.log(person)
  </script>
```

数据代理

```javascript
<script type="text/javascript">
    <!--阻止Vue启动过程中的生产提示-->
    Vue.config.productionTip = false;
    let obj1 = {x: 100}
    let obj2 = {y: 200}
    Object.defineProperty(obj2, 'x', {
        get() {
            return obj1.x
        },
        set(value) {
            obj1.x = value
        }
    })
</script>
<div id="root">
  <h1>学校地址：{{address}}</h1>
  <h1>学校名称：{{name}}</h1>
  </div>
  <script type="text/javascript">
  <!--阻止Vue启动过程中的生产提示-->
  Vue.config.productionTip = false;
const vm = new Vue({
  el:'#root',
  data:{
    name:'尚硅谷',
    address:'鸿福科技园'
  }
})
console.log(vm)
  </script>
```

## 事件处理

事件的基本使用:

1. 使用v-on :xxx 或 @xxx绑定事件，其中xxx是事件名;
2. 事件的回调需要配置在methods对象中，最终会在vm 上;
3. methods中配置的函数，==不要用箭头函数！==否则this就不是vm了;
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
5. @click="demo”和@click="demo($event)”效果一致，但后者可以传参;

```html
<div id="root">
    <h2>欢迎来到{{name}}学习</h2>
    <button v-on:click="showInfo1">点我提示信息1</button>
    <button v-on:click="showInfo2($event,66)">点我提示信息2</button>
</div>
<script type="text/javascript">
    new Vue({
        el: '#root',
        data: {
            name: '尚硅谷'
        },
        methods: {
            showInfo1(event) {
                console.log(event)
                alert('同学你好')
            }, showInfo2(event, number) {
                console.log(event, '数量：', number)
            }
        }
    })
</script>
```

### 事件修饰符

1. prevent:阻止默认事件（常用）。
2. stop:阻止事件冒泡（常用）。
3. once:事件只触发一次（常用）。
4. capture:使用事件的捕获模式。
5. self:只有event.target是当前操作的元素时才触发事件。
6. passive:事件的默认行为立即执行，无需等待事件回测执行完毕。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>初识Vue</title>
    <script type="text/javascript" src="../js/vue.js"></script>
    <style>
        * {
            margin-top: 20px;
        }

        .demo1 {
            height: 50px;
            background-color: skyblue;
        }
        .div1 {
            padding: 5px;
            background-color: skyblue;
        }
        .div2 {
            padding: 5px;
            background-color: orange;
        }
        .list{
            width: 200px;
            height: 200px;
            background-color: peru;
            overflow: auto;
        }
        li{
            height: 100px;
        }
    </style>
</head>
<body>
<div id="root">
    <h2>欢迎来到{{name}}学习</h2>
    <!--
    Vue中的事件修饰符：
        1.prevent:阻止默认事件（常用）。
        2.stop:阻止事件冒泡（常用）。
        3.once:事件只触发一次（常用）。
        4.capture:使用事件的捕获模式。
        5.self:只有event.target是当前操作的元素时才触发事件。
        6.passive:事件的默认行为立即执行，无需等待事件回测执行完毕。
    -->
    <!--阻止默认事件~常用-->
    <a href="http://www.baidu.com" @click.prevent="showInfo">点我提示信息</a>
    <!--阻止事件冒泡-->
    <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">点我提示信息</button>
    </div>
    <!--事件只触发一次-->
    <button @click.once="showInfo">点我提示信息</button>
    <!--使用事件的捕获机制-->
    <div class="div1" @click.capture="showMsg(1)">
        div1
        <div class="div2" @click="showMsg(2)">
            div2
        </div>
    </div>
    <!--事件的默认行为立即执行，无需等待事件回测执行完毕-->
    <ul class="list" @wheel.passive="demo">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            name: "尚硅谷"
        },
        methods: {
            showInfo(event) {
                //阻止默认事件的跳转
                //event.preventDefault();
                //阻止事件冒泡
                //event.stopPropagation();
                alert("你好，欢迎来到德莱联盟！")
            }, showMsg(msg) {
                console.log(msg);
            },demo(){
                for (var i = 0; i < 10000000; i++) {
                    console.log("@");
                }
                console.log("累坏了");
            }
        }
    })
</script>
</body>
</html>
```

### 键盘事件

Vue中常用的按键别名：

1. 回车=>`enter`
2. 删除=>`delete`(捕获“删除”和“退格”键)
3. 退出=>`esc`
4. 空格=>`space`
5. 换行=>`tab`（特殊，必须配合使用keyDown使用）
6. 上=>`up`
7. 下=>`down`
8. 左=>`left`
9. 右=>`right`

Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横线命名)
系统修饰键（用法特殊）：`ctrl`、`alt`、`shift`、`meta`

1. 配合`keyup`使用：按下修饰健的同时，再按下其他健，随后释放其他健，事件才被触发。
2. 配合`keydown`使用：正常触发事件。

也可以使用keyCode去指定具体的按键（不推荐）
Vue.config.keyCodes.自定义键名=键码，可以去定制按键别名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>键盘事件</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <!--
    1.Vue中常用的按键别名：
        1.回车=>enter
        2.删除=>delete(捕获“删除”和“退格”键)
        3.退出=>esc
        4.空格=>space
        5.换行=>tab（特殊，必须配合使用keyDown使用）
        6.上=>up
        7.下=>down
        8.左=>left
        9.右=>right
    2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横线命名)
    3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
        (1).配合keyup使用：按下修饰健的同时，再按下其他健，随后释放其他健，事件才被触发。
        (2).配合keydown使用：正常触发事件。
    4.也可以使用keyCode去指定具体的按键（不推荐）
    5.Vue.config.keyCodes.自定义键名=键码，可以去定制按键别名
    -->
    <h2>欢迎来到{{name}}学习</h2>
    <!--enter别名-->
    <input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo"/>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            name: "尚硅谷"
        },
        methods: {
            showInfo(event) {
                if (event.keyCode !== 13) return
                console.log(event.target.value);
            }
        }
    })
</script>
</body>
</html>
```

## 计算属性与监视

#### 插值语法实现姓名案例

```html
<div id="root">
    姓：<input type="text" v-model="firstName"><br/>
    名：<input type="text" v-model="lastName"><br/>
    姓名：<span>{{firstName}}-{{lastName}}</span>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            firstName: "张",
            lastName: "三"
        }
    })
</script>
```

#### methods实现姓名案例

```html
<div id="root">
    姓：<input type="text" v-model="firstName"><br/>
    名：<input type="text" v-model="lastName"><br/>
    姓名：<span>{{fullName()}}</span>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            firstName: "张",
            lastName: "三"
        },
        methods: {
            fullName() {
                return this.firstName.slice(0, 3) + '-' + this.lastName;
            }
        }
    })
</script>
```

#### 计算属性实现姓名案例

```html
<div id="root">
    姓：<input type="text" v-model="firstName"><br/>
    名：<input type="text" v-model="lastName"><br/>
    姓名：<span>{{fullName}}</span>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: "#root",
        data: {
            firstName: "张",
            lastName: "三"
        },
        computed: {
            fullName: {
                //get有什么作用？当有人读取fullName时，get会被调用，且返回值就是fullName的值
                //get什么时候调用？1.初次读取fu11Name时。2.所依赖的数据发生变化时
                get() {
                    return this.firstName + '-' + this.lastName;
                },
                //set什么时候调用，当fullName被修改时
                set(value) {
                    console.log('set', value)
                }
            }
        }
    })
</script>
```

> 计算属性：
> 1. 定义：要用的属性不存在，要通过己有属性计算得来。 
> 2. 原理：底层借助了Object.defineProperty方法提供的getter和setter。 
> 3. get函数什么时候执行？
>    1. 初次读取时会执行一次。
>    2. 当依赖的数据发生改变时会被再次调用。 
> 4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
> 5. 备注：
>    1.  计算属性最终会出现在vm上，直接读取使用即可。
>    2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依懒的数据发生改变。

#### 监视属性-watch

天气案例，当点击按钮切换时，转换天气属性：

```html
<div id="root">
    <h2>今天天气{{info}}</h2>
    <button @click="changeWeather">切换天气</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            isHot: true
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        methods: {
            changeWeather() {
                this.isHot = !this.isHot;
            }
        }
    })
</script>
```

监视属性watch: 

1. 当被监视的属性变化时，回调函数自动调用，进行相关操作 
2. 监视的属性必须存在，才能进行监视！！ 
3. 监视的两种写法：
   1. new Vue时传入watch配置
   2. 通过vm.$watch监视

```html
<div id="root">
    <h2>今天天气{{info}}</h2>
    <button @click="changeWeather">切换天气</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            isHot: true
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        methods: {
            changeWeather() {
                this.isHot = !this.isHot;
            }
        }
    })
</script>
```

#### 深度监测

深度监视：

1. Vue中的watch默认不监测对象内部值的改变（一层）。
2. 配置==deep:true==可以监测对象内部值改变（多层）。
3. 备注：
   1. Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
   2. 使用watch时根据数据的具体结构，决定是否采用深度监视。

```html
<div id="root">
    <h2>今天天气{{info}}</h2>
    <button @click="changeWeather">切换天气</button>
    <hr/>
    <h2>a的值是：{{numbers.a}}</h2>
    <button @click="numbers.a++">点我a+1</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: "#root",
        data: {
            isHot: true,
            numbers: {
                a: 1,
                b: 1
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        methods: {
            changeWeather() {
                this.isHot = !this.isHot;
            }
        },
        watch: {
            isHot: {
                //初始化时，让handler调用一下
                immediate: true,
                //handler什么时候调用？当isHot发生改变时。
                handler(newValue, oldValue) {
                    console.log('isHot被修改了', newValue, oldValue);
                }
            },
            //监视多级结构中某个属性的变化
            /*            'numbers.a': {
                            handler(newValue, oldValue) {
                                console.log('a被修改了', newValue, oldValue);
                            }
                        }*/
            //监视多级结构中所有属性的变化
            numbers: {
                deep: true,
                handler() {
                    console.log("numbers改变了")
                }
            }
        }
    })
    /*    vm.$watch('isHot',{
            immediate:true,
            handler(newValue,oldValue){
                console.log('isHot被修改了', newValue, oldValue)
            }
        })*/
</script>
```

#### 深度检测-简写

```html
<div id="root">
    <h2>今天天气{{info}}</h2>
    <button @click="changeWeather">切换天气</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: "#root",
        data: {
            isHot: true
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        methods: {
            changeWeather() {
                this.isHot = !this.isHot;
            }
        }/*,
        watch: {
            //简写形式一
            isHot(newValue, oldValue) {
                console.log('isHot被修改了', newValue, oldValue);
            }
        }*/
    })
        //简写形式二
        vm.$watch('isHot',function(newValue, oldValue) {
            console.log('isHot被修改了', newValue, oldValue);
        })
</script>
```

#### computed与watch之间的区别

1. computed能完成的功能，watch都可以完成。
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
3. 两个重要的小原则： 
   1. 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。 
   2. 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm或组件实例对象。

```html
<div id="root">
    姓：<input type="text" v-model="firstName"><br/>
    名：<input type="text" v-model="lastName"><br/>
    姓名：<span>{{fullName}}</span>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: "#root",
        data: {
            firstName: "张",
            lastName: "三",
            fullName: '张-三'
        },
        watch: {
            firstName(val) {
                setTimeout(()=>{
                    this.fullName = val + '-' + this.lastName;
                },1000)
            }, lastName(val) {
                this.fullName = this.firstName + '-' + val;
            }
        }
    })
</script>
```

## 绑定样式

1. c1ass样式
   1. 写法：class="xxx" xxx可以是字符串、对象、数组。
   2. 字符串写法适用于：类名不确定，要动态获取。
   3. 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
   4. 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
2. style样式
   1. :style="{fontSize: xxx}"其中xxx是动态值。
   2. :style="[a,b]"其中a、b是样式对象。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绑定样式</title>
    <script type="text/javascript" src="../js/vue.js"></script>
    <style>
        .basic {
            width: 400px;
            height: 100px;
            border: 1px solid black;
        }

        .happy {
            border: 4px solid red;;
            background-color: rgba(255, 255, 0, 0.644);
            background: linear-gradient(30deg, yellow, pink, orange, yellow);
        }

        .sad {
            border: 4px dashed rgb(2, 197, 2);
            background-color: gray;
        }

        .normal {
            background-color: skyblue;
        }

        .atguigu1 {
            background-color: yellowgreen;
        }

        .atguigu2 {
            font-size: 30px;
            text-shadow: 2px 2px 10px red;
        }

        .atguigu3 {
            border-radius: 20px;
        }
    </style>
</head>
<body>
<div id="root">
    <!--绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态确定-->
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
    <br/>
    <!--绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定-->
    <div class="basic" :class="classArr">{{name}}</div>
    <br/>
    <!--绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字确定，但是动态决定用不用-->
    <div class="basic" :class="classObj">{{name}}</div>
    <br/>
    <!--绑定style样式--对象写法-->
    <div class="basic" :style="styleObj">{{name}}</div>
    <br/>
    <!--绑定style样式--数组写法-->
    <div class="basic" :style="styleArr">{{name}}</div>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            name: "尚硅谷",
            mood: 'normal',
            classArr: ['atguigu1', 'atguigu2', 'atguigu3'],
            classObj: {
                atguigu1: false,
                atguigu2: false,
                atguigu3: false
            },
            styleObj: {
                fontSize: '50px',
                color: 'red'
            },
            styleObj2: {
                backgroundColor: 'orange'
            },
            styleArr: [{
                fontSize: '50px',
                color: 'red'
            },
                {
                    backgroundColor: 'orange'
                }
            ]
        },
        methods: {
            changeMood() {
                const moodArr = ['normal', 'happy', 'sad']
                const index = Math.floor(Math.random() * 3);
                this.mood = moodArr[index]
            }
        }
    })
</script>
</body>
</html>
```

## 条件渲染

### v-if 和 v-show的基本使用

```html
<div id='root'>
    <!--使用v-show做条件渲染-->
    <!--<h2 v-show="false">欢迎来到{{name}}</h2>-->
    <!--<h2 v-show="1 === 1">欢迎来到{{name}}</h2>-->
    <!--使用v-if做条件渲染-->
    <!--<h2 v-if="false">欢迎来到{{name}}</h2>-->
    <!--<h2 v-if="1 === 1">欢迎来到{{name}}</h2>-->
    <h2>当前n的值为：{{n}}</h2>
    <button @click="n++">点击n+1</button>
    <!--<h2 v-if="n === 1">Angular</h2>-->
    <!--<h2 v-else-if="n === 2">React</h2>-->
    <!--<h2 v-else-if="n === 3">Vue</h2>-->
    <!--<h2 v-else>哈哈</h2>-->

    <template v-if="n === 1">
        <h2>你好</h2>
        <h2>尚硅谷</h2>
        <h2>北京</h2>
    </template>

</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            name: "尚硅谷",
            n: 0
        }
    })
</script>
</body>
```

## 列表渲染

### v-for指令 

1. 用于展示列表数据
2. 语法：v-for="(item,index) in xxx" :key="yyy" 
3. 可遍历：数组、对象、字符串（用的很少）、指定次数(用的很少)

![image-20230401181421852](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304011814064.png)

```html
<div id='root'>
    <!--遍历数组-->
    <h2>人员列表（遍历数组）</h2>
    <ul>
        <li v-for="person in persons" :key="person.id">
            {{person.name}}-{{person.age}}
        </li>
    </ul>
    <!--遍历对象-->
    <h2>汽车属性（遍历对象）</h2>
    <ul>
        <li v-for="(attribute,key) in car" :key="key">
            {{key}}-{{attribute}}
        </li>
    </ul>
    <!--遍历字符串-->
    <h2>遍历字符串</h2>
    <ul>
        <li v-for="(char,index) in str" :key="index">
            {{index}}-{{char}}
        </li>
    </ul>
    <!--遍历指定次数-->
    <h2>测试指定次数</h2>
    <ul>
        <li v-for="(number,index) in 5" :key="index">
            {{index}}-{{number}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            persons: [
                {
                    id: 1,
                    name: "张三",
                    age: 18
                }, {
                    id: 2,
                    name: "李四",
                    age: 19
                }, {
                    id: 3,
                    name: "王五",
                    age: 20
                }
            ],
            car: {
                name: "奥迪A8",
                price: "70W",
                color: "黑色"
            }, str: "Hello"
        }
    })
</script>
```

### react、vue中的key有什么作用？(key的内部原理)

1. 虚拟DOM中key的作用：
   1.  key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下： 
   2. 对比规则：
      1. 旧虚拟DOM中找到了与新虚拟DOM相同的key:
         1. 若虚拟DOM中内容没变，直接使用之前的真实DOM!
         2. 若虚拟DOM中内容变则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
      2. 旧虚拟DOM中未找到与新虚拟D0M相同的key创建新的真实DOM，随后渲染到到页面。
   3. 用index作为key可能会引发的问题：
      1.  若对数据进行：逆序添加、逆序删除等破坏顺序操作，会产生没有必要的真实DOM更新-->界面效果没问题，但效率低。 
      2. 如果结构中还包含输入类的DOM：会产生错误DOM更新-->界面有问题。
   4. 开发中如何选择key?：
      1. 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。 
      2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

![image-20230401203332467](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304012033763.png)

```html
<div id='root'>
    <!--遍历数组-->
    <h2>人员列表（遍历数组）</h2>
    <ul>
        <li v-for="person in persons" :key="person.id">
            {{person.name}}-{{person.age}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            persons: [
                {
                    id: 1,
                    name: "张三",
                    age: 18
                }, {
                    id: 2,
                    name: "李四",
                    age: 19
                }, {
                    id: 3,
                    name: "王五",
                    age: 20
                }
            ]
        }
    })
</script>
```

### 列表过滤

![image-20230401224429324](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304012244437.png)

```html
<div id='root'>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="keyWord">
    <ul>
        <li v-for="person in filterPersons" :key="person.id">
            {{person.name}}-{{person.age}}-{{person.sex}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    //用watch实现
    //#region
    /*new Vue({
        el: "#root",
        data: {
            keyWord: '',
            persons: [
                {
                    id: 1,
                    name: "马冬梅",
                    age: 18,
                    sex: '女'
                }, {
                    id: 2,
                    name: "周冬雨",
                    age: 19,
                    sex: '女'
                }, {
                    id: 3,
                    name: "周杰伦",
                    age: 20,
                    sex: '男'
                }, {
                    id: 4,
                    name: "温兆伦",
                    age: 22,
                    sex: '男'
                }
            ],
            filterPersons: []
        },
        watch: {
            keyWord: {
                immediate: true,
                handler(val) {
                    this.filterPersons = this.persons.filter((person) => {
                        return person.name.indexOf(val) !== -1;
                    });
                }
            }
        }
    })*/
    //#endregion
    new Vue({
        el: "#root",
        data: {
            keyWord: '',
            persons: [
                {
                    id: 1,
                    name: "马冬梅",
                    age: 18,
                    sex: '女'
                }, {
                    id: 2,
                    name: "周冬雨",
                    age: 19,
                    sex: '女'
                }, {
                    id: 3,
                    name: "周杰伦",
                    age: 20,
                    sex: '男'
                }, {
                    id: 4,
                    name: "温兆伦",
                    age: 22,
                    sex: '男'
                }
            ]
        }, computed: {
            filterPersons() {
                return this.persons.filter((person) => {
                    return person.name.indexOf(this.keyWord) !== -1;
                })
            }
        }
    });
</script>
```

### 列表排序

![](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304020022658.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>列表排序</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id='root'>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="keyWord">
    <button @click="sortType = 2">年龄升序</button>
    <button @click="sortType = 1">年龄降序</button>
    <button @click="sortType = 0">原顺序</button>
    <ul>
        <li v-for="person in filterPersons" :key="person.id">
            {{person.name}}-{{person.age}}-{{person.sex}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;

    new Vue({
        el: "#root",
        data: {
            keyWord: '',
            //0原顺序 1降序 2升序
            sortType: 0,
            persons: [
                {
                    id: 1,
                    name: "马冬梅",
                    age: 30,
                    sex: '女'
                }, {
                    id: 2,
                    name: "周冬雨",
                    age: 22,
                    sex: '女'
                }, {
                    id: 3,
                    name: "周杰伦",
                    age: 24,
                    sex: '男'
                }, {
                    id: 4,
                    name: "温兆伦",
                    age: 18,
                    sex: '男'
                }
            ]
        }, computed: {
            filterPersons() {
                const arr = this.persons.filter((person) => {
                    return person.name.indexOf(this.keyWord) !== -1
                })
                //判断是否需要排序
                if (this.sortType) {
                    arr.sort((person1, person2) => {
                            return this.sortType === 1 ? person2.age - person1.age : person1.age - person2.age
                        }
                    )
                }
                return arr
            }
        }
    });
</script>
</body>
</html>
```

### 更新时遇到的一个问题

```html
this.persons[0] = {
    id: 1,
    name: "马老师",
    age: 50,
    sex: '男'
}
```

Vue无法监测到如上改变，直接赋值对象不起作用。

```html
<div id='root'>
    <h2>人员列表</h2>
    <button @click="updateMei">更新马冬梅信息</button>
    <ul>
        <li v-for="person in persons" :key="person.id">
            {{person.name}}-{{person.age}}-{{person.sex}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: "#root",
        data: {
            persons: [
                {
                    id: 1,
                    name: "马冬梅",
                    age: 30,
                    sex: '女'
                }, {
                    id: 2,
                    name: "周冬雨",
                    age: 22,
                    sex: '女'
                }, {
                    id: 3,
                    name: "周杰伦",
                    age: 24,
                    sex: '男'
                }, {
                    id: 4,
                    name: "温兆伦",
                    age: 18,
                    sex: '男'
                }
            ]
        }, methods: {
            updateMei() {
                //this.persons[0].name = '马老师' //凑效
                //this.persons[0].age = 50 //凑效
                //this.persons[0].sex = '男' //凑效
                //Vue无法检测到这种改变
                this.persons[0] = {
                    id: 1,
                    name: "马老师",
                    age: 50,
                    sex: '男'
                }
            }
        }
    });
```

### Vue检测数据改变的原理

Vue通过数据代理的方式实现检测数据改变。

例如`_data`与`data`。

1. 加工data
2. this._data = data

```html
<div id="root">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el: '#root',
        data: {
            name: '尚硅谷',
            address: '北京',
            student: {
                name: 'tom',
                age: {
                    rAge: 40,
                    sAge: 29,
                },
                friends: [
                    {name: 'jerry', age: 35}
                ]
            }
        }
    })
</script>
```

### 模拟数据监测

![image-20230402002818894](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304020028983.png)

通过set和get的方式实现数据监测。

```html
<script type="text/javascript">
    let data = {
        name: '尚硅谷',
        address: '北京'
    }
    //这种方式形成循环，当检测到data.name发生改变时，继续执行此语句
    /*    Object.defineProperty(data, 'name', {
            get() {
                return data.name
            },
            set(v) {
                data.name = v;
            }
        })*/
    //创建一个监视的实例对象，用于监视data中的属性的变化
    const obs = new Observer(data);
    console.log(obs)
    function Observer(obj) {
        //汇总对象中所有属性形成一个数组
        const keys = Object.keys(obj)
        //遍历
        keys.forEach((k) => {
            Object.defineProperty(this, k, {
                get() {
                    return obj[k];
                },
                set(val) {
                    obj[k] = val;
                }
            })
        })
    }
</script>
```

### Vue.set的使用

![image-20230403075930729](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030759898.png)

```html
<div id="root">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <hr/>
    <h2>学生信息</h2>
    <button @click="addSex">点击给学生追加一个属性</button>
    <h2>学生姓名：{{student.name}}</h2>
    <h2 v-if="student.sex">学生性别：{{student.sex}}</h2>
    <h2>学生年龄：真实{{student.age.rAge}},对外{{student.age.sAge}}</h2>
    <h2>朋友们</h2>
    <ul>
        <li v-for="(f,index) in student.friends" :key="index">
            {{f.name}}--{{f.age}}
        </li>
    </ul>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el: '#root',
        data: {
            name: '尚硅谷',
            address: '北京',
            student: {
                name: 'tom',
                age: {
                    rAge: 40,
                    sAge: 29,
                },
                friends: [
                    {name: 'jerry', age: 35},
                    {name: 'tony', age: 36},
                ]
            }
        },
        methods: {
            addSex() {
                //Vue.set(this.student, 'sex', '男')
                this.$set(this.student, 'sex', '男')
            }
        }
    })
</script>
```

### Vue监测数据改变的原理—数组

![image-20230403081340749](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030813840.png)

```html
<div id="root">
    <h2>朋友们</h2>
    <ul>
        <li v-for="(f,index) in student.friends" :key="index">
            {{f.name}}--{{f.age}}
        </li>
    </ul>
    <h2>爱好</h2>
    <ul>
        <li v-for="(h,index) in student.hobby" :key="index">
            {{h}}
        </li>
    </ul>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el: '#root',
        data: {
            student: {
                hobby: ['抽烟', '喝酒', '烫头'],
                friends: [
                    {name: 'jerry', age: 35},
                    {name: 'tony', age: 36},
                ]
            }
        }
    })
</script>
```

通过数组的下标进行修改，无法被Vue监测到。原因如图所示，Array数组中无set方法，因此修改无法被监测到。

![image-20230403081654570](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030816645.png)

通过如下方式，修改数组。

![image-20230403082029426](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030820482.png)

其次，修改数组的方式还有如下：

|  **方法**   |                          **作用**                          |
| :-----: | :----------------------------------------------------: |
|  push   | 将一个或多个元素添加到数组的末尾，并返回新数组的长度。 |
|   pop   |       删除数组的最后一个元素，并返回该元素的值。       |
|  shift  |        删除数组的第一个元素，并返回该元素的值。        |
| unshift | 将一个或多个元素添加到数组的开头，并返回新数组的长度。 |
| splice  |  从数组中删除指定位置的元素，并返回被删除的元素数组。  |
| reverse |           将数组中的元素按照升序或降序反转。           |
|  sort   |                对数组中的元素进行排序。                |

此外，通过下面的方式也可以修改数组元素。

![image-20230403084452253](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030844326.png)

### 总结Vue数据监测

Vue监视数据的原理： 

1. vue会监视data中所有层次的数据。 
2. 如何监测对象中的数据？通过setter实现监视，且要在new Vue时就传入要监测的数据。
   1. 对象中后追加的属性，Vue默认不做响应式处理
   2. 如需给后添加的属性做响应式，请使用如下API: Vue.set(target,propertyName/index,value)或 vm.$set(target,propertyName/index,value) 
3. 如何监测数组中的数据？通过包裹数组更新元素的方法实现，本质就是做了两件事：
   1. 调用原生对应的方法对数组进行更新。
   2. 重新解析模板，进而更新页面。 
4. 在Vue修改数组中的某个元素一定要用如下方法： 
   1. 使用这些API：push()、pop()、shift()、unshift()、splice()、sort()、reverse() 
   2. Vue.set()vm.$set()

特别注意：Vue.set()和vm.$set()不能给vm或vm的根数据对象添加属性！！！

## 收集表单数据

收集表单数据：

若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。

若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。

若：<input type="checkbox"/> 

1. 没有配置input的value属性，那么收集的就是checked(勾选or 未勾选，是布尔值)
2. 配置input的value属性：
   1. v-model的初始值是非数组，那么收集的就是checked(勾选 or 未勾选，是布尔值)
   2. v-model的初始值是数组，那么收集的的就是value组成的数组

备注：v-model的三个修饰符： 

+ 1azy：失去焦点再收集数据 
+ number：输入字符串转为有效的数字
+ trim：输入首尾空格过滤

![image-20230403095259676](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304030952758.png)

```html
<div id="root">
    <form>
        账号：<input type="text" v-model.trim="account"><br/>
        密码：<input type="password" v-model="password"><br/>
        性别：
        男<input type="radio" name="sex" v-model="sex" value="male">
        女<input type="radio" name="sex" v-model="sex" value="female"><br/>
        年龄：<input type="number" v-model.number="age"><br/>
        爱好：
        学习<input type="checkbox" v-model="hobby" value="study">
        打游戏<input type="checkbox" v-model="hobby" value="game">
        干饭<input type="checkbox" v-model="hobby" value="eat">
        <br/>
        所属校区：
        <select v-model="city">
            <option value="">请选择所属校区</option>
            <option value="songshan">嵩山路校区</option>
            <option value="lianhuajie">莲花街校区</option>
        </select>
        <br/>
        其他信息：
        <textarea v-model.lazy="other"></textarea> <br/>
        <input type="checkbox" v-model="agree">阅读并同意<a href="https://www.baidu.com">《用户协议》</a>
        <button>提交</button>
    </form>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data: {
            account: '',
            password: '',
            sex: 'female',
            hobby: [],
            city: '',
            other: '',
            agree: '',
            age: 18
        }
    })
</script>
```

## 过滤器

过滤器：

定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。

语法： 

1. 注册过滤器：Vue.filter(name,callback) 或new Vue(filters:{})。
2. 使用过滤器：{{ xxx | 过滤器名}} 或v-bind:属性="xxx | 过滤器名"。

备注： 

1. 过滤器也可以接收额外参数、多个过滤器也可以串联。 
2. 并没有改变原本的数据，是产生新的对应的数据。

![image-20230403192050844](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304031920926.png)

```html
<div id="root">
    <!--计算属性实现-->
    当前时间：{{fmtTime}}<br/>
    <!--method方法实现-->
    当前时间：{{getFmtTime()}}<br/>
    <!--过滤器实现 | 管道-->
    当前时间：{{time | timeFormater}}<br/>
    <!--过滤器实现 传入参数-->
    当前时间：{{time | timeFormater('YYYY/MM/DD HH:mm:ss')}}<br/>
    <!--多个管道-->
    当前时间：{{time | timeFormater('YYYY/MM/DD HH:mm:ss') | mySlice}}
    <hr/>
    <div id="root1">
        <h2>{{msg | mySlice}}</h2>
    </div>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false;

    Vue.filter('mySlice', function (value) {
        return value.slice(0, 4)
    })

    new Vue({
        el: "#root",
        data: {
            time: Date.now(),
            msg: "Hello,World!"
        }, computed: {
            fmtTime() {
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        }, methods: {
            getFmtTime() {
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        //局部过滤器
        filters: {
            timeFormater(val, str = "YYYY年MM月DD日 HH:mm:ss") {
                return dayjs(val).format(str)
            }/*,
            mySlice(value) {
                return value.slice(0, 4)
            }*/
        }
    })

    new Vue({
        el: "#root1",
        data: {
            msg: "Hello,World!"
        }
    })
</script>
```

## 内置指令

我们学过的指令：

+ v-bind:单向绑定解析表达式, 可简写为 :xxx
+ v-model:双向数据绑定
+ v-for:遍历数组/对象/字符串
+ v-on:绑定事件监听, 可简写为@
+ v-if:条件渲染（动态控制节点是否存存在）
+ v-else:条件渲染（动态控制节点是否存存在）
+ v-show:条件渲染 (动态控制节点是否展示)
+ v-text指令：
  + 作用：向其所在的节点中渲染文本内容。
  + 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。

### v-text指令

![image-20230403192608695](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304031926765.png)

```html
<div id="root">
    <div>你好，{{name}}</div>
    <div v-text="name"></div>
    <div v-text="str"></div>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    
    new Vue({
        el: '#root',
        data: {
            name: '尚硅谷',
            str: '<h3>你好啊！</h3>'
        }
    })
```

### v-html指令

v-html指令： 

1. 作用：向指定节点中渲染包含html结构的内容。 
2. 与插值语法的区别：
   1. v-html会替换掉节点中所有的内容，{{xx}}则不会。
   2. v-html可以识别html结构。
3. 严重注意：v-html有安全性问题！！！！
   1. 在网站上动态渲染任意HTML是非常危险的，容易导到XSS攻击。
   2. 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

![image-20230403203603174](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032036245.png)

```html
<div id="root">
    <div>你好，{{name}}</div>
    <div v-html="str"></div>
    <div v-html="str2"></div>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            name: '尚硅谷',
            str: '<h3>你好啊！</h3>',
            str2: '<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
        }
    })
</script>
```

### v-cloak指令

v-cloak指令（没有值）：

1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
2. 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>v-cloak指令</title>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>
<div id="root">
    <h2 v-cloak>{{name}}</h2>
</div>
<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
</body>

<script type="text/javascript">
    console.log(1)
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            name: '尚硅谷'
        }
    })
</script>
</html>
```

### v-once指令

v-once指令：

1. v-once所在节点在初次动态渲染后，就视为静态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

![image-20230403204716606](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032047708.png)

```html
<div id="root">
    <h2 v-once>初始化的n值是:{{n}}</h2>
    <h2>当前的n值是:{{n}}</h2>
    <button @click="n++">点我n+1</button>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            n: 1
        }
    })
</script>
```

### v-pre指令

v-pre指令：

1. 跳过其所在节点的编译过程。
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

![image-20230403205006817](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032050885.png)

```html
<div id="root">
    <h2 v-pre>Vue其实很简单</h2>
    <h2>当前的n值是:{{n}}</h2>
    <button @click="n++">点我n+1</button>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            n: 1
        }
    })
</script>
```

## 自定义指令

> 需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
> 需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。

自定义指令总结：

一、定义语法：

1. 局部指令：

```js
new Vue({                                        
   directives:{指令名:配置对象}           
})

new Vue({           
	directives(){}
})
```


2. 全局指令：

   Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)

二、配置对象中常用的3个回调：

+ bind：指令与元素成功绑定时调用。
+ inserted：指令所在元素被插入页面时调用。
+ update：指令所在模板结构被重新解析时调用。

三、备注：

1. 指令定义时不加v-，但使用时要加v-；
2. 指令名如果是多个单词，要使用kebab-case（短横线命名法）命名方式，不要用camelCase（驼峰）命名。

![image-20230403212053540](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032120626.png)

```html
<div id="root">
    <h2>{{name}}</h2>
    <h2>当前的n值是：<span v-text="n"></span></h2>
    <!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
    <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
    <button @click="n++">点我n+1</button>
    <hr/>
    <input type="text" v-fbind:value="n">
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    //定义全局指令
    /* Vue.directive('fbind',{
        //指令与元素成功绑定时（一上来）
        bind(element,binding){
            element.value = binding.value
        },
        //指令所在元素被插入页面时
        inserted(element,binding){
            element.focus()
        },
        //指令所在的模板被重新解析时
        update(element,binding){
            element.value = binding.value
        }
    }) */

    new Vue({
        el: '#root',
        data: {
            name: '尚硅谷',
            n: 1
        },
        directives: {
            //big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
            /* 'big-number'(element,binding){
                // console.log('big')
                element.innerText = binding.value * 10
            }, */
            big(element, binding) {
                console.log('big', this) //注意此处的this是window
                element.innerText = binding.value * 10
            },
            fbind: {
                //指令与元素成功绑定时（一上来）
                bind(element, binding) {
                    element.value = binding.value
                },
                //指令所在元素被插入页面时
                inserted(element, binding) {
                    element.focus()
                },
                //指令所在的模板被重新解析时
                update(element, binding) {
                    element.value = binding.value
                }
            }
        }
    })
</script>
```

### 回顾DOM操作

![image-20230403220612963](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032206857.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<style>
			.demo{
				background-color: orange;
			}
		</style>
	</head>
	<body>
		<button id="btn">点我创建一个输入框</button>
		
		<script type="text/javascript" >
			const btn = document.getElementById('btn')
			btn.onclick = ()=>{
				const input = document.createElement('input')
				input.className = 'demo'
				input.value = 99
				input.onclick = ()=>{alert(1)}
				document.body.appendChild(input)
				input.focus()
				// input.parentElement.style.backgroundColor = 'skyblue'
				console.log(input.parentElement)
			}
		</script>
	</body>
</html>
```

## 生命周期

### 引出生命周期

生命周期： 
1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。
2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。 
3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。 
4. 生命周期函数中的this指向是vm或组件实例对象。

![20230403_232031](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032321925.gif)

```html
<div id="root">
    <h2 v-if="a">你好啊</h2>
    <h2 :style="{opacity}">欢迎学习Vue</h2>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            a: false,
            opacity: 1
        },
        methods: {},
        //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
        mounted() {
            console.log('mounted', this)
            setInterval(() => {
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 16)
        },
    })

    //通过外部的定时器实现（不推荐）
    /* setInterval(() => {
        vm.opacity -= 0.01
        if(vm.opacity <= 0) vm.opacity = 1
    },16) */
</script>
```

### 分析生命周期

![生命周期](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304032324662.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>分析生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root" :x="n">
			<h2 v-text="n"></h2>
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n+1</button>
			<button @click="bye">点我销毁vm</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			// template:`
			// 	<div>
			// 		<h2>当前的n值是：{{n}}</h2>
			// 		<button @click="add">点我n+1</button>
			// 	</div>
			// `,
			data:{
				n:1
			},
			methods: {
				add(){
					console.log('add')
					this.n++
				},
				bye(){
					console.log('bye')
					this.$destroy()
				}
			},
			watch:{
				n(){
					console.log('n变了')
				}
			},
			beforeCreate() {
				console.log('beforeCreate')
			},
			created() {
				console.log('created')
			},
			beforeMount() {
				console.log('beforeMount')
			},
			mounted() {
				console.log('mounted')
			},
			beforeUpdate() {
				console.log('beforeUpdate')
			},
			updated() {
				console.log('updated')
			},
			beforeDestroy() {
				console.log('beforeDestroy')
			},
			destroyed() {
				console.log('destroyed')
			},
		})
	</script>
</html>
```

![image-20230404081432391](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304040814561.png)

### 总结生命周期

vm的一生(vm的生命周期)：

将要创建 => 调用beforeCreated函数。

创建完毕调用created函数。

将要挂载=>调用beforeMount函数。

(重要)挂载完毕 => 调用mounted函数【重要的钩子】。

将要更新=>调用beforeUpdate函数。

更新完毕=>调用updated函数。(重要)

将要销毁=>调用beforeDestroy函数。【重要的钩子】

销毁完毕=>调用destroyed函数。

常用的生命周期钩子：

1. mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
2. beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例

1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效，但原生DOM事件依然有效。
3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

![20230404_083438](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304040835460.gif)

```html
<div id="root">
    <h2 :style="{opacity}">欢迎学习Vue</h2>
    <button @click="opacity = 1">透明度设置为1</button>
    <button @click="stop">点我停止变换</button>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el: '#root',
        data: {
            opacity: 1
        },
        methods: {
            stop() {
                this.$destroy()
            }
        },
        //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
        mounted() {
            console.log('mounted', this)
            this.timer = setInterval(() => {
                console.log('setInterval')
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 16)
        },
        beforeDestroy() {
            clearInterval(this.timer)
            console.log('vm即将驾鹤西游了')
        },
    })

</script>
```

## 第二章：Vue组件化编程

组件的定义：实现应用中局部功能代码和资源的集合

![image-20230404134723502](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304041347616.png)

Vue中使用组件的三大步骤：
        一、定义组件(创建组件)
        二、注册组件
        三、使用组件(写组件标签)

一、如何定义一个组件？
            使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
            区别如下：
                    1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
                    2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
            备注：使用template可以配置组件结构。

二、如何注册组件？
                1.局部注册：靠new Vue的时候传入components选项
                2.全局注册：靠Vue.component('组件名',组件)

三、编写组件标签：
                <school></school>

```html
<div id="root">
    <hello></hello>
    <hr>
    <h1>{{msg}}</h1>
    <hr>
    <!-- 第三步：编写组件标签 -->
    <school></school>
    <hr>
    <!-- 第三步：编写组件标签 -->
    <student></student>
</div>

<div id="root2">
    <hello></hello>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    //第一步：创建school组件
    const school = Vue.extend({
        template: `
          <div class="demo">
          <h2>学校名称：{{ schoolName }}</h2>
          <h2>学校地址：{{ address }}</h2>
          <button @click="showName">点我提示学校名</button>
          </div>
        `,
        // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
        data() {
            return {
                schoolName: '尚硅谷',
                address: '北京昌平'
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        },
    })

    //第一步：创建student组件
    const student = Vue.extend({
        template: `
          <div>
          <h2>学生姓名：{{ studentName }}</h2>
          <h2>学生年龄：{{ age }}</h2>
          </div>
        `,
        data() {
            return {
                studentName: '张三',
                age: 18
            }
        }
    })

    //第一步：创建hello组件
    const hello = Vue.extend({
        template: `
          <div>
          <h2>你好啊！{{ name }}</h2>
          </div>
        `,
        data() {
            return {
                name: 'Tom'
            }
        }
    })

    //第二步：全局注册组件
    Vue.component('hello', hello)

    //创建vm
    new Vue({
        el: '#root',
        data: {
            msg: '你好啊！'
        },
        //第二步：注册组件（局部注册）
        components: {
            school,
            student
        }
    })

    new Vue({
        el: '#root2',
    })
</script>
```

### 几个注意点

> 1.关于组件名:
> 			 一个单词组成：
>                         第一种写法(首字母小写)：school
>                         第二种写法(首字母大写)：School
>             多个单词组成：
>                         第一种写法(kebab-case命名)：my-school
>                         第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
>             备注：
>                     (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
>                     (2).可以使用name配置项指定组件在开发者工具中呈现的名字。
>
> 2.关于组件标签:
>             第一种写法：<school></school>
>             第二种写法：<school/>
>             备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
>
> 3.一个简写方式：
>             const school = Vue.extend(options) 可简写为：const school = options

```html
<div id="root">
    <h1>{{msg}}</h1>
    <school></school>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    //定义组件
    const school = Vue.extend({
        name: 'atguigu',
        template: `
          <div>
          <h2>学校名称：{{ name }}</h2>
          <h2>学校地址：{{ address }}</h2>
          </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        }
    })

    new Vue({
        el: '#root',
        data: {
            msg: '欢迎学习Vue!'
        },
        components: {
            school
        }
    })
</script>
```

### 组件的嵌套


```html
<!-- 准备好一个容器-->
<div id="root">

</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    //定义student组件
    const student = Vue.extend({
        name: 'student',
        template: `
          <div>
          <h2>学生姓名：{{ name }}</h2>
          <h2>学生年龄：{{ age }}</h2>
          </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                age: 18
            }
        }
    })

    //定义school组件
    const school = Vue.extend({
        name: 'school',
        template: `
          <div>
          <h2>学校名称：{{ name }}</h2>
          <h2>学校地址：{{ address }}</h2>
          <student></student>
          </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        //注册组件（局部）
        components: {
            student
        }
    })

    //定义hello组件
    const hello = Vue.extend({
        template: `<h1>{{ msg }}</h1>`,
        data() {
            return {
                msg: '欢迎来到尚硅谷学习！'
            }
        }
    })

    //定义app组件
    const app = Vue.extend({
        template: `
          <div>
          <hello></hello>
          <school></school>
          </div>
        `,
        components: {
            school,
            hello
        }
    })

    //创建vm
    new Vue({
        template: '<app></app>',
        el: '#root',
        //注册组件（局部）
        components: {app}
    })
</script>
```

### VueComponent

> 关于VueComponent：
>             1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
> ​            2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，
> ​                即Vue帮我们执行的：new VueComponent(options)。
> ​            3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！
> ​            4.关于this指向：
> ​                    (1).组件配置中：
> ​                                data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
> ​                    (2).new Vue(options)配置中：
> ​                                data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。
>
> ​            5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
> ​                Vue的实例对象，以后简称vm。

![image-20230404144504068](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304041445148.png)

```html
<div id="root">
    <school></school>
    <hello></hello>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    //定义school组件
    const school = Vue.extend({
        name: 'school',
        template: `
          <div>
          <h2>学校名称：{{ name }}</h2>
          <h2>学校地址：{{ address }}</h2>
          <button @click="showName">点我提示学校名</button>
          </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showName() {
                console.log('showName', this)
            }
        },
    })

    const test = Vue.extend({
        template: `<span>atguigu</span>`
    })

    //定义hello组件
    const hello = Vue.extend({
        template: `
          <div>
          <h2>{{ msg }}</h2>
          <test></test>
          </div>
        `,
        data() {
            return {
                msg: '你好啊！'
            }
        },
        components: {test}
    }) 


    // console.log('@',school)
    // console.log('#',hello)

    //创建vm
    const vm = new Vue({
        el: '#root',
        components: {school, hello}
    })
</script>
```

### 一个重要的内置关系

> 1.一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
> 2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。

![image-20230404155426895](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304041554093.png)

```html
<div id="root">
    <school></school>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    Vue.prototype.x = 99

    //定义school组件
    const school = Vue.extend({
        name: 'school',
        template: `
          <div>
          <h2>学校名称：{{ name }}</h2>
          <h2>学校地址：{{ address }}</h2>
          <button @click="showX">点我输出x</button>
          </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showX() {
                console.log(this.x)
            }
        },
    })

    //创建一个vm
    const vm = new Vue({
        el: '#root',
        data: {
            msg: '你好'
        },
        components: {school}
    })


    //定义一个构造函数
    /* function Demo(){
        this.a = 1
        this.b = 2
    }
    //创建一个Demo的实例对象
    const d = new Demo()

    console.log(Demo.prototype) //显示原型属性

    console.log(d.__proto__) //隐式原型属性

    console.log(Demo.prototype === d.__proto__)

    //程序员通过显示原型属性操作原型对象，追加一个x属性，值为99
    Demo.prototype.x = 99

    console.log('@',d) */

</script>
```

## 单文件组件

```vue
<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
```

```vue
<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京昌平'
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
</script>

<style>
.demo {
    background-color: orange;
}
</style>
```

```vue
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		name:'Student',
		data(){
			return {
				name:'张三',
				age:18
			}
		}
	}
</script>
```

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>练习一下单文件组件的语法</title>
	</head>
	<body>
		<!-- 准备一个容器 -->
		<div id="root"></div>
		 <script type="text/javascript" src="../js/vue.js"></script>
		 <script type="text/javascript" src="./main.js"></script>
	</body>
</html>
```

```js
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})
```

# 第三章：使用Vue脚手架

## 初始化脚手架

### 说明

1. Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。
2. 最新的版本是 5.x。
3. 文档: https://cli.vuejs.org/zh/

### 具体步骤

第一步（仅第一次执行）：全局安装@vue/cli。

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

第二步：切换到你要创建项目的目录，然后使用命令创建项目。

```shell
vue create my-project
# OR
cd my-project
```

第三步：启动项目

```shell
yarn serve
```

备注：

1. 如出现下载缓慢请配置 npm 淘宝镜像：

   > npm config set registry https://registry.npm.taobao.org

2. Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置， 请执行：

   > vue inspect > output.js

   ![image-20230405080955076](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304050810240.png)

如下所示为初始化项目目录：

![image-20230405001534884](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304050015042.png)

+ node_modules：存放项目依赖的第三方模块。
+ public：存放静态资源文件，如HTML文件、图片、字体等。
+ assets：存放项目中使用的静态资源文件，如图片、字体等。
+ components：存放Vue组件。
+ App.vue：项目的主Vue组件。
+ main.js：项目的入口文件，用于初始化Vue实例并加载其他组件、插件、配置等。
+ babel.config.js：Babel编译配置文件，用于将ES6代码转换为ES5代码。
+ jsconfig.json：编辑器的配置文件，用于提供代码提示和自动补全等功能。
+ package.json：项目的配置文件，用于描述项目的信息、依赖、脚本等。
+ README.md：项目的说明文档。
+ vue.config.js：Vue CLI的配置文件，用于配置Webpack、DevServer等。
+ yarn.lock：Yarn的锁定文件，用于锁定依赖版本，确保不同开发环境使用相同的依赖版本。

> ├── node_modules 
> ├── public
> │   ├── favicon.ico: 页签图标
> │   └── index.html: 主页面
> ├── src
> │   ├── assets: 存放静态资源
> │   │   └── logo.png
> │   │── component: 存放组件
> │   │   └── HelloWorld.vue
> │   │── App.vue: 汇总所有组件
> │   │── main.js: 入口文件
> ├── .gitignore: git版本管制忽略的配置
> ├── babel.config.js: babel的配置文件
> ├── package.json: 应用包配置文件 
> ├── README.md: 应用描述文件
> ├── yarn-lock.json：包版本控制文件

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：
   1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
   2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
   1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
   2. 获取：```this.$refs.xxx```

![image-20230405083504057](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304050836313.png)

```vue
<template>
    <div id="app">
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
//引入School组件
import SchoolInfo from './components/SchoolInfo.vue'

export default {
    name: 'App',
    components: {
        School: SchoolInfo
    },
    data() {
        return {msg: '欢迎学习Vue！'}
    },
    methods: {
        showDom() {
            //真实DOM属性
            console.log(this.$refs.title)
            //组件实例对象
            console.log(this.$refs.sch)
        }
    }
}
</script>
```

## props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

   1. 第一种方式（只接收）：```props:['name'] ```

   2. 第二种方式（限制类型）：```props:{name:String}```

   3. 第三种方式（限制类型、限制必要性、指定默认值）：

      ```js
      props:{
      	name:{
      	type:String, //类型
      	required:true, //必要性
      	default:'老王' //默认值
      	}
      }
      ```

   > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

![image-20230405085530781](https://gitee.com/lengyue_wzw/pic-go/raw/master/img/202304050855889.png)

App.vue

```vue
<template>
	<div>
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
```

Student.vue

```vue
<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',
				myAge:this.age
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
```

## mixin(混入)

1. 功能：可以把多个组件共用的配置提取成一个混入对象
2. 使用方式：
第一步定义混合：

   ```
   {
       data(){....},
       methods:{....}
       ....
   }
   ```

   第二步使用混入：

   ​	全局混入：```Vue.mixin(xxx)```
   ​	局部混入：```mixins:['xxx']	```

## 插件

1. 功能：用于增强Vue
2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
3. 定义插件：

   ```js
   对象.install = function (Vue, options) {
       // 1. 添加全局过滤器
       Vue.filter(....)
   
       // 2. 添加全局指令
       Vue.directive(....)
   
       // 3. 配置全局混入(合)
       Vue.mixin(....)
   
       // 4. 添加实例方法
       Vue.prototype.$myMethod = function () {...}
       Vue.prototype.$myProperty = xxxx
   }
   ```

4. 使用插件：```Vue.use()```

## scoped样式

1. 作用：让样式在局部生效，防止冲突。
2. 写法：```<style scoped>```

## 总结TodoList案例

1. 组件化编码流程：
   ​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
   ​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
   ​			1).一个组件在用：放在组件自身即可。
   ​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。
   ​	(3).实现交互：从绑定事件开始。
2. props适用于：
   ​	(1).父组件 ==> 子组件 通信
   ​	(2).子组件 ==> 父组件 通信（要求父先给子一个函数）
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
3. 相关API：
   1. ```xxxxxStorage.setItem('key', 'value');```
      	该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
   2. ```xxxxxStorage.getItem('person');```
      ​		该方法接受一个键名作为参数，返回键名对应的值。
   3. ```xxxxxStorage.removeItem('key');```
      ​		该方法接受一个键名作为参数，并把该键名从存储中删除。
   4. ``` xxxxxStorage.clear()```
      ​		该方法会清空存储中的所有数据。
4. 备注：
   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
   2. LocalStorage存储的内容，需要手动清除才会消失。
   3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
   4. ```JSON.parse(null)```的结果依然是null。

## 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。
3. 绑定自定义事件：
   1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```
   2. 第二种方式，在父组件中：
      ```js
      <Demo ref="demo"/>
      ......
      mounted(){
         this.$refs.xxx.$on('atguigu',this.test)
      }
      ```

3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。
4. 触发自定义事件：```this.$emit('atguigu',数据)```
5. 解绑自定义事件```this.$off('atguigu')```
6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。
7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

## 全局事件总线（GlobalEventBus）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。
2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：
   1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```
4. 最好在beforeDestory钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

## 消息订阅与发布（pubsub）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。
2. 使用步骤：
   1. 安装pubsub：```npm i pubsub-js```
   2. 引入: ```import pubsub from 'pubsub-js'```
   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```

   4. 提供数据：```pubsub.publish('xxx',数据)```
   5. 最好在beforeDestroy钩子中，用```PubSub.unsubscribe(pid)```去<span style="color:red">取消订阅。</span>

## nextTick

1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过度与动画

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 图示：

3. 写法：
   1. 准备好样式：
      - 元素进入的样式：
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
      - 元素离开的样式：
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点

   2. 使用```<transition>```包裹要过度的元素，并配置name属性：

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">你好啊！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。

## vue脚手架配置代理

### 方法一

​	在vue.config.js中添加如下配置：

```js
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：
1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

### 方法二

​	编写vue.config.js配置具体代理规则：

```js
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：
1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

## 插槽

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。
2. 分类：默认插槽、具名插槽、作用域插槽
3. 使用方式：
   1. 默认插槽：

      ```vue
      父组件中：
              <Category>
                 <div>html结构1</div>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot>插槽默认内容...</slot>
                  </div>
              </template>
      ```

   2. 具名插槽：

      ```vue
      父组件中：
              <Category>
                  <template slot="center">
                    <div>html结构1</div>
                  </template>
      
                  <template v-slot:footer>
                     <div>html结构2</div>
                  </template>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot name="center">插槽默认内容...</slot>
                     <slot name="footer">插槽默认内容...</slot>
                  </div>
              </template>
      ```

   3. 作用域插槽：
      1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
      2. 具体编码：

         ```vue
         父组件中：
         		<Category>
         			<template scope="scopeData">
         				<!-- 生成的是ul列表 -->
         				<ul>
         					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
         				</ul>
         			</template>
         		</Category>
         
         		<Category>
         			<template slot-scope="scopeData">
         				<!-- 生成的是h4标题 -->
         				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
         			</template>
         		</Category>
         子组件中：
                 <template>
                     <div>
                         <slot :games="games"></slot>
                     </div>
                 </template>
         		
                 <script>
                     export default {
                         name:'Category',
                         props:['title'],
                         //数据在子组件自身
                         data() {
                             return {
                                 games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                             }
                         },
                     }
                 </script>
         ```

   ```
   
   ```

## Vuex

### 1.概念

​		在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

### 2.何时使用？

​多个组件需要共享数据时

### 3.搭建vuex环境

1. 创建文件：```src/store/index.js```

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件
   Vue.use(Vuex)
   
   //准备actions对象——响应组件中用户的动作
   const actions = {}
   //准备mutations对象——修改state中的数据
   const mutations = {}
   //准备state对象——保存具体的数据
   const state = {}
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state
   })
   ```

2. 在```main.js```中创建vm时传入```store```配置项

   ```js
   ......
   //引入store
   import store from './store'
   ......
   
   //创建vm
   new Vue({
   	el:'#app',
   	render: h => h(App),
   	store
   })
   ```

###    4.基本使用

1. 初始化数据、配置```actions```、配置```mutations```，操作文件```store.js```

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //引用Vuex
   Vue.use(Vuex)
   
   const actions = {
       //响应组件中加的动作
   	jia(context,value){
   		// console.log('actions中的jia被调用了',miniStore,value)
   		context.commit('JIA',value)
   	},
   }
   
   const mutations = {
       //执行加
   	JIA(state,value){
   		// console.log('mutations中的JIA被调用了',state,value)
   		state.sum += value
   	}
   }
   
   //初始化数据
   const state = {
      sum:0
   }
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state,
   })
   ```

2. 组件中读取vuex中的数据：```$store.state.sum```
3. 组件中修改vuex中的数据：```$store.dispatch('action中的方法名',数据)``` 或 ```$store.commit('mutations中的方法名',数据)```

   >  备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit

### 5.getters的使用

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
2. 在```store.js```中追加```getters```配置

   ```js
   ......
   
   const getters = {
   	bigSum(state){
   		return state.sum * 10
   	}
   }
   
   //创建并暴露store
   export default new Vuex.Store({
   	......
   	getters
   })
   ```

3. 组件中读取数据：```$store.getters.bigSum```

### 6.四个map方法的使用

1. <strong>mapState方法：</strong>用于帮助我们映射```state```中的数据为计算属性

   ```js
   computed: {
       //借助mapState生成计算属性：sum、school、subject（对象写法）
        ...mapState({sum:'sum',school:'school',subject:'subject'}),
            
       //借助mapState生成计算属性：sum、school、subject（数组写法）
       ...mapState(['sum','school','subject']),
   },
   ```

2. <strong>mapGetters方法：</strong>用于帮助我们映射```getters```中的数据为计算属性

   ```js
   computed: {
       //借助mapGetters生成计算属性：bigSum（对象写法）
       ...mapGetters({bigSum:'bigSum'}),
   
       //借助mapGetters生成计算属性：bigSum（数组写法）
       ...mapGetters(['bigSum'])
   },
   ```

3. <strong>mapActions方法：</strong>用于帮助我们生成与```actions```对话的方法，即：包含```$store.dispatch(xxx)```的函数

   ```js
   methods:{
       //靠mapActions生成：incrementOdd、incrementWait（对象形式）
       ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   
       //靠mapActions生成：incrementOdd、incrementWait（数组形式）
       ...mapActions(['jiaOdd','jiaWait'])
   }
   ```

4. <strong>mapMutations方法：</strong>用于帮助我们生成与```mutations```对话的方法，即：包含```$store.commit(xxx)```的函数

   ```js
   methods:{
       //靠mapActions生成：increment、decrement（对象形式）
       ...mapMutations({increment:'JIA',decrement:'JIAN'}),
       
       //靠mapMutations生成：JIA、JIAN（对象形式）
       ...mapMutations(['JIA','JIAN']),
   }
   ```

> 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

### 7.模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。
2. 修改```store.js```

   ```javascript
   const countAbout = {
     namespaced:true,//开启命名空间
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
          return state.sum * 10
       }
     }
   }
   
   const personAbout = {
     namespaced:true,//开启命名空间
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }
   
   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 开启命名空间后，组件中读取state数据：

   ```js
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 开启命名空间后，组件中读取getters数据：

   ```js
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 开启命名空间后，组件中调用dispatch

   ```js
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 开启命名空间后，组件中调用commit

   ```js
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

 ## 路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。

### 1.基本使用

1. 安装vue-router，命令：```npm i vue-router```
2. 应用插件：```Vue.use(VueRouter)```
3. 编写router配置项:

   ```js
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
   	routes:[
   		{
   			path:'/about',
   			component:About
   		},
   		{
   			path:'/home',
   			component:Home
   		}
   	]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（active-class可配置高亮样式）

   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

### 2.几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

### 3.多级路由（多级路由）

1. 配置路由规则，使用children配置项：

   ```js
   routes:[
   	{
   		path:'/about',
   		component:About,
   	},
   	{
   		path:'/home',
   		component:Home,
   		children:[ //通过children配置子级路由
   			{
   				path:'news', //此处一定不要写：/news
   				component:News
   			},
   			{
   				path:'message',//此处一定不要写：/message
   				component:Message
   			}
   		]
   	}
   ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```

### 4.路由的query参数

1. 传递参数

   ```vue
   <!-- 跳转并携带query参数，to的字符串写法 -->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
   				
   <!-- 跳转并携带query参数，to的对象写法 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
           title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```

### 5.命名路由

1. 作用：可以简化路由的跳转。
2. 如何使用
   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                        name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
               title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```

### 6.路由的params参数

1. 配置路由，声明接收params参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', //使用占位符声明接收params参数
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>
   				
   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
            title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

   > 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

### 7.路由的props配置

​	作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

### 8.```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```

### 9.编程式路由导航

1. 作用：不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活
2. 具体编码：

   ```js
   //$router的两个API
   this.$router.push({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   
   this.$router.replace({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   this.$router.forward() //前进
   this.$router.back() //后退
   this.$router.go() //可前进也可后退
   ```

### 10.缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁。
2. 具体编码：

   ```vue
   <keep-alive include="News"> 
       <router-view></router-view>
   </keep-alive>
   ```

### 11.两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
   1. ```activated```路由组件被激活时触发。
   2. ```deactivated```路由组件失活时触发。

### 12.路由守卫

1. 作用：对路由进行权限控制
2. 分类：全局守卫、独享守卫、组件内守卫
3. 全局守卫:

   ```js
   //全局前置守卫：初始化时执行、每次路由切换前执行
   router.beforeEach((to,from,next)=>{
   	console.log('beforeEach',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
   			next() //放行
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next() //放行
   	}
   })
   
   //全局后置守卫：初始化时执行、每次路由切换后执行
   router.afterEach((to,from)=>{
   	console.log('afterEach',to,from)
   	if(to.meta.title){ 
   		document.title = to.meta.title //修改网页的title
   	}else{
   		document.title = 'vue_test'
   	}
   })
   ```

4. 独享守卫:

   ```js
   beforeEnter(to,from,next){
   	console.log('beforeEnter',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){
   			next()
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next()
   	}
   }
   ```

5. 组件内守卫：

   ```js
   //进入守卫：通过路由规则，进入该组件时被调用
   beforeRouteEnter (to, from, next) {
   },
   //离开守卫：通过路由规则，离开该组件时被调用
   beforeRouteLeave (to, from, next) {
   }
   ```

### 13.路由器的两种工作模式

1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
   1. 地址中永远带着#号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。

4. history模式：
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
