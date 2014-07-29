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
goog.require('planjure.utils');
goog.require('om.dom');
goog.require('planjure.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('planjure.plan');
planjure.components.canvas.update_world_time = cljs.core.atom.call(null,0);
planjure.components.canvas.canvas_redraw_time = cljs.core.atom.call(null,0);
planjure.components.canvas.mouse_chan = cljs.core.async.chan.call(null);
planjure.components.canvas.color_mapping = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#09738A","#adc5ad","#c6c294","#7c9a53","#578633","#3b621a","#2d5010","#26470b"], null);
planjure.components.canvas.weight_to_hex_color = (function weight_to_hex_color(weight){return planjure.components.canvas.color_mapping.call(null,(weight - 1));
});
planjure.components.canvas.get_selected_tile_size = (function get_selected_tile_size(){var tile_size_name = new cljs.core.Keyword(null,"world-size","world-size",1425687758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-size-options","world-size-options",2177667743),tile_size_name,new cljs.core.Keyword(null,"tile-size-px","tile-size-px",4710917799)], null));return value;
});
planjure.components.canvas.draw_rect_tile = (function draw_rect_tile(context,row,col,color,size){var y = (row * size);var x = (col * size);context.fillStyle = color;
return context.fillRect(x,y,size,size);
});
planjure.components.canvas.draw_circle = (function draw_circle(context,row,col,color,size){var radius = (size / 2);var y = ((row * size) + radius);var x = ((col * size) + radius);context.fillStyle = color;
context.beginPath();
context.arc(x,y,radius,0,(2 * Math.PI),false);
context.closePath();
context.strokeStyle = color;
return context.stroke();
});
planjure.components.canvas.draw_start_finish_marker = (function draw_start_finish_marker(context,row,col,size){var color = "#ff0000";return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color,size);
});
planjure.components.canvas.draw_path_market = (function draw_path_market(context,row,col){return null;
});
planjure.components.canvas.draw_path = (function draw_path(context,path,size){var seq__189764 = cljs.core.seq.call(null,path);var chunk__189765 = null;var count__189766 = 0;var i__189767 = 0;while(true){
if((i__189767 < count__189766))
{var node = cljs.core._nth.call(null,chunk__189765,i__189767);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00",size);
{
var G__189768 = seq__189764;
var G__189769 = chunk__189765;
var G__189770 = count__189766;
var G__189771 = (i__189767 + 1);
seq__189764 = G__189768;
chunk__189765 = G__189769;
count__189766 = G__189770;
i__189767 = G__189771;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__189764);if(temp__4092__auto__)
{var seq__189764__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189764__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__189764__$1);{
var G__189772 = cljs.core.chunk_rest.call(null,seq__189764__$1);
var G__189773 = c__4191__auto__;
var G__189774 = cljs.core.count.call(null,c__4191__auto__);
var G__189775 = 0;
seq__189764 = G__189772;
chunk__189765 = G__189773;
count__189766 = G__189774;
i__189767 = G__189775;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__189764__$1);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00",size);
{
var G__189776 = cljs.core.next.call(null,seq__189764__$1);
var G__189777 = null;
var G__189778 = 0;
var G__189779 = 0;
seq__189764 = G__189776;
chunk__189765 = G__189777;
count__189766 = G__189778;
i__189767 = G__189779;
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
planjure.components.canvas.refresh_world = (function refresh_world(app_state,owner,dom_node_ref){var canvas = om.core.get_node.call(null,owner,dom_node_ref);var context = canvas.getContext("2d");var world = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(app_state);var setup = new cljs.core.Keyword(null,"setup","setup",1123233263).cljs$core$IFn$_invoke$arity$1(app_state);var size = planjure.components.canvas.get_selected_tile_size.call(null);canvas.width = canvas.width;
var n__4291__auto___189784 = cljs.core.count.call(null,world);var r_189785 = 0;while(true){
if((r_189785 < n__4291__auto___189784))
{var row_189786 = cljs.core.nth.call(null,world,r_189785);var n__4291__auto___189787__$1 = cljs.core.count.call(null,row_189786);var c_189788 = 0;while(true){
if((c_189788 < n__4291__auto___189787__$1))
{planjure.components.canvas.draw_tile.call(null,context,r_189785,c_189788,cljs.core.nth.call(null,row_189786,c_189788),size);
{
var G__189789 = (c_189788 + 1);
c_189788 = G__189789;
continue;
}
} else
{}
break;
}
{
var G__189790 = (r_189785 + 1);
r_189785 = G__189790;
continue;
}
} else
{}
break;
}
var vec__189782_189791 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"start","start",1123661780)], null));var start_row_189792 = cljs.core.nth.call(null,vec__189782_189791,0,null);var start_col_189793 = cljs.core.nth.call(null,vec__189782_189791,1,null);var vec__189783_189794 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)], null));var finish_row_189795 = cljs.core.nth.call(null,vec__189783_189794,0,null);var finish_col_189796 = cljs.core.nth.call(null,vec__189783_189794,1,null);planjure.components.canvas.draw_start_finish_marker.call(null,context,start_row_189792,start_col_189793,size);
planjure.components.canvas.draw_start_finish_marker.call(null,context,finish_row_189795,finish_col_189796,size);
return planjure.components.canvas.draw_path.call(null,context,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(app_state),size);
});
planjure.components.canvas.mouse_pos_at = (function mouse_pos_at(canvas,e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),e.offsetX,new cljs.core.Keyword(null,"y","y",1013904363),e.offsetY], null);
});
planjure.components.canvas.tile_pos_at = (function tile_pos_at(canvas,e){var map__189798 = planjure.components.canvas.mouse_pos_at.call(null,canvas,e);var map__189798__$1 = ((cljs.core.seq_QMARK_.call(null,map__189798))?cljs.core.apply.call(null,cljs.core.hash_map,map__189798):map__189798);var y = cljs.core.get.call(null,map__189798__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__189798__$1,new cljs.core.Keyword(null,"x","x",1013904362));var tile_size = planjure.components.canvas.get_selected_tile_size.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((x / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})(),new cljs.core.Keyword(null,"y","y",1013904363),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((y / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})()], null);
});
/**
* Increase cost at x, y position in the world passed in via the app-state
* cursor.
*/
planjure.components.canvas.update_world_BANG_ = (function update_world_BANG_(app_state,x,y,multiplier){var brush_size = new cljs.core.Keyword(null,"brush-size","brush-size",3095646758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var matrix = cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brush-size-options","brush-size-options",4110370807),brush_size,new cljs.core.Keyword(null,"matrix","matrix",4227631923)], null));var new_world = planjure.utils.update_world.call(null,new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state)),matrix,x,y,multiplier);return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"world","world",1127223044),new_world);
});
planjure.components.canvas.erase_at = (function erase_at(app_state,tile_pos){var map__189800 = tile_pos;var map__189800__$1 = ((cljs.core.seq_QMARK_.call(null,map__189800))?cljs.core.apply.call(null,cljs.core.hash_map,map__189800):map__189800);var y = cljs.core.get.call(null,map__189800__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__189800__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,-1);
});
planjure.components.canvas.paint_at = (function paint_at(app_state,tile_pos){var map__189802 = tile_pos;var map__189802__$1 = ((cljs.core.seq_QMARK_.call(null,map__189802))?cljs.core.apply.call(null,cljs.core.hash_map,map__189802):map__189802);var y = cljs.core.get.call(null,map__189802__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__189802__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,1);
});
planjure.components.canvas.world_canvas_component = (function world_canvas_component(app_state,owner){if(typeof planjure.components.canvas.t189885 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.canvas.t189885 = (function (owner,app_state,world_canvas_component,meta189886){
this.owner = owner;
this.app_state = app_state;
this.world_canvas_component = world_canvas_component;
this.meta189886 = meta189886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.canvas.t189885.cljs$lang$type = true;
planjure.components.canvas.t189885.cljs$lang$ctorStr = "planjure.components.canvas/t189885";
planjure.components.canvas.t189885.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.canvas/t189885");
});
planjure.components.canvas.t189885.prototype.om$core$IRender$ = true;
planjure.components.canvas.t189885.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.canvas({"ref": "world-canvas-ref", "className": "world-canvas", "height": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"height","height",4087841945)], null)), "width": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"width","width",1127031096)], null)), "id": "world-canvas"});
});
planjure.components.canvas.t189885.prototype.om$core$IDidUpdate$ = true;
planjure.components.canvas.t189885.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (a,b,c){var self__ = this;
var a__$1 = this;return planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
});
planjure.components.canvas.t189885.prototype.om$core$IDidMount$ = true;
planjure.components.canvas.t189885.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
var world_canvas_189964 = om.core.get_node.call(null,self__.owner,"world-canvas-ref");goog.events.listen(world_canvas_189964,"mousedown",(function (p1__189803_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__189803_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)], null));
}));
goog.events.listen(world_canvas_189964,"mouseup",(function (p1__189804_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__189804_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146)], null));
}));
goog.events.listen(world_canvas_189964,"mousemove",(function (p1__189805_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__189805_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168)], null));
}));
var canvas = om.core.get_node.call(null,self__.owner,"world-canvas-ref");var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_189928){var state_val_189929 = (state_189928[1]);if((state_val_189929 === 1))
{var state_189928__$1 = state_189928;var statearr_189930_189965 = state_189928__$1;(statearr_189930_189965[2] = null);
(statearr_189930_189965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 2))
{var state_189928__$1 = state_189928;if(true)
{var statearr_189931_189966 = state_189928__$1;(statearr_189931_189966[1] = 4);
} else
{var statearr_189932_189967 = state_189928__$1;(statearr_189932_189967[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 3))
{var inst_189926 = (state_189928[2]);var state_189928__$1 = state_189928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189928__$1,inst_189926);
} else
{if((state_val_189929 === 4))
{var state_189928__$1 = state_189928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189928__$1,7,mouse_chan);
} else
{if((state_val_189929 === 5))
{var state_189928__$1 = state_189928;var statearr_189933_189968 = state_189928__$1;(statearr_189933_189968[2] = null);
(statearr_189933_189968[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 6))
{var inst_189924 = (state_189928[2]);var state_189928__$1 = state_189928;var statearr_189934_189969 = state_189928__$1;(statearr_189934_189969[2] = inst_189924);
(statearr_189934_189969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 7))
{var inst_189891 = (state_189928[7]);var inst_189891__$1 = (state_189928[2]);var inst_189918 = new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191).cljs$core$IFn$_invoke$arity$1(inst_189891__$1);var state_189928__$1 = (function (){var statearr_189935 = state_189928;(statearr_189935[7] = inst_189891__$1);
return statearr_189935;
})();var G__189936_189970 = inst_189918;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),G__189936_189970))
{var statearr_189937_189971 = state_189928__$1;(statearr_189937_189971[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),G__189936_189970))
{var statearr_189938_189972 = state_189928__$1;(statearr_189938_189972[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),G__189936_189970))
{var statearr_189939_189973 = state_189928__$1;(statearr_189939_189973[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_189918)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 8))
{var inst_189920 = (state_189928[2]);var state_189928__$1 = (function (){var statearr_189940 = state_189928;(statearr_189940[8] = inst_189920);
return statearr_189940;
})();var statearr_189941_189974 = state_189928__$1;(statearr_189941_189974[2] = null);
(statearr_189941_189974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 9))
{var inst_189892 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_189893 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_189892);var inst_189894 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),true);var inst_189895 = planjure.history.push_world.call(null,inst_189893);var state_189928__$1 = (function (){var statearr_189942 = state_189928;(statearr_189942[9] = inst_189894);
return statearr_189942;
})();var statearr_189943_189975 = state_189928__$1;(statearr_189943_189975[2] = inst_189895);
(statearr_189943_189975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 10))
{var inst_189897 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_189898 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_189897);var inst_189899 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),false);var state_189928__$1 = (function (){var statearr_189944 = state_189928;(statearr_189944[10] = inst_189898);
return statearr_189944;
})();var statearr_189945_189976 = state_189928__$1;(statearr_189945_189976[2] = inst_189899);
(statearr_189945_189976[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 11))
{var inst_189901 = cljs.core.deref.call(null,self__.app_state);var inst_189902 = new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272).cljs$core$IFn$_invoke$arity$1(inst_189901);var state_189928__$1 = state_189928;if(cljs.core.truth_(inst_189902))
{var statearr_189946_189977 = state_189928__$1;(statearr_189946_189977[1] = 12);
} else
{var statearr_189947_189978 = state_189928__$1;(statearr_189947_189978[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 12))
{var inst_189891 = (state_189928[7]);var inst_189904 = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(inst_189891);var inst_189905 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_189904);var inst_189910 = cljs.core.deref.call(null,self__.app_state);var inst_189911 = new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(inst_189910);var state_189928__$1 = (function (){var statearr_189948 = state_189928;(statearr_189948[11] = inst_189905);
return statearr_189948;
})();var G__189949_189979 = inst_189911;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580),G__189949_189979))
{var statearr_189950_189980 = state_189928__$1;(statearr_189950_189980[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"eraser","eraser",4013733374),G__189949_189979))
{var statearr_189951_189981 = state_189928__$1;(statearr_189951_189981[1] = 16);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_189911)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 13))
{var state_189928__$1 = state_189928;var statearr_189952_189982 = state_189928__$1;(statearr_189952_189982[2] = null);
(statearr_189952_189982[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 14))
{var inst_189916 = (state_189928[2]);var state_189928__$1 = state_189928;var statearr_189953_189983 = state_189928__$1;(statearr_189953_189983[2] = inst_189916);
(statearr_189953_189983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 15))
{var inst_189913 = (state_189928[2]);var state_189928__$1 = state_189928;var statearr_189954_189984 = state_189928__$1;(statearr_189954_189984[2] = inst_189913);
(statearr_189954_189984[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 16))
{var inst_189905 = (state_189928[11]);var inst_189906 = planjure.components.canvas.erase_at.call(null,self__.app_state,inst_189905);var state_189928__$1 = state_189928;var statearr_189955_189985 = state_189928__$1;(statearr_189955_189985[2] = inst_189906);
(statearr_189955_189985[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189929 === 17))
{var inst_189905 = (state_189928[11]);var inst_189908 = planjure.components.canvas.paint_at.call(null,self__.app_state,inst_189905);var state_189928__$1 = state_189928;var statearr_189956_189986 = state_189928__$1;(statearr_189956_189986[2] = inst_189908);
(statearr_189956_189986[1] = 15);
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
var state_machine__6824__auto____0 = (function (){var statearr_189960 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_189960[0] = state_machine__6824__auto__);
(statearr_189960[1] = 1);
return statearr_189960;
});
var state_machine__6824__auto____1 = (function (state_189928){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_189928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e189961){if((e189961 instanceof Object))
{var ex__6827__auto__ = e189961;var statearr_189962_189987 = state_189928;(statearr_189962_189987[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189928);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__189988 = state_189928;
state_189928 = G__189988;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_189928){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_189928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_189963 = f__6839__auto__.call(null);(statearr_189963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_189963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.canvas.t189885.prototype.om$core$IInitState$ = true;
planjure.components.canvas.t189885.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460),planjure.components.canvas.mouse_chan], null);
});
planjure.components.canvas.t189885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_189887){var self__ = this;
var _189887__$1 = this;return self__.meta189886;
});
planjure.components.canvas.t189885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_189887,meta189886__$1){var self__ = this;
var _189887__$1 = this;return (new planjure.components.canvas.t189885(self__.owner,self__.app_state,self__.world_canvas_component,meta189886__$1));
});
planjure.components.canvas.__GT_t189885 = (function __GT_t189885(owner__$1,app_state__$1,world_canvas_component__$1,meta189886){return (new planjure.components.canvas.t189885(owner__$1,app_state__$1,world_canvas_component__$1,meta189886));
});
}
return (new planjure.components.canvas.t189885(owner,app_state,world_canvas_component,null));
});

//# sourceMappingURL=canvas.js.map