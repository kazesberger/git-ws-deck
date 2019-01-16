// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30360){
var map__30362 = p__30360;
var map__30362__$1 = (((((!((map__30362 == null))))?(((((map__30362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30362):map__30362);
var m = map__30362__$1;
var n = cljs.core.get.call(null,map__30362__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30384_30551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30385_30552 = null;
var count__30386_30553 = (0);
var i__30387_30554 = (0);
while(true){
if((i__30387_30554 < count__30386_30553)){
var f_30556 = cljs.core._nth.call(null,chunk__30385_30552,i__30387_30554);
cljs.core.println.call(null,"  ",f_30556);


var G__30557 = seq__30384_30551;
var G__30558 = chunk__30385_30552;
var G__30559 = count__30386_30553;
var G__30560 = (i__30387_30554 + (1));
seq__30384_30551 = G__30557;
chunk__30385_30552 = G__30558;
count__30386_30553 = G__30559;
i__30387_30554 = G__30560;
continue;
} else {
var temp__5720__auto___30562 = cljs.core.seq.call(null,seq__30384_30551);
if(temp__5720__auto___30562){
var seq__30384_30563__$1 = temp__5720__auto___30562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30384_30563__$1)){
var c__4461__auto___30564 = cljs.core.chunk_first.call(null,seq__30384_30563__$1);
var G__30565 = cljs.core.chunk_rest.call(null,seq__30384_30563__$1);
var G__30566 = c__4461__auto___30564;
var G__30567 = cljs.core.count.call(null,c__4461__auto___30564);
var G__30568 = (0);
seq__30384_30551 = G__30565;
chunk__30385_30552 = G__30566;
count__30386_30553 = G__30567;
i__30387_30554 = G__30568;
continue;
} else {
var f_30570 = cljs.core.first.call(null,seq__30384_30563__$1);
cljs.core.println.call(null,"  ",f_30570);


var G__30571 = cljs.core.next.call(null,seq__30384_30563__$1);
var G__30572 = null;
var G__30573 = (0);
var G__30574 = (0);
seq__30384_30551 = G__30571;
chunk__30385_30552 = G__30572;
count__30386_30553 = G__30573;
i__30387_30554 = G__30574;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30575 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30575);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30575)))?cljs.core.second.call(null,arglists_30575):arglists_30575));
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
var seq__30475_30580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30476_30581 = null;
var count__30477_30582 = (0);
var i__30478_30583 = (0);
while(true){
if((i__30478_30583 < count__30477_30582)){
var vec__30483_30584 = cljs.core._nth.call(null,chunk__30476_30581,i__30478_30583);
var name_30585 = cljs.core.nth.call(null,vec__30483_30584,(0),null);
var map__30486_30586 = cljs.core.nth.call(null,vec__30483_30584,(1),null);
var map__30486_30587__$1 = (((((!((map__30486_30586 == null))))?(((((map__30486_30586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486_30586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486_30586):map__30486_30586);
var doc_30588 = cljs.core.get.call(null,map__30486_30587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30589 = cljs.core.get.call(null,map__30486_30587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30585);

cljs.core.println.call(null," ",arglists_30589);

if(cljs.core.truth_(doc_30588)){
cljs.core.println.call(null," ",doc_30588);
} else {
}


var G__30591 = seq__30475_30580;
var G__30592 = chunk__30476_30581;
var G__30593 = count__30477_30582;
var G__30594 = (i__30478_30583 + (1));
seq__30475_30580 = G__30591;
chunk__30476_30581 = G__30592;
count__30477_30582 = G__30593;
i__30478_30583 = G__30594;
continue;
} else {
var temp__5720__auto___30595 = cljs.core.seq.call(null,seq__30475_30580);
if(temp__5720__auto___30595){
var seq__30475_30596__$1 = temp__5720__auto___30595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30475_30596__$1)){
var c__4461__auto___30598 = cljs.core.chunk_first.call(null,seq__30475_30596__$1);
var G__30599 = cljs.core.chunk_rest.call(null,seq__30475_30596__$1);
var G__30600 = c__4461__auto___30598;
var G__30601 = cljs.core.count.call(null,c__4461__auto___30598);
var G__30602 = (0);
seq__30475_30580 = G__30599;
chunk__30476_30581 = G__30600;
count__30477_30582 = G__30601;
i__30478_30583 = G__30602;
continue;
} else {
var vec__30529_30604 = cljs.core.first.call(null,seq__30475_30596__$1);
var name_30605 = cljs.core.nth.call(null,vec__30529_30604,(0),null);
var map__30532_30606 = cljs.core.nth.call(null,vec__30529_30604,(1),null);
var map__30532_30607__$1 = (((((!((map__30532_30606 == null))))?(((((map__30532_30606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30532_30606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532_30606):map__30532_30606);
var doc_30608 = cljs.core.get.call(null,map__30532_30607__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30609 = cljs.core.get.call(null,map__30532_30607__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30605);

cljs.core.println.call(null," ",arglists_30609);

if(cljs.core.truth_(doc_30608)){
cljs.core.println.call(null," ",doc_30608);
} else {
}


var G__30613 = cljs.core.next.call(null,seq__30475_30596__$1);
var G__30614 = null;
var G__30615 = (0);
var G__30616 = (0);
seq__30475_30580 = G__30613;
chunk__30476_30581 = G__30614;
count__30477_30582 = G__30615;
i__30478_30583 = G__30616;
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

var seq__30540 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30541 = null;
var count__30542 = (0);
var i__30543 = (0);
while(true){
if((i__30543 < count__30542)){
var role = cljs.core._nth.call(null,chunk__30541,i__30543);
var temp__5720__auto___30619__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30619__$1)){
var spec_30620 = temp__5720__auto___30619__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30620));
} else {
}


var G__30622 = seq__30540;
var G__30623 = chunk__30541;
var G__30624 = count__30542;
var G__30625 = (i__30543 + (1));
seq__30540 = G__30622;
chunk__30541 = G__30623;
count__30542 = G__30624;
i__30543 = G__30625;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30540);
if(temp__5720__auto____$1){
var seq__30540__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30540__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30540__$1);
var G__30626 = cljs.core.chunk_rest.call(null,seq__30540__$1);
var G__30627 = c__4461__auto__;
var G__30628 = cljs.core.count.call(null,c__4461__auto__);
var G__30629 = (0);
seq__30540 = G__30626;
chunk__30541 = G__30627;
count__30542 = G__30628;
i__30543 = G__30629;
continue;
} else {
var role = cljs.core.first.call(null,seq__30540__$1);
var temp__5720__auto___30630__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30630__$2)){
var spec_30631 = temp__5720__auto___30630__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30631));
} else {
}


var G__30633 = cljs.core.next.call(null,seq__30540__$1);
var G__30634 = null;
var G__30635 = (0);
var G__30636 = (0);
seq__30540 = G__30633;
chunk__30541 = G__30634;
count__30542 = G__30635;
i__30543 = G__30636;
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

//# sourceMappingURL=repl.js.map?rel=1547634624678
