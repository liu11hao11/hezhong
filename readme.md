# 合众平台短信API。Nodejs方式调用

基于typescript，通过三网合一平台。1069*******

## 安装

```
npm install hezhong
```


## 使用

```js
var mess=require("./index");

var client = new mess({
    unitid:"test",
    username:"test",
    passwd:"test"
});

client.sendSms("12345678910","【签名】第一条测试短信");

client.sendGroupSms(["12345678911","12345678910"],"【签名】第一条测试短信");
```

## 注意事项
 
 由于是三网合一的通道，所以短信内容的签名一定要和备案的相同。

