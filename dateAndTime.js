function time(){
    var currentdate = new Date()
    var date = currentdate.getDate()
    var month = currentdate.getMonth()
    var year = currentdate.getFullYear()
    var gtime = currentdate.getTime()
    console.log(date + "/" + month + "/" + year)
    console.log(gtime)
}
console.log(time())