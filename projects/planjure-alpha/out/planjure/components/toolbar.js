// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.components.toolbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.components.editor');
goog.require('planjure.components.editor');
goog.require('planjure.plan');
goog.require('planjure.plan');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
planjure.components.toolbar.plan_chan = cljs.core.async.chan.call(null);
planjure.components.toolbar.time_f = (function time_f(f){return (function() { 
var G__14872__delegate = function (args){var start = (new Date());var ret = cljs.core.apply.call(null,f,args);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1017464383),((new Date()) - start),new cljs.core.Keyword(null,"return","return",4374474914),ret], null);
};
var G__14872 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14872__delegate.call(this,args);};
G__14872.cljs$lang$maxFixedArity = 0;
G__14872.cljs$lang$applyTo = (function (arglist__14873){
var args = cljs.core.seq(arglist__14873);
return G__14872__delegate(args);
});
G__14872.cljs$core$IFn$_invoke$arity$variadic = G__14872__delegate;
return G__14872;
})()
;
});
planjure.components.toolbar.algorithms = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dijkstra","dijkstra",1036932424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Dijkstra",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dijkstra)], null),new cljs.core.Keyword(null,"dfs","dfs",1014003619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Depth-first",new cljs.core.Keyword(null,"fn","fn",1013907514),planjure.components.toolbar.time_f.call(null,planjure.plan.dfs)], null)], null);
planjure.components.toolbar.size_component = (function size_component(app_state,owner){if(typeof planjure.components.toolbar.t14891 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t14891 = (function (owner,app_state,size_component,meta14892){
this.owner = owner;
this.app_state = app_state;
this.size_component = size_component;
this.meta14892 = meta14892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t14891.cljs$lang$type = true;
planjure.components.toolbar.t14891.cljs$lang$ctorStr = "planjure.components.toolbar/t14891";
planjure.components.toolbar.t14891.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t14891");
});
planjure.components.toolbar.t14891.prototype.om$core$IRenderState$ = true;
planjure.components.toolbar.t14891.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14894){var self__ = this;
var map__14895 = p__14894;var map__14895__$1 = ((cljs.core.seq_QMARK_.call(null,map__14895))?cljs.core.apply.call(null,cljs.core.hash_map,map__14895):map__14895);var configuration_chan = cljs.core.get.call(null,map__14895__$1,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var ___$1 = this;var selected_size = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(self__.app_state);return cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4160__auto__ = (function iter__14896(s__14897){return (new cljs.core.LazySeq(null,(function (){var s__14897__$1 = s__14897;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14897__$1);if(temp__4092__auto__)
{var s__14897__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14897__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14897__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14899 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14898 = 0;while(true){
if((i__14898 < size__4159__auto__))
{var vec__14904 = cljs.core._nth.call(null,c__4158__auto__,i__14898);var size_name = cljs.core.nth.call(null,vec__14904,0,null);var map__14905 = cljs.core.nth.call(null,vec__14904,1,null);var map__14905__$1 = ((cljs.core.seq_QMARK_.call(null,map__14905))?cljs.core.apply.call(null,cljs.core.hash_map,map__14905):map__14905);var size_opts = map__14905__$1;var text = cljs.core.get.call(null,map__14905__$1,new cljs.core.Keyword(null,"text","text",1017460895));cljs.core.chunk_append.call(null,b__14899,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)));
{
var G__14908 = (i__14898 + 1);
i__14898 = G__14908;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14899),iter__14896.call(null,cljs.core.chunk_rest.call(null,s__14897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14899),null);
}
} else
{var vec__14906 = cljs.core.first.call(null,s__14897__$2);var size_name = cljs.core.nth.call(null,vec__14906,0,null);var map__14907 = cljs.core.nth.call(null,vec__14906,1,null);var map__14907__$1 = ((cljs.core.seq_QMARK_.call(null,map__14907))?cljs.core.apply.call(null,cljs.core.hash_map,map__14907):map__14907);var size_opts = map__14907__$1;var text = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"text","text",1017460895));return cljs.core.cons.call(null,om.core.build.call(null,planjure.components.editor.item_selector_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),configuration_chan,new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195),new cljs.core.Keyword(null,"world-size","world-size",1425687758),new cljs.core.Keyword(null,"tool-name","tool-name",551576850),size_name,new cljs.core.Keyword(null,"tool-text","tool-text",551759796),text], null)], null)),iter__14896.call(null,cljs.core.rest.call(null,s__14897__$2)));
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
planjure.components.toolbar.t14891.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t14891.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t14891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14893){var self__ = this;
var _14893__$1 = this;return self__.meta14892;
});
planjure.components.toolbar.t14891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14893,meta14892__$1){var self__ = this;
var _14893__$1 = this;return (new planjure.components.toolbar.t14891(self__.owner,self__.app_state,self__.size_component,meta14892__$1));
});
planjure.components.toolbar.__GT_t14891 = (function __GT_t14891(owner__$1,app_state__$1,size_component__$1,meta14892){return (new planjure.components.toolbar.t14891(owner__$1,app_state__$1,size_component__$1,meta14892));
});
}
return (new planjure.components.toolbar.t14891(owner,app_state,size_component,null));
});
planjure.components.toolbar.statistics_component = (function statistics_component(app_state,owner){if(typeof planjure.components.toolbar.t14912 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t14912 = (function (owner,app_state,statistics_component,meta14913){
this.owner = owner;
this.app_state = app_state;
this.statistics_component = statistics_component;
this.meta14913 = meta14913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t14912.cljs$lang$type = true;
planjure.components.toolbar.t14912.cljs$lang$ctorStr = "planjure.components.toolbar/t14912";
planjure.components.toolbar.t14912.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t14912");
});
planjure.components.toolbar.t14912.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t14912.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": new cljs.core.Keyword(null,"running-time","running-time",1807946125)},React.DOM.div(null,[cljs.core.str((self__.app_state.call(null,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368)) / 1000)),cljs.core.str(" seconds")].join('')),React.DOM.div(null,cljs.core.name.call(null,self__.app_state.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580))))));
});
planjure.components.toolbar.t14912.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t14912.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t14912.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t14912.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
planjure.components.toolbar.t14912.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t14912.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
planjure.components.toolbar.t14912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14914){var self__ = this;
var _14914__$1 = this;return self__.meta14913;
});
planjure.components.toolbar.t14912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14914,meta14913__$1){var self__ = this;
var _14914__$1 = this;return (new planjure.components.toolbar.t14912(self__.owner,self__.app_state,self__.statistics_component,meta14913__$1));
});
planjure.components.toolbar.__GT_t14912 = (function __GT_t14912(owner__$1,app_state__$1,statistics_component__$1,meta14913){return (new planjure.components.toolbar.t14912(owner__$1,app_state__$1,statistics_component__$1,meta14913));
});
}
return (new planjure.components.toolbar.t14912(owner,app_state,statistics_component,null));
});
planjure.components.toolbar.toolbar_component = (function toolbar_component(app_state,owner){if(typeof planjure.components.toolbar.t15031 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.toolbar.t15031 = (function (owner,app_state,toolbar_component,meta15032){
this.owner = owner;
this.app_state = app_state;
this.toolbar_component = toolbar_component;
this.meta15032 = meta15032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.toolbar.t15031.cljs$lang$type = true;
planjure.components.toolbar.t15031.cljs$lang$ctorStr = "planjure.components.toolbar/t15031";
planjure.components.toolbar.t15031.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.toolbar/t15031");
});
planjure.components.toolbar.t15031.prototype.om$core$IRender$ = true;
planjure.components.toolbar.t15031.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.div({"className": "section-title"},"World"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.size_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795))], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Editor"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.editor.editor_component,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795))], null)], null)))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Algorithm"),React.DOM.div({"className": "section-wrapper"},React.DOM.div(null,cljs.core.apply.call(null,om.dom.select,{"onChange": (function (p1__14915_SHARP_){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.keyword.call(null,p1__14915_SHARP_.target.value)], null));
}), "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(self__.app_state)), "id": "algorithm"},cljs.core.map.call(null,(function (p1__14916_SHARP_){return om.dom.option.call(null,{"value": cljs.core.name.call(null,cljs.core.first.call(null,p1__14916_SHARP_))},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__14916_SHARP_)));
}),planjure.components.toolbar.algorithms)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016)),"plan!");
})},"Plan Path")))),React.DOM.div(null,React.DOM.div({"className": "section-title"},"Statistics"),React.DOM.div({"className": "section-wrapper"},om.core.build.call(null,planjure.components.toolbar.statistics_component,self__.app_state))));
});
planjure.components.toolbar.t15031.prototype.om$core$IDidMount$ = true;
planjure.components.toolbar.t15031.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
planjure.components.toolbar.t15031.prototype.om$core$IWillMount$ = true;
planjure.components.toolbar.t15031.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var configuration_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_15105){var state_val_15106 = (state_15105[1]);if((state_val_15106 === 1))
{var state_15105__$1 = state_15105;var statearr_15107_15145 = state_15105__$1;(statearr_15107_15145[2] = null);
(statearr_15107_15145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 2))
{var state_15105__$1 = state_15105;if(true)
{var statearr_15108_15146 = state_15105__$1;(statearr_15108_15146[1] = 4);
} else
{var statearr_15109_15147 = state_15105__$1;(statearr_15109_15147[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 3))
{var inst_15103 = (state_15105[2]);var state_15105__$1 = state_15105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15105__$1,inst_15103);
} else
{if((state_val_15106 === 4))
{var inst_15037 = [planjure.components.toolbar.plan_chan,configuration_chan];var inst_15038 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15037,null));var state_15105__$1 = state_15105;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15105__$1,7,inst_15038);
} else
{if((state_val_15106 === 5))
{var state_15105__$1 = state_15105;var statearr_15110_15148 = state_15105__$1;(statearr_15110_15148[2] = null);
(statearr_15110_15148[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 6))
{var inst_15101 = (state_15105[2]);var state_15105__$1 = state_15105;var statearr_15111_15149 = state_15105__$1;(statearr_15111_15149[2] = inst_15101);
(statearr_15111_15149[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 7))
{var inst_15042 = (state_15105[7]);var inst_15041 = (state_15105[8]);var inst_15040 = (state_15105[2]);var inst_15041__$1 = cljs.core.nth.call(null,inst_15040,0,null);var inst_15042__$1 = cljs.core.nth.call(null,inst_15040,1,null);var inst_15043 = cljs.core.println.call(null,inst_15041__$1);var inst_15044 = cljs.core._EQ_.call(null,inst_15042__$1,planjure.components.toolbar.plan_chan);var state_15105__$1 = (function (){var statearr_15112 = state_15105;(statearr_15112[7] = inst_15042__$1);
(statearr_15112[8] = inst_15041__$1);
(statearr_15112[9] = inst_15043);
return statearr_15112;
})();if(inst_15044)
{var statearr_15113_15150 = state_15105__$1;(statearr_15113_15150[1] = 8);
} else
{var statearr_15114_15151 = state_15105__$1;(statearr_15114_15151[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 8))
{var inst_15046 = cljs.core.deref.call(null,self__.app_state);var inst_15047 = new cljs.core.Keyword(null,"algo","algo",1016901061).cljs$core$IFn$_invoke$arity$1(inst_15046);var inst_15048 = planjure.components.toolbar.algorithms.call(null,inst_15047);var inst_15049 = inst_15048.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514));var inst_15050 = cljs.core.deref.call(null,self__.app_state);var inst_15051 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_15050);var inst_15052 = cljs.core.deref.call(null,self__.app_state);var inst_15053 = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(inst_15052);var inst_15054 = inst_15049.call(null,inst_15051,inst_15053);var inst_15055 = inst_15054.call(null,new cljs.core.Keyword(null,"time","time",1017464383));var inst_15056 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"last-run-time","last-run-time",2549417368),inst_15055);var inst_15057 = inst_15054.call(null,new cljs.core.Keyword(null,"return","return",4374474914));var inst_15058 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"path","path",1017337751),inst_15057);var state_15105__$1 = (function (){var statearr_15115 = state_15105;(statearr_15115[10] = inst_15056);
return statearr_15115;
})();var statearr_15116_15152 = state_15105__$1;(statearr_15116_15152[2] = inst_15058);
(statearr_15116_15152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 9))
{var state_15105__$1 = state_15105;var statearr_15117_15153 = state_15105__$1;(statearr_15117_15153[2] = null);
(statearr_15117_15153[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 10))
{var inst_15042 = (state_15105[7]);var inst_15061 = (state_15105[2]);var inst_15062 = cljs.core._EQ_.call(null,inst_15042,configuration_chan);var state_15105__$1 = (function (){var statearr_15118 = state_15105;(statearr_15118[11] = inst_15061);
return statearr_15118;
})();if(inst_15062)
{var statearr_15119_15154 = state_15105__$1;(statearr_15119_15154[1] = 11);
} else
{var statearr_15120_15155 = state_15105__$1;(statearr_15120_15155[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 11))
{var inst_15041 = (state_15105[8]);var inst_15064 = new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15065 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"algorithm","algorithm",1239394273),inst_15064);var state_15105__$1 = state_15105;if(inst_15065)
{var statearr_15121_15156 = state_15105__$1;(statearr_15121_15156[1] = 14);
} else
{var statearr_15122_15157 = state_15105__$1;(statearr_15122_15157[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 12))
{var state_15105__$1 = state_15105;var statearr_15123_15158 = state_15105__$1;(statearr_15123_15158[2] = null);
(statearr_15123_15158[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 13))
{var inst_15097 = (state_15105[2]);var state_15105__$1 = (function (){var statearr_15124 = state_15105;(statearr_15124[12] = inst_15097);
return statearr_15124;
})();var statearr_15125_15159 = state_15105__$1;(statearr_15125_15159[2] = null);
(statearr_15125_15159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 14))
{var inst_15041 = (state_15105[8]);var inst_15067 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15068 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"algo","algo",1016901061),inst_15067);var state_15105__$1 = state_15105;var statearr_15126_15160 = state_15105__$1;(statearr_15126_15160[2] = inst_15068);
(statearr_15126_15160[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 15))
{var inst_15041 = (state_15105[8]);var inst_15070 = new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15071 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tool-selector","tool-selector",2600946662),inst_15070);var state_15105__$1 = state_15105;if(inst_15071)
{var statearr_15127_15161 = state_15105__$1;(statearr_15127_15161[1] = 17);
} else
{var statearr_15128_15162 = state_15105__$1;(statearr_15128_15162[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 16))
{var inst_15094 = (state_15105[2]);var state_15105__$1 = state_15105;var statearr_15129_15163 = state_15105__$1;(statearr_15129_15163[2] = inst_15094);
(statearr_15129_15163[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 17))
{var inst_15041 = (state_15105[8]);var inst_15073 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15074 = cljs.core._EQ_.call(null,inst_15073,new cljs.core.Keyword(null,"world-size","world-size",1425687758));var state_15105__$1 = state_15105;if(inst_15074)
{var statearr_15130_15164 = state_15105__$1;(statearr_15130_15164[1] = 20);
} else
{var statearr_15131_15165 = state_15105__$1;(statearr_15131_15165[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 18))
{var state_15105__$1 = state_15105;var statearr_15132_15166 = state_15105__$1;(statearr_15132_15166[2] = null);
(statearr_15132_15166[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 19))
{var inst_15092 = (state_15105[2]);var state_15105__$1 = state_15105;var statearr_15133_15167 = state_15105__$1;(statearr_15133_15167[2] = inst_15092);
(statearr_15133_15167[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 20))
{var inst_15041 = (state_15105[8]);var inst_15076 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15077 = cljs.core.deref.call(null,self__.app_state);var inst_15078 = [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),inst_15076,new cljs.core.Keyword(null,"size","size",1017434995)];var inst_15079 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15078,null));var inst_15080 = cljs.core.get_in.call(null,inst_15077,inst_15079);var inst_15081 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world-size","world-size",1425687758),inst_15076);var inst_15082 = planjure.plan.random_world.call(null,inst_15080,inst_15080);var inst_15083 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"world","world",1127223044),inst_15082);var state_15105__$1 = (function (){var statearr_15134 = state_15105;(statearr_15134[13] = inst_15081);
return statearr_15134;
})();var statearr_15135_15168 = state_15105__$1;(statearr_15135_15168[2] = inst_15083);
(statearr_15135_15168[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 21))
{var inst_15041 = (state_15105[8]);var inst_15085 = new cljs.core.Keyword(null,"tool-kind","tool-kind",551495195).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15086 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_15041);var inst_15087 = om.core.update_BANG_.call(null,self__.app_state,inst_15085,inst_15086);var state_15105__$1 = state_15105;var statearr_15136_15169 = state_15105__$1;(statearr_15136_15169[2] = inst_15087);
(statearr_15136_15169[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15106 === 22))
{var inst_15089 = (state_15105[2]);var state_15105__$1 = state_15105;var statearr_15137_15170 = state_15105__$1;(statearr_15137_15170[2] = inst_15089);
(statearr_15137_15170[1] = 19);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_15141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15141[0] = state_machine__6824__auto__);
(statearr_15141[1] = 1);
return statearr_15141;
});
var state_machine__6824__auto____1 = (function (state_15105){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_15105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e15142){if((e15142 instanceof Object))
{var ex__6827__auto__ = e15142;var statearr_15143_15171 = state_15105;(statearr_15143_15171[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15172 = state_15105;
state_15105 = G__15172;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_15105){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_15105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_15144 = f__6839__auto__.call(null);(statearr_15144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_15144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.toolbar.t15031.prototype.om$core$IInitState$ = true;
planjure.components.toolbar.t15031.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plan-chan","plan-chan",3069751016),planjure.components.toolbar.plan_chan,new cljs.core.Keyword(null,"configuration-chan","configuration-chan",1773460795),cljs.core.async.chan.call(null)], null);
});
planjure.components.toolbar.t15031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15033){var self__ = this;
var _15033__$1 = this;return self__.meta15032;
});
planjure.components.toolbar.t15031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15033,meta15032__$1){var self__ = this;
var _15033__$1 = this;return (new planjure.components.toolbar.t15031(self__.owner,self__.app_state,self__.toolbar_component,meta15032__$1));
});
planjure.components.toolbar.__GT_t15031 = (function __GT_t15031(owner__$1,app_state__$1,toolbar_component__$1,meta15032){return (new planjure.components.toolbar.t15031(owner__$1,app_state__$1,toolbar_component__$1,meta15032));
});
}
return (new planjure.components.toolbar.t15031(owner,app_state,toolbar_component,null));
});

//# sourceMappingURL=toolbar.js.map