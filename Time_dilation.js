// import Decimal from 'decimal.js'
var Decimal = require('decimal.js')
Decimal = Decimal.clone({ precision: 25, rounding: 1 })

function head_to_foot(height,time){
    time= new Decimal(time*86400)
    height = new Decimal(height)
    let pi = new Decimal('3.1415926535897932384626433')
    let c = new Decimal(299792458)
    let earthRadius = new Decimal(6371000)
    let vel_head = pi.times(2).dividedBy(86400).times(earthRadius.plus(height))
    let vel_foot = pi.times(2).dividedBy(86400).times(earthRadius)
    let dil_time_head = time.dividedBy(Decimal.sqrt(Decimal.pow(vel_head,2).dividedBy(Decimal.pow(c,2)).negated().plus(1)))
    let dil_time_foot = time.dividedBy(Decimal.sqrt(Decimal.pow(vel_foot,2).dividedBy(Decimal.pow(c,2)).negated().plus(1)))
    let val = dil_time_head.minus(dil_time_foot)
    val = val.toString()
    if(val.includes('e')){
        let nums = val.split('e')
        val = nums[0] + " x 10^" + nums[1]
    }
    return val;
}

function diff_bet_two(height1,height2,time){
    time= new Decimal(time*86400)
    height1 = new Decimal(height1)
    height2 = new Decimal(height2)
    let pi = new Decimal('3.1415926535897932384626433')
    let c = new Decimal(299792458)
    let earthRadius = new Decimal(6371000)
    let vel_1 = pi.times(2).dividedBy(86400).times(earthRadius.plus(height1))
    let vel_2 = pi.times(2).dividedBy(86400).times(earthRadius.plus(height2))
    let dil_time_1 = time.dividedBy(Decimal.sqrt(Decimal.pow(vel_1,2).dividedBy(Decimal.pow(c,2)).negated().plus(1)))
    let dil_time_2 = time.dividedBy(Decimal.sqrt(Decimal.pow(vel_2,2).dividedBy(Decimal.pow(c,2)).negated().plus(1)))
    let val = Math.abs(dil_time_1.minus(dil_time_2))
    val = val.toString()
    if(val.includes('e')){
        let nums = val.split('e')
        val = nums[0] + " x 10^" + nums[1]
    }
    return val;
}

console.log(head_to_foot(1.96,1))
console.log(diff_bet_two(1.96,2,1))