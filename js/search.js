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

function hasParentClass( e, classname ) {
		if(e === document) return false;
		if( classie.has( e, classname ) ) {
			return true;
		}
		return e.parentNode && hasParentClass( e.parentNode, classname );
	}



var sg = document.getElementsByClassName('categorias-input__svg')[0];
var inputSearch = document.getElementsByClassName('categorias-input__item')[0];



if(inputSearch.value.length > 1) {
    sg.classList.add('activeSvg');

    if(inputSearch.value.length == 0) {
        sg.classList.remove('activeSvg');
    }
}

inputSearch.addEventListener('keyup',(e)=> {
    e.preventDefault();
    sg.classList.add('activeSvg');

    if(inputSearch.value.length == 0) {
        sg.classList.remove('activeSvg');
    }
});


sg.addEventListener('click',(e)=> {
    e.preventDefault();
    inputSearch.value = '';
})
bag

var bag = document.getElementsByClassName('bag')[0];

bag.addEventListener('click', function(){
    var container = document.getElementsByClassName('container-filtro')[0];

    container.classList.toggle('active');
});

var login = document.getElementsByClassName('login')[0];
var signup = document.getElementsByClassName('signup')[0];
var loginclick = document.getElementById('login_click');
var signupclick = document.getElementById('signup_click');

loginclick.addEventListener('click',function(){
    if(hasParentClass(signup,'active')) {
        signup.classList.remove('active');
    }
    login.classList.toggle('active');
    
    console.log('penejo');
});

signupclick.addEventListener('click',function(){
    if(hasParentClass(login,'active')) {
        login.classList.remove('active');
    }
    signup.classList.toggle('active');
        console.log('penejo');

});
