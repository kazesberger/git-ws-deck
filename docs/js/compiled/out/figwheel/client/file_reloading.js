// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29841_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29841_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29884 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29885 = null;
var count__29886 = (0);
var i__29887 = (0);
while(true){
if((i__29887 < count__29886)){
var n = cljs.core._nth.call(null,chunk__29885,i__29887);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29892 = seq__29884;
var G__29893 = chunk__29885;
var G__29894 = count__29886;
var G__29895 = (i__29887 + (1));
seq__29884 = G__29892;
chunk__29885 = G__29893;
count__29886 = G__29894;
i__29887 = G__29895;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29884);
if(temp__5720__auto__){
var seq__29884__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29884__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29884__$1);
var G__29903 = cljs.core.chunk_rest.call(null,seq__29884__$1);
var G__29904 = c__4461__auto__;
var G__29905 = cljs.core.count.call(null,c__4461__auto__);
var G__29906 = (0);
seq__29884 = G__29903;
chunk__29885 = G__29904;
count__29886 = G__29905;
i__29887 = G__29906;
continue;
} else {
var n = cljs.core.first.call(null,seq__29884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29907 = cljs.core.next.call(null,seq__29884__$1);
var G__29908 = null;
var G__29909 = (0);
var G__29910 = (0);
seq__29884 = G__29907;
chunk__29885 = G__29908;
count__29886 = G__29909;
i__29887 = G__29910;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29888){
var vec__29889 = p__29888;
var _ = cljs.core.nth.call(null,vec__29889,(0),null);
var v = cljs.core.nth.call(null,vec__29889,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__29897){
var vec__29898 = p__29897;
var k = cljs.core.nth.call(null,vec__29898,(0),null);
var v = cljs.core.nth.call(null,vec__29898,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29931_29958 = cljs.core.seq.call(null,deps);
var chunk__29932_29959 = null;
var count__29933_29960 = (0);
var i__29934_29961 = (0);
while(true){
if((i__29934_29961 < count__29933_29960)){
var dep_29962 = cljs.core._nth.call(null,chunk__29932_29959,i__29934_29961);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29962;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29962));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29962,(depth + (1)),state);
} else {
}


var G__29965 = seq__29931_29958;
var G__29966 = chunk__29932_29959;
var G__29967 = count__29933_29960;
var G__29968 = (i__29934_29961 + (1));
seq__29931_29958 = G__29965;
chunk__29932_29959 = G__29966;
count__29933_29960 = G__29967;
i__29934_29961 = G__29968;
continue;
} else {
var temp__5720__auto___29970 = cljs.core.seq.call(null,seq__29931_29958);
if(temp__5720__auto___29970){
var seq__29931_29971__$1 = temp__5720__auto___29970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29931_29971__$1)){
var c__4461__auto___29972 = cljs.core.chunk_first.call(null,seq__29931_29971__$1);
var G__29973 = cljs.core.chunk_rest.call(null,seq__29931_29971__$1);
var G__29974 = c__4461__auto___29972;
var G__29975 = cljs.core.count.call(null,c__4461__auto___29972);
var G__29976 = (0);
seq__29931_29958 = G__29973;
chunk__29932_29959 = G__29974;
count__29933_29960 = G__29975;
i__29934_29961 = G__29976;
continue;
} else {
var dep_29977 = cljs.core.first.call(null,seq__29931_29971__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29977;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29977));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29977,(depth + (1)),state);
} else {
}


var G__29983 = cljs.core.next.call(null,seq__29931_29971__$1);
var G__29984 = null;
var G__29985 = (0);
var G__29986 = (0);
seq__29931_29958 = G__29983;
chunk__29932_29959 = G__29984;
count__29933_29960 = G__29985;
i__29934_29961 = G__29986;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29952){
var vec__29953 = p__29952;
var seq__29954 = cljs.core.seq.call(null,vec__29953);
var first__29955 = cljs.core.first.call(null,seq__29954);
var seq__29954__$1 = cljs.core.next.call(null,seq__29954);
var x = first__29955;
var xs = seq__29954__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29953,seq__29954,first__29955,seq__29954__$1,x,xs,get_deps__$1){
return (function (p1__29911_SHARP_){
return clojure.set.difference.call(null,p1__29911_SHARP_,x);
});})(vec__29953,seq__29954,first__29955,seq__29954__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29979 = cljs.core.seq.call(null,provides);
var chunk__29980 = null;
var count__29981 = (0);
var i__29982 = (0);
while(true){
if((i__29982 < count__29981)){
var prov = cljs.core._nth.call(null,chunk__29980,i__29982);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29987_30004 = cljs.core.seq.call(null,requires);
var chunk__29988_30005 = null;
var count__29989_30006 = (0);
var i__29990_30007 = (0);
while(true){
if((i__29990_30007 < count__29989_30006)){
var req_30008 = cljs.core._nth.call(null,chunk__29988_30005,i__29990_30007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30008,prov);


var G__30009 = seq__29987_30004;
var G__30010 = chunk__29988_30005;
var G__30011 = count__29989_30006;
var G__30012 = (i__29990_30007 + (1));
seq__29987_30004 = G__30009;
chunk__29988_30005 = G__30010;
count__29989_30006 = G__30011;
i__29990_30007 = G__30012;
continue;
} else {
var temp__5720__auto___30013 = cljs.core.seq.call(null,seq__29987_30004);
if(temp__5720__auto___30013){
var seq__29987_30014__$1 = temp__5720__auto___30013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29987_30014__$1)){
var c__4461__auto___30015 = cljs.core.chunk_first.call(null,seq__29987_30014__$1);
var G__30016 = cljs.core.chunk_rest.call(null,seq__29987_30014__$1);
var G__30017 = c__4461__auto___30015;
var G__30018 = cljs.core.count.call(null,c__4461__auto___30015);
var G__30019 = (0);
seq__29987_30004 = G__30016;
chunk__29988_30005 = G__30017;
count__29989_30006 = G__30018;
i__29990_30007 = G__30019;
continue;
} else {
var req_30020 = cljs.core.first.call(null,seq__29987_30014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30020,prov);


var G__30022 = cljs.core.next.call(null,seq__29987_30014__$1);
var G__30023 = null;
var G__30024 = (0);
var G__30025 = (0);
seq__29987_30004 = G__30022;
chunk__29988_30005 = G__30023;
count__29989_30006 = G__30024;
i__29990_30007 = G__30025;
continue;
}
} else {
}
}
break;
}


var G__30026 = seq__29979;
var G__30027 = chunk__29980;
var G__30028 = count__29981;
var G__30029 = (i__29982 + (1));
seq__29979 = G__30026;
chunk__29980 = G__30027;
count__29981 = G__30028;
i__29982 = G__30029;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29979);
if(temp__5720__auto__){
var seq__29979__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29979__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29979__$1);
var G__30031 = cljs.core.chunk_rest.call(null,seq__29979__$1);
var G__30032 = c__4461__auto__;
var G__30033 = cljs.core.count.call(null,c__4461__auto__);
var G__30034 = (0);
seq__29979 = G__30031;
chunk__29980 = G__30032;
count__29981 = G__30033;
i__29982 = G__30034;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29979__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29993_30035 = cljs.core.seq.call(null,requires);
var chunk__29994_30036 = null;
var count__29995_30037 = (0);
var i__29996_30038 = (0);
while(true){
if((i__29996_30038 < count__29995_30037)){
var req_30039 = cljs.core._nth.call(null,chunk__29994_30036,i__29996_30038);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30039,prov);


var G__30040 = seq__29993_30035;
var G__30041 = chunk__29994_30036;
var G__30042 = count__29995_30037;
var G__30043 = (i__29996_30038 + (1));
seq__29993_30035 = G__30040;
chunk__29994_30036 = G__30041;
count__29995_30037 = G__30042;
i__29996_30038 = G__30043;
continue;
} else {
var temp__5720__auto___30044__$1 = cljs.core.seq.call(null,seq__29993_30035);
if(temp__5720__auto___30044__$1){
var seq__29993_30046__$1 = temp__5720__auto___30044__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29993_30046__$1)){
var c__4461__auto___30047 = cljs.core.chunk_first.call(null,seq__29993_30046__$1);
var G__30048 = cljs.core.chunk_rest.call(null,seq__29993_30046__$1);
var G__30049 = c__4461__auto___30047;
var G__30050 = cljs.core.count.call(null,c__4461__auto___30047);
var G__30051 = (0);
seq__29993_30035 = G__30048;
chunk__29994_30036 = G__30049;
count__29995_30037 = G__30050;
i__29996_30038 = G__30051;
continue;
} else {
var req_30052 = cljs.core.first.call(null,seq__29993_30046__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30052,prov);


var G__30053 = cljs.core.next.call(null,seq__29993_30046__$1);
var G__30054 = null;
var G__30055 = (0);
var G__30056 = (0);
seq__29993_30035 = G__30053;
chunk__29994_30036 = G__30054;
count__29995_30037 = G__30055;
i__29996_30038 = G__30056;
continue;
}
} else {
}
}
break;
}


var G__30057 = cljs.core.next.call(null,seq__29979__$1);
var G__30058 = null;
var G__30059 = (0);
var G__30060 = (0);
seq__29979 = G__30057;
chunk__29980 = G__30058;
count__29981 = G__30059;
i__29982 = G__30060;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30000_30065 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30001_30066 = null;
var count__30002_30067 = (0);
var i__30003_30068 = (0);
while(true){
if((i__30003_30068 < count__30002_30067)){
var ns_30069 = cljs.core._nth.call(null,chunk__30001_30066,i__30003_30068);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30069);


var G__30070 = seq__30000_30065;
var G__30071 = chunk__30001_30066;
var G__30072 = count__30002_30067;
var G__30073 = (i__30003_30068 + (1));
seq__30000_30065 = G__30070;
chunk__30001_30066 = G__30071;
count__30002_30067 = G__30072;
i__30003_30068 = G__30073;
continue;
} else {
var temp__5720__auto___30075 = cljs.core.seq.call(null,seq__30000_30065);
if(temp__5720__auto___30075){
var seq__30000_30079__$1 = temp__5720__auto___30075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30000_30079__$1)){
var c__4461__auto___30080 = cljs.core.chunk_first.call(null,seq__30000_30079__$1);
var G__30081 = cljs.core.chunk_rest.call(null,seq__30000_30079__$1);
var G__30082 = c__4461__auto___30080;
var G__30083 = cljs.core.count.call(null,c__4461__auto___30080);
var G__30084 = (0);
seq__30000_30065 = G__30081;
chunk__30001_30066 = G__30082;
count__30002_30067 = G__30083;
i__30003_30068 = G__30084;
continue;
} else {
var ns_30088 = cljs.core.first.call(null,seq__30000_30079__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30088);


var G__30089 = cljs.core.next.call(null,seq__30000_30079__$1);
var G__30090 = null;
var G__30091 = (0);
var G__30092 = (0);
seq__30000_30065 = G__30089;
chunk__30001_30066 = G__30090;
count__30002_30067 = G__30091;
i__30003_30068 = G__30092;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30094__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30096__i = 0, G__30096__a = new Array(arguments.length -  0);
while (G__30096__i < G__30096__a.length) {G__30096__a[G__30096__i] = arguments[G__30096__i + 0]; ++G__30096__i;}
  args = new cljs.core.IndexedSeq(G__30096__a,0,null);
} 
return G__30094__delegate.call(this,args);};
G__30094.cljs$lang$maxFixedArity = 0;
G__30094.cljs$lang$applyTo = (function (arglist__30097){
var args = cljs.core.seq(arglist__30097);
return G__30094__delegate(args);
});
G__30094.cljs$core$IFn$_invoke$arity$variadic = G__30094__delegate;
return G__30094;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30061_SHARP_,p2__30062_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30061_SHARP_)),p2__30062_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30063_SHARP_,p2__30064_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30063_SHARP_),p2__30064_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30093 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30093.addCallback(((function (G__30093){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30093))
);

G__30093.addErrback(((function (G__30093){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30093))
);

return G__30093;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30098){if((e30098 instanceof Error)){
var e = e30098;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30098;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30100){if((e30100 instanceof Error)){
var e = e30100;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30100;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30102 = cljs.core._EQ_;
var expr__30103 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30103))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30103))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30103))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30102,expr__30103){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30102,expr__30103))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30109,callback){
var map__30110 = p__30109;
var map__30110__$1 = (((((!((map__30110 == null))))?(((((map__30110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30110):map__30110);
var file_msg = map__30110__$1;
var request_url = cljs.core.get.call(null,map__30110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30110,map__30110__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30110,map__30110__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (7))){
var inst_30147 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30154_30190 = state_30151__$1;
(statearr_30154_30190[(2)] = inst_30147);

(statearr_30154_30190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (1))){
var state_30151__$1 = state_30151;
var statearr_30156_30191 = state_30151__$1;
(statearr_30156_30191[(2)] = null);

(statearr_30156_30191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (4))){
var inst_30116 = (state_30151[(7)]);
var inst_30116__$1 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30158 = state_30151;
(statearr_30158[(7)] = inst_30116__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30116__$1)){
var statearr_30159_30192 = state_30151__$1;
(statearr_30159_30192[(1)] = (5));

} else {
var statearr_30160_30193 = state_30151__$1;
(statearr_30160_30193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (15))){
var inst_30130 = (state_30151[(8)]);
var inst_30132 = (state_30151[(9)]);
var inst_30134 = inst_30132.call(null,inst_30130);
var state_30151__$1 = state_30151;
var statearr_30161_30197 = state_30151__$1;
(statearr_30161_30197[(2)] = inst_30134);

(statearr_30161_30197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (13))){
var inst_30141 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30162_30200 = state_30151__$1;
(statearr_30162_30200[(2)] = inst_30141);

(statearr_30162_30200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var state_30151__$1 = state_30151;
var statearr_30163_30202 = state_30151__$1;
(statearr_30163_30202[(2)] = null);

(statearr_30163_30202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (17))){
var inst_30138 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30164_30203 = state_30151__$1;
(statearr_30164_30203[(2)] = inst_30138);

(statearr_30164_30203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (3))){
var inst_30149 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (12))){
var state_30151__$1 = state_30151;
var statearr_30165_30206 = state_30151__$1;
(statearr_30165_30206[(2)] = null);

(statearr_30165_30206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (2))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30152 === (11))){
var inst_30122 = (state_30151[(10)]);
var inst_30128 = figwheel.client.file_reloading.blocking_load.call(null,inst_30122);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(14),inst_30128);
} else {
if((state_val_30152 === (9))){
var inst_30122 = (state_30151[(10)]);
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30122)){
var statearr_30170_30209 = state_30151__$1;
(statearr_30170_30209[(1)] = (11));

} else {
var statearr_30171_30210 = state_30151__$1;
(statearr_30171_30210[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (5))){
var inst_30123 = (state_30151[(11)]);
var inst_30116 = (state_30151[(7)]);
var inst_30122 = cljs.core.nth.call(null,inst_30116,(0),null);
var inst_30123__$1 = cljs.core.nth.call(null,inst_30116,(1),null);
var state_30151__$1 = (function (){var statearr_30172 = state_30151;
(statearr_30172[(10)] = inst_30122);

(statearr_30172[(11)] = inst_30123__$1);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30123__$1)){
var statearr_30173_30211 = state_30151__$1;
(statearr_30173_30211[(1)] = (8));

} else {
var statearr_30174_30212 = state_30151__$1;
(statearr_30174_30212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (14))){
var inst_30122 = (state_30151[(10)]);
var inst_30132 = (state_30151[(9)]);
var inst_30130 = (state_30151[(2)]);
var inst_30131 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30132__$1 = cljs.core.get.call(null,inst_30131,inst_30122);
var state_30151__$1 = (function (){var statearr_30175 = state_30151;
(statearr_30175[(8)] = inst_30130);

(statearr_30175[(9)] = inst_30132__$1);

return statearr_30175;
})();
if(cljs.core.truth_(inst_30132__$1)){
var statearr_30176_30218 = state_30151__$1;
(statearr_30176_30218[(1)] = (15));

} else {
var statearr_30177_30220 = state_30151__$1;
(statearr_30177_30220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (16))){
var inst_30130 = (state_30151[(8)]);
var inst_30136 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30130);
var state_30151__$1 = state_30151;
var statearr_30178_30221 = state_30151__$1;
(statearr_30178_30221[(2)] = inst_30136);

(statearr_30178_30221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (10))){
var inst_30143 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30179 = state_30151;
(statearr_30179[(12)] = inst_30143);

return statearr_30179;
})();
var statearr_30180_30222 = state_30151__$1;
(statearr_30180_30222[(2)] = null);

(statearr_30180_30222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (8))){
var inst_30123 = (state_30151[(11)]);
var inst_30125 = eval(inst_30123);
var state_30151__$1 = state_30151;
var statearr_30181_30223 = state_30151__$1;
(statearr_30181_30223[(2)] = inst_30125);

(statearr_30181_30223[(1)] = (10));


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
});})(c__27023__auto__))
;
return ((function (switch__26857__auto__,c__27023__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26858__auto__ = null;
var figwheel$client$file_reloading$state_machine__26858__auto____0 = (function (){
var statearr_30182 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30182[(0)] = figwheel$client$file_reloading$state_machine__26858__auto__);

(statearr_30182[(1)] = (1));

return statearr_30182;
});
var figwheel$client$file_reloading$state_machine__26858__auto____1 = (function (state_30151){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_30151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e30183){if((e30183 instanceof Object)){
var ex__26861__auto__ = e30183;
var statearr_30184_30226 = state_30151;
(statearr_30184_30226[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30227 = state_30151;
state_30151 = G__30227;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26858__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26858__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26858__auto____0;
figwheel$client$file_reloading$state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26858__auto____1;
return figwheel$client$file_reloading$state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_30186 = f__27024__auto__.call(null);
(statearr_30186[(6)] = c__27023__auto__);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30189 = arguments.length;
switch (G__30189) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30194,callback){
var map__30195 = p__30194;
var map__30195__$1 = (((((!((map__30195 == null))))?(((((map__30195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);
var file_msg = map__30195__$1;
var namespace = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30195,map__30195__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30195,map__30195__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30204){
var map__30205 = p__30204;
var map__30205__$1 = (((((!((map__30205 == null))))?(((((map__30205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30205):map__30205);
var file_msg = map__30205__$1;
var namespace = cljs.core.get.call(null,map__30205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30213){
var map__30214 = p__30213;
var map__30214__$1 = (((((!((map__30214 == null))))?(((((map__30214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30214):map__30214);
var file_msg = map__30214__$1;
var namespace = cljs.core.get.call(null,map__30214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30228,callback){
var map__30229 = p__30228;
var map__30229__$1 = (((((!((map__30229 == null))))?(((((map__30229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);
var file_msg = map__30229__$1;
var request_url = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27023__auto___30320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___30320,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto___30320,out){
return (function (state_30284){
var state_val_30285 = (state_30284[(1)]);
if((state_val_30285 === (1))){
var inst_30247 = cljs.core.seq.call(null,files);
var inst_30248 = cljs.core.first.call(null,inst_30247);
var inst_30250 = cljs.core.next.call(null,inst_30247);
var inst_30254 = files;
var state_30284__$1 = (function (){var statearr_30286 = state_30284;
(statearr_30286[(7)] = inst_30250);

(statearr_30286[(8)] = inst_30248);

(statearr_30286[(9)] = inst_30254);

return statearr_30286;
})();
var statearr_30288_30326 = state_30284__$1;
(statearr_30288_30326[(2)] = null);

(statearr_30288_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (2))){
var inst_30265 = (state_30284[(10)]);
var inst_30254 = (state_30284[(9)]);
var inst_30264 = cljs.core.seq.call(null,inst_30254);
var inst_30265__$1 = cljs.core.first.call(null,inst_30264);
var inst_30266 = cljs.core.next.call(null,inst_30264);
var inst_30269 = (inst_30265__$1 == null);
var inst_30270 = cljs.core.not.call(null,inst_30269);
var state_30284__$1 = (function (){var statearr_30289 = state_30284;
(statearr_30289[(11)] = inst_30266);

(statearr_30289[(10)] = inst_30265__$1);

return statearr_30289;
})();
if(inst_30270){
var statearr_30291_30328 = state_30284__$1;
(statearr_30291_30328[(1)] = (4));

} else {
var statearr_30292_30331 = state_30284__$1;
(statearr_30292_30331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (3))){
var inst_30282 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30284__$1,inst_30282);
} else {
if((state_val_30285 === (4))){
var inst_30265 = (state_30284[(10)]);
var inst_30272 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30265);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30284__$1,(7),inst_30272);
} else {
if((state_val_30285 === (5))){
var inst_30278 = cljs.core.async.close_BANG_.call(null,out);
var state_30284__$1 = state_30284;
var statearr_30297_30335 = state_30284__$1;
(statearr_30297_30335[(2)] = inst_30278);

(statearr_30297_30335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (6))){
var inst_30280 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
var statearr_30299_30338 = state_30284__$1;
(statearr_30299_30338[(2)] = inst_30280);

(statearr_30299_30338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (7))){
var inst_30266 = (state_30284[(11)]);
var inst_30274 = (state_30284[(2)]);
var inst_30275 = cljs.core.async.put_BANG_.call(null,out,inst_30274);
var inst_30254 = inst_30266;
var state_30284__$1 = (function (){var statearr_30302 = state_30284;
(statearr_30302[(12)] = inst_30275);

(statearr_30302[(9)] = inst_30254);

return statearr_30302;
})();
var statearr_30303_30347 = state_30284__$1;
(statearr_30303_30347[(2)] = null);

(statearr_30303_30347[(1)] = (2));


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
});})(c__27023__auto___30320,out))
;
return ((function (switch__26857__auto__,c__27023__auto___30320,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____1 = (function (state_30284){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_30284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__26861__auto__ = e30305;
var statearr_30306_30353 = state_30284;
(statearr_30306_30353[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30359 = state_30284;
state_30284 = G__30359;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__ = function(state_30284){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____1.call(this,state_30284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto___30320,out))
})();
var state__27025__auto__ = (function (){var statearr_30319 = f__27024__auto__.call(null);
(statearr_30319[(6)] = c__27023__auto___30320);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___30320,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30321,opts){
var map__30322 = p__30321;
var map__30322__$1 = (((((!((map__30322 == null))))?(((((map__30322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30322):map__30322);
var eval_body = cljs.core.get.call(null,map__30322__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30327){var e = e30327;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30329_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30329_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30339){
var vec__30340 = p__30339;
var k = cljs.core.nth.call(null,vec__30340,(0),null);
var v = cljs.core.nth.call(null,vec__30340,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30343){
var vec__30344 = p__30343;
var k = cljs.core.nth.call(null,vec__30344,(0),null);
var v = cljs.core.nth.call(null,vec__30344,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30351,p__30352){
var map__30354 = p__30351;
var map__30354__$1 = (((((!((map__30354 == null))))?(((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var opts = map__30354__$1;
var before_jsload = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30355 = p__30352;
var map__30355__$1 = (((((!((map__30355 == null))))?(((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var msg = map__30355__$1;
var files = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27024__auto__ = (function (){var switch__26857__auto__ = ((function (c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30535){
var state_val_30536 = (state_30535[(1)]);
if((state_val_30536 === (7))){
var inst_30377 = (state_30535[(7)]);
var inst_30378 = (state_30535[(8)]);
var inst_30376 = (state_30535[(9)]);
var inst_30375 = (state_30535[(10)]);
var inst_30388 = cljs.core._nth.call(null,inst_30376,inst_30378);
var inst_30389 = figwheel.client.file_reloading.eval_body.call(null,inst_30388,opts);
var inst_30391 = (inst_30378 + (1));
var tmp30537 = inst_30377;
var tmp30538 = inst_30376;
var tmp30539 = inst_30375;
var inst_30375__$1 = tmp30539;
var inst_30376__$1 = tmp30538;
var inst_30377__$1 = tmp30537;
var inst_30378__$1 = inst_30391;
var state_30535__$1 = (function (){var statearr_30544 = state_30535;
(statearr_30544[(7)] = inst_30377__$1);

(statearr_30544[(8)] = inst_30378__$1);

(statearr_30544[(11)] = inst_30389);

(statearr_30544[(9)] = inst_30376__$1);

(statearr_30544[(10)] = inst_30375__$1);

return statearr_30544;
})();
var statearr_30545_30702 = state_30535__$1;
(statearr_30545_30702[(2)] = null);

(statearr_30545_30702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (20))){
var inst_30424 = (state_30535[(12)]);
var inst_30432 = figwheel.client.file_reloading.sort_files.call(null,inst_30424);
var state_30535__$1 = state_30535;
var statearr_30546_30703 = state_30535__$1;
(statearr_30546_30703[(2)] = inst_30432);

(statearr_30546_30703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (27))){
var state_30535__$1 = state_30535;
var statearr_30547_30705 = state_30535__$1;
(statearr_30547_30705[(2)] = null);

(statearr_30547_30705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (1))){
var inst_30367 = (state_30535[(13)]);
var inst_30364 = before_jsload.call(null,files);
var inst_30365 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30366 = (function (){return ((function (inst_30367,inst_30364,inst_30365,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30348_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30348_SHARP_);
});
;})(inst_30367,inst_30364,inst_30365,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30367__$1 = cljs.core.filter.call(null,inst_30366,files);
var inst_30368 = cljs.core.not_empty.call(null,inst_30367__$1);
var state_30535__$1 = (function (){var statearr_30548 = state_30535;
(statearr_30548[(14)] = inst_30365);

(statearr_30548[(13)] = inst_30367__$1);

(statearr_30548[(15)] = inst_30364);

return statearr_30548;
})();
if(cljs.core.truth_(inst_30368)){
var statearr_30549_30709 = state_30535__$1;
(statearr_30549_30709[(1)] = (2));

} else {
var statearr_30550_30710 = state_30535__$1;
(statearr_30550_30710[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (24))){
var state_30535__$1 = state_30535;
var statearr_30555_30711 = state_30535__$1;
(statearr_30555_30711[(2)] = null);

(statearr_30555_30711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (39))){
var inst_30474 = (state_30535[(16)]);
var state_30535__$1 = state_30535;
var statearr_30561_30712 = state_30535__$1;
(statearr_30561_30712[(2)] = inst_30474);

(statearr_30561_30712[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (46))){
var inst_30525 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30569_30713 = state_30535__$1;
(statearr_30569_30713[(2)] = inst_30525);

(statearr_30569_30713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (4))){
var inst_30418 = (state_30535[(2)]);
var inst_30419 = cljs.core.List.EMPTY;
var inst_30420 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30419);
var inst_30421 = (function (){return ((function (inst_30418,inst_30419,inst_30420,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30349_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30349_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30349_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30349_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_30418,inst_30419,inst_30420,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30422 = cljs.core.filter.call(null,inst_30421,files);
var inst_30423 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30424 = cljs.core.concat.call(null,inst_30422,inst_30423);
var state_30535__$1 = (function (){var statearr_30576 = state_30535;
(statearr_30576[(17)] = inst_30420);

(statearr_30576[(18)] = inst_30418);

(statearr_30576[(12)] = inst_30424);

return statearr_30576;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30577_30716 = state_30535__$1;
(statearr_30577_30716[(1)] = (16));

} else {
var statearr_30578_30717 = state_30535__$1;
(statearr_30578_30717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (15))){
var inst_30408 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30579_30718 = state_30535__$1;
(statearr_30579_30718[(2)] = inst_30408);

(statearr_30579_30718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (21))){
var inst_30434 = (state_30535[(19)]);
var inst_30434__$1 = (state_30535[(2)]);
var inst_30435 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30434__$1);
var state_30535__$1 = (function (){var statearr_30590 = state_30535;
(statearr_30590[(19)] = inst_30434__$1);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30535__$1,(22),inst_30435);
} else {
if((state_val_30536 === (31))){
var inst_30528 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30535__$1,inst_30528);
} else {
if((state_val_30536 === (32))){
var inst_30474 = (state_30535[(16)]);
var inst_30488 = inst_30474.cljs$lang$protocol_mask$partition0$;
var inst_30489 = (inst_30488 & (64));
var inst_30490 = inst_30474.cljs$core$ISeq$;
var inst_30491 = (cljs.core.PROTOCOL_SENTINEL === inst_30490);
var inst_30492 = ((inst_30489) || (inst_30491));
var state_30535__$1 = state_30535;
if(cljs.core.truth_(inst_30492)){
var statearr_30597_30719 = state_30535__$1;
(statearr_30597_30719[(1)] = (35));

} else {
var statearr_30603_30720 = state_30535__$1;
(statearr_30603_30720[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (40))){
var inst_30505 = (state_30535[(20)]);
var inst_30504 = (state_30535[(2)]);
var inst_30505__$1 = cljs.core.get.call(null,inst_30504,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30506 = cljs.core.get.call(null,inst_30504,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30507 = cljs.core.not_empty.call(null,inst_30505__$1);
var state_30535__$1 = (function (){var statearr_30610 = state_30535;
(statearr_30610[(20)] = inst_30505__$1);

(statearr_30610[(21)] = inst_30506);

return statearr_30610;
})();
if(cljs.core.truth_(inst_30507)){
var statearr_30611_30721 = state_30535__$1;
(statearr_30611_30721[(1)] = (41));

} else {
var statearr_30612_30722 = state_30535__$1;
(statearr_30612_30722[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (33))){
var state_30535__$1 = state_30535;
var statearr_30617_30723 = state_30535__$1;
(statearr_30617_30723[(2)] = false);

(statearr_30617_30723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (13))){
var inst_30394 = (state_30535[(22)]);
var inst_30398 = cljs.core.chunk_first.call(null,inst_30394);
var inst_30399 = cljs.core.chunk_rest.call(null,inst_30394);
var inst_30400 = cljs.core.count.call(null,inst_30398);
var inst_30375 = inst_30399;
var inst_30376 = inst_30398;
var inst_30377 = inst_30400;
var inst_30378 = (0);
var state_30535__$1 = (function (){var statearr_30618 = state_30535;
(statearr_30618[(7)] = inst_30377);

(statearr_30618[(8)] = inst_30378);

(statearr_30618[(9)] = inst_30376);

(statearr_30618[(10)] = inst_30375);

return statearr_30618;
})();
var statearr_30621_30729 = state_30535__$1;
(statearr_30621_30729[(2)] = null);

(statearr_30621_30729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (22))){
var inst_30434 = (state_30535[(19)]);
var inst_30438 = (state_30535[(23)]);
var inst_30437 = (state_30535[(24)]);
var inst_30442 = (state_30535[(25)]);
var inst_30437__$1 = (state_30535[(2)]);
var inst_30438__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30437__$1);
var inst_30439 = (function (){var all_files = inst_30434;
var res_SINGLEQUOTE_ = inst_30437__$1;
var res = inst_30438__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30434,inst_30438,inst_30437,inst_30442,inst_30437__$1,inst_30438__$1,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30350_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30350_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30434,inst_30438,inst_30437,inst_30442,inst_30437__$1,inst_30438__$1,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30440 = cljs.core.filter.call(null,inst_30439,inst_30437__$1);
var inst_30441 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30442__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30441);
var inst_30443 = cljs.core.not_empty.call(null,inst_30442__$1);
var state_30535__$1 = (function (){var statearr_30632 = state_30535;
(statearr_30632[(23)] = inst_30438__$1);

(statearr_30632[(26)] = inst_30440);

(statearr_30632[(24)] = inst_30437__$1);

(statearr_30632[(25)] = inst_30442__$1);

return statearr_30632;
})();
if(cljs.core.truth_(inst_30443)){
var statearr_30637_30731 = state_30535__$1;
(statearr_30637_30731[(1)] = (23));

} else {
var statearr_30638_30732 = state_30535__$1;
(statearr_30638_30732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (36))){
var state_30535__$1 = state_30535;
var statearr_30639_30733 = state_30535__$1;
(statearr_30639_30733[(2)] = false);

(statearr_30639_30733[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (41))){
var inst_30505 = (state_30535[(20)]);
var inst_30509 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30510 = cljs.core.map.call(null,inst_30509,inst_30505);
var inst_30511 = cljs.core.pr_str.call(null,inst_30510);
var inst_30512 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30511)].join('');
var inst_30513 = figwheel.client.utils.log.call(null,inst_30512);
var state_30535__$1 = state_30535;
var statearr_30640_30734 = state_30535__$1;
(statearr_30640_30734[(2)] = inst_30513);

(statearr_30640_30734[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (43))){
var inst_30506 = (state_30535[(21)]);
var inst_30516 = (state_30535[(2)]);
var inst_30517 = cljs.core.not_empty.call(null,inst_30506);
var state_30535__$1 = (function (){var statearr_30641 = state_30535;
(statearr_30641[(27)] = inst_30516);

return statearr_30641;
})();
if(cljs.core.truth_(inst_30517)){
var statearr_30642_30735 = state_30535__$1;
(statearr_30642_30735[(1)] = (44));

} else {
var statearr_30643_30736 = state_30535__$1;
(statearr_30643_30736[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (29))){
var inst_30474 = (state_30535[(16)]);
var inst_30434 = (state_30535[(19)]);
var inst_30438 = (state_30535[(23)]);
var inst_30440 = (state_30535[(26)]);
var inst_30437 = (state_30535[(24)]);
var inst_30442 = (state_30535[(25)]);
var inst_30470 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30473 = (function (){var all_files = inst_30434;
var res_SINGLEQUOTE_ = inst_30437;
var res = inst_30438;
var files_not_loaded = inst_30440;
var dependencies_that_loaded = inst_30442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30470,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30472){
var map__30644 = p__30472;
var map__30644__$1 = (((((!((map__30644 == null))))?(((((map__30644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);
var namespace = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30470,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30474__$1 = cljs.core.group_by.call(null,inst_30473,inst_30440);
var inst_30480 = (inst_30474__$1 == null);
var inst_30481 = cljs.core.not.call(null,inst_30480);
var state_30535__$1 = (function (){var statearr_30646 = state_30535;
(statearr_30646[(16)] = inst_30474__$1);

(statearr_30646[(28)] = inst_30470);

return statearr_30646;
})();
if(inst_30481){
var statearr_30647_30737 = state_30535__$1;
(statearr_30647_30737[(1)] = (32));

} else {
var statearr_30648_30738 = state_30535__$1;
(statearr_30648_30738[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (44))){
var inst_30506 = (state_30535[(21)]);
var inst_30519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30506);
var inst_30520 = cljs.core.pr_str.call(null,inst_30519);
var inst_30521 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30520)].join('');
var inst_30522 = figwheel.client.utils.log.call(null,inst_30521);
var state_30535__$1 = state_30535;
var statearr_30649_30739 = state_30535__$1;
(statearr_30649_30739[(2)] = inst_30522);

(statearr_30649_30739[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (6))){
var inst_30415 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30650_30740 = state_30535__$1;
(statearr_30650_30740[(2)] = inst_30415);

(statearr_30650_30740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (28))){
var inst_30440 = (state_30535[(26)]);
var inst_30467 = (state_30535[(2)]);
var inst_30468 = cljs.core.not_empty.call(null,inst_30440);
var state_30535__$1 = (function (){var statearr_30651 = state_30535;
(statearr_30651[(29)] = inst_30467);

return statearr_30651;
})();
if(cljs.core.truth_(inst_30468)){
var statearr_30652_30741 = state_30535__$1;
(statearr_30652_30741[(1)] = (29));

} else {
var statearr_30653_30742 = state_30535__$1;
(statearr_30653_30742[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (25))){
var inst_30438 = (state_30535[(23)]);
var inst_30454 = (state_30535[(2)]);
var inst_30455 = cljs.core.not_empty.call(null,inst_30438);
var state_30535__$1 = (function (){var statearr_30654 = state_30535;
(statearr_30654[(30)] = inst_30454);

return statearr_30654;
})();
if(cljs.core.truth_(inst_30455)){
var statearr_30655_30743 = state_30535__$1;
(statearr_30655_30743[(1)] = (26));

} else {
var statearr_30656_30744 = state_30535__$1;
(statearr_30656_30744[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (34))){
var inst_30499 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
if(cljs.core.truth_(inst_30499)){
var statearr_30657_30745 = state_30535__$1;
(statearr_30657_30745[(1)] = (38));

} else {
var statearr_30658_30746 = state_30535__$1;
(statearr_30658_30746[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (17))){
var state_30535__$1 = state_30535;
var statearr_30659_30747 = state_30535__$1;
(statearr_30659_30747[(2)] = recompile_dependents);

(statearr_30659_30747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (3))){
var state_30535__$1 = state_30535;
var statearr_30660_30748 = state_30535__$1;
(statearr_30660_30748[(2)] = null);

(statearr_30660_30748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (12))){
var inst_30411 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30661_30749 = state_30535__$1;
(statearr_30661_30749[(2)] = inst_30411);

(statearr_30661_30749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (2))){
var inst_30367 = (state_30535[(13)]);
var inst_30374 = cljs.core.seq.call(null,inst_30367);
var inst_30375 = inst_30374;
var inst_30376 = null;
var inst_30377 = (0);
var inst_30378 = (0);
var state_30535__$1 = (function (){var statearr_30662 = state_30535;
(statearr_30662[(7)] = inst_30377);

(statearr_30662[(8)] = inst_30378);

(statearr_30662[(9)] = inst_30376);

(statearr_30662[(10)] = inst_30375);

return statearr_30662;
})();
var statearr_30663_30750 = state_30535__$1;
(statearr_30663_30750[(2)] = null);

(statearr_30663_30750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (23))){
var inst_30434 = (state_30535[(19)]);
var inst_30438 = (state_30535[(23)]);
var inst_30440 = (state_30535[(26)]);
var inst_30437 = (state_30535[(24)]);
var inst_30442 = (state_30535[(25)]);
var inst_30445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30447 = (function (){var all_files = inst_30434;
var res_SINGLEQUOTE_ = inst_30437;
var res = inst_30438;
var files_not_loaded = inst_30440;
var dependencies_that_loaded = inst_30442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30445,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30446){
var map__30664 = p__30446;
var map__30664__$1 = (((((!((map__30664 == null))))?(((((map__30664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);
var request_url = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30445,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30448 = cljs.core.reverse.call(null,inst_30442);
var inst_30449 = cljs.core.map.call(null,inst_30447,inst_30448);
var inst_30450 = cljs.core.pr_str.call(null,inst_30449);
var inst_30451 = figwheel.client.utils.log.call(null,inst_30450);
var state_30535__$1 = (function (){var statearr_30666 = state_30535;
(statearr_30666[(31)] = inst_30445);

return statearr_30666;
})();
var statearr_30667_30751 = state_30535__$1;
(statearr_30667_30751[(2)] = inst_30451);

(statearr_30667_30751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (35))){
var state_30535__$1 = state_30535;
var statearr_30668_30752 = state_30535__$1;
(statearr_30668_30752[(2)] = true);

(statearr_30668_30752[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (19))){
var inst_30424 = (state_30535[(12)]);
var inst_30430 = figwheel.client.file_reloading.expand_files.call(null,inst_30424);
var state_30535__$1 = state_30535;
var statearr_30669_30753 = state_30535__$1;
(statearr_30669_30753[(2)] = inst_30430);

(statearr_30669_30753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (11))){
var state_30535__$1 = state_30535;
var statearr_30670_30754 = state_30535__$1;
(statearr_30670_30754[(2)] = null);

(statearr_30670_30754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (9))){
var inst_30413 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30671_30755 = state_30535__$1;
(statearr_30671_30755[(2)] = inst_30413);

(statearr_30671_30755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (5))){
var inst_30377 = (state_30535[(7)]);
var inst_30378 = (state_30535[(8)]);
var inst_30381 = (inst_30378 < inst_30377);
var inst_30382 = inst_30381;
var state_30535__$1 = state_30535;
if(cljs.core.truth_(inst_30382)){
var statearr_30672_30756 = state_30535__$1;
(statearr_30672_30756[(1)] = (7));

} else {
var statearr_30673_30757 = state_30535__$1;
(statearr_30673_30757[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (14))){
var inst_30394 = (state_30535[(22)]);
var inst_30403 = cljs.core.first.call(null,inst_30394);
var inst_30404 = figwheel.client.file_reloading.eval_body.call(null,inst_30403,opts);
var inst_30405 = cljs.core.next.call(null,inst_30394);
var inst_30375 = inst_30405;
var inst_30376 = null;
var inst_30377 = (0);
var inst_30378 = (0);
var state_30535__$1 = (function (){var statearr_30674 = state_30535;
(statearr_30674[(32)] = inst_30404);

(statearr_30674[(7)] = inst_30377);

(statearr_30674[(8)] = inst_30378);

(statearr_30674[(9)] = inst_30376);

(statearr_30674[(10)] = inst_30375);

return statearr_30674;
})();
var statearr_30675_30758 = state_30535__$1;
(statearr_30675_30758[(2)] = null);

(statearr_30675_30758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (45))){
var state_30535__$1 = state_30535;
var statearr_30676_30759 = state_30535__$1;
(statearr_30676_30759[(2)] = null);

(statearr_30676_30759[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (26))){
var inst_30434 = (state_30535[(19)]);
var inst_30438 = (state_30535[(23)]);
var inst_30440 = (state_30535[(26)]);
var inst_30437 = (state_30535[(24)]);
var inst_30442 = (state_30535[(25)]);
var inst_30457 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30459 = (function (){var all_files = inst_30434;
var res_SINGLEQUOTE_ = inst_30437;
var res = inst_30438;
var files_not_loaded = inst_30440;
var dependencies_that_loaded = inst_30442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30457,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30458){
var map__30677 = p__30458;
var map__30677__$1 = (((((!((map__30677 == null))))?(((((map__30677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677):map__30677);
var namespace = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30457,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30460 = cljs.core.map.call(null,inst_30459,inst_30438);
var inst_30461 = cljs.core.pr_str.call(null,inst_30460);
var inst_30462 = figwheel.client.utils.log.call(null,inst_30461);
var inst_30463 = (function (){var all_files = inst_30434;
var res_SINGLEQUOTE_ = inst_30437;
var res = inst_30438;
var files_not_loaded = inst_30440;
var dependencies_that_loaded = inst_30442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30457,inst_30459,inst_30460,inst_30461,inst_30462,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30434,inst_30438,inst_30440,inst_30437,inst_30442,inst_30457,inst_30459,inst_30460,inst_30461,inst_30462,state_val_30536,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30464 = setTimeout(inst_30463,(10));
var state_30535__$1 = (function (){var statearr_30679 = state_30535;
(statearr_30679[(33)] = inst_30462);

(statearr_30679[(34)] = inst_30457);

return statearr_30679;
})();
var statearr_30680_30760 = state_30535__$1;
(statearr_30680_30760[(2)] = inst_30464);

(statearr_30680_30760[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (16))){
var state_30535__$1 = state_30535;
var statearr_30681_30761 = state_30535__$1;
(statearr_30681_30761[(2)] = reload_dependents);

(statearr_30681_30761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (38))){
var inst_30474 = (state_30535[(16)]);
var inst_30501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30474);
var state_30535__$1 = state_30535;
var statearr_30682_30762 = state_30535__$1;
(statearr_30682_30762[(2)] = inst_30501);

(statearr_30682_30762[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (30))){
var state_30535__$1 = state_30535;
var statearr_30683_30763 = state_30535__$1;
(statearr_30683_30763[(2)] = null);

(statearr_30683_30763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (10))){
var inst_30394 = (state_30535[(22)]);
var inst_30396 = cljs.core.chunked_seq_QMARK_.call(null,inst_30394);
var state_30535__$1 = state_30535;
if(inst_30396){
var statearr_30684_30764 = state_30535__$1;
(statearr_30684_30764[(1)] = (13));

} else {
var statearr_30685_30765 = state_30535__$1;
(statearr_30685_30765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (18))){
var inst_30428 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
if(cljs.core.truth_(inst_30428)){
var statearr_30686_30766 = state_30535__$1;
(statearr_30686_30766[(1)] = (19));

} else {
var statearr_30687_30767 = state_30535__$1;
(statearr_30687_30767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (42))){
var state_30535__$1 = state_30535;
var statearr_30688_30768 = state_30535__$1;
(statearr_30688_30768[(2)] = null);

(statearr_30688_30768[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (37))){
var inst_30496 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30689_30769 = state_30535__$1;
(statearr_30689_30769[(2)] = inst_30496);

(statearr_30689_30769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (8))){
var inst_30394 = (state_30535[(22)]);
var inst_30375 = (state_30535[(10)]);
var inst_30394__$1 = cljs.core.seq.call(null,inst_30375);
var state_30535__$1 = (function (){var statearr_30690 = state_30535;
(statearr_30690[(22)] = inst_30394__$1);

return statearr_30690;
})();
if(inst_30394__$1){
var statearr_30691_30770 = state_30535__$1;
(statearr_30691_30770[(1)] = (10));

} else {
var statearr_30692_30771 = state_30535__$1;
(statearr_30692_30771[(1)] = (11));

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
}
});})(c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26857__auto__,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____0 = (function (){
var statearr_30693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30693[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__);

(statearr_30693[(1)] = (1));

return statearr_30693;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____1 = (function (state_30535){
while(true){
var ret_value__26859__auto__ = (function (){try{while(true){
var result__26860__auto__ = switch__26857__auto__.call(null,state_30535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26860__auto__;
}
break;
}
}catch (e30694){if((e30694 instanceof Object)){
var ex__26861__auto__ = e30694;
var statearr_30695_30772 = state_30535;
(statearr_30695_30772[(5)] = ex__26861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30773 = state_30535;
state_30535 = G__30773;
continue;
} else {
return ret_value__26859__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__ = function(state_30535){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____1.call(this,state_30535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26858__auto__;
})()
;})(switch__26857__auto__,c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27025__auto__ = (function (){var statearr_30696 = f__27024__auto__.call(null);
(statearr_30696[(6)] = c__27023__auto__);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,map__30354,map__30354__$1,opts,before_jsload,on_jsload,reload_dependents,map__30355,map__30355__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27023__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30699,link){
var map__30700 = p__30699;
var map__30700__$1 = (((((!((map__30700 == null))))?(((((map__30700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);
var file = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__30700,map__30700__$1,file){
return (function (p1__30697_SHARP_,p2__30698_SHARP_){
if(cljs.core._EQ_.call(null,p1__30697_SHARP_,p2__30698_SHARP_)){
return p1__30697_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__30700,map__30700__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30706){
var map__30707 = p__30706;
var map__30707__$1 = (((((!((map__30707 == null))))?(((((map__30707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30707):map__30707);
var match_length = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30704_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30704_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30714_SHARP_,p2__30715_SHARP_){
return cljs.core.assoc.call(null,p1__30714_SHARP_,cljs.core.get.call(null,p2__30715_SHARP_,key),p2__30715_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30774 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30774);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30774);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30724,p__30725){
var map__30726 = p__30724;
var map__30726__$1 = (((((!((map__30726 == null))))?(((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var on_cssload = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30727 = p__30725;
var map__30727__$1 = (((((!((map__30727 == null))))?(((((map__30727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30727):map__30727);
var files_msg = map__30727__$1;
var files = cljs.core.get.call(null,map__30727__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1547634624737
