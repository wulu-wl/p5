class Curd extends React.Component {
    constructor() {
        super();
        this.state = {
            info: []
        }
    }
    addshou = (res) => {
        res.id = new Date().getTime();
        // console.log(res, "curd接受 add 组件的传值");
        let arr = [...this.state.info];
        arr.push(res);
        this.setState({
            info: arr
        })

    }
    del = (id) => {
        // console.log(id, "这是show组件传递的id")
        let arr = [...this.state.info];
        let index = arr.findIndex(val => val.id == id)
        if (index != -1) {
            arr.splice(index, 1);
            this.setState({
                info: arr
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Add addchuan={this.addshou}></Add>
                <Show showchuan={this.state.info} showdel={this.del}></Show>
            </React.Fragment>
        )
    }

}

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            goodsname: "a",
            price: 10,
            num: 1
        }
    }
    einput = (event) => {
        // console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    tijiao = () => {
        let { goodsname, price, num } = this.state
        // console.log(goodsname, price, num)
        //将 三个input框的值 传递给 父组件
        this.props.addchuan({ "goodsname": goodsname, "price": price, "num": num })
    }
    render() {
        let { goodsname, price, num } = this.state
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="">商品名</label>
                        <input type="text" value={goodsname} name="goodsname" onChange={this.einput} />
                    </div>
                    <div>
                        <label htmlFor="">价格</label>
                        <input type="text" value={price} name="price" onChange={this.einput} />
                    </div>
                    <div>
                        <label htmlFor="">数量</label>
                        <input type="text" value={num} name="num" onChange={this.einput} />
                    </div>
                    <div>
                        <input type="button" value="提交" onClick={this.tijiao} />
                    </div>
                </form>
            </div>
        )
    }

}
class Show extends React.Component {
    constructor() {
        super();
    }
    del = (id) => {
        // console.log(id)
        this.props.showdel(id)
    }
    render() {
        // console.log(this.props.showchuan, "0000")
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.showchuan.length > 0 ? this.props.showchuan.map((val, index) => {

                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.goodsname}</td>
                                    <td>{val.price}</td>
                                    <td>{val.num}</td>
                                    <td>{val.price * val.num}</td>
                                    <td>
                                        <button onClick={() => this.del(val.id)}>删除</button>
                                    </td>
                                </tr>
                            )
                        }) : <tr><td colSpan="6" style={{ "textAlign": "center" }}>暂无数据，请添加</td></tr>
                    }

                </tbody>
            </table>
        )
    }

}

ReactDOM.render(
    <Curd></Curd>,
    document.getElementById("app")
)