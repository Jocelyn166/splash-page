// function changeBackground(num){
//     document.body.className = '';
//     switch(num){
//         case '1':
//             document.body.classList.add('background-1');
//             break;
//         case '2':
//             document.body.classList.add('background-2');
//             break;
//         case '3':
//             document.body.classList.add('background-3');
//             break;
//         default:
//             break;
//     }
// }

function changeBackground(num){
    if(document.body.className){
        document.body.className = '';
    } document.body.classList.add(`background-${num}`);
}