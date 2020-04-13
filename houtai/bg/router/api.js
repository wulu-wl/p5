const express = require('express');
const router = express.Router();
// const jwt=require('json-web-token')
const jwt = require('./jsonwebtoken')
const db = require('./db');
const dbase = new db('houtai');
// const url=require('url')
const Formidable = require('formidable')
var multer = require("multer");
//登录接口
router.post('/login', (req, res) => {
    // console.log(req.body)
    dbase.find("userList", { query: req.body }, (err, data) => {
        if (err) throw err;
        // console.log(data)
        if (data.length == 0) {
            res.send({
                state: 0,
                reason: "暂无此人"
            })
        } else {
            //uid
            let id = data[0]._id.toString();
            //签发token
            let token = jwt.sign({ id }, "7d")
            res.send({
                token: token,
                uid: id,
                state: 1,
                success: "登录成功",
                imgurl: data[0].imgurl,
                username: data[0].role,
            })
        }
    })
})

//添加二级路由
router.post('/add', (req, res) => {
    // console.log(req.body)
    //前台传输过来的数据
    let obj = req.body;
    //在权限列表查管理员的的权限   管理员权限最大
    dbase.findById('roleList', '5e005686bec8cb3f8cb4fe59', (err, data) => {
        if (err) throw err;
        // console.log(data)
        //arr是权限数组
        let arr = data.rolerank;
        //前台发送过来的数据的权限是rankOpen  （是arr.length） 将rankOpen放在权限数组里
        obj.rankOpen = (arr.length).toString();
        // console.log(obj.rankOpen)
        arr.push(obj.rankOpen)
        // console.log(obj.rolerank)
        //修改roleList(权限列表)表里面的rolerank数组  也就是权限数组  将管理员对应的权限数组更新
        dbase.updateById('roleList', '5e005686bec8cb3f8cb4fe59', { rolerank: arr }, (err, data) => {
            if (err) throw err
        })
        //通过前台传过来的selectvalue（管理/统计/开发/设置）在menulist中查找对应的数据
        dbase.find('menuList', { query: { menuName: obj.selectValue } }, (err, data) => {
            if (err) throw err;
            // console.log(data)
            //将data 数据里的children用数组接收一下   将前台传过来的数据添加在children里面
            let arr1 = data[0].children
            // console.log(arr1)
            //obj为前台传输过来的数据
            arr1.push(obj);
            //将此数据修改   也就是将对应的二级权限更新
            dbase.updateById('menuList', data[0]._id, { children: arr1 }, (err, data) => {
                if (err) throw err;
                res.send(data)
            })
        })
    })
})

//添加一级路由
router.post('/addone', (req, res) => {
    // console.log(req.body)
    //先在rolelist里面查找权限
    dbase.findById('roleList', '5e005686bec8cb3f8cb4fe59', (err, data) => {
        if (err) throw err;
        // console.log(data)
        let arr = data.rolerank;
        let obj = {
            menuName: req.body.menuName1,
            rankOpen: (arr.length).toString(),
            children: [{
                menuName: req.body.menuName2,
                rankOpen: (arr.length + 1).toString(),
                path: req.body.path1
            }]
        };
        // console.log(obj)
        //将一级路由的权限添加至权限列表
        arr.push(obj.rankOpen)
        //将二级路由的权限添加至权限列表
        arr.push(obj.children[0].rankOpen)
        // console.log(arr)

        dbase.insertOne('menuList', obj, (err, data) => {
            if (err) throw err;
            dbase.updateById('roleList', '5e005686bec8cb3f8cb4fe59', { rolerank: arr }, (err, data) => {
                if (err) throw err;
                res.send(data)
            })
        })
    })
})

//渲染人员权限页面
router.post('/getrole', (req, res) => {
    dbase.find('roleList', {}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
//获取角色的权限
router.post('/getrole', (req, res) => {
    dbase.find('roleList', {}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
//获取用户信息列表
router.post('/getmenulist', (req, res) => {
    dbase.find('menuList', {}, (err, data) => {
        if (err) throw err
        let arr = [];
        for (let item of data) {
            arr = [...arr, ...item.children]
        }

        res.send(arr)
    })
})
//修改权限获取所有的权限
router.post('/updmenulist', (req, res) => {
    dbase.find('menuList', {}, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})
//修改过的权限
router.post('/updqx', (req, res) => {
    // console.log(req.body.checkList)
    let checkList = req.body.checkList
    let arr = []
    dbase.find('menuList', {}, (err, data) => {
        if (err) throw err;
        data.map((item, index) => {
            // console.log(item)
            item.children.map((item1, index1) => {
                // console.log(item1)
                for (var i = 0; i < checkList.length; i++) {
                    // console.log(checkList[i])
                    // console.log(item1)
                      if(checkList[i]==item1.menuName){
                          arr.push(item1.rankOpen)
                        //   console.log(arr)
                      }
                }

            })
        })
        // console.log(arr)
        
        dbase.find('roleList',{query:{rolename:req.body.roleName}},(err,data)=>{
            if(err) throw err;
            // console.log(data)
            dbase.updateById('roleList',data[0]._id,{rolerank:arr},(err1,data1)=>{
                if(err1) throw err1;
                // console.log(data1.result)
                res.send(data1)
            })
        })

        // dbase.updateOne('roleList',{query:{rolename:req.body.roleName}},{rolerank:arr},(err,data)=>{
        //     if(err) throw err;
        //     console.log(data.result)
        // })
    })
})
//添加用户
router.post('/adduser', (req, res) => {
    // console.log(req.body)
    dbase.insertOne('userList', req.body, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})
//删除用户
router.post('/deluser', (req, res) => {
    // console.log(req.body)
    dbase.deleteById('userList', req.body.id, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})
//修改用户
router.post('/upduser', (req, res) => {
    // console.log(req.body)
    let obj = req.body;
    // console.log(obj)
    dbase.updateById('userList', obj.id, obj, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

//单个文件上传
router.post('/uploadsingler',multer({
      //upload文件如果不存在则会自己创建一个。
    dest:'upload',}).single('file'),function (req,res,next) { 
        if(req.file.length==0){
            res.render('error',{message:"上传文件不能为空"});
            return
        }else{
            let file=req.file;
            let fileInfo={};
            fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname);//这里修改文件名字，比较随意。
            fileInfo.mimetype = file.mimetype;
            fileInfo.originalname = file.originalname;
            fileInfo.size = file.size;
            fileInfo.path = file.path;
            //设置相应类型及编码
            res.set({
                'content-type': 'application/json; charset=utf-8'
            });
            res.send({
                imgurl:"http://localhost:3000/upload/"+file.originalname
            });
        }
     })
module.exports = router;