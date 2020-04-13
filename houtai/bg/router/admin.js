//权限路由
const express = require('express');
const router = express.Router();
const jwt = require('./jsonwebtoken');
const db = require('./db');
const dbase = new db('houtai');

router.post("/option", (req, res) => {
    // console.log(req.body)
    dbase.findById('userList', req.body.uid, (err, data) => {
        if (err) throw err;
        // console.log(data)  //对象
        let role = data.role;
        // console.log(role)  //管理员
        dbase.find('roleList', {
            query: {
                rolename: role
            }
        }, (err, data) => {
            if (err) throw err;
            // console.log(data)
            let rolerank = data[0].rolerank;
            // console.log(rolerank)//数组
            dbase.find('menuList', {}, (err, data) => {
                if (err) throw err;

                // console.log(data)  // menuList 列表
                for (var i in data) {
                    // console.log(i)   0-3
                    // console.log(data[i].children)
                    for (var j = 0; j < data[i].children.length; j++) {
                        if (!rolerank.includes(data[i].children[j].rankOpen)) {
                            data[i].children.splice(j, 1)
                            j--;
                        }
                    }
                }
                // console.log(data)
                res.send(data)
            })
        })
    })
})



module.exports = router;