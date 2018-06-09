const v='tichaona'
let k = function(){
    this.name='tichaona'
    this.id='1001'
}
function work(){
    console.log(this)
}
export { k, v, work }