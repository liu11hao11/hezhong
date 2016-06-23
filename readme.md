# 合众平台短信API

基于typescript

## 使用

```js
var mess=require("./src/client");

var client = new mess({
    unitid:"test",
    username:"test",
    passwd:"test"
});

client.sendSms("18516539391","第一条测试短信");

client.sendGroupSms(["18516539391","12345678910"],"第一条测试短信");
```

    

