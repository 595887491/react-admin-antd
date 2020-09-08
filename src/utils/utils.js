function formatDate(time) {
    if(!time) return '';
    let date = new Date(time)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-' +date.getDate()
    +''+ setZero(date.getHours())+':'+setZero(date.getMinutes())+':'+
        setZero(date.getSeconds())
}
//补0操作
function setZero(time) {
    if(time<10) {
        return '0'+time
    }
    return time
}
export default {
    formatDate,
}

