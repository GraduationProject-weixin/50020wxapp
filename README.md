# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50020wxapp订餐系统设计与实现

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)](https://www.bilibili.com/video/BV1BPtKekEv3?p=24)


# 系统概述
## 1.1 概述
随着信息时代的快速发展，互联网的优势和普及，人们生活水平的不断提高，工作时间的繁忙，使得订餐小程序的开发成为必需。订餐小程序主要是借助计算机，通过对订餐小程序管理所需的信息管理，增加用户的选择，同时也方便广大用户信息的及时查询、修改以及对订餐小程序信息的及时了解。订餐小程序给用户带来了更多的选择, 该系统通过和数据库软件协作来满足用户的需求。
## 1.2课题意义
如今，随着移动用户的普及，微信因为其简单，方便，并且用户体验度好，所以被称为现在聊天沟通的新宠，同时也被应用到更多的商家做宣传推广。截至2017年底，微信用户数突破10亿，包括银行、证券、快递服务、电子商务等越来越多的公司在微信平台上推出相应的服务平台，以适应用户新的行为习惯。微信平台的科研社交网络平台已是势在必行。计算机技术在现代管理中的应用，使计算机成为人们应用现代技术的重要工具。能够有效的解决用户管理便捷化的问题，提高效率。给用户提供最全面、最专业的数据管理信息，帮助他们了解最新详细信息，还有就是借助微信端，能够更好的满足用户的需求，为用户节省时间以达到省时又高效的目的。
## 1.3 主要内容
订餐小程序从功能、数据流程、可行性、运行环境进行需求分析。对订餐小程序的数据库、功能进行了详细设计，分析了主要界面设计和相关组件设计，订餐小程序的具体实现进行了介绍。从数据库中获取数据、向数据库中写入数据，实现系统直接对数据库进行各种数据库查询、插入、删除、更新等操作，在网页中加入动态内容，从而实现订餐小程序所需要的各种基本功能。


# 2 系统开发环境
## 2.1微信开发者工具
微信开发者工具现在已经被小程序开发团队开发运行，目前微信开发者工具任然在不断的完善中，在开发小程序时经常要不断的更新。可以使用微信扫码登陆开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试。

机型选择：小程序以智能手机的屏幕尺寸为设计标准，进行切图。

预览界面：写好视图布局后点击编译，用来刷新视图界面。

控制台：方便调试打印输出信息。

上传代码：上传到腾讯服务器，提交审核必经步骤。上传代码时可以填写版本号和备注信息。

资源文件：一般可以在资源文件进行对应项目的文件目录的断点调试。

显示远程调试：手机端和PC端开发工具联调对用户而言是非常实用的。

本地数据存储：显示的是本地存储的数据。

视图调试：标组件以子父层级结构呈现，方便调试。

微信限制在2M 以内的代码体积；开发中一般不校验合法域名信息；小程序后台要做配置服务器域名。

以上就是在开发过程中微信开发者工具常用到的功能，微信开发者工具也在不断的完善。
## 2.2小程序框架以及目录结构介绍
整个小程序框架系统分为两部分：[逻辑层](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/)和[视图层](https://developers.weixin.qq.com/miniprogram/dev/framework/view/)。小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生小程序体验的服务。小程序在视图层与逻辑层间提供了数据传输和事件系统，提供了自己的视图层以及逻辑层框架，让开发者能够专注于数据与逻辑。框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。在逻辑层做数据修改，在视图层就会做相应的更新。框架提供了一套基础的组件，这些组件自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的小程序 。
## 2.3 JAVA简介
Java主要采用CORBA技术和安全模型，可以在互联网应用的数据保护。它还提供了对EJB（Enterprise JavaBeans）的全面支持，java servlet API，JSP（java server pages），和XML技术。多进步。例如，当我在微软Word中写这篇文章时，我还打开了一个MP3播放器来播放音乐。偶尔，我也会编辑Word，让配送信息管理机器执行打印作业，我也喜欢通过IE。对我来说，这些操作是同时执行的，我不需要等待一首歌来完成配送信息管理论文编辑。似乎他们都在配送信息管理机器上同时为我工作。事实是，对于一个CPU，它只能在某个时间点执行一个程序。CPU在这些程序之间不断地“跳跃”。那么为什么我们看不到任何破坏呢？这是因为，与我们的感情相比，它的速度太快了。因此，尽管我们看到一些同步操作，实际上对于计算机来说，它只能在某个时间点执行一个程序，除非您的计算机是多CPU的。

Java是一种计算机编程语言，具有封装、继承和多态性三个主要特性，广泛应用于商家Web应用程序开发和移动应用程序开发。

Java语言和一般编译器以及直译的区别在于，Java首先将源代码转换为字节码，然后将其转换为JVM的可执行文件，JVM可以在各种不同的JVM上运行。因此，实现了它的跨平台特性。虽然这使得Java在早期非常缓慢，但是随着Java的开发，它已经得到了明显改进。

## 2.4 MySQL数据库
Mysql的语言是非结构化的，用户可以在数据上进行工作。MySQL因为其速度、可靠性和适应性而备受关注。大多数人都认为在不需要[事务](https://baike.baidu.com/item/%E4%BA%8B%E5%8A%A1)化处理的情况下，MySQL是管理内容最好的选择。并且因为Mysql的语言和结构比较简单，但是功能和存储信息量很强大，所以得到了普遍的应用。

Mysql数据库在编程过程中的作用是很广泛的，为用户进行数据查询带来了方便。Mysql数据库的应用因其灵活性强，功能强大，所以在实现某功能时只需要一小段代码，而不像其他程序需要编写大段代码。总体来说，Mysql数据库的语言相对要简洁很多。 

数据流程分析主要就是数据存储的储藏室，它是在计算机上进行的，而不是现实中的储藏室。数据的存放是按固定格式，而不是无序的，其定义就是：长期有固定格式，可以共享的存储在计算机存储器上。数据库管理主要是数据存储、修改和增加以及数据表的建立。为了保证系统数据的正常运行，一些有能力的处理者可以进行管理而不需要专业的人来处理。数据表的建立，可以对数据表中的数据进行调整，数据的重新组合及重新构造，保证数据的安全性。介于数据库的功能强大等特点，本系统的开发主要应用了Mysql进行对数据的管理。

## 2.5 SSM三大框架
1.Spring的优势:
通过Spring的IOC特性，将对象之间的依赖关系交给了Spring控制，方便解耦，简化了开发。

2.Spring MVC的优势:
SpringMVC是使用了MVC设计思想的轻量级web框架，对web层进行解耦，使我们的开发更简洁。

3.Mybatis的优势:

数据库的操作(sql)采用xml文件配置，解除了sql和代码的耦合，提供映射标签，支持对象和和数据库orm字段关系的映射，支持对象关系映射标签，支持对象关系的组建提供了xml标签，支持动态的sql。

10

# 3 需求分析
3.1 系统设计目标

当今社会的生活节奏越来越快，人们对手机微信的需求也越来越高，不仅对操作简单、功能齐全方面，而且对于用户的体验度也有了更高的要求，最快捷高效的方式莫过于利用互联网，将订餐小程序和互联网结合起来，为用户提供方便快捷的服务。

需求分析的任务是通过详细调查现实要处理的对象，充分了解系统的工作概况，明确用户的各种需求，然后在此基础上确定新系统的功能。新系统必须充分考虑今后可能的扩充和改变。

3.2需求分析概述

订餐小程序主要是为了提高用户的工作效率和更方便快捷的满足用户，更好存储所有数据信息及快速方便的检索功能，对订餐小程序的各个模块是通过许多今天的发达订餐小程序做出合理的分析来确定考虑用户的可操作性，遵循开发的系统优化的原则，经过全面的调查和研究。

订餐小程序所要实现的功能分析，对于现在网络方便，订餐小程序要实现管理员、用户可以直接在平台上进行查看自己所需数据信息，这样既能节省管理的时间，不用再像传统的方式，如果用户想要进行交流信息，必须双方见面进行沟通交流所需的信息，由于很多用户时间的原因，没有办法进行见面沟通交流，真的很难满足用户的各种需求。所以订餐小程序的开发不仅仅是能满足用户的需求，还能提高用户的使用率。所以系统管理必须要更快捷、有效、长期地为用户或潜在用户传递信息。建立一个订餐小程序更好的交流平台，提高系统对用户交流后的信息服务的效率。此系统可以满足大多数用户所提出的问题，用户可以根据自身的需求获取相应的服务，为系统管理提供了快捷的途径。

订餐小程序用户端要求在系统的安卓手机上可以运行，主要实现了线上订餐和配送等相关信息的查看，并且根据需求进行对管理服务端；首页、个人中心、用户管理、菜品分类管理、菜品信息管理、订单信息管理、配送信息管理、菜品评价管理、订单投诉管理、系统管理，用户微信端；首页、菜品信息、菜品资讯、我的（个人信息、菜品信息、订单信息、配送信息、菜品评价、订单投诉、我的收藏管理、客服）等主要功能模块的操作和管理。

总体分布如图3.1所示：

` `![](/md/blog.003.png)

3.1  总体功能需求图

系统实现给用户展示的界面与该对象是面对面的，包括是否允许用户简单，方便使用，该请求的响应时间，对整体质量的主图像，整体的布局的质量。

3.3 系统可行性分析 

技术可行性：

（1）硬件可行性分析

系统的硬件要求方面不存在特殊的要求，只需要在普通的硬件配置就能够轻松的实现，只是需要确保系统的正常工作即可，以及拥有较高的效率。如果有特别低的硬件，它可以导致系统的低性能以及效率低，从而导致整个网站的运行不顺畅。以目前普遍的个人计算机的配置而言，这是十分容易实现的 。因此，本系统的开发在硬件方面是可行的。

提供完整的技术支持和保护，确保网站的稳定，安全运行，提供24×7和24小时技术支持项目完成提供主要的服务器系统安全及时的通知和更新服务。

（2）软件可行性分析

提供一个共同的机制类似的借口动态模型，设计更集中。此外，代码复用，也可以很好的体现。因此，考虑到系统的实际情况，选择小程序作为本系统开发技术。通过上述分析，该系统的设计实现在软件方面是可行的。

因此，我们进行了两个方面的可行性研究，可以看出，该系统的开发是没有问题的。
## 3.4经济可行性
系统是基于小程序语言开发的软件，所以系统在开发人力、财力要求不高，具有经济可行性。
## 3.5操作可行性： 
本订餐小程序采用java语言，利用网络就能够进行访问和操作，且界面简单易操作，用户只要平时有在用智能手机并连接到网络，都能进行访问和操作。

本订餐小程序具有易操作、易管理、交互性好的特点，在操作上是非常简单的。因此本系统可以进行开发。
## 3.6系统流程和逻辑
系统业务流程图如图所示：

![](/md/blog.004.png)

图3-1登录流程图

![](/md/blog.005.png) 

图3-2添加信息流程图

![](/md/blog.006.png) 

图3-3注册信息流程图


# 4系统概要设计
## 4.1 概述
本系统基于Web服务模式，是一个适用于Internet环境下的模型结构。只要用户能连上Internet,便可以在任何时间、任何地点使用。系统工作原理图如图4-1所示：

![](/md/blog.007.png)

图4-1  系统工作原理图
## 4.2 系统结构
本系统架构网站，本系统的具体功能如下：

订餐系统小程序

用户登录

密码正确

管理员服务端

用户微信端


![](/md/blog.008.png)![](/md/blog.009.png)![](/md/blog.009.png)

图4-2系统功能结构图

系统结构图，如图4-4所示：

![](/md/blog.010.png)

图4-4：系统结构图
## 4.3. 数据库设计
### 4.3.1 数据库实体
管理员信息属性图如图4-5所示。

![](/md/blog.011.png)

` `图4-5 管理员信息实体属性图

用户信息：用户名、密码、姓名、性别、头像、手机、邮箱、联系电话实体属性图如图4-6所示。

![](/md/blog.012.png)

图4-6用户信息实体属性图

菜品信息：菜品名称、菜品分类、图片、菜品价格、材料、分量实体属性图如图4-7所示。

![](/md/blog.013.png)

图4-7菜品信息实体属性图

### 4.3.2 数据库设计表
此系统需要后台数据库，下面介绍数据库中的各个表的详细信息。

allusers表:

|序号|字段名称|字段类型|大小|允许为空|最大长度|备注|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|Int|4||10||
|2|username||150||255||
|3|pwd||150||255||
|4|cx||150||255||
|5|addtime|DateTime|8||19||

caipinpingjia表:

|序号|字段名称|字段类型|大小|允许为空|最大长度|备注|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|Int|4||10||
|2|addtime||150||255||
|3|dingdanbianhao||150||255||
|4|caipinmingcheng|DateTime|8||255||
|5|caipinfenlei||150||255||
|6|kouwei|DateTime|8||255||
|7|baozhuang||150||255||
|8|pingjianeirong|DateTime|8||255||
|9|tianjiatupian||150||255||
||yonghuming|DateTime|8||255||

caipinxinxi表:

|序号|字段名称|字段类型|大小|允许为空|最大长度|备注|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|Int|4||10||
|2|addtime||150||255||
|3|caipinmingcheng||150||255||
|4|caipinfenlei|DateTime|8||255||
|5|tupian||150||255||
|6|caipinjiage|DateTime|8||255||
|7|cailiao||150||255||
|8|fenliang|DateTime|8||255||
|9|caipinjieshao||150||255||

dingdantousu表:

|序号|字段名称|字段类型|大小|允许为空|最大长度|备注|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|Int|4||10||
|2|addtime||150||255||
|4|dingdanbianhao||150||255||
|5|caipinmingcheng||150||255||
|6|caipinfenlei|DateTime|8||||
|7|tupian|||8|||
|8|xiadanshuliang|DateTime|8||255||
|9|zongjine||||||
|10|tousuneirong|DateTime|8||255||
|11|`	`tousushijian||||||
|12|yonghuming|DateTime|8||255||

yonghu表:

|序号|字段名称|字段类型|大小|允许为空|最大长度|备注|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|Int|4||10||
|2|addtime||150||255||
|4|yonghuming||150||255||
|5|mima||150||255||
|6|xingming|DateTime|8||||
|7|xingbie|DateTime|||||
|8|touxiang||||||
|9|lianxidianhua||DateTime|8|||


# 5系统详细设计
本系统使用了微信开发者结合java和mysql结合的结构开发了订餐小程序应用，系统中所有和数据库有关系的操作都通过一个通用类来实现，大大提高了代码的耦合性，当数据库类型等信息变化后直接修改类文件就可以了，不再需要每个页面都修改。另外本系统解决了中文的问题，也是在配置文件中添加了编码方式的形式解决的，本系统另外一个大的特点是系统对数据库的操作都单独的写在了一个类里，这样对系统的所有数据库操作都只访问这个类就可以了，不要每个页面都去写数据库的操作，提高了系统的集成性。
## 5.1用户微信端功能模块
首页，在订餐小程序页面用户查看首页、菜品信息、菜品资讯、我的等信息，如图5-1所示。

![](/md/blog.014.png)

图5-1首页界面图

用户注册、登录，在注册页面填写用户名、密码、姓名、性别、手机、邮箱、联系电话进行注册，信息无误进行登陆，如图5-2所示。


![](/md/blog.015.png)

![](/md/blog.016.png)

图5-2注册、登录界面图




我的,在我的页面进行查看个人信息、菜品信息、订单信息、配送信息、菜品评价、订单投诉、我的收藏管理、客服等内容，如图5-3所示。

![](/md/blog.017.png)

图5-3我的界面图

用户信息，在用户个人信息页面可以查看编辑用户名、密码、姓名、性别、头像、手机、邮箱、联系电话查看，可进行添加、修改、删除操作，如图5-4所示。

![](/md/blog.018.png)

图5-4个人信息界面图

菜品信息，用户在菜品信息信息页面可以进行搜索、下单、收藏、评论、购买、支付操作，如图5-5所示。

![](/md/blog.019.png)

图5-5菜品信息界面图

![](/md/blog.020.png)

## 5.2管理员服务端功能界面

管理员通过填写账号、密码、角色进行登录如图5-6所示。

![](/md/blog.021.png)

图5.6管理员登录界面图

用户管理，管理员在用户页面可进行查看编辑用户名、密码、姓名、性别、头像、手机、邮箱、联系电话等，并进行查看详情、修改、删除操作，如图5-7所示。

![](/md/blog.022.png)

图5.7用户管理界面图

菜品信息管理，管理员在菜品信息页面查看菜品名称、菜品分类、图片、菜品价格、材料、分量等，可进行添加、修改、收藏操作，如图5-8所示。

![](/md/blog.023.png)

图5-8菜品信息界面图



配送信息管理，管理员通过配送信息页面查看配送详情进行审核查看添加、修改、删除操，如图5-9所示。

![](/md/blog.024.png)

图5-9配送信息界面图

菜品评价管理，管理员通过菜品评价页面查看评价详情进行审核查看添加、修改、删除操，如图5-10所示。

![](/md/blog.025.png)

图5-10菜品评价界面图



` `系统管理，管理员通过系统管理页面查看轮播图、菜品资讯、客服管理等进行发布菜品资讯、上传图片、客服回复，进行添加、删除、修改以及查看并对整个系统进行维护等操作，如图5-11所示。


![](/md/blog.026.png)

![](/md/blog.027.png)

![](/md/blog.028.png)


图5-11系统管理如图所示。















