const vm = new Vue({
    el: "#app",
    data: {
        user: "gao",
        sex: "女",
        hobby: [],
        address: "hn",
        fair: "我是好人"
    },
    methods: {
        add() {
            console.log(this.user, this.sex, this.hobby, this.address, this.fair)
        }
    }
})