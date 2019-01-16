// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27111 = arguments.length;
switch (G__27111) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27116 = (function (f,blockable,meta27117){
this.f = f;
this.blockable = blockable;
this.meta27117 = meta27117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27118,meta27117__$1){
var self__ = this;
var _27118__$1 = this;
return (new cljs.core.async.t_cljs$core$async27116(self__.f,self__.blockable,meta27117__$1));
});

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27118){
var self__ = this;
var _27118__$1 = this;
return self__.meta27117;
});

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27117","meta27117",727684567,null)], null);
});

cljs.core.async.t_cljs$core$async27116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27116";

cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27116");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27116.
 */
cljs.core.async.__GT_t_cljs$core$async27116 = (function cljs$core$async$__GT_t_cljs$core$async27116(f__$1,blockable__$1,meta27117){
return (new cljs.core.async.t_cljs$core$async27116(f__$1,blockable__$1,meta27117));
});

}

return (new cljs.core.async.t_cljs$core$async27116(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27135 = arguments.length;
switch (G__27135) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27140 = arguments.length;
switch (G__27140) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27146 = arguments.length;
switch (G__27146) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27152 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27152);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27152,ret){
return (function (){
return fn1.call(null,val_27152);
});})(val_27152,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27154 = arguments.length;
switch (G__27154) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___27168 = n;
var x_27169 = (0);
while(true){
if((x_27169 < n__4518__auto___27168)){
(a[x_27169] = (0));

var G__27170 = (x_27169 + (1));
x_27169 = G__27170;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27172 = (i + (1));
i = G__27172;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27165 = (function (flag,meta27166){
this.flag = flag;
this.meta27166 = meta27166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27167,meta27166__$1){
var self__ = this;
var _27167__$1 = this;
return (new cljs.core.async.t_cljs$core$async27165(self__.flag,meta27166__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27167){
var self__ = this;
var _27167__$1 = this;
return self__.meta27166;
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27166","meta27166",-1663674545,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27165";

cljs.core.async.t_cljs$core$async27165.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27165");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27165.
 */
cljs.core.async.__GT_t_cljs$core$async27165 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27165(flag__$1,meta27166){
return (new cljs.core.async.t_cljs$core$async27165(flag__$1,meta27166));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27165(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27177 = (function (flag,cb,meta27178){
this.flag = flag;
this.cb = cb;
this.meta27178 = meta27178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27179,meta27178__$1){
var self__ = this;
var _27179__$1 = this;
return (new cljs.core.async.t_cljs$core$async27177(self__.flag,self__.cb,meta27178__$1));
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27179){
var self__ = this;
var _27179__$1 = this;
return self__.meta27178;
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27178","meta27178",628936103,null)], null);
});

cljs.core.async.t_cljs$core$async27177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27177";

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27177");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27177.
 */
cljs.core.async.__GT_t_cljs$core$async27177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27177(flag__$1,cb__$1,meta27178){
return (new cljs.core.async.t_cljs$core$async27177(flag__$1,cb__$1,meta27178));
});

}

return (new cljs.core.async.t_cljs$core$async27177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27181_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27182_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27182_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27190 = (i + (1));
i = G__27190;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27191 = arguments.length;
var i__4642__auto___27192 = (0);
while(true){
if((i__4642__auto___27192 < len__4641__auto___27191)){
args__4647__auto__.push((arguments[i__4642__auto___27192]));

var G__27193 = (i__4642__auto___27192 + (1));
i__4642__auto___27192 = G__27193;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27186){
var map__27187 = p__27186;
var map__27187__$1 = (((((!((map__27187 == null))))?(((((map__27187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27187):map__27187);
var opts = map__27187__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27184){
var G__27185 = cljs.core.first.call(null,seq27184);
var seq27184__$1 = cljs.core.next.call(null,seq27184);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27185,seq27184__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27196 = arguments.length;
switch (G__27196) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27048__auto___27257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___27257){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___27257){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27219 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27227_27258 = state_27224__$1;
(statearr_27227_27258[(2)] = inst_27219);

(statearr_27227_27258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (1))){
var state_27224__$1 = state_27224;
var statearr_27228_27259 = state_27224__$1;
(statearr_27228_27259[(2)] = null);

(statearr_27228_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var inst_27201 = (state_27224[(7)]);
var inst_27201__$1 = (state_27224[(2)]);
var inst_27203 = (inst_27201__$1 == null);
var state_27224__$1 = (function (){var statearr_27230 = state_27224;
(statearr_27230[(7)] = inst_27201__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27203)){
var statearr_27231_27261 = state_27224__$1;
(statearr_27231_27261[(1)] = (5));

} else {
var statearr_27232_27262 = state_27224__$1;
(statearr_27232_27262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (13))){
var state_27224__$1 = state_27224;
var statearr_27235_27267 = state_27224__$1;
(statearr_27235_27267[(2)] = null);

(statearr_27235_27267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var inst_27201 = (state_27224[(7)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(11),to,inst_27201);
} else {
if((state_val_27225 === (3))){
var inst_27221 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27221);
} else {
if((state_val_27225 === (12))){
var state_27224__$1 = state_27224;
var statearr_27237_27271 = state_27224__$1;
(statearr_27237_27271[(2)] = null);

(statearr_27237_27271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (2))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(4),from);
} else {
if((state_val_27225 === (11))){
var inst_27212 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27212)){
var statearr_27238_27275 = state_27224__$1;
(statearr_27238_27275[(1)] = (12));

} else {
var statearr_27239_27276 = state_27224__$1;
(statearr_27239_27276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (9))){
var state_27224__$1 = state_27224;
var statearr_27241_27277 = state_27224__$1;
(statearr_27241_27277[(2)] = null);

(statearr_27241_27277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (5))){
var state_27224__$1 = state_27224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27242_27278 = state_27224__$1;
(statearr_27242_27278[(1)] = (8));

} else {
var statearr_27243_27279 = state_27224__$1;
(statearr_27243_27279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (14))){
var inst_27217 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27244_27282 = state_27224__$1;
(statearr_27244_27282[(2)] = inst_27217);

(statearr_27244_27282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27209 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27245_27284 = state_27224__$1;
(statearr_27245_27284[(2)] = inst_27209);

(statearr_27245_27284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (8))){
var inst_27206 = cljs.core.async.close_BANG_.call(null,to);
var state_27224__$1 = state_27224;
var statearr_27246_27290 = state_27224__$1;
(statearr_27246_27290[(2)] = inst_27206);

(statearr_27246_27290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___27257))
;
return ((function (switch__26891__auto__,c__27048__auto___27257){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_27250 = [null,null,null,null,null,null,null,null];
(statearr_27250[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_27250[(1)] = (1));

return statearr_27250;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_27224){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27251){if((e27251 instanceof Object)){
var ex__26895__auto__ = e27251;
var statearr_27252_27292 = state_27224;
(statearr_27252_27292[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27294 = state_27224;
state_27224 = G__27294;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___27257))
})();
var state__27050__auto__ = (function (){var statearr_27254 = f__27049__auto__.call(null);
(statearr_27254[(6)] = c__27048__auto___27257);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___27257))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27263){
var vec__27264 = p__27263;
var v = cljs.core.nth.call(null,vec__27264,(0),null);
var p = cljs.core.nth.call(null,vec__27264,(1),null);
var job = vec__27264;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27048__auto___27548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results){
return (function (state_27273){
var state_val_27274 = (state_27273[(1)]);
if((state_val_27274 === (1))){
var state_27273__$1 = state_27273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27273__$1,(2),res,v);
} else {
if((state_val_27274 === (2))){
var inst_27269 = (state_27273[(2)]);
var inst_27270 = cljs.core.async.close_BANG_.call(null,res);
var state_27273__$1 = (function (){var statearr_27280 = state_27273;
(statearr_27280[(7)] = inst_27269);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27273__$1,inst_27270);
} else {
return null;
}
}
});})(c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results))
;
return ((function (switch__26891__auto__,c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_27283 = [null,null,null,null,null,null,null,null];
(statearr_27283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__);

(statearr_27283[(1)] = (1));

return statearr_27283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1 = (function (state_27273){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27285){if((e27285 instanceof Object)){
var ex__26895__auto__ = e27285;
var statearr_27288_27552 = state_27273;
(statearr_27288_27552[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27553 = state_27273;
state_27273 = G__27553;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = function(state_27273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1.call(this,state_27273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results))
})();
var state__27050__auto__ = (function (){var statearr_27291 = f__27049__auto__.call(null);
(statearr_27291[(6)] = c__27048__auto___27548);

return statearr_27291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___27548,res,vec__27264,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27293){
var vec__27295 = p__27293;
var v = cljs.core.nth.call(null,vec__27295,(0),null);
var p = cljs.core.nth.call(null,vec__27295,(1),null);
var job = vec__27295;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___27555 = n;
var __27556 = (0);
while(true){
if((__27556 < n__4518__auto___27555)){
var G__27299_27557 = type;
var G__27299_27558__$1 = (((G__27299_27557 instanceof cljs.core.Keyword))?G__27299_27557.fqn:null);
switch (G__27299_27558__$1) {
case "compute":
var c__27048__auto___27561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27556,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (__27556,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function (state_27313){
var state_val_27314 = (state_27313[(1)]);
if((state_val_27314 === (1))){
var state_27313__$1 = state_27313;
var statearr_27318_27563 = state_27313__$1;
(statearr_27318_27563[(2)] = null);

(statearr_27318_27563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (2))){
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27313__$1,(4),jobs);
} else {
if((state_val_27314 === (3))){
var inst_27311 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27313__$1,inst_27311);
} else {
if((state_val_27314 === (4))){
var inst_27303 = (state_27313[(2)]);
var inst_27304 = process.call(null,inst_27303);
var state_27313__$1 = state_27313;
if(cljs.core.truth_(inst_27304)){
var statearr_27324_27565 = state_27313__$1;
(statearr_27324_27565[(1)] = (5));

} else {
var statearr_27325_27568 = state_27313__$1;
(statearr_27325_27568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (5))){
var state_27313__$1 = state_27313;
var statearr_27326_27571 = state_27313__$1;
(statearr_27326_27571[(2)] = null);

(statearr_27326_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (6))){
var state_27313__$1 = state_27313;
var statearr_27328_27583 = state_27313__$1;
(statearr_27328_27583[(2)] = null);

(statearr_27328_27583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (7))){
var inst_27309 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27329_27596 = state_27313__$1;
(statearr_27329_27596[(2)] = inst_27309);

(statearr_27329_27596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27556,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
;
return ((function (__27556,switch__26891__auto__,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_27333 = [null,null,null,null,null,null,null];
(statearr_27333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__);

(statearr_27333[(1)] = (1));

return statearr_27333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1 = (function (state_27313){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27335){if((e27335 instanceof Object)){
var ex__26895__auto__ = e27335;
var statearr_27336_27599 = state_27313;
(statearr_27336_27599[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27600 = state_27313;
state_27313 = G__27600;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = function(state_27313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1.call(this,state_27313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__;
})()
;})(__27556,switch__26891__auto__,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
})();
var state__27050__auto__ = (function (){var statearr_27338 = f__27049__auto__.call(null);
(statearr_27338[(6)] = c__27048__auto___27561);

return statearr_27338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(__27556,c__27048__auto___27561,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
);


break;
case "async":
var c__27048__auto___27604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27556,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (__27556,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function (state_27354){
var state_val_27355 = (state_27354[(1)]);
if((state_val_27355 === (1))){
var state_27354__$1 = state_27354;
var statearr_27358_27607 = state_27354__$1;
(statearr_27358_27607[(2)] = null);

(statearr_27358_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (2))){
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27354__$1,(4),jobs);
} else {
if((state_val_27355 === (3))){
var inst_27352 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27354__$1,inst_27352);
} else {
if((state_val_27355 === (4))){
var inst_27344 = (state_27354[(2)]);
var inst_27345 = async.call(null,inst_27344);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27345)){
var statearr_27363_27611 = state_27354__$1;
(statearr_27363_27611[(1)] = (5));

} else {
var statearr_27364_27612 = state_27354__$1;
(statearr_27364_27612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (5))){
var state_27354__$1 = state_27354;
var statearr_27368_27613 = state_27354__$1;
(statearr_27368_27613[(2)] = null);

(statearr_27368_27613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (6))){
var state_27354__$1 = state_27354;
var statearr_27370_27614 = state_27354__$1;
(statearr_27370_27614[(2)] = null);

(statearr_27370_27614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (7))){
var inst_27350 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27372_27615 = state_27354__$1;
(statearr_27372_27615[(2)] = inst_27350);

(statearr_27372_27615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27556,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
;
return ((function (__27556,switch__26891__auto__,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_27375 = [null,null,null,null,null,null,null];
(statearr_27375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__);

(statearr_27375[(1)] = (1));

return statearr_27375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1 = (function (state_27354){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27377){if((e27377 instanceof Object)){
var ex__26895__auto__ = e27377;
var statearr_27378_27621 = state_27354;
(statearr_27378_27621[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27354;
state_27354 = G__27623;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = function(state_27354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1.call(this,state_27354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__;
})()
;})(__27556,switch__26891__auto__,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
})();
var state__27050__auto__ = (function (){var statearr_27383 = f__27049__auto__.call(null);
(statearr_27383[(6)] = c__27048__auto___27604);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(__27556,c__27048__auto___27604,G__27299_27557,G__27299_27558__$1,n__4518__auto___27555,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27299_27558__$1)].join('')));

}

var G__27626 = (__27556 + (1));
__27556 = G__27626;
continue;
} else {
}
break;
}

var c__27048__auto___27627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___27627,jobs,results,process,async){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___27627,jobs,results,process,async){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (7))){
var inst_27408 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27422_27629 = state_27412__$1;
(statearr_27422_27629[(2)] = inst_27408);

(statearr_27422_27629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (1))){
var state_27412__$1 = state_27412;
var statearr_27424_27631 = state_27412__$1;
(statearr_27424_27631[(2)] = null);

(statearr_27424_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (4))){
var inst_27388 = (state_27412[(7)]);
var inst_27388__$1 = (state_27412[(2)]);
var inst_27389 = (inst_27388__$1 == null);
var state_27412__$1 = (function (){var statearr_27425 = state_27412;
(statearr_27425[(7)] = inst_27388__$1);

return statearr_27425;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27428_27634 = state_27412__$1;
(statearr_27428_27634[(1)] = (5));

} else {
var statearr_27430_27635 = state_27412__$1;
(statearr_27430_27635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (6))){
var inst_27395 = (state_27412[(8)]);
var inst_27388 = (state_27412[(7)]);
var inst_27395__$1 = cljs.core.async.chan.call(null,(1));
var inst_27397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27399 = [inst_27388,inst_27395__$1];
var inst_27400 = (new cljs.core.PersistentVector(null,2,(5),inst_27397,inst_27399,null));
var state_27412__$1 = (function (){var statearr_27431 = state_27412;
(statearr_27431[(8)] = inst_27395__$1);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27412__$1,(8),jobs,inst_27400);
} else {
if((state_val_27413 === (3))){
var inst_27410 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
if((state_val_27413 === (2))){
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27412__$1,(4),from);
} else {
if((state_val_27413 === (9))){
var inst_27405 = (state_27412[(2)]);
var state_27412__$1 = (function (){var statearr_27436 = state_27412;
(statearr_27436[(9)] = inst_27405);

return statearr_27436;
})();
var statearr_27437_27639 = state_27412__$1;
(statearr_27437_27639[(2)] = null);

(statearr_27437_27639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (5))){
var inst_27392 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27412__$1 = state_27412;
var statearr_27439_27648 = state_27412__$1;
(statearr_27439_27648[(2)] = inst_27392);

(statearr_27439_27648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (8))){
var inst_27395 = (state_27412[(8)]);
var inst_27402 = (state_27412[(2)]);
var state_27412__$1 = (function (){var statearr_27440 = state_27412;
(statearr_27440[(10)] = inst_27402);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27412__$1,(9),results,inst_27395);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___27627,jobs,results,process,async))
;
return ((function (switch__26891__auto__,c__27048__auto___27627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_27442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__);

(statearr_27442[(1)] = (1));

return statearr_27442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1 = (function (state_27412){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27445){if((e27445 instanceof Object)){
var ex__26895__auto__ = e27445;
var statearr_27447_27663 = state_27412;
(statearr_27447_27663[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27412;
state_27412 = G__27666;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___27627,jobs,results,process,async))
})();
var state__27050__auto__ = (function (){var statearr_27449 = f__27049__auto__.call(null);
(statearr_27449[(6)] = c__27048__auto___27627);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___27627,jobs,results,process,async))
);


var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__,jobs,results,process,async){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__,jobs,results,process,async){
return (function (state_27493){
var state_val_27494 = (state_27493[(1)]);
if((state_val_27494 === (7))){
var inst_27488 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27498_27674 = state_27493__$1;
(statearr_27498_27674[(2)] = inst_27488);

(statearr_27498_27674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (20))){
var state_27493__$1 = state_27493;
var statearr_27499_27680 = state_27493__$1;
(statearr_27499_27680[(2)] = null);

(statearr_27499_27680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (1))){
var state_27493__$1 = state_27493;
var statearr_27501_27681 = state_27493__$1;
(statearr_27501_27681[(2)] = null);

(statearr_27501_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (4))){
var inst_27453 = (state_27493[(7)]);
var inst_27453__$1 = (state_27493[(2)]);
var inst_27454 = (inst_27453__$1 == null);
var state_27493__$1 = (function (){var statearr_27502 = state_27493;
(statearr_27502[(7)] = inst_27453__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27454)){
var statearr_27503_27685 = state_27493__$1;
(statearr_27503_27685[(1)] = (5));

} else {
var statearr_27506_27687 = state_27493__$1;
(statearr_27506_27687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (15))){
var inst_27469 = (state_27493[(8)]);
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27493__$1,(18),to,inst_27469);
} else {
if((state_val_27494 === (21))){
var inst_27483 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27509_27695 = state_27493__$1;
(statearr_27509_27695[(2)] = inst_27483);

(statearr_27509_27695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (13))){
var inst_27485 = (state_27493[(2)]);
var state_27493__$1 = (function (){var statearr_27511 = state_27493;
(statearr_27511[(9)] = inst_27485);

return statearr_27511;
})();
var statearr_27512_27698 = state_27493__$1;
(statearr_27512_27698[(2)] = null);

(statearr_27512_27698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (6))){
var inst_27453 = (state_27493[(7)]);
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27493__$1,(11),inst_27453);
} else {
if((state_val_27494 === (17))){
var inst_27478 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
if(cljs.core.truth_(inst_27478)){
var statearr_27516_27702 = state_27493__$1;
(statearr_27516_27702[(1)] = (19));

} else {
var statearr_27517_27703 = state_27493__$1;
(statearr_27517_27703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (3))){
var inst_27490 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27493__$1,inst_27490);
} else {
if((state_val_27494 === (12))){
var inst_27466 = (state_27493[(10)]);
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27493__$1,(14),inst_27466);
} else {
if((state_val_27494 === (2))){
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27493__$1,(4),results);
} else {
if((state_val_27494 === (19))){
var state_27493__$1 = state_27493;
var statearr_27521_27714 = state_27493__$1;
(statearr_27521_27714[(2)] = null);

(statearr_27521_27714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (11))){
var inst_27466 = (state_27493[(2)]);
var state_27493__$1 = (function (){var statearr_27524 = state_27493;
(statearr_27524[(10)] = inst_27466);

return statearr_27524;
})();
var statearr_27525_27716 = state_27493__$1;
(statearr_27525_27716[(2)] = null);

(statearr_27525_27716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (9))){
var state_27493__$1 = state_27493;
var statearr_27526_27719 = state_27493__$1;
(statearr_27526_27719[(2)] = null);

(statearr_27526_27719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (5))){
var state_27493__$1 = state_27493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27528_27722 = state_27493__$1;
(statearr_27528_27722[(1)] = (8));

} else {
var statearr_27529_27726 = state_27493__$1;
(statearr_27529_27726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (14))){
var inst_27471 = (state_27493[(11)]);
var inst_27469 = (state_27493[(8)]);
var inst_27469__$1 = (state_27493[(2)]);
var inst_27470 = (inst_27469__$1 == null);
var inst_27471__$1 = cljs.core.not.call(null,inst_27470);
var state_27493__$1 = (function (){var statearr_27530 = state_27493;
(statearr_27530[(11)] = inst_27471__$1);

(statearr_27530[(8)] = inst_27469__$1);

return statearr_27530;
})();
if(inst_27471__$1){
var statearr_27533_27730 = state_27493__$1;
(statearr_27533_27730[(1)] = (15));

} else {
var statearr_27535_27733 = state_27493__$1;
(statearr_27535_27733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (16))){
var inst_27471 = (state_27493[(11)]);
var state_27493__$1 = state_27493;
var statearr_27537_27734 = state_27493__$1;
(statearr_27537_27734[(2)] = inst_27471);

(statearr_27537_27734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (10))){
var inst_27462 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27538_27735 = state_27493__$1;
(statearr_27538_27735[(2)] = inst_27462);

(statearr_27538_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (18))){
var inst_27475 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27539_27742 = state_27493__$1;
(statearr_27539_27742[(2)] = inst_27475);

(statearr_27539_27742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (8))){
var inst_27459 = cljs.core.async.close_BANG_.call(null,to);
var state_27493__$1 = state_27493;
var statearr_27540_27764 = state_27493__$1;
(statearr_27540_27764[(2)] = inst_27459);

(statearr_27540_27764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto__,jobs,results,process,async))
;
return ((function (switch__26891__auto__,c__27048__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_27541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__);

(statearr_27541[(1)] = (1));

return statearr_27541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1 = (function (state_27493){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27542){if((e27542 instanceof Object)){
var ex__26895__auto__ = e27542;
var statearr_27543_27773 = state_27493;
(statearr_27543_27773[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27776 = state_27493;
state_27493 = G__27776;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__ = function(state_27493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1.call(this,state_27493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__,jobs,results,process,async))
})();
var state__27050__auto__ = (function (){var statearr_27545 = f__27049__auto__.call(null);
(statearr_27545[(6)] = c__27048__auto__);

return statearr_27545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__,jobs,results,process,async))
);

return c__27048__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27547 = arguments.length;
switch (G__27547) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27551 = arguments.length;
switch (G__27551) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27562 = arguments.length;
switch (G__27562) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27048__auto___27805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___27805,tc,fc){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___27805,tc,fc){
return (function (state_27594){
var state_val_27595 = (state_27594[(1)]);
if((state_val_27595 === (7))){
var inst_27590 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27597_27809 = state_27594__$1;
(statearr_27597_27809[(2)] = inst_27590);

(statearr_27597_27809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (1))){
var state_27594__$1 = state_27594;
var statearr_27598_27810 = state_27594__$1;
(statearr_27598_27810[(2)] = null);

(statearr_27598_27810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (4))){
var inst_27567 = (state_27594[(7)]);
var inst_27567__$1 = (state_27594[(2)]);
var inst_27569 = (inst_27567__$1 == null);
var state_27594__$1 = (function (){var statearr_27601 = state_27594;
(statearr_27601[(7)] = inst_27567__$1);

return statearr_27601;
})();
if(cljs.core.truth_(inst_27569)){
var statearr_27602_27812 = state_27594__$1;
(statearr_27602_27812[(1)] = (5));

} else {
var statearr_27603_27813 = state_27594__$1;
(statearr_27603_27813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (13))){
var state_27594__$1 = state_27594;
var statearr_27605_27816 = state_27594__$1;
(statearr_27605_27816[(2)] = null);

(statearr_27605_27816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (6))){
var inst_27567 = (state_27594[(7)]);
var inst_27576 = p.call(null,inst_27567);
var state_27594__$1 = state_27594;
if(cljs.core.truth_(inst_27576)){
var statearr_27608_27818 = state_27594__$1;
(statearr_27608_27818[(1)] = (9));

} else {
var statearr_27609_27819 = state_27594__$1;
(statearr_27609_27819[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (3))){
var inst_27592 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27594__$1,inst_27592);
} else {
if((state_val_27595 === (12))){
var state_27594__$1 = state_27594;
var statearr_27610_27821 = state_27594__$1;
(statearr_27610_27821[(2)] = null);

(statearr_27610_27821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (2))){
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27594__$1,(4),ch);
} else {
if((state_val_27595 === (11))){
var inst_27567 = (state_27594[(7)]);
var inst_27580 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27594__$1,(8),inst_27580,inst_27567);
} else {
if((state_val_27595 === (9))){
var state_27594__$1 = state_27594;
var statearr_27616_27825 = state_27594__$1;
(statearr_27616_27825[(2)] = tc);

(statearr_27616_27825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (5))){
var inst_27572 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27573 = cljs.core.async.close_BANG_.call(null,fc);
var state_27594__$1 = (function (){var statearr_27617 = state_27594;
(statearr_27617[(8)] = inst_27572);

return statearr_27617;
})();
var statearr_27619_27826 = state_27594__$1;
(statearr_27619_27826[(2)] = inst_27573);

(statearr_27619_27826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (14))){
var inst_27588 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27620_27828 = state_27594__$1;
(statearr_27620_27828[(2)] = inst_27588);

(statearr_27620_27828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (10))){
var state_27594__$1 = state_27594;
var statearr_27622_27829 = state_27594__$1;
(statearr_27622_27829[(2)] = fc);

(statearr_27622_27829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (8))){
var inst_27582 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
if(cljs.core.truth_(inst_27582)){
var statearr_27624_27835 = state_27594__$1;
(statearr_27624_27835[(1)] = (12));

} else {
var statearr_27625_27837 = state_27594__$1;
(statearr_27625_27837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___27805,tc,fc))
;
return ((function (switch__26891__auto__,c__27048__auto___27805,tc,fc){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_27628 = [null,null,null,null,null,null,null,null,null];
(statearr_27628[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_27628[(1)] = (1));

return statearr_27628;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_27594){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27630){if((e27630 instanceof Object)){
var ex__26895__auto__ = e27630;
var statearr_27632_27839 = state_27594;
(statearr_27632_27839[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27840 = state_27594;
state_27594 = G__27840;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_27594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_27594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___27805,tc,fc))
})();
var state__27050__auto__ = (function (){var statearr_27636 = f__27049__auto__.call(null);
(statearr_27636[(6)] = c__27048__auto___27805);

return statearr_27636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___27805,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__){
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (7))){
var inst_27655 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27662_27845 = state_27659__$1;
(statearr_27662_27845[(2)] = inst_27655);

(statearr_27662_27845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (1))){
var inst_27637 = init;
var state_27659__$1 = (function (){var statearr_27664 = state_27659;
(statearr_27664[(7)] = inst_27637);

return statearr_27664;
})();
var statearr_27665_27857 = state_27659__$1;
(statearr_27665_27857[(2)] = null);

(statearr_27665_27857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (4))){
var inst_27641 = (state_27659[(8)]);
var inst_27641__$1 = (state_27659[(2)]);
var inst_27642 = (inst_27641__$1 == null);
var state_27659__$1 = (function (){var statearr_27667 = state_27659;
(statearr_27667[(8)] = inst_27641__$1);

return statearr_27667;
})();
if(cljs.core.truth_(inst_27642)){
var statearr_27670_27883 = state_27659__$1;
(statearr_27670_27883[(1)] = (5));

} else {
var statearr_27672_27885 = state_27659__$1;
(statearr_27672_27885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (6))){
var inst_27641 = (state_27659[(8)]);
var inst_27637 = (state_27659[(7)]);
var inst_27645 = (state_27659[(9)]);
var inst_27645__$1 = f.call(null,inst_27637,inst_27641);
var inst_27646 = cljs.core.reduced_QMARK_.call(null,inst_27645__$1);
var state_27659__$1 = (function (){var statearr_27673 = state_27659;
(statearr_27673[(9)] = inst_27645__$1);

return statearr_27673;
})();
if(inst_27646){
var statearr_27676_27910 = state_27659__$1;
(statearr_27676_27910[(1)] = (8));

} else {
var statearr_27678_27921 = state_27659__$1;
(statearr_27678_27921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (3))){
var inst_27657 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (2))){
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27659__$1,(4),ch);
} else {
if((state_val_27660 === (9))){
var inst_27645 = (state_27659[(9)]);
var inst_27637 = inst_27645;
var state_27659__$1 = (function (){var statearr_27682 = state_27659;
(statearr_27682[(7)] = inst_27637);

return statearr_27682;
})();
var statearr_27683_27953 = state_27659__$1;
(statearr_27683_27953[(2)] = null);

(statearr_27683_27953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (5))){
var inst_27637 = (state_27659[(7)]);
var state_27659__$1 = state_27659;
var statearr_27686_27959 = state_27659__$1;
(statearr_27686_27959[(2)] = inst_27637);

(statearr_27686_27959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (10))){
var inst_27653 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27690_27979 = state_27659__$1;
(statearr_27690_27979[(2)] = inst_27653);

(statearr_27690_27979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (8))){
var inst_27645 = (state_27659[(9)]);
var inst_27649 = cljs.core.deref.call(null,inst_27645);
var state_27659__$1 = state_27659;
var statearr_27692_27998 = state_27659__$1;
(statearr_27692_27998[(2)] = inst_27649);

(statearr_27692_27998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26892__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26892__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = cljs$core$async$reduce_$_state_machine__26892__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var cljs$core$async$reduce_$_state_machine__26892__auto____1 = (function (state_27659){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__26895__auto__ = e27697;
var statearr_27699_28004 = state_27659;
(statearr_27699_28004[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28006 = state_27659;
state_27659 = G__28006;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26892__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26892__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26892__auto____0;
cljs$core$async$reduce_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26892__auto____1;
return cljs$core$async$reduce_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__))
})();
var state__27050__auto__ = (function (){var statearr_27701 = f__27049__auto__.call(null);
(statearr_27701[(6)] = c__27048__auto__);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__))
);

return c__27048__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__,f__$1){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__,f__$1){
return (function (state_27712){
var state_val_27713 = (state_27712[(1)]);
if((state_val_27713 === (1))){
var inst_27706 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27712__$1,(2),inst_27706);
} else {
if((state_val_27713 === (2))){
var inst_27708 = (state_27712[(2)]);
var inst_27710 = f__$1.call(null,inst_27708);
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27712__$1,inst_27710);
} else {
return null;
}
}
});})(c__27048__auto__,f__$1))
;
return ((function (switch__26891__auto__,c__27048__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26892__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26892__auto____0 = (function (){
var statearr_27717 = [null,null,null,null,null,null,null];
(statearr_27717[(0)] = cljs$core$async$transduce_$_state_machine__26892__auto__);

(statearr_27717[(1)] = (1));

return statearr_27717;
});
var cljs$core$async$transduce_$_state_machine__26892__auto____1 = (function (state_27712){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27718){if((e27718 instanceof Object)){
var ex__26895__auto__ = e27718;
var statearr_27720_28026 = state_27712;
(statearr_27720_28026[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28029 = state_27712;
state_27712 = G__28029;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26892__auto__ = function(state_27712){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26892__auto____1.call(this,state_27712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26892__auto____0;
cljs$core$async$transduce_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26892__auto____1;
return cljs$core$async$transduce_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__,f__$1))
})();
var state__27050__auto__ = (function (){var statearr_27728 = f__27049__auto__.call(null);
(statearr_27728[(6)] = c__27048__auto__);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__,f__$1))
);

return c__27048__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27731 = arguments.length;
switch (G__27731) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__){
return (function (state_27765){
var state_val_27766 = (state_27765[(1)]);
if((state_val_27766 === (7))){
var inst_27746 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27768_28044 = state_27765__$1;
(statearr_27768_28044[(2)] = inst_27746);

(statearr_27768_28044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (1))){
var inst_27738 = cljs.core.seq.call(null,coll);
var inst_27739 = inst_27738;
var state_27765__$1 = (function (){var statearr_27769 = state_27765;
(statearr_27769[(7)] = inst_27739);

return statearr_27769;
})();
var statearr_27770_28047 = state_27765__$1;
(statearr_27770_28047[(2)] = null);

(statearr_27770_28047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (4))){
var inst_27739 = (state_27765[(7)]);
var inst_27744 = cljs.core.first.call(null,inst_27739);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27765__$1,(7),ch,inst_27744);
} else {
if((state_val_27766 === (13))){
var inst_27758 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27775_28054 = state_27765__$1;
(statearr_27775_28054[(2)] = inst_27758);

(statearr_27775_28054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (6))){
var inst_27749 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27749)){
var statearr_27777_28057 = state_27765__$1;
(statearr_27777_28057[(1)] = (8));

} else {
var statearr_27778_28058 = state_27765__$1;
(statearr_27778_28058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (3))){
var inst_27762 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27765__$1,inst_27762);
} else {
if((state_val_27766 === (12))){
var state_27765__$1 = state_27765;
var statearr_27780_28062 = state_27765__$1;
(statearr_27780_28062[(2)] = null);

(statearr_27780_28062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (2))){
var inst_27739 = (state_27765[(7)]);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27739)){
var statearr_27782_28066 = state_27765__$1;
(statearr_27782_28066[(1)] = (4));

} else {
var statearr_27783_28069 = state_27765__$1;
(statearr_27783_28069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (11))){
var inst_27755 = cljs.core.async.close_BANG_.call(null,ch);
var state_27765__$1 = state_27765;
var statearr_27784_28071 = state_27765__$1;
(statearr_27784_28071[(2)] = inst_27755);

(statearr_27784_28071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (9))){
var state_27765__$1 = state_27765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27787_28073 = state_27765__$1;
(statearr_27787_28073[(1)] = (11));

} else {
var statearr_27789_28075 = state_27765__$1;
(statearr_27789_28075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (5))){
var inst_27739 = (state_27765[(7)]);
var state_27765__$1 = state_27765;
var statearr_27790_28079 = state_27765__$1;
(statearr_27790_28079[(2)] = inst_27739);

(statearr_27790_28079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (10))){
var inst_27760 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27792_28083 = state_27765__$1;
(statearr_27792_28083[(2)] = inst_27760);

(statearr_27792_28083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (8))){
var inst_27739 = (state_27765[(7)]);
var inst_27751 = cljs.core.next.call(null,inst_27739);
var inst_27739__$1 = inst_27751;
var state_27765__$1 = (function (){var statearr_27793 = state_27765;
(statearr_27793[(7)] = inst_27739__$1);

return statearr_27793;
})();
var statearr_27795_28085 = state_27765__$1;
(statearr_27795_28085[(2)] = null);

(statearr_27795_28085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_27765){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_27765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__26895__auto__ = e27797;
var statearr_27800_28090 = state_27765;
(statearr_27800_28090[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28093 = state_27765;
state_27765 = G__28093;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_27765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_27765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__))
})();
var state__27050__auto__ = (function (){var statearr_27802 = f__27049__auto__.call(null);
(statearr_27802[(6)] = c__27048__auto__);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__))
);

return c__27048__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27830 = (function (ch,cs,meta27831){
this.ch = ch;
this.cs = cs;
this.meta27831 = meta27831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27832,meta27831__$1){
var self__ = this;
var _27832__$1 = this;
return (new cljs.core.async.t_cljs$core$async27830(self__.ch,self__.cs,meta27831__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27832){
var self__ = this;
var _27832__$1 = this;
return self__.meta27831;
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27831","meta27831",160464650,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27830";

cljs.core.async.t_cljs$core$async27830.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27830");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27830.
 */
cljs.core.async.__GT_t_cljs$core$async27830 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27830(ch__$1,cs__$1,meta27831){
return (new cljs.core.async.t_cljs$core$async27830(ch__$1,cs__$1,meta27831));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27830(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27048__auto___28131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28131,cs,m,dchan,dctr,done){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28131,cs,m,dchan,dctr,done){
return (function (state_28000){
var state_val_28001 = (state_28000[(1)]);
if((state_val_28001 === (7))){
var inst_27992 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28002_28132 = state_28000__$1;
(statearr_28002_28132[(2)] = inst_27992);

(statearr_28002_28132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (20))){
var inst_27884 = (state_28000[(7)]);
var inst_27898 = cljs.core.first.call(null,inst_27884);
var inst_27899 = cljs.core.nth.call(null,inst_27898,(0),null);
var inst_27900 = cljs.core.nth.call(null,inst_27898,(1),null);
var state_28000__$1 = (function (){var statearr_28005 = state_28000;
(statearr_28005[(8)] = inst_27899);

return statearr_28005;
})();
if(cljs.core.truth_(inst_27900)){
var statearr_28007_28133 = state_28000__$1;
(statearr_28007_28133[(1)] = (22));

} else {
var statearr_28008_28134 = state_28000__$1;
(statearr_28008_28134[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (27))){
var inst_27932 = (state_28000[(9)]);
var inst_27939 = (state_28000[(10)]);
var inst_27848 = (state_28000[(11)]);
var inst_27930 = (state_28000[(12)]);
var inst_27939__$1 = cljs.core._nth.call(null,inst_27930,inst_27932);
var inst_27940 = cljs.core.async.put_BANG_.call(null,inst_27939__$1,inst_27848,done);
var state_28000__$1 = (function (){var statearr_28012 = state_28000;
(statearr_28012[(10)] = inst_27939__$1);

return statearr_28012;
})();
if(cljs.core.truth_(inst_27940)){
var statearr_28013_28135 = state_28000__$1;
(statearr_28013_28135[(1)] = (30));

} else {
var statearr_28014_28136 = state_28000__$1;
(statearr_28014_28136[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (1))){
var state_28000__$1 = state_28000;
var statearr_28015_28137 = state_28000__$1;
(statearr_28015_28137[(2)] = null);

(statearr_28015_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (24))){
var inst_27884 = (state_28000[(7)]);
var inst_27905 = (state_28000[(2)]);
var inst_27906 = cljs.core.next.call(null,inst_27884);
var inst_27858 = inst_27906;
var inst_27859 = null;
var inst_27860 = (0);
var inst_27861 = (0);
var state_28000__$1 = (function (){var statearr_28017 = state_28000;
(statearr_28017[(13)] = inst_27860);

(statearr_28017[(14)] = inst_27905);

(statearr_28017[(15)] = inst_27858);

(statearr_28017[(16)] = inst_27861);

(statearr_28017[(17)] = inst_27859);

return statearr_28017;
})();
var statearr_28018_28138 = state_28000__$1;
(statearr_28018_28138[(2)] = null);

(statearr_28018_28138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (39))){
var state_28000__$1 = state_28000;
var statearr_28025_28139 = state_28000__$1;
(statearr_28025_28139[(2)] = null);

(statearr_28025_28139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (4))){
var inst_27848 = (state_28000[(11)]);
var inst_27848__$1 = (state_28000[(2)]);
var inst_27849 = (inst_27848__$1 == null);
var state_28000__$1 = (function (){var statearr_28027 = state_28000;
(statearr_28027[(11)] = inst_27848__$1);

return statearr_28027;
})();
if(cljs.core.truth_(inst_27849)){
var statearr_28028_28140 = state_28000__$1;
(statearr_28028_28140[(1)] = (5));

} else {
var statearr_28030_28141 = state_28000__$1;
(statearr_28030_28141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (15))){
var inst_27860 = (state_28000[(13)]);
var inst_27858 = (state_28000[(15)]);
var inst_27861 = (state_28000[(16)]);
var inst_27859 = (state_28000[(17)]);
var inst_27879 = (state_28000[(2)]);
var inst_27880 = (inst_27861 + (1));
var tmp28019 = inst_27860;
var tmp28020 = inst_27858;
var tmp28021 = inst_27859;
var inst_27858__$1 = tmp28020;
var inst_27859__$1 = tmp28021;
var inst_27860__$1 = tmp28019;
var inst_27861__$1 = inst_27880;
var state_28000__$1 = (function (){var statearr_28032 = state_28000;
(statearr_28032[(18)] = inst_27879);

(statearr_28032[(13)] = inst_27860__$1);

(statearr_28032[(15)] = inst_27858__$1);

(statearr_28032[(16)] = inst_27861__$1);

(statearr_28032[(17)] = inst_27859__$1);

return statearr_28032;
})();
var statearr_28033_28142 = state_28000__$1;
(statearr_28033_28142[(2)] = null);

(statearr_28033_28142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (21))){
var inst_27909 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28041_28143 = state_28000__$1;
(statearr_28041_28143[(2)] = inst_27909);

(statearr_28041_28143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (31))){
var inst_27939 = (state_28000[(10)]);
var inst_27944 = done.call(null,null);
var inst_27945 = cljs.core.async.untap_STAR_.call(null,m,inst_27939);
var state_28000__$1 = (function (){var statearr_28042 = state_28000;
(statearr_28042[(19)] = inst_27944);

return statearr_28042;
})();
var statearr_28043_28144 = state_28000__$1;
(statearr_28043_28144[(2)] = inst_27945);

(statearr_28043_28144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (32))){
var inst_27929 = (state_28000[(20)]);
var inst_27932 = (state_28000[(9)]);
var inst_27931 = (state_28000[(21)]);
var inst_27930 = (state_28000[(12)]);
var inst_27947 = (state_28000[(2)]);
var inst_27948 = (inst_27932 + (1));
var tmp28035 = inst_27929;
var tmp28036 = inst_27931;
var tmp28037 = inst_27930;
var inst_27929__$1 = tmp28035;
var inst_27930__$1 = tmp28037;
var inst_27931__$1 = tmp28036;
var inst_27932__$1 = inst_27948;
var state_28000__$1 = (function (){var statearr_28046 = state_28000;
(statearr_28046[(20)] = inst_27929__$1);

(statearr_28046[(9)] = inst_27932__$1);

(statearr_28046[(21)] = inst_27931__$1);

(statearr_28046[(12)] = inst_27930__$1);

(statearr_28046[(22)] = inst_27947);

return statearr_28046;
})();
var statearr_28048_28149 = state_28000__$1;
(statearr_28048_28149[(2)] = null);

(statearr_28048_28149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (40))){
var inst_27963 = (state_28000[(23)]);
var inst_27967 = done.call(null,null);
var inst_27968 = cljs.core.async.untap_STAR_.call(null,m,inst_27963);
var state_28000__$1 = (function (){var statearr_28051 = state_28000;
(statearr_28051[(24)] = inst_27967);

return statearr_28051;
})();
var statearr_28053_28150 = state_28000__$1;
(statearr_28053_28150[(2)] = inst_27968);

(statearr_28053_28150[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (33))){
var inst_27951 = (state_28000[(25)]);
var inst_27954 = cljs.core.chunked_seq_QMARK_.call(null,inst_27951);
var state_28000__$1 = state_28000;
if(inst_27954){
var statearr_28055_28151 = state_28000__$1;
(statearr_28055_28151[(1)] = (36));

} else {
var statearr_28056_28153 = state_28000__$1;
(statearr_28056_28153[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (13))){
var inst_27872 = (state_28000[(26)]);
var inst_27876 = cljs.core.async.close_BANG_.call(null,inst_27872);
var state_28000__$1 = state_28000;
var statearr_28059_28156 = state_28000__$1;
(statearr_28059_28156[(2)] = inst_27876);

(statearr_28059_28156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (22))){
var inst_27899 = (state_28000[(8)]);
var inst_27902 = cljs.core.async.close_BANG_.call(null,inst_27899);
var state_28000__$1 = state_28000;
var statearr_28061_28158 = state_28000__$1;
(statearr_28061_28158[(2)] = inst_27902);

(statearr_28061_28158[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (36))){
var inst_27951 = (state_28000[(25)]);
var inst_27956 = cljs.core.chunk_first.call(null,inst_27951);
var inst_27957 = cljs.core.chunk_rest.call(null,inst_27951);
var inst_27958 = cljs.core.count.call(null,inst_27956);
var inst_27929 = inst_27957;
var inst_27930 = inst_27956;
var inst_27931 = inst_27958;
var inst_27932 = (0);
var state_28000__$1 = (function (){var statearr_28064 = state_28000;
(statearr_28064[(20)] = inst_27929);

(statearr_28064[(9)] = inst_27932);

(statearr_28064[(21)] = inst_27931);

(statearr_28064[(12)] = inst_27930);

return statearr_28064;
})();
var statearr_28067_28161 = state_28000__$1;
(statearr_28067_28161[(2)] = null);

(statearr_28067_28161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (41))){
var inst_27951 = (state_28000[(25)]);
var inst_27970 = (state_28000[(2)]);
var inst_27971 = cljs.core.next.call(null,inst_27951);
var inst_27929 = inst_27971;
var inst_27930 = null;
var inst_27931 = (0);
var inst_27932 = (0);
var state_28000__$1 = (function (){var statearr_28070 = state_28000;
(statearr_28070[(20)] = inst_27929);

(statearr_28070[(9)] = inst_27932);

(statearr_28070[(27)] = inst_27970);

(statearr_28070[(21)] = inst_27931);

(statearr_28070[(12)] = inst_27930);

return statearr_28070;
})();
var statearr_28072_28162 = state_28000__$1;
(statearr_28072_28162[(2)] = null);

(statearr_28072_28162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (43))){
var state_28000__$1 = state_28000;
var statearr_28074_28163 = state_28000__$1;
(statearr_28074_28163[(2)] = null);

(statearr_28074_28163[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (29))){
var inst_27980 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28078_28164 = state_28000__$1;
(statearr_28078_28164[(2)] = inst_27980);

(statearr_28078_28164[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (44))){
var inst_27989 = (state_28000[(2)]);
var state_28000__$1 = (function (){var statearr_28081 = state_28000;
(statearr_28081[(28)] = inst_27989);

return statearr_28081;
})();
var statearr_28082_28165 = state_28000__$1;
(statearr_28082_28165[(2)] = null);

(statearr_28082_28165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (6))){
var inst_27920 = (state_28000[(29)]);
var inst_27919 = cljs.core.deref.call(null,cs);
var inst_27920__$1 = cljs.core.keys.call(null,inst_27919);
var inst_27922 = cljs.core.count.call(null,inst_27920__$1);
var inst_27923 = cljs.core.reset_BANG_.call(null,dctr,inst_27922);
var inst_27928 = cljs.core.seq.call(null,inst_27920__$1);
var inst_27929 = inst_27928;
var inst_27930 = null;
var inst_27931 = (0);
var inst_27932 = (0);
var state_28000__$1 = (function (){var statearr_28084 = state_28000;
(statearr_28084[(20)] = inst_27929);

(statearr_28084[(9)] = inst_27932);

(statearr_28084[(21)] = inst_27931);

(statearr_28084[(30)] = inst_27923);

(statearr_28084[(29)] = inst_27920__$1);

(statearr_28084[(12)] = inst_27930);

return statearr_28084;
})();
var statearr_28086_28166 = state_28000__$1;
(statearr_28086_28166[(2)] = null);

(statearr_28086_28166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (28))){
var inst_27929 = (state_28000[(20)]);
var inst_27951 = (state_28000[(25)]);
var inst_27951__$1 = cljs.core.seq.call(null,inst_27929);
var state_28000__$1 = (function (){var statearr_28087 = state_28000;
(statearr_28087[(25)] = inst_27951__$1);

return statearr_28087;
})();
if(inst_27951__$1){
var statearr_28088_28167 = state_28000__$1;
(statearr_28088_28167[(1)] = (33));

} else {
var statearr_28089_28168 = state_28000__$1;
(statearr_28089_28168[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (25))){
var inst_27932 = (state_28000[(9)]);
var inst_27931 = (state_28000[(21)]);
var inst_27935 = (inst_27932 < inst_27931);
var inst_27936 = inst_27935;
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27936)){
var statearr_28091_28172 = state_28000__$1;
(statearr_28091_28172[(1)] = (27));

} else {
var statearr_28092_28173 = state_28000__$1;
(statearr_28092_28173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (34))){
var state_28000__$1 = state_28000;
var statearr_28094_28174 = state_28000__$1;
(statearr_28094_28174[(2)] = null);

(statearr_28094_28174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (17))){
var state_28000__$1 = state_28000;
var statearr_28095_28175 = state_28000__$1;
(statearr_28095_28175[(2)] = null);

(statearr_28095_28175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (3))){
var inst_27994 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28000__$1,inst_27994);
} else {
if((state_val_28001 === (12))){
var inst_27915 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28096_28176 = state_28000__$1;
(statearr_28096_28176[(2)] = inst_27915);

(statearr_28096_28176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (2))){
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28000__$1,(4),ch);
} else {
if((state_val_28001 === (23))){
var state_28000__$1 = state_28000;
var statearr_28097_28177 = state_28000__$1;
(statearr_28097_28177[(2)] = null);

(statearr_28097_28177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (35))){
var inst_27977 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28098_28178 = state_28000__$1;
(statearr_28098_28178[(2)] = inst_27977);

(statearr_28098_28178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (19))){
var inst_27884 = (state_28000[(7)]);
var inst_27889 = cljs.core.chunk_first.call(null,inst_27884);
var inst_27890 = cljs.core.chunk_rest.call(null,inst_27884);
var inst_27891 = cljs.core.count.call(null,inst_27889);
var inst_27858 = inst_27890;
var inst_27859 = inst_27889;
var inst_27860 = inst_27891;
var inst_27861 = (0);
var state_28000__$1 = (function (){var statearr_28099 = state_28000;
(statearr_28099[(13)] = inst_27860);

(statearr_28099[(15)] = inst_27858);

(statearr_28099[(16)] = inst_27861);

(statearr_28099[(17)] = inst_27859);

return statearr_28099;
})();
var statearr_28100_28179 = state_28000__$1;
(statearr_28100_28179[(2)] = null);

(statearr_28100_28179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (11))){
var inst_27858 = (state_28000[(15)]);
var inst_27884 = (state_28000[(7)]);
var inst_27884__$1 = cljs.core.seq.call(null,inst_27858);
var state_28000__$1 = (function (){var statearr_28101 = state_28000;
(statearr_28101[(7)] = inst_27884__$1);

return statearr_28101;
})();
if(inst_27884__$1){
var statearr_28102_28180 = state_28000__$1;
(statearr_28102_28180[(1)] = (16));

} else {
var statearr_28103_28181 = state_28000__$1;
(statearr_28103_28181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (9))){
var inst_27917 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28104_28182 = state_28000__$1;
(statearr_28104_28182[(2)] = inst_27917);

(statearr_28104_28182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (5))){
var inst_27855 = cljs.core.deref.call(null,cs);
var inst_27856 = cljs.core.seq.call(null,inst_27855);
var inst_27858 = inst_27856;
var inst_27859 = null;
var inst_27860 = (0);
var inst_27861 = (0);
var state_28000__$1 = (function (){var statearr_28105 = state_28000;
(statearr_28105[(13)] = inst_27860);

(statearr_28105[(15)] = inst_27858);

(statearr_28105[(16)] = inst_27861);

(statearr_28105[(17)] = inst_27859);

return statearr_28105;
})();
var statearr_28106_28183 = state_28000__$1;
(statearr_28106_28183[(2)] = null);

(statearr_28106_28183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (14))){
var state_28000__$1 = state_28000;
var statearr_28107_28184 = state_28000__$1;
(statearr_28107_28184[(2)] = null);

(statearr_28107_28184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (45))){
var inst_27986 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28108_28188 = state_28000__$1;
(statearr_28108_28188[(2)] = inst_27986);

(statearr_28108_28188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (26))){
var inst_27920 = (state_28000[(29)]);
var inst_27982 = (state_28000[(2)]);
var inst_27983 = cljs.core.seq.call(null,inst_27920);
var state_28000__$1 = (function (){var statearr_28109 = state_28000;
(statearr_28109[(31)] = inst_27982);

return statearr_28109;
})();
if(inst_27983){
var statearr_28110_28196 = state_28000__$1;
(statearr_28110_28196[(1)] = (42));

} else {
var statearr_28111_28202 = state_28000__$1;
(statearr_28111_28202[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (16))){
var inst_27884 = (state_28000[(7)]);
var inst_27887 = cljs.core.chunked_seq_QMARK_.call(null,inst_27884);
var state_28000__$1 = state_28000;
if(inst_27887){
var statearr_28112_28219 = state_28000__$1;
(statearr_28112_28219[(1)] = (19));

} else {
var statearr_28113_28221 = state_28000__$1;
(statearr_28113_28221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (38))){
var inst_27974 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28114_28225 = state_28000__$1;
(statearr_28114_28225[(2)] = inst_27974);

(statearr_28114_28225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (30))){
var state_28000__$1 = state_28000;
var statearr_28115_28234 = state_28000__$1;
(statearr_28115_28234[(2)] = null);

(statearr_28115_28234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (10))){
var inst_27861 = (state_28000[(16)]);
var inst_27859 = (state_28000[(17)]);
var inst_27871 = cljs.core._nth.call(null,inst_27859,inst_27861);
var inst_27872 = cljs.core.nth.call(null,inst_27871,(0),null);
var inst_27873 = cljs.core.nth.call(null,inst_27871,(1),null);
var state_28000__$1 = (function (){var statearr_28116 = state_28000;
(statearr_28116[(26)] = inst_27872);

return statearr_28116;
})();
if(cljs.core.truth_(inst_27873)){
var statearr_28117_28255 = state_28000__$1;
(statearr_28117_28255[(1)] = (13));

} else {
var statearr_28118_28259 = state_28000__$1;
(statearr_28118_28259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (18))){
var inst_27913 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28119_28269 = state_28000__$1;
(statearr_28119_28269[(2)] = inst_27913);

(statearr_28119_28269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (42))){
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28000__$1,(45),dchan);
} else {
if((state_val_28001 === (37))){
var inst_27951 = (state_28000[(25)]);
var inst_27848 = (state_28000[(11)]);
var inst_27963 = (state_28000[(23)]);
var inst_27963__$1 = cljs.core.first.call(null,inst_27951);
var inst_27964 = cljs.core.async.put_BANG_.call(null,inst_27963__$1,inst_27848,done);
var state_28000__$1 = (function (){var statearr_28120 = state_28000;
(statearr_28120[(23)] = inst_27963__$1);

return statearr_28120;
})();
if(cljs.core.truth_(inst_27964)){
var statearr_28121_28296 = state_28000__$1;
(statearr_28121_28296[(1)] = (39));

} else {
var statearr_28122_28297 = state_28000__$1;
(statearr_28122_28297[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (8))){
var inst_27860 = (state_28000[(13)]);
var inst_27861 = (state_28000[(16)]);
var inst_27863 = (inst_27861 < inst_27860);
var inst_27864 = inst_27863;
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27864)){
var statearr_28123_28299 = state_28000__$1;
(statearr_28123_28299[(1)] = (10));

} else {
var statearr_28124_28301 = state_28000__$1;
(statearr_28124_28301[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28131,cs,m,dchan,dctr,done))
;
return ((function (switch__26891__auto__,c__27048__auto___28131,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26892__auto__ = null;
var cljs$core$async$mult_$_state_machine__26892__auto____0 = (function (){
var statearr_28125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28125[(0)] = cljs$core$async$mult_$_state_machine__26892__auto__);

(statearr_28125[(1)] = (1));

return statearr_28125;
});
var cljs$core$async$mult_$_state_machine__26892__auto____1 = (function (state_28000){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28126){if((e28126 instanceof Object)){
var ex__26895__auto__ = e28126;
var statearr_28127_28304 = state_28000;
(statearr_28127_28304[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28000;
state_28000 = G__28306;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26892__auto__ = function(state_28000){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26892__auto____1.call(this,state_28000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26892__auto____0;
cljs$core$async$mult_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26892__auto____1;
return cljs$core$async$mult_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28131,cs,m,dchan,dctr,done))
})();
var state__27050__auto__ = (function (){var statearr_28128 = f__27049__auto__.call(null);
(statearr_28128[(6)] = c__27048__auto___28131);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28131,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28130 = arguments.length;
switch (G__28130) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28328 = arguments.length;
var i__4642__auto___28329 = (0);
while(true){
if((i__4642__auto___28329 < len__4641__auto___28328)){
args__4647__auto__.push((arguments[i__4642__auto___28329]));

var G__28332 = (i__4642__auto___28329 + (1));
i__4642__auto___28329 = G__28332;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28152){
var map__28154 = p__28152;
var map__28154__$1 = (((((!((map__28154 == null))))?(((((map__28154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28154):map__28154);
var opts = map__28154__$1;
var statearr_28157_28335 = state;
(statearr_28157_28335[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__28154,map__28154__$1,opts){
return (function (val){
var statearr_28159_28337 = state;
(statearr_28159_28337[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28154,map__28154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28160_28339 = state;
(statearr_28160_28339[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28145){
var G__28146 = cljs.core.first.call(null,seq28145);
var seq28145__$1 = cljs.core.next.call(null,seq28145);
var G__28147 = cljs.core.first.call(null,seq28145__$1);
var seq28145__$2 = cljs.core.next.call(null,seq28145__$1);
var G__28148 = cljs.core.first.call(null,seq28145__$2);
var seq28145__$3 = cljs.core.next.call(null,seq28145__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28146,G__28147,G__28148,seq28145__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28169 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28170){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28170 = meta28170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28171,meta28170__$1){
var self__ = this;
var _28171__$1 = this;
return (new cljs.core.async.t_cljs$core$async28169(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28170__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28171){
var self__ = this;
var _28171__$1 = this;
return self__.meta28170;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28170","meta28170",1383635354,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28169";

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28169");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28169.
 */
cljs.core.async.__GT_t_cljs$core$async28169 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28169(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28170){
return (new cljs.core.async.t_cljs$core$async28169(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28170));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28169(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27048__auto___28371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28298){
var state_val_28300 = (state_28298[(1)]);
if((state_val_28300 === (7))){
var inst_28204 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28302_28372 = state_28298__$1;
(statearr_28302_28372[(2)] = inst_28204);

(statearr_28302_28372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (20))){
var inst_28216 = (state_28298[(7)]);
var state_28298__$1 = state_28298;
var statearr_28303_28374 = state_28298__$1;
(statearr_28303_28374[(2)] = inst_28216);

(statearr_28303_28374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (27))){
var state_28298__$1 = state_28298;
var statearr_28305_28375 = state_28298__$1;
(statearr_28305_28375[(2)] = null);

(statearr_28305_28375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (1))){
var inst_28189 = (state_28298[(8)]);
var inst_28189__$1 = calc_state.call(null);
var inst_28191 = (inst_28189__$1 == null);
var inst_28192 = cljs.core.not.call(null,inst_28191);
var state_28298__$1 = (function (){var statearr_28307 = state_28298;
(statearr_28307[(8)] = inst_28189__$1);

return statearr_28307;
})();
if(inst_28192){
var statearr_28308_28378 = state_28298__$1;
(statearr_28308_28378[(1)] = (2));

} else {
var statearr_28309_28379 = state_28298__$1;
(statearr_28309_28379[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (24))){
var inst_28253 = (state_28298[(9)]);
var inst_28244 = (state_28298[(10)]);
var inst_28270 = (state_28298[(11)]);
var inst_28270__$1 = inst_28244.call(null,inst_28253);
var state_28298__$1 = (function (){var statearr_28311 = state_28298;
(statearr_28311[(11)] = inst_28270__$1);

return statearr_28311;
})();
if(cljs.core.truth_(inst_28270__$1)){
var statearr_28312_28380 = state_28298__$1;
(statearr_28312_28380[(1)] = (29));

} else {
var statearr_28313_28381 = state_28298__$1;
(statearr_28313_28381[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (4))){
var inst_28207 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28207)){
var statearr_28314_28382 = state_28298__$1;
(statearr_28314_28382[(1)] = (8));

} else {
var statearr_28315_28383 = state_28298__$1;
(statearr_28315_28383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (15))){
var inst_28238 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28238)){
var statearr_28316_28384 = state_28298__$1;
(statearr_28316_28384[(1)] = (19));

} else {
var statearr_28317_28385 = state_28298__$1;
(statearr_28317_28385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (21))){
var inst_28243 = (state_28298[(12)]);
var inst_28243__$1 = (state_28298[(2)]);
var inst_28244 = cljs.core.get.call(null,inst_28243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28245 = cljs.core.get.call(null,inst_28243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28246 = cljs.core.get.call(null,inst_28243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28298__$1 = (function (){var statearr_28318 = state_28298;
(statearr_28318[(10)] = inst_28244);

(statearr_28318[(12)] = inst_28243__$1);

(statearr_28318[(13)] = inst_28245);

return statearr_28318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28298__$1,(22),inst_28246);
} else {
if((state_val_28300 === (31))){
var inst_28278 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28278)){
var statearr_28319_28389 = state_28298__$1;
(statearr_28319_28389[(1)] = (32));

} else {
var statearr_28320_28390 = state_28298__$1;
(statearr_28320_28390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (32))){
var inst_28252 = (state_28298[(14)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28298__$1,(35),out,inst_28252);
} else {
if((state_val_28300 === (33))){
var inst_28243 = (state_28298[(12)]);
var inst_28216 = inst_28243;
var state_28298__$1 = (function (){var statearr_28321 = state_28298;
(statearr_28321[(7)] = inst_28216);

return statearr_28321;
})();
var statearr_28322_28391 = state_28298__$1;
(statearr_28322_28391[(2)] = null);

(statearr_28322_28391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (13))){
var inst_28216 = (state_28298[(7)]);
var inst_28226 = inst_28216.cljs$lang$protocol_mask$partition0$;
var inst_28227 = (inst_28226 & (64));
var inst_28228 = inst_28216.cljs$core$ISeq$;
var inst_28229 = (cljs.core.PROTOCOL_SENTINEL === inst_28228);
var inst_28230 = ((inst_28227) || (inst_28229));
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28230)){
var statearr_28323_28392 = state_28298__$1;
(statearr_28323_28392[(1)] = (16));

} else {
var statearr_28324_28393 = state_28298__$1;
(statearr_28324_28393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (22))){
var inst_28253 = (state_28298[(9)]);
var inst_28252 = (state_28298[(14)]);
var inst_28251 = (state_28298[(2)]);
var inst_28252__$1 = cljs.core.nth.call(null,inst_28251,(0),null);
var inst_28253__$1 = cljs.core.nth.call(null,inst_28251,(1),null);
var inst_28254 = (inst_28252__$1 == null);
var inst_28256 = cljs.core._EQ_.call(null,inst_28253__$1,change);
var inst_28257 = ((inst_28254) || (inst_28256));
var state_28298__$1 = (function (){var statearr_28325 = state_28298;
(statearr_28325[(9)] = inst_28253__$1);

(statearr_28325[(14)] = inst_28252__$1);

return statearr_28325;
})();
if(cljs.core.truth_(inst_28257)){
var statearr_28326_28394 = state_28298__$1;
(statearr_28326_28394[(1)] = (23));

} else {
var statearr_28327_28395 = state_28298__$1;
(statearr_28327_28395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (36))){
var inst_28243 = (state_28298[(12)]);
var inst_28216 = inst_28243;
var state_28298__$1 = (function (){var statearr_28330 = state_28298;
(statearr_28330[(7)] = inst_28216);

return statearr_28330;
})();
var statearr_28331_28396 = state_28298__$1;
(statearr_28331_28396[(2)] = null);

(statearr_28331_28396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (29))){
var inst_28270 = (state_28298[(11)]);
var state_28298__$1 = state_28298;
var statearr_28333_28397 = state_28298__$1;
(statearr_28333_28397[(2)] = inst_28270);

(statearr_28333_28397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (6))){
var state_28298__$1 = state_28298;
var statearr_28334_28399 = state_28298__$1;
(statearr_28334_28399[(2)] = false);

(statearr_28334_28399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (28))){
var inst_28265 = (state_28298[(2)]);
var inst_28266 = calc_state.call(null);
var inst_28216 = inst_28266;
var state_28298__$1 = (function (){var statearr_28336 = state_28298;
(statearr_28336[(15)] = inst_28265);

(statearr_28336[(7)] = inst_28216);

return statearr_28336;
})();
var statearr_28338_28408 = state_28298__$1;
(statearr_28338_28408[(2)] = null);

(statearr_28338_28408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (25))){
var inst_28292 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28340_28419 = state_28298__$1;
(statearr_28340_28419[(2)] = inst_28292);

(statearr_28340_28419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (34))){
var inst_28290 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28341_28427 = state_28298__$1;
(statearr_28341_28427[(2)] = inst_28290);

(statearr_28341_28427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (17))){
var state_28298__$1 = state_28298;
var statearr_28342_28431 = state_28298__$1;
(statearr_28342_28431[(2)] = false);

(statearr_28342_28431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (3))){
var state_28298__$1 = state_28298;
var statearr_28343_28438 = state_28298__$1;
(statearr_28343_28438[(2)] = false);

(statearr_28343_28438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (12))){
var inst_28294 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28298__$1,inst_28294);
} else {
if((state_val_28300 === (2))){
var inst_28189 = (state_28298[(8)]);
var inst_28194 = inst_28189.cljs$lang$protocol_mask$partition0$;
var inst_28195 = (inst_28194 & (64));
var inst_28197 = inst_28189.cljs$core$ISeq$;
var inst_28198 = (cljs.core.PROTOCOL_SENTINEL === inst_28197);
var inst_28199 = ((inst_28195) || (inst_28198));
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28199)){
var statearr_28344_28475 = state_28298__$1;
(statearr_28344_28475[(1)] = (5));

} else {
var statearr_28345_28476 = state_28298__$1;
(statearr_28345_28476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (23))){
var inst_28252 = (state_28298[(14)]);
var inst_28260 = (inst_28252 == null);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28260)){
var statearr_28346_28479 = state_28298__$1;
(statearr_28346_28479[(1)] = (26));

} else {
var statearr_28347_28480 = state_28298__$1;
(statearr_28347_28480[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (35))){
var inst_28281 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28281)){
var statearr_28348_28481 = state_28298__$1;
(statearr_28348_28481[(1)] = (36));

} else {
var statearr_28349_28483 = state_28298__$1;
(statearr_28349_28483[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (19))){
var inst_28216 = (state_28298[(7)]);
var inst_28240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28216);
var state_28298__$1 = state_28298;
var statearr_28350_28485 = state_28298__$1;
(statearr_28350_28485[(2)] = inst_28240);

(statearr_28350_28485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (11))){
var inst_28216 = (state_28298[(7)]);
var inst_28222 = (inst_28216 == null);
var inst_28223 = cljs.core.not.call(null,inst_28222);
var state_28298__$1 = state_28298;
if(inst_28223){
var statearr_28351_28487 = state_28298__$1;
(statearr_28351_28487[(1)] = (13));

} else {
var statearr_28352_28488 = state_28298__$1;
(statearr_28352_28488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (9))){
var inst_28189 = (state_28298[(8)]);
var state_28298__$1 = state_28298;
var statearr_28353_28490 = state_28298__$1;
(statearr_28353_28490[(2)] = inst_28189);

(statearr_28353_28490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (5))){
var state_28298__$1 = state_28298;
var statearr_28354_28491 = state_28298__$1;
(statearr_28354_28491[(2)] = true);

(statearr_28354_28491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (14))){
var state_28298__$1 = state_28298;
var statearr_28355_28494 = state_28298__$1;
(statearr_28355_28494[(2)] = false);

(statearr_28355_28494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (26))){
var inst_28253 = (state_28298[(9)]);
var inst_28262 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28253);
var state_28298__$1 = state_28298;
var statearr_28356_28497 = state_28298__$1;
(statearr_28356_28497[(2)] = inst_28262);

(statearr_28356_28497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (16))){
var state_28298__$1 = state_28298;
var statearr_28357_28498 = state_28298__$1;
(statearr_28357_28498[(2)] = true);

(statearr_28357_28498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (38))){
var inst_28286 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28358_28501 = state_28298__$1;
(statearr_28358_28501[(2)] = inst_28286);

(statearr_28358_28501[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (30))){
var inst_28253 = (state_28298[(9)]);
var inst_28244 = (state_28298[(10)]);
var inst_28245 = (state_28298[(13)]);
var inst_28273 = cljs.core.empty_QMARK_.call(null,inst_28244);
var inst_28274 = inst_28245.call(null,inst_28253);
var inst_28275 = cljs.core.not.call(null,inst_28274);
var inst_28276 = ((inst_28273) && (inst_28275));
var state_28298__$1 = state_28298;
var statearr_28359_28504 = state_28298__$1;
(statearr_28359_28504[(2)] = inst_28276);

(statearr_28359_28504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (10))){
var inst_28189 = (state_28298[(8)]);
var inst_28212 = (state_28298[(2)]);
var inst_28213 = cljs.core.get.call(null,inst_28212,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28214 = cljs.core.get.call(null,inst_28212,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28215 = cljs.core.get.call(null,inst_28212,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28216 = inst_28189;
var state_28298__$1 = (function (){var statearr_28360 = state_28298;
(statearr_28360[(16)] = inst_28213);

(statearr_28360[(17)] = inst_28214);

(statearr_28360[(7)] = inst_28216);

(statearr_28360[(18)] = inst_28215);

return statearr_28360;
})();
var statearr_28361_28507 = state_28298__$1;
(statearr_28361_28507[(2)] = null);

(statearr_28361_28507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (18))){
var inst_28235 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28362_28510 = state_28298__$1;
(statearr_28362_28510[(2)] = inst_28235);

(statearr_28362_28510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (37))){
var state_28298__$1 = state_28298;
var statearr_28363_28512 = state_28298__$1;
(statearr_28363_28512[(2)] = null);

(statearr_28363_28512[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (8))){
var inst_28189 = (state_28298[(8)]);
var inst_28209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28189);
var state_28298__$1 = state_28298;
var statearr_28364_28514 = state_28298__$1;
(statearr_28364_28514[(2)] = inst_28209);

(statearr_28364_28514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26891__auto__,c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26892__auto__ = null;
var cljs$core$async$mix_$_state_machine__26892__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$mix_$_state_machine__26892__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$mix_$_state_machine__26892__auto____1 = (function (state_28298){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__26895__auto__ = e28366;
var statearr_28367_28518 = state_28298;
(statearr_28367_28518[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28519 = state_28298;
state_28298 = G__28519;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26892__auto__ = function(state_28298){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26892__auto____1.call(this,state_28298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26892__auto____0;
cljs$core$async$mix_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26892__auto____1;
return cljs$core$async$mix_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27050__auto__ = (function (){var statearr_28368 = f__27049__auto__.call(null);
(statearr_28368[(6)] = c__27048__auto___28371);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28370 = arguments.length;
switch (G__28370) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28377 = arguments.length;
switch (G__28377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__28373_SHARP_){
if(cljs.core.truth_(p1__28373_SHARP_.call(null,topic))){
return p1__28373_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28386 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28387){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28387 = meta28387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28388,meta28387__$1){
var self__ = this;
var _28388__$1 = this;
return (new cljs.core.async.t_cljs$core$async28386(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28387__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28388){
var self__ = this;
var _28388__$1 = this;
return self__.meta28387;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28387","meta28387",875767505,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28386";

cljs.core.async.t_cljs$core$async28386.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28386");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28386.
 */
cljs.core.async.__GT_t_cljs$core$async28386 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28387){
return (new cljs.core.async.t_cljs$core$async28386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28387));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28386(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27048__auto___28550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28550,mults,ensure_mult,p){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28550,mults,ensure_mult,p){
return (function (state_28477){
var state_val_28478 = (state_28477[(1)]);
if((state_val_28478 === (7))){
var inst_28471 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28482_28552 = state_28477__$1;
(statearr_28482_28552[(2)] = inst_28471);

(statearr_28482_28552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (20))){
var state_28477__$1 = state_28477;
var statearr_28484_28554 = state_28477__$1;
(statearr_28484_28554[(2)] = null);

(statearr_28484_28554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (1))){
var state_28477__$1 = state_28477;
var statearr_28486_28555 = state_28477__$1;
(statearr_28486_28555[(2)] = null);

(statearr_28486_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (24))){
var inst_28454 = (state_28477[(7)]);
var inst_28463 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28454);
var state_28477__$1 = state_28477;
var statearr_28489_28560 = state_28477__$1;
(statearr_28489_28560[(2)] = inst_28463);

(statearr_28489_28560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (4))){
var inst_28401 = (state_28477[(8)]);
var inst_28401__$1 = (state_28477[(2)]);
var inst_28402 = (inst_28401__$1 == null);
var state_28477__$1 = (function (){var statearr_28492 = state_28477;
(statearr_28492[(8)] = inst_28401__$1);

return statearr_28492;
})();
if(cljs.core.truth_(inst_28402)){
var statearr_28493_28563 = state_28477__$1;
(statearr_28493_28563[(1)] = (5));

} else {
var statearr_28495_28564 = state_28477__$1;
(statearr_28495_28564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (15))){
var inst_28448 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28496_28568 = state_28477__$1;
(statearr_28496_28568[(2)] = inst_28448);

(statearr_28496_28568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (21))){
var inst_28468 = (state_28477[(2)]);
var state_28477__$1 = (function (){var statearr_28499 = state_28477;
(statearr_28499[(9)] = inst_28468);

return statearr_28499;
})();
var statearr_28500_28579 = state_28477__$1;
(statearr_28500_28579[(2)] = null);

(statearr_28500_28579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (13))){
var inst_28428 = (state_28477[(10)]);
var inst_28430 = cljs.core.chunked_seq_QMARK_.call(null,inst_28428);
var state_28477__$1 = state_28477;
if(inst_28430){
var statearr_28502_28599 = state_28477__$1;
(statearr_28502_28599[(1)] = (16));

} else {
var statearr_28503_28600 = state_28477__$1;
(statearr_28503_28600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (22))){
var inst_28460 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
if(cljs.core.truth_(inst_28460)){
var statearr_28505_28603 = state_28477__$1;
(statearr_28505_28603[(1)] = (23));

} else {
var statearr_28506_28604 = state_28477__$1;
(statearr_28506_28604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (6))){
var inst_28454 = (state_28477[(7)]);
var inst_28456 = (state_28477[(11)]);
var inst_28401 = (state_28477[(8)]);
var inst_28454__$1 = topic_fn.call(null,inst_28401);
var inst_28455 = cljs.core.deref.call(null,mults);
var inst_28456__$1 = cljs.core.get.call(null,inst_28455,inst_28454__$1);
var state_28477__$1 = (function (){var statearr_28508 = state_28477;
(statearr_28508[(7)] = inst_28454__$1);

(statearr_28508[(11)] = inst_28456__$1);

return statearr_28508;
})();
if(cljs.core.truth_(inst_28456__$1)){
var statearr_28509_28607 = state_28477__$1;
(statearr_28509_28607[(1)] = (19));

} else {
var statearr_28511_28608 = state_28477__$1;
(statearr_28511_28608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (25))){
var inst_28465 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28513_28610 = state_28477__$1;
(statearr_28513_28610[(2)] = inst_28465);

(statearr_28513_28610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (17))){
var inst_28428 = (state_28477[(10)]);
var inst_28439 = cljs.core.first.call(null,inst_28428);
var inst_28440 = cljs.core.async.muxch_STAR_.call(null,inst_28439);
var inst_28441 = cljs.core.async.close_BANG_.call(null,inst_28440);
var inst_28442 = cljs.core.next.call(null,inst_28428);
var inst_28412 = inst_28442;
var inst_28413 = null;
var inst_28414 = (0);
var inst_28415 = (0);
var state_28477__$1 = (function (){var statearr_28515 = state_28477;
(statearr_28515[(12)] = inst_28414);

(statearr_28515[(13)] = inst_28412);

(statearr_28515[(14)] = inst_28441);

(statearr_28515[(15)] = inst_28415);

(statearr_28515[(16)] = inst_28413);

return statearr_28515;
})();
var statearr_28516_28614 = state_28477__$1;
(statearr_28516_28614[(2)] = null);

(statearr_28516_28614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (3))){
var inst_28473 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28477__$1,inst_28473);
} else {
if((state_val_28478 === (12))){
var inst_28450 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28517_28616 = state_28477__$1;
(statearr_28517_28616[(2)] = inst_28450);

(statearr_28517_28616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (2))){
var state_28477__$1 = state_28477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28477__$1,(4),ch);
} else {
if((state_val_28478 === (23))){
var state_28477__$1 = state_28477;
var statearr_28520_28617 = state_28477__$1;
(statearr_28520_28617[(2)] = null);

(statearr_28520_28617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (19))){
var inst_28456 = (state_28477[(11)]);
var inst_28401 = (state_28477[(8)]);
var inst_28458 = cljs.core.async.muxch_STAR_.call(null,inst_28456);
var state_28477__$1 = state_28477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28477__$1,(22),inst_28458,inst_28401);
} else {
if((state_val_28478 === (11))){
var inst_28428 = (state_28477[(10)]);
var inst_28412 = (state_28477[(13)]);
var inst_28428__$1 = cljs.core.seq.call(null,inst_28412);
var state_28477__$1 = (function (){var statearr_28521 = state_28477;
(statearr_28521[(10)] = inst_28428__$1);

return statearr_28521;
})();
if(inst_28428__$1){
var statearr_28522_28618 = state_28477__$1;
(statearr_28522_28618[(1)] = (13));

} else {
var statearr_28523_28619 = state_28477__$1;
(statearr_28523_28619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (9))){
var inst_28452 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28524_28620 = state_28477__$1;
(statearr_28524_28620[(2)] = inst_28452);

(statearr_28524_28620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (5))){
var inst_28409 = cljs.core.deref.call(null,mults);
var inst_28410 = cljs.core.vals.call(null,inst_28409);
var inst_28411 = cljs.core.seq.call(null,inst_28410);
var inst_28412 = inst_28411;
var inst_28413 = null;
var inst_28414 = (0);
var inst_28415 = (0);
var state_28477__$1 = (function (){var statearr_28525 = state_28477;
(statearr_28525[(12)] = inst_28414);

(statearr_28525[(13)] = inst_28412);

(statearr_28525[(15)] = inst_28415);

(statearr_28525[(16)] = inst_28413);

return statearr_28525;
})();
var statearr_28526_28625 = state_28477__$1;
(statearr_28526_28625[(2)] = null);

(statearr_28526_28625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (14))){
var state_28477__$1 = state_28477;
var statearr_28530_28627 = state_28477__$1;
(statearr_28530_28627[(2)] = null);

(statearr_28530_28627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (16))){
var inst_28428 = (state_28477[(10)]);
var inst_28433 = cljs.core.chunk_first.call(null,inst_28428);
var inst_28434 = cljs.core.chunk_rest.call(null,inst_28428);
var inst_28435 = cljs.core.count.call(null,inst_28433);
var inst_28412 = inst_28434;
var inst_28413 = inst_28433;
var inst_28414 = inst_28435;
var inst_28415 = (0);
var state_28477__$1 = (function (){var statearr_28531 = state_28477;
(statearr_28531[(12)] = inst_28414);

(statearr_28531[(13)] = inst_28412);

(statearr_28531[(15)] = inst_28415);

(statearr_28531[(16)] = inst_28413);

return statearr_28531;
})();
var statearr_28532_28630 = state_28477__$1;
(statearr_28532_28630[(2)] = null);

(statearr_28532_28630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (10))){
var inst_28414 = (state_28477[(12)]);
var inst_28412 = (state_28477[(13)]);
var inst_28415 = (state_28477[(15)]);
var inst_28413 = (state_28477[(16)]);
var inst_28421 = cljs.core._nth.call(null,inst_28413,inst_28415);
var inst_28422 = cljs.core.async.muxch_STAR_.call(null,inst_28421);
var inst_28423 = cljs.core.async.close_BANG_.call(null,inst_28422);
var inst_28424 = (inst_28415 + (1));
var tmp28527 = inst_28414;
var tmp28528 = inst_28412;
var tmp28529 = inst_28413;
var inst_28412__$1 = tmp28528;
var inst_28413__$1 = tmp28529;
var inst_28414__$1 = tmp28527;
var inst_28415__$1 = inst_28424;
var state_28477__$1 = (function (){var statearr_28534 = state_28477;
(statearr_28534[(12)] = inst_28414__$1);

(statearr_28534[(13)] = inst_28412__$1);

(statearr_28534[(17)] = inst_28423);

(statearr_28534[(15)] = inst_28415__$1);

(statearr_28534[(16)] = inst_28413__$1);

return statearr_28534;
})();
var statearr_28535_28635 = state_28477__$1;
(statearr_28535_28635[(2)] = null);

(statearr_28535_28635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (18))){
var inst_28445 = (state_28477[(2)]);
var state_28477__$1 = state_28477;
var statearr_28536_28636 = state_28477__$1;
(statearr_28536_28636[(2)] = inst_28445);

(statearr_28536_28636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28478 === (8))){
var inst_28414 = (state_28477[(12)]);
var inst_28415 = (state_28477[(15)]);
var inst_28417 = (inst_28415 < inst_28414);
var inst_28418 = inst_28417;
var state_28477__$1 = state_28477;
if(cljs.core.truth_(inst_28418)){
var statearr_28537_28639 = state_28477__$1;
(statearr_28537_28639[(1)] = (10));

} else {
var statearr_28538_28641 = state_28477__$1;
(statearr_28538_28641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28550,mults,ensure_mult,p))
;
return ((function (switch__26891__auto__,c__27048__auto___28550,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_28539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28539[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_28539[(1)] = (1));

return statearr_28539;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_28477){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28540){if((e28540 instanceof Object)){
var ex__26895__auto__ = e28540;
var statearr_28541_28646 = state_28477;
(statearr_28541_28646[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28647 = state_28477;
state_28477 = G__28647;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_28477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_28477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28550,mults,ensure_mult,p))
})();
var state__27050__auto__ = (function (){var statearr_28542 = f__27049__auto__.call(null);
(statearr_28542[(6)] = c__27048__auto___28550);

return statearr_28542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28550,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28545 = arguments.length;
switch (G__28545) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28547 = arguments.length;
switch (G__28547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28549 = arguments.length;
switch (G__28549) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27048__auto___28691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28601){
var state_val_28602 = (state_28601[(1)]);
if((state_val_28602 === (7))){
var state_28601__$1 = state_28601;
var statearr_28605_28694 = state_28601__$1;
(statearr_28605_28694[(2)] = null);

(statearr_28605_28694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (1))){
var state_28601__$1 = state_28601;
var statearr_28606_28697 = state_28601__$1;
(statearr_28606_28697[(2)] = null);

(statearr_28606_28697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (4))){
var inst_28558 = (state_28601[(7)]);
var inst_28561 = (inst_28558 < cnt);
var state_28601__$1 = state_28601;
if(cljs.core.truth_(inst_28561)){
var statearr_28609_28700 = state_28601__$1;
(statearr_28609_28700[(1)] = (6));

} else {
var statearr_28611_28701 = state_28601__$1;
(statearr_28611_28701[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (15))){
var inst_28595 = (state_28601[(2)]);
var state_28601__$1 = state_28601;
var statearr_28612_28702 = state_28601__$1;
(statearr_28612_28702[(2)] = inst_28595);

(statearr_28612_28702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (13))){
var inst_28588 = cljs.core.async.close_BANG_.call(null,out);
var state_28601__$1 = state_28601;
var statearr_28613_28708 = state_28601__$1;
(statearr_28613_28708[(2)] = inst_28588);

(statearr_28613_28708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (6))){
var state_28601__$1 = state_28601;
var statearr_28615_28709 = state_28601__$1;
(statearr_28615_28709[(2)] = null);

(statearr_28615_28709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (3))){
var inst_28597 = (state_28601[(2)]);
var state_28601__$1 = state_28601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28601__$1,inst_28597);
} else {
if((state_val_28602 === (12))){
var inst_28585 = (state_28601[(8)]);
var inst_28585__$1 = (state_28601[(2)]);
var inst_28586 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28585__$1);
var state_28601__$1 = (function (){var statearr_28621 = state_28601;
(statearr_28621[(8)] = inst_28585__$1);

return statearr_28621;
})();
if(cljs.core.truth_(inst_28586)){
var statearr_28622_28715 = state_28601__$1;
(statearr_28622_28715[(1)] = (13));

} else {
var statearr_28623_28717 = state_28601__$1;
(statearr_28623_28717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (2))){
var inst_28557 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28558 = (0);
var state_28601__$1 = (function (){var statearr_28624 = state_28601;
(statearr_28624[(9)] = inst_28557);

(statearr_28624[(7)] = inst_28558);

return statearr_28624;
})();
var statearr_28626_28718 = state_28601__$1;
(statearr_28626_28718[(2)] = null);

(statearr_28626_28718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (11))){
var inst_28558 = (state_28601[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28601,(10),Object,null,(9));
var inst_28571 = chs__$1.call(null,inst_28558);
var inst_28572 = done.call(null,inst_28558);
var inst_28573 = cljs.core.async.take_BANG_.call(null,inst_28571,inst_28572);
var state_28601__$1 = state_28601;
var statearr_28628_28719 = state_28601__$1;
(statearr_28628_28719[(2)] = inst_28573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28601__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (9))){
var inst_28558 = (state_28601[(7)]);
var inst_28575 = (state_28601[(2)]);
var inst_28576 = (inst_28558 + (1));
var inst_28558__$1 = inst_28576;
var state_28601__$1 = (function (){var statearr_28629 = state_28601;
(statearr_28629[(10)] = inst_28575);

(statearr_28629[(7)] = inst_28558__$1);

return statearr_28629;
})();
var statearr_28631_28721 = state_28601__$1;
(statearr_28631_28721[(2)] = null);

(statearr_28631_28721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (5))){
var inst_28583 = (state_28601[(2)]);
var state_28601__$1 = (function (){var statearr_28632 = state_28601;
(statearr_28632[(11)] = inst_28583);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28601__$1,(12),dchan);
} else {
if((state_val_28602 === (14))){
var inst_28585 = (state_28601[(8)]);
var inst_28590 = cljs.core.apply.call(null,f,inst_28585);
var state_28601__$1 = state_28601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28601__$1,(16),out,inst_28590);
} else {
if((state_val_28602 === (16))){
var inst_28592 = (state_28601[(2)]);
var state_28601__$1 = (function (){var statearr_28633 = state_28601;
(statearr_28633[(12)] = inst_28592);

return statearr_28633;
})();
var statearr_28634_28724 = state_28601__$1;
(statearr_28634_28724[(2)] = null);

(statearr_28634_28724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (10))){
var inst_28565 = (state_28601[(2)]);
var inst_28566 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28601__$1 = (function (){var statearr_28637 = state_28601;
(statearr_28637[(13)] = inst_28565);

return statearr_28637;
})();
var statearr_28638_28727 = state_28601__$1;
(statearr_28638_28727[(2)] = inst_28566);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28601__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (8))){
var inst_28581 = (state_28601[(2)]);
var state_28601__$1 = state_28601;
var statearr_28640_28729 = state_28601__$1;
(statearr_28640_28729[(2)] = inst_28581);

(statearr_28640_28729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26891__auto__,c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_28643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28643[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_28643[(1)] = (1));

return statearr_28643;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_28601){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28644){if((e28644 instanceof Object)){
var ex__26895__auto__ = e28644;
var statearr_28645_28733 = state_28601;
(statearr_28645_28733[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28734 = state_28601;
state_28601 = G__28734;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_28601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_28601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27050__auto__ = (function (){var statearr_28648 = f__27049__auto__.call(null);
(statearr_28648[(6)] = c__27048__auto___28691);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28691,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28653 = arguments.length;
switch (G__28653) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___28738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28738,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28738,out){
return (function (state_28689){
var state_val_28690 = (state_28689[(1)]);
if((state_val_28690 === (7))){
var inst_28667 = (state_28689[(7)]);
var inst_28668 = (state_28689[(8)]);
var inst_28667__$1 = (state_28689[(2)]);
var inst_28668__$1 = cljs.core.nth.call(null,inst_28667__$1,(0),null);
var inst_28669 = cljs.core.nth.call(null,inst_28667__$1,(1),null);
var inst_28671 = (inst_28668__$1 == null);
var state_28689__$1 = (function (){var statearr_28692 = state_28689;
(statearr_28692[(7)] = inst_28667__$1);

(statearr_28692[(8)] = inst_28668__$1);

(statearr_28692[(9)] = inst_28669);

return statearr_28692;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28693_28750 = state_28689__$1;
(statearr_28693_28750[(1)] = (8));

} else {
var statearr_28696_28759 = state_28689__$1;
(statearr_28696_28759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (1))){
var inst_28657 = cljs.core.vec.call(null,chs);
var inst_28658 = inst_28657;
var state_28689__$1 = (function (){var statearr_28698 = state_28689;
(statearr_28698[(10)] = inst_28658);

return statearr_28698;
})();
var statearr_28699_28768 = state_28689__$1;
(statearr_28699_28768[(2)] = null);

(statearr_28699_28768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (4))){
var inst_28658 = (state_28689[(10)]);
var state_28689__$1 = state_28689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28689__$1,(7),inst_28658);
} else {
if((state_val_28690 === (6))){
var inst_28685 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28706_28770 = state_28689__$1;
(statearr_28706_28770[(2)] = inst_28685);

(statearr_28706_28770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (3))){
var inst_28687 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28689__$1,inst_28687);
} else {
if((state_val_28690 === (2))){
var inst_28658 = (state_28689[(10)]);
var inst_28660 = cljs.core.count.call(null,inst_28658);
var inst_28661 = (inst_28660 > (0));
var state_28689__$1 = state_28689;
if(cljs.core.truth_(inst_28661)){
var statearr_28710_28775 = state_28689__$1;
(statearr_28710_28775[(1)] = (4));

} else {
var statearr_28711_28776 = state_28689__$1;
(statearr_28711_28776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (11))){
var inst_28658 = (state_28689[(10)]);
var inst_28678 = (state_28689[(2)]);
var tmp28707 = inst_28658;
var inst_28658__$1 = tmp28707;
var state_28689__$1 = (function (){var statearr_28714 = state_28689;
(statearr_28714[(11)] = inst_28678);

(statearr_28714[(10)] = inst_28658__$1);

return statearr_28714;
})();
var statearr_28716_28778 = state_28689__$1;
(statearr_28716_28778[(2)] = null);

(statearr_28716_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (9))){
var inst_28668 = (state_28689[(8)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28689__$1,(11),out,inst_28668);
} else {
if((state_val_28690 === (5))){
var inst_28683 = cljs.core.async.close_BANG_.call(null,out);
var state_28689__$1 = state_28689;
var statearr_28720_28780 = state_28689__$1;
(statearr_28720_28780[(2)] = inst_28683);

(statearr_28720_28780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (10))){
var inst_28681 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28722_28782 = state_28689__$1;
(statearr_28722_28782[(2)] = inst_28681);

(statearr_28722_28782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (8))){
var inst_28667 = (state_28689[(7)]);
var inst_28668 = (state_28689[(8)]);
var inst_28658 = (state_28689[(10)]);
var inst_28669 = (state_28689[(9)]);
var inst_28673 = (function (){var cs = inst_28658;
var vec__28663 = inst_28667;
var v = inst_28668;
var c = inst_28669;
return ((function (cs,vec__28663,v,c,inst_28667,inst_28668,inst_28658,inst_28669,state_val_28690,c__27048__auto___28738,out){
return (function (p1__28651_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28651_SHARP_);
});
;})(cs,vec__28663,v,c,inst_28667,inst_28668,inst_28658,inst_28669,state_val_28690,c__27048__auto___28738,out))
})();
var inst_28674 = cljs.core.filterv.call(null,inst_28673,inst_28658);
var inst_28658__$1 = inst_28674;
var state_28689__$1 = (function (){var statearr_28723 = state_28689;
(statearr_28723[(10)] = inst_28658__$1);

return statearr_28723;
})();
var statearr_28725_28788 = state_28689__$1;
(statearr_28725_28788[(2)] = null);

(statearr_28725_28788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28738,out))
;
return ((function (switch__26891__auto__,c__27048__auto___28738,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_28728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28728[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_28728[(1)] = (1));

return statearr_28728;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_28689){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28730){if((e28730 instanceof Object)){
var ex__26895__auto__ = e28730;
var statearr_28731_28793 = state_28689;
(statearr_28731_28793[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28689;
state_28689 = G__28795;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_28689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_28689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28738,out))
})();
var state__27050__auto__ = (function (){var statearr_28732 = f__27049__auto__.call(null);
(statearr_28732[(6)] = c__27048__auto___28738);

return statearr_28732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28738,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28737 = arguments.length;
switch (G__28737) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___28803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___28803,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___28803,out){
return (function (state_28764){
var state_val_28765 = (state_28764[(1)]);
if((state_val_28765 === (7))){
var inst_28744 = (state_28764[(7)]);
var inst_28744__$1 = (state_28764[(2)]);
var inst_28745 = (inst_28744__$1 == null);
var inst_28746 = cljs.core.not.call(null,inst_28745);
var state_28764__$1 = (function (){var statearr_28769 = state_28764;
(statearr_28769[(7)] = inst_28744__$1);

return statearr_28769;
})();
if(inst_28746){
var statearr_28771_28806 = state_28764__$1;
(statearr_28771_28806[(1)] = (8));

} else {
var statearr_28772_28807 = state_28764__$1;
(statearr_28772_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (1))){
var inst_28739 = (0);
var state_28764__$1 = (function (){var statearr_28773 = state_28764;
(statearr_28773[(8)] = inst_28739);

return statearr_28773;
})();
var statearr_28774_28808 = state_28764__$1;
(statearr_28774_28808[(2)] = null);

(statearr_28774_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (4))){
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28764__$1,(7),ch);
} else {
if((state_val_28765 === (6))){
var inst_28758 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28777_28809 = state_28764__$1;
(statearr_28777_28809[(2)] = inst_28758);

(statearr_28777_28809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (3))){
var inst_28761 = (state_28764[(2)]);
var inst_28762 = cljs.core.async.close_BANG_.call(null,out);
var state_28764__$1 = (function (){var statearr_28779 = state_28764;
(statearr_28779[(9)] = inst_28761);

return statearr_28779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28764__$1,inst_28762);
} else {
if((state_val_28765 === (2))){
var inst_28739 = (state_28764[(8)]);
var inst_28741 = (inst_28739 < n);
var state_28764__$1 = state_28764;
if(cljs.core.truth_(inst_28741)){
var statearr_28781_28821 = state_28764__$1;
(statearr_28781_28821[(1)] = (4));

} else {
var statearr_28783_28823 = state_28764__$1;
(statearr_28783_28823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (11))){
var inst_28739 = (state_28764[(8)]);
var inst_28749 = (state_28764[(2)]);
var inst_28751 = (inst_28739 + (1));
var inst_28739__$1 = inst_28751;
var state_28764__$1 = (function (){var statearr_28785 = state_28764;
(statearr_28785[(8)] = inst_28739__$1);

(statearr_28785[(10)] = inst_28749);

return statearr_28785;
})();
var statearr_28786_28825 = state_28764__$1;
(statearr_28786_28825[(2)] = null);

(statearr_28786_28825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (9))){
var state_28764__$1 = state_28764;
var statearr_28787_28826 = state_28764__$1;
(statearr_28787_28826[(2)] = null);

(statearr_28787_28826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (5))){
var state_28764__$1 = state_28764;
var statearr_28789_28827 = state_28764__$1;
(statearr_28789_28827[(2)] = null);

(statearr_28789_28827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (10))){
var inst_28755 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28790_28828 = state_28764__$1;
(statearr_28790_28828[(2)] = inst_28755);

(statearr_28790_28828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (8))){
var inst_28744 = (state_28764[(7)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28764__$1,(11),out,inst_28744);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___28803,out))
;
return ((function (switch__26891__auto__,c__27048__auto___28803,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_28792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28792[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_28792[(1)] = (1));

return statearr_28792;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_28764){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28794){if((e28794 instanceof Object)){
var ex__26895__auto__ = e28794;
var statearr_28796_28836 = state_28764;
(statearr_28796_28836[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28840 = state_28764;
state_28764 = G__28840;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_28764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_28764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___28803,out))
})();
var state__27050__auto__ = (function (){var statearr_28797 = f__27049__auto__.call(null);
(statearr_28797[(6)] = c__27048__auto___28803);

return statearr_28797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___28803,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28800 = (function (f,ch,meta28801){
this.f = f;
this.ch = ch;
this.meta28801 = meta28801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28802,meta28801__$1){
var self__ = this;
var _28802__$1 = this;
return (new cljs.core.async.t_cljs$core$async28800(self__.f,self__.ch,meta28801__$1));
});

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28802){
var self__ = this;
var _28802__$1 = this;
return self__.meta28801;
});

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28814 = (function (f,ch,meta28801,_,fn1,meta28815){
this.f = f;
this.ch = ch;
this.meta28801 = meta28801;
this._ = _;
this.fn1 = fn1;
this.meta28815 = meta28815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28816,meta28815__$1){
var self__ = this;
var _28816__$1 = this;
return (new cljs.core.async.t_cljs$core$async28814(self__.f,self__.ch,self__.meta28801,self__._,self__.fn1,meta28815__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28816){
var self__ = this;
var _28816__$1 = this;
return self__.meta28815;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28799_SHARP_){
return f1.call(null,(((p1__28799_SHARP_ == null))?null:self__.f.call(null,p1__28799_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28801","meta28801",492464002,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28800","cljs.core.async/t_cljs$core$async28800",1480268880,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28815","meta28815",-7638788,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28814";

cljs.core.async.t_cljs$core$async28814.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28814");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28814.
 */
cljs.core.async.__GT_t_cljs$core$async28814 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28814(f__$1,ch__$1,meta28801__$1,___$2,fn1__$1,meta28815){
return (new cljs.core.async.t_cljs$core$async28814(f__$1,ch__$1,meta28801__$1,___$2,fn1__$1,meta28815));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28814(self__.f,self__.ch,self__.meta28801,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28801","meta28801",492464002,null)], null);
});

cljs.core.async.t_cljs$core$async28800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28800";

cljs.core.async.t_cljs$core$async28800.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28800");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28800.
 */
cljs.core.async.__GT_t_cljs$core$async28800 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28800(f__$1,ch__$1,meta28801){
return (new cljs.core.async.t_cljs$core$async28800(f__$1,ch__$1,meta28801));
});

}

return (new cljs.core.async.t_cljs$core$async28800(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28843 = (function (f,ch,meta28844){
this.f = f;
this.ch = ch;
this.meta28844 = meta28844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28845,meta28844__$1){
var self__ = this;
var _28845__$1 = this;
return (new cljs.core.async.t_cljs$core$async28843(self__.f,self__.ch,meta28844__$1));
});

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28845){
var self__ = this;
var _28845__$1 = this;
return self__.meta28844;
});

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28844","meta28844",93069384,null)], null);
});

cljs.core.async.t_cljs$core$async28843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28843";

cljs.core.async.t_cljs$core$async28843.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28843");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28843.
 */
cljs.core.async.__GT_t_cljs$core$async28843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28843(f__$1,ch__$1,meta28844){
return (new cljs.core.async.t_cljs$core$async28843(f__$1,ch__$1,meta28844));
});

}

return (new cljs.core.async.t_cljs$core$async28843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28860 = (function (p,ch,meta28861){
this.p = p;
this.ch = ch;
this.meta28861 = meta28861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28862,meta28861__$1){
var self__ = this;
var _28862__$1 = this;
return (new cljs.core.async.t_cljs$core$async28860(self__.p,self__.ch,meta28861__$1));
});

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28862){
var self__ = this;
var _28862__$1 = this;
return self__.meta28861;
});

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28861","meta28861",-1140572006,null)], null);
});

cljs.core.async.t_cljs$core$async28860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28860";

cljs.core.async.t_cljs$core$async28860.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28860");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28860.
 */
cljs.core.async.__GT_t_cljs$core$async28860 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28860(p__$1,ch__$1,meta28861){
return (new cljs.core.async.t_cljs$core$async28860(p__$1,ch__$1,meta28861));
});

}

return (new cljs.core.async.t_cljs$core$async28860(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28927 = arguments.length;
switch (G__28927) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___29006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___29006,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___29006,out){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (7))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28964_29007 = state_28957__$1;
(statearr_28964_29007[(2)] = inst_28953);

(statearr_28964_29007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28971_29008 = state_28957__$1;
(statearr_28971_29008[(2)] = null);

(statearr_28971_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (4))){
var inst_28936 = (state_28957[(7)]);
var inst_28936__$1 = (state_28957[(2)]);
var inst_28940 = (inst_28936__$1 == null);
var state_28957__$1 = (function (){var statearr_28975 = state_28957;
(statearr_28975[(7)] = inst_28936__$1);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28940)){
var statearr_28976_29030 = state_28957__$1;
(statearr_28976_29030[(1)] = (5));

} else {
var statearr_28977_29034 = state_28957__$1;
(statearr_28977_29034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var inst_28936 = (state_28957[(7)]);
var inst_28944 = p.call(null,inst_28936);
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28944)){
var statearr_28986_29042 = state_28957__$1;
(statearr_28986_29042[(1)] = (8));

} else {
var statearr_28987_29045 = state_28957__$1;
(statearr_28987_29045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (2))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(4),ch);
} else {
if((state_val_28958 === (11))){
var inst_28947 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28988_29064 = state_28957__$1;
(statearr_28988_29064[(2)] = inst_28947);

(statearr_28988_29064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (9))){
var state_28957__$1 = state_28957;
var statearr_28993_29075 = state_28957__$1;
(statearr_28993_29075[(2)] = null);

(statearr_28993_29075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var inst_28942 = cljs.core.async.close_BANG_.call(null,out);
var state_28957__$1 = state_28957;
var statearr_28994_29078 = state_28957__$1;
(statearr_28994_29078[(2)] = inst_28942);

(statearr_28994_29078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (10))){
var inst_28950 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28995 = state_28957;
(statearr_28995[(8)] = inst_28950);

return statearr_28995;
})();
var statearr_28996_29080 = state_28957__$1;
(statearr_28996_29080[(2)] = null);

(statearr_28996_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (8))){
var inst_28936 = (state_28957[(7)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28957__$1,(11),out,inst_28936);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___29006,out))
;
return ((function (switch__26891__auto__,c__27048__auto___29006,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_28997 = [null,null,null,null,null,null,null,null,null];
(statearr_28997[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_28997[(1)] = (1));

return statearr_28997;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_28957){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e28998){if((e28998 instanceof Object)){
var ex__26895__auto__ = e28998;
var statearr_28999_29083 = state_28957;
(statearr_28999_29083[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_28957;
state_28957 = G__29085;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___29006,out))
})();
var state__27050__auto__ = (function (){var statearr_29001 = f__27049__auto__.call(null);
(statearr_29001[(6)] = c__27048__auto___29006);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___29006,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29004 = arguments.length;
switch (G__29004) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__){
return (function (state_29076){
var state_val_29077 = (state_29076[(1)]);
if((state_val_29077 === (7))){
var inst_29071 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29082_29134 = state_29076__$1;
(statearr_29082_29134[(2)] = inst_29071);

(statearr_29082_29134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (20))){
var inst_29038 = (state_29076[(7)]);
var inst_29051 = (state_29076[(2)]);
var inst_29052 = cljs.core.next.call(null,inst_29038);
var inst_29022 = inst_29052;
var inst_29023 = null;
var inst_29024 = (0);
var inst_29025 = (0);
var state_29076__$1 = (function (){var statearr_29084 = state_29076;
(statearr_29084[(8)] = inst_29024);

(statearr_29084[(9)] = inst_29022);

(statearr_29084[(10)] = inst_29051);

(statearr_29084[(11)] = inst_29025);

(statearr_29084[(12)] = inst_29023);

return statearr_29084;
})();
var statearr_29086_29139 = state_29076__$1;
(statearr_29086_29139[(2)] = null);

(statearr_29086_29139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (1))){
var state_29076__$1 = state_29076;
var statearr_29087_29142 = state_29076__$1;
(statearr_29087_29142[(2)] = null);

(statearr_29087_29142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (4))){
var inst_29011 = (state_29076[(13)]);
var inst_29011__$1 = (state_29076[(2)]);
var inst_29012 = (inst_29011__$1 == null);
var state_29076__$1 = (function (){var statearr_29088 = state_29076;
(statearr_29088[(13)] = inst_29011__$1);

return statearr_29088;
})();
if(cljs.core.truth_(inst_29012)){
var statearr_29090_29144 = state_29076__$1;
(statearr_29090_29144[(1)] = (5));

} else {
var statearr_29091_29145 = state_29076__$1;
(statearr_29091_29145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (15))){
var state_29076__$1 = state_29076;
var statearr_29095_29146 = state_29076__$1;
(statearr_29095_29146[(2)] = null);

(statearr_29095_29146[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (21))){
var state_29076__$1 = state_29076;
var statearr_29096_29148 = state_29076__$1;
(statearr_29096_29148[(2)] = null);

(statearr_29096_29148[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (13))){
var inst_29024 = (state_29076[(8)]);
var inst_29022 = (state_29076[(9)]);
var inst_29025 = (state_29076[(11)]);
var inst_29023 = (state_29076[(12)]);
var inst_29033 = (state_29076[(2)]);
var inst_29035 = (inst_29025 + (1));
var tmp29092 = inst_29024;
var tmp29093 = inst_29022;
var tmp29094 = inst_29023;
var inst_29022__$1 = tmp29093;
var inst_29023__$1 = tmp29094;
var inst_29024__$1 = tmp29092;
var inst_29025__$1 = inst_29035;
var state_29076__$1 = (function (){var statearr_29100 = state_29076;
(statearr_29100[(8)] = inst_29024__$1);

(statearr_29100[(9)] = inst_29022__$1);

(statearr_29100[(11)] = inst_29025__$1);

(statearr_29100[(12)] = inst_29023__$1);

(statearr_29100[(14)] = inst_29033);

return statearr_29100;
})();
var statearr_29101_29151 = state_29076__$1;
(statearr_29101_29151[(2)] = null);

(statearr_29101_29151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (22))){
var state_29076__$1 = state_29076;
var statearr_29102_29152 = state_29076__$1;
(statearr_29102_29152[(2)] = null);

(statearr_29102_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (6))){
var inst_29011 = (state_29076[(13)]);
var inst_29020 = f.call(null,inst_29011);
var inst_29021 = cljs.core.seq.call(null,inst_29020);
var inst_29022 = inst_29021;
var inst_29023 = null;
var inst_29024 = (0);
var inst_29025 = (0);
var state_29076__$1 = (function (){var statearr_29103 = state_29076;
(statearr_29103[(8)] = inst_29024);

(statearr_29103[(9)] = inst_29022);

(statearr_29103[(11)] = inst_29025);

(statearr_29103[(12)] = inst_29023);

return statearr_29103;
})();
var statearr_29104_29158 = state_29076__$1;
(statearr_29104_29158[(2)] = null);

(statearr_29104_29158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (17))){
var inst_29038 = (state_29076[(7)]);
var inst_29043 = cljs.core.chunk_first.call(null,inst_29038);
var inst_29044 = cljs.core.chunk_rest.call(null,inst_29038);
var inst_29046 = cljs.core.count.call(null,inst_29043);
var inst_29022 = inst_29044;
var inst_29023 = inst_29043;
var inst_29024 = inst_29046;
var inst_29025 = (0);
var state_29076__$1 = (function (){var statearr_29105 = state_29076;
(statearr_29105[(8)] = inst_29024);

(statearr_29105[(9)] = inst_29022);

(statearr_29105[(11)] = inst_29025);

(statearr_29105[(12)] = inst_29023);

return statearr_29105;
})();
var statearr_29106_29180 = state_29076__$1;
(statearr_29106_29180[(2)] = null);

(statearr_29106_29180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (3))){
var inst_29073 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29076__$1,inst_29073);
} else {
if((state_val_29077 === (12))){
var inst_29060 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29110_29183 = state_29076__$1;
(statearr_29110_29183[(2)] = inst_29060);

(statearr_29110_29183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (2))){
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(4),in$);
} else {
if((state_val_29077 === (23))){
var inst_29069 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29111_29186 = state_29076__$1;
(statearr_29111_29186[(2)] = inst_29069);

(statearr_29111_29186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (19))){
var inst_29055 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29112_29191 = state_29076__$1;
(statearr_29112_29191[(2)] = inst_29055);

(statearr_29112_29191[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (11))){
var inst_29022 = (state_29076[(9)]);
var inst_29038 = (state_29076[(7)]);
var inst_29038__$1 = cljs.core.seq.call(null,inst_29022);
var state_29076__$1 = (function (){var statearr_29113 = state_29076;
(statearr_29113[(7)] = inst_29038__$1);

return statearr_29113;
})();
if(inst_29038__$1){
var statearr_29114_29196 = state_29076__$1;
(statearr_29114_29196[(1)] = (14));

} else {
var statearr_29115_29197 = state_29076__$1;
(statearr_29115_29197[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (9))){
var inst_29062 = (state_29076[(2)]);
var inst_29063 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29076__$1 = (function (){var statearr_29116 = state_29076;
(statearr_29116[(15)] = inst_29062);

return statearr_29116;
})();
if(cljs.core.truth_(inst_29063)){
var statearr_29118_29198 = state_29076__$1;
(statearr_29118_29198[(1)] = (21));

} else {
var statearr_29119_29200 = state_29076__$1;
(statearr_29119_29200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (5))){
var inst_29014 = cljs.core.async.close_BANG_.call(null,out);
var state_29076__$1 = state_29076;
var statearr_29120_29202 = state_29076__$1;
(statearr_29120_29202[(2)] = inst_29014);

(statearr_29120_29202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (14))){
var inst_29038 = (state_29076[(7)]);
var inst_29040 = cljs.core.chunked_seq_QMARK_.call(null,inst_29038);
var state_29076__$1 = state_29076;
if(inst_29040){
var statearr_29121_29204 = state_29076__$1;
(statearr_29121_29204[(1)] = (17));

} else {
var statearr_29122_29205 = state_29076__$1;
(statearr_29122_29205[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (16))){
var inst_29058 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29123_29208 = state_29076__$1;
(statearr_29123_29208[(2)] = inst_29058);

(statearr_29123_29208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (10))){
var inst_29025 = (state_29076[(11)]);
var inst_29023 = (state_29076[(12)]);
var inst_29031 = cljs.core._nth.call(null,inst_29023,inst_29025);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29076__$1,(13),out,inst_29031);
} else {
if((state_val_29077 === (18))){
var inst_29038 = (state_29076[(7)]);
var inst_29049 = cljs.core.first.call(null,inst_29038);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29076__$1,(20),out,inst_29049);
} else {
if((state_val_29077 === (8))){
var inst_29024 = (state_29076[(8)]);
var inst_29025 = (state_29076[(11)]);
var inst_29027 = (inst_29025 < inst_29024);
var inst_29028 = inst_29027;
var state_29076__$1 = state_29076;
if(cljs.core.truth_(inst_29028)){
var statearr_29124_29216 = state_29076__$1;
(statearr_29124_29216[(1)] = (10));

} else {
var statearr_29125_29217 = state_29076__$1;
(statearr_29125_29217[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____0 = (function (){
var statearr_29126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29126[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____1 = (function (state_29076){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_29076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__26895__auto__ = e29127;
var statearr_29128_29221 = state_29076;
(statearr_29128_29221[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29222 = state_29076;
state_29076 = G__29222;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26892__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__))
})();
var state__27050__auto__ = (function (){var statearr_29131 = f__27049__auto__.call(null);
(statearr_29131[(6)] = c__27048__auto__);

return statearr_29131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__))
);

return c__27048__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29133 = arguments.length;
switch (G__29133) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29141 = arguments.length;
switch (G__29141) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29150 = arguments.length;
switch (G__29150) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___29286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___29286,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___29286,out){
return (function (state_29178){
var state_val_29179 = (state_29178[(1)]);
if((state_val_29179 === (7))){
var inst_29172 = (state_29178[(2)]);
var state_29178__$1 = state_29178;
var statearr_29181_29288 = state_29178__$1;
(statearr_29181_29288[(2)] = inst_29172);

(statearr_29181_29288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (1))){
var inst_29153 = null;
var state_29178__$1 = (function (){var statearr_29182 = state_29178;
(statearr_29182[(7)] = inst_29153);

return statearr_29182;
})();
var statearr_29184_29291 = state_29178__$1;
(statearr_29184_29291[(2)] = null);

(statearr_29184_29291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (4))){
var inst_29156 = (state_29178[(8)]);
var inst_29156__$1 = (state_29178[(2)]);
var inst_29157 = (inst_29156__$1 == null);
var inst_29159 = cljs.core.not.call(null,inst_29157);
var state_29178__$1 = (function (){var statearr_29187 = state_29178;
(statearr_29187[(8)] = inst_29156__$1);

return statearr_29187;
})();
if(inst_29159){
var statearr_29188_29295 = state_29178__$1;
(statearr_29188_29295[(1)] = (5));

} else {
var statearr_29189_29296 = state_29178__$1;
(statearr_29189_29296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (6))){
var state_29178__$1 = state_29178;
var statearr_29193_29298 = state_29178__$1;
(statearr_29193_29298[(2)] = null);

(statearr_29193_29298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (3))){
var inst_29174 = (state_29178[(2)]);
var inst_29176 = cljs.core.async.close_BANG_.call(null,out);
var state_29178__$1 = (function (){var statearr_29195 = state_29178;
(statearr_29195[(9)] = inst_29174);

return statearr_29195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29178__$1,inst_29176);
} else {
if((state_val_29179 === (2))){
var state_29178__$1 = state_29178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29178__$1,(4),ch);
} else {
if((state_val_29179 === (11))){
var inst_29156 = (state_29178[(8)]);
var inst_29166 = (state_29178[(2)]);
var inst_29153 = inst_29156;
var state_29178__$1 = (function (){var statearr_29199 = state_29178;
(statearr_29199[(7)] = inst_29153);

(statearr_29199[(10)] = inst_29166);

return statearr_29199;
})();
var statearr_29201_29312 = state_29178__$1;
(statearr_29201_29312[(2)] = null);

(statearr_29201_29312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (9))){
var inst_29156 = (state_29178[(8)]);
var state_29178__$1 = state_29178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29178__$1,(11),out,inst_29156);
} else {
if((state_val_29179 === (5))){
var inst_29153 = (state_29178[(7)]);
var inst_29156 = (state_29178[(8)]);
var inst_29161 = cljs.core._EQ_.call(null,inst_29156,inst_29153);
var state_29178__$1 = state_29178;
if(inst_29161){
var statearr_29206_29313 = state_29178__$1;
(statearr_29206_29313[(1)] = (8));

} else {
var statearr_29207_29314 = state_29178__$1;
(statearr_29207_29314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (10))){
var inst_29169 = (state_29178[(2)]);
var state_29178__$1 = state_29178;
var statearr_29209_29317 = state_29178__$1;
(statearr_29209_29317[(2)] = inst_29169);

(statearr_29209_29317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (8))){
var inst_29153 = (state_29178[(7)]);
var tmp29203 = inst_29153;
var inst_29153__$1 = tmp29203;
var state_29178__$1 = (function (){var statearr_29210 = state_29178;
(statearr_29210[(7)] = inst_29153__$1);

return statearr_29210;
})();
var statearr_29211_29318 = state_29178__$1;
(statearr_29211_29318[(2)] = null);

(statearr_29211_29318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___29286,out))
;
return ((function (switch__26891__auto__,c__27048__auto___29286,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_29215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29215[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_29215[(1)] = (1));

return statearr_29215;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_29178){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_29178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__26895__auto__ = e29218;
var statearr_29219_29327 = state_29178;
(statearr_29219_29327[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29178;
state_29178 = G__29330;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_29178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_29178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___29286,out))
})();
var state__27050__auto__ = (function (){var statearr_29220 = f__27049__auto__.call(null);
(statearr_29220[(6)] = c__27048__auto___29286);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___29286,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29225 = arguments.length;
switch (G__29225) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___29346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___29346,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___29346,out){
return (function (state_29278){
var state_val_29279 = (state_29278[(1)]);
if((state_val_29279 === (7))){
var inst_29273 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29287_29347 = state_29278__$1;
(statearr_29287_29347[(2)] = inst_29273);

(statearr_29287_29347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (1))){
var inst_29227 = (new Array(n));
var inst_29228 = inst_29227;
var inst_29229 = (0);
var state_29278__$1 = (function (){var statearr_29289 = state_29278;
(statearr_29289[(7)] = inst_29229);

(statearr_29289[(8)] = inst_29228);

return statearr_29289;
})();
var statearr_29290_29356 = state_29278__$1;
(statearr_29290_29356[(2)] = null);

(statearr_29290_29356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (4))){
var inst_29232 = (state_29278[(9)]);
var inst_29232__$1 = (state_29278[(2)]);
var inst_29233 = (inst_29232__$1 == null);
var inst_29234 = cljs.core.not.call(null,inst_29233);
var state_29278__$1 = (function (){var statearr_29292 = state_29278;
(statearr_29292[(9)] = inst_29232__$1);

return statearr_29292;
})();
if(inst_29234){
var statearr_29293_29375 = state_29278__$1;
(statearr_29293_29375[(1)] = (5));

} else {
var statearr_29294_29378 = state_29278__$1;
(statearr_29294_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (15))){
var inst_29267 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29297_29392 = state_29278__$1;
(statearr_29297_29392[(2)] = inst_29267);

(statearr_29297_29392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (13))){
var state_29278__$1 = state_29278;
var statearr_29306_29395 = state_29278__$1;
(statearr_29306_29395[(2)] = null);

(statearr_29306_29395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (6))){
var inst_29229 = (state_29278[(7)]);
var inst_29263 = (inst_29229 > (0));
var state_29278__$1 = state_29278;
if(cljs.core.truth_(inst_29263)){
var statearr_29307_29396 = state_29278__$1;
(statearr_29307_29396[(1)] = (12));

} else {
var statearr_29308_29397 = state_29278__$1;
(statearr_29308_29397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (3))){
var inst_29276 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29278__$1,inst_29276);
} else {
if((state_val_29279 === (12))){
var inst_29228 = (state_29278[(8)]);
var inst_29265 = cljs.core.vec.call(null,inst_29228);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29278__$1,(15),out,inst_29265);
} else {
if((state_val_29279 === (2))){
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29278__$1,(4),ch);
} else {
if((state_val_29279 === (11))){
var inst_29251 = (state_29278[(2)]);
var inst_29252 = (new Array(n));
var inst_29228 = inst_29252;
var inst_29229 = (0);
var state_29278__$1 = (function (){var statearr_29315 = state_29278;
(statearr_29315[(7)] = inst_29229);

(statearr_29315[(10)] = inst_29251);

(statearr_29315[(8)] = inst_29228);

return statearr_29315;
})();
var statearr_29316_29406 = state_29278__$1;
(statearr_29316_29406[(2)] = null);

(statearr_29316_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (9))){
var inst_29228 = (state_29278[(8)]);
var inst_29249 = cljs.core.vec.call(null,inst_29228);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29278__$1,(11),out,inst_29249);
} else {
if((state_val_29279 === (5))){
var inst_29229 = (state_29278[(7)]);
var inst_29228 = (state_29278[(8)]);
var inst_29237 = (state_29278[(11)]);
var inst_29232 = (state_29278[(9)]);
var inst_29236 = (inst_29228[inst_29229] = inst_29232);
var inst_29237__$1 = (inst_29229 + (1));
var inst_29238 = (inst_29237__$1 < n);
var state_29278__$1 = (function (){var statearr_29319 = state_29278;
(statearr_29319[(11)] = inst_29237__$1);

(statearr_29319[(12)] = inst_29236);

return statearr_29319;
})();
if(cljs.core.truth_(inst_29238)){
var statearr_29324_29412 = state_29278__$1;
(statearr_29324_29412[(1)] = (8));

} else {
var statearr_29325_29413 = state_29278__$1;
(statearr_29325_29413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (14))){
var inst_29270 = (state_29278[(2)]);
var inst_29271 = cljs.core.async.close_BANG_.call(null,out);
var state_29278__$1 = (function (){var statearr_29328 = state_29278;
(statearr_29328[(13)] = inst_29270);

return statearr_29328;
})();
var statearr_29329_29415 = state_29278__$1;
(statearr_29329_29415[(2)] = inst_29271);

(statearr_29329_29415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (10))){
var inst_29255 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29331_29419 = state_29278__$1;
(statearr_29331_29419[(2)] = inst_29255);

(statearr_29331_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (8))){
var inst_29228 = (state_29278[(8)]);
var inst_29237 = (state_29278[(11)]);
var tmp29326 = inst_29228;
var inst_29228__$1 = tmp29326;
var inst_29229 = inst_29237;
var state_29278__$1 = (function (){var statearr_29332 = state_29278;
(statearr_29332[(7)] = inst_29229);

(statearr_29332[(8)] = inst_29228__$1);

return statearr_29332;
})();
var statearr_29333_29421 = state_29278__$1;
(statearr_29333_29421[(2)] = null);

(statearr_29333_29421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___29346,out))
;
return ((function (switch__26891__auto__,c__27048__auto___29346,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_29334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29334[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_29334[(1)] = (1));

return statearr_29334;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_29278){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_29278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e29335){if((e29335 instanceof Object)){
var ex__26895__auto__ = e29335;
var statearr_29336_29424 = state_29278;
(statearr_29336_29424[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29427 = state_29278;
state_29278 = G__29427;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_29278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_29278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___29346,out))
})();
var state__27050__auto__ = (function (){var statearr_29341 = f__27049__auto__.call(null);
(statearr_29341[(6)] = c__27048__auto___29346);

return statearr_29341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___29346,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29344 = arguments.length;
switch (G__29344) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27048__auto___29441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___29441,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___29441,out){
return (function (state_29393){
var state_val_29394 = (state_29393[(1)]);
if((state_val_29394 === (7))){
var inst_29388 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29398_29444 = state_29393__$1;
(statearr_29398_29444[(2)] = inst_29388);

(statearr_29398_29444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (1))){
var inst_29348 = [];
var inst_29349 = inst_29348;
var inst_29350 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29393__$1 = (function (){var statearr_29400 = state_29393;
(statearr_29400[(7)] = inst_29350);

(statearr_29400[(8)] = inst_29349);

return statearr_29400;
})();
var statearr_29402_29445 = state_29393__$1;
(statearr_29402_29445[(2)] = null);

(statearr_29402_29445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (4))){
var inst_29353 = (state_29393[(9)]);
var inst_29353__$1 = (state_29393[(2)]);
var inst_29354 = (inst_29353__$1 == null);
var inst_29355 = cljs.core.not.call(null,inst_29354);
var state_29393__$1 = (function (){var statearr_29403 = state_29393;
(statearr_29403[(9)] = inst_29353__$1);

return statearr_29403;
})();
if(inst_29355){
var statearr_29404_29446 = state_29393__$1;
(statearr_29404_29446[(1)] = (5));

} else {
var statearr_29405_29448 = state_29393__$1;
(statearr_29405_29448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (15))){
var inst_29382 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29407_29452 = state_29393__$1;
(statearr_29407_29452[(2)] = inst_29382);

(statearr_29407_29452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (13))){
var state_29393__$1 = state_29393;
var statearr_29408_29453 = state_29393__$1;
(statearr_29408_29453[(2)] = null);

(statearr_29408_29453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (6))){
var inst_29349 = (state_29393[(8)]);
var inst_29376 = inst_29349.length;
var inst_29377 = (inst_29376 > (0));
var state_29393__$1 = state_29393;
if(cljs.core.truth_(inst_29377)){
var statearr_29410_29456 = state_29393__$1;
(statearr_29410_29456[(1)] = (12));

} else {
var statearr_29411_29457 = state_29393__$1;
(statearr_29411_29457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (3))){
var inst_29390 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29393__$1,inst_29390);
} else {
if((state_val_29394 === (12))){
var inst_29349 = (state_29393[(8)]);
var inst_29380 = cljs.core.vec.call(null,inst_29349);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29393__$1,(15),out,inst_29380);
} else {
if((state_val_29394 === (2))){
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29393__$1,(4),ch);
} else {
if((state_val_29394 === (11))){
var inst_29358 = (state_29393[(10)]);
var inst_29353 = (state_29393[(9)]);
var inst_29368 = (state_29393[(2)]);
var inst_29369 = [];
var inst_29370 = inst_29369.push(inst_29353);
var inst_29349 = inst_29369;
var inst_29350 = inst_29358;
var state_29393__$1 = (function (){var statearr_29420 = state_29393;
(statearr_29420[(7)] = inst_29350);

(statearr_29420[(11)] = inst_29368);

(statearr_29420[(8)] = inst_29349);

(statearr_29420[(12)] = inst_29370);

return statearr_29420;
})();
var statearr_29422_29463 = state_29393__$1;
(statearr_29422_29463[(2)] = null);

(statearr_29422_29463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (9))){
var inst_29349 = (state_29393[(8)]);
var inst_29366 = cljs.core.vec.call(null,inst_29349);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29393__$1,(11),out,inst_29366);
} else {
if((state_val_29394 === (5))){
var inst_29350 = (state_29393[(7)]);
var inst_29358 = (state_29393[(10)]);
var inst_29353 = (state_29393[(9)]);
var inst_29358__$1 = f.call(null,inst_29353);
var inst_29359 = cljs.core._EQ_.call(null,inst_29358__$1,inst_29350);
var inst_29360 = cljs.core.keyword_identical_QMARK_.call(null,inst_29350,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29361 = ((inst_29359) || (inst_29360));
var state_29393__$1 = (function (){var statearr_29423 = state_29393;
(statearr_29423[(10)] = inst_29358__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29361)){
var statearr_29425_29464 = state_29393__$1;
(statearr_29425_29464[(1)] = (8));

} else {
var statearr_29426_29465 = state_29393__$1;
(statearr_29426_29465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (14))){
var inst_29385 = (state_29393[(2)]);
var inst_29386 = cljs.core.async.close_BANG_.call(null,out);
var state_29393__$1 = (function (){var statearr_29429 = state_29393;
(statearr_29429[(13)] = inst_29385);

return statearr_29429;
})();
var statearr_29430_29466 = state_29393__$1;
(statearr_29430_29466[(2)] = inst_29386);

(statearr_29430_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (10))){
var inst_29373 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29431_29467 = state_29393__$1;
(statearr_29431_29467[(2)] = inst_29373);

(statearr_29431_29467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29394 === (8))){
var inst_29358 = (state_29393[(10)]);
var inst_29353 = (state_29393[(9)]);
var inst_29349 = (state_29393[(8)]);
var inst_29363 = inst_29349.push(inst_29353);
var tmp29428 = inst_29349;
var inst_29349__$1 = tmp29428;
var inst_29350 = inst_29358;
var state_29393__$1 = (function (){var statearr_29432 = state_29393;
(statearr_29432[(7)] = inst_29350);

(statearr_29432[(8)] = inst_29349__$1);

(statearr_29432[(14)] = inst_29363);

return statearr_29432;
})();
var statearr_29433_29468 = state_29393__$1;
(statearr_29433_29468[(2)] = null);

(statearr_29433_29468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27048__auto___29441,out))
;
return ((function (switch__26891__auto__,c__27048__auto___29441,out){
return (function() {
var cljs$core$async$state_machine__26892__auto__ = null;
var cljs$core$async$state_machine__26892__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$state_machine__26892__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$state_machine__26892__auto____1 = (function (state_29393){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_29393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e29435){if((e29435 instanceof Object)){
var ex__26895__auto__ = e29435;
var statearr_29436_29472 = state_29393;
(statearr_29436_29472[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29473 = state_29393;
state_29393 = G__29473;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
cljs$core$async$state_machine__26892__auto__ = function(state_29393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26892__auto____1.call(this,state_29393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26892__auto____0;
cljs$core$async$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26892__auto____1;
return cljs$core$async$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___29441,out))
})();
var state__27050__auto__ = (function (){var statearr_29437 = f__27049__auto__.call(null);
(statearr_29437[(6)] = c__27048__auto___29441);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___29441,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547626117519
