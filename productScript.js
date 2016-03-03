$(document).ready(function() {
    
    $(function(){
        var animationName = 'animated fadeIn';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.our-products').addClass(animationName).one(animationEnd, function(){
            $('.box').addClass(animationName);
            $('.caption').addClass(animationName);
        })
    })
    
}