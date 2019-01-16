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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29835_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29835_SHARP_));
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
var seq__29860 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29861 = null;
var count__29862 = (0);
var i__29863 = (0);
while(true){
if((i__29863 < count__29862)){
var n = cljs.core._nth.call(null,chunk__29861,i__29863);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29893 = seq__29860;
var G__29894 = chunk__29861;
var G__29895 = count__29862;
var G__29896 = (i__29863 + (1));
seq__29860 = G__29893;
chunk__29861 = G__29894;
count__29862 = G__29895;
i__29863 = G__29896;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29860);
if(temp__5720__auto__){
var seq__29860__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29860__$1);
var G__29897 = cljs.core.chunk_rest.call(null,seq__29860__$1);
var G__29898 = c__4461__auto__;
var G__29899 = cljs.core.count.call(null,c__4461__auto__);
var G__29900 = (0);
seq__29860 = G__29897;
chunk__29861 = G__29898;
count__29862 = G__29899;
i__29863 = G__29900;
continue;
} else {
var n = cljs.core.first.call(null,seq__29860__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29902 = cljs.core.next.call(null,seq__29860__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29860 = G__29902;
chunk__29861 = G__29903;
count__29862 = G__29904;
i__29863 = G__29905;
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
return cljs.core.some.call(null,(function (p__29885){
var vec__29886 = p__29885;
var _ = cljs.core.nth.call(null,vec__29886,(0),null);
var v = cljs.core.nth.call(null,vec__29886,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__29889){
var vec__29890 = p__29889;
var k = cljs.core.nth.call(null,vec__29890,(0),null);
var v = cljs.core.nth.call(null,vec__29890,(1),null);
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

var seq__29928_29956 = cljs.core.seq.call(null,deps);
var chunk__29929_29957 = null;
var count__29930_29958 = (0);
var i__29931_29959 = (0);
while(true){
if((i__29931_29959 < count__29930_29958)){
var dep_29960 = cljs.core._nth.call(null,chunk__29929_29957,i__29931_29959);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29960;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29960));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29960,(depth + (1)),state);
} else {
}


var G__29963 = seq__29928_29956;
var G__29964 = chunk__29929_29957;
var G__29965 = count__29930_29958;
var G__29966 = (i__29931_29959 + (1));
seq__29928_29956 = G__29963;
chunk__29929_29957 = G__29964;
count__29930_29958 = G__29965;
i__29931_29959 = G__29966;
continue;
} else {
var temp__5720__auto___29967 = cljs.core.seq.call(null,seq__29928_29956);
if(temp__5720__auto___29967){
var seq__29928_29968__$1 = temp__5720__auto___29967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29928_29968__$1)){
var c__4461__auto___29969 = cljs.core.chunk_first.call(null,seq__29928_29968__$1);
var G__29970 = cljs.core.chunk_rest.call(null,seq__29928_29968__$1);
var G__29971 = c__4461__auto___29969;
var G__29972 = cljs.core.count.call(null,c__4461__auto___29969);
var G__29973 = (0);
seq__29928_29956 = G__29970;
chunk__29929_29957 = G__29971;
count__29930_29958 = G__29972;
i__29931_29959 = G__29973;
continue;
} else {
var dep_29974 = cljs.core.first.call(null,seq__29928_29968__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29974;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29974));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29974,(depth + (1)),state);
} else {
}


var G__29976 = cljs.core.next.call(null,seq__29928_29968__$1);
var G__29977 = null;
var G__29978 = (0);
var G__29979 = (0);
seq__29928_29956 = G__29976;
chunk__29929_29957 = G__29977;
count__29930_29958 = G__29978;
i__29931_29959 = G__29979;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29949){
var vec__29950 = p__29949;
var seq__29951 = cljs.core.seq.call(null,vec__29950);
var first__29952 = cljs.core.first.call(null,seq__29951);
var seq__29951__$1 = cljs.core.next.call(null,seq__29951);
var x = first__29952;
var xs = seq__29951__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29950,seq__29951,first__29952,seq__29951__$1,x,xs,get_deps__$1){
return (function (p1__29901_SHARP_){
return clojure.set.difference.call(null,p1__29901_SHARP_,x);
});})(vec__29950,seq__29951,first__29952,seq__29951__$1,x,xs,get_deps__$1))
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
var seq__29982 = cljs.core.seq.call(null,provides);
var chunk__29983 = null;
var count__29984 = (0);
var i__29985 = (0);
while(true){
if((i__29985 < count__29984)){
var prov = cljs.core._nth.call(null,chunk__29983,i__29985);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29986_30004 = cljs.core.seq.call(null,requires);
var chunk__29987_30005 = null;
var count__29988_30006 = (0);
var i__29989_30007 = (0);
while(true){
if((i__29989_30007 < count__29988_30006)){
var req_30008 = cljs.core._nth.call(null,chunk__29987_30005,i__29989_30007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30008,prov);


var G__30009 = seq__29986_30004;
var G__30010 = chunk__29987_30005;
var G__30011 = count__29988_30006;
var G__30012 = (i__29989_30007 + (1));
seq__29986_30004 = G__30009;
chunk__29987_30005 = G__30010;
count__29988_30006 = G__30011;
i__29989_30007 = G__30012;
continue;
} else {
var temp__5720__auto___30013 = cljs.core.seq.call(null,seq__29986_30004);
if(temp__5720__auto___30013){
var seq__29986_30014__$1 = temp__5720__auto___30013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29986_30014__$1)){
var c__4461__auto___30015 = cljs.core.chunk_first.call(null,seq__29986_30014__$1);
var G__30016 = cljs.core.chunk_rest.call(null,seq__29986_30014__$1);
var G__30017 = c__4461__auto___30015;
var G__30018 = cljs.core.count.call(null,c__4461__auto___30015);
var G__30019 = (0);
seq__29986_30004 = G__30016;
chunk__29987_30005 = G__30017;
count__29988_30006 = G__30018;
i__29989_30007 = G__30019;
continue;
} else {
var req_30021 = cljs.core.first.call(null,seq__29986_30014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30021,prov);


var G__30025 = cljs.core.next.call(null,seq__29986_30014__$1);
var G__30026 = null;
var G__30027 = (0);
var G__30028 = (0);
seq__29986_30004 = G__30025;
chunk__29987_30005 = G__30026;
count__29988_30006 = G__30027;
i__29989_30007 = G__30028;
continue;
}
} else {
}
}
break;
}


var G__30032 = seq__29982;
var G__30033 = chunk__29983;
var G__30034 = count__29984;
var G__30035 = (i__29985 + (1));
seq__29982 = G__30032;
chunk__29983 = G__30033;
count__29984 = G__30034;
i__29985 = G__30035;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29982);
if(temp__5720__auto__){
var seq__29982__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29982__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29982__$1);
var G__30036 = cljs.core.chunk_rest.call(null,seq__29982__$1);
var G__30037 = c__4461__auto__;
var G__30038 = cljs.core.count.call(null,c__4461__auto__);
var G__30039 = (0);
seq__29982 = G__30036;
chunk__29983 = G__30037;
count__29984 = G__30038;
i__29985 = G__30039;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29982__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29993_30040 = cljs.core.seq.call(null,requires);
var chunk__29994_30041 = null;
var count__29995_30042 = (0);
var i__29996_30043 = (0);
while(true){
if((i__29996_30043 < count__29995_30042)){
var req_30045 = cljs.core._nth.call(null,chunk__29994_30041,i__29996_30043);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30045,prov);


var G__30046 = seq__29993_30040;
var G__30047 = chunk__29994_30041;
var G__30048 = count__29995_30042;
var G__30049 = (i__29996_30043 + (1));
seq__29993_30040 = G__30046;
chunk__29994_30041 = G__30047;
count__29995_30042 = G__30048;
i__29996_30043 = G__30049;
continue;
} else {
var temp__5720__auto___30054__$1 = cljs.core.seq.call(null,seq__29993_30040);
if(temp__5720__auto___30054__$1){
var seq__29993_30055__$1 = temp__5720__auto___30054__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29993_30055__$1)){
var c__4461__auto___30056 = cljs.core.chunk_first.call(null,seq__29993_30055__$1);
var G__30057 = cljs.core.chunk_rest.call(null,seq__29993_30055__$1);
var G__30058 = c__4461__auto___30056;
var G__30059 = cljs.core.count.call(null,c__4461__auto___30056);
var G__30060 = (0);
seq__29993_30040 = G__30057;
chunk__29994_30041 = G__30058;
count__29995_30042 = G__30059;
i__29996_30043 = G__30060;
continue;
} else {
var req_30061 = cljs.core.first.call(null,seq__29993_30055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30061,prov);


var G__30062 = cljs.core.next.call(null,seq__29993_30055__$1);
var G__30063 = null;
var G__30064 = (0);
var G__30065 = (0);
seq__29993_30040 = G__30062;
chunk__29994_30041 = G__30063;
count__29995_30042 = G__30064;
i__29996_30043 = G__30065;
continue;
}
} else {
}
}
break;
}


var G__30066 = cljs.core.next.call(null,seq__29982__$1);
var G__30067 = null;
var G__30068 = (0);
var G__30069 = (0);
seq__29982 = G__30066;
chunk__29983 = G__30067;
count__29984 = G__30068;
i__29985 = G__30069;
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
var seq__30000_30072 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30001_30073 = null;
var count__30002_30074 = (0);
var i__30003_30075 = (0);
while(true){
if((i__30003_30075 < count__30002_30074)){
var ns_30076 = cljs.core._nth.call(null,chunk__30001_30073,i__30003_30075);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30076);


var G__30078 = seq__30000_30072;
var G__30079 = chunk__30001_30073;
var G__30080 = count__30002_30074;
var G__30081 = (i__30003_30075 + (1));
seq__30000_30072 = G__30078;
chunk__30001_30073 = G__30079;
count__30002_30074 = G__30080;
i__30003_30075 = G__30081;
continue;
} else {
var temp__5720__auto___30083 = cljs.core.seq.call(null,seq__30000_30072);
if(temp__5720__auto___30083){
var seq__30000_30085__$1 = temp__5720__auto___30083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30000_30085__$1)){
var c__4461__auto___30086 = cljs.core.chunk_first.call(null,seq__30000_30085__$1);
var G__30087 = cljs.core.chunk_rest.call(null,seq__30000_30085__$1);
var G__30088 = c__4461__auto___30086;
var G__30089 = cljs.core.count.call(null,c__4461__auto___30086);
var G__30090 = (0);
seq__30000_30072 = G__30087;
chunk__30001_30073 = G__30088;
count__30002_30074 = G__30089;
i__30003_30075 = G__30090;
continue;
} else {
var ns_30093 = cljs.core.first.call(null,seq__30000_30085__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30093);


var G__30095 = cljs.core.next.call(null,seq__30000_30085__$1);
var G__30096 = null;
var G__30097 = (0);
var G__30098 = (0);
seq__30000_30072 = G__30095;
chunk__30001_30073 = G__30096;
count__30002_30074 = G__30097;
i__30003_30075 = G__30098;
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
var G__30099__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30100__i = 0, G__30100__a = new Array(arguments.length -  0);
while (G__30100__i < G__30100__a.length) {G__30100__a[G__30100__i] = arguments[G__30100__i + 0]; ++G__30100__i;}
  args = new cljs.core.IndexedSeq(G__30100__a,0,null);
} 
return G__30099__delegate.call(this,args);};
G__30099.cljs$lang$maxFixedArity = 0;
G__30099.cljs$lang$applyTo = (function (arglist__30101){
var args = cljs.core.seq(arglist__30101);
return G__30099__delegate(args);
});
G__30099.cljs$core$IFn$_invoke$arity$variadic = G__30099__delegate;
return G__30099;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30050_SHARP_,p2__30051_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30050_SHARP_)),p2__30051_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30052_SHARP_,p2__30053_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30052_SHARP_),p2__30053_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30071 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30071.addCallback(((function (G__30071){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30071))
);

G__30071.addErrback(((function (G__30071){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30071))
);

return G__30071;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30082){if((e30082 instanceof Error)){
var e = e30082;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30082;

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
}catch (e30102){if((e30102 instanceof Error)){
var e = e30102;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30102;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30103 = cljs.core._EQ_;
var expr__30104 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30103.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30104))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30103.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30104))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30103.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30104))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30103,expr__30104){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30103,expr__30104))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30106,callback){
var map__30107 = p__30106;
var map__30107__$1 = (((((!((map__30107 == null))))?(((((map__30107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30107):map__30107);
var file_msg = map__30107__$1;
var request_url = cljs.core.get.call(null,map__30107__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30107,map__30107__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30107,map__30107__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (7))){
var inst_30147 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30155_30191 = state_30151__$1;
(statearr_30155_30191[(2)] = inst_30147);

(statearr_30155_30191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (1))){
var state_30151__$1 = state_30151;
var statearr_30158_30194 = state_30151__$1;
(statearr_30158_30194[(2)] = null);

(statearr_30158_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (4))){
var inst_30117 = (state_30151[(7)]);
var inst_30117__$1 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30159 = state_30151;
(statearr_30159[(7)] = inst_30117__$1);

return statearr_30159;
})();
if(cljs.core.truth_(inst_30117__$1)){
var statearr_30160_30199 = state_30151__$1;
(statearr_30160_30199[(1)] = (5));

} else {
var statearr_30161_30200 = state_30151__$1;
(statearr_30161_30200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (15))){
var inst_30130 = (state_30151[(8)]);
var inst_30132 = (state_30151[(9)]);
var inst_30134 = inst_30132.call(null,inst_30130);
var state_30151__$1 = state_30151;
var statearr_30162_30201 = state_30151__$1;
(statearr_30162_30201[(2)] = inst_30134);

(statearr_30162_30201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (13))){
var inst_30141 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30163_30204 = state_30151__$1;
(statearr_30163_30204[(2)] = inst_30141);

(statearr_30163_30204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var state_30151__$1 = state_30151;
var statearr_30164_30205 = state_30151__$1;
(statearr_30164_30205[(2)] = null);

(statearr_30164_30205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (17))){
var inst_30138 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30165_30209 = state_30151__$1;
(statearr_30165_30209[(2)] = inst_30138);

(statearr_30165_30209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (3))){
var inst_30149 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (12))){
var state_30151__$1 = state_30151;
var statearr_30166_30210 = state_30151__$1;
(statearr_30166_30210[(2)] = null);

(statearr_30166_30210[(1)] = (13));


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
var statearr_30167_30211 = state_30151__$1;
(statearr_30167_30211[(1)] = (11));

} else {
var statearr_30168_30212 = state_30151__$1;
(statearr_30168_30212[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (5))){
var inst_30117 = (state_30151[(7)]);
var inst_30123 = (state_30151[(11)]);
var inst_30122 = cljs.core.nth.call(null,inst_30117,(0),null);
var inst_30123__$1 = cljs.core.nth.call(null,inst_30117,(1),null);
var state_30151__$1 = (function (){var statearr_30170 = state_30151;
(statearr_30170[(10)] = inst_30122);

(statearr_30170[(11)] = inst_30123__$1);

return statearr_30170;
})();
if(cljs.core.truth_(inst_30123__$1)){
var statearr_30172_30215 = state_30151__$1;
(statearr_30172_30215[(1)] = (8));

} else {
var statearr_30173_30217 = state_30151__$1;
(statearr_30173_30217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (14))){
var inst_30122 = (state_30151[(10)]);
var inst_30132 = (state_30151[(9)]);
var inst_30130 = (state_30151[(2)]);
var inst_30131 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30132__$1 = cljs.core.get.call(null,inst_30131,inst_30122);
var state_30151__$1 = (function (){var statearr_30174 = state_30151;
(statearr_30174[(8)] = inst_30130);

(statearr_30174[(9)] = inst_30132__$1);

return statearr_30174;
})();
if(cljs.core.truth_(inst_30132__$1)){
var statearr_30175_30226 = state_30151__$1;
(statearr_30175_30226[(1)] = (15));

} else {
var statearr_30176_30231 = state_30151__$1;
(statearr_30176_30231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (16))){
var inst_30130 = (state_30151[(8)]);
var inst_30136 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30130);
var state_30151__$1 = state_30151;
var statearr_30177_30239 = state_30151__$1;
(statearr_30177_30239[(2)] = inst_30136);

(statearr_30177_30239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (10))){
var inst_30143 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30178 = state_30151;
(statearr_30178[(12)] = inst_30143);

return statearr_30178;
})();
var statearr_30179_30240 = state_30151__$1;
(statearr_30179_30240[(2)] = null);

(statearr_30179_30240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (8))){
var inst_30123 = (state_30151[(11)]);
var inst_30125 = eval(inst_30123);
var state_30151__$1 = state_30151;
var statearr_30180_30244 = state_30151__$1;
(statearr_30180_30244[(2)] = inst_30125);

(statearr_30180_30244[(1)] = (10));


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
});})(c__27048__auto__))
;
return ((function (switch__26891__auto__,c__27048__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26892__auto__ = null;
var figwheel$client$file_reloading$state_machine__26892__auto____0 = (function (){
var statearr_30184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30184[(0)] = figwheel$client$file_reloading$state_machine__26892__auto__);

(statearr_30184[(1)] = (1));

return statearr_30184;
});
var figwheel$client$file_reloading$state_machine__26892__auto____1 = (function (state_30151){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_30151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e30185){if((e30185 instanceof Object)){
var ex__26895__auto__ = e30185;
var statearr_30186_30247 = state_30151;
(statearr_30186_30247[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30249 = state_30151;
state_30151 = G__30249;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26892__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26892__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26892__auto____0;
figwheel$client$file_reloading$state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26892__auto____1;
return figwheel$client$file_reloading$state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__))
})();
var state__27050__auto__ = (function (){var statearr_30188 = f__27049__auto__.call(null);
(statearr_30188[(6)] = c__27048__auto__);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__))
);

return c__27048__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30190 = arguments.length;
switch (G__30190) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30196,callback){
var map__30197 = p__30196;
var map__30197__$1 = (((((!((map__30197 == null))))?(((((map__30197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30197):map__30197);
var file_msg = map__30197__$1;
var namespace = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30197,map__30197__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30197,map__30197__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30206){
var map__30207 = p__30206;
var map__30207__$1 = (((((!((map__30207 == null))))?(((((map__30207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30207):map__30207);
var file_msg = map__30207__$1;
var namespace = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30241,callback){
var map__30243 = p__30241;
var map__30243__$1 = (((((!((map__30243 == null))))?(((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var file_msg = map__30243__$1;
var request_url = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27048__auto___30326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto___30326,out){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto___30326,out){
return (function (state_30287){
var state_val_30288 = (state_30287[(1)]);
if((state_val_30288 === (1))){
var inst_30259 = cljs.core.seq.call(null,files);
var inst_30260 = cljs.core.first.call(null,inst_30259);
var inst_30262 = cljs.core.next.call(null,inst_30259);
var inst_30263 = files;
var state_30287__$1 = (function (){var statearr_30290 = state_30287;
(statearr_30290[(7)] = inst_30262);

(statearr_30290[(8)] = inst_30263);

(statearr_30290[(9)] = inst_30260);

return statearr_30290;
})();
var statearr_30291_30329 = state_30287__$1;
(statearr_30291_30329[(2)] = null);

(statearr_30291_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (2))){
var inst_30270 = (state_30287[(10)]);
var inst_30263 = (state_30287[(8)]);
var inst_30268 = cljs.core.seq.call(null,inst_30263);
var inst_30270__$1 = cljs.core.first.call(null,inst_30268);
var inst_30271 = cljs.core.next.call(null,inst_30268);
var inst_30272 = (inst_30270__$1 == null);
var inst_30273 = cljs.core.not.call(null,inst_30272);
var state_30287__$1 = (function (){var statearr_30292 = state_30287;
(statearr_30292[(11)] = inst_30271);

(statearr_30292[(10)] = inst_30270__$1);

return statearr_30292;
})();
if(inst_30273){
var statearr_30293_30330 = state_30287__$1;
(statearr_30293_30330[(1)] = (4));

} else {
var statearr_30294_30331 = state_30287__$1;
(statearr_30294_30331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (3))){
var inst_30285 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30287__$1,inst_30285);
} else {
if((state_val_30288 === (4))){
var inst_30270 = (state_30287[(10)]);
var inst_30275 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30270);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30287__$1,(7),inst_30275);
} else {
if((state_val_30288 === (5))){
var inst_30281 = cljs.core.async.close_BANG_.call(null,out);
var state_30287__$1 = state_30287;
var statearr_30307_30341 = state_30287__$1;
(statearr_30307_30341[(2)] = inst_30281);

(statearr_30307_30341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (6))){
var inst_30283 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30308_30346 = state_30287__$1;
(statearr_30308_30346[(2)] = inst_30283);

(statearr_30308_30346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (7))){
var inst_30271 = (state_30287[(11)]);
var inst_30277 = (state_30287[(2)]);
var inst_30278 = cljs.core.async.put_BANG_.call(null,out,inst_30277);
var inst_30263 = inst_30271;
var state_30287__$1 = (function (){var statearr_30310 = state_30287;
(statearr_30310[(12)] = inst_30278);

(statearr_30310[(8)] = inst_30263);

return statearr_30310;
})();
var statearr_30311_30351 = state_30287__$1;
(statearr_30311_30351[(2)] = null);

(statearr_30311_30351[(1)] = (2));


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
});})(c__27048__auto___30326,out))
;
return ((function (switch__26891__auto__,c__27048__auto___30326,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____1 = (function (state_30287){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_30287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e30314){if((e30314 instanceof Object)){
var ex__26895__auto__ = e30314;
var statearr_30315_30354 = state_30287;
(statearr_30315_30354[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30287;
state_30287 = G__30355;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__ = function(state_30287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____1.call(this,state_30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto___30326,out))
})();
var state__27050__auto__ = (function (){var statearr_30318 = f__27049__auto__.call(null);
(statearr_30318[(6)] = c__27048__auto___30326);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto___30326,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30322,opts){
var map__30323 = p__30322;
var map__30323__$1 = (((((!((map__30323 == null))))?(((((map__30323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30323):map__30323);
var eval_body = cljs.core.get.call(null,map__30323__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (p1__30328_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30328_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30332){
var vec__30333 = p__30332;
var k = cljs.core.nth.call(null,vec__30333,(0),null);
var v = cljs.core.nth.call(null,vec__30333,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30336){
var vec__30337 = p__30336;
var k = cljs.core.nth.call(null,vec__30337,(0),null);
var v = cljs.core.nth.call(null,vec__30337,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30347,p__30348){
var map__30349 = p__30347;
var map__30349__$1 = (((((!((map__30349 == null))))?(((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);
var opts = map__30349__$1;
var before_jsload = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30350 = p__30348;
var map__30350__$1 = (((((!((map__30350 == null))))?(((((map__30350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30350):map__30350);
var msg = map__30350__$1;
var files = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27049__auto__ = (function (){var switch__26891__auto__ = ((function (c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30507){
var state_val_30508 = (state_30507[(1)]);
if((state_val_30508 === (7))){
var inst_30368 = (state_30507[(7)]);
var inst_30370 = (state_30507[(8)]);
var inst_30369 = (state_30507[(9)]);
var inst_30367 = (state_30507[(10)]);
var inst_30375 = cljs.core._nth.call(null,inst_30368,inst_30370);
var inst_30376 = figwheel.client.file_reloading.eval_body.call(null,inst_30375,opts);
var inst_30377 = (inst_30370 + (1));
var tmp30509 = inst_30368;
var tmp30510 = inst_30369;
var tmp30511 = inst_30367;
var inst_30367__$1 = tmp30511;
var inst_30368__$1 = tmp30509;
var inst_30369__$1 = tmp30510;
var inst_30370__$1 = inst_30377;
var state_30507__$1 = (function (){var statearr_30512 = state_30507;
(statearr_30512[(7)] = inst_30368__$1);

(statearr_30512[(8)] = inst_30370__$1);

(statearr_30512[(11)] = inst_30376);

(statearr_30512[(9)] = inst_30369__$1);

(statearr_30512[(10)] = inst_30367__$1);

return statearr_30512;
})();
var statearr_30513_30601 = state_30507__$1;
(statearr_30513_30601[(2)] = null);

(statearr_30513_30601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (20))){
var inst_30410 = (state_30507[(12)]);
var inst_30418 = figwheel.client.file_reloading.sort_files.call(null,inst_30410);
var state_30507__$1 = state_30507;
var statearr_30514_30602 = state_30507__$1;
(statearr_30514_30602[(2)] = inst_30418);

(statearr_30514_30602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (27))){
var state_30507__$1 = state_30507;
var statearr_30515_30604 = state_30507__$1;
(statearr_30515_30604[(2)] = null);

(statearr_30515_30604[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (1))){
var inst_30359 = (state_30507[(13)]);
var inst_30356 = before_jsload.call(null,files);
var inst_30357 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30358 = (function (){return ((function (inst_30359,inst_30356,inst_30357,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30342_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30342_SHARP_);
});
;})(inst_30359,inst_30356,inst_30357,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30359__$1 = cljs.core.filter.call(null,inst_30358,files);
var inst_30360 = cljs.core.not_empty.call(null,inst_30359__$1);
var state_30507__$1 = (function (){var statearr_30516 = state_30507;
(statearr_30516[(14)] = inst_30356);

(statearr_30516[(15)] = inst_30357);

(statearr_30516[(13)] = inst_30359__$1);

return statearr_30516;
})();
if(cljs.core.truth_(inst_30360)){
var statearr_30517_30608 = state_30507__$1;
(statearr_30517_30608[(1)] = (2));

} else {
var statearr_30518_30609 = state_30507__$1;
(statearr_30518_30609[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (24))){
var state_30507__$1 = state_30507;
var statearr_30519_30610 = state_30507__$1;
(statearr_30519_30610[(2)] = null);

(statearr_30519_30610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (39))){
var inst_30460 = (state_30507[(16)]);
var state_30507__$1 = state_30507;
var statearr_30520_30611 = state_30507__$1;
(statearr_30520_30611[(2)] = inst_30460);

(statearr_30520_30611[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (46))){
var inst_30502 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30521_30612 = state_30507__$1;
(statearr_30521_30612[(2)] = inst_30502);

(statearr_30521_30612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (4))){
var inst_30404 = (state_30507[(2)]);
var inst_30405 = cljs.core.List.EMPTY;
var inst_30406 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30405);
var inst_30407 = (function (){return ((function (inst_30404,inst_30405,inst_30406,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30343_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30343_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30343_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30343_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_30404,inst_30405,inst_30406,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30408 = cljs.core.filter.call(null,inst_30407,files);
var inst_30409 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30410 = cljs.core.concat.call(null,inst_30408,inst_30409);
var state_30507__$1 = (function (){var statearr_30522 = state_30507;
(statearr_30522[(17)] = inst_30404);

(statearr_30522[(18)] = inst_30406);

(statearr_30522[(12)] = inst_30410);

return statearr_30522;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30523_30615 = state_30507__$1;
(statearr_30523_30615[(1)] = (16));

} else {
var statearr_30524_30616 = state_30507__$1;
(statearr_30524_30616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (15))){
var inst_30394 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30525_30617 = state_30507__$1;
(statearr_30525_30617[(2)] = inst_30394);

(statearr_30525_30617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (21))){
var inst_30420 = (state_30507[(19)]);
var inst_30420__$1 = (state_30507[(2)]);
var inst_30421 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30420__$1);
var state_30507__$1 = (function (){var statearr_30526 = state_30507;
(statearr_30526[(19)] = inst_30420__$1);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30507__$1,(22),inst_30421);
} else {
if((state_val_30508 === (31))){
var inst_30505 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30507__$1,inst_30505);
} else {
if((state_val_30508 === (32))){
var inst_30460 = (state_30507[(16)]);
var inst_30465 = inst_30460.cljs$lang$protocol_mask$partition0$;
var inst_30466 = (inst_30465 & (64));
var inst_30467 = inst_30460.cljs$core$ISeq$;
var inst_30468 = (cljs.core.PROTOCOL_SENTINEL === inst_30467);
var inst_30469 = ((inst_30466) || (inst_30468));
var state_30507__$1 = state_30507;
if(cljs.core.truth_(inst_30469)){
var statearr_30527_30618 = state_30507__$1;
(statearr_30527_30618[(1)] = (35));

} else {
var statearr_30528_30619 = state_30507__$1;
(statearr_30528_30619[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (40))){
var inst_30482 = (state_30507[(20)]);
var inst_30481 = (state_30507[(2)]);
var inst_30482__$1 = cljs.core.get.call(null,inst_30481,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30483 = cljs.core.get.call(null,inst_30481,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30484 = cljs.core.not_empty.call(null,inst_30482__$1);
var state_30507__$1 = (function (){var statearr_30529 = state_30507;
(statearr_30529[(21)] = inst_30483);

(statearr_30529[(20)] = inst_30482__$1);

return statearr_30529;
})();
if(cljs.core.truth_(inst_30484)){
var statearr_30530_30620 = state_30507__$1;
(statearr_30530_30620[(1)] = (41));

} else {
var statearr_30531_30621 = state_30507__$1;
(statearr_30531_30621[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (33))){
var state_30507__$1 = state_30507;
var statearr_30532_30622 = state_30507__$1;
(statearr_30532_30622[(2)] = false);

(statearr_30532_30622[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (13))){
var inst_30380 = (state_30507[(22)]);
var inst_30384 = cljs.core.chunk_first.call(null,inst_30380);
var inst_30385 = cljs.core.chunk_rest.call(null,inst_30380);
var inst_30386 = cljs.core.count.call(null,inst_30384);
var inst_30367 = inst_30385;
var inst_30368 = inst_30384;
var inst_30369 = inst_30386;
var inst_30370 = (0);
var state_30507__$1 = (function (){var statearr_30533 = state_30507;
(statearr_30533[(7)] = inst_30368);

(statearr_30533[(8)] = inst_30370);

(statearr_30533[(9)] = inst_30369);

(statearr_30533[(10)] = inst_30367);

return statearr_30533;
})();
var statearr_30534_30627 = state_30507__$1;
(statearr_30534_30627[(2)] = null);

(statearr_30534_30627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (22))){
var inst_30420 = (state_30507[(19)]);
var inst_30423 = (state_30507[(23)]);
var inst_30424 = (state_30507[(24)]);
var inst_30428 = (state_30507[(25)]);
var inst_30423__$1 = (state_30507[(2)]);
var inst_30424__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30423__$1);
var inst_30425 = (function (){var all_files = inst_30420;
var res_SINGLEQUOTE_ = inst_30423__$1;
var res = inst_30424__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30420,inst_30423,inst_30424,inst_30428,inst_30423__$1,inst_30424__$1,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30345_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30345_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30420,inst_30423,inst_30424,inst_30428,inst_30423__$1,inst_30424__$1,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30426 = cljs.core.filter.call(null,inst_30425,inst_30423__$1);
var inst_30427 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30428__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30427);
var inst_30429 = cljs.core.not_empty.call(null,inst_30428__$1);
var state_30507__$1 = (function (){var statearr_30535 = state_30507;
(statearr_30535[(23)] = inst_30423__$1);

(statearr_30535[(26)] = inst_30426);

(statearr_30535[(24)] = inst_30424__$1);

(statearr_30535[(25)] = inst_30428__$1);

return statearr_30535;
})();
if(cljs.core.truth_(inst_30429)){
var statearr_30536_30630 = state_30507__$1;
(statearr_30536_30630[(1)] = (23));

} else {
var statearr_30537_30631 = state_30507__$1;
(statearr_30537_30631[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (36))){
var state_30507__$1 = state_30507;
var statearr_30538_30632 = state_30507__$1;
(statearr_30538_30632[(2)] = false);

(statearr_30538_30632[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (41))){
var inst_30482 = (state_30507[(20)]);
var inst_30486 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30487 = cljs.core.map.call(null,inst_30486,inst_30482);
var inst_30488 = cljs.core.pr_str.call(null,inst_30487);
var inst_30489 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30488)].join('');
var inst_30490 = figwheel.client.utils.log.call(null,inst_30489);
var state_30507__$1 = state_30507;
var statearr_30539_30633 = state_30507__$1;
(statearr_30539_30633[(2)] = inst_30490);

(statearr_30539_30633[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (43))){
var inst_30483 = (state_30507[(21)]);
var inst_30493 = (state_30507[(2)]);
var inst_30494 = cljs.core.not_empty.call(null,inst_30483);
var state_30507__$1 = (function (){var statearr_30540 = state_30507;
(statearr_30540[(27)] = inst_30493);

return statearr_30540;
})();
if(cljs.core.truth_(inst_30494)){
var statearr_30541_30634 = state_30507__$1;
(statearr_30541_30634[(1)] = (44));

} else {
var statearr_30542_30635 = state_30507__$1;
(statearr_30542_30635[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (29))){
var inst_30460 = (state_30507[(16)]);
var inst_30420 = (state_30507[(19)]);
var inst_30423 = (state_30507[(23)]);
var inst_30426 = (state_30507[(26)]);
var inst_30424 = (state_30507[(24)]);
var inst_30428 = (state_30507[(25)]);
var inst_30456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30459 = (function (){var all_files = inst_30420;
var res_SINGLEQUOTE_ = inst_30423;
var res = inst_30424;
var files_not_loaded = inst_30426;
var dependencies_that_loaded = inst_30428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30460,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30456,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30458){
var map__30543 = p__30458;
var map__30543__$1 = (((((!((map__30543 == null))))?(((((map__30543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30543):map__30543);
var namespace = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30460,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30456,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30460__$1 = cljs.core.group_by.call(null,inst_30459,inst_30426);
var inst_30462 = (inst_30460__$1 == null);
var inst_30463 = cljs.core.not.call(null,inst_30462);
var state_30507__$1 = (function (){var statearr_30545 = state_30507;
(statearr_30545[(16)] = inst_30460__$1);

(statearr_30545[(28)] = inst_30456);

return statearr_30545;
})();
if(inst_30463){
var statearr_30546_30636 = state_30507__$1;
(statearr_30546_30636[(1)] = (32));

} else {
var statearr_30547_30637 = state_30507__$1;
(statearr_30547_30637[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (44))){
var inst_30483 = (state_30507[(21)]);
var inst_30496 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30483);
var inst_30497 = cljs.core.pr_str.call(null,inst_30496);
var inst_30498 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30497)].join('');
var inst_30499 = figwheel.client.utils.log.call(null,inst_30498);
var state_30507__$1 = state_30507;
var statearr_30548_30638 = state_30507__$1;
(statearr_30548_30638[(2)] = inst_30499);

(statearr_30548_30638[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (6))){
var inst_30401 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30549_30639 = state_30507__$1;
(statearr_30549_30639[(2)] = inst_30401);

(statearr_30549_30639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (28))){
var inst_30426 = (state_30507[(26)]);
var inst_30453 = (state_30507[(2)]);
var inst_30454 = cljs.core.not_empty.call(null,inst_30426);
var state_30507__$1 = (function (){var statearr_30550 = state_30507;
(statearr_30550[(29)] = inst_30453);

return statearr_30550;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30551_30640 = state_30507__$1;
(statearr_30551_30640[(1)] = (29));

} else {
var statearr_30552_30641 = state_30507__$1;
(statearr_30552_30641[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (25))){
var inst_30424 = (state_30507[(24)]);
var inst_30440 = (state_30507[(2)]);
var inst_30441 = cljs.core.not_empty.call(null,inst_30424);
var state_30507__$1 = (function (){var statearr_30553 = state_30507;
(statearr_30553[(30)] = inst_30440);

return statearr_30553;
})();
if(cljs.core.truth_(inst_30441)){
var statearr_30554_30642 = state_30507__$1;
(statearr_30554_30642[(1)] = (26));

} else {
var statearr_30555_30643 = state_30507__$1;
(statearr_30555_30643[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (34))){
var inst_30476 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
if(cljs.core.truth_(inst_30476)){
var statearr_30556_30644 = state_30507__$1;
(statearr_30556_30644[(1)] = (38));

} else {
var statearr_30557_30645 = state_30507__$1;
(statearr_30557_30645[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (17))){
var state_30507__$1 = state_30507;
var statearr_30558_30646 = state_30507__$1;
(statearr_30558_30646[(2)] = recompile_dependents);

(statearr_30558_30646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (3))){
var state_30507__$1 = state_30507;
var statearr_30559_30647 = state_30507__$1;
(statearr_30559_30647[(2)] = null);

(statearr_30559_30647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (12))){
var inst_30397 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30560_30648 = state_30507__$1;
(statearr_30560_30648[(2)] = inst_30397);

(statearr_30560_30648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (2))){
var inst_30359 = (state_30507[(13)]);
var inst_30366 = cljs.core.seq.call(null,inst_30359);
var inst_30367 = inst_30366;
var inst_30368 = null;
var inst_30369 = (0);
var inst_30370 = (0);
var state_30507__$1 = (function (){var statearr_30561 = state_30507;
(statearr_30561[(7)] = inst_30368);

(statearr_30561[(8)] = inst_30370);

(statearr_30561[(9)] = inst_30369);

(statearr_30561[(10)] = inst_30367);

return statearr_30561;
})();
var statearr_30562_30649 = state_30507__$1;
(statearr_30562_30649[(2)] = null);

(statearr_30562_30649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (23))){
var inst_30420 = (state_30507[(19)]);
var inst_30423 = (state_30507[(23)]);
var inst_30426 = (state_30507[(26)]);
var inst_30424 = (state_30507[(24)]);
var inst_30428 = (state_30507[(25)]);
var inst_30431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30433 = (function (){var all_files = inst_30420;
var res_SINGLEQUOTE_ = inst_30423;
var res = inst_30424;
var files_not_loaded = inst_30426;
var dependencies_that_loaded = inst_30428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30431,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30432){
var map__30563 = p__30432;
var map__30563__$1 = (((((!((map__30563 == null))))?(((((map__30563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30563):map__30563);
var request_url = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30431,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30434 = cljs.core.reverse.call(null,inst_30428);
var inst_30435 = cljs.core.map.call(null,inst_30433,inst_30434);
var inst_30436 = cljs.core.pr_str.call(null,inst_30435);
var inst_30437 = figwheel.client.utils.log.call(null,inst_30436);
var state_30507__$1 = (function (){var statearr_30565 = state_30507;
(statearr_30565[(31)] = inst_30431);

return statearr_30565;
})();
var statearr_30566_30652 = state_30507__$1;
(statearr_30566_30652[(2)] = inst_30437);

(statearr_30566_30652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (35))){
var state_30507__$1 = state_30507;
var statearr_30567_30653 = state_30507__$1;
(statearr_30567_30653[(2)] = true);

(statearr_30567_30653[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (19))){
var inst_30410 = (state_30507[(12)]);
var inst_30416 = figwheel.client.file_reloading.expand_files.call(null,inst_30410);
var state_30507__$1 = state_30507;
var statearr_30568_30654 = state_30507__$1;
(statearr_30568_30654[(2)] = inst_30416);

(statearr_30568_30654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (11))){
var state_30507__$1 = state_30507;
var statearr_30569_30655 = state_30507__$1;
(statearr_30569_30655[(2)] = null);

(statearr_30569_30655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (9))){
var inst_30399 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30570_30656 = state_30507__$1;
(statearr_30570_30656[(2)] = inst_30399);

(statearr_30570_30656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (5))){
var inst_30370 = (state_30507[(8)]);
var inst_30369 = (state_30507[(9)]);
var inst_30372 = (inst_30370 < inst_30369);
var inst_30373 = inst_30372;
var state_30507__$1 = state_30507;
if(cljs.core.truth_(inst_30373)){
var statearr_30571_30657 = state_30507__$1;
(statearr_30571_30657[(1)] = (7));

} else {
var statearr_30572_30658 = state_30507__$1;
(statearr_30572_30658[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (14))){
var inst_30380 = (state_30507[(22)]);
var inst_30389 = cljs.core.first.call(null,inst_30380);
var inst_30390 = figwheel.client.file_reloading.eval_body.call(null,inst_30389,opts);
var inst_30391 = cljs.core.next.call(null,inst_30380);
var inst_30367 = inst_30391;
var inst_30368 = null;
var inst_30369 = (0);
var inst_30370 = (0);
var state_30507__$1 = (function (){var statearr_30573 = state_30507;
(statearr_30573[(7)] = inst_30368);

(statearr_30573[(8)] = inst_30370);

(statearr_30573[(32)] = inst_30390);

(statearr_30573[(9)] = inst_30369);

(statearr_30573[(10)] = inst_30367);

return statearr_30573;
})();
var statearr_30574_30659 = state_30507__$1;
(statearr_30574_30659[(2)] = null);

(statearr_30574_30659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (45))){
var state_30507__$1 = state_30507;
var statearr_30575_30660 = state_30507__$1;
(statearr_30575_30660[(2)] = null);

(statearr_30575_30660[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (26))){
var inst_30420 = (state_30507[(19)]);
var inst_30423 = (state_30507[(23)]);
var inst_30426 = (state_30507[(26)]);
var inst_30424 = (state_30507[(24)]);
var inst_30428 = (state_30507[(25)]);
var inst_30443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30445 = (function (){var all_files = inst_30420;
var res_SINGLEQUOTE_ = inst_30423;
var res = inst_30424;
var files_not_loaded = inst_30426;
var dependencies_that_loaded = inst_30428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30443,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30444){
var map__30576 = p__30444;
var map__30576__$1 = (((((!((map__30576 == null))))?(((((map__30576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);
var namespace = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30443,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30446 = cljs.core.map.call(null,inst_30445,inst_30424);
var inst_30447 = cljs.core.pr_str.call(null,inst_30446);
var inst_30448 = figwheel.client.utils.log.call(null,inst_30447);
var inst_30449 = (function (){var all_files = inst_30420;
var res_SINGLEQUOTE_ = inst_30423;
var res = inst_30424;
var files_not_loaded = inst_30426;
var dependencies_that_loaded = inst_30428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30443,inst_30445,inst_30446,inst_30447,inst_30448,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30420,inst_30423,inst_30426,inst_30424,inst_30428,inst_30443,inst_30445,inst_30446,inst_30447,inst_30448,state_val_30508,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30450 = setTimeout(inst_30449,(10));
var state_30507__$1 = (function (){var statearr_30578 = state_30507;
(statearr_30578[(33)] = inst_30448);

(statearr_30578[(34)] = inst_30443);

return statearr_30578;
})();
var statearr_30579_30661 = state_30507__$1;
(statearr_30579_30661[(2)] = inst_30450);

(statearr_30579_30661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (16))){
var state_30507__$1 = state_30507;
var statearr_30580_30662 = state_30507__$1;
(statearr_30580_30662[(2)] = reload_dependents);

(statearr_30580_30662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (38))){
var inst_30460 = (state_30507[(16)]);
var inst_30478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30460);
var state_30507__$1 = state_30507;
var statearr_30581_30663 = state_30507__$1;
(statearr_30581_30663[(2)] = inst_30478);

(statearr_30581_30663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (30))){
var state_30507__$1 = state_30507;
var statearr_30582_30664 = state_30507__$1;
(statearr_30582_30664[(2)] = null);

(statearr_30582_30664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (10))){
var inst_30380 = (state_30507[(22)]);
var inst_30382 = cljs.core.chunked_seq_QMARK_.call(null,inst_30380);
var state_30507__$1 = state_30507;
if(inst_30382){
var statearr_30583_30665 = state_30507__$1;
(statearr_30583_30665[(1)] = (13));

} else {
var statearr_30584_30666 = state_30507__$1;
(statearr_30584_30666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (18))){
var inst_30414 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
if(cljs.core.truth_(inst_30414)){
var statearr_30585_30667 = state_30507__$1;
(statearr_30585_30667[(1)] = (19));

} else {
var statearr_30586_30668 = state_30507__$1;
(statearr_30586_30668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (42))){
var state_30507__$1 = state_30507;
var statearr_30587_30669 = state_30507__$1;
(statearr_30587_30669[(2)] = null);

(statearr_30587_30669[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (37))){
var inst_30473 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30588_30670 = state_30507__$1;
(statearr_30588_30670[(2)] = inst_30473);

(statearr_30588_30670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (8))){
var inst_30380 = (state_30507[(22)]);
var inst_30367 = (state_30507[(10)]);
var inst_30380__$1 = cljs.core.seq.call(null,inst_30367);
var state_30507__$1 = (function (){var statearr_30589 = state_30507;
(statearr_30589[(22)] = inst_30380__$1);

return statearr_30589;
})();
if(inst_30380__$1){
var statearr_30590_30671 = state_30507__$1;
(statearr_30590_30671[(1)] = (10));

} else {
var statearr_30591_30672 = state_30507__$1;
(statearr_30591_30672[(1)] = (11));

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
});})(c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26891__auto__,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____0 = (function (){
var statearr_30592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30592[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__);

(statearr_30592[(1)] = (1));

return statearr_30592;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____1 = (function (state_30507){
while(true){
var ret_value__26893__auto__ = (function (){try{while(true){
var result__26894__auto__ = switch__26891__auto__.call(null,state_30507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26894__auto__;
}
break;
}
}catch (e30593){if((e30593 instanceof Object)){
var ex__26895__auto__ = e30593;
var statearr_30594_30673 = state_30507;
(statearr_30594_30673[(5)] = ex__26895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30674 = state_30507;
state_30507 = G__30674;
continue;
} else {
return ret_value__26893__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__ = function(state_30507){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____1.call(this,state_30507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26892__auto__;
})()
;})(switch__26891__auto__,c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27050__auto__ = (function (){var statearr_30595 = f__27049__auto__.call(null);
(statearr_30595[(6)] = c__27048__auto__);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27050__auto__);
});})(c__27048__auto__,map__30349,map__30349__$1,opts,before_jsload,on_jsload,reload_dependents,map__30350,map__30350__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27048__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30598,link){
var map__30599 = p__30598;
var map__30599__$1 = (((((!((map__30599 == null))))?(((((map__30599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30599):map__30599);
var file = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__30599,map__30599__$1,file){
return (function (p1__30596_SHARP_,p2__30597_SHARP_){
if(cljs.core._EQ_.call(null,p1__30596_SHARP_,p2__30597_SHARP_)){
return p1__30596_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__30599,map__30599__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30605){
var map__30606 = p__30605;
var map__30606__$1 = (((((!((map__30606 == null))))?(((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var match_length = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30603_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30603_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30613_SHARP_,p2__30614_SHARP_){
return cljs.core.assoc.call(null,p1__30613_SHARP_,cljs.core.get.call(null,p2__30614_SHARP_,key),p2__30614_SHARP_);
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
var loaded_f_datas_30675 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30675);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30675);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30623,p__30624){
var map__30625 = p__30623;
var map__30625__$1 = (((((!((map__30625 == null))))?(((((map__30625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30625):map__30625);
var on_cssload = cljs.core.get.call(null,map__30625__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30626 = p__30624;
var map__30626__$1 = (((((!((map__30626 == null))))?(((((map__30626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30626):map__30626);
var files_msg = map__30626__$1;
var files = cljs.core.get.call(null,map__30626__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1547626117936
