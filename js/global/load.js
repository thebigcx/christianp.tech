function fadeOutEffect() {
    var fadeTarget = document.querySelector(".se-pre-con");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.3;
        } else {
            clearInterval(fadeEffect);
            var fade = document.querySelector(".se-pre-con");
            fade.parentNode.removeChild(fade);
        }
    }, 200);
}

window.onload = function() {
  fadeOutEffect();

}
