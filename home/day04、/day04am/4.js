let data={
    name:"gao",
    num:1,
    price:30
}
//一个属性在多个地方用  都为订阅者
//劫持对象   监听对象中每一个属性的变化
function observer(obj) { 
    Object.keys(obj).forEach((key)=>{
        defineReactive(obj,key,obj[key])
        //将中间这块封装函数  放到defineReactive函数中   在此调用该函数
        // Object.defineProperty(obj,key,{
        //     get:function () { 

        //      },
        //     set:function (newVal) { 
        //         console.log("改变值了",newVal)
        //         //通知 改变  试图
        //      }
        // })
    })
 }
function defineReactive(obj,key,val) { 
    let dep=new Dep()
    Object.defineProperty(obj,key,{
            get:function () { 
                //添加到订阅者
                if(Dep.target){
                    dep.addsub(Dep.target)
                }
                console.log("取值了")
                return val
             },
            set:function (newVal) { 
                console.log("改变值了",newVal)
                //通知 改变  试图
                val=newVal
                //通知视图发生变化  。。。发布者
             }
        })
 }
 observer(data)

function Dep() { 
    this.subs=[]
 }

Dep.prototype={
    addsub:function (sub) { 
            this.subs.push(sub)
     }
}

 //设置
 data.name="wwww"
 //获取
 console.log(data.name)