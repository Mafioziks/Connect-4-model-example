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
    $anim.canvas.width = 440;
    $anim.canvas.height = 390;
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

    if ($B.notEqual($var.winner.value, $cst.EMPTY)) {
        $anim.fillStyle = "#FF0000";
        if ($B.equal($cst.BLUE, $var.winner.value)) {
            $anim.fillStyle = "#0000FF";
        }
        $anim.font = 'bold 25px Arial';
        $anim.fillText("Winner is " + $var.winner.value, 50, 20 + ($cst.ROW_CNT * 1 + 1) * 50);
        $anim.fillStyle = "#000000";
    }

}

