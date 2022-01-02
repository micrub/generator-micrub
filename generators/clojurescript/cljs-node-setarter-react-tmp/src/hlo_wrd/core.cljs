(ns hlo-wrd.core
  (:require 
   cljsjs.p5
   react-dom))


;; (defn setup [p] ; define the setup function
;;   (.createCanvas p 200 200))

;; (defn draw [p] ; define the draw function
;;   (.fill p "black")
;;   (.circle p 100 100 10))

;; ;; make setup and draw global functions

;; (set! (.-setup js/window) setup)
;; (set! (.-draw js/window) draw)

;; (defn example [parent-id]
;;   (new js/p5
;;        (fn [p] ; fn creates an anonymous function, p is the sketch object
;;          (set! (.-setup p) (fn [] (setup p))) ; attach the setup method to the sketch
;;          (set! (.-draw p) (fn [] (draw p))))  ; attach the draw method to the sketch
;;        parent-id))


;; Get container
;; const container = document.getElementById('app');
(def app-container (.getElementById js/document "app"))
;; Create a root.
;; const root = ReactDOM.createRoot(container);
(def root (.createRoot js/ReactDOM app-container))

;; // Initial render: Render an element to the root.
;; root.render(<App tab="home" />);
(def app-component (.createElement js/React "div" nil "Hlo?"))
(.render root app-component)
;; // During an update, there's no need to pass the container again.
;; root.render(<App tab="profile" />);

