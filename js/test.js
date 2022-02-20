var static = $(".noiseBG");
TweenMax.to(".noiseBG", 0.03, {
  repeat: -1,
  onRepeat: repeatStatic,
  ease: SteppedEase.config(1),
});
function repeatStatic() {
  TweenMax.set(".noiseBG", {
    backgroundPosition:
      Math.floor(Math.random() * 100) +
      1 +
      "% " +
      Math.floor(Math.random() * 10) +
      1 +
      "%",
  });
}
