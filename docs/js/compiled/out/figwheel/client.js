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
}catch (e30777){if((e30777 instanceof Error)){
var e = e30777;
return "Error: Unable to stringify";
} else {
throw e30777;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30780 = arguments.length;
switch (G__30780) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30778_SHARP_){
if(typeof p1__30778_SHARP_ === 'string'){
return p1__30778_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30778_SHARP_);
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
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30782){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30782));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30787 = arguments.length;
var i__4642__auto___30788 = (0);
while(true){
if((i__4642__auto___30788 < len__4641__auto___30787)){
args__4647__auto__.push((arguments[i__4642__auto___30788]));

var G__30789 = (i__4642__auto___30788 + (1));
i__4642__auto___30788 = G__30789;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30783){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30783));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30790){
var map__30791 = p__30790;
var map__30791__$1 = (((((!((map__30791 == null))))?(((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var message = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27023__auto___30871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___30871,ch){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___30871,ch){
return (function (state_30842){
var state_val_30843 = (state_30842[(1)]);
if((state_val_30843 === (7))){
var inst_30838 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30844_30872 = state_30842__$1;
(statearr_30844_30872[(2)] = inst_30838);

(statearr_30844_30872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (1))){
var state_30842__$1 = state_30842;
var statearr_30845_30873 = state_30842__$1;
(statearr_30845_30873[(2)] = null);

(statearr_30845_30873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (4))){
var inst_30795 = (state_30842[(7)]);
var inst_30795__$1 = (state_30842[(2)]);
var state_30842__$1 = (function (){var statearr_30846 = state_30842;
(statearr_30846[(7)] = inst_30795__$1);

return statearr_30846;
})();
if(cljs.core.truth_(inst_30795__$1)){
var statearr_30847_30874 = state_30842__$1;
(statearr_30847_30874[(1)] = (5));

} else {
var statearr_30848_30875 = state_30842__$1;
(statearr_30848_30875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (15))){
var inst_30802 = (state_30842[(8)]);
var inst_30817 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30802);
var inst_30818 = cljs.core.first.call(null,inst_30817);
var inst_30819 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30818);
var inst_30820 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30819)].join('');
var inst_30821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30820);
var state_30842__$1 = state_30842;
var statearr_30849_30876 = state_30842__$1;
(statearr_30849_30876[(2)] = inst_30821);

(statearr_30849_30876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (13))){
var inst_30826 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30850_30877 = state_30842__$1;
(statearr_30850_30877[(2)] = inst_30826);

(statearr_30850_30877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (6))){
var state_30842__$1 = state_30842;
var statearr_30851_30878 = state_30842__$1;
(statearr_30851_30878[(2)] = null);

(statearr_30851_30878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (17))){
var inst_30824 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30852_30880 = state_30842__$1;
(statearr_30852_30880[(2)] = inst_30824);

(statearr_30852_30880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (3))){
var inst_30840 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30842__$1,inst_30840);
} else {
if((state_val_30843 === (12))){
var inst_30801 = (state_30842[(9)]);
var inst_30815 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30801,opts);
var state_30842__$1 = state_30842;
if(inst_30815){
var statearr_30853_30881 = state_30842__$1;
(statearr_30853_30881[(1)] = (15));

} else {
var statearr_30854_30882 = state_30842__$1;
(statearr_30854_30882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (2))){
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(4),ch);
} else {
if((state_val_30843 === (11))){
var inst_30802 = (state_30842[(8)]);
var inst_30807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30808 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30802);
var inst_30809 = cljs.core.async.timeout.call(null,(1000));
var inst_30810 = [inst_30808,inst_30809];
var inst_30811 = (new cljs.core.PersistentVector(null,2,(5),inst_30807,inst_30810,null));
var state_30842__$1 = state_30842;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30842__$1,(14),inst_30811);
} else {
if((state_val_30843 === (9))){
var inst_30802 = (state_30842[(8)]);
var inst_30828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30829 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30802);
var inst_30830 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30829);
var inst_30831 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30830)].join('');
var inst_30832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30831);
var state_30842__$1 = (function (){var statearr_30855 = state_30842;
(statearr_30855[(10)] = inst_30828);

return statearr_30855;
})();
var statearr_30856_30887 = state_30842__$1;
(statearr_30856_30887[(2)] = inst_30832);

(statearr_30856_30887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (5))){
var inst_30795 = (state_30842[(7)]);
var inst_30797 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30798 = (new cljs.core.PersistentArrayMap(null,2,inst_30797,null));
var inst_30799 = (new cljs.core.PersistentHashSet(null,inst_30798,null));
var inst_30800 = figwheel.client.focus_msgs.call(null,inst_30799,inst_30795);
var inst_30801 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30800);
var inst_30802 = cljs.core.first.call(null,inst_30800);
var inst_30803 = figwheel.client.autoload_QMARK_.call(null);
var state_30842__$1 = (function (){var statearr_30857 = state_30842;
(statearr_30857[(8)] = inst_30802);

(statearr_30857[(9)] = inst_30801);

return statearr_30857;
})();
if(cljs.core.truth_(inst_30803)){
var statearr_30858_30891 = state_30842__$1;
(statearr_30858_30891[(1)] = (8));

} else {
var statearr_30859_30892 = state_30842__$1;
(statearr_30859_30892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (14))){
var inst_30813 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30860_30893 = state_30842__$1;
(statearr_30860_30893[(2)] = inst_30813);

(statearr_30860_30893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (16))){
var state_30842__$1 = state_30842;
var statearr_30861_30895 = state_30842__$1;
(statearr_30861_30895[(2)] = null);

(statearr_30861_30895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (10))){
var inst_30834 = (state_30842[(2)]);
var state_30842__$1 = (function (){var statearr_30862 = state_30842;
(statearr_30862[(11)] = inst_30834);

return statearr_30862;
})();
var statearr_30863_30901 = state_30842__$1;
(statearr_30863_30901[(2)] = null);

(statearr_30863_30901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (8))){
var inst_30801 = (state_30842[(9)]);
var inst_30805 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30801,opts);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30805)){
var statearr_30864_30902 = state_30842__$1;
(statearr_30864_30902[(1)] = (11));

} else {
var statearr_30865_30903 = state_30842__$1;
(statearr_30865_30903[(1)] = (12));

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
});})(c__27023__auto___30871,ch))
;
return ((function (switch__26857__auto__,c__27023__auto___30871,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____0 = (function (){
var statearr_30866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30866[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__);

(statearr_30866[(1)] = (1));

return statearr_30866;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____1 = (function (state_30842){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_30842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e30867){if((e30867 instanceof Object)){
var ex__26861__auto__ = e30867;
var statearr_30868_30909 = state_30842;
(statearr_30868_30909[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30911 = state_30842;
state_30842 = G__30911;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__ = function(state_30842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____1.call(this,state_30842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26858__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___30871,ch))
})();
var state__27025__auto__ = (function (){var statearr_30869 = f__27024__auto__.call(null);
(statearr_30869[(6)] = c__27023__auto___30871);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___30871,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30870_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30870_SHARP_));
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
var base_path_30915 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30915){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30883 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30884 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30885 = true;
var _STAR_print_fn_STAR__temp_val__30886 = ((function (_STAR_print_newline_STAR__orig_val__30883,_STAR_print_fn_STAR__orig_val__30884,_STAR_print_newline_STAR__temp_val__30885,sb,base_path_30915){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30883,_STAR_print_fn_STAR__orig_val__30884,_STAR_print_newline_STAR__temp_val__30885,sb,base_path_30915))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30885;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30886;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30884;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30883;
}}catch (e30879){if((e30879 instanceof Error)){
var e = e30879;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30915], null));
} else {
var e = e30879;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30915))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30888){
var map__30889 = p__30888;
var map__30889__$1 = (((((!((map__30889 == null))))?(((((map__30889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30889):map__30889);
var opts = map__30889__$1;
var build_id = cljs.core.get.call(null,map__30889__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30889,map__30889__$1,opts,build_id){
return (function (p__30894){
var vec__30896 = p__30894;
var seq__30897 = cljs.core.seq.call(null,vec__30896);
var first__30898 = cljs.core.first.call(null,seq__30897);
var seq__30897__$1 = cljs.core.next.call(null,seq__30897);
var map__30899 = first__30898;
var map__30899__$1 = (((((!((map__30899 == null))))?(((((map__30899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var msg = map__30899__$1;
var msg_name = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30897__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30896,seq__30897,first__30898,seq__30897__$1,map__30899,map__30899__$1,msg,msg_name,_,map__30889,map__30889__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30896,seq__30897,first__30898,seq__30897__$1,map__30899,map__30899__$1,msg,msg_name,_,map__30889,map__30889__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30889,map__30889__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30904){
var vec__30905 = p__30904;
var seq__30906 = cljs.core.seq.call(null,vec__30905);
var first__30907 = cljs.core.first.call(null,seq__30906);
var seq__30906__$1 = cljs.core.next.call(null,seq__30906);
var map__30908 = first__30907;
var map__30908__$1 = (((((!((map__30908 == null))))?(((((map__30908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30908):map__30908);
var msg = map__30908__$1;
var msg_name = cljs.core.get.call(null,map__30908__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30906__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30912){
var map__30913 = p__30912;
var map__30913__$1 = (((((!((map__30913 == null))))?(((((map__30913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30913):map__30913);
var on_compile_warning = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30913,map__30913__$1,on_compile_warning,on_compile_fail){
return (function (p__30916){
var vec__30917 = p__30916;
var seq__30918 = cljs.core.seq.call(null,vec__30917);
var first__30919 = cljs.core.first.call(null,seq__30918);
var seq__30918__$1 = cljs.core.next.call(null,seq__30918);
var map__30920 = first__30919;
var map__30920__$1 = (((((!((map__30920 == null))))?(((((map__30920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920):map__30920);
var msg = map__30920__$1;
var msg_name = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30918__$1;
var pred__30922 = cljs.core._EQ_;
var expr__30923 = msg_name;
if(cljs.core.truth_(pred__30922.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30923))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30922.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30923))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30913,map__30913__$1,on_compile_warning,on_compile_fail))
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__,msg_hist,msg_names,msg){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (7))){
var inst_30932 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
if(cljs.core.truth_(inst_30932)){
var statearr_31014_31077 = state_31012__$1;
(statearr_31014_31077[(1)] = (8));

} else {
var statearr_31015_31078 = state_31012__$1;
(statearr_31015_31078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (20))){
var inst_31006 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31016_31080 = state_31012__$1;
(statearr_31016_31080[(2)] = inst_31006);

(statearr_31016_31080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (27))){
var inst_31002 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31017_31081 = state_31012__$1;
(statearr_31017_31081[(2)] = inst_31002);

(statearr_31017_31081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (1))){
var inst_30925 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31012__$1 = state_31012;
if(cljs.core.truth_(inst_30925)){
var statearr_31018_31083 = state_31012__$1;
(statearr_31018_31083[(1)] = (2));

} else {
var statearr_31019_31085 = state_31012__$1;
(statearr_31019_31085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (24))){
var inst_31004 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31020_31087 = state_31012__$1;
(statearr_31020_31087[(2)] = inst_31004);

(statearr_31020_31087[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (4))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (15))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31021_31089 = state_31012__$1;
(statearr_31021_31089[(2)] = inst_31008);

(statearr_31021_31089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (21))){
var inst_30961 = (state_31012[(2)]);
var inst_30962 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30963 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30962);
var state_31012__$1 = (function (){var statearr_31022 = state_31012;
(statearr_31022[(7)] = inst_30961);

return statearr_31022;
})();
var statearr_31023_31093 = state_31012__$1;
(statearr_31023_31093[(2)] = inst_30963);

(statearr_31023_31093[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (31))){
var inst_30991 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30991){
var statearr_31024_31095 = state_31012__$1;
(statearr_31024_31095[(1)] = (34));

} else {
var statearr_31025_31096 = state_31012__$1;
(statearr_31025_31096[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (32))){
var inst_31000 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31026_31098 = state_31012__$1;
(statearr_31026_31098[(2)] = inst_31000);

(statearr_31026_31098[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (33))){
var inst_30987 = (state_31012[(2)]);
var inst_30988 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30989 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30988);
var state_31012__$1 = (function (){var statearr_31027 = state_31012;
(statearr_31027[(8)] = inst_30987);

return statearr_31027;
})();
var statearr_31028_31100 = state_31012__$1;
(statearr_31028_31100[(2)] = inst_30989);

(statearr_31028_31100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (13))){
var inst_30946 = figwheel.client.heads_up.clear.call(null);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(16),inst_30946);
} else {
if((state_val_31013 === (22))){
var inst_30967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30968 = figwheel.client.heads_up.append_warning_message.call(null,inst_30967);
var state_31012__$1 = state_31012;
var statearr_31029_31102 = state_31012__$1;
(statearr_31029_31102[(2)] = inst_30968);

(statearr_31029_31102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (36))){
var inst_30998 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31030_31103 = state_31012__$1;
(statearr_31030_31103[(2)] = inst_30998);

(statearr_31030_31103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (29))){
var inst_30978 = (state_31012[(2)]);
var inst_30979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30980 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30979);
var state_31012__$1 = (function (){var statearr_31031 = state_31012;
(statearr_31031[(9)] = inst_30978);

return statearr_31031;
})();
var statearr_31032_31111 = state_31012__$1;
(statearr_31032_31111[(2)] = inst_30980);

(statearr_31032_31111[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (6))){
var inst_30927 = (state_31012[(10)]);
var state_31012__$1 = state_31012;
var statearr_31033_31112 = state_31012__$1;
(statearr_31033_31112[(2)] = inst_30927);

(statearr_31033_31112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (28))){
var inst_30974 = (state_31012[(2)]);
var inst_30975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30976 = figwheel.client.heads_up.display_warning.call(null,inst_30975);
var state_31012__$1 = (function (){var statearr_31034 = state_31012;
(statearr_31034[(11)] = inst_30974);

return statearr_31034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(29),inst_30976);
} else {
if((state_val_31013 === (25))){
var inst_30972 = figwheel.client.heads_up.clear.call(null);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(28),inst_30972);
} else {
if((state_val_31013 === (34))){
var inst_30993 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(37),inst_30993);
} else {
if((state_val_31013 === (17))){
var inst_30952 = (state_31012[(2)]);
var inst_30953 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30954 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30953);
var state_31012__$1 = (function (){var statearr_31035 = state_31012;
(statearr_31035[(12)] = inst_30952);

return statearr_31035;
})();
var statearr_31036_31117 = state_31012__$1;
(statearr_31036_31117[(2)] = inst_30954);

(statearr_31036_31117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (3))){
var inst_30944 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30944){
var statearr_31037_31118 = state_31012__$1;
(statearr_31037_31118[(1)] = (13));

} else {
var statearr_31038_31120 = state_31012__$1;
(statearr_31038_31120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (12))){
var inst_30940 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31039_31121 = state_31012__$1;
(statearr_31039_31121[(2)] = inst_30940);

(statearr_31039_31121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (2))){
var inst_30927 = (state_31012[(10)]);
var inst_30927__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31012__$1 = (function (){var statearr_31040 = state_31012;
(statearr_31040[(10)] = inst_30927__$1);

return statearr_31040;
})();
if(cljs.core.truth_(inst_30927__$1)){
var statearr_31041_31122 = state_31012__$1;
(statearr_31041_31122[(1)] = (5));

} else {
var statearr_31042_31123 = state_31012__$1;
(statearr_31042_31123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (23))){
var inst_30970 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30970){
var statearr_31043_31124 = state_31012__$1;
(statearr_31043_31124[(1)] = (25));

} else {
var statearr_31044_31125 = state_31012__$1;
(statearr_31044_31125[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (35))){
var state_31012__$1 = state_31012;
var statearr_31045_31129 = state_31012__$1;
(statearr_31045_31129[(2)] = null);

(statearr_31045_31129[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (19))){
var inst_30965 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30965){
var statearr_31046_31135 = state_31012__$1;
(statearr_31046_31135[(1)] = (22));

} else {
var statearr_31047_31136 = state_31012__$1;
(statearr_31047_31136[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (11))){
var inst_30936 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31048_31137 = state_31012__$1;
(statearr_31048_31137[(2)] = inst_30936);

(statearr_31048_31137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (9))){
var inst_30938 = figwheel.client.heads_up.clear.call(null);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(12),inst_30938);
} else {
if((state_val_31013 === (5))){
var inst_30929 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31012__$1 = state_31012;
var statearr_31049_31139 = state_31012__$1;
(statearr_31049_31139[(2)] = inst_30929);

(statearr_31049_31139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (14))){
var inst_30956 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30956){
var statearr_31050_31141 = state_31012__$1;
(statearr_31050_31141[(1)] = (18));

} else {
var statearr_31051_31143 = state_31012__$1;
(statearr_31051_31143[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (26))){
var inst_30982 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31012__$1 = state_31012;
if(inst_30982){
var statearr_31052_31145 = state_31012__$1;
(statearr_31052_31145[(1)] = (30));

} else {
var statearr_31053_31146 = state_31012__$1;
(statearr_31053_31146[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (16))){
var inst_30948 = (state_31012[(2)]);
var inst_30949 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30950 = figwheel.client.heads_up.display_exception.call(null,inst_30949);
var state_31012__$1 = (function (){var statearr_31054 = state_31012;
(statearr_31054[(13)] = inst_30948);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(17),inst_30950);
} else {
if((state_val_31013 === (30))){
var inst_30984 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30985 = figwheel.client.heads_up.display_warning.call(null,inst_30984);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(33),inst_30985);
} else {
if((state_val_31013 === (10))){
var inst_30942 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31055_31148 = state_31012__$1;
(statearr_31055_31148[(2)] = inst_30942);

(statearr_31055_31148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (18))){
var inst_30958 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30959 = figwheel.client.heads_up.display_exception.call(null,inst_30958);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(21),inst_30959);
} else {
if((state_val_31013 === (37))){
var inst_30995 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31056_31152 = state_31012__$1;
(statearr_31056_31152[(2)] = inst_30995);

(statearr_31056_31152[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (8))){
var inst_30934 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(11),inst_30934);
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
});})(c__27023__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26857__auto__,c__27023__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____0 = (function (){
var statearr_31057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31057[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__);

(statearr_31057[(1)] = (1));

return statearr_31057;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____1 = (function (state_31012){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_31012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e31058){if((e31058 instanceof Object)){
var ex__26861__auto__ = e31058;
var statearr_31059_31154 = state_31012;
(statearr_31059_31154[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31157 = state_31012;
state_31012 = G__31157;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__,msg_hist,msg_names,msg))
})();
var state__27025__auto__ = (function (){var statearr_31060 = f__27024__auto__.call(null);
(statearr_31060[(6)] = c__27023__auto__);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,msg_hist,msg_names,msg))
);

return c__27023__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27023__auto___31159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___31159,ch){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___31159,ch){
return (function (state_31075){
var state_val_31076 = (state_31075[(1)]);
if((state_val_31076 === (1))){
var state_31075__$1 = state_31075;
var statearr_31079_31164 = state_31075__$1;
(statearr_31079_31164[(2)] = null);

(statearr_31079_31164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (2))){
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(4),ch);
} else {
if((state_val_31076 === (3))){
var inst_31073 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31075__$1,inst_31073);
} else {
if((state_val_31076 === (4))){
var inst_31063 = (state_31075[(7)]);
var inst_31063__$1 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31082 = state_31075;
(statearr_31082[(7)] = inst_31063__$1);

return statearr_31082;
})();
if(cljs.core.truth_(inst_31063__$1)){
var statearr_31084_31165 = state_31075__$1;
(statearr_31084_31165[(1)] = (5));

} else {
var statearr_31086_31166 = state_31075__$1;
(statearr_31086_31166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (5))){
var inst_31063 = (state_31075[(7)]);
var inst_31065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31063);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(8),inst_31065);
} else {
if((state_val_31076 === (6))){
var state_31075__$1 = state_31075;
var statearr_31088_31167 = state_31075__$1;
(statearr_31088_31167[(2)] = null);

(statearr_31088_31167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (7))){
var inst_31071 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31090_31171 = state_31075__$1;
(statearr_31090_31171[(2)] = inst_31071);

(statearr_31090_31171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (8))){
var inst_31067 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31091 = state_31075;
(statearr_31091[(8)] = inst_31067);

return statearr_31091;
})();
var statearr_31092_31172 = state_31075__$1;
(statearr_31092_31172[(2)] = null);

(statearr_31092_31172[(1)] = (2));


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
});})(c__27023__auto___31159,ch))
;
return ((function (switch__26857__auto__,c__27023__auto___31159,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26858__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26858__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26858__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var figwheel$client$heads_up_plugin_$_state_machine__26858__auto____1 = (function (state_31075){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_31075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e31097){if((e31097 instanceof Object)){
var ex__26861__auto__ = e31097;
var statearr_31099_31173 = state_31075;
(statearr_31099_31173[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31174 = state_31075;
state_31075 = G__31174;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26858__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26858__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26858__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26858__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___31159,ch))
})();
var state__27025__auto__ = (function (){var statearr_31101 = f__27024__auto__.call(null);
(statearr_31101[(6)] = c__27023__auto___31159);

return statearr_31101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___31159,ch))
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__){
return (function (state_31109){
var state_val_31110 = (state_31109[(1)]);
if((state_val_31110 === (1))){
var inst_31104 = cljs.core.async.timeout.call(null,(3000));
var state_31109__$1 = state_31109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31109__$1,(2),inst_31104);
} else {
if((state_val_31110 === (2))){
var inst_31106 = (state_31109[(2)]);
var inst_31107 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31109__$1 = (function (){var statearr_31113 = state_31109;
(statearr_31113[(7)] = inst_31106);

return statearr_31113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31109__$1,inst_31107);
} else {
return null;
}
}
});})(c__27023__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____0 = (function (){
var statearr_31114 = [null,null,null,null,null,null,null,null];
(statearr_31114[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__);

(statearr_31114[(1)] = (1));

return statearr_31114;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____1 = (function (state_31109){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_31109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e31115){if((e31115 instanceof Object)){
var ex__26861__auto__ = e31115;
var statearr_31116_31175 = state_31109;
(statearr_31116_31175[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31176 = state_31109;
state_31109 = G__31176;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__ = function(state_31109){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____1.call(this,state_31109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26858__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_31119 = f__27024__auto__.call(null);
(statearr_31119[(6)] = c__27023__auto__);

return statearr_31119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__,figwheel_version,temp__5720__auto__){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (1))){
var inst_31126 = cljs.core.async.timeout.call(null,(2000));
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31133__$1,(2),inst_31126);
} else {
if((state_val_31134 === (2))){
var inst_31128 = (state_31133[(2)]);
var inst_31130 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31131 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31130);
var state_31133__$1 = (function (){var statearr_31138 = state_31133;
(statearr_31138[(7)] = inst_31128);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31133__$1,inst_31131);
} else {
return null;
}
}
});})(c__27023__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null,null];
(statearr_31140[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____1 = (function (state_31133){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_31133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e31142){if((e31142 instanceof Object)){
var ex__26861__auto__ = e31142;
var statearr_31144_31184 = state_31133;
(statearr_31144_31184[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31185 = state_31133;
state_31133 = G__31185;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27025__auto__ = (function (){var statearr_31147 = f__27024__auto__.call(null);
(statearr_31147[(6)] = c__27023__auto__);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,figwheel_version,temp__5720__auto__))
);

return c__27023__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31149){
var map__31150 = p__31149;
var map__31150__$1 = (((((!((map__31150 == null))))?(((((map__31150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31150):map__31150);
var file = cljs.core.get.call(null,map__31150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31150__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31150__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31153 = "";
var G__31153__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31153),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31153);
var G__31153__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31153__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31153__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31153__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31153__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31155){
var map__31156 = p__31155;
var map__31156__$1 = (((((!((map__31156 == null))))?(((((map__31156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);
var ed = map__31156__$1;
var formatted_exception = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31160_31191 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31161_31192 = null;
var count__31162_31193 = (0);
var i__31163_31194 = (0);
while(true){
if((i__31163_31194 < count__31162_31193)){
var msg_31195 = cljs.core._nth.call(null,chunk__31161_31192,i__31163_31194);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31195);


var G__31196 = seq__31160_31191;
var G__31197 = chunk__31161_31192;
var G__31198 = count__31162_31193;
var G__31199 = (i__31163_31194 + (1));
seq__31160_31191 = G__31196;
chunk__31161_31192 = G__31197;
count__31162_31193 = G__31198;
i__31163_31194 = G__31199;
continue;
} else {
var temp__5720__auto___31200 = cljs.core.seq.call(null,seq__31160_31191);
if(temp__5720__auto___31200){
var seq__31160_31201__$1 = temp__5720__auto___31200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31160_31201__$1)){
var c__4461__auto___31202 = cljs.core.chunk_first.call(null,seq__31160_31201__$1);
var G__31207 = cljs.core.chunk_rest.call(null,seq__31160_31201__$1);
var G__31208 = c__4461__auto___31202;
var G__31209 = cljs.core.count.call(null,c__4461__auto___31202);
var G__31210 = (0);
seq__31160_31191 = G__31207;
chunk__31161_31192 = G__31208;
count__31162_31193 = G__31209;
i__31163_31194 = G__31210;
continue;
} else {
var msg_31211 = cljs.core.first.call(null,seq__31160_31201__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31211);


var G__31212 = cljs.core.next.call(null,seq__31160_31201__$1);
var G__31213 = null;
var G__31214 = (0);
var G__31215 = (0);
seq__31160_31191 = G__31212;
chunk__31161_31192 = G__31213;
count__31162_31193 = G__31214;
i__31163_31194 = G__31215;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31168){
var map__31169 = p__31168;
var map__31169__$1 = (((((!((map__31169 == null))))?(((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169):map__31169);
var w = map__31169__$1;
var message = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31177 = cljs.core.seq.call(null,plugins);
var chunk__31178 = null;
var count__31179 = (0);
var i__31180 = (0);
while(true){
if((i__31180 < count__31179)){
var vec__31181 = cljs.core._nth.call(null,chunk__31178,i__31180);
var k = cljs.core.nth.call(null,vec__31181,(0),null);
var plugin = cljs.core.nth.call(null,vec__31181,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31224 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31177,chunk__31178,count__31179,i__31180,pl_31224,vec__31181,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31224.call(null,msg_hist);
});})(seq__31177,chunk__31178,count__31179,i__31180,pl_31224,vec__31181,k,plugin))
);
} else {
}


var G__31225 = seq__31177;
var G__31226 = chunk__31178;
var G__31227 = count__31179;
var G__31228 = (i__31180 + (1));
seq__31177 = G__31225;
chunk__31178 = G__31226;
count__31179 = G__31227;
i__31180 = G__31228;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31177);
if(temp__5720__auto__){
var seq__31177__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31177__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31177__$1);
var G__31229 = cljs.core.chunk_rest.call(null,seq__31177__$1);
var G__31230 = c__4461__auto__;
var G__31231 = cljs.core.count.call(null,c__4461__auto__);
var G__31232 = (0);
seq__31177 = G__31229;
chunk__31178 = G__31230;
count__31179 = G__31231;
i__31180 = G__31232;
continue;
} else {
var vec__31186 = cljs.core.first.call(null,seq__31177__$1);
var k = cljs.core.nth.call(null,vec__31186,(0),null);
var plugin = cljs.core.nth.call(null,vec__31186,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31233 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31177,chunk__31178,count__31179,i__31180,pl_31233,vec__31186,k,plugin,seq__31177__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31233.call(null,msg_hist);
});})(seq__31177,chunk__31178,count__31179,i__31180,pl_31233,vec__31186,k,plugin,seq__31177__$1,temp__5720__auto__))
);
} else {
}


var G__31234 = cljs.core.next.call(null,seq__31177__$1);
var G__31235 = null;
var G__31236 = (0);
var G__31237 = (0);
seq__31177 = G__31234;
chunk__31178 = G__31235;
count__31179 = G__31236;
i__31180 = G__31237;
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
var G__31190 = arguments.length;
switch (G__31190) {
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

var seq__31203_31239 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31204_31240 = null;
var count__31205_31241 = (0);
var i__31206_31242 = (0);
while(true){
if((i__31206_31242 < count__31205_31241)){
var msg_31243 = cljs.core._nth.call(null,chunk__31204_31240,i__31206_31242);
figwheel.client.socket.handle_incoming_message.call(null,msg_31243);


var G__31244 = seq__31203_31239;
var G__31245 = chunk__31204_31240;
var G__31246 = count__31205_31241;
var G__31247 = (i__31206_31242 + (1));
seq__31203_31239 = G__31244;
chunk__31204_31240 = G__31245;
count__31205_31241 = G__31246;
i__31206_31242 = G__31247;
continue;
} else {
var temp__5720__auto___31248 = cljs.core.seq.call(null,seq__31203_31239);
if(temp__5720__auto___31248){
var seq__31203_31249__$1 = temp__5720__auto___31248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31203_31249__$1)){
var c__4461__auto___31250 = cljs.core.chunk_first.call(null,seq__31203_31249__$1);
var G__31251 = cljs.core.chunk_rest.call(null,seq__31203_31249__$1);
var G__31252 = c__4461__auto___31250;
var G__31253 = cljs.core.count.call(null,c__4461__auto___31250);
var G__31254 = (0);
seq__31203_31239 = G__31251;
chunk__31204_31240 = G__31252;
count__31205_31241 = G__31253;
i__31206_31242 = G__31254;
continue;
} else {
var msg_31255 = cljs.core.first.call(null,seq__31203_31249__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31255);


var G__31256 = cljs.core.next.call(null,seq__31203_31249__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__31203_31239 = G__31256;
chunk__31204_31240 = G__31257;
count__31205_31241 = G__31258;
i__31206_31242 = G__31259;
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
var len__4641__auto___31260 = arguments.length;
var i__4642__auto___31261 = (0);
while(true){
if((i__4642__auto___31261 < len__4641__auto___31260)){
args__4647__auto__.push((arguments[i__4642__auto___31261]));

var G__31262 = (i__4642__auto___31261 + (1));
i__4642__auto___31261 = G__31262;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31217){
var map__31218 = p__31217;
var map__31218__$1 = (((((!((map__31218 == null))))?(((((map__31218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31218):map__31218);
var opts = map__31218__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31216){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31216));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31220){if((e31220 instanceof Error)){
var e = e31220;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31220;

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
return (function (p__31221){
var map__31222 = p__31221;
var map__31222__$1 = (((((!((map__31222 == null))))?(((((map__31222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31222):map__31222);
var msg_name = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547634624938
