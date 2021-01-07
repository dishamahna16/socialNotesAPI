const controller = require("../controller/controller.js");
module.exports = (app) => {
  app.get("/get_html", controller.getHtml);

  app.post("/post_html", controller.postHtml);
  app.post("/signup", controller.signup);
  app.get("/getallusers", controller.getallusers);
  app.post("/login", controller.login);
  app.get("/notes", controller.getnotes);
  app.post("/addnotes", controller.getaddnotes);
  app.post("/delete/:id", controller.deletenote);
  app.post("/update/:id", controller.updatenotes);
};
