const inputvalue=document.querySelector("#inputvalue");
const buttons=document.querySelectorAll(".btn");

let string='';

let arr=Array.from(buttons);
arr.forEach(btn=> {
    btn.addEventListener('click',(e) =>{

        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            inputvalue.value=string;
        }

        else if(e.target.innerHTML =='AC')
        {
            string='';
            inputvalue.value=string;
        }

        else if(e.target.innerHTML == 'DEL')
        {
            string=string.substring(0,string.length-1);
            inputvalue.value=string;
        }

        else {
            string+=e.target.innerHTML;
            inputvalue.value=string;
        }
    })
})