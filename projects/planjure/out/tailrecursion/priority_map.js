// Compiled by ClojureScript 0.0-2173
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4090__auto__))
{var current_priority = temp__4090__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var current_priority_key = self__.keyfn.call(null,current_priority);var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else
{var priority_key = self__.keyfn.call(null,priority);return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__14373 = null;
var G__14373__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__14373__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__14373 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__14373__2.call(this,self__,item);
case 3:
return G__14373__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14373;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args14324){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14324)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14325(s__14326){return (new cljs.core.LazySeq(null,(function (){var s__14326__$1 = s__14326;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14326__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14332 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14332,0,null);var item_set = cljs.core.nth.call(null,vec__14332,1,null);var iterys__4156__auto__ = ((function (s__14326__$1,vec__14332,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14327(s__14328){return (new cljs.core.LazySeq(null,((function (s__14326__$1,vec__14332,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14328__$1 = s__14328;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14328__$1);if(temp__4092__auto____$1)
{var s__14328__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14328__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14328__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14330 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14329 = 0;while(true){
if((i__14329 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14329);cljs.core.chunk_append.call(null,b__14330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__14374 = (i__14329 + 1);
i__14329 = G__14374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14330),iter__14327.call(null,cljs.core.chunk_rest.call(null,s__14328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14330),null);
}
} else
{var item = cljs.core.first.call(null,s__14328__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__14327.call(null,cljs.core.rest.call(null,s__14328__$2)));
}
} else
{return null;
}
break;
}
});})(s__14326__$1,vec__14332,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14326__$1,vec__14332,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14325.call(null,cljs.core.rest.call(null,s__14326__$1)));
} else
{{
var G__14375 = cljs.core.rest.call(null,s__14326__$1);
s__14326__$1 = G__14375;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14333(s__14334){return (new cljs.core.LazySeq(null,(function (){var s__14334__$1 = s__14334;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14334__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14340 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14340,0,null);var item_set = cljs.core.nth.call(null,vec__14340,1,null);var iterys__4156__auto__ = ((function (s__14334__$1,vec__14340,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14335(s__14336){return (new cljs.core.LazySeq(null,((function (s__14334__$1,vec__14340,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14336__$1 = s__14336;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14336__$1);if(temp__4092__auto____$1)
{var s__14336__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14336__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14336__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14338 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14337 = 0;while(true){
if((i__14337 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14337);cljs.core.chunk_append.call(null,b__14338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__14376 = (i__14337 + 1);
i__14337 = G__14376;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14338),iter__14335.call(null,cljs.core.chunk_rest.call(null,s__14336__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14338),null);
}
} else
{var item = cljs.core.first.call(null,s__14336__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__14335.call(null,cljs.core.rest.call(null,s__14336__$2)));
}
} else
{return null;
}
break;
}
});})(s__14334__$1,vec__14340,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14334__$1,vec__14340,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14333.call(null,cljs.core.rest.call(null,s__14334__$1)));
} else
{{
var G__14377 = cljs.core.rest.call(null,s__14334__$1);
s__14334__$1 = G__14377;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14341(s__14342){return (new cljs.core.LazySeq(null,(function (){var s__14342__$1 = s__14342;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14342__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14348 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14348,0,null);var item_set = cljs.core.nth.call(null,vec__14348,1,null);var iterys__4156__auto__ = ((function (s__14342__$1,vec__14348,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14343(s__14344){return (new cljs.core.LazySeq(null,((function (s__14342__$1,vec__14348,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14344__$1 = s__14344;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14344__$1);if(temp__4092__auto____$1)
{var s__14344__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14344__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14344__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14346 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14345 = 0;while(true){
if((i__14345 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14345);cljs.core.chunk_append.call(null,b__14346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__14378 = (i__14345 + 1);
i__14345 = G__14378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14346),iter__14343.call(null,cljs.core.chunk_rest.call(null,s__14344__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14346),null);
}
} else
{var item = cljs.core.first.call(null,s__14344__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__14343.call(null,cljs.core.rest.call(null,s__14344__$2)));
}
} else
{return null;
}
break;
}
});})(s__14342__$1,vec__14348,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14342__$1,vec__14348,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14341.call(null,cljs.core.rest.call(null,s__14342__$1)));
} else
{{
var G__14379 = cljs.core.rest.call(null,s__14342__$1);
s__14342__$1 = G__14379;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,sets);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14349(s__14350){return (new cljs.core.LazySeq(null,(function (){var s__14350__$1 = s__14350;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14350__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14356 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14356,0,null);var item_set = cljs.core.nth.call(null,vec__14356,1,null);var iterys__4156__auto__ = ((function (s__14350__$1,vec__14356,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14351(s__14352){return (new cljs.core.LazySeq(null,((function (s__14350__$1,vec__14356,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14352__$1 = s__14352;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14352__$1);if(temp__4092__auto____$1)
{var s__14352__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14352__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14352__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14354 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14353 = 0;while(true){
if((i__14353 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14353);cljs.core.chunk_append.call(null,b__14354,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__14380 = (i__14353 + 1);
i__14353 = G__14380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14354),iter__14351.call(null,cljs.core.chunk_rest.call(null,s__14352__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14354),null);
}
} else
{var item = cljs.core.first.call(null,s__14352__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__14351.call(null,cljs.core.rest.call(null,s__14352__$2)));
}
} else
{return null;
}
break;
}
});})(s__14350__$1,vec__14356,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14350__$1,vec__14356,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14349.call(null,cljs.core.rest.call(null,s__14350__$1)));
} else
{{
var G__14381 = cljs.core.rest.call(null,s__14350__$1);
s__14350__$1 = G__14381;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,sets);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14357(s__14358){return (new cljs.core.LazySeq(null,(function (){var s__14358__$1 = s__14358;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14358__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14364 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14364,0,null);var item_set = cljs.core.nth.call(null,vec__14364,1,null);var iterys__4156__auto__ = ((function (s__14358__$1,vec__14364,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14359(s__14360){return (new cljs.core.LazySeq(null,((function (s__14358__$1,vec__14364,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14360__$1 = s__14360;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14360__$1);if(temp__4092__auto____$1)
{var s__14360__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14360__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14360__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14362 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14361 = 0;while(true){
if((i__14361 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14361);cljs.core.chunk_append.call(null,b__14362,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__14382 = (i__14361 + 1);
i__14361 = G__14382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14362),iter__14359.call(null,cljs.core.chunk_rest.call(null,s__14360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14362),null);
}
} else
{var item = cljs.core.first.call(null,s__14360__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__14359.call(null,cljs.core.rest.call(null,s__14360__$2)));
}
} else
{return null;
}
break;
}
});})(s__14358__$1,vec__14364,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14358__$1,vec__14364,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14357.call(null,cljs.core.rest.call(null,s__14358__$1)));
} else
{{
var G__14383 = cljs.core.rest.call(null,s__14358__$1);
s__14358__$1 = G__14383;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__14365(s__14366){return (new cljs.core.LazySeq(null,(function (){var s__14366__$1 = s__14366;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14366__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14372 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__14372,0,null);var item_set = cljs.core.nth.call(null,vec__14372,1,null);var iterys__4156__auto__ = ((function (s__14366__$1,vec__14372,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__14367(s__14368){return (new cljs.core.LazySeq(null,((function (s__14366__$1,vec__14372,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14368__$1 = s__14368;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14368__$1);if(temp__4092__auto____$1)
{var s__14368__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14368__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14368__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14370 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14369 = 0;while(true){
if((i__14369 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__14369);cljs.core.chunk_append.call(null,b__14370,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__14384 = (i__14369 + 1);
i__14369 = G__14384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14370),iter__14367.call(null,cljs.core.chunk_rest.call(null,s__14368__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14370),null);
}
} else
{var item = cljs.core.first.call(null,s__14368__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__14367.call(null,cljs.core.rest.call(null,s__14368__$2)));
}
} else
{return null;
}
break;
}
});})(s__14366__$1,vec__14372,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14366__$1,vec__14372,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__14365.call(null,cljs.core.rest.call(null,s__14366__$1)));
} else
{{
var G__14385 = cljs.core.rest.call(null,s__14366__$1);
s__14366__$1 = G__14385;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item = cljs.core.first.call(null,cljs.core.val.call(null,f));if(cljs.core.truth_(self__.keyfn))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key.call(null,f)], null);
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set = cljs.core.val.call(null,f);var item = cljs.core.first.call(null,item_set);var priority_key = cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var item_set = self__.priority__GT_set_of_items.call(null,priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function() {
var pm_empty_keyfn = null;
var pm_empty_keyfn__1 = (function (keyfn){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});
var pm_empty_keyfn__2 = (function (keyfn,comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});
pm_empty_keyfn = function(keyfn,comparator){
switch(arguments.length){
case 1:
return pm_empty_keyfn__1.call(this,keyfn);
case 2:
return pm_empty_keyfn__2.call(this,keyfn,comparator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = pm_empty_keyfn__1;
pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = pm_empty_keyfn__2;
return pm_empty_keyfn;
})()
;
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){if(cljs.core.map_QMARK_.call(null,elems))
{return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){
if(in$)
{{
var G__14386 = cljs.core.nnext.call(null,in$);
var G__14387 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14386;
out = G__14387;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__14388){
var keyvals = cljs.core.seq(arglist__14388);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);while(true){
if(in$)
{{
var G__14389 = cljs.core.nnext.call(null,in$);
var G__14390 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14389;
out = G__14390;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__14391){
var comparator = cljs.core.first(arglist__14391);
var keyvals = cljs.core.rest(arglist__14391);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied keyfn.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_keyfn = (function() { 
var priority_map_keyfn__delegate = function (keyfn,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);while(true){
if(in$)
{{
var G__14392 = cljs.core.nnext.call(null,in$);
var G__14393 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14392;
out = G__14393;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_keyfn = function (keyfn,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_keyfn__delegate.call(this,keyfn,keyvals);};
priority_map_keyfn.cljs$lang$maxFixedArity = 1;
priority_map_keyfn.cljs$lang$applyTo = (function (arglist__14394){
var keyfn = cljs.core.first(arglist__14394);
var keyvals = cljs.core.rest(arglist__14394);
return priority_map_keyfn__delegate(keyfn,keyvals);
});
priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn__delegate;
return priority_map_keyfn;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied keyfn and comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_keyfn_by = (function() { 
var priority_map_keyfn_by__delegate = function (keyfn,comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);while(true){
if(in$)
{{
var G__14395 = cljs.core.nnext.call(null,in$);
var G__14396 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14395;
out = G__14396;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_keyfn_by = function (keyfn,comparator,var_args){
var keyvals = null;if (arguments.length > 2) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return priority_map_keyfn_by__delegate.call(this,keyfn,comparator,keyvals);};
priority_map_keyfn_by.cljs$lang$maxFixedArity = 2;
priority_map_keyfn_by.cljs$lang$applyTo = (function (arglist__14397){
var keyfn = cljs.core.first(arglist__14397);
arglist__14397 = cljs.core.next(arglist__14397);
var comparator = cljs.core.first(arglist__14397);
var keyvals = cljs.core.rest(arglist__14397);
return priority_map_keyfn_by__delegate(keyfn,comparator,keyvals);
});
priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn_by__delegate;
return priority_map_keyfn_by;
})()
;

//# sourceMappingURL=priority_map.js.map