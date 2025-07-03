export const englishMap = {
  "class1/my-home": () => import("./class1/a-happy-child.js"),
  "class1/a-happy-child": () => import("./class1/a-happy-child.js"),
  "class1/feeling-happy": () => import("./class1/feeling-happy.js"),
  "class1/story-characters": () => import("./class1/three-little-pigs/story-characters.js"),
  "class1/moral-lesson": () => import("./class1/three-little-pigs/moral-lesson.js"),
  "class1/daily-routine": () => import("./class1/after-a-bath/daily-routine.js"),
  "class1/body-parts": () => import("./class1/after-a-bath/body-parts.js"),
  "class1/teamwork": () => import("./class1/bubble-straw-shoe/teamwork.js"),

  "class1/funny-story": () => import("./class1/bubble-straw-shoe/funny-story.js")
};
