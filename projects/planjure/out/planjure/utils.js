// Compiled by ClojureScript 0.0-2277
goog.provide('planjure.utils');
goog.require('cljs.core');
/**
* Update row with the mask at the given offset. Consider the mid-point of the
* mask as idx 0 of offset.
*/
planjure.utils.update_row = (function() {
var update_row = null;
var update_row__3 = (function (row,mask,offset){return update_row.call(null,row,mask,offset,(1),(1),(8));
});
var update_row__4 = (function (row,mask,offset,multiplier){return update_row.call(null,row,mask,offset,multiplier,(1),(8));
});
var update_row__6 = (function (row,mask,offset,multiplier,cost_min,cost_max){var mid_mask_idx = ((cljs.core.count.call(null,mask) / (2)) | (0));return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (mid_mask_idx){
return (function (idx,cost){var mask_idx = ((idx + mid_mask_idx) - offset);if(((mask_idx >= (0))) && ((mask_idx < cljs.core.count.call(null,mask))))
{var x__3850__auto__ = cost_min;var y__3851__auto__ = (function (){var x__3857__auto__ = (cost + (mask.call(null,mask_idx) * multiplier));var y__3858__auto__ = cost_max;return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})();return ((x__3850__auto__ > y__3851__auto__) ? x__3850__auto__ : y__3851__auto__);
} else
{return cost;
}
});})(mid_mask_idx))
,row));
});
update_row = function(row,mask,offset,multiplier,cost_min,cost_max){
switch(arguments.length){
case 3:
return update_row__3.call(this,row,mask,offset);
case 4:
return update_row__4.call(this,row,mask,offset,multiplier);
case 6:
return update_row__6.call(this,row,mask,offset,multiplier,cost_min,cost_max);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_row.cljs$core$IFn$_invoke$arity$3 = update_row__3;
update_row.cljs$core$IFn$_invoke$arity$4 = update_row__4;
update_row.cljs$core$IFn$_invoke$arity$6 = update_row__6;
return update_row;
})()
;
/**
* Update world with the 2-d matrix mask at x, y. Consider the mid-point of the
* matrix as x, y. Multiply mask by multiplier.
*/
planjure.utils.update_world = (function() {
var update_world = null;
var update_world__5 = (function (world,matrix,x,y,multiplier){return update_world.call(null,world,matrix,x,y,multiplier,(1),(8));
});
var update_world__7 = (function (world,matrix,x,y,multiplier,cost_min,cost_max){var mid_matrix_idx = ((cljs.core.count.call(null,matrix) / (2)) | (0));return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (mid_matrix_idx){
return (function (idx,row){var matrix_idx = ((idx + mid_matrix_idx) - y);if(((matrix_idx >= (0))) && ((matrix_idx < cljs.core.count.call(null,matrix))))
{return planjure.utils.update_row.call(null,row,matrix.call(null,matrix_idx),x,multiplier,cost_min,cost_max);
} else
{return row;
}
});})(mid_matrix_idx))
,world));
});
update_world = function(world,matrix,x,y,multiplier,cost_min,cost_max){
switch(arguments.length){
case 5:
return update_world__5.call(this,world,matrix,x,y,multiplier);
case 7:
return update_world__7.call(this,world,matrix,x,y,multiplier,cost_min,cost_max);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_world.cljs$core$IFn$_invoke$arity$5 = update_world__5;
update_world.cljs$core$IFn$_invoke$arity$7 = update_world__7;
return update_world;
})()
;
planjure.utils.time_f = (function time_f(f){return (function() { 
var G__10886__delegate = function (args){var start = (new Date());var ret = cljs.core.apply.call(null,f,args);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),((new Date()) - start),new cljs.core.Keyword(null,"return","return",-1891502105),ret], null);
};
var G__10886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10886__delegate.call(this,args);};
G__10886.cljs$lang$maxFixedArity = 0;
G__10886.cljs$lang$applyTo = (function (arglist__10887){
var args = cljs.core.seq(arglist__10887);
return G__10886__delegate(args);
});
G__10886.cljs$core$IFn$_invoke$arity$variadic = G__10886__delegate;
return G__10886;
})()
;
});

//# sourceMappingURL=utils.js.map