// Compiled by ClojureScript 0.0-2280
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
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === (0)))
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
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === (0)))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set = cljs.core.val.call(null,f);var item = cljs.core.first.call(null,item_set);var priority_key = cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1)))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (coll__$1){
return (function iter__688621(s__688622){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__688622__$1 = s__688622;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688622__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688628 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688628,(0),null);var item_set = cljs.core.nth.call(null,vec__688628,(1),null);var iterys__4265__auto__ = ((function (s__688622__$1,vec__688628,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function iter__688623(s__688624){return (new cljs.core.LazySeq(null,((function (s__688622__$1,vec__688628,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){var s__688624__$1 = s__688624;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688624__$1);if(temp__4126__auto____$1)
{var s__688624__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688624__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688624__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688626 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688625 = (0);while(true){
if((i__688625 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688625);cljs.core.chunk_append.call(null,b__688626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__688669 = (i__688625 + (1));
i__688625 = G__688669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688626),iter__688623.call(null,cljs.core.chunk_rest.call(null,s__688624__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688626),null);
}
} else
{var item = cljs.core.first.call(null,s__688624__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__688623.call(null,cljs.core.rest.call(null,s__688624__$2)));
}
} else
{return null;
}
break;
}
});})(s__688622__$1,vec__688628,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__688622__$1,vec__688628,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688621.call(null,cljs.core.rest.call(null,s__688622__$1)));
} else
{{
var G__688670 = cljs.core.rest.call(null,s__688622__$1);
s__688622__$1 = G__688670;
continue;
}
}
} else
{return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;return iter__4269__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (coll__$1){
return (function iter__688629(s__688630){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__688630__$1 = s__688630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688630__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688636 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688636,(0),null);var item_set = cljs.core.nth.call(null,vec__688636,(1),null);var iterys__4265__auto__ = ((function (s__688630__$1,vec__688636,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function iter__688631(s__688632){return (new cljs.core.LazySeq(null,((function (s__688630__$1,vec__688636,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){var s__688632__$1 = s__688632;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688632__$1);if(temp__4126__auto____$1)
{var s__688632__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688632__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688632__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688634 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688633 = (0);while(true){
if((i__688633 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688633);cljs.core.chunk_append.call(null,b__688634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__688671 = (i__688633 + (1));
i__688633 = G__688671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688634),iter__688631.call(null,cljs.core.chunk_rest.call(null,s__688632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688634),null);
}
} else
{var item = cljs.core.first.call(null,s__688632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__688631.call(null,cljs.core.rest.call(null,s__688632__$2)));
}
} else
{return null;
}
break;
}
});})(s__688630__$1,vec__688636,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__688630__$1,vec__688636,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688629.call(null,cljs.core.rest.call(null,s__688630__$1)));
} else
{{
var G__688672 = cljs.core.rest.call(null,s__688630__$1);
s__688630__$1 = G__688672;
continue;
}
}
} else
{return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;return iter__4269__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__3955__auto__ = self__.__hash;if(!((h__3955__auto__ == null)))
{return h__3955__auto__;
} else
{var h__3955__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__.__hash = h__3955__auto____$1;
return h__3955__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var item_set = self__.priority__GT_set_of_items.call(null,priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1)))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4124__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4124__auto__))
{var current_priority = temp__4124__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var current_priority_key = self__.keyfn.call(null,current_priority);var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1)))
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
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (this$__$1){
return (function iter__688637(s__688638){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__688638__$1 = s__688638;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688638__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688644 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688644,(0),null);var item_set = cljs.core.nth.call(null,vec__688644,(1),null);var iterys__4265__auto__ = ((function (s__688638__$1,vec__688644,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function iter__688639(s__688640){return (new cljs.core.LazySeq(null,((function (s__688638__$1,vec__688644,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){var s__688640__$1 = s__688640;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688640__$1);if(temp__4126__auto____$1)
{var s__688640__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688640__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688640__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688642 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688641 = (0);while(true){
if((i__688641 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688641);cljs.core.chunk_append.call(null,b__688642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__688673 = (i__688641 + (1));
i__688641 = G__688673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688642),iter__688639.call(null,cljs.core.chunk_rest.call(null,s__688640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688642),null);
}
} else
{var item = cljs.core.first.call(null,s__688640__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__688639.call(null,cljs.core.rest.call(null,s__688640__$2)));
}
} else
{return null;
}
break;
}
});})(s__688638__$1,vec__688644,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__688638__$1,vec__688644,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688637.call(null,cljs.core.rest.call(null,s__688638__$1)));
} else
{{
var G__688674 = cljs.core.rest.call(null,s__688638__$1);
s__688638__$1 = G__688674;
continue;
}
}
} else
{return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;return iter__4269__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (this$__$1){
return (function iter__688645(s__688646){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__688646__$1 = s__688646;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688646__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688652 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688652,(0),null);var item_set = cljs.core.nth.call(null,vec__688652,(1),null);var iterys__4265__auto__ = ((function (s__688646__$1,vec__688652,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function iter__688647(s__688648){return (new cljs.core.LazySeq(null,((function (s__688646__$1,vec__688652,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){var s__688648__$1 = s__688648;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688648__$1);if(temp__4126__auto____$1)
{var s__688648__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688648__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688648__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688650 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688649 = (0);while(true){
if((i__688649 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688649);cljs.core.chunk_append.call(null,b__688650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__688675 = (i__688649 + (1));
i__688649 = G__688675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688650),iter__688647.call(null,cljs.core.chunk_rest.call(null,s__688648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688650),null);
}
} else
{var item = cljs.core.first.call(null,s__688648__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__688647.call(null,cljs.core.rest.call(null,s__688648__$2)));
}
} else
{return null;
}
break;
}
});})(s__688646__$1,vec__688652,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__688646__$1,vec__688652,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688645.call(null,cljs.core.rest.call(null,s__688646__$1)));
} else
{{
var G__688676 = cljs.core.rest.call(null,s__688646__$1);
s__688646__$1 = G__688676;
continue;
}
}
} else
{return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;return iter__4269__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__688677 = null;
var G__688677__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__688677__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__688677 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__688677__2.call(this,self__,item);
case 3:
return G__688677__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__688677;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args688620){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args688620)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (sets,this$__$1){
return (function iter__688653(s__688654){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__688654__$1 = s__688654;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688654__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688660 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688660,(0),null);var item_set = cljs.core.nth.call(null,vec__688660,(1),null);var iterys__4265__auto__ = ((function (s__688654__$1,vec__688660,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function iter__688655(s__688656){return (new cljs.core.LazySeq(null,((function (s__688654__$1,vec__688660,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){var s__688656__$1 = s__688656;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688656__$1);if(temp__4126__auto____$1)
{var s__688656__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688656__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688656__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688658 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688657 = (0);while(true){
if((i__688657 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688657);cljs.core.chunk_append.call(null,b__688658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__688678 = (i__688657 + (1));
i__688657 = G__688678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688658),iter__688655.call(null,cljs.core.chunk_rest.call(null,s__688656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688658),null);
}
} else
{var item = cljs.core.first.call(null,s__688656__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__688655.call(null,cljs.core.rest.call(null,s__688656__$2)));
}
} else
{return null;
}
break;
}
});})(s__688654__$1,vec__688660,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__688654__$1,vec__688660,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688653.call(null,cljs.core.rest.call(null,s__688654__$1)));
} else
{{
var G__688679 = cljs.core.rest.call(null,s__688654__$1);
s__688654__$1 = G__688679;
continue;
}
}
} else
{return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;return iter__4269__auto__.call(null,sets);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4269__auto__ = ((function (sets,this$__$1){
return (function iter__688661(s__688662){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__688662__$1 = s__688662;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__688662__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__688668 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__688668,(0),null);var item_set = cljs.core.nth.call(null,vec__688668,(1),null);var iterys__4265__auto__ = ((function (s__688662__$1,vec__688668,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function iter__688663(s__688664){return (new cljs.core.LazySeq(null,((function (s__688662__$1,vec__688668,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){var s__688664__$1 = s__688664;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__688664__$1);if(temp__4126__auto____$1)
{var s__688664__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__688664__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__688664__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__688666 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__688665 = (0);while(true){
if((i__688665 < size__4268__auto__))
{var item = cljs.core._nth.call(null,c__4267__auto__,i__688665);cljs.core.chunk_append.call(null,b__688666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__688680 = (i__688665 + (1));
i__688665 = G__688680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688666),iter__688663.call(null,cljs.core.chunk_rest.call(null,s__688664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__688666),null);
}
} else
{var item = cljs.core.first.call(null,s__688664__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__688663.call(null,cljs.core.rest.call(null,s__688664__$2)));
}
} else
{return null;
}
break;
}
});})(s__688662__$1,vec__688668,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__688662__$1,vec__688668,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,item_set));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__688661.call(null,cljs.core.rest.call(null,s__688662__$1)));
} else
{{
var G__688681 = cljs.core.rest.call(null,s__688662__$1);
s__688662__$1 = G__688681;
continue;
}
}
} else
{return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;return iter__4269__auto__.call(null,sets);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
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
var G__688682 = cljs.core.nnext.call(null,in$);
var G__688683 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__688682;
out = G__688683;
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
priority_map.cljs$lang$applyTo = (function (arglist__688684){
var keyvals = cljs.core.seq(arglist__688684);
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
var G__688685 = cljs.core.nnext.call(null,in$);
var G__688686 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__688685;
out = G__688686;
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
priority_map_by.cljs$lang$applyTo = (function (arglist__688687){
var comparator = cljs.core.first(arglist__688687);
var keyvals = cljs.core.rest(arglist__688687);
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
var G__688688 = cljs.core.nnext.call(null,in$);
var G__688689 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__688688;
out = G__688689;
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
priority_map_keyfn.cljs$lang$applyTo = (function (arglist__688690){
var keyfn = cljs.core.first(arglist__688690);
var keyvals = cljs.core.rest(arglist__688690);
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
var G__688691 = cljs.core.nnext.call(null,in$);
var G__688692 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__688691;
out = G__688692;
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
priority_map_keyfn_by.cljs$lang$applyTo = (function (arglist__688693){
var keyfn = cljs.core.first(arglist__688693);
arglist__688693 = cljs.core.next(arglist__688693);
var comparator = cljs.core.first(arglist__688693);
var keyvals = cljs.core.rest(arglist__688693);
return priority_map_keyfn_by__delegate(keyfn,comparator,keyvals);
});
priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn_by__delegate;
return priority_map_keyfn_by;
})()
;

//# sourceMappingURL=priority_map.js.map