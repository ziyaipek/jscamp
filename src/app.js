console.log("Hello World!")

let usdLastday= 9.20
let usdToday= 9.30
//var yerine let kullanmazsak blok içindeki değişkenler karışır
{
    let usdLastday=9.10
}

console.log(usdLastday)

const euroLastday=11.2
//euroLastday=11 const değişkenin değeri değiştirilmez (HATA)
console.log(euroLastday)
//array
//cameCasing
//PascalCasing
//Naming Convension
let homeCredits=["Home Credits","Rent Home Credits","Gav Home Credits"]
console.log("<ul>")
for (let index = 0; index < homeCredits.length; index++) {
    console.log("<li>"+homeCredits[index]+"/<li>")
    
}
console.log("</ul>")
console.log(homeCredits)