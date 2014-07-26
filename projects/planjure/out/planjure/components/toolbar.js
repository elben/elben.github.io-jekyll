// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.components.toolbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.history');
goog.require('planjure.history');
goog.require('planjure.plan');
goog.require('planjure.plan');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
planjure.components.toolbar.plan_chan = cljs.core.async.chan.call(null);
planjure.components.toolbar.time_f = (function time_f(f){return (function() { 
var G__68935__delegate = function (args){var start = (new Date());var ret = cljs.core.apply.call(null,f,args);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1017464383),((new Date()) - start),new cljs.core.Keyword(null,"return","return",4374474914),ret], null);
};
var G__68935 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__68935__delegate.call(this,args);};
G__68935.cljs$lang$maxFixedArity = 0;
G__68935.cljs$lang$applyTo = (function (arglist__68936){
var args = cljs.core.seq(arglist__68936);
return G__68935__delegate(args);
});
G__68935.cljs$core$IFn$_invoke$arity$variadic = G__68935__delegate;
return G__68935;
})()
;
});
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dijkstra","dijkstra",1036932424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"dfs","dfs",1014003619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Depth-first",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.item_selector_component = (function item_selector_component(app_state,owner){if(typeof planjure.components.toolbar.t68942 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t68942 = (function (owner,app_state,item_selector_component,meta68943){
this.owner = owner;
this.app_state = app_state;
this.item_selector_component = item_selector_component;
this.meta68943 = meta68943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t68942.cljs$lang$type = true;
planjure.components.toolbar.t68942.cljs$lang$ctorStr = "planjure.components.toolbar/t68942";
planjure.components.toolbar.t68942.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t68942");
});
planjure.components.toolbar.t68942.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t68942.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__68945){var self__ = this;
var map__68946 = p__68945;var map__68946__$1 = ((cljs.core.seq_QMARK_.call(null,map__68946))?cljs.core.apply.call(null,cljs.core.hash_map,map__68946):map__68946);var is_disabled_fn = cljs.core.get.call(null,map__68946__$1,new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760));var tool_text = cljs.core.get.call(null,map__68946__$1,new cljs.core.Keyword(null,"tool-text","tool-text",551759796));var tool_name = cljs.core.get.call(null,map__68946__$1,new cljs.core.Keyword(null,"tool-name","tool-name",551576850));var tool_kind = cljs.core.get.call(null,map__68946__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195));var configuration_chan = cljs.core.get.call(null,map__68946__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_css = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.app_state)))?"selected":null);var disabled_css = (cljs.core.truth_((function (){var and__3431__auto__ = is_disabled_fn;if(cljs.core.truth_(and__3431__auto__))
{return is_disabled_fn.call(null);
} else
{return and__3431__auto__;
}
})())?"disabled":null);var css_class = [cljs.core.str(selected_css),cljs.core.str(" "),cljs.core.str(disabled_css)].join('');return React.DOM.span({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),tool_kind,new cljs.core.Keyword(null,"value","value",1125876963),tool_name], null));
}), "className": [cljs.core.str("item-selector "),cljs.core.str(css_class)].join('')},tool_text);
});
planjure.components.toolbar.t68942.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t68942.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t68942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68944){var self__ = this;
var _68944__$1 = this;return self__.meta68943;
});
planjure.components.toolbar.t68942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68944,meta68943__$1){var self__ = this;
var _68944__$1 = this;return (new planjure.components.toolbar.t68942(self__.owner,self__.app_state,self__.item_selector_component,meta68943__$1));
});
planjure.components.toolbar.__GT_t68942 = (function __GT_t68942(owner__$1,app_state__$1,item_selector_component__$1,meta68943){return (new planjure.components.toolbar.t68942(owner__$1,app_state__$1,item_selector_component__$1,meta68943));
});
}
return (new planjure.components.toolbar.t68942(owner,app_state,item_selector_component,null));
});
planjure.components.toolbar.editor_component = (function editor_component(app_state,owner){if(typeof planjure.components.toolbar.t68976 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t68976 = (function (owner,app_state,editor_component,meta68977){
this.owner = owner;
this.app_state = app_state;
this.editor_component = editor_component;
this.meta68977 = meta68977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t68976.cljs$lang$type = true;
planjure.components.toolbar.t68976.cljs$lang$ctorStr = "planjure.components.toolbar/t68976";
planjure.components.toolbar.t68976.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t68976");
});
planjure.components.toolbar.t68976.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t68976.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__68979){var self__ = this;
var map__68980 = p__68979;var map__68980__$1 = ((cljs.core.seq_QMARK_.call(null,map__68980))?cljs.core.apply.call(null,cljs.core.hash_map,map__68980):map__68980);var configuration_chan = cljs.core.get.call(null,map__68980__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__68981(s__68982){return (new cljs.core.LazySeq(null,(function (){var s__68982__$1 = s__68982;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__68982__$1);if(temp__4092__auto__)
{var s__68982__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__68982__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__68982__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__68984 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__68983 = 0;while(true){
if((i__68983 < size__4159__auto__))
{var vec__68989 = cljs.core._nth.call(null,c__4158__auto__,i__68983);var brush_tool_name = cljs.core.nth.call(null,vec__68989,0,null);var map__68990 = cljs.core.nth.call(null,vec__68989,1,null);var map__68990__$1 = ((cljs.core.seq_QMARK_.call(null,map__68990))?cljs.core.apply.call(null,cljs.core.hash_map,map__68990):map__68990);var text = cljs.core.get.call(null,map__68990__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__68984,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__69005 = (i__68983 + 1);
i__68983 = G__69005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68984),iter__68981.call(null,cljs.core.chunk_rest.call(null,s__68982__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68984),null);
}
} else
{var vec__68991 = cljs.core.first.call(null,s__68982__$2);var brush_tool_name = cljs.core.nth.call(null,vec__68991,0,null);var map__68992 = cljs.core.nth.call(null,vec__68991,1,null);var map__68992__$1 = ((cljs.core.seq_QMARK_.call(null,map__68992))?cljs.core.apply.call(null,cljs.core.hash_map,map__68992):map__68992);var text = cljs.core.get.call(null,map__68992__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__68981.call(null,cljs.core.rest.call(null,s__68982__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",4112456317).cljs$core$IFn$_invoke$arity$1(self__.app_state));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__68993(s__68994){return (new cljs.core.LazySeq(null,(function (){var s__68994__$1 = s__68994;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__68994__$1);if(temp__4092__auto__)
{var s__68994__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__68994__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__68994__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__68996 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__68995 = 0;while(true){
if((i__68995 < size__4159__auto__))
{var vec__69001 = cljs.core._nth.call(null,c__4158__auto__,i__68995);var size_name = cljs.core.nth.call(null,vec__69001,0,null);var map__69002 = cljs.core.nth.call(null,vec__69001,1,null);var map__69002__$1 = ((cljs.core.seq_QMARK_.call(null,map__69002))?cljs.core.apply.call(null,cljs.core.hash_map,map__69002):map__69002);var text = cljs.core.get.call(null,map__69002__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__68996,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__69006 = (i__68995 + 1);
i__68995 = G__69006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68996),iter__68993.call(null,cljs.core.chunk_rest.call(null,s__68994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68996),null);
}
} else
{var vec__69003 = cljs.core.first.call(null,s__68994__$2);var size_name = cljs.core.nth.call(null,vec__69003,0,null);var map__69004 = cljs.core.nth.call(null,vec__69003,1,null);var map__69004__$1 = ((cljs.core.seq_QMARK_.call(null,map__69004))?cljs.core.apply.call(null,cljs.core.hash_map,map__69004):map__69004);var text = cljs.core.get.call(null,map__69004__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__68993.call(null,cljs.core.rest.call(null,s__68994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-size-options","brush-size-options",4110370807).cljs$core$IFn$_invoke$arity$1(self__.app_state));
})()));
});
planjure.components.toolbar.t68976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68978){var self__ = this;
var _68978__$1 = this;return self__.meta68977;
});
planjure.components.toolbar.t68976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68978,meta68977__$1){var self__ = this;
var _68978__$1 = this;return (new planjure.components.toolbar.t68976(self__.owner,self__.app_state,self__.editor_component,meta68977__$1));
});
planjure.components.toolbar.__GT_t68976 = (function __GT_t68976(owner__$1,app_state__$1,editor_component__$1,meta68977){return (new planjure.components.toolbar.t68976(owner__$1,app_state__$1,editor_component__$1,meta68977));
});
}
return (new planjure.components.toolbar.t68976(owner,app_state,editor_component,null));
});
planjure.components.toolbar.size_component = (function size_component(app_state,owner){if(typeof planjure.components.toolbar.t69024 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t69024 = (function (owner,app_state,size_component,meta69025){
this.owner = owner;
this.app_state = app_state;
this.size_component = size_component;
this.meta69025 = meta69025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t69024.cljs$lang$type = true;
planjure.components.toolbar.t69024.cljs$lang$ctorStr = "planjure.components.toolbar/t69024";
planjure.components.toolbar.t69024.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t69024");
});
planjure.components.toolbar.t69024.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t69024.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__69027){var self__ = this;
var map__69028 = p__69027;var map__69028__$1 = ((cljs.core.seq_QMARK_.call(null,map__69028))?cljs.core.apply.call(null,cljs.core.hash_map,map__69028):map__69028);var configuration_chan = cljs.core.get.call(null,map__69028__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.app_state);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4160__auto__ = (function iter__69029(s__69030){return (new cljs.core.LazySeq(null,(function (){var s__69030__$1 = s__69030;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__69030__$1);if(temp__4092__auto__)
{var s__69030__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__69030__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__69030__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__69032 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__69031 = 0;while(true){
if((i__69031 < size__4159__auto__))
{var vec__69037 = cljs.core._nth.call(null,c__4158__auto__,i__69031);var size_name = cljs.core.nth.call(null,vec__69037,0,null);var map__69038 = cljs.core.nth.call(null,vec__69037,1,null);var map__69038__$1 = ((cljs.core.seq_QMARK_.call(null,map__69038))?cljs.core.apply.call(null,cljs.core.hash_map,map__69038):map__69038);var size_opts = map__69038__$1;var text = cljs.core.get.call(null,map__69038__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__69032,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__69041 = (i__69031 + 1);
i__69031 = G__69041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69032),iter__69029.call(null,cljs.core.chunk_rest.call(null,s__69030__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69032),null);
}
} else
{var vec__69039 = cljs.core.first.call(null,s__69030__$2);var size_name = cljs.core.nth.call(null,vec__69039,0,null);var map__69040 = cljs.core.nth.call(null,vec__69039,1,null);var map__69040__$1 = ((cljs.core.seq_QMARK_.call(null,map__69040))?cljs.core.apply.call(null,cljs.core.hash_map,map__69040):map__69040);var size_opts = map__69040__$1;var text = cljs.core.get.call(null,map__69040__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__69029.call(null,cljs.core.rest.call(null,s__69030__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743).cljs$core$IFn$_invoke$arity$1(self__.app_state));
})());
});
planjure.components.toolbar.t69024.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t69024.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t69024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69026){var self__ = this;
var _69026__$1 = this;return self__.meta69025;
});
planjure.components.toolbar.t69024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69026,meta69025__$1){var self__ = this;
var _69026__$1 = this;return (new planjure.components.toolbar.t69024(self__.owner,self__.app_state,self__.size_component,meta69025__$1));
});
planjure.components.toolbar.__GT_t69024 = (function __GT_t69024(owner__$1,app_state__$1,size_component__$1,meta69025){return (new planjure.components.toolbar.t69024(owner__$1,app_state__$1,size_component__$1,meta69025));
});
}
return (new planjure.components.toolbar.t69024(owner,app_state,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(app_state,owner){if(typeof planjure.components.toolbar.t69045 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t69045 = (function (owner,app_state,statistics_component,meta69046){
this.owner = owner;
this.app_state = app_state;
this.statistics_component = statistics_component;
this.meta69046 = meta69046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t69045.cljs$lang$type = true;
planjure.components.toolbar.t69045.cljs$lang$ctorStr = "planjure.components.toolbar/t69045";
planjure.components.toolbar.t69045.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t69045");
});
planjure.components.toolbar.t69045.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t69045.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1807946125)},React.DOM.div(null,[cljs.core.str((self__.app_state.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368)) / 1000)),cljs.core.str(" seconds")].join('')),React.DOM.div(null,cljs.core.name.call(null,self__.app_state.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580))))));
});
planjure.components.toolbar.t69045.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t69045.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t69045.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t69045.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t69045.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t69045.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t69045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69047){var self__ = this;
var _69047__$1 = this;return self__.meta69046;
});
planjure.components.toolbar.t69045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69047,meta69046__$1){var self__ = this;
var _69047__$1 = this;return (new planjure.components.toolbar.t69045(self__.owner,self__.app_state,self__.statistics_component,meta69046__$1));
});
planjure.components.toolbar.__GT_t69045 = (function __GT_t69045(owner__$1,app_state__$1,statistics_component__$1,meta69046){return (new planjure.components.toolbar.t69045(owner__$1,app_state__$1,statistics_component__$1,meta69046));
});
}
return (new planjure.components.toolbar.t69045(owner,app_state,statistics_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t69179 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t69179 = (function (owner,app_state,toolbar_component,meta69180){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta69180 = meta69180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t69179.cljs$lang$type = true;
planjure.components.toolbar.t69179.cljs$lang$ctorStr = "planjure.components.toolbar/t69179";
planjure.components.toolbar.t69179.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t69179");
});
planjure.components.toolbar.t69179.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t69179.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__69182){var self__ = this;
var map__69183 = p__69182;var map__69183__$1 = ((cljs.core.seq_QMARK_.call(null,map__69183))?cljs.core.apply.call(null,cljs.core.hash_map,map__69183):map__69183);var configuration_chan = cljs.core.get.call(null,map__69183__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.editor_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"History"),React.DOM.div({"className": "section-wrapper"},React.DOM.div({"className": "button-row"},om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"undo","undo",1017498710),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Undo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760),cljs.core.complement.call(null,planjure.history.undoable)], null)], null)),om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"redo","redo",1017400688),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Redo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760),cljs.core.complement.call(null,planjure.history.redoable)], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": (function (p1__69048_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.keyword.call(null,p1__69048_SHARP_.target.value)], null));
}), "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,(function (p1__69049_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__69049_SHARP_))},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__69049_SHARP_)));
}),planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016)),"plan!");
})},"Plan Path")))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,self__.app_state))));
});
planjure.components.toolbar.t69179.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t69179.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t69179.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t69179.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_69263){var state_val_69264 = (state_69263[1]);if((state_val_69264 === 1))
{var state_69263__$1 = state_69263;var statearr_69265_69308 = state_69263__$1;(statearr_69265_69308[2] = null);
(statearr_69265_69308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 2))
{var state_69263__$1 = state_69263;if(true)
{var statearr_69266_69309 = state_69263__$1;(statearr_69266_69309[1] = 4);
} else
{var statearr_69267_69310 = state_69263__$1;(statearr_69267_69310[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 3))
{var inst_69261 = (state_69263[2]);var state_69263__$1 = state_69263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69263__$1,inst_69261);
} else
{if((state_val_69264 === 4))
{var inst_69187 = [planjure.components.toolbar.plan_chan,configuration_chan];var inst_69188 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_69187,null));var state_69263__$1 = state_69263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_69263__$1,7,inst_69188);
} else
{if((state_val_69264 === 5))
{var state_69263__$1 = state_69263;var statearr_69268_69311 = state_69263__$1;(statearr_69268_69311[2] = null);
(statearr_69268_69311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 6))
{var inst_69259 = (state_69263[2]);var state_69263__$1 = state_69263;var statearr_69269_69312 = state_69263__$1;(statearr_69269_69312[2] = inst_69259);
(statearr_69269_69312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 7))
{var inst_69191 = (state_69263[7]);var inst_69192 = (state_69263[8]);var inst_69190 = (state_69263[2]);var inst_69191__$1 = cljs.core.nth.call(null,inst_69190,0,null);var inst_69192__$1 = cljs.core.nth.call(null,inst_69190,1,null);var inst_69193 = cljs.core.println.call(null,inst_69191__$1);var inst_69194 = cljs.core._EQ_.call(null,inst_69192__$1,planjure.components.toolbar.plan_chan);var state_69263__$1 = (function (){var statearr_69270 = state_69263;(statearr_69270[7] = inst_69191__$1);
(statearr_69270[8] = inst_69192__$1);
(statearr_69270[9] = inst_69193);
return statearr_69270;
})();if(inst_69194)
{var statearr_69271_69313 = state_69263__$1;(statearr_69271_69313[1] = 8);
} else
{var statearr_69272_69314 = state_69263__$1;(statearr_69272_69314[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 8))
{var inst_69196 = cljs.core.deref.call(null,self__.app_state);var inst_69197 = new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(inst_69196);var inst_69198 = planjure.components.toolbar.algorithms.call(null,inst_69197);var inst_69199 = inst_69198.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514));var inst_69200 = cljs.core.deref.call(null,self__.app_state);var inst_69201 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_69200);var inst_69202 = cljs.core.deref.call(null,self__.app_state);var inst_69203 = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(inst_69202);var inst_69204 = inst_69199.call(null,inst_69201,inst_69203);var inst_69205 = inst_69204.call(null,new cljs.core.Keyword(null,"time","time",1017464383));var inst_69206 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368),inst_69205);var inst_69207 = inst_69204.call(null,new cljs.core.Keyword(null,"return","return",4374474914));var inst_69208 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),inst_69207);var state_69263__$1 = (function (){var statearr_69273 = state_69263;(statearr_69273[10] = inst_69206);
return statearr_69273;
})();var statearr_69274_69315 = state_69263__$1;(statearr_69274_69315[2] = inst_69208);
(statearr_69274_69315[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 9))
{var state_69263__$1 = state_69263;var statearr_69275_69316 = state_69263__$1;(statearr_69275_69316[2] = null);
(statearr_69275_69316[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 10))
{var inst_69192 = (state_69263[8]);var inst_69211 = (state_69263[2]);var inst_69212 = cljs.core._EQ_.call(null,inst_69192,configuration_chan);var state_69263__$1 = (function (){var statearr_69276 = state_69263;(statearr_69276[11] = inst_69211);
return statearr_69276;
})();if(inst_69212)
{var statearr_69277_69317 = state_69263__$1;(statearr_69277_69317[1] = 11);
} else
{var statearr_69278_69318 = state_69263__$1;(statearr_69278_69318[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 11))
{var inst_69191 = (state_69263[7]);var inst_69250 = new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(inst_69191);var state_69263__$1 = state_69263;var G__69279_69319 = inst_69250;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),G__69279_69319))
{var statearr_69280_69320 = state_69263__$1;(statearr_69280_69320[1] = 16);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),G__69279_69319))
{var statearr_69281_69321 = state_69263__$1;(statearr_69281_69321[1] = 15);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_69250)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 12))
{var state_69263__$1 = state_69263;var statearr_69282_69322 = state_69263__$1;(statearr_69282_69322[2] = null);
(statearr_69282_69322[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 13))
{var inst_69255 = (state_69263[2]);var state_69263__$1 = (function (){var statearr_69283 = state_69263;(statearr_69283[12] = inst_69255);
return statearr_69283;
})();var statearr_69284_69323 = state_69263__$1;(statearr_69284_69323[2] = null);
(statearr_69284_69323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 14))
{var inst_69252 = (state_69263[2]);var state_69263__$1 = state_69263;var statearr_69285_69324 = state_69263__$1;(statearr_69285_69324[2] = inst_69252);
(statearr_69285_69324[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 15))
{var inst_69191 = (state_69263[7]);var inst_69214 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_69191);var inst_69215 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1016901061),inst_69214);var state_69263__$1 = state_69263;var statearr_69286_69325 = state_69263__$1;(statearr_69286_69325[2] = inst_69215);
(statearr_69286_69325[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 16))
{var inst_69191 = (state_69263[7]);var inst_69246 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_69191);var state_69263__$1 = state_69263;var G__69287_69326 = inst_69246;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history","history",1940838406),G__69287_69326))
{var statearr_69288_69327 = state_69263__$1;(statearr_69288_69327[1] = 19);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"world-size","world-size",1425687758),G__69287_69326))
{var statearr_69289_69328 = state_69263__$1;(statearr_69289_69328[1] = 18);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_69290_69329 = state_69263__$1;(statearr_69290_69329[1] = 23);
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 17))
{var inst_69248 = (state_69263[2]);var state_69263__$1 = state_69263;var statearr_69291_69330 = state_69263__$1;(statearr_69291_69330[2] = inst_69248);
(statearr_69291_69330[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 18))
{var inst_69191 = (state_69263[7]);var inst_69217 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_69191);var inst_69218 = cljs.core.deref.call(null,self__.app_state);var inst_69219 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),inst_69217,new cljs.core.Keyword(null,"size","size",1017434995)];var inst_69220 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_69219,null));var inst_69221 = cljs.core.get_in.call(null,inst_69218,inst_69220);var inst_69222 = (inst_69221 - 1);var inst_69223 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",1425687758),inst_69217);var inst_69224 = planjure.plan.random_world.call(null,inst_69221,inst_69221);var inst_69225 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world","world",1127223044),inst_69224);var inst_69226 = [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)];var inst_69227 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_69226,null));var inst_69228 = [inst_69222,inst_69222];var inst_69229 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_69228,null));var inst_69230 = om.core.update_BANG_.call(null,self__.app_state,inst_69227,inst_69229);var inst_69231 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY);var inst_69232 = planjure.history.reset.call(null);var state_69263__$1 = (function (){var statearr_69292 = state_69263;(statearr_69292[13] = inst_69225);
(statearr_69292[14] = inst_69223);
(statearr_69292[15] = inst_69231);
(statearr_69292[16] = inst_69230);
return statearr_69292;
})();var statearr_69293_69331 = state_69263__$1;(statearr_69293_69331[2] = inst_69232);
(statearr_69293_69331[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 19))
{var inst_69191 = (state_69263[7]);var inst_69238 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_69191);var state_69263__$1 = state_69263;var G__69294_69332 = inst_69238;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redo","redo",1017400688),G__69294_69332))
{var statearr_69295_69333 = state_69263__$1;(statearr_69295_69333[1] = 22);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",1017498710),G__69294_69332))
{var statearr_69296_69334 = state_69263__$1;(statearr_69296_69334[1] = 21);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_69238)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 20))
{var inst_69240 = (state_69263[2]);var state_69263__$1 = state_69263;var statearr_69297_69335 = state_69263__$1;(statearr_69297_69335[2] = inst_69240);
(statearr_69297_69335[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 21))
{var inst_69234 = planjure.history.undo.call(null);var state_69263__$1 = state_69263;var statearr_69298_69336 = state_69263__$1;(statearr_69298_69336[2] = inst_69234);
(statearr_69298_69336[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 22))
{var inst_69236 = planjure.history.redo.call(null);var state_69263__$1 = state_69263;var statearr_69299_69337 = state_69263__$1;(statearr_69299_69337[2] = inst_69236);
(statearr_69299_69337[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69264 === 23))
{var inst_69191 = (state_69263[7]);var inst_69242 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_69191);var inst_69243 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_69191);var inst_69244 = om.core.update_BANG_.call(null,self__.app_state,inst_69242,inst_69243);var state_69263__$1 = state_69263;var statearr_69300_69338 = state_69263__$1;(statearr_69300_69338[2] = inst_69244);
(statearr_69300_69338[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_69304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_69304[0] = state_machine__6824__auto__);
(statearr_69304[1] = 1);
return statearr_69304;
});
var state_machine__6824__auto____1 = (function (state_69263){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_69263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e69305){if((e69305 instanceof Object))
{var ex__6827__auto__ = e69305;var statearr_69306_69339 = state_69263;(statearr_69306_69339[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69340 = state_69263;
state_69263 = G__69340;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_69263){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_69263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_69307 = f__6839__auto__.call(null);(statearr_69307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_69307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.toolbar.t69179.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t69179.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016),planjure.components.toolbar.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t69179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69181){var self__ = this;
var _69181__$1 = this;return self__.meta69180;
});
planjure.components.toolbar.t69179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69181,meta69180__$1){var self__ = this;
var _69181__$1 = this;return (new planjure.components.toolbar.t69179(self__.owner,self__.app_state,self__.toolbar_component,meta69180__$1));
});
planjure.components.toolbar.__GT_t69179 = (function __GT_t69179(owner__$1,app_state__$1,toolbar_component__$1,meta69180){return (new planjure.components.toolbar.t69179(owner__$1,app_state__$1,toolbar_component__$1,meta69180));
});
}
return (new planjure.components.toolbar.t69179(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map