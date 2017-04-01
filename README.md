# React+Redux+ES6+React-router 脚手架

## 开始

	npm install 安装依赖
	
	npm start 开始



## 功能

	编译ES6,Scss,JSX等资源
	路由配置,js按页面跳转加载
    实时刷新浏览器
	自动引入静态资源到页面
	按指定模块打包资源
	控制台中实时查看action内容
	资源压缩
	接口模拟



## 结构
	.
	├── build                    # 配置目录
	│   ├── webpack.config.js      # 公共配置
	│   ├── webpack.dev.js         # 开发配置
	│   ├── webpack.release.js     # 发布配置
    ├── dist                     # 打包目标目录
	│  
	├── mock                     # 数据模拟  
	│   ├── app.js       
	├── src                      # 项目源码
	│   ├── container 				# 页面 
	│   ├── component      			# 组件
	│   ├── routes					# 路由        
	│   ├── js
 	│   │    ├── action
    │   │    ├── reducer
	│   │	 ├── conf
	│   ├── css      
	│   ├── conf
    │   ├── app.html			 #入口页面
    │   ├── app.js				 #入口JS
	└── package.json                    

