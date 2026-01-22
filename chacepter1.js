// //problem :1 find out  positive and negtive number
// function PositiveNumber(...arr) {
//     let positiveNumber=[];
    
//     let negtiveNumber=[];
//     for (const element of arr) {
//         if (element>0) {
//             positiveNumber.push(element)
            
//         }else{
//             negtiveNumber.push(element)
//         }
//     }

//   return ` all positive number ${positiveNumber}  and all negetive number${negtiveNumber}`

// };

// const number=(PositiveNumber(-5,12,-8,0,3.5));
// console.log(number);

//problem2:find out integernumber ,evennumber ,oddnumber
// function FindNumber(...arr) {
//     let integernumber=[];
//     let evennumber=[];
//     let oddnumber=[]

//     for (const element of arr) {
//         if (element % 1 === 0) {
//             integernumber.push(element)
//             if (element %2==0) {
//                 evennumber.push(element)
//             } 

            
//         } else{
            
//             oddnumber.push(element)
//         }
        
//     }
//     return `${integernumber} and  ${evennumber}  also ${oddnumber}`
    
// }
// console.log(FindNumber(23,56,19.69,42,89,11.37));
//problem:4 If you buy something for 64 taka and pay 100 taka, how much money will the shopkeeper give you back?
function shopkeeper (brought,pay) {
    return pay -brought 
}
console.log(shopkeeper(64,100));
//problem:5 If each of five people is given an Eid bonus of 350 taka, what will be the total cost?
function ToTalCoast(taka) {
    return taka*5
}
console.log(ToTalCoast(350));
//problem6:If 450 rupees are to be divided among eight people, how much will each person get? And how much will you have if no one takes the change?
function EveryPersonGet(x,taka) {
    const everyPerson=parseInt(taka/x);
    const extraTaka=taka -everyPerson*8

    return extraTaka

    
}
console.log(EveryPersonGet(8,450));
