let obj={"name":"gao"}
//name绑定两个方法、   取值是get自动执行    改变set方法自动执行
Object.defineProperty(obj,"name",{
    get:function () { 
        console.log("quzhi ")
     },
     set:function () { 
         console.log("修改的值")
      }

})

obj.name="wang"