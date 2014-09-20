// Compiled by ClojureScript 0.0-2280
goog.provide('planjure.components.toolbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.plan');
goog.require('om.dom');
goog.require('om.dom');
goog.require('planjure.history');
goog.require('cljs.core.async');
goog.require('planjure.utils');
goog.require('planjure.history');
goog.require('planjure.appstate');
goog.require('planjure.appstate');
goog.require('om.core');
goog.require('om.core');
goog.require('planjure.utils');
goog.require('planjure.plan');
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dijkstra","dijkstra",-1945050732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",-1175266204),planjure.utils.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"astar","astar",1283369821),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"A*",new cljs.core.Keyword(null,"fn","fn",-1175266204),planjure.utils.time_f.call(null,planjure.plan.astar)], null),new cljs.core.Keyword(null,"dfs","dfs",1145715282),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Depth-first",new cljs.core.Keyword(null,"fn","fn",-1175266204),planjure.utils.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.checkbox_component = (function checkbox_component(cursor,owner){if(typeof planjure.components.toolbar.t799860 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799860 = (function (owner,cursor,checkbox_component,meta799861){
this.owner = owner;
this.cursor = cursor;
this.checkbox_component = checkbox_component;
this.meta799861 = meta799861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799860.cljs$lang$type = true;
planjure.components.toolbar.t799860.cljs$lang$ctorStr = "planjure.components.toolbar/t799860";
planjure.components.toolbar.t799860.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799860");
});
planjure.components.toolbar.t799860.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t799860.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__799863){var self__ = this;
var map__799864 = p__799863;var map__799864__$1 = ((cljs.core.seq_QMARK_.call(null,map__799864))?cljs.core.apply.call(null,cljs.core.hash_map,map__799864):map__799864);var input_name = cljs.core.get.call(null,map__799864__$1,new cljs.core.Keyword(null,"input-name","input-name",323608185));var label_text = cljs.core.get.call(null,map__799864__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));var configuration_chan = cljs.core.get.call(null,map__799864__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;return React.DOM.div({"className": "checkbox-row"},React.DOM.label(null,om.dom.input.call(null,{"onChange": ((function (___$1,map__799864,map__799864__$1,input_name,label_text,configuration_chan){
return (function (p1__799854_SHARP_){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"input-name","input-name",323608185),input_name,new cljs.core.Keyword(null,"value","value",305978217),p1__799854_SHARP_.target.checked], null));
});})(___$1,map__799864,map__799864__$1,input_name,label_text,configuration_chan))
, "value": "", "type": "checkbox"}),label_text));
});
planjure.components.toolbar.t799860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799862){var self__ = this;
var _799862__$1 = this;return self__.meta799861;
});
planjure.components.toolbar.t799860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799862,meta799861__$1){var self__ = this;
var _799862__$1 = this;return (new planjure.components.toolbar.t799860(self__.owner,self__.cursor,self__.checkbox_component,meta799861__$1));
});
planjure.components.toolbar.__GT_t799860 = (function __GT_t799860(owner__$1,cursor__$1,checkbox_component__$1,meta799861){return (new planjure.components.toolbar.t799860(owner__$1,cursor__$1,checkbox_component__$1,meta799861));
});
}
return (new planjure.components.toolbar.t799860(owner,cursor,checkbox_component,null));
});
planjure.components.toolbar.item_selector_component = (function item_selector_component(cursor,owner){if(typeof planjure.components.toolbar.t799870 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799870 = (function (owner,cursor,item_selector_component,meta799871){
this.owner = owner;
this.cursor = cursor;
this.item_selector_component = item_selector_component;
this.meta799871 = meta799871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799870.cljs$lang$type = true;
planjure.components.toolbar.t799870.cljs$lang$ctorStr = "planjure.components.toolbar/t799870";
planjure.components.toolbar.t799870.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799870");
});
planjure.components.toolbar.t799870.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t799870.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__799873){var self__ = this;
var map__799874 = p__799873;var map__799874__$1 = ((cljs.core.seq_QMARK_.call(null,map__799874))?cljs.core.apply.call(null,cljs.core.hash_map,map__799874):map__799874);var is_disabled_fn = cljs.core.get.call(null,map__799874__$1,new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365));var tool_text = cljs.core.get.call(null,map__799874__$1,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454));var tool_name = cljs.core.get.call(null,map__799874__$1,new cljs.core.Keyword(null,"tool-name","tool-name",613742581));var tool_kind = cljs.core.get.call(null,map__799874__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318));var configuration_chan = cljs.core.get.call(null,map__799874__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;var selected_css = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.cursor)))?"selected":null);var disabled_css = (cljs.core.truth_((function (){var and__3532__auto__ = is_disabled_fn;if(cljs.core.truth_(and__3532__auto__))
{return is_disabled_fn.call(null);
} else
{return and__3532__auto__;
}
})())?"disabled":null);var css_class = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_css)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled_css));return React.DOM.span({"onClick": ((function (selected_css,disabled_css,css_class,___$1,map__799874,map__799874__$1,is_disabled_fn,tool_text,tool_name,tool_kind,configuration_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"tool-selector","tool-selector",549011096),new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),tool_kind,new cljs.core.Keyword(null,"value","value",305978217),tool_name], null));
});})(selected_css,disabled_css,css_class,___$1,map__799874,map__799874__$1,is_disabled_fn,tool_text,tool_name,tool_kind,configuration_chan))
, "className": ("item-selector "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class))},tool_text);
});
planjure.components.toolbar.t799870.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t799870.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t799870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799872){var self__ = this;
var _799872__$1 = this;return self__.meta799871;
});
planjure.components.toolbar.t799870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799872,meta799871__$1){var self__ = this;
var _799872__$1 = this;return (new planjure.components.toolbar.t799870(self__.owner,self__.cursor,self__.item_selector_component,meta799871__$1));
});
planjure.components.toolbar.__GT_t799870 = (function __GT_t799870(owner__$1,cursor__$1,item_selector_component__$1,meta799871){return (new planjure.components.toolbar.t799870(owner__$1,cursor__$1,item_selector_component__$1,meta799871));
});
}
return (new planjure.components.toolbar.t799870(owner,cursor,item_selector_component,null));
});
planjure.components.toolbar.editor_component = (function editor_component(cursor,owner){if(typeof planjure.components.toolbar.t799904 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799904 = (function (owner,cursor,editor_component,meta799905){
this.owner = owner;
this.cursor = cursor;
this.editor_component = editor_component;
this.meta799905 = meta799905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799904.cljs$lang$type = true;
planjure.components.toolbar.t799904.cljs$lang$ctorStr = "planjure.components.toolbar/t799904";
planjure.components.toolbar.t799904.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799904");
});
planjure.components.toolbar.t799904.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t799904.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__799907){var self__ = this;
var map__799908 = p__799907;var map__799908__$1 = ((cljs.core.seq_QMARK_.call(null,map__799908))?cljs.core.apply.call(null,cljs.core.hash_map,map__799908):map__799908);var configuration_chan = cljs.core.get.call(null,map__799908__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4269__auto__ = ((function (___$1,map__799908,map__799908__$1,configuration_chan){
return (function iter__799909(s__799910){return (new cljs.core.LazySeq(null,((function (___$1,map__799908,map__799908__$1,configuration_chan){
return (function (){var s__799910__$1 = s__799910;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__799910__$1);if(temp__4126__auto__)
{var s__799910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__799910__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__799910__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__799912 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__799911 = (0);while(true){
if((i__799911 < size__4268__auto__))
{var vec__799917 = cljs.core._nth.call(null,c__4267__auto__,i__799911);var brush_tool_name = cljs.core.nth.call(null,vec__799917,(0),null);var map__799918 = cljs.core.nth.call(null,vec__799917,(1),null);var map__799918__$1 = ((cljs.core.seq_QMARK_.call(null,map__799918))?cljs.core.apply.call(null,cljs.core.hash_map,map__799918):map__799918);var text = cljs.core.get.call(null,map__799918__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__799912,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__799933 = (i__799911 + (1));
i__799911 = G__799933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799912),iter__799909.call(null,cljs.core.chunk_rest.call(null,s__799910__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799912),null);
}
} else
{var vec__799919 = cljs.core.first.call(null,s__799910__$2);var brush_tool_name = cljs.core.nth.call(null,vec__799919,(0),null);var map__799920 = cljs.core.nth.call(null,vec__799919,(1),null);var map__799920__$1 = ((cljs.core.seq_QMARK_.call(null,map__799920))?cljs.core.apply.call(null,cljs.core.hash_map,map__799920):map__799920);var text = cljs.core.get.call(null,map__799920__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__799909.call(null,cljs.core.rest.call(null,s__799910__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,map__799908,map__799908__$1,configuration_chan))
,null,null));
});})(___$1,map__799908,map__799908__$1,configuration_chan))
;return iter__4269__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",1088324874).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4269__auto__ = ((function (___$1,map__799908,map__799908__$1,configuration_chan){
return (function iter__799921(s__799922){return (new cljs.core.LazySeq(null,((function (___$1,map__799908,map__799908__$1,configuration_chan){
return (function (){var s__799922__$1 = s__799922;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__799922__$1);if(temp__4126__auto__)
{var s__799922__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__799922__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__799922__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__799924 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__799923 = (0);while(true){
if((i__799923 < size__4268__auto__))
{var vec__799929 = cljs.core._nth.call(null,c__4267__auto__,i__799923);var size_name = cljs.core.nth.call(null,vec__799929,(0),null);var map__799930 = cljs.core.nth.call(null,vec__799929,(1),null);var map__799930__$1 = ((cljs.core.seq_QMARK_.call(null,map__799930))?cljs.core.apply.call(null,cljs.core.hash_map,map__799930):map__799930);var text = cljs.core.get.call(null,map__799930__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__799924,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__799934 = (i__799923 + (1));
i__799923 = G__799934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799924),iter__799921.call(null,cljs.core.chunk_rest.call(null,s__799922__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799924),null);
}
} else
{var vec__799931 = cljs.core.first.call(null,s__799922__$2);var size_name = cljs.core.nth.call(null,vec__799931,(0),null);var map__799932 = cljs.core.nth.call(null,vec__799931,(1),null);var map__799932__$1 = ((cljs.core.seq_QMARK_.call(null,map__799932))?cljs.core.apply.call(null,cljs.core.hash_map,map__799932):map__799932);var text = cljs.core.get.call(null,map__799932__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__799921.call(null,cljs.core.rest.call(null,s__799922__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,map__799908,map__799908__$1,configuration_chan))
,null,null));
});})(___$1,map__799908,map__799908__$1,configuration_chan))
;return iter__4269__auto__.call(null,new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()));
});
planjure.components.toolbar.t799904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799906){var self__ = this;
var _799906__$1 = this;return self__.meta799905;
});
planjure.components.toolbar.t799904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799906,meta799905__$1){var self__ = this;
var _799906__$1 = this;return (new planjure.components.toolbar.t799904(self__.owner,self__.cursor,self__.editor_component,meta799905__$1));
});
planjure.components.toolbar.__GT_t799904 = (function __GT_t799904(owner__$1,cursor__$1,editor_component__$1,meta799905){return (new planjure.components.toolbar.t799904(owner__$1,cursor__$1,editor_component__$1,meta799905));
});
}
return (new planjure.components.toolbar.t799904(owner,cursor,editor_component,null));
});
planjure.components.toolbar.size_component = (function size_component(cursor,owner){if(typeof planjure.components.toolbar.t799952 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799952 = (function (owner,cursor,size_component,meta799953){
this.owner = owner;
this.cursor = cursor;
this.size_component = size_component;
this.meta799953 = meta799953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799952.cljs$lang$type = true;
planjure.components.toolbar.t799952.cljs$lang$ctorStr = "planjure.components.toolbar/t799952";
planjure.components.toolbar.t799952.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799952");
});
planjure.components.toolbar.t799952.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t799952.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__799955){var self__ = this;
var map__799956 = p__799955;var map__799956__$1 = ((cljs.core.seq_QMARK_.call(null,map__799956))?cljs.core.apply.call(null,cljs.core.hash_map,map__799956):map__799956);var configuration_chan = cljs.core.get.call(null,map__799956__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4269__auto__ = ((function (selected_size,___$1,map__799956,map__799956__$1,configuration_chan){
return (function iter__799957(s__799958){return (new cljs.core.LazySeq(null,((function (selected_size,___$1,map__799956,map__799956__$1,configuration_chan){
return (function (){var s__799958__$1 = s__799958;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__799958__$1);if(temp__4126__auto__)
{var s__799958__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__799958__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__799958__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__799960 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__799959 = (0);while(true){
if((i__799959 < size__4268__auto__))
{var vec__799965 = cljs.core._nth.call(null,c__4267__auto__,i__799959);var size_name = cljs.core.nth.call(null,vec__799965,(0),null);var map__799966 = cljs.core.nth.call(null,vec__799965,(1),null);var map__799966__$1 = ((cljs.core.seq_QMARK_.call(null,map__799966))?cljs.core.apply.call(null,cljs.core.hash_map,map__799966):map__799966);var size_opts = map__799966__$1;var text = cljs.core.get.call(null,map__799966__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__799960,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__799969 = (i__799959 + (1));
i__799959 = G__799969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799960),iter__799957.call(null,cljs.core.chunk_rest.call(null,s__799958__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__799960),null);
}
} else
{var vec__799967 = cljs.core.first.call(null,s__799958__$2);var size_name = cljs.core.nth.call(null,vec__799967,(0),null);var map__799968 = cljs.core.nth.call(null,vec__799967,(1),null);var map__799968__$1 = ((cljs.core.seq_QMARK_.call(null,map__799968))?cljs.core.apply.call(null,cljs.core.hash_map,map__799968):map__799968);var size_opts = map__799968__$1;var text = cljs.core.get.call(null,map__799968__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__799957.call(null,cljs.core.rest.call(null,s__799958__$2)));
}
} else
{return null;
}
break;
}
});})(selected_size,___$1,map__799956,map__799956__$1,configuration_chan))
,null,null));
});})(selected_size,___$1,map__799956,map__799956__$1,configuration_chan))
;return iter__4269__auto__.call(null,new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})());
});
planjure.components.toolbar.t799952.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t799952.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t799952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799954){var self__ = this;
var _799954__$1 = this;return self__.meta799953;
});
planjure.components.toolbar.t799952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799954,meta799953__$1){var self__ = this;
var _799954__$1 = this;return (new planjure.components.toolbar.t799952(self__.owner,self__.cursor,self__.size_component,meta799953__$1));
});
planjure.components.toolbar.__GT_t799952 = (function __GT_t799952(owner__$1,cursor__$1,size_component__$1,meta799953){return (new planjure.components.toolbar.t799952(owner__$1,cursor__$1,size_component__$1,meta799953));
});
}
return (new planjure.components.toolbar.t799952(owner,cursor,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(cursor,owner){if(typeof planjure.components.toolbar.t799973 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799973 = (function (owner,cursor,statistics_component,meta799974){
this.owner = owner;
this.cursor = cursor;
this.statistics_component = statistics_component;
this.meta799974 = meta799974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799973.cljs$lang$type = true;
planjure.components.toolbar.t799973.cljs$lang$ctorStr = "planjure.components.toolbar/t799973";
planjure.components.toolbar.t799973.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799973");
});
planjure.components.toolbar.t799973.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t799973.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1324633262)},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.cursor.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555)) / (1000)))+" seconds")),React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cursor.call(null,new cljs.core.Keyword(null,"last-cost","last-cost",747751156)))+" Cost")),React.DOM.div(null,cljs.core.name.call(null,self__.cursor.call(null,new cljs.core.Keyword(null,"brush","brush",498034117))))));
});
planjure.components.toolbar.t799973.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t799973.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t799973.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t799973.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t799973.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t799973.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t799973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799975){var self__ = this;
var _799975__$1 = this;return self__.meta799974;
});
planjure.components.toolbar.t799973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799975,meta799974__$1){var self__ = this;
var _799975__$1 = this;return (new planjure.components.toolbar.t799973(self__.owner,self__.cursor,self__.statistics_component,meta799974__$1));
});
planjure.components.toolbar.__GT_t799973 = (function __GT_t799973(owner__$1,cursor__$1,statistics_component__$1,meta799974){return (new planjure.components.toolbar.t799973(owner__$1,cursor__$1,statistics_component__$1,meta799974));
});
}
return (new planjure.components.toolbar.t799973(owner,cursor,statistics_component,null));
});
planjure.components.toolbar.replan_component = (function replan_component(cursor,owner){if(typeof planjure.components.toolbar.t799981 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t799981 = (function (owner,cursor,replan_component,meta799982){
this.owner = owner;
this.cursor = cursor;
this.replan_component = replan_component;
this.meta799982 = meta799982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t799981.cljs$lang$type = true;
planjure.components.toolbar.t799981.cljs$lang$ctorStr = "planjure.components.toolbar/t799981";
planjure.components.toolbar.t799981.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t799981");
});
planjure.components.toolbar.t799981.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t799981.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({},null);
});
planjure.components.toolbar.t799981.prototype.om$core$IWillUpdate$ = true;
planjure.components.toolbar.t799981.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,p__799984){var self__ = this;
var map__799985 = p__799984;var map__799985__$1 = ((cljs.core.seq_QMARK_.call(null,map__799985))?cljs.core.apply.call(null,cljs.core.hash_map,map__799985):map__799985);var next_state = map__799985__$1;var plan_chan = cljs.core.get.call(null,map__799985__$1,new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472));var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"replan","replan",-490224302).cljs$core$IFn$_invoke$arity$1(self__.cursor)))
{return cljs.core.async.put_BANG_.call(null,plan_chan,"plan!");
} else
{return null;
}
});
planjure.components.toolbar.t799981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_799983){var self__ = this;
var _799983__$1 = this;return self__.meta799982;
});
planjure.components.toolbar.t799981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_799983,meta799982__$1){var self__ = this;
var _799983__$1 = this;return (new planjure.components.toolbar.t799981(self__.owner,self__.cursor,self__.replan_component,meta799982__$1));
});
planjure.components.toolbar.__GT_t799981 = (function __GT_t799981(owner__$1,cursor__$1,replan_component__$1,meta799982){return (new planjure.components.toolbar.t799981(owner__$1,cursor__$1,replan_component__$1,meta799982));
});
}
return (new planjure.components.toolbar.t799981(owner,cursor,replan_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t800141 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t800141 = (function (owner,app_state,toolbar_component,meta800142){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta800142 = meta800142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t800141.cljs$lang$type = true;
planjure.components.toolbar.t800141.cljs$lang$ctorStr = "planjure.components.toolbar/t800141";
planjure.components.toolbar.t800141.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.toolbar/t800141");
});
planjure.components.toolbar.t800141.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t800141.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__800144){var self__ = this;
var map__800145 = p__800144;var map__800145__$1 = ((cljs.core.seq_QMARK_.call(null,map__800145))?cljs.core.apply.call(null,cljs.core.hash_map,map__800145):map__800145);var configuration_chan = cljs.core.get.call(null,map__800145__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810),new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.editor_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-options","brush-options",1088324874),new cljs.core.Keyword(null,"brush-options","brush-options",1088324874).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"History"),React.DOM.div({"className": "section-wrapper"},React.DOM.div({"className": "button-row"},om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),new cljs.core.Keyword(null,"undo","undo",-1818036302),new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),"Undo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365),cljs.core.complement.call(null,planjure.history.undoable)], null)], null)),om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),new cljs.core.Keyword(null,"redo","redo",501190664),new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),"Redo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365),cljs.core.complement.call(null,planjure.history.redoable)], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": ((function (this$__$1,map__800145,map__800145__$1,configuration_chan){
return (function (p1__799986_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"algorithm","algorithm",739262820),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.call(null,p1__799986_SHARP_.target.value)], null));
});})(this$__$1,map__800145,map__800145__$1,configuration_chan))
, "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1472048382).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,((function (this$__$1,map__800145,map__800145__$1,configuration_chan){
return (function (p1__799987_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__799987_SHARP_))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__799987_SHARP_)));
});})(this$__$1,map__800145,map__800145__$1,configuration_chan))
,planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": ((function (this$__$1,map__800145,map__800145__$1,configuration_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472)),"plan!");
});})(this$__$1,map__800145,map__800145__$1,configuration_chan))
},"Plan Path")),React.DOM.div(null,om.core.build.call(null,planjure.components.toolbar.checkbox_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.Keyword(null,"replan","replan",-490224302),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"RE-PLAN"], null)], null)),om.core.build.call(null,planjure.components.toolbar.checkbox_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"VISITED"], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-cost","last-cost",747751156),new cljs.core.Keyword(null,"last-cost","last-cost",747751156).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555),new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null)))),om.core.build.call(null,planjure.components.toolbar.replan_component,cljs.core.select_keys.call(null,self__.app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"replan","replan",-490224302)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472))], null)], null)));
});
planjure.components.toolbar.t800141.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t800141.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t800141.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t800141.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var c__6257__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto__,configuration_chan,___$1){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto__,configuration_chan,___$1){
return (function (state_800242){var state_val_800243 = (state_800242[(1)]);if((state_val_800243 === (7)))
{var inst_800154 = (state_800242[(7)]);var inst_800153 = (state_800242[(8)]);var inst_800152 = (state_800242[(2)]);var inst_800153__$1 = cljs.core.nth.call(null,inst_800152,(0),null);var inst_800154__$1 = cljs.core.nth.call(null,inst_800152,(1),null);var inst_800155 = cljs.core.println.call(null,inst_800153__$1);var inst_800156 = cljs.core._EQ_.call(null,inst_800154__$1,planjure.appstate.plan_chan);var state_800242__$1 = (function (){var statearr_800244 = state_800242;(statearr_800244[(7)] = inst_800154__$1);
(statearr_800244[(8)] = inst_800153__$1);
(statearr_800244[(9)] = inst_800155);
return statearr_800244;
})();if(inst_800156)
{var statearr_800245_800294 = state_800242__$1;(statearr_800245_800294[(1)] = (8));
} else
{var statearr_800246_800295 = state_800242__$1;(statearr_800246_800295[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (20)))
{var inst_800209 = (state_800242[(2)]);var state_800242__$1 = state_800242;var statearr_800247_800296 = state_800242__$1;(statearr_800247_800296[(2)] = inst_800209);
(statearr_800247_800296[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (27)))
{var inst_800153 = (state_800242[(8)]);var inst_800222 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800223 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685),inst_800222);var state_800242__$1 = state_800242;var statearr_800248_800297 = state_800242__$1;(statearr_800248_800297[(2)] = inst_800223);
(statearr_800248_800297[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (1)))
{var state_800242__$1 = state_800242;var statearr_800249_800298 = state_800242__$1;(statearr_800249_800298[(2)] = null);
(statearr_800249_800298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (24)))
{var inst_800153 = (state_800242[(8)]);var inst_800225 = new cljs.core.Keyword(null,"input-name","input-name",323608185).cljs$core$IFn$_invoke$arity$1(inst_800153);var state_800242__$1 = state_800242;var G__800250_800299 = (((inst_800225 instanceof cljs.core.Keyword))?inst_800225.fqn:null);switch (G__800250_800299) {
case "draw-visited":
var statearr_800251_800301 = state_800242__$1;(statearr_800251_800301[(1)] = (27));

break;
case "replan":
var statearr_800252_800302 = state_800242__$1;(statearr_800252_800302[(1)] = (26));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_800225))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (4)))
{var inst_800149 = [planjure.appstate.plan_chan,configuration_chan];var inst_800150 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_800149,null));var state_800242__$1 = state_800242;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_800242__$1,(7),inst_800150);
} else
{if((state_val_800243 === (15)))
{var inst_800153 = (state_800242[(8)]);var inst_800183 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800184 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1472048382),inst_800183);var state_800242__$1 = state_800242;var statearr_800253_800303 = state_800242__$1;(statearr_800253_800303[(2)] = inst_800184);
(statearr_800253_800303[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (21)))
{var inst_800203 = planjure.history.undo.call(null);var state_800242__$1 = state_800242;var statearr_800254_800304 = state_800242__$1;(statearr_800254_800304[(2)] = inst_800203);
(statearr_800254_800304[(1)] = (20));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (13)))
{var inst_800234 = (state_800242[(2)]);var state_800242__$1 = (function (){var statearr_800255 = state_800242;(statearr_800255[(10)] = inst_800234);
return statearr_800255;
})();var statearr_800256_800305 = state_800242__$1;(statearr_800256_800305[(2)] = null);
(statearr_800256_800305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (22)))
{var inst_800205 = planjure.history.redo.call(null);var state_800242__$1 = state_800242;var statearr_800257_800306 = state_800242__$1;(statearr_800257_800306[(2)] = inst_800205);
(statearr_800257_800306[(1)] = (20));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (6)))
{var inst_800238 = (state_800242[(2)]);var state_800242__$1 = state_800242;var statearr_800258_800307 = state_800242__$1;(statearr_800258_800307[(2)] = inst_800238);
(statearr_800258_800307[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (25)))
{var inst_800227 = (state_800242[(2)]);var state_800242__$1 = state_800242;var statearr_800259_800308 = state_800242__$1;(statearr_800259_800308[(2)] = inst_800227);
(statearr_800259_800308[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (17)))
{var inst_800217 = (state_800242[(2)]);var state_800242__$1 = state_800242;var statearr_800260_800309 = state_800242__$1;(statearr_800260_800309[(2)] = inst_800217);
(statearr_800260_800309[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (3)))
{var inst_800240 = (state_800242[(2)]);var state_800242__$1 = state_800242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_800242__$1,inst_800240);
} else
{if((state_val_800243 === (12)))
{var state_800242__$1 = state_800242;var statearr_800261_800310 = state_800242__$1;(statearr_800261_800310[(2)] = null);
(statearr_800261_800310[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (2)))
{var state_800242__$1 = state_800242;if(true)
{var statearr_800262_800311 = state_800242__$1;(statearr_800262_800311[(1)] = (4));
} else
{var statearr_800263_800312 = state_800242__$1;(statearr_800263_800312[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (23)))
{var inst_800153 = (state_800242[(8)]);var inst_800211 = new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800212 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800213 = om.core.update_BANG_.call(null,self__.app_state,inst_800211,inst_800212);var state_800242__$1 = state_800242;var statearr_800264_800313 = state_800242__$1;(statearr_800264_800313[(2)] = inst_800213);
(statearr_800264_800313[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (19)))
{var inst_800153 = (state_800242[(8)]);var inst_800207 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var state_800242__$1 = state_800242;var G__800265_800314 = (((inst_800207 instanceof cljs.core.Keyword))?inst_800207.fqn:null);switch (G__800265_800314) {
case "redo":
var statearr_800266_800316 = state_800242__$1;(statearr_800266_800316[(1)] = (22));

break;
case "undo":
var statearr_800267_800317 = state_800242__$1;(statearr_800267_800317[(1)] = (21));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_800207))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (11)))
{var inst_800153 = (state_800242[(8)]);var inst_800229 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(inst_800153);var state_800242__$1 = state_800242;var G__800268_800318 = (((inst_800229 instanceof cljs.core.Keyword))?inst_800229.fqn:null);switch (G__800268_800318) {
case "checkbox":
var statearr_800269_800320 = state_800242__$1;(statearr_800269_800320[(1)] = (24));

break;
case "tool-selector":
var statearr_800270_800321 = state_800242__$1;(statearr_800270_800321[(1)] = (16));

break;
case "algorithm":
var statearr_800271_800322 = state_800242__$1;(statearr_800271_800322[(1)] = (15));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_800229))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (9)))
{var state_800242__$1 = state_800242;var statearr_800272_800323 = state_800242__$1;(statearr_800272_800323[(2)] = null);
(statearr_800272_800323[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (5)))
{var state_800242__$1 = state_800242;var statearr_800273_800324 = state_800242__$1;(statearr_800273_800324[(2)] = null);
(statearr_800273_800324[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (14)))
{var inst_800231 = (state_800242[(2)]);var state_800242__$1 = state_800242;var statearr_800274_800325 = state_800242__$1;(statearr_800274_800325[(2)] = inst_800231);
(statearr_800274_800325[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (26)))
{var inst_800153 = (state_800242[(8)]);var inst_800219 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800220 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"replan","replan",-490224302),inst_800219);var state_800242__$1 = state_800242;var statearr_800275_800326 = state_800242__$1;(statearr_800275_800326[(2)] = inst_800220);
(statearr_800275_800326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (16)))
{var inst_800153 = (state_800242[(8)]);var inst_800215 = new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318).cljs$core$IFn$_invoke$arity$1(inst_800153);var state_800242__$1 = state_800242;var G__800276_800327 = (((inst_800215 instanceof cljs.core.Keyword))?inst_800215.fqn:null);switch (G__800276_800327) {
case "history":
var statearr_800277_800329 = state_800242__$1;(statearr_800277_800329[(1)] = (19));

break;
case "world-size":
var statearr_800278_800330 = state_800242__$1;(statearr_800278_800330[(1)] = (18));

break;
default:
var statearr_800279_800331 = state_800242__$1;(statearr_800279_800331[(1)] = (23));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (10)))
{var inst_800154 = (state_800242[(7)]);var inst_800180 = (state_800242[(2)]);var inst_800181 = cljs.core._EQ_.call(null,inst_800154,configuration_chan);var state_800242__$1 = (function (){var statearr_800280 = state_800242;(statearr_800280[(11)] = inst_800180);
return statearr_800280;
})();if(inst_800181)
{var statearr_800281_800332 = state_800242__$1;(statearr_800281_800332[(1)] = (11));
} else
{var statearr_800282_800333 = state_800242__$1;(statearr_800282_800333[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (18)))
{var inst_800153 = (state_800242[(8)]);var inst_800186 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_800153);var inst_800187 = cljs.core.deref.call(null,self__.app_state);var inst_800188 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810),inst_800186,new cljs.core.Keyword(null,"size","size",1098693007)];var inst_800189 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_800188,null));var inst_800190 = cljs.core.get_in.call(null,inst_800187,inst_800189);var inst_800191 = (inst_800190 - (1));var inst_800192 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",-1891482119),inst_800186);var inst_800193 = [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"finish","finish",-586688046)];var inst_800194 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_800193,null));var inst_800195 = [inst_800191,inst_800191];var inst_800196 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_800195,null));var inst_800197 = om.core.update_BANG_.call(null,self__.app_state,inst_800194,inst_800196);var inst_800198 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);var inst_800199 = planjure.plan.random_world.call(null,inst_800190,inst_800190);var inst_800200 = planjure.appstate.update_world_state_BANG_.call(null,self__.app_state,inst_800199);var inst_800201 = planjure.history.reset.call(null);var state_800242__$1 = (function (){var statearr_800283 = state_800242;(statearr_800283[(12)] = inst_800197);
(statearr_800283[(13)] = inst_800200);
(statearr_800283[(14)] = inst_800198);
(statearr_800283[(15)] = inst_800192);
return statearr_800283;
})();var statearr_800284_800334 = state_800242__$1;(statearr_800284_800334[(2)] = inst_800201);
(statearr_800284_800334[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_800243 === (8)))
{var inst_800158 = cljs.core.deref.call(null,self__.app_state);var inst_800159 = new cljs.core.Keyword(null,"algo","algo",1472048382).cljs$core$IFn$_invoke$arity$1(inst_800158);var inst_800160 = planjure.components.toolbar.algorithms.call(null,inst_800159);var inst_800161 = inst_800160.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204));var inst_800162 = cljs.core.deref.call(null,self__.app_state);var inst_800163 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_800162);var inst_800164 = cljs.core.deref.call(null,self__.app_state);var inst_800165 = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(inst_800164);var inst_800166 = inst_800161.call(null,inst_800163,inst_800165);var inst_800167 = inst_800166.call(null,new cljs.core.Keyword(null,"time","time",1385887882));var inst_800168 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555),inst_800167);var inst_800169 = inst_800166.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));var inst_800170 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(inst_800169);var inst_800171 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"visited","visited",-1610853875),inst_800170);var inst_800172 = inst_800166.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));var inst_800173 = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(inst_800172);var inst_800174 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-cost","last-cost",747751156),inst_800173);var inst_800175 = inst_800166.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));var inst_800176 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(inst_800175);var inst_800177 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",-188191168),inst_800176);var state_800242__$1 = (function (){var statearr_800285 = state_800242;(statearr_800285[(16)] = inst_800174);
(statearr_800285[(17)] = inst_800168);
(statearr_800285[(18)] = inst_800171);
return statearr_800285;
})();var statearr_800286_800335 = state_800242__$1;(statearr_800286_800335[(2)] = inst_800177);
(statearr_800286_800335[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});})(c__6257__auto__,configuration_chan,___$1))
;return ((function (switch__6192__auto__,c__6257__auto__,configuration_chan,___$1){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_800290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_800290[(0)] = state_machine__6193__auto__);
(statearr_800290[(1)] = (1));
return statearr_800290;
});
var state_machine__6193__auto____1 = (function (state_800242){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_800242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e800291){if((e800291 instanceof Object))
{var ex__6196__auto__ = e800291;var statearr_800292_800336 = state_800242;(statearr_800292_800336[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_800242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e800291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__800337 = state_800242;
state_800242 = G__800337;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_800242){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_800242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto__,configuration_chan,___$1))
})();var state__6259__auto__ = (function (){var statearr_800293 = f__6258__auto__.call(null);(statearr_800293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto__);
return statearr_800293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto__,configuration_chan,___$1))
);
return c__6257__auto__;
});
planjure.components.toolbar.t800141.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t800141.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472),planjure.appstate.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t800141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_800143){var self__ = this;
var _800143__$1 = this;return self__.meta800142;
});
planjure.components.toolbar.t800141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_800143,meta800142__$1){var self__ = this;
var _800143__$1 = this;return (new planjure.components.toolbar.t800141(self__.owner,self__.app_state,self__.toolbar_component,meta800142__$1));
});
planjure.components.toolbar.__GT_t800141 = (function __GT_t800141(owner__$1,app_state__$1,toolbar_component__$1,meta800142){return (new planjure.components.toolbar.t800141(owner__$1,app_state__$1,toolbar_component__$1,meta800142));
});
}
return (new planjure.components.toolbar.t800141(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map