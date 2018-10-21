"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
var CourseTong = /** @class */ (function () {
    function CourseTong(id, courseName, images, content, classNum, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.content = content;
        this.classNum = classNum;
        this.person = person;
    }
    return CourseTong;
}());
var Community = /** @class */ (function () {
    function Community(id, photo, images, note, name, content, person, time, read, pingLun) {
        this.id = id;
        this.photo = photo;
        this.images = images;
        this.note = note;
        this.name = name;
        this.content = content;
        this.person = person;
        this.time = time;
        this.read = read;
        this.pingLun = pingLun;
    }
    return Community;
}());
var TongzhiTail = /** @class */ (function () {
    function TongzhiTail(id, name, task, person, num, taskName, photo, teacherName, time, dys, wwc, yys, grade, zt) {
        this.id = id;
        this.name = name;
        this.task = task;
        this.person = person;
        this.num = num;
        this.taskName = taskName;
        this.photo = photo;
        this.teacherName = teacherName;
        this.time = time;
        this.dys = dys;
        this.wwc = wwc;
        this.yys = yys;
        this.grade = grade;
        this.zt = zt;
    }
    return TongzhiTail;
}());
var course = [
    new Course(1, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 80, 90),
    new Course(2, '2017级软件测试基础', "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130", 79, 100),
    new Course(3, 'web(二)开发', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 20, 100),
    new Course(4, '测试方向', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 23, 96),
    new Course(5, 'HTML', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 67, 106),
    new Course(6, '2017级数据结构', "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130", 7, 200),
    new Course(7, '2018级信息素养实践', "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130", 0, 12),
    new Course(8, '2018级计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 1, 298),
    
];
var courseTong = [
    new CourseTong(1, "Github 开源之旅视频课程第一季：启程", "assets/image/git.png", "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ", 12, 3736),
    new CourseTong(2, "css3基础", "assets/image/css3.png", "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性.", 12, 2316),
    new CourseTong(3, "HTML5基础", "assets/image/html.png", "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。", 12, 1311),
    new CourseTong(4, "Selenium IDE WEB自动化测试入门视频课程（中）", "assets/image/text.png", "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。", 12, 3794),
    new CourseTong(5, "扩展的ICONIX软件过程实践", "assets/image/iconix.png", "ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。", 12, 2269),
    new CourseTong(6, "Selenium IDE WEB自动化测试入门视频课程 上", "assets/image/selenium.png", "       上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。", 11, 3131),
    new CourseTong(7, "网页制作与开发", "assets/image/dw.png", "本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。", 42, 1727),
    new CourseTong(8, "产品&交互设计那些事儿", "assets/image/chanpin.png", " 本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。", 5, 1084),
];
var community = [
    new Community(1, "assets/image/pho.png", "assets/image/c1.png", "assets/image/note.png", "WEB开发（二）——函数", "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一", "刘秀梅", "2018-10-11 15:18", 1243, 3),
    new Community(2, "assets/image/pho.png", "assets/image/c2.png", "assets/image/note.png", "类定义关键字详解", "JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就", "3-张馨元", "2018-10-9 19:21", 49, 0),
    new Community(3, "assets/image/pho.png", "assets/image/c3.png", "assets/image/note.png", " 一个java文件中可包含多个main方法", "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只", "3-张馨元", "2018-10-9 19:17", 36, 3),
    new Community(4, "assets/image/pho.png", "assets/image/c4.png", "assets/image/note.png", "数据结构——线性表的经典应用", "队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到hel", "张伟彬", "2018-10-8 14:17", 45, 3),
];
var tongzhiTail = [
    new TongzhiTail(1, "2016级混合应用开发", 2, 91, "一", "组件交互与服务", "assets/image/photo.png", "刘冠军", "2018-09-20 16:34", 76, 7, 7, 10, "已截止"),
    new TongzhiTail(2, "2017级软件测试基础", 3, 102, "一", "软件测试基本概念", "assets/image/photo.png", "刘兴梅", "2018-09-14 16:34", 0, 0, 100, 5, "已截止"),
    new TongzhiTail(3, "web(二)开发", 3, 399, "一", "WEB发布任务01", "assets/image/photo.png", "刘冠军", "2018-09-10 14:34", 0, 6, 387, 5, "已截止"),
    new TongzhiTail(4, "测试方向", 3, 52, "一", "测试计划书写联系", "assets/image/photo.png", "刘兴梅", "2018-09-12 10:34", 0, 5, 46, 10, "已截止"),
    new TongzhiTail(5, "HTML", 5, 91, "一", "HTML标签及特性", "assets/image/photo.png", "刘孟祎", "2018-09-14 16:34", 69, 4, 17, 5, "已截止"),
    new TongzhiTail(6, "2017级数据结构", 4, 401, "一", "数据结构-任务01", "assets/image/photo.png", "杨伟宾", "2018-09-20 16:34", 0, 3, 390, 3, "已截止"),
    new TongzhiTail(7, "2018级信息素养实践", 0, 12, "", "组件交互与服务", "assets/image/photo.png", "刘冠军", "2018-09-20 16:34", 76, 7, 7, 10, "已截止"),
    new TongzhiTail(8, "2018级计算机导论", 1, 306, "一", "计算机导论-任务01", "assets/image/photo.png", "蕾蕾", "2018-09-30 16:34", 143, 1, 247, 10, "已截止"),
   
];
// app.get('/api',(req,res)=>{
//     res.json(course);
// });
app.get('/api/course', function (req, res) {
    res.end(JSON.stringify(course));
});
app.get('/api/course/:id', function (req, res) {
    res.json(course.filter(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    res.json(course);
});
app.get('/api/courseTong', function (req, res) {
    res.end(JSON.stringify(courseTong));
});
app.get('/api/courseTong/:id', function (req, res) {
    res.json(courseTong.filter(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    res.json(courseTong);
});
app.get('/api/community', function (req, res) {
    res.end(JSON.stringify(community));
});
app.get('/api/community/:id', function (req, res) {
    res.json(community.filter(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    res.json(community);
});
app.get('/api/tongzhiTail', function (req, res) {
    res.end(JSON.stringify(tongzhiTail));
});
app.get('/api/tongzhiTail/:id', function (req, res) {
    res.json(tongzhiTail.filter(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    res.json(tongzhiTail);
});
app.listen(8080);
