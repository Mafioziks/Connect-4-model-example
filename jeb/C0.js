/******************************************************************************
 * CONTEXT [C0]
 * Generated at 2022/05/04 17:58:51
 * JeB translator version 0.6.5
 ******************************************************************************/

/* Sets */
$cst.ROW;

$cst.COL;

$cst.PLAYERS;

$cst.COLORS;


/* Constants */
$cst.ROW_CNT;

$cst.COL_CNT;

$cst.WIN_CNT;

$cst.PLAYER_1;

$cst.PLAYER_2;

$cst.BLUE;

$cst.RED;

$cst.EMPTY;


/* Axioms */
$axm.a1 = new jeb.lang.Axiom( '$axm.a1', 'axm1' );
$axm.a1.predicate = function() {
    return $B.equal($cst.ROW_CNT, $B('6'));
};

$axm.a2 = new jeb.lang.Axiom( '$axm.a2', 'axm2' );
$axm.a2.predicate = function() {
    return $B.equal($cst.COL_CNT, $B('7'));
};

$axm.a3 = new jeb.lang.Axiom( '$axm.a3', 'axm3' );
$axm.a3.predicate = function() {
    return $B.equal($cst.WIN_CNT, $B('4'));
};

$axm.a4 = new jeb.lang.Axiom( '$axm.a4', 'axm6' );
$axm.a4.predicate = function() {
    return $B.finite($cst.PLAYERS);
};

$axm.a5 = new jeb.lang.Axiom( '$axm.a5', 'axm7' );
$axm.a5.predicate = function() {
    return $B.partition($cst.PLAYERS, $B.SetExtension($cst.PLAYER_1), $B.SetExtension($cst.PLAYER_2));
};

$axm.a6 = new jeb.lang.Axiom( '$axm.a6', 'axm8' );
$axm.a6.predicate = function() {
    return $B.partition($cst.COLORS, $B.SetExtension($cst.EMPTY), $B.SetExtension($cst.RED), $B.SetExtension($cst.BLUE));
};


/* Cache constants */
jeb.__constants.push( '$cst.ROW' );
jeb.__constants.push( '$cst.COL' );
jeb.__constants.push( '$cst.PLAYERS' );
jeb.__constants.push( '$cst.COLORS' );
jeb.__constants.push( '$cst.ROW_CNT' );
jeb.__constants.push( '$cst.COL_CNT' );
jeb.__constants.push( '$cst.WIN_CNT' );
jeb.__constants.push( '$cst.PLAYER_1' );
jeb.__constants.push( '$cst.PLAYER_2' );
jeb.__constants.push( '$cst.BLUE' );
jeb.__constants.push( '$cst.RED' );
jeb.__constants.push( '$cst.EMPTY' );
