// Auto-generated function: argument generator
var get_x = function( eventId ) {
    if (eventId == $evt.e1) {
        return $var.col.value.anyMember();
    }
};

// Auto-generated function: argument generator
var get_y = function( eventId ) {
    if (eventId == $evt.e1) {
        return $var.row.value.anyMember();
    }
};

jeb.animator.init = function() {
$anim.canvas.width = 1000;
$anim.canvas.height = 500;
$anim.canvas.style.display = '';
}

jeb.animator.draw = function() {
 //ADD ANIMATION HERE
 $anim.clearRect(0,0,$anim.canvas.width,$anim.canvas.height);

 $var.board.value.forEach(element => {
     let circle = new Circle(element.right);
     
     circle.draw(
         $anim,
         20 + element.left.left * 50,
         20 + element.left.right * 50,
     );
 });
}

