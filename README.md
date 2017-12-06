根据金数据表单提交结果进行随机抽奖的抽奖系统
-------------------------------------

# 环境准备
* **git** 用于获取代码并进行版本控制
* **Node.js** server的运行环境
* **npm** 依赖管理
* **ngrok** 将本地端口暴露在公网的工具

# 如何运行
1. 克隆本项目到本地`git clone https://github.com/tianbiao/lucky-draw-demo.git`
2. 进入项目根目录并下载依赖`cd LuckyDrawForTechRadar`和`npm install`
3. 运行系统`node index.js`,使用浏览器访问网址[http://localhost:3000/](http://localhost:3000/)

# 如何将本地端口暴露在公网
将本地3000端口暴露在公网
```
ngrok http 3000
```

# 如何实时获取金数据表单内容

