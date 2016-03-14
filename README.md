### 安装步骤
    npm install less -g
    npm install less-plugin-autoprefix -g
    npm install mb-less -g

  (mac系统可能要加sudo)
  在v1目录下创建less目录用来保存.less文件

### 开始使用

    mb-less

  * 它会把当前目录下的所有的.less文件，编译到../css/page/目录下，
  * 并监听文件改变并自动编译，
  * 还会帮你自动加个-webkit-前缀。
