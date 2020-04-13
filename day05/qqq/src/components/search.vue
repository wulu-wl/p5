<template>
    <div>
        <div class="search">
            <div class="search-header">
                <router-link  to="/index">
                    <span>&lt;</span>
                </router-link>

                <h3>搜索页面</h3>
            </div>
            <input type="search" v-model="search" placeholder="请输入搜索内容"><br>
            <ul v-for="(item,index) in get" v-bind:key="index">
                <li v-for="(i,index) in item.children"  v-bind:key="index">{{i}}</li>

            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name:"search",
        data() {
            return {
                search: '',
                arr: [{
                    name: "水果",
                    children: ['苹果', '香蕉', '橘子']
                }, {
                    name: "蔬菜",
                    children: ['白菜', "花菜", "韭菜"]
                }, {
                    name: "肉",
                    children: ["鸡肉", "鸭肉", "鱼肉"]
                }]
            }
        },
        computed: {
            get() {
                if (this.search) {
                    let arr1 = this.arr.filter((item) => {
                        return item.name.includes(this.search)
                    })
                    return arr1

                } else {
                    return []
                }
            }
        }

        
    }
</script>

<style scoped>
.search-header{
    width: 100%;
    height: 50px;
    background: #FFCF00;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    align-items: center;
}
.search-header span{
    width: 12%;
    font-size: 20px;
}
.search-header h3{
    width: 80%;
    text-align: center;
}
.search input{
    outline: none;
    width: 80%;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-left: 20px;
    margin-top: 20px;
    
}
</style>