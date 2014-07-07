// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.components.editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
planjure.components.editor.item_selector_component = (function item_selector_component(app_state,owner){if(typeof planjure.components.editor.t14506 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.editor.t14506 = (function (owner,app_state,item_selector_component,meta14507){
this.owner = owner;
this.app_state = app_state;
this.item_selector_component = item_selector_component;
this.meta14507 = meta14507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.editor.t14506.cljs$lang$type = true;
planjure.components.editor.t14506.cljs$lang$ctorStr = "planjure.components.editor/t14506";
planjure.components.editor.t14506.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.editor/t14506");
});
planjure.components.editor.t14506.prototype.om$core$IRenderState$ = true;
planjure.components.editor.t14506.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14509){var self__ = this;
var map__14510 = p__14509;var map__14510__$1 = ((cljs.core.seq_QMARK_.call(null,map__14510))?cljs.core.apply.call(null,cljs.core.hash_map,map__14510):map__14510);var selected = cljs.core.get.call(null,map__14510__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tool_text = cljs.core.get.call(null,map__14510__$1,new cljs.core.Keyword(null,"tool-text","tool-text",551759796));var tool_name = cljs.core.get.call(null,map__14510__$1,new cljs.core.Keyword(null,"tool-name","tool-name",551576850));var tool_kind = cljs.core.get.call(null,map__14510__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195));var configuration_chan = cljs.core.get.call(null,map__14510__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var css_class = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.app_state)))?"selected":"");return React.DOM.span({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),tool_kind,new cljs.core.Keyword(null,"value","value",1125876963),tool_name], null));
}), "className": [cljs.core.str("item-selector "),cljs.core.str(css_class)].join('')},tool_text);
});
planjure.components.editor.t14506.prototype.om$core$IInitState$ = true;
planjure.components.editor.t14506.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.editor.t14506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14508){var self__ = this;
var _14508__$1 = this;return self__.meta14507;
});
planjure.components.editor.t14506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14508,meta14507__$1){var self__ = this;
var _14508__$1 = this;return (new planjure.components.editor.t14506(self__.owner,self__.app_state,self__.item_selector_component,meta14507__$1));
});
planjure.components.editor.__GT_t14506 = (function __GT_t14506(owner__$1,app_state__$1,item_selector_component__$1,meta14507){return (new planjure.components.editor.t14506(owner__$1,app_state__$1,item_selector_component__$1,meta14507));
});
}
return (new planjure.components.editor.t14506(owner,app_state,item_selector_component,null));
});
planjure.components.editor.editor_component = (function editor_component(app_state,owner){if(typeof planjure.components.editor.t14540 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.editor.t14540 = (function (owner,app_state,editor_component,meta14541){
this.owner = owner;
this.app_state = app_state;
this.editor_component = editor_component;
this.meta14541 = meta14541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.editor.t14540.cljs$lang$type = true;
planjure.components.editor.t14540.cljs$lang$ctorStr = "planjure.components.editor/t14540";
planjure.components.editor.t14540.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.editor/t14540");
});
planjure.components.editor.t14540.prototype.om$core$IRenderState$ = true;
planjure.components.editor.t14540.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14543){var self__ = this;
var map__14544 = p__14543;var map__14544__$1 = ((cljs.core.seq_QMARK_.call(null,map__14544))?cljs.core.apply.call(null,cljs.core.hash_map,map__14544):map__14544);var configuration_chan = cljs.core.get.call(null,map__14544__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__14545(s__14546){return (new cljs.core.LazySeq(null,(function (){var s__14546__$1 = s__14546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14546__$1);if(temp__4092__auto__)
{var s__14546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14546__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14546__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14548 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14547 = 0;while(true){
if((i__14547 < size__4159__auto__))
{var vec__14553 = cljs.core._nth.call(null,c__4158__auto__,i__14547);var brush_tool_name = cljs.core.nth.call(null,vec__14553,0,null);var map__14554 = cljs.core.nth.call(null,vec__14553,1,null);var map__14554__$1 = ((cljs.core.seq_QMARK_.call(null,map__14554))?cljs.core.apply.call(null,cljs.core.hash_map,map__14554):map__14554);var text = cljs.core.get.call(null,map__14554__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__14548,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__14569 = (i__14547 + 1);
i__14547 = G__14569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14548),iter__14545.call(null,cljs.core.chunk_rest.call(null,s__14546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14548),null);
}
} else
{var vec__14555 = cljs.core.first.call(null,s__14546__$2);var brush_tool_name = cljs.core.nth.call(null,vec__14555,0,null);var map__14556 = cljs.core.nth.call(null,vec__14555,1,null);var map__14556__$1 = ((cljs.core.seq_QMARK_.call(null,map__14556))?cljs.core.apply.call(null,cljs.core.hash_map,map__14556):map__14556);var text = cljs.core.get.call(null,map__14556__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush","brush",1107921580),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__14545.call(null,cljs.core.rest.call(null,s__14546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",4112456317).cljs$core$IFn$_invoke$arity$1(self__.app_state));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4160__auto__ = (function iter__14557(s__14558){return (new cljs.core.LazySeq(null,(function (){var s__14558__$1 = s__14558;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14558__$1);if(temp__4092__auto__)
{var s__14558__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14558__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14558__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14560 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14559 = 0;while(true){
if((i__14559 < size__4159__auto__))
{var vec__14565 = cljs.core._nth.call(null,c__4158__auto__,i__14559);var size_name = cljs.core.nth.call(null,vec__14565,0,null);var map__14566 = cljs.core.nth.call(null,vec__14565,1,null);var map__14566__$1 = ((cljs.core.seq_QMARK_.call(null,map__14566))?cljs.core.apply.call(null,cljs.core.hash_map,map__14566):map__14566);var text = cljs.core.get.call(null,map__14566__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__14560,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__14570 = (i__14559 + 1);
i__14559 = G__14570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14560),iter__14557.call(null,cljs.core.chunk_rest.call(null,s__14558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14560),null);
}
} else
{var vec__14567 = cljs.core.first.call(null,s__14558__$2);var size_name = cljs.core.nth.call(null,vec__14567,0,null);var map__14568 = cljs.core.nth.call(null,vec__14567,1,null);var map__14568__$1 = ((cljs.core.seq_QMARK_.call(null,map__14568))?cljs.core.apply.call(null,cljs.core.hash_map,map__14568):map__14568);var text = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"brush-size","brush-size",3095646758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__14557.call(null,cljs.core.rest.call(null,s__14558__$2)));
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
planjure.components.editor.t14540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14542){var self__ = this;
var _14542__$1 = this;return self__.meta14541;
});
planjure.components.editor.t14540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14542,meta14541__$1){var self__ = this;
var _14542__$1 = this;return (new planjure.components.editor.t14540(self__.owner,self__.app_state,self__.editor_component,meta14541__$1));
});
planjure.components.editor.__GT_t14540 = (function __GT_t14540(owner__$1,app_state__$1,editor_component__$1,meta14541){return (new planjure.components.editor.t14540(owner__$1,app_state__$1,editor_component__$1,meta14541));
});
}
return (new planjure.components.editor.t14540(owner,app_state,editor_component,null));
});

//# sourceMappingURL=editor.js.map