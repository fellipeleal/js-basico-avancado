let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        let cor = this.getAttribute('class').split('-')[1]
        document.querySelector('body').style.backgroundColor = cor;
        //document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];

    };
}