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
var G__27086 = arguments.length;
switch (G__27086) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27094 = (function (f,blockable,meta27095){
this.f = f;
this.blockable = blockable;
this.meta27095 = meta27095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27096,meta27095__$1){
var self__ = this;
var _27096__$1 = this;
return (new cljs.core.async.t_cljs$core$async27094(self__.f,self__.blockable,meta27095__$1));
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27096){
var self__ = this;
var _27096__$1 = this;
return self__.meta27095;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27095","meta27095",-407470526,null)], null);
});

cljs.core.async.t_cljs$core$async27094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27094";

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27094");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27094.
 */
cljs.core.async.__GT_t_cljs$core$async27094 = (function cljs$core$async$__GT_t_cljs$core$async27094(f__$1,blockable__$1,meta27095){
return (new cljs.core.async.t_cljs$core$async27094(f__$1,blockable__$1,meta27095));
});

}

return (new cljs.core.async.t_cljs$core$async27094(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27121 = arguments.length;
switch (G__27121) {
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
var G__27134 = arguments.length;
switch (G__27134) {
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
var G__27140 = arguments.length;
switch (G__27140) {
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
var val_27153 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27153);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27153,ret){
return (function (){
return fn1.call(null,val_27153);
});})(val_27153,ret))
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
var G__27159 = arguments.length;
switch (G__27159) {
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
var n__4518__auto___27170 = n;
var x_27171 = (0);
while(true){
if((x_27171 < n__4518__auto___27170)){
(a[x_27171] = (0));

var G__27172 = (x_27171 + (1));
x_27171 = G__27172;
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

var G__27176 = (i + (1));
i = G__27176;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27173 = (function (flag,meta27174){
this.flag = flag;
this.meta27174 = meta27174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27175,meta27174__$1){
var self__ = this;
var _27175__$1 = this;
return (new cljs.core.async.t_cljs$core$async27173(self__.flag,meta27174__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27175){
var self__ = this;
var _27175__$1 = this;
return self__.meta27174;
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27174","meta27174",-1370571693,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27173";

cljs.core.async.t_cljs$core$async27173.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27173");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27173.
 */
cljs.core.async.__GT_t_cljs$core$async27173 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27173(flag__$1,meta27174){
return (new cljs.core.async.t_cljs$core$async27173(flag__$1,meta27174));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27173(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27179 = (function (flag,cb,meta27180){
this.flag = flag;
this.cb = cb;
this.meta27180 = meta27180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27181,meta27180__$1){
var self__ = this;
var _27181__$1 = this;
return (new cljs.core.async.t_cljs$core$async27179(self__.flag,self__.cb,meta27180__$1));
});

cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27181){
var self__ = this;
var _27181__$1 = this;
return self__.meta27180;
});

cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27180","meta27180",-701449109,null)], null);
});

cljs.core.async.t_cljs$core$async27179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27179";

cljs.core.async.t_cljs$core$async27179.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27179");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27179.
 */
cljs.core.async.__GT_t_cljs$core$async27179 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27179(flag__$1,cb__$1,meta27180){
return (new cljs.core.async.t_cljs$core$async27179(flag__$1,cb__$1,meta27180));
});

}

return (new cljs.core.async.t_cljs$core$async27179(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27183_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27184_SHARP_,port], null));
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
var G__27191 = (i + (1));
i = G__27191;
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
var len__4641__auto___27192 = arguments.length;
var i__4642__auto___27193 = (0);
while(true){
if((i__4642__auto___27193 < len__4641__auto___27192)){
args__4647__auto__.push((arguments[i__4642__auto___27193]));

var G__27194 = (i__4642__auto___27193 + (1));
i__4642__auto___27193 = G__27194;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27188){
var map__27189 = p__27188;
var map__27189__$1 = (((((!((map__27189 == null))))?(((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27189):map__27189);
var opts = map__27189__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27186){
var G__27187 = cljs.core.first.call(null,seq27186);
var seq27186__$1 = cljs.core.next.call(null,seq27186);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27187,seq27186__$1);
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
var G__27197 = arguments.length;
switch (G__27197) {
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
var c__27023__auto___27258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27258){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___27258){
return (function (state_27224){
var state_val_27226 = (state_27224[(1)]);
if((state_val_27226 === (7))){
var inst_27220 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27228_27259 = state_27224__$1;
(statearr_27228_27259[(2)] = inst_27220);

(statearr_27228_27259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (1))){
var state_27224__$1 = state_27224;
var statearr_27229_27260 = state_27224__$1;
(statearr_27229_27260[(2)] = null);

(statearr_27229_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (4))){
var inst_27202 = (state_27224[(7)]);
var inst_27202__$1 = (state_27224[(2)]);
var inst_27203 = (inst_27202__$1 == null);
var state_27224__$1 = (function (){var statearr_27233 = state_27224;
(statearr_27233[(7)] = inst_27202__$1);

return statearr_27233;
})();
if(cljs.core.truth_(inst_27203)){
var statearr_27234_27262 = state_27224__$1;
(statearr_27234_27262[(1)] = (5));

} else {
var statearr_27235_27263 = state_27224__$1;
(statearr_27235_27263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (13))){
var state_27224__$1 = state_27224;
var statearr_27236_27268 = state_27224__$1;
(statearr_27236_27268[(2)] = null);

(statearr_27236_27268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (6))){
var inst_27202 = (state_27224[(7)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(11),to,inst_27202);
} else {
if((state_val_27226 === (3))){
var inst_27222 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27226 === (12))){
var state_27224__$1 = state_27224;
var statearr_27238_27271 = state_27224__$1;
(statearr_27238_27271[(2)] = null);

(statearr_27238_27271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (2))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(4),from);
} else {
if((state_val_27226 === (11))){
var inst_27213 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27213)){
var statearr_27240_27276 = state_27224__$1;
(statearr_27240_27276[(1)] = (12));

} else {
var statearr_27241_27277 = state_27224__$1;
(statearr_27241_27277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (9))){
var state_27224__$1 = state_27224;
var statearr_27242_27280 = state_27224__$1;
(statearr_27242_27280[(2)] = null);

(statearr_27242_27280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (5))){
var state_27224__$1 = state_27224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27243_27283 = state_27224__$1;
(statearr_27243_27283[(1)] = (8));

} else {
var statearr_27244_27284 = state_27224__$1;
(statearr_27244_27284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (14))){
var inst_27218 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27247_27286 = state_27224__$1;
(statearr_27247_27286[(2)] = inst_27218);

(statearr_27247_27286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (10))){
var inst_27210 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27248_27287 = state_27224__$1;
(statearr_27248_27287[(2)] = inst_27210);

(statearr_27248_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (8))){
var inst_27206 = cljs.core.async.close_BANG_.call(null,to);
var state_27224__$1 = state_27224;
var statearr_27250_27289 = state_27224__$1;
(statearr_27250_27289[(2)] = inst_27206);

(statearr_27250_27289[(1)] = (10));


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
});})(c__27023__auto___27258))
;
return ((function (switch__26857__auto__,c__27023__auto___27258){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_27224){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__26861__auto__ = e27253;
var statearr_27254_27292 = state_27224;
(statearr_27254_27292[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27224;
state_27224 = G__27295;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___27258))
})();
var state__27025__auto__ = (function (){var statearr_27256 = f__27024__auto__.call(null);
(statearr_27256[(6)] = c__27023__auto___27258);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27258))
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
return (function (p__27264){
var vec__27265 = p__27264;
var v = cljs.core.nth.call(null,vec__27265,(0),null);
var p = cljs.core.nth.call(null,vec__27265,(1),null);
var job = vec__27265;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27023__auto___27537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results){
return (function (state_27274){
var state_val_27275 = (state_27274[(1)]);
if((state_val_27275 === (1))){
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27274__$1,(2),res,v);
} else {
if((state_val_27275 === (2))){
var inst_27270 = (state_27274[(2)]);
var inst_27272 = cljs.core.async.close_BANG_.call(null,res);
var state_27274__$1 = (function (){var statearr_27285 = state_27274;
(statearr_27285[(7)] = inst_27270);

return statearr_27285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27274__$1,inst_27272);
} else {
return null;
}
}
});})(c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results))
;
return ((function (switch__26857__auto__,c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_27288 = [null,null,null,null,null,null,null,null];
(statearr_27288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__);

(statearr_27288[(1)] = (1));

return statearr_27288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1 = (function (state_27274){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27290){if((e27290 instanceof Object)){
var ex__26861__auto__ = e27290;
var statearr_27291_27545 = state_27274;
(statearr_27291_27545[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27547 = state_27274;
state_27274 = G__27547;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = function(state_27274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1.call(this,state_27274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results))
})();
var state__27025__auto__ = (function (){var statearr_27293 = f__27024__auto__.call(null);
(statearr_27293[(6)] = c__27023__auto___27537);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27537,res,vec__27265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27296){
var vec__27297 = p__27296;
var v = cljs.core.nth.call(null,vec__27297,(0),null);
var p = cljs.core.nth.call(null,vec__27297,(1),null);
var job = vec__27297;
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
var n__4518__auto___27554 = n;
var __27555 = (0);
while(true){
if((__27555 < n__4518__auto___27554)){
var G__27300_27557 = type;
var G__27300_27558__$1 = (((G__27300_27557 instanceof cljs.core.Keyword))?G__27300_27557.fqn:null);
switch (G__27300_27558__$1) {
case "compute":
var c__27023__auto___27564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27555,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (__27555,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function (state_27314){
var state_val_27315 = (state_27314[(1)]);
if((state_val_27315 === (1))){
var state_27314__$1 = state_27314;
var statearr_27316_27589 = state_27314__$1;
(statearr_27316_27589[(2)] = null);

(statearr_27316_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (2))){
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(4),jobs);
} else {
if((state_val_27315 === (3))){
var inst_27312 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27314__$1,inst_27312);
} else {
if((state_val_27315 === (4))){
var inst_27303 = (state_27314[(2)]);
var inst_27304 = process.call(null,inst_27303);
var state_27314__$1 = state_27314;
if(cljs.core.truth_(inst_27304)){
var statearr_27318_27596 = state_27314__$1;
(statearr_27318_27596[(1)] = (5));

} else {
var statearr_27319_27598 = state_27314__$1;
(statearr_27319_27598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (5))){
var state_27314__$1 = state_27314;
var statearr_27320_27601 = state_27314__$1;
(statearr_27320_27601[(2)] = null);

(statearr_27320_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (6))){
var state_27314__$1 = state_27314;
var statearr_27323_27602 = state_27314__$1;
(statearr_27323_27602[(2)] = null);

(statearr_27323_27602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (7))){
var inst_27310 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27325_27605 = state_27314__$1;
(statearr_27325_27605[(2)] = inst_27310);

(statearr_27325_27605[(1)] = (3));


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
});})(__27555,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
;
return ((function (__27555,switch__26857__auto__,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_27327 = [null,null,null,null,null,null,null];
(statearr_27327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__);

(statearr_27327[(1)] = (1));

return statearr_27327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1 = (function (state_27314){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27329){if((e27329 instanceof Object)){
var ex__26861__auto__ = e27329;
var statearr_27330_27608 = state_27314;
(statearr_27330_27608[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27609 = state_27314;
state_27314 = G__27609;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = function(state_27314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1.call(this,state_27314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__;
})()
;})(__27555,switch__26857__auto__,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27333 = f__27024__auto__.call(null);
(statearr_27333[(6)] = c__27023__auto___27564);

return statearr_27333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(__27555,c__27023__auto___27564,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
);


break;
case "async":
var c__27023__auto___27611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27555,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (__27555,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function (state_27348){
var state_val_27349 = (state_27348[(1)]);
if((state_val_27349 === (1))){
var state_27348__$1 = state_27348;
var statearr_27354_27615 = state_27348__$1;
(statearr_27354_27615[(2)] = null);

(statearr_27354_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27349 === (2))){
var state_27348__$1 = state_27348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27348__$1,(4),jobs);
} else {
if((state_val_27349 === (3))){
var inst_27346 = (state_27348[(2)]);
var state_27348__$1 = state_27348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27348__$1,inst_27346);
} else {
if((state_val_27349 === (4))){
var inst_27337 = (state_27348[(2)]);
var inst_27339 = async.call(null,inst_27337);
var state_27348__$1 = state_27348;
if(cljs.core.truth_(inst_27339)){
var statearr_27359_27618 = state_27348__$1;
(statearr_27359_27618[(1)] = (5));

} else {
var statearr_27360_27619 = state_27348__$1;
(statearr_27360_27619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27349 === (5))){
var state_27348__$1 = state_27348;
var statearr_27361_27621 = state_27348__$1;
(statearr_27361_27621[(2)] = null);

(statearr_27361_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27349 === (6))){
var state_27348__$1 = state_27348;
var statearr_27364_27623 = state_27348__$1;
(statearr_27364_27623[(2)] = null);

(statearr_27364_27623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27349 === (7))){
var inst_27344 = (state_27348[(2)]);
var state_27348__$1 = state_27348;
var statearr_27367_27624 = state_27348__$1;
(statearr_27367_27624[(2)] = inst_27344);

(statearr_27367_27624[(1)] = (3));


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
});})(__27555,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
;
return ((function (__27555,switch__26857__auto__,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_27369 = [null,null,null,null,null,null,null];
(statearr_27369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__);

(statearr_27369[(1)] = (1));

return statearr_27369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1 = (function (state_27348){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27371){if((e27371 instanceof Object)){
var ex__26861__auto__ = e27371;
var statearr_27372_27628 = state_27348;
(statearr_27372_27628[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27348;
state_27348 = G__27631;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = function(state_27348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1.call(this,state_27348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__;
})()
;})(__27555,switch__26857__auto__,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27377 = f__27024__auto__.call(null);
(statearr_27377[(6)] = c__27023__auto___27611);

return statearr_27377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(__27555,c__27023__auto___27611,G__27300_27557,G__27300_27558__$1,n__4518__auto___27554,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27300_27558__$1)].join('')));

}

var G__27632 = (__27555 + (1));
__27555 = G__27632;
continue;
} else {
}
break;
}

var c__27023__auto___27633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27633,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___27633,jobs,results,process,async){
return (function (state_27405){
var state_val_27406 = (state_27405[(1)]);
if((state_val_27406 === (7))){
var inst_27401 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
var statearr_27412_27634 = state_27405__$1;
(statearr_27412_27634[(2)] = inst_27401);

(statearr_27412_27634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (1))){
var state_27405__$1 = state_27405;
var statearr_27413_27637 = state_27405__$1;
(statearr_27413_27637[(2)] = null);

(statearr_27413_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (4))){
var inst_27383 = (state_27405[(7)]);
var inst_27383__$1 = (state_27405[(2)]);
var inst_27385 = (inst_27383__$1 == null);
var state_27405__$1 = (function (){var statearr_27414 = state_27405;
(statearr_27414[(7)] = inst_27383__$1);

return statearr_27414;
})();
if(cljs.core.truth_(inst_27385)){
var statearr_27416_27651 = state_27405__$1;
(statearr_27416_27651[(1)] = (5));

} else {
var statearr_27418_27657 = state_27405__$1;
(statearr_27418_27657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (6))){
var inst_27383 = (state_27405[(7)]);
var inst_27389 = (state_27405[(8)]);
var inst_27389__$1 = cljs.core.async.chan.call(null,(1));
var inst_27392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27393 = [inst_27383,inst_27389__$1];
var inst_27394 = (new cljs.core.PersistentVector(null,2,(5),inst_27392,inst_27393,null));
var state_27405__$1 = (function (){var statearr_27420 = state_27405;
(statearr_27420[(8)] = inst_27389__$1);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27405__$1,(8),jobs,inst_27394);
} else {
if((state_val_27406 === (3))){
var inst_27403 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27405__$1,inst_27403);
} else {
if((state_val_27406 === (2))){
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27405__$1,(4),from);
} else {
if((state_val_27406 === (9))){
var inst_27398 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27423 = state_27405;
(statearr_27423[(9)] = inst_27398);

return statearr_27423;
})();
var statearr_27424_27664 = state_27405__$1;
(statearr_27424_27664[(2)] = null);

(statearr_27424_27664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (5))){
var inst_27387 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27405__$1 = state_27405;
var statearr_27425_27666 = state_27405__$1;
(statearr_27425_27666[(2)] = inst_27387);

(statearr_27425_27666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (8))){
var inst_27389 = (state_27405[(8)]);
var inst_27396 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27426 = state_27405;
(statearr_27426[(10)] = inst_27396);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27405__$1,(9),results,inst_27389);
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
});})(c__27023__auto___27633,jobs,results,process,async))
;
return ((function (switch__26857__auto__,c__27023__auto___27633,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_27430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__);

(statearr_27430[(1)] = (1));

return statearr_27430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1 = (function (state_27405){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27431){if((e27431 instanceof Object)){
var ex__26861__auto__ = e27431;
var statearr_27432_27673 = state_27405;
(statearr_27432_27673[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27674 = state_27405;
state_27405 = G__27674;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = function(state_27405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1.call(this,state_27405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___27633,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27435 = f__27024__auto__.call(null);
(statearr_27435[(6)] = c__27023__auto___27633);

return statearr_27435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27633,jobs,results,process,async))
);


var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__,jobs,results,process,async){
return (function (state_27478){
var state_val_27480 = (state_27478[(1)]);
if((state_val_27480 === (7))){
var inst_27473 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27483_27681 = state_27478__$1;
(statearr_27483_27681[(2)] = inst_27473);

(statearr_27483_27681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (20))){
var state_27478__$1 = state_27478;
var statearr_27484_27684 = state_27478__$1;
(statearr_27484_27684[(2)] = null);

(statearr_27484_27684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var state_27478__$1 = state_27478;
var statearr_27485_27686 = state_27478__$1;
(statearr_27485_27686[(2)] = null);

(statearr_27485_27686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27441 = (state_27478[(7)]);
var inst_27441__$1 = (state_27478[(2)]);
var inst_27442 = (inst_27441__$1 == null);
var state_27478__$1 = (function (){var statearr_27487 = state_27478;
(statearr_27487[(7)] = inst_27441__$1);

return statearr_27487;
})();
if(cljs.core.truth_(inst_27442)){
var statearr_27488_27692 = state_27478__$1;
(statearr_27488_27692[(1)] = (5));

} else {
var statearr_27489_27693 = state_27478__$1;
(statearr_27489_27693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (15))){
var inst_27454 = (state_27478[(8)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27478__$1,(18),to,inst_27454);
} else {
if((state_val_27480 === (21))){
var inst_27468 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27491_27696 = state_27478__$1;
(statearr_27491_27696[(2)] = inst_27468);

(statearr_27491_27696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (13))){
var inst_27470 = (state_27478[(2)]);
var state_27478__$1 = (function (){var statearr_27494 = state_27478;
(statearr_27494[(9)] = inst_27470);

return statearr_27494;
})();
var statearr_27496_27707 = state_27478__$1;
(statearr_27496_27707[(2)] = null);

(statearr_27496_27707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var inst_27441 = (state_27478[(7)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27478__$1,(11),inst_27441);
} else {
if((state_val_27480 === (17))){
var inst_27463 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
if(cljs.core.truth_(inst_27463)){
var statearr_27497_27710 = state_27478__$1;
(statearr_27497_27710[(1)] = (19));

} else {
var statearr_27498_27711 = state_27478__$1;
(statearr_27498_27711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (3))){
var inst_27475 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27478__$1,inst_27475);
} else {
if((state_val_27480 === (12))){
var inst_27451 = (state_27478[(10)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27478__$1,(14),inst_27451);
} else {
if((state_val_27480 === (2))){
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27478__$1,(4),results);
} else {
if((state_val_27480 === (19))){
var state_27478__$1 = state_27478;
var statearr_27500_27716 = state_27478__$1;
(statearr_27500_27716[(2)] = null);

(statearr_27500_27716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (11))){
var inst_27451 = (state_27478[(2)]);
var state_27478__$1 = (function (){var statearr_27502 = state_27478;
(statearr_27502[(10)] = inst_27451);

return statearr_27502;
})();
var statearr_27503_27721 = state_27478__$1;
(statearr_27503_27721[(2)] = null);

(statearr_27503_27721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (9))){
var state_27478__$1 = state_27478;
var statearr_27506_27724 = state_27478__$1;
(statearr_27506_27724[(2)] = null);

(statearr_27506_27724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var state_27478__$1 = state_27478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27508_27726 = state_27478__$1;
(statearr_27508_27726[(1)] = (8));

} else {
var statearr_27509_27727 = state_27478__$1;
(statearr_27509_27727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (14))){
var inst_27457 = (state_27478[(11)]);
var inst_27454 = (state_27478[(8)]);
var inst_27454__$1 = (state_27478[(2)]);
var inst_27456 = (inst_27454__$1 == null);
var inst_27457__$1 = cljs.core.not.call(null,inst_27456);
var state_27478__$1 = (function (){var statearr_27510 = state_27478;
(statearr_27510[(11)] = inst_27457__$1);

(statearr_27510[(8)] = inst_27454__$1);

return statearr_27510;
})();
if(inst_27457__$1){
var statearr_27512_27751 = state_27478__$1;
(statearr_27512_27751[(1)] = (15));

} else {
var statearr_27513_27758 = state_27478__$1;
(statearr_27513_27758[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (16))){
var inst_27457 = (state_27478[(11)]);
var state_27478__$1 = state_27478;
var statearr_27514_27761 = state_27478__$1;
(statearr_27514_27761[(2)] = inst_27457);

(statearr_27514_27761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var inst_27448 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27517_27763 = state_27478__$1;
(statearr_27517_27763[(2)] = inst_27448);

(statearr_27517_27763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (18))){
var inst_27460 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27520_27767 = state_27478__$1;
(statearr_27520_27767[(2)] = inst_27460);

(statearr_27520_27767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27445 = cljs.core.async.close_BANG_.call(null,to);
var state_27478__$1 = state_27478;
var statearr_27521_27770 = state_27478__$1;
(statearr_27521_27770[(2)] = inst_27445);

(statearr_27521_27770[(1)] = (10));


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
});})(c__27023__auto__,jobs,results,process,async))
;
return ((function (switch__26857__auto__,c__27023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_27523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__);

(statearr_27523[(1)] = (1));

return statearr_27523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1 = (function (state_27478){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27524){if((e27524 instanceof Object)){
var ex__26861__auto__ = e27524;
var statearr_27527_27779 = state_27478;
(statearr_27527_27779[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27781 = state_27478;
state_27478 = G__27781;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__ = function(state_27478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1.call(this,state_27478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27529 = f__27024__auto__.call(null);
(statearr_27529[(6)] = c__27023__auto__);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,jobs,results,process,async))
);

return c__27023__auto__;
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
var G__27533 = arguments.length;
switch (G__27533) {
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
var G__27539 = arguments.length;
switch (G__27539) {
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
var G__27550 = arguments.length;
switch (G__27550) {
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
var c__27023__auto___27807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27807,tc,fc){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___27807,tc,fc){
return (function (state_27586){
var state_val_27587 = (state_27586[(1)]);
if((state_val_27587 === (7))){
var inst_27582 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
var statearr_27591_27808 = state_27586__$1;
(statearr_27591_27808[(2)] = inst_27582);

(statearr_27591_27808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (1))){
var state_27586__$1 = state_27586;
var statearr_27594_27811 = state_27586__$1;
(statearr_27594_27811[(2)] = null);

(statearr_27594_27811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (4))){
var inst_27560 = (state_27586[(7)]);
var inst_27560__$1 = (state_27586[(2)]);
var inst_27561 = (inst_27560__$1 == null);
var state_27586__$1 = (function (){var statearr_27595 = state_27586;
(statearr_27595[(7)] = inst_27560__$1);

return statearr_27595;
})();
if(cljs.core.truth_(inst_27561)){
var statearr_27597_27813 = state_27586__$1;
(statearr_27597_27813[(1)] = (5));

} else {
var statearr_27599_27815 = state_27586__$1;
(statearr_27599_27815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (13))){
var state_27586__$1 = state_27586;
var statearr_27600_27816 = state_27586__$1;
(statearr_27600_27816[(2)] = null);

(statearr_27600_27816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (6))){
var inst_27560 = (state_27586[(7)]);
var inst_27569 = p.call(null,inst_27560);
var state_27586__$1 = state_27586;
if(cljs.core.truth_(inst_27569)){
var statearr_27603_27817 = state_27586__$1;
(statearr_27603_27817[(1)] = (9));

} else {
var statearr_27604_27820 = state_27586__$1;
(statearr_27604_27820[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (3))){
var inst_27584 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27586__$1,inst_27584);
} else {
if((state_val_27587 === (12))){
var state_27586__$1 = state_27586;
var statearr_27607_27822 = state_27586__$1;
(statearr_27607_27822[(2)] = null);

(statearr_27607_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (2))){
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27586__$1,(4),ch);
} else {
if((state_val_27587 === (11))){
var inst_27560 = (state_27586[(7)]);
var inst_27573 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27586__$1,(8),inst_27573,inst_27560);
} else {
if((state_val_27587 === (9))){
var state_27586__$1 = state_27586;
var statearr_27610_27827 = state_27586__$1;
(statearr_27610_27827[(2)] = tc);

(statearr_27610_27827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (5))){
var inst_27565 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27566 = cljs.core.async.close_BANG_.call(null,fc);
var state_27586__$1 = (function (){var statearr_27612 = state_27586;
(statearr_27612[(8)] = inst_27565);

return statearr_27612;
})();
var statearr_27613_27830 = state_27586__$1;
(statearr_27613_27830[(2)] = inst_27566);

(statearr_27613_27830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (14))){
var inst_27580 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
var statearr_27614_27832 = state_27586__$1;
(statearr_27614_27832[(2)] = inst_27580);

(statearr_27614_27832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (10))){
var state_27586__$1 = state_27586;
var statearr_27617_27833 = state_27586__$1;
(statearr_27617_27833[(2)] = fc);

(statearr_27617_27833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (8))){
var inst_27575 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
if(cljs.core.truth_(inst_27575)){
var statearr_27620_27835 = state_27586__$1;
(statearr_27620_27835[(1)] = (12));

} else {
var statearr_27622_27836 = state_27586__$1;
(statearr_27622_27836[(1)] = (13));

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
});})(c__27023__auto___27807,tc,fc))
;
return ((function (switch__26857__auto__,c__27023__auto___27807,tc,fc){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_27625 = [null,null,null,null,null,null,null,null,null];
(statearr_27625[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_27625[(1)] = (1));

return statearr_27625;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_27586){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27626){if((e27626 instanceof Object)){
var ex__26861__auto__ = e27626;
var statearr_27627_27840 = state_27586;
(statearr_27627_27840[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27851 = state_27586;
state_27586 = G__27851;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_27586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_27586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___27807,tc,fc))
})();
var state__27025__auto__ = (function (){var statearr_27630 = f__27024__auto__.call(null);
(statearr_27630[(6)] = c__27023__auto___27807);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27807,tc,fc))
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__){
return (function (state_27658){
var state_val_27659 = (state_27658[(1)]);
if((state_val_27659 === (7))){
var inst_27653 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27661_27881 = state_27658__$1;
(statearr_27661_27881[(2)] = inst_27653);

(statearr_27661_27881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (1))){
var inst_27635 = init;
var state_27658__$1 = (function (){var statearr_27662 = state_27658;
(statearr_27662[(7)] = inst_27635);

return statearr_27662;
})();
var statearr_27663_27894 = state_27658__$1;
(statearr_27663_27894[(2)] = null);

(statearr_27663_27894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (4))){
var inst_27639 = (state_27658[(8)]);
var inst_27639__$1 = (state_27658[(2)]);
var inst_27640 = (inst_27639__$1 == null);
var state_27658__$1 = (function (){var statearr_27665 = state_27658;
(statearr_27665[(8)] = inst_27639__$1);

return statearr_27665;
})();
if(cljs.core.truth_(inst_27640)){
var statearr_27667_27917 = state_27658__$1;
(statearr_27667_27917[(1)] = (5));

} else {
var statearr_27668_27925 = state_27658__$1;
(statearr_27668_27925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (6))){
var inst_27635 = (state_27658[(7)]);
var inst_27639 = (state_27658[(8)]);
var inst_27643 = (state_27658[(9)]);
var inst_27643__$1 = f.call(null,inst_27635,inst_27639);
var inst_27644 = cljs.core.reduced_QMARK_.call(null,inst_27643__$1);
var state_27658__$1 = (function (){var statearr_27669 = state_27658;
(statearr_27669[(9)] = inst_27643__$1);

return statearr_27669;
})();
if(inst_27644){
var statearr_27670_27944 = state_27658__$1;
(statearr_27670_27944[(1)] = (8));

} else {
var statearr_27671_27949 = state_27658__$1;
(statearr_27671_27949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (3))){
var inst_27655 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27658__$1,inst_27655);
} else {
if((state_val_27659 === (2))){
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27658__$1,(4),ch);
} else {
if((state_val_27659 === (9))){
var inst_27643 = (state_27658[(9)]);
var inst_27635 = inst_27643;
var state_27658__$1 = (function (){var statearr_27675 = state_27658;
(statearr_27675[(7)] = inst_27635);

return statearr_27675;
})();
var statearr_27676_27963 = state_27658__$1;
(statearr_27676_27963[(2)] = null);

(statearr_27676_27963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (5))){
var inst_27635 = (state_27658[(7)]);
var state_27658__$1 = state_27658;
var statearr_27677_27982 = state_27658__$1;
(statearr_27677_27982[(2)] = inst_27635);

(statearr_27677_27982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (10))){
var inst_27650 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27680_27995 = state_27658__$1;
(statearr_27680_27995[(2)] = inst_27650);

(statearr_27680_27995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (8))){
var inst_27643 = (state_27658[(9)]);
var inst_27646 = cljs.core.deref.call(null,inst_27643);
var state_27658__$1 = state_27658;
var statearr_27683_27998 = state_27658__$1;
(statearr_27683_27998[(2)] = inst_27646);

(statearr_27683_27998[(1)] = (10));


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
});})(c__27023__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26858__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26858__auto____0 = (function (){
var statearr_27685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27685[(0)] = cljs$core$async$reduce_$_state_machine__26858__auto__);

(statearr_27685[(1)] = (1));

return statearr_27685;
});
var cljs$core$async$reduce_$_state_machine__26858__auto____1 = (function (state_27658){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27689){if((e27689 instanceof Object)){
var ex__26861__auto__ = e27689;
var statearr_27691_28004 = state_27658;
(statearr_27691_28004[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28005 = state_27658;
state_27658 = G__28005;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26858__auto__ = function(state_27658){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26858__auto____1.call(this,state_27658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26858__auto____0;
cljs$core$async$reduce_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26858__auto____1;
return cljs$core$async$reduce_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_27694 = f__27024__auto__.call(null);
(statearr_27694[(6)] = c__27023__auto__);

return statearr_27694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,f__$1){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__,f__$1){
return (function (state_27704){
var state_val_27705 = (state_27704[(1)]);
if((state_val_27705 === (1))){
var inst_27699 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27704__$1,(2),inst_27699);
} else {
if((state_val_27705 === (2))){
var inst_27701 = (state_27704[(2)]);
var inst_27702 = f__$1.call(null,inst_27701);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27704__$1,inst_27702);
} else {
return null;
}
}
});})(c__27023__auto__,f__$1))
;
return ((function (switch__26857__auto__,c__27023__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26858__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26858__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null];
(statearr_27712[(0)] = cljs$core$async$transduce_$_state_machine__26858__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var cljs$core$async$transduce_$_state_machine__26858__auto____1 = (function (state_27704){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27714){if((e27714 instanceof Object)){
var ex__26861__auto__ = e27714;
var statearr_27715_28016 = state_27704;
(statearr_27715_28016[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28020 = state_27704;
state_27704 = G__28020;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26858__auto__ = function(state_27704){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26858__auto____1.call(this,state_27704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26858__auto____0;
cljs$core$async$transduce_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26858__auto____1;
return cljs$core$async$transduce_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__,f__$1))
})();
var state__27025__auto__ = (function (){var statearr_27717 = f__27024__auto__.call(null);
(statearr_27717[(6)] = c__27023__auto__);

return statearr_27717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,f__$1))
);

return c__27023__auto__;
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
var G__27723 = arguments.length;
switch (G__27723) {
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__){
return (function (state_27757){
var state_val_27760 = (state_27757[(1)]);
if((state_val_27760 === (7))){
var inst_27734 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27762_28031 = state_27757__$1;
(statearr_27762_28031[(2)] = inst_27734);

(statearr_27762_28031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (1))){
var inst_27728 = cljs.core.seq.call(null,coll);
var inst_27729 = inst_27728;
var state_27757__$1 = (function (){var statearr_27765 = state_27757;
(statearr_27765[(7)] = inst_27729);

return statearr_27765;
})();
var statearr_27766_28036 = state_27757__$1;
(statearr_27766_28036[(2)] = null);

(statearr_27766_28036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (4))){
var inst_27729 = (state_27757[(7)]);
var inst_27732 = cljs.core.first.call(null,inst_27729);
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27757__$1,(7),ch,inst_27732);
} else {
if((state_val_27760 === (13))){
var inst_27749 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27769_28042 = state_27757__$1;
(statearr_27769_28042[(2)] = inst_27749);

(statearr_27769_28042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (6))){
var inst_27737 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27737)){
var statearr_27773_28045 = state_27757__$1;
(statearr_27773_28045[(1)] = (8));

} else {
var statearr_27774_28046 = state_27757__$1;
(statearr_27774_28046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (3))){
var inst_27754 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27757__$1,inst_27754);
} else {
if((state_val_27760 === (12))){
var state_27757__$1 = state_27757;
var statearr_27775_28048 = state_27757__$1;
(statearr_27775_28048[(2)] = null);

(statearr_27775_28048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (2))){
var inst_27729 = (state_27757[(7)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27729)){
var statearr_27777_28050 = state_27757__$1;
(statearr_27777_28050[(1)] = (4));

} else {
var statearr_27778_28053 = state_27757__$1;
(statearr_27778_28053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (11))){
var inst_27746 = cljs.core.async.close_BANG_.call(null,ch);
var state_27757__$1 = state_27757;
var statearr_27780_28059 = state_27757__$1;
(statearr_27780_28059[(2)] = inst_27746);

(statearr_27780_28059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (9))){
var state_27757__$1 = state_27757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27782_28061 = state_27757__$1;
(statearr_27782_28061[(1)] = (11));

} else {
var statearr_27783_28062 = state_27757__$1;
(statearr_27783_28062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (5))){
var inst_27729 = (state_27757[(7)]);
var state_27757__$1 = state_27757;
var statearr_27787_28064 = state_27757__$1;
(statearr_27787_28064[(2)] = inst_27729);

(statearr_27787_28064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (10))){
var inst_27752 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27788_28069 = state_27757__$1;
(statearr_27788_28069[(2)] = inst_27752);

(statearr_27788_28069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (8))){
var inst_27729 = (state_27757[(7)]);
var inst_27741 = cljs.core.next.call(null,inst_27729);
var inst_27729__$1 = inst_27741;
var state_27757__$1 = (function (){var statearr_27790 = state_27757;
(statearr_27790[(7)] = inst_27729__$1);

return statearr_27790;
})();
var statearr_27791_28070 = state_27757__$1;
(statearr_27791_28070[(2)] = null);

(statearr_27791_28070[(1)] = (2));


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
});})(c__27023__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_27793 = [null,null,null,null,null,null,null,null];
(statearr_27793[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_27793[(1)] = (1));

return statearr_27793;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_27757){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_27757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object)){
var ex__26861__auto__ = e27794;
var statearr_27795_28073 = state_27757;
(statearr_27795_28073[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28076 = state_27757;
state_27757 = G__28076;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_27757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_27757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_27800 = f__27024__auto__.call(null);
(statearr_27800[(6)] = c__27023__auto__);

return statearr_27800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27824 = (function (ch,cs,meta27825){
this.ch = ch;
this.cs = cs;
this.meta27825 = meta27825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27826,meta27825__$1){
var self__ = this;
var _27826__$1 = this;
return (new cljs.core.async.t_cljs$core$async27824(self__.ch,self__.cs,meta27825__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27826){
var self__ = this;
var _27826__$1 = this;
return self__.meta27825;
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27825","meta27825",1596560720,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27824";

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27824");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27824.
 */
cljs.core.async.__GT_t_cljs$core$async27824 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27824(ch__$1,cs__$1,meta27825){
return (new cljs.core.async.t_cljs$core$async27824(ch__$1,cs__$1,meta27825));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27824(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27023__auto___28133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28133,cs,m,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___28133,cs,m,dchan,dctr,done){
return (function (state_28001){
var state_val_28003 = (state_28001[(1)]);
if((state_val_28003 === (7))){
var inst_27992 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28007_28134 = state_28001__$1;
(statearr_28007_28134[(2)] = inst_27992);

(statearr_28007_28134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (20))){
var inst_27879 = (state_28001[(7)]);
var inst_27893 = cljs.core.first.call(null,inst_27879);
var inst_27895 = cljs.core.nth.call(null,inst_27893,(0),null);
var inst_27896 = cljs.core.nth.call(null,inst_27893,(1),null);
var state_28001__$1 = (function (){var statearr_28011 = state_28001;
(statearr_28011[(8)] = inst_27895);

return statearr_28011;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_28013_28135 = state_28001__$1;
(statearr_28013_28135[(1)] = (22));

} else {
var statearr_28014_28136 = state_28001__$1;
(statearr_28014_28136[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (27))){
var inst_27929 = (state_28001[(9)]);
var inst_27931 = (state_28001[(10)]);
var inst_27936 = (state_28001[(11)]);
var inst_27843 = (state_28001[(12)]);
var inst_27936__$1 = cljs.core._nth.call(null,inst_27929,inst_27931);
var inst_27937 = cljs.core.async.put_BANG_.call(null,inst_27936__$1,inst_27843,done);
var state_28001__$1 = (function (){var statearr_28019 = state_28001;
(statearr_28019[(11)] = inst_27936__$1);

return statearr_28019;
})();
if(cljs.core.truth_(inst_27937)){
var statearr_28021_28138 = state_28001__$1;
(statearr_28021_28138[(1)] = (30));

} else {
var statearr_28022_28139 = state_28001__$1;
(statearr_28022_28139[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (1))){
var state_28001__$1 = state_28001;
var statearr_28023_28140 = state_28001__$1;
(statearr_28023_28140[(2)] = null);

(statearr_28023_28140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (24))){
var inst_27879 = (state_28001[(7)]);
var inst_27901 = (state_28001[(2)]);
var inst_27902 = cljs.core.next.call(null,inst_27879);
var inst_27854 = inst_27902;
var inst_27855 = null;
var inst_27856 = (0);
var inst_27857 = (0);
var state_28001__$1 = (function (){var statearr_28026 = state_28001;
(statearr_28026[(13)] = inst_27856);

(statearr_28026[(14)] = inst_27857);

(statearr_28026[(15)] = inst_27901);

(statearr_28026[(16)] = inst_27854);

(statearr_28026[(17)] = inst_27855);

return statearr_28026;
})();
var statearr_28029_28141 = state_28001__$1;
(statearr_28029_28141[(2)] = null);

(statearr_28029_28141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (39))){
var state_28001__$1 = state_28001;
var statearr_28037_28142 = state_28001__$1;
(statearr_28037_28142[(2)] = null);

(statearr_28037_28142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (4))){
var inst_27843 = (state_28001[(12)]);
var inst_27843__$1 = (state_28001[(2)]);
var inst_27844 = (inst_27843__$1 == null);
var state_28001__$1 = (function (){var statearr_28038 = state_28001;
(statearr_28038[(12)] = inst_27843__$1);

return statearr_28038;
})();
if(cljs.core.truth_(inst_27844)){
var statearr_28041_28143 = state_28001__$1;
(statearr_28041_28143[(1)] = (5));

} else {
var statearr_28044_28144 = state_28001__$1;
(statearr_28044_28144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (15))){
var inst_27856 = (state_28001[(13)]);
var inst_27857 = (state_28001[(14)]);
var inst_27854 = (state_28001[(16)]);
var inst_27855 = (state_28001[(17)]);
var inst_27873 = (state_28001[(2)]);
var inst_27875 = (inst_27857 + (1));
var tmp28032 = inst_27856;
var tmp28033 = inst_27854;
var tmp28034 = inst_27855;
var inst_27854__$1 = tmp28033;
var inst_27855__$1 = tmp28034;
var inst_27856__$1 = tmp28032;
var inst_27857__$1 = inst_27875;
var state_28001__$1 = (function (){var statearr_28049 = state_28001;
(statearr_28049[(13)] = inst_27856__$1);

(statearr_28049[(14)] = inst_27857__$1);

(statearr_28049[(16)] = inst_27854__$1);

(statearr_28049[(18)] = inst_27873);

(statearr_28049[(17)] = inst_27855__$1);

return statearr_28049;
})();
var statearr_28051_28145 = state_28001__$1;
(statearr_28051_28145[(2)] = null);

(statearr_28051_28145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (21))){
var inst_27905 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28060_28146 = state_28001__$1;
(statearr_28060_28146[(2)] = inst_27905);

(statearr_28060_28146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (31))){
var inst_27936 = (state_28001[(11)]);
var inst_27940 = done.call(null,null);
var inst_27941 = cljs.core.async.untap_STAR_.call(null,m,inst_27936);
var state_28001__$1 = (function (){var statearr_28063 = state_28001;
(statearr_28063[(19)] = inst_27940);

return statearr_28063;
})();
var statearr_28065_28147 = state_28001__$1;
(statearr_28065_28147[(2)] = inst_27941);

(statearr_28065_28147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (32))){
var inst_27929 = (state_28001[(9)]);
var inst_27928 = (state_28001[(20)]);
var inst_27931 = (state_28001[(10)]);
var inst_27930 = (state_28001[(21)]);
var inst_27943 = (state_28001[(2)]);
var inst_27946 = (inst_27931 + (1));
var tmp28056 = inst_27929;
var tmp28057 = inst_27928;
var tmp28058 = inst_27930;
var inst_27928__$1 = tmp28057;
var inst_27929__$1 = tmp28056;
var inst_27930__$1 = tmp28058;
var inst_27931__$1 = inst_27946;
var state_28001__$1 = (function (){var statearr_28071 = state_28001;
(statearr_28071[(22)] = inst_27943);

(statearr_28071[(9)] = inst_27929__$1);

(statearr_28071[(20)] = inst_27928__$1);

(statearr_28071[(10)] = inst_27931__$1);

(statearr_28071[(21)] = inst_27930__$1);

return statearr_28071;
})();
var statearr_28072_28152 = state_28001__$1;
(statearr_28072_28152[(2)] = null);

(statearr_28072_28152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (40))){
var inst_27960 = (state_28001[(23)]);
var inst_27967 = done.call(null,null);
var inst_27968 = cljs.core.async.untap_STAR_.call(null,m,inst_27960);
var state_28001__$1 = (function (){var statearr_28074 = state_28001;
(statearr_28074[(24)] = inst_27967);

return statearr_28074;
})();
var statearr_28075_28153 = state_28001__$1;
(statearr_28075_28153[(2)] = inst_27968);

(statearr_28075_28153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (33))){
var inst_27950 = (state_28001[(25)]);
var inst_27952 = cljs.core.chunked_seq_QMARK_.call(null,inst_27950);
var state_28001__$1 = state_28001;
if(inst_27952){
var statearr_28077_28157 = state_28001__$1;
(statearr_28077_28157[(1)] = (36));

} else {
var statearr_28078_28158 = state_28001__$1;
(statearr_28078_28158[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (13))){
var inst_27866 = (state_28001[(26)]);
var inst_27869 = cljs.core.async.close_BANG_.call(null,inst_27866);
var state_28001__$1 = state_28001;
var statearr_28079_28160 = state_28001__$1;
(statearr_28079_28160[(2)] = inst_27869);

(statearr_28079_28160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (22))){
var inst_27895 = (state_28001[(8)]);
var inst_27898 = cljs.core.async.close_BANG_.call(null,inst_27895);
var state_28001__$1 = state_28001;
var statearr_28080_28162 = state_28001__$1;
(statearr_28080_28162[(2)] = inst_27898);

(statearr_28080_28162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (36))){
var inst_27950 = (state_28001[(25)]);
var inst_27954 = cljs.core.chunk_first.call(null,inst_27950);
var inst_27955 = cljs.core.chunk_rest.call(null,inst_27950);
var inst_27956 = cljs.core.count.call(null,inst_27954);
var inst_27928 = inst_27955;
var inst_27929 = inst_27954;
var inst_27930 = inst_27956;
var inst_27931 = (0);
var state_28001__$1 = (function (){var statearr_28081 = state_28001;
(statearr_28081[(9)] = inst_27929);

(statearr_28081[(20)] = inst_27928);

(statearr_28081[(10)] = inst_27931);

(statearr_28081[(21)] = inst_27930);

return statearr_28081;
})();
var statearr_28082_28164 = state_28001__$1;
(statearr_28082_28164[(2)] = null);

(statearr_28082_28164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (41))){
var inst_27950 = (state_28001[(25)]);
var inst_27970 = (state_28001[(2)]);
var inst_27971 = cljs.core.next.call(null,inst_27950);
var inst_27928 = inst_27971;
var inst_27929 = null;
var inst_27930 = (0);
var inst_27931 = (0);
var state_28001__$1 = (function (){var statearr_28083 = state_28001;
(statearr_28083[(9)] = inst_27929);

(statearr_28083[(20)] = inst_27928);

(statearr_28083[(27)] = inst_27970);

(statearr_28083[(10)] = inst_27931);

(statearr_28083[(21)] = inst_27930);

return statearr_28083;
})();
var statearr_28084_28165 = state_28001__$1;
(statearr_28084_28165[(2)] = null);

(statearr_28084_28165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (43))){
var state_28001__$1 = state_28001;
var statearr_28085_28166 = state_28001__$1;
(statearr_28085_28166[(2)] = null);

(statearr_28085_28166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (29))){
var inst_27979 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28086_28167 = state_28001__$1;
(statearr_28086_28167[(2)] = inst_27979);

(statearr_28086_28167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (44))){
var inst_27989 = (state_28001[(2)]);
var state_28001__$1 = (function (){var statearr_28087 = state_28001;
(statearr_28087[(28)] = inst_27989);

return statearr_28087;
})();
var statearr_28088_28168 = state_28001__$1;
(statearr_28088_28168[(2)] = null);

(statearr_28088_28168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (6))){
var inst_27916 = (state_28001[(29)]);
var inst_27915 = cljs.core.deref.call(null,cs);
var inst_27916__$1 = cljs.core.keys.call(null,inst_27915);
var inst_27919 = cljs.core.count.call(null,inst_27916__$1);
var inst_27920 = cljs.core.reset_BANG_.call(null,dctr,inst_27919);
var inst_27927 = cljs.core.seq.call(null,inst_27916__$1);
var inst_27928 = inst_27927;
var inst_27929 = null;
var inst_27930 = (0);
var inst_27931 = (0);
var state_28001__$1 = (function (){var statearr_28089 = state_28001;
(statearr_28089[(9)] = inst_27929);

(statearr_28089[(20)] = inst_27928);

(statearr_28089[(10)] = inst_27931);

(statearr_28089[(29)] = inst_27916__$1);

(statearr_28089[(30)] = inst_27920);

(statearr_28089[(21)] = inst_27930);

return statearr_28089;
})();
var statearr_28090_28169 = state_28001__$1;
(statearr_28090_28169[(2)] = null);

(statearr_28090_28169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (28))){
var inst_27928 = (state_28001[(20)]);
var inst_27950 = (state_28001[(25)]);
var inst_27950__$1 = cljs.core.seq.call(null,inst_27928);
var state_28001__$1 = (function (){var statearr_28091 = state_28001;
(statearr_28091[(25)] = inst_27950__$1);

return statearr_28091;
})();
if(inst_27950__$1){
var statearr_28092_28170 = state_28001__$1;
(statearr_28092_28170[(1)] = (33));

} else {
var statearr_28093_28172 = state_28001__$1;
(statearr_28093_28172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (25))){
var inst_27931 = (state_28001[(10)]);
var inst_27930 = (state_28001[(21)]);
var inst_27933 = (inst_27931 < inst_27930);
var inst_27934 = inst_27933;
var state_28001__$1 = state_28001;
if(cljs.core.truth_(inst_27934)){
var statearr_28094_28175 = state_28001__$1;
(statearr_28094_28175[(1)] = (27));

} else {
var statearr_28095_28176 = state_28001__$1;
(statearr_28095_28176[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (34))){
var state_28001__$1 = state_28001;
var statearr_28096_28177 = state_28001__$1;
(statearr_28096_28177[(2)] = null);

(statearr_28096_28177[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (17))){
var state_28001__$1 = state_28001;
var statearr_28097_28178 = state_28001__$1;
(statearr_28097_28178[(2)] = null);

(statearr_28097_28178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (3))){
var inst_27994 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28001__$1,inst_27994);
} else {
if((state_val_28003 === (12))){
var inst_27910 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28098_28179 = state_28001__$1;
(statearr_28098_28179[(2)] = inst_27910);

(statearr_28098_28179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (2))){
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28001__$1,(4),ch);
} else {
if((state_val_28003 === (23))){
var state_28001__$1 = state_28001;
var statearr_28099_28180 = state_28001__$1;
(statearr_28099_28180[(2)] = null);

(statearr_28099_28180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (35))){
var inst_27977 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28100_28181 = state_28001__$1;
(statearr_28100_28181[(2)] = inst_27977);

(statearr_28100_28181[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (19))){
var inst_27879 = (state_28001[(7)]);
var inst_27884 = cljs.core.chunk_first.call(null,inst_27879);
var inst_27885 = cljs.core.chunk_rest.call(null,inst_27879);
var inst_27886 = cljs.core.count.call(null,inst_27884);
var inst_27854 = inst_27885;
var inst_27855 = inst_27884;
var inst_27856 = inst_27886;
var inst_27857 = (0);
var state_28001__$1 = (function (){var statearr_28101 = state_28001;
(statearr_28101[(13)] = inst_27856);

(statearr_28101[(14)] = inst_27857);

(statearr_28101[(16)] = inst_27854);

(statearr_28101[(17)] = inst_27855);

return statearr_28101;
})();
var statearr_28102_28182 = state_28001__$1;
(statearr_28102_28182[(2)] = null);

(statearr_28102_28182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (11))){
var inst_27879 = (state_28001[(7)]);
var inst_27854 = (state_28001[(16)]);
var inst_27879__$1 = cljs.core.seq.call(null,inst_27854);
var state_28001__$1 = (function (){var statearr_28103 = state_28001;
(statearr_28103[(7)] = inst_27879__$1);

return statearr_28103;
})();
if(inst_27879__$1){
var statearr_28104_28183 = state_28001__$1;
(statearr_28104_28183[(1)] = (16));

} else {
var statearr_28105_28184 = state_28001__$1;
(statearr_28105_28184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (9))){
var inst_27912 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28106_28185 = state_28001__$1;
(statearr_28106_28185[(2)] = inst_27912);

(statearr_28106_28185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (5))){
var inst_27852 = cljs.core.deref.call(null,cs);
var inst_27853 = cljs.core.seq.call(null,inst_27852);
var inst_27854 = inst_27853;
var inst_27855 = null;
var inst_27856 = (0);
var inst_27857 = (0);
var state_28001__$1 = (function (){var statearr_28107 = state_28001;
(statearr_28107[(13)] = inst_27856);

(statearr_28107[(14)] = inst_27857);

(statearr_28107[(16)] = inst_27854);

(statearr_28107[(17)] = inst_27855);

return statearr_28107;
})();
var statearr_28108_28186 = state_28001__$1;
(statearr_28108_28186[(2)] = null);

(statearr_28108_28186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (14))){
var state_28001__$1 = state_28001;
var statearr_28109_28187 = state_28001__$1;
(statearr_28109_28187[(2)] = null);

(statearr_28109_28187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (45))){
var inst_27986 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28110_28193 = state_28001__$1;
(statearr_28110_28193[(2)] = inst_27986);

(statearr_28110_28193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (26))){
var inst_27916 = (state_28001[(29)]);
var inst_27981 = (state_28001[(2)]);
var inst_27983 = cljs.core.seq.call(null,inst_27916);
var state_28001__$1 = (function (){var statearr_28111 = state_28001;
(statearr_28111[(31)] = inst_27981);

return statearr_28111;
})();
if(inst_27983){
var statearr_28112_28210 = state_28001__$1;
(statearr_28112_28210[(1)] = (42));

} else {
var statearr_28113_28216 = state_28001__$1;
(statearr_28113_28216[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (16))){
var inst_27879 = (state_28001[(7)]);
var inst_27882 = cljs.core.chunked_seq_QMARK_.call(null,inst_27879);
var state_28001__$1 = state_28001;
if(inst_27882){
var statearr_28114_28225 = state_28001__$1;
(statearr_28114_28225[(1)] = (19));

} else {
var statearr_28115_28227 = state_28001__$1;
(statearr_28115_28227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (38))){
var inst_27974 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28116_28247 = state_28001__$1;
(statearr_28116_28247[(2)] = inst_27974);

(statearr_28116_28247[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (30))){
var state_28001__$1 = state_28001;
var statearr_28117_28256 = state_28001__$1;
(statearr_28117_28256[(2)] = null);

(statearr_28117_28256[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (10))){
var inst_27857 = (state_28001[(14)]);
var inst_27855 = (state_28001[(17)]);
var inst_27865 = cljs.core._nth.call(null,inst_27855,inst_27857);
var inst_27866 = cljs.core.nth.call(null,inst_27865,(0),null);
var inst_27867 = cljs.core.nth.call(null,inst_27865,(1),null);
var state_28001__$1 = (function (){var statearr_28118 = state_28001;
(statearr_28118[(26)] = inst_27866);

return statearr_28118;
})();
if(cljs.core.truth_(inst_27867)){
var statearr_28119_28270 = state_28001__$1;
(statearr_28119_28270[(1)] = (13));

} else {
var statearr_28120_28274 = state_28001__$1;
(statearr_28120_28274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (18))){
var inst_27908 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28121_28285 = state_28001__$1;
(statearr_28121_28285[(2)] = inst_27908);

(statearr_28121_28285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (42))){
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28001__$1,(45),dchan);
} else {
if((state_val_28003 === (37))){
var inst_27950 = (state_28001[(25)]);
var inst_27960 = (state_28001[(23)]);
var inst_27843 = (state_28001[(12)]);
var inst_27960__$1 = cljs.core.first.call(null,inst_27950);
var inst_27962 = cljs.core.async.put_BANG_.call(null,inst_27960__$1,inst_27843,done);
var state_28001__$1 = (function (){var statearr_28122 = state_28001;
(statearr_28122[(23)] = inst_27960__$1);

return statearr_28122;
})();
if(cljs.core.truth_(inst_27962)){
var statearr_28123_28300 = state_28001__$1;
(statearr_28123_28300[(1)] = (39));

} else {
var statearr_28124_28302 = state_28001__$1;
(statearr_28124_28302[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (8))){
var inst_27856 = (state_28001[(13)]);
var inst_27857 = (state_28001[(14)]);
var inst_27859 = (inst_27857 < inst_27856);
var inst_27860 = inst_27859;
var state_28001__$1 = state_28001;
if(cljs.core.truth_(inst_27860)){
var statearr_28125_28303 = state_28001__$1;
(statearr_28125_28303[(1)] = (10));

} else {
var statearr_28126_28304 = state_28001__$1;
(statearr_28126_28304[(1)] = (11));

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
});})(c__27023__auto___28133,cs,m,dchan,dctr,done))
;
return ((function (switch__26857__auto__,c__27023__auto___28133,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26858__auto__ = null;
var cljs$core$async$mult_$_state_machine__26858__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$mult_$_state_machine__26858__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$mult_$_state_machine__26858__auto____1 = (function (state_28001){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__26861__auto__ = e28128;
var statearr_28129_28308 = state_28001;
(statearr_28129_28308[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28310 = state_28001;
state_28001 = G__28310;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26858__auto__ = function(state_28001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26858__auto____1.call(this,state_28001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26858__auto____0;
cljs$core$async$mult_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26858__auto____1;
return cljs$core$async$mult_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___28133,cs,m,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_28130 = f__27024__auto__.call(null);
(statearr_28130[(6)] = c__27023__auto___28133);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28133,cs,m,dchan,dctr,done))
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
var G__28132 = arguments.length;
switch (G__28132) {
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
var len__4641__auto___28333 = arguments.length;
var i__4642__auto___28334 = (0);
while(true){
if((i__4642__auto___28334 < len__4641__auto___28333)){
args__4647__auto__.push((arguments[i__4642__auto___28334]));

var G__28336 = (i__4642__auto___28334 + (1));
i__4642__auto___28334 = G__28336;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28154){
var map__28155 = p__28154;
var map__28155__$1 = (((((!((map__28155 == null))))?(((((map__28155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28155):map__28155);
var opts = map__28155__$1;
var statearr_28159_28340 = state;
(statearr_28159_28340[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__28155,map__28155__$1,opts){
return (function (val){
var statearr_28161_28341 = state;
(statearr_28161_28341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28155,map__28155__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28163_28343 = state;
(statearr_28163_28343[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28148){
var G__28149 = cljs.core.first.call(null,seq28148);
var seq28148__$1 = cljs.core.next.call(null,seq28148);
var G__28150 = cljs.core.first.call(null,seq28148__$1);
var seq28148__$2 = cljs.core.next.call(null,seq28148__$1);
var G__28151 = cljs.core.first.call(null,seq28148__$2);
var seq28148__$3 = cljs.core.next.call(null,seq28148__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28149,G__28150,G__28151,seq28148__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28171 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28173){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28173 = meta28173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28174,meta28173__$1){
var self__ = this;
var _28174__$1 = this;
return (new cljs.core.async.t_cljs$core$async28171(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28173__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28174){
var self__ = this;
var _28174__$1 = this;
return self__.meta28173;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28171.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28173","meta28173",-211626837,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28171";

cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28171");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28171.
 */
cljs.core.async.__GT_t_cljs$core$async28171 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28173){
return (new cljs.core.async.t_cljs$core$async28171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28173));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28171(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___28374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28299){
var state_val_28301 = (state_28299[(1)]);
if((state_val_28301 === (7))){
var inst_28205 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28305_28375 = state_28299__$1;
(statearr_28305_28375[(2)] = inst_28205);

(statearr_28305_28375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (20))){
var inst_28219 = (state_28299[(7)]);
var state_28299__$1 = state_28299;
var statearr_28306_28376 = state_28299__$1;
(statearr_28306_28376[(2)] = inst_28219);

(statearr_28306_28376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (27))){
var state_28299__$1 = state_28299;
var statearr_28307_28377 = state_28299__$1;
(statearr_28307_28377[(2)] = null);

(statearr_28307_28377[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var inst_28191 = (state_28299[(8)]);
var inst_28191__$1 = calc_state.call(null);
var inst_28194 = (inst_28191__$1 == null);
var inst_28195 = cljs.core.not.call(null,inst_28194);
var state_28299__$1 = (function (){var statearr_28309 = state_28299;
(statearr_28309[(8)] = inst_28191__$1);

return statearr_28309;
})();
if(inst_28195){
var statearr_28311_28380 = state_28299__$1;
(statearr_28311_28380[(1)] = (2));

} else {
var statearr_28312_28381 = state_28299__$1;
(statearr_28312_28381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (24))){
var inst_28271 = (state_28299[(9)]);
var inst_28245 = (state_28299[(10)]);
var inst_28255 = (state_28299[(11)]);
var inst_28271__$1 = inst_28245.call(null,inst_28255);
var state_28299__$1 = (function (){var statearr_28313 = state_28299;
(statearr_28313[(9)] = inst_28271__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28271__$1)){
var statearr_28315_28383 = state_28299__$1;
(statearr_28315_28383[(1)] = (29));

} else {
var statearr_28316_28384 = state_28299__$1;
(statearr_28316_28384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28208 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28208)){
var statearr_28317_28385 = state_28299__$1;
(statearr_28317_28385[(1)] = (8));

} else {
var statearr_28318_28386 = state_28299__$1;
(statearr_28318_28386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (15))){
var inst_28239 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28239)){
var statearr_28319_28387 = state_28299__$1;
(statearr_28319_28387[(1)] = (19));

} else {
var statearr_28320_28388 = state_28299__$1;
(statearr_28320_28388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (21))){
var inst_28244 = (state_28299[(12)]);
var inst_28244__$1 = (state_28299[(2)]);
var inst_28245 = cljs.core.get.call(null,inst_28244__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28246 = cljs.core.get.call(null,inst_28244__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28248 = cljs.core.get.call(null,inst_28244__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28299__$1 = (function (){var statearr_28321 = state_28299;
(statearr_28321[(13)] = inst_28246);

(statearr_28321[(12)] = inst_28244__$1);

(statearr_28321[(10)] = inst_28245);

return statearr_28321;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28299__$1,(22),inst_28248);
} else {
if((state_val_28301 === (31))){
var inst_28280 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28280)){
var statearr_28322_28392 = state_28299__$1;
(statearr_28322_28392[(1)] = (32));

} else {
var statearr_28323_28393 = state_28299__$1;
(statearr_28323_28393[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (32))){
var inst_28254 = (state_28299[(14)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28299__$1,(35),out,inst_28254);
} else {
if((state_val_28301 === (33))){
var inst_28244 = (state_28299[(12)]);
var inst_28219 = inst_28244;
var state_28299__$1 = (function (){var statearr_28324 = state_28299;
(statearr_28324[(7)] = inst_28219);

return statearr_28324;
})();
var statearr_28325_28394 = state_28299__$1;
(statearr_28325_28394[(2)] = null);

(statearr_28325_28394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (13))){
var inst_28219 = (state_28299[(7)]);
var inst_28228 = inst_28219.cljs$lang$protocol_mask$partition0$;
var inst_28229 = (inst_28228 & (64));
var inst_28230 = inst_28219.cljs$core$ISeq$;
var inst_28231 = (cljs.core.PROTOCOL_SENTINEL === inst_28230);
var inst_28232 = ((inst_28229) || (inst_28231));
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28232)){
var statearr_28326_28395 = state_28299__$1;
(statearr_28326_28395[(1)] = (16));

} else {
var statearr_28327_28396 = state_28299__$1;
(statearr_28327_28396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (22))){
var inst_28254 = (state_28299[(14)]);
var inst_28255 = (state_28299[(11)]);
var inst_28253 = (state_28299[(2)]);
var inst_28254__$1 = cljs.core.nth.call(null,inst_28253,(0),null);
var inst_28255__$1 = cljs.core.nth.call(null,inst_28253,(1),null);
var inst_28257 = (inst_28254__$1 == null);
var inst_28258 = cljs.core._EQ_.call(null,inst_28255__$1,change);
var inst_28259 = ((inst_28257) || (inst_28258));
var state_28299__$1 = (function (){var statearr_28328 = state_28299;
(statearr_28328[(14)] = inst_28254__$1);

(statearr_28328[(11)] = inst_28255__$1);

return statearr_28328;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28329_28397 = state_28299__$1;
(statearr_28329_28397[(1)] = (23));

} else {
var statearr_28330_28398 = state_28299__$1;
(statearr_28330_28398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (36))){
var inst_28244 = (state_28299[(12)]);
var inst_28219 = inst_28244;
var state_28299__$1 = (function (){var statearr_28331 = state_28299;
(statearr_28331[(7)] = inst_28219);

return statearr_28331;
})();
var statearr_28332_28399 = state_28299__$1;
(statearr_28332_28399[(2)] = null);

(statearr_28332_28399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (29))){
var inst_28271 = (state_28299[(9)]);
var state_28299__$1 = state_28299;
var statearr_28335_28400 = state_28299__$1;
(statearr_28335_28400[(2)] = inst_28271);

(statearr_28335_28400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (6))){
var state_28299__$1 = state_28299;
var statearr_28337_28402 = state_28299__$1;
(statearr_28337_28402[(2)] = false);

(statearr_28337_28402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (28))){
var inst_28266 = (state_28299[(2)]);
var inst_28267 = calc_state.call(null);
var inst_28219 = inst_28267;
var state_28299__$1 = (function (){var statearr_28338 = state_28299;
(statearr_28338[(7)] = inst_28219);

(statearr_28338[(15)] = inst_28266);

return statearr_28338;
})();
var statearr_28339_28407 = state_28299__$1;
(statearr_28339_28407[(2)] = null);

(statearr_28339_28407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (25))){
var inst_28295 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28342_28419 = state_28299__$1;
(statearr_28342_28419[(2)] = inst_28295);

(statearr_28342_28419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (34))){
var inst_28293 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28344_28425 = state_28299__$1;
(statearr_28344_28425[(2)] = inst_28293);

(statearr_28344_28425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (17))){
var state_28299__$1 = state_28299;
var statearr_28345_28431 = state_28299__$1;
(statearr_28345_28431[(2)] = false);

(statearr_28345_28431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var state_28299__$1 = state_28299;
var statearr_28346_28436 = state_28299__$1;
(statearr_28346_28436[(2)] = false);

(statearr_28346_28436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (12))){
var inst_28297 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28299__$1,inst_28297);
} else {
if((state_val_28301 === (2))){
var inst_28191 = (state_28299[(8)]);
var inst_28197 = inst_28191.cljs$lang$protocol_mask$partition0$;
var inst_28198 = (inst_28197 & (64));
var inst_28199 = inst_28191.cljs$core$ISeq$;
var inst_28200 = (cljs.core.PROTOCOL_SENTINEL === inst_28199);
var inst_28201 = ((inst_28198) || (inst_28200));
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28201)){
var statearr_28347_28461 = state_28299__$1;
(statearr_28347_28461[(1)] = (5));

} else {
var statearr_28348_28467 = state_28299__$1;
(statearr_28348_28467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (23))){
var inst_28254 = (state_28299[(14)]);
var inst_28261 = (inst_28254 == null);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28261)){
var statearr_28349_28480 = state_28299__$1;
(statearr_28349_28480[(1)] = (26));

} else {
var statearr_28350_28481 = state_28299__$1;
(statearr_28350_28481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (35))){
var inst_28283 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28283)){
var statearr_28351_28482 = state_28299__$1;
(statearr_28351_28482[(1)] = (36));

} else {
var statearr_28352_28485 = state_28299__$1;
(statearr_28352_28485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (19))){
var inst_28219 = (state_28299[(7)]);
var inst_28241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28219);
var state_28299__$1 = state_28299;
var statearr_28353_28486 = state_28299__$1;
(statearr_28353_28486[(2)] = inst_28241);

(statearr_28353_28486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (11))){
var inst_28219 = (state_28299[(7)]);
var inst_28223 = (inst_28219 == null);
var inst_28224 = cljs.core.not.call(null,inst_28223);
var state_28299__$1 = state_28299;
if(inst_28224){
var statearr_28354_28487 = state_28299__$1;
(statearr_28354_28487[(1)] = (13));

} else {
var statearr_28355_28488 = state_28299__$1;
(statearr_28355_28488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28191 = (state_28299[(8)]);
var state_28299__$1 = state_28299;
var statearr_28356_28490 = state_28299__$1;
(statearr_28356_28490[(2)] = inst_28191);

(statearr_28356_28490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var state_28299__$1 = state_28299;
var statearr_28357_28492 = state_28299__$1;
(statearr_28357_28492[(2)] = true);

(statearr_28357_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (14))){
var state_28299__$1 = state_28299;
var statearr_28358_28494 = state_28299__$1;
(statearr_28358_28494[(2)] = false);

(statearr_28358_28494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (26))){
var inst_28255 = (state_28299[(11)]);
var inst_28263 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28255);
var state_28299__$1 = state_28299;
var statearr_28359_28496 = state_28299__$1;
(statearr_28359_28496[(2)] = inst_28263);

(statearr_28359_28496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (16))){
var state_28299__$1 = state_28299;
var statearr_28360_28497 = state_28299__$1;
(statearr_28360_28497[(2)] = true);

(statearr_28360_28497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (38))){
var inst_28289 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28361_28500 = state_28299__$1;
(statearr_28361_28500[(2)] = inst_28289);

(statearr_28361_28500[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (30))){
var inst_28246 = (state_28299[(13)]);
var inst_28245 = (state_28299[(10)]);
var inst_28255 = (state_28299[(11)]);
var inst_28275 = cljs.core.empty_QMARK_.call(null,inst_28245);
var inst_28276 = inst_28246.call(null,inst_28255);
var inst_28277 = cljs.core.not.call(null,inst_28276);
var inst_28278 = ((inst_28275) && (inst_28277));
var state_28299__$1 = state_28299;
var statearr_28362_28503 = state_28299__$1;
(statearr_28362_28503[(2)] = inst_28278);

(statearr_28362_28503[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28191 = (state_28299[(8)]);
var inst_28214 = (state_28299[(2)]);
var inst_28215 = cljs.core.get.call(null,inst_28214,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28217 = cljs.core.get.call(null,inst_28214,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28218 = cljs.core.get.call(null,inst_28214,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28219 = inst_28191;
var state_28299__$1 = (function (){var statearr_28363 = state_28299;
(statearr_28363[(7)] = inst_28219);

(statearr_28363[(16)] = inst_28218);

(statearr_28363[(17)] = inst_28217);

(statearr_28363[(18)] = inst_28215);

return statearr_28363;
})();
var statearr_28364_28508 = state_28299__$1;
(statearr_28364_28508[(2)] = null);

(statearr_28364_28508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (18))){
var inst_28236 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28365_28509 = state_28299__$1;
(statearr_28365_28509[(2)] = inst_28236);

(statearr_28365_28509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (37))){
var state_28299__$1 = state_28299;
var statearr_28366_28511 = state_28299__$1;
(statearr_28366_28511[(2)] = null);

(statearr_28366_28511[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28191 = (state_28299[(8)]);
var inst_28211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28191);
var state_28299__$1 = state_28299;
var statearr_28367_28513 = state_28299__$1;
(statearr_28367_28513[(2)] = inst_28211);

(statearr_28367_28513[(1)] = (10));


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
});})(c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26857__auto__,c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26858__auto__ = null;
var cljs$core$async$mix_$_state_machine__26858__auto____0 = (function (){
var statearr_28368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28368[(0)] = cljs$core$async$mix_$_state_machine__26858__auto__);

(statearr_28368[(1)] = (1));

return statearr_28368;
});
var cljs$core$async$mix_$_state_machine__26858__auto____1 = (function (state_28299){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28369){if((e28369 instanceof Object)){
var ex__26861__auto__ = e28369;
var statearr_28370_28516 = state_28299;
(statearr_28370_28516[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28518 = state_28299;
state_28299 = G__28518;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26858__auto__ = function(state_28299){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26858__auto____1.call(this,state_28299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26858__auto____0;
cljs$core$async$mix_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26858__auto____1;
return cljs$core$async$mix_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27025__auto__ = (function (){var statearr_28371 = f__27024__auto__.call(null);
(statearr_28371[(6)] = c__27023__auto___28374);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28373 = arguments.length;
switch (G__28373) {
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
var G__28382 = arguments.length;
switch (G__28382) {
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
return (function (p1__28378_SHARP_){
if(cljs.core.truth_(p1__28378_SHARP_.call(null,topic))){
return p1__28378_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28378_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28389 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28390){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28390 = meta28390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28391,meta28390__$1){
var self__ = this;
var _28391__$1 = this;
return (new cljs.core.async.t_cljs$core$async28389(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28390__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28391){
var self__ = this;
var _28391__$1 = this;
return self__.meta28390;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28390","meta28390",935979785,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28389";

cljs.core.async.t_cljs$core$async28389.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28389");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28389.
 */
cljs.core.async.__GT_t_cljs$core$async28389 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28390){
return (new cljs.core.async.t_cljs$core$async28389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28390));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28389(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___28565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28565,mults,ensure_mult,p){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___28565,mults,ensure_mult,p){
return (function (state_28483){
var state_val_28484 = (state_28483[(1)]);
if((state_val_28484 === (7))){
var inst_28476 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28489_28566 = state_28483__$1;
(statearr_28489_28566[(2)] = inst_28476);

(statearr_28489_28566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (20))){
var state_28483__$1 = state_28483;
var statearr_28491_28569 = state_28483__$1;
(statearr_28491_28569[(2)] = null);

(statearr_28491_28569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (1))){
var state_28483__$1 = state_28483;
var statearr_28493_28575 = state_28483__$1;
(statearr_28493_28575[(2)] = null);

(statearr_28493_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (24))){
var inst_28457 = (state_28483[(7)]);
var inst_28468 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28457);
var state_28483__$1 = state_28483;
var statearr_28495_28576 = state_28483__$1;
(statearr_28495_28576[(2)] = inst_28468);

(statearr_28495_28576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (4))){
var inst_28404 = (state_28483[(8)]);
var inst_28404__$1 = (state_28483[(2)]);
var inst_28405 = (inst_28404__$1 == null);
var state_28483__$1 = (function (){var statearr_28498 = state_28483;
(statearr_28498[(8)] = inst_28404__$1);

return statearr_28498;
})();
if(cljs.core.truth_(inst_28405)){
var statearr_28499_28583 = state_28483__$1;
(statearr_28499_28583[(1)] = (5));

} else {
var statearr_28501_28588 = state_28483__$1;
(statearr_28501_28588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (15))){
var inst_28451 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28502_28602 = state_28483__$1;
(statearr_28502_28602[(2)] = inst_28451);

(statearr_28502_28602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (21))){
var inst_28473 = (state_28483[(2)]);
var state_28483__$1 = (function (){var statearr_28506 = state_28483;
(statearr_28506[(9)] = inst_28473);

return statearr_28506;
})();
var statearr_28507_28613 = state_28483__$1;
(statearr_28507_28613[(2)] = null);

(statearr_28507_28613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (13))){
var inst_28432 = (state_28483[(10)]);
var inst_28434 = cljs.core.chunked_seq_QMARK_.call(null,inst_28432);
var state_28483__$1 = state_28483;
if(inst_28434){
var statearr_28510_28615 = state_28483__$1;
(statearr_28510_28615[(1)] = (16));

} else {
var statearr_28512_28616 = state_28483__$1;
(statearr_28512_28616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (22))){
var inst_28464 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
if(cljs.core.truth_(inst_28464)){
var statearr_28514_28618 = state_28483__$1;
(statearr_28514_28618[(1)] = (23));

} else {
var statearr_28515_28621 = state_28483__$1;
(statearr_28515_28621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (6))){
var inst_28459 = (state_28483[(11)]);
var inst_28404 = (state_28483[(8)]);
var inst_28457 = (state_28483[(7)]);
var inst_28457__$1 = topic_fn.call(null,inst_28404);
var inst_28458 = cljs.core.deref.call(null,mults);
var inst_28459__$1 = cljs.core.get.call(null,inst_28458,inst_28457__$1);
var state_28483__$1 = (function (){var statearr_28517 = state_28483;
(statearr_28517[(11)] = inst_28459__$1);

(statearr_28517[(7)] = inst_28457__$1);

return statearr_28517;
})();
if(cljs.core.truth_(inst_28459__$1)){
var statearr_28519_28626 = state_28483__$1;
(statearr_28519_28626[(1)] = (19));

} else {
var statearr_28520_28627 = state_28483__$1;
(statearr_28520_28627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (25))){
var inst_28470 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28521_28630 = state_28483__$1;
(statearr_28521_28630[(2)] = inst_28470);

(statearr_28521_28630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (17))){
var inst_28432 = (state_28483[(10)]);
var inst_28442 = cljs.core.first.call(null,inst_28432);
var inst_28443 = cljs.core.async.muxch_STAR_.call(null,inst_28442);
var inst_28444 = cljs.core.async.close_BANG_.call(null,inst_28443);
var inst_28445 = cljs.core.next.call(null,inst_28432);
var inst_28415 = inst_28445;
var inst_28416 = null;
var inst_28417 = (0);
var inst_28418 = (0);
var state_28483__$1 = (function (){var statearr_28522 = state_28483;
(statearr_28522[(12)] = inst_28418);

(statearr_28522[(13)] = inst_28417);

(statearr_28522[(14)] = inst_28416);

(statearr_28522[(15)] = inst_28444);

(statearr_28522[(16)] = inst_28415);

return statearr_28522;
})();
var statearr_28523_28633 = state_28483__$1;
(statearr_28523_28633[(2)] = null);

(statearr_28523_28633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (3))){
var inst_28478 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28483__$1,inst_28478);
} else {
if((state_val_28484 === (12))){
var inst_28453 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28524_28634 = state_28483__$1;
(statearr_28524_28634[(2)] = inst_28453);

(statearr_28524_28634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (2))){
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28483__$1,(4),ch);
} else {
if((state_val_28484 === (23))){
var state_28483__$1 = state_28483;
var statearr_28525_28635 = state_28483__$1;
(statearr_28525_28635[(2)] = null);

(statearr_28525_28635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (19))){
var inst_28459 = (state_28483[(11)]);
var inst_28404 = (state_28483[(8)]);
var inst_28462 = cljs.core.async.muxch_STAR_.call(null,inst_28459);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28483__$1,(22),inst_28462,inst_28404);
} else {
if((state_val_28484 === (11))){
var inst_28432 = (state_28483[(10)]);
var inst_28415 = (state_28483[(16)]);
var inst_28432__$1 = cljs.core.seq.call(null,inst_28415);
var state_28483__$1 = (function (){var statearr_28526 = state_28483;
(statearr_28526[(10)] = inst_28432__$1);

return statearr_28526;
})();
if(inst_28432__$1){
var statearr_28527_28639 = state_28483__$1;
(statearr_28527_28639[(1)] = (13));

} else {
var statearr_28529_28640 = state_28483__$1;
(statearr_28529_28640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (9))){
var inst_28455 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28530_28643 = state_28483__$1;
(statearr_28530_28643[(2)] = inst_28455);

(statearr_28530_28643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (5))){
var inst_28412 = cljs.core.deref.call(null,mults);
var inst_28413 = cljs.core.vals.call(null,inst_28412);
var inst_28414 = cljs.core.seq.call(null,inst_28413);
var inst_28415 = inst_28414;
var inst_28416 = null;
var inst_28417 = (0);
var inst_28418 = (0);
var state_28483__$1 = (function (){var statearr_28531 = state_28483;
(statearr_28531[(12)] = inst_28418);

(statearr_28531[(13)] = inst_28417);

(statearr_28531[(14)] = inst_28416);

(statearr_28531[(16)] = inst_28415);

return statearr_28531;
})();
var statearr_28532_28647 = state_28483__$1;
(statearr_28532_28647[(2)] = null);

(statearr_28532_28647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (14))){
var state_28483__$1 = state_28483;
var statearr_28536_28649 = state_28483__$1;
(statearr_28536_28649[(2)] = null);

(statearr_28536_28649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (16))){
var inst_28432 = (state_28483[(10)]);
var inst_28437 = cljs.core.chunk_first.call(null,inst_28432);
var inst_28438 = cljs.core.chunk_rest.call(null,inst_28432);
var inst_28439 = cljs.core.count.call(null,inst_28437);
var inst_28415 = inst_28438;
var inst_28416 = inst_28437;
var inst_28417 = inst_28439;
var inst_28418 = (0);
var state_28483__$1 = (function (){var statearr_28537 = state_28483;
(statearr_28537[(12)] = inst_28418);

(statearr_28537[(13)] = inst_28417);

(statearr_28537[(14)] = inst_28416);

(statearr_28537[(16)] = inst_28415);

return statearr_28537;
})();
var statearr_28538_28662 = state_28483__$1;
(statearr_28538_28662[(2)] = null);

(statearr_28538_28662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (10))){
var inst_28418 = (state_28483[(12)]);
var inst_28417 = (state_28483[(13)]);
var inst_28416 = (state_28483[(14)]);
var inst_28415 = (state_28483[(16)]);
var inst_28424 = cljs.core._nth.call(null,inst_28416,inst_28418);
var inst_28426 = cljs.core.async.muxch_STAR_.call(null,inst_28424);
var inst_28427 = cljs.core.async.close_BANG_.call(null,inst_28426);
var inst_28428 = (inst_28418 + (1));
var tmp28533 = inst_28417;
var tmp28534 = inst_28416;
var tmp28535 = inst_28415;
var inst_28415__$1 = tmp28535;
var inst_28416__$1 = tmp28534;
var inst_28417__$1 = tmp28533;
var inst_28418__$1 = inst_28428;
var state_28483__$1 = (function (){var statearr_28539 = state_28483;
(statearr_28539[(12)] = inst_28418__$1);

(statearr_28539[(13)] = inst_28417__$1);

(statearr_28539[(17)] = inst_28427);

(statearr_28539[(14)] = inst_28416__$1);

(statearr_28539[(16)] = inst_28415__$1);

return statearr_28539;
})();
var statearr_28540_28675 = state_28483__$1;
(statearr_28540_28675[(2)] = null);

(statearr_28540_28675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (18))){
var inst_28448 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28541_28680 = state_28483__$1;
(statearr_28541_28680[(2)] = inst_28448);

(statearr_28541_28680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (8))){
var inst_28418 = (state_28483[(12)]);
var inst_28417 = (state_28483[(13)]);
var inst_28421 = (inst_28418 < inst_28417);
var inst_28422 = inst_28421;
var state_28483__$1 = state_28483;
if(cljs.core.truth_(inst_28422)){
var statearr_28542_28683 = state_28483__$1;
(statearr_28542_28683[(1)] = (10));

} else {
var statearr_28543_28685 = state_28483__$1;
(statearr_28543_28685[(1)] = (11));

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
});})(c__27023__auto___28565,mults,ensure_mult,p))
;
return ((function (switch__26857__auto__,c__27023__auto___28565,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_28545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28545[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_28545[(1)] = (1));

return statearr_28545;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_28483){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28546){if((e28546 instanceof Object)){
var ex__26861__auto__ = e28546;
var statearr_28547_28688 = state_28483;
(statearr_28547_28688[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28698 = state_28483;
state_28483 = G__28698;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_28483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_28483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___28565,mults,ensure_mult,p))
})();
var state__27025__auto__ = (function (){var statearr_28549 = f__27024__auto__.call(null);
(statearr_28549[(6)] = c__27023__auto___28565);

return statearr_28549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28565,mults,ensure_mult,p))
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
var G__28552 = arguments.length;
switch (G__28552) {
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
var G__28556 = arguments.length;
switch (G__28556) {
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
var G__28564 = arguments.length;
switch (G__28564) {
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
var c__27023__auto___28779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28612){
var state_val_28614 = (state_28612[(1)]);
if((state_val_28614 === (7))){
var state_28612__$1 = state_28612;
var statearr_28617_28792 = state_28612__$1;
(statearr_28617_28792[(2)] = null);

(statearr_28617_28792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28612__$1 = state_28612;
var statearr_28619_28797 = state_28612__$1;
(statearr_28619_28797[(2)] = null);

(statearr_28619_28797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28570 = (state_28612[(7)]);
var inst_28573 = (inst_28570 < cnt);
var state_28612__$1 = state_28612;
if(cljs.core.truth_(inst_28573)){
var statearr_28623_28811 = state_28612__$1;
(statearr_28623_28811[(1)] = (6));

} else {
var statearr_28624_28821 = state_28612__$1;
(statearr_28624_28821[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (15))){
var inst_28608 = (state_28612[(2)]);
var state_28612__$1 = state_28612;
var statearr_28625_28824 = state_28612__$1;
(statearr_28625_28824[(2)] = inst_28608);

(statearr_28625_28824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (13))){
var inst_28600 = cljs.core.async.close_BANG_.call(null,out);
var state_28612__$1 = state_28612;
var statearr_28628_28825 = state_28612__$1;
(statearr_28628_28825[(2)] = inst_28600);

(statearr_28628_28825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var state_28612__$1 = state_28612;
var statearr_28631_28826 = state_28612__$1;
(statearr_28631_28826[(2)] = null);

(statearr_28631_28826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (3))){
var inst_28610 = (state_28612[(2)]);
var state_28612__$1 = state_28612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28612__$1,inst_28610);
} else {
if((state_val_28614 === (12))){
var inst_28597 = (state_28612[(8)]);
var inst_28597__$1 = (state_28612[(2)]);
var inst_28598 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28597__$1);
var state_28612__$1 = (function (){var statearr_28636 = state_28612;
(statearr_28636[(8)] = inst_28597__$1);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28598)){
var statearr_28637_28835 = state_28612__$1;
(statearr_28637_28835[(1)] = (13));

} else {
var statearr_28638_28840 = state_28612__$1;
(statearr_28638_28840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (2))){
var inst_28568 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28570 = (0);
var state_28612__$1 = (function (){var statearr_28641 = state_28612;
(statearr_28641[(7)] = inst_28570);

(statearr_28641[(9)] = inst_28568);

return statearr_28641;
})();
var statearr_28642_28852 = state_28612__$1;
(statearr_28642_28852[(2)] = null);

(statearr_28642_28852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (11))){
var inst_28570 = (state_28612[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28612,(10),Object,null,(9));
var inst_28582 = chs__$1.call(null,inst_28570);
var inst_28584 = done.call(null,inst_28570);
var inst_28585 = cljs.core.async.take_BANG_.call(null,inst_28582,inst_28584);
var state_28612__$1 = state_28612;
var statearr_28646_28863 = state_28612__$1;
(statearr_28646_28863[(2)] = inst_28585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (9))){
var inst_28570 = (state_28612[(7)]);
var inst_28587 = (state_28612[(2)]);
var inst_28589 = (inst_28570 + (1));
var inst_28570__$1 = inst_28589;
var state_28612__$1 = (function (){var statearr_28648 = state_28612;
(statearr_28648[(7)] = inst_28570__$1);

(statearr_28648[(10)] = inst_28587);

return statearr_28648;
})();
var statearr_28650_28872 = state_28612__$1;
(statearr_28650_28872[(2)] = null);

(statearr_28650_28872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28595 = (state_28612[(2)]);
var state_28612__$1 = (function (){var statearr_28655 = state_28612;
(statearr_28655[(11)] = inst_28595);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28612__$1,(12),dchan);
} else {
if((state_val_28614 === (14))){
var inst_28597 = (state_28612[(8)]);
var inst_28603 = cljs.core.apply.call(null,f,inst_28597);
var state_28612__$1 = state_28612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28612__$1,(16),out,inst_28603);
} else {
if((state_val_28614 === (16))){
var inst_28605 = (state_28612[(2)]);
var state_28612__$1 = (function (){var statearr_28663 = state_28612;
(statearr_28663[(12)] = inst_28605);

return statearr_28663;
})();
var statearr_28664_28875 = state_28612__$1;
(statearr_28664_28875[(2)] = null);

(statearr_28664_28875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (10))){
var inst_28577 = (state_28612[(2)]);
var inst_28578 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28612__$1 = (function (){var statearr_28665 = state_28612;
(statearr_28665[(13)] = inst_28577);

return statearr_28665;
})();
var statearr_28666_28879 = state_28612__$1;
(statearr_28666_28879[(2)] = inst_28578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28593 = (state_28612[(2)]);
var state_28612__$1 = state_28612;
var statearr_28674_28882 = state_28612__$1;
(statearr_28674_28882[(2)] = inst_28593);

(statearr_28674_28882[(1)] = (5));


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
});})(c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26857__auto__,c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_28612){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28681){if((e28681 instanceof Object)){
var ex__26861__auto__ = e28681;
var statearr_28682_28888 = state_28612;
(statearr_28682_28888[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28896 = state_28612;
state_28612 = G__28896;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_28612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_28612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_28687 = f__27024__auto__.call(null);
(statearr_28687[(6)] = c__27023__auto___28779);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28779,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28699 = arguments.length;
switch (G__28699) {
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
var c__27023__auto___28917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28917,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___28917,out){
return (function (state_28757){
var state_val_28758 = (state_28757[(1)]);
if((state_val_28758 === (7))){
var inst_28715 = (state_28757[(7)]);
var inst_28714 = (state_28757[(8)]);
var inst_28714__$1 = (state_28757[(2)]);
var inst_28715__$1 = cljs.core.nth.call(null,inst_28714__$1,(0),null);
var inst_28716 = cljs.core.nth.call(null,inst_28714__$1,(1),null);
var inst_28717 = (inst_28715__$1 == null);
var state_28757__$1 = (function (){var statearr_28761 = state_28757;
(statearr_28761[(7)] = inst_28715__$1);

(statearr_28761[(8)] = inst_28714__$1);

(statearr_28761[(9)] = inst_28716);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28717)){
var statearr_28762_28929 = state_28757__$1;
(statearr_28762_28929[(1)] = (8));

} else {
var statearr_28767_28931 = state_28757__$1;
(statearr_28767_28931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (1))){
var inst_28704 = cljs.core.vec.call(null,chs);
var inst_28705 = inst_28704;
var state_28757__$1 = (function (){var statearr_28771 = state_28757;
(statearr_28771[(10)] = inst_28705);

return statearr_28771;
})();
var statearr_28772_28934 = state_28757__$1;
(statearr_28772_28934[(2)] = null);

(statearr_28772_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (4))){
var inst_28705 = (state_28757[(10)]);
var state_28757__$1 = state_28757;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28757__$1,(7),inst_28705);
} else {
if((state_val_28758 === (6))){
var inst_28744 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28783_28937 = state_28757__$1;
(statearr_28783_28937[(2)] = inst_28744);

(statearr_28783_28937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (3))){
var inst_28746 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28757__$1,inst_28746);
} else {
if((state_val_28758 === (2))){
var inst_28705 = (state_28757[(10)]);
var inst_28707 = cljs.core.count.call(null,inst_28705);
var inst_28708 = (inst_28707 > (0));
var state_28757__$1 = state_28757;
if(cljs.core.truth_(inst_28708)){
var statearr_28798_28942 = state_28757__$1;
(statearr_28798_28942[(1)] = (4));

} else {
var statearr_28803_28945 = state_28757__$1;
(statearr_28803_28945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (11))){
var inst_28705 = (state_28757[(10)]);
var inst_28731 = (state_28757[(2)]);
var tmp28791 = inst_28705;
var inst_28705__$1 = tmp28791;
var state_28757__$1 = (function (){var statearr_28822 = state_28757;
(statearr_28822[(11)] = inst_28731);

(statearr_28822[(10)] = inst_28705__$1);

return statearr_28822;
})();
var statearr_28823_28951 = state_28757__$1;
(statearr_28823_28951[(2)] = null);

(statearr_28823_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (9))){
var inst_28715 = (state_28757[(7)]);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28757__$1,(11),out,inst_28715);
} else {
if((state_val_28758 === (5))){
var inst_28742 = cljs.core.async.close_BANG_.call(null,out);
var state_28757__$1 = state_28757;
var statearr_28834_28953 = state_28757__$1;
(statearr_28834_28953[(2)] = inst_28742);

(statearr_28834_28953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (10))){
var inst_28740 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28842_28956 = state_28757__$1;
(statearr_28842_28956[(2)] = inst_28740);

(statearr_28842_28956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (8))){
var inst_28715 = (state_28757[(7)]);
var inst_28714 = (state_28757[(8)]);
var inst_28705 = (state_28757[(10)]);
var inst_28716 = (state_28757[(9)]);
var inst_28723 = (function (){var cs = inst_28705;
var vec__28710 = inst_28714;
var v = inst_28715;
var c = inst_28716;
return ((function (cs,vec__28710,v,c,inst_28715,inst_28714,inst_28705,inst_28716,state_val_28758,c__27023__auto___28917,out){
return (function (p1__28689_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28689_SHARP_);
});
;})(cs,vec__28710,v,c,inst_28715,inst_28714,inst_28705,inst_28716,state_val_28758,c__27023__auto___28917,out))
})();
var inst_28724 = cljs.core.filterv.call(null,inst_28723,inst_28705);
var inst_28705__$1 = inst_28724;
var state_28757__$1 = (function (){var statearr_28857 = state_28757;
(statearr_28857[(10)] = inst_28705__$1);

return statearr_28857;
})();
var statearr_28862_28961 = state_28757__$1;
(statearr_28862_28961[(2)] = null);

(statearr_28862_28961[(1)] = (2));


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
});})(c__27023__auto___28917,out))
;
return ((function (switch__26857__auto__,c__27023__auto___28917,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_28864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28864[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_28864[(1)] = (1));

return statearr_28864;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_28757){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28870){if((e28870 instanceof Object)){
var ex__26861__auto__ = e28870;
var statearr_28873_28985 = state_28757;
(statearr_28873_28985[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28986 = state_28757;
state_28757 = G__28986;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_28757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_28757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___28917,out))
})();
var state__27025__auto__ = (function (){var statearr_28874 = f__27024__auto__.call(null);
(statearr_28874[(6)] = c__27023__auto___28917);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28917,out))
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
var G__28881 = arguments.length;
switch (G__28881) {
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
var c__27023__auto___29001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29001,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___29001,out){
return (function (state_28911){
var state_val_28912 = (state_28911[(1)]);
if((state_val_28912 === (7))){
var inst_28892 = (state_28911[(7)]);
var inst_28892__$1 = (state_28911[(2)]);
var inst_28893 = (inst_28892__$1 == null);
var inst_28894 = cljs.core.not.call(null,inst_28893);
var state_28911__$1 = (function (){var statearr_28915 = state_28911;
(statearr_28915[(7)] = inst_28892__$1);

return statearr_28915;
})();
if(inst_28894){
var statearr_28916_29006 = state_28911__$1;
(statearr_28916_29006[(1)] = (8));

} else {
var statearr_28918_29007 = state_28911__$1;
(statearr_28918_29007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (1))){
var inst_28886 = (0);
var state_28911__$1 = (function (){var statearr_28921 = state_28911;
(statearr_28921[(8)] = inst_28886);

return statearr_28921;
})();
var statearr_28922_29008 = state_28911__$1;
(statearr_28922_29008[(2)] = null);

(statearr_28922_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (4))){
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28911__$1,(7),ch);
} else {
if((state_val_28912 === (6))){
var inst_28906 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
var statearr_28928_29009 = state_28911__$1;
(statearr_28928_29009[(2)] = inst_28906);

(statearr_28928_29009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (3))){
var inst_28908 = (state_28911[(2)]);
var inst_28909 = cljs.core.async.close_BANG_.call(null,out);
var state_28911__$1 = (function (){var statearr_28932 = state_28911;
(statearr_28932[(9)] = inst_28908);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28911__$1,inst_28909);
} else {
if((state_val_28912 === (2))){
var inst_28886 = (state_28911[(8)]);
var inst_28889 = (inst_28886 < n);
var state_28911__$1 = state_28911;
if(cljs.core.truth_(inst_28889)){
var statearr_28935_29014 = state_28911__$1;
(statearr_28935_29014[(1)] = (4));

} else {
var statearr_28936_29015 = state_28911__$1;
(statearr_28936_29015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (11))){
var inst_28886 = (state_28911[(8)]);
var inst_28898 = (state_28911[(2)]);
var inst_28899 = (inst_28886 + (1));
var inst_28886__$1 = inst_28899;
var state_28911__$1 = (function (){var statearr_28938 = state_28911;
(statearr_28938[(8)] = inst_28886__$1);

(statearr_28938[(10)] = inst_28898);

return statearr_28938;
})();
var statearr_28939_29017 = state_28911__$1;
(statearr_28939_29017[(2)] = null);

(statearr_28939_29017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (9))){
var state_28911__$1 = state_28911;
var statearr_28941_29018 = state_28911__$1;
(statearr_28941_29018[(2)] = null);

(statearr_28941_29018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (5))){
var state_28911__$1 = state_28911;
var statearr_28944_29019 = state_28911__$1;
(statearr_28944_29019[(2)] = null);

(statearr_28944_29019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (10))){
var inst_28903 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
var statearr_28949_29020 = state_28911__$1;
(statearr_28949_29020[(2)] = inst_28903);

(statearr_28949_29020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (8))){
var inst_28892 = (state_28911[(7)]);
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28911__$1,(11),out,inst_28892);
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
});})(c__27023__auto___29001,out))
;
return ((function (switch__26857__auto__,c__27023__auto___29001,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_28952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28952[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_28952[(1)] = (1));

return statearr_28952;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_28911){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_28911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e28954){if((e28954 instanceof Object)){
var ex__26861__auto__ = e28954;
var statearr_28955_29026 = state_28911;
(statearr_28955_29026[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29028 = state_28911;
state_28911 = G__29028;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_28911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_28911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___29001,out))
})();
var state__27025__auto__ = (function (){var statearr_28960 = f__27024__auto__.call(null);
(statearr_28960[(6)] = c__27023__auto___29001);

return statearr_28960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29001,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28963 = (function (f,ch,meta28964){
this.f = f;
this.ch = ch;
this.meta28964 = meta28964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28965,meta28964__$1){
var self__ = this;
var _28965__$1 = this;
return (new cljs.core.async.t_cljs$core$async28963(self__.f,self__.ch,meta28964__$1));
});

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28965){
var self__ = this;
var _28965__$1 = this;
return self__.meta28964;
});

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28998 = (function (f,ch,meta28964,_,fn1,meta28999){
this.f = f;
this.ch = ch;
this.meta28964 = meta28964;
this._ = _;
this.fn1 = fn1;
this.meta28999 = meta28999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29000,meta28999__$1){
var self__ = this;
var _29000__$1 = this;
return (new cljs.core.async.t_cljs$core$async28998(self__.f,self__.ch,self__.meta28964,self__._,self__.fn1,meta28999__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29000){
var self__ = this;
var _29000__$1 = this;
return self__.meta28999;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28962_SHARP_){
return f1.call(null,(((p1__28962_SHARP_ == null))?null:self__.f.call(null,p1__28962_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28964","meta28964",1492176512,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28963","cljs.core.async/t_cljs$core$async28963",-1662191351,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28999","meta28999",1111932633,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28998";

cljs.core.async.t_cljs$core$async28998.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28998");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28998.
 */
cljs.core.async.__GT_t_cljs$core$async28998 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28998(f__$1,ch__$1,meta28964__$1,___$2,fn1__$1,meta28999){
return (new cljs.core.async.t_cljs$core$async28998(f__$1,ch__$1,meta28964__$1,___$2,fn1__$1,meta28999));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28998(self__.f,self__.ch,self__.meta28964,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28964","meta28964",1492176512,null)], null);
});

cljs.core.async.t_cljs$core$async28963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28963";

cljs.core.async.t_cljs$core$async28963.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28963");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28963.
 */
cljs.core.async.__GT_t_cljs$core$async28963 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28963(f__$1,ch__$1,meta28964){
return (new cljs.core.async.t_cljs$core$async28963(f__$1,ch__$1,meta28964));
});

}

return (new cljs.core.async.t_cljs$core$async28963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29023 = (function (f,ch,meta29024){
this.f = f;
this.ch = ch;
this.meta29024 = meta29024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29025,meta29024__$1){
var self__ = this;
var _29025__$1 = this;
return (new cljs.core.async.t_cljs$core$async29023(self__.f,self__.ch,meta29024__$1));
});

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29025){
var self__ = this;
var _29025__$1 = this;
return self__.meta29024;
});

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29024","meta29024",-1425765296,null)], null);
});

cljs.core.async.t_cljs$core$async29023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29023";

cljs.core.async.t_cljs$core$async29023.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29023");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29023.
 */
cljs.core.async.__GT_t_cljs$core$async29023 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29023(f__$1,ch__$1,meta29024){
return (new cljs.core.async.t_cljs$core$async29023(f__$1,ch__$1,meta29024));
});

}

return (new cljs.core.async.t_cljs$core$async29023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29037 = (function (p,ch,meta29038){
this.p = p;
this.ch = ch;
this.meta29038 = meta29038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29039,meta29038__$1){
var self__ = this;
var _29039__$1 = this;
return (new cljs.core.async.t_cljs$core$async29037(self__.p,self__.ch,meta29038__$1));
});

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29039){
var self__ = this;
var _29039__$1 = this;
return self__.meta29038;
});

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29038","meta29038",1756750456,null)], null);
});

cljs.core.async.t_cljs$core$async29037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29037";

cljs.core.async.t_cljs$core$async29037.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29037");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29037.
 */
cljs.core.async.__GT_t_cljs$core$async29037 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29037(p__$1,ch__$1,meta29038){
return (new cljs.core.async.t_cljs$core$async29037(p__$1,ch__$1,meta29038));
});

}

return (new cljs.core.async.t_cljs$core$async29037(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29055 = arguments.length;
switch (G__29055) {
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
var c__27023__auto___29111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29111,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___29111,out){
return (function (state_29080){
var state_val_29081 = (state_29080[(1)]);
if((state_val_29081 === (7))){
var inst_29076 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29086_29113 = state_29080__$1;
(statearr_29086_29113[(2)] = inst_29076);

(statearr_29086_29113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (1))){
var state_29080__$1 = state_29080;
var statearr_29087_29114 = state_29080__$1;
(statearr_29087_29114[(2)] = null);

(statearr_29087_29114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (4))){
var inst_29062 = (state_29080[(7)]);
var inst_29062__$1 = (state_29080[(2)]);
var inst_29063 = (inst_29062__$1 == null);
var state_29080__$1 = (function (){var statearr_29088 = state_29080;
(statearr_29088[(7)] = inst_29062__$1);

return statearr_29088;
})();
if(cljs.core.truth_(inst_29063)){
var statearr_29089_29133 = state_29080__$1;
(statearr_29089_29133[(1)] = (5));

} else {
var statearr_29090_29134 = state_29080__$1;
(statearr_29090_29134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (6))){
var inst_29062 = (state_29080[(7)]);
var inst_29067 = p.call(null,inst_29062);
var state_29080__$1 = state_29080;
if(cljs.core.truth_(inst_29067)){
var statearr_29091_29144 = state_29080__$1;
(statearr_29091_29144[(1)] = (8));

} else {
var statearr_29092_29145 = state_29080__$1;
(statearr_29092_29145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (3))){
var inst_29078 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29080__$1,inst_29078);
} else {
if((state_val_29081 === (2))){
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29080__$1,(4),ch);
} else {
if((state_val_29081 === (11))){
var inst_29070 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29094_29159 = state_29080__$1;
(statearr_29094_29159[(2)] = inst_29070);

(statearr_29094_29159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (9))){
var state_29080__$1 = state_29080;
var statearr_29096_29181 = state_29080__$1;
(statearr_29096_29181[(2)] = null);

(statearr_29096_29181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (5))){
var inst_29065 = cljs.core.async.close_BANG_.call(null,out);
var state_29080__$1 = state_29080;
var statearr_29098_29184 = state_29080__$1;
(statearr_29098_29184[(2)] = inst_29065);

(statearr_29098_29184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (10))){
var inst_29073 = (state_29080[(2)]);
var state_29080__$1 = (function (){var statearr_29099 = state_29080;
(statearr_29099[(8)] = inst_29073);

return statearr_29099;
})();
var statearr_29100_29185 = state_29080__$1;
(statearr_29100_29185[(2)] = null);

(statearr_29100_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (8))){
var inst_29062 = (state_29080[(7)]);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29080__$1,(11),out,inst_29062);
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
});})(c__27023__auto___29111,out))
;
return ((function (switch__26857__auto__,c__27023__auto___29111,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_29104 = [null,null,null,null,null,null,null,null,null];
(statearr_29104[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_29104[(1)] = (1));

return statearr_29104;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_29080){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_29080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e29105){if((e29105 instanceof Object)){
var ex__26861__auto__ = e29105;
var statearr_29106_29188 = state_29080;
(statearr_29106_29188[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29080;
state_29080 = G__29190;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_29080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_29080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___29111,out))
})();
var state__27025__auto__ = (function (){var statearr_29107 = f__27024__auto__.call(null);
(statearr_29107[(6)] = c__27023__auto___29111);

return statearr_29107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29111,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29110 = arguments.length;
switch (G__29110) {
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__){
return (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (7))){
var inst_29177 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29186_29285 = state_29182__$1;
(statearr_29186_29285[(2)] = inst_29177);

(statearr_29186_29285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (20))){
var inst_29146 = (state_29182[(7)]);
var inst_29157 = (state_29182[(2)]);
var inst_29158 = cljs.core.next.call(null,inst_29146);
var inst_29128 = inst_29158;
var inst_29129 = null;
var inst_29130 = (0);
var inst_29131 = (0);
var state_29182__$1 = (function (){var statearr_29187 = state_29182;
(statearr_29187[(8)] = inst_29130);

(statearr_29187[(9)] = inst_29128);

(statearr_29187[(10)] = inst_29131);

(statearr_29187[(11)] = inst_29129);

(statearr_29187[(12)] = inst_29157);

return statearr_29187;
})();
var statearr_29189_29288 = state_29182__$1;
(statearr_29189_29288[(2)] = null);

(statearr_29189_29288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (1))){
var state_29182__$1 = state_29182;
var statearr_29192_29291 = state_29182__$1;
(statearr_29192_29291[(2)] = null);

(statearr_29192_29291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (4))){
var inst_29117 = (state_29182[(13)]);
var inst_29117__$1 = (state_29182[(2)]);
var inst_29118 = (inst_29117__$1 == null);
var state_29182__$1 = (function (){var statearr_29193 = state_29182;
(statearr_29193[(13)] = inst_29117__$1);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29194_29295 = state_29182__$1;
(statearr_29194_29295[(1)] = (5));

} else {
var statearr_29196_29296 = state_29182__$1;
(statearr_29196_29296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (15))){
var state_29182__$1 = state_29182;
var statearr_29201_29297 = state_29182__$1;
(statearr_29201_29297[(2)] = null);

(statearr_29201_29297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (21))){
var state_29182__$1 = state_29182;
var statearr_29205_29298 = state_29182__$1;
(statearr_29205_29298[(2)] = null);

(statearr_29205_29298[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (13))){
var inst_29130 = (state_29182[(8)]);
var inst_29128 = (state_29182[(9)]);
var inst_29131 = (state_29182[(10)]);
var inst_29129 = (state_29182[(11)]);
var inst_29140 = (state_29182[(2)]);
var inst_29141 = (inst_29131 + (1));
var tmp29198 = inst_29130;
var tmp29199 = inst_29128;
var tmp29200 = inst_29129;
var inst_29128__$1 = tmp29199;
var inst_29129__$1 = tmp29200;
var inst_29130__$1 = tmp29198;
var inst_29131__$1 = inst_29141;
var state_29182__$1 = (function (){var statearr_29206 = state_29182;
(statearr_29206[(14)] = inst_29140);

(statearr_29206[(8)] = inst_29130__$1);

(statearr_29206[(9)] = inst_29128__$1);

(statearr_29206[(10)] = inst_29131__$1);

(statearr_29206[(11)] = inst_29129__$1);

return statearr_29206;
})();
var statearr_29207_29301 = state_29182__$1;
(statearr_29207_29301[(2)] = null);

(statearr_29207_29301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (22))){
var state_29182__$1 = state_29182;
var statearr_29208_29302 = state_29182__$1;
(statearr_29208_29302[(2)] = null);

(statearr_29208_29302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (6))){
var inst_29117 = (state_29182[(13)]);
var inst_29126 = f.call(null,inst_29117);
var inst_29127 = cljs.core.seq.call(null,inst_29126);
var inst_29128 = inst_29127;
var inst_29129 = null;
var inst_29130 = (0);
var inst_29131 = (0);
var state_29182__$1 = (function (){var statearr_29209 = state_29182;
(statearr_29209[(8)] = inst_29130);

(statearr_29209[(9)] = inst_29128);

(statearr_29209[(10)] = inst_29131);

(statearr_29209[(11)] = inst_29129);

return statearr_29209;
})();
var statearr_29212_29326 = state_29182__$1;
(statearr_29212_29326[(2)] = null);

(statearr_29212_29326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (17))){
var inst_29146 = (state_29182[(7)]);
var inst_29150 = cljs.core.chunk_first.call(null,inst_29146);
var inst_29151 = cljs.core.chunk_rest.call(null,inst_29146);
var inst_29152 = cljs.core.count.call(null,inst_29150);
var inst_29128 = inst_29151;
var inst_29129 = inst_29150;
var inst_29130 = inst_29152;
var inst_29131 = (0);
var state_29182__$1 = (function (){var statearr_29217 = state_29182;
(statearr_29217[(8)] = inst_29130);

(statearr_29217[(9)] = inst_29128);

(statearr_29217[(10)] = inst_29131);

(statearr_29217[(11)] = inst_29129);

return statearr_29217;
})();
var statearr_29218_29333 = state_29182__$1;
(statearr_29218_29333[(2)] = null);

(statearr_29218_29333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (3))){
var inst_29179 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29179);
} else {
if((state_val_29183 === (12))){
var inst_29167 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29221_29336 = state_29182__$1;
(statearr_29221_29336[(2)] = inst_29167);

(statearr_29221_29336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (2))){
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(4),in$);
} else {
if((state_val_29183 === (23))){
var inst_29175 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29222_29344 = state_29182__$1;
(statearr_29222_29344[(2)] = inst_29175);

(statearr_29222_29344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (19))){
var inst_29162 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29223_29346 = state_29182__$1;
(statearr_29223_29346[(2)] = inst_29162);

(statearr_29223_29346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (11))){
var inst_29146 = (state_29182[(7)]);
var inst_29128 = (state_29182[(9)]);
var inst_29146__$1 = cljs.core.seq.call(null,inst_29128);
var state_29182__$1 = (function (){var statearr_29224 = state_29182;
(statearr_29224[(7)] = inst_29146__$1);

return statearr_29224;
})();
if(inst_29146__$1){
var statearr_29225_29348 = state_29182__$1;
(statearr_29225_29348[(1)] = (14));

} else {
var statearr_29226_29351 = state_29182__$1;
(statearr_29226_29351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (9))){
var inst_29169 = (state_29182[(2)]);
var inst_29170 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29182__$1 = (function (){var statearr_29227 = state_29182;
(statearr_29227[(15)] = inst_29169);

return statearr_29227;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29228_29354 = state_29182__$1;
(statearr_29228_29354[(1)] = (21));

} else {
var statearr_29229_29355 = state_29182__$1;
(statearr_29229_29355[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (5))){
var inst_29120 = cljs.core.async.close_BANG_.call(null,out);
var state_29182__$1 = state_29182;
var statearr_29230_29366 = state_29182__$1;
(statearr_29230_29366[(2)] = inst_29120);

(statearr_29230_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (14))){
var inst_29146 = (state_29182[(7)]);
var inst_29148 = cljs.core.chunked_seq_QMARK_.call(null,inst_29146);
var state_29182__$1 = state_29182;
if(inst_29148){
var statearr_29231_29372 = state_29182__$1;
(statearr_29231_29372[(1)] = (17));

} else {
var statearr_29232_29373 = state_29182__$1;
(statearr_29232_29373[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (16))){
var inst_29165 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29233_29375 = state_29182__$1;
(statearr_29233_29375[(2)] = inst_29165);

(statearr_29233_29375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (10))){
var inst_29131 = (state_29182[(10)]);
var inst_29129 = (state_29182[(11)]);
var inst_29138 = cljs.core._nth.call(null,inst_29129,inst_29131);
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29182__$1,(13),out,inst_29138);
} else {
if((state_val_29183 === (18))){
var inst_29146 = (state_29182[(7)]);
var inst_29155 = cljs.core.first.call(null,inst_29146);
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29182__$1,(20),out,inst_29155);
} else {
if((state_val_29183 === (8))){
var inst_29130 = (state_29182[(8)]);
var inst_29131 = (state_29182[(10)]);
var inst_29135 = (inst_29131 < inst_29130);
var inst_29136 = inst_29135;
var state_29182__$1 = state_29182;
if(cljs.core.truth_(inst_29136)){
var statearr_29254_29380 = state_29182__$1;
(statearr_29254_29380[(1)] = (10));

} else {
var statearr_29255_29381 = state_29182__$1;
(statearr_29255_29381[(1)] = (11));

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
});})(c__27023__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____1 = (function (state_29182){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_29182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e29272){if((e29272 instanceof Object)){
var ex__26861__auto__ = e29272;
var statearr_29273_29383 = state_29182;
(statearr_29273_29383[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29386 = state_29182;
state_29182 = G__29386;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26858__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_29280 = f__27024__auto__.call(null);
(statearr_29280[(6)] = c__27023__auto__);

return statearr_29280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29282 = arguments.length;
switch (G__29282) {
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
var G__29290 = arguments.length;
switch (G__29290) {
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
var G__29300 = arguments.length;
switch (G__29300) {
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
var c__27023__auto___29438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29438,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___29438,out){
return (function (state_29327){
var state_val_29328 = (state_29327[(1)]);
if((state_val_29328 === (7))){
var inst_29321 = (state_29327[(2)]);
var state_29327__$1 = state_29327;
var statearr_29332_29443 = state_29327__$1;
(statearr_29332_29443[(2)] = inst_29321);

(statearr_29332_29443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (1))){
var inst_29303 = null;
var state_29327__$1 = (function (){var statearr_29334 = state_29327;
(statearr_29334[(7)] = inst_29303);

return statearr_29334;
})();
var statearr_29335_29446 = state_29327__$1;
(statearr_29335_29446[(2)] = null);

(statearr_29335_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (4))){
var inst_29306 = (state_29327[(8)]);
var inst_29306__$1 = (state_29327[(2)]);
var inst_29307 = (inst_29306__$1 == null);
var inst_29308 = cljs.core.not.call(null,inst_29307);
var state_29327__$1 = (function (){var statearr_29337 = state_29327;
(statearr_29337[(8)] = inst_29306__$1);

return statearr_29337;
})();
if(inst_29308){
var statearr_29341_29449 = state_29327__$1;
(statearr_29341_29449[(1)] = (5));

} else {
var statearr_29342_29450 = state_29327__$1;
(statearr_29342_29450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (6))){
var state_29327__$1 = state_29327;
var statearr_29345_29453 = state_29327__$1;
(statearr_29345_29453[(2)] = null);

(statearr_29345_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (3))){
var inst_29323 = (state_29327[(2)]);
var inst_29324 = cljs.core.async.close_BANG_.call(null,out);
var state_29327__$1 = (function (){var statearr_29347 = state_29327;
(statearr_29347[(9)] = inst_29323);

return statearr_29347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29327__$1,inst_29324);
} else {
if((state_val_29328 === (2))){
var state_29327__$1 = state_29327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29327__$1,(4),ch);
} else {
if((state_val_29328 === (11))){
var inst_29306 = (state_29327[(8)]);
var inst_29315 = (state_29327[(2)]);
var inst_29303 = inst_29306;
var state_29327__$1 = (function (){var statearr_29352 = state_29327;
(statearr_29352[(7)] = inst_29303);

(statearr_29352[(10)] = inst_29315);

return statearr_29352;
})();
var statearr_29353_29455 = state_29327__$1;
(statearr_29353_29455[(2)] = null);

(statearr_29353_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (9))){
var inst_29306 = (state_29327[(8)]);
var state_29327__$1 = state_29327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29327__$1,(11),out,inst_29306);
} else {
if((state_val_29328 === (5))){
var inst_29303 = (state_29327[(7)]);
var inst_29306 = (state_29327[(8)]);
var inst_29310 = cljs.core._EQ_.call(null,inst_29306,inst_29303);
var state_29327__$1 = state_29327;
if(inst_29310){
var statearr_29365_29457 = state_29327__$1;
(statearr_29365_29457[(1)] = (8));

} else {
var statearr_29367_29461 = state_29327__$1;
(statearr_29367_29461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (10))){
var inst_29318 = (state_29327[(2)]);
var state_29327__$1 = state_29327;
var statearr_29371_29463 = state_29327__$1;
(statearr_29371_29463[(2)] = inst_29318);

(statearr_29371_29463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29328 === (8))){
var inst_29303 = (state_29327[(7)]);
var tmp29356 = inst_29303;
var inst_29303__$1 = tmp29356;
var state_29327__$1 = (function (){var statearr_29374 = state_29327;
(statearr_29374[(7)] = inst_29303__$1);

return statearr_29374;
})();
var statearr_29376_29467 = state_29327__$1;
(statearr_29376_29467[(2)] = null);

(statearr_29376_29467[(1)] = (2));


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
});})(c__27023__auto___29438,out))
;
return ((function (switch__26857__auto__,c__27023__auto___29438,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_29377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29377[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_29377[(1)] = (1));

return statearr_29377;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_29327){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_29327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e29378){if((e29378 instanceof Object)){
var ex__26861__auto__ = e29378;
var statearr_29379_29478 = state_29327;
(statearr_29379_29478[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29487 = state_29327;
state_29327 = G__29487;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_29327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_29327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___29438,out))
})();
var state__27025__auto__ = (function (){var statearr_29382 = f__27024__auto__.call(null);
(statearr_29382[(6)] = c__27023__auto___29438);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29438,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29385 = arguments.length;
switch (G__29385) {
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
var c__27023__auto___29518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29518,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___29518,out){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var inst_29424 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29435_29519 = state_29429__$1;
(statearr_29435_29519[(2)] = inst_29424);

(statearr_29435_29519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var inst_29389 = (new Array(n));
var inst_29390 = inst_29389;
var inst_29391 = (0);
var state_29429__$1 = (function (){var statearr_29436 = state_29429;
(statearr_29436[(7)] = inst_29391);

(statearr_29436[(8)] = inst_29390);

return statearr_29436;
})();
var statearr_29440_29529 = state_29429__$1;
(statearr_29440_29529[(2)] = null);

(statearr_29440_29529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var inst_29394 = (state_29429[(9)]);
var inst_29394__$1 = (state_29429[(2)]);
var inst_29396 = (inst_29394__$1 == null);
var inst_29397 = cljs.core.not.call(null,inst_29396);
var state_29429__$1 = (function (){var statearr_29442 = state_29429;
(statearr_29442[(9)] = inst_29394__$1);

return statearr_29442;
})();
if(inst_29397){
var statearr_29444_29547 = state_29429__$1;
(statearr_29444_29547[(1)] = (5));

} else {
var statearr_29445_29554 = state_29429__$1;
(statearr_29445_29554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (15))){
var inst_29418 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29447_29566 = state_29429__$1;
(statearr_29447_29566[(2)] = inst_29418);

(statearr_29447_29566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (13))){
var state_29429__$1 = state_29429;
var statearr_29448_29567 = state_29429__$1;
(statearr_29448_29567[(2)] = null);

(statearr_29448_29567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (6))){
var inst_29391 = (state_29429[(7)]);
var inst_29414 = (inst_29391 > (0));
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29414)){
var statearr_29451_29569 = state_29429__$1;
(statearr_29451_29569[(1)] = (12));

} else {
var statearr_29452_29570 = state_29429__$1;
(statearr_29452_29570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29426 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29426);
} else {
if((state_val_29430 === (12))){
var inst_29390 = (state_29429[(8)]);
var inst_29416 = cljs.core.vec.call(null,inst_29390);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(15),out,inst_29416);
} else {
if((state_val_29430 === (2))){
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(4),ch);
} else {
if((state_val_29430 === (11))){
var inst_29408 = (state_29429[(2)]);
var inst_29409 = (new Array(n));
var inst_29390 = inst_29409;
var inst_29391 = (0);
var state_29429__$1 = (function (){var statearr_29454 = state_29429;
(statearr_29454[(10)] = inst_29408);

(statearr_29454[(7)] = inst_29391);

(statearr_29454[(8)] = inst_29390);

return statearr_29454;
})();
var statearr_29456_29576 = state_29429__$1;
(statearr_29456_29576[(2)] = null);

(statearr_29456_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var inst_29390 = (state_29429[(8)]);
var inst_29406 = cljs.core.vec.call(null,inst_29390);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(11),out,inst_29406);
} else {
if((state_val_29430 === (5))){
var inst_29391 = (state_29429[(7)]);
var inst_29400 = (state_29429[(11)]);
var inst_29390 = (state_29429[(8)]);
var inst_29394 = (state_29429[(9)]);
var inst_29399 = (inst_29390[inst_29391] = inst_29394);
var inst_29400__$1 = (inst_29391 + (1));
var inst_29401 = (inst_29400__$1 < n);
var state_29429__$1 = (function (){var statearr_29462 = state_29429;
(statearr_29462[(11)] = inst_29400__$1);

(statearr_29462[(12)] = inst_29399);

return statearr_29462;
})();
if(cljs.core.truth_(inst_29401)){
var statearr_29464_29585 = state_29429__$1;
(statearr_29464_29585[(1)] = (8));

} else {
var statearr_29465_29586 = state_29429__$1;
(statearr_29465_29586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (14))){
var inst_29421 = (state_29429[(2)]);
var inst_29422 = cljs.core.async.close_BANG_.call(null,out);
var state_29429__$1 = (function (){var statearr_29468 = state_29429;
(statearr_29468[(13)] = inst_29421);

return statearr_29468;
})();
var statearr_29469_29599 = state_29429__$1;
(statearr_29469_29599[(2)] = inst_29422);

(statearr_29469_29599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29412 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29470_29600 = state_29429__$1;
(statearr_29470_29600[(2)] = inst_29412);

(statearr_29470_29600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (8))){
var inst_29400 = (state_29429[(11)]);
var inst_29390 = (state_29429[(8)]);
var tmp29466 = inst_29390;
var inst_29390__$1 = tmp29466;
var inst_29391 = inst_29400;
var state_29429__$1 = (function (){var statearr_29474 = state_29429;
(statearr_29474[(7)] = inst_29391);

(statearr_29474[(8)] = inst_29390__$1);

return statearr_29474;
})();
var statearr_29480_29603 = state_29429__$1;
(statearr_29480_29603[(2)] = null);

(statearr_29480_29603[(1)] = (2));


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
});})(c__27023__auto___29518,out))
;
return ((function (switch__26857__auto__,c__27023__auto___29518,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_29488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29488[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_29488[(1)] = (1));

return statearr_29488;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_29429){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object)){
var ex__26861__auto__ = e29489;
var statearr_29490_29608 = state_29429;
(statearr_29490_29608[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29611 = state_29429;
state_29429 = G__29611;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___29518,out))
})();
var state__27025__auto__ = (function (){var statearr_29498 = f__27024__auto__.call(null);
(statearr_29498[(6)] = c__27023__auto___29518);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29518,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29514 = arguments.length;
switch (G__29514) {
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
var c__27023__auto___29623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29623,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___29623,out){
return (function (state_29564){
var state_val_29565 = (state_29564[(1)]);
if((state_val_29565 === (7))){
var inst_29560 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
var statearr_29568_29624 = state_29564__$1;
(statearr_29568_29624[(2)] = inst_29560);

(statearr_29568_29624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (1))){
var inst_29520 = [];
var inst_29521 = inst_29520;
var inst_29522 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29564__$1 = (function (){var statearr_29571 = state_29564;
(statearr_29571[(7)] = inst_29521);

(statearr_29571[(8)] = inst_29522);

return statearr_29571;
})();
var statearr_29572_29628 = state_29564__$1;
(statearr_29572_29628[(2)] = null);

(statearr_29572_29628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (4))){
var inst_29525 = (state_29564[(9)]);
var inst_29525__$1 = (state_29564[(2)]);
var inst_29526 = (inst_29525__$1 == null);
var inst_29527 = cljs.core.not.call(null,inst_29526);
var state_29564__$1 = (function (){var statearr_29573 = state_29564;
(statearr_29573[(9)] = inst_29525__$1);

return statearr_29573;
})();
if(inst_29527){
var statearr_29574_29638 = state_29564__$1;
(statearr_29574_29638[(1)] = (5));

} else {
var statearr_29575_29639 = state_29564__$1;
(statearr_29575_29639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (15))){
var inst_29553 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
var statearr_29577_29641 = state_29564__$1;
(statearr_29577_29641[(2)] = inst_29553);

(statearr_29577_29641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (13))){
var state_29564__$1 = state_29564;
var statearr_29578_29642 = state_29564__$1;
(statearr_29578_29642[(2)] = null);

(statearr_29578_29642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (6))){
var inst_29521 = (state_29564[(7)]);
var inst_29548 = inst_29521.length;
var inst_29549 = (inst_29548 > (0));
var state_29564__$1 = state_29564;
if(cljs.core.truth_(inst_29549)){
var statearr_29583_29644 = state_29564__$1;
(statearr_29583_29644[(1)] = (12));

} else {
var statearr_29584_29645 = state_29564__$1;
(statearr_29584_29645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (3))){
var inst_29562 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29564__$1,inst_29562);
} else {
if((state_val_29565 === (12))){
var inst_29521 = (state_29564[(7)]);
var inst_29551 = cljs.core.vec.call(null,inst_29521);
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29564__$1,(15),out,inst_29551);
} else {
if((state_val_29565 === (2))){
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29564__$1,(4),ch);
} else {
if((state_val_29565 === (11))){
var inst_29530 = (state_29564[(10)]);
var inst_29525 = (state_29564[(9)]);
var inst_29540 = (state_29564[(2)]);
var inst_29541 = [];
var inst_29542 = inst_29541.push(inst_29525);
var inst_29521 = inst_29541;
var inst_29522 = inst_29530;
var state_29564__$1 = (function (){var statearr_29601 = state_29564;
(statearr_29601[(7)] = inst_29521);

(statearr_29601[(8)] = inst_29522);

(statearr_29601[(11)] = inst_29542);

(statearr_29601[(12)] = inst_29540);

return statearr_29601;
})();
var statearr_29602_29648 = state_29564__$1;
(statearr_29602_29648[(2)] = null);

(statearr_29602_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (9))){
var inst_29521 = (state_29564[(7)]);
var inst_29538 = cljs.core.vec.call(null,inst_29521);
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29564__$1,(11),out,inst_29538);
} else {
if((state_val_29565 === (5))){
var inst_29530 = (state_29564[(10)]);
var inst_29522 = (state_29564[(8)]);
var inst_29525 = (state_29564[(9)]);
var inst_29530__$1 = f.call(null,inst_29525);
var inst_29531 = cljs.core._EQ_.call(null,inst_29530__$1,inst_29522);
var inst_29532 = cljs.core.keyword_identical_QMARK_.call(null,inst_29522,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29533 = ((inst_29531) || (inst_29532));
var state_29564__$1 = (function (){var statearr_29605 = state_29564;
(statearr_29605[(10)] = inst_29530__$1);

return statearr_29605;
})();
if(cljs.core.truth_(inst_29533)){
var statearr_29606_29652 = state_29564__$1;
(statearr_29606_29652[(1)] = (8));

} else {
var statearr_29607_29653 = state_29564__$1;
(statearr_29607_29653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (14))){
var inst_29557 = (state_29564[(2)]);
var inst_29558 = cljs.core.async.close_BANG_.call(null,out);
var state_29564__$1 = (function (){var statearr_29610 = state_29564;
(statearr_29610[(13)] = inst_29557);

return statearr_29610;
})();
var statearr_29612_29654 = state_29564__$1;
(statearr_29612_29654[(2)] = inst_29558);

(statearr_29612_29654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (10))){
var inst_29545 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
var statearr_29613_29655 = state_29564__$1;
(statearr_29613_29655[(2)] = inst_29545);

(statearr_29613_29655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (8))){
var inst_29530 = (state_29564[(10)]);
var inst_29521 = (state_29564[(7)]);
var inst_29525 = (state_29564[(9)]);
var inst_29535 = inst_29521.push(inst_29525);
var tmp29609 = inst_29521;
var inst_29521__$1 = tmp29609;
var inst_29522 = inst_29530;
var state_29564__$1 = (function (){var statearr_29614 = state_29564;
(statearr_29614[(7)] = inst_29521__$1);

(statearr_29614[(8)] = inst_29522);

(statearr_29614[(14)] = inst_29535);

return statearr_29614;
})();
var statearr_29615_29656 = state_29564__$1;
(statearr_29615_29656[(2)] = null);

(statearr_29615_29656[(1)] = (2));


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
});})(c__27023__auto___29623,out))
;
return ((function (switch__26857__auto__,c__27023__auto___29623,out){
return (function() {
var cljs$core$async$state_machine__26858__auto__ = null;
var cljs$core$async$state_machine__26858__auto____0 = (function (){
var statearr_29616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29616[(0)] = cljs$core$async$state_machine__26858__auto__);

(statearr_29616[(1)] = (1));

return statearr_29616;
});
var cljs$core$async$state_machine__26858__auto____1 = (function (state_29564){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_29564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e29617){if((e29617 instanceof Object)){
var ex__26861__auto__ = e29617;
var statearr_29618_29657 = state_29564;
(statearr_29618_29657[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29564;
state_29564 = G__29660;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
cljs$core$async$state_machine__26858__auto__ = function(state_29564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26858__auto____1.call(this,state_29564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26858__auto____0;
cljs$core$async$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26858__auto____1;
return cljs$core$async$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___29623,out))
})();
var state__27025__auto__ = (function (){var statearr_29619 = f__27024__auto__.call(null);
(statearr_29619[(6)] = c__27023__auto___29623);

return statearr_29619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29623,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547634624370
