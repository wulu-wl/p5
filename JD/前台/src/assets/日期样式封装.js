function dataTools() {
    var cutTime = new Date();

    var year = cutTime.getFullYear();
    var month = (cutTime.getMonth() + 1) < 10 ? "0" + (cutTime.getMonth() + 1) : (cutTime.getMonth() + 1);
    var date = cutTime.getDate() < 10 ? "0" + cutTime.getDate() : cutTime.getDate();

    var hour = cutTime.getHours() < 10 ? "0" + cutTime.getHours() : cutTime.getHours();
    var min = cutTime.getMinutes() < 10 ? "0" + cutTime.getMinutes() : cutTime.getMinutes();
    var miao=cutTime.getSeconds()< 10 ? "0" + cutTime.getSeconds():cutTime.getSeconds();
    if (hour < 12) {

        return year + "-" + month + "-" + date +"&nbsp"+ '上午' + hour + ":" + min+':'+miao;
    } else {
        return year + "-" + month + "-" + date +"&nbsp"+  '下午' + hour + ":" + min+':'+miao;
    }
}
function dataTools1() {
    var cutTime = new Date();

    var year = cutTime.getFullYear();
    var month = (cutTime.getMonth() + 1) < 10 ? "0" + (cutTime.getMonth() + 1) : (cutTime.getMonth() + 1);
    var date = cutTime.getDate() < 10 ? "0" + cutTime.getDate() : cutTime.getDate();

    var hour = cutTime.getHours() < 10 ? "0" + cutTime.getHours() : cutTime.getHours();
    var min = cutTime.getMinutes() < 10 ? "0" + cutTime.getMinutes() : cutTime.getMinutes();
    var miao=cutTime.getSeconds()< 10 ? "0" + cutTime.getSeconds():cutTime.getSeconds();
    if (hour < 12) {

        return year + "-" + month + "-" + date +"&nbsp"+ hour + ":" + min+':'+miao;
    } else {
        return year + "-" + month + "-" + date +"&nbsp"+ hour + ":" + min+':'+miao;
    }
}