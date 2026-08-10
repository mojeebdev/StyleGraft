const tones = {
  editorial: ["Confident rhythm.<br>Human edges.", ["rhythm", "trust", "brand assets"]],
  playful: ["Bright signals.<br>Useful surprise.", ["energy", "clarity", "novelty for novelty’s sake"]],
  precise: ["Quiet structure.<br>Sharp decisions.", ["hierarchy", "density", "visual noise"]],
};

document.querySelectorAll("[data-tone]").forEach((button) => {
  if (button.tagName !== "BUTTON") return;
  button.addEventListener("click", () => {
    const lab = button.closest(".taste-lab");
    lab.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    lab.dataset.tone = button.dataset.tone;
    lab.querySelector(".taste-title").innerHTML = tones[button.dataset.tone][0];
    lab.querySelectorAll(".taste-rules b").forEach((item, index) => item.textContent = tones[button.dataset.tone][1][index]);
  });
});

document.querySelectorAll("[data-build-tab]").forEach((button) => {
  button.setAttribute("aria-selected", button.classList.contains("active"));
  button.addEventListener("click", () => {
    const visual = button.closest(".build-visual");
    visual.querySelectorAll("[data-build-tab]").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", item === button);
    });
    visual.querySelectorAll("[data-build-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.buildPanel === button.dataset.buildTab));
  });
});
