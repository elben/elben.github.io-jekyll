// Compiled by ClojureScript 0.0-2280
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t685512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685512 = (function (f,fn_handler,meta685513){
this.f = f;
this.fn_handler = fn_handler;
this.meta685513 = meta685513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685512.cljs$lang$type = true;
cljs.core.async.t685512.cljs$lang$ctorStr = "cljs.core.async/t685512";
cljs.core.async.t685512.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685512");
});
cljs.core.async.t685512.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t685512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t685512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t685512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_685514){var self__ = this;
var _685514__$1 = this;return self__.meta685513;
});
cljs.core.async.t685512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_685514,meta685513__$1){var self__ = this;
var _685514__$1 = this;return (new cljs.core.async.t685512(self__.f,self__.fn_handler,meta685513__$1));
});
cljs.core.async.__GT_t685512 = (function __GT_t685512(f__$1,fn_handler__$1,meta685513){return (new cljs.core.async.t685512(f__$1,fn_handler__$1,meta685513));
});
}
return (new cljs.core.async.t685512(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__685516 = buff;if(G__685516)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__685516.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__685516.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__685516);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__685516);
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
{var val_685517 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_685517);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_685517,ret){
return (function (){return fn1.call(null,val_685517);
});})(val_685517,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4400__auto___685518 = n;var x_685519 = (0);while(true){
if((x_685519 < n__4400__auto___685518))
{(a[x_685519] = (0));
{
var G__685520 = (x_685519 + (1));
x_685519 = G__685520;
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
var G__685521 = (i + (1));
i = G__685521;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t685525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685525 = (function (flag,alt_flag,meta685526){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta685526 = meta685526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685525.cljs$lang$type = true;
cljs.core.async.t685525.cljs$lang$ctorStr = "cljs.core.async/t685525";
cljs.core.async.t685525.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685525");
});})(flag))
;
cljs.core.async.t685525.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t685525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t685525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t685525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_685527){var self__ = this;
var _685527__$1 = this;return self__.meta685526;
});})(flag))
;
cljs.core.async.t685525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_685527,meta685526__$1){var self__ = this;
var _685527__$1 = this;return (new cljs.core.async.t685525(self__.flag,self__.alt_flag,meta685526__$1));
});})(flag))
;
cljs.core.async.__GT_t685525 = ((function (flag){
return (function __GT_t685525(flag__$1,alt_flag__$1,meta685526){return (new cljs.core.async.t685525(flag__$1,alt_flag__$1,meta685526));
});})(flag))
;
}
return (new cljs.core.async.t685525(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t685531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685531 = (function (cb,flag,alt_handler,meta685532){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta685532 = meta685532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685531.cljs$lang$type = true;
cljs.core.async.t685531.cljs$lang$ctorStr = "cljs.core.async/t685531";
cljs.core.async.t685531.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685531");
});
cljs.core.async.t685531.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t685531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t685531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t685531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_685533){var self__ = this;
var _685533__$1 = this;return self__.meta685532;
});
cljs.core.async.t685531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_685533,meta685532__$1){var self__ = this;
var _685533__$1 = this;return (new cljs.core.async.t685531(self__.cb,self__.flag,self__.alt_handler,meta685532__$1));
});
cljs.core.async.__GT_t685531 = (function __GT_t685531(cb__$1,flag__$1,alt_handler__$1,meta685532){return (new cljs.core.async.t685531(cb__$1,flag__$1,alt_handler__$1,meta685532));
});
}
return (new cljs.core.async.t685531(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__685534_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__685534_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__685535_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__685535_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3544__auto__ = wport;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__685536 = (i + (1));
i = G__685536;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3544__auto__ = ret;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3532__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3532__auto__;
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
var alts_BANG___delegate = function (ports,p__685537){var map__685539 = p__685537;var map__685539__$1 = ((cljs.core.seq_QMARK_.call(null,map__685539))?cljs.core.apply.call(null,cljs.core.hash_map,map__685539):map__685539);var opts = map__685539__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__685537 = null;if (arguments.length > 1) {
  p__685537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__685537);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__685540){
var ports = cljs.core.first(arglist__685540);
var p__685537 = cljs.core.rest(arglist__685540);
return alts_BANG___delegate(ports,p__685537);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t685548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685548 = (function (ch,f,map_LT_,meta685549){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta685549 = meta685549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685548.cljs$lang$type = true;
cljs.core.async.t685548.cljs$lang$ctorStr = "cljs.core.async/t685548";
cljs.core.async.t685548.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685548");
});
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t685551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685551 = (function (fn1,_,meta685549,ch,f,map_LT_,meta685552){
this.fn1 = fn1;
this._ = _;
this.meta685549 = meta685549;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta685552 = meta685552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685551.cljs$lang$type = true;
cljs.core.async.t685551.cljs$lang$ctorStr = "cljs.core.async/t685551";
cljs.core.async.t685551.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685551");
});})(___$1))
;
cljs.core.async.t685551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t685551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t685551.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t685551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__685541_SHARP_){return f1.call(null,(((p1__685541_SHARP_ == null))?null:self__.f.call(null,p1__685541_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t685551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_685553){var self__ = this;
var _685553__$1 = this;return self__.meta685552;
});})(___$1))
;
cljs.core.async.t685551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_685553,meta685552__$1){var self__ = this;
var _685553__$1 = this;return (new cljs.core.async.t685551(self__.fn1,self__._,self__.meta685549,self__.ch,self__.f,self__.map_LT_,meta685552__$1));
});})(___$1))
;
cljs.core.async.__GT_t685551 = ((function (___$1){
return (function __GT_t685551(fn1__$1,___$2,meta685549__$1,ch__$2,f__$2,map_LT___$2,meta685552){return (new cljs.core.async.t685551(fn1__$1,___$2,meta685549__$1,ch__$2,f__$2,map_LT___$2,meta685552));
});})(___$1))
;
}
return (new cljs.core.async.t685551(fn1,___$1,self__.meta685549,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3532__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t685548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t685548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_685550){var self__ = this;
var _685550__$1 = this;return self__.meta685549;
});
cljs.core.async.t685548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_685550,meta685549__$1){var self__ = this;
var _685550__$1 = this;return (new cljs.core.async.t685548(self__.ch,self__.f,self__.map_LT_,meta685549__$1));
});
cljs.core.async.__GT_t685548 = (function __GT_t685548(ch__$1,f__$1,map_LT___$1,meta685549){return (new cljs.core.async.t685548(ch__$1,f__$1,map_LT___$1,meta685549));
});
}
return (new cljs.core.async.t685548(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t685557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685557 = (function (ch,f,map_GT_,meta685558){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta685558 = meta685558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685557.cljs$lang$type = true;
cljs.core.async.t685557.cljs$lang$ctorStr = "cljs.core.async/t685557";
cljs.core.async.t685557.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685557");
});
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t685557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t685557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_685559){var self__ = this;
var _685559__$1 = this;return self__.meta685558;
});
cljs.core.async.t685557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_685559,meta685558__$1){var self__ = this;
var _685559__$1 = this;return (new cljs.core.async.t685557(self__.ch,self__.f,self__.map_GT_,meta685558__$1));
});
cljs.core.async.__GT_t685557 = (function __GT_t685557(ch__$1,f__$1,map_GT___$1,meta685558){return (new cljs.core.async.t685557(ch__$1,f__$1,map_GT___$1,meta685558));
});
}
return (new cljs.core.async.t685557(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t685563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t685563 = (function (ch,p,filter_GT_,meta685564){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta685564 = meta685564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t685563.cljs$lang$type = true;
cljs.core.async.t685563.cljs$lang$ctorStr = "cljs.core.async/t685563";
cljs.core.async.t685563.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t685563");
});
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t685563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t685563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_685565){var self__ = this;
var _685565__$1 = this;return self__.meta685564;
});
cljs.core.async.t685563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_685565,meta685564__$1){var self__ = this;
var _685565__$1 = this;return (new cljs.core.async.t685563(self__.ch,self__.p,self__.filter_GT_,meta685564__$1));
});
cljs.core.async.__GT_t685563 = (function __GT_t685563(ch__$1,p__$1,filter_GT___$1,meta685564){return (new cljs.core.async.t685563(ch__$1,p__$1,filter_GT___$1,meta685564));
});
}
return (new cljs.core.async.t685563(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___685648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___685648,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___685648,out){
return (function (state_685627){var state_val_685628 = (state_685627[(1)]);if((state_val_685628 === (7)))
{var inst_685623 = (state_685627[(2)]);var state_685627__$1 = state_685627;var statearr_685629_685649 = state_685627__$1;(statearr_685629_685649[(2)] = inst_685623);
(statearr_685629_685649[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (1)))
{var state_685627__$1 = state_685627;var statearr_685630_685650 = state_685627__$1;(statearr_685630_685650[(2)] = null);
(statearr_685630_685650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (4)))
{var inst_685609 = (state_685627[(7)]);var inst_685609__$1 = (state_685627[(2)]);var inst_685610 = (inst_685609__$1 == null);var state_685627__$1 = (function (){var statearr_685631 = state_685627;(statearr_685631[(7)] = inst_685609__$1);
return statearr_685631;
})();if(cljs.core.truth_(inst_685610))
{var statearr_685632_685651 = state_685627__$1;(statearr_685632_685651[(1)] = (5));
} else
{var statearr_685633_685652 = state_685627__$1;(statearr_685633_685652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (6)))
{var inst_685609 = (state_685627[(7)]);var inst_685614 = p.call(null,inst_685609);var state_685627__$1 = state_685627;if(cljs.core.truth_(inst_685614))
{var statearr_685634_685653 = state_685627__$1;(statearr_685634_685653[(1)] = (8));
} else
{var statearr_685635_685654 = state_685627__$1;(statearr_685635_685654[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (3)))
{var inst_685625 = (state_685627[(2)]);var state_685627__$1 = state_685627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_685627__$1,inst_685625);
} else
{if((state_val_685628 === (2)))
{var state_685627__$1 = state_685627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_685627__$1,(4),ch);
} else
{if((state_val_685628 === (11)))
{var inst_685617 = (state_685627[(2)]);var state_685627__$1 = state_685627;var statearr_685636_685655 = state_685627__$1;(statearr_685636_685655[(2)] = inst_685617);
(statearr_685636_685655[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (9)))
{var state_685627__$1 = state_685627;var statearr_685637_685656 = state_685627__$1;(statearr_685637_685656[(2)] = null);
(statearr_685637_685656[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (5)))
{var inst_685612 = cljs.core.async.close_BANG_.call(null,out);var state_685627__$1 = state_685627;var statearr_685638_685657 = state_685627__$1;(statearr_685638_685657[(2)] = inst_685612);
(statearr_685638_685657[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (10)))
{var inst_685620 = (state_685627[(2)]);var state_685627__$1 = (function (){var statearr_685639 = state_685627;(statearr_685639[(8)] = inst_685620);
return statearr_685639;
})();var statearr_685640_685658 = state_685627__$1;(statearr_685640_685658[(2)] = null);
(statearr_685640_685658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685628 === (8)))
{var inst_685609 = (state_685627[(7)]);var state_685627__$1 = state_685627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_685627__$1,(11),out,inst_685609);
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
});})(c__6257__auto___685648,out))
;return ((function (switch__6192__auto__,c__6257__auto___685648,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_685644 = [null,null,null,null,null,null,null,null,null];(statearr_685644[(0)] = state_machine__6193__auto__);
(statearr_685644[(1)] = (1));
return statearr_685644;
});
var state_machine__6193__auto____1 = (function (state_685627){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_685627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e685645){if((e685645 instanceof Object))
{var ex__6196__auto__ = e685645;var statearr_685646_685659 = state_685627;(statearr_685646_685659[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_685627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e685645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__685660 = state_685627;
state_685627 = G__685660;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_685627){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_685627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___685648,out))
})();var state__6259__auto__ = (function (){var statearr_685647 = f__6258__auto__.call(null);(statearr_685647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___685648);
return statearr_685647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___685648,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6257__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto__){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto__){
return (function (state_685826){var state_val_685827 = (state_685826[(1)]);if((state_val_685827 === (7)))
{var inst_685822 = (state_685826[(2)]);var state_685826__$1 = state_685826;var statearr_685828_685869 = state_685826__$1;(statearr_685828_685869[(2)] = inst_685822);
(statearr_685828_685869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (20)))
{var inst_685792 = (state_685826[(7)]);var inst_685803 = (state_685826[(2)]);var inst_685804 = cljs.core.next.call(null,inst_685792);var inst_685778 = inst_685804;var inst_685779 = null;var inst_685780 = (0);var inst_685781 = (0);var state_685826__$1 = (function (){var statearr_685829 = state_685826;(statearr_685829[(8)] = inst_685780);
(statearr_685829[(9)] = inst_685779);
(statearr_685829[(10)] = inst_685781);
(statearr_685829[(11)] = inst_685778);
(statearr_685829[(12)] = inst_685803);
return statearr_685829;
})();var statearr_685830_685870 = state_685826__$1;(statearr_685830_685870[(2)] = null);
(statearr_685830_685870[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (1)))
{var state_685826__$1 = state_685826;var statearr_685831_685871 = state_685826__$1;(statearr_685831_685871[(2)] = null);
(statearr_685831_685871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (4)))
{var inst_685767 = (state_685826[(13)]);var inst_685767__$1 = (state_685826[(2)]);var inst_685768 = (inst_685767__$1 == null);var state_685826__$1 = (function (){var statearr_685832 = state_685826;(statearr_685832[(13)] = inst_685767__$1);
return statearr_685832;
})();if(cljs.core.truth_(inst_685768))
{var statearr_685833_685872 = state_685826__$1;(statearr_685833_685872[(1)] = (5));
} else
{var statearr_685834_685873 = state_685826__$1;(statearr_685834_685873[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (15)))
{var state_685826__$1 = state_685826;var statearr_685838_685874 = state_685826__$1;(statearr_685838_685874[(2)] = null);
(statearr_685838_685874[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (21)))
{var state_685826__$1 = state_685826;var statearr_685839_685875 = state_685826__$1;(statearr_685839_685875[(2)] = null);
(statearr_685839_685875[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (13)))
{var inst_685780 = (state_685826[(8)]);var inst_685779 = (state_685826[(9)]);var inst_685781 = (state_685826[(10)]);var inst_685778 = (state_685826[(11)]);var inst_685788 = (state_685826[(2)]);var inst_685789 = (inst_685781 + (1));var tmp685835 = inst_685780;var tmp685836 = inst_685779;var tmp685837 = inst_685778;var inst_685778__$1 = tmp685837;var inst_685779__$1 = tmp685836;var inst_685780__$1 = tmp685835;var inst_685781__$1 = inst_685789;var state_685826__$1 = (function (){var statearr_685840 = state_685826;(statearr_685840[(8)] = inst_685780__$1);
(statearr_685840[(9)] = inst_685779__$1);
(statearr_685840[(10)] = inst_685781__$1);
(statearr_685840[(14)] = inst_685788);
(statearr_685840[(11)] = inst_685778__$1);
return statearr_685840;
})();var statearr_685841_685876 = state_685826__$1;(statearr_685841_685876[(2)] = null);
(statearr_685841_685876[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (22)))
{var state_685826__$1 = state_685826;var statearr_685842_685877 = state_685826__$1;(statearr_685842_685877[(2)] = null);
(statearr_685842_685877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (6)))
{var inst_685767 = (state_685826[(13)]);var inst_685776 = f.call(null,inst_685767);var inst_685777 = cljs.core.seq.call(null,inst_685776);var inst_685778 = inst_685777;var inst_685779 = null;var inst_685780 = (0);var inst_685781 = (0);var state_685826__$1 = (function (){var statearr_685843 = state_685826;(statearr_685843[(8)] = inst_685780);
(statearr_685843[(9)] = inst_685779);
(statearr_685843[(10)] = inst_685781);
(statearr_685843[(11)] = inst_685778);
return statearr_685843;
})();var statearr_685844_685878 = state_685826__$1;(statearr_685844_685878[(2)] = null);
(statearr_685844_685878[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (17)))
{var inst_685792 = (state_685826[(7)]);var inst_685796 = cljs.core.chunk_first.call(null,inst_685792);var inst_685797 = cljs.core.chunk_rest.call(null,inst_685792);var inst_685798 = cljs.core.count.call(null,inst_685796);var inst_685778 = inst_685797;var inst_685779 = inst_685796;var inst_685780 = inst_685798;var inst_685781 = (0);var state_685826__$1 = (function (){var statearr_685845 = state_685826;(statearr_685845[(8)] = inst_685780);
(statearr_685845[(9)] = inst_685779);
(statearr_685845[(10)] = inst_685781);
(statearr_685845[(11)] = inst_685778);
return statearr_685845;
})();var statearr_685846_685879 = state_685826__$1;(statearr_685846_685879[(2)] = null);
(statearr_685846_685879[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (3)))
{var inst_685824 = (state_685826[(2)]);var state_685826__$1 = state_685826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_685826__$1,inst_685824);
} else
{if((state_val_685827 === (12)))
{var inst_685812 = (state_685826[(2)]);var state_685826__$1 = state_685826;var statearr_685847_685880 = state_685826__$1;(statearr_685847_685880[(2)] = inst_685812);
(statearr_685847_685880[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (2)))
{var state_685826__$1 = state_685826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_685826__$1,(4),in$);
} else
{if((state_val_685827 === (23)))
{var inst_685820 = (state_685826[(2)]);var state_685826__$1 = state_685826;var statearr_685848_685881 = state_685826__$1;(statearr_685848_685881[(2)] = inst_685820);
(statearr_685848_685881[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (19)))
{var inst_685807 = (state_685826[(2)]);var state_685826__$1 = state_685826;var statearr_685849_685882 = state_685826__$1;(statearr_685849_685882[(2)] = inst_685807);
(statearr_685849_685882[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (11)))
{var inst_685792 = (state_685826[(7)]);var inst_685778 = (state_685826[(11)]);var inst_685792__$1 = cljs.core.seq.call(null,inst_685778);var state_685826__$1 = (function (){var statearr_685850 = state_685826;(statearr_685850[(7)] = inst_685792__$1);
return statearr_685850;
})();if(inst_685792__$1)
{var statearr_685851_685883 = state_685826__$1;(statearr_685851_685883[(1)] = (14));
} else
{var statearr_685852_685884 = state_685826__$1;(statearr_685852_685884[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (9)))
{var inst_685814 = (state_685826[(2)]);var inst_685815 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_685826__$1 = (function (){var statearr_685853 = state_685826;(statearr_685853[(15)] = inst_685814);
return statearr_685853;
})();if(cljs.core.truth_(inst_685815))
{var statearr_685854_685885 = state_685826__$1;(statearr_685854_685885[(1)] = (21));
} else
{var statearr_685855_685886 = state_685826__$1;(statearr_685855_685886[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (5)))
{var inst_685770 = cljs.core.async.close_BANG_.call(null,out);var state_685826__$1 = state_685826;var statearr_685856_685887 = state_685826__$1;(statearr_685856_685887[(2)] = inst_685770);
(statearr_685856_685887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (14)))
{var inst_685792 = (state_685826[(7)]);var inst_685794 = cljs.core.chunked_seq_QMARK_.call(null,inst_685792);var state_685826__$1 = state_685826;if(inst_685794)
{var statearr_685857_685888 = state_685826__$1;(statearr_685857_685888[(1)] = (17));
} else
{var statearr_685858_685889 = state_685826__$1;(statearr_685858_685889[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (16)))
{var inst_685810 = (state_685826[(2)]);var state_685826__$1 = state_685826;var statearr_685859_685890 = state_685826__$1;(statearr_685859_685890[(2)] = inst_685810);
(statearr_685859_685890[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685827 === (10)))
{var inst_685779 = (state_685826[(9)]);var inst_685781 = (state_685826[(10)]);var inst_685786 = cljs.core._nth.call(null,inst_685779,inst_685781);var state_685826__$1 = state_685826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_685826__$1,(13),out,inst_685786);
} else
{if((state_val_685827 === (18)))
{var inst_685792 = (state_685826[(7)]);var inst_685801 = cljs.core.first.call(null,inst_685792);var state_685826__$1 = state_685826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_685826__$1,(20),out,inst_685801);
} else
{if((state_val_685827 === (8)))
{var inst_685780 = (state_685826[(8)]);var inst_685781 = (state_685826[(10)]);var inst_685783 = (inst_685781 < inst_685780);var inst_685784 = inst_685783;var state_685826__$1 = state_685826;if(cljs.core.truth_(inst_685784))
{var statearr_685860_685891 = state_685826__$1;(statearr_685860_685891[(1)] = (10));
} else
{var statearr_685861_685892 = state_685826__$1;(statearr_685861_685892[(1)] = (11));
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
});})(c__6257__auto__))
;return ((function (switch__6192__auto__,c__6257__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_685865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_685865[(0)] = state_machine__6193__auto__);
(statearr_685865[(1)] = (1));
return statearr_685865;
});
var state_machine__6193__auto____1 = (function (state_685826){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_685826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e685866){if((e685866 instanceof Object))
{var ex__6196__auto__ = e685866;var statearr_685867_685893 = state_685826;(statearr_685867_685893[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_685826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e685866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__685894 = state_685826;
state_685826 = G__685894;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_685826){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_685826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto__))
})();var state__6259__auto__ = (function (){var statearr_685868 = f__6258__auto__.call(null);(statearr_685868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto__);
return statearr_685868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto__))
);
return c__6257__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6257__auto___685989 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___685989){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___685989){
return (function (state_685965){var state_val_685966 = (state_685965[(1)]);if((state_val_685966 === (7)))
{var inst_685961 = (state_685965[(2)]);var state_685965__$1 = state_685965;var statearr_685967_685990 = state_685965__$1;(statearr_685967_685990[(2)] = inst_685961);
(statearr_685967_685990[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (1)))
{var state_685965__$1 = state_685965;var statearr_685968_685991 = state_685965__$1;(statearr_685968_685991[(2)] = null);
(statearr_685968_685991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (4)))
{var inst_685944 = (state_685965[(7)]);var inst_685944__$1 = (state_685965[(2)]);var inst_685945 = (inst_685944__$1 == null);var state_685965__$1 = (function (){var statearr_685969 = state_685965;(statearr_685969[(7)] = inst_685944__$1);
return statearr_685969;
})();if(cljs.core.truth_(inst_685945))
{var statearr_685970_685992 = state_685965__$1;(statearr_685970_685992[(1)] = (5));
} else
{var statearr_685971_685993 = state_685965__$1;(statearr_685971_685993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (13)))
{var state_685965__$1 = state_685965;var statearr_685972_685994 = state_685965__$1;(statearr_685972_685994[(2)] = null);
(statearr_685972_685994[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (6)))
{var inst_685944 = (state_685965[(7)]);var state_685965__$1 = state_685965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_685965__$1,(11),to,inst_685944);
} else
{if((state_val_685966 === (3)))
{var inst_685963 = (state_685965[(2)]);var state_685965__$1 = state_685965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_685965__$1,inst_685963);
} else
{if((state_val_685966 === (12)))
{var state_685965__$1 = state_685965;var statearr_685973_685995 = state_685965__$1;(statearr_685973_685995[(2)] = null);
(statearr_685973_685995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (2)))
{var state_685965__$1 = state_685965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_685965__$1,(4),from);
} else
{if((state_val_685966 === (11)))
{var inst_685954 = (state_685965[(2)]);var state_685965__$1 = state_685965;if(cljs.core.truth_(inst_685954))
{var statearr_685974_685996 = state_685965__$1;(statearr_685974_685996[(1)] = (12));
} else
{var statearr_685975_685997 = state_685965__$1;(statearr_685975_685997[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (9)))
{var state_685965__$1 = state_685965;var statearr_685976_685998 = state_685965__$1;(statearr_685976_685998[(2)] = null);
(statearr_685976_685998[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (5)))
{var state_685965__$1 = state_685965;if(cljs.core.truth_(close_QMARK_))
{var statearr_685977_685999 = state_685965__$1;(statearr_685977_685999[(1)] = (8));
} else
{var statearr_685978_686000 = state_685965__$1;(statearr_685978_686000[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (14)))
{var inst_685959 = (state_685965[(2)]);var state_685965__$1 = state_685965;var statearr_685979_686001 = state_685965__$1;(statearr_685979_686001[(2)] = inst_685959);
(statearr_685979_686001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (10)))
{var inst_685951 = (state_685965[(2)]);var state_685965__$1 = state_685965;var statearr_685980_686002 = state_685965__$1;(statearr_685980_686002[(2)] = inst_685951);
(statearr_685980_686002[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_685966 === (8)))
{var inst_685948 = cljs.core.async.close_BANG_.call(null,to);var state_685965__$1 = state_685965;var statearr_685981_686003 = state_685965__$1;(statearr_685981_686003[(2)] = inst_685948);
(statearr_685981_686003[(1)] = (10));
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
});})(c__6257__auto___685989))
;return ((function (switch__6192__auto__,c__6257__auto___685989){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_685985 = [null,null,null,null,null,null,null,null];(statearr_685985[(0)] = state_machine__6193__auto__);
(statearr_685985[(1)] = (1));
return statearr_685985;
});
var state_machine__6193__auto____1 = (function (state_685965){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_685965);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e685986){if((e685986 instanceof Object))
{var ex__6196__auto__ = e685986;var statearr_685987_686004 = state_685965;(statearr_685987_686004[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_685965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e685986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__686005 = state_685965;
state_685965 = G__686005;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_685965){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_685965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___685989))
})();var state__6259__auto__ = (function (){var statearr_685988 = f__6258__auto__.call(null);(statearr_685988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___685989);
return statearr_685988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___685989))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6257__auto___686106 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___686106,tc,fc){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___686106,tc,fc){
return (function (state_686081){var state_val_686082 = (state_686081[(1)]);if((state_val_686082 === (7)))
{var inst_686077 = (state_686081[(2)]);var state_686081__$1 = state_686081;var statearr_686083_686107 = state_686081__$1;(statearr_686083_686107[(2)] = inst_686077);
(statearr_686083_686107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (1)))
{var state_686081__$1 = state_686081;var statearr_686084_686108 = state_686081__$1;(statearr_686084_686108[(2)] = null);
(statearr_686084_686108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (4)))
{var inst_686058 = (state_686081[(7)]);var inst_686058__$1 = (state_686081[(2)]);var inst_686059 = (inst_686058__$1 == null);var state_686081__$1 = (function (){var statearr_686085 = state_686081;(statearr_686085[(7)] = inst_686058__$1);
return statearr_686085;
})();if(cljs.core.truth_(inst_686059))
{var statearr_686086_686109 = state_686081__$1;(statearr_686086_686109[(1)] = (5));
} else
{var statearr_686087_686110 = state_686081__$1;(statearr_686087_686110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (13)))
{var state_686081__$1 = state_686081;var statearr_686088_686111 = state_686081__$1;(statearr_686088_686111[(2)] = null);
(statearr_686088_686111[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (6)))
{var inst_686058 = (state_686081[(7)]);var inst_686064 = p.call(null,inst_686058);var state_686081__$1 = state_686081;if(cljs.core.truth_(inst_686064))
{var statearr_686089_686112 = state_686081__$1;(statearr_686089_686112[(1)] = (9));
} else
{var statearr_686090_686113 = state_686081__$1;(statearr_686090_686113[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (3)))
{var inst_686079 = (state_686081[(2)]);var state_686081__$1 = state_686081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_686081__$1,inst_686079);
} else
{if((state_val_686082 === (12)))
{var state_686081__$1 = state_686081;var statearr_686091_686114 = state_686081__$1;(statearr_686091_686114[(2)] = null);
(statearr_686091_686114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (2)))
{var state_686081__$1 = state_686081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_686081__$1,(4),ch);
} else
{if((state_val_686082 === (11)))
{var inst_686058 = (state_686081[(7)]);var inst_686068 = (state_686081[(2)]);var state_686081__$1 = state_686081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_686081__$1,(8),inst_686068,inst_686058);
} else
{if((state_val_686082 === (9)))
{var state_686081__$1 = state_686081;var statearr_686092_686115 = state_686081__$1;(statearr_686092_686115[(2)] = tc);
(statearr_686092_686115[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (5)))
{var inst_686061 = cljs.core.async.close_BANG_.call(null,tc);var inst_686062 = cljs.core.async.close_BANG_.call(null,fc);var state_686081__$1 = (function (){var statearr_686093 = state_686081;(statearr_686093[(8)] = inst_686061);
return statearr_686093;
})();var statearr_686094_686116 = state_686081__$1;(statearr_686094_686116[(2)] = inst_686062);
(statearr_686094_686116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (14)))
{var inst_686075 = (state_686081[(2)]);var state_686081__$1 = state_686081;var statearr_686095_686117 = state_686081__$1;(statearr_686095_686117[(2)] = inst_686075);
(statearr_686095_686117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (10)))
{var state_686081__$1 = state_686081;var statearr_686096_686118 = state_686081__$1;(statearr_686096_686118[(2)] = fc);
(statearr_686096_686118[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686082 === (8)))
{var inst_686070 = (state_686081[(2)]);var state_686081__$1 = state_686081;if(cljs.core.truth_(inst_686070))
{var statearr_686097_686119 = state_686081__$1;(statearr_686097_686119[(1)] = (12));
} else
{var statearr_686098_686120 = state_686081__$1;(statearr_686098_686120[(1)] = (13));
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
});})(c__6257__auto___686106,tc,fc))
;return ((function (switch__6192__auto__,c__6257__auto___686106,tc,fc){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_686102 = [null,null,null,null,null,null,null,null,null];(statearr_686102[(0)] = state_machine__6193__auto__);
(statearr_686102[(1)] = (1));
return statearr_686102;
});
var state_machine__6193__auto____1 = (function (state_686081){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_686081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e686103){if((e686103 instanceof Object))
{var ex__6196__auto__ = e686103;var statearr_686104_686121 = state_686081;(statearr_686104_686121[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_686081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e686103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__686122 = state_686081;
state_686081 = G__686122;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_686081){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_686081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___686106,tc,fc))
})();var state__6259__auto__ = (function (){var statearr_686105 = f__6258__auto__.call(null);(statearr_686105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___686106);
return statearr_686105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___686106,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6257__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto__){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto__){
return (function (state_686169){var state_val_686170 = (state_686169[(1)]);if((state_val_686170 === (7)))
{var inst_686165 = (state_686169[(2)]);var state_686169__$1 = state_686169;var statearr_686171_686187 = state_686169__$1;(statearr_686171_686187[(2)] = inst_686165);
(statearr_686171_686187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686170 === (6)))
{var inst_686158 = (state_686169[(7)]);var inst_686155 = (state_686169[(8)]);var inst_686162 = f.call(null,inst_686155,inst_686158);var inst_686155__$1 = inst_686162;var state_686169__$1 = (function (){var statearr_686172 = state_686169;(statearr_686172[(8)] = inst_686155__$1);
return statearr_686172;
})();var statearr_686173_686188 = state_686169__$1;(statearr_686173_686188[(2)] = null);
(statearr_686173_686188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686170 === (5)))
{var inst_686155 = (state_686169[(8)]);var state_686169__$1 = state_686169;var statearr_686174_686189 = state_686169__$1;(statearr_686174_686189[(2)] = inst_686155);
(statearr_686174_686189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686170 === (4)))
{var inst_686158 = (state_686169[(7)]);var inst_686158__$1 = (state_686169[(2)]);var inst_686159 = (inst_686158__$1 == null);var state_686169__$1 = (function (){var statearr_686175 = state_686169;(statearr_686175[(7)] = inst_686158__$1);
return statearr_686175;
})();if(cljs.core.truth_(inst_686159))
{var statearr_686176_686190 = state_686169__$1;(statearr_686176_686190[(1)] = (5));
} else
{var statearr_686177_686191 = state_686169__$1;(statearr_686177_686191[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686170 === (3)))
{var inst_686167 = (state_686169[(2)]);var state_686169__$1 = state_686169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_686169__$1,inst_686167);
} else
{if((state_val_686170 === (2)))
{var state_686169__$1 = state_686169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_686169__$1,(4),ch);
} else
{if((state_val_686170 === (1)))
{var inst_686155 = init;var state_686169__$1 = (function (){var statearr_686178 = state_686169;(statearr_686178[(8)] = inst_686155);
return statearr_686178;
})();var statearr_686179_686192 = state_686169__$1;(statearr_686179_686192[(2)] = null);
(statearr_686179_686192[(1)] = (2));
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
});})(c__6257__auto__))
;return ((function (switch__6192__auto__,c__6257__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_686183 = [null,null,null,null,null,null,null,null,null];(statearr_686183[(0)] = state_machine__6193__auto__);
(statearr_686183[(1)] = (1));
return statearr_686183;
});
var state_machine__6193__auto____1 = (function (state_686169){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_686169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e686184){if((e686184 instanceof Object))
{var ex__6196__auto__ = e686184;var statearr_686185_686193 = state_686169;(statearr_686185_686193[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_686169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e686184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__686194 = state_686169;
state_686169 = G__686194;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_686169){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_686169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto__))
})();var state__6259__auto__ = (function (){var statearr_686186 = f__6258__auto__.call(null);(statearr_686186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto__);
return statearr_686186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto__))
);
return c__6257__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6257__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto__){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto__){
return (function (state_686268){var state_val_686269 = (state_686268[(1)]);if((state_val_686269 === (7)))
{var inst_686250 = (state_686268[(2)]);var state_686268__$1 = state_686268;var statearr_686270_686293 = state_686268__$1;(statearr_686270_686293[(2)] = inst_686250);
(statearr_686270_686293[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (1)))
{var inst_686244 = cljs.core.seq.call(null,coll);var inst_686245 = inst_686244;var state_686268__$1 = (function (){var statearr_686271 = state_686268;(statearr_686271[(7)] = inst_686245);
return statearr_686271;
})();var statearr_686272_686294 = state_686268__$1;(statearr_686272_686294[(2)] = null);
(statearr_686272_686294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (4)))
{var inst_686245 = (state_686268[(7)]);var inst_686248 = cljs.core.first.call(null,inst_686245);var state_686268__$1 = state_686268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_686268__$1,(7),ch,inst_686248);
} else
{if((state_val_686269 === (13)))
{var inst_686262 = (state_686268[(2)]);var state_686268__$1 = state_686268;var statearr_686273_686295 = state_686268__$1;(statearr_686273_686295[(2)] = inst_686262);
(statearr_686273_686295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (6)))
{var inst_686253 = (state_686268[(2)]);var state_686268__$1 = state_686268;if(cljs.core.truth_(inst_686253))
{var statearr_686274_686296 = state_686268__$1;(statearr_686274_686296[(1)] = (8));
} else
{var statearr_686275_686297 = state_686268__$1;(statearr_686275_686297[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (3)))
{var inst_686266 = (state_686268[(2)]);var state_686268__$1 = state_686268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_686268__$1,inst_686266);
} else
{if((state_val_686269 === (12)))
{var state_686268__$1 = state_686268;var statearr_686276_686298 = state_686268__$1;(statearr_686276_686298[(2)] = null);
(statearr_686276_686298[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (2)))
{var inst_686245 = (state_686268[(7)]);var state_686268__$1 = state_686268;if(cljs.core.truth_(inst_686245))
{var statearr_686277_686299 = state_686268__$1;(statearr_686277_686299[(1)] = (4));
} else
{var statearr_686278_686300 = state_686268__$1;(statearr_686278_686300[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (11)))
{var inst_686259 = cljs.core.async.close_BANG_.call(null,ch);var state_686268__$1 = state_686268;var statearr_686279_686301 = state_686268__$1;(statearr_686279_686301[(2)] = inst_686259);
(statearr_686279_686301[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (9)))
{var state_686268__$1 = state_686268;if(cljs.core.truth_(close_QMARK_))
{var statearr_686280_686302 = state_686268__$1;(statearr_686280_686302[(1)] = (11));
} else
{var statearr_686281_686303 = state_686268__$1;(statearr_686281_686303[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (5)))
{var inst_686245 = (state_686268[(7)]);var state_686268__$1 = state_686268;var statearr_686282_686304 = state_686268__$1;(statearr_686282_686304[(2)] = inst_686245);
(statearr_686282_686304[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (10)))
{var inst_686264 = (state_686268[(2)]);var state_686268__$1 = state_686268;var statearr_686283_686305 = state_686268__$1;(statearr_686283_686305[(2)] = inst_686264);
(statearr_686283_686305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686269 === (8)))
{var inst_686245 = (state_686268[(7)]);var inst_686255 = cljs.core.next.call(null,inst_686245);var inst_686245__$1 = inst_686255;var state_686268__$1 = (function (){var statearr_686284 = state_686268;(statearr_686284[(7)] = inst_686245__$1);
return statearr_686284;
})();var statearr_686285_686306 = state_686268__$1;(statearr_686285_686306[(2)] = null);
(statearr_686285_686306[(1)] = (2));
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
});})(c__6257__auto__))
;return ((function (switch__6192__auto__,c__6257__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_686289 = [null,null,null,null,null,null,null,null];(statearr_686289[(0)] = state_machine__6193__auto__);
(statearr_686289[(1)] = (1));
return statearr_686289;
});
var state_machine__6193__auto____1 = (function (state_686268){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_686268);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e686290){if((e686290 instanceof Object))
{var ex__6196__auto__ = e686290;var statearr_686291_686307 = state_686268;(statearr_686291_686307[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_686268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e686290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__686308 = state_686268;
state_686268 = G__686308;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_686268){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_686268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto__))
})();var state__6259__auto__ = (function (){var statearr_686292 = f__6258__auto__.call(null);(statearr_686292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto__);
return statearr_686292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto__))
);
return c__6257__auto__;
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
cljs.core.async.Mux = (function (){var obj686310 = {};return obj686310;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3532__auto__ = _;if(and__3532__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4171__auto__ = (((_ == null))?null:_);return (function (){var or__3544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj686312 = {};return obj686312;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t686534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t686534 = (function (cs,ch,mult,meta686535){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta686535 = meta686535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t686534.cljs$lang$type = true;
cljs.core.async.t686534.cljs$lang$ctorStr = "cljs.core.async/t686534";
cljs.core.async.t686534.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t686534");
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t686534.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t686534.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_686536){var self__ = this;
var _686536__$1 = this;return self__.meta686535;
});})(cs))
;
cljs.core.async.t686534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_686536,meta686535__$1){var self__ = this;
var _686536__$1 = this;return (new cljs.core.async.t686534(self__.cs,self__.ch,self__.mult,meta686535__$1));
});})(cs))
;
cljs.core.async.__GT_t686534 = ((function (cs){
return (function __GT_t686534(cs__$1,ch__$1,mult__$1,meta686535){return (new cljs.core.async.t686534(cs__$1,ch__$1,mult__$1,meta686535));
});})(cs))
;
}
return (new cljs.core.async.t686534(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6257__auto___686755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___686755,cs,m,dchan,dctr,done){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___686755,cs,m,dchan,dctr,done){
return (function (state_686667){var state_val_686668 = (state_686667[(1)]);if((state_val_686668 === (7)))
{var inst_686663 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686669_686756 = state_686667__$1;(statearr_686669_686756[(2)] = inst_686663);
(statearr_686669_686756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (20)))
{var inst_686568 = (state_686667[(7)]);var inst_686578 = cljs.core.first.call(null,inst_686568);var inst_686579 = cljs.core.nth.call(null,inst_686578,(0),null);var inst_686580 = cljs.core.nth.call(null,inst_686578,(1),null);var state_686667__$1 = (function (){var statearr_686670 = state_686667;(statearr_686670[(8)] = inst_686579);
return statearr_686670;
})();if(cljs.core.truth_(inst_686580))
{var statearr_686671_686757 = state_686667__$1;(statearr_686671_686757[(1)] = (22));
} else
{var statearr_686672_686758 = state_686667__$1;(statearr_686672_686758[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (27)))
{var inst_686608 = (state_686667[(9)]);var inst_686539 = (state_686667[(10)]);var inst_686615 = (state_686667[(11)]);var inst_686610 = (state_686667[(12)]);var inst_686615__$1 = cljs.core._nth.call(null,inst_686608,inst_686610);var inst_686616 = cljs.core.async.put_BANG_.call(null,inst_686615__$1,inst_686539,done);var state_686667__$1 = (function (){var statearr_686673 = state_686667;(statearr_686673[(11)] = inst_686615__$1);
return statearr_686673;
})();if(cljs.core.truth_(inst_686616))
{var statearr_686674_686759 = state_686667__$1;(statearr_686674_686759[(1)] = (30));
} else
{var statearr_686675_686760 = state_686667__$1;(statearr_686675_686760[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (1)))
{var state_686667__$1 = state_686667;var statearr_686676_686761 = state_686667__$1;(statearr_686676_686761[(2)] = null);
(statearr_686676_686761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (24)))
{var inst_686568 = (state_686667[(7)]);var inst_686585 = (state_686667[(2)]);var inst_686586 = cljs.core.next.call(null,inst_686568);var inst_686548 = inst_686586;var inst_686549 = null;var inst_686550 = (0);var inst_686551 = (0);var state_686667__$1 = (function (){var statearr_686677 = state_686667;(statearr_686677[(13)] = inst_686548);
(statearr_686677[(14)] = inst_686549);
(statearr_686677[(15)] = inst_686585);
(statearr_686677[(16)] = inst_686550);
(statearr_686677[(17)] = inst_686551);
return statearr_686677;
})();var statearr_686678_686762 = state_686667__$1;(statearr_686678_686762[(2)] = null);
(statearr_686678_686762[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (39)))
{var state_686667__$1 = state_686667;var statearr_686682_686763 = state_686667__$1;(statearr_686682_686763[(2)] = null);
(statearr_686682_686763[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (4)))
{var inst_686539 = (state_686667[(10)]);var inst_686539__$1 = (state_686667[(2)]);var inst_686540 = (inst_686539__$1 == null);var state_686667__$1 = (function (){var statearr_686683 = state_686667;(statearr_686683[(10)] = inst_686539__$1);
return statearr_686683;
})();if(cljs.core.truth_(inst_686540))
{var statearr_686684_686764 = state_686667__$1;(statearr_686684_686764[(1)] = (5));
} else
{var statearr_686685_686765 = state_686667__$1;(statearr_686685_686765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (15)))
{var inst_686548 = (state_686667[(13)]);var inst_686549 = (state_686667[(14)]);var inst_686550 = (state_686667[(16)]);var inst_686551 = (state_686667[(17)]);var inst_686564 = (state_686667[(2)]);var inst_686565 = (inst_686551 + (1));var tmp686679 = inst_686548;var tmp686680 = inst_686549;var tmp686681 = inst_686550;var inst_686548__$1 = tmp686679;var inst_686549__$1 = tmp686680;var inst_686550__$1 = tmp686681;var inst_686551__$1 = inst_686565;var state_686667__$1 = (function (){var statearr_686686 = state_686667;(statearr_686686[(18)] = inst_686564);
(statearr_686686[(13)] = inst_686548__$1);
(statearr_686686[(14)] = inst_686549__$1);
(statearr_686686[(16)] = inst_686550__$1);
(statearr_686686[(17)] = inst_686551__$1);
return statearr_686686;
})();var statearr_686687_686766 = state_686667__$1;(statearr_686687_686766[(2)] = null);
(statearr_686687_686766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (21)))
{var inst_686589 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686691_686767 = state_686667__$1;(statearr_686691_686767[(2)] = inst_686589);
(statearr_686691_686767[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (31)))
{var inst_686615 = (state_686667[(11)]);var inst_686619 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_686620 = cljs.core.async.untap_STAR_.call(null,m,inst_686615);var state_686667__$1 = (function (){var statearr_686692 = state_686667;(statearr_686692[(19)] = inst_686619);
return statearr_686692;
})();var statearr_686693_686768 = state_686667__$1;(statearr_686693_686768[(2)] = inst_686620);
(statearr_686693_686768[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (32)))
{var inst_686609 = (state_686667[(20)]);var inst_686608 = (state_686667[(9)]);var inst_686607 = (state_686667[(21)]);var inst_686610 = (state_686667[(12)]);var inst_686622 = (state_686667[(2)]);var inst_686623 = (inst_686610 + (1));var tmp686688 = inst_686609;var tmp686689 = inst_686608;var tmp686690 = inst_686607;var inst_686607__$1 = tmp686690;var inst_686608__$1 = tmp686689;var inst_686609__$1 = tmp686688;var inst_686610__$1 = inst_686623;var state_686667__$1 = (function (){var statearr_686694 = state_686667;(statearr_686694[(20)] = inst_686609__$1);
(statearr_686694[(9)] = inst_686608__$1);
(statearr_686694[(22)] = inst_686622);
(statearr_686694[(21)] = inst_686607__$1);
(statearr_686694[(12)] = inst_686610__$1);
return statearr_686694;
})();var statearr_686695_686769 = state_686667__$1;(statearr_686695_686769[(2)] = null);
(statearr_686695_686769[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (40)))
{var inst_686635 = (state_686667[(23)]);var inst_686639 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_686640 = cljs.core.async.untap_STAR_.call(null,m,inst_686635);var state_686667__$1 = (function (){var statearr_686696 = state_686667;(statearr_686696[(24)] = inst_686639);
return statearr_686696;
})();var statearr_686697_686770 = state_686667__$1;(statearr_686697_686770[(2)] = inst_686640);
(statearr_686697_686770[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (33)))
{var inst_686626 = (state_686667[(25)]);var inst_686628 = cljs.core.chunked_seq_QMARK_.call(null,inst_686626);var state_686667__$1 = state_686667;if(inst_686628)
{var statearr_686698_686771 = state_686667__$1;(statearr_686698_686771[(1)] = (36));
} else
{var statearr_686699_686772 = state_686667__$1;(statearr_686699_686772[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (13)))
{var inst_686558 = (state_686667[(26)]);var inst_686561 = cljs.core.async.close_BANG_.call(null,inst_686558);var state_686667__$1 = state_686667;var statearr_686700_686773 = state_686667__$1;(statearr_686700_686773[(2)] = inst_686561);
(statearr_686700_686773[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (22)))
{var inst_686579 = (state_686667[(8)]);var inst_686582 = cljs.core.async.close_BANG_.call(null,inst_686579);var state_686667__$1 = state_686667;var statearr_686701_686774 = state_686667__$1;(statearr_686701_686774[(2)] = inst_686582);
(statearr_686701_686774[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (36)))
{var inst_686626 = (state_686667[(25)]);var inst_686630 = cljs.core.chunk_first.call(null,inst_686626);var inst_686631 = cljs.core.chunk_rest.call(null,inst_686626);var inst_686632 = cljs.core.count.call(null,inst_686630);var inst_686607 = inst_686631;var inst_686608 = inst_686630;var inst_686609 = inst_686632;var inst_686610 = (0);var state_686667__$1 = (function (){var statearr_686702 = state_686667;(statearr_686702[(20)] = inst_686609);
(statearr_686702[(9)] = inst_686608);
(statearr_686702[(21)] = inst_686607);
(statearr_686702[(12)] = inst_686610);
return statearr_686702;
})();var statearr_686703_686775 = state_686667__$1;(statearr_686703_686775[(2)] = null);
(statearr_686703_686775[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (41)))
{var inst_686626 = (state_686667[(25)]);var inst_686642 = (state_686667[(2)]);var inst_686643 = cljs.core.next.call(null,inst_686626);var inst_686607 = inst_686643;var inst_686608 = null;var inst_686609 = (0);var inst_686610 = (0);var state_686667__$1 = (function (){var statearr_686704 = state_686667;(statearr_686704[(20)] = inst_686609);
(statearr_686704[(9)] = inst_686608);
(statearr_686704[(27)] = inst_686642);
(statearr_686704[(21)] = inst_686607);
(statearr_686704[(12)] = inst_686610);
return statearr_686704;
})();var statearr_686705_686776 = state_686667__$1;(statearr_686705_686776[(2)] = null);
(statearr_686705_686776[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (43)))
{var state_686667__$1 = state_686667;var statearr_686706_686777 = state_686667__$1;(statearr_686706_686777[(2)] = null);
(statearr_686706_686777[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (29)))
{var inst_686651 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686707_686778 = state_686667__$1;(statearr_686707_686778[(2)] = inst_686651);
(statearr_686707_686778[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (44)))
{var inst_686660 = (state_686667[(2)]);var state_686667__$1 = (function (){var statearr_686708 = state_686667;(statearr_686708[(28)] = inst_686660);
return statearr_686708;
})();var statearr_686709_686779 = state_686667__$1;(statearr_686709_686779[(2)] = null);
(statearr_686709_686779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (6)))
{var inst_686599 = (state_686667[(29)]);var inst_686598 = cljs.core.deref.call(null,cs);var inst_686599__$1 = cljs.core.keys.call(null,inst_686598);var inst_686600 = cljs.core.count.call(null,inst_686599__$1);var inst_686601 = cljs.core.reset_BANG_.call(null,dctr,inst_686600);var inst_686606 = cljs.core.seq.call(null,inst_686599__$1);var inst_686607 = inst_686606;var inst_686608 = null;var inst_686609 = (0);var inst_686610 = (0);var state_686667__$1 = (function (){var statearr_686710 = state_686667;(statearr_686710[(20)] = inst_686609);
(statearr_686710[(9)] = inst_686608);
(statearr_686710[(29)] = inst_686599__$1);
(statearr_686710[(21)] = inst_686607);
(statearr_686710[(12)] = inst_686610);
(statearr_686710[(30)] = inst_686601);
return statearr_686710;
})();var statearr_686711_686780 = state_686667__$1;(statearr_686711_686780[(2)] = null);
(statearr_686711_686780[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (28)))
{var inst_686607 = (state_686667[(21)]);var inst_686626 = (state_686667[(25)]);var inst_686626__$1 = cljs.core.seq.call(null,inst_686607);var state_686667__$1 = (function (){var statearr_686712 = state_686667;(statearr_686712[(25)] = inst_686626__$1);
return statearr_686712;
})();if(inst_686626__$1)
{var statearr_686713_686781 = state_686667__$1;(statearr_686713_686781[(1)] = (33));
} else
{var statearr_686714_686782 = state_686667__$1;(statearr_686714_686782[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (25)))
{var inst_686609 = (state_686667[(20)]);var inst_686610 = (state_686667[(12)]);var inst_686612 = (inst_686610 < inst_686609);var inst_686613 = inst_686612;var state_686667__$1 = state_686667;if(cljs.core.truth_(inst_686613))
{var statearr_686715_686783 = state_686667__$1;(statearr_686715_686783[(1)] = (27));
} else
{var statearr_686716_686784 = state_686667__$1;(statearr_686716_686784[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (34)))
{var state_686667__$1 = state_686667;var statearr_686717_686785 = state_686667__$1;(statearr_686717_686785[(2)] = null);
(statearr_686717_686785[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (17)))
{var state_686667__$1 = state_686667;var statearr_686718_686786 = state_686667__$1;(statearr_686718_686786[(2)] = null);
(statearr_686718_686786[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (3)))
{var inst_686665 = (state_686667[(2)]);var state_686667__$1 = state_686667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_686667__$1,inst_686665);
} else
{if((state_val_686668 === (12)))
{var inst_686594 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686719_686787 = state_686667__$1;(statearr_686719_686787[(2)] = inst_686594);
(statearr_686719_686787[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (2)))
{var state_686667__$1 = state_686667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_686667__$1,(4),ch);
} else
{if((state_val_686668 === (23)))
{var state_686667__$1 = state_686667;var statearr_686720_686788 = state_686667__$1;(statearr_686720_686788[(2)] = null);
(statearr_686720_686788[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (35)))
{var inst_686649 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686721_686789 = state_686667__$1;(statearr_686721_686789[(2)] = inst_686649);
(statearr_686721_686789[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (19)))
{var inst_686568 = (state_686667[(7)]);var inst_686572 = cljs.core.chunk_first.call(null,inst_686568);var inst_686573 = cljs.core.chunk_rest.call(null,inst_686568);var inst_686574 = cljs.core.count.call(null,inst_686572);var inst_686548 = inst_686573;var inst_686549 = inst_686572;var inst_686550 = inst_686574;var inst_686551 = (0);var state_686667__$1 = (function (){var statearr_686722 = state_686667;(statearr_686722[(13)] = inst_686548);
(statearr_686722[(14)] = inst_686549);
(statearr_686722[(16)] = inst_686550);
(statearr_686722[(17)] = inst_686551);
return statearr_686722;
})();var statearr_686723_686790 = state_686667__$1;(statearr_686723_686790[(2)] = null);
(statearr_686723_686790[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (11)))
{var inst_686568 = (state_686667[(7)]);var inst_686548 = (state_686667[(13)]);var inst_686568__$1 = cljs.core.seq.call(null,inst_686548);var state_686667__$1 = (function (){var statearr_686724 = state_686667;(statearr_686724[(7)] = inst_686568__$1);
return statearr_686724;
})();if(inst_686568__$1)
{var statearr_686725_686791 = state_686667__$1;(statearr_686725_686791[(1)] = (16));
} else
{var statearr_686726_686792 = state_686667__$1;(statearr_686726_686792[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (9)))
{var inst_686596 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686727_686793 = state_686667__$1;(statearr_686727_686793[(2)] = inst_686596);
(statearr_686727_686793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (5)))
{var inst_686546 = cljs.core.deref.call(null,cs);var inst_686547 = cljs.core.seq.call(null,inst_686546);var inst_686548 = inst_686547;var inst_686549 = null;var inst_686550 = (0);var inst_686551 = (0);var state_686667__$1 = (function (){var statearr_686728 = state_686667;(statearr_686728[(13)] = inst_686548);
(statearr_686728[(14)] = inst_686549);
(statearr_686728[(16)] = inst_686550);
(statearr_686728[(17)] = inst_686551);
return statearr_686728;
})();var statearr_686729_686794 = state_686667__$1;(statearr_686729_686794[(2)] = null);
(statearr_686729_686794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (14)))
{var state_686667__$1 = state_686667;var statearr_686730_686795 = state_686667__$1;(statearr_686730_686795[(2)] = null);
(statearr_686730_686795[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (45)))
{var inst_686657 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686731_686796 = state_686667__$1;(statearr_686731_686796[(2)] = inst_686657);
(statearr_686731_686796[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (26)))
{var inst_686599 = (state_686667[(29)]);var inst_686653 = (state_686667[(2)]);var inst_686654 = cljs.core.seq.call(null,inst_686599);var state_686667__$1 = (function (){var statearr_686732 = state_686667;(statearr_686732[(31)] = inst_686653);
return statearr_686732;
})();if(inst_686654)
{var statearr_686733_686797 = state_686667__$1;(statearr_686733_686797[(1)] = (42));
} else
{var statearr_686734_686798 = state_686667__$1;(statearr_686734_686798[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (16)))
{var inst_686568 = (state_686667[(7)]);var inst_686570 = cljs.core.chunked_seq_QMARK_.call(null,inst_686568);var state_686667__$1 = state_686667;if(inst_686570)
{var statearr_686735_686799 = state_686667__$1;(statearr_686735_686799[(1)] = (19));
} else
{var statearr_686736_686800 = state_686667__$1;(statearr_686736_686800[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (38)))
{var inst_686646 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686737_686801 = state_686667__$1;(statearr_686737_686801[(2)] = inst_686646);
(statearr_686737_686801[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (30)))
{var state_686667__$1 = state_686667;var statearr_686738_686802 = state_686667__$1;(statearr_686738_686802[(2)] = null);
(statearr_686738_686802[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (10)))
{var inst_686549 = (state_686667[(14)]);var inst_686551 = (state_686667[(17)]);var inst_686557 = cljs.core._nth.call(null,inst_686549,inst_686551);var inst_686558 = cljs.core.nth.call(null,inst_686557,(0),null);var inst_686559 = cljs.core.nth.call(null,inst_686557,(1),null);var state_686667__$1 = (function (){var statearr_686739 = state_686667;(statearr_686739[(26)] = inst_686558);
return statearr_686739;
})();if(cljs.core.truth_(inst_686559))
{var statearr_686740_686803 = state_686667__$1;(statearr_686740_686803[(1)] = (13));
} else
{var statearr_686741_686804 = state_686667__$1;(statearr_686741_686804[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (18)))
{var inst_686592 = (state_686667[(2)]);var state_686667__$1 = state_686667;var statearr_686742_686805 = state_686667__$1;(statearr_686742_686805[(2)] = inst_686592);
(statearr_686742_686805[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (42)))
{var state_686667__$1 = state_686667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_686667__$1,(45),dchan);
} else
{if((state_val_686668 === (37)))
{var inst_686635 = (state_686667[(23)]);var inst_686539 = (state_686667[(10)]);var inst_686626 = (state_686667[(25)]);var inst_686635__$1 = cljs.core.first.call(null,inst_686626);var inst_686636 = cljs.core.async.put_BANG_.call(null,inst_686635__$1,inst_686539,done);var state_686667__$1 = (function (){var statearr_686743 = state_686667;(statearr_686743[(23)] = inst_686635__$1);
return statearr_686743;
})();if(cljs.core.truth_(inst_686636))
{var statearr_686744_686806 = state_686667__$1;(statearr_686744_686806[(1)] = (39));
} else
{var statearr_686745_686807 = state_686667__$1;(statearr_686745_686807[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_686668 === (8)))
{var inst_686550 = (state_686667[(16)]);var inst_686551 = (state_686667[(17)]);var inst_686553 = (inst_686551 < inst_686550);var inst_686554 = inst_686553;var state_686667__$1 = state_686667;if(cljs.core.truth_(inst_686554))
{var statearr_686746_686808 = state_686667__$1;(statearr_686746_686808[(1)] = (10));
} else
{var statearr_686747_686809 = state_686667__$1;(statearr_686747_686809[(1)] = (11));
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
});})(c__6257__auto___686755,cs,m,dchan,dctr,done))
;return ((function (switch__6192__auto__,c__6257__auto___686755,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_686751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_686751[(0)] = state_machine__6193__auto__);
(statearr_686751[(1)] = (1));
return statearr_686751;
});
var state_machine__6193__auto____1 = (function (state_686667){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_686667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e686752){if((e686752 instanceof Object))
{var ex__6196__auto__ = e686752;var statearr_686753_686810 = state_686667;(statearr_686753_686810[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_686667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e686752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__686811 = state_686667;
state_686667 = G__686811;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_686667){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_686667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___686755,cs,m,dchan,dctr,done))
})();var state__6259__auto__ = (function (){var statearr_686754 = f__6258__auto__.call(null);(statearr_686754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___686755);
return statearr_686754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___686755,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj686813 = {};return obj686813;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t686933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t686933 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta686934){
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
this.meta686934 = meta686934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t686933.cljs$lang$type = true;
cljs.core.async.t686933.cljs$lang$ctorStr = "cljs.core.async/t686933";
cljs.core.async.t686933.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t686933");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t686933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_686935){var self__ = this;
var _686935__$1 = this;return self__.meta686934;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t686933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_686935,meta686934__$1){var self__ = this;
var _686935__$1 = this;return (new cljs.core.async.t686933(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta686934__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t686933 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t686933(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta686934){return (new cljs.core.async.t686933(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta686934));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t686933(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6257__auto___687052 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_687005){var state_val_687006 = (state_687005[(1)]);if((state_val_687006 === (7)))
{var inst_686949 = (state_687005[(7)]);var inst_686954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_686949);var state_687005__$1 = state_687005;var statearr_687007_687053 = state_687005__$1;(statearr_687007_687053[(2)] = inst_686954);
(statearr_687007_687053[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (20)))
{var inst_686964 = (state_687005[(8)]);var state_687005__$1 = state_687005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687005__$1,(23),out,inst_686964);
} else
{if((state_val_687006 === (1)))
{var inst_686939 = (state_687005[(9)]);var inst_686939__$1 = calc_state.call(null);var inst_686940 = cljs.core.seq_QMARK_.call(null,inst_686939__$1);var state_687005__$1 = (function (){var statearr_687008 = state_687005;(statearr_687008[(9)] = inst_686939__$1);
return statearr_687008;
})();if(inst_686940)
{var statearr_687009_687054 = state_687005__$1;(statearr_687009_687054[(1)] = (2));
} else
{var statearr_687010_687055 = state_687005__$1;(statearr_687010_687055[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (24)))
{var inst_686957 = (state_687005[(10)]);var inst_686949 = inst_686957;var state_687005__$1 = (function (){var statearr_687011 = state_687005;(statearr_687011[(7)] = inst_686949);
return statearr_687011;
})();var statearr_687012_687056 = state_687005__$1;(statearr_687012_687056[(2)] = null);
(statearr_687012_687056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (4)))
{var inst_686939 = (state_687005[(9)]);var inst_686945 = (state_687005[(2)]);var inst_686946 = cljs.core.get.call(null,inst_686945,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_686947 = cljs.core.get.call(null,inst_686945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_686948 = cljs.core.get.call(null,inst_686945,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_686949 = inst_686939;var state_687005__$1 = (function (){var statearr_687013 = state_687005;(statearr_687013[(11)] = inst_686947);
(statearr_687013[(12)] = inst_686948);
(statearr_687013[(7)] = inst_686949);
(statearr_687013[(13)] = inst_686946);
return statearr_687013;
})();var statearr_687014_687057 = state_687005__$1;(statearr_687014_687057[(2)] = null);
(statearr_687014_687057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (15)))
{var state_687005__$1 = state_687005;var statearr_687015_687058 = state_687005__$1;(statearr_687015_687058[(2)] = null);
(statearr_687015_687058[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (21)))
{var inst_686957 = (state_687005[(10)]);var inst_686949 = inst_686957;var state_687005__$1 = (function (){var statearr_687016 = state_687005;(statearr_687016[(7)] = inst_686949);
return statearr_687016;
})();var statearr_687017_687059 = state_687005__$1;(statearr_687017_687059[(2)] = null);
(statearr_687017_687059[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (13)))
{var inst_687001 = (state_687005[(2)]);var state_687005__$1 = state_687005;var statearr_687018_687060 = state_687005__$1;(statearr_687018_687060[(2)] = inst_687001);
(statearr_687018_687060[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (22)))
{var inst_686999 = (state_687005[(2)]);var state_687005__$1 = state_687005;var statearr_687019_687061 = state_687005__$1;(statearr_687019_687061[(2)] = inst_686999);
(statearr_687019_687061[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (6)))
{var inst_687003 = (state_687005[(2)]);var state_687005__$1 = state_687005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687005__$1,inst_687003);
} else
{if((state_val_687006 === (25)))
{var state_687005__$1 = state_687005;var statearr_687020_687062 = state_687005__$1;(statearr_687020_687062[(2)] = null);
(statearr_687020_687062[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (17)))
{var inst_686979 = (state_687005[(14)]);var state_687005__$1 = state_687005;var statearr_687021_687063 = state_687005__$1;(statearr_687021_687063[(2)] = inst_686979);
(statearr_687021_687063[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (3)))
{var inst_686939 = (state_687005[(9)]);var state_687005__$1 = state_687005;var statearr_687022_687064 = state_687005__$1;(statearr_687022_687064[(2)] = inst_686939);
(statearr_687022_687064[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (12)))
{var inst_686965 = (state_687005[(15)]);var inst_686979 = (state_687005[(14)]);var inst_686960 = (state_687005[(16)]);var inst_686979__$1 = inst_686960.call(null,inst_686965);var state_687005__$1 = (function (){var statearr_687023 = state_687005;(statearr_687023[(14)] = inst_686979__$1);
return statearr_687023;
})();if(cljs.core.truth_(inst_686979__$1))
{var statearr_687024_687065 = state_687005__$1;(statearr_687024_687065[(1)] = (17));
} else
{var statearr_687025_687066 = state_687005__$1;(statearr_687025_687066[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (2)))
{var inst_686939 = (state_687005[(9)]);var inst_686942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_686939);var state_687005__$1 = state_687005;var statearr_687026_687067 = state_687005__$1;(statearr_687026_687067[(2)] = inst_686942);
(statearr_687026_687067[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (23)))
{var inst_686990 = (state_687005[(2)]);var state_687005__$1 = state_687005;if(cljs.core.truth_(inst_686990))
{var statearr_687027_687068 = state_687005__$1;(statearr_687027_687068[(1)] = (24));
} else
{var statearr_687028_687069 = state_687005__$1;(statearr_687028_687069[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (19)))
{var inst_686987 = (state_687005[(2)]);var state_687005__$1 = state_687005;if(cljs.core.truth_(inst_686987))
{var statearr_687029_687070 = state_687005__$1;(statearr_687029_687070[(1)] = (20));
} else
{var statearr_687030_687071 = state_687005__$1;(statearr_687030_687071[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (11)))
{var inst_686964 = (state_687005[(8)]);var inst_686970 = (inst_686964 == null);var state_687005__$1 = state_687005;if(cljs.core.truth_(inst_686970))
{var statearr_687031_687072 = state_687005__$1;(statearr_687031_687072[(1)] = (14));
} else
{var statearr_687032_687073 = state_687005__$1;(statearr_687032_687073[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (9)))
{var inst_686957 = (state_687005[(10)]);var inst_686957__$1 = (state_687005[(2)]);var inst_686958 = cljs.core.get.call(null,inst_686957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_686959 = cljs.core.get.call(null,inst_686957__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_686960 = cljs.core.get.call(null,inst_686957__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_687005__$1 = (function (){var statearr_687033 = state_687005;(statearr_687033[(17)] = inst_686959);
(statearr_687033[(10)] = inst_686957__$1);
(statearr_687033[(16)] = inst_686960);
return statearr_687033;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_687005__$1,(10),inst_686958);
} else
{if((state_val_687006 === (5)))
{var inst_686949 = (state_687005[(7)]);var inst_686952 = cljs.core.seq_QMARK_.call(null,inst_686949);var state_687005__$1 = state_687005;if(inst_686952)
{var statearr_687034_687074 = state_687005__$1;(statearr_687034_687074[(1)] = (7));
} else
{var statearr_687035_687075 = state_687005__$1;(statearr_687035_687075[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (14)))
{var inst_686965 = (state_687005[(15)]);var inst_686972 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_686965);var state_687005__$1 = state_687005;var statearr_687036_687076 = state_687005__$1;(statearr_687036_687076[(2)] = inst_686972);
(statearr_687036_687076[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (26)))
{var inst_686995 = (state_687005[(2)]);var state_687005__$1 = state_687005;var statearr_687037_687077 = state_687005__$1;(statearr_687037_687077[(2)] = inst_686995);
(statearr_687037_687077[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (16)))
{var inst_686975 = (state_687005[(2)]);var inst_686976 = calc_state.call(null);var inst_686949 = inst_686976;var state_687005__$1 = (function (){var statearr_687038 = state_687005;(statearr_687038[(7)] = inst_686949);
(statearr_687038[(18)] = inst_686975);
return statearr_687038;
})();var statearr_687039_687078 = state_687005__$1;(statearr_687039_687078[(2)] = null);
(statearr_687039_687078[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (10)))
{var inst_686964 = (state_687005[(8)]);var inst_686965 = (state_687005[(15)]);var inst_686963 = (state_687005[(2)]);var inst_686964__$1 = cljs.core.nth.call(null,inst_686963,(0),null);var inst_686965__$1 = cljs.core.nth.call(null,inst_686963,(1),null);var inst_686966 = (inst_686964__$1 == null);var inst_686967 = cljs.core._EQ_.call(null,inst_686965__$1,change);var inst_686968 = (inst_686966) || (inst_686967);var state_687005__$1 = (function (){var statearr_687040 = state_687005;(statearr_687040[(8)] = inst_686964__$1);
(statearr_687040[(15)] = inst_686965__$1);
return statearr_687040;
})();if(cljs.core.truth_(inst_686968))
{var statearr_687041_687079 = state_687005__$1;(statearr_687041_687079[(1)] = (11));
} else
{var statearr_687042_687080 = state_687005__$1;(statearr_687042_687080[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (18)))
{var inst_686959 = (state_687005[(17)]);var inst_686965 = (state_687005[(15)]);var inst_686960 = (state_687005[(16)]);var inst_686982 = cljs.core.empty_QMARK_.call(null,inst_686960);var inst_686983 = inst_686959.call(null,inst_686965);var inst_686984 = cljs.core.not.call(null,inst_686983);var inst_686985 = (inst_686982) && (inst_686984);var state_687005__$1 = state_687005;var statearr_687043_687081 = state_687005__$1;(statearr_687043_687081[(2)] = inst_686985);
(statearr_687043_687081[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687006 === (8)))
{var inst_686949 = (state_687005[(7)]);var state_687005__$1 = state_687005;var statearr_687044_687082 = state_687005__$1;(statearr_687044_687082[(2)] = inst_686949);
(statearr_687044_687082[(1)] = (9));
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
});})(c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6192__auto__,c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_687048[(0)] = state_machine__6193__auto__);
(statearr_687048[(1)] = (1));
return statearr_687048;
});
var state_machine__6193__auto____1 = (function (state_687005){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687049){if((e687049 instanceof Object))
{var ex__6196__auto__ = e687049;var statearr_687050_687083 = state_687005;(statearr_687050_687083[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687084 = state_687005;
state_687005 = G__687084;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687005){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6259__auto__ = (function (){var statearr_687051 = f__6258__auto__.call(null);(statearr_687051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687052);
return statearr_687051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj687086 = {};return obj687086;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
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
return (function (topic){var or__3544__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3544__auto__,mults){
return (function (p1__687087_SHARP_){if(cljs.core.truth_(p1__687087_SHARP_.call(null,topic)))
{return p1__687087_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__687087_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3544__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t687210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t687210 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta687211){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta687211 = meta687211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t687210.cljs$lang$type = true;
cljs.core.async.t687210.cljs$lang$ctorStr = "cljs.core.async/t687210";
cljs.core.async.t687210.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t687210");
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t687210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t687210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_687212){var self__ = this;
var _687212__$1 = this;return self__.meta687211;
});})(mults,ensure_mult))
;
cljs.core.async.t687210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_687212,meta687211__$1){var self__ = this;
var _687212__$1 = this;return (new cljs.core.async.t687210(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta687211__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t687210 = ((function (mults,ensure_mult){
return (function __GT_t687210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta687211){return (new cljs.core.async.t687210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta687211));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t687210(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6257__auto___687332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687332,mults,ensure_mult,p){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687332,mults,ensure_mult,p){
return (function (state_687284){var state_val_687285 = (state_687284[(1)]);if((state_val_687285 === (7)))
{var inst_687280 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687286_687333 = state_687284__$1;(statearr_687286_687333[(2)] = inst_687280);
(statearr_687286_687333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (20)))
{var state_687284__$1 = state_687284;var statearr_687287_687334 = state_687284__$1;(statearr_687287_687334[(2)] = null);
(statearr_687287_687334[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (1)))
{var state_687284__$1 = state_687284;var statearr_687288_687335 = state_687284__$1;(statearr_687288_687335[(2)] = null);
(statearr_687288_687335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (24)))
{var inst_687263 = (state_687284[(7)]);var inst_687272 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_687263);var state_687284__$1 = state_687284;var statearr_687289_687336 = state_687284__$1;(statearr_687289_687336[(2)] = inst_687272);
(statearr_687289_687336[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (4)))
{var inst_687215 = (state_687284[(8)]);var inst_687215__$1 = (state_687284[(2)]);var inst_687216 = (inst_687215__$1 == null);var state_687284__$1 = (function (){var statearr_687290 = state_687284;(statearr_687290[(8)] = inst_687215__$1);
return statearr_687290;
})();if(cljs.core.truth_(inst_687216))
{var statearr_687291_687337 = state_687284__$1;(statearr_687291_687337[(1)] = (5));
} else
{var statearr_687292_687338 = state_687284__$1;(statearr_687292_687338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (15)))
{var inst_687257 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687293_687339 = state_687284__$1;(statearr_687293_687339[(2)] = inst_687257);
(statearr_687293_687339[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (21)))
{var inst_687277 = (state_687284[(2)]);var state_687284__$1 = (function (){var statearr_687294 = state_687284;(statearr_687294[(9)] = inst_687277);
return statearr_687294;
})();var statearr_687295_687340 = state_687284__$1;(statearr_687295_687340[(2)] = null);
(statearr_687295_687340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (13)))
{var inst_687239 = (state_687284[(10)]);var inst_687241 = cljs.core.chunked_seq_QMARK_.call(null,inst_687239);var state_687284__$1 = state_687284;if(inst_687241)
{var statearr_687296_687341 = state_687284__$1;(statearr_687296_687341[(1)] = (16));
} else
{var statearr_687297_687342 = state_687284__$1;(statearr_687297_687342[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (22)))
{var inst_687269 = (state_687284[(2)]);var state_687284__$1 = state_687284;if(cljs.core.truth_(inst_687269))
{var statearr_687298_687343 = state_687284__$1;(statearr_687298_687343[(1)] = (23));
} else
{var statearr_687299_687344 = state_687284__$1;(statearr_687299_687344[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (6)))
{var inst_687265 = (state_687284[(11)]);var inst_687263 = (state_687284[(7)]);var inst_687215 = (state_687284[(8)]);var inst_687263__$1 = topic_fn.call(null,inst_687215);var inst_687264 = cljs.core.deref.call(null,mults);var inst_687265__$1 = cljs.core.get.call(null,inst_687264,inst_687263__$1);var state_687284__$1 = (function (){var statearr_687300 = state_687284;(statearr_687300[(11)] = inst_687265__$1);
(statearr_687300[(7)] = inst_687263__$1);
return statearr_687300;
})();if(cljs.core.truth_(inst_687265__$1))
{var statearr_687301_687345 = state_687284__$1;(statearr_687301_687345[(1)] = (19));
} else
{var statearr_687302_687346 = state_687284__$1;(statearr_687302_687346[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (25)))
{var inst_687274 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687303_687347 = state_687284__$1;(statearr_687303_687347[(2)] = inst_687274);
(statearr_687303_687347[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (17)))
{var inst_687239 = (state_687284[(10)]);var inst_687248 = cljs.core.first.call(null,inst_687239);var inst_687249 = cljs.core.async.muxch_STAR_.call(null,inst_687248);var inst_687250 = cljs.core.async.close_BANG_.call(null,inst_687249);var inst_687251 = cljs.core.next.call(null,inst_687239);var inst_687225 = inst_687251;var inst_687226 = null;var inst_687227 = (0);var inst_687228 = (0);var state_687284__$1 = (function (){var statearr_687304 = state_687284;(statearr_687304[(12)] = inst_687228);
(statearr_687304[(13)] = inst_687227);
(statearr_687304[(14)] = inst_687250);
(statearr_687304[(15)] = inst_687225);
(statearr_687304[(16)] = inst_687226);
return statearr_687304;
})();var statearr_687305_687348 = state_687284__$1;(statearr_687305_687348[(2)] = null);
(statearr_687305_687348[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (3)))
{var inst_687282 = (state_687284[(2)]);var state_687284__$1 = state_687284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687284__$1,inst_687282);
} else
{if((state_val_687285 === (12)))
{var inst_687259 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687306_687349 = state_687284__$1;(statearr_687306_687349[(2)] = inst_687259);
(statearr_687306_687349[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (2)))
{var state_687284__$1 = state_687284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_687284__$1,(4),ch);
} else
{if((state_val_687285 === (23)))
{var state_687284__$1 = state_687284;var statearr_687307_687350 = state_687284__$1;(statearr_687307_687350[(2)] = null);
(statearr_687307_687350[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (19)))
{var inst_687265 = (state_687284[(11)]);var inst_687215 = (state_687284[(8)]);var inst_687267 = cljs.core.async.muxch_STAR_.call(null,inst_687265);var state_687284__$1 = state_687284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687284__$1,(22),inst_687267,inst_687215);
} else
{if((state_val_687285 === (11)))
{var inst_687225 = (state_687284[(15)]);var inst_687239 = (state_687284[(10)]);var inst_687239__$1 = cljs.core.seq.call(null,inst_687225);var state_687284__$1 = (function (){var statearr_687308 = state_687284;(statearr_687308[(10)] = inst_687239__$1);
return statearr_687308;
})();if(inst_687239__$1)
{var statearr_687309_687351 = state_687284__$1;(statearr_687309_687351[(1)] = (13));
} else
{var statearr_687310_687352 = state_687284__$1;(statearr_687310_687352[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (9)))
{var inst_687261 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687311_687353 = state_687284__$1;(statearr_687311_687353[(2)] = inst_687261);
(statearr_687311_687353[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (5)))
{var inst_687222 = cljs.core.deref.call(null,mults);var inst_687223 = cljs.core.vals.call(null,inst_687222);var inst_687224 = cljs.core.seq.call(null,inst_687223);var inst_687225 = inst_687224;var inst_687226 = null;var inst_687227 = (0);var inst_687228 = (0);var state_687284__$1 = (function (){var statearr_687312 = state_687284;(statearr_687312[(12)] = inst_687228);
(statearr_687312[(13)] = inst_687227);
(statearr_687312[(15)] = inst_687225);
(statearr_687312[(16)] = inst_687226);
return statearr_687312;
})();var statearr_687313_687354 = state_687284__$1;(statearr_687313_687354[(2)] = null);
(statearr_687313_687354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (14)))
{var state_687284__$1 = state_687284;var statearr_687317_687355 = state_687284__$1;(statearr_687317_687355[(2)] = null);
(statearr_687317_687355[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (16)))
{var inst_687239 = (state_687284[(10)]);var inst_687243 = cljs.core.chunk_first.call(null,inst_687239);var inst_687244 = cljs.core.chunk_rest.call(null,inst_687239);var inst_687245 = cljs.core.count.call(null,inst_687243);var inst_687225 = inst_687244;var inst_687226 = inst_687243;var inst_687227 = inst_687245;var inst_687228 = (0);var state_687284__$1 = (function (){var statearr_687318 = state_687284;(statearr_687318[(12)] = inst_687228);
(statearr_687318[(13)] = inst_687227);
(statearr_687318[(15)] = inst_687225);
(statearr_687318[(16)] = inst_687226);
return statearr_687318;
})();var statearr_687319_687356 = state_687284__$1;(statearr_687319_687356[(2)] = null);
(statearr_687319_687356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (10)))
{var inst_687228 = (state_687284[(12)]);var inst_687227 = (state_687284[(13)]);var inst_687225 = (state_687284[(15)]);var inst_687226 = (state_687284[(16)]);var inst_687233 = cljs.core._nth.call(null,inst_687226,inst_687228);var inst_687234 = cljs.core.async.muxch_STAR_.call(null,inst_687233);var inst_687235 = cljs.core.async.close_BANG_.call(null,inst_687234);var inst_687236 = (inst_687228 + (1));var tmp687314 = inst_687227;var tmp687315 = inst_687225;var tmp687316 = inst_687226;var inst_687225__$1 = tmp687315;var inst_687226__$1 = tmp687316;var inst_687227__$1 = tmp687314;var inst_687228__$1 = inst_687236;var state_687284__$1 = (function (){var statearr_687320 = state_687284;(statearr_687320[(12)] = inst_687228__$1);
(statearr_687320[(13)] = inst_687227__$1);
(statearr_687320[(17)] = inst_687235);
(statearr_687320[(15)] = inst_687225__$1);
(statearr_687320[(16)] = inst_687226__$1);
return statearr_687320;
})();var statearr_687321_687357 = state_687284__$1;(statearr_687321_687357[(2)] = null);
(statearr_687321_687357[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (18)))
{var inst_687254 = (state_687284[(2)]);var state_687284__$1 = state_687284;var statearr_687322_687358 = state_687284__$1;(statearr_687322_687358[(2)] = inst_687254);
(statearr_687322_687358[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687285 === (8)))
{var inst_687228 = (state_687284[(12)]);var inst_687227 = (state_687284[(13)]);var inst_687230 = (inst_687228 < inst_687227);var inst_687231 = inst_687230;var state_687284__$1 = state_687284;if(cljs.core.truth_(inst_687231))
{var statearr_687323_687359 = state_687284__$1;(statearr_687323_687359[(1)] = (10));
} else
{var statearr_687324_687360 = state_687284__$1;(statearr_687324_687360[(1)] = (11));
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
});})(c__6257__auto___687332,mults,ensure_mult,p))
;return ((function (switch__6192__auto__,c__6257__auto___687332,mults,ensure_mult,p){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_687328[(0)] = state_machine__6193__auto__);
(statearr_687328[(1)] = (1));
return statearr_687328;
});
var state_machine__6193__auto____1 = (function (state_687284){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687329){if((e687329 instanceof Object))
{var ex__6196__auto__ = e687329;var statearr_687330_687361 = state_687284;(statearr_687330_687361[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687362 = state_687284;
state_687284 = G__687362;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687284){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687332,mults,ensure_mult,p))
})();var state__6259__auto__ = (function (){var statearr_687331 = f__6258__auto__.call(null);(statearr_687331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687332);
return statearr_687331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687332,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6257__auto___687499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_687469){var state_val_687470 = (state_687469[(1)]);if((state_val_687470 === (7)))
{var state_687469__$1 = state_687469;var statearr_687471_687500 = state_687469__$1;(statearr_687471_687500[(2)] = null);
(statearr_687471_687500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (1)))
{var state_687469__$1 = state_687469;var statearr_687472_687501 = state_687469__$1;(statearr_687472_687501[(2)] = null);
(statearr_687472_687501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (4)))
{var inst_687433 = (state_687469[(7)]);var inst_687435 = (inst_687433 < cnt);var state_687469__$1 = state_687469;if(cljs.core.truth_(inst_687435))
{var statearr_687473_687502 = state_687469__$1;(statearr_687473_687502[(1)] = (6));
} else
{var statearr_687474_687503 = state_687469__$1;(statearr_687474_687503[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (15)))
{var inst_687465 = (state_687469[(2)]);var state_687469__$1 = state_687469;var statearr_687475_687504 = state_687469__$1;(statearr_687475_687504[(2)] = inst_687465);
(statearr_687475_687504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (13)))
{var inst_687458 = cljs.core.async.close_BANG_.call(null,out);var state_687469__$1 = state_687469;var statearr_687476_687505 = state_687469__$1;(statearr_687476_687505[(2)] = inst_687458);
(statearr_687476_687505[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (6)))
{var state_687469__$1 = state_687469;var statearr_687477_687506 = state_687469__$1;(statearr_687477_687506[(2)] = null);
(statearr_687477_687506[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (3)))
{var inst_687467 = (state_687469[(2)]);var state_687469__$1 = state_687469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687469__$1,inst_687467);
} else
{if((state_val_687470 === (12)))
{var inst_687455 = (state_687469[(8)]);var inst_687455__$1 = (state_687469[(2)]);var inst_687456 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_687455__$1);var state_687469__$1 = (function (){var statearr_687478 = state_687469;(statearr_687478[(8)] = inst_687455__$1);
return statearr_687478;
})();if(cljs.core.truth_(inst_687456))
{var statearr_687479_687507 = state_687469__$1;(statearr_687479_687507[(1)] = (13));
} else
{var statearr_687480_687508 = state_687469__$1;(statearr_687480_687508[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (2)))
{var inst_687432 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_687433 = (0);var state_687469__$1 = (function (){var statearr_687481 = state_687469;(statearr_687481[(7)] = inst_687433);
(statearr_687481[(9)] = inst_687432);
return statearr_687481;
})();var statearr_687482_687509 = state_687469__$1;(statearr_687482_687509[(2)] = null);
(statearr_687482_687509[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (11)))
{var inst_687433 = (state_687469[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_687469,(10),Object,null,(9));var inst_687442 = chs__$1.call(null,inst_687433);var inst_687443 = done.call(null,inst_687433);var inst_687444 = cljs.core.async.take_BANG_.call(null,inst_687442,inst_687443);var state_687469__$1 = state_687469;var statearr_687483_687510 = state_687469__$1;(statearr_687483_687510[(2)] = inst_687444);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687469__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (9)))
{var inst_687433 = (state_687469[(7)]);var inst_687446 = (state_687469[(2)]);var inst_687447 = (inst_687433 + (1));var inst_687433__$1 = inst_687447;var state_687469__$1 = (function (){var statearr_687484 = state_687469;(statearr_687484[(7)] = inst_687433__$1);
(statearr_687484[(10)] = inst_687446);
return statearr_687484;
})();var statearr_687485_687511 = state_687469__$1;(statearr_687485_687511[(2)] = null);
(statearr_687485_687511[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (5)))
{var inst_687453 = (state_687469[(2)]);var state_687469__$1 = (function (){var statearr_687486 = state_687469;(statearr_687486[(11)] = inst_687453);
return statearr_687486;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_687469__$1,(12),dchan);
} else
{if((state_val_687470 === (14)))
{var inst_687455 = (state_687469[(8)]);var inst_687460 = cljs.core.apply.call(null,f,inst_687455);var state_687469__$1 = state_687469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687469__$1,(16),out,inst_687460);
} else
{if((state_val_687470 === (16)))
{var inst_687462 = (state_687469[(2)]);var state_687469__$1 = (function (){var statearr_687487 = state_687469;(statearr_687487[(12)] = inst_687462);
return statearr_687487;
})();var statearr_687488_687512 = state_687469__$1;(statearr_687488_687512[(2)] = null);
(statearr_687488_687512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (10)))
{var inst_687437 = (state_687469[(2)]);var inst_687438 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_687469__$1 = (function (){var statearr_687489 = state_687469;(statearr_687489[(13)] = inst_687437);
return statearr_687489;
})();var statearr_687490_687513 = state_687469__$1;(statearr_687490_687513[(2)] = inst_687438);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687469__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687470 === (8)))
{var inst_687451 = (state_687469[(2)]);var state_687469__$1 = state_687469;var statearr_687491_687514 = state_687469__$1;(statearr_687491_687514[(2)] = inst_687451);
(statearr_687491_687514[(1)] = (5));
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
});})(c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6192__auto__,c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_687495[(0)] = state_machine__6193__auto__);
(statearr_687495[(1)] = (1));
return statearr_687495;
});
var state_machine__6193__auto____1 = (function (state_687469){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687496){if((e687496 instanceof Object))
{var ex__6196__auto__ = e687496;var statearr_687497_687515 = state_687469;(statearr_687497_687515[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687516 = state_687469;
state_687469 = G__687516;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687469){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6259__auto__ = (function (){var statearr_687498 = f__6258__auto__.call(null);(statearr_687498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687499);
return statearr_687498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687499,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___687624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687624,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687624,out){
return (function (state_687600){var state_val_687601 = (state_687600[(1)]);if((state_val_687601 === (7)))
{var inst_687580 = (state_687600[(7)]);var inst_687579 = (state_687600[(8)]);var inst_687579__$1 = (state_687600[(2)]);var inst_687580__$1 = cljs.core.nth.call(null,inst_687579__$1,(0),null);var inst_687581 = cljs.core.nth.call(null,inst_687579__$1,(1),null);var inst_687582 = (inst_687580__$1 == null);var state_687600__$1 = (function (){var statearr_687602 = state_687600;(statearr_687602[(7)] = inst_687580__$1);
(statearr_687602[(8)] = inst_687579__$1);
(statearr_687602[(9)] = inst_687581);
return statearr_687602;
})();if(cljs.core.truth_(inst_687582))
{var statearr_687603_687625 = state_687600__$1;(statearr_687603_687625[(1)] = (8));
} else
{var statearr_687604_687626 = state_687600__$1;(statearr_687604_687626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (1)))
{var inst_687571 = cljs.core.vec.call(null,chs);var inst_687572 = inst_687571;var state_687600__$1 = (function (){var statearr_687605 = state_687600;(statearr_687605[(10)] = inst_687572);
return statearr_687605;
})();var statearr_687606_687627 = state_687600__$1;(statearr_687606_687627[(2)] = null);
(statearr_687606_687627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (4)))
{var inst_687572 = (state_687600[(10)]);var state_687600__$1 = state_687600;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_687600__$1,(7),inst_687572);
} else
{if((state_val_687601 === (6)))
{var inst_687596 = (state_687600[(2)]);var state_687600__$1 = state_687600;var statearr_687607_687628 = state_687600__$1;(statearr_687607_687628[(2)] = inst_687596);
(statearr_687607_687628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (3)))
{var inst_687598 = (state_687600[(2)]);var state_687600__$1 = state_687600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687600__$1,inst_687598);
} else
{if((state_val_687601 === (2)))
{var inst_687572 = (state_687600[(10)]);var inst_687574 = cljs.core.count.call(null,inst_687572);var inst_687575 = (inst_687574 > (0));var state_687600__$1 = state_687600;if(cljs.core.truth_(inst_687575))
{var statearr_687609_687629 = state_687600__$1;(statearr_687609_687629[(1)] = (4));
} else
{var statearr_687610_687630 = state_687600__$1;(statearr_687610_687630[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (11)))
{var inst_687572 = (state_687600[(10)]);var inst_687589 = (state_687600[(2)]);var tmp687608 = inst_687572;var inst_687572__$1 = tmp687608;var state_687600__$1 = (function (){var statearr_687611 = state_687600;(statearr_687611[(11)] = inst_687589);
(statearr_687611[(10)] = inst_687572__$1);
return statearr_687611;
})();var statearr_687612_687631 = state_687600__$1;(statearr_687612_687631[(2)] = null);
(statearr_687612_687631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (9)))
{var inst_687580 = (state_687600[(7)]);var state_687600__$1 = state_687600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687600__$1,(11),out,inst_687580);
} else
{if((state_val_687601 === (5)))
{var inst_687594 = cljs.core.async.close_BANG_.call(null,out);var state_687600__$1 = state_687600;var statearr_687613_687632 = state_687600__$1;(statearr_687613_687632[(2)] = inst_687594);
(statearr_687613_687632[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (10)))
{var inst_687592 = (state_687600[(2)]);var state_687600__$1 = state_687600;var statearr_687614_687633 = state_687600__$1;(statearr_687614_687633[(2)] = inst_687592);
(statearr_687614_687633[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687601 === (8)))
{var inst_687580 = (state_687600[(7)]);var inst_687579 = (state_687600[(8)]);var inst_687581 = (state_687600[(9)]);var inst_687572 = (state_687600[(10)]);var inst_687584 = (function (){var c = inst_687581;var v = inst_687580;var vec__687577 = inst_687579;var cs = inst_687572;return ((function (c,v,vec__687577,cs,inst_687580,inst_687579,inst_687581,inst_687572,state_val_687601,c__6257__auto___687624,out){
return (function (p1__687517_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__687517_SHARP_);
});
;})(c,v,vec__687577,cs,inst_687580,inst_687579,inst_687581,inst_687572,state_val_687601,c__6257__auto___687624,out))
})();var inst_687585 = cljs.core.filterv.call(null,inst_687584,inst_687572);var inst_687572__$1 = inst_687585;var state_687600__$1 = (function (){var statearr_687615 = state_687600;(statearr_687615[(10)] = inst_687572__$1);
return statearr_687615;
})();var statearr_687616_687634 = state_687600__$1;(statearr_687616_687634[(2)] = null);
(statearr_687616_687634[(1)] = (2));
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
});})(c__6257__auto___687624,out))
;return ((function (switch__6192__auto__,c__6257__auto___687624,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687620 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_687620[(0)] = state_machine__6193__auto__);
(statearr_687620[(1)] = (1));
return statearr_687620;
});
var state_machine__6193__auto____1 = (function (state_687600){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687621){if((e687621 instanceof Object))
{var ex__6196__auto__ = e687621;var statearr_687622_687635 = state_687600;(statearr_687622_687635[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687636 = state_687600;
state_687600 = G__687636;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687600){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687624,out))
})();var state__6259__auto__ = (function (){var statearr_687623 = f__6258__auto__.call(null);(statearr_687623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687624);
return statearr_687623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687624,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___687729 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687729,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687729,out){
return (function (state_687706){var state_val_687707 = (state_687706[(1)]);if((state_val_687707 === (7)))
{var inst_687688 = (state_687706[(7)]);var inst_687688__$1 = (state_687706[(2)]);var inst_687689 = (inst_687688__$1 == null);var inst_687690 = cljs.core.not.call(null,inst_687689);var state_687706__$1 = (function (){var statearr_687708 = state_687706;(statearr_687708[(7)] = inst_687688__$1);
return statearr_687708;
})();if(inst_687690)
{var statearr_687709_687730 = state_687706__$1;(statearr_687709_687730[(1)] = (8));
} else
{var statearr_687710_687731 = state_687706__$1;(statearr_687710_687731[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (1)))
{var inst_687683 = (0);var state_687706__$1 = (function (){var statearr_687711 = state_687706;(statearr_687711[(8)] = inst_687683);
return statearr_687711;
})();var statearr_687712_687732 = state_687706__$1;(statearr_687712_687732[(2)] = null);
(statearr_687712_687732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (4)))
{var state_687706__$1 = state_687706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_687706__$1,(7),ch);
} else
{if((state_val_687707 === (6)))
{var inst_687701 = (state_687706[(2)]);var state_687706__$1 = state_687706;var statearr_687713_687733 = state_687706__$1;(statearr_687713_687733[(2)] = inst_687701);
(statearr_687713_687733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (3)))
{var inst_687703 = (state_687706[(2)]);var inst_687704 = cljs.core.async.close_BANG_.call(null,out);var state_687706__$1 = (function (){var statearr_687714 = state_687706;(statearr_687714[(9)] = inst_687703);
return statearr_687714;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687706__$1,inst_687704);
} else
{if((state_val_687707 === (2)))
{var inst_687683 = (state_687706[(8)]);var inst_687685 = (inst_687683 < n);var state_687706__$1 = state_687706;if(cljs.core.truth_(inst_687685))
{var statearr_687715_687734 = state_687706__$1;(statearr_687715_687734[(1)] = (4));
} else
{var statearr_687716_687735 = state_687706__$1;(statearr_687716_687735[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (11)))
{var inst_687683 = (state_687706[(8)]);var inst_687693 = (state_687706[(2)]);var inst_687694 = (inst_687683 + (1));var inst_687683__$1 = inst_687694;var state_687706__$1 = (function (){var statearr_687717 = state_687706;(statearr_687717[(8)] = inst_687683__$1);
(statearr_687717[(10)] = inst_687693);
return statearr_687717;
})();var statearr_687718_687736 = state_687706__$1;(statearr_687718_687736[(2)] = null);
(statearr_687718_687736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (9)))
{var state_687706__$1 = state_687706;var statearr_687719_687737 = state_687706__$1;(statearr_687719_687737[(2)] = null);
(statearr_687719_687737[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (5)))
{var state_687706__$1 = state_687706;var statearr_687720_687738 = state_687706__$1;(statearr_687720_687738[(2)] = null);
(statearr_687720_687738[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (10)))
{var inst_687698 = (state_687706[(2)]);var state_687706__$1 = state_687706;var statearr_687721_687739 = state_687706__$1;(statearr_687721_687739[(2)] = inst_687698);
(statearr_687721_687739[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687707 === (8)))
{var inst_687688 = (state_687706[(7)]);var state_687706__$1 = state_687706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687706__$1,(11),out,inst_687688);
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
});})(c__6257__auto___687729,out))
;return ((function (switch__6192__auto__,c__6257__auto___687729,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687725 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_687725[(0)] = state_machine__6193__auto__);
(statearr_687725[(1)] = (1));
return statearr_687725;
});
var state_machine__6193__auto____1 = (function (state_687706){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687706);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687726){if((e687726 instanceof Object))
{var ex__6196__auto__ = e687726;var statearr_687727_687740 = state_687706;(statearr_687727_687740[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687741 = state_687706;
state_687706 = G__687741;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687706){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687729,out))
})();var state__6259__auto__ = (function (){var statearr_687728 = f__6258__auto__.call(null);(statearr_687728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687729);
return statearr_687728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687729,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___687838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687838,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687838,out){
return (function (state_687813){var state_val_687814 = (state_687813[(1)]);if((state_val_687814 === (7)))
{var inst_687808 = (state_687813[(2)]);var state_687813__$1 = state_687813;var statearr_687815_687839 = state_687813__$1;(statearr_687815_687839[(2)] = inst_687808);
(statearr_687815_687839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (1)))
{var inst_687790 = null;var state_687813__$1 = (function (){var statearr_687816 = state_687813;(statearr_687816[(7)] = inst_687790);
return statearr_687816;
})();var statearr_687817_687840 = state_687813__$1;(statearr_687817_687840[(2)] = null);
(statearr_687817_687840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (4)))
{var inst_687793 = (state_687813[(8)]);var inst_687793__$1 = (state_687813[(2)]);var inst_687794 = (inst_687793__$1 == null);var inst_687795 = cljs.core.not.call(null,inst_687794);var state_687813__$1 = (function (){var statearr_687818 = state_687813;(statearr_687818[(8)] = inst_687793__$1);
return statearr_687818;
})();if(inst_687795)
{var statearr_687819_687841 = state_687813__$1;(statearr_687819_687841[(1)] = (5));
} else
{var statearr_687820_687842 = state_687813__$1;(statearr_687820_687842[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (6)))
{var state_687813__$1 = state_687813;var statearr_687821_687843 = state_687813__$1;(statearr_687821_687843[(2)] = null);
(statearr_687821_687843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (3)))
{var inst_687810 = (state_687813[(2)]);var inst_687811 = cljs.core.async.close_BANG_.call(null,out);var state_687813__$1 = (function (){var statearr_687822 = state_687813;(statearr_687822[(9)] = inst_687810);
return statearr_687822;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687813__$1,inst_687811);
} else
{if((state_val_687814 === (2)))
{var state_687813__$1 = state_687813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_687813__$1,(4),ch);
} else
{if((state_val_687814 === (11)))
{var inst_687793 = (state_687813[(8)]);var inst_687802 = (state_687813[(2)]);var inst_687790 = inst_687793;var state_687813__$1 = (function (){var statearr_687823 = state_687813;(statearr_687823[(10)] = inst_687802);
(statearr_687823[(7)] = inst_687790);
return statearr_687823;
})();var statearr_687824_687844 = state_687813__$1;(statearr_687824_687844[(2)] = null);
(statearr_687824_687844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (9)))
{var inst_687793 = (state_687813[(8)]);var state_687813__$1 = state_687813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687813__$1,(11),out,inst_687793);
} else
{if((state_val_687814 === (5)))
{var inst_687790 = (state_687813[(7)]);var inst_687793 = (state_687813[(8)]);var inst_687797 = cljs.core._EQ_.call(null,inst_687793,inst_687790);var state_687813__$1 = state_687813;if(inst_687797)
{var statearr_687826_687845 = state_687813__$1;(statearr_687826_687845[(1)] = (8));
} else
{var statearr_687827_687846 = state_687813__$1;(statearr_687827_687846[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (10)))
{var inst_687805 = (state_687813[(2)]);var state_687813__$1 = state_687813;var statearr_687828_687847 = state_687813__$1;(statearr_687828_687847[(2)] = inst_687805);
(statearr_687828_687847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687814 === (8)))
{var inst_687790 = (state_687813[(7)]);var tmp687825 = inst_687790;var inst_687790__$1 = tmp687825;var state_687813__$1 = (function (){var statearr_687829 = state_687813;(statearr_687829[(7)] = inst_687790__$1);
return statearr_687829;
})();var statearr_687830_687848 = state_687813__$1;(statearr_687830_687848[(2)] = null);
(statearr_687830_687848[(1)] = (2));
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
});})(c__6257__auto___687838,out))
;return ((function (switch__6192__auto__,c__6257__auto___687838,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687834 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_687834[(0)] = state_machine__6193__auto__);
(statearr_687834[(1)] = (1));
return statearr_687834;
});
var state_machine__6193__auto____1 = (function (state_687813){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687835){if((e687835 instanceof Object))
{var ex__6196__auto__ = e687835;var statearr_687836_687849 = state_687813;(statearr_687836_687849[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__687850 = state_687813;
state_687813 = G__687850;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687813){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687838,out))
})();var state__6259__auto__ = (function (){var statearr_687837 = f__6258__auto__.call(null);(statearr_687837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687838);
return statearr_687837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687838,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___687985 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___687985,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___687985,out){
return (function (state_687955){var state_val_687956 = (state_687955[(1)]);if((state_val_687956 === (7)))
{var inst_687951 = (state_687955[(2)]);var state_687955__$1 = state_687955;var statearr_687957_687986 = state_687955__$1;(statearr_687957_687986[(2)] = inst_687951);
(statearr_687957_687986[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (1)))
{var inst_687918 = (new Array(n));var inst_687919 = inst_687918;var inst_687920 = (0);var state_687955__$1 = (function (){var statearr_687958 = state_687955;(statearr_687958[(7)] = inst_687920);
(statearr_687958[(8)] = inst_687919);
return statearr_687958;
})();var statearr_687959_687987 = state_687955__$1;(statearr_687959_687987[(2)] = null);
(statearr_687959_687987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (4)))
{var inst_687923 = (state_687955[(9)]);var inst_687923__$1 = (state_687955[(2)]);var inst_687924 = (inst_687923__$1 == null);var inst_687925 = cljs.core.not.call(null,inst_687924);var state_687955__$1 = (function (){var statearr_687960 = state_687955;(statearr_687960[(9)] = inst_687923__$1);
return statearr_687960;
})();if(inst_687925)
{var statearr_687961_687988 = state_687955__$1;(statearr_687961_687988[(1)] = (5));
} else
{var statearr_687962_687989 = state_687955__$1;(statearr_687962_687989[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (15)))
{var inst_687945 = (state_687955[(2)]);var state_687955__$1 = state_687955;var statearr_687963_687990 = state_687955__$1;(statearr_687963_687990[(2)] = inst_687945);
(statearr_687963_687990[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (13)))
{var state_687955__$1 = state_687955;var statearr_687964_687991 = state_687955__$1;(statearr_687964_687991[(2)] = null);
(statearr_687964_687991[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (6)))
{var inst_687920 = (state_687955[(7)]);var inst_687941 = (inst_687920 > (0));var state_687955__$1 = state_687955;if(cljs.core.truth_(inst_687941))
{var statearr_687965_687992 = state_687955__$1;(statearr_687965_687992[(1)] = (12));
} else
{var statearr_687966_687993 = state_687955__$1;(statearr_687966_687993[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (3)))
{var inst_687953 = (state_687955[(2)]);var state_687955__$1 = state_687955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_687955__$1,inst_687953);
} else
{if((state_val_687956 === (12)))
{var inst_687919 = (state_687955[(8)]);var inst_687943 = cljs.core.vec.call(null,inst_687919);var state_687955__$1 = state_687955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687955__$1,(15),out,inst_687943);
} else
{if((state_val_687956 === (2)))
{var state_687955__$1 = state_687955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_687955__$1,(4),ch);
} else
{if((state_val_687956 === (11)))
{var inst_687935 = (state_687955[(2)]);var inst_687936 = (new Array(n));var inst_687919 = inst_687936;var inst_687920 = (0);var state_687955__$1 = (function (){var statearr_687967 = state_687955;(statearr_687967[(7)] = inst_687920);
(statearr_687967[(8)] = inst_687919);
(statearr_687967[(10)] = inst_687935);
return statearr_687967;
})();var statearr_687968_687994 = state_687955__$1;(statearr_687968_687994[(2)] = null);
(statearr_687968_687994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (9)))
{var inst_687919 = (state_687955[(8)]);var inst_687933 = cljs.core.vec.call(null,inst_687919);var state_687955__$1 = state_687955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_687955__$1,(11),out,inst_687933);
} else
{if((state_val_687956 === (5)))
{var inst_687920 = (state_687955[(7)]);var inst_687928 = (state_687955[(11)]);var inst_687923 = (state_687955[(9)]);var inst_687919 = (state_687955[(8)]);var inst_687927 = (inst_687919[inst_687920] = inst_687923);var inst_687928__$1 = (inst_687920 + (1));var inst_687929 = (inst_687928__$1 < n);var state_687955__$1 = (function (){var statearr_687969 = state_687955;(statearr_687969[(12)] = inst_687927);
(statearr_687969[(11)] = inst_687928__$1);
return statearr_687969;
})();if(cljs.core.truth_(inst_687929))
{var statearr_687970_687995 = state_687955__$1;(statearr_687970_687995[(1)] = (8));
} else
{var statearr_687971_687996 = state_687955__$1;(statearr_687971_687996[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (14)))
{var inst_687948 = (state_687955[(2)]);var inst_687949 = cljs.core.async.close_BANG_.call(null,out);var state_687955__$1 = (function (){var statearr_687973 = state_687955;(statearr_687973[(13)] = inst_687948);
return statearr_687973;
})();var statearr_687974_687997 = state_687955__$1;(statearr_687974_687997[(2)] = inst_687949);
(statearr_687974_687997[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (10)))
{var inst_687939 = (state_687955[(2)]);var state_687955__$1 = state_687955;var statearr_687975_687998 = state_687955__$1;(statearr_687975_687998[(2)] = inst_687939);
(statearr_687975_687998[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_687956 === (8)))
{var inst_687928 = (state_687955[(11)]);var inst_687919 = (state_687955[(8)]);var tmp687972 = inst_687919;var inst_687919__$1 = tmp687972;var inst_687920 = inst_687928;var state_687955__$1 = (function (){var statearr_687976 = state_687955;(statearr_687976[(7)] = inst_687920);
(statearr_687976[(8)] = inst_687919__$1);
return statearr_687976;
})();var statearr_687977_687999 = state_687955__$1;(statearr_687977_687999[(2)] = null);
(statearr_687977_687999[(1)] = (2));
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
});})(c__6257__auto___687985,out))
;return ((function (switch__6192__auto__,c__6257__auto___687985,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_687981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_687981[(0)] = state_machine__6193__auto__);
(statearr_687981[(1)] = (1));
return statearr_687981;
});
var state_machine__6193__auto____1 = (function (state_687955){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_687955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e687982){if((e687982 instanceof Object))
{var ex__6196__auto__ = e687982;var statearr_687983_688000 = state_687955;(statearr_687983_688000[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_687955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e687982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__688001 = state_687955;
state_687955 = G__688001;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_687955){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_687955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___687985,out))
})();var state__6259__auto__ = (function (){var statearr_687984 = f__6258__auto__.call(null);(statearr_687984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___687985);
return statearr_687984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___687985,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6257__auto___688144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6257__auto___688144,out){
return (function (){var f__6258__auto__ = (function (){var switch__6192__auto__ = ((function (c__6257__auto___688144,out){
return (function (state_688114){var state_val_688115 = (state_688114[(1)]);if((state_val_688115 === (7)))
{var inst_688110 = (state_688114[(2)]);var state_688114__$1 = state_688114;var statearr_688116_688145 = state_688114__$1;(statearr_688116_688145[(2)] = inst_688110);
(statearr_688116_688145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (1)))
{var inst_688073 = [];var inst_688074 = inst_688073;var inst_688075 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_688114__$1 = (function (){var statearr_688117 = state_688114;(statearr_688117[(7)] = inst_688075);
(statearr_688117[(8)] = inst_688074);
return statearr_688117;
})();var statearr_688118_688146 = state_688114__$1;(statearr_688118_688146[(2)] = null);
(statearr_688118_688146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (4)))
{var inst_688078 = (state_688114[(9)]);var inst_688078__$1 = (state_688114[(2)]);var inst_688079 = (inst_688078__$1 == null);var inst_688080 = cljs.core.not.call(null,inst_688079);var state_688114__$1 = (function (){var statearr_688119 = state_688114;(statearr_688119[(9)] = inst_688078__$1);
return statearr_688119;
})();if(inst_688080)
{var statearr_688120_688147 = state_688114__$1;(statearr_688120_688147[(1)] = (5));
} else
{var statearr_688121_688148 = state_688114__$1;(statearr_688121_688148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (15)))
{var inst_688104 = (state_688114[(2)]);var state_688114__$1 = state_688114;var statearr_688122_688149 = state_688114__$1;(statearr_688122_688149[(2)] = inst_688104);
(statearr_688122_688149[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (13)))
{var state_688114__$1 = state_688114;var statearr_688123_688150 = state_688114__$1;(statearr_688123_688150[(2)] = null);
(statearr_688123_688150[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (6)))
{var inst_688074 = (state_688114[(8)]);var inst_688099 = inst_688074.length;var inst_688100 = (inst_688099 > (0));var state_688114__$1 = state_688114;if(cljs.core.truth_(inst_688100))
{var statearr_688124_688151 = state_688114__$1;(statearr_688124_688151[(1)] = (12));
} else
{var statearr_688125_688152 = state_688114__$1;(statearr_688125_688152[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (3)))
{var inst_688112 = (state_688114[(2)]);var state_688114__$1 = state_688114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_688114__$1,inst_688112);
} else
{if((state_val_688115 === (12)))
{var inst_688074 = (state_688114[(8)]);var inst_688102 = cljs.core.vec.call(null,inst_688074);var state_688114__$1 = state_688114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_688114__$1,(15),out,inst_688102);
} else
{if((state_val_688115 === (2)))
{var state_688114__$1 = state_688114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_688114__$1,(4),ch);
} else
{if((state_val_688115 === (11)))
{var inst_688078 = (state_688114[(9)]);var inst_688082 = (state_688114[(10)]);var inst_688092 = (state_688114[(2)]);var inst_688093 = [];var inst_688094 = inst_688093.push(inst_688078);var inst_688074 = inst_688093;var inst_688075 = inst_688082;var state_688114__$1 = (function (){var statearr_688126 = state_688114;(statearr_688126[(7)] = inst_688075);
(statearr_688126[(11)] = inst_688094);
(statearr_688126[(8)] = inst_688074);
(statearr_688126[(12)] = inst_688092);
return statearr_688126;
})();var statearr_688127_688153 = state_688114__$1;(statearr_688127_688153[(2)] = null);
(statearr_688127_688153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (9)))
{var inst_688074 = (state_688114[(8)]);var inst_688090 = cljs.core.vec.call(null,inst_688074);var state_688114__$1 = state_688114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_688114__$1,(11),out,inst_688090);
} else
{if((state_val_688115 === (5)))
{var inst_688078 = (state_688114[(9)]);var inst_688075 = (state_688114[(7)]);var inst_688082 = (state_688114[(10)]);var inst_688082__$1 = f.call(null,inst_688078);var inst_688083 = cljs.core._EQ_.call(null,inst_688082__$1,inst_688075);var inst_688084 = cljs.core.keyword_identical_QMARK_.call(null,inst_688075,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_688085 = (inst_688083) || (inst_688084);var state_688114__$1 = (function (){var statearr_688128 = state_688114;(statearr_688128[(10)] = inst_688082__$1);
return statearr_688128;
})();if(cljs.core.truth_(inst_688085))
{var statearr_688129_688154 = state_688114__$1;(statearr_688129_688154[(1)] = (8));
} else
{var statearr_688130_688155 = state_688114__$1;(statearr_688130_688155[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (14)))
{var inst_688107 = (state_688114[(2)]);var inst_688108 = cljs.core.async.close_BANG_.call(null,out);var state_688114__$1 = (function (){var statearr_688132 = state_688114;(statearr_688132[(13)] = inst_688107);
return statearr_688132;
})();var statearr_688133_688156 = state_688114__$1;(statearr_688133_688156[(2)] = inst_688108);
(statearr_688133_688156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (10)))
{var inst_688097 = (state_688114[(2)]);var state_688114__$1 = state_688114;var statearr_688134_688157 = state_688114__$1;(statearr_688134_688157[(2)] = inst_688097);
(statearr_688134_688157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_688115 === (8)))
{var inst_688078 = (state_688114[(9)]);var inst_688082 = (state_688114[(10)]);var inst_688074 = (state_688114[(8)]);var inst_688087 = inst_688074.push(inst_688078);var tmp688131 = inst_688074;var inst_688074__$1 = tmp688131;var inst_688075 = inst_688082;var state_688114__$1 = (function (){var statearr_688135 = state_688114;(statearr_688135[(7)] = inst_688075);
(statearr_688135[(14)] = inst_688087);
(statearr_688135[(8)] = inst_688074__$1);
return statearr_688135;
})();var statearr_688136_688158 = state_688114__$1;(statearr_688136_688158[(2)] = null);
(statearr_688136_688158[(1)] = (2));
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
});})(c__6257__auto___688144,out))
;return ((function (switch__6192__auto__,c__6257__auto___688144,out){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_688140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_688140[(0)] = state_machine__6193__auto__);
(statearr_688140[(1)] = (1));
return statearr_688140;
});
var state_machine__6193__auto____1 = (function (state_688114){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_688114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e688141){if((e688141 instanceof Object))
{var ex__6196__auto__ = e688141;var statearr_688142_688159 = state_688114;(statearr_688142_688159[(5)] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_688114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e688141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__688160 = state_688114;
state_688114 = G__688160;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_688114){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_688114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__,c__6257__auto___688144,out))
})();var state__6259__auto__ = (function (){var statearr_688143 = f__6258__auto__.call(null);(statearr_688143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6257__auto___688144);
return statearr_688143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6259__auto__);
});})(c__6257__auto___688144,out))
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