console.log('5 > 3', 5 > 3)
console.log('3 < 2' , 3 < 2)

console.log('8 >= 7', 8 >= 7)
console.log('12 <= 12', 12 <= 12)
console.log('12 < 12', 12 < 12)

console.log('4 == 4', 4 == 4)
console.log('4 == 5', 4 == 5)

console.log('4 != 4', 4 != 4)
console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === '4')
console.log('4 == 4', 4 == '4')

/*
    &&  | true  | folse
   true | true  | folse
  folse | folse | folse

    ||  | true  | folse
   true | true  | true
  folse | true  | folse

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет)  - инвентирует true или folse

*/

 console.log( true && true)
 console.log( true && false)

 console.log( true || false)
 console.log( false || true)

 console.log(!false)
 console.log(!true)

 console.log((false && true) || true && false || !true)
 

