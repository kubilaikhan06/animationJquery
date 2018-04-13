//https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/modifier-le-contenu-d-un-element
var image = document.querySelector('img');

function changeImage1(){
    image.src = "images/joyeuxNoel.jpg";
};

function changeImage2(){
    image.src = "images/moche-mais-je-men-fous.jpg";
};

//image.addEventListener('click', changeImage1);
//image.addEventListener('dblclick', changeImage2);

$(document).ready(function(){
    
                //changement de photo
                $('img').click(changeImage1);
                $('img').dblclick(changeImage2);
                //$('img').mouseleave(changeImage1);
    
                // méthodes fadeOut et fadeIn                
                $('#b1').click(function(){
                    $('img').fadeOut(3000)
                            .queue(function(){
                            $(this).show(image.src = "images/velo2.jpg").dequeue()                          
                            })
                            .fadeIn(3000);
                });
                
                // méthode fadeToggle
                $('#b3').click(function(){
                    $('img').fadeToggle(3000);
                });
                
                //méthode slideUp et slideDown
                $('#cacher').mouseenter(function(){
                    $('img').slideUp(3000);
                });
                $('#cacher').mouseleave(function(){
                    image.src = "images/macron1.jpg";
                    $('img').slideDown(3000);
                });
                
                //méthode slideToggle
                $('#slideToggle').click(function(){
                    $('img').slideToggle(3000);
                });
                                        
                //méthode animate file d'attente
                $('#doubleEffet').mouseover(function(){
                    $('img')
                        .fadeOut(2000)
                        .fadeIn(1000)
                        .animate({width:'+=10%'}, 1000)
//                        .animate({height:'0px'}, 2000, function(){$(this).show(image.src = "images/joyeuxNoel.jpg").dequeue();})
                        .slideUp(1000)
                        .delay(500)
                        .queue(function(){
                            $(this).show(image.src = "images/joyeuxNoel.jpg").dequeue();
                        })
                        .slideDown(2000)
                        .animate({width:'-=10%'}, 1000)
                        .animate({left: '+=200px'}, 1000)
                });
    
                // permet d'arrêter l'animation après celle qui a été lancée
                $('#arreter').click(function(){
                    $('img').stop(true);
                });
    
            });