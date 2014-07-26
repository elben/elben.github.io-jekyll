// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.plan');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
planjure.plan.setup = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null),new cljs.core.Keyword(null,"finish","finish",4034428933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null)], null);
planjure.plan.path = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null)], null);
/**
* Randomly generate a tile with chance of it being cost of 1.
*/
planjure.plan.random_tile = (function random_tile(chance){if((cljs.core.rand.call(null) < chance))
{return 1;
} else
{return (1 + cljs.core.rand_int.call(null,5));
}
});
planjure.plan.random_world = (function random_world(rows,cols){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,rows,(function (){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cols,(function (){return planjure.plan.random_tile.call(null,0.7);
})));
})));
});
planjure.plan.create_empty_ascii = (function create_empty_ascii(world){var height = cljs.core.count.call(null,world);var width = cljs.core.count.call(null,cljs.core.first.call(null,world));var ascii = cljs.core.vec.call(null,cljs.core.repeat.call(null,height,cljs.core.vec.call(null,cljs.core.repeat.call(null,width," "))));return ascii;
});
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4160__auto__ = (function iter__69371(s__69372){return (new cljs.core.LazySeq(null,(function (){var s__69372__$1 = s__69372;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__69372__$1);if(temp__4092__auto__)
{var s__69372__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__69372__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__69372__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__69374 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__69373 = 0;while(true){
if((i__69373 < size__4159__auto__))
{var row = cljs.core._nth.call(null,c__4158__auto__,i__69373);cljs.core.chunk_append.call(null,b__69374,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (i__69373,row,c__4158__auto__,size__4159__auto__,b__69374,s__69372__$2,temp__4092__auto__){
return (function iter__69383(s__69384){return (new cljs.core.LazySeq(null,((function (i__69373,row,c__4158__auto__,size__4159__auto__,b__69374,s__69372__$2,temp__4092__auto__){
return (function (){var s__69384__$1 = s__69384;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__69384__$1);if(temp__4092__auto____$1)
{var s__69384__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__69384__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__69384__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__69386 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__69385 = 0;while(true){
if((i__69385 < size__4159__auto____$1))
{var node = cljs.core._nth.call(null,c__4158__auto____$1,i__69385);cljs.core.chunk_append.call(null,b__69386,(((node > 0))?"#":" "));
{
var G__69391 = (i__69385 + 1);
i__69385 = G__69391;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69386),iter__69383.call(null,cljs.core.chunk_rest.call(null,s__69384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69386),null);
}
} else
{var node = cljs.core.first.call(null,s__69384__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__69383.call(null,cljs.core.rest.call(null,s__69384__$2)));
}
} else
{return null;
}
break;
}
});})(i__69373,row,c__4158__auto__,size__4159__auto__,b__69374,s__69372__$2,temp__4092__auto__))
,null,null));
});})(i__69373,row,c__4158__auto__,size__4159__auto__,b__69374,s__69372__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()));
{
var G__69392 = (i__69373 + 1);
i__69373 = G__69392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69374),iter__69371.call(null,cljs.core.chunk_rest.call(null,s__69372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69374),null);
}
} else
{var row = cljs.core.first.call(null,s__69372__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (row,s__69372__$2,temp__4092__auto__){
return (function iter__69387(s__69388){return (new cljs.core.LazySeq(null,((function (row,s__69372__$2,temp__4092__auto__){
return (function (){var s__69388__$1 = s__69388;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__69388__$1);if(temp__4092__auto____$1)
{var s__69388__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__69388__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__69388__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__69390 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__69389 = 0;while(true){
if((i__69389 < size__4159__auto__))
{var node = cljs.core._nth.call(null,c__4158__auto__,i__69389);cljs.core.chunk_append.call(null,b__69390,(((node > 0))?"#":" "));
{
var G__69393 = (i__69389 + 1);
i__69389 = G__69393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69390),iter__69387.call(null,cljs.core.chunk_rest.call(null,s__69388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69390),null);
}
} else
{var node = cljs.core.first.call(null,s__69388__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__69387.call(null,cljs.core.rest.call(null,s__69388__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__69372__$2,temp__4092__auto__))
,null,null));
});})(row,s__69372__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()),iter__69371.call(null,cljs.core.rest.call(null,s__69372__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,world);
})());
});
planjure.plan.build_ascii_path = (function build_ascii_path(world,path){var ascii = planjure.plan.build_basic_ascii.call(null,world);var path__$1 = path;while(true){
if(!(cljs.core.empty_QMARK_.call(null,path__$1)))
{var vec__69395 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__69395,0,null);var c = cljs.core.nth.call(null,vec__69395,1,null);var row = ascii.call(null,r);{
var G__69396 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__69397 = cljs.core.rest.call(null,path__$1);
ascii = G__69396;
path__$1 = G__69397;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__69406_69414 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__69407_69415 = null;var count__69408_69416 = 0;var i__69409_69417 = 0;while(true){
if((i__69409_69417 < count__69408_69416))
{var i_69418 = cljs.core._nth.call(null,chunk__69407_69415,i__69409_69417);cljs.core.print.call(null,i_69418,"");
{
var G__69419 = seq__69406_69414;
var G__69420 = chunk__69407_69415;
var G__69421 = count__69408_69416;
var G__69422 = (i__69409_69417 + 1);
seq__69406_69414 = G__69419;
chunk__69407_69415 = G__69420;
count__69408_69416 = G__69421;
i__69409_69417 = G__69422;
continue;
}
} else
{var temp__4092__auto___69423 = cljs.core.seq.call(null,seq__69406_69414);if(temp__4092__auto___69423)
{var seq__69406_69424__$1 = temp__4092__auto___69423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69406_69424__$1))
{var c__4191__auto___69425 = cljs.core.chunk_first.call(null,seq__69406_69424__$1);{
var G__69426 = cljs.core.chunk_rest.call(null,seq__69406_69424__$1);
var G__69427 = c__4191__auto___69425;
var G__69428 = cljs.core.count.call(null,c__4191__auto___69425);
var G__69429 = 0;
seq__69406_69414 = G__69426;
chunk__69407_69415 = G__69427;
count__69408_69416 = G__69428;
i__69409_69417 = G__69429;
continue;
}
} else
{var i_69430 = cljs.core.first.call(null,seq__69406_69424__$1);cljs.core.print.call(null,i_69430,"");
{
var G__69431 = cljs.core.next.call(null,seq__69406_69424__$1);
var G__69432 = null;
var G__69433 = 0;
var G__69434 = 0;
seq__69406_69414 = G__69431;
chunk__69407_69415 = G__69432;
count__69408_69416 = G__69433;
i__69409_69417 = G__69434;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__69410 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__69411 = null;var count__69412 = 0;var i__69413 = 0;while(true){
if((i__69413 < count__69412))
{var i = cljs.core._nth.call(null,chunk__69411,i__69413);cljs.core.println.call(null,i,world.call(null,i));
{
var G__69435 = seq__69410;
var G__69436 = chunk__69411;
var G__69437 = count__69412;
var G__69438 = (i__69413 + 1);
seq__69410 = G__69435;
chunk__69411 = G__69436;
count__69412 = G__69437;
i__69413 = G__69438;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__69410);if(temp__4092__auto__)
{var seq__69410__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69410__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__69410__$1);{
var G__69439 = cljs.core.chunk_rest.call(null,seq__69410__$1);
var G__69440 = c__4191__auto__;
var G__69441 = cljs.core.count.call(null,c__4191__auto__);
var G__69442 = 0;
seq__69410 = G__69439;
chunk__69411 = G__69440;
count__69412 = G__69441;
i__69413 = G__69442;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__69410__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__69443 = cljs.core.next.call(null,seq__69410__$1);
var G__69444 = null;
var G__69445 = 0;
var G__69446 = 0;
seq__69410 = G__69443;
chunk__69411 = G__69444;
count__69412 = G__69445;
i__69413 = G__69446;
continue;
}
}
} else
{return null;
}
}
break;
}
});
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__69451 = cljs.core.seq.call(null,ascii);var chunk__69452 = null;var count__69453 = 0;var i__69454 = 0;while(true){
if((i__69454 < count__69453))
{var row = cljs.core._nth.call(null,chunk__69452,i__69454);cljs.core.println.call(null,row);
{
var G__69455 = seq__69451;
var G__69456 = chunk__69452;
var G__69457 = count__69453;
var G__69458 = (i__69454 + 1);
seq__69451 = G__69455;
chunk__69452 = G__69456;
count__69453 = G__69457;
i__69454 = G__69458;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__69451);if(temp__4092__auto__)
{var seq__69451__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69451__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__69451__$1);{
var G__69459 = cljs.core.chunk_rest.call(null,seq__69451__$1);
var G__69460 = c__4191__auto__;
var G__69461 = cljs.core.count.call(null,c__4191__auto__);
var G__69462 = 0;
seq__69451 = G__69459;
chunk__69452 = G__69460;
count__69453 = G__69461;
i__69454 = G__69462;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__69451__$1);cljs.core.println.call(null,row);
{
var G__69463 = cljs.core.next.call(null,seq__69451__$1);
var G__69464 = null;
var G__69465 = 0;
var G__69466 = 0;
seq__69451 = G__69463;
chunk__69452 = G__69464;
count__69453 = G__69465;
i__69454 = G__69466;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Plans a path in the world using specified algorithm.
*/
planjure.plan.plan = (function plan(algorithm,world,setup){return null;
});
/**
* Cost of traversing from a neighboring node to specified node in world.  In
* theory, the edges hold the cost. But in our current world, the nodes hold the
* cost. Means that the cost of moving from any of its neighboring node to
* specified node is the value of the node cell.
*/
planjure.plan.cost = (function cost(world,node){var vec__69468 = node;var r = cljs.core.nth.call(null,vec__69468,0,null);var c = cljs.core.nth.call(null,vec__69468,1,null);return world.call(null,r).call(null,c);
});
/**
* Returns path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
*/
planjure.plan.find_path = (function find_path(previous,p__69469){var map__69471 = p__69469;var map__69471__$1 = ((cljs.core.seq_QMARK_.call(null,map__69471))?cljs.core.apply.call(null,cljs.core.hash_map,map__69471):map__69471);var setup = map__69471__$1;var finish = cljs.core.get.call(null,map__69471__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__69471__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
{return cljs.core.PersistentVector.EMPTY;
} else
{var path = cljs.core.PersistentVector.EMPTY;var seen = cljs.core.PersistentHashSet.EMPTY;var node = finish;while(true){
if(cljs.core._EQ_.call(null,node,start))
{return cljs.core.reverse.call(null,cljs.core.conj.call(null,path,start));
} else
{if(!(cljs.core.contains_QMARK_.call(null,previous,node)))
{return cljs.core.reverse.call(null,path);
} else
{if(cljs.core.contains_QMARK_.call(null,seen,node))
{return cljs.core.reverse.call(null,cljs.core.conj.call(null,path,node));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__69472 = cljs.core.conj.call(null,path,node);
var G__69473 = cljs.core.conj.call(null,seen,node);
var G__69474 = previous.call(null,node);
path = G__69472;
seen = G__69473;
node = G__69474;
continue;
}
} else
{return null;
}
}
}
}
break;
}
}
});
/**
* Return the neighbors of node. Only four directions. Don't include start node
* as neighbor, because we assume it's never better to back through the start
* node (that is, we assume consistency in costs).
*/
planjure.plan.neighbors = (function neighbors(world,node,p__69475){var map__69479 = p__69475;var map__69479__$1 = ((cljs.core.seq_QMARK_.call(null,map__69479))?cljs.core.apply.call(null,cljs.core.hash_map,map__69479):map__69479);var start = cljs.core.get.call(null,map__69479__$1,new cljs.core.Keyword(null,"start","start",1123661780));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols){
return (function (neighs,p__69480){var vec__69481 = p__69480;var row_mod = cljs.core.nth.call(null,vec__69481,0,null);var col_mod = cljs.core.nth.call(null,vec__69481,1,null);var row = (node.call(null,0) + row_mod);var col = (node.call(null,1) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= 0)) && ((col < cols)) && ((col >= 0)))
{return cljs.core.conj.call(null,neighs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else
{return neighs;
}
});})(rows,cols))
;return cljs.core.reduce.call(null,find_neighbors,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null)], null));
});
planjure.plan.lookup_g_cost = (function lookup_g_cost(g_costs,node){if(cljs.core.contains_QMARK_.call(null,g_costs,node))
{return g_costs.call(null,node);
} else
{return 0;
}
});
/**
* Find nodes that would improve its cost if it were to arrive from node instead
* of the cost specified in g-cost. Exclude nodes that would increase its cost.
* Returns map of nodes to cost.
*/
planjure.plan.nodes_with_improved_costs = (function nodes_with_improved_costs(world,g_costs,base_node,nodes){var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var collect_improved_nodes = ((function (rows,cols){
return (function (improved_nodes,node){var new_cost = (planjure.plan.lookup_g_cost.call(null,g_costs,base_node) + planjure.plan.cost.call(null,world,node));if((!(cljs.core.contains_QMARK_.call(null,g_costs,node))) || ((new_cost < planjure.plan.lookup_g_cost.call(null,g_costs,node))))
{return cljs.core.assoc.call(null,improved_nodes,node,new_cost);
} else
{return improved_nodes;
}
});})(rows,cols))
;return cljs.core.reduce.call(null,collect_improved_nodes,cljs.core.PersistentArrayMap.EMPTY,nodes);
});
/**
* Dijkstra's classic graph algorithm.
* 
* Returns optimal path from start to finish.
*/
planjure.plan.dijkstra = (function dijkstra(world,p__69484){var map__69486 = p__69484;var map__69486__$1 = ((cljs.core.seq_QMARK_.call(null,map__69486))?cljs.core.apply.call(null,cljs.core.hash_map,map__69486):map__69486);var setup = map__69486__$1;var finish = cljs.core.get.call(null,map__69486__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__69486__$1,new cljs.core.Keyword(null,"start","start",1123661780));var pq = tailrecursion.priority_map.priority_map.call(null,start,0);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var old_pq = pq;var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__69482_SHARP_,p2__69483_SHARP_){return cljs.core.assoc.call(null,p1__69482_SHARP_,p2__69483_SHARP_,node);
});})(pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__69487 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_costs));
var G__69488 = updated_g_costs;
var G__69489 = updated_previous;
pq = G__69487;
g_costs = G__69488;
previous = G__69489;
continue;
}
} else
{return null;
}
}
}
break;
}
});
/**
* Depth-first search.
* 
* Instead of terminating right away after finish is found, this DFS
* implementation exhausts the search space to find the global maxima.
* 
* Returns optimal path from start to finish.
*/
planjure.plan.dfs = (function dfs(world,p__69492){var map__69494 = p__69492;var map__69494__$1 = ((cljs.core.seq_QMARK_.call(null,map__69494))?cljs.core.apply.call(null,cljs.core.hash_map,map__69494):map__69494);var setup = map__69494__$1;var finish = cljs.core.get.call(null,map__69494__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__69494__$1,new cljs.core.Keyword(null,"start","start",1123661780));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__69495 = cljs.core.pop.call(null,stack);
var G__69496 = g_costs;
var G__69497 = previous;
stack = G__69495;
g_costs = G__69496;
previous = G__69497;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__69490_SHARP_,p2__69491_SHARP_){return cljs.core.assoc.call(null,p1__69490_SHARP_,p2__69491_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__69498 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__69499 = updated_g_costs;
var G__69500 = updated_previous;
stack = G__69498;
g_costs = G__69499;
previous = G__69500;
continue;
}
} else
{return null;
}
}
}
break;
}
});

//# sourceMappingURL=plan.js.map