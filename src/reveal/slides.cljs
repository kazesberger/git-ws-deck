(ns reveal.slides)

(defn bulletpoints [items]
  (let [li-attributes {:class "fragment"}]
    (vec (concat [:ul] (map #(vector :li li-attributes %) items)))))

(defn note [s]
  [:aside {:class "notes"} s])

(def slides
  [
   [:section
    [:h1 "git workshop"]
    [:h3 "new austrian coding school"]]

   [:section
     [:h2 "WhoAmI?"]
     (bulletpoints
       ["Klaus Azesberger"
        [:a {:href "https://twitter.com/PsychodelicDad"} "@PsychodelicDad"]
        [:a {:href "https://github.com/kazesberger"} "kazesberger"]
        "Tech Lead Platform Team @ Bearingpoint Technology Graz"])]
   [:section
     [:h2 "git/VCS: why / purpose ?"]
     (bulletpoints
       ["Collaboration"
        "Storing Versions"
        "Travel in time and perspective"
        "Unerstanding what happened"])]

   [:section
     [:h2 "parts of git"]
     (bulletpoints
       [[:a {:href "https://git-scm.com/about/staging-area"} "Working Dir"]
        [:a {:href "https://git-scm.com/about/staging-area"} "Staging Area"]
        [:a {:href "https://git-scm.com/about/staging-area"} "Repo(s)"]
        "remote repositories"])]

   [:section
     [:h2 "KataCoda"]
     [:h4 "Exercises until TBD"]]

   [:section
    [:h2 "IDE git support"]
    [:h4 "a short tour"]]

   [:section
    [:h2 "collaboration / conflicts"]
    [:h4 "Some Terms"]
    (bulletpoints
      ["clone"
       "create a branch (this is not a fork)"
       "integrate a branch"
       "merge"
       "fast forward merge"
       "conflict"
       "3-way-merge"
       "rebase"
       "fork"])]

   [:section
     [:h2 "cheat sheets / docs / help"]
     (bulletpoints
       ["git --help"
        "git <command> --help"
        "stackoverflow / google"
        "slack / community"])]

   [:section
     [:h2 "conflict demo"]
     (bulletpoints
       ["PR"
        "Review"
        "LGTM"
        [:div [:i "Exercise"]]])]


   [:section
     [:h2 "Contribute!"]
     (bulletpoints
       ["docs"
        "Issues / Testing"
        "github-profile > CV"
        "daily coding katas"
        "#100DaysOfCode"])]

   [:section
     [:h2 "Configuration tweaks"]
     (bulletpoints
       ["pull.autostash"
        "pull.autorebase"
        "log alias / configs"
        "difftool"
        "default editor"
        "github 2fa"])]

   [:section
     [:h2 "advanced github features"]]])



(defn all
  "Add here all slides you want to see in your presentation."
  []
  slides)