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
var G__73869 = null;
var G__73869__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__73869__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__73869 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__73869__2.call(this,self__,item);
case 3:
return G__73869__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__73869;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args73820){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args73820)));
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73821(s__73822){return (new cljs.core.LazySeq(null,(function (){var s__73822__$1 = s__73822;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73822__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73828 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73828,0,null);var item_set = cljs.core.nth.call(null,vec__73828,1,null);var iterys__4156__auto__ = ((function (s__73822__$1,vec__73828,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73823(s__73824){return (new cljs.core.LazySeq(null,((function (s__73822__$1,vec__73828,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73824__$1 = s__73824;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73824__$1);if(temp__4092__auto____$1)
{var s__73824__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73824__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73824__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73826 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73825 = 0;while(true){
if((i__73825 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73825);cljs.core.chunk_append.call(null,b__73826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__73870 = (i__73825 + 1);
i__73825 = G__73870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73826),iter__73823.call(null,cljs.core.chunk_rest.call(null,s__73824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73826),null);
}
} else
{var item = cljs.core.first.call(null,s__73824__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__73823.call(null,cljs.core.rest.call(null,s__73824__$2)));
}
} else
{return null;
}
break;
}
});})(s__73822__$1,vec__73828,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73822__$1,vec__73828,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73821.call(null,cljs.core.rest.call(null,s__73822__$1)));
} else
{{
var G__73871 = cljs.core.rest.call(null,s__73822__$1);
s__73822__$1 = G__73871;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73829(s__73830){return (new cljs.core.LazySeq(null,(function (){var s__73830__$1 = s__73830;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73830__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73836 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73836,0,null);var item_set = cljs.core.nth.call(null,vec__73836,1,null);var iterys__4156__auto__ = ((function (s__73830__$1,vec__73836,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73831(s__73832){return (new cljs.core.LazySeq(null,((function (s__73830__$1,vec__73836,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73832__$1 = s__73832;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73832__$1);if(temp__4092__auto____$1)
{var s__73832__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73832__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73832__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73834 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73833 = 0;while(true){
if((i__73833 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73833);cljs.core.chunk_append.call(null,b__73834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__73872 = (i__73833 + 1);
i__73833 = G__73872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73834),iter__73831.call(null,cljs.core.chunk_rest.call(null,s__73832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73834),null);
}
} else
{var item = cljs.core.first.call(null,s__73832__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__73831.call(null,cljs.core.rest.call(null,s__73832__$2)));
}
} else
{return null;
}
break;
}
});})(s__73830__$1,vec__73836,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73830__$1,vec__73836,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73829.call(null,cljs.core.rest.call(null,s__73830__$1)));
} else
{{
var G__73873 = cljs.core.rest.call(null,s__73830__$1);
s__73830__$1 = G__73873;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73837(s__73838){return (new cljs.core.LazySeq(null,(function (){var s__73838__$1 = s__73838;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73838__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73844 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73844,0,null);var item_set = cljs.core.nth.call(null,vec__73844,1,null);var iterys__4156__auto__ = ((function (s__73838__$1,vec__73844,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73839(s__73840){return (new cljs.core.LazySeq(null,((function (s__73838__$1,vec__73844,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73840__$1 = s__73840;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73840__$1);if(temp__4092__auto____$1)
{var s__73840__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73840__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73840__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73842 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73841 = 0;while(true){
if((i__73841 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73841);cljs.core.chunk_append.call(null,b__73842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__73874 = (i__73841 + 1);
i__73841 = G__73874;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73842),iter__73839.call(null,cljs.core.chunk_rest.call(null,s__73840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73842),null);
}
} else
{var item = cljs.core.first.call(null,s__73840__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__73839.call(null,cljs.core.rest.call(null,s__73840__$2)));
}
} else
{return null;
}
break;
}
});})(s__73838__$1,vec__73844,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73838__$1,vec__73844,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73837.call(null,cljs.core.rest.call(null,s__73838__$1)));
} else
{{
var G__73875 = cljs.core.rest.call(null,s__73838__$1);
s__73838__$1 = G__73875;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73845(s__73846){return (new cljs.core.LazySeq(null,(function (){var s__73846__$1 = s__73846;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73846__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73852 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73852,0,null);var item_set = cljs.core.nth.call(null,vec__73852,1,null);var iterys__4156__auto__ = ((function (s__73846__$1,vec__73852,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73847(s__73848){return (new cljs.core.LazySeq(null,((function (s__73846__$1,vec__73852,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73848__$1 = s__73848;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73848__$1);if(temp__4092__auto____$1)
{var s__73848__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73848__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73848__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73850 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73849 = 0;while(true){
if((i__73849 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73849);cljs.core.chunk_append.call(null,b__73850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__73876 = (i__73849 + 1);
i__73849 = G__73876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73850),iter__73847.call(null,cljs.core.chunk_rest.call(null,s__73848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73850),null);
}
} else
{var item = cljs.core.first.call(null,s__73848__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__73847.call(null,cljs.core.rest.call(null,s__73848__$2)));
}
} else
{return null;
}
break;
}
});})(s__73846__$1,vec__73852,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73846__$1,vec__73852,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73845.call(null,cljs.core.rest.call(null,s__73846__$1)));
} else
{{
var G__73877 = cljs.core.rest.call(null,s__73846__$1);
s__73846__$1 = G__73877;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73853(s__73854){return (new cljs.core.LazySeq(null,(function (){var s__73854__$1 = s__73854;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73854__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73860 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73860,0,null);var item_set = cljs.core.nth.call(null,vec__73860,1,null);var iterys__4156__auto__ = ((function (s__73854__$1,vec__73860,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73855(s__73856){return (new cljs.core.LazySeq(null,((function (s__73854__$1,vec__73860,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73856__$1 = s__73856;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73856__$1);if(temp__4092__auto____$1)
{var s__73856__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73856__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73856__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73858 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73857 = 0;while(true){
if((i__73857 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73857);cljs.core.chunk_append.call(null,b__73858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__73878 = (i__73857 + 1);
i__73857 = G__73878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73858),iter__73855.call(null,cljs.core.chunk_rest.call(null,s__73856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73858),null);
}
} else
{var item = cljs.core.first.call(null,s__73856__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__73855.call(null,cljs.core.rest.call(null,s__73856__$2)));
}
} else
{return null;
}
break;
}
});})(s__73854__$1,vec__73860,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73854__$1,vec__73860,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73853.call(null,cljs.core.rest.call(null,s__73854__$1)));
} else
{{
var G__73879 = cljs.core.rest.call(null,s__73854__$1);
s__73854__$1 = G__73879;
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
{return cljs.core.seq.call(null,(function (){var iter__4160__auto__ = (function iter__73861(s__73862){return (new cljs.core.LazySeq(null,(function (){var s__73862__$1 = s__73862;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73862__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__73868 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__73868,0,null);var item_set = cljs.core.nth.call(null,vec__73868,1,null);var iterys__4156__auto__ = ((function (s__73862__$1,vec__73868,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__73863(s__73864){return (new cljs.core.LazySeq(null,((function (s__73862__$1,vec__73868,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__73864__$1 = s__73864;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__73864__$1);if(temp__4092__auto____$1)
{var s__73864__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__73864__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__73864__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__73866 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__73865 = 0;while(true){
if((i__73865 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__73865);cljs.core.chunk_append.call(null,b__73866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__73880 = (i__73865 + 1);
i__73865 = G__73880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73866),iter__73863.call(null,cljs.core.chunk_rest.call(null,s__73864__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73866),null);
}
} else
{var item = cljs.core.first.call(null,s__73864__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__73863.call(null,cljs.core.rest.call(null,s__73864__$2)));
}
} else
{return null;
}
break;
}
});})(s__73862__$1,vec__73868,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__73862__$1,vec__73868,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,item_set));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__73861.call(null,cljs.core.rest.call(null,s__73862__$1)));
} else
{{
var G__73881 = cljs.core.rest.call(null,s__73862__$1);
s__73862__$1 = G__73881;
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
var G__73882 = cljs.core.nnext.call(null,in$);
var G__73883 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__73882;
out = G__73883;
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
priority_map.cljs$lang$applyTo = (function (arglist__73884){
var keyvals = cljs.core.seq(arglist__73884);
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
var G__73885 = cljs.core.nnext.call(null,in$);
var G__73886 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__73885;
out = G__73886;
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
priority_map_by.cljs$lang$applyTo = (function (arglist__73887){
var comparator = cljs.core.first(arglist__73887);
var keyvals = cljs.core.rest(arglist__73887);
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
var G__73888 = cljs.core.nnext.call(null,in$);
var G__73889 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__73888;
out = G__73889;
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
priority_map_keyfn.cljs$lang$applyTo = (function (arglist__73890){
var keyfn = cljs.core.first(arglist__73890);
var keyvals = cljs.core.rest(arglist__73890);
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
var G__73891 = cljs.core.nnext.call(null,in$);
var G__73892 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__73891;
out = G__73892;
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
priority_map_keyfn_by.cljs$lang$applyTo = (function (arglist__73893){
var keyfn = cljs.core.first(arglist__73893);
arglist__73893 = cljs.core.next(arglist__73893);
var comparator = cljs.core.first(arglist__73893);
var keyvals = cljs.core.rest(arglist__73893);
return priority_map_keyfn_by__delegate(keyfn,comparator,keyvals);
});
priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn_by__delegate;
return priority_map_keyfn_by;
})()
;

//# sourceMappingURL=priority_map.js.map