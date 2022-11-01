// console.log('prompt connected');
// // alert('Ki khobor dosto')
// const showAlert = () =>{
//     const num = Math.random()*10;
//     console.log(num);
//     if(num < 5){
//         alert('ki khobor dosto');
//     }
// }

// const askSomething = () =>{
//     const decision = confirm('Are you coming Picnic?')
//     console.log(decision);
//     if(decision === true){
//         alert('dosto 500 tk bkash kor')
//     }
//     else{
//         console.log('DGM !!! Door e giya mor')
//     }
// }


//  const getUserInfo = () =>{
//     const name = prompt('Tell us your name.')
//     console.log(name);
//     if(!!name){
//         console.log('Welcome here', name);
//     }
//  }

let result;
const simpleCalculator = (a,b,c) => {

        switch (c) {
        case 'add':
            result = a + b;
            break;
        case 'subtruct':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;;
            break;
        case 'devide':
            result = a / b;
            break;
        case 'modulus':
            result = a % b;
            break;
        default:
            result = 'Invalid Operation';
            break;
        }
        
  return result
}