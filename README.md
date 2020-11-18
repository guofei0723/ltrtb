# light-typescript-react-boilerplate

Webpack5 + typescript + react + tailwind

配置内容比较简单的react工程模板

## 使用

```bash
# 克隆项目到本地
git clone --depth=1 git@github.com:guofei0723/ltrtb.git yourproject

cd yourproject
# 安装依赖
yarn

#### 关于git ####

# 删除与本仓库的关系
git remote rm origin
# 指向你自己的仓库地址
git remote add origin git@github.com:xxx/xxx.git

# 或者直接删除git数据
rm -rf .git
# 然后重新初始化
git init
```

开发chrome浏览器扩展插件时可以克隆`chrome-extension`分支

```bash
git clone -b chrome-extension --depth=1 git@github.com:guofei0723/ltrtb.git yourproject
```
