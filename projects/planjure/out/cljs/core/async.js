// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12033 = (function (f,fn_handler,meta12034){
this.f = f;
this.fn_handler = fn_handler;
this.meta12034 = meta12034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12033.cljs$lang$type = true;
cljs.core.async.t12033.cljs$lang$ctorStr = "cljs.core.async/t12033";
cljs.core.async.t12033.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12033");
});
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12035){var self__ = this;
var _12035__$1 = this;return self__.meta12034;
});
cljs.core.async.t12033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12035,meta12034__$1){var self__ = this;
var _12035__$1 = this;return (new cljs.core.async.t12033(self__.f,self__.fn_handler,meta12034__$1));
});
cljs.core.async.__GT_t12033 = (function __GT_t12033(f__$1,fn_handler__$1,meta12034){return (new cljs.core.async.t12033(f__$1,fn_handler__$1,meta12034));
});
}
return (new cljs.core.async.t12033(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12037 = buff;if(G__12037)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__12037.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12037.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12037);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12037);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12038 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12038);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12038,ret){
return (function (){return fn1.call(null,val_12038);
});})(val_12038,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___12039 = n;var x_12040 = (0);while(true){
if((x_12040 < n__4399__auto___12039))
{(a[x_12040] = (0));
{
var G__12041 = (x_12040 + (1));
x_12040 = G__12041;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12042 = (i + (1));
i = G__12042;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12046 = (function (flag,alt_flag,meta12047){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12047 = meta12047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12046.cljs$lang$type = true;
cljs.core.async.t12046.cljs$lang$ctorStr = "cljs.core.async/t12046";
cljs.core.async.t12046.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12046");
});})(flag))
;
cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12048){var self__ = this;
var _12048__$1 = this;return self__.meta12047;
});})(flag))
;
cljs.core.async.t12046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12048,meta12047__$1){var self__ = this;
var _12048__$1 = this;return (new cljs.core.async.t12046(self__.flag,self__.alt_flag,meta12047__$1));
});})(flag))
;
cljs.core.async.__GT_t12046 = ((function (flag){
return (function __GT_t12046(flag__$1,alt_flag__$1,meta12047){return (new cljs.core.async.t12046(flag__$1,alt_flag__$1,meta12047));
});})(flag))
;
}
return (new cljs.core.async.t12046(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12052 = (function (cb,flag,alt_handler,meta12053){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12053 = meta12053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12052.cljs$lang$type = true;
cljs.core.async.t12052.cljs$lang$ctorStr = "cljs.core.async/t12052";
cljs.core.async.t12052.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12052");
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12054){var self__ = this;
var _12054__$1 = this;return self__.meta12053;
});
cljs.core.async.t12052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12054,meta12053__$1){var self__ = this;
var _12054__$1 = this;return (new cljs.core.async.t12052(self__.cb,self__.flag,self__.alt_handler,meta12053__$1));
});
cljs.core.async.__GT_t12052 = (function __GT_t12052(cb__$1,flag__$1,alt_handler__$1,meta12053){return (new cljs.core.async.t12052(cb__$1,flag__$1,alt_handler__$1,meta12053));
});
}
return (new cljs.core.async.t12052(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12055_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12056_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12057 = (i + (1));
i = G__12057;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12058){var map__12060 = p__12058;var map__12060__$1 = ((cljs.core.seq_QMARK_.call(null,map__12060))?cljs.core.apply.call(null,cljs.core.hash_map,map__12060):map__12060);var opts = map__12060__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12058 = null;if (arguments.length > 1) {
  p__12058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12058);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12061){
var ports = cljs.core.first(arglist__12061);
var p__12058 = cljs.core.rest(arglist__12061);
return alts_BANG___delegate(ports,p__12058);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12069 = (function (ch,f,map_LT_,meta12070){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12070 = meta12070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12069.cljs$lang$type = true;
cljs.core.async.t12069.cljs$lang$ctorStr = "cljs.core.async/t12069";
cljs.core.async.t12069.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12069");
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12072 = (function (fn1,_,meta12070,ch,f,map_LT_,meta12073){
this.fn1 = fn1;
this._ = _;
this.meta12070 = meta12070;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12073 = meta12073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12072.cljs$lang$type = true;
cljs.core.async.t12072.cljs$lang$ctorStr = "cljs.core.async/t12072";
cljs.core.async.t12072.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12072");
});})(___$1))
;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12062_SHARP_){return f1.call(null,(((p1__12062_SHARP_ == null))?null:self__.f.call(null,p1__12062_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12074){var self__ = this;
var _12074__$1 = this;return self__.meta12073;
});})(___$1))
;
cljs.core.async.t12072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12074,meta12073__$1){var self__ = this;
var _12074__$1 = this;return (new cljs.core.async.t12072(self__.fn1,self__._,self__.meta12070,self__.ch,self__.f,self__.map_LT_,meta12073__$1));
});})(___$1))
;
cljs.core.async.__GT_t12072 = ((function (___$1){
return (function __GT_t12072(fn1__$1,___$2,meta12070__$1,ch__$2,f__$2,map_LT___$2,meta12073){return (new cljs.core.async.t12072(fn1__$1,___$2,meta12070__$1,ch__$2,f__$2,map_LT___$2,meta12073));
});})(___$1))
;
}
return (new cljs.core.async.t12072(fn1,___$1,self__.meta12070,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12071){var self__ = this;
var _12071__$1 = this;return self__.meta12070;
});
cljs.core.async.t12069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12071,meta12070__$1){var self__ = this;
var _12071__$1 = this;return (new cljs.core.async.t12069(self__.ch,self__.f,self__.map_LT_,meta12070__$1));
});
cljs.core.async.__GT_t12069 = (function __GT_t12069(ch__$1,f__$1,map_LT___$1,meta12070){return (new cljs.core.async.t12069(ch__$1,f__$1,map_LT___$1,meta12070));
});
}
return (new cljs.core.async.t12069(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12078 = (function (ch,f,map_GT_,meta12079){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12079 = meta12079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12078.cljs$lang$type = true;
cljs.core.async.t12078.cljs$lang$ctorStr = "cljs.core.async/t12078";
cljs.core.async.t12078.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12078");
});
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12080){var self__ = this;
var _12080__$1 = this;return self__.meta12079;
});
cljs.core.async.t12078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12080,meta12079__$1){var self__ = this;
var _12080__$1 = this;return (new cljs.core.async.t12078(self__.ch,self__.f,self__.map_GT_,meta12079__$1));
});
cljs.core.async.__GT_t12078 = (function __GT_t12078(ch__$1,f__$1,map_GT___$1,meta12079){return (new cljs.core.async.t12078(ch__$1,f__$1,map_GT___$1,meta12079));
});
}
return (new cljs.core.async.t12078(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12084 = (function (ch,p,filter_GT_,meta12085){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12085 = meta12085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12084.cljs$lang$type = true;
cljs.core.async.t12084.cljs$lang$ctorStr = "cljs.core.async/t12084";
cljs.core.async.t12084.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12084");
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12086){var self__ = this;
var _12086__$1 = this;return self__.meta12085;
});
cljs.core.async.t12084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12086,meta12085__$1){var self__ = this;
var _12086__$1 = this;return (new cljs.core.async.t12084(self__.ch,self__.p,self__.filter_GT_,meta12085__$1));
});
cljs.core.async.__GT_t12084 = (function __GT_t12084(ch__$1,p__$1,filter_GT___$1,meta12085){return (new cljs.core.async.t12084(ch__$1,p__$1,filter_GT___$1,meta12085));
});
}
return (new cljs.core.async.t12084(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___12169 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___12169,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___12169,out){
return (function (state_12148){var state_val_12149 = (state_12148[(1)]);if((state_val_12149 === (7)))
{var inst_12144 = (state_12148[(2)]);var state_12148__$1 = state_12148;var statearr_12150_12170 = state_12148__$1;(statearr_12150_12170[(2)] = inst_12144);
(statearr_12150_12170[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (1)))
{var state_12148__$1 = state_12148;var statearr_12151_12171 = state_12148__$1;(statearr_12151_12171[(2)] = null);
(statearr_12151_12171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (4)))
{var inst_12130 = (state_12148[(7)]);var inst_12130__$1 = (state_12148[(2)]);var inst_12131 = (inst_12130__$1 == null);var state_12148__$1 = (function (){var statearr_12152 = state_12148;(statearr_12152[(7)] = inst_12130__$1);
return statearr_12152;
})();if(cljs.core.truth_(inst_12131))
{var statearr_12153_12172 = state_12148__$1;(statearr_12153_12172[(1)] = (5));
} else
{var statearr_12154_12173 = state_12148__$1;(statearr_12154_12173[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (6)))
{var inst_12130 = (state_12148[(7)]);var inst_12135 = p.call(null,inst_12130);var state_12148__$1 = state_12148;if(cljs.core.truth_(inst_12135))
{var statearr_12155_12174 = state_12148__$1;(statearr_12155_12174[(1)] = (8));
} else
{var statearr_12156_12175 = state_12148__$1;(statearr_12156_12175[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (3)))
{var inst_12146 = (state_12148[(2)]);var state_12148__$1 = state_12148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12148__$1,inst_12146);
} else
{if((state_val_12149 === (2)))
{var state_12148__$1 = state_12148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12148__$1,(4),ch);
} else
{if((state_val_12149 === (11)))
{var inst_12138 = (state_12148[(2)]);var state_12148__$1 = state_12148;var statearr_12157_12176 = state_12148__$1;(statearr_12157_12176[(2)] = inst_12138);
(statearr_12157_12176[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (9)))
{var state_12148__$1 = state_12148;var statearr_12158_12177 = state_12148__$1;(statearr_12158_12177[(2)] = null);
(statearr_12158_12177[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (5)))
{var inst_12133 = cljs.core.async.close_BANG_.call(null,out);var state_12148__$1 = state_12148;var statearr_12159_12178 = state_12148__$1;(statearr_12159_12178[(2)] = inst_12133);
(statearr_12159_12178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (10)))
{var inst_12141 = (state_12148[(2)]);var state_12148__$1 = (function (){var statearr_12160 = state_12148;(statearr_12160[(8)] = inst_12141);
return statearr_12160;
})();var statearr_12161_12179 = state_12148__$1;(statearr_12161_12179[(2)] = null);
(statearr_12161_12179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12149 === (8)))
{var inst_12130 = (state_12148[(7)]);var state_12148__$1 = state_12148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12148__$1,(11),out,inst_12130);
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
});})(c__6256__auto___12169,out))
;return ((function (switch__6191__auto__,c__6256__auto___12169,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12165 = [null,null,null,null,null,null,null,null,null];(statearr_12165[(0)] = state_machine__6192__auto__);
(statearr_12165[(1)] = (1));
return statearr_12165;
});
var state_machine__6192__auto____1 = (function (state_12148){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12148);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12166){if((e12166 instanceof Object))
{var ex__6195__auto__ = e12166;var statearr_12167_12180 = state_12148;(statearr_12167_12180[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12148);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12181 = state_12148;
state_12148 = G__12181;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12148){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___12169,out))
})();var state__6258__auto__ = (function (){var statearr_12168 = f__6257__auto__.call(null);(statearr_12168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___12169);
return statearr_12168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___12169,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6256__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto__){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto__){
return (function (state_12347){var state_val_12348 = (state_12347[(1)]);if((state_val_12348 === (7)))
{var inst_12343 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12349_12390 = state_12347__$1;(statearr_12349_12390[(2)] = inst_12343);
(statearr_12349_12390[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (20)))
{var inst_12313 = (state_12347[(7)]);var inst_12324 = (state_12347[(2)]);var inst_12325 = cljs.core.next.call(null,inst_12313);var inst_12299 = inst_12325;var inst_12300 = null;var inst_12301 = (0);var inst_12302 = (0);var state_12347__$1 = (function (){var statearr_12350 = state_12347;(statearr_12350[(8)] = inst_12299);
(statearr_12350[(9)] = inst_12302);
(statearr_12350[(10)] = inst_12300);
(statearr_12350[(11)] = inst_12324);
(statearr_12350[(12)] = inst_12301);
return statearr_12350;
})();var statearr_12351_12391 = state_12347__$1;(statearr_12351_12391[(2)] = null);
(statearr_12351_12391[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (1)))
{var state_12347__$1 = state_12347;var statearr_12352_12392 = state_12347__$1;(statearr_12352_12392[(2)] = null);
(statearr_12352_12392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (4)))
{var inst_12288 = (state_12347[(13)]);var inst_12288__$1 = (state_12347[(2)]);var inst_12289 = (inst_12288__$1 == null);var state_12347__$1 = (function (){var statearr_12353 = state_12347;(statearr_12353[(13)] = inst_12288__$1);
return statearr_12353;
})();if(cljs.core.truth_(inst_12289))
{var statearr_12354_12393 = state_12347__$1;(statearr_12354_12393[(1)] = (5));
} else
{var statearr_12355_12394 = state_12347__$1;(statearr_12355_12394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (15)))
{var state_12347__$1 = state_12347;var statearr_12359_12395 = state_12347__$1;(statearr_12359_12395[(2)] = null);
(statearr_12359_12395[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (21)))
{var state_12347__$1 = state_12347;var statearr_12360_12396 = state_12347__$1;(statearr_12360_12396[(2)] = null);
(statearr_12360_12396[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (13)))
{var inst_12299 = (state_12347[(8)]);var inst_12302 = (state_12347[(9)]);var inst_12300 = (state_12347[(10)]);var inst_12301 = (state_12347[(12)]);var inst_12309 = (state_12347[(2)]);var inst_12310 = (inst_12302 + (1));var tmp12356 = inst_12299;var tmp12357 = inst_12300;var tmp12358 = inst_12301;var inst_12299__$1 = tmp12356;var inst_12300__$1 = tmp12357;var inst_12301__$1 = tmp12358;var inst_12302__$1 = inst_12310;var state_12347__$1 = (function (){var statearr_12361 = state_12347;(statearr_12361[(8)] = inst_12299__$1);
(statearr_12361[(9)] = inst_12302__$1);
(statearr_12361[(10)] = inst_12300__$1);
(statearr_12361[(12)] = inst_12301__$1);
(statearr_12361[(14)] = inst_12309);
return statearr_12361;
})();var statearr_12362_12397 = state_12347__$1;(statearr_12362_12397[(2)] = null);
(statearr_12362_12397[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (22)))
{var state_12347__$1 = state_12347;var statearr_12363_12398 = state_12347__$1;(statearr_12363_12398[(2)] = null);
(statearr_12363_12398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (6)))
{var inst_12288 = (state_12347[(13)]);var inst_12297 = f.call(null,inst_12288);var inst_12298 = cljs.core.seq.call(null,inst_12297);var inst_12299 = inst_12298;var inst_12300 = null;var inst_12301 = (0);var inst_12302 = (0);var state_12347__$1 = (function (){var statearr_12364 = state_12347;(statearr_12364[(8)] = inst_12299);
(statearr_12364[(9)] = inst_12302);
(statearr_12364[(10)] = inst_12300);
(statearr_12364[(12)] = inst_12301);
return statearr_12364;
})();var statearr_12365_12399 = state_12347__$1;(statearr_12365_12399[(2)] = null);
(statearr_12365_12399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (17)))
{var inst_12313 = (state_12347[(7)]);var inst_12317 = cljs.core.chunk_first.call(null,inst_12313);var inst_12318 = cljs.core.chunk_rest.call(null,inst_12313);var inst_12319 = cljs.core.count.call(null,inst_12317);var inst_12299 = inst_12318;var inst_12300 = inst_12317;var inst_12301 = inst_12319;var inst_12302 = (0);var state_12347__$1 = (function (){var statearr_12366 = state_12347;(statearr_12366[(8)] = inst_12299);
(statearr_12366[(9)] = inst_12302);
(statearr_12366[(10)] = inst_12300);
(statearr_12366[(12)] = inst_12301);
return statearr_12366;
})();var statearr_12367_12400 = state_12347__$1;(statearr_12367_12400[(2)] = null);
(statearr_12367_12400[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (3)))
{var inst_12345 = (state_12347[(2)]);var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12347__$1,inst_12345);
} else
{if((state_val_12348 === (12)))
{var inst_12333 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12368_12401 = state_12347__$1;(statearr_12368_12401[(2)] = inst_12333);
(statearr_12368_12401[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (2)))
{var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12347__$1,(4),in$);
} else
{if((state_val_12348 === (23)))
{var inst_12341 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12369_12402 = state_12347__$1;(statearr_12369_12402[(2)] = inst_12341);
(statearr_12369_12402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (19)))
{var inst_12328 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12370_12403 = state_12347__$1;(statearr_12370_12403[(2)] = inst_12328);
(statearr_12370_12403[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (11)))
{var inst_12299 = (state_12347[(8)]);var inst_12313 = (state_12347[(7)]);var inst_12313__$1 = cljs.core.seq.call(null,inst_12299);var state_12347__$1 = (function (){var statearr_12371 = state_12347;(statearr_12371[(7)] = inst_12313__$1);
return statearr_12371;
})();if(inst_12313__$1)
{var statearr_12372_12404 = state_12347__$1;(statearr_12372_12404[(1)] = (14));
} else
{var statearr_12373_12405 = state_12347__$1;(statearr_12373_12405[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (9)))
{var inst_12335 = (state_12347[(2)]);var inst_12336 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12347__$1 = (function (){var statearr_12374 = state_12347;(statearr_12374[(15)] = inst_12335);
return statearr_12374;
})();if(cljs.core.truth_(inst_12336))
{var statearr_12375_12406 = state_12347__$1;(statearr_12375_12406[(1)] = (21));
} else
{var statearr_12376_12407 = state_12347__$1;(statearr_12376_12407[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (5)))
{var inst_12291 = cljs.core.async.close_BANG_.call(null,out);var state_12347__$1 = state_12347;var statearr_12377_12408 = state_12347__$1;(statearr_12377_12408[(2)] = inst_12291);
(statearr_12377_12408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (14)))
{var inst_12313 = (state_12347[(7)]);var inst_12315 = cljs.core.chunked_seq_QMARK_.call(null,inst_12313);var state_12347__$1 = state_12347;if(inst_12315)
{var statearr_12378_12409 = state_12347__$1;(statearr_12378_12409[(1)] = (17));
} else
{var statearr_12379_12410 = state_12347__$1;(statearr_12379_12410[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (16)))
{var inst_12331 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12380_12411 = state_12347__$1;(statearr_12380_12411[(2)] = inst_12331);
(statearr_12380_12411[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (10)))
{var inst_12302 = (state_12347[(9)]);var inst_12300 = (state_12347[(10)]);var inst_12307 = cljs.core._nth.call(null,inst_12300,inst_12302);var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12347__$1,(13),out,inst_12307);
} else
{if((state_val_12348 === (18)))
{var inst_12313 = (state_12347[(7)]);var inst_12322 = cljs.core.first.call(null,inst_12313);var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12347__$1,(20),out,inst_12322);
} else
{if((state_val_12348 === (8)))
{var inst_12302 = (state_12347[(9)]);var inst_12301 = (state_12347[(12)]);var inst_12304 = (inst_12302 < inst_12301);var inst_12305 = inst_12304;var state_12347__$1 = state_12347;if(cljs.core.truth_(inst_12305))
{var statearr_12381_12412 = state_12347__$1;(statearr_12381_12412[(1)] = (10));
} else
{var statearr_12382_12413 = state_12347__$1;(statearr_12382_12413[(1)] = (11));
}
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
});})(c__6256__auto__))
;return ((function (switch__6191__auto__,c__6256__auto__){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12386[(0)] = state_machine__6192__auto__);
(statearr_12386[(1)] = (1));
return statearr_12386;
});
var state_machine__6192__auto____1 = (function (state_12347){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12387){if((e12387 instanceof Object))
{var ex__6195__auto__ = e12387;var statearr_12388_12414 = state_12347;(statearr_12388_12414[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12415 = state_12347;
state_12347 = G__12415;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12347){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto__))
})();var state__6258__auto__ = (function (){var statearr_12389 = f__6257__auto__.call(null);(statearr_12389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto__);
return statearr_12389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto__))
);
return c__6256__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6256__auto___12510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___12510){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___12510){
return (function (state_12486){var state_val_12487 = (state_12486[(1)]);if((state_val_12487 === (7)))
{var inst_12482 = (state_12486[(2)]);var state_12486__$1 = state_12486;var statearr_12488_12511 = state_12486__$1;(statearr_12488_12511[(2)] = inst_12482);
(statearr_12488_12511[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (1)))
{var state_12486__$1 = state_12486;var statearr_12489_12512 = state_12486__$1;(statearr_12489_12512[(2)] = null);
(statearr_12489_12512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (4)))
{var inst_12465 = (state_12486[(7)]);var inst_12465__$1 = (state_12486[(2)]);var inst_12466 = (inst_12465__$1 == null);var state_12486__$1 = (function (){var statearr_12490 = state_12486;(statearr_12490[(7)] = inst_12465__$1);
return statearr_12490;
})();if(cljs.core.truth_(inst_12466))
{var statearr_12491_12513 = state_12486__$1;(statearr_12491_12513[(1)] = (5));
} else
{var statearr_12492_12514 = state_12486__$1;(statearr_12492_12514[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (13)))
{var state_12486__$1 = state_12486;var statearr_12493_12515 = state_12486__$1;(statearr_12493_12515[(2)] = null);
(statearr_12493_12515[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (6)))
{var inst_12465 = (state_12486[(7)]);var state_12486__$1 = state_12486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12486__$1,(11),to,inst_12465);
} else
{if((state_val_12487 === (3)))
{var inst_12484 = (state_12486[(2)]);var state_12486__$1 = state_12486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12486__$1,inst_12484);
} else
{if((state_val_12487 === (12)))
{var state_12486__$1 = state_12486;var statearr_12494_12516 = state_12486__$1;(statearr_12494_12516[(2)] = null);
(statearr_12494_12516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (2)))
{var state_12486__$1 = state_12486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12486__$1,(4),from);
} else
{if((state_val_12487 === (11)))
{var inst_12475 = (state_12486[(2)]);var state_12486__$1 = state_12486;if(cljs.core.truth_(inst_12475))
{var statearr_12495_12517 = state_12486__$1;(statearr_12495_12517[(1)] = (12));
} else
{var statearr_12496_12518 = state_12486__$1;(statearr_12496_12518[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (9)))
{var state_12486__$1 = state_12486;var statearr_12497_12519 = state_12486__$1;(statearr_12497_12519[(2)] = null);
(statearr_12497_12519[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (5)))
{var state_12486__$1 = state_12486;if(cljs.core.truth_(close_QMARK_))
{var statearr_12498_12520 = state_12486__$1;(statearr_12498_12520[(1)] = (8));
} else
{var statearr_12499_12521 = state_12486__$1;(statearr_12499_12521[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (14)))
{var inst_12480 = (state_12486[(2)]);var state_12486__$1 = state_12486;var statearr_12500_12522 = state_12486__$1;(statearr_12500_12522[(2)] = inst_12480);
(statearr_12500_12522[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (10)))
{var inst_12472 = (state_12486[(2)]);var state_12486__$1 = state_12486;var statearr_12501_12523 = state_12486__$1;(statearr_12501_12523[(2)] = inst_12472);
(statearr_12501_12523[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12487 === (8)))
{var inst_12469 = cljs.core.async.close_BANG_.call(null,to);var state_12486__$1 = state_12486;var statearr_12502_12524 = state_12486__$1;(statearr_12502_12524[(2)] = inst_12469);
(statearr_12502_12524[(1)] = (10));
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
});})(c__6256__auto___12510))
;return ((function (switch__6191__auto__,c__6256__auto___12510){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12506 = [null,null,null,null,null,null,null,null];(statearr_12506[(0)] = state_machine__6192__auto__);
(statearr_12506[(1)] = (1));
return statearr_12506;
});
var state_machine__6192__auto____1 = (function (state_12486){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12507){if((e12507 instanceof Object))
{var ex__6195__auto__ = e12507;var statearr_12508_12525 = state_12486;(statearr_12508_12525[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12526 = state_12486;
state_12486 = G__12526;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12486){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___12510))
})();var state__6258__auto__ = (function (){var statearr_12509 = f__6257__auto__.call(null);(statearr_12509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___12510);
return statearr_12509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___12510))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6256__auto___12627 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___12627,tc,fc){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___12627,tc,fc){
return (function (state_12602){var state_val_12603 = (state_12602[(1)]);if((state_val_12603 === (7)))
{var inst_12598 = (state_12602[(2)]);var state_12602__$1 = state_12602;var statearr_12604_12628 = state_12602__$1;(statearr_12604_12628[(2)] = inst_12598);
(statearr_12604_12628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (1)))
{var state_12602__$1 = state_12602;var statearr_12605_12629 = state_12602__$1;(statearr_12605_12629[(2)] = null);
(statearr_12605_12629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (4)))
{var inst_12579 = (state_12602[(7)]);var inst_12579__$1 = (state_12602[(2)]);var inst_12580 = (inst_12579__$1 == null);var state_12602__$1 = (function (){var statearr_12606 = state_12602;(statearr_12606[(7)] = inst_12579__$1);
return statearr_12606;
})();if(cljs.core.truth_(inst_12580))
{var statearr_12607_12630 = state_12602__$1;(statearr_12607_12630[(1)] = (5));
} else
{var statearr_12608_12631 = state_12602__$1;(statearr_12608_12631[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (13)))
{var state_12602__$1 = state_12602;var statearr_12609_12632 = state_12602__$1;(statearr_12609_12632[(2)] = null);
(statearr_12609_12632[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (6)))
{var inst_12579 = (state_12602[(7)]);var inst_12585 = p.call(null,inst_12579);var state_12602__$1 = state_12602;if(cljs.core.truth_(inst_12585))
{var statearr_12610_12633 = state_12602__$1;(statearr_12610_12633[(1)] = (9));
} else
{var statearr_12611_12634 = state_12602__$1;(statearr_12611_12634[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (3)))
{var inst_12600 = (state_12602[(2)]);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12602__$1,inst_12600);
} else
{if((state_val_12603 === (12)))
{var state_12602__$1 = state_12602;var statearr_12612_12635 = state_12602__$1;(statearr_12612_12635[(2)] = null);
(statearr_12612_12635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (2)))
{var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12602__$1,(4),ch);
} else
{if((state_val_12603 === (11)))
{var inst_12579 = (state_12602[(7)]);var inst_12589 = (state_12602[(2)]);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12602__$1,(8),inst_12589,inst_12579);
} else
{if((state_val_12603 === (9)))
{var state_12602__$1 = state_12602;var statearr_12613_12636 = state_12602__$1;(statearr_12613_12636[(2)] = tc);
(statearr_12613_12636[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (5)))
{var inst_12582 = cljs.core.async.close_BANG_.call(null,tc);var inst_12583 = cljs.core.async.close_BANG_.call(null,fc);var state_12602__$1 = (function (){var statearr_12614 = state_12602;(statearr_12614[(8)] = inst_12582);
return statearr_12614;
})();var statearr_12615_12637 = state_12602__$1;(statearr_12615_12637[(2)] = inst_12583);
(statearr_12615_12637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (14)))
{var inst_12596 = (state_12602[(2)]);var state_12602__$1 = state_12602;var statearr_12616_12638 = state_12602__$1;(statearr_12616_12638[(2)] = inst_12596);
(statearr_12616_12638[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (10)))
{var state_12602__$1 = state_12602;var statearr_12617_12639 = state_12602__$1;(statearr_12617_12639[(2)] = fc);
(statearr_12617_12639[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (8)))
{var inst_12591 = (state_12602[(2)]);var state_12602__$1 = state_12602;if(cljs.core.truth_(inst_12591))
{var statearr_12618_12640 = state_12602__$1;(statearr_12618_12640[(1)] = (12));
} else
{var statearr_12619_12641 = state_12602__$1;(statearr_12619_12641[(1)] = (13));
}
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
});})(c__6256__auto___12627,tc,fc))
;return ((function (switch__6191__auto__,c__6256__auto___12627,tc,fc){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12623 = [null,null,null,null,null,null,null,null,null];(statearr_12623[(0)] = state_machine__6192__auto__);
(statearr_12623[(1)] = (1));
return statearr_12623;
});
var state_machine__6192__auto____1 = (function (state_12602){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12602);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12624){if((e12624 instanceof Object))
{var ex__6195__auto__ = e12624;var statearr_12625_12642 = state_12602;(statearr_12625_12642[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12643 = state_12602;
state_12602 = G__12643;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12602){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___12627,tc,fc))
})();var state__6258__auto__ = (function (){var statearr_12626 = f__6257__auto__.call(null);(statearr_12626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___12627);
return statearr_12626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___12627,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6256__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto__){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto__){
return (function (state_12690){var state_val_12691 = (state_12690[(1)]);if((state_val_12691 === (7)))
{var inst_12686 = (state_12690[(2)]);var state_12690__$1 = state_12690;var statearr_12692_12708 = state_12690__$1;(statearr_12692_12708[(2)] = inst_12686);
(statearr_12692_12708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12691 === (6)))
{var inst_12676 = (state_12690[(7)]);var inst_12679 = (state_12690[(8)]);var inst_12683 = f.call(null,inst_12676,inst_12679);var inst_12676__$1 = inst_12683;var state_12690__$1 = (function (){var statearr_12693 = state_12690;(statearr_12693[(7)] = inst_12676__$1);
return statearr_12693;
})();var statearr_12694_12709 = state_12690__$1;(statearr_12694_12709[(2)] = null);
(statearr_12694_12709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12691 === (5)))
{var inst_12676 = (state_12690[(7)]);var state_12690__$1 = state_12690;var statearr_12695_12710 = state_12690__$1;(statearr_12695_12710[(2)] = inst_12676);
(statearr_12695_12710[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12691 === (4)))
{var inst_12679 = (state_12690[(8)]);var inst_12679__$1 = (state_12690[(2)]);var inst_12680 = (inst_12679__$1 == null);var state_12690__$1 = (function (){var statearr_12696 = state_12690;(statearr_12696[(8)] = inst_12679__$1);
return statearr_12696;
})();if(cljs.core.truth_(inst_12680))
{var statearr_12697_12711 = state_12690__$1;(statearr_12697_12711[(1)] = (5));
} else
{var statearr_12698_12712 = state_12690__$1;(statearr_12698_12712[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12691 === (3)))
{var inst_12688 = (state_12690[(2)]);var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12690__$1,inst_12688);
} else
{if((state_val_12691 === (2)))
{var state_12690__$1 = state_12690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12690__$1,(4),ch);
} else
{if((state_val_12691 === (1)))
{var inst_12676 = init;var state_12690__$1 = (function (){var statearr_12699 = state_12690;(statearr_12699[(7)] = inst_12676);
return statearr_12699;
})();var statearr_12700_12713 = state_12690__$1;(statearr_12700_12713[(2)] = null);
(statearr_12700_12713[(1)] = (2));
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
});})(c__6256__auto__))
;return ((function (switch__6191__auto__,c__6256__auto__){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12704 = [null,null,null,null,null,null,null,null,null];(statearr_12704[(0)] = state_machine__6192__auto__);
(statearr_12704[(1)] = (1));
return statearr_12704;
});
var state_machine__6192__auto____1 = (function (state_12690){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12690);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12705){if((e12705 instanceof Object))
{var ex__6195__auto__ = e12705;var statearr_12706_12714 = state_12690;(statearr_12706_12714[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12690);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12715 = state_12690;
state_12690 = G__12715;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12690){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto__))
})();var state__6258__auto__ = (function (){var statearr_12707 = f__6257__auto__.call(null);(statearr_12707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto__);
return statearr_12707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto__))
);
return c__6256__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6256__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto__){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto__){
return (function (state_12789){var state_val_12790 = (state_12789[(1)]);if((state_val_12790 === (7)))
{var inst_12771 = (state_12789[(2)]);var state_12789__$1 = state_12789;var statearr_12791_12814 = state_12789__$1;(statearr_12791_12814[(2)] = inst_12771);
(statearr_12791_12814[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (1)))
{var inst_12765 = cljs.core.seq.call(null,coll);var inst_12766 = inst_12765;var state_12789__$1 = (function (){var statearr_12792 = state_12789;(statearr_12792[(7)] = inst_12766);
return statearr_12792;
})();var statearr_12793_12815 = state_12789__$1;(statearr_12793_12815[(2)] = null);
(statearr_12793_12815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (4)))
{var inst_12766 = (state_12789[(7)]);var inst_12769 = cljs.core.first.call(null,inst_12766);var state_12789__$1 = state_12789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12789__$1,(7),ch,inst_12769);
} else
{if((state_val_12790 === (13)))
{var inst_12783 = (state_12789[(2)]);var state_12789__$1 = state_12789;var statearr_12794_12816 = state_12789__$1;(statearr_12794_12816[(2)] = inst_12783);
(statearr_12794_12816[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (6)))
{var inst_12774 = (state_12789[(2)]);var state_12789__$1 = state_12789;if(cljs.core.truth_(inst_12774))
{var statearr_12795_12817 = state_12789__$1;(statearr_12795_12817[(1)] = (8));
} else
{var statearr_12796_12818 = state_12789__$1;(statearr_12796_12818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (3)))
{var inst_12787 = (state_12789[(2)]);var state_12789__$1 = state_12789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12789__$1,inst_12787);
} else
{if((state_val_12790 === (12)))
{var state_12789__$1 = state_12789;var statearr_12797_12819 = state_12789__$1;(statearr_12797_12819[(2)] = null);
(statearr_12797_12819[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (2)))
{var inst_12766 = (state_12789[(7)]);var state_12789__$1 = state_12789;if(cljs.core.truth_(inst_12766))
{var statearr_12798_12820 = state_12789__$1;(statearr_12798_12820[(1)] = (4));
} else
{var statearr_12799_12821 = state_12789__$1;(statearr_12799_12821[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (11)))
{var inst_12780 = cljs.core.async.close_BANG_.call(null,ch);var state_12789__$1 = state_12789;var statearr_12800_12822 = state_12789__$1;(statearr_12800_12822[(2)] = inst_12780);
(statearr_12800_12822[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (9)))
{var state_12789__$1 = state_12789;if(cljs.core.truth_(close_QMARK_))
{var statearr_12801_12823 = state_12789__$1;(statearr_12801_12823[(1)] = (11));
} else
{var statearr_12802_12824 = state_12789__$1;(statearr_12802_12824[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (5)))
{var inst_12766 = (state_12789[(7)]);var state_12789__$1 = state_12789;var statearr_12803_12825 = state_12789__$1;(statearr_12803_12825[(2)] = inst_12766);
(statearr_12803_12825[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (10)))
{var inst_12785 = (state_12789[(2)]);var state_12789__$1 = state_12789;var statearr_12804_12826 = state_12789__$1;(statearr_12804_12826[(2)] = inst_12785);
(statearr_12804_12826[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (8)))
{var inst_12766 = (state_12789[(7)]);var inst_12776 = cljs.core.next.call(null,inst_12766);var inst_12766__$1 = inst_12776;var state_12789__$1 = (function (){var statearr_12805 = state_12789;(statearr_12805[(7)] = inst_12766__$1);
return statearr_12805;
})();var statearr_12806_12827 = state_12789__$1;(statearr_12806_12827[(2)] = null);
(statearr_12806_12827[(1)] = (2));
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
});})(c__6256__auto__))
;return ((function (switch__6191__auto__,c__6256__auto__){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_12810 = [null,null,null,null,null,null,null,null];(statearr_12810[(0)] = state_machine__6192__auto__);
(statearr_12810[(1)] = (1));
return statearr_12810;
});
var state_machine__6192__auto____1 = (function (state_12789){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_12789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e12811){if((e12811 instanceof Object))
{var ex__6195__auto__ = e12811;var statearr_12812_12828 = state_12789;(statearr_12812_12828[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12829 = state_12789;
state_12789 = G__12829;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_12789){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_12789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto__))
})();var state__6258__auto__ = (function (){var statearr_12813 = f__6257__auto__.call(null);(statearr_12813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto__);
return statearr_12813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto__))
);
return c__6256__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12831 = {};return obj12831;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12833 = {};return obj12833;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13055 = (function (cs,ch,mult,meta13056){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13056 = meta13056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13055.cljs$lang$type = true;
cljs.core.async.t13055.cljs$lang$ctorStr = "cljs.core.async/t13055";
cljs.core.async.t13055.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13055");
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13057){var self__ = this;
var _13057__$1 = this;return self__.meta13056;
});})(cs))
;
cljs.core.async.t13055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13057,meta13056__$1){var self__ = this;
var _13057__$1 = this;return (new cljs.core.async.t13055(self__.cs,self__.ch,self__.mult,meta13056__$1));
});})(cs))
;
cljs.core.async.__GT_t13055 = ((function (cs){
return (function __GT_t13055(cs__$1,ch__$1,mult__$1,meta13056){return (new cljs.core.async.t13055(cs__$1,ch__$1,mult__$1,meta13056));
});})(cs))
;
}
return (new cljs.core.async.t13055(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6256__auto___13276 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___13276,cs,m,dchan,dctr,done){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___13276,cs,m,dchan,dctr,done){
return (function (state_13188){var state_val_13189 = (state_13188[(1)]);if((state_val_13189 === (7)))
{var inst_13184 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13190_13277 = state_13188__$1;(statearr_13190_13277[(2)] = inst_13184);
(statearr_13190_13277[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (20)))
{var inst_13089 = (state_13188[(7)]);var inst_13099 = cljs.core.first.call(null,inst_13089);var inst_13100 = cljs.core.nth.call(null,inst_13099,(0),null);var inst_13101 = cljs.core.nth.call(null,inst_13099,(1),null);var state_13188__$1 = (function (){var statearr_13191 = state_13188;(statearr_13191[(8)] = inst_13100);
return statearr_13191;
})();if(cljs.core.truth_(inst_13101))
{var statearr_13192_13278 = state_13188__$1;(statearr_13192_13278[(1)] = (22));
} else
{var statearr_13193_13279 = state_13188__$1;(statearr_13193_13279[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (27)))
{var inst_13131 = (state_13188[(9)]);var inst_13060 = (state_13188[(10)]);var inst_13136 = (state_13188[(11)]);var inst_13129 = (state_13188[(12)]);var inst_13136__$1 = cljs.core._nth.call(null,inst_13129,inst_13131);var inst_13137 = cljs.core.async.put_BANG_.call(null,inst_13136__$1,inst_13060,done);var state_13188__$1 = (function (){var statearr_13194 = state_13188;(statearr_13194[(11)] = inst_13136__$1);
return statearr_13194;
})();if(cljs.core.truth_(inst_13137))
{var statearr_13195_13280 = state_13188__$1;(statearr_13195_13280[(1)] = (30));
} else
{var statearr_13196_13281 = state_13188__$1;(statearr_13196_13281[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (1)))
{var state_13188__$1 = state_13188;var statearr_13197_13282 = state_13188__$1;(statearr_13197_13282[(2)] = null);
(statearr_13197_13282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (24)))
{var inst_13089 = (state_13188[(7)]);var inst_13106 = (state_13188[(2)]);var inst_13107 = cljs.core.next.call(null,inst_13089);var inst_13069 = inst_13107;var inst_13070 = null;var inst_13071 = (0);var inst_13072 = (0);var state_13188__$1 = (function (){var statearr_13198 = state_13188;(statearr_13198[(13)] = inst_13106);
(statearr_13198[(14)] = inst_13071);
(statearr_13198[(15)] = inst_13072);
(statearr_13198[(16)] = inst_13070);
(statearr_13198[(17)] = inst_13069);
return statearr_13198;
})();var statearr_13199_13283 = state_13188__$1;(statearr_13199_13283[(2)] = null);
(statearr_13199_13283[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (39)))
{var state_13188__$1 = state_13188;var statearr_13203_13284 = state_13188__$1;(statearr_13203_13284[(2)] = null);
(statearr_13203_13284[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (4)))
{var inst_13060 = (state_13188[(10)]);var inst_13060__$1 = (state_13188[(2)]);var inst_13061 = (inst_13060__$1 == null);var state_13188__$1 = (function (){var statearr_13204 = state_13188;(statearr_13204[(10)] = inst_13060__$1);
return statearr_13204;
})();if(cljs.core.truth_(inst_13061))
{var statearr_13205_13285 = state_13188__$1;(statearr_13205_13285[(1)] = (5));
} else
{var statearr_13206_13286 = state_13188__$1;(statearr_13206_13286[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (15)))
{var inst_13071 = (state_13188[(14)]);var inst_13072 = (state_13188[(15)]);var inst_13070 = (state_13188[(16)]);var inst_13069 = (state_13188[(17)]);var inst_13085 = (state_13188[(2)]);var inst_13086 = (inst_13072 + (1));var tmp13200 = inst_13071;var tmp13201 = inst_13070;var tmp13202 = inst_13069;var inst_13069__$1 = tmp13202;var inst_13070__$1 = tmp13201;var inst_13071__$1 = tmp13200;var inst_13072__$1 = inst_13086;var state_13188__$1 = (function (){var statearr_13207 = state_13188;(statearr_13207[(14)] = inst_13071__$1);
(statearr_13207[(15)] = inst_13072__$1);
(statearr_13207[(16)] = inst_13070__$1);
(statearr_13207[(17)] = inst_13069__$1);
(statearr_13207[(18)] = inst_13085);
return statearr_13207;
})();var statearr_13208_13287 = state_13188__$1;(statearr_13208_13287[(2)] = null);
(statearr_13208_13287[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (21)))
{var inst_13110 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13212_13288 = state_13188__$1;(statearr_13212_13288[(2)] = inst_13110);
(statearr_13212_13288[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (31)))
{var inst_13136 = (state_13188[(11)]);var inst_13140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13141 = cljs.core.async.untap_STAR_.call(null,m,inst_13136);var state_13188__$1 = (function (){var statearr_13213 = state_13188;(statearr_13213[(19)] = inst_13140);
return statearr_13213;
})();var statearr_13214_13289 = state_13188__$1;(statearr_13214_13289[(2)] = inst_13141);
(statearr_13214_13289[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (32)))
{var inst_13131 = (state_13188[(9)]);var inst_13130 = (state_13188[(20)]);var inst_13129 = (state_13188[(12)]);var inst_13128 = (state_13188[(21)]);var inst_13143 = (state_13188[(2)]);var inst_13144 = (inst_13131 + (1));var tmp13209 = inst_13130;var tmp13210 = inst_13129;var tmp13211 = inst_13128;var inst_13128__$1 = tmp13211;var inst_13129__$1 = tmp13210;var inst_13130__$1 = tmp13209;var inst_13131__$1 = inst_13144;var state_13188__$1 = (function (){var statearr_13215 = state_13188;(statearr_13215[(9)] = inst_13131__$1);
(statearr_13215[(20)] = inst_13130__$1);
(statearr_13215[(12)] = inst_13129__$1);
(statearr_13215[(21)] = inst_13128__$1);
(statearr_13215[(22)] = inst_13143);
return statearr_13215;
})();var statearr_13216_13290 = state_13188__$1;(statearr_13216_13290[(2)] = null);
(statearr_13216_13290[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (40)))
{var inst_13156 = (state_13188[(23)]);var inst_13160 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13161 = cljs.core.async.untap_STAR_.call(null,m,inst_13156);var state_13188__$1 = (function (){var statearr_13217 = state_13188;(statearr_13217[(24)] = inst_13160);
return statearr_13217;
})();var statearr_13218_13291 = state_13188__$1;(statearr_13218_13291[(2)] = inst_13161);
(statearr_13218_13291[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (33)))
{var inst_13147 = (state_13188[(25)]);var inst_13149 = cljs.core.chunked_seq_QMARK_.call(null,inst_13147);var state_13188__$1 = state_13188;if(inst_13149)
{var statearr_13219_13292 = state_13188__$1;(statearr_13219_13292[(1)] = (36));
} else
{var statearr_13220_13293 = state_13188__$1;(statearr_13220_13293[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (13)))
{var inst_13079 = (state_13188[(26)]);var inst_13082 = cljs.core.async.close_BANG_.call(null,inst_13079);var state_13188__$1 = state_13188;var statearr_13221_13294 = state_13188__$1;(statearr_13221_13294[(2)] = inst_13082);
(statearr_13221_13294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (22)))
{var inst_13100 = (state_13188[(8)]);var inst_13103 = cljs.core.async.close_BANG_.call(null,inst_13100);var state_13188__$1 = state_13188;var statearr_13222_13295 = state_13188__$1;(statearr_13222_13295[(2)] = inst_13103);
(statearr_13222_13295[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (36)))
{var inst_13147 = (state_13188[(25)]);var inst_13151 = cljs.core.chunk_first.call(null,inst_13147);var inst_13152 = cljs.core.chunk_rest.call(null,inst_13147);var inst_13153 = cljs.core.count.call(null,inst_13151);var inst_13128 = inst_13152;var inst_13129 = inst_13151;var inst_13130 = inst_13153;var inst_13131 = (0);var state_13188__$1 = (function (){var statearr_13223 = state_13188;(statearr_13223[(9)] = inst_13131);
(statearr_13223[(20)] = inst_13130);
(statearr_13223[(12)] = inst_13129);
(statearr_13223[(21)] = inst_13128);
return statearr_13223;
})();var statearr_13224_13296 = state_13188__$1;(statearr_13224_13296[(2)] = null);
(statearr_13224_13296[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (41)))
{var inst_13147 = (state_13188[(25)]);var inst_13163 = (state_13188[(2)]);var inst_13164 = cljs.core.next.call(null,inst_13147);var inst_13128 = inst_13164;var inst_13129 = null;var inst_13130 = (0);var inst_13131 = (0);var state_13188__$1 = (function (){var statearr_13225 = state_13188;(statearr_13225[(9)] = inst_13131);
(statearr_13225[(27)] = inst_13163);
(statearr_13225[(20)] = inst_13130);
(statearr_13225[(12)] = inst_13129);
(statearr_13225[(21)] = inst_13128);
return statearr_13225;
})();var statearr_13226_13297 = state_13188__$1;(statearr_13226_13297[(2)] = null);
(statearr_13226_13297[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (43)))
{var state_13188__$1 = state_13188;var statearr_13227_13298 = state_13188__$1;(statearr_13227_13298[(2)] = null);
(statearr_13227_13298[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (29)))
{var inst_13172 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13228_13299 = state_13188__$1;(statearr_13228_13299[(2)] = inst_13172);
(statearr_13228_13299[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (44)))
{var inst_13181 = (state_13188[(2)]);var state_13188__$1 = (function (){var statearr_13229 = state_13188;(statearr_13229[(28)] = inst_13181);
return statearr_13229;
})();var statearr_13230_13300 = state_13188__$1;(statearr_13230_13300[(2)] = null);
(statearr_13230_13300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (6)))
{var inst_13120 = (state_13188[(29)]);var inst_13119 = cljs.core.deref.call(null,cs);var inst_13120__$1 = cljs.core.keys.call(null,inst_13119);var inst_13121 = cljs.core.count.call(null,inst_13120__$1);var inst_13122 = cljs.core.reset_BANG_.call(null,dctr,inst_13121);var inst_13127 = cljs.core.seq.call(null,inst_13120__$1);var inst_13128 = inst_13127;var inst_13129 = null;var inst_13130 = (0);var inst_13131 = (0);var state_13188__$1 = (function (){var statearr_13231 = state_13188;(statearr_13231[(9)] = inst_13131);
(statearr_13231[(29)] = inst_13120__$1);
(statearr_13231[(20)] = inst_13130);
(statearr_13231[(12)] = inst_13129);
(statearr_13231[(21)] = inst_13128);
(statearr_13231[(30)] = inst_13122);
return statearr_13231;
})();var statearr_13232_13301 = state_13188__$1;(statearr_13232_13301[(2)] = null);
(statearr_13232_13301[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (28)))
{var inst_13128 = (state_13188[(21)]);var inst_13147 = (state_13188[(25)]);var inst_13147__$1 = cljs.core.seq.call(null,inst_13128);var state_13188__$1 = (function (){var statearr_13233 = state_13188;(statearr_13233[(25)] = inst_13147__$1);
return statearr_13233;
})();if(inst_13147__$1)
{var statearr_13234_13302 = state_13188__$1;(statearr_13234_13302[(1)] = (33));
} else
{var statearr_13235_13303 = state_13188__$1;(statearr_13235_13303[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (25)))
{var inst_13131 = (state_13188[(9)]);var inst_13130 = (state_13188[(20)]);var inst_13133 = (inst_13131 < inst_13130);var inst_13134 = inst_13133;var state_13188__$1 = state_13188;if(cljs.core.truth_(inst_13134))
{var statearr_13236_13304 = state_13188__$1;(statearr_13236_13304[(1)] = (27));
} else
{var statearr_13237_13305 = state_13188__$1;(statearr_13237_13305[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (34)))
{var state_13188__$1 = state_13188;var statearr_13238_13306 = state_13188__$1;(statearr_13238_13306[(2)] = null);
(statearr_13238_13306[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (17)))
{var state_13188__$1 = state_13188;var statearr_13239_13307 = state_13188__$1;(statearr_13239_13307[(2)] = null);
(statearr_13239_13307[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (3)))
{var inst_13186 = (state_13188[(2)]);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else
{if((state_val_13189 === (12)))
{var inst_13115 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13240_13308 = state_13188__$1;(statearr_13240_13308[(2)] = inst_13115);
(statearr_13240_13308[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (2)))
{var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,(4),ch);
} else
{if((state_val_13189 === (23)))
{var state_13188__$1 = state_13188;var statearr_13241_13309 = state_13188__$1;(statearr_13241_13309[(2)] = null);
(statearr_13241_13309[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (35)))
{var inst_13170 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13242_13310 = state_13188__$1;(statearr_13242_13310[(2)] = inst_13170);
(statearr_13242_13310[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (19)))
{var inst_13089 = (state_13188[(7)]);var inst_13093 = cljs.core.chunk_first.call(null,inst_13089);var inst_13094 = cljs.core.chunk_rest.call(null,inst_13089);var inst_13095 = cljs.core.count.call(null,inst_13093);var inst_13069 = inst_13094;var inst_13070 = inst_13093;var inst_13071 = inst_13095;var inst_13072 = (0);var state_13188__$1 = (function (){var statearr_13243 = state_13188;(statearr_13243[(14)] = inst_13071);
(statearr_13243[(15)] = inst_13072);
(statearr_13243[(16)] = inst_13070);
(statearr_13243[(17)] = inst_13069);
return statearr_13243;
})();var statearr_13244_13311 = state_13188__$1;(statearr_13244_13311[(2)] = null);
(statearr_13244_13311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (11)))
{var inst_13089 = (state_13188[(7)]);var inst_13069 = (state_13188[(17)]);var inst_13089__$1 = cljs.core.seq.call(null,inst_13069);var state_13188__$1 = (function (){var statearr_13245 = state_13188;(statearr_13245[(7)] = inst_13089__$1);
return statearr_13245;
})();if(inst_13089__$1)
{var statearr_13246_13312 = state_13188__$1;(statearr_13246_13312[(1)] = (16));
} else
{var statearr_13247_13313 = state_13188__$1;(statearr_13247_13313[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (9)))
{var inst_13117 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13248_13314 = state_13188__$1;(statearr_13248_13314[(2)] = inst_13117);
(statearr_13248_13314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (5)))
{var inst_13067 = cljs.core.deref.call(null,cs);var inst_13068 = cljs.core.seq.call(null,inst_13067);var inst_13069 = inst_13068;var inst_13070 = null;var inst_13071 = (0);var inst_13072 = (0);var state_13188__$1 = (function (){var statearr_13249 = state_13188;(statearr_13249[(14)] = inst_13071);
(statearr_13249[(15)] = inst_13072);
(statearr_13249[(16)] = inst_13070);
(statearr_13249[(17)] = inst_13069);
return statearr_13249;
})();var statearr_13250_13315 = state_13188__$1;(statearr_13250_13315[(2)] = null);
(statearr_13250_13315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (14)))
{var state_13188__$1 = state_13188;var statearr_13251_13316 = state_13188__$1;(statearr_13251_13316[(2)] = null);
(statearr_13251_13316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (45)))
{var inst_13178 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13252_13317 = state_13188__$1;(statearr_13252_13317[(2)] = inst_13178);
(statearr_13252_13317[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (26)))
{var inst_13120 = (state_13188[(29)]);var inst_13174 = (state_13188[(2)]);var inst_13175 = cljs.core.seq.call(null,inst_13120);var state_13188__$1 = (function (){var statearr_13253 = state_13188;(statearr_13253[(31)] = inst_13174);
return statearr_13253;
})();if(inst_13175)
{var statearr_13254_13318 = state_13188__$1;(statearr_13254_13318[(1)] = (42));
} else
{var statearr_13255_13319 = state_13188__$1;(statearr_13255_13319[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (16)))
{var inst_13089 = (state_13188[(7)]);var inst_13091 = cljs.core.chunked_seq_QMARK_.call(null,inst_13089);var state_13188__$1 = state_13188;if(inst_13091)
{var statearr_13256_13320 = state_13188__$1;(statearr_13256_13320[(1)] = (19));
} else
{var statearr_13257_13321 = state_13188__$1;(statearr_13257_13321[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (38)))
{var inst_13167 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13258_13322 = state_13188__$1;(statearr_13258_13322[(2)] = inst_13167);
(statearr_13258_13322[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (30)))
{var state_13188__$1 = state_13188;var statearr_13259_13323 = state_13188__$1;(statearr_13259_13323[(2)] = null);
(statearr_13259_13323[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (10)))
{var inst_13072 = (state_13188[(15)]);var inst_13070 = (state_13188[(16)]);var inst_13078 = cljs.core._nth.call(null,inst_13070,inst_13072);var inst_13079 = cljs.core.nth.call(null,inst_13078,(0),null);var inst_13080 = cljs.core.nth.call(null,inst_13078,(1),null);var state_13188__$1 = (function (){var statearr_13260 = state_13188;(statearr_13260[(26)] = inst_13079);
return statearr_13260;
})();if(cljs.core.truth_(inst_13080))
{var statearr_13261_13324 = state_13188__$1;(statearr_13261_13324[(1)] = (13));
} else
{var statearr_13262_13325 = state_13188__$1;(statearr_13262_13325[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (18)))
{var inst_13113 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13263_13326 = state_13188__$1;(statearr_13263_13326[(2)] = inst_13113);
(statearr_13263_13326[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (42)))
{var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,(45),dchan);
} else
{if((state_val_13189 === (37)))
{var inst_13060 = (state_13188[(10)]);var inst_13156 = (state_13188[(23)]);var inst_13147 = (state_13188[(25)]);var inst_13156__$1 = cljs.core.first.call(null,inst_13147);var inst_13157 = cljs.core.async.put_BANG_.call(null,inst_13156__$1,inst_13060,done);var state_13188__$1 = (function (){var statearr_13264 = state_13188;(statearr_13264[(23)] = inst_13156__$1);
return statearr_13264;
})();if(cljs.core.truth_(inst_13157))
{var statearr_13265_13327 = state_13188__$1;(statearr_13265_13327[(1)] = (39));
} else
{var statearr_13266_13328 = state_13188__$1;(statearr_13266_13328[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (8)))
{var inst_13071 = (state_13188[(14)]);var inst_13072 = (state_13188[(15)]);var inst_13074 = (inst_13072 < inst_13071);var inst_13075 = inst_13074;var state_13188__$1 = state_13188;if(cljs.core.truth_(inst_13075))
{var statearr_13267_13329 = state_13188__$1;(statearr_13267_13329[(1)] = (10));
} else
{var statearr_13268_13330 = state_13188__$1;(statearr_13268_13330[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
});})(c__6256__auto___13276,cs,m,dchan,dctr,done))
;return ((function (switch__6191__auto__,c__6256__auto___13276,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_13272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13272[(0)] = state_machine__6192__auto__);
(statearr_13272[(1)] = (1));
return statearr_13272;
});
var state_machine__6192__auto____1 = (function (state_13188){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_13188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e13273){if((e13273 instanceof Object))
{var ex__6195__auto__ = e13273;var statearr_13274_13331 = state_13188;(statearr_13274_13331[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13332 = state_13188;
state_13188 = G__13332;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___13276,cs,m,dchan,dctr,done))
})();var state__6258__auto__ = (function (){var statearr_13275 = f__6257__auto__.call(null);(statearr_13275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___13276);
return statearr_13275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___13276,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13334 = {};return obj13334;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13454 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13455){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13455 = meta13455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13454.cljs$lang$type = true;
cljs.core.async.t13454.cljs$lang$ctorStr = "cljs.core.async/t13454";
cljs.core.async.t13454.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13454");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13456){var self__ = this;
var _13456__$1 = this;return self__.meta13455;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13456,meta13455__$1){var self__ = this;
var _13456__$1 = this;return (new cljs.core.async.t13454(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13455__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13454 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13455){return (new cljs.core.async.t13454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13455));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13454(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6256__auto___13573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13526){var state_val_13527 = (state_13526[(1)]);if((state_val_13527 === (7)))
{var inst_13470 = (state_13526[(7)]);var inst_13475 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13470);var state_13526__$1 = state_13526;var statearr_13528_13574 = state_13526__$1;(statearr_13528_13574[(2)] = inst_13475);
(statearr_13528_13574[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (20)))
{var inst_13485 = (state_13526[(8)]);var state_13526__$1 = state_13526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13526__$1,(23),out,inst_13485);
} else
{if((state_val_13527 === (1)))
{var inst_13460 = (state_13526[(9)]);var inst_13460__$1 = calc_state.call(null);var inst_13461 = cljs.core.seq_QMARK_.call(null,inst_13460__$1);var state_13526__$1 = (function (){var statearr_13529 = state_13526;(statearr_13529[(9)] = inst_13460__$1);
return statearr_13529;
})();if(inst_13461)
{var statearr_13530_13575 = state_13526__$1;(statearr_13530_13575[(1)] = (2));
} else
{var statearr_13531_13576 = state_13526__$1;(statearr_13531_13576[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (24)))
{var inst_13478 = (state_13526[(10)]);var inst_13470 = inst_13478;var state_13526__$1 = (function (){var statearr_13532 = state_13526;(statearr_13532[(7)] = inst_13470);
return statearr_13532;
})();var statearr_13533_13577 = state_13526__$1;(statearr_13533_13577[(2)] = null);
(statearr_13533_13577[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (4)))
{var inst_13460 = (state_13526[(9)]);var inst_13466 = (state_13526[(2)]);var inst_13467 = cljs.core.get.call(null,inst_13466,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13468 = cljs.core.get.call(null,inst_13466,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13469 = cljs.core.get.call(null,inst_13466,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13470 = inst_13460;var state_13526__$1 = (function (){var statearr_13534 = state_13526;(statearr_13534[(11)] = inst_13469);
(statearr_13534[(12)] = inst_13468);
(statearr_13534[(13)] = inst_13467);
(statearr_13534[(7)] = inst_13470);
return statearr_13534;
})();var statearr_13535_13578 = state_13526__$1;(statearr_13535_13578[(2)] = null);
(statearr_13535_13578[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (15)))
{var state_13526__$1 = state_13526;var statearr_13536_13579 = state_13526__$1;(statearr_13536_13579[(2)] = null);
(statearr_13536_13579[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (21)))
{var inst_13478 = (state_13526[(10)]);var inst_13470 = inst_13478;var state_13526__$1 = (function (){var statearr_13537 = state_13526;(statearr_13537[(7)] = inst_13470);
return statearr_13537;
})();var statearr_13538_13580 = state_13526__$1;(statearr_13538_13580[(2)] = null);
(statearr_13538_13580[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (13)))
{var inst_13522 = (state_13526[(2)]);var state_13526__$1 = state_13526;var statearr_13539_13581 = state_13526__$1;(statearr_13539_13581[(2)] = inst_13522);
(statearr_13539_13581[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (22)))
{var inst_13520 = (state_13526[(2)]);var state_13526__$1 = state_13526;var statearr_13540_13582 = state_13526__$1;(statearr_13540_13582[(2)] = inst_13520);
(statearr_13540_13582[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (6)))
{var inst_13524 = (state_13526[(2)]);var state_13526__$1 = state_13526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13526__$1,inst_13524);
} else
{if((state_val_13527 === (25)))
{var state_13526__$1 = state_13526;var statearr_13541_13583 = state_13526__$1;(statearr_13541_13583[(2)] = null);
(statearr_13541_13583[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (17)))
{var inst_13500 = (state_13526[(14)]);var state_13526__$1 = state_13526;var statearr_13542_13584 = state_13526__$1;(statearr_13542_13584[(2)] = inst_13500);
(statearr_13542_13584[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (3)))
{var inst_13460 = (state_13526[(9)]);var state_13526__$1 = state_13526;var statearr_13543_13585 = state_13526__$1;(statearr_13543_13585[(2)] = inst_13460);
(statearr_13543_13585[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (12)))
{var inst_13500 = (state_13526[(14)]);var inst_13481 = (state_13526[(15)]);var inst_13486 = (state_13526[(16)]);var inst_13500__$1 = inst_13481.call(null,inst_13486);var state_13526__$1 = (function (){var statearr_13544 = state_13526;(statearr_13544[(14)] = inst_13500__$1);
return statearr_13544;
})();if(cljs.core.truth_(inst_13500__$1))
{var statearr_13545_13586 = state_13526__$1;(statearr_13545_13586[(1)] = (17));
} else
{var statearr_13546_13587 = state_13526__$1;(statearr_13546_13587[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (2)))
{var inst_13460 = (state_13526[(9)]);var inst_13463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13460);var state_13526__$1 = state_13526;var statearr_13547_13588 = state_13526__$1;(statearr_13547_13588[(2)] = inst_13463);
(statearr_13547_13588[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (23)))
{var inst_13511 = (state_13526[(2)]);var state_13526__$1 = state_13526;if(cljs.core.truth_(inst_13511))
{var statearr_13548_13589 = state_13526__$1;(statearr_13548_13589[(1)] = (24));
} else
{var statearr_13549_13590 = state_13526__$1;(statearr_13549_13590[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (19)))
{var inst_13508 = (state_13526[(2)]);var state_13526__$1 = state_13526;if(cljs.core.truth_(inst_13508))
{var statearr_13550_13591 = state_13526__$1;(statearr_13550_13591[(1)] = (20));
} else
{var statearr_13551_13592 = state_13526__$1;(statearr_13551_13592[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (11)))
{var inst_13485 = (state_13526[(8)]);var inst_13491 = (inst_13485 == null);var state_13526__$1 = state_13526;if(cljs.core.truth_(inst_13491))
{var statearr_13552_13593 = state_13526__$1;(statearr_13552_13593[(1)] = (14));
} else
{var statearr_13553_13594 = state_13526__$1;(statearr_13553_13594[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (9)))
{var inst_13478 = (state_13526[(10)]);var inst_13478__$1 = (state_13526[(2)]);var inst_13479 = cljs.core.get.call(null,inst_13478__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13480 = cljs.core.get.call(null,inst_13478__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13481 = cljs.core.get.call(null,inst_13478__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13526__$1 = (function (){var statearr_13554 = state_13526;(statearr_13554[(15)] = inst_13481);
(statearr_13554[(10)] = inst_13478__$1);
(statearr_13554[(17)] = inst_13480);
return statearr_13554;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13526__$1,(10),inst_13479);
} else
{if((state_val_13527 === (5)))
{var inst_13470 = (state_13526[(7)]);var inst_13473 = cljs.core.seq_QMARK_.call(null,inst_13470);var state_13526__$1 = state_13526;if(inst_13473)
{var statearr_13555_13595 = state_13526__$1;(statearr_13555_13595[(1)] = (7));
} else
{var statearr_13556_13596 = state_13526__$1;(statearr_13556_13596[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (14)))
{var inst_13486 = (state_13526[(16)]);var inst_13493 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13486);var state_13526__$1 = state_13526;var statearr_13557_13597 = state_13526__$1;(statearr_13557_13597[(2)] = inst_13493);
(statearr_13557_13597[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (26)))
{var inst_13516 = (state_13526[(2)]);var state_13526__$1 = state_13526;var statearr_13558_13598 = state_13526__$1;(statearr_13558_13598[(2)] = inst_13516);
(statearr_13558_13598[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (16)))
{var inst_13496 = (state_13526[(2)]);var inst_13497 = calc_state.call(null);var inst_13470 = inst_13497;var state_13526__$1 = (function (){var statearr_13559 = state_13526;(statearr_13559[(18)] = inst_13496);
(statearr_13559[(7)] = inst_13470);
return statearr_13559;
})();var statearr_13560_13599 = state_13526__$1;(statearr_13560_13599[(2)] = null);
(statearr_13560_13599[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (10)))
{var inst_13485 = (state_13526[(8)]);var inst_13486 = (state_13526[(16)]);var inst_13484 = (state_13526[(2)]);var inst_13485__$1 = cljs.core.nth.call(null,inst_13484,(0),null);var inst_13486__$1 = cljs.core.nth.call(null,inst_13484,(1),null);var inst_13487 = (inst_13485__$1 == null);var inst_13488 = cljs.core._EQ_.call(null,inst_13486__$1,change);var inst_13489 = (inst_13487) || (inst_13488);var state_13526__$1 = (function (){var statearr_13561 = state_13526;(statearr_13561[(8)] = inst_13485__$1);
(statearr_13561[(16)] = inst_13486__$1);
return statearr_13561;
})();if(cljs.core.truth_(inst_13489))
{var statearr_13562_13600 = state_13526__$1;(statearr_13562_13600[(1)] = (11));
} else
{var statearr_13563_13601 = state_13526__$1;(statearr_13563_13601[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (18)))
{var inst_13481 = (state_13526[(15)]);var inst_13486 = (state_13526[(16)]);var inst_13480 = (state_13526[(17)]);var inst_13503 = cljs.core.empty_QMARK_.call(null,inst_13481);var inst_13504 = inst_13480.call(null,inst_13486);var inst_13505 = cljs.core.not.call(null,inst_13504);var inst_13506 = (inst_13503) && (inst_13505);var state_13526__$1 = state_13526;var statearr_13564_13602 = state_13526__$1;(statearr_13564_13602[(2)] = inst_13506);
(statearr_13564_13602[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13527 === (8)))
{var inst_13470 = (state_13526[(7)]);var state_13526__$1 = state_13526;var statearr_13565_13603 = state_13526__$1;(statearr_13565_13603[(2)] = inst_13470);
(statearr_13565_13603[(1)] = (9));
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
});})(c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6191__auto__,c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_13569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13569[(0)] = state_machine__6192__auto__);
(statearr_13569[(1)] = (1));
return statearr_13569;
});
var state_machine__6192__auto____1 = (function (state_13526){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_13526);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e13570){if((e13570 instanceof Object))
{var ex__6195__auto__ = e13570;var statearr_13571_13604 = state_13526;(statearr_13571_13604[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13526);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13605 = state_13526;
state_13526 = G__13605;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_13526){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_13526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6258__auto__ = (function (){var statearr_13572 = f__6257__auto__.call(null);(statearr_13572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___13573);
return statearr_13572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___13573,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13607 = {};return obj13607;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__13608_SHARP_){if(cljs.core.truth_(p1__13608_SHARP_.call(null,topic)))
{return p1__13608_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13608_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13731 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13732){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13732 = meta13732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13731.cljs$lang$type = true;
cljs.core.async.t13731.cljs$lang$ctorStr = "cljs.core.async/t13731";
cljs.core.async.t13731.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13731");
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13733){var self__ = this;
var _13733__$1 = this;return self__.meta13732;
});})(mults,ensure_mult))
;
cljs.core.async.t13731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13733,meta13732__$1){var self__ = this;
var _13733__$1 = this;return (new cljs.core.async.t13731(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13732__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13731 = ((function (mults,ensure_mult){
return (function __GT_t13731(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13732){return (new cljs.core.async.t13731(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13732));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13731(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6256__auto___13853 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___13853,mults,ensure_mult,p){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___13853,mults,ensure_mult,p){
return (function (state_13805){var state_val_13806 = (state_13805[(1)]);if((state_val_13806 === (7)))
{var inst_13801 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13807_13854 = state_13805__$1;(statearr_13807_13854[(2)] = inst_13801);
(statearr_13807_13854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (20)))
{var state_13805__$1 = state_13805;var statearr_13808_13855 = state_13805__$1;(statearr_13808_13855[(2)] = null);
(statearr_13808_13855[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (1)))
{var state_13805__$1 = state_13805;var statearr_13809_13856 = state_13805__$1;(statearr_13809_13856[(2)] = null);
(statearr_13809_13856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (24)))
{var inst_13784 = (state_13805[(7)]);var inst_13793 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13784);var state_13805__$1 = state_13805;var statearr_13810_13857 = state_13805__$1;(statearr_13810_13857[(2)] = inst_13793);
(statearr_13810_13857[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (4)))
{var inst_13736 = (state_13805[(8)]);var inst_13736__$1 = (state_13805[(2)]);var inst_13737 = (inst_13736__$1 == null);var state_13805__$1 = (function (){var statearr_13811 = state_13805;(statearr_13811[(8)] = inst_13736__$1);
return statearr_13811;
})();if(cljs.core.truth_(inst_13737))
{var statearr_13812_13858 = state_13805__$1;(statearr_13812_13858[(1)] = (5));
} else
{var statearr_13813_13859 = state_13805__$1;(statearr_13813_13859[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (15)))
{var inst_13778 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13814_13860 = state_13805__$1;(statearr_13814_13860[(2)] = inst_13778);
(statearr_13814_13860[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (21)))
{var inst_13798 = (state_13805[(2)]);var state_13805__$1 = (function (){var statearr_13815 = state_13805;(statearr_13815[(9)] = inst_13798);
return statearr_13815;
})();var statearr_13816_13861 = state_13805__$1;(statearr_13816_13861[(2)] = null);
(statearr_13816_13861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (13)))
{var inst_13760 = (state_13805[(10)]);var inst_13762 = cljs.core.chunked_seq_QMARK_.call(null,inst_13760);var state_13805__$1 = state_13805;if(inst_13762)
{var statearr_13817_13862 = state_13805__$1;(statearr_13817_13862[(1)] = (16));
} else
{var statearr_13818_13863 = state_13805__$1;(statearr_13818_13863[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (22)))
{var inst_13790 = (state_13805[(2)]);var state_13805__$1 = state_13805;if(cljs.core.truth_(inst_13790))
{var statearr_13819_13864 = state_13805__$1;(statearr_13819_13864[(1)] = (23));
} else
{var statearr_13820_13865 = state_13805__$1;(statearr_13820_13865[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (6)))
{var inst_13736 = (state_13805[(8)]);var inst_13786 = (state_13805[(11)]);var inst_13784 = (state_13805[(7)]);var inst_13784__$1 = topic_fn.call(null,inst_13736);var inst_13785 = cljs.core.deref.call(null,mults);var inst_13786__$1 = cljs.core.get.call(null,inst_13785,inst_13784__$1);var state_13805__$1 = (function (){var statearr_13821 = state_13805;(statearr_13821[(11)] = inst_13786__$1);
(statearr_13821[(7)] = inst_13784__$1);
return statearr_13821;
})();if(cljs.core.truth_(inst_13786__$1))
{var statearr_13822_13866 = state_13805__$1;(statearr_13822_13866[(1)] = (19));
} else
{var statearr_13823_13867 = state_13805__$1;(statearr_13823_13867[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (25)))
{var inst_13795 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13824_13868 = state_13805__$1;(statearr_13824_13868[(2)] = inst_13795);
(statearr_13824_13868[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (17)))
{var inst_13760 = (state_13805[(10)]);var inst_13769 = cljs.core.first.call(null,inst_13760);var inst_13770 = cljs.core.async.muxch_STAR_.call(null,inst_13769);var inst_13771 = cljs.core.async.close_BANG_.call(null,inst_13770);var inst_13772 = cljs.core.next.call(null,inst_13760);var inst_13746 = inst_13772;var inst_13747 = null;var inst_13748 = (0);var inst_13749 = (0);var state_13805__$1 = (function (){var statearr_13825 = state_13805;(statearr_13825[(12)] = inst_13747);
(statearr_13825[(13)] = inst_13746);
(statearr_13825[(14)] = inst_13748);
(statearr_13825[(15)] = inst_13771);
(statearr_13825[(16)] = inst_13749);
return statearr_13825;
})();var statearr_13826_13869 = state_13805__$1;(statearr_13826_13869[(2)] = null);
(statearr_13826_13869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (3)))
{var inst_13803 = (state_13805[(2)]);var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13805__$1,inst_13803);
} else
{if((state_val_13806 === (12)))
{var inst_13780 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13827_13870 = state_13805__$1;(statearr_13827_13870[(2)] = inst_13780);
(statearr_13827_13870[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (2)))
{var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13805__$1,(4),ch);
} else
{if((state_val_13806 === (23)))
{var state_13805__$1 = state_13805;var statearr_13828_13871 = state_13805__$1;(statearr_13828_13871[(2)] = null);
(statearr_13828_13871[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (19)))
{var inst_13736 = (state_13805[(8)]);var inst_13786 = (state_13805[(11)]);var inst_13788 = cljs.core.async.muxch_STAR_.call(null,inst_13786);var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13805__$1,(22),inst_13788,inst_13736);
} else
{if((state_val_13806 === (11)))
{var inst_13760 = (state_13805[(10)]);var inst_13746 = (state_13805[(13)]);var inst_13760__$1 = cljs.core.seq.call(null,inst_13746);var state_13805__$1 = (function (){var statearr_13829 = state_13805;(statearr_13829[(10)] = inst_13760__$1);
return statearr_13829;
})();if(inst_13760__$1)
{var statearr_13830_13872 = state_13805__$1;(statearr_13830_13872[(1)] = (13));
} else
{var statearr_13831_13873 = state_13805__$1;(statearr_13831_13873[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (9)))
{var inst_13782 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13832_13874 = state_13805__$1;(statearr_13832_13874[(2)] = inst_13782);
(statearr_13832_13874[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (5)))
{var inst_13743 = cljs.core.deref.call(null,mults);var inst_13744 = cljs.core.vals.call(null,inst_13743);var inst_13745 = cljs.core.seq.call(null,inst_13744);var inst_13746 = inst_13745;var inst_13747 = null;var inst_13748 = (0);var inst_13749 = (0);var state_13805__$1 = (function (){var statearr_13833 = state_13805;(statearr_13833[(12)] = inst_13747);
(statearr_13833[(13)] = inst_13746);
(statearr_13833[(14)] = inst_13748);
(statearr_13833[(16)] = inst_13749);
return statearr_13833;
})();var statearr_13834_13875 = state_13805__$1;(statearr_13834_13875[(2)] = null);
(statearr_13834_13875[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (14)))
{var state_13805__$1 = state_13805;var statearr_13838_13876 = state_13805__$1;(statearr_13838_13876[(2)] = null);
(statearr_13838_13876[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (16)))
{var inst_13760 = (state_13805[(10)]);var inst_13764 = cljs.core.chunk_first.call(null,inst_13760);var inst_13765 = cljs.core.chunk_rest.call(null,inst_13760);var inst_13766 = cljs.core.count.call(null,inst_13764);var inst_13746 = inst_13765;var inst_13747 = inst_13764;var inst_13748 = inst_13766;var inst_13749 = (0);var state_13805__$1 = (function (){var statearr_13839 = state_13805;(statearr_13839[(12)] = inst_13747);
(statearr_13839[(13)] = inst_13746);
(statearr_13839[(14)] = inst_13748);
(statearr_13839[(16)] = inst_13749);
return statearr_13839;
})();var statearr_13840_13877 = state_13805__$1;(statearr_13840_13877[(2)] = null);
(statearr_13840_13877[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (10)))
{var inst_13747 = (state_13805[(12)]);var inst_13746 = (state_13805[(13)]);var inst_13748 = (state_13805[(14)]);var inst_13749 = (state_13805[(16)]);var inst_13754 = cljs.core._nth.call(null,inst_13747,inst_13749);var inst_13755 = cljs.core.async.muxch_STAR_.call(null,inst_13754);var inst_13756 = cljs.core.async.close_BANG_.call(null,inst_13755);var inst_13757 = (inst_13749 + (1));var tmp13835 = inst_13747;var tmp13836 = inst_13746;var tmp13837 = inst_13748;var inst_13746__$1 = tmp13836;var inst_13747__$1 = tmp13835;var inst_13748__$1 = tmp13837;var inst_13749__$1 = inst_13757;var state_13805__$1 = (function (){var statearr_13841 = state_13805;(statearr_13841[(12)] = inst_13747__$1);
(statearr_13841[(13)] = inst_13746__$1);
(statearr_13841[(14)] = inst_13748__$1);
(statearr_13841[(17)] = inst_13756);
(statearr_13841[(16)] = inst_13749__$1);
return statearr_13841;
})();var statearr_13842_13878 = state_13805__$1;(statearr_13842_13878[(2)] = null);
(statearr_13842_13878[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (18)))
{var inst_13775 = (state_13805[(2)]);var state_13805__$1 = state_13805;var statearr_13843_13879 = state_13805__$1;(statearr_13843_13879[(2)] = inst_13775);
(statearr_13843_13879[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13806 === (8)))
{var inst_13748 = (state_13805[(14)]);var inst_13749 = (state_13805[(16)]);var inst_13751 = (inst_13749 < inst_13748);var inst_13752 = inst_13751;var state_13805__$1 = state_13805;if(cljs.core.truth_(inst_13752))
{var statearr_13844_13880 = state_13805__$1;(statearr_13844_13880[(1)] = (10));
} else
{var statearr_13845_13881 = state_13805__$1;(statearr_13845_13881[(1)] = (11));
}
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
});})(c__6256__auto___13853,mults,ensure_mult,p))
;return ((function (switch__6191__auto__,c__6256__auto___13853,mults,ensure_mult,p){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_13849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13849[(0)] = state_machine__6192__auto__);
(statearr_13849[(1)] = (1));
return statearr_13849;
});
var state_machine__6192__auto____1 = (function (state_13805){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_13805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e13850){if((e13850 instanceof Object))
{var ex__6195__auto__ = e13850;var statearr_13851_13882 = state_13805;(statearr_13851_13882[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13883 = state_13805;
state_13805 = G__13883;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_13805){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_13805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___13853,mults,ensure_mult,p))
})();var state__6258__auto__ = (function (){var statearr_13852 = f__6257__auto__.call(null);(statearr_13852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___13853);
return statearr_13852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___13853,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6256__auto___14020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13990){var state_val_13991 = (state_13990[(1)]);if((state_val_13991 === (7)))
{var state_13990__$1 = state_13990;var statearr_13992_14021 = state_13990__$1;(statearr_13992_14021[(2)] = null);
(statearr_13992_14021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (1)))
{var state_13990__$1 = state_13990;var statearr_13993_14022 = state_13990__$1;(statearr_13993_14022[(2)] = null);
(statearr_13993_14022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (4)))
{var inst_13954 = (state_13990[(7)]);var inst_13956 = (inst_13954 < cnt);var state_13990__$1 = state_13990;if(cljs.core.truth_(inst_13956))
{var statearr_13994_14023 = state_13990__$1;(statearr_13994_14023[(1)] = (6));
} else
{var statearr_13995_14024 = state_13990__$1;(statearr_13995_14024[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (15)))
{var inst_13986 = (state_13990[(2)]);var state_13990__$1 = state_13990;var statearr_13996_14025 = state_13990__$1;(statearr_13996_14025[(2)] = inst_13986);
(statearr_13996_14025[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (13)))
{var inst_13979 = cljs.core.async.close_BANG_.call(null,out);var state_13990__$1 = state_13990;var statearr_13997_14026 = state_13990__$1;(statearr_13997_14026[(2)] = inst_13979);
(statearr_13997_14026[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (6)))
{var state_13990__$1 = state_13990;var statearr_13998_14027 = state_13990__$1;(statearr_13998_14027[(2)] = null);
(statearr_13998_14027[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (3)))
{var inst_13988 = (state_13990[(2)]);var state_13990__$1 = state_13990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13990__$1,inst_13988);
} else
{if((state_val_13991 === (12)))
{var inst_13976 = (state_13990[(8)]);var inst_13976__$1 = (state_13990[(2)]);var inst_13977 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13976__$1);var state_13990__$1 = (function (){var statearr_13999 = state_13990;(statearr_13999[(8)] = inst_13976__$1);
return statearr_13999;
})();if(cljs.core.truth_(inst_13977))
{var statearr_14000_14028 = state_13990__$1;(statearr_14000_14028[(1)] = (13));
} else
{var statearr_14001_14029 = state_13990__$1;(statearr_14001_14029[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (2)))
{var inst_13953 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13954 = (0);var state_13990__$1 = (function (){var statearr_14002 = state_13990;(statearr_14002[(9)] = inst_13953);
(statearr_14002[(7)] = inst_13954);
return statearr_14002;
})();var statearr_14003_14030 = state_13990__$1;(statearr_14003_14030[(2)] = null);
(statearr_14003_14030[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (11)))
{var inst_13954 = (state_13990[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13990,(10),Object,null,(9));var inst_13963 = chs__$1.call(null,inst_13954);var inst_13964 = done.call(null,inst_13954);var inst_13965 = cljs.core.async.take_BANG_.call(null,inst_13963,inst_13964);var state_13990__$1 = state_13990;var statearr_14004_14031 = state_13990__$1;(statearr_14004_14031[(2)] = inst_13965);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (9)))
{var inst_13954 = (state_13990[(7)]);var inst_13967 = (state_13990[(2)]);var inst_13968 = (inst_13954 + (1));var inst_13954__$1 = inst_13968;var state_13990__$1 = (function (){var statearr_14005 = state_13990;(statearr_14005[(10)] = inst_13967);
(statearr_14005[(7)] = inst_13954__$1);
return statearr_14005;
})();var statearr_14006_14032 = state_13990__$1;(statearr_14006_14032[(2)] = null);
(statearr_14006_14032[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (5)))
{var inst_13974 = (state_13990[(2)]);var state_13990__$1 = (function (){var statearr_14007 = state_13990;(statearr_14007[(11)] = inst_13974);
return statearr_14007;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13990__$1,(12),dchan);
} else
{if((state_val_13991 === (14)))
{var inst_13976 = (state_13990[(8)]);var inst_13981 = cljs.core.apply.call(null,f,inst_13976);var state_13990__$1 = state_13990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13990__$1,(16),out,inst_13981);
} else
{if((state_val_13991 === (16)))
{var inst_13983 = (state_13990[(2)]);var state_13990__$1 = (function (){var statearr_14008 = state_13990;(statearr_14008[(12)] = inst_13983);
return statearr_14008;
})();var statearr_14009_14033 = state_13990__$1;(statearr_14009_14033[(2)] = null);
(statearr_14009_14033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (10)))
{var inst_13958 = (state_13990[(2)]);var inst_13959 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13990__$1 = (function (){var statearr_14010 = state_13990;(statearr_14010[(13)] = inst_13958);
return statearr_14010;
})();var statearr_14011_14034 = state_13990__$1;(statearr_14011_14034[(2)] = inst_13959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13991 === (8)))
{var inst_13972 = (state_13990[(2)]);var state_13990__$1 = state_13990;var statearr_14012_14035 = state_13990__$1;(statearr_14012_14035[(2)] = inst_13972);
(statearr_14012_14035[(1)] = (5));
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
});})(c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6191__auto__,c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14016[(0)] = state_machine__6192__auto__);
(statearr_14016[(1)] = (1));
return statearr_14016;
});
var state_machine__6192__auto____1 = (function (state_13990){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_13990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14017){if((e14017 instanceof Object))
{var ex__6195__auto__ = e14017;var statearr_14018_14036 = state_13990;(statearr_14018_14036[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14037 = state_13990;
state_13990 = G__14037;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_13990){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_13990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6258__auto__ = (function (){var statearr_14019 = f__6257__auto__.call(null);(statearr_14019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14020);
return statearr_14019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14020,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___14145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14145,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14145,out){
return (function (state_14121){var state_val_14122 = (state_14121[(1)]);if((state_val_14122 === (7)))
{var inst_14101 = (state_14121[(7)]);var inst_14100 = (state_14121[(8)]);var inst_14100__$1 = (state_14121[(2)]);var inst_14101__$1 = cljs.core.nth.call(null,inst_14100__$1,(0),null);var inst_14102 = cljs.core.nth.call(null,inst_14100__$1,(1),null);var inst_14103 = (inst_14101__$1 == null);var state_14121__$1 = (function (){var statearr_14123 = state_14121;(statearr_14123[(9)] = inst_14102);
(statearr_14123[(7)] = inst_14101__$1);
(statearr_14123[(8)] = inst_14100__$1);
return statearr_14123;
})();if(cljs.core.truth_(inst_14103))
{var statearr_14124_14146 = state_14121__$1;(statearr_14124_14146[(1)] = (8));
} else
{var statearr_14125_14147 = state_14121__$1;(statearr_14125_14147[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (1)))
{var inst_14092 = cljs.core.vec.call(null,chs);var inst_14093 = inst_14092;var state_14121__$1 = (function (){var statearr_14126 = state_14121;(statearr_14126[(10)] = inst_14093);
return statearr_14126;
})();var statearr_14127_14148 = state_14121__$1;(statearr_14127_14148[(2)] = null);
(statearr_14127_14148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (4)))
{var inst_14093 = (state_14121[(10)]);var state_14121__$1 = state_14121;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14121__$1,(7),inst_14093);
} else
{if((state_val_14122 === (6)))
{var inst_14117 = (state_14121[(2)]);var state_14121__$1 = state_14121;var statearr_14128_14149 = state_14121__$1;(statearr_14128_14149[(2)] = inst_14117);
(statearr_14128_14149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (3)))
{var inst_14119 = (state_14121[(2)]);var state_14121__$1 = state_14121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14121__$1,inst_14119);
} else
{if((state_val_14122 === (2)))
{var inst_14093 = (state_14121[(10)]);var inst_14095 = cljs.core.count.call(null,inst_14093);var inst_14096 = (inst_14095 > (0));var state_14121__$1 = state_14121;if(cljs.core.truth_(inst_14096))
{var statearr_14130_14150 = state_14121__$1;(statearr_14130_14150[(1)] = (4));
} else
{var statearr_14131_14151 = state_14121__$1;(statearr_14131_14151[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (11)))
{var inst_14093 = (state_14121[(10)]);var inst_14110 = (state_14121[(2)]);var tmp14129 = inst_14093;var inst_14093__$1 = tmp14129;var state_14121__$1 = (function (){var statearr_14132 = state_14121;(statearr_14132[(10)] = inst_14093__$1);
(statearr_14132[(11)] = inst_14110);
return statearr_14132;
})();var statearr_14133_14152 = state_14121__$1;(statearr_14133_14152[(2)] = null);
(statearr_14133_14152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (9)))
{var inst_14101 = (state_14121[(7)]);var state_14121__$1 = state_14121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14121__$1,(11),out,inst_14101);
} else
{if((state_val_14122 === (5)))
{var inst_14115 = cljs.core.async.close_BANG_.call(null,out);var state_14121__$1 = state_14121;var statearr_14134_14153 = state_14121__$1;(statearr_14134_14153[(2)] = inst_14115);
(statearr_14134_14153[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (10)))
{var inst_14113 = (state_14121[(2)]);var state_14121__$1 = state_14121;var statearr_14135_14154 = state_14121__$1;(statearr_14135_14154[(2)] = inst_14113);
(statearr_14135_14154[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14122 === (8)))
{var inst_14102 = (state_14121[(9)]);var inst_14101 = (state_14121[(7)]);var inst_14093 = (state_14121[(10)]);var inst_14100 = (state_14121[(8)]);var inst_14105 = (function (){var c = inst_14102;var v = inst_14101;var vec__14098 = inst_14100;var cs = inst_14093;return ((function (c,v,vec__14098,cs,inst_14102,inst_14101,inst_14093,inst_14100,state_val_14122,c__6256__auto___14145,out){
return (function (p1__14038_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14038_SHARP_);
});
;})(c,v,vec__14098,cs,inst_14102,inst_14101,inst_14093,inst_14100,state_val_14122,c__6256__auto___14145,out))
})();var inst_14106 = cljs.core.filterv.call(null,inst_14105,inst_14093);var inst_14093__$1 = inst_14106;var state_14121__$1 = (function (){var statearr_14136 = state_14121;(statearr_14136[(10)] = inst_14093__$1);
return statearr_14136;
})();var statearr_14137_14155 = state_14121__$1;(statearr_14137_14155[(2)] = null);
(statearr_14137_14155[(1)] = (2));
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
});})(c__6256__auto___14145,out))
;return ((function (switch__6191__auto__,c__6256__auto___14145,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14141 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14141[(0)] = state_machine__6192__auto__);
(statearr_14141[(1)] = (1));
return statearr_14141;
});
var state_machine__6192__auto____1 = (function (state_14121){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_14121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14142){if((e14142 instanceof Object))
{var ex__6195__auto__ = e14142;var statearr_14143_14156 = state_14121;(statearr_14143_14156[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14157 = state_14121;
state_14121 = G__14157;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_14121){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_14121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14145,out))
})();var state__6258__auto__ = (function (){var statearr_14144 = f__6257__auto__.call(null);(statearr_14144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14145);
return statearr_14144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14145,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___14250 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14250,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14250,out){
return (function (state_14227){var state_val_14228 = (state_14227[(1)]);if((state_val_14228 === (7)))
{var inst_14209 = (state_14227[(7)]);var inst_14209__$1 = (state_14227[(2)]);var inst_14210 = (inst_14209__$1 == null);var inst_14211 = cljs.core.not.call(null,inst_14210);var state_14227__$1 = (function (){var statearr_14229 = state_14227;(statearr_14229[(7)] = inst_14209__$1);
return statearr_14229;
})();if(inst_14211)
{var statearr_14230_14251 = state_14227__$1;(statearr_14230_14251[(1)] = (8));
} else
{var statearr_14231_14252 = state_14227__$1;(statearr_14231_14252[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (1)))
{var inst_14204 = (0);var state_14227__$1 = (function (){var statearr_14232 = state_14227;(statearr_14232[(8)] = inst_14204);
return statearr_14232;
})();var statearr_14233_14253 = state_14227__$1;(statearr_14233_14253[(2)] = null);
(statearr_14233_14253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (4)))
{var state_14227__$1 = state_14227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14227__$1,(7),ch);
} else
{if((state_val_14228 === (6)))
{var inst_14222 = (state_14227[(2)]);var state_14227__$1 = state_14227;var statearr_14234_14254 = state_14227__$1;(statearr_14234_14254[(2)] = inst_14222);
(statearr_14234_14254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (3)))
{var inst_14224 = (state_14227[(2)]);var inst_14225 = cljs.core.async.close_BANG_.call(null,out);var state_14227__$1 = (function (){var statearr_14235 = state_14227;(statearr_14235[(9)] = inst_14224);
return statearr_14235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14227__$1,inst_14225);
} else
{if((state_val_14228 === (2)))
{var inst_14204 = (state_14227[(8)]);var inst_14206 = (inst_14204 < n);var state_14227__$1 = state_14227;if(cljs.core.truth_(inst_14206))
{var statearr_14236_14255 = state_14227__$1;(statearr_14236_14255[(1)] = (4));
} else
{var statearr_14237_14256 = state_14227__$1;(statearr_14237_14256[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (11)))
{var inst_14204 = (state_14227[(8)]);var inst_14214 = (state_14227[(2)]);var inst_14215 = (inst_14204 + (1));var inst_14204__$1 = inst_14215;var state_14227__$1 = (function (){var statearr_14238 = state_14227;(statearr_14238[(10)] = inst_14214);
(statearr_14238[(8)] = inst_14204__$1);
return statearr_14238;
})();var statearr_14239_14257 = state_14227__$1;(statearr_14239_14257[(2)] = null);
(statearr_14239_14257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (9)))
{var state_14227__$1 = state_14227;var statearr_14240_14258 = state_14227__$1;(statearr_14240_14258[(2)] = null);
(statearr_14240_14258[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (5)))
{var state_14227__$1 = state_14227;var statearr_14241_14259 = state_14227__$1;(statearr_14241_14259[(2)] = null);
(statearr_14241_14259[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (10)))
{var inst_14219 = (state_14227[(2)]);var state_14227__$1 = state_14227;var statearr_14242_14260 = state_14227__$1;(statearr_14242_14260[(2)] = inst_14219);
(statearr_14242_14260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14228 === (8)))
{var inst_14209 = (state_14227[(7)]);var state_14227__$1 = state_14227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14227__$1,(11),out,inst_14209);
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
});})(c__6256__auto___14250,out))
;return ((function (switch__6191__auto__,c__6256__auto___14250,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14246 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14246[(0)] = state_machine__6192__auto__);
(statearr_14246[(1)] = (1));
return statearr_14246;
});
var state_machine__6192__auto____1 = (function (state_14227){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_14227);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14247){if((e14247 instanceof Object))
{var ex__6195__auto__ = e14247;var statearr_14248_14261 = state_14227;(statearr_14248_14261[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14262 = state_14227;
state_14227 = G__14262;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_14227){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_14227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14250,out))
})();var state__6258__auto__ = (function (){var statearr_14249 = f__6257__auto__.call(null);(statearr_14249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14250);
return statearr_14249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14250,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___14359 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14359,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14359,out){
return (function (state_14334){var state_val_14335 = (state_14334[(1)]);if((state_val_14335 === (7)))
{var inst_14329 = (state_14334[(2)]);var state_14334__$1 = state_14334;var statearr_14336_14360 = state_14334__$1;(statearr_14336_14360[(2)] = inst_14329);
(statearr_14336_14360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (1)))
{var inst_14311 = null;var state_14334__$1 = (function (){var statearr_14337 = state_14334;(statearr_14337[(7)] = inst_14311);
return statearr_14337;
})();var statearr_14338_14361 = state_14334__$1;(statearr_14338_14361[(2)] = null);
(statearr_14338_14361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (4)))
{var inst_14314 = (state_14334[(8)]);var inst_14314__$1 = (state_14334[(2)]);var inst_14315 = (inst_14314__$1 == null);var inst_14316 = cljs.core.not.call(null,inst_14315);var state_14334__$1 = (function (){var statearr_14339 = state_14334;(statearr_14339[(8)] = inst_14314__$1);
return statearr_14339;
})();if(inst_14316)
{var statearr_14340_14362 = state_14334__$1;(statearr_14340_14362[(1)] = (5));
} else
{var statearr_14341_14363 = state_14334__$1;(statearr_14341_14363[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (6)))
{var state_14334__$1 = state_14334;var statearr_14342_14364 = state_14334__$1;(statearr_14342_14364[(2)] = null);
(statearr_14342_14364[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (3)))
{var inst_14331 = (state_14334[(2)]);var inst_14332 = cljs.core.async.close_BANG_.call(null,out);var state_14334__$1 = (function (){var statearr_14343 = state_14334;(statearr_14343[(9)] = inst_14331);
return statearr_14343;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14334__$1,inst_14332);
} else
{if((state_val_14335 === (2)))
{var state_14334__$1 = state_14334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14334__$1,(4),ch);
} else
{if((state_val_14335 === (11)))
{var inst_14314 = (state_14334[(8)]);var inst_14323 = (state_14334[(2)]);var inst_14311 = inst_14314;var state_14334__$1 = (function (){var statearr_14344 = state_14334;(statearr_14344[(7)] = inst_14311);
(statearr_14344[(10)] = inst_14323);
return statearr_14344;
})();var statearr_14345_14365 = state_14334__$1;(statearr_14345_14365[(2)] = null);
(statearr_14345_14365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (9)))
{var inst_14314 = (state_14334[(8)]);var state_14334__$1 = state_14334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14334__$1,(11),out,inst_14314);
} else
{if((state_val_14335 === (5)))
{var inst_14311 = (state_14334[(7)]);var inst_14314 = (state_14334[(8)]);var inst_14318 = cljs.core._EQ_.call(null,inst_14314,inst_14311);var state_14334__$1 = state_14334;if(inst_14318)
{var statearr_14347_14366 = state_14334__$1;(statearr_14347_14366[(1)] = (8));
} else
{var statearr_14348_14367 = state_14334__$1;(statearr_14348_14367[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (10)))
{var inst_14326 = (state_14334[(2)]);var state_14334__$1 = state_14334;var statearr_14349_14368 = state_14334__$1;(statearr_14349_14368[(2)] = inst_14326);
(statearr_14349_14368[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (8)))
{var inst_14311 = (state_14334[(7)]);var tmp14346 = inst_14311;var inst_14311__$1 = tmp14346;var state_14334__$1 = (function (){var statearr_14350 = state_14334;(statearr_14350[(7)] = inst_14311__$1);
return statearr_14350;
})();var statearr_14351_14369 = state_14334__$1;(statearr_14351_14369[(2)] = null);
(statearr_14351_14369[(1)] = (2));
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
});})(c__6256__auto___14359,out))
;return ((function (switch__6191__auto__,c__6256__auto___14359,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14355 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14355[(0)] = state_machine__6192__auto__);
(statearr_14355[(1)] = (1));
return statearr_14355;
});
var state_machine__6192__auto____1 = (function (state_14334){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_14334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14356){if((e14356 instanceof Object))
{var ex__6195__auto__ = e14356;var statearr_14357_14370 = state_14334;(statearr_14357_14370[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14371 = state_14334;
state_14334 = G__14371;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_14334){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_14334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14359,out))
})();var state__6258__auto__ = (function (){var statearr_14358 = f__6257__auto__.call(null);(statearr_14358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14359);
return statearr_14358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14359,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___14506 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14506,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14506,out){
return (function (state_14476){var state_val_14477 = (state_14476[(1)]);if((state_val_14477 === (7)))
{var inst_14472 = (state_14476[(2)]);var state_14476__$1 = state_14476;var statearr_14478_14507 = state_14476__$1;(statearr_14478_14507[(2)] = inst_14472);
(statearr_14478_14507[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (1)))
{var inst_14439 = (new Array(n));var inst_14440 = inst_14439;var inst_14441 = (0);var state_14476__$1 = (function (){var statearr_14479 = state_14476;(statearr_14479[(7)] = inst_14441);
(statearr_14479[(8)] = inst_14440);
return statearr_14479;
})();var statearr_14480_14508 = state_14476__$1;(statearr_14480_14508[(2)] = null);
(statearr_14480_14508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (4)))
{var inst_14444 = (state_14476[(9)]);var inst_14444__$1 = (state_14476[(2)]);var inst_14445 = (inst_14444__$1 == null);var inst_14446 = cljs.core.not.call(null,inst_14445);var state_14476__$1 = (function (){var statearr_14481 = state_14476;(statearr_14481[(9)] = inst_14444__$1);
return statearr_14481;
})();if(inst_14446)
{var statearr_14482_14509 = state_14476__$1;(statearr_14482_14509[(1)] = (5));
} else
{var statearr_14483_14510 = state_14476__$1;(statearr_14483_14510[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (15)))
{var inst_14466 = (state_14476[(2)]);var state_14476__$1 = state_14476;var statearr_14484_14511 = state_14476__$1;(statearr_14484_14511[(2)] = inst_14466);
(statearr_14484_14511[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (13)))
{var state_14476__$1 = state_14476;var statearr_14485_14512 = state_14476__$1;(statearr_14485_14512[(2)] = null);
(statearr_14485_14512[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (6)))
{var inst_14441 = (state_14476[(7)]);var inst_14462 = (inst_14441 > (0));var state_14476__$1 = state_14476;if(cljs.core.truth_(inst_14462))
{var statearr_14486_14513 = state_14476__$1;(statearr_14486_14513[(1)] = (12));
} else
{var statearr_14487_14514 = state_14476__$1;(statearr_14487_14514[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (3)))
{var inst_14474 = (state_14476[(2)]);var state_14476__$1 = state_14476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14476__$1,inst_14474);
} else
{if((state_val_14477 === (12)))
{var inst_14440 = (state_14476[(8)]);var inst_14464 = cljs.core.vec.call(null,inst_14440);var state_14476__$1 = state_14476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14476__$1,(15),out,inst_14464);
} else
{if((state_val_14477 === (2)))
{var state_14476__$1 = state_14476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14476__$1,(4),ch);
} else
{if((state_val_14477 === (11)))
{var inst_14456 = (state_14476[(2)]);var inst_14457 = (new Array(n));var inst_14440 = inst_14457;var inst_14441 = (0);var state_14476__$1 = (function (){var statearr_14488 = state_14476;(statearr_14488[(10)] = inst_14456);
(statearr_14488[(7)] = inst_14441);
(statearr_14488[(8)] = inst_14440);
return statearr_14488;
})();var statearr_14489_14515 = state_14476__$1;(statearr_14489_14515[(2)] = null);
(statearr_14489_14515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (9)))
{var inst_14440 = (state_14476[(8)]);var inst_14454 = cljs.core.vec.call(null,inst_14440);var state_14476__$1 = state_14476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14476__$1,(11),out,inst_14454);
} else
{if((state_val_14477 === (5)))
{var inst_14449 = (state_14476[(11)]);var inst_14441 = (state_14476[(7)]);var inst_14440 = (state_14476[(8)]);var inst_14444 = (state_14476[(9)]);var inst_14448 = (inst_14440[inst_14441] = inst_14444);var inst_14449__$1 = (inst_14441 + (1));var inst_14450 = (inst_14449__$1 < n);var state_14476__$1 = (function (){var statearr_14490 = state_14476;(statearr_14490[(11)] = inst_14449__$1);
(statearr_14490[(12)] = inst_14448);
return statearr_14490;
})();if(cljs.core.truth_(inst_14450))
{var statearr_14491_14516 = state_14476__$1;(statearr_14491_14516[(1)] = (8));
} else
{var statearr_14492_14517 = state_14476__$1;(statearr_14492_14517[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (14)))
{var inst_14469 = (state_14476[(2)]);var inst_14470 = cljs.core.async.close_BANG_.call(null,out);var state_14476__$1 = (function (){var statearr_14494 = state_14476;(statearr_14494[(13)] = inst_14469);
return statearr_14494;
})();var statearr_14495_14518 = state_14476__$1;(statearr_14495_14518[(2)] = inst_14470);
(statearr_14495_14518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (10)))
{var inst_14460 = (state_14476[(2)]);var state_14476__$1 = state_14476;var statearr_14496_14519 = state_14476__$1;(statearr_14496_14519[(2)] = inst_14460);
(statearr_14496_14519[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14477 === (8)))
{var inst_14449 = (state_14476[(11)]);var inst_14440 = (state_14476[(8)]);var tmp14493 = inst_14440;var inst_14440__$1 = tmp14493;var inst_14441 = inst_14449;var state_14476__$1 = (function (){var statearr_14497 = state_14476;(statearr_14497[(7)] = inst_14441);
(statearr_14497[(8)] = inst_14440__$1);
return statearr_14497;
})();var statearr_14498_14520 = state_14476__$1;(statearr_14498_14520[(2)] = null);
(statearr_14498_14520[(1)] = (2));
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
});})(c__6256__auto___14506,out))
;return ((function (switch__6191__auto__,c__6256__auto___14506,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14502[(0)] = state_machine__6192__auto__);
(statearr_14502[(1)] = (1));
return statearr_14502;
});
var state_machine__6192__auto____1 = (function (state_14476){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_14476);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14503){if((e14503 instanceof Object))
{var ex__6195__auto__ = e14503;var statearr_14504_14521 = state_14476;(statearr_14504_14521[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14476);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14522 = state_14476;
state_14476 = G__14522;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_14476){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_14476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14506,out))
})();var state__6258__auto__ = (function (){var statearr_14505 = f__6257__auto__.call(null);(statearr_14505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14506);
return statearr_14505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14506,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6256__auto___14665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6256__auto___14665,out){
return (function (){var f__6257__auto__ = (function (){var switch__6191__auto__ = ((function (c__6256__auto___14665,out){
return (function (state_14635){var state_val_14636 = (state_14635[(1)]);if((state_val_14636 === (7)))
{var inst_14631 = (state_14635[(2)]);var state_14635__$1 = state_14635;var statearr_14637_14666 = state_14635__$1;(statearr_14637_14666[(2)] = inst_14631);
(statearr_14637_14666[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (1)))
{var inst_14594 = [];var inst_14595 = inst_14594;var inst_14596 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14635__$1 = (function (){var statearr_14638 = state_14635;(statearr_14638[(7)] = inst_14596);
(statearr_14638[(8)] = inst_14595);
return statearr_14638;
})();var statearr_14639_14667 = state_14635__$1;(statearr_14639_14667[(2)] = null);
(statearr_14639_14667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (4)))
{var inst_14599 = (state_14635[(9)]);var inst_14599__$1 = (state_14635[(2)]);var inst_14600 = (inst_14599__$1 == null);var inst_14601 = cljs.core.not.call(null,inst_14600);var state_14635__$1 = (function (){var statearr_14640 = state_14635;(statearr_14640[(9)] = inst_14599__$1);
return statearr_14640;
})();if(inst_14601)
{var statearr_14641_14668 = state_14635__$1;(statearr_14641_14668[(1)] = (5));
} else
{var statearr_14642_14669 = state_14635__$1;(statearr_14642_14669[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (15)))
{var inst_14625 = (state_14635[(2)]);var state_14635__$1 = state_14635;var statearr_14643_14670 = state_14635__$1;(statearr_14643_14670[(2)] = inst_14625);
(statearr_14643_14670[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (13)))
{var state_14635__$1 = state_14635;var statearr_14644_14671 = state_14635__$1;(statearr_14644_14671[(2)] = null);
(statearr_14644_14671[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (6)))
{var inst_14595 = (state_14635[(8)]);var inst_14620 = inst_14595.length;var inst_14621 = (inst_14620 > (0));var state_14635__$1 = state_14635;if(cljs.core.truth_(inst_14621))
{var statearr_14645_14672 = state_14635__$1;(statearr_14645_14672[(1)] = (12));
} else
{var statearr_14646_14673 = state_14635__$1;(statearr_14646_14673[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (3)))
{var inst_14633 = (state_14635[(2)]);var state_14635__$1 = state_14635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14635__$1,inst_14633);
} else
{if((state_val_14636 === (12)))
{var inst_14595 = (state_14635[(8)]);var inst_14623 = cljs.core.vec.call(null,inst_14595);var state_14635__$1 = state_14635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14635__$1,(15),out,inst_14623);
} else
{if((state_val_14636 === (2)))
{var state_14635__$1 = state_14635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14635__$1,(4),ch);
} else
{if((state_val_14636 === (11)))
{var inst_14599 = (state_14635[(9)]);var inst_14603 = (state_14635[(10)]);var inst_14613 = (state_14635[(2)]);var inst_14614 = [];var inst_14615 = inst_14614.push(inst_14599);var inst_14595 = inst_14614;var inst_14596 = inst_14603;var state_14635__$1 = (function (){var statearr_14647 = state_14635;(statearr_14647[(7)] = inst_14596);
(statearr_14647[(8)] = inst_14595);
(statearr_14647[(11)] = inst_14615);
(statearr_14647[(12)] = inst_14613);
return statearr_14647;
})();var statearr_14648_14674 = state_14635__$1;(statearr_14648_14674[(2)] = null);
(statearr_14648_14674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (9)))
{var inst_14595 = (state_14635[(8)]);var inst_14611 = cljs.core.vec.call(null,inst_14595);var state_14635__$1 = state_14635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14635__$1,(11),out,inst_14611);
} else
{if((state_val_14636 === (5)))
{var inst_14596 = (state_14635[(7)]);var inst_14599 = (state_14635[(9)]);var inst_14603 = (state_14635[(10)]);var inst_14603__$1 = f.call(null,inst_14599);var inst_14604 = cljs.core._EQ_.call(null,inst_14603__$1,inst_14596);var inst_14605 = cljs.core.keyword_identical_QMARK_.call(null,inst_14596,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14606 = (inst_14604) || (inst_14605);var state_14635__$1 = (function (){var statearr_14649 = state_14635;(statearr_14649[(10)] = inst_14603__$1);
return statearr_14649;
})();if(cljs.core.truth_(inst_14606))
{var statearr_14650_14675 = state_14635__$1;(statearr_14650_14675[(1)] = (8));
} else
{var statearr_14651_14676 = state_14635__$1;(statearr_14651_14676[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (14)))
{var inst_14628 = (state_14635[(2)]);var inst_14629 = cljs.core.async.close_BANG_.call(null,out);var state_14635__$1 = (function (){var statearr_14653 = state_14635;(statearr_14653[(13)] = inst_14628);
return statearr_14653;
})();var statearr_14654_14677 = state_14635__$1;(statearr_14654_14677[(2)] = inst_14629);
(statearr_14654_14677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (10)))
{var inst_14618 = (state_14635[(2)]);var state_14635__$1 = state_14635;var statearr_14655_14678 = state_14635__$1;(statearr_14655_14678[(2)] = inst_14618);
(statearr_14655_14678[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14636 === (8)))
{var inst_14595 = (state_14635[(8)]);var inst_14599 = (state_14635[(9)]);var inst_14603 = (state_14635[(10)]);var inst_14608 = inst_14595.push(inst_14599);var tmp14652 = inst_14595;var inst_14595__$1 = tmp14652;var inst_14596 = inst_14603;var state_14635__$1 = (function (){var statearr_14656 = state_14635;(statearr_14656[(7)] = inst_14596);
(statearr_14656[(8)] = inst_14595__$1);
(statearr_14656[(14)] = inst_14608);
return statearr_14656;
})();var statearr_14657_14679 = state_14635__$1;(statearr_14657_14679[(2)] = null);
(statearr_14657_14679[(1)] = (2));
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
});})(c__6256__auto___14665,out))
;return ((function (switch__6191__auto__,c__6256__auto___14665,out){
return (function() {
var state_machine__6192__auto__ = null;
var state_machine__6192__auto____0 = (function (){var statearr_14661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14661[(0)] = state_machine__6192__auto__);
(statearr_14661[(1)] = (1));
return statearr_14661;
});
var state_machine__6192__auto____1 = (function (state_14635){while(true){
var ret_value__6193__auto__ = (function (){try{while(true){
var result__6194__auto__ = switch__6191__auto__.call(null,state_14635);if(cljs.core.keyword_identical_QMARK_.call(null,result__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6194__auto__;
}
break;
}
}catch (e14662){if((e14662 instanceof Object))
{var ex__6195__auto__ = e14662;var statearr_14663_14680 = state_14635;(statearr_14663_14680[(5)] = ex__6195__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14681 = state_14635;
state_14635 = G__14681;
continue;
}
} else
{return ret_value__6193__auto__;
}
break;
}
});
state_machine__6192__auto__ = function(state_14635){
switch(arguments.length){
case 0:
return state_machine__6192__auto____0.call(this);
case 1:
return state_machine__6192__auto____1.call(this,state_14635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6192__auto____0;
state_machine__6192__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6192__auto____1;
return state_machine__6192__auto__;
})()
;})(switch__6191__auto__,c__6256__auto___14665,out))
})();var state__6258__auto__ = (function (){var statearr_14664 = f__6257__auto__.call(null);(statearr_14664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6256__auto___14665);
return statearr_14664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6258__auto__);
});})(c__6256__auto___14665,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map