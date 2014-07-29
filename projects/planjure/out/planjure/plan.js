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
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4160__auto__ = (function iter__184140(s__184141){return (new cljs.core.LazySeq(null,(function (){var s__184141__$1 = s__184141;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184141__$1);if(temp__4092__auto__)
{var s__184141__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184141__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__184141__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__184143 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__184142 = 0;while(true){
if((i__184142 < size__4159__auto__))
{var row = cljs.core._nth.call(null,c__4158__auto__,i__184142);cljs.core.chunk_append.call(null,b__184143,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (i__184142,row,c__4158__auto__,size__4159__auto__,b__184143,s__184141__$2,temp__4092__auto__){
return (function iter__184152(s__184153){return (new cljs.core.LazySeq(null,((function (i__184142,row,c__4158__auto__,size__4159__auto__,b__184143,s__184141__$2,temp__4092__auto__){
return (function (){var s__184153__$1 = s__184153;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184153__$1);if(temp__4092__auto____$1)
{var s__184153__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184153__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__184153__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__184155 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__184154 = 0;while(true){
if((i__184154 < size__4159__auto____$1))
{var node = cljs.core._nth.call(null,c__4158__auto____$1,i__184154);cljs.core.chunk_append.call(null,b__184155,(((node > 0))?"#":" "));
{
var G__184160 = (i__184154 + 1);
i__184154 = G__184160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184155),iter__184152.call(null,cljs.core.chunk_rest.call(null,s__184153__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184155),null);
}
} else
{var node = cljs.core.first.call(null,s__184153__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__184152.call(null,cljs.core.rest.call(null,s__184153__$2)));
}
} else
{return null;
}
break;
}
});})(i__184142,row,c__4158__auto__,size__4159__auto__,b__184143,s__184141__$2,temp__4092__auto__))
,null,null));
});})(i__184142,row,c__4158__auto__,size__4159__auto__,b__184143,s__184141__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()));
{
var G__184161 = (i__184142 + 1);
i__184142 = G__184161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184143),iter__184140.call(null,cljs.core.chunk_rest.call(null,s__184141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184143),null);
}
} else
{var row = cljs.core.first.call(null,s__184141__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (row,s__184141__$2,temp__4092__auto__){
return (function iter__184156(s__184157){return (new cljs.core.LazySeq(null,((function (row,s__184141__$2,temp__4092__auto__){
return (function (){var s__184157__$1 = s__184157;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184157__$1);if(temp__4092__auto____$1)
{var s__184157__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184157__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__184157__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__184159 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__184158 = 0;while(true){
if((i__184158 < size__4159__auto__))
{var node = cljs.core._nth.call(null,c__4158__auto__,i__184158);cljs.core.chunk_append.call(null,b__184159,(((node > 0))?"#":" "));
{
var G__184162 = (i__184158 + 1);
i__184158 = G__184162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184159),iter__184156.call(null,cljs.core.chunk_rest.call(null,s__184157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184159),null);
}
} else
{var node = cljs.core.first.call(null,s__184157__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__184156.call(null,cljs.core.rest.call(null,s__184157__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__184141__$2,temp__4092__auto__))
,null,null));
});})(row,s__184141__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()),iter__184140.call(null,cljs.core.rest.call(null,s__184141__$2)));
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
{var vec__184164 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__184164,0,null);var c = cljs.core.nth.call(null,vec__184164,1,null);var row = ascii.call(null,r);{
var G__184165 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__184166 = cljs.core.rest.call(null,path__$1);
ascii = G__184165;
path__$1 = G__184166;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__184175_184183 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__184176_184184 = null;var count__184177_184185 = 0;var i__184178_184186 = 0;while(true){
if((i__184178_184186 < count__184177_184185))
{var i_184187 = cljs.core._nth.call(null,chunk__184176_184184,i__184178_184186);cljs.core.print.call(null,i_184187,"");
{
var G__184188 = seq__184175_184183;
var G__184189 = chunk__184176_184184;
var G__184190 = count__184177_184185;
var G__184191 = (i__184178_184186 + 1);
seq__184175_184183 = G__184188;
chunk__184176_184184 = G__184189;
count__184177_184185 = G__184190;
i__184178_184186 = G__184191;
continue;
}
} else
{var temp__4092__auto___184192 = cljs.core.seq.call(null,seq__184175_184183);if(temp__4092__auto___184192)
{var seq__184175_184193__$1 = temp__4092__auto___184192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184175_184193__$1))
{var c__4191__auto___184194 = cljs.core.chunk_first.call(null,seq__184175_184193__$1);{
var G__184195 = cljs.core.chunk_rest.call(null,seq__184175_184193__$1);
var G__184196 = c__4191__auto___184194;
var G__184197 = cljs.core.count.call(null,c__4191__auto___184194);
var G__184198 = 0;
seq__184175_184183 = G__184195;
chunk__184176_184184 = G__184196;
count__184177_184185 = G__184197;
i__184178_184186 = G__184198;
continue;
}
} else
{var i_184199 = cljs.core.first.call(null,seq__184175_184193__$1);cljs.core.print.call(null,i_184199,"");
{
var G__184200 = cljs.core.next.call(null,seq__184175_184193__$1);
var G__184201 = null;
var G__184202 = 0;
var G__184203 = 0;
seq__184175_184183 = G__184200;
chunk__184176_184184 = G__184201;
count__184177_184185 = G__184202;
i__184178_184186 = G__184203;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__184179 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__184180 = null;var count__184181 = 0;var i__184182 = 0;while(true){
if((i__184182 < count__184181))
{var i = cljs.core._nth.call(null,chunk__184180,i__184182);cljs.core.println.call(null,i,world.call(null,i));
{
var G__184204 = seq__184179;
var G__184205 = chunk__184180;
var G__184206 = count__184181;
var G__184207 = (i__184182 + 1);
seq__184179 = G__184204;
chunk__184180 = G__184205;
count__184181 = G__184206;
i__184182 = G__184207;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184179);if(temp__4092__auto__)
{var seq__184179__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184179__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__184179__$1);{
var G__184208 = cljs.core.chunk_rest.call(null,seq__184179__$1);
var G__184209 = c__4191__auto__;
var G__184210 = cljs.core.count.call(null,c__4191__auto__);
var G__184211 = 0;
seq__184179 = G__184208;
chunk__184180 = G__184209;
count__184181 = G__184210;
i__184182 = G__184211;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__184179__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__184212 = cljs.core.next.call(null,seq__184179__$1);
var G__184213 = null;
var G__184214 = 0;
var G__184215 = 0;
seq__184179 = G__184212;
chunk__184180 = G__184213;
count__184181 = G__184214;
i__184182 = G__184215;
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
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__184220 = cljs.core.seq.call(null,ascii);var chunk__184221 = null;var count__184222 = 0;var i__184223 = 0;while(true){
if((i__184223 < count__184222))
{var row = cljs.core._nth.call(null,chunk__184221,i__184223);cljs.core.println.call(null,row);
{
var G__184224 = seq__184220;
var G__184225 = chunk__184221;
var G__184226 = count__184222;
var G__184227 = (i__184223 + 1);
seq__184220 = G__184224;
chunk__184221 = G__184225;
count__184222 = G__184226;
i__184223 = G__184227;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184220);if(temp__4092__auto__)
{var seq__184220__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184220__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__184220__$1);{
var G__184228 = cljs.core.chunk_rest.call(null,seq__184220__$1);
var G__184229 = c__4191__auto__;
var G__184230 = cljs.core.count.call(null,c__4191__auto__);
var G__184231 = 0;
seq__184220 = G__184228;
chunk__184221 = G__184229;
count__184222 = G__184230;
i__184223 = G__184231;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__184220__$1);cljs.core.println.call(null,row);
{
var G__184232 = cljs.core.next.call(null,seq__184220__$1);
var G__184233 = null;
var G__184234 = 0;
var G__184235 = 0;
seq__184220 = G__184232;
chunk__184221 = G__184233;
count__184222 = G__184234;
i__184223 = G__184235;
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
planjure.plan.cost = (function cost(world,node){var vec__184237 = node;var r = cljs.core.nth.call(null,vec__184237,0,null);var c = cljs.core.nth.call(null,vec__184237,1,null);return world.call(null,r).call(null,c);
});
/**
* Returns path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
*/
planjure.plan.find_path = (function find_path(previous,p__184238){var map__184240 = p__184238;var map__184240__$1 = ((cljs.core.seq_QMARK_.call(null,map__184240))?cljs.core.apply.call(null,cljs.core.hash_map,map__184240):map__184240);var setup = map__184240__$1;var finish = cljs.core.get.call(null,map__184240__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__184240__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
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
var G__184241 = cljs.core.conj.call(null,path,node);
var G__184242 = cljs.core.conj.call(null,seen,node);
var G__184243 = previous.call(null,node);
path = G__184241;
seen = G__184242;
node = G__184243;
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
planjure.plan.neighbors = (function neighbors(world,node,p__184244){var map__184248 = p__184244;var map__184248__$1 = ((cljs.core.seq_QMARK_.call(null,map__184248))?cljs.core.apply.call(null,cljs.core.hash_map,map__184248):map__184248);var start = cljs.core.get.call(null,map__184248__$1,new cljs.core.Keyword(null,"start","start",1123661780));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols){
return (function (neighs,p__184249){var vec__184250 = p__184249;var row_mod = cljs.core.nth.call(null,vec__184250,0,null);var col_mod = cljs.core.nth.call(null,vec__184250,1,null);var row = (node.call(null,0) + row_mod);var col = (node.call(null,1) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= 0)) && ((col < cols)) && ((col >= 0)))
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
planjure.plan.dijkstra = (function dijkstra(world,p__184253){var map__184255 = p__184253;var map__184255__$1 = ((cljs.core.seq_QMARK_.call(null,map__184255))?cljs.core.apply.call(null,cljs.core.hash_map,map__184255):map__184255);var setup = map__184255__$1;var finish = cljs.core.get.call(null,map__184255__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__184255__$1,new cljs.core.Keyword(null,"start","start",1123661780));var pq = tailrecursion.priority_map.priority_map.call(null,start,0);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var old_pq = pq;var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__184251_SHARP_,p2__184252_SHARP_){return cljs.core.assoc.call(null,p1__184251_SHARP_,p2__184252_SHARP_,node);
});})(pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__184256 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_costs));
var G__184257 = updated_g_costs;
var G__184258 = updated_previous;
pq = G__184256;
g_costs = G__184257;
previous = G__184258;
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
planjure.plan.dfs = (function dfs(world,p__184261){var map__184263 = p__184261;var map__184263__$1 = ((cljs.core.seq_QMARK_.call(null,map__184263))?cljs.core.apply.call(null,cljs.core.hash_map,map__184263):map__184263);var setup = map__184263__$1;var finish = cljs.core.get.call(null,map__184263__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__184263__$1,new cljs.core.Keyword(null,"start","start",1123661780));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__184264 = cljs.core.pop.call(null,stack);
var G__184265 = g_costs;
var G__184266 = previous;
stack = G__184264;
g_costs = G__184265;
previous = G__184266;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__184259_SHARP_,p2__184260_SHARP_){return cljs.core.assoc.call(null,p1__184259_SHARP_,p2__184260_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__184267 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__184268 = updated_g_costs;
var G__184269 = updated_previous;
stack = G__184267;
g_costs = G__184268;
previous = G__184269;
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