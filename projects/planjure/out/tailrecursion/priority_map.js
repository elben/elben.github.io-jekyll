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
var G__188474 = null;
var G__188474__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__188474__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__188474 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__188474__2.call(this,self__,item);
case 3:
return G__188474__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__188474;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args188425){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args188425)));
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188426(s__188427){return (new cljs.core.LazySeq(null,(function (){var s__188427__$1 = s__188427;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188427__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188433 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188433,0,null);var item_set = cljs.core.nth.call(null,vec__188433,1,null);var iterys__4156__auto__ = ((function (s__188427__$1,vec__188433,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188428(s__188429){return (new cljs.core.LazySeq(null,((function (s__188427__$1,vec__188433,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188429__$1 = s__188429;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188429__$1);if(temp__4092__auto____$1)
{var s__188429__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188429__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188429__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188431 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188430 = 0;while(true){
if((i__188430 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188430);cljs.core.chunk_append.call(null,b__188431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__188475 = (i__188430 + 1);
i__188430 = G__188475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188431),iter__188428.call(null,cljs.core.chunk_rest.call(null,s__188429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188431),null);
}
} else
{var item = cljs.core.first.call(null,s__188429__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__188428.call(null,cljs.core.rest.call(null,s__188429__$2)));
}
} else
{return null;
}
break;
}
});})(s__188427__$1,vec__188433,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188427__$1,vec__188433,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188426.call(null,cljs.core.rest.call(null,s__188427__$1)));
} else
{{
var G__188476 = cljs.core.rest.call(null,s__188427__$1);
s__188427__$1 = G__188476;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188434(s__188435){return (new cljs.core.LazySeq(null,(function (){var s__188435__$1 = s__188435;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188435__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188441 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188441,0,null);var item_set = cljs.core.nth.call(null,vec__188441,1,null);var iterys__4156__auto__ = ((function (s__188435__$1,vec__188441,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188436(s__188437){return (new cljs.core.LazySeq(null,((function (s__188435__$1,vec__188441,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188437__$1 = s__188437;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188437__$1);if(temp__4092__auto____$1)
{var s__188437__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188437__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188437__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188439 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188438 = 0;while(true){
if((i__188438 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188438);cljs.core.chunk_append.call(null,b__188439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__188477 = (i__188438 + 1);
i__188438 = G__188477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188439),iter__188436.call(null,cljs.core.chunk_rest.call(null,s__188437__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188439),null);
}
} else
{var item = cljs.core.first.call(null,s__188437__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__188436.call(null,cljs.core.rest.call(null,s__188437__$2)));
}
} else
{return null;
}
break;
}
});})(s__188435__$1,vec__188441,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188435__$1,vec__188441,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188434.call(null,cljs.core.rest.call(null,s__188435__$1)));
} else
{{
var G__188478 = cljs.core.rest.call(null,s__188435__$1);
s__188435__$1 = G__188478;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188442(s__188443){return (new cljs.core.LazySeq(null,(function (){var s__188443__$1 = s__188443;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188443__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188449 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188449,0,null);var item_set = cljs.core.nth.call(null,vec__188449,1,null);var iterys__4156__auto__ = ((function (s__188443__$1,vec__188449,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188444(s__188445){return (new cljs.core.LazySeq(null,((function (s__188443__$1,vec__188449,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188445__$1 = s__188445;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188445__$1);if(temp__4092__auto____$1)
{var s__188445__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188445__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188445__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188447 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188446 = 0;while(true){
if((i__188446 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188446);cljs.core.chunk_append.call(null,b__188447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__188479 = (i__188446 + 1);
i__188446 = G__188479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188447),iter__188444.call(null,cljs.core.chunk_rest.call(null,s__188445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188447),null);
}
} else
{var item = cljs.core.first.call(null,s__188445__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__188444.call(null,cljs.core.rest.call(null,s__188445__$2)));
}
} else
{return null;
}
break;
}
});})(s__188443__$1,vec__188449,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188443__$1,vec__188449,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188442.call(null,cljs.core.rest.call(null,s__188443__$1)));
} else
{{
var G__188480 = cljs.core.rest.call(null,s__188443__$1);
s__188443__$1 = G__188480;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188450(s__188451){return (new cljs.core.LazySeq(null,(function (){var s__188451__$1 = s__188451;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188451__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188457 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188457,0,null);var item_set = cljs.core.nth.call(null,vec__188457,1,null);var iterys__4156__auto__ = ((function (s__188451__$1,vec__188457,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188452(s__188453){return (new cljs.core.LazySeq(null,((function (s__188451__$1,vec__188457,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188453__$1 = s__188453;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188453__$1);if(temp__4092__auto____$1)
{var s__188453__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188453__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188453__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188455 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188454 = 0;while(true){
if((i__188454 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188454);cljs.core.chunk_append.call(null,b__188455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__188481 = (i__188454 + 1);
i__188454 = G__188481;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188455),iter__188452.call(null,cljs.core.chunk_rest.call(null,s__188453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188455),null);
}
} else
{var item = cljs.core.first.call(null,s__188453__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__188452.call(null,cljs.core.rest.call(null,s__188453__$2)));
}
} else
{return null;
}
break;
}
});})(s__188451__$1,vec__188457,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188451__$1,vec__188457,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188450.call(null,cljs.core.rest.call(null,s__188451__$1)));
} else
{{
var G__188482 = cljs.core.rest.call(null,s__188451__$1);
s__188451__$1 = G__188482;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188458(s__188459){return (new cljs.core.LazySeq(null,(function (){var s__188459__$1 = s__188459;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188459__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188465 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188465,0,null);var item_set = cljs.core.nth.call(null,vec__188465,1,null);var iterys__4156__auto__ = ((function (s__188459__$1,vec__188465,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188460(s__188461){return (new cljs.core.LazySeq(null,((function (s__188459__$1,vec__188465,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188461__$1 = s__188461;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188461__$1);if(temp__4092__auto____$1)
{var s__188461__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188461__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188461__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188463 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188462 = 0;while(true){
if((i__188462 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188462);cljs.core.chunk_append.call(null,b__188463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__188483 = (i__188462 + 1);
i__188462 = G__188483;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188463),iter__188460.call(null,cljs.core.chunk_rest.call(null,s__188461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188463),null);
}
} else
{var item = cljs.core.first.call(null,s__188461__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__188460.call(null,cljs.core.rest.call(null,s__188461__$2)));
}
} else
{return null;
}
break;
}
});})(s__188459__$1,vec__188465,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188459__$1,vec__188465,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188458.call(null,cljs.core.rest.call(null,s__188459__$1)));
} else
{{
var G__188484 = cljs.core.rest.call(null,s__188459__$1);
s__188459__$1 = G__188484;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__188466(s__188467){return (new cljs.core.LazySeq(null,(function (){var s__188467__$1 = s__188467;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__188467__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__188473 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__188473,0,null);var item_set = cljs.core.nth.call(null,vec__188473,1,null);var iterys__4156__auto__ = ((function (s__188467__$1,vec__188473,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__188468(s__188469){return (new cljs.core.LazySeq(null,((function (s__188467__$1,vec__188473,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__188469__$1 = s__188469;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__188469__$1);if(temp__4092__auto____$1)
{var s__188469__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__188469__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__188469__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__188471 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__188470 = 0;while(true){
if((i__188470 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__188470);cljs.core.chunk_append.call(null,b__188471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__188485 = (i__188470 + 1);
i__188470 = G__188485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188471),iter__188468.call(null,cljs.core.chunk_rest.call(null,s__188469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__188471),null);
}
} else
{var item = cljs.core.first.call(null,s__188469__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__188468.call(null,cljs.core.rest.call(null,s__188469__$2)));
}
} else
{return null;
}
break;
}
});})(s__188467__$1,vec__188473,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__188467__$1,vec__188473,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__188466.call(null,cljs.core.rest.call(null,s__188467__$1)));
} else
{{
var G__188486 = cljs.core.rest.call(null,s__188467__$1);
s__188467__$1 = G__188486;
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
var G__188487 = cljs.core.nnext.call(null,in$);
var G__188488 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__188487;
out = G__188488;
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
priority_map.cljs$lang$applyTo = (function (arglist__188489){
var keyvals = cljs.core.seq(arglist__188489);
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
var G__188490 = cljs.core.nnext.call(null,in$);
var G__188491 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__188490;
out = G__188491;
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
priority_map_by.cljs$lang$applyTo = (function (arglist__188492){
var comparator = cljs.core.first(arglist__188492);
var keyvals = cljs.core.rest(arglist__188492);
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
var G__188493 = cljs.core.nnext.call(null,in$);
var G__188494 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__188493;
out = G__188494;
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
priority_map_keyfn.cljs$lang$applyTo = (function (arglist__188495){
var keyfn = cljs.core.first(arglist__188495);
var keyvals = cljs.core.rest(arglist__188495);
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
var G__188496 = cljs.core.nnext.call(null,in$);
var G__188497 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__188496;
out = G__188497;
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
priority_map_keyfn_by.cljs$lang$applyTo = (function (arglist__188498){
var keyfn = cljs.core.first(arglist__188498);
arglist__188498 = cljs.core.next(arglist__188498);
var comparator = cljs.core.first(arglist__188498);
var keyvals = cljs.core.rest(arglist__188498);
return priority_map_keyfn_by__delegate(keyfn,comparator,keyvals);
});
priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn_by__delegate;
return priority_map_keyfn_by;
})()
;

//# sourceMappingURL=priority_map.js.map