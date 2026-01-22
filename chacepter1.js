function PositiveNumber(...arr) {
    let positiveNumber=[];
    
    let negtiveNumber=[];
    for (const element of arr) {
        if (element>0) {
            positiveNumber.push(element)
            
        }else{
            negtiveNumber.push(element)
        }
    }

  return ` all positive number ${positiveNumber}  and all negetive number${negtiveNumber}`

};

const number=(PositiveNumber(-5,12,-8,0,3.5));
console.log(number);

