// Compiled by ClojureScript 0.0-2277
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
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dijkstra","dijkstra",-1945050732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",-1175266204),planjure.utils.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"dfs","dfs",1145715282),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Depth-first",new cljs.core.Keyword(null,"fn","fn",-1175266204),planjure.utils.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.checkbox_component = (function checkbox_component(cursor,owner){if(typeof planjure.components.toolbar.t10274 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10274 = (function (owner,cursor,checkbox_component,meta10275){
this.owner = owner;
this.cursor = cursor;
this.checkbox_component = checkbox_component;
this.meta10275 = meta10275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10274.cljs$lang$type = true;
planjure.components.toolbar.t10274.cljs$lang$ctorStr = "planjure.components.toolbar/t10274";
planjure.components.toolbar.t10274.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10274");
});
planjure.components.toolbar.t10274.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t10274.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10277){var self__ = this;
var map__10278 = p__10277;var map__10278__$1 = ((cljs.core.seq_QMARK_.call(null,map__10278))?cljs.core.apply.call(null,cljs.core.hash_map,map__10278):map__10278);var input_name = cljs.core.get.call(null,map__10278__$1,new cljs.core.Keyword(null,"input-name","input-name",323608185));var label_text = cljs.core.get.call(null,map__10278__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));var configuration_chan = cljs.core.get.call(null,map__10278__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;return React.DOM.div({"className": "checkbox-row"},React.DOM.label(null,om.dom.input.call(null,{"onChange": ((function (___$1,map__10278,map__10278__$1,input_name,label_text,configuration_chan){
return (function (p1__10268_SHARP_){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"input-name","input-name",323608185),input_name,new cljs.core.Keyword(null,"value","value",305978217),p1__10268_SHARP_.target.checked], null));
});})(___$1,map__10278,map__10278__$1,input_name,label_text,configuration_chan))
, "value": "", "type": "checkbox"}),label_text));
});
planjure.components.toolbar.t10274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10276){var self__ = this;
var _10276__$1 = this;return self__.meta10275;
});
planjure.components.toolbar.t10274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10276,meta10275__$1){var self__ = this;
var _10276__$1 = this;return (new planjure.components.toolbar.t10274(self__.owner,self__.cursor,self__.checkbox_component,meta10275__$1));
});
planjure.components.toolbar.__GT_t10274 = (function __GT_t10274(owner__$1,cursor__$1,checkbox_component__$1,meta10275){return (new planjure.components.toolbar.t10274(owner__$1,cursor__$1,checkbox_component__$1,meta10275));
});
}
return (new planjure.components.toolbar.t10274(owner,cursor,checkbox_component,null));
});
planjure.components.toolbar.item_selector_component = (function item_selector_component(cursor,owner){if(typeof planjure.components.toolbar.t10284 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10284 = (function (owner,cursor,item_selector_component,meta10285){
this.owner = owner;
this.cursor = cursor;
this.item_selector_component = item_selector_component;
this.meta10285 = meta10285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10284.cljs$lang$type = true;
planjure.components.toolbar.t10284.cljs$lang$ctorStr = "planjure.components.toolbar/t10284";
planjure.components.toolbar.t10284.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10284");
});
planjure.components.toolbar.t10284.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t10284.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10287){var self__ = this;
var map__10288 = p__10287;var map__10288__$1 = ((cljs.core.seq_QMARK_.call(null,map__10288))?cljs.core.apply.call(null,cljs.core.hash_map,map__10288):map__10288);var is_disabled_fn = cljs.core.get.call(null,map__10288__$1,new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365));var tool_text = cljs.core.get.call(null,map__10288__$1,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454));var tool_name = cljs.core.get.call(null,map__10288__$1,new cljs.core.Keyword(null,"tool-name","tool-name",613742581));var tool_kind = cljs.core.get.call(null,map__10288__$1,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318));var configuration_chan = cljs.core.get.call(null,map__10288__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;var selected_css = ((cljs.core._EQ_.call(null,tool_name,tool_kind.call(null,self__.cursor)))?"selected":null);var disabled_css = (cljs.core.truth_((function (){var and__3531__auto__ = is_disabled_fn;if(cljs.core.truth_(and__3531__auto__))
{return is_disabled_fn.call(null);
} else
{return and__3531__auto__;
}
})())?"disabled":null);var css_class = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_css)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled_css));return React.DOM.span({"onClick": ((function (selected_css,disabled_css,css_class,___$1,map__10288,map__10288__$1,is_disabled_fn,tool_text,tool_name,tool_kind,configuration_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,configuration_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"tool-selector","tool-selector",549011096),new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),tool_kind,new cljs.core.Keyword(null,"value","value",305978217),tool_name], null));
});})(selected_css,disabled_css,css_class,___$1,map__10288,map__10288__$1,is_disabled_fn,tool_text,tool_name,tool_kind,configuration_chan))
, "className": ("item-selector "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class))},tool_text);
});
planjure.components.toolbar.t10284.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t10284.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t10284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10286){var self__ = this;
var _10286__$1 = this;return self__.meta10285;
});
planjure.components.toolbar.t10284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10286,meta10285__$1){var self__ = this;
var _10286__$1 = this;return (new planjure.components.toolbar.t10284(self__.owner,self__.cursor,self__.item_selector_component,meta10285__$1));
});
planjure.components.toolbar.__GT_t10284 = (function __GT_t10284(owner__$1,cursor__$1,item_selector_component__$1,meta10285){return (new planjure.components.toolbar.t10284(owner__$1,cursor__$1,item_selector_component__$1,meta10285));
});
}
return (new planjure.components.toolbar.t10284(owner,cursor,item_selector_component,null));
});
planjure.components.toolbar.editor_component = (function editor_component(cursor,owner){if(typeof planjure.components.toolbar.t10318 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10318 = (function (owner,cursor,editor_component,meta10319){
this.owner = owner;
this.cursor = cursor;
this.editor_component = editor_component;
this.meta10319 = meta10319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10318.cljs$lang$type = true;
planjure.components.toolbar.t10318.cljs$lang$ctorStr = "planjure.components.toolbar/t10318";
planjure.components.toolbar.t10318.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10318");
});
planjure.components.toolbar.t10318.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t10318.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10321){var self__ = this;
var map__10322 = p__10321;var map__10322__$1 = ((cljs.core.seq_QMARK_.call(null,map__10322))?cljs.core.apply.call(null,cljs.core.hash_map,map__10322):map__10322);var configuration_chan = cljs.core.get.call(null,map__10322__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4268__auto__ = ((function (___$1,map__10322,map__10322__$1,configuration_chan){
return (function iter__10323(s__10324){return (new cljs.core.LazySeq(null,((function (___$1,map__10322,map__10322__$1,configuration_chan){
return (function (){var s__10324__$1 = s__10324;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10324__$1);if(temp__4126__auto__)
{var s__10324__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10324__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__10324__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__10326 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__10325 = (0);while(true){
if((i__10325 < size__4267__auto__))
{var vec__10331 = cljs.core._nth.call(null,c__4266__auto__,i__10325);var brush_tool_name = cljs.core.nth.call(null,vec__10331,(0),null);var map__10332 = cljs.core.nth.call(null,vec__10331,(1),null);var map__10332__$1 = ((cljs.core.seq_QMARK_.call(null,map__10332))?cljs.core.apply.call(null,cljs.core.hash_map,map__10332):map__10332);var text = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__10326,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__10347 = (i__10325 + (1));
i__10325 = G__10347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10326),iter__10323.call(null,cljs.core.chunk_rest.call(null,s__10324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10326),null);
}
} else
{var vec__10333 = cljs.core.first.call(null,s__10324__$2);var brush_tool_name = cljs.core.nth.call(null,vec__10333,(0),null);var map__10334 = cljs.core.nth.call(null,vec__10333,(1),null);var map__10334__$1 = ((cljs.core.seq_QMARK_.call(null,map__10334))?cljs.core.apply.call(null,cljs.core.hash_map,map__10334):map__10334);var text = cljs.core.get.call(null,map__10334__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),brush_tool_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__10323.call(null,cljs.core.rest.call(null,s__10324__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,map__10322,map__10322__$1,configuration_chan))
,null,null));
});})(___$1,map__10322,map__10322__$1,configuration_chan))
;return iter__4268__auto__.call(null,new cljs.core.Keyword(null,"brush-options","brush-options",1088324874).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()),cljs.core.apply.call(null,om.dom.div,{"className": "button-row"},(function (){var iter__4268__auto__ = ((function (___$1,map__10322,map__10322__$1,configuration_chan){
return (function iter__10335(s__10336){return (new cljs.core.LazySeq(null,((function (___$1,map__10322,map__10322__$1,configuration_chan){
return (function (){var s__10336__$1 = s__10336;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10336__$1);if(temp__4126__auto__)
{var s__10336__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10336__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__10336__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__10338 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__10337 = (0);while(true){
if((i__10337 < size__4267__auto__))
{var vec__10343 = cljs.core._nth.call(null,c__4266__auto__,i__10337);var size_name = cljs.core.nth.call(null,vec__10343,(0),null);var map__10344 = cljs.core.nth.call(null,vec__10343,(1),null);var map__10344__$1 = ((cljs.core.seq_QMARK_.call(null,map__10344))?cljs.core.apply.call(null,cljs.core.hash_map,map__10344):map__10344);var text = cljs.core.get.call(null,map__10344__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__10338,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__10348 = (i__10337 + (1));
i__10337 = G__10348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10338),iter__10335.call(null,cljs.core.chunk_rest.call(null,s__10336__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10338),null);
}
} else
{var vec__10345 = cljs.core.first.call(null,s__10336__$2);var size_name = cljs.core.nth.call(null,vec__10345,(0),null);var map__10346 = cljs.core.nth.call(null,vec__10345,(1),null);var map__10346__$1 = ((cljs.core.seq_QMARK_.call(null,map__10346))?cljs.core.apply.call(null,cljs.core.hash_map,map__10346):map__10346);var text = cljs.core.get.call(null,map__10346__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__10335.call(null,cljs.core.rest.call(null,s__10336__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,map__10322,map__10322__$1,configuration_chan))
,null,null));
});})(___$1,map__10322,map__10322__$1,configuration_chan))
;return iter__4268__auto__.call(null,new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})()));
});
planjure.components.toolbar.t10318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10320){var self__ = this;
var _10320__$1 = this;return self__.meta10319;
});
planjure.components.toolbar.t10318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10320,meta10319__$1){var self__ = this;
var _10320__$1 = this;return (new planjure.components.toolbar.t10318(self__.owner,self__.cursor,self__.editor_component,meta10319__$1));
});
planjure.components.toolbar.__GT_t10318 = (function __GT_t10318(owner__$1,cursor__$1,editor_component__$1,meta10319){return (new planjure.components.toolbar.t10318(owner__$1,cursor__$1,editor_component__$1,meta10319));
});
}
return (new planjure.components.toolbar.t10318(owner,cursor,editor_component,null));
});
planjure.components.toolbar.size_component = (function size_component(cursor,owner){if(typeof planjure.components.toolbar.t10366 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10366 = (function (owner,cursor,size_component,meta10367){
this.owner = owner;
this.cursor = cursor;
this.size_component = size_component;
this.meta10367 = meta10367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10366.cljs$lang$type = true;
planjure.components.toolbar.t10366.cljs$lang$ctorStr = "planjure.components.toolbar/t10366";
planjure.components.toolbar.t10366.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10366");
});
planjure.components.toolbar.t10366.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t10366.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10369){var self__ = this;
var map__10370 = p__10369;var map__10370__$1 = ((cljs.core.seq_QMARK_.call(null,map__10370))?cljs.core.apply.call(null,cljs.core.hash_map,map__10370):map__10370);var configuration_chan = cljs.core.get.call(null,map__10370__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4268__auto__ = ((function (selected_size,___$1,map__10370,map__10370__$1,configuration_chan){
return (function iter__10371(s__10372){return (new cljs.core.LazySeq(null,((function (selected_size,___$1,map__10370,map__10370__$1,configuration_chan){
return (function (){var s__10372__$1 = s__10372;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10372__$1);if(temp__4126__auto__)
{var s__10372__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10372__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__10372__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__10374 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__10373 = (0);while(true){
if((i__10373 < size__4267__auto__))
{var vec__10379 = cljs.core._nth.call(null,c__4266__auto__,i__10373);var size_name = cljs.core.nth.call(null,vec__10379,(0),null);var map__10380 = cljs.core.nth.call(null,vec__10379,(1),null);var map__10380__$1 = ((cljs.core.seq_QMARK_.call(null,map__10380))?cljs.core.apply.call(null,cljs.core.hash_map,map__10380):map__10380);var size_opts = map__10380__$1;var text = cljs.core.get.call(null,map__10380__$1,new cljs.core.Keyword(null,"text","text",-1790561697));cljs.core.chunk_append.call(null,b__10374,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)));
{
var G__10383 = (i__10373 + (1));
i__10373 = G__10383;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10374),iter__10371.call(null,cljs.core.chunk_rest.call(null,s__10372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10374),null);
}
} else
{var vec__10381 = cljs.core.first.call(null,s__10372__$2);var size_name = cljs.core.nth.call(null,vec__10381,(0),null);var map__10382 = cljs.core.nth.call(null,vec__10381,(1),null);var map__10382__$1 = ((cljs.core.seq_QMARK_.call(null,map__10382))?cljs.core.apply.call(null,cljs.core.hash_map,map__10382):map__10382);var size_opts = map__10382__$1;var text = cljs.core.get.call(null,map__10382__$1,new cljs.core.Keyword(null,"text","text",-1790561697));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),text], null)], null)),iter__10371.call(null,cljs.core.rest.call(null,s__10372__$2)));
}
} else
{return null;
}
break;
}
});})(selected_size,___$1,map__10370,map__10370__$1,configuration_chan))
,null,null));
});})(selected_size,___$1,map__10370,map__10370__$1,configuration_chan))
;return iter__4268__auto__.call(null,new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})());
});
planjure.components.toolbar.t10366.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t10366.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t10366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10368){var self__ = this;
var _10368__$1 = this;return self__.meta10367;
});
planjure.components.toolbar.t10366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10368,meta10367__$1){var self__ = this;
var _10368__$1 = this;return (new planjure.components.toolbar.t10366(self__.owner,self__.cursor,self__.size_component,meta10367__$1));
});
planjure.components.toolbar.__GT_t10366 = (function __GT_t10366(owner__$1,cursor__$1,size_component__$1,meta10367){return (new planjure.components.toolbar.t10366(owner__$1,cursor__$1,size_component__$1,meta10367));
});
}
return (new planjure.components.toolbar.t10366(owner,cursor,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(cursor,owner){if(typeof planjure.components.toolbar.t10387 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10387 = (function (owner,cursor,statistics_component,meta10388){
this.owner = owner;
this.cursor = cursor;
this.statistics_component = statistics_component;
this.meta10388 = meta10388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10387.cljs$lang$type = true;
planjure.components.toolbar.t10387.cljs$lang$ctorStr = "planjure.components.toolbar/t10387";
planjure.components.toolbar.t10387.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10387");
});
planjure.components.toolbar.t10387.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t10387.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1324633262)},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.cursor.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555)) / (1000)))+" seconds")),React.DOM.div(null,cljs.core.name.call(null,self__.cursor.call(null,new cljs.core.Keyword(null,"brush","brush",498034117))))));
});
planjure.components.toolbar.t10387.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t10387.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t10387.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t10387.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t10387.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t10387.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t10387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10389){var self__ = this;
var _10389__$1 = this;return self__.meta10388;
});
planjure.components.toolbar.t10387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10389,meta10388__$1){var self__ = this;
var _10389__$1 = this;return (new planjure.components.toolbar.t10387(self__.owner,self__.cursor,self__.statistics_component,meta10388__$1));
});
planjure.components.toolbar.__GT_t10387 = (function __GT_t10387(owner__$1,cursor__$1,statistics_component__$1,meta10388){return (new planjure.components.toolbar.t10387(owner__$1,cursor__$1,statistics_component__$1,meta10388));
});
}
return (new planjure.components.toolbar.t10387(owner,cursor,statistics_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t10542 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t10542 = (function (owner,app_state,toolbar_component,meta10543){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta10543 = meta10543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t10542.cljs$lang$type = true;
planjure.components.toolbar.t10542.cljs$lang$ctorStr = "planjure.components.toolbar/t10542";
planjure.components.toolbar.t10542.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.toolbar/t10542");
});
planjure.components.toolbar.t10542.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t10542.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10545){var self__ = this;
var map__10546 = p__10545;var map__10546__$1 = ((cljs.core.seq_QMARK_.call(null,map__10546))?cljs.core.apply.call(null,cljs.core.hash_map,map__10546):map__10546);var configuration_chan = cljs.core.get.call(null,map__10546__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810),new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.editor_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-options","brush-options",1088324874),new cljs.core.Keyword(null,"brush-options","brush-options",1088324874).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315),new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807),new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"History"),React.DOM.div({"className": "section-wrapper"},React.DOM.div({"className": "button-row"},om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),new cljs.core.Keyword(null,"undo","undo",-1818036302),new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),"Undo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365),cljs.core.complement.call(null,planjure.history.undoable)], null)], null)),om.core.build.call(null,planjure.components.toolbar.item_selector_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"tool-name","tool-name",613742581),new cljs.core.Keyword(null,"redo","redo",501190664),new cljs.core.Keyword(null,"tool-text","tool-text",1212601454),"Redo",new cljs.core.Keyword(null,"is-disabled-fn","is-disabled-fn",1672008365),cljs.core.complement.call(null,planjure.history.redoable)], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": ((function (this$__$1,map__10546,map__10546__$1,configuration_chan){
return (function (p1__10390_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"algorithm","algorithm",739262820),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.call(null,p1__10390_SHARP_.target.value)], null));
});})(this$__$1,map__10546,map__10546__$1,configuration_chan))
, "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1472048382).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,((function (this$__$1,map__10546,map__10546__$1,configuration_chan){
return (function (p1__10391_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__10391_SHARP_))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__10391_SHARP_)));
});})(this$__$1,map__10546,map__10546__$1,configuration_chan))
,planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": ((function (this$__$1,map__10546,map__10546__$1,configuration_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472)),"plan!");
});})(this$__$1,map__10546,map__10546__$1,configuration_chan))
},"Plan Path")),React.DOM.div(null,om.core.build.call(null,planjure.components.toolbar.checkbox_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.Keyword(null,"replan","replan",-490224302),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"RE-PLAN"], null)], null)),om.core.build.call(null,planjure.components.toolbar.checkbox_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),configuration_chan,new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"VISITED"], null)], null))))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555),new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null)))));
});
planjure.components.toolbar.t10542.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t10542.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t10542.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t10542.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753));var c__6256__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto__,configuration_chan,___$1){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto__,configuration_chan,___$1){
return (function (state_10640){var state_val_10641 = (state_10640[(1)]);if((state_val_10641 === (7)))
{var inst_10555 = (state_10640[(7)]);var inst_10554 = (state_10640[(8)]);var inst_10553 = (state_10640[(2)]);var inst_10554__$1 = cljs.core.nth.call(null,inst_10553,(0),null);var inst_10555__$1 = cljs.core.nth.call(null,inst_10553,(1),null);var inst_10556 = cljs.core.println.call(null,inst_10554__$1);var inst_10557 = cljs.core._EQ_.call(null,inst_10555__$1,planjure.appstate.plan_chan);var state_10640__$1 = (function (){var statearr_10642 = state_10640;(statearr_10642[(9)] = inst_10556);
(statearr_10642[(7)] = inst_10555__$1);
(statearr_10642[(8)] = inst_10554__$1);
return statearr_10642;
})();if(inst_10557)
{var statearr_10643_10692 = state_10640__$1;(statearr_10643_10692[(1)] = (8));
} else
{var statearr_10644_10693 = state_10640__$1;(statearr_10644_10693[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (20)))
{var inst_10607 = (state_10640[(2)]);var state_10640__$1 = state_10640;var statearr_10645_10694 = state_10640__$1;(statearr_10645_10694[(2)] = inst_10607);
(statearr_10645_10694[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (27)))
{var inst_10554 = (state_10640[(8)]);var inst_10620 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10621 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685),inst_10620);var state_10640__$1 = state_10640;var statearr_10646_10695 = state_10640__$1;(statearr_10646_10695[(2)] = inst_10621);
(statearr_10646_10695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (1)))
{var state_10640__$1 = state_10640;var statearr_10647_10696 = state_10640__$1;(statearr_10647_10696[(2)] = null);
(statearr_10647_10696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (24)))
{var inst_10554 = (state_10640[(8)]);var inst_10623 = new cljs.core.Keyword(null,"input-name","input-name",323608185).cljs$core$IFn$_invoke$arity$1(inst_10554);var state_10640__$1 = state_10640;var G__10648_10697 = (((inst_10623 instanceof cljs.core.Keyword))?inst_10623.fqn:null);switch (G__10648_10697) {
case "draw-visited":
var statearr_10649_10699 = state_10640__$1;(statearr_10649_10699[(1)] = (27));

break;
case "replan":
var statearr_10650_10700 = state_10640__$1;(statearr_10650_10700[(1)] = (26));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10623))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (4)))
{var inst_10550 = [planjure.appstate.plan_chan,configuration_chan];var inst_10551 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10550,null));var state_10640__$1 = state_10640;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10640__$1,(7),inst_10551);
} else
{if((state_val_10641 === (15)))
{var inst_10554 = (state_10640[(8)]);var inst_10581 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10582 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1472048382),inst_10581);var state_10640__$1 = state_10640;var statearr_10651_10701 = state_10640__$1;(statearr_10651_10701[(2)] = inst_10582);
(statearr_10651_10701[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (21)))
{var inst_10601 = planjure.history.undo.call(null);var state_10640__$1 = state_10640;var statearr_10652_10702 = state_10640__$1;(statearr_10652_10702[(2)] = inst_10601);
(statearr_10652_10702[(1)] = (20));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (13)))
{var inst_10632 = (state_10640[(2)]);var state_10640__$1 = (function (){var statearr_10653 = state_10640;(statearr_10653[(10)] = inst_10632);
return statearr_10653;
})();var statearr_10654_10703 = state_10640__$1;(statearr_10654_10703[(2)] = null);
(statearr_10654_10703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (22)))
{var inst_10603 = planjure.history.redo.call(null);var state_10640__$1 = state_10640;var statearr_10655_10704 = state_10640__$1;(statearr_10655_10704[(2)] = inst_10603);
(statearr_10655_10704[(1)] = (20));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (6)))
{var inst_10636 = (state_10640[(2)]);var state_10640__$1 = state_10640;var statearr_10656_10705 = state_10640__$1;(statearr_10656_10705[(2)] = inst_10636);
(statearr_10656_10705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (25)))
{var inst_10625 = (state_10640[(2)]);var state_10640__$1 = state_10640;var statearr_10657_10706 = state_10640__$1;(statearr_10657_10706[(2)] = inst_10625);
(statearr_10657_10706[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (17)))
{var inst_10615 = (state_10640[(2)]);var state_10640__$1 = state_10640;var statearr_10658_10707 = state_10640__$1;(statearr_10658_10707[(2)] = inst_10615);
(statearr_10658_10707[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (3)))
{var inst_10638 = (state_10640[(2)]);var state_10640__$1 = state_10640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10640__$1,inst_10638);
} else
{if((state_val_10641 === (12)))
{var state_10640__$1 = state_10640;var statearr_10659_10708 = state_10640__$1;(statearr_10659_10708[(2)] = null);
(statearr_10659_10708[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (2)))
{var state_10640__$1 = state_10640;if(true)
{var statearr_10660_10709 = state_10640__$1;(statearr_10660_10709[(1)] = (4));
} else
{var statearr_10661_10710 = state_10640__$1;(statearr_10661_10710[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (23)))
{var inst_10554 = (state_10640[(8)]);var inst_10609 = new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10610 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10611 = om.core.update_BANG_.call(null,self__.app_state,inst_10609,inst_10610);var state_10640__$1 = state_10640;var statearr_10662_10711 = state_10640__$1;(statearr_10662_10711[(2)] = inst_10611);
(statearr_10662_10711[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (19)))
{var inst_10554 = (state_10640[(8)]);var inst_10605 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var state_10640__$1 = state_10640;var G__10663_10712 = (((inst_10605 instanceof cljs.core.Keyword))?inst_10605.fqn:null);switch (G__10663_10712) {
case "redo":
var statearr_10664_10714 = state_10640__$1;(statearr_10664_10714[(1)] = (22));

break;
case "undo":
var statearr_10665_10715 = state_10640__$1;(statearr_10665_10715[(1)] = (21));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10605))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (11)))
{var inst_10554 = (state_10640[(8)]);var inst_10627 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(inst_10554);var state_10640__$1 = state_10640;var G__10666_10716 = (((inst_10627 instanceof cljs.core.Keyword))?inst_10627.fqn:null);switch (G__10666_10716) {
case "checkbox":
var statearr_10667_10718 = state_10640__$1;(statearr_10667_10718[(1)] = (24));

break;
case "tool-selector":
var statearr_10668_10719 = state_10640__$1;(statearr_10668_10719[(1)] = (16));

break;
case "algorithm":
var statearr_10669_10720 = state_10640__$1;(statearr_10669_10720[(1)] = (15));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10627))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (9)))
{var state_10640__$1 = state_10640;var statearr_10670_10721 = state_10640__$1;(statearr_10670_10721[(2)] = null);
(statearr_10670_10721[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (5)))
{var state_10640__$1 = state_10640;var statearr_10671_10722 = state_10640__$1;(statearr_10671_10722[(2)] = null);
(statearr_10671_10722[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (14)))
{var inst_10629 = (state_10640[(2)]);var state_10640__$1 = state_10640;var statearr_10672_10723 = state_10640__$1;(statearr_10672_10723[(2)] = inst_10629);
(statearr_10672_10723[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (26)))
{var inst_10554 = (state_10640[(8)]);var inst_10617 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10618 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"replan","replan",-490224302),inst_10617);var state_10640__$1 = state_10640;var statearr_10673_10724 = state_10640__$1;(statearr_10673_10724[(2)] = inst_10618);
(statearr_10673_10724[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (16)))
{var inst_10554 = (state_10640[(8)]);var inst_10613 = new cljs.core.Keyword(null,"tool-kind","tool-kind",1165435318).cljs$core$IFn$_invoke$arity$1(inst_10554);var state_10640__$1 = state_10640;var G__10674_10725 = (((inst_10613 instanceof cljs.core.Keyword))?inst_10613.fqn:null);switch (G__10674_10725) {
case "history":
var statearr_10675_10727 = state_10640__$1;(statearr_10675_10727[(1)] = (19));

break;
case "world-size":
var statearr_10676_10728 = state_10640__$1;(statearr_10676_10728[(1)] = (18));

break;
default:
var statearr_10677_10729 = state_10640__$1;(statearr_10677_10729[(1)] = (23));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (10)))
{var inst_10555 = (state_10640[(7)]);var inst_10578 = (state_10640[(2)]);var inst_10579 = cljs.core._EQ_.call(null,inst_10555,configuration_chan);var state_10640__$1 = (function (){var statearr_10678 = state_10640;(statearr_10678[(11)] = inst_10578);
return statearr_10678;
})();if(inst_10579)
{var statearr_10679_10730 = state_10640__$1;(statearr_10679_10730[(1)] = (11));
} else
{var statearr_10680_10731 = state_10640__$1;(statearr_10680_10731[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (18)))
{var inst_10554 = (state_10640[(8)]);var inst_10584 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10554);var inst_10585 = cljs.core.deref.call(null,self__.app_state);var inst_10586 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810),inst_10584,new cljs.core.Keyword(null,"size","size",1098693007)];var inst_10587 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10586,null));var inst_10588 = cljs.core.get_in.call(null,inst_10585,inst_10587);var inst_10589 = (inst_10588 - (1));var inst_10590 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",-1891482119),inst_10584);var inst_10591 = [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"finish","finish",-586688046)];var inst_10592 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10591,null));var inst_10593 = [inst_10589,inst_10589];var inst_10594 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10593,null));var inst_10595 = om.core.update_BANG_.call(null,self__.app_state,inst_10592,inst_10594);var inst_10596 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);var inst_10597 = planjure.plan.random_world.call(null,inst_10588,inst_10588);var inst_10598 = planjure.appstate.update_world_state_BANG_.call(null,self__.app_state,inst_10597);var inst_10599 = planjure.history.reset.call(null);var state_10640__$1 = (function (){var statearr_10681 = state_10640;(statearr_10681[(12)] = inst_10595);
(statearr_10681[(13)] = inst_10596);
(statearr_10681[(14)] = inst_10590);
(statearr_10681[(15)] = inst_10598);
return statearr_10681;
})();var statearr_10682_10732 = state_10640__$1;(statearr_10682_10732[(2)] = inst_10599);
(statearr_10682_10732[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10641 === (8)))
{var inst_10559 = cljs.core.deref.call(null,self__.app_state);var inst_10560 = new cljs.core.Keyword(null,"algo","algo",1472048382).cljs$core$IFn$_invoke$arity$1(inst_10559);var inst_10561 = planjure.components.toolbar.algorithms.call(null,inst_10560);var inst_10562 = inst_10561.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204));var inst_10563 = cljs.core.deref.call(null,self__.app_state);var inst_10564 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_10563);var inst_10565 = cljs.core.deref.call(null,self__.app_state);var inst_10566 = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(inst_10565);var inst_10567 = inst_10562.call(null,inst_10564,inst_10566);var inst_10568 = inst_10567.call(null,new cljs.core.Keyword(null,"time","time",1385887882));var inst_10569 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",-1669306555),inst_10568);var inst_10570 = inst_10567.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));var inst_10571 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(inst_10570);var inst_10572 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"visited","visited",-1610853875),inst_10571);var inst_10573 = inst_10567.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));var inst_10574 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(inst_10573);var inst_10575 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",-188191168),inst_10574);var state_10640__$1 = (function (){var statearr_10683 = state_10640;(statearr_10683[(16)] = inst_10572);
(statearr_10683[(17)] = inst_10569);
return statearr_10683;
})();var statearr_10684_10733 = state_10640__$1;(statearr_10684_10733[(2)] = inst_10575);
(statearr_10684_10733[(1)] = (10));
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
});})(c__6256__auto__,configuration_chan,___$1))
;return ((function (switch__6191__auto__,c__6256__auto__,configuration_chan,___$1){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_10688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10688[(0)] = state_machine__6192__auto__);
(statearr_10688[(1)] = (1));
return statearr_10688;
});
var state_machine__6192__auto____1 = (function (state_10640){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_10640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e10689){if((e10689 instanceof Object))
{var ex__6195__auto__ = e10689;var statearr_10690_10734 = state_10640;(statearr_10690_10734[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10735 = state_10640;
state_10640 = G__10735;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_10640){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_10640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto__,configuration_chan,___$1))
})();var state__6258__auto__ = (function (){var statearr_10691 = f__6257__auto__.call(null);(statearr_10691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto__);
return statearr_10691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto__,configuration_chan,___$1))
);
return c__6256__auto__;
});
planjure.components.toolbar.t10542.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t10542.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",-657012472),planjure.appstate.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",-1519361753),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t10542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10544){var self__ = this;
var _10544__$1 = this;return self__.meta10543;
});
planjure.components.toolbar.t10542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10544,meta10543__$1){var self__ = this;
var _10544__$1 = this;return (new planjure.components.toolbar.t10542(self__.owner,self__.app_state,self__.toolbar_component,meta10543__$1));
});
planjure.components.toolbar.__GT_t10542 = (function __GT_t10542(owner__$1,app_state__$1,toolbar_component__$1,meta10543){return (new planjure.components.toolbar.t10542(owner__$1,app_state__$1,toolbar_component__$1,meta10543));
});
}
return (new planjure.components.toolbar.t10542(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map