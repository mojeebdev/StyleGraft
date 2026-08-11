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

const compactNumber = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const styleGraftLaunchDate = "2026-08-10";

function dateString(date) {
  return date.toISOString().slice(0, 10);
}

function npmDownloadRanges(startDate) {
  const ranges = [];
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  let cursor = new Date(`${startDate}T00:00:00Z`);

  while (cursor <= today) {
    const end = new Date(cursor);
    end.setUTCFullYear(end.getUTCFullYear() + 1);
    end.setUTCDate(end.getUTCDate() - 1);
    if (end > today) end.setTime(today.getTime());

    ranges.push(`${dateString(cursor)}:${dateString(end)}`);
    cursor = new Date(end);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return ranges;
}

async function totalNpmDownloads() {
  const packageName = "%40blindspotlab%2Fstylegraft";
  const totals = await Promise.all(
    npmDownloadRanges(styleGraftLaunchDate).map((range) =>
      fetch(`https://api.npmjs.org/downloads/point/${range}/${packageName}`, { cache: "no-store" })
        .then((response) => response.ok ? response.json() : Promise.reject())
        .then((data) => data.downloads)
    )
  );

  return totals.reduce((sum, downloads) => sum + downloads, 0);
}

async function hydrateProjectStats() {
  const stars = document.querySelector("[data-github-stars]");
  const downloads = document.querySelector("[data-npm-downloads]");

  const requests = [
    fetch("https://api.github.com/repos/mojeebdev/StyleGraft", {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => { stars.textContent = compactNumber.format(data.stargazers_count); }),
    totalNpmDownloads()
      .then((total) => { downloads.textContent = compactNumber.format(total); }),
  ];

  await Promise.allSettled(requests);
}

hydrateProjectStats();
setInterval(hydrateProjectStats, 5 * 60 * 1000);
