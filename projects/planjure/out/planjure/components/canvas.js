// Compiled by ClojureScript 0.0-2280
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
planjure.components.canvas.draw_start_node = (function draw_start_node(context,row,col,size){var color = "#000000";return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color,size);
});
planjure.components.canvas.draw_finish_node = (function draw_finish_node(context,row,col,size){var color = "#d02426";return planjure.components.canvas.draw_rect_tile.call(null,context,row,col,color,size);
});
planjure.components.canvas.draw_path = (function draw_path(context,path,size){var seq__779950 = cljs.core.seq.call(null,path);var chunk__779951 = null;var count__779952 = (0);var i__779953 = (0);while(true){
if((i__779953 < count__779952))
{var node = cljs.core._nth.call(null,chunk__779951,i__779953);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,(0)),cljs.core.nth.call(null,node,(1)),"#00ff00",size);
{
var G__779954 = seq__779950;
var G__779955 = chunk__779951;
var G__779956 = count__779952;
var G__779957 = (i__779953 + (1));
seq__779950 = G__779954;
chunk__779951 = G__779955;
count__779952 = G__779956;
i__779953 = G__779957;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__779950);if(temp__4126__auto__)
{var seq__779950__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__779950__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__779950__$1);{
var G__779958 = cljs.core.chunk_rest.call(null,seq__779950__$1);
var G__779959 = c__4300__auto__;
var G__779960 = cljs.core.count.call(null,c__4300__auto__);
var G__779961 = (0);
seq__779950 = G__779958;
chunk__779951 = G__779959;
count__779952 = G__779960;
i__779953 = G__779961;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__779950__$1);planjure.components.canvas.draw_circle.call(null,context,cljs.core.nth.call(null,node,(0)),cljs.core.nth.call(null,node,(1)),"#00ff00",size);
{
var G__779962 = cljs.core.next.call(null,seq__779950__$1);
var G__779963 = null;
var G__779964 = (0);
var G__779965 = (0);
seq__779950 = G__779962;
chunk__779951 = G__779963;
count__779952 = G__779964;
i__779953 = G__779965;
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
;var seq__779970 = cljs.core.seq.call(null,visited);var chunk__779971 = null;var count__779972 = (0);var i__779973 = (0);while(true){
if((i__779973 < count__779972))
{var node = cljs.core._nth.call(null,chunk__779971,i__779973);var y_779974 = pos_start.call(null,cljs.core.first.call(null,node));var x_779975 = pos_start.call(null,cljs.core.second.call(null,node));context.fillStyle = "rgba(255, 255, 255, 0.5)";
context.fillRect(x_779975,y_779974,width,width);
{
var G__779976 = seq__779970;
var G__779977 = chunk__779971;
var G__779978 = count__779972;
var G__779979 = (i__779973 + (1));
seq__779970 = G__779976;
chunk__779971 = G__779977;
count__779972 = G__779978;
i__779973 = G__779979;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__779970);if(temp__4126__auto__)
{var seq__779970__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__779970__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__779970__$1);{
var G__779980 = cljs.core.chunk_rest.call(null,seq__779970__$1);
var G__779981 = c__4300__auto__;
var G__779982 = cljs.core.count.call(null,c__4300__auto__);
var G__779983 = (0);
seq__779970 = G__779980;
chunk__779971 = G__779981;
count__779972 = G__779982;
i__779973 = G__779983;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__779970__$1);var y_779984 = pos_start.call(null,cljs.core.first.call(null,node));var x_779985 = pos_start.call(null,cljs.core.second.call(null,node));context.fillStyle = "rgba(255, 255, 255, 0.5)";
context.fillRect(x_779985,y_779984,width,width);
{
var G__779986 = cljs.core.next.call(null,seq__779970__$1);
var G__779987 = null;
var G__779988 = (0);
var G__779989 = (0);
seq__779970 = G__779986;
chunk__779971 = G__779987;
count__779972 = G__779988;
i__779973 = G__779989;
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
var n__4400__auto___779994 = cljs.core.count.call(null,world);var r_779995 = (0);while(true){
if((r_779995 < n__4400__auto___779994))
{var row_779996 = cljs.core.nth.call(null,world,r_779995);var n__4400__auto___779997__$1 = cljs.core.count.call(null,row_779996);var c_779998 = (0);while(true){
if((c_779998 < n__4400__auto___779997__$1))
{planjure.components.canvas.draw_tile.call(null,context,r_779995,c_779998,cljs.core.nth.call(null,row_779996,c_779998),size);
{
var G__779999 = (c_779998 + (1));
c_779998 = G__779999;
continue;
}
} else
{}
break;
}
{
var G__780000 = (r_779995 + (1));
r_779995 = G__780000;
continue;
}
} else
{}
break;
}
var vec__779992_780001 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"start","start",-355208981)], null));var start_row_780002 = cljs.core.nth.call(null,vec__779992_780001,(0),null);var start_col_780003 = cljs.core.nth.call(null,vec__779992_780001,(1),null);var vec__779993_780004 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"finish","finish",-586688046)], null));var finish_row_780005 = cljs.core.nth.call(null,vec__779993_780004,(0),null);var finish_col_780006 = cljs.core.nth.call(null,vec__779993_780004,(1),null);planjure.components.canvas.draw_start_node.call(null,context,start_row_780002,start_col_780003,size);
planjure.components.canvas.draw_finish_node.call(null,context,finish_row_780005,finish_col_780006,size);
planjure.components.canvas.draw_path.call(null,context,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(app_state),size);
if(cljs.core.truth_(new cljs.core.Keyword(null,"draw-visited","draw-visited",-4331685).cljs$core$IFn$_invoke$arity$1(app_state)))
{return planjure.components.canvas.draw_visited.call(null,context,new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(app_state),size);
} else
{return null;
}
});
planjure.components.canvas.mouse_pos_at = (function mouse_pos_at(canvas,e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),e.offsetY], null);
});
/**
* Returns map {:x x, :y y}.
*/
planjure.components.canvas.tile_pos_at = (function tile_pos_at(canvas,e){var map__780008 = planjure.components.canvas.mouse_pos_at.call(null,canvas,e);var map__780008__$1 = ((cljs.core.seq_QMARK_.call(null,map__780008))?cljs.core.apply.call(null,cljs.core.hash_map,map__780008):map__780008);var y = cljs.core.get.call(null,map__780008__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__780008__$1,new cljs.core.Keyword(null,"x","x",2099068185));var tile_size = planjure.components.canvas.get_selected_tile_size.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var x__3851__auto__ = (0);var y__3852__auto__ = ((x / tile_size) | (0));return ((x__3851__auto__ > y__3852__auto__) ? x__3851__auto__ : y__3852__auto__);
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var x__3851__auto__ = (0);var y__3852__auto__ = ((y / tile_size) | (0));return ((x__3851__auto__ > y__3852__auto__) ? x__3851__auto__ : y__3852__auto__);
})()], null);
});
/**
* Increase cost at x, y position in the world passed in via the app-state
* cursor.
*/
planjure.components.canvas.update_world_BANG_ = (function update_world_BANG_(app_state,x,y,multiplier){var brush_size = new cljs.core.Keyword(null,"brush-size","brush-size",1861153315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));var matrix = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brush-size-options","brush-size-options",1610347807),brush_size,new cljs.core.Keyword(null,"matrix","matrix",803137200)], null));var new_world = planjure.utils.update_world.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),matrix,x,y,multiplier);return planjure.appstate.update_world_state_BANG_.call(null,app_state,new_world);
});
planjure.components.canvas.erase_at = (function erase_at(app_state,tile_pos){var map__780010 = tile_pos;var map__780010__$1 = ((cljs.core.seq_QMARK_.call(null,map__780010))?cljs.core.apply.call(null,cljs.core.hash_map,map__780010):map__780010);var y = cljs.core.get.call(null,map__780010__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__780010__$1,new cljs.core.Keyword(null,"x","x",2099068185));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,(-1));
});
planjure.components.canvas.paint_at = (function paint_at(app_state,tile_pos){var map__780012 = tile_pos;var map__780012__$1 = ((cljs.core.seq_QMARK_.call(null,map__780012))?cljs.core.apply.call(null,cljs.core.hash_map,map__780012):map__780012);var y = cljs.core.get.call(null,map__780012__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__780012__$1,new cljs.core.Keyword(null,"x","x",2099068185));return planjure.components.canvas.update_world_BANG_.call(null,app_state,x,y,(1));
});
/**
* Returns true if which (:start or :finish) node is being moved. Other return
* false.
*/
planjure.components.canvas.mouse_moving_QMARK_ = (function mouse_moving_QMARK_(which){return cljs.core.get_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-moving-setup","mouse-moving-setup",1151833279),which], null));
});
/**
* Update which (:start or :finish) node to given node. Stop mouse moving.
*/
planjure.components.canvas.place_node = (function place_node(app_state,which,node){om.core.update_BANG_.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),which], null),node);
return om.core.update_BANG_.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-moving-setup","mouse-moving-setup",1151833279),which], null),false);
});
/**
* Update which (:start or :finish) node to given node if mouse is moving.
* Otherwise, pick up node by starting mouse moving mode.
*/
planjure.components.canvas.place_or_pick_up_node = (function place_or_pick_up_node(app_state,which,node){if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-moving-setup","mouse-moving-setup",1151833279),which], null))))
{return planjure.components.canvas.place_node.call(null,app_state,which,node);
} else
{return om.core.update_BANG_.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-moving-setup","mouse-moving-setup",1151833279),which], null),true);
}
});
/**
* Given our canvas and mouseevent, move our `which` node (either :start or
* :finish) to the position of the mouse event.
*/
planjure.components.canvas.move_node_from_canvas = (function move_node_from_canvas(app_state,canvas,mouseevent,which){var tile_pos = planjure.components.canvas.tile_pos_at.call(null,canvas,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(mouseevent));var node_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tile_pos),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tile_pos)], null);return om.core.update_BANG_.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512),which], null),node_pos);
});
planjure.components.canvas.world_canvas_component = (function world_canvas_component(app_state,owner){if(typeof planjure.components.canvas.t780177 !== 'undefined')
{} else
{
/**
* @constructor
*/
planjure.components.canvas.t780177 = (function (owner,app_state,world_canvas_component,meta780178){
this.owner = owner;
this.app_state = app_state;
this.world_canvas_component = world_canvas_component;
this.meta780178 = meta780178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planjure.components.canvas.t780177.cljs$lang$type = true;
planjure.components.canvas.t780177.cljs$lang$ctorStr = "planjure.components.canvas/t780177";
planjure.components.canvas.t780177.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"planjure.components.canvas/t780177");
});
planjure.components.canvas.t780177.prototype.om$core$IRender$ = true;
planjure.components.canvas.t780177.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.canvas({"ref": "world-canvas-ref", "className": "world-canvas", "height": cljs.core.get_in.call(null,self__.app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"height","height",1025178622)], null)), "width": cljs.core.get_in.call(null,self__.app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"width","width",-384071477)], null)), "id": "world-canvas"});
});
planjure.components.canvas.t780177.prototype.om$core$IDidUpdate$ = true;
planjure.components.canvas.t780177.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (a,b,c){var self__ = this;
var a__$1 = this;return planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
});
planjure.components.canvas.t780177.prototype.om$core$IDidMount$ = true;
planjure.components.canvas.t780177.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;planjure.components.canvas.refresh_world.call(null,self__.app_state,self__.owner,"world-canvas-ref");
var world_canvas_780337 = om.core.get_node.call(null,self__.owner,"world-canvas-ref");goog.events.listen(world_canvas_780337,"click",((function (world_canvas_780337,this$__$1){
return (function (p1__780013_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__780013_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"click","click",1912301393)], null));
});})(world_canvas_780337,this$__$1))
);
goog.events.listen(world_canvas_780337,"mousedown",((function (world_canvas_780337,this$__$1){
return (function (p1__780014_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__780014_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)], null));
});})(world_canvas_780337,this$__$1))
);
goog.events.listen(world_canvas_780337,"mouseup",((function (world_canvas_780337,this$__$1){
return (function (p1__780015_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__780015_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mouseup","mouseup",350619456)], null));
});})(world_canvas_780337,this$__$1))
);
goog.events.listen(world_canvas_780337,"mousemove",((function (world_canvas_780337,this$__$1){
return (function (p1__780016_SHARP_){return cljs.core.async.put_BANG_.call(null,planjure.components.canvas.mouse_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),p1__780016_SHARP_,new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734)], null));
});})(world_canvas_780337,this$__$1))
);
var canvas = om.core.get_node.call(null,self__.owner,"world-canvas-ref");var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",675853683));var c__6257__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto__,canvas,mouse_chan,this$__$1){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto__,canvas,mouse_chan,this$__$1){
return (function (state_780274){var state_val_780275 = (state_780274[(1)]);if((state_val_780275 === (7)))
{var inst_780183 = (state_780274[(7)]);var inst_780183__$1 = (state_780274[(2)]);var inst_780264 = new cljs.core.Keyword(null,"mouseevent","mouseevent",-1021122322).cljs$core$IFn$_invoke$arity$1(inst_780183__$1);var state_780274__$1 = (function (){var statearr_780276 = state_780274;(statearr_780276[(7)] = inst_780183__$1);
return statearr_780276;
})();var G__780277_780338 = (((inst_780264 instanceof cljs.core.Keyword))?inst_780264.fqn:null);switch (G__780277_780338) {
case "mousemove":
var statearr_780278_780340 = state_780274__$1;(statearr_780278_780340[(1)] = (24));

break;
case "mouseup":
var statearr_780279_780341 = state_780274__$1;(statearr_780279_780341[(1)] = (23));

break;
case "mousedown":
var statearr_780280_780342 = state_780274__$1;(statearr_780280_780342[(1)] = (22));

break;
case "click":
var statearr_780281_780343 = state_780274__$1;(statearr_780281_780343[(1)] = (9));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_780264))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (20)))
{var state_780274__$1 = state_780274;var statearr_780282_780344 = state_780274__$1;(statearr_780282_780344[(2)] = null);
(statearr_780282_780344[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (27)))
{var inst_780262 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780283_780345 = state_780274__$1;(statearr_780283_780345[(2)] = inst_780262);
(statearr_780283_780345[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (1)))
{var state_780274__$1 = state_780274;var statearr_780284_780346 = state_780274__$1;(statearr_780284_780346[(2)] = null);
(statearr_780284_780346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (24)))
{var inst_780235 = planjure.components.canvas.mouse_moving_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981));var state_780274__$1 = state_780274;if(cljs.core.truth_(inst_780235))
{var statearr_780285_780347 = state_780274__$1;(statearr_780285_780347[(1)] = (25));
} else
{var statearr_780286_780348 = state_780274__$1;(statearr_780286_780348[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (4)))
{var state_780274__$1 = state_780274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_780274__$1,(7),mouse_chan);
} else
{if((state_val_780275 === (15)))
{var inst_780222 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780287_780349 = state_780274__$1;(statearr_780287_780349[(2)] = inst_780222);
(statearr_780287_780349[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (21)))
{var inst_780218 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780288_780350 = state_780274__$1;(statearr_780288_780350[(2)] = inst_780218);
(statearr_780288_780350[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (31)))
{var inst_780183 = (state_780274[(7)]);var inst_780246 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_780183);var inst_780247 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_780246);var inst_780252 = cljs.core.deref.call(null,self__.app_state);var inst_780253 = new cljs.core.Keyword(null,"brush","brush",498034117).cljs$core$IFn$_invoke$arity$1(inst_780252);var state_780274__$1 = (function (){var statearr_780289 = state_780274;(statearr_780289[(8)] = inst_780247);
return statearr_780289;
})();var G__780290_780351 = (((inst_780253 instanceof cljs.core.Keyword))?inst_780253.fqn:null);switch (G__780290_780351) {
case "brush":
var statearr_780291_780353 = state_780274__$1;(statearr_780291_780353[(1)] = (36));

break;
case "eraser":
var statearr_780292_780354 = state_780274__$1;(statearr_780292_780354[(1)] = (35));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_780253))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (32)))
{var state_780274__$1 = state_780274;var statearr_780293_780355 = state_780274__$1;(statearr_780293_780355[(2)] = null);
(statearr_780293_780355[(1)] = (33));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (33)))
{var inst_780258 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780294_780356 = state_780274__$1;(statearr_780294_780356[(2)] = inst_780258);
(statearr_780294_780356[(1)] = (30));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (13)))
{var inst_780189 = (state_780274[(9)]);var inst_780207 = planjure.components.canvas.place_or_pick_up_node.call(null,self__.app_state,new cljs.core.Keyword(null,"finish","finish",-586688046),inst_780189);var state_780274__$1 = state_780274;var statearr_780295_780357 = state_780274__$1;(statearr_780295_780357[(2)] = inst_780207);
(statearr_780295_780357[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (22)))
{var inst_780226 = cljs.core.deref.call(null,self__.app_state);var inst_780227 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_780226);var inst_780228 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674),true);var inst_780229 = planjure.history.push_world.call(null,inst_780227);var state_780274__$1 = (function (){var statearr_780296 = state_780274;(statearr_780296[(10)] = inst_780228);
return statearr_780296;
})();var statearr_780297_780358 = state_780274__$1;(statearr_780297_780358[(2)] = inst_780229);
(statearr_780297_780358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (36)))
{var inst_780247 = (state_780274[(8)]);var inst_780250 = planjure.components.canvas.paint_at.call(null,self__.app_state,inst_780247);var state_780274__$1 = state_780274;var statearr_780298_780359 = state_780274__$1;(statearr_780298_780359[(2)] = inst_780250);
(statearr_780298_780359[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (29)))
{var inst_780243 = cljs.core.deref.call(null,self__.app_state);var inst_780244 = new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674).cljs$core$IFn$_invoke$arity$1(inst_780243);var state_780274__$1 = state_780274;if(cljs.core.truth_(inst_780244))
{var statearr_780299_780360 = state_780274__$1;(statearr_780299_780360[(1)] = (31));
} else
{var statearr_780300_780361 = state_780274__$1;(statearr_780300_780361[(1)] = (32));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (6)))
{var inst_780270 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780301_780362 = state_780274__$1;(statearr_780301_780362[(2)] = inst_780270);
(statearr_780301_780362[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (28)))
{var inst_780183 = (state_780274[(7)]);var inst_780241 = planjure.components.canvas.move_node_from_canvas.call(null,self__.app_state,canvas,inst_780183,new cljs.core.Keyword(null,"finish","finish",-586688046));var state_780274__$1 = state_780274;var statearr_780302_780363 = state_780274__$1;(statearr_780302_780363[(2)] = inst_780241);
(statearr_780302_780363[(1)] = (30));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (25)))
{var inst_780183 = (state_780274[(7)]);var inst_780237 = planjure.components.canvas.move_node_from_canvas.call(null,self__.app_state,canvas,inst_780183,new cljs.core.Keyword(null,"start","start",-355208981));var state_780274__$1 = state_780274;var statearr_780303_780364 = state_780274__$1;(statearr_780303_780364[(2)] = inst_780237);
(statearr_780303_780364[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (34)))
{var inst_780255 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780304_780365 = state_780274__$1;(statearr_780304_780365[(2)] = inst_780255);
(statearr_780304_780365[(1)] = (33));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (17)))
{var inst_780213 = planjure.components.canvas.mouse_moving_QMARK_.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046));var state_780274__$1 = state_780274;if(cljs.core.truth_(inst_780213))
{var statearr_780305_780366 = state_780274__$1;(statearr_780305_780366[(1)] = (19));
} else
{var statearr_780306_780367 = state_780274__$1;(statearr_780306_780367[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (3)))
{var inst_780272 = (state_780274[(2)]);var state_780274__$1 = state_780274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_780274__$1,inst_780272);
} else
{if((state_val_780275 === (12)))
{var inst_780224 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780307_780368 = state_780274__$1;(statearr_780307_780368[(2)] = inst_780224);
(statearr_780307_780368[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (2)))
{var state_780274__$1 = state_780274;if(true)
{var statearr_780308_780369 = state_780274__$1;(statearr_780308_780369[(1)] = (4));
} else
{var statearr_780309_780370 = state_780274__$1;(statearr_780309_780370[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (23)))
{var inst_780231 = cljs.core.deref.call(null,self__.app_state);var inst_780232 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_780231);var inst_780233 = om.core.update_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"mouse-drawing","mouse-drawing",-404132674),false);var state_780274__$1 = (function (){var statearr_780310 = state_780274;(statearr_780310[(11)] = inst_780232);
return statearr_780310;
})();var statearr_780311_780371 = state_780274__$1;(statearr_780311_780371[(2)] = inst_780233);
(statearr_780311_780371[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (35)))
{var inst_780247 = (state_780274[(8)]);var inst_780248 = planjure.components.canvas.erase_at.call(null,self__.app_state,inst_780247);var state_780274__$1 = state_780274;var statearr_780312_780372 = state_780274__$1;(statearr_780312_780372[(2)] = inst_780248);
(statearr_780312_780372[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (19)))
{var inst_780189 = (state_780274[(9)]);var inst_780215 = planjure.components.canvas.place_node.call(null,self__.app_state,new cljs.core.Keyword(null,"finish","finish",-586688046),inst_780189);var state_780274__$1 = state_780274;var statearr_780313_780373 = state_780274__$1;(statearr_780313_780373[(2)] = inst_780215);
(statearr_780313_780373[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (11)))
{var inst_780189 = (state_780274[(9)]);var inst_780201 = cljs.core.deref.call(null,self__.app_state);var inst_780202 = [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"finish","finish",-586688046)];var inst_780203 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_780202,null));var inst_780204 = cljs.core.get_in.call(null,inst_780201,inst_780203);var inst_780205 = cljs.core._EQ_.call(null,inst_780204,inst_780189);var state_780274__$1 = state_780274;if(inst_780205)
{var statearr_780314_780374 = state_780274__$1;(statearr_780314_780374[(1)] = (13));
} else
{var statearr_780315_780375 = state_780274__$1;(statearr_780315_780375[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (9)))
{var inst_780189 = (state_780274[(9)]);var inst_780183 = (state_780274[(7)]);var inst_780184 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_780183);var inst_780185 = planjure.components.canvas.tile_pos_at.call(null,canvas,inst_780184);var inst_780186 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_780185);var inst_780187 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_780185);var inst_780188 = [inst_780186,inst_780187];var inst_780189__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_780188,null));var inst_780193 = cljs.core.deref.call(null,self__.app_state);var inst_780194 = [new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"start","start",-355208981)];var inst_780195 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_780194,null));var inst_780196 = cljs.core.get_in.call(null,inst_780193,inst_780195);var inst_780197 = cljs.core._EQ_.call(null,inst_780196,inst_780189__$1);var state_780274__$1 = (function (){var statearr_780316 = state_780274;(statearr_780316[(9)] = inst_780189__$1);
return statearr_780316;
})();if(inst_780197)
{var statearr_780317_780376 = state_780274__$1;(statearr_780317_780376[(1)] = (10));
} else
{var statearr_780318_780377 = state_780274__$1;(statearr_780318_780377[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (5)))
{var state_780274__$1 = state_780274;var statearr_780319_780378 = state_780274__$1;(statearr_780319_780378[(2)] = null);
(statearr_780319_780378[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (14)))
{var inst_780209 = planjure.components.canvas.mouse_moving_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981));var state_780274__$1 = state_780274;if(cljs.core.truth_(inst_780209))
{var statearr_780320_780379 = state_780274__$1;(statearr_780320_780379[(1)] = (16));
} else
{var statearr_780321_780380 = state_780274__$1;(statearr_780321_780380[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (26)))
{var inst_780239 = planjure.components.canvas.mouse_moving_QMARK_.call(null,new cljs.core.Keyword(null,"finish","finish",-586688046));var state_780274__$1 = state_780274;if(cljs.core.truth_(inst_780239))
{var statearr_780322_780381 = state_780274__$1;(statearr_780322_780381[(1)] = (28));
} else
{var statearr_780323_780382 = state_780274__$1;(statearr_780323_780382[(1)] = (29));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (16)))
{var inst_780189 = (state_780274[(9)]);var inst_780211 = planjure.components.canvas.place_node.call(null,self__.app_state,new cljs.core.Keyword(null,"start","start",-355208981),inst_780189);var state_780274__$1 = state_780274;var statearr_780324_780383 = state_780274__$1;(statearr_780324_780383[(2)] = inst_780211);
(statearr_780324_780383[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (30)))
{var inst_780260 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780325_780384 = state_780274__$1;(statearr_780325_780384[(2)] = inst_780260);
(statearr_780325_780384[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (10)))
{var inst_780189 = (state_780274[(9)]);var inst_780199 = planjure.components.canvas.place_or_pick_up_node.call(null,self__.app_state,new cljs.core.Keyword(null,"start","start",-355208981),inst_780189);var state_780274__$1 = state_780274;var statearr_780326_780385 = state_780274__$1;(statearr_780326_780385[(2)] = inst_780199);
(statearr_780326_780385[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (18)))
{var inst_780220 = (state_780274[(2)]);var state_780274__$1 = state_780274;var statearr_780327_780386 = state_780274__$1;(statearr_780327_780386[(2)] = inst_780220);
(statearr_780327_780386[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_780275 === (8)))
{var inst_780266 = (state_780274[(2)]);var state_780274__$1 = (function (){var statearr_780328 = state_780274;(statearr_780328[(12)] = inst_780266);
return statearr_780328;
})();var statearr_780329_780387 = state_780274__$1;(statearr_780329_780387[(2)] = null);
(statearr_780329_780387[(1)] = (2));
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
}
}
}
}
}
}
}
}
}
});})(c__6257__auto__,canvas,mouse_chan,this$__$1))
;return ((function (switch__6192__auto__,c__6257__auto__,canvas,mouse_chan,this$__$1){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_780333 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_780333[(0)] = state_machine__6193__auto__);
(statearr_780333[(1)] = (1));
return statearr_780333;
});
var state_machine__6193__auto____1 = (function (state_780274){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_780274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e780334){if((e780334 instanceof Object))
{var ex__6196__auto__ = e780334;var statearr_780335_780388 = state_780274;(statearr_780335_780388[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_780274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e780334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__780389 = state_780274;
state_780274 = G__780389;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_780274){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_780274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto__,canvas,mouse_chan,this$__$1))
})();var state__6259__auto__ = (function (){var statearr_780336 = f__6258__auto__.call(null);(statearr_780336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto__);
return statearr_780336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto__,canvas,mouse_chan,this$__$1))
);
return c__6257__auto__;
});
planjure.components.canvas.t780177.prototype.om$core$IInitState$ = true;
planjure.components.canvas.t780177.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",675853683),planjure.components.canvas.mouse_chan], null);
});
planjure.components.canvas.t780177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_780179){var self__ = this;
var _780179__$1 = this;return self__.meta780178;
});
planjure.components.canvas.t780177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_780179,meta780178__$1){var self__ = this;
var _780179__$1 = this;return (new planjure.components.canvas.t780177(self__.owner,self__.app_state,self__.world_canvas_component,meta780178__$1));
});
planjure.components.canvas.__GT_t780177 = (function __GT_t780177(owner__$1,app_state__$1,world_canvas_component__$1,meta780178){return (new planjure.components.canvas.t780177(owner__$1,app_state__$1,world_canvas_component__$1,meta780178));
});
}
return (new planjure.components.canvas.t780177(owner,app_state,world_canvas_component,null));
});

//# sourceMappingURL=canvas.js.map