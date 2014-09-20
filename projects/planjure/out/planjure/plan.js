// Compiled by ClojureScript 0.0-2280
goog.provide('planjure.plan');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
planjure.plan.setup = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),new cljs.core.Keyword(null,"finish","finish",-586688046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
planjure.plan.path = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
/**
* Randomly generate a tile with chance of it being cost of 1.
*/
planjure.plan.random_tile = (function random_tile(chance){if((cljs.core.rand.call(null) < chance))
{return (1);
} else
{return ((1) + cljs.core.rand_int.call(null,(5)));
}
});
planjure.plan.random_world = (function random_world(rows,cols){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,rows,(function (){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cols,(function (){return planjure.plan.random_tile.call(null,0.7);
})));
})));
});
planjure.plan.create_empty_ascii = (function create_empty_ascii(world){var height = cljs.core.count.call(null,world);var width = cljs.core.count.call(null,cljs.core.first.call(null,world));var ascii = cljs.core.vec.call(null,cljs.core.repeat.call(null,height,cljs.core.vec.call(null,cljs.core.repeat.call(null,width," "))));return ascii;
});
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4269__auto__ = (function iter__684227(s__684228){return (new cljs.core.LazySeq(null,(function (){var s__684228__$1 = s__684228;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__684228__$1);if(temp__4126__auto__)
{var s__684228__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__684228__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__684228__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__684230 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__684229 = (0);while(true){
if((i__684229 < size__4268__auto__))
{var row = cljs.core._nth.call(null,c__4267__auto__,i__684229);cljs.core.chunk_append.call(null,b__684230,cljs.core.vec.call(null,(function (){var iter__4269__auto__ = ((function (i__684229,row,c__4267__auto__,size__4268__auto__,b__684230,s__684228__$2,temp__4126__auto__){
return (function iter__684239(s__684240){return (new cljs.core.LazySeq(null,((function (i__684229,row,c__4267__auto__,size__4268__auto__,b__684230,s__684228__$2,temp__4126__auto__){
return (function (){var s__684240__$1 = s__684240;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__684240__$1);if(temp__4126__auto____$1)
{var s__684240__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__684240__$2))
{var c__4267__auto____$1 = cljs.core.chunk_first.call(null,s__684240__$2);var size__4268__auto____$1 = cljs.core.count.call(null,c__4267__auto____$1);var b__684242 = cljs.core.chunk_buffer.call(null,size__4268__auto____$1);if((function (){var i__684241 = (0);while(true){
if((i__684241 < size__4268__auto____$1))
{var node = cljs.core._nth.call(null,c__4267__auto____$1,i__684241);cljs.core.chunk_append.call(null,b__684242,(((node > (0)))?"#":" "));
{
var G__684247 = (i__684241 + (1));
i__684241 = G__684247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684242),iter__684239.call(null,cljs.core.chunk_rest.call(null,s__684240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684242),null);
}
} else
{var node = cljs.core.first.call(null,s__684240__$2);return cljs.core.cons.call(null,(((node > (0)))?"#":" "),iter__684239.call(null,cljs.core.rest.call(null,s__684240__$2)));
}
} else
{return null;
}
break;
}
});})(i__684229,row,c__4267__auto__,size__4268__auto__,b__684230,s__684228__$2,temp__4126__auto__))
,null,null));
});})(i__684229,row,c__4267__auto__,size__4268__auto__,b__684230,s__684228__$2,temp__4126__auto__))
;return iter__4269__auto__.call(null,row);
})()));
{
var G__684248 = (i__684229 + (1));
i__684229 = G__684248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684230),iter__684227.call(null,cljs.core.chunk_rest.call(null,s__684228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684230),null);
}
} else
{var row = cljs.core.first.call(null,s__684228__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4269__auto__ = ((function (row,s__684228__$2,temp__4126__auto__){
return (function iter__684243(s__684244){return (new cljs.core.LazySeq(null,((function (row,s__684228__$2,temp__4126__auto__){
return (function (){var s__684244__$1 = s__684244;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__684244__$1);if(temp__4126__auto____$1)
{var s__684244__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__684244__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__684244__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__684246 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__684245 = (0);while(true){
if((i__684245 < size__4268__auto__))
{var node = cljs.core._nth.call(null,c__4267__auto__,i__684245);cljs.core.chunk_append.call(null,b__684246,(((node > (0)))?"#":" "));
{
var G__684249 = (i__684245 + (1));
i__684245 = G__684249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684246),iter__684243.call(null,cljs.core.chunk_rest.call(null,s__684244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__684246),null);
}
} else
{var node = cljs.core.first.call(null,s__684244__$2);return cljs.core.cons.call(null,(((node > (0)))?"#":" "),iter__684243.call(null,cljs.core.rest.call(null,s__684244__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__684228__$2,temp__4126__auto__))
,null,null));
});})(row,s__684228__$2,temp__4126__auto__))
;return iter__4269__auto__.call(null,row);
})()),iter__684227.call(null,cljs.core.rest.call(null,s__684228__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,world);
})());
});
planjure.plan.build_ascii_path = (function build_ascii_path(world,path){var ascii = planjure.plan.build_basic_ascii.call(null,world);var path__$1 = path;while(true){
if(!(cljs.core.empty_QMARK_.call(null,path__$1)))
{var vec__684251 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__684251,(0),null);var c = cljs.core.nth.call(null,vec__684251,(1),null);var row = ascii.call(null,r);{
var G__684252 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__684253 = cljs.core.rest.call(null,path__$1);
ascii = G__684252;
path__$1 = G__684253;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__684262_684270 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__684263_684271 = null;var count__684264_684272 = (0);var i__684265_684273 = (0);while(true){
if((i__684265_684273 < count__684264_684272))
{var i_684274 = cljs.core._nth.call(null,chunk__684263_684271,i__684265_684273);cljs.core.print.call(null,i_684274,"");
{
var G__684275 = seq__684262_684270;
var G__684276 = chunk__684263_684271;
var G__684277 = count__684264_684272;
var G__684278 = (i__684265_684273 + (1));
seq__684262_684270 = G__684275;
chunk__684263_684271 = G__684276;
count__684264_684272 = G__684277;
i__684265_684273 = G__684278;
continue;
}
} else
{var temp__4126__auto___684279 = cljs.core.seq.call(null,seq__684262_684270);if(temp__4126__auto___684279)
{var seq__684262_684280__$1 = temp__4126__auto___684279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__684262_684280__$1))
{var c__4300__auto___684281 = cljs.core.chunk_first.call(null,seq__684262_684280__$1);{
var G__684282 = cljs.core.chunk_rest.call(null,seq__684262_684280__$1);
var G__684283 = c__4300__auto___684281;
var G__684284 = cljs.core.count.call(null,c__4300__auto___684281);
var G__684285 = (0);
seq__684262_684270 = G__684282;
chunk__684263_684271 = G__684283;
count__684264_684272 = G__684284;
i__684265_684273 = G__684285;
continue;
}
} else
{var i_684286 = cljs.core.first.call(null,seq__684262_684280__$1);cljs.core.print.call(null,i_684286,"");
{
var G__684287 = cljs.core.next.call(null,seq__684262_684280__$1);
var G__684288 = null;
var G__684289 = (0);
var G__684290 = (0);
seq__684262_684270 = G__684287;
chunk__684263_684271 = G__684288;
count__684264_684272 = G__684289;
i__684265_684273 = G__684290;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__684266 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__684267 = null;var count__684268 = (0);var i__684269 = (0);while(true){
if((i__684269 < count__684268))
{var i = cljs.core._nth.call(null,chunk__684267,i__684269);cljs.core.println.call(null,i,world.call(null,i));
{
var G__684291 = seq__684266;
var G__684292 = chunk__684267;
var G__684293 = count__684268;
var G__684294 = (i__684269 + (1));
seq__684266 = G__684291;
chunk__684267 = G__684292;
count__684268 = G__684293;
i__684269 = G__684294;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__684266);if(temp__4126__auto__)
{var seq__684266__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__684266__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__684266__$1);{
var G__684295 = cljs.core.chunk_rest.call(null,seq__684266__$1);
var G__684296 = c__4300__auto__;
var G__684297 = cljs.core.count.call(null,c__4300__auto__);
var G__684298 = (0);
seq__684266 = G__684295;
chunk__684267 = G__684296;
count__684268 = G__684297;
i__684269 = G__684298;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__684266__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__684299 = cljs.core.next.call(null,seq__684266__$1);
var G__684300 = null;
var G__684301 = (0);
var G__684302 = (0);
seq__684266 = G__684299;
chunk__684267 = G__684300;
count__684268 = G__684301;
i__684269 = G__684302;
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
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__684307 = cljs.core.seq.call(null,ascii);var chunk__684308 = null;var count__684309 = (0);var i__684310 = (0);while(true){
if((i__684310 < count__684309))
{var row = cljs.core._nth.call(null,chunk__684308,i__684310);cljs.core.println.call(null,row);
{
var G__684311 = seq__684307;
var G__684312 = chunk__684308;
var G__684313 = count__684309;
var G__684314 = (i__684310 + (1));
seq__684307 = G__684311;
chunk__684308 = G__684312;
count__684309 = G__684313;
i__684310 = G__684314;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__684307);if(temp__4126__auto__)
{var seq__684307__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__684307__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__684307__$1);{
var G__684315 = cljs.core.chunk_rest.call(null,seq__684307__$1);
var G__684316 = c__4300__auto__;
var G__684317 = cljs.core.count.call(null,c__4300__auto__);
var G__684318 = (0);
seq__684307 = G__684315;
chunk__684308 = G__684316;
count__684309 = G__684317;
i__684310 = G__684318;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__684307__$1);cljs.core.println.call(null,row);
{
var G__684319 = cljs.core.next.call(null,seq__684307__$1);
var G__684320 = null;
var G__684321 = (0);
var G__684322 = (0);
seq__684307 = G__684319;
chunk__684308 = G__684320;
count__684309 = G__684321;
i__684310 = G__684322;
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
* Cost of traversing from a neighboring node to specified node in world. In
* theory, the edges hold the cost. But in our current world, the nodes hold the
* cost. Means that the cost of moving from any of its neighboring node to
* specified node is the value of the node cell.
*/
planjure.plan.cost = (function cost(world,node){var vec__684324 = node;var r = cljs.core.nth.call(null,vec__684324,(0),null);var c = cljs.core.nth.call(null,vec__684324,(1),null);return world.call(null,r).call(null,c);
});
/**
* Similar to `cost`, but use Manhattan distance heuristics from node to finish
* node.
*/
planjure.plan.cost_heuristic = (function cost_heuristic(world,node,finish){var vec__684327 = node;var r = cljs.core.nth.call(null,vec__684327,(0),null);var c = cljs.core.nth.call(null,vec__684327,(1),null);var vec__684328 = finish;var r2 = cljs.core.nth.call(null,vec__684328,(0),null);var c2 = cljs.core.nth.call(null,vec__684328,(1),null);var g_cost = planjure.plan.cost.call(null,world,node);var h_cost = (Math.abs.call(null,(r - r2)) + Math.abs.call(null,(c - c2)));return (g_cost + h_cost);
});
/**
* Find path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
* 
* Returns map:
* 
* {:path [...]
* :cost Int}
* 
*/
planjure.plan.find_path = (function find_path(previous,world,p__684329){var map__684331 = p__684329;var map__684331__$1 = ((cljs.core.seq_QMARK_.call(null,map__684331))?cljs.core.apply.call(null,cljs.core.hash_map,map__684331):map__684331);var setup = map__684331__$1;var finish = cljs.core.get.call(null,map__684331__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__684331__$1,new cljs.core.Keyword(null,"start","start",-355208981));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
{return cljs.core.PersistentVector.EMPTY;
} else
{var path = cljs.core.PersistentVector.EMPTY;var seen = cljs.core.PersistentHashSet.EMPTY;var node = finish;var cost_sum = (0);while(true){
if(cljs.core._EQ_.call(null,node,start))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.reverse.call(null,cljs.core.conj.call(null,path,start)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cost_sum], null);
} else
{if(!(cljs.core.contains_QMARK_.call(null,previous,node)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.reverse.call(null,path),new cljs.core.Keyword(null,"cost","cost",-1094861735),cost_sum], null);
} else
{if(cljs.core.contains_QMARK_.call(null,seen,node))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.reverse.call(null,cljs.core.conj.call(null,path,node)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cost_sum], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__684332 = cljs.core.conj.call(null,path,node);
var G__684333 = cljs.core.conj.call(null,seen,node);
var G__684334 = previous.call(null,node);
var G__684335 = (cost_sum + planjure.plan.cost.call(null,world,node));
path = G__684332;
seen = G__684333;
node = G__684334;
cost_sum = G__684335;
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
planjure.plan.neighbors = (function neighbors(world,node,p__684336){var map__684340 = p__684336;var map__684340__$1 = ((cljs.core.seq_QMARK_.call(null,map__684340))?cljs.core.apply.call(null,cljs.core.hash_map,map__684340):map__684340);var start = cljs.core.get.call(null,map__684340__$1,new cljs.core.Keyword(null,"start","start",-355208981));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols,map__684340,map__684340__$1,start){
return (function (neighs,p__684341){var vec__684342 = p__684341;var row_mod = cljs.core.nth.call(null,vec__684342,(0),null);var col_mod = cljs.core.nth.call(null,vec__684342,(1),null);var row = (node.call(null,(0)) + row_mod);var col = (node.call(null,(1)) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= (0))) && ((col < cols)) && ((col >= (0))))
{return cljs.core.conj.call(null,neighs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else
{return neighs;
}
});})(rows,cols,map__684340,map__684340__$1,start))
;return cljs.core.reduce.call(null,find_neighbors,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));
});
planjure.plan.lookup_g_cost = (function lookup_g_cost(g_costs,node){if(cljs.core.contains_QMARK_.call(null,g_costs,node))
{return g_costs.call(null,node);
} else
{return (0);
}
});
/**
* Find nodes that would improve its cost if it were to arrive from node instead
* of the cost specified in g-cost. Exclude nodes that would increase its cost.
* 
* If a cost function is not provided, default to the default cost function,
* `cost`, defined in this namespace. If provided, use that.
* 
* Returns map of nodes to cost.
*/
planjure.plan.nodes_with_improved_costs = (function() {
var nodes_with_improved_costs = null;
var nodes_with_improved_costs__4 = (function (world,g_costs,base_node,nodes){return nodes_with_improved_costs.call(null,world,g_costs,base_node,nodes,planjure.plan.cost);
});
var nodes_with_improved_costs__5 = (function (world,g_costs,base_node,nodes,cost_fn){var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var collect_improved_nodes = ((function (rows,cols){
return (function (improved_nodes,node){var new_cost = (planjure.plan.lookup_g_cost.call(null,g_costs,base_node) + cost_fn.call(null,world,node));if((!(cljs.core.contains_QMARK_.call(null,g_costs,node))) || ((new_cost < planjure.plan.lookup_g_cost.call(null,g_costs,node))))
{return cljs.core.assoc.call(null,improved_nodes,node,new_cost);
} else
{return improved_nodes;
}
});})(rows,cols))
;return cljs.core.reduce.call(null,collect_improved_nodes,cljs.core.PersistentArrayMap.EMPTY,nodes);
});
nodes_with_improved_costs = function(world,g_costs,base_node,nodes,cost_fn){
switch(arguments.length){
case 4:
return nodes_with_improved_costs__4.call(this,world,g_costs,base_node,nodes);
case 5:
return nodes_with_improved_costs__5.call(this,world,g_costs,base_node,nodes,cost_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nodes_with_improved_costs.cljs$core$IFn$_invoke$arity$4 = nodes_with_improved_costs__4;
nodes_with_improved_costs.cljs$core$IFn$_invoke$arity$5 = nodes_with_improved_costs__5;
return nodes_with_improved_costs;
})()
;
/**
* A* algorithm. Takes a world, setup, and cost function.
* 
* Returns a map containing:
* 
* {
* :path    [...]
* :visited [...]
* }
* 
* Where :path is the optimal path from start to finish, and :visited are the
* nodes visited by the search.
*/
planjure.plan.generic_astar = (function generic_astar(world,p__684345,cost_heuristic){var map__684347 = p__684345;var map__684347__$1 = ((cljs.core.seq_QMARK_.call(null,map__684347))?cljs.core.apply.call(null,cljs.core.hash_map,map__684347):map__684347);var setup = map__684347__$1;var finish = cljs.core.get.call(null,map__684347__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__684347__$1,new cljs.core.Keyword(null,"start","start",-355208981));var pq = tailrecursion.priority_map.priority_map.call(null,start,(0));var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return cljs.core.assoc.call(null,planjure.plan.find_path.call(null,previous,world,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return cljs.core.assoc.call(null,planjure.plan.find_path.call(null,previous,world,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs,planjure.plan.cost);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var improved_neighbor_heuristics = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs,cost_heuristic);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,improved_neighbor_heuristics,updated_g_costs,map__684347,map__684347__$1,setup,finish,start){
return (function (p1__684343_SHARP_,p2__684344_SHARP_){return cljs.core.assoc.call(null,p1__684343_SHARP_,p2__684344_SHARP_,node);
});})(pq,g_costs,previous,node,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,improved_neighbor_heuristics,updated_g_costs,map__684347,map__684347__$1,setup,finish,start))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__684348 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_heuristics));
var G__684349 = updated_g_costs;
var G__684350 = updated_previous;
pq = G__684348;
g_costs = G__684349;
previous = G__684350;
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
* A* algorithm.
* 
* Returns a map containing:
* 
* {
* :path    [...]
* :visited [...]
* }
* 
* Where :path is the optimal path from start to finish, and :visited are the
* nodes visited by the search.
*/
planjure.plan.astar = (function astar(world,p__684351){var map__684353 = p__684351;var map__684353__$1 = ((cljs.core.seq_QMARK_.call(null,map__684353))?cljs.core.apply.call(null,cljs.core.hash_map,map__684353):map__684353);var setup = map__684353__$1;var finish = cljs.core.get.call(null,map__684353__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__684353__$1,new cljs.core.Keyword(null,"start","start",-355208981));var cost_fn = ((function (map__684353,map__684353__$1,setup,finish,start){
return (function (world__$1,node){return planjure.plan.cost_heuristic.call(null,world__$1,node,finish);
});})(map__684353,map__684353__$1,setup,finish,start))
;return planjure.plan.generic_astar.call(null,world,setup,cost_fn);
});
/**
* Dijkstra's classic graph algorithm.
* 
* Returns a map containing:
* 
* {
* :path    [...]
* :visited [...]
* }
* 
* Where :path is the optimal path from start to finish, and :visited are the
* nodes visited by the search.
*/
planjure.plan.dijkstra = (function dijkstra(world,setup){return planjure.plan.generic_astar.call(null,world,setup,planjure.plan.cost);
});
/**
* Depth-first search.
* 
* Instead of terminating right away after finish is found, this DFS
* implementation exhausts the search space to find the global maxima.
* 
* Returns a map containing:
* 
* {
* :path    [...]
* :visited [...]
* }
* 
* Where :path is the optimal path from start to finish, and :visited are the
* nodes visited by the search.
*/
planjure.plan.dfs = (function dfs(world,p__684356){var map__684358 = p__684356;var map__684358__$1 = ((cljs.core.seq_QMARK_.call(null,map__684358))?cljs.core.apply.call(null,cljs.core.hash_map,map__684358):map__684358);var setup = map__684358__$1;var finish = cljs.core.get.call(null,map__684358__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__684358__$1,new cljs.core.Keyword(null,"start","start",-355208981));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return cljs.core.assoc.call(null,planjure.plan.find_path.call(null,previous,world,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous));
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__684359 = cljs.core.pop.call(null,stack);
var G__684360 = g_costs;
var G__684361 = previous;
stack = G__684359;
g_costs = G__684360;
previous = G__684361;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__684358,map__684358__$1,setup,finish,start){
return (function (p1__684354_SHARP_,p2__684355_SHARP_){return cljs.core.assoc.call(null,p1__684354_SHARP_,p2__684355_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__684358,map__684358__$1,setup,finish,start))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__684362 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__684363 = updated_g_costs;
var G__684364 = updated_previous;
stack = G__684362;
g_costs = G__684363;
previous = G__684364;
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