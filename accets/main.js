var btn = document.querySelector(".schedule h4");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".icon-close");
var lich = document.querySelector(".schedule-detail");
var scroll = document.querySelector(".schedule-detail-body");
var body = document.querySelector("body");

btn.onclick = function () {
  overlay.style.display = "block";
  lich.style.transform = "translateY(0%)";
  body.style.overflow = "hidden";
};

const closeSchedule = () => {
  //   scroll.scrollTo(0, 1);
  overlay.style.display = "none";
  lich.style.transform = "translateY(150%)";
  body.style.overflow = "unset";
  scroll.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

close.onclick = function () {
  closeSchedule();
};

document.onkeydown = function (e) {
  switch (e.code) {
    case "Escape":
      closeSchedule();
      break;
  }
};

//************** */
const top_goal_click = document.querySelector(".top_goal");
const close_topGoal = document.querySelector(".close-top_goal");
const top_goal = document.querySelector(".top_goal-detail");

top_goal_click.onclick = () => {
  overlay.style.display = "block";
  top_goal.style.transform = "translateY(-50%)";
  body.style.overflow = "hidden";
};

const closeTopGoal = () => {
  overlay.style.display = "none";
  top_goal.style.transform = "translateY(150%)";
  body.style.overflow = "unset";
};

close_topGoal.onclick = () => {
  closeTopGoal();
};

document.onkeyup = function (e) {
  switch (e.code) {
    case "Escape":
      closeTopGoal();
      break;
  }
};
