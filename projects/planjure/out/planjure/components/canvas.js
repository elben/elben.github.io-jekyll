// Compiled by ClojureScript 0.0-2277
goog.provide('planjure.components.canvas');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.components.toolbar');
goog.require('om.dom');
goog.require('om.dom');
goog.require('planjure.history');
goog.require('cljs.core.async');
goog.require('planjure.utils');
goog.require('goog.events');
goog.require('planjure.history');
goog.require('planjure.appstate');
goog.require('planjure.appstate');
goog.require('om.core');
goog.require('om.core');
goog.require('planjure.utils');
goog.require('goog.events');
goog.require('planjure.components.toolbar');
planjure.components.canvas.update_world_time = cljs.core.atom.call(null,(0));
planjure.components.canvas.canvas_redraw_time = cljs.core.atom.call(null,(0));
planjure.components.canvas.mouse_chan = cljs.core.async.chan.call(null);
planjure.components.canvas.color_mapping = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#09738A","#adc5ad","#c6c294","#7c9a53","#578633","#3b621a","#2d5010","#26470b"], null);
planjure.components.canvas.weight_to_hex_color = (function weight_to_hex_color(weight){return planjure.components.canvas.color_mapping.call(null,(weight - (1)));
});
planjure.components.canvas.get_selected_tile_size = (function get_selected_tile_size(){var tile_size_name = new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-size-options","world-size-options",-1738219810),tile_size_name,new cljs.core.Keyword(null,"tile-size-px","tile-size-px",473390826)], null));return value;
});
planjure.components.canvas.draw_rect_tile = (function draw_rect_tile(context,row,col,color,size){var y = (row * size);var x = (col * size);context.fillStyle = color;
return context.fillRect(x,y,size,size);
});
planjure.components.canvas.draw_circle = (function draw_circle(context,row,col,color,size){var radius = (size / (2));var y = ((row * size) + radius);var x = ((col * size) + radius);context.fillStyle = color;
context.beginPath();
context.arc(x,y,radius,(0),((2) * Math.PI),false);
context.closePath();
context.strokeStyle = color;
return context.stroke();
});
planjure.components.canvas.draw_start_finish_marker = (function draw_start_finish_marker(context,row,col,size){var color = "#d02426";return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color,size);
});
planjure.components.canvas.draw_path = (function draw_path(context,path,size){var seq__10017 = cljs.core.seq.call(null,path);var chunk__10018 = null;var count__10019 = (0);var i__10020 = (0);while(true){
if((i__10020 < count__10019))
{var node = cljs.core._nth.call(null,chunk__10018,i__10020);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,(0)),cljs.core.nth.call(null,node,(1)),"#00ff00",size);
{
var G__10021 = seq__10017;
var G__10022 = chunk__10018;
var G__10023 = count__10019;
var G__10024 = (i__10020 + (1));
seq__10017 = G__10021;
chunk__10018 = G__10022;
count__10019 = G__10023;
i__10020 = G__10024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10017);if(temp__4126__auto__)
{var seq__10017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10017__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__10017__$1);{
var G__10025 = cljs.core.chunk_rest.call(null,seq__10017__$1);
var G__10026 = c__4299__auto__;
var G__10027 = cljs.core.count.call(null,c__4299__auto__);
var G__10028 = (0);
seq__10017 = G__10025;
chunk__10018 = G__10026;
count__10019 = G__10027;
i__10020 = G__10028;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__10017__$1);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,(0)),cljs.core.nth.call(null,node,(1)),"#00ff00",size);
{
var G__10029 = cljs.core.next.call(null,seq__10017__$1);
var G__10030 = null;
var G__10031 = (0);
var G__10032 = (0);
seq__10017 = G__10029;
chunk__10018 = G__10030;
count__10019 = G__10031;
i__10020 = G__10032;
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
planjure.components.canvas.draw_visited = (function draw_visited(context,visited,size){var width = (2);var pos_start = ((function (width){
return (function (n){return (((n * size) + (size / (2))) - (1));
});})(width))
;var seq__10037 = cljs.core.seq.call(null,visited);var chunk__10038 = null;var count__10039 = (0);var i__10040 = (0);while(true){
if((i__10040 < count__10039))
{var node = cljs.core._nth.call(null,chunk__10038,i__10040);var y_10041 = pos_start.call(null,cljs.core.first.call(null,node));var x_10042 = pos_start.call(null,cljs.core.second.call(null,node));context.fillStyle = "rgba(255, 255, 255, 0.5)";
context.fillRect(x_10042,y_10041,width,width);
{
var G__10043 = seq__10037;
var G__10044 = chunk__10038;
var G__10045 = count__10039;
var G__10046 = (i__10040 + (1));
seq__10037 = G__10043;
chunk__10038 = G__10044;
count__10039 = G__10045;
i__10040 = G__10046;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10037);if(temp__4126__auto__)
{var seq__10037__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10037__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__10037__$1);{
var G__10047 = cljs.core.chunk_rest.call(null,seq__10037__$1);
var G__10048 = c__4299__auto__;
var G__10049 = cljs.core.count.call(null,c__4299__auto__);
var G__10050 = (0);
seq__10037 = G__10047;
chunk__10038 = G__10048;
count__10039 = G__10049;
i__10040 = G__10050;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__10037__$1);var y_10051 = pos_start.call(null,cljs.core.first.call(null,node));var x_10052 = pos_start.call(null,cljs.core.second.call(null,node));context.fillStyle = "rgba(255, 255, 255, 0.5)";
context.fillRect(x_10052,y_10051,width,width);
{
var G__10053 = cljs.core.next.call(null,seq__10037__$1);
var G__10054 = null;
var G__10055 = (0);
var G__10056 = (0);
seq__10037 = G__10053;
chunk__10038 = G__10054;
count__10039 = G__10055;
i__10040 = G__10056;
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
planjure.components.canvas.draw_tile = (function draw_tile(context,row,col,weight,size){var color = planjure.components.canvas.weight_to_hex_color.call(null,weight);return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color,size);
});
planjure.components.canvas.refresh_world = (function refresh_world(app_state,owner,dom_node_ref){var canvas = om.core.get_node.call(null,owner,dom_node_ref);var context = canvas.getContext("2d");var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(app_state);var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(app_state);var size = planjure.components.canvas.get_selected_tile_size.call(null);canvas.width = canvas.width;
var n__4399__auto___10061 = cljs.core.count.call(null,world);var r_10062 = (0);while(true){
if((r_10062 < n__4399__auto___10061))
{var row_10063 = cljs.core.nth.call(null,world,r_10062);var n__4399__auto___10064__$1 = cljs.core.count.call(null,row_10063);var c_10065 = (0);while(true){
if((c_10065 < n__4399__auto___10064__$1))
{planjure.components.canvas.draw_tile.call(null,context,r_10062,c_10065,cljs.core.nth.call(null,row_10063,c_10065),size);
{
var G__10066 = (c_10065 + (1));
c_10065 = G__10066;
continue;
}
} else
{}
break;
}
{
var G__10067 = (r_10062 + (1));
r_10062 = G__10067;
continue;
}
} else
{}
break;
}
var vec__10059_10068 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"start","start",-355208981)], null));var start_row_10069 = cljs.core.nth.call(null,vec__10059_10068,(0),null);var start_col_10070 = cljs.core.nth.call(null,vec__10059_10068,(1),null);var vec__10060_10071 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"finish","finish",-586688046)], null));var finish_row_10072 = cljs.core.nth.call(null,vec__10060_10071,(0),null);var finish_col_10073 = cljs.core.nth.call(null,vec__10060_10071,(1),null);planjure.components.canvas.draw_start_finish_marker.call(null,context,start_row_10069,start_col_10070,size);
planjure.components.canvas.draw_start_finish_marker.call(null,context,finish_row_10072,finish_col_10073,size);
planjure.components.canvas.draw_path.call(null,context,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(app_state),size);
if(cljs.core.truth_(new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685).cljs$core$IFn$_invoke$arity$1(app_state)))
{return planjure.components.canvas.draw_visited.call(null,context,new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(app_state),size);
} else
{return null;
}
});
planjure.components.canvas.mouse_pos_at = (function mouse_pos_at(canvas,e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),e.offsetY], null);
});
planjure.components.canvas.tile_pos_at = (function tile_pos_at(canvas,e){var map__10075 = planjure.components.canvas.mouse_pos_at.call(null,canvas,e);var map__10075__$1 = ((cljs.core.seq_QMARK_.call(null,map__10075))?cljs.core.apply.call(null,cljs.core.hash_map,map__10075):map__10075);var y = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword(null,"x","x",2099068185));var tile_size = planjure.components.canvas.get_selected_tile_size.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var x__3850__auto__ = (0);var y__3851__auto__ = ((x / tile_size) | (0));return ((x__3850__auto__ > y__3851__auto__) ? x__3850__auto__ : y__3851__auto__);
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var x__3850__auto__ = (0);var y__3851__auto__ = ((y / tile_size) | (0));return ((x__3850__auto__ > y__3851__auto__) ? x__3850__auto__ : y__3851__auto__);
})()], null);
});
/**
* Increase cost at x, y position in the world passed in via the app-state
* cursor.
*/
planjure.components.canvas.update_world_BANG_ = (function update_world_BANG_(app_state,x,y,multiplier){var brush_size = new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));var matrix = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807),brush_size,new cljs.core.Keyword(null,"matrix","matrix",803137200)], null));var new_world = planjure.utils.update_world.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),matrix,x,y,multiplier);return planjure.appstate.update_world_state_BANG_.call(null,app_state,new_world);
});
planjure.components.canvas.erase_at = (function erase_at(app_state,tile_pos){var map__10077 = tile_pos;var map__10077__$1 = ((cljs.core.seq_QMARK_.call(null,map__10077))?cljs.core.apply.call(null,cljs.core.hash_map,map__10077):map__10077);var y = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"x","x",2099068185));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,(-1));
});
planjure.components.canvas.paint_at = (function paint_at(app_state,tile_pos){var map__10079 = tile_pos;var map__10079__$1 = ((cljs.core.seq_QMARK_.call(null,map__10079))?cljs.core.apply.call(null,cljs.core.hash_map,map__10079):map__10079);var y = cljs.core.get.call(null,map__10079__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__10079__$1,new cljs.core.Keyword(null,"x","x",2099068185));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,(1));
});
planjure.components.canvas.world_canvas_component = (function world_canvas_component(app_state,owner){if(typeof planjure.components.canvas.t10162 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.canvas.t10162 = (function (owner,app_state,world_canvas_component,meta10163){
this.owner = owner;
this.app_state = app_state;
this.world_canvas_component = world_canvas_component;
this.meta10163 = meta10163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.canvas.t10162.cljs$lang$type = true;
planjure.components.canvas.t10162.cljs$lang$ctorStr = "planjure.components.canvas/t10162";
planjure.components.canvas.t10162.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"planjure.components.canvas/t10162");
});
planjure.components.canvas.t10162.prototype.om$core$IRender$ = true;
planjure.components.canvas.t10162.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.canvas({"ref": "world-canvas-ref", "className": "world-canvas", "height": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"height","height",1025178622)], null)), "width": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"width","width",-384071477)], null)), "id": "world-canvas"});
});
planjure.components.canvas.t10162.prototype.om$core$IDidUpdate$ = true;
planjure.components.canvas.t10162.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (a,b,c){var self__ = this;
var a__$1 = this;return planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
});
planjure.components.canvas.t10162.prototype.om$core$IDidMount$ = true;
planjure.components.canvas.t10162.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
var world_canvas_10241 = om.core.get_node.call(null,self__.owner,"world-canvas-ref");goog.events.listen(world_canvas_10241,"mousedown",((function (world_canvas_10241,this$__$1){
return (function (p1__10080_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__10080_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)], null));
});})(world_canvas_10241,this$__$1))
);
goog.events.listen(world_canvas_10241,"mouseup",((function (world_canvas_10241,this$__$1){
return (function (p1__10081_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__10081_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mouseup","mouseup",350619456)], null));
});})(world_canvas_10241,this$__$1))
);
goog.events.listen(world_canvas_10241,"mousemove",((function (world_canvas_10241,this$__$1){
return (function (p1__10082_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__10082_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734)], null));
});})(world_canvas_10241,this$__$1))
);
var canvas = om.core.get_node.call(null,self__.owner,"world-canvas-ref");var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",675853683));var c__6256__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto__,canvas,mouse_chan,this$__$1){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto__,canvas,mouse_chan,this$__$1){
return (function (state_10205){var state_val_10206 = (state_10205[(1)]);if((state_val_10206 === (7)))
{var inst_10168 = (state_10205[(7)]);var inst_10168__$1 = (state_10205[(2)]);var inst_10195 = new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322).cljs$core$IFn$_invoke$arity$1(inst_10168__$1);var state_10205__$1 = (function (){var statearr_10207 = state_10205;(statearr_10207[(7)] = inst_10168__$1);
return statearr_10207;
})();var G__10208_10242 = (((inst_10195 instanceof cljs.core.Keyword))?inst_10195.fqn:null);switch (G__10208_10242) {
case "mousemove":
var statearr_10209_10244 = state_10205__$1;(statearr_10209_10244[(1)] = (11));

break;
case "mouseup":
var statearr_10210_10245 = state_10205__$1;(statearr_10210_10245[(1)] = (10));

break;
case "mousedown":
var statearr_10211_10246 = state_10205__$1;(statearr_10211_10246[(1)] = (9));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10195))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (1)))
{var state_10205__$1 = state_10205;var statearr_10212_10247 = state_10205__$1;(statearr_10212_10247[(2)] = null);
(statearr_10212_10247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (4)))
{var state_10205__$1 = state_10205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10205__$1,(7),mouse_chan);
} else
{if((state_val_10206 === (15)))
{var inst_10190 = (state_10205[(2)]);var state_10205__$1 = state_10205;var statearr_10213_10248 = state_10205__$1;(statearr_10213_10248[(2)] = inst_10190);
(statearr_10213_10248[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (13)))
{var state_10205__$1 = state_10205;var statearr_10214_10249 = state_10205__$1;(statearr_10214_10249[(2)] = null);
(statearr_10214_10249[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (6)))
{var inst_10201 = (state_10205[(2)]);var state_10205__$1 = state_10205;var statearr_10215_10250 = state_10205__$1;(statearr_10215_10250[(2)] = inst_10201);
(statearr_10215_10250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (17)))
{var inst_10182 = (state_10205[(8)]);var inst_10185 = planjure.components.canvas.paint_at.call(null,self__.app_state,inst_10182);var state_10205__$1 = state_10205;var statearr_10216_10251 = state_10205__$1;(statearr_10216_10251[(2)] = inst_10185);
(statearr_10216_10251[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (3)))
{var inst_10203 = (state_10205[(2)]);var state_10205__$1 = state_10205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10205__$1,inst_10203);
} else
{if((state_val_10206 === (12)))
{var inst_10168 = (state_10205[(7)]);var inst_10181 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_10168);var inst_10182 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_10181);var inst_10187 = cljs.core.deref.call(null,self__.app_state);var inst_10188 = new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(inst_10187);var state_10205__$1 = (function (){var statearr_10217 = state_10205;(statearr_10217[(8)] = inst_10182);
return statearr_10217;
})();var G__10218_10252 = (((inst_10188 instanceof cljs.core.Keyword))?inst_10188.fqn:null);switch (G__10218_10252) {
case "brush":
var statearr_10219_10254 = state_10205__$1;(statearr_10219_10254[(1)] = (17));

break;
case "eraser":
var statearr_10220_10255 = state_10205__$1;(statearr_10220_10255[(1)] = (16));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10188))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (2)))
{var state_10205__$1 = state_10205;if(true)
{var statearr_10221_10256 = state_10205__$1;(statearr_10221_10256[(1)] = (4));
} else
{var statearr_10222_10257 = state_10205__$1;(statearr_10222_10257[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (11)))
{var inst_10178 = cljs.core.deref.call(null,self__.app_state);var inst_10179 = new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674).cljs$core$IFn$_invoke$arity$1(inst_10178);var state_10205__$1 = state_10205;if(cljs.core.truth_(inst_10179))
{var statearr_10223_10258 = state_10205__$1;(statearr_10223_10258[(1)] = (12));
} else
{var statearr_10224_10259 = state_10205__$1;(statearr_10224_10259[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (9)))
{var inst_10169 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_10170 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_10169);var inst_10171 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674),true);var inst_10172 = planjure.history.push_world.call(null,inst_10170);var state_10205__$1 = (function (){var statearr_10225 = state_10205;(statearr_10225[(9)] = inst_10171);
return statearr_10225;
})();var statearr_10226_10260 = state_10205__$1;(statearr_10226_10260[(2)] = inst_10172);
(statearr_10226_10260[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (5)))
{var state_10205__$1 = state_10205;var statearr_10227_10261 = state_10205__$1;(statearr_10227_10261[(2)] = null);
(statearr_10227_10261[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (14)))
{var inst_10193 = (state_10205[(2)]);var state_10205__$1 = state_10205;var statearr_10228_10262 = state_10205__$1;(statearr_10228_10262[(2)] = inst_10193);
(statearr_10228_10262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (16)))
{var inst_10182 = (state_10205[(8)]);var inst_10183 = planjure.components.canvas.erase_at.call(null,self__.app_state,inst_10182);var state_10205__$1 = state_10205;var statearr_10229_10263 = state_10205__$1;(statearr_10229_10263[(2)] = inst_10183);
(statearr_10229_10263[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (10)))
{var inst_10174 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_10175 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_10174);var inst_10176 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674),false);var state_10205__$1 = (function (){var statearr_10230 = state_10205;(statearr_10230[(10)] = inst_10175);
return statearr_10230;
})();var statearr_10231_10264 = state_10205__$1;(statearr_10231_10264[(2)] = inst_10176);
(statearr_10231_10264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10206 === (8)))
{var inst_10197 = (state_10205[(2)]);var state_10205__$1 = (function (){var statearr_10232 = state_10205;(statearr_10232[(11)] = inst_10197);
return statearr_10232;
})();var statearr_10233_10265 = state_10205__$1;(statearr_10233_10265[(2)] = null);
(statearr_10233_10265[(1)] = (2));
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
});})(c__6256__auto__,canvas,mouse_chan,this$__$1))
;return ((function (switch__6191__auto__,c__6256__auto__,canvas,mouse_chan,this$__$1){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_10237 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10237[(0)] = state_machine__6192__auto__);
(statearr_10237[(1)] = (1));
return statearr_10237;
});
var state_machine__6192__auto____1 = (function (state_10205){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_10205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e10238){if((e10238 instanceof Object))
{var ex__6195__auto__ = e10238;var statearr_10239_10266 = state_10205;(statearr_10239_10266[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10267 = state_10205;
state_10205 = G__10267;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_10205){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_10205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto__,canvas,mouse_chan,this$__$1))
})();var state__6258__auto__ = (function (){var statearr_10240 = f__6257__auto__.call(null);(statearr_10240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto__);
return statearr_10240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto__,canvas,mouse_chan,this$__$1))
);
return c__6256__auto__;
});
planjure.components.canvas.t10162.prototype.om$core$IInitState$ = true;
planjure.components.canvas.t10162.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",675853683),planjure.components.canvas.mouse_chan], null);
});
planjure.components.canvas.t10162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10164){var self__ = this;
var _10164__$1 = this;return self__.meta10163;
});
planjure.components.canvas.t10162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10164,meta10163__$1){var self__ = this;
var _10164__$1 = this;return (new planjure.components.canvas.t10162(self__.owner,self__.app_state,self__.world_canvas_component,meta10163__$1));
});
planjure.components.canvas.__GT_t10162 = (function __GT_t10162(owner__$1,app_state__$1,world_canvas_component__$1,meta10163){return (new planjure.components.canvas.t10162(owner__$1,app_state__$1,world_canvas_component__$1,meta10163));
});
}
return (new planjure.components.canvas.t10162(owner,app_state,world_canvas_component,null));
});

//# sourceMappingURL=canvas.js.map