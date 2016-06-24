/// <reference path="../typings/tsd.d.ts" />

import util = require("util");

class Client{
	constructor(private config){ }
	
	sendSms(mobile, content){
		if(!mobile || !content){
			var errMsg = util.format("params is missing:mobile[%s] content[%s]", mobile, content);
			return Promise.reject(new Error(errMsg));
		}
		return rest.post('http://120.27.144.245:9999/smshttp',{
			query:{
				act:"sendmsg",
				unitid:this.config.unitid,//企业代码
				username:this.config.username,//用户账号
				passwd:this.config.passwd,//用户密码(MD5加密，32位小写)
				msg:content,//发送内容
				phone:mobile,
				port:this.config.port || "",//扩展端口号
				sendtime:""//发送时间(格式1900-01-01 00:00:00)，留空为立即下发
			}
		}).then((rst)=>{
			var data = rst.data && rst.data.split(",");
			if (_.isUndefined(data) || _.isEmpty(data)) throw new Error("sendSms no data returned");
			
			if (data[0] !== "0"){
				throw new Error(rst.data);
			}
			
			return data;
		});
	}
	
	sendGroupSms(mobiles,content){
		var mobile="";
		if(_.isArray(mobiles)){
			mobile = mobiles.join(",");
		}
		else if (_.isString(mobiles)){
			mobile = mobiles;
		}
		else{
			return Promise.reject(new Error("not supported type of mobiles:" + typeof mobiles));
		}
		
		return this.sendSms(mobile, content);
	};
}

export = Client;