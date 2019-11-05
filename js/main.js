var
_texto = 'André "dotpegaso" Benatti, front end developer addicted to UX/UI, gunpla and clean design.'.split(''),
$elem = document.querySelector('#home p'),
i = 0;

function type(){
    _fn = setInterval(function(){
      $elem.insertAdjacentText('beforeend', _texto[i]);
      i++;
      i == _texto.length ? clearInterval(_fn) : null;
    }, 70);
}

$(document).ready(function(){
    $(this).delay(500).queue(function(){
        $('#home h1').show();
    });
});

var easter_egg = new Konami(function() { 
    $('.konami').addClass('active').delay(400).queue(function(){
        $('.konami .quote').addClass('active').dequeue();
    });
});

$('body').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
   $(this).delay(200).queue(function(){
       $('#home h1 em').addClass('active').dequeue()
       .delay(800).queue(function(){
           $('#home .social').addClass('active').dequeue()
           .delay(300).queue(function(){
               $('#projects').addClass('active').dequeue()
               .delay(300).queue(function(){
                   $('#home p').addClass('active').dequeue();
                   type();
               })
           })
       })
   })
})
