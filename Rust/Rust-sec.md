---
title: Rust
editLink: true
---

# 本篇为[Rust](https://www.rust-lang.org/zh-CN/)学习详细章节

## 为什么使用Rust？
- Rust是一种令人兴奋的新编程语言，可以让每个人编写可靠且高效。
- 可以用来替代C/C++，Rust和它们具有相同的性能，但是很多常见的bug在编译时就可以被消灭。
- Rust是一种通用的编程语言，但是它更善于以下场景：

    --**需要运行时的速度**

    --**需要内存安全**

    --**更好的利用多处理器**

## 与其他语言比较
- C/C++性能非常好，但类型系统和内存都不太安全。
- Java/C#，拥有[GC](https://blog.csdn.net/u013201439/article/details/80300047)，能保证内存安全，也有很多优秀特性，但是性能不行。
- Rust：

    --**安全**

    --**无需GC**

    --**易于维护、调试，代码安全高效**

## Rust特别擅长的领域
- 高性能 Web Service
- WebAssembly
- 命令行工具
- 网络编程
- 嵌入式设备
- 系统编程

## Rust用户和案例
- Google：新操作系统Fuschia，其中Rust代码量大约占30%
- Amazon：基于Linux开发的直接可以在裸机、虚拟机上运行容器的操作系统
- System76：纯Rust开发了下一代安全操作系统Redox
- 蚂蚁金服：库操作系统Occlum
- 斯坦福和密歇根大学：嵌入式实时操作系统，应用于Google的加密产品
- 微软：正在使用Rust重写Windows系统中的一些低级组件
- 微软：WinRT/Rust项目
- Dropbox、Yelp、Coursera、LINE、Cloudflare、Aflassian、npm、Ceph、百度、华为、Sentry、Deno...

## 一个简单的Rust程序
- 程序文件后缀名：rs
- 例子：hello_world.rs:
```shell
fn main(){
  println!("Hello World");
}
```
## 编译与运行Rust程序
- 编译：rustc main.rs
- 运行：

  -Windows：.\main.rs

  -Linux/mac：./main
```shell
PS D:\code\Rust\hello_world> rustc hello_world.rs
PS D:\code\Rust\hello_world> .\hello_world.exe
Hello World
```
### 编译和运行是单独的两步
- 运行Rust程序之前必须先编译，命令为：rustc 源文件名
- 编译成功后，会生成一个二进制文件

  -在Windows上还会生成一个.pdb文件，里面包含调试信息
- Rust是ahead-of-time编译的语言

  -可以先编译程序，然后把可执行文件交给别人运行（无需安装Rust）
- rustc只适合简单的Rust程序...

## Rust程序解剖
- 定义函数：fn main(){}

  -没有参数，没有返回
- main函数很特别：它是每个Rust可执行程序最先运行的代码
- 打印文本：println!("Hello World!");

  -Rust的缩进是**4个空格**而不是tab

  -println！是一个Rust macro（宏）*如果是函数的话，就没有！
- "Hello World"是字符串，它是println！的参数
- 这行代码以;结尾

## Cargo
- Cargo是Rust的构建系统和包管理工具

  -构建代码、下载依赖的库、构建这些库...
- 安装Rust时会自动安装Cargo

  -可以使用cargo --version查看

## 使用Cargo创建项目
- 创建项目：cargo new hello_cargo

  -项目名称也是hello_cargo

  -会创建一个新的目录hello_cargo

  - Cargo.toml
  - src目录

    - main.rs
  - 初始化了一个新的Git仓库， .gitignore

    - 可以使用其他的VCS或不使用VCS：cargo new 的时候使用 --vcs这个flag

### Cargo.toml
```shell
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["xxxx"]
edition = "2021"

[dependencies]
```
- TOML(Tom's Obvious,Minimal Language)格式，是Cargo的配置格式
- [package]，是一个区域标题，表示下方内容是用来配置包（package）的

  -name，项目名

  -version，项目版本

  -authors，项目作者

  -edition，使用的Rust版本
- [dependencies]，另一个区域的开始，它会列出项目的依赖项。
- 在Rust里面，代码的包称作crate。

### src/main.rs
- cargo生成的main.rs在src目录下
- 而Cargo.toml在项目顶层下
- 源代码都应该在src目录下
- 顶层目录可以放置：README、许可信息、配置文件和其他与程序源码无关的文件
- 如果创建项目时没有使用cargo，也可以把项目转化为使用cargo：

  -把源代码文件移动到src下

  -创建Cargo.toml并填写相应的配置

## 构建Cargo项目，cargo build
- cargo build

-创建可执行文件：
```shell
"Linux系统":target/debug/hello_cargo
"Windows系统":target\debug\hello_cargo.exe
```
-运行可执行文件：
```shell
"Linux系统":./target/debug/hello_cargo
"Windows系统":.\target\debug\hello_cargo.exe
```
- 第一次运行cargo build会在顶层目录生成cargo.lock文件

  -该文件负责追踪项目依赖的精确版本

  -不需要手动修改该文件

## 构建并运行cargo项目，cargo run
- cargo run，编译代码+执行结果

  -如果之前编译成功过，并且源码没有改变，那么就会直接运行二进制文件

## cargo check
- cargo check，检查代码，确保能通过编译，但是不产生任何可执行文件
- cargo check 要比cargo build 快得多

  -编写代码的时候可以连续反复的使用cargo check检查代码，提高效率

## 为发布构建
- cargo build --release

  编译时会进行优化

    - 代码会运行的更快，但是编译时间更长

  -会在target/release而不是target/debug生成可执行文件
- 两种配置：

  -一个开发

  -一个正式发布