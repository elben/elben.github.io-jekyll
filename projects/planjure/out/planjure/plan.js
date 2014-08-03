// Compiled by ClojureScript 0.0-2277
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
planjure.plan.build_basic_ascii = (function build_basic_ascii(world){return cljs.core.vec.call(null,(function (){var iter__4268__auto__ = (function iter__10756(s__10757){return (new cljs.core.LazySeq(null,(function (){var s__10757__$1 = s__10757;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10757__$1);if(temp__4126__auto__)
{var s__10757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10757__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__10757__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__10759 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__10758 = (0);while(true){
if((i__10758 < size__4267__auto__))
{var row = cljs.core._nth.call(null,c__4266__auto__,i__10758);cljs.core.chunk_append.call(null,b__10759,cljs.core.vec.call(null,(function (){var iter__4268__auto__ = ((function (i__10758,row,c__4266__auto__,size__4267__auto__,b__10759,s__10757__$2,temp__4126__auto__){
return (function iter__10768(s__10769){return (new cljs.core.LazySeq(null,((function (i__10758,row,c__4266__auto__,size__4267__auto__,b__10759,s__10757__$2,temp__4126__auto__){
return (function (){var s__10769__$1 = s__10769;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10769__$1);if(temp__4126__auto____$1)
{var s__10769__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10769__$2))
{var c__4266__auto____$1 = cljs.core.chunk_first.call(null,s__10769__$2);var size__4267__auto____$1 = cljs.core.count.call(null,c__4266__auto____$1);var b__10771 = cljs.core.chunk_buffer.call(null,size__4267__auto____$1);if((function (){var i__10770 = (0);while(true){
if((i__10770 < size__4267__auto____$1))
{var node = cljs.core._nth.call(null,c__4266__auto____$1,i__10770);cljs.core.chunk_append.call(null,b__10771,(((node > (0)))?"#":" "));
{
var G__10776 = (i__10770 + (1));
i__10770 = G__10776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10771),iter__10768.call(null,cljs.core.chunk_rest.call(null,s__10769__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10771),null);
}
} else
{var node = cljs.core.first.call(null,s__10769__$2);return cljs.core.cons.call(null,(((node > (0)))?"#":" "),iter__10768.call(null,cljs.core.rest.call(null,s__10769__$2)));
}
} else
{return null;
}
break;
}
});})(i__10758,row,c__4266__auto__,size__4267__auto__,b__10759,s__10757__$2,temp__4126__auto__))
,null,null));
});})(i__10758,row,c__4266__auto__,size__4267__auto__,b__10759,s__10757__$2,temp__4126__auto__))
;return iter__4268__auto__.call(null,row);
})()));
{
var G__10777 = (i__10758 + (1));
i__10758 = G__10777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10759),iter__10756.call(null,cljs.core.chunk_rest.call(null,s__10757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10759),null);
}
} else
{var row = cljs.core.first.call(null,s__10757__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4268__auto__ = ((function (row,s__10757__$2,temp__4126__auto__){
return (function iter__10772(s__10773){return (new cljs.core.LazySeq(null,((function (row,s__10757__$2,temp__4126__auto__){
return (function (){var s__10773__$1 = s__10773;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10773__$1);if(temp__4126__auto____$1)
{var s__10773__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10773__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__10773__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__10775 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__10774 = (0);while(true){
if((i__10774 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__10774);cljs.core.chunk_append.call(null,b__10775,(((node > (0)))?"#":" "));
{
var G__10778 = (i__10774 + (1));
i__10774 = G__10778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10775),iter__10772.call(null,cljs.core.chunk_rest.call(null,s__10773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10775),null);
}
} else
{var node = cljs.core.first.call(null,s__10773__$2);return cljs.core.cons.call(null,(((node > (0)))?"#":" "),iter__10772.call(null,cljs.core.rest.call(null,s__10773__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__10757__$2,temp__4126__auto__))
,null,null));
});})(row,s__10757__$2,temp__4126__auto__))
;return iter__4268__auto__.call(null,row);
})()),iter__10756.call(null,cljs.core.rest.call(null,s__10757__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,world);
})());
});
planjure.plan.build_ascii_path = (function build_ascii_path(world,path){var ascii = planjure.plan.build_basic_ascii.call(null,world);var path__$1 = path;while(true){
if(!(cljs.core.empty_QMARK_.call(null,path__$1)))
{var vec__10780 = cljs.core.first.call(null,path__$1);var r = cljs.core.nth.call(null,vec__10780,(0),null);var c = cljs.core.nth.call(null,vec__10780,(1),null);var row = ascii.call(null,r);{
var G__10781 = cljs.core.assoc.call(null,ascii,r,cljs.core.assoc.call(null,row,c,"@"));
var G__10782 = cljs.core.rest.call(null,path__$1);
ascii = G__10781;
path__$1 = G__10782;
continue;
}
} else
{return ascii;
}
break;
}
});
planjure.plan.draw_world = (function draw_world(world){var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));cljs.core.print.call(null,"   ");
var seq__10791_10799 = cljs.core.seq.call(null,cljs.core.range.call(null,cols));var chunk__10792_10800 = null;var count__10793_10801 = (0);var i__10794_10802 = (0);while(true){
if((i__10794_10802 < count__10793_10801))
{var i_10803 = cljs.core._nth.call(null,chunk__10792_10800,i__10794_10802);cljs.core.print.call(null,i_10803,"");
{
var G__10804 = seq__10791_10799;
var G__10805 = chunk__10792_10800;
var G__10806 = count__10793_10801;
var G__10807 = (i__10794_10802 + (1));
seq__10791_10799 = G__10804;
chunk__10792_10800 = G__10805;
count__10793_10801 = G__10806;
i__10794_10802 = G__10807;
continue;
}
} else
{var temp__4126__auto___10808 = cljs.core.seq.call(null,seq__10791_10799);if(temp__4126__auto___10808)
{var seq__10791_10809__$1 = temp__4126__auto___10808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10791_10809__$1))
{var c__4299__auto___10810 = cljs.core.chunk_first.call(null,seq__10791_10809__$1);{
var G__10811 = cljs.core.chunk_rest.call(null,seq__10791_10809__$1);
var G__10812 = c__4299__auto___10810;
var G__10813 = cljs.core.count.call(null,c__4299__auto___10810);
var G__10814 = (0);
seq__10791_10799 = G__10811;
chunk__10792_10800 = G__10812;
count__10793_10801 = G__10813;
i__10794_10802 = G__10814;
continue;
}
} else
{var i_10815 = cljs.core.first.call(null,seq__10791_10809__$1);cljs.core.print.call(null,i_10815,"");
{
var G__10816 = cljs.core.next.call(null,seq__10791_10809__$1);
var G__10817 = null;
var G__10818 = (0);
var G__10819 = (0);
seq__10791_10799 = G__10816;
chunk__10792_10800 = G__10817;
count__10793_10801 = G__10818;
i__10794_10802 = G__10819;
continue;
}
}
} else
{}
}
break;
}
cljs.core.println.call(null);
var seq__10795 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,world)));var chunk__10796 = null;var count__10797 = (0);var i__10798 = (0);while(true){
if((i__10798 < count__10797))
{var i = cljs.core._nth.call(null,chunk__10796,i__10798);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10820 = seq__10795;
var G__10821 = chunk__10796;
var G__10822 = count__10797;
var G__10823 = (i__10798 + (1));
seq__10795 = G__10820;
chunk__10796 = G__10821;
count__10797 = G__10822;
i__10798 = G__10823;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10795);if(temp__4126__auto__)
{var seq__10795__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10795__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__10795__$1);{
var G__10824 = cljs.core.chunk_rest.call(null,seq__10795__$1);
var G__10825 = c__4299__auto__;
var G__10826 = cljs.core.count.call(null,c__4299__auto__);
var G__10827 = (0);
seq__10795 = G__10824;
chunk__10796 = G__10825;
count__10797 = G__10826;
i__10798 = G__10827;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__10795__$1);cljs.core.println.call(null,i,world.call(null,i));
{
var G__10828 = cljs.core.next.call(null,seq__10795__$1);
var G__10829 = null;
var G__10830 = (0);
var G__10831 = (0);
seq__10795 = G__10828;
chunk__10796 = G__10829;
count__10797 = G__10830;
i__10798 = G__10831;
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
planjure.plan.draw_path = (function draw_path(world,path){var ascii = planjure.plan.build_ascii_path.call(null,world,path);var seq__10836 = cljs.core.seq.call(null,ascii);var chunk__10837 = null;var count__10838 = (0);var i__10839 = (0);while(true){
if((i__10839 < count__10838))
{var row = cljs.core._nth.call(null,chunk__10837,i__10839);cljs.core.println.call(null,row);
{
var G__10840 = seq__10836;
var G__10841 = chunk__10837;
var G__10842 = count__10838;
var G__10843 = (i__10839 + (1));
seq__10836 = G__10840;
chunk__10837 = G__10841;
count__10838 = G__10842;
i__10839 = G__10843;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10836);if(temp__4126__auto__)
{var seq__10836__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10836__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__10836__$1);{
var G__10844 = cljs.core.chunk_rest.call(null,seq__10836__$1);
var G__10845 = c__4299__auto__;
var G__10846 = cljs.core.count.call(null,c__4299__auto__);
var G__10847 = (0);
seq__10836 = G__10844;
chunk__10837 = G__10845;
count__10838 = G__10846;
i__10839 = G__10847;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__10836__$1);cljs.core.println.call(null,row);
{
var G__10848 = cljs.core.next.call(null,seq__10836__$1);
var G__10849 = null;
var G__10850 = (0);
var G__10851 = (0);
seq__10836 = G__10848;
chunk__10837 = G__10849;
count__10838 = G__10850;
i__10839 = G__10851;
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
* Cost of traversing from a neighboring node to specified node in world.  In
* theory, the edges hold the cost. But in our current world, the nodes hold the
* cost. Means that the cost of moving from any of its neighboring node to
* specified node is the value of the node cell.
*/
planjure.plan.cost = (function cost(world,node){var vec__10853 = node;var r = cljs.core.nth.call(null,vec__10853,(0),null);var c = cljs.core.nth.call(null,vec__10853,(1),null);return world.call(null,r).call(null,c);
});
/**
* Returns path from start to finish. Previous is a backtrack mapping of nodes,
* and setup is a map containing :start and :finish nodes. Returns partial path
* if no is available (e.g. no path or recursive path).
*/
planjure.plan.find_path = (function find_path(previous,p__10854){var map__10856 = p__10854;var map__10856__$1 = ((cljs.core.seq_QMARK_.call(null,map__10856))?cljs.core.apply.call(null,cljs.core.hash_map,map__10856):map__10856);var setup = map__10856__$1;var finish = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"start","start",-355208981));if(!(cljs.core.contains_QMARK_.call(null,previous,finish)))
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__10857 = cljs.core.conj.call(null,path,node);
var G__10858 = cljs.core.conj.call(null,seen,node);
var G__10859 = previous.call(null,node);
path = G__10857;
seen = G__10858;
node = G__10859;
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
planjure.plan.neighbors = (function neighbors(world,node,p__10860){var map__10864 = p__10860;var map__10864__$1 = ((cljs.core.seq_QMARK_.call(null,map__10864))?cljs.core.apply.call(null,cljs.core.hash_map,map__10864):map__10864);var start = cljs.core.get.call(null,map__10864__$1,new cljs.core.Keyword(null,"start","start",-355208981));var rows = cljs.core.count.call(null,world);var cols = cljs.core.count.call(null,cljs.core.first.call(null,world));var find_neighbors = ((function (rows,cols,map__10864,map__10864__$1,start){
return (function (neighs,p__10865){var vec__10866 = p__10865;var row_mod = cljs.core.nth.call(null,vec__10866,(0),null);var col_mod = cljs.core.nth.call(null,vec__10866,(1),null);var row = (node.call(null,(0)) + row_mod);var col = (node.call(null,(1)) + col_mod);if((!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),start))) && ((row < rows)) && ((row >= (0))) && ((col < cols)) && ((col >= (0))))
{return cljs.core.conj.call(null,neighs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else
{return neighs;
}
});})(rows,cols,map__10864,map__10864__$1,start))
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
planjure.plan.dijkstra = (function dijkstra(world,p__10869){var map__10871 = p__10869;var map__10871__$1 = ((cljs.core.seq_QMARK_.call(null,map__10871))?cljs.core.apply.call(null,cljs.core.hash_map,map__10871):map__10871);var setup = map__10871__$1;var finish = cljs.core.get.call(null,map__10871__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__10871__$1,new cljs.core.Keyword(null,"start","start",-355208981));var pq = tailrecursion.priority_map.priority_map.call(null,start,(0));var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,pq))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),planjure.plan.find_path.call(null,previous,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous)], null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,pq)),finish))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),planjure.plan.find_path.call(null,previous,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var node = cljs.core.first.call(null,cljs.core.first.call(null,pq));var pq__$1 = cljs.core.pop.call(null,pq);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (pq,g_costs,previous,node,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__10871,map__10871__$1,setup,finish,start){
return (function (p1__10867_SHARP_,p2__10868_SHARP_){return cljs.core.assoc.call(null,p1__10867_SHARP_,p2__10868_SHARP_,node);
});})(pq,g_costs,previous,node,pq__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__10871,map__10871__$1,setup,finish,start))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10872 = cljs.core.into.call(null,pq__$1,cljs.core.vec.call(null,improved_neighbor_costs));
var G__10873 = updated_g_costs;
var G__10874 = updated_previous;
pq = G__10872;
g_costs = G__10873;
previous = G__10874;
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
planjure.plan.dfs = (function dfs(world,p__10877){var map__10879 = p__10877;var map__10879__$1 = ((cljs.core.seq_QMARK_.call(null,map__10879))?cljs.core.apply.call(null,cljs.core.hash_map,map__10879):map__10879);var setup = map__10879__$1;var finish = cljs.core.get.call(null,map__10879__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));var start = cljs.core.get.call(null,map__10879__$1,new cljs.core.Keyword(null,"start","start",-355208981));var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var g_costs = cljs.core.PersistentArrayMap.EMPTY;var previous = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),planjure.plan.find_path.call(null,previous,setup),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.map.call(null,cljs.core.first,previous)], null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,stack),finish))
{{
var G__10880 = cljs.core.pop.call(null,stack);
var G__10881 = g_costs;
var G__10882 = previous;
stack = G__10880;
g_costs = G__10881;
previous = G__10882;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var node = cljs.core.last.call(null,stack);var stack__$1 = cljs.core.pop.call(null,stack);var neighs = planjure.plan.neighbors.call(null,world,node,setup);var improved_neighbor_costs = planjure.plan.nodes_with_improved_costs.call(null,world,g_costs,node,neighs);var improved_neighbors = cljs.core.keys.call(null,improved_neighbor_costs);var updated_g_costs = cljs.core.merge.call(null,g_costs,improved_neighbor_costs);var updated_previous = cljs.core.merge.call(null,previous,cljs.core.reduce.call(null,((function (stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__10879,map__10879__$1,setup,finish,start){
return (function (p1__10875_SHARP_,p2__10876_SHARP_){return cljs.core.assoc.call(null,p1__10875_SHARP_,p2__10876_SHARP_,node);
});})(stack,g_costs,previous,node,stack__$1,neighs,improved_neighbor_costs,improved_neighbors,updated_g_costs,map__10879,map__10879__$1,setup,finish,start))
,cljs.core.PersistentArrayMap.EMPTY,improved_neighbors));{
var G__10883 = cljs.core.into.call(null,stack__$1,improved_neighbors);
var G__10884 = updated_g_costs;
var G__10885 = updated_previous;
stack = G__10883;
g_costs = G__10884;
previous = G__10885;
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