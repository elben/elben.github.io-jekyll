// Compiled by ClojureScript 0.0-2173
goog.provide('planjure.test.core');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
cemerick.cljs.test.deftest.call(null,planjure.test.core.a_test,(function (){try{cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"test-env","test-env",4160920740).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test._STAR_test_ctx_STAR_),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376)], null),cljs.core.conj,"FIXME, I fail.");
var _test_ctx = cemerick.cljs.test._STAR_test_ctx_STAR_;var async_QMARK___10088__auto__ = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_73997 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___10088__auto__)?null:_test_ctx);
try{try{var values__10108__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,1),0);var result__10109__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10108__auto__);if((result__10109__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__10109__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__10108__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,1)], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__10108__auto__)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,1)], null));
}
return result__10109__auto__;
}catch (e73999){if((e73999 instanceof Error))
{var t__10145__auto__ = e73999;return cemerick.cljs.test.do_report.call(null,_test_ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__10145__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,1)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73999;
} else
{return null;
}
}
}}catch (e73998){if((e73998 instanceof Error))
{var e__10089__auto__ = e73998;if(cljs.core.truth_(async_QMARK___10088__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__10089__auto__);
} else
{throw e__10089__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73998;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_73997;
}}finally {cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"test-env","test-env",4160920740).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test._STAR_test_ctx_STAR_),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376)], null),cljs.core.pop);
}})());

//# sourceMappingURL=core.js.map