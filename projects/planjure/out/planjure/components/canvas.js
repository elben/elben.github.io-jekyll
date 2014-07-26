// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.components.canvas');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('planjure.plan');
goog.require('planjure.history');
goog.require('om.dom');
goog.require('om.core');
goog.require('planjure.appstate');
goog.require('om.core');
goog.require('planjure.history');
goog.require('planjure.appstate');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('planjure.plan');
planjure.components.canvas.mouse_chan = cljs.core.async.chan.call(null);
planjure.components.canvas.color_mapping = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#09738A","#adc5ad","#c6c294","#7c9a53","#578633","#3b621a","#2d5010","#26470b"], null);
planjure.components.canvas.weight_to_hex_color = (function weight_to_hex_color(weight){return planjure.components.canvas.color_mapping.call(null,(weight - 1));
});
planjure.components.canvas.get_selected_tile_size = (function get_selected_tile_size(){var tile_size_name = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),tile_size_name,new cljs.core.Keyword(null,"tile-size-px","tile-size-px",4710917799)], null));return value;
});
planjure.components.canvas.draw_rect_tile = (function() {
var draw_rect_tile = null;
var draw_rect_tile__4 = (function (context,row,col,color){return draw_rect_tile.call(null,context,row,col,color,planjure.components.canvas.get_selected_tile_size.call(null));
});
var draw_rect_tile__5 = (function (context,row,col,color,size){var y = (row * planjure.components.canvas.get_selected_tile_size.call(null));var x = (col * planjure.components.canvas.get_selected_tile_size.call(null));context.fillStyle = color;
return context.fillRect(x,y,size,size);
});
draw_rect_tile = function(context,row,col,color,size){
switch(arguments.length){
case 4:
return draw_rect_tile__4.call(this,context,row,col,color);
case 5:
return draw_rect_tile__5.call(this,context,row,col,color,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_rect_tile.cljs$core$IFn$_invoke$arity$4 = draw_rect_tile__4;
draw_rect_tile.cljs$core$IFn$_invoke$arity$5 = draw_rect_tile__5;
return draw_rect_tile;
})()
;
planjure.components.canvas.draw_circle = (function() {
var draw_circle = null;
var draw_circle__4 = (function (context,row,col,color){return draw_circle.call(null,context,row,col,color,planjure.components.canvas.get_selected_tile_size.call(null));
});
var draw_circle__5 = (function (context,row,col,color,size){var radius = (size / 2);var y = ((row * size) + radius);var x = ((col * size) + radius);context.fillStyle = color;
context.beginPath();
context.arc(x,y,radius,0,(2 * Math.PI),false);
context.closePath();
context.strokeStyle = color;
return context.stroke();
});
draw_circle = function(context,row,col,color,size){
switch(arguments.length){
case 4:
return draw_circle__4.call(this,context,row,col,color);
case 5:
return draw_circle__5.call(this,context,row,col,color,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_circle.cljs$core$IFn$_invoke$arity$4 = draw_circle__4;
draw_circle.cljs$core$IFn$_invoke$arity$5 = draw_circle__5;
return draw_circle;
})()
;
planjure.components.canvas.draw_start_finish_marker = (function draw_start_finish_marker(context,row,col){var color = "#ff0000";return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color);
});
planjure.components.canvas.draw_path_market = (function draw_path_market(context,row,col){return null;
});
planjure.components.canvas.draw_path = (function draw_path(context,path){var seq__68711 = cljs.core.seq.call(null,path);var chunk__68712 = null;var count__68713 = 0;var i__68714 = 0;while(true){
if((i__68714 < count__68713))
{var node = cljs.core._nth.call(null,chunk__68712,i__68714);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00");
{
var G__68715 = seq__68711;
var G__68716 = chunk__68712;
var G__68717 = count__68713;
var G__68718 = (i__68714 + 1);
seq__68711 = G__68715;
chunk__68712 = G__68716;
count__68713 = G__68717;
i__68714 = G__68718;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__68711);if(temp__4092__auto__)
{var seq__68711__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68711__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__68711__$1);{
var G__68719 = cljs.core.chunk_rest.call(null,seq__68711__$1);
var G__68720 = c__4191__auto__;
var G__68721 = cljs.core.count.call(null,c__4191__auto__);
var G__68722 = 0;
seq__68711 = G__68719;
chunk__68712 = G__68720;
count__68713 = G__68721;
i__68714 = G__68722;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__68711__$1);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00");
{
var G__68723 = cljs.core.next.call(null,seq__68711__$1);
var G__68724 = null;
var G__68725 = 0;
var G__68726 = 0;
seq__68711 = G__68723;
chunk__68712 = G__68724;
count__68713 = G__68725;
i__68714 = G__68726;
continue;
}
}
} else
{return null;
}
}
break;
}
});
planjure.components.canvas.draw_tile = (function draw_tile(context,row,col,weight){var color = planjure.components.canvas.weight_to_hex_color.call(null,weight);return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color);
});
planjure.components.canvas.refresh_world = (function refresh_world(app_state,owner,dom_node_ref){var canvas = om.core.get_node.call(null,owner,dom_node_ref);var context = canvas.getContext("2d");var world = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(app_state);var setup = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(app_state);canvas.width = canvas.width;
var n__4291__auto___68731 = cljs.core.count.call(null,world);var row_68732 = 0;while(true){
if((row_68732 < n__4291__auto___68731))
{var n__4291__auto___68733__$1 = cljs.core.count.call(null,cljs.core.nth.call(null,world,row_68732));var col_68734 = 0;while(true){
if((col_68734 < n__4291__auto___68733__$1))
{planjure.components.canvas.draw_tile.call(null,context,row_68732,col_68734,cljs.core.nth.call(null,cljs.core.nth.call(null,world,row_68732),col_68734));
{
var G__68735 = (col_68734 + 1);
col_68734 = G__68735;
continue;
}
} else
{}
break;
}
{
var G__68736 = (row_68732 + 1);
row_68732 = G__68736;
continue;
}
} else
{}
break;
}
var vec__68729_68737 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"start","start",1123661780)], null));var start_row_68738 = cljs.core.nth.call(null,vec__68729_68737,0,null);var start_col_68739 = cljs.core.nth.call(null,vec__68729_68737,1,null);var vec__68730_68740 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)], null));var finish_row_68741 = cljs.core.nth.call(null,vec__68730_68740,0,null);var finish_col_68742 = cljs.core.nth.call(null,vec__68730_68740,1,null);planjure.components.canvas.draw_start_finish_marker.call(null,context,start_row_68738,start_col_68739);
planjure.components.canvas.draw_start_finish_marker.call(null,context,finish_row_68741,finish_col_68742);
return planjure.components.canvas.draw_path.call(null,context,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(app_state));
});
planjure.components.canvas.mouse_pos_at = (function mouse_pos_at(canvas,e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),e.offsetX,new cljs.core.Keyword(null,"y","y",1013904363),e.offsetY], null);
});
planjure.components.canvas.tile_pos_at = (function tile_pos_at(canvas,e){var map__68744 = planjure.components.canvas.mouse_pos_at.call(null,canvas,e);var map__68744__$1 = ((cljs.core.seq_QMARK_.call(null,map__68744))?cljs.core.apply.call(null,cljs.core.hash_map,map__68744):map__68744);var y = cljs.core.get.call(null,map__68744__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__68744__$1,new cljs.core.Keyword(null,"x","x",1013904362));var tile_size = planjure.components.canvas.get_selected_tile_size.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((x / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})(),new cljs.core.Keyword(null,"y","y",1013904363),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((y / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})()], null);
});
planjure.components.canvas.update_world_BANG_ = (function update_world_BANG_(app_state,x,y,incr){var world = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var row = world.call(null,y);var cost = row.call(null,x);var new_cost = (function (){var x__3750__auto__ = 1;var y__3751__auto__ = (function (){var x__3757__auto__ = (incr + cost);var y__3758__auto__ = 8;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})();return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})();var new_row = cljs.core.assoc.call(null,row,x,new_cost);var new_world = cljs.core.assoc.call(null,world,y,new_row);return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"world","world",1127223044),new_world);
});
planjure.components.canvas.erase_at = (function erase_at(app_state,tile_pos){var map__68746 = tile_pos;var map__68746__$1 = ((cljs.core.seq_QMARK_.call(null,map__68746))?cljs.core.apply.call(null,cljs.core.hash_map,map__68746):map__68746);var y = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,-1);
});
planjure.components.canvas.paint_at = (function paint_at(app_state,tile_pos){var map__68748 = tile_pos;var map__68748__$1 = ((cljs.core.seq_QMARK_.call(null,map__68748))?cljs.core.apply.call(null,cljs.core.hash_map,map__68748):map__68748);var y = cljs.core.get.call(null,map__68748__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__68748__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,1);
});
planjure.components.canvas.world_canvas_component = (function world_canvas_component(app_state,owner){if(typeof planjure.components.canvas.t68831 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.canvas.t68831 = (function (owner,app_state,world_canvas_component,meta68832){
this.owner = owner;
this.app_state = app_state;
this.world_canvas_component = world_canvas_component;
this.meta68832 = meta68832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.canvas.t68831.cljs$lang$type = true;
planjure.components.canvas.t68831.cljs$lang$ctorStr = "planjure.components.canvas/t68831";
planjure.components.canvas.t68831.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.canvas/t68831");
});
planjure.components.canvas.t68831.prototype.om$core$IRender$ = true;
planjure.components.canvas.t68831.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.canvas({"ref": "world-canvas-ref", "className": "world-canvas", "height": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"height","height",4087841945)], null)), "width": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"width","width",1127031096)], null)), "id": "world-canvas"});
});
planjure.components.canvas.t68831.prototype.om$core$IDidUpdate$ = true;
planjure.components.canvas.t68831.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (a,b,c){var self__ = this;
var a__$1 = this;return planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
});
planjure.components.canvas.t68831.prototype.om$core$IDidMount$ = true;
planjure.components.canvas.t68831.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
var world_canvas_68910 = om.core.get_node.call(null,self__.owner,"world-canvas-ref");goog.events.listen(world_canvas_68910,"mousedown",(function (p1__68749_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__68749_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)], null));
}));
goog.events.listen(world_canvas_68910,"mouseup",(function (p1__68750_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__68750_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146)], null));
}));
goog.events.listen(world_canvas_68910,"mousemove",(function (p1__68751_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__68751_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168)], null));
}));
var canvas = om.core.get_node.call(null,self__.owner,"world-canvas-ref");var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_68874){var state_val_68875 = (state_68874[1]);if((state_val_68875 === 1))
{var state_68874__$1 = state_68874;var statearr_68876_68911 = state_68874__$1;(statearr_68876_68911[2] = null);
(statearr_68876_68911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 2))
{var state_68874__$1 = state_68874;if(true)
{var statearr_68877_68912 = state_68874__$1;(statearr_68877_68912[1] = 4);
} else
{var statearr_68878_68913 = state_68874__$1;(statearr_68878_68913[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 3))
{var inst_68872 = (state_68874[2]);var state_68874__$1 = state_68874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68874__$1,inst_68872);
} else
{if((state_val_68875 === 4))
{var state_68874__$1 = state_68874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68874__$1,7,mouse_chan);
} else
{if((state_val_68875 === 5))
{var state_68874__$1 = state_68874;var statearr_68879_68914 = state_68874__$1;(statearr_68879_68914[2] = null);
(statearr_68879_68914[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 6))
{var inst_68870 = (state_68874[2]);var state_68874__$1 = state_68874;var statearr_68880_68915 = state_68874__$1;(statearr_68880_68915[2] = inst_68870);
(statearr_68880_68915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 7))
{var inst_68837 = (state_68874[7]);var inst_68837__$1 = (state_68874[2]);var inst_68864 = new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191).cljs$core$IFn$_invoke$arity$1(inst_68837__$1);var state_68874__$1 = (function (){var statearr_68881 = state_68874;(statearr_68881[7] = inst_68837__$1);
return statearr_68881;
})();var G__68882_68916 = inst_68864;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),G__68882_68916))
{var statearr_68883_68917 = state_68874__$1;(statearr_68883_68917[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),G__68882_68916))
{var statearr_68884_68918 = state_68874__$1;(statearr_68884_68918[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),G__68882_68916))
{var statearr_68885_68919 = state_68874__$1;(statearr_68885_68919[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_68864)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 8))
{var inst_68866 = (state_68874[2]);var state_68874__$1 = (function (){var statearr_68886 = state_68874;(statearr_68886[8] = inst_68866);
return statearr_68886;
})();var statearr_68887_68920 = state_68874__$1;(statearr_68887_68920[2] = null);
(statearr_68887_68920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 9))
{var inst_68838 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_68839 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_68838);var inst_68840 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),true);var inst_68841 = planjure.history.push_world.call(null,inst_68839);var state_68874__$1 = (function (){var statearr_68888 = state_68874;(statearr_68888[9] = inst_68840);
return statearr_68888;
})();var statearr_68889_68921 = state_68874__$1;(statearr_68889_68921[2] = inst_68841);
(statearr_68889_68921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 10))
{var inst_68843 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_68844 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_68843);var inst_68845 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),false);var state_68874__$1 = (function (){var statearr_68890 = state_68874;(statearr_68890[10] = inst_68844);
return statearr_68890;
})();var statearr_68891_68922 = state_68874__$1;(statearr_68891_68922[2] = inst_68845);
(statearr_68891_68922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 11))
{var inst_68847 = cljs.core.deref.call(null,self__.app_state);var inst_68848 = new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272).cljs$core$IFn$_invoke$arity$1(inst_68847);var state_68874__$1 = state_68874;if(cljs.core.truth_(inst_68848))
{var statearr_68892_68923 = state_68874__$1;(statearr_68892_68923[1] = 12);
} else
{var statearr_68893_68924 = state_68874__$1;(statearr_68893_68924[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 12))
{var inst_68837 = (state_68874[7]);var inst_68850 = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(inst_68837);var inst_68851 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_68850);var inst_68856 = cljs.core.deref.call(null,self__.app_state);var inst_68857 = new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(inst_68856);var state_68874__$1 = (function (){var statearr_68894 = state_68874;(statearr_68894[11] = inst_68851);
return statearr_68894;
})();var G__68895_68925 = inst_68857;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580),G__68895_68925))
{var statearr_68896_68926 = state_68874__$1;(statearr_68896_68926[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"eraser","eraser",4013733374),G__68895_68925))
{var statearr_68897_68927 = state_68874__$1;(statearr_68897_68927[1] = 16);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_68857)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 13))
{var state_68874__$1 = state_68874;var statearr_68898_68928 = state_68874__$1;(statearr_68898_68928[2] = null);
(statearr_68898_68928[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 14))
{var inst_68862 = (state_68874[2]);var state_68874__$1 = state_68874;var statearr_68899_68929 = state_68874__$1;(statearr_68899_68929[2] = inst_68862);
(statearr_68899_68929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 15))
{var inst_68859 = (state_68874[2]);var state_68874__$1 = state_68874;var statearr_68900_68930 = state_68874__$1;(statearr_68900_68930[2] = inst_68859);
(statearr_68900_68930[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 16))
{var inst_68851 = (state_68874[11]);var inst_68852 = planjure.components.canvas.erase_at.call(null,self__.app_state,inst_68851);var state_68874__$1 = state_68874;var statearr_68901_68931 = state_68874__$1;(statearr_68901_68931[2] = inst_68852);
(statearr_68901_68931[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68875 === 17))
{var inst_68851 = (state_68874[11]);var inst_68854 = planjure.components.canvas.paint_at.call(null,self__.app_state,inst_68851);var state_68874__$1 = state_68874;var statearr_68902_68932 = state_68874__$1;(statearr_68902_68932[2] = inst_68854);
(statearr_68902_68932[1] = 15);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_68906 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_68906[0] = state_machine__6824__auto__);
(statearr_68906[1] = 1);
return statearr_68906;
});
var state_machine__6824__auto____1 = (function (state_68874){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_68874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e68907){if((e68907 instanceof Object))
{var ex__6827__auto__ = e68907;var statearr_68908_68933 = state_68874;(statearr_68908_68933[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68934 = state_68874;
state_68874 = G__68934;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_68874){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_68874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_68909 = f__6839__auto__.call(null);(statearr_68909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_68909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.canvas.t68831.prototype.om$core$IInitState$ = true;
planjure.components.canvas.t68831.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460),planjure.components.canvas.mouse_chan], null);
});
planjure.components.canvas.t68831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68833){var self__ = this;
var _68833__$1 = this;return self__.meta68832;
});
planjure.components.canvas.t68831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68833,meta68832__$1){var self__ = this;
var _68833__$1 = this;return (new planjure.components.canvas.t68831(self__.owner,self__.app_state,self__.world_canvas_component,meta68832__$1));
});
planjure.components.canvas.__GT_t68831 = (function __GT_t68831(owner__$1,app_state__$1,world_canvas_component__$1,meta68832){return (new planjure.components.canvas.t68831(owner__$1,app_state__$1,world_canvas_component__$1,meta68832));
});
}
return (new planjure.components.canvas.t68831(owner,app_state,world_canvas_component,null));
});

//# sourceMappingURL=canvas.js.map