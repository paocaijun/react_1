# react_1

使用 scss,但是不需要安装 scss，安装 sass,css,style 的 loader+node-sass
react16 // 去掉了 getInitialState 这个 hook 函数
1、修改 this 指向方法：
onClick={() => this.handleNew()} (传参数时，用这个)
this.closeOverlay = this.closeOverlay.bind(this)
handleAdd = () => {console.log('hahah', this)}
2、todo 数据新增后未触发视图更新，需要 setState(尴尬：只是子数组更新了)
Q: onClick={this.handleDel(i)},会自调用
修改 state 数据时，不能直接设置 this.state.list.splice(1,2)，用 setState 方法，接受一个对象，但如果赋值为计算属性给 setState 传递一个函数，this.setState((prevState, props) => ({counter: prevState.counter + props.increment}));
setState 方法是一个异步的方法，React 会将所有的 setState 方法打包成一次进行更新，类似于快递点寄快递，囤积了一些包裹后一次投递，而不是你每次修改 state 都会进行更新。
3、 函数定义组件 function ElementTest(prop) {return <div title={prop.title}>{prop.title}</div>}
关于打包
4、图片处理
url-loader 处理图片打包，name: 'img/[name].[ext]'，表示打包之后的图片以同样的名字放在打包文件夹下的 img 文件夹内
1> background 的 url，路径写成该文件与图片的相对位置，比如，flex.scss 的 url(../../img/1.jpg)
2> img 或者 link 等 html 里面的图片引用,路径写成 run build 之后图片的相对位置

<link rel="icon" type="image/png" href="./img/1.jpg" /> // 打包之后html与img文件夹同级
<img src='./img/1.jpg'> js文件一律打包到bundle文件内
或者 import imgSrc from '@/layouts/img/1.jpg ' 再赋值给src
5、node降版本：node升级到10后报错，卸载node，到node官网下方绿色字体All download options，下载以x64.msi结尾的版本
6、使用promise之后，编译报错，Can't resolve 'fs' ,解决办法，在webpack配置中加上node: {fs: 'empty'}
7、
