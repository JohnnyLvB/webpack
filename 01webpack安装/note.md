//全局安装
npm install -g webpack

全局安装是可以的，但是webpack官方是不推荐的。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

对项目目录进行安装
	
npm init
npm install --save-dev webpack



webpack -v   //查看webpack版本