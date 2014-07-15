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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11612 = (function (f,fn_handler,meta11613){
this.f = f;
this.fn_handler = fn_handler;
this.meta11613 = meta11613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11612.cljs$lang$type = true;
cljs.core.async.t11612.cljs$lang$ctorStr = "cljs.core.async/t11612";
cljs.core.async.t11612.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11612");
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11614){var self__ = this;
var _11614__$1 = this;return self__.meta11613;
});
cljs.core.async.t11612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11614,meta11613__$1){var self__ = this;
var _11614__$1 = this;return (new cljs.core.async.t11612(self__.f,self__.fn_handler,meta11613__$1));
});
cljs.core.async.__GT_t11612 = (function __GT_t11612(f__$1,fn_handler__$1,meta11613){return (new cljs.core.async.t11612(f__$1,fn_handler__$1,meta11613));
});
}
return (new cljs.core.async.t11612(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11616 = buff;if(G__11616)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11616.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11616.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11616);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11616);
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
{var val_11617 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11617);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11617);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11618 = n;var x_11619 = 0;while(true){
if((x_11619 < n__4291__auto___11618))
{(a[x_11619] = 0);
{
var G__11620 = (x_11619 + 1);
x_11619 = G__11620;
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
var G__11621 = (i + 1);
i = G__11621;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11625 = (function (flag,alt_flag,meta11626){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11626 = meta11626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11625.cljs$lang$type = true;
cljs.core.async.t11625.cljs$lang$ctorStr = "cljs.core.async/t11625";
cljs.core.async.t11625.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11625");
});
cljs.core.async.t11625.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11627){var self__ = this;
var _11627__$1 = this;return self__.meta11626;
});
cljs.core.async.t11625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11627,meta11626__$1){var self__ = this;
var _11627__$1 = this;return (new cljs.core.async.t11625(self__.flag,self__.alt_flag,meta11626__$1));
});
cljs.core.async.__GT_t11625 = (function __GT_t11625(flag__$1,alt_flag__$1,meta11626){return (new cljs.core.async.t11625(flag__$1,alt_flag__$1,meta11626));
});
}
return (new cljs.core.async.t11625(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11631 = (function (cb,flag,alt_handler,meta11632){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11632 = meta11632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11631.cljs$lang$type = true;
cljs.core.async.t11631.cljs$lang$ctorStr = "cljs.core.async/t11631";
cljs.core.async.t11631.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11631");
});
cljs.core.async.t11631.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11633){var self__ = this;
var _11633__$1 = this;return self__.meta11632;
});
cljs.core.async.t11631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11633,meta11632__$1){var self__ = this;
var _11633__$1 = this;return (new cljs.core.async.t11631(self__.cb,self__.flag,self__.alt_handler,meta11632__$1));
});
cljs.core.async.__GT_t11631 = (function __GT_t11631(cb__$1,flag__$1,alt_handler__$1,meta11632){return (new cljs.core.async.t11631(cb__$1,flag__$1,alt_handler__$1,meta11632));
});
}
return (new cljs.core.async.t11631(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11634_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11634_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11635_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11635_SHARP_,port], null));
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
var G__11636 = (i + 1);
i = G__11636;
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
var alts_BANG___delegate = function (ports,p__11637){var map__11639 = p__11637;var map__11639__$1 = ((cljs.core.seq_QMARK_.call(null,map__11639))?cljs.core.apply.call(null,cljs.core.hash_map,map__11639):map__11639);var opts = map__11639__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11637 = null;if (arguments.length > 1) {
  p__11637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11637);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11640){
var ports = cljs.core.first(arglist__11640);
var p__11637 = cljs.core.rest(arglist__11640);
return alts_BANG___delegate(ports,p__11637);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11648 = (function (ch,f,map_LT_,meta11649){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11649 = meta11649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11648.cljs$lang$type = true;
cljs.core.async.t11648.cljs$lang$ctorStr = "cljs.core.async/t11648";
cljs.core.async.t11648.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11648");
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11651 = (function (fn1,_,meta11649,ch,f,map_LT_,meta11652){
this.fn1 = fn1;
this._ = _;
this.meta11649 = meta11649;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11652 = meta11652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11651.cljs$lang$type = true;
cljs.core.async.t11651.cljs$lang$ctorStr = "cljs.core.async/t11651";
cljs.core.async.t11651.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11651");
});
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11641_SHARP_){return f1.call(null,(((p1__11641_SHARP_ == null))?null:self__.f.call(null,p1__11641_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11653){var self__ = this;
var _11653__$1 = this;return self__.meta11652;
});
cljs.core.async.t11651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11653,meta11652__$1){var self__ = this;
var _11653__$1 = this;return (new cljs.core.async.t11651(self__.fn1,self__._,self__.meta11649,self__.ch,self__.f,self__.map_LT_,meta11652__$1));
});
cljs.core.async.__GT_t11651 = (function __GT_t11651(fn1__$1,___$2,meta11649__$1,ch__$2,f__$2,map_LT___$2,meta11652){return (new cljs.core.async.t11651(fn1__$1,___$2,meta11649__$1,ch__$2,f__$2,map_LT___$2,meta11652));
});
}
return (new cljs.core.async.t11651(fn1,___$1,self__.meta11649,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11650){var self__ = this;
var _11650__$1 = this;return self__.meta11649;
});
cljs.core.async.t11648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11650,meta11649__$1){var self__ = this;
var _11650__$1 = this;return (new cljs.core.async.t11648(self__.ch,self__.f,self__.map_LT_,meta11649__$1));
});
cljs.core.async.__GT_t11648 = (function __GT_t11648(ch__$1,f__$1,map_LT___$1,meta11649){return (new cljs.core.async.t11648(ch__$1,f__$1,map_LT___$1,meta11649));
});
}
return (new cljs.core.async.t11648(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11657 = (function (ch,f,map_GT_,meta11658){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11658 = meta11658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11657.cljs$lang$type = true;
cljs.core.async.t11657.cljs$lang$ctorStr = "cljs.core.async/t11657";
cljs.core.async.t11657.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11657");
});
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11659){var self__ = this;
var _11659__$1 = this;return self__.meta11658;
});
cljs.core.async.t11657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11659,meta11658__$1){var self__ = this;
var _11659__$1 = this;return (new cljs.core.async.t11657(self__.ch,self__.f,self__.map_GT_,meta11658__$1));
});
cljs.core.async.__GT_t11657 = (function __GT_t11657(ch__$1,f__$1,map_GT___$1,meta11658){return (new cljs.core.async.t11657(ch__$1,f__$1,map_GT___$1,meta11658));
});
}
return (new cljs.core.async.t11657(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11663 = (function (ch,p,filter_GT_,meta11664){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11664 = meta11664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11663.cljs$lang$type = true;
cljs.core.async.t11663.cljs$lang$ctorStr = "cljs.core.async/t11663";
cljs.core.async.t11663.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11663");
});
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11665){var self__ = this;
var _11665__$1 = this;return self__.meta11664;
});
cljs.core.async.t11663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11665,meta11664__$1){var self__ = this;
var _11665__$1 = this;return (new cljs.core.async.t11663(self__.ch,self__.p,self__.filter_GT_,meta11664__$1));
});
cljs.core.async.__GT_t11663 = (function __GT_t11663(ch__$1,p__$1,filter_GT___$1,meta11664){return (new cljs.core.async.t11663(ch__$1,p__$1,filter_GT___$1,meta11664));
});
}
return (new cljs.core.async.t11663(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___11748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_11727){var state_val_11728 = (state_11727[1]);if((state_val_11728 === 1))
{var state_11727__$1 = state_11727;var statearr_11729_11749 = state_11727__$1;(statearr_11729_11749[2] = null);
(statearr_11729_11749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 2))
{var state_11727__$1 = state_11727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11727__$1,4,ch);
} else
{if((state_val_11728 === 3))
{var inst_11725 = (state_11727[2]);var state_11727__$1 = state_11727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11727__$1,inst_11725);
} else
{if((state_val_11728 === 4))
{var inst_11709 = (state_11727[7]);var inst_11709__$1 = (state_11727[2]);var inst_11710 = (inst_11709__$1 == null);var state_11727__$1 = (function (){var statearr_11730 = state_11727;(statearr_11730[7] = inst_11709__$1);
return statearr_11730;
})();if(cljs.core.truth_(inst_11710))
{var statearr_11731_11750 = state_11727__$1;(statearr_11731_11750[1] = 5);
} else
{var statearr_11732_11751 = state_11727__$1;(statearr_11732_11751[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 5))
{var inst_11712 = cljs.core.async.close_BANG_.call(null,out);var state_11727__$1 = state_11727;var statearr_11733_11752 = state_11727__$1;(statearr_11733_11752[2] = inst_11712);
(statearr_11733_11752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 6))
{var inst_11709 = (state_11727[7]);var inst_11714 = p.call(null,inst_11709);var state_11727__$1 = state_11727;if(cljs.core.truth_(inst_11714))
{var statearr_11734_11753 = state_11727__$1;(statearr_11734_11753[1] = 8);
} else
{var statearr_11735_11754 = state_11727__$1;(statearr_11735_11754[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 7))
{var inst_11723 = (state_11727[2]);var state_11727__$1 = state_11727;var statearr_11736_11755 = state_11727__$1;(statearr_11736_11755[2] = inst_11723);
(statearr_11736_11755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 8))
{var inst_11709 = (state_11727[7]);var state_11727__$1 = state_11727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11727__$1,11,out,inst_11709);
} else
{if((state_val_11728 === 9))
{var state_11727__$1 = state_11727;var statearr_11737_11756 = state_11727__$1;(statearr_11737_11756[2] = null);
(statearr_11737_11756[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 10))
{var inst_11720 = (state_11727[2]);var state_11727__$1 = (function (){var statearr_11738 = state_11727;(statearr_11738[8] = inst_11720);
return statearr_11738;
})();var statearr_11739_11757 = state_11727__$1;(statearr_11739_11757[2] = null);
(statearr_11739_11757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11728 === 11))
{var inst_11717 = (state_11727[2]);var state_11727__$1 = state_11727;var statearr_11740_11758 = state_11727__$1;(statearr_11740_11758[2] = inst_11717);
(statearr_11740_11758[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_11744 = [null,null,null,null,null,null,null,null,null];(statearr_11744[0] = state_machine__6824__auto__);
(statearr_11744[1] = 1);
return statearr_11744;
});
var state_machine__6824__auto____1 = (function (state_11727){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_11727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e11745){if((e11745 instanceof Object))
{var ex__6827__auto__ = e11745;var statearr_11746_11759 = state_11727;(statearr_11746_11759[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11760 = state_11727;
state_11727 = G__11760;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_11727){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_11727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_11747 = f__6839__auto__.call(null);(statearr_11747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___11748);
return statearr_11747;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_11926){var state_val_11927 = (state_11926[1]);if((state_val_11927 === 1))
{var state_11926__$1 = state_11926;var statearr_11928_11969 = state_11926__$1;(statearr_11928_11969[2] = null);
(statearr_11928_11969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 2))
{var state_11926__$1 = state_11926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11926__$1,4,in$);
} else
{if((state_val_11927 === 3))
{var inst_11924 = (state_11926[2]);var state_11926__$1 = state_11926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11926__$1,inst_11924);
} else
{if((state_val_11927 === 4))
{var inst_11867 = (state_11926[7]);var inst_11867__$1 = (state_11926[2]);var inst_11868 = (inst_11867__$1 == null);var state_11926__$1 = (function (){var statearr_11929 = state_11926;(statearr_11929[7] = inst_11867__$1);
return statearr_11929;
})();if(cljs.core.truth_(inst_11868))
{var statearr_11930_11970 = state_11926__$1;(statearr_11930_11970[1] = 5);
} else
{var statearr_11931_11971 = state_11926__$1;(statearr_11931_11971[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 5))
{var inst_11870 = cljs.core.async.close_BANG_.call(null,out);var state_11926__$1 = state_11926;var statearr_11932_11972 = state_11926__$1;(statearr_11932_11972[2] = inst_11870);
(statearr_11932_11972[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 6))
{var inst_11867 = (state_11926[7]);var inst_11876 = f.call(null,inst_11867);var inst_11877 = cljs.core.seq.call(null,inst_11876);var inst_11878 = inst_11877;var inst_11879 = null;var inst_11880 = 0;var inst_11881 = 0;var state_11926__$1 = (function (){var statearr_11933 = state_11926;(statearr_11933[8] = inst_11879);
(statearr_11933[9] = inst_11878);
(statearr_11933[10] = inst_11881);
(statearr_11933[11] = inst_11880);
return statearr_11933;
})();var statearr_11934_11973 = state_11926__$1;(statearr_11934_11973[2] = null);
(statearr_11934_11973[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 7))
{var inst_11922 = (state_11926[2]);var state_11926__$1 = state_11926;var statearr_11935_11974 = state_11926__$1;(statearr_11935_11974[2] = inst_11922);
(statearr_11935_11974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 8))
{var inst_11881 = (state_11926[10]);var inst_11880 = (state_11926[11]);var inst_11883 = (inst_11881 < inst_11880);var inst_11884 = inst_11883;var state_11926__$1 = state_11926;if(cljs.core.truth_(inst_11884))
{var statearr_11936_11975 = state_11926__$1;(statearr_11936_11975[1] = 10);
} else
{var statearr_11937_11976 = state_11926__$1;(statearr_11937_11976[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 9))
{var inst_11914 = (state_11926[2]);var inst_11915 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11926__$1 = (function (){var statearr_11938 = state_11926;(statearr_11938[12] = inst_11914);
return statearr_11938;
})();if(cljs.core.truth_(inst_11915))
{var statearr_11939_11977 = state_11926__$1;(statearr_11939_11977[1] = 21);
} else
{var statearr_11940_11978 = state_11926__$1;(statearr_11940_11978[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 10))
{var inst_11879 = (state_11926[8]);var inst_11881 = (state_11926[10]);var inst_11886 = cljs.core._nth.call(null,inst_11879,inst_11881);var state_11926__$1 = state_11926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11926__$1,13,out,inst_11886);
} else
{if((state_val_11927 === 11))
{var inst_11878 = (state_11926[9]);var inst_11892 = (state_11926[13]);var inst_11892__$1 = cljs.core.seq.call(null,inst_11878);var state_11926__$1 = (function (){var statearr_11944 = state_11926;(statearr_11944[13] = inst_11892__$1);
return statearr_11944;
})();if(inst_11892__$1)
{var statearr_11945_11979 = state_11926__$1;(statearr_11945_11979[1] = 14);
} else
{var statearr_11946_11980 = state_11926__$1;(statearr_11946_11980[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 12))
{var inst_11912 = (state_11926[2]);var state_11926__$1 = state_11926;var statearr_11947_11981 = state_11926__$1;(statearr_11947_11981[2] = inst_11912);
(statearr_11947_11981[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 13))
{var inst_11879 = (state_11926[8]);var inst_11878 = (state_11926[9]);var inst_11881 = (state_11926[10]);var inst_11880 = (state_11926[11]);var inst_11888 = (state_11926[2]);var inst_11889 = (inst_11881 + 1);var tmp11941 = inst_11879;var tmp11942 = inst_11878;var tmp11943 = inst_11880;var inst_11878__$1 = tmp11942;var inst_11879__$1 = tmp11941;var inst_11880__$1 = tmp11943;var inst_11881__$1 = inst_11889;var state_11926__$1 = (function (){var statearr_11948 = state_11926;(statearr_11948[8] = inst_11879__$1);
(statearr_11948[9] = inst_11878__$1);
(statearr_11948[14] = inst_11888);
(statearr_11948[10] = inst_11881__$1);
(statearr_11948[11] = inst_11880__$1);
return statearr_11948;
})();var statearr_11949_11982 = state_11926__$1;(statearr_11949_11982[2] = null);
(statearr_11949_11982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 14))
{var inst_11892 = (state_11926[13]);var inst_11894 = cljs.core.chunked_seq_QMARK_.call(null,inst_11892);var state_11926__$1 = state_11926;if(inst_11894)
{var statearr_11950_11983 = state_11926__$1;(statearr_11950_11983[1] = 17);
} else
{var statearr_11951_11984 = state_11926__$1;(statearr_11951_11984[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 15))
{var state_11926__$1 = state_11926;var statearr_11952_11985 = state_11926__$1;(statearr_11952_11985[2] = null);
(statearr_11952_11985[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 16))
{var inst_11910 = (state_11926[2]);var state_11926__$1 = state_11926;var statearr_11953_11986 = state_11926__$1;(statearr_11953_11986[2] = inst_11910);
(statearr_11953_11986[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 17))
{var inst_11892 = (state_11926[13]);var inst_11896 = cljs.core.chunk_first.call(null,inst_11892);var inst_11897 = cljs.core.chunk_rest.call(null,inst_11892);var inst_11898 = cljs.core.count.call(null,inst_11896);var inst_11878 = inst_11897;var inst_11879 = inst_11896;var inst_11880 = inst_11898;var inst_11881 = 0;var state_11926__$1 = (function (){var statearr_11954 = state_11926;(statearr_11954[8] = inst_11879);
(statearr_11954[9] = inst_11878);
(statearr_11954[10] = inst_11881);
(statearr_11954[11] = inst_11880);
return statearr_11954;
})();var statearr_11955_11987 = state_11926__$1;(statearr_11955_11987[2] = null);
(statearr_11955_11987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 18))
{var inst_11892 = (state_11926[13]);var inst_11901 = cljs.core.first.call(null,inst_11892);var state_11926__$1 = state_11926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11926__$1,20,out,inst_11901);
} else
{if((state_val_11927 === 19))
{var inst_11907 = (state_11926[2]);var state_11926__$1 = state_11926;var statearr_11956_11988 = state_11926__$1;(statearr_11956_11988[2] = inst_11907);
(statearr_11956_11988[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 20))
{var inst_11892 = (state_11926[13]);var inst_11903 = (state_11926[2]);var inst_11904 = cljs.core.next.call(null,inst_11892);var inst_11878 = inst_11904;var inst_11879 = null;var inst_11880 = 0;var inst_11881 = 0;var state_11926__$1 = (function (){var statearr_11957 = state_11926;(statearr_11957[15] = inst_11903);
(statearr_11957[8] = inst_11879);
(statearr_11957[9] = inst_11878);
(statearr_11957[10] = inst_11881);
(statearr_11957[11] = inst_11880);
return statearr_11957;
})();var statearr_11958_11989 = state_11926__$1;(statearr_11958_11989[2] = null);
(statearr_11958_11989[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 21))
{var state_11926__$1 = state_11926;var statearr_11959_11990 = state_11926__$1;(statearr_11959_11990[2] = null);
(statearr_11959_11990[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 22))
{var state_11926__$1 = state_11926;var statearr_11960_11991 = state_11926__$1;(statearr_11960_11991[2] = null);
(statearr_11960_11991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11927 === 23))
{var inst_11920 = (state_11926[2]);var state_11926__$1 = state_11926;var statearr_11961_11992 = state_11926__$1;(statearr_11961_11992[2] = inst_11920);
(statearr_11961_11992[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_11965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11965[0] = state_machine__6824__auto__);
(statearr_11965[1] = 1);
return statearr_11965;
});
var state_machine__6824__auto____1 = (function (state_11926){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_11926);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e11966){if((e11966 instanceof Object))
{var ex__6827__auto__ = e11966;var statearr_11967_11993 = state_11926;(statearr_11967_11993[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11994 = state_11926;
state_11926 = G__11994;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_11926){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_11926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_11968 = f__6839__auto__.call(null);(statearr_11968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_11968;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6838__auto___12089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12065){var state_val_12066 = (state_12065[1]);if((state_val_12066 === 1))
{var state_12065__$1 = state_12065;var statearr_12067_12090 = state_12065__$1;(statearr_12067_12090[2] = null);
(statearr_12067_12090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 2))
{var state_12065__$1 = state_12065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12065__$1,4,from);
} else
{if((state_val_12066 === 3))
{var inst_12063 = (state_12065[2]);var state_12065__$1 = state_12065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12065__$1,inst_12063);
} else
{if((state_val_12066 === 4))
{var inst_12044 = (state_12065[7]);var inst_12044__$1 = (state_12065[2]);var inst_12045 = (inst_12044__$1 == null);var state_12065__$1 = (function (){var statearr_12068 = state_12065;(statearr_12068[7] = inst_12044__$1);
return statearr_12068;
})();if(cljs.core.truth_(inst_12045))
{var statearr_12069_12091 = state_12065__$1;(statearr_12069_12091[1] = 5);
} else
{var statearr_12070_12092 = state_12065__$1;(statearr_12070_12092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 5))
{var state_12065__$1 = state_12065;if(cljs.core.truth_(close_QMARK_))
{var statearr_12071_12093 = state_12065__$1;(statearr_12071_12093[1] = 8);
} else
{var statearr_12072_12094 = state_12065__$1;(statearr_12072_12094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 6))
{var inst_12044 = (state_12065[7]);var state_12065__$1 = state_12065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12065__$1,11,to,inst_12044);
} else
{if((state_val_12066 === 7))
{var inst_12061 = (state_12065[2]);var state_12065__$1 = state_12065;var statearr_12073_12095 = state_12065__$1;(statearr_12073_12095[2] = inst_12061);
(statearr_12073_12095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 8))
{var inst_12048 = cljs.core.async.close_BANG_.call(null,to);var state_12065__$1 = state_12065;var statearr_12074_12096 = state_12065__$1;(statearr_12074_12096[2] = inst_12048);
(statearr_12074_12096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 9))
{var state_12065__$1 = state_12065;var statearr_12075_12097 = state_12065__$1;(statearr_12075_12097[2] = null);
(statearr_12075_12097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 10))
{var inst_12051 = (state_12065[2]);var state_12065__$1 = state_12065;var statearr_12076_12098 = state_12065__$1;(statearr_12076_12098[2] = inst_12051);
(statearr_12076_12098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 11))
{var inst_12054 = (state_12065[2]);var state_12065__$1 = state_12065;if(cljs.core.truth_(inst_12054))
{var statearr_12077_12099 = state_12065__$1;(statearr_12077_12099[1] = 12);
} else
{var statearr_12078_12100 = state_12065__$1;(statearr_12078_12100[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 12))
{var state_12065__$1 = state_12065;var statearr_12079_12101 = state_12065__$1;(statearr_12079_12101[2] = null);
(statearr_12079_12101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 13))
{var state_12065__$1 = state_12065;var statearr_12080_12102 = state_12065__$1;(statearr_12080_12102[2] = null);
(statearr_12080_12102[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12066 === 14))
{var inst_12059 = (state_12065[2]);var state_12065__$1 = state_12065;var statearr_12081_12103 = state_12065__$1;(statearr_12081_12103[2] = inst_12059);
(statearr_12081_12103[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_12085 = [null,null,null,null,null,null,null,null];(statearr_12085[0] = state_machine__6824__auto__);
(statearr_12085[1] = 1);
return statearr_12085;
});
var state_machine__6824__auto____1 = (function (state_12065){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12086){if((e12086 instanceof Object))
{var ex__6827__auto__ = e12086;var statearr_12087_12104 = state_12065;(statearr_12087_12104[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12105 = state_12065;
state_12065 = G__12105;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12065){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12088 = f__6839__auto__.call(null);(statearr_12088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12089);
return statearr_12088;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6838__auto___12206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12181){var state_val_12182 = (state_12181[1]);if((state_val_12182 === 1))
{var state_12181__$1 = state_12181;var statearr_12183_12207 = state_12181__$1;(statearr_12183_12207[2] = null);
(statearr_12183_12207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 2))
{var state_12181__$1 = state_12181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12181__$1,4,ch);
} else
{if((state_val_12182 === 3))
{var inst_12179 = (state_12181[2]);var state_12181__$1 = state_12181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12181__$1,inst_12179);
} else
{if((state_val_12182 === 4))
{var inst_12158 = (state_12181[7]);var inst_12158__$1 = (state_12181[2]);var inst_12159 = (inst_12158__$1 == null);var state_12181__$1 = (function (){var statearr_12184 = state_12181;(statearr_12184[7] = inst_12158__$1);
return statearr_12184;
})();if(cljs.core.truth_(inst_12159))
{var statearr_12185_12208 = state_12181__$1;(statearr_12185_12208[1] = 5);
} else
{var statearr_12186_12209 = state_12181__$1;(statearr_12186_12209[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 5))
{var inst_12161 = cljs.core.async.close_BANG_.call(null,tc);var inst_12162 = cljs.core.async.close_BANG_.call(null,fc);var state_12181__$1 = (function (){var statearr_12187 = state_12181;(statearr_12187[8] = inst_12161);
return statearr_12187;
})();var statearr_12188_12210 = state_12181__$1;(statearr_12188_12210[2] = inst_12162);
(statearr_12188_12210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 6))
{var inst_12158 = (state_12181[7]);var inst_12164 = p.call(null,inst_12158);var state_12181__$1 = state_12181;if(cljs.core.truth_(inst_12164))
{var statearr_12189_12211 = state_12181__$1;(statearr_12189_12211[1] = 9);
} else
{var statearr_12190_12212 = state_12181__$1;(statearr_12190_12212[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 7))
{var inst_12177 = (state_12181[2]);var state_12181__$1 = state_12181;var statearr_12191_12213 = state_12181__$1;(statearr_12191_12213[2] = inst_12177);
(statearr_12191_12213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 8))
{var inst_12170 = (state_12181[2]);var state_12181__$1 = state_12181;if(cljs.core.truth_(inst_12170))
{var statearr_12192_12214 = state_12181__$1;(statearr_12192_12214[1] = 12);
} else
{var statearr_12193_12215 = state_12181__$1;(statearr_12193_12215[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 9))
{var state_12181__$1 = state_12181;var statearr_12194_12216 = state_12181__$1;(statearr_12194_12216[2] = tc);
(statearr_12194_12216[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 10))
{var state_12181__$1 = state_12181;var statearr_12195_12217 = state_12181__$1;(statearr_12195_12217[2] = fc);
(statearr_12195_12217[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 11))
{var inst_12158 = (state_12181[7]);var inst_12168 = (state_12181[2]);var state_12181__$1 = state_12181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12181__$1,8,inst_12168,inst_12158);
} else
{if((state_val_12182 === 12))
{var state_12181__$1 = state_12181;var statearr_12196_12218 = state_12181__$1;(statearr_12196_12218[2] = null);
(statearr_12196_12218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 13))
{var state_12181__$1 = state_12181;var statearr_12197_12219 = state_12181__$1;(statearr_12197_12219[2] = null);
(statearr_12197_12219[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12182 === 14))
{var inst_12175 = (state_12181[2]);var state_12181__$1 = state_12181;var statearr_12198_12220 = state_12181__$1;(statearr_12198_12220[2] = inst_12175);
(statearr_12198_12220[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_12202 = [null,null,null,null,null,null,null,null,null];(statearr_12202[0] = state_machine__6824__auto__);
(statearr_12202[1] = 1);
return statearr_12202;
});
var state_machine__6824__auto____1 = (function (state_12181){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12181);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12203){if((e12203 instanceof Object))
{var ex__6827__auto__ = e12203;var statearr_12204_12221 = state_12181;(statearr_12204_12221[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12222 = state_12181;
state_12181 = G__12222;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12181){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12205 = f__6839__auto__.call(null);(statearr_12205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12206);
return statearr_12205;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12269){var state_val_12270 = (state_12269[1]);if((state_val_12270 === 7))
{var inst_12265 = (state_12269[2]);var state_12269__$1 = state_12269;var statearr_12271_12287 = state_12269__$1;(statearr_12271_12287[2] = inst_12265);
(statearr_12271_12287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12270 === 6))
{var inst_12258 = (state_12269[7]);var inst_12255 = (state_12269[8]);var inst_12262 = f.call(null,inst_12255,inst_12258);var inst_12255__$1 = inst_12262;var state_12269__$1 = (function (){var statearr_12272 = state_12269;(statearr_12272[8] = inst_12255__$1);
return statearr_12272;
})();var statearr_12273_12288 = state_12269__$1;(statearr_12273_12288[2] = null);
(statearr_12273_12288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12270 === 5))
{var inst_12255 = (state_12269[8]);var state_12269__$1 = state_12269;var statearr_12274_12289 = state_12269__$1;(statearr_12274_12289[2] = inst_12255);
(statearr_12274_12289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12270 === 4))
{var inst_12258 = (state_12269[7]);var inst_12258__$1 = (state_12269[2]);var inst_12259 = (inst_12258__$1 == null);var state_12269__$1 = (function (){var statearr_12275 = state_12269;(statearr_12275[7] = inst_12258__$1);
return statearr_12275;
})();if(cljs.core.truth_(inst_12259))
{var statearr_12276_12290 = state_12269__$1;(statearr_12276_12290[1] = 5);
} else
{var statearr_12277_12291 = state_12269__$1;(statearr_12277_12291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12270 === 3))
{var inst_12267 = (state_12269[2]);var state_12269__$1 = state_12269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12269__$1,inst_12267);
} else
{if((state_val_12270 === 2))
{var state_12269__$1 = state_12269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12269__$1,4,ch);
} else
{if((state_val_12270 === 1))
{var inst_12255 = init;var state_12269__$1 = (function (){var statearr_12278 = state_12269;(statearr_12278[8] = inst_12255);
return statearr_12278;
})();var statearr_12279_12292 = state_12269__$1;(statearr_12279_12292[2] = null);
(statearr_12279_12292[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_12283 = [null,null,null,null,null,null,null,null,null];(statearr_12283[0] = state_machine__6824__auto__);
(statearr_12283[1] = 1);
return statearr_12283;
});
var state_machine__6824__auto____1 = (function (state_12269){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12269);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object))
{var ex__6827__auto__ = e12284;var statearr_12285_12293 = state_12269;(statearr_12285_12293[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12294 = state_12269;
state_12269 = G__12294;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12269){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12286 = f__6839__auto__.call(null);(statearr_12286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_12286;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12368){var state_val_12369 = (state_12368[1]);if((state_val_12369 === 1))
{var inst_12344 = cljs.core.seq.call(null,coll);var inst_12345 = inst_12344;var state_12368__$1 = (function (){var statearr_12370 = state_12368;(statearr_12370[7] = inst_12345);
return statearr_12370;
})();var statearr_12371_12393 = state_12368__$1;(statearr_12371_12393[2] = null);
(statearr_12371_12393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 2))
{var inst_12345 = (state_12368[7]);var state_12368__$1 = state_12368;if(cljs.core.truth_(inst_12345))
{var statearr_12372_12394 = state_12368__$1;(statearr_12372_12394[1] = 4);
} else
{var statearr_12373_12395 = state_12368__$1;(statearr_12373_12395[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 3))
{var inst_12366 = (state_12368[2]);var state_12368__$1 = state_12368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12368__$1,inst_12366);
} else
{if((state_val_12369 === 4))
{var inst_12345 = (state_12368[7]);var inst_12348 = cljs.core.first.call(null,inst_12345);var state_12368__$1 = state_12368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12368__$1,7,ch,inst_12348);
} else
{if((state_val_12369 === 5))
{var inst_12345 = (state_12368[7]);var state_12368__$1 = state_12368;var statearr_12374_12396 = state_12368__$1;(statearr_12374_12396[2] = inst_12345);
(statearr_12374_12396[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 6))
{var inst_12353 = (state_12368[2]);var state_12368__$1 = state_12368;if(cljs.core.truth_(inst_12353))
{var statearr_12375_12397 = state_12368__$1;(statearr_12375_12397[1] = 8);
} else
{var statearr_12376_12398 = state_12368__$1;(statearr_12376_12398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 7))
{var inst_12350 = (state_12368[2]);var state_12368__$1 = state_12368;var statearr_12377_12399 = state_12368__$1;(statearr_12377_12399[2] = inst_12350);
(statearr_12377_12399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 8))
{var inst_12345 = (state_12368[7]);var inst_12355 = cljs.core.next.call(null,inst_12345);var inst_12345__$1 = inst_12355;var state_12368__$1 = (function (){var statearr_12378 = state_12368;(statearr_12378[7] = inst_12345__$1);
return statearr_12378;
})();var statearr_12379_12400 = state_12368__$1;(statearr_12379_12400[2] = null);
(statearr_12379_12400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 9))
{var state_12368__$1 = state_12368;if(cljs.core.truth_(close_QMARK_))
{var statearr_12380_12401 = state_12368__$1;(statearr_12380_12401[1] = 11);
} else
{var statearr_12381_12402 = state_12368__$1;(statearr_12381_12402[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 10))
{var inst_12364 = (state_12368[2]);var state_12368__$1 = state_12368;var statearr_12382_12403 = state_12368__$1;(statearr_12382_12403[2] = inst_12364);
(statearr_12382_12403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 11))
{var inst_12359 = cljs.core.async.close_BANG_.call(null,ch);var state_12368__$1 = state_12368;var statearr_12383_12404 = state_12368__$1;(statearr_12383_12404[2] = inst_12359);
(statearr_12383_12404[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 12))
{var state_12368__$1 = state_12368;var statearr_12384_12405 = state_12368__$1;(statearr_12384_12405[2] = null);
(statearr_12384_12405[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 13))
{var inst_12362 = (state_12368[2]);var state_12368__$1 = state_12368;var statearr_12385_12406 = state_12368__$1;(statearr_12385_12406[2] = inst_12362);
(statearr_12385_12406[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_12389 = [null,null,null,null,null,null,null,null];(statearr_12389[0] = state_machine__6824__auto__);
(statearr_12389[1] = 1);
return statearr_12389;
});
var state_machine__6824__auto____1 = (function (state_12368){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12390){if((e12390 instanceof Object))
{var ex__6827__auto__ = e12390;var statearr_12391_12407 = state_12368;(statearr_12391_12407[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12408 = state_12368;
state_12368 = G__12408;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12368){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12392 = f__6839__auto__.call(null);(statearr_12392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_12392;
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
cljs.core.async.Mux = (function (){var obj12410 = {};return obj12410;
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
cljs.core.async.Mult = (function (){var obj12412 = {};return obj12412;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12634 = (function (cs,ch,mult,meta12635){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12635 = meta12635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12634.cljs$lang$type = true;
cljs.core.async.t12634.cljs$lang$ctorStr = "cljs.core.async/t12634";
cljs.core.async.t12634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12634");
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12636){var self__ = this;
var _12636__$1 = this;return self__.meta12635;
});})(cs))
;
cljs.core.async.t12634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12636,meta12635__$1){var self__ = this;
var _12636__$1 = this;return (new cljs.core.async.t12634(self__.cs,self__.ch,self__.mult,meta12635__$1));
});})(cs))
;
cljs.core.async.__GT_t12634 = ((function (cs){
return (function __GT_t12634(cs__$1,ch__$1,mult__$1,meta12635){return (new cljs.core.async.t12634(cs__$1,ch__$1,mult__$1,meta12635));
});})(cs))
;
}
return (new cljs.core.async.t12634(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6838__auto___12855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_12767){var state_val_12768 = (state_12767[1]);if((state_val_12768 === 32))
{var inst_12710 = (state_12767[7]);var inst_12709 = (state_12767[8]);var inst_12707 = (state_12767[9]);var inst_12708 = (state_12767[10]);var inst_12722 = (state_12767[2]);var inst_12723 = (inst_12710 + 1);var tmp12769 = inst_12709;var tmp12770 = inst_12707;var tmp12771 = inst_12708;var inst_12707__$1 = tmp12770;var inst_12708__$1 = tmp12771;var inst_12709__$1 = tmp12769;var inst_12710__$1 = inst_12723;var state_12767__$1 = (function (){var statearr_12772 = state_12767;(statearr_12772[11] = inst_12722);
(statearr_12772[7] = inst_12710__$1);
(statearr_12772[8] = inst_12709__$1);
(statearr_12772[9] = inst_12707__$1);
(statearr_12772[10] = inst_12708__$1);
return statearr_12772;
})();var statearr_12773_12856 = state_12767__$1;(statearr_12773_12856[2] = null);
(statearr_12773_12856[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 1))
{var state_12767__$1 = state_12767;var statearr_12774_12857 = state_12767__$1;(statearr_12774_12857[2] = null);
(statearr_12774_12857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 33))
{var inst_12726 = (state_12767[12]);var inst_12728 = cljs.core.chunked_seq_QMARK_.call(null,inst_12726);var state_12767__$1 = state_12767;if(inst_12728)
{var statearr_12775_12858 = state_12767__$1;(statearr_12775_12858[1] = 36);
} else
{var statearr_12776_12859 = state_12767__$1;(statearr_12776_12859[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 2))
{var state_12767__$1 = state_12767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12767__$1,4,ch);
} else
{if((state_val_12768 === 34))
{var state_12767__$1 = state_12767;var statearr_12777_12860 = state_12767__$1;(statearr_12777_12860[2] = null);
(statearr_12777_12860[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 3))
{var inst_12765 = (state_12767[2]);var state_12767__$1 = state_12767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12767__$1,inst_12765);
} else
{if((state_val_12768 === 35))
{var inst_12749 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12778_12861 = state_12767__$1;(statearr_12778_12861[2] = inst_12749);
(statearr_12778_12861[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 4))
{var inst_12639 = (state_12767[13]);var inst_12639__$1 = (state_12767[2]);var inst_12640 = (inst_12639__$1 == null);var state_12767__$1 = (function (){var statearr_12779 = state_12767;(statearr_12779[13] = inst_12639__$1);
return statearr_12779;
})();if(cljs.core.truth_(inst_12640))
{var statearr_12780_12862 = state_12767__$1;(statearr_12780_12862[1] = 5);
} else
{var statearr_12781_12863 = state_12767__$1;(statearr_12781_12863[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 36))
{var inst_12726 = (state_12767[12]);var inst_12730 = cljs.core.chunk_first.call(null,inst_12726);var inst_12731 = cljs.core.chunk_rest.call(null,inst_12726);var inst_12732 = cljs.core.count.call(null,inst_12730);var inst_12707 = inst_12731;var inst_12708 = inst_12730;var inst_12709 = inst_12732;var inst_12710 = 0;var state_12767__$1 = (function (){var statearr_12782 = state_12767;(statearr_12782[7] = inst_12710);
(statearr_12782[8] = inst_12709);
(statearr_12782[9] = inst_12707);
(statearr_12782[10] = inst_12708);
return statearr_12782;
})();var statearr_12783_12864 = state_12767__$1;(statearr_12783_12864[2] = null);
(statearr_12783_12864[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 5))
{var inst_12646 = cljs.core.deref.call(null,cs);var inst_12647 = cljs.core.seq.call(null,inst_12646);var inst_12648 = inst_12647;var inst_12649 = null;var inst_12650 = 0;var inst_12651 = 0;var state_12767__$1 = (function (){var statearr_12784 = state_12767;(statearr_12784[14] = inst_12649);
(statearr_12784[15] = inst_12648);
(statearr_12784[16] = inst_12651);
(statearr_12784[17] = inst_12650);
return statearr_12784;
})();var statearr_12785_12865 = state_12767__$1;(statearr_12785_12865[2] = null);
(statearr_12785_12865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 37))
{var inst_12639 = (state_12767[13]);var inst_12726 = (state_12767[12]);var inst_12735 = (state_12767[18]);var inst_12735__$1 = cljs.core.first.call(null,inst_12726);var inst_12736 = cljs.core.async.put_BANG_.call(null,inst_12735__$1,inst_12639,done);var state_12767__$1 = (function (){var statearr_12786 = state_12767;(statearr_12786[18] = inst_12735__$1);
return statearr_12786;
})();if(cljs.core.truth_(inst_12736))
{var statearr_12787_12866 = state_12767__$1;(statearr_12787_12866[1] = 39);
} else
{var statearr_12788_12867 = state_12767__$1;(statearr_12788_12867[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 6))
{var inst_12699 = (state_12767[19]);var inst_12698 = cljs.core.deref.call(null,cs);var inst_12699__$1 = cljs.core.keys.call(null,inst_12698);var inst_12700 = cljs.core.count.call(null,inst_12699__$1);var inst_12701 = cljs.core.reset_BANG_.call(null,dctr,inst_12700);var inst_12706 = cljs.core.seq.call(null,inst_12699__$1);var inst_12707 = inst_12706;var inst_12708 = null;var inst_12709 = 0;var inst_12710 = 0;var state_12767__$1 = (function (){var statearr_12789 = state_12767;(statearr_12789[20] = inst_12701);
(statearr_12789[19] = inst_12699__$1);
(statearr_12789[7] = inst_12710);
(statearr_12789[8] = inst_12709);
(statearr_12789[9] = inst_12707);
(statearr_12789[10] = inst_12708);
return statearr_12789;
})();var statearr_12790_12868 = state_12767__$1;(statearr_12790_12868[2] = null);
(statearr_12790_12868[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 38))
{var inst_12746 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12791_12869 = state_12767__$1;(statearr_12791_12869[2] = inst_12746);
(statearr_12791_12869[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 7))
{var inst_12763 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12792_12870 = state_12767__$1;(statearr_12792_12870[2] = inst_12763);
(statearr_12792_12870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 39))
{var state_12767__$1 = state_12767;var statearr_12793_12871 = state_12767__$1;(statearr_12793_12871[2] = null);
(statearr_12793_12871[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 8))
{var inst_12651 = (state_12767[16]);var inst_12650 = (state_12767[17]);var inst_12653 = (inst_12651 < inst_12650);var inst_12654 = inst_12653;var state_12767__$1 = state_12767;if(cljs.core.truth_(inst_12654))
{var statearr_12794_12872 = state_12767__$1;(statearr_12794_12872[1] = 10);
} else
{var statearr_12795_12873 = state_12767__$1;(statearr_12795_12873[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 40))
{var inst_12735 = (state_12767[18]);var inst_12739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12740 = cljs.core.async.untap_STAR_.call(null,m,inst_12735);var state_12767__$1 = (function (){var statearr_12796 = state_12767;(statearr_12796[21] = inst_12739);
return statearr_12796;
})();var statearr_12797_12874 = state_12767__$1;(statearr_12797_12874[2] = inst_12740);
(statearr_12797_12874[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 9))
{var inst_12696 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12798_12875 = state_12767__$1;(statearr_12798_12875[2] = inst_12696);
(statearr_12798_12875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 41))
{var inst_12726 = (state_12767[12]);var inst_12742 = (state_12767[2]);var inst_12743 = cljs.core.next.call(null,inst_12726);var inst_12707 = inst_12743;var inst_12708 = null;var inst_12709 = 0;var inst_12710 = 0;var state_12767__$1 = (function (){var statearr_12799 = state_12767;(statearr_12799[22] = inst_12742);
(statearr_12799[7] = inst_12710);
(statearr_12799[8] = inst_12709);
(statearr_12799[9] = inst_12707);
(statearr_12799[10] = inst_12708);
return statearr_12799;
})();var statearr_12800_12876 = state_12767__$1;(statearr_12800_12876[2] = null);
(statearr_12800_12876[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 10))
{var inst_12649 = (state_12767[14]);var inst_12651 = (state_12767[16]);var inst_12657 = cljs.core._nth.call(null,inst_12649,inst_12651);var inst_12658 = cljs.core.nth.call(null,inst_12657,0,null);var inst_12659 = cljs.core.nth.call(null,inst_12657,1,null);var state_12767__$1 = (function (){var statearr_12801 = state_12767;(statearr_12801[23] = inst_12658);
return statearr_12801;
})();if(cljs.core.truth_(inst_12659))
{var statearr_12802_12877 = state_12767__$1;(statearr_12802_12877[1] = 13);
} else
{var statearr_12803_12878 = state_12767__$1;(statearr_12803_12878[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 42))
{var state_12767__$1 = state_12767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12767__$1,45,dchan);
} else
{if((state_val_12768 === 11))
{var inst_12668 = (state_12767[24]);var inst_12648 = (state_12767[15]);var inst_12668__$1 = cljs.core.seq.call(null,inst_12648);var state_12767__$1 = (function (){var statearr_12804 = state_12767;(statearr_12804[24] = inst_12668__$1);
return statearr_12804;
})();if(inst_12668__$1)
{var statearr_12805_12879 = state_12767__$1;(statearr_12805_12879[1] = 16);
} else
{var statearr_12806_12880 = state_12767__$1;(statearr_12806_12880[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 43))
{var state_12767__$1 = state_12767;var statearr_12807_12881 = state_12767__$1;(statearr_12807_12881[2] = null);
(statearr_12807_12881[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 12))
{var inst_12694 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12808_12882 = state_12767__$1;(statearr_12808_12882[2] = inst_12694);
(statearr_12808_12882[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 44))
{var inst_12760 = (state_12767[2]);var state_12767__$1 = (function (){var statearr_12809 = state_12767;(statearr_12809[25] = inst_12760);
return statearr_12809;
})();var statearr_12810_12883 = state_12767__$1;(statearr_12810_12883[2] = null);
(statearr_12810_12883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 13))
{var inst_12658 = (state_12767[23]);var inst_12661 = cljs.core.async.close_BANG_.call(null,inst_12658);var state_12767__$1 = state_12767;var statearr_12811_12884 = state_12767__$1;(statearr_12811_12884[2] = inst_12661);
(statearr_12811_12884[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 45))
{var inst_12757 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12815_12885 = state_12767__$1;(statearr_12815_12885[2] = inst_12757);
(statearr_12815_12885[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 14))
{var state_12767__$1 = state_12767;var statearr_12816_12886 = state_12767__$1;(statearr_12816_12886[2] = null);
(statearr_12816_12886[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 15))
{var inst_12649 = (state_12767[14]);var inst_12648 = (state_12767[15]);var inst_12651 = (state_12767[16]);var inst_12650 = (state_12767[17]);var inst_12664 = (state_12767[2]);var inst_12665 = (inst_12651 + 1);var tmp12812 = inst_12649;var tmp12813 = inst_12648;var tmp12814 = inst_12650;var inst_12648__$1 = tmp12813;var inst_12649__$1 = tmp12812;var inst_12650__$1 = tmp12814;var inst_12651__$1 = inst_12665;var state_12767__$1 = (function (){var statearr_12817 = state_12767;(statearr_12817[14] = inst_12649__$1);
(statearr_12817[15] = inst_12648__$1);
(statearr_12817[26] = inst_12664);
(statearr_12817[16] = inst_12651__$1);
(statearr_12817[17] = inst_12650__$1);
return statearr_12817;
})();var statearr_12818_12887 = state_12767__$1;(statearr_12818_12887[2] = null);
(statearr_12818_12887[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 16))
{var inst_12668 = (state_12767[24]);var inst_12670 = cljs.core.chunked_seq_QMARK_.call(null,inst_12668);var state_12767__$1 = state_12767;if(inst_12670)
{var statearr_12819_12888 = state_12767__$1;(statearr_12819_12888[1] = 19);
} else
{var statearr_12820_12889 = state_12767__$1;(statearr_12820_12889[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 17))
{var state_12767__$1 = state_12767;var statearr_12821_12890 = state_12767__$1;(statearr_12821_12890[2] = null);
(statearr_12821_12890[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 18))
{var inst_12692 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12822_12891 = state_12767__$1;(statearr_12822_12891[2] = inst_12692);
(statearr_12822_12891[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 19))
{var inst_12668 = (state_12767[24]);var inst_12672 = cljs.core.chunk_first.call(null,inst_12668);var inst_12673 = cljs.core.chunk_rest.call(null,inst_12668);var inst_12674 = cljs.core.count.call(null,inst_12672);var inst_12648 = inst_12673;var inst_12649 = inst_12672;var inst_12650 = inst_12674;var inst_12651 = 0;var state_12767__$1 = (function (){var statearr_12823 = state_12767;(statearr_12823[14] = inst_12649);
(statearr_12823[15] = inst_12648);
(statearr_12823[16] = inst_12651);
(statearr_12823[17] = inst_12650);
return statearr_12823;
})();var statearr_12824_12892 = state_12767__$1;(statearr_12824_12892[2] = null);
(statearr_12824_12892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 20))
{var inst_12668 = (state_12767[24]);var inst_12678 = cljs.core.first.call(null,inst_12668);var inst_12679 = cljs.core.nth.call(null,inst_12678,0,null);var inst_12680 = cljs.core.nth.call(null,inst_12678,1,null);var state_12767__$1 = (function (){var statearr_12825 = state_12767;(statearr_12825[27] = inst_12679);
return statearr_12825;
})();if(cljs.core.truth_(inst_12680))
{var statearr_12826_12893 = state_12767__$1;(statearr_12826_12893[1] = 22);
} else
{var statearr_12827_12894 = state_12767__$1;(statearr_12827_12894[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 21))
{var inst_12689 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12828_12895 = state_12767__$1;(statearr_12828_12895[2] = inst_12689);
(statearr_12828_12895[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 22))
{var inst_12679 = (state_12767[27]);var inst_12682 = cljs.core.async.close_BANG_.call(null,inst_12679);var state_12767__$1 = state_12767;var statearr_12829_12896 = state_12767__$1;(statearr_12829_12896[2] = inst_12682);
(statearr_12829_12896[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 23))
{var state_12767__$1 = state_12767;var statearr_12830_12897 = state_12767__$1;(statearr_12830_12897[2] = null);
(statearr_12830_12897[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 24))
{var inst_12668 = (state_12767[24]);var inst_12685 = (state_12767[2]);var inst_12686 = cljs.core.next.call(null,inst_12668);var inst_12648 = inst_12686;var inst_12649 = null;var inst_12650 = 0;var inst_12651 = 0;var state_12767__$1 = (function (){var statearr_12831 = state_12767;(statearr_12831[14] = inst_12649);
(statearr_12831[15] = inst_12648);
(statearr_12831[16] = inst_12651);
(statearr_12831[17] = inst_12650);
(statearr_12831[28] = inst_12685);
return statearr_12831;
})();var statearr_12832_12898 = state_12767__$1;(statearr_12832_12898[2] = null);
(statearr_12832_12898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 25))
{var inst_12710 = (state_12767[7]);var inst_12709 = (state_12767[8]);var inst_12712 = (inst_12710 < inst_12709);var inst_12713 = inst_12712;var state_12767__$1 = state_12767;if(cljs.core.truth_(inst_12713))
{var statearr_12833_12899 = state_12767__$1;(statearr_12833_12899[1] = 27);
} else
{var statearr_12834_12900 = state_12767__$1;(statearr_12834_12900[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 26))
{var inst_12699 = (state_12767[19]);var inst_12753 = (state_12767[2]);var inst_12754 = cljs.core.seq.call(null,inst_12699);var state_12767__$1 = (function (){var statearr_12835 = state_12767;(statearr_12835[29] = inst_12753);
return statearr_12835;
})();if(inst_12754)
{var statearr_12836_12901 = state_12767__$1;(statearr_12836_12901[1] = 42);
} else
{var statearr_12837_12902 = state_12767__$1;(statearr_12837_12902[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 27))
{var inst_12715 = (state_12767[30]);var inst_12639 = (state_12767[13]);var inst_12710 = (state_12767[7]);var inst_12708 = (state_12767[10]);var inst_12715__$1 = cljs.core._nth.call(null,inst_12708,inst_12710);var inst_12716 = cljs.core.async.put_BANG_.call(null,inst_12715__$1,inst_12639,done);var state_12767__$1 = (function (){var statearr_12838 = state_12767;(statearr_12838[30] = inst_12715__$1);
return statearr_12838;
})();if(cljs.core.truth_(inst_12716))
{var statearr_12839_12903 = state_12767__$1;(statearr_12839_12903[1] = 30);
} else
{var statearr_12840_12904 = state_12767__$1;(statearr_12840_12904[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 28))
{var inst_12726 = (state_12767[12]);var inst_12707 = (state_12767[9]);var inst_12726__$1 = cljs.core.seq.call(null,inst_12707);var state_12767__$1 = (function (){var statearr_12841 = state_12767;(statearr_12841[12] = inst_12726__$1);
return statearr_12841;
})();if(inst_12726__$1)
{var statearr_12842_12905 = state_12767__$1;(statearr_12842_12905[1] = 33);
} else
{var statearr_12843_12906 = state_12767__$1;(statearr_12843_12906[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 29))
{var inst_12751 = (state_12767[2]);var state_12767__$1 = state_12767;var statearr_12844_12907 = state_12767__$1;(statearr_12844_12907[2] = inst_12751);
(statearr_12844_12907[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 30))
{var state_12767__$1 = state_12767;var statearr_12845_12908 = state_12767__$1;(statearr_12845_12908[2] = null);
(statearr_12845_12908[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12768 === 31))
{var inst_12715 = (state_12767[30]);var inst_12719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12720 = cljs.core.async.untap_STAR_.call(null,m,inst_12715);var state_12767__$1 = (function (){var statearr_12846 = state_12767;(statearr_12846[31] = inst_12719);
return statearr_12846;
})();var statearr_12847_12909 = state_12767__$1;(statearr_12847_12909[2] = inst_12720);
(statearr_12847_12909[1] = 32);
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
var state_machine__6824__auto____0 = (function (){var statearr_12851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12851[0] = state_machine__6824__auto__);
(statearr_12851[1] = 1);
return statearr_12851;
});
var state_machine__6824__auto____1 = (function (state_12767){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_12767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e12852){if((e12852 instanceof Object))
{var ex__6827__auto__ = e12852;var statearr_12853_12910 = state_12767;(statearr_12853_12910[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12911 = state_12767;
state_12767 = G__12911;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_12854 = f__6839__auto__.call(null);(statearr_12854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___12855);
return statearr_12854;
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
cljs.core.async.Mix = (function (){var obj12913 = {};return obj12913;
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
;var m = (function (){if(typeof cljs.core.async.t13033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13033 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13034){
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
this.meta13034 = meta13034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13033.cljs$lang$type = true;
cljs.core.async.t13033.cljs$lang$ctorStr = "cljs.core.async/t13033";
cljs.core.async.t13033.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13033");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13035){var self__ = this;
var _13035__$1 = this;return self__.meta13034;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13035,meta13034__$1){var self__ = this;
var _13035__$1 = this;return (new cljs.core.async.t13033(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13034__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13033 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13033(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13034){return (new cljs.core.async.t13033(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13034));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13033(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6838__auto___13152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13105){var state_val_13106 = (state_13105[1]);if((state_val_13106 === 1))
{var inst_13039 = (state_13105[7]);var inst_13039__$1 = calc_state.call(null);var inst_13040 = cljs.core.seq_QMARK_.call(null,inst_13039__$1);var state_13105__$1 = (function (){var statearr_13107 = state_13105;(statearr_13107[7] = inst_13039__$1);
return statearr_13107;
})();if(inst_13040)
{var statearr_13108_13153 = state_13105__$1;(statearr_13108_13153[1] = 2);
} else
{var statearr_13109_13154 = state_13105__$1;(statearr_13109_13154[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 2))
{var inst_13039 = (state_13105[7]);var inst_13042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13039);var state_13105__$1 = state_13105;var statearr_13110_13155 = state_13105__$1;(statearr_13110_13155[2] = inst_13042);
(statearr_13110_13155[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 3))
{var inst_13039 = (state_13105[7]);var state_13105__$1 = state_13105;var statearr_13111_13156 = state_13105__$1;(statearr_13111_13156[2] = inst_13039);
(statearr_13111_13156[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 4))
{var inst_13039 = (state_13105[7]);var inst_13045 = (state_13105[2]);var inst_13046 = cljs.core.get.call(null,inst_13045,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13047 = cljs.core.get.call(null,inst_13045,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13048 = cljs.core.get.call(null,inst_13045,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13049 = inst_13039;var state_13105__$1 = (function (){var statearr_13112 = state_13105;(statearr_13112[8] = inst_13049);
(statearr_13112[9] = inst_13048);
(statearr_13112[10] = inst_13047);
(statearr_13112[11] = inst_13046);
return statearr_13112;
})();var statearr_13113_13157 = state_13105__$1;(statearr_13113_13157[2] = null);
(statearr_13113_13157[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 5))
{var inst_13049 = (state_13105[8]);var inst_13052 = cljs.core.seq_QMARK_.call(null,inst_13049);var state_13105__$1 = state_13105;if(inst_13052)
{var statearr_13114_13158 = state_13105__$1;(statearr_13114_13158[1] = 7);
} else
{var statearr_13115_13159 = state_13105__$1;(statearr_13115_13159[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 6))
{var inst_13103 = (state_13105[2]);var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13105__$1,inst_13103);
} else
{if((state_val_13106 === 7))
{var inst_13049 = (state_13105[8]);var inst_13054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13049);var state_13105__$1 = state_13105;var statearr_13116_13160 = state_13105__$1;(statearr_13116_13160[2] = inst_13054);
(statearr_13116_13160[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 8))
{var inst_13049 = (state_13105[8]);var state_13105__$1 = state_13105;var statearr_13117_13161 = state_13105__$1;(statearr_13117_13161[2] = inst_13049);
(statearr_13117_13161[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 9))
{var inst_13057 = (state_13105[12]);var inst_13057__$1 = (state_13105[2]);var inst_13058 = cljs.core.get.call(null,inst_13057__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13059 = cljs.core.get.call(null,inst_13057__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13060 = cljs.core.get.call(null,inst_13057__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13105__$1 = (function (){var statearr_13118 = state_13105;(statearr_13118[13] = inst_13060);
(statearr_13118[12] = inst_13057__$1);
(statearr_13118[14] = inst_13059);
return statearr_13118;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13105__$1,10,inst_13058);
} else
{if((state_val_13106 === 10))
{var inst_13065 = (state_13105[15]);var inst_13064 = (state_13105[16]);var inst_13063 = (state_13105[2]);var inst_13064__$1 = cljs.core.nth.call(null,inst_13063,0,null);var inst_13065__$1 = cljs.core.nth.call(null,inst_13063,1,null);var inst_13066 = (inst_13064__$1 == null);var inst_13067 = cljs.core._EQ_.call(null,inst_13065__$1,change);var inst_13068 = (inst_13066) || (inst_13067);var state_13105__$1 = (function (){var statearr_13119 = state_13105;(statearr_13119[15] = inst_13065__$1);
(statearr_13119[16] = inst_13064__$1);
return statearr_13119;
})();if(cljs.core.truth_(inst_13068))
{var statearr_13120_13162 = state_13105__$1;(statearr_13120_13162[1] = 11);
} else
{var statearr_13121_13163 = state_13105__$1;(statearr_13121_13163[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 11))
{var inst_13064 = (state_13105[16]);var inst_13070 = (inst_13064 == null);var state_13105__$1 = state_13105;if(cljs.core.truth_(inst_13070))
{var statearr_13122_13164 = state_13105__$1;(statearr_13122_13164[1] = 14);
} else
{var statearr_13123_13165 = state_13105__$1;(statearr_13123_13165[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 12))
{var inst_13079 = (state_13105[17]);var inst_13060 = (state_13105[13]);var inst_13065 = (state_13105[15]);var inst_13079__$1 = inst_13060.call(null,inst_13065);var state_13105__$1 = (function (){var statearr_13124 = state_13105;(statearr_13124[17] = inst_13079__$1);
return statearr_13124;
})();if(cljs.core.truth_(inst_13079__$1))
{var statearr_13125_13166 = state_13105__$1;(statearr_13125_13166[1] = 17);
} else
{var statearr_13126_13167 = state_13105__$1;(statearr_13126_13167[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 13))
{var inst_13101 = (state_13105[2]);var state_13105__$1 = state_13105;var statearr_13127_13168 = state_13105__$1;(statearr_13127_13168[2] = inst_13101);
(statearr_13127_13168[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 14))
{var inst_13065 = (state_13105[15]);var inst_13072 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13065);var state_13105__$1 = state_13105;var statearr_13128_13169 = state_13105__$1;(statearr_13128_13169[2] = inst_13072);
(statearr_13128_13169[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 15))
{var state_13105__$1 = state_13105;var statearr_13129_13170 = state_13105__$1;(statearr_13129_13170[2] = null);
(statearr_13129_13170[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 16))
{var inst_13075 = (state_13105[2]);var inst_13076 = calc_state.call(null);var inst_13049 = inst_13076;var state_13105__$1 = (function (){var statearr_13130 = state_13105;(statearr_13130[8] = inst_13049);
(statearr_13130[18] = inst_13075);
return statearr_13130;
})();var statearr_13131_13171 = state_13105__$1;(statearr_13131_13171[2] = null);
(statearr_13131_13171[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 17))
{var inst_13079 = (state_13105[17]);var state_13105__$1 = state_13105;var statearr_13132_13172 = state_13105__$1;(statearr_13132_13172[2] = inst_13079);
(statearr_13132_13172[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 18))
{var inst_13060 = (state_13105[13]);var inst_13065 = (state_13105[15]);var inst_13059 = (state_13105[14]);var inst_13082 = cljs.core.empty_QMARK_.call(null,inst_13060);var inst_13083 = inst_13059.call(null,inst_13065);var inst_13084 = cljs.core.not.call(null,inst_13083);var inst_13085 = (inst_13082) && (inst_13084);var state_13105__$1 = state_13105;var statearr_13133_13173 = state_13105__$1;(statearr_13133_13173[2] = inst_13085);
(statearr_13133_13173[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 19))
{var inst_13087 = (state_13105[2]);var state_13105__$1 = state_13105;if(cljs.core.truth_(inst_13087))
{var statearr_13134_13174 = state_13105__$1;(statearr_13134_13174[1] = 20);
} else
{var statearr_13135_13175 = state_13105__$1;(statearr_13135_13175[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 20))
{var inst_13064 = (state_13105[16]);var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13105__$1,23,out,inst_13064);
} else
{if((state_val_13106 === 21))
{var inst_13057 = (state_13105[12]);var inst_13049 = inst_13057;var state_13105__$1 = (function (){var statearr_13136 = state_13105;(statearr_13136[8] = inst_13049);
return statearr_13136;
})();var statearr_13137_13176 = state_13105__$1;(statearr_13137_13176[2] = null);
(statearr_13137_13176[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 22))
{var inst_13099 = (state_13105[2]);var state_13105__$1 = state_13105;var statearr_13138_13177 = state_13105__$1;(statearr_13138_13177[2] = inst_13099);
(statearr_13138_13177[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 23))
{var inst_13090 = (state_13105[2]);var state_13105__$1 = state_13105;if(cljs.core.truth_(inst_13090))
{var statearr_13139_13178 = state_13105__$1;(statearr_13139_13178[1] = 24);
} else
{var statearr_13140_13179 = state_13105__$1;(statearr_13140_13179[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 24))
{var inst_13057 = (state_13105[12]);var inst_13049 = inst_13057;var state_13105__$1 = (function (){var statearr_13141 = state_13105;(statearr_13141[8] = inst_13049);
return statearr_13141;
})();var statearr_13142_13180 = state_13105__$1;(statearr_13142_13180[2] = null);
(statearr_13142_13180[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 25))
{var state_13105__$1 = state_13105;var statearr_13143_13181 = state_13105__$1;(statearr_13143_13181[2] = null);
(statearr_13143_13181[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13106 === 26))
{var inst_13095 = (state_13105[2]);var state_13105__$1 = state_13105;var statearr_13144_13182 = state_13105__$1;(statearr_13144_13182[2] = inst_13095);
(statearr_13144_13182[1] = 22);
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
var state_machine__6824__auto____0 = (function (){var statearr_13148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13148[0] = state_machine__6824__auto__);
(statearr_13148[1] = 1);
return statearr_13148;
});
var state_machine__6824__auto____1 = (function (state_13105){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13149){if((e13149 instanceof Object))
{var ex__6827__auto__ = e13149;var statearr_13150_13183 = state_13105;(statearr_13150_13183[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13184 = state_13105;
state_13105 = G__13184;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13105){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13151 = f__6839__auto__.call(null);(statearr_13151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13152);
return statearr_13151;
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
cljs.core.async.Pub = (function (){var obj13186 = {};return obj13186;
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
return (function (p1__13187_SHARP_){if(cljs.core.truth_(p1__13187_SHARP_.call(null,topic)))
{return p1__13187_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13310 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13311){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13311 = meta13311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13310.cljs$lang$type = true;
cljs.core.async.t13310.cljs$lang$ctorStr = "cljs.core.async/t13310";
cljs.core.async.t13310.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13310");
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13312){var self__ = this;
var _13312__$1 = this;return self__.meta13311;
});})(mults,ensure_mult))
;
cljs.core.async.t13310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13312,meta13311__$1){var self__ = this;
var _13312__$1 = this;return (new cljs.core.async.t13310(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13311__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13310 = ((function (mults,ensure_mult){
return (function __GT_t13310(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13311){return (new cljs.core.async.t13310(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13311));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13310(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6838__auto___13432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13384){var state_val_13385 = (state_13384[1]);if((state_val_13385 === 1))
{var state_13384__$1 = state_13384;var statearr_13386_13433 = state_13384__$1;(statearr_13386_13433[2] = null);
(statearr_13386_13433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 2))
{var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13384__$1,4,ch);
} else
{if((state_val_13385 === 3))
{var inst_13382 = (state_13384[2]);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13384__$1,inst_13382);
} else
{if((state_val_13385 === 4))
{var inst_13315 = (state_13384[7]);var inst_13315__$1 = (state_13384[2]);var inst_13316 = (inst_13315__$1 == null);var state_13384__$1 = (function (){var statearr_13387 = state_13384;(statearr_13387[7] = inst_13315__$1);
return statearr_13387;
})();if(cljs.core.truth_(inst_13316))
{var statearr_13388_13434 = state_13384__$1;(statearr_13388_13434[1] = 5);
} else
{var statearr_13389_13435 = state_13384__$1;(statearr_13389_13435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 5))
{var inst_13322 = cljs.core.deref.call(null,mults);var inst_13323 = cljs.core.vals.call(null,inst_13322);var inst_13324 = cljs.core.seq.call(null,inst_13323);var inst_13325 = inst_13324;var inst_13326 = null;var inst_13327 = 0;var inst_13328 = 0;var state_13384__$1 = (function (){var statearr_13390 = state_13384;(statearr_13390[8] = inst_13325);
(statearr_13390[9] = inst_13326);
(statearr_13390[10] = inst_13327);
(statearr_13390[11] = inst_13328);
return statearr_13390;
})();var statearr_13391_13436 = state_13384__$1;(statearr_13391_13436[2] = null);
(statearr_13391_13436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 6))
{var inst_13315 = (state_13384[7]);var inst_13365 = (state_13384[12]);var inst_13363 = (state_13384[13]);var inst_13363__$1 = topic_fn.call(null,inst_13315);var inst_13364 = cljs.core.deref.call(null,mults);var inst_13365__$1 = cljs.core.get.call(null,inst_13364,inst_13363__$1);var state_13384__$1 = (function (){var statearr_13392 = state_13384;(statearr_13392[12] = inst_13365__$1);
(statearr_13392[13] = inst_13363__$1);
return statearr_13392;
})();if(cljs.core.truth_(inst_13365__$1))
{var statearr_13393_13437 = state_13384__$1;(statearr_13393_13437[1] = 19);
} else
{var statearr_13394_13438 = state_13384__$1;(statearr_13394_13438[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 7))
{var inst_13380 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13395_13439 = state_13384__$1;(statearr_13395_13439[2] = inst_13380);
(statearr_13395_13439[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 8))
{var inst_13327 = (state_13384[10]);var inst_13328 = (state_13384[11]);var inst_13330 = (inst_13328 < inst_13327);var inst_13331 = inst_13330;var state_13384__$1 = state_13384;if(cljs.core.truth_(inst_13331))
{var statearr_13399_13440 = state_13384__$1;(statearr_13399_13440[1] = 10);
} else
{var statearr_13400_13441 = state_13384__$1;(statearr_13400_13441[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 9))
{var inst_13361 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13401_13442 = state_13384__$1;(statearr_13401_13442[2] = inst_13361);
(statearr_13401_13442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 10))
{var inst_13325 = (state_13384[8]);var inst_13326 = (state_13384[9]);var inst_13327 = (state_13384[10]);var inst_13328 = (state_13384[11]);var inst_13333 = cljs.core._nth.call(null,inst_13326,inst_13328);var inst_13334 = cljs.core.async.muxch_STAR_.call(null,inst_13333);var inst_13335 = cljs.core.async.close_BANG_.call(null,inst_13334);var inst_13336 = (inst_13328 + 1);var tmp13396 = inst_13325;var tmp13397 = inst_13326;var tmp13398 = inst_13327;var inst_13325__$1 = tmp13396;var inst_13326__$1 = tmp13397;var inst_13327__$1 = tmp13398;var inst_13328__$1 = inst_13336;var state_13384__$1 = (function (){var statearr_13402 = state_13384;(statearr_13402[8] = inst_13325__$1);
(statearr_13402[9] = inst_13326__$1);
(statearr_13402[10] = inst_13327__$1);
(statearr_13402[14] = inst_13335);
(statearr_13402[11] = inst_13328__$1);
return statearr_13402;
})();var statearr_13403_13443 = state_13384__$1;(statearr_13403_13443[2] = null);
(statearr_13403_13443[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 11))
{var inst_13325 = (state_13384[8]);var inst_13339 = (state_13384[15]);var inst_13339__$1 = cljs.core.seq.call(null,inst_13325);var state_13384__$1 = (function (){var statearr_13404 = state_13384;(statearr_13404[15] = inst_13339__$1);
return statearr_13404;
})();if(inst_13339__$1)
{var statearr_13405_13444 = state_13384__$1;(statearr_13405_13444[1] = 13);
} else
{var statearr_13406_13445 = state_13384__$1;(statearr_13406_13445[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 12))
{var inst_13359 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13407_13446 = state_13384__$1;(statearr_13407_13446[2] = inst_13359);
(statearr_13407_13446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 13))
{var inst_13339 = (state_13384[15]);var inst_13341 = cljs.core.chunked_seq_QMARK_.call(null,inst_13339);var state_13384__$1 = state_13384;if(inst_13341)
{var statearr_13408_13447 = state_13384__$1;(statearr_13408_13447[1] = 16);
} else
{var statearr_13409_13448 = state_13384__$1;(statearr_13409_13448[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 14))
{var state_13384__$1 = state_13384;var statearr_13410_13449 = state_13384__$1;(statearr_13410_13449[2] = null);
(statearr_13410_13449[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 15))
{var inst_13357 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13411_13450 = state_13384__$1;(statearr_13411_13450[2] = inst_13357);
(statearr_13411_13450[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 16))
{var inst_13339 = (state_13384[15]);var inst_13343 = cljs.core.chunk_first.call(null,inst_13339);var inst_13344 = cljs.core.chunk_rest.call(null,inst_13339);var inst_13345 = cljs.core.count.call(null,inst_13343);var inst_13325 = inst_13344;var inst_13326 = inst_13343;var inst_13327 = inst_13345;var inst_13328 = 0;var state_13384__$1 = (function (){var statearr_13412 = state_13384;(statearr_13412[8] = inst_13325);
(statearr_13412[9] = inst_13326);
(statearr_13412[10] = inst_13327);
(statearr_13412[11] = inst_13328);
return statearr_13412;
})();var statearr_13413_13451 = state_13384__$1;(statearr_13413_13451[2] = null);
(statearr_13413_13451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 17))
{var inst_13339 = (state_13384[15]);var inst_13348 = cljs.core.first.call(null,inst_13339);var inst_13349 = cljs.core.async.muxch_STAR_.call(null,inst_13348);var inst_13350 = cljs.core.async.close_BANG_.call(null,inst_13349);var inst_13351 = cljs.core.next.call(null,inst_13339);var inst_13325 = inst_13351;var inst_13326 = null;var inst_13327 = 0;var inst_13328 = 0;var state_13384__$1 = (function (){var statearr_13414 = state_13384;(statearr_13414[8] = inst_13325);
(statearr_13414[16] = inst_13350);
(statearr_13414[9] = inst_13326);
(statearr_13414[10] = inst_13327);
(statearr_13414[11] = inst_13328);
return statearr_13414;
})();var statearr_13415_13452 = state_13384__$1;(statearr_13415_13452[2] = null);
(statearr_13415_13452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 18))
{var inst_13354 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13416_13453 = state_13384__$1;(statearr_13416_13453[2] = inst_13354);
(statearr_13416_13453[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 19))
{var inst_13315 = (state_13384[7]);var inst_13365 = (state_13384[12]);var inst_13367 = cljs.core.async.muxch_STAR_.call(null,inst_13365);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13384__$1,22,inst_13367,inst_13315);
} else
{if((state_val_13385 === 20))
{var state_13384__$1 = state_13384;var statearr_13417_13454 = state_13384__$1;(statearr_13417_13454[2] = null);
(statearr_13417_13454[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 21))
{var inst_13377 = (state_13384[2]);var state_13384__$1 = (function (){var statearr_13418 = state_13384;(statearr_13418[17] = inst_13377);
return statearr_13418;
})();var statearr_13419_13455 = state_13384__$1;(statearr_13419_13455[2] = null);
(statearr_13419_13455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 22))
{var inst_13369 = (state_13384[2]);var state_13384__$1 = state_13384;if(cljs.core.truth_(inst_13369))
{var statearr_13420_13456 = state_13384__$1;(statearr_13420_13456[1] = 23);
} else
{var statearr_13421_13457 = state_13384__$1;(statearr_13421_13457[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 23))
{var state_13384__$1 = state_13384;var statearr_13422_13458 = state_13384__$1;(statearr_13422_13458[2] = null);
(statearr_13422_13458[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 24))
{var inst_13363 = (state_13384[13]);var inst_13372 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13363);var state_13384__$1 = state_13384;var statearr_13423_13459 = state_13384__$1;(statearr_13423_13459[2] = inst_13372);
(statearr_13423_13459[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 25))
{var inst_13374 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13424_13460 = state_13384__$1;(statearr_13424_13460[2] = inst_13374);
(statearr_13424_13460[1] = 21);
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
var state_machine__6824__auto____0 = (function (){var statearr_13428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13428[0] = state_machine__6824__auto__);
(statearr_13428[1] = 1);
return statearr_13428;
});
var state_machine__6824__auto____1 = (function (state_13384){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13429){if((e13429 instanceof Object))
{var ex__6827__auto__ = e13429;var statearr_13430_13461 = state_13384;(statearr_13430_13461[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13462 = state_13384;
state_13384 = G__13462;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13384){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13431 = f__6839__auto__.call(null);(statearr_13431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13432);
return statearr_13431;
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
,cljs.core.range.call(null,cnt));var c__6838__auto___13599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13569){var state_val_13570 = (state_13569[1]);if((state_val_13570 === 1))
{var state_13569__$1 = state_13569;var statearr_13571_13600 = state_13569__$1;(statearr_13571_13600[2] = null);
(statearr_13571_13600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 2))
{var inst_13532 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13533 = 0;var state_13569__$1 = (function (){var statearr_13572 = state_13569;(statearr_13572[7] = inst_13533);
(statearr_13572[8] = inst_13532);
return statearr_13572;
})();var statearr_13573_13601 = state_13569__$1;(statearr_13573_13601[2] = null);
(statearr_13573_13601[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 3))
{var inst_13567 = (state_13569[2]);var state_13569__$1 = state_13569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13569__$1,inst_13567);
} else
{if((state_val_13570 === 4))
{var inst_13533 = (state_13569[7]);var inst_13535 = (inst_13533 < cnt);var state_13569__$1 = state_13569;if(cljs.core.truth_(inst_13535))
{var statearr_13574_13602 = state_13569__$1;(statearr_13574_13602[1] = 6);
} else
{var statearr_13575_13603 = state_13569__$1;(statearr_13575_13603[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 5))
{var inst_13553 = (state_13569[2]);var state_13569__$1 = (function (){var statearr_13576 = state_13569;(statearr_13576[9] = inst_13553);
return statearr_13576;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13569__$1,12,dchan);
} else
{if((state_val_13570 === 6))
{var state_13569__$1 = state_13569;var statearr_13577_13604 = state_13569__$1;(statearr_13577_13604[2] = null);
(statearr_13577_13604[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 7))
{var state_13569__$1 = state_13569;var statearr_13578_13605 = state_13569__$1;(statearr_13578_13605[2] = null);
(statearr_13578_13605[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 8))
{var inst_13551 = (state_13569[2]);var state_13569__$1 = state_13569;var statearr_13579_13606 = state_13569__$1;(statearr_13579_13606[2] = inst_13551);
(statearr_13579_13606[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 9))
{var inst_13533 = (state_13569[7]);var inst_13546 = (state_13569[2]);var inst_13547 = (inst_13533 + 1);var inst_13533__$1 = inst_13547;var state_13569__$1 = (function (){var statearr_13580 = state_13569;(statearr_13580[10] = inst_13546);
(statearr_13580[7] = inst_13533__$1);
return statearr_13580;
})();var statearr_13581_13607 = state_13569__$1;(statearr_13581_13607[2] = null);
(statearr_13581_13607[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 10))
{var inst_13537 = (state_13569[2]);var inst_13538 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13569__$1 = (function (){var statearr_13582 = state_13569;(statearr_13582[11] = inst_13537);
return statearr_13582;
})();var statearr_13583_13608 = state_13569__$1;(statearr_13583_13608[2] = inst_13538);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13569__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 11))
{var inst_13533 = (state_13569[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13569,10,Object,null,9);var inst_13542 = chs__$1.call(null,inst_13533);var inst_13543 = done.call(null,inst_13533);var inst_13544 = cljs.core.async.take_BANG_.call(null,inst_13542,inst_13543);var state_13569__$1 = state_13569;var statearr_13584_13609 = state_13569__$1;(statearr_13584_13609[2] = inst_13544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13569__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 12))
{var inst_13555 = (state_13569[12]);var inst_13555__$1 = (state_13569[2]);var inst_13556 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13555__$1);var state_13569__$1 = (function (){var statearr_13585 = state_13569;(statearr_13585[12] = inst_13555__$1);
return statearr_13585;
})();if(cljs.core.truth_(inst_13556))
{var statearr_13586_13610 = state_13569__$1;(statearr_13586_13610[1] = 13);
} else
{var statearr_13587_13611 = state_13569__$1;(statearr_13587_13611[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 13))
{var inst_13558 = cljs.core.async.close_BANG_.call(null,out);var state_13569__$1 = state_13569;var statearr_13588_13612 = state_13569__$1;(statearr_13588_13612[2] = inst_13558);
(statearr_13588_13612[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 14))
{var inst_13555 = (state_13569[12]);var inst_13560 = cljs.core.apply.call(null,f,inst_13555);var state_13569__$1 = state_13569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13569__$1,16,out,inst_13560);
} else
{if((state_val_13570 === 15))
{var inst_13565 = (state_13569[2]);var state_13569__$1 = state_13569;var statearr_13589_13613 = state_13569__$1;(statearr_13589_13613[2] = inst_13565);
(statearr_13589_13613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13570 === 16))
{var inst_13562 = (state_13569[2]);var state_13569__$1 = (function (){var statearr_13590 = state_13569;(statearr_13590[13] = inst_13562);
return statearr_13590;
})();var statearr_13591_13614 = state_13569__$1;(statearr_13591_13614[2] = null);
(statearr_13591_13614[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_13595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13595[0] = state_machine__6824__auto__);
(statearr_13595[1] = 1);
return statearr_13595;
});
var state_machine__6824__auto____1 = (function (state_13569){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13569);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13596){if((e13596 instanceof Object))
{var ex__6827__auto__ = e13596;var statearr_13597_13615 = state_13569;(statearr_13597_13615[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13616 = state_13569;
state_13569 = G__13616;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13569){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13598 = f__6839__auto__.call(null);(statearr_13598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13599);
return statearr_13598;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13700){var state_val_13701 = (state_13700[1]);if((state_val_13701 === 1))
{var inst_13671 = cljs.core.vec.call(null,chs);var inst_13672 = inst_13671;var state_13700__$1 = (function (){var statearr_13702 = state_13700;(statearr_13702[7] = inst_13672);
return statearr_13702;
})();var statearr_13703_13725 = state_13700__$1;(statearr_13703_13725[2] = null);
(statearr_13703_13725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 2))
{var inst_13672 = (state_13700[7]);var inst_13674 = cljs.core.count.call(null,inst_13672);var inst_13675 = (inst_13674 > 0);var state_13700__$1 = state_13700;if(cljs.core.truth_(inst_13675))
{var statearr_13704_13726 = state_13700__$1;(statearr_13704_13726[1] = 4);
} else
{var statearr_13705_13727 = state_13700__$1;(statearr_13705_13727[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 3))
{var inst_13698 = (state_13700[2]);var state_13700__$1 = state_13700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13700__$1,inst_13698);
} else
{if((state_val_13701 === 4))
{var inst_13672 = (state_13700[7]);var state_13700__$1 = state_13700;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13700__$1,7,inst_13672);
} else
{if((state_val_13701 === 5))
{var inst_13694 = cljs.core.async.close_BANG_.call(null,out);var state_13700__$1 = state_13700;var statearr_13706_13728 = state_13700__$1;(statearr_13706_13728[2] = inst_13694);
(statearr_13706_13728[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 6))
{var inst_13696 = (state_13700[2]);var state_13700__$1 = state_13700;var statearr_13707_13729 = state_13700__$1;(statearr_13707_13729[2] = inst_13696);
(statearr_13707_13729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 7))
{var inst_13679 = (state_13700[8]);var inst_13680 = (state_13700[9]);var inst_13679__$1 = (state_13700[2]);var inst_13680__$1 = cljs.core.nth.call(null,inst_13679__$1,0,null);var inst_13681 = cljs.core.nth.call(null,inst_13679__$1,1,null);var inst_13682 = (inst_13680__$1 == null);var state_13700__$1 = (function (){var statearr_13708 = state_13700;(statearr_13708[8] = inst_13679__$1);
(statearr_13708[10] = inst_13681);
(statearr_13708[9] = inst_13680__$1);
return statearr_13708;
})();if(cljs.core.truth_(inst_13682))
{var statearr_13709_13730 = state_13700__$1;(statearr_13709_13730[1] = 8);
} else
{var statearr_13710_13731 = state_13700__$1;(statearr_13710_13731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 8))
{var inst_13672 = (state_13700[7]);var inst_13679 = (state_13700[8]);var inst_13681 = (state_13700[10]);var inst_13680 = (state_13700[9]);var inst_13684 = (function (){var c = inst_13681;var v = inst_13680;var vec__13677 = inst_13679;var cs = inst_13672;return ((function (c,v,vec__13677,cs,inst_13672,inst_13679,inst_13681,inst_13680,state_val_13701){
return (function (p1__13617_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13617_SHARP_);
});
;})(c,v,vec__13677,cs,inst_13672,inst_13679,inst_13681,inst_13680,state_val_13701))
})();var inst_13685 = cljs.core.filterv.call(null,inst_13684,inst_13672);var inst_13672__$1 = inst_13685;var state_13700__$1 = (function (){var statearr_13711 = state_13700;(statearr_13711[7] = inst_13672__$1);
return statearr_13711;
})();var statearr_13712_13732 = state_13700__$1;(statearr_13712_13732[2] = null);
(statearr_13712_13732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 9))
{var inst_13680 = (state_13700[9]);var state_13700__$1 = state_13700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13700__$1,11,out,inst_13680);
} else
{if((state_val_13701 === 10))
{var inst_13692 = (state_13700[2]);var state_13700__$1 = state_13700;var statearr_13714_13733 = state_13700__$1;(statearr_13714_13733[2] = inst_13692);
(statearr_13714_13733[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 11))
{var inst_13672 = (state_13700[7]);var inst_13689 = (state_13700[2]);var tmp13713 = inst_13672;var inst_13672__$1 = tmp13713;var state_13700__$1 = (function (){var statearr_13715 = state_13700;(statearr_13715[7] = inst_13672__$1);
(statearr_13715[11] = inst_13689);
return statearr_13715;
})();var statearr_13716_13734 = state_13700__$1;(statearr_13716_13734[2] = null);
(statearr_13716_13734[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_13720 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13720[0] = state_machine__6824__auto__);
(statearr_13720[1] = 1);
return statearr_13720;
});
var state_machine__6824__auto____1 = (function (state_13700){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13721){if((e13721 instanceof Object))
{var ex__6827__auto__ = e13721;var statearr_13722_13735 = state_13700;(statearr_13722_13735[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13736 = state_13700;
state_13700 = G__13736;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13700){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13723 = f__6839__auto__.call(null);(statearr_13723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13724);
return statearr_13723;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13806){var state_val_13807 = (state_13806[1]);if((state_val_13807 === 1))
{var inst_13783 = 0;var state_13806__$1 = (function (){var statearr_13808 = state_13806;(statearr_13808[7] = inst_13783);
return statearr_13808;
})();var statearr_13809_13830 = state_13806__$1;(statearr_13809_13830[2] = null);
(statearr_13809_13830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 2))
{var inst_13783 = (state_13806[7]);var inst_13785 = (inst_13783 < n);var state_13806__$1 = state_13806;if(cljs.core.truth_(inst_13785))
{var statearr_13810_13831 = state_13806__$1;(statearr_13810_13831[1] = 4);
} else
{var statearr_13811_13832 = state_13806__$1;(statearr_13811_13832[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 3))
{var inst_13803 = (state_13806[2]);var inst_13804 = cljs.core.async.close_BANG_.call(null,out);var state_13806__$1 = (function (){var statearr_13812 = state_13806;(statearr_13812[8] = inst_13803);
return statearr_13812;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13806__$1,inst_13804);
} else
{if((state_val_13807 === 4))
{var state_13806__$1 = state_13806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13806__$1,7,ch);
} else
{if((state_val_13807 === 5))
{var state_13806__$1 = state_13806;var statearr_13813_13833 = state_13806__$1;(statearr_13813_13833[2] = null);
(statearr_13813_13833[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 6))
{var inst_13801 = (state_13806[2]);var state_13806__$1 = state_13806;var statearr_13814_13834 = state_13806__$1;(statearr_13814_13834[2] = inst_13801);
(statearr_13814_13834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 7))
{var inst_13788 = (state_13806[9]);var inst_13788__$1 = (state_13806[2]);var inst_13789 = (inst_13788__$1 == null);var inst_13790 = cljs.core.not.call(null,inst_13789);var state_13806__$1 = (function (){var statearr_13815 = state_13806;(statearr_13815[9] = inst_13788__$1);
return statearr_13815;
})();if(inst_13790)
{var statearr_13816_13835 = state_13806__$1;(statearr_13816_13835[1] = 8);
} else
{var statearr_13817_13836 = state_13806__$1;(statearr_13817_13836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 8))
{var inst_13788 = (state_13806[9]);var state_13806__$1 = state_13806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13806__$1,11,out,inst_13788);
} else
{if((state_val_13807 === 9))
{var state_13806__$1 = state_13806;var statearr_13818_13837 = state_13806__$1;(statearr_13818_13837[2] = null);
(statearr_13818_13837[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 10))
{var inst_13798 = (state_13806[2]);var state_13806__$1 = state_13806;var statearr_13819_13838 = state_13806__$1;(statearr_13819_13838[2] = inst_13798);
(statearr_13819_13838[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 11))
{var inst_13783 = (state_13806[7]);var inst_13793 = (state_13806[2]);var inst_13794 = (inst_13783 + 1);var inst_13783__$1 = inst_13794;var state_13806__$1 = (function (){var statearr_13820 = state_13806;(statearr_13820[10] = inst_13793);
(statearr_13820[7] = inst_13783__$1);
return statearr_13820;
})();var statearr_13821_13839 = state_13806__$1;(statearr_13821_13839[2] = null);
(statearr_13821_13839[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_13825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13825[0] = state_machine__6824__auto__);
(statearr_13825[1] = 1);
return statearr_13825;
});
var state_machine__6824__auto____1 = (function (state_13806){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13806);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object))
{var ex__6827__auto__ = e13826;var statearr_13827_13840 = state_13806;(statearr_13827_13840[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13841 = state_13806;
state_13806 = G__13841;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13806){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13828 = f__6839__auto__.call(null);(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13829);
return statearr_13828;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___13938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_13913){var state_val_13914 = (state_13913[1]);if((state_val_13914 === 1))
{var inst_13890 = null;var state_13913__$1 = (function (){var statearr_13915 = state_13913;(statearr_13915[7] = inst_13890);
return statearr_13915;
})();var statearr_13916_13939 = state_13913__$1;(statearr_13916_13939[2] = null);
(statearr_13916_13939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 2))
{var state_13913__$1 = state_13913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13913__$1,4,ch);
} else
{if((state_val_13914 === 3))
{var inst_13910 = (state_13913[2]);var inst_13911 = cljs.core.async.close_BANG_.call(null,out);var state_13913__$1 = (function (){var statearr_13917 = state_13913;(statearr_13917[8] = inst_13910);
return statearr_13917;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13913__$1,inst_13911);
} else
{if((state_val_13914 === 4))
{var inst_13893 = (state_13913[9]);var inst_13893__$1 = (state_13913[2]);var inst_13894 = (inst_13893__$1 == null);var inst_13895 = cljs.core.not.call(null,inst_13894);var state_13913__$1 = (function (){var statearr_13918 = state_13913;(statearr_13918[9] = inst_13893__$1);
return statearr_13918;
})();if(inst_13895)
{var statearr_13919_13940 = state_13913__$1;(statearr_13919_13940[1] = 5);
} else
{var statearr_13920_13941 = state_13913__$1;(statearr_13920_13941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 5))
{var inst_13893 = (state_13913[9]);var inst_13890 = (state_13913[7]);var inst_13897 = cljs.core._EQ_.call(null,inst_13893,inst_13890);var state_13913__$1 = state_13913;if(inst_13897)
{var statearr_13921_13942 = state_13913__$1;(statearr_13921_13942[1] = 8);
} else
{var statearr_13922_13943 = state_13913__$1;(statearr_13922_13943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 6))
{var state_13913__$1 = state_13913;var statearr_13924_13944 = state_13913__$1;(statearr_13924_13944[2] = null);
(statearr_13924_13944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 7))
{var inst_13908 = (state_13913[2]);var state_13913__$1 = state_13913;var statearr_13925_13945 = state_13913__$1;(statearr_13925_13945[2] = inst_13908);
(statearr_13925_13945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 8))
{var inst_13890 = (state_13913[7]);var tmp13923 = inst_13890;var inst_13890__$1 = tmp13923;var state_13913__$1 = (function (){var statearr_13926 = state_13913;(statearr_13926[7] = inst_13890__$1);
return statearr_13926;
})();var statearr_13927_13946 = state_13913__$1;(statearr_13927_13946[2] = null);
(statearr_13927_13946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 9))
{var inst_13893 = (state_13913[9]);var state_13913__$1 = state_13913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13913__$1,11,out,inst_13893);
} else
{if((state_val_13914 === 10))
{var inst_13905 = (state_13913[2]);var state_13913__$1 = state_13913;var statearr_13928_13947 = state_13913__$1;(statearr_13928_13947[2] = inst_13905);
(statearr_13928_13947[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13914 === 11))
{var inst_13893 = (state_13913[9]);var inst_13902 = (state_13913[2]);var inst_13890 = inst_13893;var state_13913__$1 = (function (){var statearr_13929 = state_13913;(statearr_13929[10] = inst_13902);
(statearr_13929[7] = inst_13890);
return statearr_13929;
})();var statearr_13930_13948 = state_13913__$1;(statearr_13930_13948[2] = null);
(statearr_13930_13948[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_13934 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13934[0] = state_machine__6824__auto__);
(statearr_13934[1] = 1);
return statearr_13934;
});
var state_machine__6824__auto____1 = (function (state_13913){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_13913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e13935){if((e13935 instanceof Object))
{var ex__6827__auto__ = e13935;var statearr_13936_13949 = state_13913;(statearr_13936_13949[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13950 = state_13913;
state_13913 = G__13950;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_13913){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_13913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_13937 = f__6839__auto__.call(null);(statearr_13937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___13938);
return statearr_13937;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___14085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_14055){var state_val_14056 = (state_14055[1]);if((state_val_14056 === 1))
{var inst_14018 = (new Array(n));var inst_14019 = inst_14018;var inst_14020 = 0;var state_14055__$1 = (function (){var statearr_14057 = state_14055;(statearr_14057[7] = inst_14020);
(statearr_14057[8] = inst_14019);
return statearr_14057;
})();var statearr_14058_14086 = state_14055__$1;(statearr_14058_14086[2] = null);
(statearr_14058_14086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 2))
{var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14055__$1,4,ch);
} else
{if((state_val_14056 === 3))
{var inst_14053 = (state_14055[2]);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14055__$1,inst_14053);
} else
{if((state_val_14056 === 4))
{var inst_14023 = (state_14055[9]);var inst_14023__$1 = (state_14055[2]);var inst_14024 = (inst_14023__$1 == null);var inst_14025 = cljs.core.not.call(null,inst_14024);var state_14055__$1 = (function (){var statearr_14059 = state_14055;(statearr_14059[9] = inst_14023__$1);
return statearr_14059;
})();if(inst_14025)
{var statearr_14060_14087 = state_14055__$1;(statearr_14060_14087[1] = 5);
} else
{var statearr_14061_14088 = state_14055__$1;(statearr_14061_14088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 5))
{var inst_14023 = (state_14055[9]);var inst_14020 = (state_14055[7]);var inst_14019 = (state_14055[8]);var inst_14028 = (state_14055[10]);var inst_14027 = (inst_14019[inst_14020] = inst_14023);var inst_14028__$1 = (inst_14020 + 1);var inst_14029 = (inst_14028__$1 < n);var state_14055__$1 = (function (){var statearr_14062 = state_14055;(statearr_14062[10] = inst_14028__$1);
(statearr_14062[11] = inst_14027);
return statearr_14062;
})();if(cljs.core.truth_(inst_14029))
{var statearr_14063_14089 = state_14055__$1;(statearr_14063_14089[1] = 8);
} else
{var statearr_14064_14090 = state_14055__$1;(statearr_14064_14090[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 6))
{var inst_14020 = (state_14055[7]);var inst_14041 = (inst_14020 > 0);var state_14055__$1 = state_14055;if(cljs.core.truth_(inst_14041))
{var statearr_14066_14091 = state_14055__$1;(statearr_14066_14091[1] = 12);
} else
{var statearr_14067_14092 = state_14055__$1;(statearr_14067_14092[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 7))
{var inst_14051 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14068_14093 = state_14055__$1;(statearr_14068_14093[2] = inst_14051);
(statearr_14068_14093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 8))
{var inst_14019 = (state_14055[8]);var inst_14028 = (state_14055[10]);var tmp14065 = inst_14019;var inst_14019__$1 = tmp14065;var inst_14020 = inst_14028;var state_14055__$1 = (function (){var statearr_14069 = state_14055;(statearr_14069[7] = inst_14020);
(statearr_14069[8] = inst_14019__$1);
return statearr_14069;
})();var statearr_14070_14094 = state_14055__$1;(statearr_14070_14094[2] = null);
(statearr_14070_14094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 9))
{var inst_14019 = (state_14055[8]);var inst_14033 = cljs.core.vec.call(null,inst_14019);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,11,out,inst_14033);
} else
{if((state_val_14056 === 10))
{var inst_14039 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14071_14095 = state_14055__$1;(statearr_14071_14095[2] = inst_14039);
(statearr_14071_14095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 11))
{var inst_14035 = (state_14055[2]);var inst_14036 = (new Array(n));var inst_14019 = inst_14036;var inst_14020 = 0;var state_14055__$1 = (function (){var statearr_14072 = state_14055;(statearr_14072[7] = inst_14020);
(statearr_14072[12] = inst_14035);
(statearr_14072[8] = inst_14019);
return statearr_14072;
})();var statearr_14073_14096 = state_14055__$1;(statearr_14073_14096[2] = null);
(statearr_14073_14096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 12))
{var inst_14019 = (state_14055[8]);var inst_14043 = cljs.core.vec.call(null,inst_14019);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,15,out,inst_14043);
} else
{if((state_val_14056 === 13))
{var state_14055__$1 = state_14055;var statearr_14074_14097 = state_14055__$1;(statearr_14074_14097[2] = null);
(statearr_14074_14097[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 14))
{var inst_14048 = (state_14055[2]);var inst_14049 = cljs.core.async.close_BANG_.call(null,out);var state_14055__$1 = (function (){var statearr_14075 = state_14055;(statearr_14075[13] = inst_14048);
return statearr_14075;
})();var statearr_14076_14098 = state_14055__$1;(statearr_14076_14098[2] = inst_14049);
(statearr_14076_14098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 15))
{var inst_14045 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14077_14099 = state_14055__$1;(statearr_14077_14099[2] = inst_14045);
(statearr_14077_14099[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_14081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14081[0] = state_machine__6824__auto__);
(statearr_14081[1] = 1);
return statearr_14081;
});
var state_machine__6824__auto____1 = (function (state_14055){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_14055);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e14082){if((e14082 instanceof Object))
{var ex__6827__auto__ = e14082;var statearr_14083_14100 = state_14055;(statearr_14083_14100[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14101 = state_14055;
state_14055 = G__14101;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_14055){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_14055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_14084 = f__6839__auto__.call(null);(statearr_14084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___14085);
return statearr_14084;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___14244 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_14214){var state_val_14215 = (state_14214[1]);if((state_val_14215 === 1))
{var inst_14173 = [];var inst_14174 = inst_14173;var inst_14175 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14214__$1 = (function (){var statearr_14216 = state_14214;(statearr_14216[7] = inst_14175);
(statearr_14216[8] = inst_14174);
return statearr_14216;
})();var statearr_14217_14245 = state_14214__$1;(statearr_14217_14245[2] = null);
(statearr_14217_14245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 2))
{var state_14214__$1 = state_14214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14214__$1,4,ch);
} else
{if((state_val_14215 === 3))
{var inst_14212 = (state_14214[2]);var state_14214__$1 = state_14214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14214__$1,inst_14212);
} else
{if((state_val_14215 === 4))
{var inst_14178 = (state_14214[9]);var inst_14178__$1 = (state_14214[2]);var inst_14179 = (inst_14178__$1 == null);var inst_14180 = cljs.core.not.call(null,inst_14179);var state_14214__$1 = (function (){var statearr_14218 = state_14214;(statearr_14218[9] = inst_14178__$1);
return statearr_14218;
})();if(inst_14180)
{var statearr_14219_14246 = state_14214__$1;(statearr_14219_14246[1] = 5);
} else
{var statearr_14220_14247 = state_14214__$1;(statearr_14220_14247[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 5))
{var inst_14178 = (state_14214[9]);var inst_14182 = (state_14214[10]);var inst_14175 = (state_14214[7]);var inst_14182__$1 = f.call(null,inst_14178);var inst_14183 = cljs.core._EQ_.call(null,inst_14182__$1,inst_14175);var inst_14184 = cljs.core.keyword_identical_QMARK_.call(null,inst_14175,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14185 = (inst_14183) || (inst_14184);var state_14214__$1 = (function (){var statearr_14221 = state_14214;(statearr_14221[10] = inst_14182__$1);
return statearr_14221;
})();if(cljs.core.truth_(inst_14185))
{var statearr_14222_14248 = state_14214__$1;(statearr_14222_14248[1] = 8);
} else
{var statearr_14223_14249 = state_14214__$1;(statearr_14223_14249[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 6))
{var inst_14174 = (state_14214[8]);var inst_14199 = inst_14174.length;var inst_14200 = (inst_14199 > 0);var state_14214__$1 = state_14214;if(cljs.core.truth_(inst_14200))
{var statearr_14225_14250 = state_14214__$1;(statearr_14225_14250[1] = 12);
} else
{var statearr_14226_14251 = state_14214__$1;(statearr_14226_14251[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 7))
{var inst_14210 = (state_14214[2]);var state_14214__$1 = state_14214;var statearr_14227_14252 = state_14214__$1;(statearr_14227_14252[2] = inst_14210);
(statearr_14227_14252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 8))
{var inst_14178 = (state_14214[9]);var inst_14182 = (state_14214[10]);var inst_14174 = (state_14214[8]);var inst_14187 = inst_14174.push(inst_14178);var tmp14224 = inst_14174;var inst_14174__$1 = tmp14224;var inst_14175 = inst_14182;var state_14214__$1 = (function (){var statearr_14228 = state_14214;(statearr_14228[7] = inst_14175);
(statearr_14228[8] = inst_14174__$1);
(statearr_14228[11] = inst_14187);
return statearr_14228;
})();var statearr_14229_14253 = state_14214__$1;(statearr_14229_14253[2] = null);
(statearr_14229_14253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 9))
{var inst_14174 = (state_14214[8]);var inst_14190 = cljs.core.vec.call(null,inst_14174);var state_14214__$1 = state_14214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14214__$1,11,out,inst_14190);
} else
{if((state_val_14215 === 10))
{var inst_14197 = (state_14214[2]);var state_14214__$1 = state_14214;var statearr_14230_14254 = state_14214__$1;(statearr_14230_14254[2] = inst_14197);
(statearr_14230_14254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 11))
{var inst_14178 = (state_14214[9]);var inst_14182 = (state_14214[10]);var inst_14192 = (state_14214[2]);var inst_14193 = [];var inst_14194 = inst_14193.push(inst_14178);var inst_14174 = inst_14193;var inst_14175 = inst_14182;var state_14214__$1 = (function (){var statearr_14231 = state_14214;(statearr_14231[12] = inst_14192);
(statearr_14231[7] = inst_14175);
(statearr_14231[8] = inst_14174);
(statearr_14231[13] = inst_14194);
return statearr_14231;
})();var statearr_14232_14255 = state_14214__$1;(statearr_14232_14255[2] = null);
(statearr_14232_14255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 12))
{var inst_14174 = (state_14214[8]);var inst_14202 = cljs.core.vec.call(null,inst_14174);var state_14214__$1 = state_14214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14214__$1,15,out,inst_14202);
} else
{if((state_val_14215 === 13))
{var state_14214__$1 = state_14214;var statearr_14233_14256 = state_14214__$1;(statearr_14233_14256[2] = null);
(statearr_14233_14256[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 14))
{var inst_14207 = (state_14214[2]);var inst_14208 = cljs.core.async.close_BANG_.call(null,out);var state_14214__$1 = (function (){var statearr_14234 = state_14214;(statearr_14234[14] = inst_14207);
return statearr_14234;
})();var statearr_14235_14257 = state_14214__$1;(statearr_14235_14257[2] = inst_14208);
(statearr_14235_14257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14215 === 15))
{var inst_14204 = (state_14214[2]);var state_14214__$1 = state_14214;var statearr_14236_14258 = state_14214__$1;(statearr_14236_14258[2] = inst_14204);
(statearr_14236_14258[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_14240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14240[0] = state_machine__6824__auto__);
(statearr_14240[1] = 1);
return statearr_14240;
});
var state_machine__6824__auto____1 = (function (state_14214){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_14214);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e14241){if((e14241 instanceof Object))
{var ex__6827__auto__ = e14241;var statearr_14242_14259 = state_14214;(statearr_14242_14259[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14260 = state_14214;
state_14214 = G__14260;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_14214){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_14214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_14243 = f__6839__auto__.call(null);(statearr_14243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___14244);
return statearr_14243;
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