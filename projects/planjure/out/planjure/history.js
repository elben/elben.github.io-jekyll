// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.history');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
goog.require('planjure.appstate');
goog.require('planjure.appstate');
planjure.history.world_history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
planjure.history.world_future = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
planjure.history.push_world = (function push_world(world){cljs.core.swap_BANG_.call(null,planjure.history.world_history,cljs.core.conj,world);
return cljs.core.reset_BANG_.call(null,planjure.history.world_future,cljs.core.PersistentVector.EMPTY);
});
planjure.history.move_stack = (function move_stack(from_stack,to_stack){if((cljs.core.count.call(null,cljs.core.deref.call(null,from_stack)) > 0))
{var current_world = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planjure.appstate.app_state));var prev_world = cljs.core.last.call(null,cljs.core.deref.call(null,from_stack));cljs.core.swap_BANG_.call(null,from_stack,cljs.core.pop);
cljs.core.swap_BANG_.call(null,to_stack,cljs.core.conj,current_world);
cljs.core.reset_BANG_.call(null,planjure.appstate.app_state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,planjure.appstate.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",1127223044)], null),prev_world));
return prev_world;
} else
{return null;
}
});
planjure.history.undo = (function undo(){return planjure.history.move_stack.call(null,planjure.history.world_history,planjure.history.world_future);
});
planjure.history.redo = (function redo(){return planjure.history.move_stack.call(null,planjure.history.world_future,planjure.history.world_history);
});
planjure.history.reset = (function reset(){cljs.core.reset_BANG_.call(null,planjure.history.world_history,cljs.core.PersistentVector.EMPTY);
return cljs.core.reset_BANG_.call(null,planjure.history.world_future,cljs.core.PersistentVector.EMPTY);
});
planjure.history.undoable = (function undoable(){return (cljs.core.count.call(null,cljs.core.deref.call(null,planjure.history.world_history)) > 0);
});
planjure.history.redoable = (function redoable(){return (cljs.core.count.call(null,cljs.core.deref.call(null,planjure.history.world_future)) > 0);
});

//# sourceMappingURL=history.js.map