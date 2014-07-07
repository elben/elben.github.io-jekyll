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
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4160__auto__ = (function iter__10041(s__10042){return (new cljs.core.LazySeq(null,(function (){var s__10042__$1 = s__10042;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10042__$1);if(temp__4092__auto__)
{var s__10042__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10042__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10042__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10044 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10043 = 0;while(true){
if((i__10043 < size__4159__auto__))
{var row = cljs.core._nth.call(null,c__4158__auto__,i__10043);cljs.core.chunk_append.call(null,b__10044,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (i__10043,row,c__4158__auto__,size__4159__auto__,b__10044,s__10042__$2,temp__4092__auto__){
return (function iter__10053(s__10054){return (new cljs.core.LazySeq(null,((function (i__10043,row,c__4158__auto__,size__4159__auto__,b__10044,s__10042__$2,temp__4092__auto__){
return (function (){var s__10054__$1 = s__10054;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10054__$1);if(temp__4092__auto____$1)
{var s__10054__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10054__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__10054__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__10056 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__10055 = 0;while(true){
if((i__10055 < size__4159__auto____$1))
{var node = cljs.core._nth.call(null,c__4158__auto____$1,i__10055);cljs.core.chunk_append.call(null,b__10056,(((node > 0))?"#":" "));
{
var G__10061 = (i__10055 + 1);
i__10055 = G__10061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10056),iter__10053.call(null,cljs.core.chunk_rest.call(null,s__10054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10056),null);
}
} else
{var node = cljs.core.first.call(null,s__10054__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__10053.call(null,cljs.core.rest.call(null,s__10054__$2)));
}
} else
{return null;
}
break;
}
});})(i__10043,row,c__4158__auto__,size__4159__auto__,b__10044,s__10042__$2,temp__4092__auto__))
,null,null));
});})(i__10043,row,c__4158__auto__,size__4159__auto__,b__10044,s__10042__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()));
{
var G__10062 = (i__10043 + 1);
i__10043 = G__10062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10044),iter__10041.call(null,cljs.core.chunk_rest.call(null,s__10042__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10044),null);
}
} else
{var row = cljs.core.first.call(null,s__10042__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4160__auto__ = ((function (row,s__10042__$2,temp__4092__auto__){
return (function iter__10057(s__10058){return (new cljs.core.LazySeq(null,((function (row,s__10042__$2,temp__4092__auto__){
return (function (){var s__10058__$1 = s__10058;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10058__$1);if(temp__4092__auto____$1)
{var s__10058__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10058__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10058__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10060 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10059 = 0;while(true){
if((i__10059 < size__4159__auto__))
{var node = cljs.core._nth.call(null,c__4158__auto__,i__10059);cljs.core.chunk_append.call(null,b__10060,(((node > 0))?"#":" "));
{
var G__10063 = (i__10059 + 1);
i__10059 = G__10063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10060),iter__10057.call(null,cljs.core.chunk_rest.call(null,s__10058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10060),null);
}
} else
{var node = cljs.core.first.call(null,s__10058__$2);return cljs.core.cons.call(null,(((node > 0))?"#":" "),iter__10057.call(null,cljs.core.rest.call(null,s__10058__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__10042__$2,temp__4092__auto__))
,null,null));
});})(row,s__10042__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,row);
})()),iter__10041.call(null,cljs.core.rest.call(null,s__10042__$2)));
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
{var vec__10065 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__10065,0,null);var c = cljs.core.nth.call(null,vec__10065,1,null);var row = ascii.call(null,r);{
var G__10066 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__10067 = cljs.core.rest.call(null,path__$1);
ascii = G__10066;
path__$1 = G__10067;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__10076_10084 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__10077_10085 = null;var count__10078_10086 = 0;var i__10079_10087 = 0;while(true){
if((i__10079_10087 < count__10078_10086))
{var i_10088 = cljs.core._nth.call(null,chunk__10077_10085,i__10079_10087);cljs.core.print.call(null,i_10088,"");
{
var G__10089 = seq__10076_10084;
var G__10090 = chunk__10077_10085;
var G__10091 = count__10078_10086;
var G__10092 = (i__10079_10087 + 1);
seq__10076_10084 = G__10089;
chunk__10077_10085 = G__10090;
count__10078_10086 = G__10091;
i__10079_10087 = G__10092;
continue;
}
} else
{var temp__4092__auto___10093 = cljs.core.seq.call(null,seq__10076_10084);if(temp__4092__auto___10093)
{var seq__10076_10094__$1 = temp__4092__auto___10093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10076_10094__$1))
{var c__4191__auto___10095 = cljs.core.chunk_first.call(null,seq__10076_10094__$1);{
var G__10096 = cljs.core.chunk_rest.call(null,seq__10076_10094__$1);
var G__10097 = c__4191__auto___10095;
var G__10098 = cljs.core.count.call(null,c__4191__auto___10095);
var G__10099 = 0;
seq__10076_10084 = G__10096;
chunk__10077_10085 = G__10097;
count__10078_10086 = G__10098;
i__10079_10087 = G__10099;
continue;
}
} else
{var i_10100 = cljs.core.first.call(null,seq__10076_10094__$1);cljs.core.print.call(null,i_10100,"");
{
var G__10101 = cljs.core.next.call(null,seq__10076_10094__$1);
var G__10102 = null;
var G__10103 = 0;
var G__10104 = 0;
seq__10076_10084 = G__10101;
chunk__10077_10085 = G__10102;
count__10078_10086 = G__10103;
i__10079_10087 = G__10104;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__10080 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__10081 = null;var count__10082 = 0;var i__10083 = 0;while(true){
if((i__10083 < count__10082))
{var i = cljs.core._nth.call(null,chunk__10081,i__10083);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10105 = seq__10080;
var G__10106 = chunk__10081;
var G__10107 = count__10082;
var G__10108 = (i__10083 + 1);
seq__10080 = G__10105;
chunk__10081 = G__10106;
count__10082 = G__10107;
i__10083 = G__10108;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10080);if(temp__4092__auto__)
{var seq__10080__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10080__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10080__$1);{
var G__10109 = cljs.core.chunk_rest.call(null,seq__10080__$1);
var G__10110 = c__4191__auto__;
var G__10111 = cljs.core.count.call(null,c__4191__auto__);
var G__10112 = 0;
seq__10080 = G__10109;
chunk__10081 = G__10110;
count__10082 = G__10111;
i__10083 = G__10112;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__10080__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10113 = cljs.core.next.call(null,seq__10080__$1);
var G__10114 = null;
var G__10115 = 0;
var G__10116 = 0;
seq__10080 = G__10113;
chunk__10081 = G__10114;
count__10082 = G__10115;
i__10083 = G__10116;
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
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__10121 = cljs.core.seq.call(null,ascii);var chunk__10122 = null;var count__10123 = 0;var i__10124 = 0;while(true){
if((i__10124 < count__10123))
{var row = cljs.core._nth.call(null,chunk__10122,i__10124);cljs.core.println.call(null,row);
{
var G__10125 = seq__10121;
var G__10126 = chunk__10122;
var G__10127 = count__10123;
var G__10128 = (i__10124 + 1);
seq__10121 = G__10125;
chunk__10122 = G__10126;
count__10123 = G__10127;
i__10124 = G__10128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10121);if(temp__4092__auto__)
{var seq__10121__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10121__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10121__$1);{
var G__10129 = cljs.core.chunk_rest.call(null,seq__10121__$1);
var G__10130 = c__4191__auto__;
var G__10131 = cljs.core.count.call(null,c__4191__auto__);
var G__10132 = 0;
seq__10121 = G__10129;
chunk__10122 = G__10130;
count__10123 = G__10131;
i__10124 = G__10132;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__10121__$1);cljs.core.println.call(null,row);
{
var G__10133 = cljs.core.next.call(null,seq__10121__$1);
var G__10134 = null;
var G__10135 = 0;
var G__10136 = 0;
seq__10121 = G__10133;
chunk__10122 = G__10134;
count__10123 = G__10135;
i__10124 = G__10136;
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
planjure.plan.cost = (function cost(world,node){var vec__10138 = node;var r = cljs.core.nth.call(null,vec__10138,0,null);var c = cljs.core.nth.call(null,vec__10138,1,null);return world.call(null,r).call(null,c);
});
/**
* Returns path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
*/
planjure.plan.find_path = (function find_path(previous,p__10139){var map__10141 = p__10139;var map__10141__$1 = ((cljs.core.seq_QMARK_.call(null,map__10141))?cljs.core.apply.call(null,cljs.core.hash_map,map__10141):map__10141);var setup = map__10141__$1;var finish = cljs.core.get.call(null,map__10141__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10141__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
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
var G__10142 = cljs.core.conj.call(null,path,node);
var G__10143 = cljs.core.conj.call(null,seen,node);
var G__10144 = previous.call(null,node);
path = G__10142;
seen = G__10143;
node = G__10144;
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
planjure.plan.neighbors = (function neighbors(world,node,p__10145){var map__10149 = p__10145;var map__10149__$1 = ((cljs.core.seq_QMARK_.call(null,map__10149))?cljs.core.apply.call(null,cljs.core.hash_map,map__10149):map__10149);var start = cljs.core.get.call(null,map__10149__$1,new cljs.core.Keyword(null,"start","start",1123661780));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols){
return (function (neighs,p__10150){var vec__10151 = p__10150;var row_mod = cljs.core.nth.call(null,vec__10151,0,null);var col_mod = cljs.core.nth.call(null,vec__10151,1,null);var row = (node.call(null,0) + row_mod);var col = (node.call(null,1) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= 0)) && ((col < cols)) && ((col >= 0)))
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
planjure.plan.dijkstra = (function dijkstra(world,p__10154){var map__10156 = p__10154;var map__10156__$1 = ((cljs.core.seq_QMARK_.call(null,map__10156))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);var setup = map__10156__$1;var finish = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"start","start",1123661780));var pq = tailrecursion.priority_map.priority_map.call(null,start,0);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var old_pq = pq;var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__10152_SHARP_,p2__10153_SHARP_){return cljs.core.assoc.call(null,p1__10152_SHARP_,p2__10153_SHARP_,node);
});})(pq,g_costs,previous,node,old_pq,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10157 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_costs));
var G__10158 = updated_g_costs;
var G__10159 = updated_previous;
pq = G__10157;
g_costs = G__10158;
previous = G__10159;
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
planjure.plan.dfs = (function dfs(world,p__10162){var map__10164 = p__10162;var map__10164__$1 = ((cljs.core.seq_QMARK_.call(null,map__10164))?cljs.core.apply.call(null,cljs.core.hash_map,map__10164):map__10164);var setup = map__10164__$1;var finish = cljs.core.get.call(null,map__10164__$1,new cljs.core.Keyword(null,"finish","finish",4034428933));var start = cljs.core.get.call(null,map__10164__$1,new cljs.core.Keyword(null,"start","start",1123661780));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return planjure.plan.find_path.call(null,previous,setup);
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__10165 = cljs.core.pop.call(null,stack);
var G__10166 = g_costs;
var G__10167 = previous;
stack = G__10165;
g_costs = G__10166;
previous = G__10167;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs){
return (function (p1__10160_SHARP_,p2__10161_SHARP_){return cljs.core.assoc.call(null,p1__10160_SHARP_,p2__10161_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10168 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__10169 = updated_g_costs;
var G__10170 = updated_previous;
stack = G__10168;
g_costs = G__10169;
previous = G__10170;
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