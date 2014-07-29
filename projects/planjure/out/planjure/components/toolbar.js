// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.components.toolbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.plan');
goog.require('planjure.history');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('planjure.history');
goog.require('planjure.utils');
goog.require('om.dom');
goog.require('planjure.utils');
goog.require('cljs.core.async');
goog.require('planjure.plan');
planjure.components.toolbar.plan_chan = cljs.core.async.chan.call(null);
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dijkstra","dijkstra",1036932424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.utils.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"dfs","dfs",1014003619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Depth-first",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.utils.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.item_selector_component = (function item_selector_component(cursor,owner){if(typeof planjure.components.toolbar.t183721 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t183721 = (function (owner,cursor,item_selector_component,meta183722){
this.owner = owner;
this.cursor = cursor;
this.item_selector_component = item_selector_component;
this.meta183722 = meta183722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t183721.cljs$lang$type = true;
planjure.components.toolbar.t183721.cljs$lang$ctorStr = "planjure.components.toolbar/t183721";
planjure.components.toolbar.t183721.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t183721");
});
planjure.components.toolbar.t183721.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t183721.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__183724){var self__ = this;
var map__183725 = p__183724;var map__183725__$1 = ((cljs.core.seq_QMARK_.call(null,map__183725))?cljs.core.apply.call(null,cljs.core.hash_map,map__183725):map__183725);var is_disabled_fn = cljs.core.get.call(null,map__183725__$1,new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760));var tool_text = cljs.core.get.call(null,map__183725__$1,new cljs.core.Keyword(null,"tool-text","tool-text",551759796));var tool_name = cljs.core.get.call(null,map__183725__$1,new cljs.core.Keyword(null,"tool-name","tool-name",551576850));var tool_kind = cljs.core.get.call(null,map__183725__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195));var configuration_chan = cljs.core.get.call(null,map__183725__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_css = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.cursor)))?"selected":null);var disabled_css = (cljs.core.truth_((function (){var and__3431__auto__ = is_disabled_fn;if(cljs.core.truth_(and__3431__auto__))
{return is_disabled_fn.call(null);
} else
{return and__3431__auto__;
}
})())?"disabled":null);var css_class = [cljs.core.str(selected_css),cljs.core.str(" "),cljs.core.str(disabled_css)].join('');return React.DOM.span({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),tool_kind,new cljs.core.Keyword(null,"value","value",1125876963),tool_name], null));
}), "className": [cljs.core.str("item-selector "),cljs.core.str(css_class)].join('')},tool_text);
});
planjure.components.toolbar.t183721.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t183721.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t183721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183723){var self__ = this;
var _183723__$1 = this;return self__.meta183722;
});
planjure.components.toolbar.t183721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183723,meta183722__$1){var self__ = this;
var _183723__$1 = this;return (new planjure.components.toolbar.t183721(self__.owner,self__.cursor,self__.item_selector_component,meta183722__$1));
});
planjure.components.toolbar.__GT_t183721 = (function __GT_t183721(owner__$1,cursor__$1,item_selector_component__$1,meta183722){return (new planjure.components.toolbar.t183721(owner__$1,cursor__$1,item_selector_component__$1,meta183722));
});
}
return (new planjure.components.toolbar.t183721(owner,cursor,item_selector_component,null));
});
planjure.components.toolbar.editor_component = (function editor_component(cursor,owner){if(typeof planjure.components.toolbar.t183755 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t183755 = (function (owner,cursor,editor_component,meta183756){
this.owner = owner;
this.cursor = cursor;
this.editor_component = editor_component;
this.meta183756 = meta183756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t183755.cljs$lang$type = true;
planjure.components.toolbar.t183755.cljs$lang$ctorStr = "planjure.components.toolbar/t183755";
planjure.components.toolbar.t183755.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t183755");
});
planjure.components.toolbar.t183755.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t183755.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__183758){var self__ = this;
var map__183759 = p__183758;var map__183759__$1 = ((cljs.core.seq_QMARK_.call(null,map__183759))?cljs.core.apply.call(null,cljs.core.hash_map,map__183759):map__183759);var configuration_chan = cljs.core.get.call(null,map__183759__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__183760(s__183761){return (new cljs.core.LazySeq(null,(function (){var s__183761__$1 = s__183761;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__183761__$1);if(temp__4092__auto__)
{var s__183761__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__183761__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__183761__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__183763 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__183762 = 0;while(true){
if((i__183762 < size__4159__auto__))
{var vec__183768 = cljs.core._nth.call(null,c__4158__auto__,i__183762);var brush_tool_name = cljs.core.nth.call(null,vec__183768,0,null);var map__183769 = cljs.core.nth.call(null,vec__183768,1,null);var map__183769__$1 = ((cljs.core.seq_QMARK_.call(null,map__183769))?cljs.core.apply.call(null,cljs.core.hash_map,map__183769):map__183769);var text = cljs.core.get.call(null,map__183769__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__183763,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__183784 = (i__183762 + 1);
i__183762 = G__183784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183763),iter__183760.call(null,cljs.core.chunk_rest.call(null,s__183761__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183763),null);
}
} else
{var vec__183770 = cljs.core.first.call(null,s__183761__$2);var brush_tool_name = cljs.core.nth.call(null,vec__183770,0,null);var map__183771 = cljs.core.nth.call(null,vec__183770,1,null);var map__183771__$1 = ((cljs.core.seq_QMARK_.call(null,map__183771))?cljs.core.apply.call(null,cljs.core.hash_map,map__183771):map__183771);var text = cljs.core.get.call(null,map__183771__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__183760.call(null,cljs.core.rest.call(null,s__183761__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",4112456317).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__183772(s__183773){return (new cljs.core.LazySeq(null,(function (){var s__183773__$1 = s__183773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__183773__$1);if(temp__4092__auto__)
{var s__183773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__183773__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__183773__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__183775 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__183774 = 0;while(true){
if((i__183774 < size__4159__auto__))
{var vec__183780 = cljs.core._nth.call(null,c__4158__auto__,i__183774);var size_name = cljs.core.nth.call(null,vec__183780,0,null);var map__183781 = cljs.core.nth.call(null,vec__183780,1,null);var map__183781__$1 = ((cljs.core.seq_QMARK_.call(null,map__183781))?cljs.core.apply.call(null,cljs.core.hash_map,map__183781):map__183781);var text = cljs.core.get.call(null,map__183781__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__183775,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__183785 = (i__183774 + 1);
i__183774 = G__183785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183775),iter__183772.call(null,cljs.core.chunk_rest.call(null,s__183773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183775),null);
}
} else
{var vec__183782 = cljs.core.first.call(null,s__183773__$2);var size_name = cljs.core.nth.call(null,vec__183782,0,null);var map__183783 = cljs.core.nth.call(null,vec__183782,1,null);var map__183783__$1 = ((cljs.core.seq_QMARK_.call(null,map__183783))?cljs.core.apply.call(null,cljs.core.hash_map,map__183783):map__183783);var text = cljs.core.get.call(null,map__183783__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__183772.call(null,cljs.core.rest.call(null,s__183773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-size-options","brush-size-options",4110370807).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()));
});
planjure.components.toolbar.t183755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183757){var self__ = this;
var _183757__$1 = this;return self__.meta183756;
});
planjure.components.toolbar.t183755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183757,meta183756__$1){var self__ = this;
var _183757__$1 = this;return (new planjure.components.toolbar.t183755(self__.owner,self__.cursor,self__.editor_component,meta183756__$1));
});
planjure.components.toolbar.__GT_t183755 = (function __GT_t183755(owner__$1,cursor__$1,editor_component__$1,meta183756){return (new planjure.components.toolbar.t183755(owner__$1,cursor__$1,editor_component__$1,meta183756));
});
}
return (new planjure.components.toolbar.t183755(owner,cursor,editor_component,null));
});
planjure.components.toolbar.size_component = (function size_component(cursor,owner){if(typeof planjure.components.toolbar.t183803 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t183803 = (function (owner,cursor,size_component,meta183804){
this.owner = owner;
this.cursor = cursor;
this.size_component = size_component;
this.meta183804 = meta183804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t183803.cljs$lang$type = true;
planjure.components.toolbar.t183803.cljs$lang$ctorStr = "planjure.components.toolbar/t183803";
planjure.components.toolbar.t183803.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t183803");
});
planjure.components.toolbar.t183803.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t183803.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__183806){var self__ = this;
var map__183807 = p__183806;var map__183807__$1 = ((cljs.core.seq_QMARK_.call(null,map__183807))?cljs.core.apply.call(null,cljs.core.hash_map,map__183807):map__183807);var configuration_chan = cljs.core.get.call(null,map__183807__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.cursor);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4160__auto__ = (function iter__183808(s__183809){return (new cljs.core.LazySeq(null,(function (){var s__183809__$1 = s__183809;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__183809__$1);if(temp__4092__auto__)
{var s__183809__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__183809__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__183809__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__183811 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__183810 = 0;while(true){
if((i__183810 < size__4159__auto__))
{var vec__183816 = cljs.core._nth.call(null,c__4158__auto__,i__183810);var size_name = cljs.core.nth.call(null,vec__183816,0,null);var map__183817 = cljs.core.nth.call(null,vec__183816,1,null);var map__183817__$1 = ((cljs.core.seq_QMARK_.call(null,map__183817))?cljs.core.apply.call(null,cljs.core.hash_map,map__183817):map__183817);var size_opts = map__183817__$1;var text = cljs.core.get.call(null,map__183817__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__183811,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__183820 = (i__183810 + 1);
i__183810 = G__183820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183811),iter__183808.call(null,cljs.core.chunk_rest.call(null,s__183809__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__183811),null);
}
} else
{var vec__183818 = cljs.core.first.call(null,s__183809__$2);var size_name = cljs.core.nth.call(null,vec__183818,0,null);var map__183819 = cljs.core.nth.call(null,vec__183818,1,null);var map__183819__$1 = ((cljs.core.seq_QMARK_.call(null,map__183819))?cljs.core.apply.call(null,cljs.core.hash_map,map__183819):map__183819);var size_opts = map__183819__$1;var text = cljs.core.get.call(null,map__183819__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__183808.call(null,cljs.core.rest.call(null,s__183809__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})());
});
planjure.components.toolbar.t183803.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t183803.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t183803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183805){var self__ = this;
var _183805__$1 = this;return self__.meta183804;
});
planjure.components.toolbar.t183803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183805,meta183804__$1){var self__ = this;
var _183805__$1 = this;return (new planjure.components.toolbar.t183803(self__.owner,self__.cursor,self__.size_component,meta183804__$1));
});
planjure.components.toolbar.__GT_t183803 = (function __GT_t183803(owner__$1,cursor__$1,size_component__$1,meta183804){return (new planjure.components.toolbar.t183803(owner__$1,cursor__$1,size_component__$1,meta183804));
});
}
return (new planjure.components.toolbar.t183803(owner,cursor,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(cursor,owner){if(typeof planjure.components.toolbar.t183824 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t183824 = (function (owner,cursor,statistics_component,meta183825){
this.owner = owner;
this.cursor = cursor;
this.statistics_component = statistics_component;
this.meta183825 = meta183825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t183824.cljs$lang$type = true;
planjure.components.toolbar.t183824.cljs$lang$ctorStr = "planjure.components.toolbar/t183824";
planjure.components.toolbar.t183824.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t183824");
});
planjure.components.toolbar.t183824.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t183824.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1807946125)},React.DOM.div(null,[cljs.core.str((self__.cursor.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368)) / 1000)),cljs.core.str(" seconds")].join('')),React.DOM.div(null,cljs.core.name.call(null,self__.cursor.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580))))));
});
planjure.components.toolbar.t183824.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t183824.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t183824.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t183824.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t183824.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t183824.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t183824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183826){var self__ = this;
var _183826__$1 = this;return self__.meta183825;
});
planjure.components.toolbar.t183824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183826,meta183825__$1){var self__ = this;
var _183826__$1 = this;return (new planjure.components.toolbar.t183824(self__.owner,self__.cursor,self__.statistics_component,meta183825__$1));
});
planjure.components.toolbar.__GT_t183824 = (function __GT_t183824(owner__$1,cursor__$1,statistics_component__$1,meta183825){return (new planjure.components.toolbar.t183824(owner__$1,cursor__$1,statistics_component__$1,meta183825));
});
}
return (new planjure.components.toolbar.t183824(owner,cursor,statistics_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t183958 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t183958 = (function (owner,app_state,toolbar_component,meta183959){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta183959 = meta183959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t183958.cljs$lang$type = true;
planjure.components.toolbar.t183958.cljs$lang$ctorStr = "planjure.components.toolbar/t183958";
planjure.components.toolbar.t183958.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t183958");
});
planjure.components.toolbar.t183958.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t183958.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__183961){var self__ = this;
var map__183962 = p__183961;var map__183962__$1 = ((cljs.core.seq_QMARK_.call(null,map__183962))?cljs.core.apply.call(null,cljs.core.hash_map,map__183962):map__183962);var configuration_chan = cljs.core.get.call(null,map__183962__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.editor_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-options","brush-options",4112456317),new cljs.core.Keyword(null,"brush-options","brush-options",4112456317).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",4110370807),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",4110370807).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"History"),React.DOM.div({"className": "section-wrapper"},React.DOM.div({"className": "button-row"},om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",1127223044),new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"undo","undo",1017498710),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Undo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760),cljs.core.complement.call(null,planjure.history.undoable)], null)], null)),om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",1127223044),new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"redo","redo",1017400688),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Redo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",2955754760),cljs.core.complement.call(null,planjure.history.redoable)], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": (function (p1__183827_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.keyword.call(null,p1__183827_SHARP_.target.value)], null));
}), "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,(function (p1__183828_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__183828_SHARP_))},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__183828_SHARP_)));
}),planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016)),"plan!");
})},"Plan Path")))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368),new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null)))));
});
planjure.components.toolbar.t183958.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t183958.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t183958.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t183958.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_184042){var state_val_184043 = (state_184042[1]);if((state_val_184043 === 1))
{var state_184042__$1 = state_184042;var statearr_184044_184087 = state_184042__$1;(statearr_184044_184087[2] = null);
(statearr_184044_184087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 2))
{var state_184042__$1 = state_184042;if(true)
{var statearr_184045_184088 = state_184042__$1;(statearr_184045_184088[1] = 4);
} else
{var statearr_184046_184089 = state_184042__$1;(statearr_184046_184089[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 3))
{var inst_184040 = (state_184042[2]);var state_184042__$1 = state_184042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184042__$1,inst_184040);
} else
{if((state_val_184043 === 4))
{var inst_183966 = [planjure.components.toolbar.plan_chan,configuration_chan];var inst_183967 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_183966,null));var state_184042__$1 = state_184042;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_184042__$1,7,inst_183967);
} else
{if((state_val_184043 === 5))
{var state_184042__$1 = state_184042;var statearr_184047_184090 = state_184042__$1;(statearr_184047_184090[2] = null);
(statearr_184047_184090[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 6))
{var inst_184038 = (state_184042[2]);var state_184042__$1 = state_184042;var statearr_184048_184091 = state_184042__$1;(statearr_184048_184091[2] = inst_184038);
(statearr_184048_184091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 7))
{var inst_183970 = (state_184042[7]);var inst_183971 = (state_184042[8]);var inst_183969 = (state_184042[2]);var inst_183970__$1 = cljs.core.nth.call(null,inst_183969,0,null);var inst_183971__$1 = cljs.core.nth.call(null,inst_183969,1,null);var inst_183972 = cljs.core.println.call(null,inst_183970__$1);var inst_183973 = cljs.core._EQ_.call(null,inst_183971__$1,planjure.components.toolbar.plan_chan);var state_184042__$1 = (function (){var statearr_184049 = state_184042;(statearr_184049[7] = inst_183970__$1);
(statearr_184049[9] = inst_183972);
(statearr_184049[8] = inst_183971__$1);
return statearr_184049;
})();if(inst_183973)
{var statearr_184050_184092 = state_184042__$1;(statearr_184050_184092[1] = 8);
} else
{var statearr_184051_184093 = state_184042__$1;(statearr_184051_184093[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 8))
{var inst_183975 = cljs.core.deref.call(null,self__.app_state);var inst_183976 = new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(inst_183975);var inst_183977 = planjure.components.toolbar.algorithms.call(null,inst_183976);var inst_183978 = inst_183977.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514));var inst_183979 = cljs.core.deref.call(null,self__.app_state);var inst_183980 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_183979);var inst_183981 = cljs.core.deref.call(null,self__.app_state);var inst_183982 = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(inst_183981);var inst_183983 = inst_183978.call(null,inst_183980,inst_183982);var inst_183984 = inst_183983.call(null,new cljs.core.Keyword(null,"time","time",1017464383));var inst_183985 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368),inst_183984);var inst_183986 = inst_183983.call(null,new cljs.core.Keyword(null,"return","return",4374474914));var inst_183987 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),inst_183986);var state_184042__$1 = (function (){var statearr_184052 = state_184042;(statearr_184052[10] = inst_183985);
return statearr_184052;
})();var statearr_184053_184094 = state_184042__$1;(statearr_184053_184094[2] = inst_183987);
(statearr_184053_184094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 9))
{var state_184042__$1 = state_184042;var statearr_184054_184095 = state_184042__$1;(statearr_184054_184095[2] = null);
(statearr_184054_184095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 10))
{var inst_183971 = (state_184042[8]);var inst_183990 = (state_184042[2]);var inst_183991 = cljs.core._EQ_.call(null,inst_183971,configuration_chan);var state_184042__$1 = (function (){var statearr_184055 = state_184042;(statearr_184055[11] = inst_183990);
return statearr_184055;
})();if(inst_183991)
{var statearr_184056_184096 = state_184042__$1;(statearr_184056_184096[1] = 11);
} else
{var statearr_184057_184097 = state_184042__$1;(statearr_184057_184097[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 11))
{var inst_183970 = (state_184042[7]);var inst_184029 = new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(inst_183970);var state_184042__$1 = state_184042;var G__184058_184098 = inst_184029;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),G__184058_184098))
{var statearr_184059_184099 = state_184042__$1;(statearr_184059_184099[1] = 16);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),G__184058_184098))
{var statearr_184060_184100 = state_184042__$1;(statearr_184060_184100[1] = 15);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_184029)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 12))
{var state_184042__$1 = state_184042;var statearr_184061_184101 = state_184042__$1;(statearr_184061_184101[2] = null);
(statearr_184061_184101[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 13))
{var inst_184034 = (state_184042[2]);var state_184042__$1 = (function (){var statearr_184062 = state_184042;(statearr_184062[12] = inst_184034);
return statearr_184062;
})();var statearr_184063_184102 = state_184042__$1;(statearr_184063_184102[2] = null);
(statearr_184063_184102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 14))
{var inst_184031 = (state_184042[2]);var state_184042__$1 = state_184042;var statearr_184064_184103 = state_184042__$1;(statearr_184064_184103[2] = inst_184031);
(statearr_184064_184103[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 15))
{var inst_183970 = (state_184042[7]);var inst_183993 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_183970);var inst_183994 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1016901061),inst_183993);var state_184042__$1 = state_184042;var statearr_184065_184104 = state_184042__$1;(statearr_184065_184104[2] = inst_183994);
(statearr_184065_184104[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 16))
{var inst_183970 = (state_184042[7]);var inst_184025 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_183970);var state_184042__$1 = state_184042;var G__184066_184105 = inst_184025;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history","history",1940838406),G__184066_184105))
{var statearr_184067_184106 = state_184042__$1;(statearr_184067_184106[1] = 19);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"world-size","world-size",1425687758),G__184066_184105))
{var statearr_184068_184107 = state_184042__$1;(statearr_184068_184107[1] = 18);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_184069_184108 = state_184042__$1;(statearr_184069_184108[1] = 23);
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 17))
{var inst_184027 = (state_184042[2]);var state_184042__$1 = state_184042;var statearr_184070_184109 = state_184042__$1;(statearr_184070_184109[2] = inst_184027);
(statearr_184070_184109[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 18))
{var inst_183970 = (state_184042[7]);var inst_183996 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_183970);var inst_183997 = cljs.core.deref.call(null,self__.app_state);var inst_183998 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),inst_183996,new cljs.core.Keyword(null,"size","size",1017434995)];var inst_183999 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_183998,null));var inst_184000 = cljs.core.get_in.call(null,inst_183997,inst_183999);var inst_184001 = (inst_184000 - 1);var inst_184002 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",1425687758),inst_183996);var inst_184003 = planjure.plan.random_world.call(null,inst_184000,inst_184000);var inst_184004 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world","world",1127223044),inst_184003);var inst_184005 = [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)];var inst_184006 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_184005,null));var inst_184007 = [inst_184001,inst_184001];var inst_184008 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_184007,null));var inst_184009 = om.core.update_BANG_.call(null,self__.app_state,inst_184006,inst_184008);var inst_184010 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY);var inst_184011 = planjure.history.reset.call(null);var state_184042__$1 = (function (){var statearr_184071 = state_184042;(statearr_184071[13] = inst_184004);
(statearr_184071[14] = inst_184009);
(statearr_184071[15] = inst_184010);
(statearr_184071[16] = inst_184002);
return statearr_184071;
})();var statearr_184072_184110 = state_184042__$1;(statearr_184072_184110[2] = inst_184011);
(statearr_184072_184110[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 19))
{var inst_183970 = (state_184042[7]);var inst_184017 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_183970);var state_184042__$1 = state_184042;var G__184073_184111 = inst_184017;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redo","redo",1017400688),G__184073_184111))
{var statearr_184074_184112 = state_184042__$1;(statearr_184074_184112[1] = 22);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",1017498710),G__184073_184111))
{var statearr_184075_184113 = state_184042__$1;(statearr_184075_184113[1] = 21);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_184017)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 20))
{var inst_184019 = (state_184042[2]);var state_184042__$1 = state_184042;var statearr_184076_184114 = state_184042__$1;(statearr_184076_184114[2] = inst_184019);
(statearr_184076_184114[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 21))
{var inst_184013 = planjure.history.undo.call(null);var state_184042__$1 = state_184042;var statearr_184077_184115 = state_184042__$1;(statearr_184077_184115[2] = inst_184013);
(statearr_184077_184115[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 22))
{var inst_184015 = planjure.history.redo.call(null);var state_184042__$1 = state_184042;var statearr_184078_184116 = state_184042__$1;(statearr_184078_184116[2] = inst_184015);
(statearr_184078_184116[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_184043 === 23))
{var inst_183970 = (state_184042[7]);var inst_184021 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_183970);var inst_184022 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_183970);var inst_184023 = om.core.update_BANG_.call(null,self__.app_state,inst_184021,inst_184022);var state_184042__$1 = state_184042;var statearr_184079_184117 = state_184042__$1;(statearr_184079_184117[2] = inst_184023);
(statearr_184079_184117[1] = 17);
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
var state_machine__6824__auto____0 = (function (){var statearr_184083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_184083[0] = state_machine__6824__auto__);
(statearr_184083[1] = 1);
return statearr_184083;
});
var state_machine__6824__auto____1 = (function (state_184042){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_184042);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e184084){if((e184084 instanceof Object))
{var ex__6827__auto__ = e184084;var statearr_184085_184118 = state_184042;(statearr_184085_184118[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e184084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__184119 = state_184042;
state_184042 = G__184119;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_184042){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_184042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_184086 = f__6839__auto__.call(null);(statearr_184086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_184086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.toolbar.t183958.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t183958.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016),planjure.components.toolbar.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t183958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183960){var self__ = this;
var _183960__$1 = this;return self__.meta183959;
});
planjure.components.toolbar.t183958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183960,meta183959__$1){var self__ = this;
var _183960__$1 = this;return (new planjure.components.toolbar.t183958(self__.owner,self__.app_state,self__.toolbar_component,meta183959__$1));
});
planjure.components.toolbar.__GT_t183958 = (function __GT_t183958(owner__$1,app_state__$1,toolbar_component__$1,meta183959){return (new planjure.components.toolbar.t183958(owner__$1,app_state__$1,toolbar_component__$1,meta183959));
});
}
return (new planjure.components.toolbar.t183958(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map