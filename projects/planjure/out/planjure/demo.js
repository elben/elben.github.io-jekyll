// Compiled by ClojureScript 0.0-2280
goog.provide('planjure.demo');
goog.require('cljs.core');
goog.require('planjure.components.canvas');
goog.require('planjure.components.canvas');
goog.require('planjure.components.toolbar');
goog.require('planjure.components.toolbar');
goog.require('planjure.appstate');
goog.require('planjure.appstate');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om.core.root.call(null,planjure.components.canvas.world_canvas_component,planjure.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("world")], null));
om.core.root.call(null,planjure.components.toolbar.toolbar_component,planjure.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("toolbar")], null));

//# sourceMappingURL=demo.js.map