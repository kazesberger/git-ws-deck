// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30678){
var map__30679 = p__30678;
var map__30679__$1 = (((((!((map__30679 == null))))?(((((map__30679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30679):map__30679);
var m = map__30679__$1;
var n = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30681_30703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30682_30704 = null;
var count__30683_30705 = (0);
var i__30684_30706 = (0);
while(true){
if((i__30684_30706 < count__30683_30705)){
var f_30707 = cljs.core._nth.call(null,chunk__30682_30704,i__30684_30706);
cljs.core.println.call(null,"  ",f_30707);


var G__30708 = seq__30681_30703;
var G__30709 = chunk__30682_30704;
var G__30710 = count__30683_30705;
var G__30711 = (i__30684_30706 + (1));
seq__30681_30703 = G__30708;
chunk__30682_30704 = G__30709;
count__30683_30705 = G__30710;
i__30684_30706 = G__30711;
continue;
} else {
var temp__5720__auto___30712 = cljs.core.seq.call(null,seq__30681_30703);
if(temp__5720__auto___30712){
var seq__30681_30713__$1 = temp__5720__auto___30712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30681_30713__$1)){
var c__4461__auto___30714 = cljs.core.chunk_first.call(null,seq__30681_30713__$1);
var G__30715 = cljs.core.chunk_rest.call(null,seq__30681_30713__$1);
var G__30716 = c__4461__auto___30714;
var G__30717 = cljs.core.count.call(null,c__4461__auto___30714);
var G__30718 = (0);
seq__30681_30703 = G__30715;
chunk__30682_30704 = G__30716;
count__30683_30705 = G__30717;
i__30684_30706 = G__30718;
continue;
} else {
var f_30719 = cljs.core.first.call(null,seq__30681_30713__$1);
cljs.core.println.call(null,"  ",f_30719);


var G__30720 = cljs.core.next.call(null,seq__30681_30713__$1);
var G__30721 = null;
var G__30722 = (0);
var G__30723 = (0);
seq__30681_30703 = G__30720;
chunk__30682_30704 = G__30721;
count__30683_30705 = G__30722;
i__30684_30706 = G__30723;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30724 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30724);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30724)))?cljs.core.second.call(null,arglists_30724):arglists_30724));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30685_30725 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30686_30726 = null;
var count__30687_30727 = (0);
var i__30688_30728 = (0);
while(true){
if((i__30688_30728 < count__30687_30727)){
var vec__30689_30729 = cljs.core._nth.call(null,chunk__30686_30726,i__30688_30728);
var name_30730 = cljs.core.nth.call(null,vec__30689_30729,(0),null);
var map__30692_30731 = cljs.core.nth.call(null,vec__30689_30729,(1),null);
var map__30692_30732__$1 = (((((!((map__30692_30731 == null))))?(((((map__30692_30731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30692_30731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30692_30731):map__30692_30731);
var doc_30733 = cljs.core.get.call(null,map__30692_30732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30734 = cljs.core.get.call(null,map__30692_30732__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30730);

cljs.core.println.call(null," ",arglists_30734);

if(cljs.core.truth_(doc_30733)){
cljs.core.println.call(null," ",doc_30733);
} else {
}


var G__30735 = seq__30685_30725;
var G__30736 = chunk__30686_30726;
var G__30737 = count__30687_30727;
var G__30738 = (i__30688_30728 + (1));
seq__30685_30725 = G__30735;
chunk__30686_30726 = G__30736;
count__30687_30727 = G__30737;
i__30688_30728 = G__30738;
continue;
} else {
var temp__5720__auto___30739 = cljs.core.seq.call(null,seq__30685_30725);
if(temp__5720__auto___30739){
var seq__30685_30740__$1 = temp__5720__auto___30739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30685_30740__$1)){
var c__4461__auto___30741 = cljs.core.chunk_first.call(null,seq__30685_30740__$1);
var G__30742 = cljs.core.chunk_rest.call(null,seq__30685_30740__$1);
var G__30743 = c__4461__auto___30741;
var G__30744 = cljs.core.count.call(null,c__4461__auto___30741);
var G__30745 = (0);
seq__30685_30725 = G__30742;
chunk__30686_30726 = G__30743;
count__30687_30727 = G__30744;
i__30688_30728 = G__30745;
continue;
} else {
var vec__30694_30746 = cljs.core.first.call(null,seq__30685_30740__$1);
var name_30747 = cljs.core.nth.call(null,vec__30694_30746,(0),null);
var map__30697_30748 = cljs.core.nth.call(null,vec__30694_30746,(1),null);
var map__30697_30749__$1 = (((((!((map__30697_30748 == null))))?(((((map__30697_30748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30697_30748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30697_30748):map__30697_30748);
var doc_30750 = cljs.core.get.call(null,map__30697_30749__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30751 = cljs.core.get.call(null,map__30697_30749__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30747);

cljs.core.println.call(null," ",arglists_30751);

if(cljs.core.truth_(doc_30750)){
cljs.core.println.call(null," ",doc_30750);
} else {
}


var G__30752 = cljs.core.next.call(null,seq__30685_30740__$1);
var G__30753 = null;
var G__30754 = (0);
var G__30755 = (0);
seq__30685_30725 = G__30752;
chunk__30686_30726 = G__30753;
count__30687_30727 = G__30754;
i__30688_30728 = G__30755;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30699 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30700 = null;
var count__30701 = (0);
var i__30702 = (0);
while(true){
if((i__30702 < count__30701)){
var role = cljs.core._nth.call(null,chunk__30700,i__30702);
var temp__5720__auto___30756__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30756__$1)){
var spec_30757 = temp__5720__auto___30756__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30757));
} else {
}


var G__30758 = seq__30699;
var G__30759 = chunk__30700;
var G__30760 = count__30701;
var G__30761 = (i__30702 + (1));
seq__30699 = G__30758;
chunk__30700 = G__30759;
count__30701 = G__30760;
i__30702 = G__30761;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30699);
if(temp__5720__auto____$1){
var seq__30699__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30699__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30699__$1);
var G__30762 = cljs.core.chunk_rest.call(null,seq__30699__$1);
var G__30763 = c__4461__auto__;
var G__30764 = cljs.core.count.call(null,c__4461__auto__);
var G__30765 = (0);
seq__30699 = G__30762;
chunk__30700 = G__30763;
count__30701 = G__30764;
i__30702 = G__30765;
continue;
} else {
var role = cljs.core.first.call(null,seq__30699__$1);
var temp__5720__auto___30766__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30766__$2)){
var spec_30767 = temp__5720__auto___30766__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30767));
} else {
}


var G__30768 = cljs.core.next.call(null,seq__30699__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__30699 = G__30768;
chunk__30700 = G__30769;
count__30701 = G__30770;
i__30702 = G__30771;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1547626118015
