// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.plan');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
planjure.plan.world = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,9,9,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,9,1,9], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,9,9,1,9], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,9], null)], null);
planjure.plan.world2 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,1,1,1], null)], null);
planjure.plan.world3 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3,1,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0,0], null)], null);
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
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4160__auto__ = (function iter__10086(s__10087){return (new cljs.core.LazySeq(null,(function (){var s__10087__$1 = s__10087;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10087__$1);if(temp__4092__auto__)
{var s__10087__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10087__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10087__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10089 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10088 = 0;while(true){
if((i__10088 < size__4159__auto__))
{var row = cljs.core._nth.call(null,c__4158__auto__,i__10088);cljs.core.chunk_append.call(null,b__10089,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (i__10088,row,c__4158__auto__,size__4159__auto__,b__10089,s__10087__$2,temp__4092__auto__){
return (function iter__10098(s__10099){return (new cljs.core.LazySeq(null,((function (i__10088,row,c__4158__auto__,size__4159__auto__,b__10089,s__10087__$2,temp__4092__auto__){
return (function (){var s__10099__$1 = s__10099;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10099__$1);if(temp__4092__auto____$1)
{var s__10099__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10099__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__10099__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__10101 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__10100 = 0;while(true){
if((i__10100 < size__4159__auto____$1))
{var node = cljs.core._nth.call(null,c__4158__auto____$1,i__10100);cljs.core.chunk_append.call(null,b__10101,(((node > 0))?"#":" "));
{
var G__10106 = (i__10100 + 1);
i__10100 = G__10106;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10101),iter__10098.call(null,cljs.core.chunk_rest.call(null,s__10099__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10101),null);
}
} else
{var node = cljs.core.first.call(null,s__10099__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__10098.call(null,cljs.core.rest.call(null,s__10099__$2)));
}
} else
{return null;
}
break;
}
});})(i__10088,row,c__4158__auto__,size__4159__auto__,b__10089,s__10087__$2,temp__4092__auto__))
,null,null));
});})(i__10088,row,c__4158__auto__,size__4159__auto__,b__10089,s__10087__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()));
{
var G__10107 = (i__10088 + 1);
i__10088 = G__10107;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10089),iter__10086.call(null,cljs.core.chunk_rest.call(null,s__10087__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10089),null);
}
} else
{var row = cljs.core.first.call(null,s__10087__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (row,s__10087__$2,temp__4092__auto__){
return (function iter__10102(s__10103){return (new cljs.core.LazySeq(null,((function (row,s__10087__$2,temp__4092__auto__){
return (function (){var s__10103__$1 = s__10103;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10103__$1);if(temp__4092__auto____$1)
{var s__10103__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10103__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10103__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10105 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10104 = 0;while(true){
if((i__10104 < size__4159__auto__))
{var node = cljs.core._nth.call(null,c__4158__auto__,i__10104);cljs.core.chunk_append.call(null,b__10105,(((node > 0))?"#":" "));
{
var G__10108 = (i__10104 + 1);
i__10104 = G__10108;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10105),iter__10102.call(null,cljs.core.chunk_rest.call(null,s__10103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10105),null);
}
} else
{var node = cljs.core.first.call(null,s__10103__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__10102.call(null,cljs.core.rest.call(null,s__10103__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__10087__$2,temp__4092__auto__))
,null,null));
});})(row,s__10087__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()),iter__10086.call(null,cljs.core.rest.call(null,s__10087__$2)));
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
{var vec__10110 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__10110,0,null);var c = cljs.core.nth.call(null,vec__10110,1,null);var row = ascii.call(null,r);{
var G__10111 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__10112 = cljs.core.rest.call(null,path__$1);
ascii = G__10111;
path__$1 = G__10112;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__10121_10129 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__10122_10130 = null;var count__10123_10131 = 0;var i__10124_10132 = 0;while(true){
if((i__10124_10132 < count__10123_10131))
{var i_10133 = cljs.core._nth.call(null,chunk__10122_10130,i__10124_10132);cljs.core.print.call(null,i_10133,"");
{
var G__10134 = seq__10121_10129;
var G__10135 = chunk__10122_10130;
var G__10136 = count__10123_10131;
var G__10137 = (i__10124_10132 + 1);
seq__10121_10129 = G__10134;
chunk__10122_10130 = G__10135;
count__10123_10131 = G__10136;
i__10124_10132 = G__10137;
continue;
}
} else
{var temp__4092__auto___10138 = cljs.core.seq.call(null,seq__10121_10129);if(temp__4092__auto___10138)
{var seq__10121_10139__$1 = temp__4092__auto___10138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10121_10139__$1))
{var c__4191__auto___10140 = cljs.core.chunk_first.call(null,seq__10121_10139__$1);{
var G__10141 = cljs.core.chunk_rest.call(null,seq__10121_10139__$1);
var G__10142 = c__4191__auto___10140;
var G__10143 = cljs.core.count.call(null,c__4191__auto___10140);
var G__10144 = 0;
seq__10121_10129 = G__10141;
chunk__10122_10130 = G__10142;
count__10123_10131 = G__10143;
i__10124_10132 = G__10144;
continue;
}
} else
{var i_10145 = cljs.core.first.call(null,seq__10121_10139__$1);cljs.core.print.call(null,i_10145,"");
{
var G__10146 = cljs.core.next.call(null,seq__10121_10139__$1);
var G__10147 = null;
var G__10148 = 0;
var G__10149 = 0;
seq__10121_10129 = G__10146;
chunk__10122_10130 = G__10147;
count__10123_10131 = G__10148;
i__10124_10132 = G__10149;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__10125 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__10126 = null;var count__10127 = 0;var i__10128 = 0;while(true){
if((i__10128 < count__10127))
{var i = cljs.core._nth.call(null,chunk__10126,i__10128);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10150 = seq__10125;
var G__10151 = chunk__10126;
var G__10152 = count__10127;
var G__10153 = (i__10128 + 1);
seq__10125 = G__10150;
chunk__10126 = G__10151;
count__10127 = G__10152;
i__10128 = G__10153;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10125);if(temp__4092__auto__)
{var seq__10125__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10125__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10125__$1);{
var G__10154 = cljs.core.chunk_rest.call(null,seq__10125__$1);
var G__10155 = c__4191__auto__;
var G__10156 = cljs.core.count.call(null,c__4191__auto__);
var G__10157 = 0;
seq__10125 = G__10154;
chunk__10126 = G__10155;
count__10127 = G__10156;
i__10128 = G__10157;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__10125__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10158 = cljs.core.next.call(null,seq__10125__$1);
var G__10159 = null;
var G__10160 = 0;
var G__10161 = 0;
seq__10125 = G__10158;
chunk__10126 = G__10159;
count__10127 = G__10160;
i__10128 = G__10161;
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
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__10166 = cljs.core.seq.call(null,ascii);var chunk__10167 = null;var count__10168 = 0;var i__10169 = 0;while(true){
if((i__10169 < count__10168))
{var row = cljs.core._nth.call(null,chunk__10167,i__10169);cljs.core.println.call(null,row);
{
var G__10170 = seq__10166;
var G__10171 = chunk__10167;
var G__10172 = count__10168;
var G__10173 = (i__10169 + 1);
seq__10166 = G__10170;
chunk__10167 = G__10171;
count__10168 = G__10172;
i__10169 = G__10173;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10166);if(temp__4092__auto__)
{var seq__10166__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10166__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10166__$1);{
var G__10174 = cljs.core.chunk_rest.call(null,seq__10166__$1);
var G__10175 = c__4191__auto__;
var G__10176 = cljs.core.count.call(null,c__4191__auto__);
var G__10177 = 0;
seq__10166 = G__10174;
chunk__10167 = G__10175;
count__10168 = G__10176;
i__10169 = G__10177;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__10166__$1);cljs.core.println.call(null,row);
{
var G__10178 = cljs.core.next.call(null,seq__10166__$1);
var G__10179 = null;
var G__10180 = 0;
var G__10181 = 0;
seq__10166 = G__10178;
chunk__10167 = G__10179;
count__10168 = G__10180;
i__10169 = G__10181;
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
planjure.plan.cost = (function cost(world,node){var vec__10183 = node;var r = cljs.core.nth.call(null,vec__10183,0,null);var c = cljs.core.nth.call(null,vec__10183,1,null);return world.call(null,r).call(null,c);
});
/**
* Returns path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
*/
planjure.plan.find_path = (function find_path(previous,p__10184){var map__10186 = p__10184;var map__10186__$1 = ((cljs.core.seq_QMARK_.call(null,map__10186))?cljs.core.apply.call(null,cljs.core.hash_map,map__10186):map__10186);var setup = map__10186__$1;var finish = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
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
var G__10187 = cljs.core.conj.call(null,path,node);
var G__10188 = cljs.core.conj.call(null,seen,node);
var G__10189 = previous.call(null,node);
path = G__10187;
seen = G__10188;
node = G__10189;
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
planjure.plan.neighbors = (function neighbors(world,node,p__10190){var map__10194 = p__10190;var map__10194__$1 = ((cljs.core.seq_QMARK_.call(null,map__10194))?cljs.core.apply.call(null,cljs.core.hash_map,map__10194):map__10194);var start = cljs.core.get.call(null,map__10194__$1,new cljs.core.Keyword(null,"start","start",1123661780));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols){
return (function (neighs,p__10195){var vec__10196 = p__10195;var row_mod = cljs.core.nth.call(null,vec__10196,0,null);var col_mod = cljs.core.nth.call(null,vec__10196,1,null);var row = (node.call(null,0) + row_mod);var col = (node.call(null,1) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= 0)) && ((col < cols)) && ((col >= 0)))
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
planjure.plan.dijkstra = (function dijkstra(world,p__10199){var map__10201 = p__10199;var map__10201__$1 = ((cljs.core.seq_QMARK_.call(null,map__10201))?cljs.core.apply.call(null,cljs.core.hash_map,map__10201):map__10201);var setup = map__10201__$1;var finish = cljs.core.get.call(null,map__10201__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10201__$1,new cljs.core.Keyword(null,"start","start",1123661780));var pq = tailrecursion.priority_map.priority_map.call(null,start,0);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var old_pq = pq;var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__10197_SHARP_,p2__10198_SHARP_){return cljs.core.assoc.call(null,p1__10197_SHARP_,p2__10198_SHARP_,node);
});})(pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10202 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_costs));
var G__10203 = updated_g_costs;
var G__10204 = updated_previous;
pq = G__10202;
g_costs = G__10203;
previous = G__10204;
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
planjure.plan.dfs = (function dfs(world,p__10207){var map__10209 = p__10207;var map__10209__$1 = ((cljs.core.seq_QMARK_.call(null,map__10209))?cljs.core.apply.call(null,cljs.core.hash_map,map__10209):map__10209);var setup = map__10209__$1;var finish = cljs.core.get.call(null,map__10209__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10209__$1,new cljs.core.Keyword(null,"start","start",1123661780));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__10210 = cljs.core.pop.call(null,stack);
var G__10211 = g_costs;
var G__10212 = previous;
stack = G__10210;
g_costs = G__10211;
previous = G__10212;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__10205_SHARP_,p2__10206_SHARP_){return cljs.core.assoc.call(null,p1__10205_SHARP_,p2__10206_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10213 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__10214 = updated_g_costs;
var G__10215 = updated_previous;
stack = G__10213;
g_costs = G__10214;
previous = G__10215;
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