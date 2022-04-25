/******************************************************************************
 * MACHINE [Connect4Game]
 * Generated at 2022/04/25 16:57:43
 * JeB translator version 0.6.5
 ******************************************************************************/

/* Variables */
$var.row = new jeb.lang.Variable( '$var.row' );
$var.col = new jeb.lang.Variable( '$var.col' );
$var.win = new jeb.lang.Variable( '$var.win' );
$var.board = new jeb.lang.Variable( '$var.board' );
$var.fieldcell = new jeb.lang.Variable( '$var.fieldcell' );
$var.field = new jeb.lang.Variable( '$var.field' );
$var.winner = new jeb.lang.Variable( '$var.winner' );
$var.current_player = new jeb.lang.Variable( '$var.current_player' );
$var.previous_player = new jeb.lang.Variable( '$var.previous_player' );

/* Invariants */
$inv.i1 = new jeb.lang.Invariant( '$inv.i1', 'inv1' );
$inv.i1.predicate = function() {
    return $B.equal($var.row.value, $B.UpTo($B('1'), $cst.ROW_CNT));
};

$inv.i2 = new jeb.lang.Invariant( '$inv.i2', 'inv2' );
$inv.i2.predicate = function() {
    return $B.equal($var.col.value, $B.UpTo($B('1'), $cst.COL_CNT));
};

$inv.i3 = new jeb.lang.Invariant( '$inv.i3', 'inv3' );
$inv.i3.predicate = function() {
    return $B.belong($var.win.value, $B.BOOL);
};

$inv.i4 = new jeb.lang.Invariant( '$inv.i4', 'inv4' );
$inv.i4.predicate = function() {
    return $B.belong($var.board.value, $B.TotalFunctions($B.CartesianProduct($var.col.value, $var.row.value), $cst.COLORS));
};

$inv.i5 = new jeb.lang.Invariant( '$inv.i5', 'inv' );
$inv.i5.predicate = function() {
    return $B.belong($var.fieldcell.value, $B.CartesianProduct($var.col.value, $var.row.value));
};

$inv.i6 = new jeb.lang.Invariant( '$inv.i6', 'invField' );
$inv.i6.predicate = function() {
    return $B.equal($var.field.value, $B.CartesianProduct($var.col.value, $var.row.value));
};

$inv.i7 = new jeb.lang.Invariant( '$inv.i7', 'invWinner' );
$inv.i7.predicate = function() {
    return $B.belong($var.winner.value, $cst.COLORS);
};

$inv.i8 = new jeb.lang.Invariant( '$inv.i8', 'invPlayer' );
$inv.i8.predicate = function() {
    return $B.belong($var.current_player.value, $cst.COLORS);
};

$inv.i9 = new jeb.lang.Invariant( '$inv.i9', 'invPlayerPrev' );
$inv.i9.predicate = function() {
    return $B.belong($var.previous_player.value, $cst.COLORS);
};

$inv.i10 = new jeb.lang.Invariant( '$inv.i10', 'invPlayerChange' );
$inv.i10.predicate = function() {
    return $B.notEqual($var.current_player.value, $var.previous_player.value);
};

/* Event [INITIALISATION] */
$evt.init = new jeb.lang.Event( '$evt.init', 'INITIALISATION' );

$evt.init.action.a1 = new jeb.lang.Action( '$evt.init.action.a1', 'act1', $evt.init );
$evt.init.action.a1.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.win], [$B.FALSE]);
};

$evt.init.action.a2 = new jeb.lang.Action( '$evt.init.action.a2', 'act3', $evt.init );
$evt.init.action.a2.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.row], [$B.UpTo($B('1'), $cst.ROW_CNT)]);
};

$evt.init.action.a3 = new jeb.lang.Action( '$evt.init.action.a3', 'act4', $evt.init );
$evt.init.action.a3.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.col], [$B.UpTo($B('1'), $cst.COL_CNT)]);
};

$evt.init.action.a4 = new jeb.lang.Action( '$evt.init.action.a4', 'initField', $evt.init );
$evt.init.action.a4.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.field], [$B.CartesianProduct($B.UpTo($B('1'), $cst.COL_CNT), $B.UpTo($B('1'), $cst.ROW_CNT))]);
};

$evt.init.action.a5 = new jeb.lang.Action( '$evt.init.action.a5', 'act5', $evt.init );
$evt.init.action.a5.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.fieldcell], [$B.Pair($B('1'), $B('1'))]);
};

$evt.init.action.a6 = new jeb.lang.Action( '$evt.init.action.a6', 'intiBoardOther', $evt.init );
$evt.init.action.a6.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.board], [$B.CartesianProduct($B.CartesianProduct($B.UpTo($B('1'), $cst.COL_CNT), $B.UpTo($B('1'), $cst.ROW_CNT)), $B.SetExtension($cst.EMPTY))]);
};

$evt.init.action.a7 = new jeb.lang.Action( '$evt.init.action.a7', 'initWinner', $evt.init );
$evt.init.action.a7.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.winner], [$cst.EMPTY]);
};

$evt.init.action.a8 = new jeb.lang.Action( '$evt.init.action.a8', 'initCurrentPlayer', $evt.init );
$evt.init.action.a8.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.current_player], [$cst.RED]);
};

$evt.init.action.a9 = new jeb.lang.Action( '$evt.init.action.a9', 'initPreviousPlayer', $evt.init );
$evt.init.action.a9.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.previous_player], [$cst.BLUE]);
};


/* Event [add_token] */
$evt.e1 = new jeb.lang.Event( '$evt.e1', 'add_token' );

$evt.e1.parameter.x = new jeb.lang.Parameter( '$evt.e1.parameter.x', $evt.e1, 0 );
$evt.e1.parameter.y = new jeb.lang.Parameter( '$evt.e1.parameter.y', $evt.e1, 0 );
$evt.e1.bindArguments = function( $arg ) {
    $arg.x.value = jeb.ui.parseArgument($arg.x.domNodeInput.value);
    $arg.y.value = jeb.ui.parseArgument($arg.y.domNodeInput.value);
};

$evt.e1.guard.g1 = new jeb.lang.Guard( '$evt.e1.guard.g1', 'grdX', $evt.e1, 1 );
$evt.e1.guard.g1.predicate = function( $arg ) {
    return $B.belong($arg.x.value, $var.col.value);
};

$evt.e1.guard.g2 = new jeb.lang.Guard( '$evt.e1.guard.g2', 'grdRow', $evt.e1, 1 );
$evt.e1.guard.g2.predicate = function( $arg ) {
    return $B.belong($arg.y.value, $var.row.value);
};

$evt.e1.guard.g3 = new jeb.lang.Guard( '$evt.e1.guard.g3', 'grdHaveEmptyPlace', $evt.e1, 1 );
$evt.e1.guard.g3.predicate = function( $arg ) {
    return $B.equal($B.functionImage($var.board.value, $B.Pair($arg.x.value, $B('1'))), $cst.EMPTY);
};

$evt.e1.guard.g4 = new jeb.lang.Guard( '$evt.e1.guard.g4', 'grdPlaceEmpty', $evt.e1, 1 );
$evt.e1.guard.g4.predicate = function( $arg ) {
    return $B.equal($B.functionImage($var.board.value, $B.Pair($arg.x.value, $arg.y.value)), $cst.EMPTY);
};

$evt.e1.guard.g5 = new jeb.lang.Guard( '$evt.e1.guard.g5', 'grdLastEmptyRow', $evt.e1, 1 );
$evt.e1.guard.g5.predicate = function( $arg ) {
    return $B.or($B.greaterThan($B.plus($arg.y.value, $B('1')), $cst.ROW_CNT), $B.notEqual($B.functionImage($var.board.value, $B.Pair($arg.x.value, $B.plus($arg.y.value, $B('1')))), $cst.EMPTY));
};

$evt.e1.action.a1 = new jeb.lang.Action( '$evt.e1.action.a1', 'c', $evt.e1 );
$evt.e1.action.a1.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.board], [$B.override($var.board.value, $B.SetExtension($B.Pair($B.Pair($arg.x.value, $arg.y.value), $var.current_player.value)))]);
};

$evt.e1.action.a2 = new jeb.lang.Action( '$evt.e1.action.a2', 'changePlayerPrev', $evt.e1 );
$evt.e1.action.a2.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.previous_player], [$var.current_player.value]);
};

$evt.e1.action.a3 = new jeb.lang.Action( '$evt.e1.action.a3', 'changePlayer', $evt.e1 );
$evt.e1.action.a3.assignment = function( $arg ) {
    $B.becomesEqualTo([$var.current_player], [$var.previous_player.value]);
};


