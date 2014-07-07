// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11567 = (function (f,fn_handler,meta11568){
this.f = f;
this.fn_handler = fn_handler;
this.meta11568 = meta11568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11567.cljs$lang$type = true;
cljs.core.async.t11567.cljs$lang$ctorStr = "cljs.core.async/t11567";
cljs.core.async.t11567.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11567");
});
cljs.core.async.t11567.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11569){var self__ = this;
var _11569__$1 = this;return self__.meta11568;
});
cljs.core.async.t11567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11569,meta11568__$1){var self__ = this;
var _11569__$1 = this;return (new cljs.core.async.t11567(self__.f,self__.fn_handler,meta11568__$1));
});
cljs.core.async.__GT_t11567 = (function __GT_t11567(f__$1,fn_handler__$1,meta11568){return (new cljs.core.async.t11567(f__$1,fn_handler__$1,meta11568));
});
}
return (new cljs.core.async.t11567(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11571 = buff;if(G__11571)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11571.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11571.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11571);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11571);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_11572 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11572);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11572);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11573 = n;var x_11574 = 0;while(true){
if((x_11574 < n__4291__auto___11573))
{(a[x_11574] = 0);
{
var G__11575 = (x_11574 + 1);
x_11574 = G__11575;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11576 = (i + 1);
i = G__11576;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11580 = (function (flag,alt_flag,meta11581){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11581 = meta11581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11580.cljs$lang$type = true;
cljs.core.async.t11580.cljs$lang$ctorStr = "cljs.core.async/t11580";
cljs.core.async.t11580.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11580");
});
cljs.core.async.t11580.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11582){var self__ = this;
var _11582__$1 = this;return self__.meta11581;
});
cljs.core.async.t11580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11582,meta11581__$1){var self__ = this;
var _11582__$1 = this;return (new cljs.core.async.t11580(self__.flag,self__.alt_flag,meta11581__$1));
});
cljs.core.async.__GT_t11580 = (function __GT_t11580(flag__$1,alt_flag__$1,meta11581){return (new cljs.core.async.t11580(flag__$1,alt_flag__$1,meta11581));
});
}
return (new cljs.core.async.t11580(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11586 = (function (cb,flag,alt_handler,meta11587){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11587 = meta11587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11586.cljs$lang$type = true;
cljs.core.async.t11586.cljs$lang$ctorStr = "cljs.core.async/t11586";
cljs.core.async.t11586.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11586");
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11588){var self__ = this;
var _11588__$1 = this;return self__.meta11587;
});
cljs.core.async.t11586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11588,meta11587__$1){var self__ = this;
var _11588__$1 = this;return (new cljs.core.async.t11586(self__.cb,self__.flag,self__.alt_handler,meta11587__$1));
});
cljs.core.async.__GT_t11586 = (function __GT_t11586(cb__$1,flag__$1,alt_handler__$1,meta11587){return (new cljs.core.async.t11586(cb__$1,flag__$1,alt_handler__$1,meta11587));
});
}
return (new cljs.core.async.t11586(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11589_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11589_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11590_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11590_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11591 = (i + 1);
i = G__11591;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__11592){var map__11594 = p__11592;var map__11594__$1 = ((cljs.core.seq_QMARK_.call(null,map__11594))?cljs.core.apply.call(null,cljs.core.hash_map,map__11594):map__11594);var opts = map__11594__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11592 = null;if (arguments.length > 1) {
  p__11592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11592);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11595){
var ports = cljs.core.first(arglist__11595);
var p__11592 = cljs.core.rest(arglist__11595);
return alts_BANG___delegate(ports,p__11592);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11603 = (function (ch,f,map_LT_,meta11604){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11604 = meta11604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11603.cljs$lang$type = true;
cljs.core.async.t11603.cljs$lang$ctorStr = "cljs.core.async/t11603";
cljs.core.async.t11603.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11603");
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11606 = (function (fn1,_,meta11604,ch,f,map_LT_,meta11607){
this.fn1 = fn1;
this._ = _;
this.meta11604 = meta11604;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11607 = meta11607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11606.cljs$lang$type = true;
cljs.core.async.t11606.cljs$lang$ctorStr = "cljs.core.async/t11606";
cljs.core.async.t11606.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11606");
});
cljs.core.async.t11606.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11606.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11596_SHARP_){return f1.call(null,(((p1__11596_SHARP_ == null))?null:self__.f.call(null,p1__11596_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11608){var self__ = this;
var _11608__$1 = this;return self__.meta11607;
});
cljs.core.async.t11606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11608,meta11607__$1){var self__ = this;
var _11608__$1 = this;return (new cljs.core.async.t11606(self__.fn1,self__._,self__.meta11604,self__.ch,self__.f,self__.map_LT_,meta11607__$1));
});
cljs.core.async.__GT_t11606 = (function __GT_t11606(fn1__$1,___$2,meta11604__$1,ch__$2,f__$2,map_LT___$2,meta11607){return (new cljs.core.async.t11606(fn1__$1,___$2,meta11604__$1,ch__$2,f__$2,map_LT___$2,meta11607));
});
}
return (new cljs.core.async.t11606(fn1,___$1,self__.meta11604,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11605){var self__ = this;
var _11605__$1 = this;return self__.meta11604;
});
cljs.core.async.t11603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11605,meta11604__$1){var self__ = this;
var _11605__$1 = this;return (new cljs.core.async.t11603(self__.ch,self__.f,self__.map_LT_,meta11604__$1));
});
cljs.core.async.__GT_t11603 = (function __GT_t11603(ch__$1,f__$1,map_LT___$1,meta11604){return (new cljs.core.async.t11603(ch__$1,f__$1,map_LT___$1,meta11604));
});
}
return (new cljs.core.async.t11603(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11612 = (function (ch,f,map_GT_,meta11613){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11613 = meta11613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11612.cljs$lang$type = true;
cljs.core.async.t11612.cljs$lang$ctorStr = "cljs.core.async/t11612";
cljs.core.async.t11612.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11612");
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11614){var self__ = this;
var _11614__$1 = this;return self__.meta11613;
});
cljs.core.async.t11612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11614,meta11613__$1){var self__ = this;
var _11614__$1 = this;return (new cljs.core.async.t11612(self__.ch,self__.f,self__.map_GT_,meta11613__$1));
});
cljs.core.async.__GT_t11612 = (function __GT_t11612(ch__$1,f__$1,map_GT___$1,meta11613){return (new cljs.core.async.t11612(ch__$1,f__$1,map_GT___$1,meta11613));
});
}
return (new cljs.core.async.t11612(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11618 = (function (ch,p,filter_GT_,meta11619){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11619 = meta11619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11618.cljs$lang$type = true;
cljs.core.async.t11618.cljs$lang$ctorStr = "cljs.core.async/t11618";
cljs.core.async.t11618.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11618");
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11620){var self__ = this;
var _11620__$1 = this;return self__.meta11619;
});
cljs.core.async.t11618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11620,meta11619__$1){var self__ = this;
var _11620__$1 = this;return (new cljs.core.async.t11618(self__.ch,self__.p,self__.filter_GT_,meta11619__$1));
});
cljs.core.async.__GT_t11618 = (function __GT_t11618(ch__$1,p__$1,filter_GT___$1,meta11619){return (new cljs.core.async.t11618(ch__$1,p__$1,filter_GT___$1,meta11619));
});
}
return (new cljs.core.async.t11618(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___11703 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_11682){var state_val_11683 = (state_11682[1]);if((state_val_11683 === 1))
{var state_11682__$1 = state_11682;var statearr_11684_11704 = state_11682__$1;(statearr_11684_11704[2] = null);
(statearr_11684_11704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 2))
{var state_11682__$1 = state_11682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11682__$1,4,ch);
} else
{if((state_val_11683 === 3))
{var inst_11680 = (state_11682[2]);var state_11682__$1 = state_11682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11682__$1,inst_11680);
} else
{if((state_val_11683 === 4))
{var inst_11664 = (state_11682[7]);var inst_11664__$1 = (state_11682[2]);var inst_11665 = (inst_11664__$1 == null);var state_11682__$1 = (function (){var statearr_11685 = state_11682;(statearr_11685[7] = inst_11664__$1);
return statearr_11685;
})();if(cljs.core.truth_(inst_11665))
{var statearr_11686_11705 = state_11682__$1;(statearr_11686_11705[1] = 5);
} else
{var statearr_11687_11706 = state_11682__$1;(statearr_11687_11706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 5))
{var inst_11667 = cljs.core.async.close_BANG_.call(null,out);var state_11682__$1 = state_11682;var statearr_11688_11707 = state_11682__$1;(statearr_11688_11707[2] = inst_11667);
(statearr_11688_11707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 6))
{var inst_11664 = (state_11682[7]);var inst_11669 = p.call(null,inst_11664);var state_11682__$1 = state_11682;if(cljs.core.truth_(inst_11669))
{var statearr_11689_11708 = state_11682__$1;(statearr_11689_11708[1] = 8);
} else
{var statearr_11690_11709 = state_11682__$1;(statearr_11690_11709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 7))
{var inst_11678 = (state_11682[2]);var state_11682__$1 = state_11682;var statearr_11691_11710 = state_11682__$1;(statearr_11691_11710[2] = inst_11678);
(statearr_11691_11710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 8))
{var inst_11664 = (state_11682[7]);var state_11682__$1 = state_11682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11682__$1,11,out,inst_11664);
} else
{if((state_val_11683 === 9))
{var state_11682__$1 = state_11682;var statearr_11692_11711 = state_11682__$1;(statearr_11692_11711[2] = null);
(statearr_11692_11711[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 10))
{var inst_11675 = (state_11682[2]);var state_11682__$1 = (function (){var statearr_11693 = state_11682;(statearr_11693[8] = inst_11675);
return statearr_11693;
})();var statearr_11694_11712 = state_11682__$1;(statearr_11694_11712[2] = null);
(statearr_11694_11712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11683 === 11))
{var inst_11672 = (state_11682[2]);var state_11682__$1 = state_11682;var statearr_11695_11713 = state_11682__$1;(statearr_11695_11713[2] = inst_11672);
(statearr_11695_11713[1] = 10);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_11699 = [null,null,null,null,null,null,null,null,null];(statearr_11699[0] = state_machine__6824__auto__);
(statearr_11699[1] = 1);
return statearr_11699;
});
var state_machine__6824__auto____1 = (function (state_11682){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_11682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e11700){if((e11700 instanceof Object))
{var ex__6827__auto__ = e11700;var statearr_11701_11714 = state_11682;(statearr_11701_11714[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11715 = state_11682;
state_11682 = G__11715;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_11682){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_11682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_11702 = f__6839__auto__.call(null);(statearr_11702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___11703);
return statearr_11702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_11881){var state_val_11882 = (state_11881[1]);if((state_val_11882 === 1))
{var state_11881__$1 = state_11881;var statearr_11883_11924 = state_11881__$1;(statearr_11883_11924[2] = null);
(statearr_11883_11924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 2))
{var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11881__$1,4,in$);
} else
{if((state_val_11882 === 3))
{var inst_11879 = (state_11881[2]);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11881__$1,inst_11879);
} else
{if((state_val_11882 === 4))
{var inst_11822 = (state_11881[7]);var inst_11822__$1 = (state_11881[2]);var inst_11823 = (inst_11822__$1 == null);var state_11881__$1 = (function (){var statearr_11884 = state_11881;(statearr_11884[7] = inst_11822__$1);
return statearr_11884;
})();if(cljs.core.truth_(inst_11823))
{var statearr_11885_11925 = state_11881__$1;(statearr_11885_11925[1] = 5);
} else
{var statearr_11886_11926 = state_11881__$1;(statearr_11886_11926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 5))
{var inst_11825 = cljs.core.async.close_BANG_.call(null,out);var state_11881__$1 = state_11881;var statearr_11887_11927 = state_11881__$1;(statearr_11887_11927[2] = inst_11825);
(statearr_11887_11927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 6))
{var inst_11822 = (state_11881[7]);var inst_11831 = f.call(null,inst_11822);var inst_11832 = cljs.core.seq.call(null,inst_11831);var inst_11833 = inst_11832;var inst_11834 = null;var inst_11835 = 0;var inst_11836 = 0;var state_11881__$1 = (function (){var statearr_11888 = state_11881;(statearr_11888[8] = inst_11835);
(statearr_11888[9] = inst_11834);
(statearr_11888[10] = inst_11836);
(statearr_11888[11] = inst_11833);
return statearr_11888;
})();var statearr_11889_11928 = state_11881__$1;(statearr_11889_11928[2] = null);
(statearr_11889_11928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 7))
{var inst_11877 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11890_11929 = state_11881__$1;(statearr_11890_11929[2] = inst_11877);
(statearr_11890_11929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 8))
{var inst_11835 = (state_11881[8]);var inst_11836 = (state_11881[10]);var inst_11838 = (inst_11836 < inst_11835);var inst_11839 = inst_11838;var state_11881__$1 = state_11881;if(cljs.core.truth_(inst_11839))
{var statearr_11891_11930 = state_11881__$1;(statearr_11891_11930[1] = 10);
} else
{var statearr_11892_11931 = state_11881__$1;(statearr_11892_11931[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 9))
{var inst_11869 = (state_11881[2]);var inst_11870 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11881__$1 = (function (){var statearr_11893 = state_11881;(statearr_11893[12] = inst_11869);
return statearr_11893;
})();if(cljs.core.truth_(inst_11870))
{var statearr_11894_11932 = state_11881__$1;(statearr_11894_11932[1] = 21);
} else
{var statearr_11895_11933 = state_11881__$1;(statearr_11895_11933[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 10))
{var inst_11834 = (state_11881[9]);var inst_11836 = (state_11881[10]);var inst_11841 = cljs.core._nth.call(null,inst_11834,inst_11836);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11881__$1,13,out,inst_11841);
} else
{if((state_val_11882 === 11))
{var inst_11847 = (state_11881[13]);var inst_11833 = (state_11881[11]);var inst_11847__$1 = cljs.core.seq.call(null,inst_11833);var state_11881__$1 = (function (){var statearr_11899 = state_11881;(statearr_11899[13] = inst_11847__$1);
return statearr_11899;
})();if(inst_11847__$1)
{var statearr_11900_11934 = state_11881__$1;(statearr_11900_11934[1] = 14);
} else
{var statearr_11901_11935 = state_11881__$1;(statearr_11901_11935[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 12))
{var inst_11867 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11902_11936 = state_11881__$1;(statearr_11902_11936[2] = inst_11867);
(statearr_11902_11936[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 13))
{var inst_11835 = (state_11881[8]);var inst_11834 = (state_11881[9]);var inst_11836 = (state_11881[10]);var inst_11833 = (state_11881[11]);var inst_11843 = (state_11881[2]);var inst_11844 = (inst_11836 + 1);var tmp11896 = inst_11835;var tmp11897 = inst_11834;var tmp11898 = inst_11833;var inst_11833__$1 = tmp11898;var inst_11834__$1 = tmp11897;var inst_11835__$1 = tmp11896;var inst_11836__$1 = inst_11844;var state_11881__$1 = (function (){var statearr_11903 = state_11881;(statearr_11903[8] = inst_11835__$1);
(statearr_11903[9] = inst_11834__$1);
(statearr_11903[10] = inst_11836__$1);
(statearr_11903[14] = inst_11843);
(statearr_11903[11] = inst_11833__$1);
return statearr_11903;
})();var statearr_11904_11937 = state_11881__$1;(statearr_11904_11937[2] = null);
(statearr_11904_11937[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 14))
{var inst_11847 = (state_11881[13]);var inst_11849 = cljs.core.chunked_seq_QMARK_.call(null,inst_11847);var state_11881__$1 = state_11881;if(inst_11849)
{var statearr_11905_11938 = state_11881__$1;(statearr_11905_11938[1] = 17);
} else
{var statearr_11906_11939 = state_11881__$1;(statearr_11906_11939[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 15))
{var state_11881__$1 = state_11881;var statearr_11907_11940 = state_11881__$1;(statearr_11907_11940[2] = null);
(statearr_11907_11940[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 16))
{var inst_11865 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11908_11941 = state_11881__$1;(statearr_11908_11941[2] = inst_11865);
(statearr_11908_11941[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 17))
{var inst_11847 = (state_11881[13]);var inst_11851 = cljs.core.chunk_first.call(null,inst_11847);var inst_11852 = cljs.core.chunk_rest.call(null,inst_11847);var inst_11853 = cljs.core.count.call(null,inst_11851);var inst_11833 = inst_11852;var inst_11834 = inst_11851;var inst_11835 = inst_11853;var inst_11836 = 0;var state_11881__$1 = (function (){var statearr_11909 = state_11881;(statearr_11909[8] = inst_11835);
(statearr_11909[9] = inst_11834);
(statearr_11909[10] = inst_11836);
(statearr_11909[11] = inst_11833);
return statearr_11909;
})();var statearr_11910_11942 = state_11881__$1;(statearr_11910_11942[2] = null);
(statearr_11910_11942[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 18))
{var inst_11847 = (state_11881[13]);var inst_11856 = cljs.core.first.call(null,inst_11847);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11881__$1,20,out,inst_11856);
} else
{if((state_val_11882 === 19))
{var inst_11862 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11911_11943 = state_11881__$1;(statearr_11911_11943[2] = inst_11862);
(statearr_11911_11943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 20))
{var inst_11847 = (state_11881[13]);var inst_11858 = (state_11881[2]);var inst_11859 = cljs.core.next.call(null,inst_11847);var inst_11833 = inst_11859;var inst_11834 = null;var inst_11835 = 0;var inst_11836 = 0;var state_11881__$1 = (function (){var statearr_11912 = state_11881;(statearr_11912[8] = inst_11835);
(statearr_11912[9] = inst_11834);
(statearr_11912[10] = inst_11836);
(statearr_11912[11] = inst_11833);
(statearr_11912[15] = inst_11858);
return statearr_11912;
})();var statearr_11913_11944 = state_11881__$1;(statearr_11913_11944[2] = null);
(statearr_11913_11944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 21))
{var state_11881__$1 = state_11881;var statearr_11914_11945 = state_11881__$1;(statearr_11914_11945[2] = null);
(statearr_11914_11945[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 22))
{var state_11881__$1 = state_11881;var statearr_11915_11946 = state_11881__$1;(statearr_11915_11946[2] = null);
(statearr_11915_11946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 23))
{var inst_11875 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11916_11947 = state_11881__$1;(statearr_11916_11947[2] = inst_11875);
(statearr_11916_11947[1] = 7);
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
}
}
}
}
}
}
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_11920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11920[0] = state_machine__6824__auto__);
(statearr_11920[1] = 1);
return statearr_11920;
});
var state_machine__6824__auto____1 = (function (state_11881){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_11881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e11921){if((e11921 instanceof Object))
{var ex__6827__auto__ = e11921;var statearr_11922_11948 = state_11881;(statearr_11922_11948[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11949 = state_11881;
state_11881 = G__11949;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_11923 = f__6839__auto__.call(null);(statearr_11923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_11923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6838__auto___12044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12020){var state_val_12021 = (state_12020[1]);if((state_val_12021 === 1))
{var state_12020__$1 = state_12020;var statearr_12022_12045 = state_12020__$1;(statearr_12022_12045[2] = null);
(statearr_12022_12045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 2))
{var state_12020__$1 = state_12020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12020__$1,4,from);
} else
{if((state_val_12021 === 3))
{var inst_12018 = (state_12020[2]);var state_12020__$1 = state_12020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12020__$1,inst_12018);
} else
{if((state_val_12021 === 4))
{var inst_11999 = (state_12020[7]);var inst_11999__$1 = (state_12020[2]);var inst_12000 = (inst_11999__$1 == null);var state_12020__$1 = (function (){var statearr_12023 = state_12020;(statearr_12023[7] = inst_11999__$1);
return statearr_12023;
})();if(cljs.core.truth_(inst_12000))
{var statearr_12024_12046 = state_12020__$1;(statearr_12024_12046[1] = 5);
} else
{var statearr_12025_12047 = state_12020__$1;(statearr_12025_12047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 5))
{var state_12020__$1 = state_12020;if(cljs.core.truth_(close_QMARK_))
{var statearr_12026_12048 = state_12020__$1;(statearr_12026_12048[1] = 8);
} else
{var statearr_12027_12049 = state_12020__$1;(statearr_12027_12049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 6))
{var inst_11999 = (state_12020[7]);var state_12020__$1 = state_12020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12020__$1,11,to,inst_11999);
} else
{if((state_val_12021 === 7))
{var inst_12016 = (state_12020[2]);var state_12020__$1 = state_12020;var statearr_12028_12050 = state_12020__$1;(statearr_12028_12050[2] = inst_12016);
(statearr_12028_12050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 8))
{var inst_12003 = cljs.core.async.close_BANG_.call(null,to);var state_12020__$1 = state_12020;var statearr_12029_12051 = state_12020__$1;(statearr_12029_12051[2] = inst_12003);
(statearr_12029_12051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 9))
{var state_12020__$1 = state_12020;var statearr_12030_12052 = state_12020__$1;(statearr_12030_12052[2] = null);
(statearr_12030_12052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 10))
{var inst_12006 = (state_12020[2]);var state_12020__$1 = state_12020;var statearr_12031_12053 = state_12020__$1;(statearr_12031_12053[2] = inst_12006);
(statearr_12031_12053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 11))
{var inst_12009 = (state_12020[2]);var state_12020__$1 = state_12020;if(cljs.core.truth_(inst_12009))
{var statearr_12032_12054 = state_12020__$1;(statearr_12032_12054[1] = 12);
} else
{var statearr_12033_12055 = state_12020__$1;(statearr_12033_12055[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 12))
{var state_12020__$1 = state_12020;var statearr_12034_12056 = state_12020__$1;(statearr_12034_12056[2] = null);
(statearr_12034_12056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 13))
{var state_12020__$1 = state_12020;var statearr_12035_12057 = state_12020__$1;(statearr_12035_12057[2] = null);
(statearr_12035_12057[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 14))
{var inst_12014 = (state_12020[2]);var state_12020__$1 = state_12020;var statearr_12036_12058 = state_12020__$1;(statearr_12036_12058[2] = inst_12014);
(statearr_12036_12058[1] = 7);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_12040 = [null,null,null,null,null,null,null,null];(statearr_12040[0] = state_machine__6824__auto__);
(statearr_12040[1] = 1);
return statearr_12040;
});
var state_machine__6824__auto____1 = (function (state_12020){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12041){if((e12041 instanceof Object))
{var ex__6827__auto__ = e12041;var statearr_12042_12059 = state_12020;(statearr_12042_12059[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12060 = state_12020;
state_12020 = G__12060;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12020){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12043 = f__6839__auto__.call(null);(statearr_12043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12044);
return statearr_12043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6838__auto___12161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12136){var state_val_12137 = (state_12136[1]);if((state_val_12137 === 1))
{var state_12136__$1 = state_12136;var statearr_12138_12162 = state_12136__$1;(statearr_12138_12162[2] = null);
(statearr_12138_12162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 2))
{var state_12136__$1 = state_12136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12136__$1,4,ch);
} else
{if((state_val_12137 === 3))
{var inst_12134 = (state_12136[2]);var state_12136__$1 = state_12136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12136__$1,inst_12134);
} else
{if((state_val_12137 === 4))
{var inst_12113 = (state_12136[7]);var inst_12113__$1 = (state_12136[2]);var inst_12114 = (inst_12113__$1 == null);var state_12136__$1 = (function (){var statearr_12139 = state_12136;(statearr_12139[7] = inst_12113__$1);
return statearr_12139;
})();if(cljs.core.truth_(inst_12114))
{var statearr_12140_12163 = state_12136__$1;(statearr_12140_12163[1] = 5);
} else
{var statearr_12141_12164 = state_12136__$1;(statearr_12141_12164[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 5))
{var inst_12116 = cljs.core.async.close_BANG_.call(null,tc);var inst_12117 = cljs.core.async.close_BANG_.call(null,fc);var state_12136__$1 = (function (){var statearr_12142 = state_12136;(statearr_12142[8] = inst_12116);
return statearr_12142;
})();var statearr_12143_12165 = state_12136__$1;(statearr_12143_12165[2] = inst_12117);
(statearr_12143_12165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 6))
{var inst_12113 = (state_12136[7]);var inst_12119 = p.call(null,inst_12113);var state_12136__$1 = state_12136;if(cljs.core.truth_(inst_12119))
{var statearr_12144_12166 = state_12136__$1;(statearr_12144_12166[1] = 9);
} else
{var statearr_12145_12167 = state_12136__$1;(statearr_12145_12167[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 7))
{var inst_12132 = (state_12136[2]);var state_12136__$1 = state_12136;var statearr_12146_12168 = state_12136__$1;(statearr_12146_12168[2] = inst_12132);
(statearr_12146_12168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 8))
{var inst_12125 = (state_12136[2]);var state_12136__$1 = state_12136;if(cljs.core.truth_(inst_12125))
{var statearr_12147_12169 = state_12136__$1;(statearr_12147_12169[1] = 12);
} else
{var statearr_12148_12170 = state_12136__$1;(statearr_12148_12170[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 9))
{var state_12136__$1 = state_12136;var statearr_12149_12171 = state_12136__$1;(statearr_12149_12171[2] = tc);
(statearr_12149_12171[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 10))
{var state_12136__$1 = state_12136;var statearr_12150_12172 = state_12136__$1;(statearr_12150_12172[2] = fc);
(statearr_12150_12172[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 11))
{var inst_12113 = (state_12136[7]);var inst_12123 = (state_12136[2]);var state_12136__$1 = state_12136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12136__$1,8,inst_12123,inst_12113);
} else
{if((state_val_12137 === 12))
{var state_12136__$1 = state_12136;var statearr_12151_12173 = state_12136__$1;(statearr_12151_12173[2] = null);
(statearr_12151_12173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 13))
{var state_12136__$1 = state_12136;var statearr_12152_12174 = state_12136__$1;(statearr_12152_12174[2] = null);
(statearr_12152_12174[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12137 === 14))
{var inst_12130 = (state_12136[2]);var state_12136__$1 = state_12136;var statearr_12153_12175 = state_12136__$1;(statearr_12153_12175[2] = inst_12130);
(statearr_12153_12175[1] = 7);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_12157 = [null,null,null,null,null,null,null,null,null];(statearr_12157[0] = state_machine__6824__auto__);
(statearr_12157[1] = 1);
return statearr_12157;
});
var state_machine__6824__auto____1 = (function (state_12136){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12136);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12158){if((e12158 instanceof Object))
{var ex__6827__auto__ = e12158;var statearr_12159_12176 = state_12136;(statearr_12159_12176[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12177 = state_12136;
state_12136 = G__12177;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12136){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12160 = f__6839__auto__.call(null);(statearr_12160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12161);
return statearr_12160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12224){var state_val_12225 = (state_12224[1]);if((state_val_12225 === 7))
{var inst_12220 = (state_12224[2]);var state_12224__$1 = state_12224;var statearr_12226_12242 = state_12224__$1;(statearr_12226_12242[2] = inst_12220);
(statearr_12226_12242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 6))
{var inst_12213 = (state_12224[7]);var inst_12210 = (state_12224[8]);var inst_12217 = f.call(null,inst_12210,inst_12213);var inst_12210__$1 = inst_12217;var state_12224__$1 = (function (){var statearr_12227 = state_12224;(statearr_12227[8] = inst_12210__$1);
return statearr_12227;
})();var statearr_12228_12243 = state_12224__$1;(statearr_12228_12243[2] = null);
(statearr_12228_12243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 5))
{var inst_12210 = (state_12224[8]);var state_12224__$1 = state_12224;var statearr_12229_12244 = state_12224__$1;(statearr_12229_12244[2] = inst_12210);
(statearr_12229_12244[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 4))
{var inst_12213 = (state_12224[7]);var inst_12213__$1 = (state_12224[2]);var inst_12214 = (inst_12213__$1 == null);var state_12224__$1 = (function (){var statearr_12230 = state_12224;(statearr_12230[7] = inst_12213__$1);
return statearr_12230;
})();if(cljs.core.truth_(inst_12214))
{var statearr_12231_12245 = state_12224__$1;(statearr_12231_12245[1] = 5);
} else
{var statearr_12232_12246 = state_12224__$1;(statearr_12232_12246[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 3))
{var inst_12222 = (state_12224[2]);var state_12224__$1 = state_12224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12224__$1,inst_12222);
} else
{if((state_val_12225 === 2))
{var state_12224__$1 = state_12224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12224__$1,4,ch);
} else
{if((state_val_12225 === 1))
{var inst_12210 = init;var state_12224__$1 = (function (){var statearr_12233 = state_12224;(statearr_12233[8] = inst_12210);
return statearr_12233;
})();var statearr_12234_12247 = state_12224__$1;(statearr_12234_12247[2] = null);
(statearr_12234_12247[1] = 2);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_12238 = [null,null,null,null,null,null,null,null,null];(statearr_12238[0] = state_machine__6824__auto__);
(statearr_12238[1] = 1);
return statearr_12238;
});
var state_machine__6824__auto____1 = (function (state_12224){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12239){if((e12239 instanceof Object))
{var ex__6827__auto__ = e12239;var statearr_12240_12248 = state_12224;(statearr_12240_12248[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12249 = state_12224;
state_12224 = G__12249;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12224){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12241 = f__6839__auto__.call(null);(statearr_12241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_12241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12323){var state_val_12324 = (state_12323[1]);if((state_val_12324 === 1))
{var inst_12299 = cljs.core.seq.call(null,coll);var inst_12300 = inst_12299;var state_12323__$1 = (function (){var statearr_12325 = state_12323;(statearr_12325[7] = inst_12300);
return statearr_12325;
})();var statearr_12326_12348 = state_12323__$1;(statearr_12326_12348[2] = null);
(statearr_12326_12348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 2))
{var inst_12300 = (state_12323[7]);var state_12323__$1 = state_12323;if(cljs.core.truth_(inst_12300))
{var statearr_12327_12349 = state_12323__$1;(statearr_12327_12349[1] = 4);
} else
{var statearr_12328_12350 = state_12323__$1;(statearr_12328_12350[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 3))
{var inst_12321 = (state_12323[2]);var state_12323__$1 = state_12323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12323__$1,inst_12321);
} else
{if((state_val_12324 === 4))
{var inst_12300 = (state_12323[7]);var inst_12303 = cljs.core.first.call(null,inst_12300);var state_12323__$1 = state_12323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12323__$1,7,ch,inst_12303);
} else
{if((state_val_12324 === 5))
{var inst_12300 = (state_12323[7]);var state_12323__$1 = state_12323;var statearr_12329_12351 = state_12323__$1;(statearr_12329_12351[2] = inst_12300);
(statearr_12329_12351[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 6))
{var inst_12308 = (state_12323[2]);var state_12323__$1 = state_12323;if(cljs.core.truth_(inst_12308))
{var statearr_12330_12352 = state_12323__$1;(statearr_12330_12352[1] = 8);
} else
{var statearr_12331_12353 = state_12323__$1;(statearr_12331_12353[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 7))
{var inst_12305 = (state_12323[2]);var state_12323__$1 = state_12323;var statearr_12332_12354 = state_12323__$1;(statearr_12332_12354[2] = inst_12305);
(statearr_12332_12354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 8))
{var inst_12300 = (state_12323[7]);var inst_12310 = cljs.core.next.call(null,inst_12300);var inst_12300__$1 = inst_12310;var state_12323__$1 = (function (){var statearr_12333 = state_12323;(statearr_12333[7] = inst_12300__$1);
return statearr_12333;
})();var statearr_12334_12355 = state_12323__$1;(statearr_12334_12355[2] = null);
(statearr_12334_12355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 9))
{var state_12323__$1 = state_12323;if(cljs.core.truth_(close_QMARK_))
{var statearr_12335_12356 = state_12323__$1;(statearr_12335_12356[1] = 11);
} else
{var statearr_12336_12357 = state_12323__$1;(statearr_12336_12357[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 10))
{var inst_12319 = (state_12323[2]);var state_12323__$1 = state_12323;var statearr_12337_12358 = state_12323__$1;(statearr_12337_12358[2] = inst_12319);
(statearr_12337_12358[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 11))
{var inst_12314 = cljs.core.async.close_BANG_.call(null,ch);var state_12323__$1 = state_12323;var statearr_12338_12359 = state_12323__$1;(statearr_12338_12359[2] = inst_12314);
(statearr_12338_12359[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 12))
{var state_12323__$1 = state_12323;var statearr_12339_12360 = state_12323__$1;(statearr_12339_12360[2] = null);
(statearr_12339_12360[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 13))
{var inst_12317 = (state_12323[2]);var state_12323__$1 = state_12323;var statearr_12340_12361 = state_12323__$1;(statearr_12340_12361[2] = inst_12317);
(statearr_12340_12361[1] = 10);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_12344 = [null,null,null,null,null,null,null,null];(statearr_12344[0] = state_machine__6824__auto__);
(statearr_12344[1] = 1);
return statearr_12344;
});
var state_machine__6824__auto____1 = (function (state_12323){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12345){if((e12345 instanceof Object))
{var ex__6827__auto__ = e12345;var statearr_12346_12362 = state_12323;(statearr_12346_12362[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12363 = state_12323;
state_12323 = G__12363;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12323){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12347 = f__6839__auto__.call(null);(statearr_12347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_12347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
return c__6838__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12365 = {};return obj12365;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12367 = {};return obj12367;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12589 = (function (cs,ch,mult,meta12590){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12590 = meta12590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12589.cljs$lang$type = true;
cljs.core.async.t12589.cljs$lang$ctorStr = "cljs.core.async/t12589";
cljs.core.async.t12589.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12589");
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12589.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12591){var self__ = this;
var _12591__$1 = this;return self__.meta12590;
});})(cs))
;
cljs.core.async.t12589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12591,meta12590__$1){var self__ = this;
var _12591__$1 = this;return (new cljs.core.async.t12589(self__.cs,self__.ch,self__.mult,meta12590__$1));
});})(cs))
;
cljs.core.async.__GT_t12589 = ((function (cs){
return (function __GT_t12589(cs__$1,ch__$1,mult__$1,meta12590){return (new cljs.core.async.t12589(cs__$1,ch__$1,mult__$1,meta12590));
});})(cs))
;
}
return (new cljs.core.async.t12589(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6838__auto___12810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12722){var state_val_12723 = (state_12722[1]);if((state_val_12723 === 32))
{var inst_12665 = (state_12722[7]);var inst_12664 = (state_12722[8]);var inst_12663 = (state_12722[9]);var inst_12662 = (state_12722[10]);var inst_12677 = (state_12722[2]);var inst_12678 = (inst_12665 + 1);var tmp12724 = inst_12664;var tmp12725 = inst_12663;var tmp12726 = inst_12662;var inst_12662__$1 = tmp12726;var inst_12663__$1 = tmp12725;var inst_12664__$1 = tmp12724;var inst_12665__$1 = inst_12678;var state_12722__$1 = (function (){var statearr_12727 = state_12722;(statearr_12727[7] = inst_12665__$1);
(statearr_12727[8] = inst_12664__$1);
(statearr_12727[9] = inst_12663__$1);
(statearr_12727[10] = inst_12662__$1);
(statearr_12727[11] = inst_12677);
return statearr_12727;
})();var statearr_12728_12811 = state_12722__$1;(statearr_12728_12811[2] = null);
(statearr_12728_12811[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 1))
{var state_12722__$1 = state_12722;var statearr_12729_12812 = state_12722__$1;(statearr_12729_12812[2] = null);
(statearr_12729_12812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 33))
{var inst_12681 = (state_12722[12]);var inst_12683 = cljs.core.chunked_seq_QMARK_.call(null,inst_12681);var state_12722__$1 = state_12722;if(inst_12683)
{var statearr_12730_12813 = state_12722__$1;(statearr_12730_12813[1] = 36);
} else
{var statearr_12731_12814 = state_12722__$1;(statearr_12731_12814[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 2))
{var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,4,ch);
} else
{if((state_val_12723 === 34))
{var state_12722__$1 = state_12722;var statearr_12732_12815 = state_12722__$1;(statearr_12732_12815[2] = null);
(statearr_12732_12815[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 3))
{var inst_12720 = (state_12722[2]);var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else
{if((state_val_12723 === 35))
{var inst_12704 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12733_12816 = state_12722__$1;(statearr_12733_12816[2] = inst_12704);
(statearr_12733_12816[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 4))
{var inst_12594 = (state_12722[13]);var inst_12594__$1 = (state_12722[2]);var inst_12595 = (inst_12594__$1 == null);var state_12722__$1 = (function (){var statearr_12734 = state_12722;(statearr_12734[13] = inst_12594__$1);
return statearr_12734;
})();if(cljs.core.truth_(inst_12595))
{var statearr_12735_12817 = state_12722__$1;(statearr_12735_12817[1] = 5);
} else
{var statearr_12736_12818 = state_12722__$1;(statearr_12736_12818[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 36))
{var inst_12681 = (state_12722[12]);var inst_12685 = cljs.core.chunk_first.call(null,inst_12681);var inst_12686 = cljs.core.chunk_rest.call(null,inst_12681);var inst_12687 = cljs.core.count.call(null,inst_12685);var inst_12662 = inst_12686;var inst_12663 = inst_12685;var inst_12664 = inst_12687;var inst_12665 = 0;var state_12722__$1 = (function (){var statearr_12737 = state_12722;(statearr_12737[7] = inst_12665);
(statearr_12737[8] = inst_12664);
(statearr_12737[9] = inst_12663);
(statearr_12737[10] = inst_12662);
return statearr_12737;
})();var statearr_12738_12819 = state_12722__$1;(statearr_12738_12819[2] = null);
(statearr_12738_12819[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 5))
{var inst_12601 = cljs.core.deref.call(null,cs);var inst_12602 = cljs.core.seq.call(null,inst_12601);var inst_12603 = inst_12602;var inst_12604 = null;var inst_12605 = 0;var inst_12606 = 0;var state_12722__$1 = (function (){var statearr_12739 = state_12722;(statearr_12739[14] = inst_12605);
(statearr_12739[15] = inst_12604);
(statearr_12739[16] = inst_12606);
(statearr_12739[17] = inst_12603);
return statearr_12739;
})();var statearr_12740_12820 = state_12722__$1;(statearr_12740_12820[2] = null);
(statearr_12740_12820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 37))
{var inst_12594 = (state_12722[13]);var inst_12681 = (state_12722[12]);var inst_12690 = (state_12722[18]);var inst_12690__$1 = cljs.core.first.call(null,inst_12681);var inst_12691 = cljs.core.async.put_BANG_.call(null,inst_12690__$1,inst_12594,done);var state_12722__$1 = (function (){var statearr_12741 = state_12722;(statearr_12741[18] = inst_12690__$1);
return statearr_12741;
})();if(cljs.core.truth_(inst_12691))
{var statearr_12742_12821 = state_12722__$1;(statearr_12742_12821[1] = 39);
} else
{var statearr_12743_12822 = state_12722__$1;(statearr_12743_12822[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 6))
{var inst_12654 = (state_12722[19]);var inst_12653 = cljs.core.deref.call(null,cs);var inst_12654__$1 = cljs.core.keys.call(null,inst_12653);var inst_12655 = cljs.core.count.call(null,inst_12654__$1);var inst_12656 = cljs.core.reset_BANG_.call(null,dctr,inst_12655);var inst_12661 = cljs.core.seq.call(null,inst_12654__$1);var inst_12662 = inst_12661;var inst_12663 = null;var inst_12664 = 0;var inst_12665 = 0;var state_12722__$1 = (function (){var statearr_12744 = state_12722;(statearr_12744[7] = inst_12665);
(statearr_12744[8] = inst_12664);
(statearr_12744[20] = inst_12656);
(statearr_12744[9] = inst_12663);
(statearr_12744[10] = inst_12662);
(statearr_12744[19] = inst_12654__$1);
return statearr_12744;
})();var statearr_12745_12823 = state_12722__$1;(statearr_12745_12823[2] = null);
(statearr_12745_12823[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 38))
{var inst_12701 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12746_12824 = state_12722__$1;(statearr_12746_12824[2] = inst_12701);
(statearr_12746_12824[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 7))
{var inst_12718 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12747_12825 = state_12722__$1;(statearr_12747_12825[2] = inst_12718);
(statearr_12747_12825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 39))
{var state_12722__$1 = state_12722;var statearr_12748_12826 = state_12722__$1;(statearr_12748_12826[2] = null);
(statearr_12748_12826[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 8))
{var inst_12605 = (state_12722[14]);var inst_12606 = (state_12722[16]);var inst_12608 = (inst_12606 < inst_12605);var inst_12609 = inst_12608;var state_12722__$1 = state_12722;if(cljs.core.truth_(inst_12609))
{var statearr_12749_12827 = state_12722__$1;(statearr_12749_12827[1] = 10);
} else
{var statearr_12750_12828 = state_12722__$1;(statearr_12750_12828[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 40))
{var inst_12690 = (state_12722[18]);var inst_12694 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12695 = cljs.core.async.untap_STAR_.call(null,m,inst_12690);var state_12722__$1 = (function (){var statearr_12751 = state_12722;(statearr_12751[21] = inst_12694);
return statearr_12751;
})();var statearr_12752_12829 = state_12722__$1;(statearr_12752_12829[2] = inst_12695);
(statearr_12752_12829[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 9))
{var inst_12651 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12753_12830 = state_12722__$1;(statearr_12753_12830[2] = inst_12651);
(statearr_12753_12830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 41))
{var inst_12681 = (state_12722[12]);var inst_12697 = (state_12722[2]);var inst_12698 = cljs.core.next.call(null,inst_12681);var inst_12662 = inst_12698;var inst_12663 = null;var inst_12664 = 0;var inst_12665 = 0;var state_12722__$1 = (function (){var statearr_12754 = state_12722;(statearr_12754[7] = inst_12665);
(statearr_12754[8] = inst_12664);
(statearr_12754[9] = inst_12663);
(statearr_12754[10] = inst_12662);
(statearr_12754[22] = inst_12697);
return statearr_12754;
})();var statearr_12755_12831 = state_12722__$1;(statearr_12755_12831[2] = null);
(statearr_12755_12831[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 10))
{var inst_12604 = (state_12722[15]);var inst_12606 = (state_12722[16]);var inst_12612 = cljs.core._nth.call(null,inst_12604,inst_12606);var inst_12613 = cljs.core.nth.call(null,inst_12612,0,null);var inst_12614 = cljs.core.nth.call(null,inst_12612,1,null);var state_12722__$1 = (function (){var statearr_12756 = state_12722;(statearr_12756[23] = inst_12613);
return statearr_12756;
})();if(cljs.core.truth_(inst_12614))
{var statearr_12757_12832 = state_12722__$1;(statearr_12757_12832[1] = 13);
} else
{var statearr_12758_12833 = state_12722__$1;(statearr_12758_12833[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 42))
{var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,45,dchan);
} else
{if((state_val_12723 === 11))
{var inst_12623 = (state_12722[24]);var inst_12603 = (state_12722[17]);var inst_12623__$1 = cljs.core.seq.call(null,inst_12603);var state_12722__$1 = (function (){var statearr_12759 = state_12722;(statearr_12759[24] = inst_12623__$1);
return statearr_12759;
})();if(inst_12623__$1)
{var statearr_12760_12834 = state_12722__$1;(statearr_12760_12834[1] = 16);
} else
{var statearr_12761_12835 = state_12722__$1;(statearr_12761_12835[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 43))
{var state_12722__$1 = state_12722;var statearr_12762_12836 = state_12722__$1;(statearr_12762_12836[2] = null);
(statearr_12762_12836[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 12))
{var inst_12649 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12763_12837 = state_12722__$1;(statearr_12763_12837[2] = inst_12649);
(statearr_12763_12837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 44))
{var inst_12715 = (state_12722[2]);var state_12722__$1 = (function (){var statearr_12764 = state_12722;(statearr_12764[25] = inst_12715);
return statearr_12764;
})();var statearr_12765_12838 = state_12722__$1;(statearr_12765_12838[2] = null);
(statearr_12765_12838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 13))
{var inst_12613 = (state_12722[23]);var inst_12616 = cljs.core.async.close_BANG_.call(null,inst_12613);var state_12722__$1 = state_12722;var statearr_12766_12839 = state_12722__$1;(statearr_12766_12839[2] = inst_12616);
(statearr_12766_12839[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 45))
{var inst_12712 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12770_12840 = state_12722__$1;(statearr_12770_12840[2] = inst_12712);
(statearr_12770_12840[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 14))
{var state_12722__$1 = state_12722;var statearr_12771_12841 = state_12722__$1;(statearr_12771_12841[2] = null);
(statearr_12771_12841[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 15))
{var inst_12605 = (state_12722[14]);var inst_12604 = (state_12722[15]);var inst_12606 = (state_12722[16]);var inst_12603 = (state_12722[17]);var inst_12619 = (state_12722[2]);var inst_12620 = (inst_12606 + 1);var tmp12767 = inst_12605;var tmp12768 = inst_12604;var tmp12769 = inst_12603;var inst_12603__$1 = tmp12769;var inst_12604__$1 = tmp12768;var inst_12605__$1 = tmp12767;var inst_12606__$1 = inst_12620;var state_12722__$1 = (function (){var statearr_12772 = state_12722;(statearr_12772[14] = inst_12605__$1);
(statearr_12772[15] = inst_12604__$1);
(statearr_12772[16] = inst_12606__$1);
(statearr_12772[26] = inst_12619);
(statearr_12772[17] = inst_12603__$1);
return statearr_12772;
})();var statearr_12773_12842 = state_12722__$1;(statearr_12773_12842[2] = null);
(statearr_12773_12842[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 16))
{var inst_12623 = (state_12722[24]);var inst_12625 = cljs.core.chunked_seq_QMARK_.call(null,inst_12623);var state_12722__$1 = state_12722;if(inst_12625)
{var statearr_12774_12843 = state_12722__$1;(statearr_12774_12843[1] = 19);
} else
{var statearr_12775_12844 = state_12722__$1;(statearr_12775_12844[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 17))
{var state_12722__$1 = state_12722;var statearr_12776_12845 = state_12722__$1;(statearr_12776_12845[2] = null);
(statearr_12776_12845[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 18))
{var inst_12647 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12777_12846 = state_12722__$1;(statearr_12777_12846[2] = inst_12647);
(statearr_12777_12846[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 19))
{var inst_12623 = (state_12722[24]);var inst_12627 = cljs.core.chunk_first.call(null,inst_12623);var inst_12628 = cljs.core.chunk_rest.call(null,inst_12623);var inst_12629 = cljs.core.count.call(null,inst_12627);var inst_12603 = inst_12628;var inst_12604 = inst_12627;var inst_12605 = inst_12629;var inst_12606 = 0;var state_12722__$1 = (function (){var statearr_12778 = state_12722;(statearr_12778[14] = inst_12605);
(statearr_12778[15] = inst_12604);
(statearr_12778[16] = inst_12606);
(statearr_12778[17] = inst_12603);
return statearr_12778;
})();var statearr_12779_12847 = state_12722__$1;(statearr_12779_12847[2] = null);
(statearr_12779_12847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 20))
{var inst_12623 = (state_12722[24]);var inst_12633 = cljs.core.first.call(null,inst_12623);var inst_12634 = cljs.core.nth.call(null,inst_12633,0,null);var inst_12635 = cljs.core.nth.call(null,inst_12633,1,null);var state_12722__$1 = (function (){var statearr_12780 = state_12722;(statearr_12780[27] = inst_12634);
return statearr_12780;
})();if(cljs.core.truth_(inst_12635))
{var statearr_12781_12848 = state_12722__$1;(statearr_12781_12848[1] = 22);
} else
{var statearr_12782_12849 = state_12722__$1;(statearr_12782_12849[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 21))
{var inst_12644 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12783_12850 = state_12722__$1;(statearr_12783_12850[2] = inst_12644);
(statearr_12783_12850[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 22))
{var inst_12634 = (state_12722[27]);var inst_12637 = cljs.core.async.close_BANG_.call(null,inst_12634);var state_12722__$1 = state_12722;var statearr_12784_12851 = state_12722__$1;(statearr_12784_12851[2] = inst_12637);
(statearr_12784_12851[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 23))
{var state_12722__$1 = state_12722;var statearr_12785_12852 = state_12722__$1;(statearr_12785_12852[2] = null);
(statearr_12785_12852[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 24))
{var inst_12623 = (state_12722[24]);var inst_12640 = (state_12722[2]);var inst_12641 = cljs.core.next.call(null,inst_12623);var inst_12603 = inst_12641;var inst_12604 = null;var inst_12605 = 0;var inst_12606 = 0;var state_12722__$1 = (function (){var statearr_12786 = state_12722;(statearr_12786[14] = inst_12605);
(statearr_12786[15] = inst_12604);
(statearr_12786[16] = inst_12606);
(statearr_12786[17] = inst_12603);
(statearr_12786[28] = inst_12640);
return statearr_12786;
})();var statearr_12787_12853 = state_12722__$1;(statearr_12787_12853[2] = null);
(statearr_12787_12853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 25))
{var inst_12665 = (state_12722[7]);var inst_12664 = (state_12722[8]);var inst_12667 = (inst_12665 < inst_12664);var inst_12668 = inst_12667;var state_12722__$1 = state_12722;if(cljs.core.truth_(inst_12668))
{var statearr_12788_12854 = state_12722__$1;(statearr_12788_12854[1] = 27);
} else
{var statearr_12789_12855 = state_12722__$1;(statearr_12789_12855[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 26))
{var inst_12654 = (state_12722[19]);var inst_12708 = (state_12722[2]);var inst_12709 = cljs.core.seq.call(null,inst_12654);var state_12722__$1 = (function (){var statearr_12790 = state_12722;(statearr_12790[29] = inst_12708);
return statearr_12790;
})();if(inst_12709)
{var statearr_12791_12856 = state_12722__$1;(statearr_12791_12856[1] = 42);
} else
{var statearr_12792_12857 = state_12722__$1;(statearr_12792_12857[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 27))
{var inst_12594 = (state_12722[13]);var inst_12670 = (state_12722[30]);var inst_12665 = (state_12722[7]);var inst_12663 = (state_12722[9]);var inst_12670__$1 = cljs.core._nth.call(null,inst_12663,inst_12665);var inst_12671 = cljs.core.async.put_BANG_.call(null,inst_12670__$1,inst_12594,done);var state_12722__$1 = (function (){var statearr_12793 = state_12722;(statearr_12793[30] = inst_12670__$1);
return statearr_12793;
})();if(cljs.core.truth_(inst_12671))
{var statearr_12794_12858 = state_12722__$1;(statearr_12794_12858[1] = 30);
} else
{var statearr_12795_12859 = state_12722__$1;(statearr_12795_12859[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 28))
{var inst_12662 = (state_12722[10]);var inst_12681 = (state_12722[12]);var inst_12681__$1 = cljs.core.seq.call(null,inst_12662);var state_12722__$1 = (function (){var statearr_12796 = state_12722;(statearr_12796[12] = inst_12681__$1);
return statearr_12796;
})();if(inst_12681__$1)
{var statearr_12797_12860 = state_12722__$1;(statearr_12797_12860[1] = 33);
} else
{var statearr_12798_12861 = state_12722__$1;(statearr_12798_12861[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 29))
{var inst_12706 = (state_12722[2]);var state_12722__$1 = state_12722;var statearr_12799_12862 = state_12722__$1;(statearr_12799_12862[2] = inst_12706);
(statearr_12799_12862[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 30))
{var state_12722__$1 = state_12722;var statearr_12800_12863 = state_12722__$1;(statearr_12800_12863[2] = null);
(statearr_12800_12863[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12723 === 31))
{var inst_12670 = (state_12722[30]);var inst_12674 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12675 = cljs.core.async.untap_STAR_.call(null,m,inst_12670);var state_12722__$1 = (function (){var statearr_12801 = state_12722;(statearr_12801[31] = inst_12674);
return statearr_12801;
})();var statearr_12802_12864 = state_12722__$1;(statearr_12802_12864[2] = inst_12675);
(statearr_12802_12864[1] = 32);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6824__auto____0 = (function (){var statearr_12806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12806[0] = state_machine__6824__auto__);
(statearr_12806[1] = 1);
return statearr_12806;
});
var state_machine__6824__auto____1 = (function (state_12722){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12722);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12807){if((e12807 instanceof Object))
{var ex__6827__auto__ = e12807;var statearr_12808_12865 = state_12722;(statearr_12808_12865[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12866 = state_12722;
state_12722 = G__12866;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12809 = f__6839__auto__.call(null);(statearr_12809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12810);
return statearr_12809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj12868 = {};return obj12868;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12988 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12989){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12989 = meta12989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12988.cljs$lang$type = true;
cljs.core.async.t12988.cljs$lang$ctorStr = "cljs.core.async/t12988";
cljs.core.async.t12988.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12988");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12990){var self__ = this;
var _12990__$1 = this;return self__.meta12989;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12990,meta12989__$1){var self__ = this;
var _12990__$1 = this;return (new cljs.core.async.t12988(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12989__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12988 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12988(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12989){return (new cljs.core.async.t12988(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12989));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12988(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6838__auto___13107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13060){var state_val_13061 = (state_13060[1]);if((state_val_13061 === 1))
{var inst_12994 = (state_13060[7]);var inst_12994__$1 = calc_state.call(null);var inst_12995 = cljs.core.seq_QMARK_.call(null,inst_12994__$1);var state_13060__$1 = (function (){var statearr_13062 = state_13060;(statearr_13062[7] = inst_12994__$1);
return statearr_13062;
})();if(inst_12995)
{var statearr_13063_13108 = state_13060__$1;(statearr_13063_13108[1] = 2);
} else
{var statearr_13064_13109 = state_13060__$1;(statearr_13064_13109[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 2))
{var inst_12994 = (state_13060[7]);var inst_12997 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12994);var state_13060__$1 = state_13060;var statearr_13065_13110 = state_13060__$1;(statearr_13065_13110[2] = inst_12997);
(statearr_13065_13110[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 3))
{var inst_12994 = (state_13060[7]);var state_13060__$1 = state_13060;var statearr_13066_13111 = state_13060__$1;(statearr_13066_13111[2] = inst_12994);
(statearr_13066_13111[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 4))
{var inst_12994 = (state_13060[7]);var inst_13000 = (state_13060[2]);var inst_13001 = cljs.core.get.call(null,inst_13000,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13002 = cljs.core.get.call(null,inst_13000,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13003 = cljs.core.get.call(null,inst_13000,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13004 = inst_12994;var state_13060__$1 = (function (){var statearr_13067 = state_13060;(statearr_13067[8] = inst_13004);
(statearr_13067[9] = inst_13003);
(statearr_13067[10] = inst_13001);
(statearr_13067[11] = inst_13002);
return statearr_13067;
})();var statearr_13068_13112 = state_13060__$1;(statearr_13068_13112[2] = null);
(statearr_13068_13112[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 5))
{var inst_13004 = (state_13060[8]);var inst_13007 = cljs.core.seq_QMARK_.call(null,inst_13004);var state_13060__$1 = state_13060;if(inst_13007)
{var statearr_13069_13113 = state_13060__$1;(statearr_13069_13113[1] = 7);
} else
{var statearr_13070_13114 = state_13060__$1;(statearr_13070_13114[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 6))
{var inst_13058 = (state_13060[2]);var state_13060__$1 = state_13060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13060__$1,inst_13058);
} else
{if((state_val_13061 === 7))
{var inst_13004 = (state_13060[8]);var inst_13009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13004);var state_13060__$1 = state_13060;var statearr_13071_13115 = state_13060__$1;(statearr_13071_13115[2] = inst_13009);
(statearr_13071_13115[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 8))
{var inst_13004 = (state_13060[8]);var state_13060__$1 = state_13060;var statearr_13072_13116 = state_13060__$1;(statearr_13072_13116[2] = inst_13004);
(statearr_13072_13116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 9))
{var inst_13012 = (state_13060[12]);var inst_13012__$1 = (state_13060[2]);var inst_13013 = cljs.core.get.call(null,inst_13012__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13014 = cljs.core.get.call(null,inst_13012__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13015 = cljs.core.get.call(null,inst_13012__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13060__$1 = (function (){var statearr_13073 = state_13060;(statearr_13073[12] = inst_13012__$1);
(statearr_13073[13] = inst_13015);
(statearr_13073[14] = inst_13014);
return statearr_13073;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13060__$1,10,inst_13013);
} else
{if((state_val_13061 === 10))
{var inst_13019 = (state_13060[15]);var inst_13020 = (state_13060[16]);var inst_13018 = (state_13060[2]);var inst_13019__$1 = cljs.core.nth.call(null,inst_13018,0,null);var inst_13020__$1 = cljs.core.nth.call(null,inst_13018,1,null);var inst_13021 = (inst_13019__$1 == null);var inst_13022 = cljs.core._EQ_.call(null,inst_13020__$1,change);var inst_13023 = (inst_13021) || (inst_13022);var state_13060__$1 = (function (){var statearr_13074 = state_13060;(statearr_13074[15] = inst_13019__$1);
(statearr_13074[16] = inst_13020__$1);
return statearr_13074;
})();if(cljs.core.truth_(inst_13023))
{var statearr_13075_13117 = state_13060__$1;(statearr_13075_13117[1] = 11);
} else
{var statearr_13076_13118 = state_13060__$1;(statearr_13076_13118[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 11))
{var inst_13019 = (state_13060[15]);var inst_13025 = (inst_13019 == null);var state_13060__$1 = state_13060;if(cljs.core.truth_(inst_13025))
{var statearr_13077_13119 = state_13060__$1;(statearr_13077_13119[1] = 14);
} else
{var statearr_13078_13120 = state_13060__$1;(statearr_13078_13120[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 12))
{var inst_13034 = (state_13060[17]);var inst_13015 = (state_13060[13]);var inst_13020 = (state_13060[16]);var inst_13034__$1 = inst_13015.call(null,inst_13020);var state_13060__$1 = (function (){var statearr_13079 = state_13060;(statearr_13079[17] = inst_13034__$1);
return statearr_13079;
})();if(cljs.core.truth_(inst_13034__$1))
{var statearr_13080_13121 = state_13060__$1;(statearr_13080_13121[1] = 17);
} else
{var statearr_13081_13122 = state_13060__$1;(statearr_13081_13122[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 13))
{var inst_13056 = (state_13060[2]);var state_13060__$1 = state_13060;var statearr_13082_13123 = state_13060__$1;(statearr_13082_13123[2] = inst_13056);
(statearr_13082_13123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 14))
{var inst_13020 = (state_13060[16]);var inst_13027 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13020);var state_13060__$1 = state_13060;var statearr_13083_13124 = state_13060__$1;(statearr_13083_13124[2] = inst_13027);
(statearr_13083_13124[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 15))
{var state_13060__$1 = state_13060;var statearr_13084_13125 = state_13060__$1;(statearr_13084_13125[2] = null);
(statearr_13084_13125[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 16))
{var inst_13030 = (state_13060[2]);var inst_13031 = calc_state.call(null);var inst_13004 = inst_13031;var state_13060__$1 = (function (){var statearr_13085 = state_13060;(statearr_13085[8] = inst_13004);
(statearr_13085[18] = inst_13030);
return statearr_13085;
})();var statearr_13086_13126 = state_13060__$1;(statearr_13086_13126[2] = null);
(statearr_13086_13126[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 17))
{var inst_13034 = (state_13060[17]);var state_13060__$1 = state_13060;var statearr_13087_13127 = state_13060__$1;(statearr_13087_13127[2] = inst_13034);
(statearr_13087_13127[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 18))
{var inst_13015 = (state_13060[13]);var inst_13020 = (state_13060[16]);var inst_13014 = (state_13060[14]);var inst_13037 = cljs.core.empty_QMARK_.call(null,inst_13015);var inst_13038 = inst_13014.call(null,inst_13020);var inst_13039 = cljs.core.not.call(null,inst_13038);var inst_13040 = (inst_13037) && (inst_13039);var state_13060__$1 = state_13060;var statearr_13088_13128 = state_13060__$1;(statearr_13088_13128[2] = inst_13040);
(statearr_13088_13128[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 19))
{var inst_13042 = (state_13060[2]);var state_13060__$1 = state_13060;if(cljs.core.truth_(inst_13042))
{var statearr_13089_13129 = state_13060__$1;(statearr_13089_13129[1] = 20);
} else
{var statearr_13090_13130 = state_13060__$1;(statearr_13090_13130[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 20))
{var inst_13019 = (state_13060[15]);var state_13060__$1 = state_13060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13060__$1,23,out,inst_13019);
} else
{if((state_val_13061 === 21))
{var inst_13012 = (state_13060[12]);var inst_13004 = inst_13012;var state_13060__$1 = (function (){var statearr_13091 = state_13060;(statearr_13091[8] = inst_13004);
return statearr_13091;
})();var statearr_13092_13131 = state_13060__$1;(statearr_13092_13131[2] = null);
(statearr_13092_13131[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 22))
{var inst_13054 = (state_13060[2]);var state_13060__$1 = state_13060;var statearr_13093_13132 = state_13060__$1;(statearr_13093_13132[2] = inst_13054);
(statearr_13093_13132[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 23))
{var inst_13045 = (state_13060[2]);var state_13060__$1 = state_13060;if(cljs.core.truth_(inst_13045))
{var statearr_13094_13133 = state_13060__$1;(statearr_13094_13133[1] = 24);
} else
{var statearr_13095_13134 = state_13060__$1;(statearr_13095_13134[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 24))
{var inst_13012 = (state_13060[12]);var inst_13004 = inst_13012;var state_13060__$1 = (function (){var statearr_13096 = state_13060;(statearr_13096[8] = inst_13004);
return statearr_13096;
})();var statearr_13097_13135 = state_13060__$1;(statearr_13097_13135[2] = null);
(statearr_13097_13135[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 25))
{var state_13060__$1 = state_13060;var statearr_13098_13136 = state_13060__$1;(statearr_13098_13136[2] = null);
(statearr_13098_13136[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13061 === 26))
{var inst_13050 = (state_13060[2]);var state_13060__$1 = state_13060;var statearr_13099_13137 = state_13060__$1;(statearr_13099_13137[2] = inst_13050);
(statearr_13099_13137[1] = 22);
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
var state_machine__6824__auto____0 = (function (){var statearr_13103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13103[0] = state_machine__6824__auto__);
(statearr_13103[1] = 1);
return statearr_13103;
});
var state_machine__6824__auto____1 = (function (state_13060){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13060);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13104){if((e13104 instanceof Object))
{var ex__6827__auto__ = e13104;var statearr_13105_13138 = state_13060;(statearr_13105_13138[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13139 = state_13060;
state_13060 = G__13139;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13060){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13106 = f__6839__auto__.call(null);(statearr_13106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13107);
return statearr_13106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj13141 = {};return obj13141;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__13142_SHARP_){if(cljs.core.truth_(p1__13142_SHARP_.call(null,topic)))
{return p1__13142_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13142_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13265 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13266){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13266 = meta13266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13265.cljs$lang$type = true;
cljs.core.async.t13265.cljs$lang$ctorStr = "cljs.core.async/t13265";
cljs.core.async.t13265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13265");
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13267){var self__ = this;
var _13267__$1 = this;return self__.meta13266;
});})(mults,ensure_mult))
;
cljs.core.async.t13265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13267,meta13266__$1){var self__ = this;
var _13267__$1 = this;return (new cljs.core.async.t13265(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13266__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13265 = ((function (mults,ensure_mult){
return (function __GT_t13265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13266){return (new cljs.core.async.t13265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13266));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13265(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6838__auto___13387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13339){var state_val_13340 = (state_13339[1]);if((state_val_13340 === 1))
{var state_13339__$1 = state_13339;var statearr_13341_13388 = state_13339__$1;(statearr_13341_13388[2] = null);
(statearr_13341_13388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 2))
{var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13339__$1,4,ch);
} else
{if((state_val_13340 === 3))
{var inst_13337 = (state_13339[2]);var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13339__$1,inst_13337);
} else
{if((state_val_13340 === 4))
{var inst_13270 = (state_13339[7]);var inst_13270__$1 = (state_13339[2]);var inst_13271 = (inst_13270__$1 == null);var state_13339__$1 = (function (){var statearr_13342 = state_13339;(statearr_13342[7] = inst_13270__$1);
return statearr_13342;
})();if(cljs.core.truth_(inst_13271))
{var statearr_13343_13389 = state_13339__$1;(statearr_13343_13389[1] = 5);
} else
{var statearr_13344_13390 = state_13339__$1;(statearr_13344_13390[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 5))
{var inst_13277 = cljs.core.deref.call(null,mults);var inst_13278 = cljs.core.vals.call(null,inst_13277);var inst_13279 = cljs.core.seq.call(null,inst_13278);var inst_13280 = inst_13279;var inst_13281 = null;var inst_13282 = 0;var inst_13283 = 0;var state_13339__$1 = (function (){var statearr_13345 = state_13339;(statearr_13345[8] = inst_13282);
(statearr_13345[9] = inst_13281);
(statearr_13345[10] = inst_13283);
(statearr_13345[11] = inst_13280);
return statearr_13345;
})();var statearr_13346_13391 = state_13339__$1;(statearr_13346_13391[2] = null);
(statearr_13346_13391[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 6))
{var inst_13270 = (state_13339[7]);var inst_13318 = (state_13339[12]);var inst_13320 = (state_13339[13]);var inst_13318__$1 = topic_fn.call(null,inst_13270);var inst_13319 = cljs.core.deref.call(null,mults);var inst_13320__$1 = cljs.core.get.call(null,inst_13319,inst_13318__$1);var state_13339__$1 = (function (){var statearr_13347 = state_13339;(statearr_13347[12] = inst_13318__$1);
(statearr_13347[13] = inst_13320__$1);
return statearr_13347;
})();if(cljs.core.truth_(inst_13320__$1))
{var statearr_13348_13392 = state_13339__$1;(statearr_13348_13392[1] = 19);
} else
{var statearr_13349_13393 = state_13339__$1;(statearr_13349_13393[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 7))
{var inst_13335 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13350_13394 = state_13339__$1;(statearr_13350_13394[2] = inst_13335);
(statearr_13350_13394[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 8))
{var inst_13282 = (state_13339[8]);var inst_13283 = (state_13339[10]);var inst_13285 = (inst_13283 < inst_13282);var inst_13286 = inst_13285;var state_13339__$1 = state_13339;if(cljs.core.truth_(inst_13286))
{var statearr_13354_13395 = state_13339__$1;(statearr_13354_13395[1] = 10);
} else
{var statearr_13355_13396 = state_13339__$1;(statearr_13355_13396[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 9))
{var inst_13316 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13356_13397 = state_13339__$1;(statearr_13356_13397[2] = inst_13316);
(statearr_13356_13397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 10))
{var inst_13282 = (state_13339[8]);var inst_13281 = (state_13339[9]);var inst_13283 = (state_13339[10]);var inst_13280 = (state_13339[11]);var inst_13288 = cljs.core._nth.call(null,inst_13281,inst_13283);var inst_13289 = cljs.core.async.muxch_STAR_.call(null,inst_13288);var inst_13290 = cljs.core.async.close_BANG_.call(null,inst_13289);var inst_13291 = (inst_13283 + 1);var tmp13351 = inst_13282;var tmp13352 = inst_13281;var tmp13353 = inst_13280;var inst_13280__$1 = tmp13353;var inst_13281__$1 = tmp13352;var inst_13282__$1 = tmp13351;var inst_13283__$1 = inst_13291;var state_13339__$1 = (function (){var statearr_13357 = state_13339;(statearr_13357[14] = inst_13290);
(statearr_13357[8] = inst_13282__$1);
(statearr_13357[9] = inst_13281__$1);
(statearr_13357[10] = inst_13283__$1);
(statearr_13357[11] = inst_13280__$1);
return statearr_13357;
})();var statearr_13358_13398 = state_13339__$1;(statearr_13358_13398[2] = null);
(statearr_13358_13398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 11))
{var inst_13280 = (state_13339[11]);var inst_13294 = (state_13339[15]);var inst_13294__$1 = cljs.core.seq.call(null,inst_13280);var state_13339__$1 = (function (){var statearr_13359 = state_13339;(statearr_13359[15] = inst_13294__$1);
return statearr_13359;
})();if(inst_13294__$1)
{var statearr_13360_13399 = state_13339__$1;(statearr_13360_13399[1] = 13);
} else
{var statearr_13361_13400 = state_13339__$1;(statearr_13361_13400[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 12))
{var inst_13314 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13362_13401 = state_13339__$1;(statearr_13362_13401[2] = inst_13314);
(statearr_13362_13401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 13))
{var inst_13294 = (state_13339[15]);var inst_13296 = cljs.core.chunked_seq_QMARK_.call(null,inst_13294);var state_13339__$1 = state_13339;if(inst_13296)
{var statearr_13363_13402 = state_13339__$1;(statearr_13363_13402[1] = 16);
} else
{var statearr_13364_13403 = state_13339__$1;(statearr_13364_13403[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 14))
{var state_13339__$1 = state_13339;var statearr_13365_13404 = state_13339__$1;(statearr_13365_13404[2] = null);
(statearr_13365_13404[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 15))
{var inst_13312 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13366_13405 = state_13339__$1;(statearr_13366_13405[2] = inst_13312);
(statearr_13366_13405[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 16))
{var inst_13294 = (state_13339[15]);var inst_13298 = cljs.core.chunk_first.call(null,inst_13294);var inst_13299 = cljs.core.chunk_rest.call(null,inst_13294);var inst_13300 = cljs.core.count.call(null,inst_13298);var inst_13280 = inst_13299;var inst_13281 = inst_13298;var inst_13282 = inst_13300;var inst_13283 = 0;var state_13339__$1 = (function (){var statearr_13367 = state_13339;(statearr_13367[8] = inst_13282);
(statearr_13367[9] = inst_13281);
(statearr_13367[10] = inst_13283);
(statearr_13367[11] = inst_13280);
return statearr_13367;
})();var statearr_13368_13406 = state_13339__$1;(statearr_13368_13406[2] = null);
(statearr_13368_13406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 17))
{var inst_13294 = (state_13339[15]);var inst_13303 = cljs.core.first.call(null,inst_13294);var inst_13304 = cljs.core.async.muxch_STAR_.call(null,inst_13303);var inst_13305 = cljs.core.async.close_BANG_.call(null,inst_13304);var inst_13306 = cljs.core.next.call(null,inst_13294);var inst_13280 = inst_13306;var inst_13281 = null;var inst_13282 = 0;var inst_13283 = 0;var state_13339__$1 = (function (){var statearr_13369 = state_13339;(statearr_13369[8] = inst_13282);
(statearr_13369[16] = inst_13305);
(statearr_13369[9] = inst_13281);
(statearr_13369[10] = inst_13283);
(statearr_13369[11] = inst_13280);
return statearr_13369;
})();var statearr_13370_13407 = state_13339__$1;(statearr_13370_13407[2] = null);
(statearr_13370_13407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 18))
{var inst_13309 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13371_13408 = state_13339__$1;(statearr_13371_13408[2] = inst_13309);
(statearr_13371_13408[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 19))
{var inst_13270 = (state_13339[7]);var inst_13320 = (state_13339[13]);var inst_13322 = cljs.core.async.muxch_STAR_.call(null,inst_13320);var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13339__$1,22,inst_13322,inst_13270);
} else
{if((state_val_13340 === 20))
{var state_13339__$1 = state_13339;var statearr_13372_13409 = state_13339__$1;(statearr_13372_13409[2] = null);
(statearr_13372_13409[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 21))
{var inst_13332 = (state_13339[2]);var state_13339__$1 = (function (){var statearr_13373 = state_13339;(statearr_13373[17] = inst_13332);
return statearr_13373;
})();var statearr_13374_13410 = state_13339__$1;(statearr_13374_13410[2] = null);
(statearr_13374_13410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 22))
{var inst_13324 = (state_13339[2]);var state_13339__$1 = state_13339;if(cljs.core.truth_(inst_13324))
{var statearr_13375_13411 = state_13339__$1;(statearr_13375_13411[1] = 23);
} else
{var statearr_13376_13412 = state_13339__$1;(statearr_13376_13412[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 23))
{var state_13339__$1 = state_13339;var statearr_13377_13413 = state_13339__$1;(statearr_13377_13413[2] = null);
(statearr_13377_13413[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 24))
{var inst_13318 = (state_13339[12]);var inst_13327 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13318);var state_13339__$1 = state_13339;var statearr_13378_13414 = state_13339__$1;(statearr_13378_13414[2] = inst_13327);
(statearr_13378_13414[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 25))
{var inst_13329 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13379_13415 = state_13339__$1;(statearr_13379_13415[2] = inst_13329);
(statearr_13379_13415[1] = 21);
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
var state_machine__6824__auto____0 = (function (){var statearr_13383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13383[0] = state_machine__6824__auto__);
(statearr_13383[1] = 1);
return statearr_13383;
});
var state_machine__6824__auto____1 = (function (state_13339){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13384){if((e13384 instanceof Object))
{var ex__6827__auto__ = e13384;var statearr_13385_13416 = state_13339;(statearr_13385_13416[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13417 = state_13339;
state_13339 = G__13417;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13339){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13386 = f__6839__auto__.call(null);(statearr_13386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13387);
return statearr_13386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6838__auto___13554 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13524){var state_val_13525 = (state_13524[1]);if((state_val_13525 === 1))
{var state_13524__$1 = state_13524;var statearr_13526_13555 = state_13524__$1;(statearr_13526_13555[2] = null);
(statearr_13526_13555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 2))
{var inst_13487 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13488 = 0;var state_13524__$1 = (function (){var statearr_13527 = state_13524;(statearr_13527[7] = inst_13488);
(statearr_13527[8] = inst_13487);
return statearr_13527;
})();var statearr_13528_13556 = state_13524__$1;(statearr_13528_13556[2] = null);
(statearr_13528_13556[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 3))
{var inst_13522 = (state_13524[2]);var state_13524__$1 = state_13524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13524__$1,inst_13522);
} else
{if((state_val_13525 === 4))
{var inst_13488 = (state_13524[7]);var inst_13490 = (inst_13488 < cnt);var state_13524__$1 = state_13524;if(cljs.core.truth_(inst_13490))
{var statearr_13529_13557 = state_13524__$1;(statearr_13529_13557[1] = 6);
} else
{var statearr_13530_13558 = state_13524__$1;(statearr_13530_13558[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 5))
{var inst_13508 = (state_13524[2]);var state_13524__$1 = (function (){var statearr_13531 = state_13524;(statearr_13531[9] = inst_13508);
return statearr_13531;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13524__$1,12,dchan);
} else
{if((state_val_13525 === 6))
{var state_13524__$1 = state_13524;var statearr_13532_13559 = state_13524__$1;(statearr_13532_13559[2] = null);
(statearr_13532_13559[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 7))
{var state_13524__$1 = state_13524;var statearr_13533_13560 = state_13524__$1;(statearr_13533_13560[2] = null);
(statearr_13533_13560[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 8))
{var inst_13506 = (state_13524[2]);var state_13524__$1 = state_13524;var statearr_13534_13561 = state_13524__$1;(statearr_13534_13561[2] = inst_13506);
(statearr_13534_13561[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 9))
{var inst_13488 = (state_13524[7]);var inst_13501 = (state_13524[2]);var inst_13502 = (inst_13488 + 1);var inst_13488__$1 = inst_13502;var state_13524__$1 = (function (){var statearr_13535 = state_13524;(statearr_13535[7] = inst_13488__$1);
(statearr_13535[10] = inst_13501);
return statearr_13535;
})();var statearr_13536_13562 = state_13524__$1;(statearr_13536_13562[2] = null);
(statearr_13536_13562[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 10))
{var inst_13492 = (state_13524[2]);var inst_13493 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13524__$1 = (function (){var statearr_13537 = state_13524;(statearr_13537[11] = inst_13492);
return statearr_13537;
})();var statearr_13538_13563 = state_13524__$1;(statearr_13538_13563[2] = inst_13493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13524__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 11))
{var inst_13488 = (state_13524[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13524,10,Object,null,9);var inst_13497 = chs__$1.call(null,inst_13488);var inst_13498 = done.call(null,inst_13488);var inst_13499 = cljs.core.async.take_BANG_.call(null,inst_13497,inst_13498);var state_13524__$1 = state_13524;var statearr_13539_13564 = state_13524__$1;(statearr_13539_13564[2] = inst_13499);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13524__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 12))
{var inst_13510 = (state_13524[12]);var inst_13510__$1 = (state_13524[2]);var inst_13511 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13510__$1);var state_13524__$1 = (function (){var statearr_13540 = state_13524;(statearr_13540[12] = inst_13510__$1);
return statearr_13540;
})();if(cljs.core.truth_(inst_13511))
{var statearr_13541_13565 = state_13524__$1;(statearr_13541_13565[1] = 13);
} else
{var statearr_13542_13566 = state_13524__$1;(statearr_13542_13566[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 13))
{var inst_13513 = cljs.core.async.close_BANG_.call(null,out);var state_13524__$1 = state_13524;var statearr_13543_13567 = state_13524__$1;(statearr_13543_13567[2] = inst_13513);
(statearr_13543_13567[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 14))
{var inst_13510 = (state_13524[12]);var inst_13515 = cljs.core.apply.call(null,f,inst_13510);var state_13524__$1 = state_13524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13524__$1,16,out,inst_13515);
} else
{if((state_val_13525 === 15))
{var inst_13520 = (state_13524[2]);var state_13524__$1 = state_13524;var statearr_13544_13568 = state_13524__$1;(statearr_13544_13568[2] = inst_13520);
(statearr_13544_13568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13525 === 16))
{var inst_13517 = (state_13524[2]);var state_13524__$1 = (function (){var statearr_13545 = state_13524;(statearr_13545[13] = inst_13517);
return statearr_13545;
})();var statearr_13546_13569 = state_13524__$1;(statearr_13546_13569[2] = null);
(statearr_13546_13569[1] = 2);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_13550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13550[0] = state_machine__6824__auto__);
(statearr_13550[1] = 1);
return statearr_13550;
});
var state_machine__6824__auto____1 = (function (state_13524){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13524);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13551){if((e13551 instanceof Object))
{var ex__6827__auto__ = e13551;var statearr_13552_13570 = state_13524;(statearr_13552_13570[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13571 = state_13524;
state_13524 = G__13571;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13524){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13553 = f__6839__auto__.call(null);(statearr_13553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13554);
return statearr_13553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13655){var state_val_13656 = (state_13655[1]);if((state_val_13656 === 1))
{var inst_13626 = cljs.core.vec.call(null,chs);var inst_13627 = inst_13626;var state_13655__$1 = (function (){var statearr_13657 = state_13655;(statearr_13657[7] = inst_13627);
return statearr_13657;
})();var statearr_13658_13680 = state_13655__$1;(statearr_13658_13680[2] = null);
(statearr_13658_13680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 2))
{var inst_13627 = (state_13655[7]);var inst_13629 = cljs.core.count.call(null,inst_13627);var inst_13630 = (inst_13629 > 0);var state_13655__$1 = state_13655;if(cljs.core.truth_(inst_13630))
{var statearr_13659_13681 = state_13655__$1;(statearr_13659_13681[1] = 4);
} else
{var statearr_13660_13682 = state_13655__$1;(statearr_13660_13682[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 3))
{var inst_13653 = (state_13655[2]);var state_13655__$1 = state_13655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13655__$1,inst_13653);
} else
{if((state_val_13656 === 4))
{var inst_13627 = (state_13655[7]);var state_13655__$1 = state_13655;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13655__$1,7,inst_13627);
} else
{if((state_val_13656 === 5))
{var inst_13649 = cljs.core.async.close_BANG_.call(null,out);var state_13655__$1 = state_13655;var statearr_13661_13683 = state_13655__$1;(statearr_13661_13683[2] = inst_13649);
(statearr_13661_13683[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 6))
{var inst_13651 = (state_13655[2]);var state_13655__$1 = state_13655;var statearr_13662_13684 = state_13655__$1;(statearr_13662_13684[2] = inst_13651);
(statearr_13662_13684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 7))
{var inst_13634 = (state_13655[8]);var inst_13635 = (state_13655[9]);var inst_13634__$1 = (state_13655[2]);var inst_13635__$1 = cljs.core.nth.call(null,inst_13634__$1,0,null);var inst_13636 = cljs.core.nth.call(null,inst_13634__$1,1,null);var inst_13637 = (inst_13635__$1 == null);var state_13655__$1 = (function (){var statearr_13663 = state_13655;(statearr_13663[8] = inst_13634__$1);
(statearr_13663[9] = inst_13635__$1);
(statearr_13663[10] = inst_13636);
return statearr_13663;
})();if(cljs.core.truth_(inst_13637))
{var statearr_13664_13685 = state_13655__$1;(statearr_13664_13685[1] = 8);
} else
{var statearr_13665_13686 = state_13655__$1;(statearr_13665_13686[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 8))
{var inst_13634 = (state_13655[8]);var inst_13635 = (state_13655[9]);var inst_13636 = (state_13655[10]);var inst_13627 = (state_13655[7]);var inst_13639 = (function (){var c = inst_13636;var v = inst_13635;var vec__13632 = inst_13634;var cs = inst_13627;return ((function (c,v,vec__13632,cs,inst_13634,inst_13635,inst_13636,inst_13627,state_val_13656){
return (function (p1__13572_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13572_SHARP_);
});
;})(c,v,vec__13632,cs,inst_13634,inst_13635,inst_13636,inst_13627,state_val_13656))
})();var inst_13640 = cljs.core.filterv.call(null,inst_13639,inst_13627);var inst_13627__$1 = inst_13640;var state_13655__$1 = (function (){var statearr_13666 = state_13655;(statearr_13666[7] = inst_13627__$1);
return statearr_13666;
})();var statearr_13667_13687 = state_13655__$1;(statearr_13667_13687[2] = null);
(statearr_13667_13687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 9))
{var inst_13635 = (state_13655[9]);var state_13655__$1 = state_13655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13655__$1,11,out,inst_13635);
} else
{if((state_val_13656 === 10))
{var inst_13647 = (state_13655[2]);var state_13655__$1 = state_13655;var statearr_13669_13688 = state_13655__$1;(statearr_13669_13688[2] = inst_13647);
(statearr_13669_13688[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13656 === 11))
{var inst_13627 = (state_13655[7]);var inst_13644 = (state_13655[2]);var tmp13668 = inst_13627;var inst_13627__$1 = tmp13668;var state_13655__$1 = (function (){var statearr_13670 = state_13655;(statearr_13670[11] = inst_13644);
(statearr_13670[7] = inst_13627__$1);
return statearr_13670;
})();var statearr_13671_13689 = state_13655__$1;(statearr_13671_13689[2] = null);
(statearr_13671_13689[1] = 2);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_13675 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13675[0] = state_machine__6824__auto__);
(statearr_13675[1] = 1);
return statearr_13675;
});
var state_machine__6824__auto____1 = (function (state_13655){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13655);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13676){if((e13676 instanceof Object))
{var ex__6827__auto__ = e13676;var statearr_13677_13690 = state_13655;(statearr_13677_13690[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13691 = state_13655;
state_13655 = G__13691;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13655){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13678 = f__6839__auto__.call(null);(statearr_13678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13679);
return statearr_13678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13761){var state_val_13762 = (state_13761[1]);if((state_val_13762 === 1))
{var inst_13738 = 0;var state_13761__$1 = (function (){var statearr_13763 = state_13761;(statearr_13763[7] = inst_13738);
return statearr_13763;
})();var statearr_13764_13785 = state_13761__$1;(statearr_13764_13785[2] = null);
(statearr_13764_13785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 2))
{var inst_13738 = (state_13761[7]);var inst_13740 = (inst_13738 < n);var state_13761__$1 = state_13761;if(cljs.core.truth_(inst_13740))
{var statearr_13765_13786 = state_13761__$1;(statearr_13765_13786[1] = 4);
} else
{var statearr_13766_13787 = state_13761__$1;(statearr_13766_13787[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 3))
{var inst_13758 = (state_13761[2]);var inst_13759 = cljs.core.async.close_BANG_.call(null,out);var state_13761__$1 = (function (){var statearr_13767 = state_13761;(statearr_13767[8] = inst_13758);
return statearr_13767;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13761__$1,inst_13759);
} else
{if((state_val_13762 === 4))
{var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13761__$1,7,ch);
} else
{if((state_val_13762 === 5))
{var state_13761__$1 = state_13761;var statearr_13768_13788 = state_13761__$1;(statearr_13768_13788[2] = null);
(statearr_13768_13788[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 6))
{var inst_13756 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13769_13789 = state_13761__$1;(statearr_13769_13789[2] = inst_13756);
(statearr_13769_13789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 7))
{var inst_13743 = (state_13761[9]);var inst_13743__$1 = (state_13761[2]);var inst_13744 = (inst_13743__$1 == null);var inst_13745 = cljs.core.not.call(null,inst_13744);var state_13761__$1 = (function (){var statearr_13770 = state_13761;(statearr_13770[9] = inst_13743__$1);
return statearr_13770;
})();if(inst_13745)
{var statearr_13771_13790 = state_13761__$1;(statearr_13771_13790[1] = 8);
} else
{var statearr_13772_13791 = state_13761__$1;(statearr_13772_13791[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 8))
{var inst_13743 = (state_13761[9]);var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13761__$1,11,out,inst_13743);
} else
{if((state_val_13762 === 9))
{var state_13761__$1 = state_13761;var statearr_13773_13792 = state_13761__$1;(statearr_13773_13792[2] = null);
(statearr_13773_13792[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 10))
{var inst_13753 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13774_13793 = state_13761__$1;(statearr_13774_13793[2] = inst_13753);
(statearr_13774_13793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 11))
{var inst_13738 = (state_13761[7]);var inst_13748 = (state_13761[2]);var inst_13749 = (inst_13738 + 1);var inst_13738__$1 = inst_13749;var state_13761__$1 = (function (){var statearr_13775 = state_13761;(statearr_13775[7] = inst_13738__$1);
(statearr_13775[10] = inst_13748);
return statearr_13775;
})();var statearr_13776_13794 = state_13761__$1;(statearr_13776_13794[2] = null);
(statearr_13776_13794[1] = 2);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_13780 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13780[0] = state_machine__6824__auto__);
(statearr_13780[1] = 1);
return statearr_13780;
});
var state_machine__6824__auto____1 = (function (state_13761){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13781){if((e13781 instanceof Object))
{var ex__6827__auto__ = e13781;var statearr_13782_13795 = state_13761;(statearr_13782_13795[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13796 = state_13761;
state_13761 = G__13796;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13761){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13783 = f__6839__auto__.call(null);(statearr_13783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13784);
return statearr_13783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13893 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13868){var state_val_13869 = (state_13868[1]);if((state_val_13869 === 1))
{var inst_13845 = null;var state_13868__$1 = (function (){var statearr_13870 = state_13868;(statearr_13870[7] = inst_13845);
return statearr_13870;
})();var statearr_13871_13894 = state_13868__$1;(statearr_13871_13894[2] = null);
(statearr_13871_13894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 2))
{var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13868__$1,4,ch);
} else
{if((state_val_13869 === 3))
{var inst_13865 = (state_13868[2]);var inst_13866 = cljs.core.async.close_BANG_.call(null,out);var state_13868__$1 = (function (){var statearr_13872 = state_13868;(statearr_13872[8] = inst_13865);
return statearr_13872;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13868__$1,inst_13866);
} else
{if((state_val_13869 === 4))
{var inst_13848 = (state_13868[9]);var inst_13848__$1 = (state_13868[2]);var inst_13849 = (inst_13848__$1 == null);var inst_13850 = cljs.core.not.call(null,inst_13849);var state_13868__$1 = (function (){var statearr_13873 = state_13868;(statearr_13873[9] = inst_13848__$1);
return statearr_13873;
})();if(inst_13850)
{var statearr_13874_13895 = state_13868__$1;(statearr_13874_13895[1] = 5);
} else
{var statearr_13875_13896 = state_13868__$1;(statearr_13875_13896[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 5))
{var inst_13848 = (state_13868[9]);var inst_13845 = (state_13868[7]);var inst_13852 = cljs.core._EQ_.call(null,inst_13848,inst_13845);var state_13868__$1 = state_13868;if(inst_13852)
{var statearr_13876_13897 = state_13868__$1;(statearr_13876_13897[1] = 8);
} else
{var statearr_13877_13898 = state_13868__$1;(statearr_13877_13898[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 6))
{var state_13868__$1 = state_13868;var statearr_13879_13899 = state_13868__$1;(statearr_13879_13899[2] = null);
(statearr_13879_13899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 7))
{var inst_13863 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13880_13900 = state_13868__$1;(statearr_13880_13900[2] = inst_13863);
(statearr_13880_13900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 8))
{var inst_13845 = (state_13868[7]);var tmp13878 = inst_13845;var inst_13845__$1 = tmp13878;var state_13868__$1 = (function (){var statearr_13881 = state_13868;(statearr_13881[7] = inst_13845__$1);
return statearr_13881;
})();var statearr_13882_13901 = state_13868__$1;(statearr_13882_13901[2] = null);
(statearr_13882_13901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 9))
{var inst_13848 = (state_13868[9]);var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13868__$1,11,out,inst_13848);
} else
{if((state_val_13869 === 10))
{var inst_13860 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13883_13902 = state_13868__$1;(statearr_13883_13902[2] = inst_13860);
(statearr_13883_13902[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 11))
{var inst_13848 = (state_13868[9]);var inst_13857 = (state_13868[2]);var inst_13845 = inst_13848;var state_13868__$1 = (function (){var statearr_13884 = state_13868;(statearr_13884[10] = inst_13857);
(statearr_13884[7] = inst_13845);
return statearr_13884;
})();var statearr_13885_13903 = state_13868__$1;(statearr_13885_13903[2] = null);
(statearr_13885_13903[1] = 2);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_13889 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13889[0] = state_machine__6824__auto__);
(statearr_13889[1] = 1);
return statearr_13889;
});
var state_machine__6824__auto____1 = (function (state_13868){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13890){if((e13890 instanceof Object))
{var ex__6827__auto__ = e13890;var statearr_13891_13904 = state_13868;(statearr_13891_13904[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13905 = state_13868;
state_13868 = G__13905;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13868){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13892 = f__6839__auto__.call(null);(statearr_13892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13893);
return statearr_13892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___14040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_14010){var state_val_14011 = (state_14010[1]);if((state_val_14011 === 1))
{var inst_13973 = (new Array(n));var inst_13974 = inst_13973;var inst_13975 = 0;var state_14010__$1 = (function (){var statearr_14012 = state_14010;(statearr_14012[7] = inst_13975);
(statearr_14012[8] = inst_13974);
return statearr_14012;
})();var statearr_14013_14041 = state_14010__$1;(statearr_14013_14041[2] = null);
(statearr_14013_14041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 2))
{var state_14010__$1 = state_14010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14010__$1,4,ch);
} else
{if((state_val_14011 === 3))
{var inst_14008 = (state_14010[2]);var state_14010__$1 = state_14010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14010__$1,inst_14008);
} else
{if((state_val_14011 === 4))
{var inst_13978 = (state_14010[9]);var inst_13978__$1 = (state_14010[2]);var inst_13979 = (inst_13978__$1 == null);var inst_13980 = cljs.core.not.call(null,inst_13979);var state_14010__$1 = (function (){var statearr_14014 = state_14010;(statearr_14014[9] = inst_13978__$1);
return statearr_14014;
})();if(inst_13980)
{var statearr_14015_14042 = state_14010__$1;(statearr_14015_14042[1] = 5);
} else
{var statearr_14016_14043 = state_14010__$1;(statearr_14016_14043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 5))
{var inst_13975 = (state_14010[7]);var inst_13983 = (state_14010[10]);var inst_13978 = (state_14010[9]);var inst_13974 = (state_14010[8]);var inst_13982 = (inst_13974[inst_13975] = inst_13978);var inst_13983__$1 = (inst_13975 + 1);var inst_13984 = (inst_13983__$1 < n);var state_14010__$1 = (function (){var statearr_14017 = state_14010;(statearr_14017[10] = inst_13983__$1);
(statearr_14017[11] = inst_13982);
return statearr_14017;
})();if(cljs.core.truth_(inst_13984))
{var statearr_14018_14044 = state_14010__$1;(statearr_14018_14044[1] = 8);
} else
{var statearr_14019_14045 = state_14010__$1;(statearr_14019_14045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 6))
{var inst_13975 = (state_14010[7]);var inst_13996 = (inst_13975 > 0);var state_14010__$1 = state_14010;if(cljs.core.truth_(inst_13996))
{var statearr_14021_14046 = state_14010__$1;(statearr_14021_14046[1] = 12);
} else
{var statearr_14022_14047 = state_14010__$1;(statearr_14022_14047[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 7))
{var inst_14006 = (state_14010[2]);var state_14010__$1 = state_14010;var statearr_14023_14048 = state_14010__$1;(statearr_14023_14048[2] = inst_14006);
(statearr_14023_14048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 8))
{var inst_13983 = (state_14010[10]);var inst_13974 = (state_14010[8]);var tmp14020 = inst_13974;var inst_13974__$1 = tmp14020;var inst_13975 = inst_13983;var state_14010__$1 = (function (){var statearr_14024 = state_14010;(statearr_14024[7] = inst_13975);
(statearr_14024[8] = inst_13974__$1);
return statearr_14024;
})();var statearr_14025_14049 = state_14010__$1;(statearr_14025_14049[2] = null);
(statearr_14025_14049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 9))
{var inst_13974 = (state_14010[8]);var inst_13988 = cljs.core.vec.call(null,inst_13974);var state_14010__$1 = state_14010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14010__$1,11,out,inst_13988);
} else
{if((state_val_14011 === 10))
{var inst_13994 = (state_14010[2]);var state_14010__$1 = state_14010;var statearr_14026_14050 = state_14010__$1;(statearr_14026_14050[2] = inst_13994);
(statearr_14026_14050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 11))
{var inst_13990 = (state_14010[2]);var inst_13991 = (new Array(n));var inst_13974 = inst_13991;var inst_13975 = 0;var state_14010__$1 = (function (){var statearr_14027 = state_14010;(statearr_14027[12] = inst_13990);
(statearr_14027[7] = inst_13975);
(statearr_14027[8] = inst_13974);
return statearr_14027;
})();var statearr_14028_14051 = state_14010__$1;(statearr_14028_14051[2] = null);
(statearr_14028_14051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 12))
{var inst_13974 = (state_14010[8]);var inst_13998 = cljs.core.vec.call(null,inst_13974);var state_14010__$1 = state_14010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14010__$1,15,out,inst_13998);
} else
{if((state_val_14011 === 13))
{var state_14010__$1 = state_14010;var statearr_14029_14052 = state_14010__$1;(statearr_14029_14052[2] = null);
(statearr_14029_14052[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 14))
{var inst_14003 = (state_14010[2]);var inst_14004 = cljs.core.async.close_BANG_.call(null,out);var state_14010__$1 = (function (){var statearr_14030 = state_14010;(statearr_14030[13] = inst_14003);
return statearr_14030;
})();var statearr_14031_14053 = state_14010__$1;(statearr_14031_14053[2] = inst_14004);
(statearr_14031_14053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14011 === 15))
{var inst_14000 = (state_14010[2]);var state_14010__$1 = state_14010;var statearr_14032_14054 = state_14010__$1;(statearr_14032_14054[2] = inst_14000);
(statearr_14032_14054[1] = 14);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_14036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14036[0] = state_machine__6824__auto__);
(statearr_14036[1] = 1);
return statearr_14036;
});
var state_machine__6824__auto____1 = (function (state_14010){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_14010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e14037){if((e14037 instanceof Object))
{var ex__6827__auto__ = e14037;var statearr_14038_14055 = state_14010;(statearr_14038_14055[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14056 = state_14010;
state_14010 = G__14056;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_14010){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_14010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_14039 = f__6839__auto__.call(null);(statearr_14039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___14040);
return statearr_14039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___14199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_14169){var state_val_14170 = (state_14169[1]);if((state_val_14170 === 1))
{var inst_14128 = [];var inst_14129 = inst_14128;var inst_14130 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14169__$1 = (function (){var statearr_14171 = state_14169;(statearr_14171[7] = inst_14129);
(statearr_14171[8] = inst_14130);
return statearr_14171;
})();var statearr_14172_14200 = state_14169__$1;(statearr_14172_14200[2] = null);
(statearr_14172_14200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 2))
{var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14169__$1,4,ch);
} else
{if((state_val_14170 === 3))
{var inst_14167 = (state_14169[2]);var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14169__$1,inst_14167);
} else
{if((state_val_14170 === 4))
{var inst_14133 = (state_14169[9]);var inst_14133__$1 = (state_14169[2]);var inst_14134 = (inst_14133__$1 == null);var inst_14135 = cljs.core.not.call(null,inst_14134);var state_14169__$1 = (function (){var statearr_14173 = state_14169;(statearr_14173[9] = inst_14133__$1);
return statearr_14173;
})();if(inst_14135)
{var statearr_14174_14201 = state_14169__$1;(statearr_14174_14201[1] = 5);
} else
{var statearr_14175_14202 = state_14169__$1;(statearr_14175_14202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 5))
{var inst_14137 = (state_14169[10]);var inst_14133 = (state_14169[9]);var inst_14130 = (state_14169[8]);var inst_14137__$1 = f.call(null,inst_14133);var inst_14138 = cljs.core._EQ_.call(null,inst_14137__$1,inst_14130);var inst_14139 = cljs.core.keyword_identical_QMARK_.call(null,inst_14130,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14140 = (inst_14138) || (inst_14139);var state_14169__$1 = (function (){var statearr_14176 = state_14169;(statearr_14176[10] = inst_14137__$1);
return statearr_14176;
})();if(cljs.core.truth_(inst_14140))
{var statearr_14177_14203 = state_14169__$1;(statearr_14177_14203[1] = 8);
} else
{var statearr_14178_14204 = state_14169__$1;(statearr_14178_14204[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 6))
{var inst_14129 = (state_14169[7]);var inst_14154 = inst_14129.length;var inst_14155 = (inst_14154 > 0);var state_14169__$1 = state_14169;if(cljs.core.truth_(inst_14155))
{var statearr_14180_14205 = state_14169__$1;(statearr_14180_14205[1] = 12);
} else
{var statearr_14181_14206 = state_14169__$1;(statearr_14181_14206[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 7))
{var inst_14165 = (state_14169[2]);var state_14169__$1 = state_14169;var statearr_14182_14207 = state_14169__$1;(statearr_14182_14207[2] = inst_14165);
(statearr_14182_14207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 8))
{var inst_14129 = (state_14169[7]);var inst_14137 = (state_14169[10]);var inst_14133 = (state_14169[9]);var inst_14142 = inst_14129.push(inst_14133);var tmp14179 = inst_14129;var inst_14129__$1 = tmp14179;var inst_14130 = inst_14137;var state_14169__$1 = (function (){var statearr_14183 = state_14169;(statearr_14183[7] = inst_14129__$1);
(statearr_14183[8] = inst_14130);
(statearr_14183[11] = inst_14142);
return statearr_14183;
})();var statearr_14184_14208 = state_14169__$1;(statearr_14184_14208[2] = null);
(statearr_14184_14208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 9))
{var inst_14129 = (state_14169[7]);var inst_14145 = cljs.core.vec.call(null,inst_14129);var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14169__$1,11,out,inst_14145);
} else
{if((state_val_14170 === 10))
{var inst_14152 = (state_14169[2]);var state_14169__$1 = state_14169;var statearr_14185_14209 = state_14169__$1;(statearr_14185_14209[2] = inst_14152);
(statearr_14185_14209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 11))
{var inst_14137 = (state_14169[10]);var inst_14133 = (state_14169[9]);var inst_14147 = (state_14169[2]);var inst_14148 = [];var inst_14149 = inst_14148.push(inst_14133);var inst_14129 = inst_14148;var inst_14130 = inst_14137;var state_14169__$1 = (function (){var statearr_14186 = state_14169;(statearr_14186[7] = inst_14129);
(statearr_14186[8] = inst_14130);
(statearr_14186[12] = inst_14149);
(statearr_14186[13] = inst_14147);
return statearr_14186;
})();var statearr_14187_14210 = state_14169__$1;(statearr_14187_14210[2] = null);
(statearr_14187_14210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 12))
{var inst_14129 = (state_14169[7]);var inst_14157 = cljs.core.vec.call(null,inst_14129);var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14169__$1,15,out,inst_14157);
} else
{if((state_val_14170 === 13))
{var state_14169__$1 = state_14169;var statearr_14188_14211 = state_14169__$1;(statearr_14188_14211[2] = null);
(statearr_14188_14211[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 14))
{var inst_14162 = (state_14169[2]);var inst_14163 = cljs.core.async.close_BANG_.call(null,out);var state_14169__$1 = (function (){var statearr_14189 = state_14169;(statearr_14189[14] = inst_14162);
return statearr_14189;
})();var statearr_14190_14212 = state_14169__$1;(statearr_14190_14212[2] = inst_14163);
(statearr_14190_14212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 15))
{var inst_14159 = (state_14169[2]);var state_14169__$1 = state_14169;var statearr_14191_14213 = state_14169__$1;(statearr_14191_14213[2] = inst_14159);
(statearr_14191_14213[1] = 14);
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
});return ((function (switch__6823__auto__){
return (function() {
var state_machine__6824__auto__ = null;
var state_machine__6824__auto____0 = (function (){var statearr_14195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14195[0] = state_machine__6824__auto__);
(statearr_14195[1] = 1);
return statearr_14195;
});
var state_machine__6824__auto____1 = (function (state_14169){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_14169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e14196){if((e14196 instanceof Object))
{var ex__6827__auto__ = e14196;var statearr_14197_14214 = state_14169;(statearr_14197_14214[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14215 = state_14169;
state_14169 = G__14215;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_14169){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_14169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_14198 = f__6839__auto__.call(null);(statearr_14198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___14199);
return statearr_14198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6840__auto__);
}));
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