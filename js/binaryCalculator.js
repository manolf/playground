           //my version

            //    var output = 0;
            //    res.innerHTML = "";

            //     function action(e) {
            //     /* Older IE browsers have a srcElement property,
            //     but other browsers have a 'target' property; 
            //     Set btn to whichever exists. */
            //     var btn = e.target || e.srcElement;
                
            //     /* String concatenation */

            //     var input = (document.getElementById(btn.id).innerHTML).toString();
            //     console.log(`input = ${input}`);

            //     res.innerHTML += input;
            // }

            //     function actionWrite(e) {

            //     var btn = e.target || e.srcElement;
                
            //     /* Get the clicked element's innerHTML */

            //     console.log(`innerHTML of res:  ${document.getElementById(res).innerHTML} `);
            //    // res.innerHTML = Number(document.getElementById(res).innerHTML);
            // }
            
            //     function actionDelete(e) {

            //     var btn = e.target || e.srcElement;
                
            //     /* Get the clicked element's innerHTML */

            //     res.innerHTML = '';
            // }


            // //alternative with click event listener
            // /* Add a click event listener that calls action(e) when clicked */
            // document.getElementById('btn1').addEventListener('click', action);
            // document.getElementById('btn0').addEventListener('click', action);
            // document.getElementById('btnSum').addEventListener('click', action);
            // document.getElementById('btnSub').addEventListener('click', action);
            // document.getElementById('btnMul').addEventListener('click', action);
            // document.getElementById('btnDiv').addEventListener('click', action);

            // document.getElementById('btnEql').addEventListener('click', actionWrite);

            // document.getElementById('btnClr').addEventListener('click', actionDelete);


            //version eloyekunle
            function onButton(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');
    
    switch(action) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expr = res.innerHTML;
            //var nums = /(\d+)/g; // 1+1 = 10
            var nums = /([0-9]+)/g;
            // https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
            //\d, \D: ANY ONE digit/non-digit character. Digits are [0-9]
            //console.log(inStr.match(/[0-9]+/g));  // ["123", "456", "7", "00", length:4]


            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerHTML = eval(expr).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}