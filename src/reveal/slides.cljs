(ns reveal.slides)

(defn bulletpoints [items]
  (let [li-attributes {:class "fragment"}]
    (vec (concat [:ul] (map #(vector :li li-attributes %) items)))))

(defn note [s]
  [:aside {:class "notes"} s])

(def slides
  [
   [:section
    [:h1 "TEx: Clojure"]
    [:h3 "Advocating at Bearingpoint Technology Graz"]]

   [:section
     [:aside {:class "notes"}
      [:p "@functional: concise = default (kotlin/scala)"]
      [:p "@mutable: transaction/channels"]
      [:p "@REPL: grow your code having data loaded in an unbroken Stream"]
      [:p "@REPL: interactive programming"]]

     [:h2 "What is Clojure?"]
     (bulletpoints
       [[:a {:href "img/dynamic-and-static-typing.jpg"} "dynamically typed"]
        "functional"
        "immutable by default"
        [:a {:href "https://danlebrero.com/2018/11/26/repl-driven-development-immediate-feedback-for-you-backend/#content"} "REPL"]
        "concurrency"
        "data-tools"
        "lazyness"
        "ez application domain modeling"])]
   [:section
    [:h2 "Core Philosophy"]
    (bulletpoints
      ["Data is simple"
       "Small, composable libraries"
       [:div [:b "Very"] " stable"]])]

   [:section
     (note [:a {:href "https://rigsomelight.com/2014/05/01/interactive-programming-flappy-bird-clojurescript.html"}
            "Writing reloadable code has traditionally been a daunting software requirement.
            In an imperative system, it requires scrupulous thinking about how to persist state through behavior changes.
            This often involved serializing the state out of stateful components and then reinitializing new components
            with the serialized state."])

     [:h2 "interactive programming?"]

    ;; FIXME code format
     [:p {:class "fragment"}
        "(def counter (atom 0))\n\n(defn template [count]\n  [:div\n   [:h1 \"Counter: \" count]\n   [:p [:a { :href \"#\"\n             :onClick (fn [e]\n                        (.preventDefault e)\n                        (swap! counter inc))} \"increment\"]]])\n\n(defn render [comp]\n  (.renderComponent js/React\n                    (sablono/html comp)\n                    (.getElementById js/document \"main-area\")))\n\n(add-watch counter :renderer\n           (fn [_ _ _ n]\n             (render (template n))))\n\n;; ping the state to trigger the first render\n(reset! counter @counter)\n"]]

   [:section
    [:h2 "ClojureScript"]
    (bulletpoints
      [[:i "CLJS rocks but JS reaches"]
       "What you can do with JS you can do with CLJS"
       [:a {:href "https://purelyfunctional.tv/article/react-vs-re-frame/" } "React / Reframe"]
       [:div "Google Clo" [:b [:u "s"]] "ure Compiler"]
       "shadow-cljs"
       "Node.js"
       "planck / lumo"])]

   [:section
    [:h2 "CLR (.net Runtime)"]
    (bulletpoints ["eg. Unity3d (Arcadia)"])
    [:p]
    [:br]
    [:br]
    [:h5 {:class "fragment"} "Experimental:"
     (bulletpoints [[:a {:href "http://try.clojerl.online/"} "clojerl (clj on Erlang aka Beam VM)"]])]]

   [:section
    [:h2 "General purpose lang?"]
    (bulletpoints [
                   "Everything Java (including libs and tools)"
                   "Everything JS (including libs and tools)"
                   "ML / NLP / Data Science"
                   "Game development on various platforms (eg. Unity3D or again of course anything JS)"
                   "Scripting"])]
   [:section
    [:section
     [:h2 "General purpose lang alts"]]
    [:section
       [:h2 "Python"]
       [:ul
        [:li {:style "list-style-image: url('img/plus_icon.png')"} "libraries"]
        [:li {:style "list-style-image: url('img/minus_icon.png')"} "interop / target platforms"]]]
    [:section
       [:h2 "JS"]
       [:ul
        [:li {:style "list-style-image: url('img/plus_icon.png')"} "libraries"]
        [:li {:style "list-style-image: url('img/minus_icon.png')"} "libraries"]
        [:li {:style "list-style-image: url('img/minus_icon.png')"} "interop / target platforms"]
        [:li {:style "list-style-image: url('img/minus_icon.png')"} "fatigue (and in parts Fear of missing out aka FOMO)"]
        [:li {:style "list-style-image: url('img/minus_icon.png')"} "so many possibilities to do it wrong"]]]

    [:section
       [:h2 "Go"]
       [:p "tbh idk that much about go yet. i'd just list some bullet points here:"]
       (bulletpoints ["libs"
                      "interop"
                      "wasm - but there are also wasm compiler libs in JS and thus for CLJS"])]
    [:section
       [:h2 "so we're a Java shop - quo vadis?"]
       (bulletpoints ["Kotlin"
                      "Go"
                      "Elixir/Erlang"
                      "Polyglot"
                      "Rust"
                      "ReasonML"])]]
   [:section
    [:h2 "pre live coding Questions"]
    [:p "5-10min question time frame (1-2 Questions)"]]
   [:section
    [:h2 "Links"]
    (bulletpoints [
                   [:a {:href "https://danlebrero.com/2018/11/26/repl-driven-development-immediate-feedback-for-you-backend/#content"} "REPL driven development"]
                   [:a {:href "http://clojurescriptmadeeasy.com/blog/clojurescript-is-not-coffeescript.html"} "CLJS is not (like) coffeescript"]
                   [:a {:href "https://2018.stateofjs.com/front-end-frameworks/overview/"} "State of JS: FE frameworks"]
                   [:a {:href "https://purelyfunctional.tv/article/react-vs-re-frame/"} "6 Reacter-mistakes that Reframers avoid"]
                   [:a {:href "http://wiki.c2.com/?BlubParadox"} "Blub Paradox"]
                   [:a {:href "https://www.innoq.com/blog/st/2010/04/clojure-performance-guarantees/"} "CLJ collection performance"]])]])


(defn all
  "Add here all slides you want to see in your presentation."
  []
  slides)