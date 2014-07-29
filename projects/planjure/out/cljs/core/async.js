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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t185668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185668 = (function (f,fn_handler,meta185669){
this.f = f;
this.fn_handler = fn_handler;
this.meta185669 = meta185669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185668.cljs$lang$type = true;
cljs.core.async.t185668.cljs$lang$ctorStr = "cljs.core.async/t185668";
cljs.core.async.t185668.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185668");
});
cljs.core.async.t185668.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t185668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t185668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t185668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185670){var self__ = this;
var _185670__$1 = this;return self__.meta185669;
});
cljs.core.async.t185668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185670,meta185669__$1){var self__ = this;
var _185670__$1 = this;return (new cljs.core.async.t185668(self__.f,self__.fn_handler,meta185669__$1));
});
cljs.core.async.__GT_t185668 = (function __GT_t185668(f__$1,fn_handler__$1,meta185669){return (new cljs.core.async.t185668(f__$1,fn_handler__$1,meta185669));
});
}
return (new cljs.core.async.t185668(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__185672 = buff;if(G__185672)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__185672.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__185672.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__185672);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__185672);
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
{var val_185673 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_185673);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_185673);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___185674 = n;var x_185675 = 0;while(true){
if((x_185675 < n__4291__auto___185674))
{(a[x_185675] = 0);
{
var G__185676 = (x_185675 + 1);
x_185675 = G__185676;
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
var G__185677 = (i + 1);
i = G__185677;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t185681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185681 = (function (flag,alt_flag,meta185682){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta185682 = meta185682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185681.cljs$lang$type = true;
cljs.core.async.t185681.cljs$lang$ctorStr = "cljs.core.async/t185681";
cljs.core.async.t185681.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185681");
});
cljs.core.async.t185681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t185681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t185681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t185681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185683){var self__ = this;
var _185683__$1 = this;return self__.meta185682;
});
cljs.core.async.t185681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185683,meta185682__$1){var self__ = this;
var _185683__$1 = this;return (new cljs.core.async.t185681(self__.flag,self__.alt_flag,meta185682__$1));
});
cljs.core.async.__GT_t185681 = (function __GT_t185681(flag__$1,alt_flag__$1,meta185682){return (new cljs.core.async.t185681(flag__$1,alt_flag__$1,meta185682));
});
}
return (new cljs.core.async.t185681(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t185687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185687 = (function (cb,flag,alt_handler,meta185688){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta185688 = meta185688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185687.cljs$lang$type = true;
cljs.core.async.t185687.cljs$lang$ctorStr = "cljs.core.async/t185687";
cljs.core.async.t185687.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185687");
});
cljs.core.async.t185687.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t185687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t185687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t185687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185689){var self__ = this;
var _185689__$1 = this;return self__.meta185688;
});
cljs.core.async.t185687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185689,meta185688__$1){var self__ = this;
var _185689__$1 = this;return (new cljs.core.async.t185687(self__.cb,self__.flag,self__.alt_handler,meta185688__$1));
});
cljs.core.async.__GT_t185687 = (function __GT_t185687(cb__$1,flag__$1,alt_handler__$1,meta185688){return (new cljs.core.async.t185687(cb__$1,flag__$1,alt_handler__$1,meta185688));
});
}
return (new cljs.core.async.t185687(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__185690_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__185690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__185691_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__185691_SHARP_,port], null));
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
var G__185692 = (i + 1);
i = G__185692;
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
var alts_BANG___delegate = function (ports,p__185693){var map__185695 = p__185693;var map__185695__$1 = ((cljs.core.seq_QMARK_.call(null,map__185695))?cljs.core.apply.call(null,cljs.core.hash_map,map__185695):map__185695);var opts = map__185695__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__185693 = null;if (arguments.length > 1) {
  p__185693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__185693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__185696){
var ports = cljs.core.first(arglist__185696);
var p__185693 = cljs.core.rest(arglist__185696);
return alts_BANG___delegate(ports,p__185693);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t185704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185704 = (function (ch,f,map_LT_,meta185705){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta185705 = meta185705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185704.cljs$lang$type = true;
cljs.core.async.t185704.cljs$lang$ctorStr = "cljs.core.async/t185704";
cljs.core.async.t185704.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185704");
});
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t185707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185707 = (function (fn1,_,meta185705,ch,f,map_LT_,meta185708){
this.fn1 = fn1;
this._ = _;
this.meta185705 = meta185705;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta185708 = meta185708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185707.cljs$lang$type = true;
cljs.core.async.t185707.cljs$lang$ctorStr = "cljs.core.async/t185707";
cljs.core.async.t185707.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185707");
});
cljs.core.async.t185707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t185707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t185707.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t185707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__185697_SHARP_){return f1.call(null,(((p1__185697_SHARP_ == null))?null:self__.f.call(null,p1__185697_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t185707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185709){var self__ = this;
var _185709__$1 = this;return self__.meta185708;
});
cljs.core.async.t185707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185709,meta185708__$1){var self__ = this;
var _185709__$1 = this;return (new cljs.core.async.t185707(self__.fn1,self__._,self__.meta185705,self__.ch,self__.f,self__.map_LT_,meta185708__$1));
});
cljs.core.async.__GT_t185707 = (function __GT_t185707(fn1__$1,___$2,meta185705__$1,ch__$2,f__$2,map_LT___$2,meta185708){return (new cljs.core.async.t185707(fn1__$1,___$2,meta185705__$1,ch__$2,f__$2,map_LT___$2,meta185708));
});
}
return (new cljs.core.async.t185707(fn1,___$1,self__.meta185705,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t185704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t185704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185706){var self__ = this;
var _185706__$1 = this;return self__.meta185705;
});
cljs.core.async.t185704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185706,meta185705__$1){var self__ = this;
var _185706__$1 = this;return (new cljs.core.async.t185704(self__.ch,self__.f,self__.map_LT_,meta185705__$1));
});
cljs.core.async.__GT_t185704 = (function __GT_t185704(ch__$1,f__$1,map_LT___$1,meta185705){return (new cljs.core.async.t185704(ch__$1,f__$1,map_LT___$1,meta185705));
});
}
return (new cljs.core.async.t185704(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t185713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185713 = (function (ch,f,map_GT_,meta185714){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta185714 = meta185714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185713.cljs$lang$type = true;
cljs.core.async.t185713.cljs$lang$ctorStr = "cljs.core.async/t185713";
cljs.core.async.t185713.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185713");
});
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t185713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t185713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185715){var self__ = this;
var _185715__$1 = this;return self__.meta185714;
});
cljs.core.async.t185713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185715,meta185714__$1){var self__ = this;
var _185715__$1 = this;return (new cljs.core.async.t185713(self__.ch,self__.f,self__.map_GT_,meta185714__$1));
});
cljs.core.async.__GT_t185713 = (function __GT_t185713(ch__$1,f__$1,map_GT___$1,meta185714){return (new cljs.core.async.t185713(ch__$1,f__$1,map_GT___$1,meta185714));
});
}
return (new cljs.core.async.t185713(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t185719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t185719 = (function (ch,p,filter_GT_,meta185720){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta185720 = meta185720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t185719.cljs$lang$type = true;
cljs.core.async.t185719.cljs$lang$ctorStr = "cljs.core.async/t185719";
cljs.core.async.t185719.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t185719");
});
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t185719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t185719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185721){var self__ = this;
var _185721__$1 = this;return self__.meta185720;
});
cljs.core.async.t185719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185721,meta185720__$1){var self__ = this;
var _185721__$1 = this;return (new cljs.core.async.t185719(self__.ch,self__.p,self__.filter_GT_,meta185720__$1));
});
cljs.core.async.__GT_t185719 = (function __GT_t185719(ch__$1,p__$1,filter_GT___$1,meta185720){return (new cljs.core.async.t185719(ch__$1,p__$1,filter_GT___$1,meta185720));
});
}
return (new cljs.core.async.t185719(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___185804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_185783){var state_val_185784 = (state_185783[1]);if((state_val_185784 === 1))
{var state_185783__$1 = state_185783;var statearr_185785_185805 = state_185783__$1;(statearr_185785_185805[2] = null);
(statearr_185785_185805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 2))
{var state_185783__$1 = state_185783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185783__$1,4,ch);
} else
{if((state_val_185784 === 3))
{var inst_185781 = (state_185783[2]);var state_185783__$1 = state_185783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185783__$1,inst_185781);
} else
{if((state_val_185784 === 4))
{var inst_185765 = (state_185783[7]);var inst_185765__$1 = (state_185783[2]);var inst_185766 = (inst_185765__$1 == null);var state_185783__$1 = (function (){var statearr_185786 = state_185783;(statearr_185786[7] = inst_185765__$1);
return statearr_185786;
})();if(cljs.core.truth_(inst_185766))
{var statearr_185787_185806 = state_185783__$1;(statearr_185787_185806[1] = 5);
} else
{var statearr_185788_185807 = state_185783__$1;(statearr_185788_185807[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 5))
{var inst_185768 = cljs.core.async.close_BANG_.call(null,out);var state_185783__$1 = state_185783;var statearr_185789_185808 = state_185783__$1;(statearr_185789_185808[2] = inst_185768);
(statearr_185789_185808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 6))
{var inst_185765 = (state_185783[7]);var inst_185770 = p.call(null,inst_185765);var state_185783__$1 = state_185783;if(cljs.core.truth_(inst_185770))
{var statearr_185790_185809 = state_185783__$1;(statearr_185790_185809[1] = 8);
} else
{var statearr_185791_185810 = state_185783__$1;(statearr_185791_185810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 7))
{var inst_185779 = (state_185783[2]);var state_185783__$1 = state_185783;var statearr_185792_185811 = state_185783__$1;(statearr_185792_185811[2] = inst_185779);
(statearr_185792_185811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 8))
{var inst_185765 = (state_185783[7]);var state_185783__$1 = state_185783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185783__$1,11,out,inst_185765);
} else
{if((state_val_185784 === 9))
{var state_185783__$1 = state_185783;var statearr_185793_185812 = state_185783__$1;(statearr_185793_185812[2] = null);
(statearr_185793_185812[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 10))
{var inst_185776 = (state_185783[2]);var state_185783__$1 = (function (){var statearr_185794 = state_185783;(statearr_185794[8] = inst_185776);
return statearr_185794;
})();var statearr_185795_185813 = state_185783__$1;(statearr_185795_185813[2] = null);
(statearr_185795_185813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185784 === 11))
{var inst_185773 = (state_185783[2]);var state_185783__$1 = state_185783;var statearr_185796_185814 = state_185783__$1;(statearr_185796_185814[2] = inst_185773);
(statearr_185796_185814[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_185800 = [null,null,null,null,null,null,null,null,null];(statearr_185800[0] = state_machine__6824__auto__);
(statearr_185800[1] = 1);
return statearr_185800;
});
var state_machine__6824__auto____1 = (function (state_185783){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_185783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e185801){if((e185801 instanceof Object))
{var ex__6827__auto__ = e185801;var statearr_185802_185815 = state_185783;(statearr_185802_185815[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e185801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__185816 = state_185783;
state_185783 = G__185816;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_185783){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_185783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_185803 = f__6839__auto__.call(null);(statearr_185803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___185804);
return statearr_185803;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_185982){var state_val_185983 = (state_185982[1]);if((state_val_185983 === 1))
{var state_185982__$1 = state_185982;var statearr_185984_186025 = state_185982__$1;(statearr_185984_186025[2] = null);
(statearr_185984_186025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 2))
{var state_185982__$1 = state_185982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185982__$1,4,in$);
} else
{if((state_val_185983 === 3))
{var inst_185980 = (state_185982[2]);var state_185982__$1 = state_185982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185982__$1,inst_185980);
} else
{if((state_val_185983 === 4))
{var inst_185923 = (state_185982[7]);var inst_185923__$1 = (state_185982[2]);var inst_185924 = (inst_185923__$1 == null);var state_185982__$1 = (function (){var statearr_185985 = state_185982;(statearr_185985[7] = inst_185923__$1);
return statearr_185985;
})();if(cljs.core.truth_(inst_185924))
{var statearr_185986_186026 = state_185982__$1;(statearr_185986_186026[1] = 5);
} else
{var statearr_185987_186027 = state_185982__$1;(statearr_185987_186027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 5))
{var inst_185926 = cljs.core.async.close_BANG_.call(null,out);var state_185982__$1 = state_185982;var statearr_185988_186028 = state_185982__$1;(statearr_185988_186028[2] = inst_185926);
(statearr_185988_186028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 6))
{var inst_185923 = (state_185982[7]);var inst_185932 = f.call(null,inst_185923);var inst_185933 = cljs.core.seq.call(null,inst_185932);var inst_185934 = inst_185933;var inst_185935 = null;var inst_185936 = 0;var inst_185937 = 0;var state_185982__$1 = (function (){var statearr_185989 = state_185982;(statearr_185989[8] = inst_185937);
(statearr_185989[9] = inst_185935);
(statearr_185989[10] = inst_185936);
(statearr_185989[11] = inst_185934);
return statearr_185989;
})();var statearr_185990_186029 = state_185982__$1;(statearr_185990_186029[2] = null);
(statearr_185990_186029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 7))
{var inst_185978 = (state_185982[2]);var state_185982__$1 = state_185982;var statearr_185991_186030 = state_185982__$1;(statearr_185991_186030[2] = inst_185978);
(statearr_185991_186030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 8))
{var inst_185937 = (state_185982[8]);var inst_185936 = (state_185982[10]);var inst_185939 = (inst_185937 < inst_185936);var inst_185940 = inst_185939;var state_185982__$1 = state_185982;if(cljs.core.truth_(inst_185940))
{var statearr_185992_186031 = state_185982__$1;(statearr_185992_186031[1] = 10);
} else
{var statearr_185993_186032 = state_185982__$1;(statearr_185993_186032[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 9))
{var inst_185970 = (state_185982[2]);var inst_185971 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_185982__$1 = (function (){var statearr_185994 = state_185982;(statearr_185994[12] = inst_185970);
return statearr_185994;
})();if(cljs.core.truth_(inst_185971))
{var statearr_185995_186033 = state_185982__$1;(statearr_185995_186033[1] = 21);
} else
{var statearr_185996_186034 = state_185982__$1;(statearr_185996_186034[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 10))
{var inst_185937 = (state_185982[8]);var inst_185935 = (state_185982[9]);var inst_185942 = cljs.core._nth.call(null,inst_185935,inst_185937);var state_185982__$1 = state_185982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185982__$1,13,out,inst_185942);
} else
{if((state_val_185983 === 11))
{var inst_185934 = (state_185982[11]);var inst_185948 = (state_185982[13]);var inst_185948__$1 = cljs.core.seq.call(null,inst_185934);var state_185982__$1 = (function (){var statearr_186000 = state_185982;(statearr_186000[13] = inst_185948__$1);
return statearr_186000;
})();if(inst_185948__$1)
{var statearr_186001_186035 = state_185982__$1;(statearr_186001_186035[1] = 14);
} else
{var statearr_186002_186036 = state_185982__$1;(statearr_186002_186036[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 12))
{var inst_185968 = (state_185982[2]);var state_185982__$1 = state_185982;var statearr_186003_186037 = state_185982__$1;(statearr_186003_186037[2] = inst_185968);
(statearr_186003_186037[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 13))
{var inst_185937 = (state_185982[8]);var inst_185935 = (state_185982[9]);var inst_185936 = (state_185982[10]);var inst_185934 = (state_185982[11]);var inst_185944 = (state_185982[2]);var inst_185945 = (inst_185937 + 1);var tmp185997 = inst_185935;var tmp185998 = inst_185936;var tmp185999 = inst_185934;var inst_185934__$1 = tmp185999;var inst_185935__$1 = tmp185997;var inst_185936__$1 = tmp185998;var inst_185937__$1 = inst_185945;var state_185982__$1 = (function (){var statearr_186004 = state_185982;(statearr_186004[8] = inst_185937__$1);
(statearr_186004[9] = inst_185935__$1);
(statearr_186004[10] = inst_185936__$1);
(statearr_186004[11] = inst_185934__$1);
(statearr_186004[14] = inst_185944);
return statearr_186004;
})();var statearr_186005_186038 = state_185982__$1;(statearr_186005_186038[2] = null);
(statearr_186005_186038[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 14))
{var inst_185948 = (state_185982[13]);var inst_185950 = cljs.core.chunked_seq_QMARK_.call(null,inst_185948);var state_185982__$1 = state_185982;if(inst_185950)
{var statearr_186006_186039 = state_185982__$1;(statearr_186006_186039[1] = 17);
} else
{var statearr_186007_186040 = state_185982__$1;(statearr_186007_186040[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 15))
{var state_185982__$1 = state_185982;var statearr_186008_186041 = state_185982__$1;(statearr_186008_186041[2] = null);
(statearr_186008_186041[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 16))
{var inst_185966 = (state_185982[2]);var state_185982__$1 = state_185982;var statearr_186009_186042 = state_185982__$1;(statearr_186009_186042[2] = inst_185966);
(statearr_186009_186042[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 17))
{var inst_185948 = (state_185982[13]);var inst_185952 = cljs.core.chunk_first.call(null,inst_185948);var inst_185953 = cljs.core.chunk_rest.call(null,inst_185948);var inst_185954 = cljs.core.count.call(null,inst_185952);var inst_185934 = inst_185953;var inst_185935 = inst_185952;var inst_185936 = inst_185954;var inst_185937 = 0;var state_185982__$1 = (function (){var statearr_186010 = state_185982;(statearr_186010[8] = inst_185937);
(statearr_186010[9] = inst_185935);
(statearr_186010[10] = inst_185936);
(statearr_186010[11] = inst_185934);
return statearr_186010;
})();var statearr_186011_186043 = state_185982__$1;(statearr_186011_186043[2] = null);
(statearr_186011_186043[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 18))
{var inst_185948 = (state_185982[13]);var inst_185957 = cljs.core.first.call(null,inst_185948);var state_185982__$1 = state_185982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185982__$1,20,out,inst_185957);
} else
{if((state_val_185983 === 19))
{var inst_185963 = (state_185982[2]);var state_185982__$1 = state_185982;var statearr_186012_186044 = state_185982__$1;(statearr_186012_186044[2] = inst_185963);
(statearr_186012_186044[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 20))
{var inst_185948 = (state_185982[13]);var inst_185959 = (state_185982[2]);var inst_185960 = cljs.core.next.call(null,inst_185948);var inst_185934 = inst_185960;var inst_185935 = null;var inst_185936 = 0;var inst_185937 = 0;var state_185982__$1 = (function (){var statearr_186013 = state_185982;(statearr_186013[8] = inst_185937);
(statearr_186013[9] = inst_185935);
(statearr_186013[10] = inst_185936);
(statearr_186013[11] = inst_185934);
(statearr_186013[15] = inst_185959);
return statearr_186013;
})();var statearr_186014_186045 = state_185982__$1;(statearr_186014_186045[2] = null);
(statearr_186014_186045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 21))
{var state_185982__$1 = state_185982;var statearr_186015_186046 = state_185982__$1;(statearr_186015_186046[2] = null);
(statearr_186015_186046[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 22))
{var state_185982__$1 = state_185982;var statearr_186016_186047 = state_185982__$1;(statearr_186016_186047[2] = null);
(statearr_186016_186047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_185983 === 23))
{var inst_185976 = (state_185982[2]);var state_185982__$1 = state_185982;var statearr_186017_186048 = state_185982__$1;(statearr_186017_186048[2] = inst_185976);
(statearr_186017_186048[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_186021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_186021[0] = state_machine__6824__auto__);
(statearr_186021[1] = 1);
return statearr_186021;
});
var state_machine__6824__auto____1 = (function (state_185982){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_185982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186022){if((e186022 instanceof Object))
{var ex__6827__auto__ = e186022;var statearr_186023_186049 = state_185982;(statearr_186023_186049[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186050 = state_185982;
state_185982 = G__186050;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_185982){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_185982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186024 = f__6839__auto__.call(null);(statearr_186024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_186024;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6838__auto___186145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_186121){var state_val_186122 = (state_186121[1]);if((state_val_186122 === 1))
{var state_186121__$1 = state_186121;var statearr_186123_186146 = state_186121__$1;(statearr_186123_186146[2] = null);
(statearr_186123_186146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 2))
{var state_186121__$1 = state_186121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186121__$1,4,from);
} else
{if((state_val_186122 === 3))
{var inst_186119 = (state_186121[2]);var state_186121__$1 = state_186121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186121__$1,inst_186119);
} else
{if((state_val_186122 === 4))
{var inst_186100 = (state_186121[7]);var inst_186100__$1 = (state_186121[2]);var inst_186101 = (inst_186100__$1 == null);var state_186121__$1 = (function (){var statearr_186124 = state_186121;(statearr_186124[7] = inst_186100__$1);
return statearr_186124;
})();if(cljs.core.truth_(inst_186101))
{var statearr_186125_186147 = state_186121__$1;(statearr_186125_186147[1] = 5);
} else
{var statearr_186126_186148 = state_186121__$1;(statearr_186126_186148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 5))
{var state_186121__$1 = state_186121;if(cljs.core.truth_(close_QMARK_))
{var statearr_186127_186149 = state_186121__$1;(statearr_186127_186149[1] = 8);
} else
{var statearr_186128_186150 = state_186121__$1;(statearr_186128_186150[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 6))
{var inst_186100 = (state_186121[7]);var state_186121__$1 = state_186121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_186121__$1,11,to,inst_186100);
} else
{if((state_val_186122 === 7))
{var inst_186117 = (state_186121[2]);var state_186121__$1 = state_186121;var statearr_186129_186151 = state_186121__$1;(statearr_186129_186151[2] = inst_186117);
(statearr_186129_186151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 8))
{var inst_186104 = cljs.core.async.close_BANG_.call(null,to);var state_186121__$1 = state_186121;var statearr_186130_186152 = state_186121__$1;(statearr_186130_186152[2] = inst_186104);
(statearr_186130_186152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 9))
{var state_186121__$1 = state_186121;var statearr_186131_186153 = state_186121__$1;(statearr_186131_186153[2] = null);
(statearr_186131_186153[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 10))
{var inst_186107 = (state_186121[2]);var state_186121__$1 = state_186121;var statearr_186132_186154 = state_186121__$1;(statearr_186132_186154[2] = inst_186107);
(statearr_186132_186154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 11))
{var inst_186110 = (state_186121[2]);var state_186121__$1 = state_186121;if(cljs.core.truth_(inst_186110))
{var statearr_186133_186155 = state_186121__$1;(statearr_186133_186155[1] = 12);
} else
{var statearr_186134_186156 = state_186121__$1;(statearr_186134_186156[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 12))
{var state_186121__$1 = state_186121;var statearr_186135_186157 = state_186121__$1;(statearr_186135_186157[2] = null);
(statearr_186135_186157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 13))
{var state_186121__$1 = state_186121;var statearr_186136_186158 = state_186121__$1;(statearr_186136_186158[2] = null);
(statearr_186136_186158[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186122 === 14))
{var inst_186115 = (state_186121[2]);var state_186121__$1 = state_186121;var statearr_186137_186159 = state_186121__$1;(statearr_186137_186159[2] = inst_186115);
(statearr_186137_186159[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_186141 = [null,null,null,null,null,null,null,null];(statearr_186141[0] = state_machine__6824__auto__);
(statearr_186141[1] = 1);
return statearr_186141;
});
var state_machine__6824__auto____1 = (function (state_186121){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_186121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186142){if((e186142 instanceof Object))
{var ex__6827__auto__ = e186142;var statearr_186143_186160 = state_186121;(statearr_186143_186160[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186161 = state_186121;
state_186121 = G__186161;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_186121){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_186121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186144 = f__6839__auto__.call(null);(statearr_186144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___186145);
return statearr_186144;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6838__auto___186262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_186237){var state_val_186238 = (state_186237[1]);if((state_val_186238 === 1))
{var state_186237__$1 = state_186237;var statearr_186239_186263 = state_186237__$1;(statearr_186239_186263[2] = null);
(statearr_186239_186263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 2))
{var state_186237__$1 = state_186237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186237__$1,4,ch);
} else
{if((state_val_186238 === 3))
{var inst_186235 = (state_186237[2]);var state_186237__$1 = state_186237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186237__$1,inst_186235);
} else
{if((state_val_186238 === 4))
{var inst_186214 = (state_186237[7]);var inst_186214__$1 = (state_186237[2]);var inst_186215 = (inst_186214__$1 == null);var state_186237__$1 = (function (){var statearr_186240 = state_186237;(statearr_186240[7] = inst_186214__$1);
return statearr_186240;
})();if(cljs.core.truth_(inst_186215))
{var statearr_186241_186264 = state_186237__$1;(statearr_186241_186264[1] = 5);
} else
{var statearr_186242_186265 = state_186237__$1;(statearr_186242_186265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 5))
{var inst_186217 = cljs.core.async.close_BANG_.call(null,tc);var inst_186218 = cljs.core.async.close_BANG_.call(null,fc);var state_186237__$1 = (function (){var statearr_186243 = state_186237;(statearr_186243[8] = inst_186217);
return statearr_186243;
})();var statearr_186244_186266 = state_186237__$1;(statearr_186244_186266[2] = inst_186218);
(statearr_186244_186266[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 6))
{var inst_186214 = (state_186237[7]);var inst_186220 = p.call(null,inst_186214);var state_186237__$1 = state_186237;if(cljs.core.truth_(inst_186220))
{var statearr_186245_186267 = state_186237__$1;(statearr_186245_186267[1] = 9);
} else
{var statearr_186246_186268 = state_186237__$1;(statearr_186246_186268[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 7))
{var inst_186233 = (state_186237[2]);var state_186237__$1 = state_186237;var statearr_186247_186269 = state_186237__$1;(statearr_186247_186269[2] = inst_186233);
(statearr_186247_186269[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 8))
{var inst_186226 = (state_186237[2]);var state_186237__$1 = state_186237;if(cljs.core.truth_(inst_186226))
{var statearr_186248_186270 = state_186237__$1;(statearr_186248_186270[1] = 12);
} else
{var statearr_186249_186271 = state_186237__$1;(statearr_186249_186271[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 9))
{var state_186237__$1 = state_186237;var statearr_186250_186272 = state_186237__$1;(statearr_186250_186272[2] = tc);
(statearr_186250_186272[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 10))
{var state_186237__$1 = state_186237;var statearr_186251_186273 = state_186237__$1;(statearr_186251_186273[2] = fc);
(statearr_186251_186273[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 11))
{var inst_186214 = (state_186237[7]);var inst_186224 = (state_186237[2]);var state_186237__$1 = state_186237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_186237__$1,8,inst_186224,inst_186214);
} else
{if((state_val_186238 === 12))
{var state_186237__$1 = state_186237;var statearr_186252_186274 = state_186237__$1;(statearr_186252_186274[2] = null);
(statearr_186252_186274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 13))
{var state_186237__$1 = state_186237;var statearr_186253_186275 = state_186237__$1;(statearr_186253_186275[2] = null);
(statearr_186253_186275[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186238 === 14))
{var inst_186231 = (state_186237[2]);var state_186237__$1 = state_186237;var statearr_186254_186276 = state_186237__$1;(statearr_186254_186276[2] = inst_186231);
(statearr_186254_186276[1] = 7);
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
var state_machine__6824__auto____0 = (function (){var statearr_186258 = [null,null,null,null,null,null,null,null,null];(statearr_186258[0] = state_machine__6824__auto__);
(statearr_186258[1] = 1);
return statearr_186258;
});
var state_machine__6824__auto____1 = (function (state_186237){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_186237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186259){if((e186259 instanceof Object))
{var ex__6827__auto__ = e186259;var statearr_186260_186277 = state_186237;(statearr_186260_186277[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186278 = state_186237;
state_186237 = G__186278;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_186237){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_186237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186261 = f__6839__auto__.call(null);(statearr_186261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___186262);
return statearr_186261;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_186325){var state_val_186326 = (state_186325[1]);if((state_val_186326 === 7))
{var inst_186321 = (state_186325[2]);var state_186325__$1 = state_186325;var statearr_186327_186343 = state_186325__$1;(statearr_186327_186343[2] = inst_186321);
(statearr_186327_186343[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186326 === 6))
{var inst_186311 = (state_186325[7]);var inst_186314 = (state_186325[8]);var inst_186318 = f.call(null,inst_186311,inst_186314);var inst_186311__$1 = inst_186318;var state_186325__$1 = (function (){var statearr_186328 = state_186325;(statearr_186328[7] = inst_186311__$1);
return statearr_186328;
})();var statearr_186329_186344 = state_186325__$1;(statearr_186329_186344[2] = null);
(statearr_186329_186344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186326 === 5))
{var inst_186311 = (state_186325[7]);var state_186325__$1 = state_186325;var statearr_186330_186345 = state_186325__$1;(statearr_186330_186345[2] = inst_186311);
(statearr_186330_186345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186326 === 4))
{var inst_186314 = (state_186325[8]);var inst_186314__$1 = (state_186325[2]);var inst_186315 = (inst_186314__$1 == null);var state_186325__$1 = (function (){var statearr_186331 = state_186325;(statearr_186331[8] = inst_186314__$1);
return statearr_186331;
})();if(cljs.core.truth_(inst_186315))
{var statearr_186332_186346 = state_186325__$1;(statearr_186332_186346[1] = 5);
} else
{var statearr_186333_186347 = state_186325__$1;(statearr_186333_186347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186326 === 3))
{var inst_186323 = (state_186325[2]);var state_186325__$1 = state_186325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186325__$1,inst_186323);
} else
{if((state_val_186326 === 2))
{var state_186325__$1 = state_186325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186325__$1,4,ch);
} else
{if((state_val_186326 === 1))
{var inst_186311 = init;var state_186325__$1 = (function (){var statearr_186334 = state_186325;(statearr_186334[7] = inst_186311);
return statearr_186334;
})();var statearr_186335_186348 = state_186325__$1;(statearr_186335_186348[2] = null);
(statearr_186335_186348[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_186339 = [null,null,null,null,null,null,null,null,null];(statearr_186339[0] = state_machine__6824__auto__);
(statearr_186339[1] = 1);
return statearr_186339;
});
var state_machine__6824__auto____1 = (function (state_186325){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_186325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186340){if((e186340 instanceof Object))
{var ex__6827__auto__ = e186340;var statearr_186341_186349 = state_186325;(statearr_186341_186349[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186350 = state_186325;
state_186325 = G__186350;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_186325){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_186325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186342 = f__6839__auto__.call(null);(statearr_186342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_186342;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_186424){var state_val_186425 = (state_186424[1]);if((state_val_186425 === 1))
{var inst_186400 = cljs.core.seq.call(null,coll);var inst_186401 = inst_186400;var state_186424__$1 = (function (){var statearr_186426 = state_186424;(statearr_186426[7] = inst_186401);
return statearr_186426;
})();var statearr_186427_186449 = state_186424__$1;(statearr_186427_186449[2] = null);
(statearr_186427_186449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 2))
{var inst_186401 = (state_186424[7]);var state_186424__$1 = state_186424;if(cljs.core.truth_(inst_186401))
{var statearr_186428_186450 = state_186424__$1;(statearr_186428_186450[1] = 4);
} else
{var statearr_186429_186451 = state_186424__$1;(statearr_186429_186451[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 3))
{var inst_186422 = (state_186424[2]);var state_186424__$1 = state_186424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186424__$1,inst_186422);
} else
{if((state_val_186425 === 4))
{var inst_186401 = (state_186424[7]);var inst_186404 = cljs.core.first.call(null,inst_186401);var state_186424__$1 = state_186424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_186424__$1,7,ch,inst_186404);
} else
{if((state_val_186425 === 5))
{var inst_186401 = (state_186424[7]);var state_186424__$1 = state_186424;var statearr_186430_186452 = state_186424__$1;(statearr_186430_186452[2] = inst_186401);
(statearr_186430_186452[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 6))
{var inst_186409 = (state_186424[2]);var state_186424__$1 = state_186424;if(cljs.core.truth_(inst_186409))
{var statearr_186431_186453 = state_186424__$1;(statearr_186431_186453[1] = 8);
} else
{var statearr_186432_186454 = state_186424__$1;(statearr_186432_186454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 7))
{var inst_186406 = (state_186424[2]);var state_186424__$1 = state_186424;var statearr_186433_186455 = state_186424__$1;(statearr_186433_186455[2] = inst_186406);
(statearr_186433_186455[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 8))
{var inst_186401 = (state_186424[7]);var inst_186411 = cljs.core.next.call(null,inst_186401);var inst_186401__$1 = inst_186411;var state_186424__$1 = (function (){var statearr_186434 = state_186424;(statearr_186434[7] = inst_186401__$1);
return statearr_186434;
})();var statearr_186435_186456 = state_186424__$1;(statearr_186435_186456[2] = null);
(statearr_186435_186456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 9))
{var state_186424__$1 = state_186424;if(cljs.core.truth_(close_QMARK_))
{var statearr_186436_186457 = state_186424__$1;(statearr_186436_186457[1] = 11);
} else
{var statearr_186437_186458 = state_186424__$1;(statearr_186437_186458[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 10))
{var inst_186420 = (state_186424[2]);var state_186424__$1 = state_186424;var statearr_186438_186459 = state_186424__$1;(statearr_186438_186459[2] = inst_186420);
(statearr_186438_186459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 11))
{var inst_186415 = cljs.core.async.close_BANG_.call(null,ch);var state_186424__$1 = state_186424;var statearr_186439_186460 = state_186424__$1;(statearr_186439_186460[2] = inst_186415);
(statearr_186439_186460[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 12))
{var state_186424__$1 = state_186424;var statearr_186440_186461 = state_186424__$1;(statearr_186440_186461[2] = null);
(statearr_186440_186461[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186425 === 13))
{var inst_186418 = (state_186424[2]);var state_186424__$1 = state_186424;var statearr_186441_186462 = state_186424__$1;(statearr_186441_186462[2] = inst_186418);
(statearr_186441_186462[1] = 10);
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
var state_machine__6824__auto____0 = (function (){var statearr_186445 = [null,null,null,null,null,null,null,null];(statearr_186445[0] = state_machine__6824__auto__);
(statearr_186445[1] = 1);
return statearr_186445;
});
var state_machine__6824__auto____1 = (function (state_186424){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_186424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186446){if((e186446 instanceof Object))
{var ex__6827__auto__ = e186446;var statearr_186447_186463 = state_186424;(statearr_186447_186463[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186464 = state_186424;
state_186424 = G__186464;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_186424){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_186424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186448 = f__6839__auto__.call(null);(statearr_186448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto__);
return statearr_186448;
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
cljs.core.async.Mux = (function (){var obj186466 = {};return obj186466;
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
cljs.core.async.Mult = (function (){var obj186468 = {};return obj186468;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t186690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186690 = (function (cs,ch,mult,meta186691){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta186691 = meta186691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186690.cljs$lang$type = true;
cljs.core.async.t186690.cljs$lang$ctorStr = "cljs.core.async/t186690";
cljs.core.async.t186690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t186690");
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t186690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t186690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_186692){var self__ = this;
var _186692__$1 = this;return self__.meta186691;
});})(cs))
;
cljs.core.async.t186690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_186692,meta186691__$1){var self__ = this;
var _186692__$1 = this;return (new cljs.core.async.t186690(self__.cs,self__.ch,self__.mult,meta186691__$1));
});})(cs))
;
cljs.core.async.__GT_t186690 = ((function (cs){
return (function __GT_t186690(cs__$1,ch__$1,mult__$1,meta186691){return (new cljs.core.async.t186690(cs__$1,ch__$1,mult__$1,meta186691));
});})(cs))
;
}
return (new cljs.core.async.t186690(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6838__auto___186911 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_186823){var state_val_186824 = (state_186823[1]);if((state_val_186824 === 32))
{var inst_186763 = (state_186823[7]);var inst_186764 = (state_186823[8]);var inst_186766 = (state_186823[9]);var inst_186765 = (state_186823[10]);var inst_186778 = (state_186823[2]);var inst_186779 = (inst_186766 + 1);var tmp186825 = inst_186763;var tmp186826 = inst_186764;var tmp186827 = inst_186765;var inst_186763__$1 = tmp186825;var inst_186764__$1 = tmp186826;var inst_186765__$1 = tmp186827;var inst_186766__$1 = inst_186779;var state_186823__$1 = (function (){var statearr_186828 = state_186823;(statearr_186828[11] = inst_186778);
(statearr_186828[7] = inst_186763__$1);
(statearr_186828[8] = inst_186764__$1);
(statearr_186828[9] = inst_186766__$1);
(statearr_186828[10] = inst_186765__$1);
return statearr_186828;
})();var statearr_186829_186912 = state_186823__$1;(statearr_186829_186912[2] = null);
(statearr_186829_186912[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 1))
{var state_186823__$1 = state_186823;var statearr_186830_186913 = state_186823__$1;(statearr_186830_186913[2] = null);
(statearr_186830_186913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 33))
{var inst_186782 = (state_186823[12]);var inst_186784 = cljs.core.chunked_seq_QMARK_.call(null,inst_186782);var state_186823__$1 = state_186823;if(inst_186784)
{var statearr_186831_186914 = state_186823__$1;(statearr_186831_186914[1] = 36);
} else
{var statearr_186832_186915 = state_186823__$1;(statearr_186832_186915[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 2))
{var state_186823__$1 = state_186823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186823__$1,4,ch);
} else
{if((state_val_186824 === 34))
{var state_186823__$1 = state_186823;var statearr_186833_186916 = state_186823__$1;(statearr_186833_186916[2] = null);
(statearr_186833_186916[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 3))
{var inst_186821 = (state_186823[2]);var state_186823__$1 = state_186823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186823__$1,inst_186821);
} else
{if((state_val_186824 === 35))
{var inst_186805 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186834_186917 = state_186823__$1;(statearr_186834_186917[2] = inst_186805);
(statearr_186834_186917[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 4))
{var inst_186695 = (state_186823[13]);var inst_186695__$1 = (state_186823[2]);var inst_186696 = (inst_186695__$1 == null);var state_186823__$1 = (function (){var statearr_186835 = state_186823;(statearr_186835[13] = inst_186695__$1);
return statearr_186835;
})();if(cljs.core.truth_(inst_186696))
{var statearr_186836_186918 = state_186823__$1;(statearr_186836_186918[1] = 5);
} else
{var statearr_186837_186919 = state_186823__$1;(statearr_186837_186919[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 36))
{var inst_186782 = (state_186823[12]);var inst_186786 = cljs.core.chunk_first.call(null,inst_186782);var inst_186787 = cljs.core.chunk_rest.call(null,inst_186782);var inst_186788 = cljs.core.count.call(null,inst_186786);var inst_186763 = inst_186787;var inst_186764 = inst_186786;var inst_186765 = inst_186788;var inst_186766 = 0;var state_186823__$1 = (function (){var statearr_186838 = state_186823;(statearr_186838[7] = inst_186763);
(statearr_186838[8] = inst_186764);
(statearr_186838[9] = inst_186766);
(statearr_186838[10] = inst_186765);
return statearr_186838;
})();var statearr_186839_186920 = state_186823__$1;(statearr_186839_186920[2] = null);
(statearr_186839_186920[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 5))
{var inst_186702 = cljs.core.deref.call(null,cs);var inst_186703 = cljs.core.seq.call(null,inst_186702);var inst_186704 = inst_186703;var inst_186705 = null;var inst_186706 = 0;var inst_186707 = 0;var state_186823__$1 = (function (){var statearr_186840 = state_186823;(statearr_186840[14] = inst_186707);
(statearr_186840[15] = inst_186705);
(statearr_186840[16] = inst_186706);
(statearr_186840[17] = inst_186704);
return statearr_186840;
})();var statearr_186841_186921 = state_186823__$1;(statearr_186841_186921[2] = null);
(statearr_186841_186921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 37))
{var inst_186791 = (state_186823[18]);var inst_186695 = (state_186823[13]);var inst_186782 = (state_186823[12]);var inst_186791__$1 = cljs.core.first.call(null,inst_186782);var inst_186792 = cljs.core.async.put_BANG_.call(null,inst_186791__$1,inst_186695,done);var state_186823__$1 = (function (){var statearr_186842 = state_186823;(statearr_186842[18] = inst_186791__$1);
return statearr_186842;
})();if(cljs.core.truth_(inst_186792))
{var statearr_186843_186922 = state_186823__$1;(statearr_186843_186922[1] = 39);
} else
{var statearr_186844_186923 = state_186823__$1;(statearr_186844_186923[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 6))
{var inst_186755 = (state_186823[19]);var inst_186754 = cljs.core.deref.call(null,cs);var inst_186755__$1 = cljs.core.keys.call(null,inst_186754);var inst_186756 = cljs.core.count.call(null,inst_186755__$1);var inst_186757 = cljs.core.reset_BANG_.call(null,dctr,inst_186756);var inst_186762 = cljs.core.seq.call(null,inst_186755__$1);var inst_186763 = inst_186762;var inst_186764 = null;var inst_186765 = 0;var inst_186766 = 0;var state_186823__$1 = (function (){var statearr_186845 = state_186823;(statearr_186845[7] = inst_186763);
(statearr_186845[8] = inst_186764);
(statearr_186845[19] = inst_186755__$1);
(statearr_186845[20] = inst_186757);
(statearr_186845[9] = inst_186766);
(statearr_186845[10] = inst_186765);
return statearr_186845;
})();var statearr_186846_186924 = state_186823__$1;(statearr_186846_186924[2] = null);
(statearr_186846_186924[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 38))
{var inst_186802 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186847_186925 = state_186823__$1;(statearr_186847_186925[2] = inst_186802);
(statearr_186847_186925[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 7))
{var inst_186819 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186848_186926 = state_186823__$1;(statearr_186848_186926[2] = inst_186819);
(statearr_186848_186926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 39))
{var state_186823__$1 = state_186823;var statearr_186849_186927 = state_186823__$1;(statearr_186849_186927[2] = null);
(statearr_186849_186927[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 8))
{var inst_186707 = (state_186823[14]);var inst_186706 = (state_186823[16]);var inst_186709 = (inst_186707 < inst_186706);var inst_186710 = inst_186709;var state_186823__$1 = state_186823;if(cljs.core.truth_(inst_186710))
{var statearr_186850_186928 = state_186823__$1;(statearr_186850_186928[1] = 10);
} else
{var statearr_186851_186929 = state_186823__$1;(statearr_186851_186929[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 40))
{var inst_186791 = (state_186823[18]);var inst_186795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_186796 = cljs.core.async.untap_STAR_.call(null,m,inst_186791);var state_186823__$1 = (function (){var statearr_186852 = state_186823;(statearr_186852[21] = inst_186795);
return statearr_186852;
})();var statearr_186853_186930 = state_186823__$1;(statearr_186853_186930[2] = inst_186796);
(statearr_186853_186930[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 9))
{var inst_186752 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186854_186931 = state_186823__$1;(statearr_186854_186931[2] = inst_186752);
(statearr_186854_186931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 41))
{var inst_186782 = (state_186823[12]);var inst_186798 = (state_186823[2]);var inst_186799 = cljs.core.next.call(null,inst_186782);var inst_186763 = inst_186799;var inst_186764 = null;var inst_186765 = 0;var inst_186766 = 0;var state_186823__$1 = (function (){var statearr_186855 = state_186823;(statearr_186855[7] = inst_186763);
(statearr_186855[8] = inst_186764);
(statearr_186855[22] = inst_186798);
(statearr_186855[9] = inst_186766);
(statearr_186855[10] = inst_186765);
return statearr_186855;
})();var statearr_186856_186932 = state_186823__$1;(statearr_186856_186932[2] = null);
(statearr_186856_186932[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 10))
{var inst_186707 = (state_186823[14]);var inst_186705 = (state_186823[15]);var inst_186713 = cljs.core._nth.call(null,inst_186705,inst_186707);var inst_186714 = cljs.core.nth.call(null,inst_186713,0,null);var inst_186715 = cljs.core.nth.call(null,inst_186713,1,null);var state_186823__$1 = (function (){var statearr_186857 = state_186823;(statearr_186857[23] = inst_186714);
return statearr_186857;
})();if(cljs.core.truth_(inst_186715))
{var statearr_186858_186933 = state_186823__$1;(statearr_186858_186933[1] = 13);
} else
{var statearr_186859_186934 = state_186823__$1;(statearr_186859_186934[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 42))
{var state_186823__$1 = state_186823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186823__$1,45,dchan);
} else
{if((state_val_186824 === 11))
{var inst_186704 = (state_186823[17]);var inst_186724 = (state_186823[24]);var inst_186724__$1 = cljs.core.seq.call(null,inst_186704);var state_186823__$1 = (function (){var statearr_186860 = state_186823;(statearr_186860[24] = inst_186724__$1);
return statearr_186860;
})();if(inst_186724__$1)
{var statearr_186861_186935 = state_186823__$1;(statearr_186861_186935[1] = 16);
} else
{var statearr_186862_186936 = state_186823__$1;(statearr_186862_186936[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 43))
{var state_186823__$1 = state_186823;var statearr_186863_186937 = state_186823__$1;(statearr_186863_186937[2] = null);
(statearr_186863_186937[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 12))
{var inst_186750 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186864_186938 = state_186823__$1;(statearr_186864_186938[2] = inst_186750);
(statearr_186864_186938[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 44))
{var inst_186816 = (state_186823[2]);var state_186823__$1 = (function (){var statearr_186865 = state_186823;(statearr_186865[25] = inst_186816);
return statearr_186865;
})();var statearr_186866_186939 = state_186823__$1;(statearr_186866_186939[2] = null);
(statearr_186866_186939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 13))
{var inst_186714 = (state_186823[23]);var inst_186717 = cljs.core.async.close_BANG_.call(null,inst_186714);var state_186823__$1 = state_186823;var statearr_186867_186940 = state_186823__$1;(statearr_186867_186940[2] = inst_186717);
(statearr_186867_186940[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 45))
{var inst_186813 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186871_186941 = state_186823__$1;(statearr_186871_186941[2] = inst_186813);
(statearr_186871_186941[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 14))
{var state_186823__$1 = state_186823;var statearr_186872_186942 = state_186823__$1;(statearr_186872_186942[2] = null);
(statearr_186872_186942[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 15))
{var inst_186707 = (state_186823[14]);var inst_186705 = (state_186823[15]);var inst_186706 = (state_186823[16]);var inst_186704 = (state_186823[17]);var inst_186720 = (state_186823[2]);var inst_186721 = (inst_186707 + 1);var tmp186868 = inst_186705;var tmp186869 = inst_186706;var tmp186870 = inst_186704;var inst_186704__$1 = tmp186870;var inst_186705__$1 = tmp186868;var inst_186706__$1 = tmp186869;var inst_186707__$1 = inst_186721;var state_186823__$1 = (function (){var statearr_186873 = state_186823;(statearr_186873[14] = inst_186707__$1);
(statearr_186873[26] = inst_186720);
(statearr_186873[15] = inst_186705__$1);
(statearr_186873[16] = inst_186706__$1);
(statearr_186873[17] = inst_186704__$1);
return statearr_186873;
})();var statearr_186874_186943 = state_186823__$1;(statearr_186874_186943[2] = null);
(statearr_186874_186943[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 16))
{var inst_186724 = (state_186823[24]);var inst_186726 = cljs.core.chunked_seq_QMARK_.call(null,inst_186724);var state_186823__$1 = state_186823;if(inst_186726)
{var statearr_186875_186944 = state_186823__$1;(statearr_186875_186944[1] = 19);
} else
{var statearr_186876_186945 = state_186823__$1;(statearr_186876_186945[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 17))
{var state_186823__$1 = state_186823;var statearr_186877_186946 = state_186823__$1;(statearr_186877_186946[2] = null);
(statearr_186877_186946[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 18))
{var inst_186748 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186878_186947 = state_186823__$1;(statearr_186878_186947[2] = inst_186748);
(statearr_186878_186947[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 19))
{var inst_186724 = (state_186823[24]);var inst_186728 = cljs.core.chunk_first.call(null,inst_186724);var inst_186729 = cljs.core.chunk_rest.call(null,inst_186724);var inst_186730 = cljs.core.count.call(null,inst_186728);var inst_186704 = inst_186729;var inst_186705 = inst_186728;var inst_186706 = inst_186730;var inst_186707 = 0;var state_186823__$1 = (function (){var statearr_186879 = state_186823;(statearr_186879[14] = inst_186707);
(statearr_186879[15] = inst_186705);
(statearr_186879[16] = inst_186706);
(statearr_186879[17] = inst_186704);
return statearr_186879;
})();var statearr_186880_186948 = state_186823__$1;(statearr_186880_186948[2] = null);
(statearr_186880_186948[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 20))
{var inst_186724 = (state_186823[24]);var inst_186734 = cljs.core.first.call(null,inst_186724);var inst_186735 = cljs.core.nth.call(null,inst_186734,0,null);var inst_186736 = cljs.core.nth.call(null,inst_186734,1,null);var state_186823__$1 = (function (){var statearr_186881 = state_186823;(statearr_186881[27] = inst_186735);
return statearr_186881;
})();if(cljs.core.truth_(inst_186736))
{var statearr_186882_186949 = state_186823__$1;(statearr_186882_186949[1] = 22);
} else
{var statearr_186883_186950 = state_186823__$1;(statearr_186883_186950[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 21))
{var inst_186745 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186884_186951 = state_186823__$1;(statearr_186884_186951[2] = inst_186745);
(statearr_186884_186951[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 22))
{var inst_186735 = (state_186823[27]);var inst_186738 = cljs.core.async.close_BANG_.call(null,inst_186735);var state_186823__$1 = state_186823;var statearr_186885_186952 = state_186823__$1;(statearr_186885_186952[2] = inst_186738);
(statearr_186885_186952[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 23))
{var state_186823__$1 = state_186823;var statearr_186886_186953 = state_186823__$1;(statearr_186886_186953[2] = null);
(statearr_186886_186953[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 24))
{var inst_186724 = (state_186823[24]);var inst_186741 = (state_186823[2]);var inst_186742 = cljs.core.next.call(null,inst_186724);var inst_186704 = inst_186742;var inst_186705 = null;var inst_186706 = 0;var inst_186707 = 0;var state_186823__$1 = (function (){var statearr_186887 = state_186823;(statearr_186887[14] = inst_186707);
(statearr_186887[15] = inst_186705);
(statearr_186887[16] = inst_186706);
(statearr_186887[17] = inst_186704);
(statearr_186887[28] = inst_186741);
return statearr_186887;
})();var statearr_186888_186954 = state_186823__$1;(statearr_186888_186954[2] = null);
(statearr_186888_186954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 25))
{var inst_186766 = (state_186823[9]);var inst_186765 = (state_186823[10]);var inst_186768 = (inst_186766 < inst_186765);var inst_186769 = inst_186768;var state_186823__$1 = state_186823;if(cljs.core.truth_(inst_186769))
{var statearr_186889_186955 = state_186823__$1;(statearr_186889_186955[1] = 27);
} else
{var statearr_186890_186956 = state_186823__$1;(statearr_186890_186956[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 26))
{var inst_186755 = (state_186823[19]);var inst_186809 = (state_186823[2]);var inst_186810 = cljs.core.seq.call(null,inst_186755);var state_186823__$1 = (function (){var statearr_186891 = state_186823;(statearr_186891[29] = inst_186809);
return statearr_186891;
})();if(inst_186810)
{var statearr_186892_186957 = state_186823__$1;(statearr_186892_186957[1] = 42);
} else
{var statearr_186893_186958 = state_186823__$1;(statearr_186893_186958[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 27))
{var inst_186771 = (state_186823[30]);var inst_186764 = (state_186823[8]);var inst_186766 = (state_186823[9]);var inst_186695 = (state_186823[13]);var inst_186771__$1 = cljs.core._nth.call(null,inst_186764,inst_186766);var inst_186772 = cljs.core.async.put_BANG_.call(null,inst_186771__$1,inst_186695,done);var state_186823__$1 = (function (){var statearr_186894 = state_186823;(statearr_186894[30] = inst_186771__$1);
return statearr_186894;
})();if(cljs.core.truth_(inst_186772))
{var statearr_186895_186959 = state_186823__$1;(statearr_186895_186959[1] = 30);
} else
{var statearr_186896_186960 = state_186823__$1;(statearr_186896_186960[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 28))
{var inst_186763 = (state_186823[7]);var inst_186782 = (state_186823[12]);var inst_186782__$1 = cljs.core.seq.call(null,inst_186763);var state_186823__$1 = (function (){var statearr_186897 = state_186823;(statearr_186897[12] = inst_186782__$1);
return statearr_186897;
})();if(inst_186782__$1)
{var statearr_186898_186961 = state_186823__$1;(statearr_186898_186961[1] = 33);
} else
{var statearr_186899_186962 = state_186823__$1;(statearr_186899_186962[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 29))
{var inst_186807 = (state_186823[2]);var state_186823__$1 = state_186823;var statearr_186900_186963 = state_186823__$1;(statearr_186900_186963[2] = inst_186807);
(statearr_186900_186963[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 30))
{var state_186823__$1 = state_186823;var statearr_186901_186964 = state_186823__$1;(statearr_186901_186964[2] = null);
(statearr_186901_186964[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_186824 === 31))
{var inst_186771 = (state_186823[30]);var inst_186775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_186776 = cljs.core.async.untap_STAR_.call(null,m,inst_186771);var state_186823__$1 = (function (){var statearr_186902 = state_186823;(statearr_186902[31] = inst_186775);
return statearr_186902;
})();var statearr_186903_186965 = state_186823__$1;(statearr_186903_186965[2] = inst_186776);
(statearr_186903_186965[1] = 32);
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
var state_machine__6824__auto____0 = (function (){var statearr_186907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_186907[0] = state_machine__6824__auto__);
(statearr_186907[1] = 1);
return statearr_186907;
});
var state_machine__6824__auto____1 = (function (state_186823){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_186823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e186908){if((e186908 instanceof Object))
{var ex__6827__auto__ = e186908;var statearr_186909_186966 = state_186823;(statearr_186909_186966[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__186967 = state_186823;
state_186823 = G__186967;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_186823){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_186823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_186910 = f__6839__auto__.call(null);(statearr_186910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___186911);
return statearr_186910;
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
cljs.core.async.Mix = (function (){var obj186969 = {};return obj186969;
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
;var m = (function (){if(typeof cljs.core.async.t187089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t187089 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta187090){
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
this.meta187090 = meta187090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t187089.cljs$lang$type = true;
cljs.core.async.t187089.cljs$lang$ctorStr = "cljs.core.async/t187089";
cljs.core.async.t187089.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t187089");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t187089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_187091){var self__ = this;
var _187091__$1 = this;return self__.meta187090;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t187089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_187091,meta187090__$1){var self__ = this;
var _187091__$1 = this;return (new cljs.core.async.t187089(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta187090__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t187089 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t187089(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta187090){return (new cljs.core.async.t187089(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta187090));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t187089(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6838__auto___187208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187161){var state_val_187162 = (state_187161[1]);if((state_val_187162 === 1))
{var inst_187095 = (state_187161[7]);var inst_187095__$1 = calc_state.call(null);var inst_187096 = cljs.core.seq_QMARK_.call(null,inst_187095__$1);var state_187161__$1 = (function (){var statearr_187163 = state_187161;(statearr_187163[7] = inst_187095__$1);
return statearr_187163;
})();if(inst_187096)
{var statearr_187164_187209 = state_187161__$1;(statearr_187164_187209[1] = 2);
} else
{var statearr_187165_187210 = state_187161__$1;(statearr_187165_187210[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 2))
{var inst_187095 = (state_187161[7]);var inst_187098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_187095);var state_187161__$1 = state_187161;var statearr_187166_187211 = state_187161__$1;(statearr_187166_187211[2] = inst_187098);
(statearr_187166_187211[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 3))
{var inst_187095 = (state_187161[7]);var state_187161__$1 = state_187161;var statearr_187167_187212 = state_187161__$1;(statearr_187167_187212[2] = inst_187095);
(statearr_187167_187212[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 4))
{var inst_187095 = (state_187161[7]);var inst_187101 = (state_187161[2]);var inst_187102 = cljs.core.get.call(null,inst_187101,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_187103 = cljs.core.get.call(null,inst_187101,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_187104 = cljs.core.get.call(null,inst_187101,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_187105 = inst_187095;var state_187161__$1 = (function (){var statearr_187168 = state_187161;(statearr_187168[8] = inst_187102);
(statearr_187168[9] = inst_187103);
(statearr_187168[10] = inst_187104);
(statearr_187168[11] = inst_187105);
return statearr_187168;
})();var statearr_187169_187213 = state_187161__$1;(statearr_187169_187213[2] = null);
(statearr_187169_187213[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 5))
{var inst_187105 = (state_187161[11]);var inst_187108 = cljs.core.seq_QMARK_.call(null,inst_187105);var state_187161__$1 = state_187161;if(inst_187108)
{var statearr_187170_187214 = state_187161__$1;(statearr_187170_187214[1] = 7);
} else
{var statearr_187171_187215 = state_187161__$1;(statearr_187171_187215[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 6))
{var inst_187159 = (state_187161[2]);var state_187161__$1 = state_187161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187161__$1,inst_187159);
} else
{if((state_val_187162 === 7))
{var inst_187105 = (state_187161[11]);var inst_187110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_187105);var state_187161__$1 = state_187161;var statearr_187172_187216 = state_187161__$1;(statearr_187172_187216[2] = inst_187110);
(statearr_187172_187216[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 8))
{var inst_187105 = (state_187161[11]);var state_187161__$1 = state_187161;var statearr_187173_187217 = state_187161__$1;(statearr_187173_187217[2] = inst_187105);
(statearr_187173_187217[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 9))
{var inst_187113 = (state_187161[12]);var inst_187113__$1 = (state_187161[2]);var inst_187114 = cljs.core.get.call(null,inst_187113__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_187115 = cljs.core.get.call(null,inst_187113__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_187116 = cljs.core.get.call(null,inst_187113__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_187161__$1 = (function (){var statearr_187174 = state_187161;(statearr_187174[12] = inst_187113__$1);
(statearr_187174[13] = inst_187115);
(statearr_187174[14] = inst_187116);
return statearr_187174;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_187161__$1,10,inst_187114);
} else
{if((state_val_187162 === 10))
{var inst_187121 = (state_187161[15]);var inst_187120 = (state_187161[16]);var inst_187119 = (state_187161[2]);var inst_187120__$1 = cljs.core.nth.call(null,inst_187119,0,null);var inst_187121__$1 = cljs.core.nth.call(null,inst_187119,1,null);var inst_187122 = (inst_187120__$1 == null);var inst_187123 = cljs.core._EQ_.call(null,inst_187121__$1,change);var inst_187124 = (inst_187122) || (inst_187123);var state_187161__$1 = (function (){var statearr_187175 = state_187161;(statearr_187175[15] = inst_187121__$1);
(statearr_187175[16] = inst_187120__$1);
return statearr_187175;
})();if(cljs.core.truth_(inst_187124))
{var statearr_187176_187218 = state_187161__$1;(statearr_187176_187218[1] = 11);
} else
{var statearr_187177_187219 = state_187161__$1;(statearr_187177_187219[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 11))
{var inst_187120 = (state_187161[16]);var inst_187126 = (inst_187120 == null);var state_187161__$1 = state_187161;if(cljs.core.truth_(inst_187126))
{var statearr_187178_187220 = state_187161__$1;(statearr_187178_187220[1] = 14);
} else
{var statearr_187179_187221 = state_187161__$1;(statearr_187179_187221[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 12))
{var inst_187135 = (state_187161[17]);var inst_187121 = (state_187161[15]);var inst_187116 = (state_187161[14]);var inst_187135__$1 = inst_187116.call(null,inst_187121);var state_187161__$1 = (function (){var statearr_187180 = state_187161;(statearr_187180[17] = inst_187135__$1);
return statearr_187180;
})();if(cljs.core.truth_(inst_187135__$1))
{var statearr_187181_187222 = state_187161__$1;(statearr_187181_187222[1] = 17);
} else
{var statearr_187182_187223 = state_187161__$1;(statearr_187182_187223[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 13))
{var inst_187157 = (state_187161[2]);var state_187161__$1 = state_187161;var statearr_187183_187224 = state_187161__$1;(statearr_187183_187224[2] = inst_187157);
(statearr_187183_187224[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 14))
{var inst_187121 = (state_187161[15]);var inst_187128 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_187121);var state_187161__$1 = state_187161;var statearr_187184_187225 = state_187161__$1;(statearr_187184_187225[2] = inst_187128);
(statearr_187184_187225[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 15))
{var state_187161__$1 = state_187161;var statearr_187185_187226 = state_187161__$1;(statearr_187185_187226[2] = null);
(statearr_187185_187226[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 16))
{var inst_187131 = (state_187161[2]);var inst_187132 = calc_state.call(null);var inst_187105 = inst_187132;var state_187161__$1 = (function (){var statearr_187186 = state_187161;(statearr_187186[18] = inst_187131);
(statearr_187186[11] = inst_187105);
return statearr_187186;
})();var statearr_187187_187227 = state_187161__$1;(statearr_187187_187227[2] = null);
(statearr_187187_187227[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 17))
{var inst_187135 = (state_187161[17]);var state_187161__$1 = state_187161;var statearr_187188_187228 = state_187161__$1;(statearr_187188_187228[2] = inst_187135);
(statearr_187188_187228[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 18))
{var inst_187121 = (state_187161[15]);var inst_187115 = (state_187161[13]);var inst_187116 = (state_187161[14]);var inst_187138 = cljs.core.empty_QMARK_.call(null,inst_187116);var inst_187139 = inst_187115.call(null,inst_187121);var inst_187140 = cljs.core.not.call(null,inst_187139);var inst_187141 = (inst_187138) && (inst_187140);var state_187161__$1 = state_187161;var statearr_187189_187229 = state_187161__$1;(statearr_187189_187229[2] = inst_187141);
(statearr_187189_187229[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 19))
{var inst_187143 = (state_187161[2]);var state_187161__$1 = state_187161;if(cljs.core.truth_(inst_187143))
{var statearr_187190_187230 = state_187161__$1;(statearr_187190_187230[1] = 20);
} else
{var statearr_187191_187231 = state_187161__$1;(statearr_187191_187231[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 20))
{var inst_187120 = (state_187161[16]);var state_187161__$1 = state_187161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187161__$1,23,out,inst_187120);
} else
{if((state_val_187162 === 21))
{var inst_187113 = (state_187161[12]);var inst_187105 = inst_187113;var state_187161__$1 = (function (){var statearr_187192 = state_187161;(statearr_187192[11] = inst_187105);
return statearr_187192;
})();var statearr_187193_187232 = state_187161__$1;(statearr_187193_187232[2] = null);
(statearr_187193_187232[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 22))
{var inst_187155 = (state_187161[2]);var state_187161__$1 = state_187161;var statearr_187194_187233 = state_187161__$1;(statearr_187194_187233[2] = inst_187155);
(statearr_187194_187233[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 23))
{var inst_187146 = (state_187161[2]);var state_187161__$1 = state_187161;if(cljs.core.truth_(inst_187146))
{var statearr_187195_187234 = state_187161__$1;(statearr_187195_187234[1] = 24);
} else
{var statearr_187196_187235 = state_187161__$1;(statearr_187196_187235[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 24))
{var inst_187113 = (state_187161[12]);var inst_187105 = inst_187113;var state_187161__$1 = (function (){var statearr_187197 = state_187161;(statearr_187197[11] = inst_187105);
return statearr_187197;
})();var statearr_187198_187236 = state_187161__$1;(statearr_187198_187236[2] = null);
(statearr_187198_187236[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 25))
{var state_187161__$1 = state_187161;var statearr_187199_187237 = state_187161__$1;(statearr_187199_187237[2] = null);
(statearr_187199_187237[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187162 === 26))
{var inst_187151 = (state_187161[2]);var state_187161__$1 = state_187161;var statearr_187200_187238 = state_187161__$1;(statearr_187200_187238[2] = inst_187151);
(statearr_187200_187238[1] = 22);
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
var state_machine__6824__auto____0 = (function (){var statearr_187204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_187204[0] = state_machine__6824__auto__);
(statearr_187204[1] = 1);
return statearr_187204;
});
var state_machine__6824__auto____1 = (function (state_187161){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187161);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187205){if((e187205 instanceof Object))
{var ex__6827__auto__ = e187205;var statearr_187206_187239 = state_187161;(statearr_187206_187239[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187240 = state_187161;
state_187161 = G__187240;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187161){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187207 = f__6839__auto__.call(null);(statearr_187207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187208);
return statearr_187207;
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
cljs.core.async.Pub = (function (){var obj187242 = {};return obj187242;
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
return (function (p1__187243_SHARP_){if(cljs.core.truth_(p1__187243_SHARP_.call(null,topic)))
{return p1__187243_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__187243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t187366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t187366 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta187367){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta187367 = meta187367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t187366.cljs$lang$type = true;
cljs.core.async.t187366.cljs$lang$ctorStr = "cljs.core.async/t187366";
cljs.core.async.t187366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t187366");
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t187366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t187366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_187368){var self__ = this;
var _187368__$1 = this;return self__.meta187367;
});})(mults,ensure_mult))
;
cljs.core.async.t187366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_187368,meta187367__$1){var self__ = this;
var _187368__$1 = this;return (new cljs.core.async.t187366(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta187367__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t187366 = ((function (mults,ensure_mult){
return (function __GT_t187366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta187367){return (new cljs.core.async.t187366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta187367));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t187366(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6838__auto___187488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187440){var state_val_187441 = (state_187440[1]);if((state_val_187441 === 1))
{var state_187440__$1 = state_187440;var statearr_187442_187489 = state_187440__$1;(statearr_187442_187489[2] = null);
(statearr_187442_187489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 2))
{var state_187440__$1 = state_187440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187440__$1,4,ch);
} else
{if((state_val_187441 === 3))
{var inst_187438 = (state_187440[2]);var state_187440__$1 = state_187440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187440__$1,inst_187438);
} else
{if((state_val_187441 === 4))
{var inst_187371 = (state_187440[7]);var inst_187371__$1 = (state_187440[2]);var inst_187372 = (inst_187371__$1 == null);var state_187440__$1 = (function (){var statearr_187443 = state_187440;(statearr_187443[7] = inst_187371__$1);
return statearr_187443;
})();if(cljs.core.truth_(inst_187372))
{var statearr_187444_187490 = state_187440__$1;(statearr_187444_187490[1] = 5);
} else
{var statearr_187445_187491 = state_187440__$1;(statearr_187445_187491[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 5))
{var inst_187378 = cljs.core.deref.call(null,mults);var inst_187379 = cljs.core.vals.call(null,inst_187378);var inst_187380 = cljs.core.seq.call(null,inst_187379);var inst_187381 = inst_187380;var inst_187382 = null;var inst_187383 = 0;var inst_187384 = 0;var state_187440__$1 = (function (){var statearr_187446 = state_187440;(statearr_187446[8] = inst_187384);
(statearr_187446[9] = inst_187382);
(statearr_187446[10] = inst_187383);
(statearr_187446[11] = inst_187381);
return statearr_187446;
})();var statearr_187447_187492 = state_187440__$1;(statearr_187447_187492[2] = null);
(statearr_187447_187492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 6))
{var inst_187371 = (state_187440[7]);var inst_187421 = (state_187440[12]);var inst_187419 = (state_187440[13]);var inst_187419__$1 = topic_fn.call(null,inst_187371);var inst_187420 = cljs.core.deref.call(null,mults);var inst_187421__$1 = cljs.core.get.call(null,inst_187420,inst_187419__$1);var state_187440__$1 = (function (){var statearr_187448 = state_187440;(statearr_187448[12] = inst_187421__$1);
(statearr_187448[13] = inst_187419__$1);
return statearr_187448;
})();if(cljs.core.truth_(inst_187421__$1))
{var statearr_187449_187493 = state_187440__$1;(statearr_187449_187493[1] = 19);
} else
{var statearr_187450_187494 = state_187440__$1;(statearr_187450_187494[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 7))
{var inst_187436 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187451_187495 = state_187440__$1;(statearr_187451_187495[2] = inst_187436);
(statearr_187451_187495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 8))
{var inst_187384 = (state_187440[8]);var inst_187383 = (state_187440[10]);var inst_187386 = (inst_187384 < inst_187383);var inst_187387 = inst_187386;var state_187440__$1 = state_187440;if(cljs.core.truth_(inst_187387))
{var statearr_187455_187496 = state_187440__$1;(statearr_187455_187496[1] = 10);
} else
{var statearr_187456_187497 = state_187440__$1;(statearr_187456_187497[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 9))
{var inst_187417 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187457_187498 = state_187440__$1;(statearr_187457_187498[2] = inst_187417);
(statearr_187457_187498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 10))
{var inst_187384 = (state_187440[8]);var inst_187382 = (state_187440[9]);var inst_187383 = (state_187440[10]);var inst_187381 = (state_187440[11]);var inst_187389 = cljs.core._nth.call(null,inst_187382,inst_187384);var inst_187390 = cljs.core.async.muxch_STAR_.call(null,inst_187389);var inst_187391 = cljs.core.async.close_BANG_.call(null,inst_187390);var inst_187392 = (inst_187384 + 1);var tmp187452 = inst_187382;var tmp187453 = inst_187383;var tmp187454 = inst_187381;var inst_187381__$1 = tmp187454;var inst_187382__$1 = tmp187452;var inst_187383__$1 = tmp187453;var inst_187384__$1 = inst_187392;var state_187440__$1 = (function (){var statearr_187458 = state_187440;(statearr_187458[8] = inst_187384__$1);
(statearr_187458[9] = inst_187382__$1);
(statearr_187458[10] = inst_187383__$1);
(statearr_187458[11] = inst_187381__$1);
(statearr_187458[14] = inst_187391);
return statearr_187458;
})();var statearr_187459_187499 = state_187440__$1;(statearr_187459_187499[2] = null);
(statearr_187459_187499[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 11))
{var inst_187381 = (state_187440[11]);var inst_187395 = (state_187440[15]);var inst_187395__$1 = cljs.core.seq.call(null,inst_187381);var state_187440__$1 = (function (){var statearr_187460 = state_187440;(statearr_187460[15] = inst_187395__$1);
return statearr_187460;
})();if(inst_187395__$1)
{var statearr_187461_187500 = state_187440__$1;(statearr_187461_187500[1] = 13);
} else
{var statearr_187462_187501 = state_187440__$1;(statearr_187462_187501[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 12))
{var inst_187415 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187463_187502 = state_187440__$1;(statearr_187463_187502[2] = inst_187415);
(statearr_187463_187502[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 13))
{var inst_187395 = (state_187440[15]);var inst_187397 = cljs.core.chunked_seq_QMARK_.call(null,inst_187395);var state_187440__$1 = state_187440;if(inst_187397)
{var statearr_187464_187503 = state_187440__$1;(statearr_187464_187503[1] = 16);
} else
{var statearr_187465_187504 = state_187440__$1;(statearr_187465_187504[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 14))
{var state_187440__$1 = state_187440;var statearr_187466_187505 = state_187440__$1;(statearr_187466_187505[2] = null);
(statearr_187466_187505[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 15))
{var inst_187413 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187467_187506 = state_187440__$1;(statearr_187467_187506[2] = inst_187413);
(statearr_187467_187506[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 16))
{var inst_187395 = (state_187440[15]);var inst_187399 = cljs.core.chunk_first.call(null,inst_187395);var inst_187400 = cljs.core.chunk_rest.call(null,inst_187395);var inst_187401 = cljs.core.count.call(null,inst_187399);var inst_187381 = inst_187400;var inst_187382 = inst_187399;var inst_187383 = inst_187401;var inst_187384 = 0;var state_187440__$1 = (function (){var statearr_187468 = state_187440;(statearr_187468[8] = inst_187384);
(statearr_187468[9] = inst_187382);
(statearr_187468[10] = inst_187383);
(statearr_187468[11] = inst_187381);
return statearr_187468;
})();var statearr_187469_187507 = state_187440__$1;(statearr_187469_187507[2] = null);
(statearr_187469_187507[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 17))
{var inst_187395 = (state_187440[15]);var inst_187404 = cljs.core.first.call(null,inst_187395);var inst_187405 = cljs.core.async.muxch_STAR_.call(null,inst_187404);var inst_187406 = cljs.core.async.close_BANG_.call(null,inst_187405);var inst_187407 = cljs.core.next.call(null,inst_187395);var inst_187381 = inst_187407;var inst_187382 = null;var inst_187383 = 0;var inst_187384 = 0;var state_187440__$1 = (function (){var statearr_187470 = state_187440;(statearr_187470[8] = inst_187384);
(statearr_187470[9] = inst_187382);
(statearr_187470[10] = inst_187383);
(statearr_187470[11] = inst_187381);
(statearr_187470[16] = inst_187406);
return statearr_187470;
})();var statearr_187471_187508 = state_187440__$1;(statearr_187471_187508[2] = null);
(statearr_187471_187508[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 18))
{var inst_187410 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187472_187509 = state_187440__$1;(statearr_187472_187509[2] = inst_187410);
(statearr_187472_187509[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 19))
{var inst_187371 = (state_187440[7]);var inst_187421 = (state_187440[12]);var inst_187423 = cljs.core.async.muxch_STAR_.call(null,inst_187421);var state_187440__$1 = state_187440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187440__$1,22,inst_187423,inst_187371);
} else
{if((state_val_187441 === 20))
{var state_187440__$1 = state_187440;var statearr_187473_187510 = state_187440__$1;(statearr_187473_187510[2] = null);
(statearr_187473_187510[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 21))
{var inst_187433 = (state_187440[2]);var state_187440__$1 = (function (){var statearr_187474 = state_187440;(statearr_187474[17] = inst_187433);
return statearr_187474;
})();var statearr_187475_187511 = state_187440__$1;(statearr_187475_187511[2] = null);
(statearr_187475_187511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 22))
{var inst_187425 = (state_187440[2]);var state_187440__$1 = state_187440;if(cljs.core.truth_(inst_187425))
{var statearr_187476_187512 = state_187440__$1;(statearr_187476_187512[1] = 23);
} else
{var statearr_187477_187513 = state_187440__$1;(statearr_187477_187513[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 23))
{var state_187440__$1 = state_187440;var statearr_187478_187514 = state_187440__$1;(statearr_187478_187514[2] = null);
(statearr_187478_187514[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 24))
{var inst_187419 = (state_187440[13]);var inst_187428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_187419);var state_187440__$1 = state_187440;var statearr_187479_187515 = state_187440__$1;(statearr_187479_187515[2] = inst_187428);
(statearr_187479_187515[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187441 === 25))
{var inst_187430 = (state_187440[2]);var state_187440__$1 = state_187440;var statearr_187480_187516 = state_187440__$1;(statearr_187480_187516[2] = inst_187430);
(statearr_187480_187516[1] = 21);
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
var state_machine__6824__auto____0 = (function (){var statearr_187484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_187484[0] = state_machine__6824__auto__);
(statearr_187484[1] = 1);
return statearr_187484;
});
var state_machine__6824__auto____1 = (function (state_187440){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187485){if((e187485 instanceof Object))
{var ex__6827__auto__ = e187485;var statearr_187486_187517 = state_187440;(statearr_187486_187517[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187518 = state_187440;
state_187440 = G__187518;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187440){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187487 = f__6839__auto__.call(null);(statearr_187487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187488);
return statearr_187487;
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
,cljs.core.range.call(null,cnt));var c__6838__auto___187655 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187625){var state_val_187626 = (state_187625[1]);if((state_val_187626 === 1))
{var state_187625__$1 = state_187625;var statearr_187627_187656 = state_187625__$1;(statearr_187627_187656[2] = null);
(statearr_187627_187656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 2))
{var inst_187588 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_187589 = 0;var state_187625__$1 = (function (){var statearr_187628 = state_187625;(statearr_187628[7] = inst_187588);
(statearr_187628[8] = inst_187589);
return statearr_187628;
})();var statearr_187629_187657 = state_187625__$1;(statearr_187629_187657[2] = null);
(statearr_187629_187657[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 3))
{var inst_187623 = (state_187625[2]);var state_187625__$1 = state_187625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187625__$1,inst_187623);
} else
{if((state_val_187626 === 4))
{var inst_187589 = (state_187625[8]);var inst_187591 = (inst_187589 < cnt);var state_187625__$1 = state_187625;if(cljs.core.truth_(inst_187591))
{var statearr_187630_187658 = state_187625__$1;(statearr_187630_187658[1] = 6);
} else
{var statearr_187631_187659 = state_187625__$1;(statearr_187631_187659[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 5))
{var inst_187609 = (state_187625[2]);var state_187625__$1 = (function (){var statearr_187632 = state_187625;(statearr_187632[9] = inst_187609);
return statearr_187632;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187625__$1,12,dchan);
} else
{if((state_val_187626 === 6))
{var state_187625__$1 = state_187625;var statearr_187633_187660 = state_187625__$1;(statearr_187633_187660[2] = null);
(statearr_187633_187660[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 7))
{var state_187625__$1 = state_187625;var statearr_187634_187661 = state_187625__$1;(statearr_187634_187661[2] = null);
(statearr_187634_187661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 8))
{var inst_187607 = (state_187625[2]);var state_187625__$1 = state_187625;var statearr_187635_187662 = state_187625__$1;(statearr_187635_187662[2] = inst_187607);
(statearr_187635_187662[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 9))
{var inst_187589 = (state_187625[8]);var inst_187602 = (state_187625[2]);var inst_187603 = (inst_187589 + 1);var inst_187589__$1 = inst_187603;var state_187625__$1 = (function (){var statearr_187636 = state_187625;(statearr_187636[10] = inst_187602);
(statearr_187636[8] = inst_187589__$1);
return statearr_187636;
})();var statearr_187637_187663 = state_187625__$1;(statearr_187637_187663[2] = null);
(statearr_187637_187663[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 10))
{var inst_187593 = (state_187625[2]);var inst_187594 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_187625__$1 = (function (){var statearr_187638 = state_187625;(statearr_187638[11] = inst_187593);
return statearr_187638;
})();var statearr_187639_187664 = state_187625__$1;(statearr_187639_187664[2] = inst_187594);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187625__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 11))
{var inst_187589 = (state_187625[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_187625,10,Object,null,9);var inst_187598 = chs__$1.call(null,inst_187589);var inst_187599 = done.call(null,inst_187589);var inst_187600 = cljs.core.async.take_BANG_.call(null,inst_187598,inst_187599);var state_187625__$1 = state_187625;var statearr_187640_187665 = state_187625__$1;(statearr_187640_187665[2] = inst_187600);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187625__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 12))
{var inst_187611 = (state_187625[12]);var inst_187611__$1 = (state_187625[2]);var inst_187612 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_187611__$1);var state_187625__$1 = (function (){var statearr_187641 = state_187625;(statearr_187641[12] = inst_187611__$1);
return statearr_187641;
})();if(cljs.core.truth_(inst_187612))
{var statearr_187642_187666 = state_187625__$1;(statearr_187642_187666[1] = 13);
} else
{var statearr_187643_187667 = state_187625__$1;(statearr_187643_187667[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 13))
{var inst_187614 = cljs.core.async.close_BANG_.call(null,out);var state_187625__$1 = state_187625;var statearr_187644_187668 = state_187625__$1;(statearr_187644_187668[2] = inst_187614);
(statearr_187644_187668[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 14))
{var inst_187611 = (state_187625[12]);var inst_187616 = cljs.core.apply.call(null,f,inst_187611);var state_187625__$1 = state_187625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187625__$1,16,out,inst_187616);
} else
{if((state_val_187626 === 15))
{var inst_187621 = (state_187625[2]);var state_187625__$1 = state_187625;var statearr_187645_187669 = state_187625__$1;(statearr_187645_187669[2] = inst_187621);
(statearr_187645_187669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187626 === 16))
{var inst_187618 = (state_187625[2]);var state_187625__$1 = (function (){var statearr_187646 = state_187625;(statearr_187646[13] = inst_187618);
return statearr_187646;
})();var statearr_187647_187670 = state_187625__$1;(statearr_187647_187670[2] = null);
(statearr_187647_187670[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_187651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_187651[0] = state_machine__6824__auto__);
(statearr_187651[1] = 1);
return statearr_187651;
});
var state_machine__6824__auto____1 = (function (state_187625){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187625);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187652){if((e187652 instanceof Object))
{var ex__6827__auto__ = e187652;var statearr_187653_187671 = state_187625;(statearr_187653_187671[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187672 = state_187625;
state_187625 = G__187672;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187625){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187654 = f__6839__auto__.call(null);(statearr_187654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187655);
return statearr_187654;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___187780 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187756){var state_val_187757 = (state_187756[1]);if((state_val_187757 === 1))
{var inst_187727 = cljs.core.vec.call(null,chs);var inst_187728 = inst_187727;var state_187756__$1 = (function (){var statearr_187758 = state_187756;(statearr_187758[7] = inst_187728);
return statearr_187758;
})();var statearr_187759_187781 = state_187756__$1;(statearr_187759_187781[2] = null);
(statearr_187759_187781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 2))
{var inst_187728 = (state_187756[7]);var inst_187730 = cljs.core.count.call(null,inst_187728);var inst_187731 = (inst_187730 > 0);var state_187756__$1 = state_187756;if(cljs.core.truth_(inst_187731))
{var statearr_187760_187782 = state_187756__$1;(statearr_187760_187782[1] = 4);
} else
{var statearr_187761_187783 = state_187756__$1;(statearr_187761_187783[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 3))
{var inst_187754 = (state_187756[2]);var state_187756__$1 = state_187756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187756__$1,inst_187754);
} else
{if((state_val_187757 === 4))
{var inst_187728 = (state_187756[7]);var state_187756__$1 = state_187756;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_187756__$1,7,inst_187728);
} else
{if((state_val_187757 === 5))
{var inst_187750 = cljs.core.async.close_BANG_.call(null,out);var state_187756__$1 = state_187756;var statearr_187762_187784 = state_187756__$1;(statearr_187762_187784[2] = inst_187750);
(statearr_187762_187784[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 6))
{var inst_187752 = (state_187756[2]);var state_187756__$1 = state_187756;var statearr_187763_187785 = state_187756__$1;(statearr_187763_187785[2] = inst_187752);
(statearr_187763_187785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 7))
{var inst_187736 = (state_187756[8]);var inst_187735 = (state_187756[9]);var inst_187735__$1 = (state_187756[2]);var inst_187736__$1 = cljs.core.nth.call(null,inst_187735__$1,0,null);var inst_187737 = cljs.core.nth.call(null,inst_187735__$1,1,null);var inst_187738 = (inst_187736__$1 == null);var state_187756__$1 = (function (){var statearr_187764 = state_187756;(statearr_187764[8] = inst_187736__$1);
(statearr_187764[9] = inst_187735__$1);
(statearr_187764[10] = inst_187737);
return statearr_187764;
})();if(cljs.core.truth_(inst_187738))
{var statearr_187765_187786 = state_187756__$1;(statearr_187765_187786[1] = 8);
} else
{var statearr_187766_187787 = state_187756__$1;(statearr_187766_187787[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 8))
{var inst_187728 = (state_187756[7]);var inst_187736 = (state_187756[8]);var inst_187735 = (state_187756[9]);var inst_187737 = (state_187756[10]);var inst_187740 = (function (){var c = inst_187737;var v = inst_187736;var vec__187733 = inst_187735;var cs = inst_187728;return ((function (c,v,vec__187733,cs,inst_187728,inst_187736,inst_187735,inst_187737,state_val_187757){
return (function (p1__187673_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__187673_SHARP_);
});
;})(c,v,vec__187733,cs,inst_187728,inst_187736,inst_187735,inst_187737,state_val_187757))
})();var inst_187741 = cljs.core.filterv.call(null,inst_187740,inst_187728);var inst_187728__$1 = inst_187741;var state_187756__$1 = (function (){var statearr_187767 = state_187756;(statearr_187767[7] = inst_187728__$1);
return statearr_187767;
})();var statearr_187768_187788 = state_187756__$1;(statearr_187768_187788[2] = null);
(statearr_187768_187788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 9))
{var inst_187736 = (state_187756[8]);var state_187756__$1 = state_187756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187756__$1,11,out,inst_187736);
} else
{if((state_val_187757 === 10))
{var inst_187748 = (state_187756[2]);var state_187756__$1 = state_187756;var statearr_187770_187789 = state_187756__$1;(statearr_187770_187789[2] = inst_187748);
(statearr_187770_187789[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187757 === 11))
{var inst_187728 = (state_187756[7]);var inst_187745 = (state_187756[2]);var tmp187769 = inst_187728;var inst_187728__$1 = tmp187769;var state_187756__$1 = (function (){var statearr_187771 = state_187756;(statearr_187771[11] = inst_187745);
(statearr_187771[7] = inst_187728__$1);
return statearr_187771;
})();var statearr_187772_187790 = state_187756__$1;(statearr_187772_187790[2] = null);
(statearr_187772_187790[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_187776 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_187776[0] = state_machine__6824__auto__);
(statearr_187776[1] = 1);
return statearr_187776;
});
var state_machine__6824__auto____1 = (function (state_187756){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187756);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187777){if((e187777 instanceof Object))
{var ex__6827__auto__ = e187777;var statearr_187778_187791 = state_187756;(statearr_187778_187791[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187792 = state_187756;
state_187756 = G__187792;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187756){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187779 = f__6839__auto__.call(null);(statearr_187779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187780);
return statearr_187779;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___187885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187862){var state_val_187863 = (state_187862[1]);if((state_val_187863 === 1))
{var inst_187839 = 0;var state_187862__$1 = (function (){var statearr_187864 = state_187862;(statearr_187864[7] = inst_187839);
return statearr_187864;
})();var statearr_187865_187886 = state_187862__$1;(statearr_187865_187886[2] = null);
(statearr_187865_187886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 2))
{var inst_187839 = (state_187862[7]);var inst_187841 = (inst_187839 < n);var state_187862__$1 = state_187862;if(cljs.core.truth_(inst_187841))
{var statearr_187866_187887 = state_187862__$1;(statearr_187866_187887[1] = 4);
} else
{var statearr_187867_187888 = state_187862__$1;(statearr_187867_187888[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 3))
{var inst_187859 = (state_187862[2]);var inst_187860 = cljs.core.async.close_BANG_.call(null,out);var state_187862__$1 = (function (){var statearr_187868 = state_187862;(statearr_187868[8] = inst_187859);
return statearr_187868;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187862__$1,inst_187860);
} else
{if((state_val_187863 === 4))
{var state_187862__$1 = state_187862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187862__$1,7,ch);
} else
{if((state_val_187863 === 5))
{var state_187862__$1 = state_187862;var statearr_187869_187889 = state_187862__$1;(statearr_187869_187889[2] = null);
(statearr_187869_187889[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 6))
{var inst_187857 = (state_187862[2]);var state_187862__$1 = state_187862;var statearr_187870_187890 = state_187862__$1;(statearr_187870_187890[2] = inst_187857);
(statearr_187870_187890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 7))
{var inst_187844 = (state_187862[9]);var inst_187844__$1 = (state_187862[2]);var inst_187845 = (inst_187844__$1 == null);var inst_187846 = cljs.core.not.call(null,inst_187845);var state_187862__$1 = (function (){var statearr_187871 = state_187862;(statearr_187871[9] = inst_187844__$1);
return statearr_187871;
})();if(inst_187846)
{var statearr_187872_187891 = state_187862__$1;(statearr_187872_187891[1] = 8);
} else
{var statearr_187873_187892 = state_187862__$1;(statearr_187873_187892[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 8))
{var inst_187844 = (state_187862[9]);var state_187862__$1 = state_187862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187862__$1,11,out,inst_187844);
} else
{if((state_val_187863 === 9))
{var state_187862__$1 = state_187862;var statearr_187874_187893 = state_187862__$1;(statearr_187874_187893[2] = null);
(statearr_187874_187893[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 10))
{var inst_187854 = (state_187862[2]);var state_187862__$1 = state_187862;var statearr_187875_187894 = state_187862__$1;(statearr_187875_187894[2] = inst_187854);
(statearr_187875_187894[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187863 === 11))
{var inst_187839 = (state_187862[7]);var inst_187849 = (state_187862[2]);var inst_187850 = (inst_187839 + 1);var inst_187839__$1 = inst_187850;var state_187862__$1 = (function (){var statearr_187876 = state_187862;(statearr_187876[7] = inst_187839__$1);
(statearr_187876[10] = inst_187849);
return statearr_187876;
})();var statearr_187877_187895 = state_187862__$1;(statearr_187877_187895[2] = null);
(statearr_187877_187895[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_187881 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_187881[0] = state_machine__6824__auto__);
(statearr_187881[1] = 1);
return statearr_187881;
});
var state_machine__6824__auto____1 = (function (state_187862){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187862);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187882){if((e187882 instanceof Object))
{var ex__6827__auto__ = e187882;var statearr_187883_187896 = state_187862;(statearr_187883_187896[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187897 = state_187862;
state_187862 = G__187897;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187862){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187884 = f__6839__auto__.call(null);(statearr_187884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187885);
return statearr_187884;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___187994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_187969){var state_val_187970 = (state_187969[1]);if((state_val_187970 === 1))
{var inst_187946 = null;var state_187969__$1 = (function (){var statearr_187971 = state_187969;(statearr_187971[7] = inst_187946);
return statearr_187971;
})();var statearr_187972_187995 = state_187969__$1;(statearr_187972_187995[2] = null);
(statearr_187972_187995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 2))
{var state_187969__$1 = state_187969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187969__$1,4,ch);
} else
{if((state_val_187970 === 3))
{var inst_187966 = (state_187969[2]);var inst_187967 = cljs.core.async.close_BANG_.call(null,out);var state_187969__$1 = (function (){var statearr_187973 = state_187969;(statearr_187973[8] = inst_187966);
return statearr_187973;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187969__$1,inst_187967);
} else
{if((state_val_187970 === 4))
{var inst_187949 = (state_187969[9]);var inst_187949__$1 = (state_187969[2]);var inst_187950 = (inst_187949__$1 == null);var inst_187951 = cljs.core.not.call(null,inst_187950);var state_187969__$1 = (function (){var statearr_187974 = state_187969;(statearr_187974[9] = inst_187949__$1);
return statearr_187974;
})();if(inst_187951)
{var statearr_187975_187996 = state_187969__$1;(statearr_187975_187996[1] = 5);
} else
{var statearr_187976_187997 = state_187969__$1;(statearr_187976_187997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 5))
{var inst_187949 = (state_187969[9]);var inst_187946 = (state_187969[7]);var inst_187953 = cljs.core._EQ_.call(null,inst_187949,inst_187946);var state_187969__$1 = state_187969;if(inst_187953)
{var statearr_187977_187998 = state_187969__$1;(statearr_187977_187998[1] = 8);
} else
{var statearr_187978_187999 = state_187969__$1;(statearr_187978_187999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 6))
{var state_187969__$1 = state_187969;var statearr_187980_188000 = state_187969__$1;(statearr_187980_188000[2] = null);
(statearr_187980_188000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 7))
{var inst_187964 = (state_187969[2]);var state_187969__$1 = state_187969;var statearr_187981_188001 = state_187969__$1;(statearr_187981_188001[2] = inst_187964);
(statearr_187981_188001[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 8))
{var inst_187946 = (state_187969[7]);var tmp187979 = inst_187946;var inst_187946__$1 = tmp187979;var state_187969__$1 = (function (){var statearr_187982 = state_187969;(statearr_187982[7] = inst_187946__$1);
return statearr_187982;
})();var statearr_187983_188002 = state_187969__$1;(statearr_187983_188002[2] = null);
(statearr_187983_188002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 9))
{var inst_187949 = (state_187969[9]);var state_187969__$1 = state_187969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187969__$1,11,out,inst_187949);
} else
{if((state_val_187970 === 10))
{var inst_187961 = (state_187969[2]);var state_187969__$1 = state_187969;var statearr_187984_188003 = state_187969__$1;(statearr_187984_188003[2] = inst_187961);
(statearr_187984_188003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187970 === 11))
{var inst_187949 = (state_187969[9]);var inst_187958 = (state_187969[2]);var inst_187946 = inst_187949;var state_187969__$1 = (function (){var statearr_187985 = state_187969;(statearr_187985[7] = inst_187946);
(statearr_187985[10] = inst_187958);
return statearr_187985;
})();var statearr_187986_188004 = state_187969__$1;(statearr_187986_188004[2] = null);
(statearr_187986_188004[1] = 2);
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
var state_machine__6824__auto____0 = (function (){var statearr_187990 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_187990[0] = state_machine__6824__auto__);
(statearr_187990[1] = 1);
return statearr_187990;
});
var state_machine__6824__auto____1 = (function (state_187969){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_187969);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e187991){if((e187991 instanceof Object))
{var ex__6827__auto__ = e187991;var statearr_187992_188005 = state_187969;(statearr_187992_188005[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188006 = state_187969;
state_187969 = G__188006;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_187969){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_187969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_187993 = f__6839__auto__.call(null);(statearr_187993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___187994);
return statearr_187993;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___188141 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_188111){var state_val_188112 = (state_188111[1]);if((state_val_188112 === 1))
{var inst_188074 = (new Array(n));var inst_188075 = inst_188074;var inst_188076 = 0;var state_188111__$1 = (function (){var statearr_188113 = state_188111;(statearr_188113[7] = inst_188075);
(statearr_188113[8] = inst_188076);
return statearr_188113;
})();var statearr_188114_188142 = state_188111__$1;(statearr_188114_188142[2] = null);
(statearr_188114_188142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 2))
{var state_188111__$1 = state_188111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188111__$1,4,ch);
} else
{if((state_val_188112 === 3))
{var inst_188109 = (state_188111[2]);var state_188111__$1 = state_188111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188111__$1,inst_188109);
} else
{if((state_val_188112 === 4))
{var inst_188079 = (state_188111[9]);var inst_188079__$1 = (state_188111[2]);var inst_188080 = (inst_188079__$1 == null);var inst_188081 = cljs.core.not.call(null,inst_188080);var state_188111__$1 = (function (){var statearr_188115 = state_188111;(statearr_188115[9] = inst_188079__$1);
return statearr_188115;
})();if(inst_188081)
{var statearr_188116_188143 = state_188111__$1;(statearr_188116_188143[1] = 5);
} else
{var statearr_188117_188144 = state_188111__$1;(statearr_188117_188144[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 5))
{var inst_188079 = (state_188111[9]);var inst_188075 = (state_188111[7]);var inst_188076 = (state_188111[8]);var inst_188084 = (state_188111[10]);var inst_188083 = (inst_188075[inst_188076] = inst_188079);var inst_188084__$1 = (inst_188076 + 1);var inst_188085 = (inst_188084__$1 < n);var state_188111__$1 = (function (){var statearr_188118 = state_188111;(statearr_188118[10] = inst_188084__$1);
(statearr_188118[11] = inst_188083);
return statearr_188118;
})();if(cljs.core.truth_(inst_188085))
{var statearr_188119_188145 = state_188111__$1;(statearr_188119_188145[1] = 8);
} else
{var statearr_188120_188146 = state_188111__$1;(statearr_188120_188146[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 6))
{var inst_188076 = (state_188111[8]);var inst_188097 = (inst_188076 > 0);var state_188111__$1 = state_188111;if(cljs.core.truth_(inst_188097))
{var statearr_188122_188147 = state_188111__$1;(statearr_188122_188147[1] = 12);
} else
{var statearr_188123_188148 = state_188111__$1;(statearr_188123_188148[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 7))
{var inst_188107 = (state_188111[2]);var state_188111__$1 = state_188111;var statearr_188124_188149 = state_188111__$1;(statearr_188124_188149[2] = inst_188107);
(statearr_188124_188149[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 8))
{var inst_188075 = (state_188111[7]);var inst_188084 = (state_188111[10]);var tmp188121 = inst_188075;var inst_188075__$1 = tmp188121;var inst_188076 = inst_188084;var state_188111__$1 = (function (){var statearr_188125 = state_188111;(statearr_188125[7] = inst_188075__$1);
(statearr_188125[8] = inst_188076);
return statearr_188125;
})();var statearr_188126_188150 = state_188111__$1;(statearr_188126_188150[2] = null);
(statearr_188126_188150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 9))
{var inst_188075 = (state_188111[7]);var inst_188089 = cljs.core.vec.call(null,inst_188075);var state_188111__$1 = state_188111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188111__$1,11,out,inst_188089);
} else
{if((state_val_188112 === 10))
{var inst_188095 = (state_188111[2]);var state_188111__$1 = state_188111;var statearr_188127_188151 = state_188111__$1;(statearr_188127_188151[2] = inst_188095);
(statearr_188127_188151[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 11))
{var inst_188091 = (state_188111[2]);var inst_188092 = (new Array(n));var inst_188075 = inst_188092;var inst_188076 = 0;var state_188111__$1 = (function (){var statearr_188128 = state_188111;(statearr_188128[7] = inst_188075);
(statearr_188128[8] = inst_188076);
(statearr_188128[12] = inst_188091);
return statearr_188128;
})();var statearr_188129_188152 = state_188111__$1;(statearr_188129_188152[2] = null);
(statearr_188129_188152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 12))
{var inst_188075 = (state_188111[7]);var inst_188099 = cljs.core.vec.call(null,inst_188075);var state_188111__$1 = state_188111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188111__$1,15,out,inst_188099);
} else
{if((state_val_188112 === 13))
{var state_188111__$1 = state_188111;var statearr_188130_188153 = state_188111__$1;(statearr_188130_188153[2] = null);
(statearr_188130_188153[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 14))
{var inst_188104 = (state_188111[2]);var inst_188105 = cljs.core.async.close_BANG_.call(null,out);var state_188111__$1 = (function (){var statearr_188131 = state_188111;(statearr_188131[13] = inst_188104);
return statearr_188131;
})();var statearr_188132_188154 = state_188111__$1;(statearr_188132_188154[2] = inst_188105);
(statearr_188132_188154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188112 === 15))
{var inst_188101 = (state_188111[2]);var state_188111__$1 = state_188111;var statearr_188133_188155 = state_188111__$1;(statearr_188133_188155[2] = inst_188101);
(statearr_188133_188155[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_188137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188137[0] = state_machine__6824__auto__);
(statearr_188137[1] = 1);
return statearr_188137;
});
var state_machine__6824__auto____1 = (function (state_188111){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_188111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e188138){if((e188138 instanceof Object))
{var ex__6827__auto__ = e188138;var statearr_188139_188156 = state_188111;(statearr_188139_188156[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188157 = state_188111;
state_188111 = G__188157;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_188111){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_188111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_188140 = f__6839__auto__.call(null);(statearr_188140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___188141);
return statearr_188140;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6838__auto___188300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6839__auto__ = (function (){var switch__6823__auto__ = (function (state_188270){var state_val_188271 = (state_188270[1]);if((state_val_188271 === 1))
{var inst_188229 = [];var inst_188230 = inst_188229;var inst_188231 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_188270__$1 = (function (){var statearr_188272 = state_188270;(statearr_188272[7] = inst_188231);
(statearr_188272[8] = inst_188230);
return statearr_188272;
})();var statearr_188273_188301 = state_188270__$1;(statearr_188273_188301[2] = null);
(statearr_188273_188301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 2))
{var state_188270__$1 = state_188270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188270__$1,4,ch);
} else
{if((state_val_188271 === 3))
{var inst_188268 = (state_188270[2]);var state_188270__$1 = state_188270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188270__$1,inst_188268);
} else
{if((state_val_188271 === 4))
{var inst_188234 = (state_188270[9]);var inst_188234__$1 = (state_188270[2]);var inst_188235 = (inst_188234__$1 == null);var inst_188236 = cljs.core.not.call(null,inst_188235);var state_188270__$1 = (function (){var statearr_188274 = state_188270;(statearr_188274[9] = inst_188234__$1);
return statearr_188274;
})();if(inst_188236)
{var statearr_188275_188302 = state_188270__$1;(statearr_188275_188302[1] = 5);
} else
{var statearr_188276_188303 = state_188270__$1;(statearr_188276_188303[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 5))
{var inst_188234 = (state_188270[9]);var inst_188231 = (state_188270[7]);var inst_188238 = (state_188270[10]);var inst_188238__$1 = f.call(null,inst_188234);var inst_188239 = cljs.core._EQ_.call(null,inst_188238__$1,inst_188231);var inst_188240 = cljs.core.keyword_identical_QMARK_.call(null,inst_188231,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_188241 = (inst_188239) || (inst_188240);var state_188270__$1 = (function (){var statearr_188277 = state_188270;(statearr_188277[10] = inst_188238__$1);
return statearr_188277;
})();if(cljs.core.truth_(inst_188241))
{var statearr_188278_188304 = state_188270__$1;(statearr_188278_188304[1] = 8);
} else
{var statearr_188279_188305 = state_188270__$1;(statearr_188279_188305[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 6))
{var inst_188230 = (state_188270[8]);var inst_188255 = inst_188230.length;var inst_188256 = (inst_188255 > 0);var state_188270__$1 = state_188270;if(cljs.core.truth_(inst_188256))
{var statearr_188281_188306 = state_188270__$1;(statearr_188281_188306[1] = 12);
} else
{var statearr_188282_188307 = state_188270__$1;(statearr_188282_188307[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 7))
{var inst_188266 = (state_188270[2]);var state_188270__$1 = state_188270;var statearr_188283_188308 = state_188270__$1;(statearr_188283_188308[2] = inst_188266);
(statearr_188283_188308[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 8))
{var inst_188234 = (state_188270[9]);var inst_188230 = (state_188270[8]);var inst_188238 = (state_188270[10]);var inst_188243 = inst_188230.push(inst_188234);var tmp188280 = inst_188230;var inst_188230__$1 = tmp188280;var inst_188231 = inst_188238;var state_188270__$1 = (function (){var statearr_188284 = state_188270;(statearr_188284[7] = inst_188231);
(statearr_188284[8] = inst_188230__$1);
(statearr_188284[11] = inst_188243);
return statearr_188284;
})();var statearr_188285_188309 = state_188270__$1;(statearr_188285_188309[2] = null);
(statearr_188285_188309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 9))
{var inst_188230 = (state_188270[8]);var inst_188246 = cljs.core.vec.call(null,inst_188230);var state_188270__$1 = state_188270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188270__$1,11,out,inst_188246);
} else
{if((state_val_188271 === 10))
{var inst_188253 = (state_188270[2]);var state_188270__$1 = state_188270;var statearr_188286_188310 = state_188270__$1;(statearr_188286_188310[2] = inst_188253);
(statearr_188286_188310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 11))
{var inst_188234 = (state_188270[9]);var inst_188238 = (state_188270[10]);var inst_188248 = (state_188270[2]);var inst_188249 = [];var inst_188250 = inst_188249.push(inst_188234);var inst_188230 = inst_188249;var inst_188231 = inst_188238;var state_188270__$1 = (function (){var statearr_188287 = state_188270;(statearr_188287[7] = inst_188231);
(statearr_188287[8] = inst_188230);
(statearr_188287[12] = inst_188248);
(statearr_188287[13] = inst_188250);
return statearr_188287;
})();var statearr_188288_188311 = state_188270__$1;(statearr_188288_188311[2] = null);
(statearr_188288_188311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 12))
{var inst_188230 = (state_188270[8]);var inst_188258 = cljs.core.vec.call(null,inst_188230);var state_188270__$1 = state_188270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188270__$1,15,out,inst_188258);
} else
{if((state_val_188271 === 13))
{var state_188270__$1 = state_188270;var statearr_188289_188312 = state_188270__$1;(statearr_188289_188312[2] = null);
(statearr_188289_188312[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 14))
{var inst_188263 = (state_188270[2]);var inst_188264 = cljs.core.async.close_BANG_.call(null,out);var state_188270__$1 = (function (){var statearr_188290 = state_188270;(statearr_188290[14] = inst_188263);
return statearr_188290;
})();var statearr_188291_188313 = state_188270__$1;(statearr_188291_188313[2] = inst_188264);
(statearr_188291_188313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188271 === 15))
{var inst_188260 = (state_188270[2]);var state_188270__$1 = state_188270;var statearr_188292_188314 = state_188270__$1;(statearr_188292_188314[2] = inst_188260);
(statearr_188292_188314[1] = 14);
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
var state_machine__6824__auto____0 = (function (){var statearr_188296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188296[0] = state_machine__6824__auto__);
(statearr_188296[1] = 1);
return statearr_188296;
});
var state_machine__6824__auto____1 = (function (state_188270){while(true){
var ret_value__6825__auto__ = (function (){try{while(true){
var result__6826__auto__ = switch__6823__auto__.call(null,state_188270);if(cljs.core.keyword_identical_QMARK_.call(null,result__6826__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6826__auto__;
}
break;
}
}catch (e188297){if((e188297 instanceof Object))
{var ex__6827__auto__ = e188297;var statearr_188298_188315 = state_188270;(statearr_188298_188315[5] = ex__6827__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188316 = state_188270;
state_188270 = G__188316;
continue;
}
} else
{return ret_value__6825__auto__;
}
break;
}
});
state_machine__6824__auto__ = function(state_188270){
switch(arguments.length){
case 0:
return state_machine__6824__auto____0.call(this);
case 1:
return state_machine__6824__auto____1.call(this,state_188270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6824__auto____0;
state_machine__6824__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6824__auto____1;
return state_machine__6824__auto__;
})()
;})(switch__6823__auto__))
})();var state__6840__auto__ = (function (){var statearr_188299 = f__6839__auto__.call(null);(statearr_188299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6838__auto___188300);
return statearr_188299;
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