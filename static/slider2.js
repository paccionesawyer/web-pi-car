function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { useState, useEffect } = React;
const { useSpring, animated, config } = ReactSpring;
const { useDrag } = ReactUseGesture;

function App() {
  const [active, setActive] = useState(false);
  const { morph } = useSpring({
    config: { duration: 250 },
    morph: active ? 1 : 0 });

  const [{ x, velocity }, set] = useSpring(() => ({
    x: -23,
    velocity: 0 }));

  const bind = useDrag(
  ({ movement: [x], velocity, down, direction: [dx] }) => {
    if (down !== active) {
      setActive(down);
    }

    if (!down) {
      set({ x, velocity: 0 });
    } else {
      set({x, velocity: velocity * dx });
      console.log("p" + Math.round((x+23)/1.97));
      sendCmd("p" + (Math.round((x+23)/1.97)).toString() + "\r\n");
    }
  },
  {
    initial: () => [x.get(), 0],
    bounds: { left: -23, right: 174, top: 0, bottom: 0 },
    rubberband: false });



  const appStyle = {
    alignItems: "center",
    backgroundColor: "#c51a4a",
    display: "flex",
    height: "10vh",
    justifyContent: "center",
    margin: 0 };


  const containerStyle = {
    width: 200,
    position: "relative" };


  const barStyle = {
    backgroundColor: "#333",
    height: 3,
    position: "relative",
    top: 26,
    width: "100%" };


  const handleStyle = {
    cursor: 'pointer',
    height: 50,
    position: "relative",
    width: 50,
    x };


  const knobStyle = {
    backgroundColor: "#000",
    height: 16,
    left: 23,
    position: "absolute",
    top: 10,
    width: 3 };


  const countStyle = {
    color: "#fff",
    fontFamily: 'sans-serif',
    fontWeight: 800,
    left: 0,
    position: "relative",
    textAlign: "center",
    top: -37,
    transform: morph.to(n => `translateY(${n * -39}px) scale(${n})`),
    userSelect: 'none' };


  return /*#__PURE__*/(
    React.createElement("div", { style: appStyle }, /*#__PURE__*/
    React.createElement("div", { style: containerStyle }, /*#__PURE__*/
    React.createElement("div", { style: barStyle }), /*#__PURE__*/
    React.createElement(animated.div, _extends({}, bind(), { style: handleStyle }), /*#__PURE__*/
    React.createElement("div", { style: knobStyle }), /*#__PURE__*/
    React.createElement(animated.svg, {
      viewBox: "0 0 50 50",
      height: "20",
      width: "50",
      style: {
        left: 1,
        transform: morph.to(n => `translateY(${n * -36}px)`) } }, /*#__PURE__*/


    React.createElement(animated.path, {
      d: morph.to({
        range: [0, 1],
        output: [
        "M 33,25.001 C 33,29.419278 29.418278,33 25,33 20.581722,33 17,29.419278 17,25.001 17,20.582722 20.581722,17 25,17 29.418278,17 33,20.582722 33,25.001 Z",
        "M 45,20 C 45,31.045695 32.089401,45 25,45 17.910599,45 5,31.045695 5,20 5,8.954305 13.954305,5 25,5 36.045695,5 45,8.954305 45,20 Z"] }) })), /*#__PURE__*/




    React.createElement(animated.div, { style: countStyle },
    x.to(x => Math.round((x + 23) / 1.97)))))));





}

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("root"));