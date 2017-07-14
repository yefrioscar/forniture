var items = document.getElementsByClassName('categoria-item');
var le = items.length;
console.log(le);
for(var i=0;i<le;i++){
    console.log(items[i]);
    items[i].addEventListener('click', function(){

        for(var i=0;i<le;i++){
            items[i].classList.remove('active');
        }


        this.classList.add('active');
        console.log(items[i]);
    });
}