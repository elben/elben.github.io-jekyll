// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('planjure.plan');
goog.require('om.dom');
goog.require('om.core');
goog.require('planjure.components.toolbar');
goog.require('planjure.appstate');
goog.require('om.core');
goog.require('planjure.appstate');
goog.require('planjure.components.toolbar');
goog.require('planjure.components.canvas');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('planjure.components.canvas');
goog.require('planjure.plan');
cljs.core.enable_console_print_BANG_.call(null);
om.core.root.call(null,planjure.components.canvas.world_canvas_component,planjure.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("world")], null));
om.core.root.call(null,planjure.components.toolbar.toolbar_component,planjure.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));

//# sourceMappingURL=core.js.map