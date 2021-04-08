

 var circle = document.getElementById('circle');
 var up = document.getElementById('up');
 var down = document.getElementById('down');

 var rotate = circle.style.transform;

 var rotatesum;
   function ghumo(){
    rotatesum= rotate +    " rotate(-90deg)";
    circle.style.transform= rotatesum;
    rotate=rotatesum;
}
    function ughumo(){
        rotatesum= rotate +    " rotate(90deg)";
        circle.style.transform= rotatesum;
        rotate=rotatesum;

    }