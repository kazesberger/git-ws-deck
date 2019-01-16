// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30774){if((e30774 instanceof Error)){
var e = e30774;
return "Error: Unable to stringify";
} else {
throw e30774;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30777 = arguments.length;
switch (G__30777) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30775_SHARP_){
if(typeof p1__30775_SHARP_ === 'string'){
return p1__30775_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30775_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30781 = arguments.length;
var i__4642__auto___30782 = (0);
while(true){
if((i__4642__auto___30782 < len__4641__auto___30781)){
args__4647__auto__.push((arguments[i__4642__auto___30782]));

var G__30783 = (i__4642__auto___30782 + (1));
i__4642__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30779){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30779));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30784 = arguments.length;
var i__4642__auto___30785 = (0);
while(true){
if((i__4642__auto___30785 < len__4641__auto___30784)){
args__4647__auto__.push((arguments[i__4642__auto___30785]));

var G__30786 = (i__4642__auto___30785 + (1));
i__4642__auto___30785 = G__30786;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30780){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30780));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30787){
var map__30788 = p__30787;
var map__30788__$1 = (((((!((map__30788 == null))))?(((((map__30788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30788):map__30788);
var message = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27048__auto___30868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___30868,ch){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___30868,ch){
return (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (7))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30841_30869 = state_30839__$1;
(statearr_30841_30869[(2)] = inst_30835);

(statearr_30841_30869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (1))){
var state_30839__$1 = state_30839;
var statearr_30842_30870 = state_30839__$1;
(statearr_30842_30870[(2)] = null);

(statearr_30842_30870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (4))){
var inst_30792 = (state_30839[(7)]);
var inst_30792__$1 = (state_30839[(2)]);
var state_30839__$1 = (function (){var statearr_30843 = state_30839;
(statearr_30843[(7)] = inst_30792__$1);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30792__$1)){
var statearr_30844_30871 = state_30839__$1;
(statearr_30844_30871[(1)] = (5));

} else {
var statearr_30845_30872 = state_30839__$1;
(statearr_30845_30872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (15))){
var inst_30799 = (state_30839[(8)]);
var inst_30814 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30799);
var inst_30815 = cljs.core.first.call(null,inst_30814);
var inst_30816 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30815);
var inst_30817 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30816)].join('');
var inst_30818 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30817);
var state_30839__$1 = state_30839;
var statearr_30846_30874 = state_30839__$1;
(statearr_30846_30874[(2)] = inst_30818);

(statearr_30846_30874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (13))){
var inst_30823 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30847_30875 = state_30839__$1;
(statearr_30847_30875[(2)] = inst_30823);

(statearr_30847_30875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var state_30839__$1 = state_30839;
var statearr_30848_30876 = state_30839__$1;
(statearr_30848_30876[(2)] = null);

(statearr_30848_30876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (17))){
var inst_30821 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30849_30881 = state_30839__$1;
(statearr_30849_30881[(2)] = inst_30821);

(statearr_30849_30881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (12))){
var inst_30798 = (state_30839[(9)]);
var inst_30812 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30798,opts);
var state_30839__$1 = state_30839;
if(inst_30812){
var statearr_30850_30882 = state_30839__$1;
(statearr_30850_30882[(1)] = (15));

} else {
var statearr_30851_30883 = state_30839__$1;
(statearr_30851_30883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30839__$1,(4),ch);
} else {
if((state_val_30840 === (11))){
var inst_30799 = (state_30839[(8)]);
var inst_30804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30805 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30799);
var inst_30806 = cljs.core.async.timeout.call(null,(1000));
var inst_30807 = [inst_30805,inst_30806];
var inst_30808 = (new cljs.core.PersistentVector(null,2,(5),inst_30804,inst_30807,null));
var state_30839__$1 = state_30839;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30839__$1,(14),inst_30808);
} else {
if((state_val_30840 === (9))){
var inst_30799 = (state_30839[(8)]);
var inst_30825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30826 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30799);
var inst_30827 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30826);
var inst_30828 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30827)].join('');
var inst_30829 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30828);
var state_30839__$1 = (function (){var statearr_30852 = state_30839;
(statearr_30852[(10)] = inst_30825);

return statearr_30852;
})();
var statearr_30853_30887 = state_30839__$1;
(statearr_30853_30887[(2)] = inst_30829);

(statearr_30853_30887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var inst_30792 = (state_30839[(7)]);
var inst_30794 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30795 = (new cljs.core.PersistentArrayMap(null,2,inst_30794,null));
var inst_30796 = (new cljs.core.PersistentHashSet(null,inst_30795,null));
var inst_30797 = figwheel.client.focus_msgs.call(null,inst_30796,inst_30792);
var inst_30798 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30797);
var inst_30799 = cljs.core.first.call(null,inst_30797);
var inst_30800 = figwheel.client.autoload_QMARK_.call(null);
var state_30839__$1 = (function (){var statearr_30854 = state_30839;
(statearr_30854[(8)] = inst_30799);

(statearr_30854[(9)] = inst_30798);

return statearr_30854;
})();
if(cljs.core.truth_(inst_30800)){
var statearr_30855_30894 = state_30839__$1;
(statearr_30855_30894[(1)] = (8));

} else {
var statearr_30856_30895 = state_30839__$1;
(statearr_30856_30895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (14))){
var inst_30810 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30857_30896 = state_30839__$1;
(statearr_30857_30896[(2)] = inst_30810);

(statearr_30857_30896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (16))){
var state_30839__$1 = state_30839;
var statearr_30858_30897 = state_30839__$1;
(statearr_30858_30897[(2)] = null);

(statearr_30858_30897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (10))){
var inst_30831 = (state_30839[(2)]);
var state_30839__$1 = (function (){var statearr_30859 = state_30839;
(statearr_30859[(11)] = inst_30831);

return statearr_30859;
})();
var statearr_30860_30898 = state_30839__$1;
(statearr_30860_30898[(2)] = null);

(statearr_30860_30898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (8))){
var inst_30798 = (state_30839[(9)]);
var inst_30802 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30798,opts);
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30802)){
var statearr_30861_30905 = state_30839__$1;
(statearr_30861_30905[(1)] = (11));

} else {
var statearr_30862_30906 = state_30839__$1;
(statearr_30862_30906[(1)] = (12));

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
});})(c__27048__auto___30868,ch))
;
return ((function (switch__26891__auto__,c__27048__auto___30868,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____1 = (function (state_30839){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_30839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__26895__auto__ = e30864;
var statearr_30865_30907 = state_30839;
(statearr_30865_30907[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30911 = state_30839;
state_30839 = G__30911;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26892__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___30868,ch))
})();
var state__27050__auto__ = (function (){var statearr_30866 = f__27049__auto__.call(null);
(statearr_30866[(6)] = c__27048__auto___30868);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___30868,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30867_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30867_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30921 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30921){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30879 = true;
var _STAR_print_fn_STAR__temp_val__30880 = ((function (_STAR_print_newline_STAR__orig_val__30877,_STAR_print_fn_STAR__orig_val__30878,_STAR_print_newline_STAR__temp_val__30879,sb,base_path_30921){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30877,_STAR_print_fn_STAR__orig_val__30878,_STAR_print_newline_STAR__temp_val__30879,sb,base_path_30921))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30879;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30880;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30878;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30877;
}}catch (e30873){if((e30873 instanceof Error)){
var e = e30873;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30921], null));
} else {
var e = e30873;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30921))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30884){
var map__30885 = p__30884;
var map__30885__$1 = (((((!((map__30885 == null))))?(((((map__30885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30885):map__30885);
var opts = map__30885__$1;
var build_id = cljs.core.get.call(null,map__30885__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30885,map__30885__$1,opts,build_id){
return (function (p__30888){
var vec__30889 = p__30888;
var seq__30890 = cljs.core.seq.call(null,vec__30889);
var first__30891 = cljs.core.first.call(null,seq__30890);
var seq__30890__$1 = cljs.core.next.call(null,seq__30890);
var map__30892 = first__30891;
var map__30892__$1 = (((((!((map__30892 == null))))?(((((map__30892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);
var msg = map__30892__$1;
var msg_name = cljs.core.get.call(null,map__30892__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30890__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30889,seq__30890,first__30891,seq__30890__$1,map__30892,map__30892__$1,msg,msg_name,_,map__30885,map__30885__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30889,seq__30890,first__30891,seq__30890__$1,map__30892,map__30892__$1,msg,msg_name,_,map__30885,map__30885__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30885,map__30885__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30899){
var vec__30900 = p__30899;
var seq__30901 = cljs.core.seq.call(null,vec__30900);
var first__30902 = cljs.core.first.call(null,seq__30901);
var seq__30901__$1 = cljs.core.next.call(null,seq__30901);
var map__30903 = first__30902;
var map__30903__$1 = (((((!((map__30903 == null))))?(((((map__30903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);
var msg = map__30903__$1;
var msg_name = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30901__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30908){
var map__30909 = p__30908;
var map__30909__$1 = (((((!((map__30909 == null))))?(((((map__30909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30909):map__30909);
var on_compile_warning = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30909,map__30909__$1,on_compile_warning,on_compile_fail){
return (function (p__30912){
var vec__30913 = p__30912;
var seq__30914 = cljs.core.seq.call(null,vec__30913);
var first__30915 = cljs.core.first.call(null,seq__30914);
var seq__30914__$1 = cljs.core.next.call(null,seq__30914);
var map__30916 = first__30915;
var map__30916__$1 = (((((!((map__30916 == null))))?(((((map__30916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30916):map__30916);
var msg = map__30916__$1;
var msg_name = cljs.core.get.call(null,map__30916__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30914__$1;
var pred__30918 = cljs.core._EQ_;
var expr__30919 = msg_name;
if(cljs.core.truth_(pred__30918.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30919))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30918.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30919))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30909,map__30909__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__,msg_hist,msg_names,msg){
return (function (state_31009){
var state_val_31010 = (state_31009[(1)]);
if((state_val_31010 === (7))){
var inst_30929 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
if(cljs.core.truth_(inst_30929)){
var statearr_31011_31074 = state_31009__$1;
(statearr_31011_31074[(1)] = (8));

} else {
var statearr_31012_31075 = state_31009__$1;
(statearr_31012_31075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (20))){
var inst_31003 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31013_31077 = state_31009__$1;
(statearr_31013_31077[(2)] = inst_31003);

(statearr_31013_31077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (27))){
var inst_30999 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31014_31078 = state_31009__$1;
(statearr_31014_31078[(2)] = inst_30999);

(statearr_31014_31078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (1))){
var inst_30922 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31009__$1 = state_31009;
if(cljs.core.truth_(inst_30922)){
var statearr_31015_31079 = state_31009__$1;
(statearr_31015_31079[(1)] = (2));

} else {
var statearr_31016_31081 = state_31009__$1;
(statearr_31016_31081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (24))){
var inst_31001 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31017_31084 = state_31009__$1;
(statearr_31017_31084[(2)] = inst_31001);

(statearr_31017_31084[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (4))){
var inst_31007 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31009__$1,inst_31007);
} else {
if((state_val_31010 === (15))){
var inst_31005 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31018_31086 = state_31009__$1;
(statearr_31018_31086[(2)] = inst_31005);

(statearr_31018_31086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (21))){
var inst_30958 = (state_31009[(2)]);
var inst_30959 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30960 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30959);
var state_31009__$1 = (function (){var statearr_31019 = state_31009;
(statearr_31019[(7)] = inst_30958);

return statearr_31019;
})();
var statearr_31020_31089 = state_31009__$1;
(statearr_31020_31089[(2)] = inst_30960);

(statearr_31020_31089[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (31))){
var inst_30988 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30988){
var statearr_31021_31091 = state_31009__$1;
(statearr_31021_31091[(1)] = (34));

} else {
var statearr_31022_31093 = state_31009__$1;
(statearr_31022_31093[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (32))){
var inst_30997 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31023_31094 = state_31009__$1;
(statearr_31023_31094[(2)] = inst_30997);

(statearr_31023_31094[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (33))){
var inst_30984 = (state_31009[(2)]);
var inst_30985 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30986 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30985);
var state_31009__$1 = (function (){var statearr_31024 = state_31009;
(statearr_31024[(8)] = inst_30984);

return statearr_31024;
})();
var statearr_31025_31097 = state_31009__$1;
(statearr_31025_31097[(2)] = inst_30986);

(statearr_31025_31097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (13))){
var inst_30943 = figwheel.client.heads_up.clear.call(null);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(16),inst_30943);
} else {
if((state_val_31010 === (22))){
var inst_30964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30965 = figwheel.client.heads_up.append_warning_message.call(null,inst_30964);
var state_31009__$1 = state_31009;
var statearr_31026_31099 = state_31009__$1;
(statearr_31026_31099[(2)] = inst_30965);

(statearr_31026_31099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (36))){
var inst_30995 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31027_31100 = state_31009__$1;
(statearr_31027_31100[(2)] = inst_30995);

(statearr_31027_31100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (29))){
var inst_30975 = (state_31009[(2)]);
var inst_30976 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30977 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30976);
var state_31009__$1 = (function (){var statearr_31028 = state_31009;
(statearr_31028[(9)] = inst_30975);

return statearr_31028;
})();
var statearr_31029_31101 = state_31009__$1;
(statearr_31029_31101[(2)] = inst_30977);

(statearr_31029_31101[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (6))){
var inst_30924 = (state_31009[(10)]);
var state_31009__$1 = state_31009;
var statearr_31030_31109 = state_31009__$1;
(statearr_31030_31109[(2)] = inst_30924);

(statearr_31030_31109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (28))){
var inst_30971 = (state_31009[(2)]);
var inst_30972 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30973 = figwheel.client.heads_up.display_warning.call(null,inst_30972);
var state_31009__$1 = (function (){var statearr_31031 = state_31009;
(statearr_31031[(11)] = inst_30971);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(29),inst_30973);
} else {
if((state_val_31010 === (25))){
var inst_30969 = figwheel.client.heads_up.clear.call(null);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(28),inst_30969);
} else {
if((state_val_31010 === (34))){
var inst_30990 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(37),inst_30990);
} else {
if((state_val_31010 === (17))){
var inst_30949 = (state_31009[(2)]);
var inst_30950 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30951 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30950);
var state_31009__$1 = (function (){var statearr_31032 = state_31009;
(statearr_31032[(12)] = inst_30949);

return statearr_31032;
})();
var statearr_31033_31113 = state_31009__$1;
(statearr_31033_31113[(2)] = inst_30951);

(statearr_31033_31113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (3))){
var inst_30941 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30941){
var statearr_31034_31115 = state_31009__$1;
(statearr_31034_31115[(1)] = (13));

} else {
var statearr_31035_31116 = state_31009__$1;
(statearr_31035_31116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (12))){
var inst_30937 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31036_31117 = state_31009__$1;
(statearr_31036_31117[(2)] = inst_30937);

(statearr_31036_31117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (2))){
var inst_30924 = (state_31009[(10)]);
var inst_30924__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31009__$1 = (function (){var statearr_31037 = state_31009;
(statearr_31037[(10)] = inst_30924__$1);

return statearr_31037;
})();
if(cljs.core.truth_(inst_30924__$1)){
var statearr_31038_31119 = state_31009__$1;
(statearr_31038_31119[(1)] = (5));

} else {
var statearr_31039_31120 = state_31009__$1;
(statearr_31039_31120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (23))){
var inst_30967 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30967){
var statearr_31040_31121 = state_31009__$1;
(statearr_31040_31121[(1)] = (25));

} else {
var statearr_31041_31122 = state_31009__$1;
(statearr_31041_31122[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (35))){
var state_31009__$1 = state_31009;
var statearr_31042_31123 = state_31009__$1;
(statearr_31042_31123[(2)] = null);

(statearr_31042_31123[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (19))){
var inst_30962 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30962){
var statearr_31043_31126 = state_31009__$1;
(statearr_31043_31126[(1)] = (22));

} else {
var statearr_31044_31131 = state_31009__$1;
(statearr_31044_31131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (11))){
var inst_30933 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31045_31134 = state_31009__$1;
(statearr_31045_31134[(2)] = inst_30933);

(statearr_31045_31134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (9))){
var inst_30935 = figwheel.client.heads_up.clear.call(null);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(12),inst_30935);
} else {
if((state_val_31010 === (5))){
var inst_30926 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31009__$1 = state_31009;
var statearr_31046_31135 = state_31009__$1;
(statearr_31046_31135[(2)] = inst_30926);

(statearr_31046_31135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (14))){
var inst_30953 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30953){
var statearr_31047_31137 = state_31009__$1;
(statearr_31047_31137[(1)] = (18));

} else {
var statearr_31048_31138 = state_31009__$1;
(statearr_31048_31138[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (26))){
var inst_30979 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31009__$1 = state_31009;
if(inst_30979){
var statearr_31049_31140 = state_31009__$1;
(statearr_31049_31140[(1)] = (30));

} else {
var statearr_31050_31142 = state_31009__$1;
(statearr_31050_31142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (16))){
var inst_30945 = (state_31009[(2)]);
var inst_30946 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30947 = figwheel.client.heads_up.display_exception.call(null,inst_30946);
var state_31009__$1 = (function (){var statearr_31051 = state_31009;
(statearr_31051[(13)] = inst_30945);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(17),inst_30947);
} else {
if((state_val_31010 === (30))){
var inst_30981 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30982 = figwheel.client.heads_up.display_warning.call(null,inst_30981);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(33),inst_30982);
} else {
if((state_val_31010 === (10))){
var inst_30939 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31052_31145 = state_31009__$1;
(statearr_31052_31145[(2)] = inst_30939);

(statearr_31052_31145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (18))){
var inst_30955 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30956 = figwheel.client.heads_up.display_exception.call(null,inst_30955);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(21),inst_30956);
} else {
if((state_val_31010 === (37))){
var inst_30992 = (state_31009[(2)]);
var state_31009__$1 = state_31009;
var statearr_31053_31148 = state_31009__$1;
(statearr_31053_31148[(2)] = inst_30992);

(statearr_31053_31148[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31010 === (8))){
var inst_30931 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31009__$1 = state_31009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31009__$1,(11),inst_30931);
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
});})(c__27048__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26891__auto__,c__27048__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____0 = (function (){
var statearr_31054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31054[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__);

(statearr_31054[(1)] = (1));

return statearr_31054;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____1 = (function (state_31009){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_31009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e31055){if((e31055 instanceof Object)){
var ex__26895__auto__ = e31055;
var statearr_31056_31151 = state_31009;
(statearr_31056_31151[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31152 = state_31009;
state_31009 = G__31152;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__ = function(state_31009){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____1.call(this,state_31009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__,msg_hist,msg_names,msg))
})();
var state__27050__auto__ = (function (){var statearr_31057 = f__27049__auto__.call(null);
(statearr_31057[(6)] = c__27048__auto__);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__,msg_hist,msg_names,msg))
);

return c__27048__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27048__auto___31156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___31156,ch){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___31156,ch){
return (function (state_31072){
var state_val_31073 = (state_31072[(1)]);
if((state_val_31073 === (1))){
var state_31072__$1 = state_31072;
var statearr_31076_31157 = state_31072__$1;
(statearr_31076_31157[(2)] = null);

(statearr_31076_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31073 === (2))){
var state_31072__$1 = state_31072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31072__$1,(4),ch);
} else {
if((state_val_31073 === (3))){
var inst_31070 = (state_31072[(2)]);
var state_31072__$1 = state_31072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31072__$1,inst_31070);
} else {
if((state_val_31073 === (4))){
var inst_31060 = (state_31072[(7)]);
var inst_31060__$1 = (state_31072[(2)]);
var state_31072__$1 = (function (){var statearr_31080 = state_31072;
(statearr_31080[(7)] = inst_31060__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_31060__$1)){
var statearr_31082_31162 = state_31072__$1;
(statearr_31082_31162[(1)] = (5));

} else {
var statearr_31083_31163 = state_31072__$1;
(statearr_31083_31163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31073 === (5))){
var inst_31060 = (state_31072[(7)]);
var inst_31062 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31060);
var state_31072__$1 = state_31072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31072__$1,(8),inst_31062);
} else {
if((state_val_31073 === (6))){
var state_31072__$1 = state_31072;
var statearr_31085_31164 = state_31072__$1;
(statearr_31085_31164[(2)] = null);

(statearr_31085_31164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31073 === (7))){
var inst_31068 = (state_31072[(2)]);
var state_31072__$1 = state_31072;
var statearr_31087_31167 = state_31072__$1;
(statearr_31087_31167[(2)] = inst_31068);

(statearr_31087_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31073 === (8))){
var inst_31064 = (state_31072[(2)]);
var state_31072__$1 = (function (){var statearr_31088 = state_31072;
(statearr_31088[(8)] = inst_31064);

return statearr_31088;
})();
var statearr_31090_31169 = state_31072__$1;
(statearr_31090_31169[(2)] = null);

(statearr_31090_31169[(1)] = (2));


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
});})(c__27048__auto___31156,ch))
;
return ((function (switch__26891__auto__,c__27048__auto___31156,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26892__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26892__auto____0 = (function (){
var statearr_31092 = [null,null,null,null,null,null,null,null,null];
(statearr_31092[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26892__auto__);

(statearr_31092[(1)] = (1));

return statearr_31092;
});
var figwheel$client$heads_up_plugin_$_state_machine__26892__auto____1 = (function (state_31072){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_31072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e31095){if((e31095 instanceof Object)){
var ex__26895__auto__ = e31095;
var statearr_31096_31170 = state_31072;
(statearr_31096_31170[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_31072;
state_31072 = G__31171;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26892__auto__ = function(state_31072){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26892__auto____1.call(this,state_31072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26892__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26892__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___31156,ch))
})();
var state__27050__auto__ = (function (){var statearr_31098 = f__27049__auto__.call(null);
(statearr_31098[(6)] = c__27048__auto___31156);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___31156,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__){
return (function (state_31107){
var state_val_31108 = (state_31107[(1)]);
if((state_val_31108 === (1))){
var inst_31102 = cljs.core.async.timeout.call(null,(3000));
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31107__$1,(2),inst_31102);
} else {
if((state_val_31108 === (2))){
var inst_31104 = (state_31107[(2)]);
var inst_31105 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31107__$1 = (function (){var statearr_31110 = state_31107;
(statearr_31110[(7)] = inst_31104);

return statearr_31110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31107__$1,inst_31105);
} else {
return null;
}
}
});})(c__27048__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____0 = (function (){
var statearr_31111 = [null,null,null,null,null,null,null,null];
(statearr_31111[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__);

(statearr_31111[(1)] = (1));

return statearr_31111;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____1 = (function (state_31107){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_31107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e31112){if((e31112 instanceof Object)){
var ex__26895__auto__ = e31112;
var statearr_31114_31172 = state_31107;
(statearr_31114_31172[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31173 = state_31107;
state_31107 = G__31173;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__ = function(state_31107){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____1.call(this,state_31107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26892__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__))
})();
var state__27050__auto__ = (function (){var statearr_31118 = f__27049__auto__.call(null);
(statearr_31118[(6)] = c__27048__auto__);

return statearr_31118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__))
);

return c__27048__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__,figwheel_version,temp__5720__auto__){
return (function (state_31132){
var state_val_31133 = (state_31132[(1)]);
if((state_val_31133 === (1))){
var inst_31124 = cljs.core.async.timeout.call(null,(2000));
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(2),inst_31124);
} else {
if((state_val_31133 === (2))){
var inst_31127 = (state_31132[(2)]);
var inst_31128 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31129 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31128);
var state_31132__$1 = (function (){var statearr_31136 = state_31132;
(statearr_31136[(7)] = inst_31127);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31132__$1,inst_31129);
} else {
return null;
}
}
});})(c__27048__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____0 = (function (){
var statearr_31139 = [null,null,null,null,null,null,null,null];
(statearr_31139[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__);

(statearr_31139[(1)] = (1));

return statearr_31139;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____1 = (function (state_31132){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_31132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e31141){if((e31141 instanceof Object)){
var ex__26895__auto__ = e31141;
var statearr_31143_31178 = state_31132;
(statearr_31143_31178[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31182 = state_31132;
state_31132 = G__31182;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27050__auto__ = (function (){var statearr_31144 = f__27049__auto__.call(null);
(statearr_31144[(6)] = c__27048__auto__);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__,figwheel_version,temp__5720__auto__))
);

return c__27048__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31146){
var map__31147 = p__31146;
var map__31147__$1 = (((((!((map__31147 == null))))?(((((map__31147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var file = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31150 = "";
var G__31150__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31150),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31150);
var G__31150__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31150__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31150__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31150__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31150__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31153){
var map__31154 = p__31153;
var map__31154__$1 = (((((!((map__31154 == null))))?(((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var ed = map__31154__$1;
var formatted_exception = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31158_31188 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31159_31189 = null;
var count__31160_31190 = (0);
var i__31161_31191 = (0);
while(true){
if((i__31161_31191 < count__31160_31190)){
var msg_31192 = cljs.core._nth.call(null,chunk__31159_31189,i__31161_31191);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31192);


var G__31193 = seq__31158_31188;
var G__31194 = chunk__31159_31189;
var G__31195 = count__31160_31190;
var G__31196 = (i__31161_31191 + (1));
seq__31158_31188 = G__31193;
chunk__31159_31189 = G__31194;
count__31160_31190 = G__31195;
i__31161_31191 = G__31196;
continue;
} else {
var temp__5720__auto___31197 = cljs.core.seq.call(null,seq__31158_31188);
if(temp__5720__auto___31197){
var seq__31158_31198__$1 = temp__5720__auto___31197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31158_31198__$1)){
var c__4461__auto___31199 = cljs.core.chunk_first.call(null,seq__31158_31198__$1);
var G__31200 = cljs.core.chunk_rest.call(null,seq__31158_31198__$1);
var G__31201 = c__4461__auto___31199;
var G__31202 = cljs.core.count.call(null,c__4461__auto___31199);
var G__31203 = (0);
seq__31158_31188 = G__31200;
chunk__31159_31189 = G__31201;
count__31160_31190 = G__31202;
i__31161_31191 = G__31203;
continue;
} else {
var msg_31204 = cljs.core.first.call(null,seq__31158_31198__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31204);


var G__31209 = cljs.core.next.call(null,seq__31158_31198__$1);
var G__31210 = null;
var G__31211 = (0);
var G__31212 = (0);
seq__31158_31188 = G__31209;
chunk__31159_31189 = G__31210;
count__31160_31190 = G__31211;
i__31161_31191 = G__31212;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31165){
var map__31166 = p__31165;
var map__31166__$1 = (((((!((map__31166 == null))))?(((((map__31166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);
var w = map__31166__$1;
var message = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31174 = cljs.core.seq.call(null,plugins);
var chunk__31175 = null;
var count__31176 = (0);
var i__31177 = (0);
while(true){
if((i__31177 < count__31176)){
var vec__31179 = cljs.core._nth.call(null,chunk__31175,i__31177);
var k = cljs.core.nth.call(null,vec__31179,(0),null);
var plugin = cljs.core.nth.call(null,vec__31179,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31221 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31174,chunk__31175,count__31176,i__31177,pl_31221,vec__31179,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31221.call(null,msg_hist);
});})(seq__31174,chunk__31175,count__31176,i__31177,pl_31221,vec__31179,k,plugin))
);
} else {
}


var G__31222 = seq__31174;
var G__31223 = chunk__31175;
var G__31224 = count__31176;
var G__31225 = (i__31177 + (1));
seq__31174 = G__31222;
chunk__31175 = G__31223;
count__31176 = G__31224;
i__31177 = G__31225;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31174);
if(temp__5720__auto__){
var seq__31174__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31174__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31174__$1);
var G__31226 = cljs.core.chunk_rest.call(null,seq__31174__$1);
var G__31227 = c__4461__auto__;
var G__31228 = cljs.core.count.call(null,c__4461__auto__);
var G__31229 = (0);
seq__31174 = G__31226;
chunk__31175 = G__31227;
count__31176 = G__31228;
i__31177 = G__31229;
continue;
} else {
var vec__31183 = cljs.core.first.call(null,seq__31174__$1);
var k = cljs.core.nth.call(null,vec__31183,(0),null);
var plugin = cljs.core.nth.call(null,vec__31183,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31230 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31174,chunk__31175,count__31176,i__31177,pl_31230,vec__31183,k,plugin,seq__31174__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31230.call(null,msg_hist);
});})(seq__31174,chunk__31175,count__31176,i__31177,pl_31230,vec__31183,k,plugin,seq__31174__$1,temp__5720__auto__))
);
} else {
}


var G__31231 = cljs.core.next.call(null,seq__31174__$1);
var G__31232 = null;
var G__31233 = (0);
var G__31234 = (0);
seq__31174 = G__31231;
chunk__31175 = G__31232;
count__31176 = G__31233;
i__31177 = G__31234;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31187 = arguments.length;
switch (G__31187) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31205_31236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31206_31237 = null;
var count__31207_31238 = (0);
var i__31208_31239 = (0);
while(true){
if((i__31208_31239 < count__31207_31238)){
var msg_31240 = cljs.core._nth.call(null,chunk__31206_31237,i__31208_31239);
figwheel.client.socket.handle_incoming_message.call(null,msg_31240);


var G__31241 = seq__31205_31236;
var G__31242 = chunk__31206_31237;
var G__31243 = count__31207_31238;
var G__31244 = (i__31208_31239 + (1));
seq__31205_31236 = G__31241;
chunk__31206_31237 = G__31242;
count__31207_31238 = G__31243;
i__31208_31239 = G__31244;
continue;
} else {
var temp__5720__auto___31245 = cljs.core.seq.call(null,seq__31205_31236);
if(temp__5720__auto___31245){
var seq__31205_31246__$1 = temp__5720__auto___31245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31205_31246__$1)){
var c__4461__auto___31247 = cljs.core.chunk_first.call(null,seq__31205_31246__$1);
var G__31248 = cljs.core.chunk_rest.call(null,seq__31205_31246__$1);
var G__31249 = c__4461__auto___31247;
var G__31250 = cljs.core.count.call(null,c__4461__auto___31247);
var G__31251 = (0);
seq__31205_31236 = G__31248;
chunk__31206_31237 = G__31249;
count__31207_31238 = G__31250;
i__31208_31239 = G__31251;
continue;
} else {
var msg_31252 = cljs.core.first.call(null,seq__31205_31246__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31252);


var G__31253 = cljs.core.next.call(null,seq__31205_31246__$1);
var G__31254 = null;
var G__31255 = (0);
var G__31256 = (0);
seq__31205_31236 = G__31253;
chunk__31206_31237 = G__31254;
count__31207_31238 = G__31255;
i__31208_31239 = G__31256;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31257 = arguments.length;
var i__4642__auto___31258 = (0);
while(true){
if((i__4642__auto___31258 < len__4641__auto___31257)){
args__4647__auto__.push((arguments[i__4642__auto___31258]));

var G__31259 = (i__4642__auto___31258 + (1));
i__4642__auto___31258 = G__31259;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31214){
var map__31215 = p__31214;
var map__31215__$1 = (((((!((map__31215 == null))))?(((((map__31215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31215):map__31215);
var opts = map__31215__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31213){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31213));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31217){if((e31217 instanceof Error)){
var e = e31217;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31217;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31218){
var map__31219 = p__31218;
var map__31219__$1 = (((((!((map__31219 == null))))?(((((map__31219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31219):map__31219);
var msg_name = cljs.core.get.call(null,map__31219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547626118137
