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
planjure.components.canvas.draw_path = (function draw_path(context,path){var seq__9440 = cljs.core.seq.call(null,path);var chunk__9441 = null;var count__9442 = 0;var i__9443 = 0;while(true){
if((i__9443 < count__9442))
{var node = cljs.core._nth.call(null,chunk__9441,i__9443);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00");
{
var G__9444 = seq__9440;
var G__9445 = chunk__9441;
var G__9446 = count__9442;
var G__9447 = (i__9443 + 1);
seq__9440 = G__9444;
chunk__9441 = G__9445;
count__9442 = G__9446;
i__9443 = G__9447;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9440);if(temp__4092__auto__)
{var seq__9440__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9440__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9440__$1);{
var G__9448 = cljs.core.chunk_rest.call(null,seq__9440__$1);
var G__9449 = c__4191__auto__;
var G__9450 = cljs.core.count.call(null,c__4191__auto__);
var G__9451 = 0;
seq__9440 = G__9448;
chunk__9441 = G__9449;
count__9442 = G__9450;
i__9443 = G__9451;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__9440__$1);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,0),cljs.core.nth.call(null,node,1),"#00ff00");
{
var G__9452 = cljs.core.next.call(null,seq__9440__$1);
var G__9453 = null;
var G__9454 = 0;
var G__9455 = 0;
seq__9440 = G__9452;
chunk__9441 = G__9453;
count__9442 = G__9454;
i__9443 = G__9455;
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
var n__4291__auto___9460 = cljs.core.count.call(null,world);var row_9461 = 0;while(true){
if((row_9461 < n__4291__auto___9460))
{var n__4291__auto___9462__$1 = cljs.core.count.call(null,cljs.core.nth.call(null,world,row_9461));var col_9463 = 0;while(true){
if((col_9463 < n__4291__auto___9462__$1))
{planjure.components.canvas.draw_tile.call(null,context,row_9461,col_9463,cljs.core.nth.call(null,cljs.core.nth.call(null,world,row_9461),col_9463));
{
var G__9464 = (col_9463 + 1);
col_9463 = G__9464;
continue;
}
} else
{}
break;
}
{
var G__9465 = (row_9461 + 1);
row_9461 = G__9465;
continue;
}
} else
{}
break;
}
var vec__9458_9466 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"start","start",1123661780)], null));var start_row_9467 = cljs.core.nth.call(null,vec__9458_9466,0,null);var start_col_9468 = cljs.core.nth.call(null,vec__9458_9466,1,null);var vec__9459_9469 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1123233263),new cljs.core.Keyword(null,"finish","finish",4034428933)], null));var finish_row_9470 = cljs.core.nth.call(null,vec__9459_9469,0,null);var finish_col_9471 = cljs.core.nth.call(null,vec__9459_9469,1,null);planjure.components.canvas.draw_start_finish_marker.call(null,context,start_row_9467,start_col_9468);
planjure.components.canvas.draw_start_finish_marker.call(null,context,finish_row_9470,finish_col_9471);
return planjure.components.canvas.draw_path.call(null,context,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(app_state));
});
planjure.components.canvas.mouse_pos_at = (function mouse_pos_at(canvas,e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),e.offsetX,new cljs.core.Keyword(null,"y","y",1013904363),e.offsetY], null);
});
planjure.components.canvas.tile_pos_at = (function tile_pos_at(canvas,e){var map__9473 = planjure.components.canvas.mouse_pos_at.call(null,canvas,e);var map__9473__$1 = ((cljs.core.seq_QMARK_.call(null,map__9473))?cljs.core.apply.call(null,cljs.core.hash_map,map__9473):map__9473);var y = cljs.core.get.call(null,map__9473__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9473__$1,new cljs.core.Keyword(null,"x","x",1013904362));var tile_size = planjure.components.canvas.get_selected_tile_size.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((x / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})(),new cljs.core.Keyword(null,"y","y",1013904363),(function (){var x__3750__auto__ = 0;var y__3751__auto__ = ((y / tile_size) | 0);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})()], null);
});
planjure.components.canvas.update_world_BANG_ = (function update_world_BANG_(app_state,x,y,incr){var world = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var row = world.call(null,y);var cost = row.call(null,x);var new_cost = (function (){var x__3750__auto__ = 1;var y__3751__auto__ = (function (){var x__3757__auto__ = (incr + cost);var y__3758__auto__ = 8;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})();return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})();var new_row = cljs.core.assoc.call(null,row,x,new_cost);var new_world = cljs.core.assoc.call(null,world,y,new_row);return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"world","world",1127223044),new_world);
});
planjure.components.canvas.erase_at = (function erase_at(app_state,tile_pos){var map__9475 = tile_pos;var map__9475__$1 = ((cljs.core.seq_QMARK_.call(null,map__9475))?cljs.core.apply.call(null,cljs.core.hash_map,map__9475):map__9475);var y = cljs.core.get.call(null,map__9475__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9475__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,-1);
});
planjure.components.canvas.paint_at = (function paint_at(app_state,tile_pos){var map__9477 = tile_pos;var map__9477__$1 = ((cljs.core.seq_QMARK_.call(null,map__9477))?cljs.core.apply.call(null,cljs.core.hash_map,map__9477):map__9477);var y = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"x","x",1013904362));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,1);
});
planjure.components.canvas.world_canvas_component = (function world_canvas_component(app_state,owner){if(typeof planjure.components.canvas.t9560 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.canvas.t9560 = (function (owner,app_state,world_canvas_component,meta9561){
this.owner = owner;
this.app_state = app_state;
this.world_canvas_component = world_canvas_component;
this.meta9561 = meta9561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.canvas.t9560.cljs$lang$type = true;
planjure.components.canvas.t9560.cljs$lang$ctorStr = "planjure.components.canvas/t9560";
planjure.components.canvas.t9560.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"planjure.components.canvas/t9560");
});
planjure.components.canvas.t9560.prototype.om$core$IRender$ = true;
planjure.components.canvas.t9560.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.canvas({"ref": "world-canvas-ref", "className": "world-canvas", "height": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"height","height",4087841945)], null)), "width": cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"width","width",1127031096)], null)), "id": "world-canvas"});
});
planjure.components.canvas.t9560.prototype.om$core$IDidUpdate$ = true;
planjure.components.canvas.t9560.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (a,b,c){var self__ = this;
var a__$1 = this;return planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
});
planjure.components.canvas.t9560.prototype.om$core$IDidMount$ = true;
planjure.components.canvas.t9560.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
var world_canvas_9639 = om.core.get_node.call(null,self__.owner,"world-canvas-ref");goog.events.listen(world_canvas_9639,"mousedown",(function (p1__9478_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__9478_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)], null));
}));
goog.events.listen(world_canvas_9639,"mouseup",(function (p1__9479_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__9479_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146)], null));
}));
goog.events.listen(world_canvas_9639,"mousemove",(function (p1__9480_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),p1__9480_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168)], null));
}));
var canvas = om.core.get_node.call(null,self__.owner,"world-canvas-ref");var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_9603){var state_val_9604 = (state_9603[1]);if((state_val_9604 === 1))
{var state_9603__$1 = state_9603;var statearr_9605_9640 = state_9603__$1;(statearr_9605_9640[2] = null);
(statearr_9605_9640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 2))
{var state_9603__$1 = state_9603;if(true)
{var statearr_9606_9641 = state_9603__$1;(statearr_9606_9641[1] = 4);
} else
{var statearr_9607_9642 = state_9603__$1;(statearr_9607_9642[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 3))
{var inst_9601 = (state_9603[2]);var state_9603__$1 = state_9603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9603__$1,inst_9601);
} else
{if((state_val_9604 === 4))
{var state_9603__$1 = state_9603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9603__$1,7,mouse_chan);
} else
{if((state_val_9604 === 5))
{var state_9603__$1 = state_9603;var statearr_9608_9643 = state_9603__$1;(statearr_9608_9643[2] = null);
(statearr_9608_9643[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 6))
{var inst_9599 = (state_9603[2]);var state_9603__$1 = state_9603;var statearr_9609_9644 = state_9603__$1;(statearr_9609_9644[2] = inst_9599);
(statearr_9609_9644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 7))
{var inst_9566 = (state_9603[7]);var inst_9566__$1 = (state_9603[2]);var inst_9593 = new cljs.core.Keyword(null,"mouseevent","mouseevent",2027309191).cljs$core$IFn$_invoke$arity$1(inst_9566__$1);var state_9603__$1 = (function (){var statearr_9610 = state_9603;(statearr_9610[7] = inst_9566__$1);
return statearr_9610;
})();var G__9611_9645 = inst_9593;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),G__9611_9645))
{var statearr_9612_9646 = state_9603__$1;(statearr_9612_9646[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),G__9611_9645))
{var statearr_9613_9647 = state_9603__$1;(statearr_9613_9647[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),G__9611_9645))
{var statearr_9614_9648 = state_9603__$1;(statearr_9614_9648[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9593)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 8))
{var inst_9595 = (state_9603[2]);var state_9603__$1 = (function (){var statearr_9615 = state_9603;(statearr_9615[8] = inst_9595);
return statearr_9615;
})();var statearr_9616_9649 = state_9603__$1;(statearr_9616_9649[2] = null);
(statearr_9616_9649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 9))
{var inst_9567 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_9568 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_9567);var inst_9569 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),true);var inst_9570 = planjure.history.push_world.call(null,inst_9568);var state_9603__$1 = (function (){var statearr_9617 = state_9603;(statearr_9617[9] = inst_9569);
return statearr_9617;
})();var statearr_9618_9650 = state_9603__$1;(statearr_9618_9650[2] = inst_9570);
(statearr_9618_9650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 10))
{var inst_9572 = cljs.core.deref.call(null,planjure.appstate.app_state);var inst_9573 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_9572);var inst_9574 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272),false);var state_9603__$1 = (function (){var statearr_9619 = state_9603;(statearr_9619[10] = inst_9573);
return statearr_9619;
})();var statearr_9620_9651 = state_9603__$1;(statearr_9620_9651[2] = inst_9574);
(statearr_9620_9651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 11))
{var inst_9576 = cljs.core.deref.call(null,self__.app_state);var inst_9577 = new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",4787655272).cljs$core$IFn$_invoke$arity$1(inst_9576);var state_9603__$1 = state_9603;if(cljs.core.truth_(inst_9577))
{var statearr_9621_9652 = state_9603__$1;(statearr_9621_9652[1] = 12);
} else
{var statearr_9622_9653 = state_9603__$1;(statearr_9622_9653[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 12))
{var inst_9566 = (state_9603[7]);var inst_9579 = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(inst_9566);var inst_9580 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_9579);var inst_9585 = cljs.core.deref.call(null,self__.app_state);var inst_9586 = new cljs.core.Keyword(null,"brush","brush",1107921580).cljs$core$IFn$_invoke$arity$1(inst_9585);var state_9603__$1 = (function (){var statearr_9623 = state_9603;(statearr_9623[11] = inst_9580);
return statearr_9623;
})();var G__9624_9654 = inst_9586;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"brush","brush",1107921580),G__9624_9654))
{var statearr_9625_9655 = state_9603__$1;(statearr_9625_9655[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"eraser","eraser",4013733374),G__9624_9654))
{var statearr_9626_9656 = state_9603__$1;(statearr_9626_9656[1] = 16);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9586)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 13))
{var state_9603__$1 = state_9603;var statearr_9627_9657 = state_9603__$1;(statearr_9627_9657[2] = null);
(statearr_9627_9657[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 14))
{var inst_9591 = (state_9603[2]);var state_9603__$1 = state_9603;var statearr_9628_9658 = state_9603__$1;(statearr_9628_9658[2] = inst_9591);
(statearr_9628_9658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 15))
{var inst_9588 = (state_9603[2]);var state_9603__$1 = state_9603;var statearr_9629_9659 = state_9603__$1;(statearr_9629_9659[2] = inst_9588);
(statearr_9629_9659[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 16))
{var inst_9580 = (state_9603[11]);var inst_9581 = planjure.components.canvas.erase_at.call(null,self__.app_state,inst_9580);var state_9603__$1 = state_9603;var statearr_9630_9660 = state_9603__$1;(statearr_9630_9660[2] = inst_9581);
(statearr_9630_9660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9604 === 17))
{var inst_9580 = (state_9603[11]);var inst_9583 = planjure.components.canvas.paint_at.call(null,self__.app_state,inst_9580);var state_9603__$1 = state_9603;var statearr_9631_9661 = state_9603__$1;(statearr_9631_9661[2] = inst_9583);
(statearr_9631_9661[1] = 15);
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
var state_machine__6824__auto____0 = (function (){var statearr_9635 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9635[0] = state_machine__6824__auto__);
(statearr_9635[1] = 1);
return statearr_9635;
});
var state_machine__6824__auto____1 = (function (state_9603){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_9603);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e9636){if((e9636 instanceof Object))
{var ex__6827__auto__ = e9636;var statearr_9637_9662 = state_9603;(statearr_9637_9662[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9663 = state_9603;
state_9603 = G__9663;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_9603){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_9603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_9638 = f__6839__auto__.call(null);(statearr_9638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_9638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
});
planjure.components.canvas.t9560.prototype.om$core$IInitState$ = true;
planjure.components.canvas.t9560.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460),planjure.components.canvas.mouse_chan], null);
});
planjure.components.canvas.t9560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9562){var self__ = this;
var _9562__$1 = this;return self__.meta9561;
});
planjure.components.canvas.t9560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9562,meta9561__$1){var self__ = this;
var _9562__$1 = this;return (new planjure.components.canvas.t9560(self__.owner,self__.app_state,self__.world_canvas_component,meta9561__$1));
});
planjure.components.canvas.__GT_t9560 = (function __GT_t9560(owner__$1,app_state__$1,world_canvas_component__$1,meta9561){return (new planjure.components.canvas.t9560(owner__$1,app_state__$1,world_canvas_component__$1,meta9561));
});
}
return (new planjure.components.canvas.t9560(owner,app_state,world_canvas_component,null));
});

//# sourceMappingURL=canvas.js.map