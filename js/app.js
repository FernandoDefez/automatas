window.addEventListener("scroll",  function () {
    const card = this.document.getElementById("card");
    if(this.scrollY<250){
        card.style.animation="rightAnimation 1s ease-in";
        card.style.opacity="1";
    }
});

// -   -   -   -   MESSAGE
let message = document.getElementById('message');
setInterval(function () {message.style.display="none"}, 7500);
//

function showModal(string, link) {
    document.getElementById('modal-header').innerHTML= string;
    document.getElementById('modal').style.display='block';
    if (link.charAt(0)=='d') {
        document.getElementById('modal-image').innerHTML='<iframe src='+link+'></iframe>';
    }else if(link.charAt(0)=='i'){
        document.getElementById('modal-image').innerHTML='<img src='+link+'>';
    }else{
        document.getElementById('modal-image').innerHTML='<video width=100% controls><source src='+link+' type="video/mp4"></video>';
    }
}

function hideModal(){
    document.getElementById('modal').style.display='none';
    document.getElementById('modal-image').innerHTML='';
}

var _1st = $('#1stMonthBtn');        var _1stDisplay = $('#1stMonth'); 
var _2nd = $('#2ndMonthBtn');     var _2ndDisplay = $('#2ndMonth');
var _3rd = $('#3rdMonthBtn');       var _3rdDisplay = $('#3rdMonth');


$(_1st).click(function(){ 
    _1stDisplay.toggle();
    _2ndDisplay.hide();
    _3rdDisplay.hide();
});

$(_2nd).click(function(){
    _1stDisplay.hide();
    _2ndDisplay.toggle();
    _3rdDisplay.hide(); 
});

$(_3rd).click(function(){ 
    _1stDisplay.hide();
    _3rdDisplay.toggle();
    _2ndDisplay.hide();
});
