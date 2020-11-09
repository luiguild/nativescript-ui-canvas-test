import Vue from "nativescript-vue";
import CanvasPlugin from "@nativescript-community/ui-canvas/vue";
import Home from "./components/Home";

Vue.use(CanvasPlugin)

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
