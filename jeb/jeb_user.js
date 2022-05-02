// $cst.ROW = $B.UpTo(1, 6); 
// $cst.COL = $B.UpTo(1, 7);
// $cst.FIELD = $B.EmptySet;
// $cst.PLAYERS = $B.EmptySet;
// $cst.ROW_CNT = BigInteger("6");
// $cst.COL_CNT = BigInteger("7");
// $cst.WIN_CNT = BigInteger("4");
// $cst.PLAYER_1 = BigInteger("1");
// $cst.PLAYER_2 = BigInteger("2");


/* Sets */
$cst.ROW = $B.UpTo(1, 6);

$cst.COL = $B.UpTo(1, 7);



/* Constants */
$cst.ROW_CNT = BigInteger('6');

$cst.COL_CNT = BigInteger('7');

$cst.WIN_CNT = BigInteger("4");

$cst.PLAYER_1 = 'p1';

$cst.PLAYER_2  = 'p2';

$cst.BLUE = 'blue';

$cst.RED = 'red';

$cst.EMPTY = 'empty';

$cst.PLAYERS = $B.EmptySet;

$cst.COLORS = $B.SetExtension($cst.EMPTY, $cst.BLUE, $cst.RED);

/* drawing base */

class Circle {
    type = $cst.EMPTY;

    constructor(type) {
        // if ($cst.COLORS.contains(type)) {
            this.type = type;
        // }
    }

    draw(context, x, y) {
        let fill = "#FFFFFF";
        
        if ($cst.RED == this.type) {
            fill = "#FF0000";
        } else if ($cst.BLUE == this.type) {
            fill = "#0000FF";
        }

        context.beginPath();
        context.fillStyle = fill;
        context.arc(x, y, 20, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.fillStyle = "#000000";
    }
};

class Board {
    with = 4;
    height = 4;


    constructor(xPlaces, yPlaces) {
        this.with = xPlaces;
        this.height = yPlaces;
    }

    draw(context, x, w) {
        context.beginPath();
        context.fillStyle = "#FF0000";
        context.rec(x, y, 40, 0);
        context.stroke();
        context.fillStyle = "#000000";
    }
}