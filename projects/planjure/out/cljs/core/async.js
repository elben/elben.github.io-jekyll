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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t70897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70897 = (function (f,fn_handler,meta70898){
this.f = f;
this.fn_handler = fn_handler;
this.meta70898 = meta70898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70897.cljs$lang$type = true;
cljs.core.async.t70897.cljs$lang$ctorStr = "cljs.core.async/t70897";
cljs.core.async.t70897.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70897");
});
cljs.core.async.t70897.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t70897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t70897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t70897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70899){var self__ = this;
var _70899__$1 = this;return self__.meta70898;
});
cljs.core.async.t70897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70899,meta70898__$1){var self__ = this;
var _70899__$1 = this;return (new cljs.core.async.t70897(self__.f,self__.fn_handler,meta70898__$1));
});
cljs.core.async.__GT_t70897 = (function __GT_t70897(f__$1,fn_handler__$1,meta70898){return (new cljs.core.async.t70897(f__$1,fn_handler__$1,meta70898));
});
}
return (new cljs.core.async.t70897(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__70901 = buff;if(G__70901)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__70901.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__70901.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__70901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__70901);
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
{var val_70902 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_70902);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_70902);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___70903 = n;var x_70904 = 0;while(true){
if((x_70904 < n__4291__auto___70903))
{(a[x_70904] = 0);
{
var G__70905 = (x_70904 + 1);
x_70904 = G__70905;
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
var G__70906 = (i + 1);
i = G__70906;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t70910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70910 = (function (flag,alt_flag,meta70911){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta70911 = meta70911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70910.cljs$lang$type = true;
cljs.core.async.t70910.cljs$lang$ctorStr = "cljs.core.async/t70910";
cljs.core.async.t70910.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70910");
});
cljs.core.async.t70910.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t70910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t70910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t70910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70912){var self__ = this;
var _70912__$1 = this;return self__.meta70911;
});
cljs.core.async.t70910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70912,meta70911__$1){var self__ = this;
var _70912__$1 = this;return (new cljs.core.async.t70910(self__.flag,self__.alt_flag,meta70911__$1));
});
cljs.core.async.__GT_t70910 = (function __GT_t70910(flag__$1,alt_flag__$1,meta70911){return (new cljs.core.async.t70910(flag__$1,alt_flag__$1,meta70911));
});
}
return (new cljs.core.async.t70910(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t70916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70916 = (function (cb,flag,alt_handler,meta70917){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta70917 = meta70917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70916.cljs$lang$type = true;
cljs.core.async.t70916.cljs$lang$ctorStr = "cljs.core.async/t70916";
cljs.core.async.t70916.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70916");
});
cljs.core.async.t70916.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t70916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t70916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t70916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70918){var self__ = this;
var _70918__$1 = this;return self__.meta70917;
});
cljs.core.async.t70916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70918,meta70917__$1){var self__ = this;
var _70918__$1 = this;return (new cljs.core.async.t70916(self__.cb,self__.flag,self__.alt_handler,meta70917__$1));
});
cljs.core.async.__GT_t70916 = (function __GT_t70916(cb__$1,flag__$1,alt_handler__$1,meta70917){return (new cljs.core.async.t70916(cb__$1,flag__$1,alt_handler__$1,meta70917));
});
}
return (new cljs.core.async.t70916(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70919_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70919_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70920_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70920_SHARP_,port], null));
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
var G__70921 = (i + 1);
i = G__70921;
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
var alts_BANG___delegate = function (ports,p__70922){var map__70924 = p__70922;var map__70924__$1 = ((cljs.core.seq_QMARK_.call(null,map__70924))?cljs.core.apply.call(null,cljs.core.hash_map,map__70924):map__70924);var opts = map__70924__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__70922 = null;if (arguments.length > 1) {
  p__70922 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__70922);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__70925){
var ports = cljs.core.first(arglist__70925);
var p__70922 = cljs.core.rest(arglist__70925);
return alts_BANG___delegate(ports,p__70922);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t70933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70933 = (function (ch,f,map_LT_,meta70934){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta70934 = meta70934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70933.cljs$lang$type = true;
cljs.core.async.t70933.cljs$lang$ctorStr = "cljs.core.async/t70933";
cljs.core.async.t70933.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70933");
});
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t70936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70936 = (function (fn1,_,meta70934,ch,f,map_LT_,meta70937){
this.fn1 = fn1;
this._ = _;
this.meta70934 = meta70934;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta70937 = meta70937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70936.cljs$lang$type = true;
cljs.core.async.t70936.cljs$lang$ctorStr = "cljs.core.async/t70936";
cljs.core.async.t70936.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70936");
});
cljs.core.async.t70936.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t70936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t70936.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t70936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__70926_SHARP_){return f1.call(null,(((p1__70926_SHARP_ == null))?null:self__.f.call(null,p1__70926_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t70936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70938){var self__ = this;
var _70938__$1 = this;return self__.meta70937;
});
cljs.core.async.t70936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70938,meta70937__$1){var self__ = this;
var _70938__$1 = this;return (new cljs.core.async.t70936(self__.fn1,self__._,self__.meta70934,self__.ch,self__.f,self__.map_LT_,meta70937__$1));
});
cljs.core.async.__GT_t70936 = (function __GT_t70936(fn1__$1,___$2,meta70934__$1,ch__$2,f__$2,map_LT___$2,meta70937){return (new cljs.core.async.t70936(fn1__$1,___$2,meta70934__$1,ch__$2,f__$2,map_LT___$2,meta70937));
});
}
return (new cljs.core.async.t70936(fn1,___$1,self__.meta70934,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t70933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t70933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70935){var self__ = this;
var _70935__$1 = this;return self__.meta70934;
});
cljs.core.async.t70933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70935,meta70934__$1){var self__ = this;
var _70935__$1 = this;return (new cljs.core.async.t70933(self__.ch,self__.f,self__.map_LT_,meta70934__$1));
});
cljs.core.async.__GT_t70933 = (function __GT_t70933(ch__$1,f__$1,map_LT___$1,meta70934){return (new cljs.core.async.t70933(ch__$1,f__$1,map_LT___$1,meta70934));
});
}
return (new cljs.core.async.t70933(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t70942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70942 = (function (ch,f,map_GT_,meta70943){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta70943 = meta70943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70942.cljs$lang$type = true;
cljs.core.async.t70942.cljs$lang$ctorStr = "cljs.core.async/t70942";
cljs.core.async.t70942.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70942");
});
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t70942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t70942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70944){var self__ = this;
var _70944__$1 = this;return self__.meta70943;
});
cljs.core.async.t70942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70944,meta70943__$1){var self__ = this;
var _70944__$1 = this;return (new cljs.core.async.t70942(self__.ch,self__.f,self__.map_GT_,meta70943__$1));
});
cljs.core.async.__GT_t70942 = (function __GT_t70942(ch__$1,f__$1,map_GT___$1,meta70943){return (new cljs.core.async.t70942(ch__$1,f__$1,map_GT___$1,meta70943));
});
}
return (new cljs.core.async.t70942(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t70948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t70948 = (function (ch,p,filter_GT_,meta70949){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta70949 = meta70949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70948.cljs$lang$type = true;
cljs.core.async.t70948.cljs$lang$ctorStr = "cljs.core.async/t70948";
cljs.core.async.t70948.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t70948");
});
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t70948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t70948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70950){var self__ = this;
var _70950__$1 = this;return self__.meta70949;
});
cljs.core.async.t70948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70950,meta70949__$1){var self__ = this;
var _70950__$1 = this;return (new cljs.core.async.t70948(self__.ch,self__.p,self__.filter_GT_,meta70949__$1));
});
cljs.core.async.__GT_t70948 = (function __GT_t70948(ch__$1,p__$1,filter_GT___$1,meta70949){return (new cljs.core.async.t70948(ch__$1,p__$1,filter_GT___$1,meta70949));
});
}
return (new cljs.core.async.t70948(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___71033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71012){var state_val_71013 = (state_71012[1]);if((state_val_71013 === 1))
{var state_71012__$1 = state_71012;var statearr_71014_71034 = state_71012__$1;(statearr_71014_71034[2] = null);
(statearr_71014_71034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 2))
{var state_71012__$1 = state_71012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71012__$1,4,ch);
} else
{if((state_val_71013 === 3))
{var inst_71010 = (state_71012[2]);var state_71012__$1 = state_71012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71012__$1,inst_71010);
} else
{if((state_val_71013 === 4))
{var inst_70994 = (state_71012[7]);var inst_70994__$1 = (state_71012[2]);var inst_70995 = (inst_70994__$1 == null);var state_71012__$1 = (function (){var statearr_71015 = state_71012;(statearr_71015[7] = inst_70994__$1);
return statearr_71015;
})();if(cljs.core.truth_(inst_70995))
{var statearr_71016_71035 = state_71012__$1;(statearr_71016_71035[1] = 5);
} else
{var statearr_71017_71036 = state_71012__$1;(statearr_71017_71036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 5))
{var inst_70997 = cljs.core.async.close_BANG_.call(null,out);var state_71012__$1 = state_71012;var statearr_71018_71037 = state_71012__$1;(statearr_71018_71037[2] = inst_70997);
(statearr_71018_71037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 6))
{var inst_70994 = (state_71012[7]);var inst_70999 = p.call(null,inst_70994);var state_71012__$1 = state_71012;if(cljs.core.truth_(inst_70999))
{var statearr_71019_71038 = state_71012__$1;(statearr_71019_71038[1] = 8);
} else
{var statearr_71020_71039 = state_71012__$1;(statearr_71020_71039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 7))
{var inst_71008 = (state_71012[2]);var state_71012__$1 = state_71012;var statearr_71021_71040 = state_71012__$1;(statearr_71021_71040[2] = inst_71008);
(statearr_71021_71040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 8))
{var inst_70994 = (state_71012[7]);var state_71012__$1 = state_71012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71012__$1,11,out,inst_70994);
} else
{if((state_val_71013 === 9))
{var state_71012__$1 = state_71012;var statearr_71022_71041 = state_71012__$1;(statearr_71022_71041[2] = null);
(statearr_71022_71041[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 10))
{var inst_71005 = (state_71012[2]);var state_71012__$1 = (function (){var statearr_71023 = state_71012;(statearr_71023[8] = inst_71005);
return statearr_71023;
})();var statearr_71024_71042 = state_71012__$1;(statearr_71024_71042[2] = null);
(statearr_71024_71042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71013 === 11))
{var inst_71002 = (state_71012[2]);var state_71012__$1 = state_71012;var statearr_71025_71043 = state_71012__$1;(statearr_71025_71043[2] = inst_71002);
(statearr_71025_71043[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_71029 = [null,null,null,null,null,null,null,null,null];(statearr_71029[0] = state_machine__6824__auto__);
(statearr_71029[1] = 1);
return statearr_71029;
});
var state_machine__6824__auto____1 = (function (state_71012){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71030){if((e71030 instanceof Object))
{var ex__6827__auto__ = e71030;var statearr_71031_71044 = state_71012;(statearr_71031_71044[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71045 = state_71012;
state_71012 = G__71045;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71012){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71032 = f__6839__auto__.call(null);(statearr_71032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___71033);
return statearr_71032;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71211){var state_val_71212 = (state_71211[1]);if((state_val_71212 === 1))
{var state_71211__$1 = state_71211;var statearr_71213_71254 = state_71211__$1;(statearr_71213_71254[2] = null);
(statearr_71213_71254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 2))
{var state_71211__$1 = state_71211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71211__$1,4,in$);
} else
{if((state_val_71212 === 3))
{var inst_71209 = (state_71211[2]);var state_71211__$1 = state_71211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71211__$1,inst_71209);
} else
{if((state_val_71212 === 4))
{var inst_71152 = (state_71211[7]);var inst_71152__$1 = (state_71211[2]);var inst_71153 = (inst_71152__$1 == null);var state_71211__$1 = (function (){var statearr_71214 = state_71211;(statearr_71214[7] = inst_71152__$1);
return statearr_71214;
})();if(cljs.core.truth_(inst_71153))
{var statearr_71215_71255 = state_71211__$1;(statearr_71215_71255[1] = 5);
} else
{var statearr_71216_71256 = state_71211__$1;(statearr_71216_71256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 5))
{var inst_71155 = cljs.core.async.close_BANG_.call(null,out);var state_71211__$1 = state_71211;var statearr_71217_71257 = state_71211__$1;(statearr_71217_71257[2] = inst_71155);
(statearr_71217_71257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 6))
{var inst_71152 = (state_71211[7]);var inst_71161 = f.call(null,inst_71152);var inst_71162 = cljs.core.seq.call(null,inst_71161);var inst_71163 = inst_71162;var inst_71164 = null;var inst_71165 = 0;var inst_71166 = 0;var state_71211__$1 = (function (){var statearr_71218 = state_71211;(statearr_71218[8] = inst_71164);
(statearr_71218[9] = inst_71165);
(statearr_71218[10] = inst_71166);
(statearr_71218[11] = inst_71163);
return statearr_71218;
})();var statearr_71219_71258 = state_71211__$1;(statearr_71219_71258[2] = null);
(statearr_71219_71258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 7))
{var inst_71207 = (state_71211[2]);var state_71211__$1 = state_71211;var statearr_71220_71259 = state_71211__$1;(statearr_71220_71259[2] = inst_71207);
(statearr_71220_71259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 8))
{var inst_71165 = (state_71211[9]);var inst_71166 = (state_71211[10]);var inst_71168 = (inst_71166 < inst_71165);var inst_71169 = inst_71168;var state_71211__$1 = state_71211;if(cljs.core.truth_(inst_71169))
{var statearr_71221_71260 = state_71211__$1;(statearr_71221_71260[1] = 10);
} else
{var statearr_71222_71261 = state_71211__$1;(statearr_71222_71261[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 9))
{var inst_71199 = (state_71211[2]);var inst_71200 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_71211__$1 = (function (){var statearr_71223 = state_71211;(statearr_71223[12] = inst_71199);
return statearr_71223;
})();if(cljs.core.truth_(inst_71200))
{var statearr_71224_71262 = state_71211__$1;(statearr_71224_71262[1] = 21);
} else
{var statearr_71225_71263 = state_71211__$1;(statearr_71225_71263[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 10))
{var inst_71164 = (state_71211[8]);var inst_71166 = (state_71211[10]);var inst_71171 = cljs.core._nth.call(null,inst_71164,inst_71166);var state_71211__$1 = state_71211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71211__$1,13,out,inst_71171);
} else
{if((state_val_71212 === 11))
{var inst_71177 = (state_71211[13]);var inst_71163 = (state_71211[11]);var inst_71177__$1 = cljs.core.seq.call(null,inst_71163);var state_71211__$1 = (function (){var statearr_71229 = state_71211;(statearr_71229[13] = inst_71177__$1);
return statearr_71229;
})();if(inst_71177__$1)
{var statearr_71230_71264 = state_71211__$1;(statearr_71230_71264[1] = 14);
} else
{var statearr_71231_71265 = state_71211__$1;(statearr_71231_71265[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 12))
{var inst_71197 = (state_71211[2]);var state_71211__$1 = state_71211;var statearr_71232_71266 = state_71211__$1;(statearr_71232_71266[2] = inst_71197);
(statearr_71232_71266[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 13))
{var inst_71164 = (state_71211[8]);var inst_71165 = (state_71211[9]);var inst_71166 = (state_71211[10]);var inst_71163 = (state_71211[11]);var inst_71173 = (state_71211[2]);var inst_71174 = (inst_71166 + 1);var tmp71226 = inst_71164;var tmp71227 = inst_71165;var tmp71228 = inst_71163;var inst_71163__$1 = tmp71228;var inst_71164__$1 = tmp71226;var inst_71165__$1 = tmp71227;var inst_71166__$1 = inst_71174;var state_71211__$1 = (function (){var statearr_71233 = state_71211;(statearr_71233[8] = inst_71164__$1);
(statearr_71233[14] = inst_71173);
(statearr_71233[9] = inst_71165__$1);
(statearr_71233[10] = inst_71166__$1);
(statearr_71233[11] = inst_71163__$1);
return statearr_71233;
})();var statearr_71234_71267 = state_71211__$1;(statearr_71234_71267[2] = null);
(statearr_71234_71267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 14))
{var inst_71177 = (state_71211[13]);var inst_71179 = cljs.core.chunked_seq_QMARK_.call(null,inst_71177);var state_71211__$1 = state_71211;if(inst_71179)
{var statearr_71235_71268 = state_71211__$1;(statearr_71235_71268[1] = 17);
} else
{var statearr_71236_71269 = state_71211__$1;(statearr_71236_71269[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 15))
{var state_71211__$1 = state_71211;var statearr_71237_71270 = state_71211__$1;(statearr_71237_71270[2] = null);
(statearr_71237_71270[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 16))
{var inst_71195 = (state_71211[2]);var state_71211__$1 = state_71211;var statearr_71238_71271 = state_71211__$1;(statearr_71238_71271[2] = inst_71195);
(statearr_71238_71271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 17))
{var inst_71177 = (state_71211[13]);var inst_71181 = cljs.core.chunk_first.call(null,inst_71177);var inst_71182 = cljs.core.chunk_rest.call(null,inst_71177);var inst_71183 = cljs.core.count.call(null,inst_71181);var inst_71163 = inst_71182;var inst_71164 = inst_71181;var inst_71165 = inst_71183;var inst_71166 = 0;var state_71211__$1 = (function (){var statearr_71239 = state_71211;(statearr_71239[8] = inst_71164);
(statearr_71239[9] = inst_71165);
(statearr_71239[10] = inst_71166);
(statearr_71239[11] = inst_71163);
return statearr_71239;
})();var statearr_71240_71272 = state_71211__$1;(statearr_71240_71272[2] = null);
(statearr_71240_71272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 18))
{var inst_71177 = (state_71211[13]);var inst_71186 = cljs.core.first.call(null,inst_71177);var state_71211__$1 = state_71211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71211__$1,20,out,inst_71186);
} else
{if((state_val_71212 === 19))
{var inst_71192 = (state_71211[2]);var state_71211__$1 = state_71211;var statearr_71241_71273 = state_71211__$1;(statearr_71241_71273[2] = inst_71192);
(statearr_71241_71273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 20))
{var inst_71177 = (state_71211[13]);var inst_71188 = (state_71211[2]);var inst_71189 = cljs.core.next.call(null,inst_71177);var inst_71163 = inst_71189;var inst_71164 = null;var inst_71165 = 0;var inst_71166 = 0;var state_71211__$1 = (function (){var statearr_71242 = state_71211;(statearr_71242[8] = inst_71164);
(statearr_71242[9] = inst_71165);
(statearr_71242[10] = inst_71166);
(statearr_71242[11] = inst_71163);
(statearr_71242[15] = inst_71188);
return statearr_71242;
})();var statearr_71243_71274 = state_71211__$1;(statearr_71243_71274[2] = null);
(statearr_71243_71274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 21))
{var state_71211__$1 = state_71211;var statearr_71244_71275 = state_71211__$1;(statearr_71244_71275[2] = null);
(statearr_71244_71275[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 22))
{var state_71211__$1 = state_71211;var statearr_71245_71276 = state_71211__$1;(statearr_71245_71276[2] = null);
(statearr_71245_71276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71212 === 23))
{var inst_71205 = (state_71211[2]);var state_71211__$1 = state_71211;var statearr_71246_71277 = state_71211__$1;(statearr_71246_71277[2] = inst_71205);
(statearr_71246_71277[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_71250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_71250[0] = state_machine__6824__auto__);
(statearr_71250[1] = 1);
return statearr_71250;
});
var state_machine__6824__auto____1 = (function (state_71211){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71251){if((e71251 instanceof Object))
{var ex__6827__auto__ = e71251;var statearr_71252_71278 = state_71211;(statearr_71252_71278[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71279 = state_71211;
state_71211 = G__71279;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71211){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71253 = f__6839__auto__.call(null);(statearr_71253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_71253;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6838__auto___71374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71350){var state_val_71351 = (state_71350[1]);if((state_val_71351 === 1))
{var state_71350__$1 = state_71350;var statearr_71352_71375 = state_71350__$1;(statearr_71352_71375[2] = null);
(statearr_71352_71375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 2))
{var state_71350__$1 = state_71350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71350__$1,4,from);
} else
{if((state_val_71351 === 3))
{var inst_71348 = (state_71350[2]);var state_71350__$1 = state_71350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71350__$1,inst_71348);
} else
{if((state_val_71351 === 4))
{var inst_71329 = (state_71350[7]);var inst_71329__$1 = (state_71350[2]);var inst_71330 = (inst_71329__$1 == null);var state_71350__$1 = (function (){var statearr_71353 = state_71350;(statearr_71353[7] = inst_71329__$1);
return statearr_71353;
})();if(cljs.core.truth_(inst_71330))
{var statearr_71354_71376 = state_71350__$1;(statearr_71354_71376[1] = 5);
} else
{var statearr_71355_71377 = state_71350__$1;(statearr_71355_71377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 5))
{var state_71350__$1 = state_71350;if(cljs.core.truth_(close_QMARK_))
{var statearr_71356_71378 = state_71350__$1;(statearr_71356_71378[1] = 8);
} else
{var statearr_71357_71379 = state_71350__$1;(statearr_71357_71379[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 6))
{var inst_71329 = (state_71350[7]);var state_71350__$1 = state_71350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71350__$1,11,to,inst_71329);
} else
{if((state_val_71351 === 7))
{var inst_71346 = (state_71350[2]);var state_71350__$1 = state_71350;var statearr_71358_71380 = state_71350__$1;(statearr_71358_71380[2] = inst_71346);
(statearr_71358_71380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 8))
{var inst_71333 = cljs.core.async.close_BANG_.call(null,to);var state_71350__$1 = state_71350;var statearr_71359_71381 = state_71350__$1;(statearr_71359_71381[2] = inst_71333);
(statearr_71359_71381[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 9))
{var state_71350__$1 = state_71350;var statearr_71360_71382 = state_71350__$1;(statearr_71360_71382[2] = null);
(statearr_71360_71382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 10))
{var inst_71336 = (state_71350[2]);var state_71350__$1 = state_71350;var statearr_71361_71383 = state_71350__$1;(statearr_71361_71383[2] = inst_71336);
(statearr_71361_71383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 11))
{var inst_71339 = (state_71350[2]);var state_71350__$1 = state_71350;if(cljs.core.truth_(inst_71339))
{var statearr_71362_71384 = state_71350__$1;(statearr_71362_71384[1] = 12);
} else
{var statearr_71363_71385 = state_71350__$1;(statearr_71363_71385[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 12))
{var state_71350__$1 = state_71350;var statearr_71364_71386 = state_71350__$1;(statearr_71364_71386[2] = null);
(statearr_71364_71386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 13))
{var state_71350__$1 = state_71350;var statearr_71365_71387 = state_71350__$1;(statearr_71365_71387[2] = null);
(statearr_71365_71387[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71351 === 14))
{var inst_71344 = (state_71350[2]);var state_71350__$1 = state_71350;var statearr_71366_71388 = state_71350__$1;(statearr_71366_71388[2] = inst_71344);
(statearr_71366_71388[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_71370 = [null,null,null,null,null,null,null,null];(statearr_71370[0] = state_machine__6824__auto__);
(statearr_71370[1] = 1);
return statearr_71370;
});
var state_machine__6824__auto____1 = (function (state_71350){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71371){if((e71371 instanceof Object))
{var ex__6827__auto__ = e71371;var statearr_71372_71389 = state_71350;(statearr_71372_71389[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71390 = state_71350;
state_71350 = G__71390;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71350){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71373 = f__6839__auto__.call(null);(statearr_71373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___71374);
return statearr_71373;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6838__auto___71491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71466){var state_val_71467 = (state_71466[1]);if((state_val_71467 === 1))
{var state_71466__$1 = state_71466;var statearr_71468_71492 = state_71466__$1;(statearr_71468_71492[2] = null);
(statearr_71468_71492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 2))
{var state_71466__$1 = state_71466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71466__$1,4,ch);
} else
{if((state_val_71467 === 3))
{var inst_71464 = (state_71466[2]);var state_71466__$1 = state_71466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71466__$1,inst_71464);
} else
{if((state_val_71467 === 4))
{var inst_71443 = (state_71466[7]);var inst_71443__$1 = (state_71466[2]);var inst_71444 = (inst_71443__$1 == null);var state_71466__$1 = (function (){var statearr_71469 = state_71466;(statearr_71469[7] = inst_71443__$1);
return statearr_71469;
})();if(cljs.core.truth_(inst_71444))
{var statearr_71470_71493 = state_71466__$1;(statearr_71470_71493[1] = 5);
} else
{var statearr_71471_71494 = state_71466__$1;(statearr_71471_71494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 5))
{var inst_71446 = cljs.core.async.close_BANG_.call(null,tc);var inst_71447 = cljs.core.async.close_BANG_.call(null,fc);var state_71466__$1 = (function (){var statearr_71472 = state_71466;(statearr_71472[8] = inst_71446);
return statearr_71472;
})();var statearr_71473_71495 = state_71466__$1;(statearr_71473_71495[2] = inst_71447);
(statearr_71473_71495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 6))
{var inst_71443 = (state_71466[7]);var inst_71449 = p.call(null,inst_71443);var state_71466__$1 = state_71466;if(cljs.core.truth_(inst_71449))
{var statearr_71474_71496 = state_71466__$1;(statearr_71474_71496[1] = 9);
} else
{var statearr_71475_71497 = state_71466__$1;(statearr_71475_71497[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 7))
{var inst_71462 = (state_71466[2]);var state_71466__$1 = state_71466;var statearr_71476_71498 = state_71466__$1;(statearr_71476_71498[2] = inst_71462);
(statearr_71476_71498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 8))
{var inst_71455 = (state_71466[2]);var state_71466__$1 = state_71466;if(cljs.core.truth_(inst_71455))
{var statearr_71477_71499 = state_71466__$1;(statearr_71477_71499[1] = 12);
} else
{var statearr_71478_71500 = state_71466__$1;(statearr_71478_71500[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 9))
{var state_71466__$1 = state_71466;var statearr_71479_71501 = state_71466__$1;(statearr_71479_71501[2] = tc);
(statearr_71479_71501[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 10))
{var state_71466__$1 = state_71466;var statearr_71480_71502 = state_71466__$1;(statearr_71480_71502[2] = fc);
(statearr_71480_71502[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 11))
{var inst_71443 = (state_71466[7]);var inst_71453 = (state_71466[2]);var state_71466__$1 = state_71466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71466__$1,8,inst_71453,inst_71443);
} else
{if((state_val_71467 === 12))
{var state_71466__$1 = state_71466;var statearr_71481_71503 = state_71466__$1;(statearr_71481_71503[2] = null);
(statearr_71481_71503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 13))
{var state_71466__$1 = state_71466;var statearr_71482_71504 = state_71466__$1;(statearr_71482_71504[2] = null);
(statearr_71482_71504[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71467 === 14))
{var inst_71460 = (state_71466[2]);var state_71466__$1 = state_71466;var statearr_71483_71505 = state_71466__$1;(statearr_71483_71505[2] = inst_71460);
(statearr_71483_71505[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_71487 = [null,null,null,null,null,null,null,null,null];(statearr_71487[0] = state_machine__6824__auto__);
(statearr_71487[1] = 1);
return statearr_71487;
});
var state_machine__6824__auto____1 = (function (state_71466){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71488){if((e71488 instanceof Object))
{var ex__6827__auto__ = e71488;var statearr_71489_71506 = state_71466;(statearr_71489_71506[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71507 = state_71466;
state_71466 = G__71507;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71466){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71490 = f__6839__auto__.call(null);(statearr_71490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___71491);
return statearr_71490;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71554){var state_val_71555 = (state_71554[1]);if((state_val_71555 === 7))
{var inst_71550 = (state_71554[2]);var state_71554__$1 = state_71554;var statearr_71556_71572 = state_71554__$1;(statearr_71556_71572[2] = inst_71550);
(statearr_71556_71572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71555 === 6))
{var inst_71543 = (state_71554[7]);var inst_71540 = (state_71554[8]);var inst_71547 = f.call(null,inst_71540,inst_71543);var inst_71540__$1 = inst_71547;var state_71554__$1 = (function (){var statearr_71557 = state_71554;(statearr_71557[8] = inst_71540__$1);
return statearr_71557;
})();var statearr_71558_71573 = state_71554__$1;(statearr_71558_71573[2] = null);
(statearr_71558_71573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71555 === 5))
{var inst_71540 = (state_71554[8]);var state_71554__$1 = state_71554;var statearr_71559_71574 = state_71554__$1;(statearr_71559_71574[2] = inst_71540);
(statearr_71559_71574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71555 === 4))
{var inst_71543 = (state_71554[7]);var inst_71543__$1 = (state_71554[2]);var inst_71544 = (inst_71543__$1 == null);var state_71554__$1 = (function (){var statearr_71560 = state_71554;(statearr_71560[7] = inst_71543__$1);
return statearr_71560;
})();if(cljs.core.truth_(inst_71544))
{var statearr_71561_71575 = state_71554__$1;(statearr_71561_71575[1] = 5);
} else
{var statearr_71562_71576 = state_71554__$1;(statearr_71562_71576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71555 === 3))
{var inst_71552 = (state_71554[2]);var state_71554__$1 = state_71554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71554__$1,inst_71552);
} else
{if((state_val_71555 === 2))
{var state_71554__$1 = state_71554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71554__$1,4,ch);
} else
{if((state_val_71555 === 1))
{var inst_71540 = init;var state_71554__$1 = (function (){var statearr_71563 = state_71554;(statearr_71563[8] = inst_71540);
return statearr_71563;
})();var statearr_71564_71577 = state_71554__$1;(statearr_71564_71577[2] = null);
(statearr_71564_71577[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_71568 = [null,null,null,null,null,null,null,null,null];(statearr_71568[0] = state_machine__6824__auto__);
(statearr_71568[1] = 1);
return statearr_71568;
});
var state_machine__6824__auto____1 = (function (state_71554){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71554);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71569){if((e71569 instanceof Object))
{var ex__6827__auto__ = e71569;var statearr_71570_71578 = state_71554;(statearr_71570_71578[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71579 = state_71554;
state_71554 = G__71579;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71554){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71571 = f__6839__auto__.call(null);(statearr_71571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_71571;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_71653){var state_val_71654 = (state_71653[1]);if((state_val_71654 === 1))
{var inst_71629 = cljs.core.seq.call(null,coll);var inst_71630 = inst_71629;var state_71653__$1 = (function (){var statearr_71655 = state_71653;(statearr_71655[7] = inst_71630);
return statearr_71655;
})();var statearr_71656_71678 = state_71653__$1;(statearr_71656_71678[2] = null);
(statearr_71656_71678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 2))
{var inst_71630 = (state_71653[7]);var state_71653__$1 = state_71653;if(cljs.core.truth_(inst_71630))
{var statearr_71657_71679 = state_71653__$1;(statearr_71657_71679[1] = 4);
} else
{var statearr_71658_71680 = state_71653__$1;(statearr_71658_71680[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 3))
{var inst_71651 = (state_71653[2]);var state_71653__$1 = state_71653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71653__$1,inst_71651);
} else
{if((state_val_71654 === 4))
{var inst_71630 = (state_71653[7]);var inst_71633 = cljs.core.first.call(null,inst_71630);var state_71653__$1 = state_71653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71653__$1,7,ch,inst_71633);
} else
{if((state_val_71654 === 5))
{var inst_71630 = (state_71653[7]);var state_71653__$1 = state_71653;var statearr_71659_71681 = state_71653__$1;(statearr_71659_71681[2] = inst_71630);
(statearr_71659_71681[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 6))
{var inst_71638 = (state_71653[2]);var state_71653__$1 = state_71653;if(cljs.core.truth_(inst_71638))
{var statearr_71660_71682 = state_71653__$1;(statearr_71660_71682[1] = 8);
} else
{var statearr_71661_71683 = state_71653__$1;(statearr_71661_71683[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 7))
{var inst_71635 = (state_71653[2]);var state_71653__$1 = state_71653;var statearr_71662_71684 = state_71653__$1;(statearr_71662_71684[2] = inst_71635);
(statearr_71662_71684[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 8))
{var inst_71630 = (state_71653[7]);var inst_71640 = cljs.core.next.call(null,inst_71630);var inst_71630__$1 = inst_71640;var state_71653__$1 = (function (){var statearr_71663 = state_71653;(statearr_71663[7] = inst_71630__$1);
return statearr_71663;
})();var statearr_71664_71685 = state_71653__$1;(statearr_71664_71685[2] = null);
(statearr_71664_71685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 9))
{var state_71653__$1 = state_71653;if(cljs.core.truth_(close_QMARK_))
{var statearr_71665_71686 = state_71653__$1;(statearr_71665_71686[1] = 11);
} else
{var statearr_71666_71687 = state_71653__$1;(statearr_71666_71687[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 10))
{var inst_71649 = (state_71653[2]);var state_71653__$1 = state_71653;var statearr_71667_71688 = state_71653__$1;(statearr_71667_71688[2] = inst_71649);
(statearr_71667_71688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 11))
{var inst_71644 = cljs.core.async.close_BANG_.call(null,ch);var state_71653__$1 = state_71653;var statearr_71668_71689 = state_71653__$1;(statearr_71668_71689[2] = inst_71644);
(statearr_71668_71689[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 12))
{var state_71653__$1 = state_71653;var statearr_71669_71690 = state_71653__$1;(statearr_71669_71690[2] = null);
(statearr_71669_71690[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_71654 === 13))
{var inst_71647 = (state_71653[2]);var state_71653__$1 = state_71653;var statearr_71670_71691 = state_71653__$1;(statearr_71670_71691[2] = inst_71647);
(statearr_71670_71691[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_71674 = [null,null,null,null,null,null,null,null];(statearr_71674[0] = state_machine__6824__auto__);
(statearr_71674[1] = 1);
return statearr_71674;
});
var state_machine__6824__auto____1 = (function (state_71653){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_71653);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e71675){if((e71675 instanceof Object))
{var ex__6827__auto__ = e71675;var statearr_71676_71692 = state_71653;(statearr_71676_71692[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e71675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__71693 = state_71653;
state_71653 = G__71693;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_71653){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_71653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_71677 = f__6839__auto__.call(null);(statearr_71677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_71677;
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
cljs.core.async.Mux = (function (){var obj71695 = {};return obj71695;
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
cljs.core.async.Mult = (function (){var obj71697 = {};return obj71697;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t71919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t71919 = (function (cs,ch,mult,meta71920){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta71920 = meta71920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t71919.cljs$lang$type = true;
cljs.core.async.t71919.cljs$lang$ctorStr = "cljs.core.async/t71919";
cljs.core.async.t71919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t71919");
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t71919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t71919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_71921){var self__ = this;
var _71921__$1 = this;return self__.meta71920;
});})(cs))
;
cljs.core.async.t71919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_71921,meta71920__$1){var self__ = this;
var _71921__$1 = this;return (new cljs.core.async.t71919(self__.cs,self__.ch,self__.mult,meta71920__$1));
});})(cs))
;
cljs.core.async.__GT_t71919 = ((function (cs){
return (function __GT_t71919(cs__$1,ch__$1,mult__$1,meta71920){return (new cljs.core.async.t71919(cs__$1,ch__$1,mult__$1,meta71920));
});})(cs))
;
}
return (new cljs.core.async.t71919(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6838__auto___72140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_72052){var state_val_72053 = (state_72052[1]);if((state_val_72053 === 32))
{var inst_71994 = (state_72052[7]);var inst_71993 = (state_72052[8]);var inst_71995 = (state_72052[9]);var inst_71992 = (state_72052[10]);var inst_72007 = (state_72052[2]);var inst_72008 = (inst_71995 + 1);var tmp72054 = inst_71994;var tmp72055 = inst_71993;var tmp72056 = inst_71992;var inst_71992__$1 = tmp72056;var inst_71993__$1 = tmp72055;var inst_71994__$1 = tmp72054;var inst_71995__$1 = inst_72008;var state_72052__$1 = (function (){var statearr_72057 = state_72052;(statearr_72057[7] = inst_71994__$1);
(statearr_72057[8] = inst_71993__$1);
(statearr_72057[11] = inst_72007);
(statearr_72057[9] = inst_71995__$1);
(statearr_72057[10] = inst_71992__$1);
return statearr_72057;
})();var statearr_72058_72141 = state_72052__$1;(statearr_72058_72141[2] = null);
(statearr_72058_72141[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 1))
{var state_72052__$1 = state_72052;var statearr_72059_72142 = state_72052__$1;(statearr_72059_72142[2] = null);
(statearr_72059_72142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 33))
{var inst_72011 = (state_72052[12]);var inst_72013 = cljs.core.chunked_seq_QMARK_.call(null,inst_72011);var state_72052__$1 = state_72052;if(inst_72013)
{var statearr_72060_72143 = state_72052__$1;(statearr_72060_72143[1] = 36);
} else
{var statearr_72061_72144 = state_72052__$1;(statearr_72061_72144[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 2))
{var state_72052__$1 = state_72052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72052__$1,4,ch);
} else
{if((state_val_72053 === 34))
{var state_72052__$1 = state_72052;var statearr_72062_72145 = state_72052__$1;(statearr_72062_72145[2] = null);
(statearr_72062_72145[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 3))
{var inst_72050 = (state_72052[2]);var state_72052__$1 = state_72052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72052__$1,inst_72050);
} else
{if((state_val_72053 === 35))
{var inst_72034 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72063_72146 = state_72052__$1;(statearr_72063_72146[2] = inst_72034);
(statearr_72063_72146[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 4))
{var inst_71924 = (state_72052[13]);var inst_71924__$1 = (state_72052[2]);var inst_71925 = (inst_71924__$1 == null);var state_72052__$1 = (function (){var statearr_72064 = state_72052;(statearr_72064[13] = inst_71924__$1);
return statearr_72064;
})();if(cljs.core.truth_(inst_71925))
{var statearr_72065_72147 = state_72052__$1;(statearr_72065_72147[1] = 5);
} else
{var statearr_72066_72148 = state_72052__$1;(statearr_72066_72148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 36))
{var inst_72011 = (state_72052[12]);var inst_72015 = cljs.core.chunk_first.call(null,inst_72011);var inst_72016 = cljs.core.chunk_rest.call(null,inst_72011);var inst_72017 = cljs.core.count.call(null,inst_72015);var inst_71992 = inst_72016;var inst_71993 = inst_72015;var inst_71994 = inst_72017;var inst_71995 = 0;var state_72052__$1 = (function (){var statearr_72067 = state_72052;(statearr_72067[7] = inst_71994);
(statearr_72067[8] = inst_71993);
(statearr_72067[9] = inst_71995);
(statearr_72067[10] = inst_71992);
return statearr_72067;
})();var statearr_72068_72149 = state_72052__$1;(statearr_72068_72149[2] = null);
(statearr_72068_72149[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 5))
{var inst_71931 = cljs.core.deref.call(null,cs);var inst_71932 = cljs.core.seq.call(null,inst_71931);var inst_71933 = inst_71932;var inst_71934 = null;var inst_71935 = 0;var inst_71936 = 0;var state_72052__$1 = (function (){var statearr_72069 = state_72052;(statearr_72069[14] = inst_71936);
(statearr_72069[15] = inst_71935);
(statearr_72069[16] = inst_71933);
(statearr_72069[17] = inst_71934);
return statearr_72069;
})();var statearr_72070_72150 = state_72052__$1;(statearr_72070_72150[2] = null);
(statearr_72070_72150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 37))
{var inst_72011 = (state_72052[12]);var inst_72020 = (state_72052[18]);var inst_71924 = (state_72052[13]);var inst_72020__$1 = cljs.core.first.call(null,inst_72011);var inst_72021 = cljs.core.async.put_BANG_.call(null,inst_72020__$1,inst_71924,done);var state_72052__$1 = (function (){var statearr_72071 = state_72052;(statearr_72071[18] = inst_72020__$1);
return statearr_72071;
})();if(cljs.core.truth_(inst_72021))
{var statearr_72072_72151 = state_72052__$1;(statearr_72072_72151[1] = 39);
} else
{var statearr_72073_72152 = state_72052__$1;(statearr_72073_72152[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 6))
{var inst_71984 = (state_72052[19]);var inst_71983 = cljs.core.deref.call(null,cs);var inst_71984__$1 = cljs.core.keys.call(null,inst_71983);var inst_71985 = cljs.core.count.call(null,inst_71984__$1);var inst_71986 = cljs.core.reset_BANG_.call(null,dctr,inst_71985);var inst_71991 = cljs.core.seq.call(null,inst_71984__$1);var inst_71992 = inst_71991;var inst_71993 = null;var inst_71994 = 0;var inst_71995 = 0;var state_72052__$1 = (function (){var statearr_72074 = state_72052;(statearr_72074[19] = inst_71984__$1);
(statearr_72074[20] = inst_71986);
(statearr_72074[7] = inst_71994);
(statearr_72074[8] = inst_71993);
(statearr_72074[9] = inst_71995);
(statearr_72074[10] = inst_71992);
return statearr_72074;
})();var statearr_72075_72153 = state_72052__$1;(statearr_72075_72153[2] = null);
(statearr_72075_72153[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 38))
{var inst_72031 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72076_72154 = state_72052__$1;(statearr_72076_72154[2] = inst_72031);
(statearr_72076_72154[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 7))
{var inst_72048 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72077_72155 = state_72052__$1;(statearr_72077_72155[2] = inst_72048);
(statearr_72077_72155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 39))
{var state_72052__$1 = state_72052;var statearr_72078_72156 = state_72052__$1;(statearr_72078_72156[2] = null);
(statearr_72078_72156[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 8))
{var inst_71936 = (state_72052[14]);var inst_71935 = (state_72052[15]);var inst_71938 = (inst_71936 < inst_71935);var inst_71939 = inst_71938;var state_72052__$1 = state_72052;if(cljs.core.truth_(inst_71939))
{var statearr_72079_72157 = state_72052__$1;(statearr_72079_72157[1] = 10);
} else
{var statearr_72080_72158 = state_72052__$1;(statearr_72080_72158[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 40))
{var inst_72020 = (state_72052[18]);var inst_72024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_72025 = cljs.core.async.untap_STAR_.call(null,m,inst_72020);var state_72052__$1 = (function (){var statearr_72081 = state_72052;(statearr_72081[21] = inst_72024);
return statearr_72081;
})();var statearr_72082_72159 = state_72052__$1;(statearr_72082_72159[2] = inst_72025);
(statearr_72082_72159[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 9))
{var inst_71981 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72083_72160 = state_72052__$1;(statearr_72083_72160[2] = inst_71981);
(statearr_72083_72160[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 41))
{var inst_72011 = (state_72052[12]);var inst_72027 = (state_72052[2]);var inst_72028 = cljs.core.next.call(null,inst_72011);var inst_71992 = inst_72028;var inst_71993 = null;var inst_71994 = 0;var inst_71995 = 0;var state_72052__$1 = (function (){var statearr_72084 = state_72052;(statearr_72084[7] = inst_71994);
(statearr_72084[8] = inst_71993);
(statearr_72084[9] = inst_71995);
(statearr_72084[10] = inst_71992);
(statearr_72084[22] = inst_72027);
return statearr_72084;
})();var statearr_72085_72161 = state_72052__$1;(statearr_72085_72161[2] = null);
(statearr_72085_72161[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 10))
{var inst_71936 = (state_72052[14]);var inst_71934 = (state_72052[17]);var inst_71942 = cljs.core._nth.call(null,inst_71934,inst_71936);var inst_71943 = cljs.core.nth.call(null,inst_71942,0,null);var inst_71944 = cljs.core.nth.call(null,inst_71942,1,null);var state_72052__$1 = (function (){var statearr_72086 = state_72052;(statearr_72086[23] = inst_71943);
return statearr_72086;
})();if(cljs.core.truth_(inst_71944))
{var statearr_72087_72162 = state_72052__$1;(statearr_72087_72162[1] = 13);
} else
{var statearr_72088_72163 = state_72052__$1;(statearr_72088_72163[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 42))
{var state_72052__$1 = state_72052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72052__$1,45,dchan);
} else
{if((state_val_72053 === 11))
{var inst_71953 = (state_72052[24]);var inst_71933 = (state_72052[16]);var inst_71953__$1 = cljs.core.seq.call(null,inst_71933);var state_72052__$1 = (function (){var statearr_72089 = state_72052;(statearr_72089[24] = inst_71953__$1);
return statearr_72089;
})();if(inst_71953__$1)
{var statearr_72090_72164 = state_72052__$1;(statearr_72090_72164[1] = 16);
} else
{var statearr_72091_72165 = state_72052__$1;(statearr_72091_72165[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 43))
{var state_72052__$1 = state_72052;var statearr_72092_72166 = state_72052__$1;(statearr_72092_72166[2] = null);
(statearr_72092_72166[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 12))
{var inst_71979 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72093_72167 = state_72052__$1;(statearr_72093_72167[2] = inst_71979);
(statearr_72093_72167[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 44))
{var inst_72045 = (state_72052[2]);var state_72052__$1 = (function (){var statearr_72094 = state_72052;(statearr_72094[25] = inst_72045);
return statearr_72094;
})();var statearr_72095_72168 = state_72052__$1;(statearr_72095_72168[2] = null);
(statearr_72095_72168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 13))
{var inst_71943 = (state_72052[23]);var inst_71946 = cljs.core.async.close_BANG_.call(null,inst_71943);var state_72052__$1 = state_72052;var statearr_72096_72169 = state_72052__$1;(statearr_72096_72169[2] = inst_71946);
(statearr_72096_72169[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 45))
{var inst_72042 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72100_72170 = state_72052__$1;(statearr_72100_72170[2] = inst_72042);
(statearr_72100_72170[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 14))
{var state_72052__$1 = state_72052;var statearr_72101_72171 = state_72052__$1;(statearr_72101_72171[2] = null);
(statearr_72101_72171[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 15))
{var inst_71936 = (state_72052[14]);var inst_71935 = (state_72052[15]);var inst_71933 = (state_72052[16]);var inst_71934 = (state_72052[17]);var inst_71949 = (state_72052[2]);var inst_71950 = (inst_71936 + 1);var tmp72097 = inst_71935;var tmp72098 = inst_71933;var tmp72099 = inst_71934;var inst_71933__$1 = tmp72098;var inst_71934__$1 = tmp72099;var inst_71935__$1 = tmp72097;var inst_71936__$1 = inst_71950;var state_72052__$1 = (function (){var statearr_72102 = state_72052;(statearr_72102[26] = inst_71949);
(statearr_72102[14] = inst_71936__$1);
(statearr_72102[15] = inst_71935__$1);
(statearr_72102[16] = inst_71933__$1);
(statearr_72102[17] = inst_71934__$1);
return statearr_72102;
})();var statearr_72103_72172 = state_72052__$1;(statearr_72103_72172[2] = null);
(statearr_72103_72172[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 16))
{var inst_71953 = (state_72052[24]);var inst_71955 = cljs.core.chunked_seq_QMARK_.call(null,inst_71953);var state_72052__$1 = state_72052;if(inst_71955)
{var statearr_72104_72173 = state_72052__$1;(statearr_72104_72173[1] = 19);
} else
{var statearr_72105_72174 = state_72052__$1;(statearr_72105_72174[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 17))
{var state_72052__$1 = state_72052;var statearr_72106_72175 = state_72052__$1;(statearr_72106_72175[2] = null);
(statearr_72106_72175[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 18))
{var inst_71977 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72107_72176 = state_72052__$1;(statearr_72107_72176[2] = inst_71977);
(statearr_72107_72176[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 19))
{var inst_71953 = (state_72052[24]);var inst_71957 = cljs.core.chunk_first.call(null,inst_71953);var inst_71958 = cljs.core.chunk_rest.call(null,inst_71953);var inst_71959 = cljs.core.count.call(null,inst_71957);var inst_71933 = inst_71958;var inst_71934 = inst_71957;var inst_71935 = inst_71959;var inst_71936 = 0;var state_72052__$1 = (function (){var statearr_72108 = state_72052;(statearr_72108[14] = inst_71936);
(statearr_72108[15] = inst_71935);
(statearr_72108[16] = inst_71933);
(statearr_72108[17] = inst_71934);
return statearr_72108;
})();var statearr_72109_72177 = state_72052__$1;(statearr_72109_72177[2] = null);
(statearr_72109_72177[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 20))
{var inst_71953 = (state_72052[24]);var inst_71963 = cljs.core.first.call(null,inst_71953);var inst_71964 = cljs.core.nth.call(null,inst_71963,0,null);var inst_71965 = cljs.core.nth.call(null,inst_71963,1,null);var state_72052__$1 = (function (){var statearr_72110 = state_72052;(statearr_72110[27] = inst_71964);
return statearr_72110;
})();if(cljs.core.truth_(inst_71965))
{var statearr_72111_72178 = state_72052__$1;(statearr_72111_72178[1] = 22);
} else
{var statearr_72112_72179 = state_72052__$1;(statearr_72112_72179[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 21))
{var inst_71974 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72113_72180 = state_72052__$1;(statearr_72113_72180[2] = inst_71974);
(statearr_72113_72180[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 22))
{var inst_71964 = (state_72052[27]);var inst_71967 = cljs.core.async.close_BANG_.call(null,inst_71964);var state_72052__$1 = state_72052;var statearr_72114_72181 = state_72052__$1;(statearr_72114_72181[2] = inst_71967);
(statearr_72114_72181[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 23))
{var state_72052__$1 = state_72052;var statearr_72115_72182 = state_72052__$1;(statearr_72115_72182[2] = null);
(statearr_72115_72182[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 24))
{var inst_71953 = (state_72052[24]);var inst_71970 = (state_72052[2]);var inst_71971 = cljs.core.next.call(null,inst_71953);var inst_71933 = inst_71971;var inst_71934 = null;var inst_71935 = 0;var inst_71936 = 0;var state_72052__$1 = (function (){var statearr_72116 = state_72052;(statearr_72116[28] = inst_71970);
(statearr_72116[14] = inst_71936);
(statearr_72116[15] = inst_71935);
(statearr_72116[16] = inst_71933);
(statearr_72116[17] = inst_71934);
return statearr_72116;
})();var statearr_72117_72183 = state_72052__$1;(statearr_72117_72183[2] = null);
(statearr_72117_72183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 25))
{var inst_71994 = (state_72052[7]);var inst_71995 = (state_72052[9]);var inst_71997 = (inst_71995 < inst_71994);var inst_71998 = inst_71997;var state_72052__$1 = state_72052;if(cljs.core.truth_(inst_71998))
{var statearr_72118_72184 = state_72052__$1;(statearr_72118_72184[1] = 27);
} else
{var statearr_72119_72185 = state_72052__$1;(statearr_72119_72185[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 26))
{var inst_71984 = (state_72052[19]);var inst_72038 = (state_72052[2]);var inst_72039 = cljs.core.seq.call(null,inst_71984);var state_72052__$1 = (function (){var statearr_72120 = state_72052;(statearr_72120[29] = inst_72038);
return statearr_72120;
})();if(inst_72039)
{var statearr_72121_72186 = state_72052__$1;(statearr_72121_72186[1] = 42);
} else
{var statearr_72122_72187 = state_72052__$1;(statearr_72122_72187[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 27))
{var inst_71993 = (state_72052[8]);var inst_71995 = (state_72052[9]);var inst_72000 = (state_72052[30]);var inst_71924 = (state_72052[13]);var inst_72000__$1 = cljs.core._nth.call(null,inst_71993,inst_71995);var inst_72001 = cljs.core.async.put_BANG_.call(null,inst_72000__$1,inst_71924,done);var state_72052__$1 = (function (){var statearr_72123 = state_72052;(statearr_72123[30] = inst_72000__$1);
return statearr_72123;
})();if(cljs.core.truth_(inst_72001))
{var statearr_72124_72188 = state_72052__$1;(statearr_72124_72188[1] = 30);
} else
{var statearr_72125_72189 = state_72052__$1;(statearr_72125_72189[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 28))
{var inst_72011 = (state_72052[12]);var inst_71992 = (state_72052[10]);var inst_72011__$1 = cljs.core.seq.call(null,inst_71992);var state_72052__$1 = (function (){var statearr_72126 = state_72052;(statearr_72126[12] = inst_72011__$1);
return statearr_72126;
})();if(inst_72011__$1)
{var statearr_72127_72190 = state_72052__$1;(statearr_72127_72190[1] = 33);
} else
{var statearr_72128_72191 = state_72052__$1;(statearr_72128_72191[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 29))
{var inst_72036 = (state_72052[2]);var state_72052__$1 = state_72052;var statearr_72129_72192 = state_72052__$1;(statearr_72129_72192[2] = inst_72036);
(statearr_72129_72192[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 30))
{var state_72052__$1 = state_72052;var statearr_72130_72193 = state_72052__$1;(statearr_72130_72193[2] = null);
(statearr_72130_72193[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72053 === 31))
{var inst_72000 = (state_72052[30]);var inst_72004 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_72005 = cljs.core.async.untap_STAR_.call(null,m,inst_72000);var state_72052__$1 = (function (){var statearr_72131 = state_72052;(statearr_72131[31] = inst_72004);
return statearr_72131;
})();var statearr_72132_72194 = state_72052__$1;(statearr_72132_72194[2] = inst_72005);
(statearr_72132_72194[1] = 32);
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
var state_machine__6824__auto____0 = (function (){var statearr_72136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72136[0] = state_machine__6824__auto__);
(statearr_72136[1] = 1);
return statearr_72136;
});
var state_machine__6824__auto____1 = (function (state_72052){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_72052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e72137){if((e72137 instanceof Object))
{var ex__6827__auto__ = e72137;var statearr_72138_72195 = state_72052;(statearr_72138_72195[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72196 = state_72052;
state_72052 = G__72196;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_72052){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_72052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_72139 = f__6839__auto__.call(null);(statearr_72139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___72140);
return statearr_72139;
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
cljs.core.async.Mix = (function (){var obj72198 = {};return obj72198;
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
;var m = (function (){if(typeof cljs.core.async.t72318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72318 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta72319){
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
this.meta72319 = meta72319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72318.cljs$lang$type = true;
cljs.core.async.t72318.cljs$lang$ctorStr = "cljs.core.async/t72318";
cljs.core.async.t72318.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72318");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t72318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72320){var self__ = this;
var _72320__$1 = this;return self__.meta72319;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t72318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72320,meta72319__$1){var self__ = this;
var _72320__$1 = this;return (new cljs.core.async.t72318(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta72319__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t72318 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t72318(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta72319){return (new cljs.core.async.t72318(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta72319));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t72318(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6838__auto___72437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_72390){var state_val_72391 = (state_72390[1]);if((state_val_72391 === 1))
{var inst_72324 = (state_72390[7]);var inst_72324__$1 = calc_state.call(null);var inst_72325 = cljs.core.seq_QMARK_.call(null,inst_72324__$1);var state_72390__$1 = (function (){var statearr_72392 = state_72390;(statearr_72392[7] = inst_72324__$1);
return statearr_72392;
})();if(inst_72325)
{var statearr_72393_72438 = state_72390__$1;(statearr_72393_72438[1] = 2);
} else
{var statearr_72394_72439 = state_72390__$1;(statearr_72394_72439[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 2))
{var inst_72324 = (state_72390[7]);var inst_72327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72324);var state_72390__$1 = state_72390;var statearr_72395_72440 = state_72390__$1;(statearr_72395_72440[2] = inst_72327);
(statearr_72395_72440[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 3))
{var inst_72324 = (state_72390[7]);var state_72390__$1 = state_72390;var statearr_72396_72441 = state_72390__$1;(statearr_72396_72441[2] = inst_72324);
(statearr_72396_72441[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 4))
{var inst_72324 = (state_72390[7]);var inst_72330 = (state_72390[2]);var inst_72331 = cljs.core.get.call(null,inst_72330,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_72332 = cljs.core.get.call(null,inst_72330,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_72333 = cljs.core.get.call(null,inst_72330,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_72334 = inst_72324;var state_72390__$1 = (function (){var statearr_72397 = state_72390;(statearr_72397[8] = inst_72331);
(statearr_72397[9] = inst_72332);
(statearr_72397[10] = inst_72333);
(statearr_72397[11] = inst_72334);
return statearr_72397;
})();var statearr_72398_72442 = state_72390__$1;(statearr_72398_72442[2] = null);
(statearr_72398_72442[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 5))
{var inst_72334 = (state_72390[11]);var inst_72337 = cljs.core.seq_QMARK_.call(null,inst_72334);var state_72390__$1 = state_72390;if(inst_72337)
{var statearr_72399_72443 = state_72390__$1;(statearr_72399_72443[1] = 7);
} else
{var statearr_72400_72444 = state_72390__$1;(statearr_72400_72444[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 6))
{var inst_72388 = (state_72390[2]);var state_72390__$1 = state_72390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72390__$1,inst_72388);
} else
{if((state_val_72391 === 7))
{var inst_72334 = (state_72390[11]);var inst_72339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72334);var state_72390__$1 = state_72390;var statearr_72401_72445 = state_72390__$1;(statearr_72401_72445[2] = inst_72339);
(statearr_72401_72445[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 8))
{var inst_72334 = (state_72390[11]);var state_72390__$1 = state_72390;var statearr_72402_72446 = state_72390__$1;(statearr_72402_72446[2] = inst_72334);
(statearr_72402_72446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 9))
{var inst_72342 = (state_72390[12]);var inst_72342__$1 = (state_72390[2]);var inst_72343 = cljs.core.get.call(null,inst_72342__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_72344 = cljs.core.get.call(null,inst_72342__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_72345 = cljs.core.get.call(null,inst_72342__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_72390__$1 = (function (){var statearr_72403 = state_72390;(statearr_72403[12] = inst_72342__$1);
(statearr_72403[13] = inst_72344);
(statearr_72403[14] = inst_72345);
return statearr_72403;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_72390__$1,10,inst_72343);
} else
{if((state_val_72391 === 10))
{var inst_72350 = (state_72390[15]);var inst_72349 = (state_72390[16]);var inst_72348 = (state_72390[2]);var inst_72349__$1 = cljs.core.nth.call(null,inst_72348,0,null);var inst_72350__$1 = cljs.core.nth.call(null,inst_72348,1,null);var inst_72351 = (inst_72349__$1 == null);var inst_72352 = cljs.core._EQ_.call(null,inst_72350__$1,change);var inst_72353 = (inst_72351) || (inst_72352);var state_72390__$1 = (function (){var statearr_72404 = state_72390;(statearr_72404[15] = inst_72350__$1);
(statearr_72404[16] = inst_72349__$1);
return statearr_72404;
})();if(cljs.core.truth_(inst_72353))
{var statearr_72405_72447 = state_72390__$1;(statearr_72405_72447[1] = 11);
} else
{var statearr_72406_72448 = state_72390__$1;(statearr_72406_72448[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 11))
{var inst_72349 = (state_72390[16]);var inst_72355 = (inst_72349 == null);var state_72390__$1 = state_72390;if(cljs.core.truth_(inst_72355))
{var statearr_72407_72449 = state_72390__$1;(statearr_72407_72449[1] = 14);
} else
{var statearr_72408_72450 = state_72390__$1;(statearr_72408_72450[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 12))
{var inst_72350 = (state_72390[15]);var inst_72364 = (state_72390[17]);var inst_72345 = (state_72390[14]);var inst_72364__$1 = inst_72345.call(null,inst_72350);var state_72390__$1 = (function (){var statearr_72409 = state_72390;(statearr_72409[17] = inst_72364__$1);
return statearr_72409;
})();if(cljs.core.truth_(inst_72364__$1))
{var statearr_72410_72451 = state_72390__$1;(statearr_72410_72451[1] = 17);
} else
{var statearr_72411_72452 = state_72390__$1;(statearr_72411_72452[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 13))
{var inst_72386 = (state_72390[2]);var state_72390__$1 = state_72390;var statearr_72412_72453 = state_72390__$1;(statearr_72412_72453[2] = inst_72386);
(statearr_72412_72453[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 14))
{var inst_72350 = (state_72390[15]);var inst_72357 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_72350);var state_72390__$1 = state_72390;var statearr_72413_72454 = state_72390__$1;(statearr_72413_72454[2] = inst_72357);
(statearr_72413_72454[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 15))
{var state_72390__$1 = state_72390;var statearr_72414_72455 = state_72390__$1;(statearr_72414_72455[2] = null);
(statearr_72414_72455[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 16))
{var inst_72360 = (state_72390[2]);var inst_72361 = calc_state.call(null);var inst_72334 = inst_72361;var state_72390__$1 = (function (){var statearr_72415 = state_72390;(statearr_72415[11] = inst_72334);
(statearr_72415[18] = inst_72360);
return statearr_72415;
})();var statearr_72416_72456 = state_72390__$1;(statearr_72416_72456[2] = null);
(statearr_72416_72456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 17))
{var inst_72364 = (state_72390[17]);var state_72390__$1 = state_72390;var statearr_72417_72457 = state_72390__$1;(statearr_72417_72457[2] = inst_72364);
(statearr_72417_72457[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 18))
{var inst_72350 = (state_72390[15]);var inst_72344 = (state_72390[13]);var inst_72345 = (state_72390[14]);var inst_72367 = cljs.core.empty_QMARK_.call(null,inst_72345);var inst_72368 = inst_72344.call(null,inst_72350);var inst_72369 = cljs.core.not.call(null,inst_72368);var inst_72370 = (inst_72367) && (inst_72369);var state_72390__$1 = state_72390;var statearr_72418_72458 = state_72390__$1;(statearr_72418_72458[2] = inst_72370);
(statearr_72418_72458[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 19))
{var inst_72372 = (state_72390[2]);var state_72390__$1 = state_72390;if(cljs.core.truth_(inst_72372))
{var statearr_72419_72459 = state_72390__$1;(statearr_72419_72459[1] = 20);
} else
{var statearr_72420_72460 = state_72390__$1;(statearr_72420_72460[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 20))
{var inst_72349 = (state_72390[16]);var state_72390__$1 = state_72390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72390__$1,23,out,inst_72349);
} else
{if((state_val_72391 === 21))
{var inst_72342 = (state_72390[12]);var inst_72334 = inst_72342;var state_72390__$1 = (function (){var statearr_72421 = state_72390;(statearr_72421[11] = inst_72334);
return statearr_72421;
})();var statearr_72422_72461 = state_72390__$1;(statearr_72422_72461[2] = null);
(statearr_72422_72461[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 22))
{var inst_72384 = (state_72390[2]);var state_72390__$1 = state_72390;var statearr_72423_72462 = state_72390__$1;(statearr_72423_72462[2] = inst_72384);
(statearr_72423_72462[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 23))
{var inst_72375 = (state_72390[2]);var state_72390__$1 = state_72390;if(cljs.core.truth_(inst_72375))
{var statearr_72424_72463 = state_72390__$1;(statearr_72424_72463[1] = 24);
} else
{var statearr_72425_72464 = state_72390__$1;(statearr_72425_72464[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 24))
{var inst_72342 = (state_72390[12]);var inst_72334 = inst_72342;var state_72390__$1 = (function (){var statearr_72426 = state_72390;(statearr_72426[11] = inst_72334);
return statearr_72426;
})();var statearr_72427_72465 = state_72390__$1;(statearr_72427_72465[2] = null);
(statearr_72427_72465[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 25))
{var state_72390__$1 = state_72390;var statearr_72428_72466 = state_72390__$1;(statearr_72428_72466[2] = null);
(statearr_72428_72466[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72391 === 26))
{var inst_72380 = (state_72390[2]);var state_72390__$1 = state_72390;var statearr_72429_72467 = state_72390__$1;(statearr_72429_72467[2] = inst_72380);
(statearr_72429_72467[1] = 22);
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
var state_machine__6824__auto____0 = (function (){var statearr_72433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72433[0] = state_machine__6824__auto__);
(statearr_72433[1] = 1);
return statearr_72433;
});
var state_machine__6824__auto____1 = (function (state_72390){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_72390);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e72434){if((e72434 instanceof Object))
{var ex__6827__auto__ = e72434;var statearr_72435_72468 = state_72390;(statearr_72435_72468[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72469 = state_72390;
state_72390 = G__72469;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_72390){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_72390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_72436 = f__6839__auto__.call(null);(statearr_72436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___72437);
return statearr_72436;
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
cljs.core.async.Pub = (function (){var obj72471 = {};return obj72471;
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
return (function (p1__72472_SHARP_){if(cljs.core.truth_(p1__72472_SHARP_.call(null,topic)))
{return p1__72472_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__72472_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t72595 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72595 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta72596){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta72596 = meta72596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72595.cljs$lang$type = true;
cljs.core.async.t72595.cljs$lang$ctorStr = "cljs.core.async/t72595";
cljs.core.async.t72595.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72595");
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t72595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t72595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_72597){var self__ = this;
var _72597__$1 = this;return self__.meta72596;
});})(mults,ensure_mult))
;
cljs.core.async.t72595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_72597,meta72596__$1){var self__ = this;
var _72597__$1 = this;return (new cljs.core.async.t72595(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta72596__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t72595 = ((function (mults,ensure_mult){
return (function __GT_t72595(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta72596){return (new cljs.core.async.t72595(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta72596));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t72595(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6838__auto___72717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_72669){var state_val_72670 = (state_72669[1]);if((state_val_72670 === 1))
{var state_72669__$1 = state_72669;var statearr_72671_72718 = state_72669__$1;(statearr_72671_72718[2] = null);
(statearr_72671_72718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 2))
{var state_72669__$1 = state_72669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72669__$1,4,ch);
} else
{if((state_val_72670 === 3))
{var inst_72667 = (state_72669[2]);var state_72669__$1 = state_72669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72669__$1,inst_72667);
} else
{if((state_val_72670 === 4))
{var inst_72600 = (state_72669[7]);var inst_72600__$1 = (state_72669[2]);var inst_72601 = (inst_72600__$1 == null);var state_72669__$1 = (function (){var statearr_72672 = state_72669;(statearr_72672[7] = inst_72600__$1);
return statearr_72672;
})();if(cljs.core.truth_(inst_72601))
{var statearr_72673_72719 = state_72669__$1;(statearr_72673_72719[1] = 5);
} else
{var statearr_72674_72720 = state_72669__$1;(statearr_72674_72720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 5))
{var inst_72607 = cljs.core.deref.call(null,mults);var inst_72608 = cljs.core.vals.call(null,inst_72607);var inst_72609 = cljs.core.seq.call(null,inst_72608);var inst_72610 = inst_72609;var inst_72611 = null;var inst_72612 = 0;var inst_72613 = 0;var state_72669__$1 = (function (){var statearr_72675 = state_72669;(statearr_72675[8] = inst_72610);
(statearr_72675[9] = inst_72612);
(statearr_72675[10] = inst_72611);
(statearr_72675[11] = inst_72613);
return statearr_72675;
})();var statearr_72676_72721 = state_72669__$1;(statearr_72676_72721[2] = null);
(statearr_72676_72721[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 6))
{var inst_72600 = (state_72669[7]);var inst_72648 = (state_72669[12]);var inst_72650 = (state_72669[13]);var inst_72648__$1 = topic_fn.call(null,inst_72600);var inst_72649 = cljs.core.deref.call(null,mults);var inst_72650__$1 = cljs.core.get.call(null,inst_72649,inst_72648__$1);var state_72669__$1 = (function (){var statearr_72677 = state_72669;(statearr_72677[12] = inst_72648__$1);
(statearr_72677[13] = inst_72650__$1);
return statearr_72677;
})();if(cljs.core.truth_(inst_72650__$1))
{var statearr_72678_72722 = state_72669__$1;(statearr_72678_72722[1] = 19);
} else
{var statearr_72679_72723 = state_72669__$1;(statearr_72679_72723[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 7))
{var inst_72665 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72680_72724 = state_72669__$1;(statearr_72680_72724[2] = inst_72665);
(statearr_72680_72724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 8))
{var inst_72612 = (state_72669[9]);var inst_72613 = (state_72669[11]);var inst_72615 = (inst_72613 < inst_72612);var inst_72616 = inst_72615;var state_72669__$1 = state_72669;if(cljs.core.truth_(inst_72616))
{var statearr_72684_72725 = state_72669__$1;(statearr_72684_72725[1] = 10);
} else
{var statearr_72685_72726 = state_72669__$1;(statearr_72685_72726[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 9))
{var inst_72646 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72686_72727 = state_72669__$1;(statearr_72686_72727[2] = inst_72646);
(statearr_72686_72727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 10))
{var inst_72610 = (state_72669[8]);var inst_72612 = (state_72669[9]);var inst_72611 = (state_72669[10]);var inst_72613 = (state_72669[11]);var inst_72618 = cljs.core._nth.call(null,inst_72611,inst_72613);var inst_72619 = cljs.core.async.muxch_STAR_.call(null,inst_72618);var inst_72620 = cljs.core.async.close_BANG_.call(null,inst_72619);var inst_72621 = (inst_72613 + 1);var tmp72681 = inst_72610;var tmp72682 = inst_72612;var tmp72683 = inst_72611;var inst_72610__$1 = tmp72681;var inst_72611__$1 = tmp72683;var inst_72612__$1 = tmp72682;var inst_72613__$1 = inst_72621;var state_72669__$1 = (function (){var statearr_72687 = state_72669;(statearr_72687[8] = inst_72610__$1);
(statearr_72687[9] = inst_72612__$1);
(statearr_72687[10] = inst_72611__$1);
(statearr_72687[11] = inst_72613__$1);
(statearr_72687[14] = inst_72620);
return statearr_72687;
})();var statearr_72688_72728 = state_72669__$1;(statearr_72688_72728[2] = null);
(statearr_72688_72728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 11))
{var inst_72610 = (state_72669[8]);var inst_72624 = (state_72669[15]);var inst_72624__$1 = cljs.core.seq.call(null,inst_72610);var state_72669__$1 = (function (){var statearr_72689 = state_72669;(statearr_72689[15] = inst_72624__$1);
return statearr_72689;
})();if(inst_72624__$1)
{var statearr_72690_72729 = state_72669__$1;(statearr_72690_72729[1] = 13);
} else
{var statearr_72691_72730 = state_72669__$1;(statearr_72691_72730[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 12))
{var inst_72644 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72692_72731 = state_72669__$1;(statearr_72692_72731[2] = inst_72644);
(statearr_72692_72731[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 13))
{var inst_72624 = (state_72669[15]);var inst_72626 = cljs.core.chunked_seq_QMARK_.call(null,inst_72624);var state_72669__$1 = state_72669;if(inst_72626)
{var statearr_72693_72732 = state_72669__$1;(statearr_72693_72732[1] = 16);
} else
{var statearr_72694_72733 = state_72669__$1;(statearr_72694_72733[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 14))
{var state_72669__$1 = state_72669;var statearr_72695_72734 = state_72669__$1;(statearr_72695_72734[2] = null);
(statearr_72695_72734[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 15))
{var inst_72642 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72696_72735 = state_72669__$1;(statearr_72696_72735[2] = inst_72642);
(statearr_72696_72735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 16))
{var inst_72624 = (state_72669[15]);var inst_72628 = cljs.core.chunk_first.call(null,inst_72624);var inst_72629 = cljs.core.chunk_rest.call(null,inst_72624);var inst_72630 = cljs.core.count.call(null,inst_72628);var inst_72610 = inst_72629;var inst_72611 = inst_72628;var inst_72612 = inst_72630;var inst_72613 = 0;var state_72669__$1 = (function (){var statearr_72697 = state_72669;(statearr_72697[8] = inst_72610);
(statearr_72697[9] = inst_72612);
(statearr_72697[10] = inst_72611);
(statearr_72697[11] = inst_72613);
return statearr_72697;
})();var statearr_72698_72736 = state_72669__$1;(statearr_72698_72736[2] = null);
(statearr_72698_72736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 17))
{var inst_72624 = (state_72669[15]);var inst_72633 = cljs.core.first.call(null,inst_72624);var inst_72634 = cljs.core.async.muxch_STAR_.call(null,inst_72633);var inst_72635 = cljs.core.async.close_BANG_.call(null,inst_72634);var inst_72636 = cljs.core.next.call(null,inst_72624);var inst_72610 = inst_72636;var inst_72611 = null;var inst_72612 = 0;var inst_72613 = 0;var state_72669__$1 = (function (){var statearr_72699 = state_72669;(statearr_72699[16] = inst_72635);
(statearr_72699[8] = inst_72610);
(statearr_72699[9] = inst_72612);
(statearr_72699[10] = inst_72611);
(statearr_72699[11] = inst_72613);
return statearr_72699;
})();var statearr_72700_72737 = state_72669__$1;(statearr_72700_72737[2] = null);
(statearr_72700_72737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 18))
{var inst_72639 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72701_72738 = state_72669__$1;(statearr_72701_72738[2] = inst_72639);
(statearr_72701_72738[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 19))
{var inst_72600 = (state_72669[7]);var inst_72650 = (state_72669[13]);var inst_72652 = cljs.core.async.muxch_STAR_.call(null,inst_72650);var state_72669__$1 = state_72669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72669__$1,22,inst_72652,inst_72600);
} else
{if((state_val_72670 === 20))
{var state_72669__$1 = state_72669;var statearr_72702_72739 = state_72669__$1;(statearr_72702_72739[2] = null);
(statearr_72702_72739[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 21))
{var inst_72662 = (state_72669[2]);var state_72669__$1 = (function (){var statearr_72703 = state_72669;(statearr_72703[17] = inst_72662);
return statearr_72703;
})();var statearr_72704_72740 = state_72669__$1;(statearr_72704_72740[2] = null);
(statearr_72704_72740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 22))
{var inst_72654 = (state_72669[2]);var state_72669__$1 = state_72669;if(cljs.core.truth_(inst_72654))
{var statearr_72705_72741 = state_72669__$1;(statearr_72705_72741[1] = 23);
} else
{var statearr_72706_72742 = state_72669__$1;(statearr_72706_72742[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 23))
{var state_72669__$1 = state_72669;var statearr_72707_72743 = state_72669__$1;(statearr_72707_72743[2] = null);
(statearr_72707_72743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 24))
{var inst_72648 = (state_72669[12]);var inst_72657 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_72648);var state_72669__$1 = state_72669;var statearr_72708_72744 = state_72669__$1;(statearr_72708_72744[2] = inst_72657);
(statearr_72708_72744[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72670 === 25))
{var inst_72659 = (state_72669[2]);var state_72669__$1 = state_72669;var statearr_72709_72745 = state_72669__$1;(statearr_72709_72745[2] = inst_72659);
(statearr_72709_72745[1] = 21);
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
var state_machine__6824__auto____0 = (function (){var statearr_72713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72713[0] = state_machine__6824__auto__);
(statearr_72713[1] = 1);
return statearr_72713;
});
var state_machine__6824__auto____1 = (function (state_72669){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_72669);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e72714){if((e72714 instanceof Object))
{var ex__6827__auto__ = e72714;var statearr_72715_72746 = state_72669;(statearr_72715_72746[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72747 = state_72669;
state_72669 = G__72747;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_72669){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_72669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_72716 = f__6839__auto__.call(null);(statearr_72716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___72717);
return statearr_72716;
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
,cljs.core.range.call(null,cnt));var c__6838__auto___72884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_72854){var state_val_72855 = (state_72854[1]);if((state_val_72855 === 1))
{var state_72854__$1 = state_72854;var statearr_72856_72885 = state_72854__$1;(statearr_72856_72885[2] = null);
(statearr_72856_72885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 2))
{var inst_72817 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_72818 = 0;var state_72854__$1 = (function (){var statearr_72857 = state_72854;(statearr_72857[7] = inst_72818);
(statearr_72857[8] = inst_72817);
return statearr_72857;
})();var statearr_72858_72886 = state_72854__$1;(statearr_72858_72886[2] = null);
(statearr_72858_72886[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 3))
{var inst_72852 = (state_72854[2]);var state_72854__$1 = state_72854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72854__$1,inst_72852);
} else
{if((state_val_72855 === 4))
{var inst_72818 = (state_72854[7]);var inst_72820 = (inst_72818 < cnt);var state_72854__$1 = state_72854;if(cljs.core.truth_(inst_72820))
{var statearr_72859_72887 = state_72854__$1;(statearr_72859_72887[1] = 6);
} else
{var statearr_72860_72888 = state_72854__$1;(statearr_72860_72888[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 5))
{var inst_72838 = (state_72854[2]);var state_72854__$1 = (function (){var statearr_72861 = state_72854;(statearr_72861[9] = inst_72838);
return statearr_72861;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72854__$1,12,dchan);
} else
{if((state_val_72855 === 6))
{var state_72854__$1 = state_72854;var statearr_72862_72889 = state_72854__$1;(statearr_72862_72889[2] = null);
(statearr_72862_72889[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 7))
{var state_72854__$1 = state_72854;var statearr_72863_72890 = state_72854__$1;(statearr_72863_72890[2] = null);
(statearr_72863_72890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 8))
{var inst_72836 = (state_72854[2]);var state_72854__$1 = state_72854;var statearr_72864_72891 = state_72854__$1;(statearr_72864_72891[2] = inst_72836);
(statearr_72864_72891[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 9))
{var inst_72818 = (state_72854[7]);var inst_72831 = (state_72854[2]);var inst_72832 = (inst_72818 + 1);var inst_72818__$1 = inst_72832;var state_72854__$1 = (function (){var statearr_72865 = state_72854;(statearr_72865[10] = inst_72831);
(statearr_72865[7] = inst_72818__$1);
return statearr_72865;
})();var statearr_72866_72892 = state_72854__$1;(statearr_72866_72892[2] = null);
(statearr_72866_72892[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 10))
{var inst_72822 = (state_72854[2]);var inst_72823 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_72854__$1 = (function (){var statearr_72867 = state_72854;(statearr_72867[11] = inst_72822);
return statearr_72867;
})();var statearr_72868_72893 = state_72854__$1;(statearr_72868_72893[2] = inst_72823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72854__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 11))
{var inst_72818 = (state_72854[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72854,10,Object,null,9);var inst_72827 = chs__$1.call(null,inst_72818);var inst_72828 = done.call(null,inst_72818);var inst_72829 = cljs.core.async.take_BANG_.call(null,inst_72827,inst_72828);var state_72854__$1 = state_72854;var statearr_72869_72894 = state_72854__$1;(statearr_72869_72894[2] = inst_72829);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72854__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 12))
{var inst_72840 = (state_72854[12]);var inst_72840__$1 = (state_72854[2]);var inst_72841 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_72840__$1);var state_72854__$1 = (function (){var statearr_72870 = state_72854;(statearr_72870[12] = inst_72840__$1);
return statearr_72870;
})();if(cljs.core.truth_(inst_72841))
{var statearr_72871_72895 = state_72854__$1;(statearr_72871_72895[1] = 13);
} else
{var statearr_72872_72896 = state_72854__$1;(statearr_72872_72896[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 13))
{var inst_72843 = cljs.core.async.close_BANG_.call(null,out);var state_72854__$1 = state_72854;var statearr_72873_72897 = state_72854__$1;(statearr_72873_72897[2] = inst_72843);
(statearr_72873_72897[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 14))
{var inst_72840 = (state_72854[12]);var inst_72845 = cljs.core.apply.call(null,f,inst_72840);var state_72854__$1 = state_72854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72854__$1,16,out,inst_72845);
} else
{if((state_val_72855 === 15))
{var inst_72850 = (state_72854[2]);var state_72854__$1 = state_72854;var statearr_72874_72898 = state_72854__$1;(statearr_72874_72898[2] = inst_72850);
(statearr_72874_72898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72855 === 16))
{var inst_72847 = (state_72854[2]);var state_72854__$1 = (function (){var statearr_72875 = state_72854;(statearr_72875[13] = inst_72847);
return statearr_72875;
})();var statearr_72876_72899 = state_72854__$1;(statearr_72876_72899[2] = null);
(statearr_72876_72899[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_72880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72880[0] = state_machine__6824__auto__);
(statearr_72880[1] = 1);
return statearr_72880;
});
var state_machine__6824__auto____1 = (function (state_72854){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_72854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e72881){if((e72881 instanceof Object))
{var ex__6827__auto__ = e72881;var statearr_72882_72900 = state_72854;(statearr_72882_72900[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72901 = state_72854;
state_72854 = G__72901;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_72854){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_72854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_72883 = f__6839__auto__.call(null);(statearr_72883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___72884);
return statearr_72883;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___73009 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_72985){var state_val_72986 = (state_72985[1]);if((state_val_72986 === 1))
{var inst_72956 = cljs.core.vec.call(null,chs);var inst_72957 = inst_72956;var state_72985__$1 = (function (){var statearr_72987 = state_72985;(statearr_72987[7] = inst_72957);
return statearr_72987;
})();var statearr_72988_73010 = state_72985__$1;(statearr_72988_73010[2] = null);
(statearr_72988_73010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 2))
{var inst_72957 = (state_72985[7]);var inst_72959 = cljs.core.count.call(null,inst_72957);var inst_72960 = (inst_72959 > 0);var state_72985__$1 = state_72985;if(cljs.core.truth_(inst_72960))
{var statearr_72989_73011 = state_72985__$1;(statearr_72989_73011[1] = 4);
} else
{var statearr_72990_73012 = state_72985__$1;(statearr_72990_73012[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 3))
{var inst_72983 = (state_72985[2]);var state_72985__$1 = state_72985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72985__$1,inst_72983);
} else
{if((state_val_72986 === 4))
{var inst_72957 = (state_72985[7]);var state_72985__$1 = state_72985;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_72985__$1,7,inst_72957);
} else
{if((state_val_72986 === 5))
{var inst_72979 = cljs.core.async.close_BANG_.call(null,out);var state_72985__$1 = state_72985;var statearr_72991_73013 = state_72985__$1;(statearr_72991_73013[2] = inst_72979);
(statearr_72991_73013[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 6))
{var inst_72981 = (state_72985[2]);var state_72985__$1 = state_72985;var statearr_72992_73014 = state_72985__$1;(statearr_72992_73014[2] = inst_72981);
(statearr_72992_73014[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 7))
{var inst_72964 = (state_72985[8]);var inst_72965 = (state_72985[9]);var inst_72964__$1 = (state_72985[2]);var inst_72965__$1 = cljs.core.nth.call(null,inst_72964__$1,0,null);var inst_72966 = cljs.core.nth.call(null,inst_72964__$1,1,null);var inst_72967 = (inst_72965__$1 == null);var state_72985__$1 = (function (){var statearr_72993 = state_72985;(statearr_72993[8] = inst_72964__$1);
(statearr_72993[9] = inst_72965__$1);
(statearr_72993[10] = inst_72966);
return statearr_72993;
})();if(cljs.core.truth_(inst_72967))
{var statearr_72994_73015 = state_72985__$1;(statearr_72994_73015[1] = 8);
} else
{var statearr_72995_73016 = state_72985__$1;(statearr_72995_73016[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 8))
{var inst_72957 = (state_72985[7]);var inst_72964 = (state_72985[8]);var inst_72965 = (state_72985[9]);var inst_72966 = (state_72985[10]);var inst_72969 = (function (){var c = inst_72966;var v = inst_72965;var vec__72962 = inst_72964;var cs = inst_72957;return ((function (c,v,vec__72962,cs,inst_72957,inst_72964,inst_72965,inst_72966,state_val_72986){
return (function (p1__72902_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__72902_SHARP_);
});
;})(c,v,vec__72962,cs,inst_72957,inst_72964,inst_72965,inst_72966,state_val_72986))
})();var inst_72970 = cljs.core.filterv.call(null,inst_72969,inst_72957);var inst_72957__$1 = inst_72970;var state_72985__$1 = (function (){var statearr_72996 = state_72985;(statearr_72996[7] = inst_72957__$1);
return statearr_72996;
})();var statearr_72997_73017 = state_72985__$1;(statearr_72997_73017[2] = null);
(statearr_72997_73017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 9))
{var inst_72965 = (state_72985[9]);var state_72985__$1 = state_72985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72985__$1,11,out,inst_72965);
} else
{if((state_val_72986 === 10))
{var inst_72977 = (state_72985[2]);var state_72985__$1 = state_72985;var statearr_72999_73018 = state_72985__$1;(statearr_72999_73018[2] = inst_72977);
(statearr_72999_73018[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72986 === 11))
{var inst_72957 = (state_72985[7]);var inst_72974 = (state_72985[2]);var tmp72998 = inst_72957;var inst_72957__$1 = tmp72998;var state_72985__$1 = (function (){var statearr_73000 = state_72985;(statearr_73000[7] = inst_72957__$1);
(statearr_73000[11] = inst_72974);
return statearr_73000;
})();var statearr_73001_73019 = state_72985__$1;(statearr_73001_73019[2] = null);
(statearr_73001_73019[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_73005 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73005[0] = state_machine__6824__auto__);
(statearr_73005[1] = 1);
return statearr_73005;
});
var state_machine__6824__auto____1 = (function (state_72985){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_72985);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e73006){if((e73006 instanceof Object))
{var ex__6827__auto__ = e73006;var statearr_73007_73020 = state_72985;(statearr_73007_73020[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73021 = state_72985;
state_72985 = G__73021;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_72985){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_72985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_73008 = f__6839__auto__.call(null);(statearr_73008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___73009);
return statearr_73008;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___73114 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_73091){var state_val_73092 = (state_73091[1]);if((state_val_73092 === 1))
{var inst_73068 = 0;var state_73091__$1 = (function (){var statearr_73093 = state_73091;(statearr_73093[7] = inst_73068);
return statearr_73093;
})();var statearr_73094_73115 = state_73091__$1;(statearr_73094_73115[2] = null);
(statearr_73094_73115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 2))
{var inst_73068 = (state_73091[7]);var inst_73070 = (inst_73068 < n);var state_73091__$1 = state_73091;if(cljs.core.truth_(inst_73070))
{var statearr_73095_73116 = state_73091__$1;(statearr_73095_73116[1] = 4);
} else
{var statearr_73096_73117 = state_73091__$1;(statearr_73096_73117[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 3))
{var inst_73088 = (state_73091[2]);var inst_73089 = cljs.core.async.close_BANG_.call(null,out);var state_73091__$1 = (function (){var statearr_73097 = state_73091;(statearr_73097[8] = inst_73088);
return statearr_73097;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73091__$1,inst_73089);
} else
{if((state_val_73092 === 4))
{var state_73091__$1 = state_73091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73091__$1,7,ch);
} else
{if((state_val_73092 === 5))
{var state_73091__$1 = state_73091;var statearr_73098_73118 = state_73091__$1;(statearr_73098_73118[2] = null);
(statearr_73098_73118[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 6))
{var inst_73086 = (state_73091[2]);var state_73091__$1 = state_73091;var statearr_73099_73119 = state_73091__$1;(statearr_73099_73119[2] = inst_73086);
(statearr_73099_73119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 7))
{var inst_73073 = (state_73091[9]);var inst_73073__$1 = (state_73091[2]);var inst_73074 = (inst_73073__$1 == null);var inst_73075 = cljs.core.not.call(null,inst_73074);var state_73091__$1 = (function (){var statearr_73100 = state_73091;(statearr_73100[9] = inst_73073__$1);
return statearr_73100;
})();if(inst_73075)
{var statearr_73101_73120 = state_73091__$1;(statearr_73101_73120[1] = 8);
} else
{var statearr_73102_73121 = state_73091__$1;(statearr_73102_73121[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 8))
{var inst_73073 = (state_73091[9]);var state_73091__$1 = state_73091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73091__$1,11,out,inst_73073);
} else
{if((state_val_73092 === 9))
{var state_73091__$1 = state_73091;var statearr_73103_73122 = state_73091__$1;(statearr_73103_73122[2] = null);
(statearr_73103_73122[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 10))
{var inst_73083 = (state_73091[2]);var state_73091__$1 = state_73091;var statearr_73104_73123 = state_73091__$1;(statearr_73104_73123[2] = inst_73083);
(statearr_73104_73123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73092 === 11))
{var inst_73068 = (state_73091[7]);var inst_73078 = (state_73091[2]);var inst_73079 = (inst_73068 + 1);var inst_73068__$1 = inst_73079;var state_73091__$1 = (function (){var statearr_73105 = state_73091;(statearr_73105[10] = inst_73078);
(statearr_73105[7] = inst_73068__$1);
return statearr_73105;
})();var statearr_73106_73124 = state_73091__$1;(statearr_73106_73124[2] = null);
(statearr_73106_73124[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_73110 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_73110[0] = state_machine__6824__auto__);
(statearr_73110[1] = 1);
return statearr_73110;
});
var state_machine__6824__auto____1 = (function (state_73091){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_73091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e73111){if((e73111 instanceof Object))
{var ex__6827__auto__ = e73111;var statearr_73112_73125 = state_73091;(statearr_73112_73125[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73126 = state_73091;
state_73091 = G__73126;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_73091){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_73091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_73113 = f__6839__auto__.call(null);(statearr_73113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___73114);
return statearr_73113;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___73223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_73198){var state_val_73199 = (state_73198[1]);if((state_val_73199 === 1))
{var inst_73175 = null;var state_73198__$1 = (function (){var statearr_73200 = state_73198;(statearr_73200[7] = inst_73175);
return statearr_73200;
})();var statearr_73201_73224 = state_73198__$1;(statearr_73201_73224[2] = null);
(statearr_73201_73224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 2))
{var state_73198__$1 = state_73198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73198__$1,4,ch);
} else
{if((state_val_73199 === 3))
{var inst_73195 = (state_73198[2]);var inst_73196 = cljs.core.async.close_BANG_.call(null,out);var state_73198__$1 = (function (){var statearr_73202 = state_73198;(statearr_73202[8] = inst_73195);
return statearr_73202;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73198__$1,inst_73196);
} else
{if((state_val_73199 === 4))
{var inst_73178 = (state_73198[9]);var inst_73178__$1 = (state_73198[2]);var inst_73179 = (inst_73178__$1 == null);var inst_73180 = cljs.core.not.call(null,inst_73179);var state_73198__$1 = (function (){var statearr_73203 = state_73198;(statearr_73203[9] = inst_73178__$1);
return statearr_73203;
})();if(inst_73180)
{var statearr_73204_73225 = state_73198__$1;(statearr_73204_73225[1] = 5);
} else
{var statearr_73205_73226 = state_73198__$1;(statearr_73205_73226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 5))
{var inst_73178 = (state_73198[9]);var inst_73175 = (state_73198[7]);var inst_73182 = cljs.core._EQ_.call(null,inst_73178,inst_73175);var state_73198__$1 = state_73198;if(inst_73182)
{var statearr_73206_73227 = state_73198__$1;(statearr_73206_73227[1] = 8);
} else
{var statearr_73207_73228 = state_73198__$1;(statearr_73207_73228[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 6))
{var state_73198__$1 = state_73198;var statearr_73209_73229 = state_73198__$1;(statearr_73209_73229[2] = null);
(statearr_73209_73229[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 7))
{var inst_73193 = (state_73198[2]);var state_73198__$1 = state_73198;var statearr_73210_73230 = state_73198__$1;(statearr_73210_73230[2] = inst_73193);
(statearr_73210_73230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 8))
{var inst_73175 = (state_73198[7]);var tmp73208 = inst_73175;var inst_73175__$1 = tmp73208;var state_73198__$1 = (function (){var statearr_73211 = state_73198;(statearr_73211[7] = inst_73175__$1);
return statearr_73211;
})();var statearr_73212_73231 = state_73198__$1;(statearr_73212_73231[2] = null);
(statearr_73212_73231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 9))
{var inst_73178 = (state_73198[9]);var state_73198__$1 = state_73198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73198__$1,11,out,inst_73178);
} else
{if((state_val_73199 === 10))
{var inst_73190 = (state_73198[2]);var state_73198__$1 = state_73198;var statearr_73213_73232 = state_73198__$1;(statearr_73213_73232[2] = inst_73190);
(statearr_73213_73232[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73199 === 11))
{var inst_73178 = (state_73198[9]);var inst_73187 = (state_73198[2]);var inst_73175 = inst_73178;var state_73198__$1 = (function (){var statearr_73214 = state_73198;(statearr_73214[10] = inst_73187);
(statearr_73214[7] = inst_73175);
return statearr_73214;
})();var statearr_73215_73233 = state_73198__$1;(statearr_73215_73233[2] = null);
(statearr_73215_73233[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_73219 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_73219[0] = state_machine__6824__auto__);
(statearr_73219[1] = 1);
return statearr_73219;
});
var state_machine__6824__auto____1 = (function (state_73198){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_73198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e73220){if((e73220 instanceof Object))
{var ex__6827__auto__ = e73220;var statearr_73221_73234 = state_73198;(statearr_73221_73234[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73235 = state_73198;
state_73198 = G__73235;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_73198){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_73198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_73222 = f__6839__auto__.call(null);(statearr_73222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___73223);
return statearr_73222;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___73370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_73340){var state_val_73341 = (state_73340[1]);if((state_val_73341 === 1))
{var inst_73303 = (new Array(n));var inst_73304 = inst_73303;var inst_73305 = 0;var state_73340__$1 = (function (){var statearr_73342 = state_73340;(statearr_73342[7] = inst_73305);
(statearr_73342[8] = inst_73304);
return statearr_73342;
})();var statearr_73343_73371 = state_73340__$1;(statearr_73343_73371[2] = null);
(statearr_73343_73371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 2))
{var state_73340__$1 = state_73340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73340__$1,4,ch);
} else
{if((state_val_73341 === 3))
{var inst_73338 = (state_73340[2]);var state_73340__$1 = state_73340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73340__$1,inst_73338);
} else
{if((state_val_73341 === 4))
{var inst_73308 = (state_73340[9]);var inst_73308__$1 = (state_73340[2]);var inst_73309 = (inst_73308__$1 == null);var inst_73310 = cljs.core.not.call(null,inst_73309);var state_73340__$1 = (function (){var statearr_73344 = state_73340;(statearr_73344[9] = inst_73308__$1);
return statearr_73344;
})();if(inst_73310)
{var statearr_73345_73372 = state_73340__$1;(statearr_73345_73372[1] = 5);
} else
{var statearr_73346_73373 = state_73340__$1;(statearr_73346_73373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 5))
{var inst_73305 = (state_73340[7]);var inst_73304 = (state_73340[8]);var inst_73308 = (state_73340[9]);var inst_73313 = (state_73340[10]);var inst_73312 = (inst_73304[inst_73305] = inst_73308);var inst_73313__$1 = (inst_73305 + 1);var inst_73314 = (inst_73313__$1 < n);var state_73340__$1 = (function (){var statearr_73347 = state_73340;(statearr_73347[11] = inst_73312);
(statearr_73347[10] = inst_73313__$1);
return statearr_73347;
})();if(cljs.core.truth_(inst_73314))
{var statearr_73348_73374 = state_73340__$1;(statearr_73348_73374[1] = 8);
} else
{var statearr_73349_73375 = state_73340__$1;(statearr_73349_73375[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 6))
{var inst_73305 = (state_73340[7]);var inst_73326 = (inst_73305 > 0);var state_73340__$1 = state_73340;if(cljs.core.truth_(inst_73326))
{var statearr_73351_73376 = state_73340__$1;(statearr_73351_73376[1] = 12);
} else
{var statearr_73352_73377 = state_73340__$1;(statearr_73352_73377[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 7))
{var inst_73336 = (state_73340[2]);var state_73340__$1 = state_73340;var statearr_73353_73378 = state_73340__$1;(statearr_73353_73378[2] = inst_73336);
(statearr_73353_73378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 8))
{var inst_73304 = (state_73340[8]);var inst_73313 = (state_73340[10]);var tmp73350 = inst_73304;var inst_73304__$1 = tmp73350;var inst_73305 = inst_73313;var state_73340__$1 = (function (){var statearr_73354 = state_73340;(statearr_73354[7] = inst_73305);
(statearr_73354[8] = inst_73304__$1);
return statearr_73354;
})();var statearr_73355_73379 = state_73340__$1;(statearr_73355_73379[2] = null);
(statearr_73355_73379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 9))
{var inst_73304 = (state_73340[8]);var inst_73318 = cljs.core.vec.call(null,inst_73304);var state_73340__$1 = state_73340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73340__$1,11,out,inst_73318);
} else
{if((state_val_73341 === 10))
{var inst_73324 = (state_73340[2]);var state_73340__$1 = state_73340;var statearr_73356_73380 = state_73340__$1;(statearr_73356_73380[2] = inst_73324);
(statearr_73356_73380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 11))
{var inst_73320 = (state_73340[2]);var inst_73321 = (new Array(n));var inst_73304 = inst_73321;var inst_73305 = 0;var state_73340__$1 = (function (){var statearr_73357 = state_73340;(statearr_73357[7] = inst_73305);
(statearr_73357[8] = inst_73304);
(statearr_73357[12] = inst_73320);
return statearr_73357;
})();var statearr_73358_73381 = state_73340__$1;(statearr_73358_73381[2] = null);
(statearr_73358_73381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 12))
{var inst_73304 = (state_73340[8]);var inst_73328 = cljs.core.vec.call(null,inst_73304);var state_73340__$1 = state_73340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73340__$1,15,out,inst_73328);
} else
{if((state_val_73341 === 13))
{var state_73340__$1 = state_73340;var statearr_73359_73382 = state_73340__$1;(statearr_73359_73382[2] = null);
(statearr_73359_73382[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 14))
{var inst_73333 = (state_73340[2]);var inst_73334 = cljs.core.async.close_BANG_.call(null,out);var state_73340__$1 = (function (){var statearr_73360 = state_73340;(statearr_73360[13] = inst_73333);
return statearr_73360;
})();var statearr_73361_73383 = state_73340__$1;(statearr_73361_73383[2] = inst_73334);
(statearr_73361_73383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73341 === 15))
{var inst_73330 = (state_73340[2]);var state_73340__$1 = state_73340;var statearr_73362_73384 = state_73340__$1;(statearr_73362_73384[2] = inst_73330);
(statearr_73362_73384[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_73366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73366[0] = state_machine__6824__auto__);
(statearr_73366[1] = 1);
return statearr_73366;
});
var state_machine__6824__auto____1 = (function (state_73340){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_73340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e73367){if((e73367 instanceof Object))
{var ex__6827__auto__ = e73367;var statearr_73368_73385 = state_73340;(statearr_73368_73385[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73386 = state_73340;
state_73340 = G__73386;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_73340){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_73340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_73369 = f__6839__auto__.call(null);(statearr_73369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___73370);
return statearr_73369;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___73529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_73499){var state_val_73500 = (state_73499[1]);if((state_val_73500 === 1))
{var inst_73458 = [];var inst_73459 = inst_73458;var inst_73460 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_73499__$1 = (function (){var statearr_73501 = state_73499;(statearr_73501[7] = inst_73459);
(statearr_73501[8] = inst_73460);
return statearr_73501;
})();var statearr_73502_73530 = state_73499__$1;(statearr_73502_73530[2] = null);
(statearr_73502_73530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 2))
{var state_73499__$1 = state_73499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73499__$1,4,ch);
} else
{if((state_val_73500 === 3))
{var inst_73497 = (state_73499[2]);var state_73499__$1 = state_73499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73499__$1,inst_73497);
} else
{if((state_val_73500 === 4))
{var inst_73463 = (state_73499[9]);var inst_73463__$1 = (state_73499[2]);var inst_73464 = (inst_73463__$1 == null);var inst_73465 = cljs.core.not.call(null,inst_73464);var state_73499__$1 = (function (){var statearr_73503 = state_73499;(statearr_73503[9] = inst_73463__$1);
return statearr_73503;
})();if(inst_73465)
{var statearr_73504_73531 = state_73499__$1;(statearr_73504_73531[1] = 5);
} else
{var statearr_73505_73532 = state_73499__$1;(statearr_73505_73532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 5))
{var inst_73463 = (state_73499[9]);var inst_73467 = (state_73499[10]);var inst_73460 = (state_73499[8]);var inst_73467__$1 = f.call(null,inst_73463);var inst_73468 = cljs.core._EQ_.call(null,inst_73467__$1,inst_73460);var inst_73469 = cljs.core.keyword_identical_QMARK_.call(null,inst_73460,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_73470 = (inst_73468) || (inst_73469);var state_73499__$1 = (function (){var statearr_73506 = state_73499;(statearr_73506[10] = inst_73467__$1);
return statearr_73506;
})();if(cljs.core.truth_(inst_73470))
{var statearr_73507_73533 = state_73499__$1;(statearr_73507_73533[1] = 8);
} else
{var statearr_73508_73534 = state_73499__$1;(statearr_73508_73534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 6))
{var inst_73459 = (state_73499[7]);var inst_73484 = inst_73459.length;var inst_73485 = (inst_73484 > 0);var state_73499__$1 = state_73499;if(cljs.core.truth_(inst_73485))
{var statearr_73510_73535 = state_73499__$1;(statearr_73510_73535[1] = 12);
} else
{var statearr_73511_73536 = state_73499__$1;(statearr_73511_73536[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 7))
{var inst_73495 = (state_73499[2]);var state_73499__$1 = state_73499;var statearr_73512_73537 = state_73499__$1;(statearr_73512_73537[2] = inst_73495);
(statearr_73512_73537[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 8))
{var inst_73459 = (state_73499[7]);var inst_73463 = (state_73499[9]);var inst_73467 = (state_73499[10]);var inst_73472 = inst_73459.push(inst_73463);var tmp73509 = inst_73459;var inst_73459__$1 = tmp73509;var inst_73460 = inst_73467;var state_73499__$1 = (function (){var statearr_73513 = state_73499;(statearr_73513[7] = inst_73459__$1);
(statearr_73513[11] = inst_73472);
(statearr_73513[8] = inst_73460);
return statearr_73513;
})();var statearr_73514_73538 = state_73499__$1;(statearr_73514_73538[2] = null);
(statearr_73514_73538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 9))
{var inst_73459 = (state_73499[7]);var inst_73475 = cljs.core.vec.call(null,inst_73459);var state_73499__$1 = state_73499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73499__$1,11,out,inst_73475);
} else
{if((state_val_73500 === 10))
{var inst_73482 = (state_73499[2]);var state_73499__$1 = state_73499;var statearr_73515_73539 = state_73499__$1;(statearr_73515_73539[2] = inst_73482);
(statearr_73515_73539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 11))
{var inst_73463 = (state_73499[9]);var inst_73467 = (state_73499[10]);var inst_73477 = (state_73499[2]);var inst_73478 = [];var inst_73479 = inst_73478.push(inst_73463);var inst_73459 = inst_73478;var inst_73460 = inst_73467;var state_73499__$1 = (function (){var statearr_73516 = state_73499;(statearr_73516[12] = inst_73477);
(statearr_73516[7] = inst_73459);
(statearr_73516[8] = inst_73460);
(statearr_73516[13] = inst_73479);
return statearr_73516;
})();var statearr_73517_73540 = state_73499__$1;(statearr_73517_73540[2] = null);
(statearr_73517_73540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 12))
{var inst_73459 = (state_73499[7]);var inst_73487 = cljs.core.vec.call(null,inst_73459);var state_73499__$1 = state_73499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73499__$1,15,out,inst_73487);
} else
{if((state_val_73500 === 13))
{var state_73499__$1 = state_73499;var statearr_73518_73541 = state_73499__$1;(statearr_73518_73541[2] = null);
(statearr_73518_73541[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 14))
{var inst_73492 = (state_73499[2]);var inst_73493 = cljs.core.async.close_BANG_.call(null,out);var state_73499__$1 = (function (){var statearr_73519 = state_73499;(statearr_73519[14] = inst_73492);
return statearr_73519;
})();var statearr_73520_73542 = state_73499__$1;(statearr_73520_73542[2] = inst_73493);
(statearr_73520_73542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73500 === 15))
{var inst_73489 = (state_73499[2]);var state_73499__$1 = state_73499;var statearr_73521_73543 = state_73499__$1;(statearr_73521_73543[2] = inst_73489);
(statearr_73521_73543[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_73525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73525[0] = state_machine__6824__auto__);
(statearr_73525[1] = 1);
return statearr_73525;
});
var state_machine__6824__auto____1 = (function (state_73499){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_73499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e73526){if((e73526 instanceof Object))
{var ex__6827__auto__ = e73526;var statearr_73527_73544 = state_73499;(statearr_73527_73544[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73545 = state_73499;
state_73499 = G__73545;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_73499){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_73499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_73528 = f__6839__auto__.call(null);(statearr_73528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___73529);
return statearr_73528;
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