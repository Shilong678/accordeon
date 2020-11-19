import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

export let expandPanel = trigger("collapseExpand", [
  state(
    "collapsed",
    style({
      height: 0,
      overflow: "hidden",
      paddingTop: 0,
      paddingBottom: 0
    })
  ),
  transition("collapsed => expanded", [animate("0.4s ease-out")]),
  transition("expanded => collapsed", [animate("0.4s ease-in")])
]);

export let rotateCross = trigger("crossOpened", [
  state(
    "expanded",
    style({
      transform: "rotate(45deg)"
    })
  ),
  transition("collapsed => expanded", [animate("0.4s ease-out")]),
  transition("expanded => collapsed", [animate("0.4s ease-in")])
]);


