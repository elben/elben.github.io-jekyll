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
var G__9664__delegate = function (args){var start = (new Date());var ret = cljs.core.apply.call(null,f,args);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1017464383),((new Date()) - start),new cljs.core.Keyword(null,"return","return",4374474914),ret], null);
};
var G__9664 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9664__delegate.call(this,args);};
G__9664.cljs$lang$maxFixedArity = 0;
G__9664.cljs$lang$applyTo = (function (arglist__9665){
var args = cljs.core.seq(arglist__9665);
return G__9664__delegate(args);
});
G__9664.cljs$core$IFn$_invoke$arity$variadic = G__9664__delegate;
return G__9664;
})()
;
});
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dijkstra","dijkstra",1036932424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"dfs","dfs",1014003619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Depth-first",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.item_selector_component = (function item_selector_component(app_state,owner){if(typeof planjure.components.toolbar.t9671 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t9671 = (function (owner,app_state,item_selector_component,meta9672){
this.owner = owner;
this.app_state = app_state;
this.item_selector_component = item_selector_component;
this.meta9672 = meta9672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t9671.cljs$lang$type = true;
planjure.components.toolbar.t9671.cljs$lang$ctorStr = "planjure.components.toolbar/t9671";
planjure.components.toolbar.t9671.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t9671");
});
planjure.components.toolbar.t9671.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t9671.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9674){var self__ = this;
var map__9675 = p__9674;var map__9675__$1 = ((cljs.core.seq_QMARK_.call(null,map__9675))?cljs.core.apply.call(null,cljs.core.hash_map,map__9675):map__9675);var selected = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tool_text = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"tool-text","tool-text",551759796));var tool_name = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"tool-name","tool-name",551576850));var tool_kind = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195));var configuration_chan = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var css_class = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.app_state)))?"selected":"");return React.DOM.span({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),tool_kind,new cljs.core.Keyword(null,"value","value",1125876963),tool_name], null));
}), "className": [cljs.core.str("item-selector "),cljs.core.str(css_class)].join('')},tool_text);
});
planjure.components.toolbar.t9671.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t9671.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t9671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9673){var self__ = this;
var _9673__$1 = this;return self__.meta9672;
});
planjure.components.toolbar.t9671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9673,meta9672__$1){var self__ = this;
var _9673__$1 = this;return (new planjure.components.toolbar.t9671(self__.owner,self__.app_state,self__.item_selector_component,meta9672__$1));
});
planjure.components.toolbar.__GT_t9671 = (function __GT_t9671(owner__$1,app_state__$1,item_selector_component__$1,meta9672){return (new planjure.components.toolbar.t9671(owner__$1,app_state__$1,item_selector_component__$1,meta9672));
});
}
return (new planjure.components.toolbar.t9671(owner,app_state,item_selector_component,null));
});
planjure.components.toolbar.editor_component = (function editor_component(app_state,owner){if(typeof planjure.components.toolbar.t9705 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t9705 = (function (owner,app_state,editor_component,meta9706){
this.owner = owner;
this.app_state = app_state;
this.editor_component = editor_component;
this.meta9706 = meta9706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t9705.cljs$lang$type = true;
planjure.components.toolbar.t9705.cljs$lang$ctorStr = "planjure.components.toolbar/t9705";
planjure.components.toolbar.t9705.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t9705");
});
planjure.components.toolbar.t9705.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t9705.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9708){var self__ = this;
var map__9709 = p__9708;var map__9709__$1 = ((cljs.core.seq_QMARK_.call(null,map__9709))?cljs.core.apply.call(null,cljs.core.hash_map,map__9709):map__9709);var configuration_chan = cljs.core.get.call(null,map__9709__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__9710(s__9711){return (new cljs.core.LazySeq(null,(function (){var s__9711__$1 = s__9711;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9711__$1);if(temp__4092__auto__)
{var s__9711__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9711__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9711__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9713 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9712 = 0;while(true){
if((i__9712 < size__4159__auto__))
{var vec__9718 = cljs.core._nth.call(null,c__4158__auto__,i__9712);var brush_tool_name = cljs.core.nth.call(null,vec__9718,0,null);var map__9719 = cljs.core.nth.call(null,vec__9718,1,null);var map__9719__$1 = ((cljs.core.seq_QMARK_.call(null,map__9719))?cljs.core.apply.call(null,cljs.core.hash_map,map__9719):map__9719);var text = cljs.core.get.call(null,map__9719__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__9713,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__9734 = (i__9712 + 1);
i__9712 = G__9734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9713),iter__9710.call(null,cljs.core.chunk_rest.call(null,s__9711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9713),null);
}
} else
{var vec__9720 = cljs.core.first.call(null,s__9711__$2);var brush_tool_name = cljs.core.nth.call(null,vec__9720,0,null);var map__9721 = cljs.core.nth.call(null,vec__9720,1,null);var map__9721__$1 = ((cljs.core.seq_QMARK_.call(null,map__9721))?cljs.core.apply.call(null,cljs.core.hash_map,map__9721):map__9721);var text = cljs.core.get.call(null,map__9721__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__9710.call(null,cljs.core.rest.call(null,s__9711__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",4112456317).cljs$core$IFn$_invoke$arity$1(self__.app_state));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__9722(s__9723){return (new cljs.core.LazySeq(null,(function (){var s__9723__$1 = s__9723;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9723__$1);if(temp__4092__auto__)
{var s__9723__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9723__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9723__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9725 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9724 = 0;while(true){
if((i__9724 < size__4159__auto__))
{var vec__9730 = cljs.core._nth.call(null,c__4158__auto__,i__9724);var size_name = cljs.core.nth.call(null,vec__9730,0,null);var map__9731 = cljs.core.nth.call(null,vec__9730,1,null);var map__9731__$1 = ((cljs.core.seq_QMARK_.call(null,map__9731))?cljs.core.apply.call(null,cljs.core.hash_map,map__9731):map__9731);var text = cljs.core.get.call(null,map__9731__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__9725,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__9735 = (i__9724 + 1);
i__9724 = G__9735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9725),iter__9722.call(null,cljs.core.chunk_rest.call(null,s__9723__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9725),null);
}
} else
{var vec__9732 = cljs.core.first.call(null,s__9723__$2);var size_name = cljs.core.nth.call(null,vec__9732,0,null);var map__9733 = cljs.core.nth.call(null,vec__9732,1,null);var map__9733__$1 = ((cljs.core.seq_QMARK_.call(null,map__9733))?cljs.core.apply.call(null,cljs.core.hash_map,map__9733):map__9733);var text = cljs.core.get.call(null,map__9733__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__9722.call(null,cljs.core.rest.call(null,s__9723__$2)));
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
planjure.components.toolbar.t9705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9707){var self__ = this;
var _9707__$1 = this;return self__.meta9706;
});
planjure.components.toolbar.t9705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9707,meta9706__$1){var self__ = this;
var _9707__$1 = this;return (new planjure.components.toolbar.t9705(self__.owner,self__.app_state,self__.editor_component,meta9706__$1));
});
planjure.components.toolbar.__GT_t9705 = (function __GT_t9705(owner__$1,app_state__$1,editor_component__$1,meta9706){return (new planjure.components.toolbar.t9705(owner__$1,app_state__$1,editor_component__$1,meta9706));
});
}
return (new planjure.components.toolbar.t9705(owner,app_state,editor_component,null));
});
planjure.components.toolbar.size_component = (function size_component(app_state,owner){if(typeof planjure.components.toolbar.t9753 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t9753 = (function (owner,app_state,size_component,meta9754){
this.owner = owner;
this.app_state = app_state;
this.size_component = size_component;
this.meta9754 = meta9754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t9753.cljs$lang$type = true;
planjure.components.toolbar.t9753.cljs$lang$ctorStr = "planjure.components.toolbar/t9753";
planjure.components.toolbar.t9753.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t9753");
});
planjure.components.toolbar.t9753.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t9753.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9756){var self__ = this;
var map__9757 = p__9756;var map__9757__$1 = ((cljs.core.seq_QMARK_.call(null,map__9757))?cljs.core.apply.call(null,cljs.core.hash_map,map__9757):map__9757);var configuration_chan = cljs.core.get.call(null,map__9757__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.app_state);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4160__auto__ = (function iter__9758(s__9759){return (new cljs.core.LazySeq(null,(function (){var s__9759__$1 = s__9759;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9759__$1);if(temp__4092__auto__)
{var s__9759__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9759__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9759__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9761 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9760 = 0;while(true){
if((i__9760 < size__4159__auto__))
{var vec__9766 = cljs.core._nth.call(null,c__4158__auto__,i__9760);var size_name = cljs.core.nth.call(null,vec__9766,0,null);var map__9767 = cljs.core.nth.call(null,vec__9766,1,null);var map__9767__$1 = ((cljs.core.seq_QMARK_.call(null,map__9767))?cljs.core.apply.call(null,cljs.core.hash_map,map__9767):map__9767);var size_opts = map__9767__$1;var text = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__9761,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__9770 = (i__9760 + 1);
i__9760 = G__9770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9761),iter__9758.call(null,cljs.core.chunk_rest.call(null,s__9759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9761),null);
}
} else
{var vec__9768 = cljs.core.first.call(null,s__9759__$2);var size_name = cljs.core.nth.call(null,vec__9768,0,null);var map__9769 = cljs.core.nth.call(null,vec__9768,1,null);var map__9769__$1 = ((cljs.core.seq_QMARK_.call(null,map__9769))?cljs.core.apply.call(null,cljs.core.hash_map,map__9769):map__9769);var size_opts = map__9769__$1;var text = cljs.core.get.call(null,map__9769__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__9758.call(null,cljs.core.rest.call(null,s__9759__$2)));
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
planjure.components.toolbar.t9753.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t9753.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t9753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9755){var self__ = this;
var _9755__$1 = this;return self__.meta9754;
});
planjure.components.toolbar.t9753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9755,meta9754__$1){var self__ = this;
var _9755__$1 = this;return (new planjure.components.toolbar.t9753(self__.owner,self__.app_state,self__.size_component,meta9754__$1));
});
planjure.components.toolbar.__GT_t9753 = (function __GT_t9753(owner__$1,app_state__$1,size_component__$1,meta9754){return (new planjure.components.toolbar.t9753(owner__$1,app_state__$1,size_component__$1,meta9754));
});
}
return (new planjure.components.toolbar.t9753(owner,app_state,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(app_state,owner){if(typeof planjure.components.toolbar.t9774 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t9774 = (function (owner,app_state,statistics_component,meta9775){
this.owner = owner;
this.app_state = app_state;
this.statistics_component = statistics_component;
this.meta9775 = meta9775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t9774.cljs$lang$type = true;
planjure.components.toolbar.t9774.cljs$lang$ctorStr = "planjure.components.toolbar/t9774";
planjure.components.toolbar.t9774.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t9774");
});
planjure.components.toolbar.t9774.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t9774.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1807946125)},React.DOM.div(null,[cljs.core.str((self__.app_state.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368)) / 1000)),cljs.core.str(" seconds")].join('')),React.DOM.div(null,cljs.core.name.call(null,self__.app_state.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580))))));
});
planjure.components.toolbar.t9774.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t9774.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t9774.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t9774.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t9774.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t9774.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t9774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9776){var self__ = this;
var _9776__$1 = this;return self__.meta9775;
});
planjure.components.toolbar.t9774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9776,meta9775__$1){var self__ = this;
var _9776__$1 = this;return (new planjure.components.toolbar.t9774(self__.owner,self__.app_state,self__.statistics_component,meta9775__$1));
});
planjure.components.toolbar.__GT_t9774 = (function __GT_t9774(owner__$1,app_state__$1,statistics_component__$1,meta9775){return (new planjure.components.toolbar.t9774(owner__$1,app_state__$1,statistics_component__$1,meta9775));
});
}
return (new planjure.components.toolbar.t9774(owner,app_state,statistics_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t9906 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t9906 = (function (owner,app_state,toolbar_component,meta9907){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta9907 = meta9907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t9906.cljs$lang$type = true;
planjure.components.toolbar.t9906.cljs$lang$ctorStr = "planjure.components.toolbar/t9906";
planjure.components.toolbar.t9906.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t9906");
});
planjure.components.toolbar.t9906.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t9906.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9909){var self__ = this;
var map__9910 = p__9909;var map__9910__$1 = ((cljs.core.seq_QMARK_.call(null,map__9910))?cljs.core.apply.call(null,cljs.core.hash_map,map__9910):map__9910);var configuration_chan = cljs.core.get.call(null,map__9910__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.editor_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"History"),React.DOM.div({"className": "section-wrapper"},React.DOM.div({"className": "button-row"},om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"undo","undo",1017498710),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Undo"], null)], null)),om.core.build.call(null,planjure.components.toolbar.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),new cljs.core.Keyword(null,"redo","redo",1017400688),new cljs.core.Keyword(null,"tool-text","tool-text",551759796),"Redo"], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": (function (p1__9777_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.keyword.call(null,p1__9777_SHARP_.target.value)], null));
}), "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,(function (p1__9778_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__9778_SHARP_))},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__9778_SHARP_)));
}),planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016)),"plan!");
})},"Plan Path")))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,self__.app_state))));
});
planjure.components.toolbar.t9906.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t9906.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t9906.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t9906.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_9988){var state_val_9989 = (state_9988[1]);if((state_val_9989 === 1))
{var state_9988__$1 = state_9988;var statearr_9990_10033 = state_9988__$1;(statearr_9990_10033[2] = null);
(statearr_9990_10033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 2))
{var state_9988__$1 = state_9988;if(true)
{var statearr_9991_10034 = state_9988__$1;(statearr_9991_10034[1] = 4);
} else
{var statearr_9992_10035 = state_9988__$1;(statearr_9992_10035[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 3))
{var inst_9986 = (state_9988[2]);var state_9988__$1 = state_9988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9988__$1,inst_9986);
} else
{if((state_val_9989 === 4))
{var inst_9914 = [planjure.components.toolbar.plan_chan,configuration_chan];var inst_9915 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9914,null));var state_9988__$1 = state_9988;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9988__$1,7,inst_9915);
} else
{if((state_val_9989 === 5))
{var state_9988__$1 = state_9988;var statearr_9993_10036 = state_9988__$1;(statearr_9993_10036[2] = null);
(statearr_9993_10036[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 6))
{var inst_9984 = (state_9988[2]);var state_9988__$1 = state_9988;var statearr_9994_10037 = state_9988__$1;(statearr_9994_10037[2] = inst_9984);
(statearr_9994_10037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 7))
{var inst_9919 = (state_9988[7]);var inst_9918 = (state_9988[8]);var inst_9917 = (state_9988[2]);var inst_9918__$1 = cljs.core.nth.call(null,inst_9917,0,null);var inst_9919__$1 = cljs.core.nth.call(null,inst_9917,1,null);var inst_9920 = cljs.core.println.call(null,inst_9918__$1);var inst_9921 = cljs.core._EQ_.call(null,inst_9919__$1,planjure.components.toolbar.plan_chan);var state_9988__$1 = (function (){var statearr_9995 = state_9988;(statearr_9995[7] = inst_9919__$1);
(statearr_9995[8] = inst_9918__$1);
(statearr_9995[9] = inst_9920);
return statearr_9995;
})();if(inst_9921)
{var statearr_9996_10038 = state_9988__$1;(statearr_9996_10038[1] = 8);
} else
{var statearr_9997_10039 = state_9988__$1;(statearr_9997_10039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 8))
{var inst_9923 = cljs.core.deref.call(null,self__.app_state);var inst_9924 = new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(inst_9923);var inst_9925 = planjure.components.toolbar.algorithms.call(null,inst_9924);var inst_9926 = inst_9925.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514));var inst_9927 = cljs.core.deref.call(null,self__.app_state);var inst_9928 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_9927);var inst_9929 = cljs.core.deref.call(null,self__.app_state);var inst_9930 = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(inst_9929);var inst_9931 = inst_9926.call(null,inst_9928,inst_9930);var inst_9932 = inst_9931.call(null,new cljs.core.Keyword(null,"time","time",1017464383));var inst_9933 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368),inst_9932);var inst_9934 = inst_9931.call(null,new cljs.core.Keyword(null,"return","return",4374474914));var inst_9935 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),inst_9934);var state_9988__$1 = (function (){var statearr_9998 = state_9988;(statearr_9998[10] = inst_9933);
return statearr_9998;
})();var statearr_9999_10040 = state_9988__$1;(statearr_9999_10040[2] = inst_9935);
(statearr_9999_10040[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 9))
{var state_9988__$1 = state_9988;var statearr_10000_10041 = state_9988__$1;(statearr_10000_10041[2] = null);
(statearr_10000_10041[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 10))
{var inst_9919 = (state_9988[7]);var inst_9938 = (state_9988[2]);var inst_9939 = cljs.core._EQ_.call(null,inst_9919,configuration_chan);var state_9988__$1 = (function (){var statearr_10001 = state_9988;(statearr_10001[11] = inst_9938);
return statearr_10001;
})();if(inst_9939)
{var statearr_10002_10042 = state_9988__$1;(statearr_10002_10042[1] = 11);
} else
{var statearr_10003_10043 = state_9988__$1;(statearr_10003_10043[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 11))
{var inst_9918 = (state_9988[8]);var inst_9975 = new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(inst_9918);var state_9988__$1 = state_9988;var G__10004_10044 = inst_9975;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),G__10004_10044))
{var statearr_10005_10045 = state_9988__$1;(statearr_10005_10045[1] = 16);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),G__10004_10044))
{var statearr_10006_10046 = state_9988__$1;(statearr_10006_10046[1] = 15);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9975)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 12))
{var state_9988__$1 = state_9988;var statearr_10007_10047 = state_9988__$1;(statearr_10007_10047[2] = null);
(statearr_10007_10047[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 13))
{var inst_9980 = (state_9988[2]);var state_9988__$1 = (function (){var statearr_10008 = state_9988;(statearr_10008[12] = inst_9980);
return statearr_10008;
})();var statearr_10009_10048 = state_9988__$1;(statearr_10009_10048[2] = null);
(statearr_10009_10048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 14))
{var inst_9977 = (state_9988[2]);var state_9988__$1 = state_9988;var statearr_10010_10049 = state_9988__$1;(statearr_10010_10049[2] = inst_9977);
(statearr_10010_10049[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 15))
{var inst_9918 = (state_9988[8]);var inst_9941 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_9918);var inst_9942 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1016901061),inst_9941);var state_9988__$1 = state_9988;var statearr_10011_10050 = state_9988__$1;(statearr_10011_10050[2] = inst_9942);
(statearr_10011_10050[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 16))
{var inst_9918 = (state_9988[8]);var inst_9971 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_9918);var state_9988__$1 = state_9988;var G__10012_10051 = inst_9971;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history","history",1940838406),G__10012_10051))
{var statearr_10013_10052 = state_9988__$1;(statearr_10013_10052[1] = 19);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"world-size","world-size",1425687758),G__10012_10051))
{var statearr_10014_10053 = state_9988__$1;(statearr_10014_10053[1] = 18);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10015_10054 = state_9988__$1;(statearr_10015_10054[1] = 23);
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 17))
{var inst_9973 = (state_9988[2]);var state_9988__$1 = state_9988;var statearr_10016_10055 = state_9988__$1;(statearr_10016_10055[2] = inst_9973);
(statearr_10016_10055[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 18))
{var inst_9918 = (state_9988[8]);var inst_9944 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_9918);var inst_9945 = cljs.core.deref.call(null,self__.app_state);var inst_9946 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),inst_9944,new cljs.core.Keyword(null,"size","size",1017434995)];var inst_9947 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9946,null));var inst_9948 = cljs.core.get_in.call(null,inst_9945,inst_9947);var inst_9949 = (inst_9948 - 1);var inst_9950 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",1425687758),inst_9944);var inst_9951 = planjure.plan.random_world.call(null,inst_9948,inst_9948);var inst_9952 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world","world",1127223044),inst_9951);var inst_9953 = [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)];var inst_9954 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9953,null));var inst_9955 = [inst_9949,inst_9949];var inst_9956 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9955,null));var inst_9957 = om.core.update_BANG_.call(null,self__.app_state,inst_9954,inst_9956);var state_9988__$1 = (function (){var statearr_10017 = state_9988;(statearr_10017[13] = inst_9952);
(statearr_10017[14] = inst_9950);
return statearr_10017;
})();var statearr_10018_10056 = state_9988__$1;(statearr_10018_10056[2] = inst_9957);
(statearr_10018_10056[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 19))
{var inst_9918 = (state_9988[8]);var inst_9963 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_9918);var state_9988__$1 = state_9988;var G__10019_10057 = inst_9963;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redo","redo",1017400688),G__10019_10057))
{var statearr_10020_10058 = state_9988__$1;(statearr_10020_10058[1] = 22);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",1017498710),G__10019_10057))
{var statearr_10021_10059 = state_9988__$1;(statearr_10021_10059[1] = 21);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9963)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 20))
{var inst_9965 = (state_9988[2]);var state_9988__$1 = state_9988;var statearr_10022_10060 = state_9988__$1;(statearr_10022_10060[2] = inst_9965);
(statearr_10022_10060[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 21))
{var inst_9959 = planjure.history.undo.call(null);var state_9988__$1 = state_9988;var statearr_10023_10061 = state_9988__$1;(statearr_10023_10061[2] = inst_9959);
(statearr_10023_10061[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 22))
{var inst_9961 = planjure.history.redo.call(null);var state_9988__$1 = state_9988;var statearr_10024_10062 = state_9988__$1;(statearr_10024_10062[2] = inst_9961);
(statearr_10024_10062[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9989 === 23))
{var inst_9918 = (state_9988[8]);var inst_9967 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_9918);var inst_9968 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_9918);var inst_9969 = om.core.update_BANG_.call(null,self__.app_state,inst_9967,inst_9968);var state_9988__$1 = state_9988;var statearr_10025_10063 = state_9988__$1;(statearr_10025_10063[2] = inst_9969);
(statearr_10025_10063[1] = 17);
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
var state_machine__6824__auto____0 = (function (){var statearr_10029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10029[0] = state_machine__6824__auto__);
(statearr_10029[1] = 1);
return statearr_10029;
});
var state_machine__6824__auto____1 = (function (state_9988){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_9988);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e10030){if((e10030 instanceof Object))
{var ex__6827__auto__ = e10030;var statearr_10031_10064 = state_9988;(statearr_10031_10064[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10065 = state_9988;
state_9988 = G__10065;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_9988){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_9988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_10032 = f__6839__auto__.call(null);(statearr_10032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_10032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.toolbar.t9906.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t9906.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016),planjure.components.toolbar.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t9906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9908){var self__ = this;
var _9908__$1 = this;return self__.meta9907;
});
planjure.components.toolbar.t9906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9908,meta9907__$1){var self__ = this;
var _9908__$1 = this;return (new planjure.components.toolbar.t9906(self__.owner,self__.app_state,self__.toolbar_component,meta9907__$1));
});
planjure.components.toolbar.__GT_t9906 = (function __GT_t9906(owner__$1,app_state__$1,toolbar_component__$1,meta9907){return (new planjure.components.toolbar.t9906(owner__$1,app_state__$1,toolbar_component__$1,meta9907));
});
}
return (new planjure.components.toolbar.t9906(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map