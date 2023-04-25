import{_ as a,o as t,c as i,O as e}from"./chunks/framework.83fefa50.js";const o="/huuublog.github.io/assets/JDK.db87c631.png",l="/huuublog.github.io/assets/JavaTheory.64268671.png",s="/huuublog.github.io/assets/Annotation1.f5b40961.png",r="/huuublog.github.io/assets/Annotation2.ce70e450.png",n="/huuublog.github.io/assets/ZiMianLiang.a911b146.png",h="/huuublog.github.io/assets/BianLiang.6dc796a5.png",u="/huuublog.github.io/assets/BianLiangNotice.238f51dd.png",c="/huuublog.github.io/assets/BianLiangTransfer.9004f3a5.png",p="/huuublog.github.io/assets/DataType.45becba2.png",k=JSON.parse('{"title":"Java","description":"","frontmatter":{"title":"Java","editLink":true},"headers":[],"relativePath":"Java/Java-sec.md"}'),g={name:"Java/Java-sec.md"},b=e('<h1 id="本篇为java学习详细章节" tabindex="-1">本篇为Java学习详细章节 <a class="header-anchor" href="#本篇为java学习详细章节" aria-label="Permalink to &quot;本篇为Java学习详细章节&quot;">​</a></h1><h2 id="第一章-java快速入门" tabindex="-1">第一章：Java快速入门 <a class="header-anchor" href="#第一章-java快速入门" aria-label="Permalink to &quot;第一章：Java快速入门&quot;">​</a></h2><h3 id="第一节-jdk的组成" tabindex="-1">第一节：JDK的组成 <a class="header-anchor" href="#第一节-jdk的组成" aria-label="Permalink to &quot;第一节：JDK的组成&quot;">​</a></h3><img src="'+o+'" alt=""><ul><li>JVM（Java Virtual Machine）：Java虚拟机，真正运行Java程序的地方。</li><li>核心类库：Java自己写好的程序，给程序员自己的程序调用的。</li><li>JRE（Java Runtime Environment）：Java的运行环境。</li><li>JDK（Java Development Kit）：Java开发工具包（包括上面所有）。</li></ul><h3 id="第二节-java的跨平台、工作原理" tabindex="-1">第二节：Java的跨平台、工作原理 <a class="header-anchor" href="#第二节-java的跨平台、工作原理" aria-label="Permalink to &quot;第二节：Java的跨平台、工作原理&quot;">​</a></h3><ul><li>Java一次编译，处处可用</li><li>我们的程序只需要开发一次，就可以在各种安装了JVM的系统平台上运行。</li><li>但运行必须装jvm 且版本要更高</li><li>Java对标c++确实可以 c++在什么系统下编的就只能在什么系统用</li><li>python和js 不用编译 到处运行</li><li>go 交叉编译 脱离环境运行 <img src="'+l+'" alt=""></li></ul><h3 id="第三节-path与java-home环境变量" tabindex="-1">第三节：Path与JAVA_HOME环境变量 <a class="header-anchor" href="#第三节-path与java-home环境变量" aria-label="Permalink to &quot;第三节：Path与JAVA_HOME环境变量&quot;">​</a></h3><ul><li>Path环境变量用于记住程序路径，方便在命令窗口的任意目录启动程序。</li><li>JAVA_HOME：告诉操作系统JDK安装在了哪个位置（将来其他技术要通过这个环境变量找JDK）</li></ul><h2 id="第二章-java基础语法" tabindex="-1">第二章：Java基础语法 <a class="header-anchor" href="#第二章-java基础语法" aria-label="Permalink to &quot;第二章：Java基础语法&quot;">​</a></h2><h3 id="第一节-注释" tabindex="-1">第一节：注释 <a class="header-anchor" href="#第一节-注释" aria-label="Permalink to &quot;第一节：注释&quot;">​</a></h3><p><code>一定要养成写注释的好习惯！</code></p><img src="'+s+'" alt=""><img src="'+r+'" alt=""><h3 id="第二节-字面量与变量" tabindex="-1">第二节：字面量与变量 <a class="header-anchor" href="#第二节-字面量与变量" aria-label="Permalink to &quot;第二节：字面量与变量&quot;">​</a></h3><ul><li><p>计算机是用来处理数据的，<strong>字面量</strong>就是告诉程序员：<strong>数据在程序中的书写格式</strong>。 <img src="'+n+'" alt=""></p></li><li><p>变量就是用来存储一个数据的内存区域（可以理解为盒子）且里面存储的数据可以变化。</p></li><li><p>变量定义的格式: <img src="'+h+'"></p></li></ul><p><strong>变量使用注意事项</strong><img src="'+u+'" alt=""></p><p><strong>变量在计算机中的底层原理</strong></p><ul><li><p>二进制</p><p>*只有0，1，按照逢2进1的方式表示数据。</p></li><li><p>十进制转化为二进制方法</p><p>*除二取余法</p><p>*Java程序中支持书写二进制、八进制、十六进制的数据，分别需要以0B或者0b、0、0X或者0x开头。</p></li><li><p>计算机中的数据的最小单位</p><p>*计算机最小的组成单元是：使用8个二进制位为一组，来保存数据，我们称之为一个字节（byte，简称B）。</p><p>*数据单位：</p><img src="'+c+'" alt=""><p>*其中的每个二进制位称之为一位（bit，简称b），1byte=8bit 简写 1B=8b。</p></li></ul><h3 id="第三节-数据类型及关键字、标识符" tabindex="-1">第三节：数据类型及关键字、标识符 <a class="header-anchor" href="#第三节-数据类型及关键字、标识符" aria-label="Permalink to &quot;第三节：数据类型及关键字、标识符&quot;">​</a></h3><img src="'+p+'" alt="">',21),d=[b];function _(v,m,J,f,q,P){return t(),i("div",null,d)}const x=a(g,[["render",_]]);export{k as __pageData,x as default};