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
     (note "what are your expectations?")
     [:h2 "WhoAmI?"]
     (bulletpoints
       ["Klaus Azesberger"
        [:a {:href "https://twitter.com/PsychodelicDad"} "@PsychodelicDad"]
        [:a {:href "https://github.com/kazesberger"} "https://github.com/kazesberger"]
        "Tech Lead Platform Team @ Bearingpoint Technology Graz"])]
   [:section
     [:h2 "git/VCS: why / purpose ?"]
     (bulletpoints
       ["Collaboration"
        "Storing Versions"
        "Travel in time and perspective"
        "Understanding what happened"])]

   [:section
     [:h2 "why platform(s) like github?"]
     (bulletpoints
       ["open source"
        "contribution governance"
        "social coding"
        "explore your interests"])]

   [:section
     [:h2 "parts of git"]
     (bulletpoints
       [[:a {:href "https://git-scm.com/about/staging-area"} "Working Dir"]
        [:a {:href "https://git-scm.com/about/staging-area"} "Staging Area"]
        [:a {:href "https://git-scm.com/about/staging-area"} "Repo(s)"]
        "remote repositories"])]

   [:section
      [:img {:src "img/gitrepos.svg"}]]

   [:section
     [:h2 "KataCoda"]
     [:p "Everyday knowledge = every course except the #7"]]

   [:section
     [:h2 "advice: commit messages"]
     [:p [:a {:href "https://chris.beams.io/posts/git-commit/"} "https://chris.beams.io/posts/git-commit/"]]]

   [:section
    [:h2 "IDE git support"]
    [:h4 "a short tour"]]

   [:section
    [:h2 "recap/intro on essential terms"]
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
    [:h2 "github PR workflow"]
    [:h4 [:a {:href "https://guides.github.com/introduction/flow/"} "github guide"]]]

   [:section
     [:h2 "conflict demo"]
     [:img {:src "img/resolveConflict.png"}]]

   [:section
    [:h2 "cheat sheets / docs / help"]
    (bulletpoints
      ["git --help"
       "git &lt;command&gt; --help"
       "stackoverflow / google"
       "slack / community"])]

   [:section
     [:section
      [:h2 "Contribute!"]
      (bulletpoints
        ["first contributions are often just docs"
         "Issues / Testing / help wanted label"
         [:b "github-profile > CV"]
         "#100DaysOfCode"
         "daily coding katas"])]

     [:section
       [:h2 "daily exercise"]
       (bulletpoints
         ["side projects to explore tech/libs"
          [:a {:href "https://www.hackerrank.com/"} "https://www.hackerrank.com/"]
          [:a {:href "https://exercism.io"} "https://exercism.io"]
          [:a {:href "https://adventofcode.com/"} "https://adventofcode.com/"]
          [:a {:href "https://www.freecodecamp.org/"} "https://www.freecodecamp.org/"]
          [:a {:href "https://codepen.io"} "https://codepen.io"]])]]


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
     [:h2 "more github features"]
     (bulletpoints
       ["gh-pages"
        "badges"
        "actions"])]

   [:section
     [:h2 "even more links :)"]
     (bulletpoints
       ["habits of an efficient dev"
        "badges"
        "actions"])]])



(defn all
  "Add here all slides you want to see in your presentation."
  []
  slides)