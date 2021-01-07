const { response } = require("express");
const Notes = require("../models/notesmodel");
const signUpModel = require("../models/singupModel");
const shortid = require("shortid");

exports.getHtml = (req, res) => {};

exports.postHtml = (req, res) => {
  res.send("HELLO " + req.body.name);
};

exports.login = (req, res) => {
  signUpModel
    .findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    })
    .then((response) => {
      if (response.length == 0) {
        res.send({
          loginSuccess: false,
          message: "Error Logging in",
        });
      } else {
        res.send({
          loginSuccess: true,
          message: "Succesfully logged in",
        });
      }
    })
    .catch((err) => console.log(err));

  // res.send("Succesfully Logged in");
};

exports.signup = (req, res) => {
  //CHECKING : SANITISING DATA

  signUpModel
    .create({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => {
      console.log(response);

      const result = {
        signupSuccess: true,
        message: "Succesfully signed up",
      };

      res.send(result);
    })
    .catch((err) => {
      console.log(err);

      const result = {
        signupSuccess: false,
        message: "Signingn Up Failed",
      };
      res.send(result);
    });
};

//GET /getallusers
exports.getallusers = (req, res) => {
  signUpModel
    .findAll()
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => console.log(err));
};
exports.getnotes = (req, res) => {
  Notes.findAll()
    .then((response) => {
      if (response.length == 0) {
        res.send("No notes found");
      } else {
        res.send(response);
      }
    })
    .catch((err) => console.log(err));
};

exports.getaddnotes = (req, res) => {
  Notes.create({
    heading: req.body.heading,
    description: req.body.description,
    userEmail: req.body.userEmail,
    id: shortid.generate(),
  })
    .then((response) => {
      console.log(response);
      res.send({
        addnotesSuccess: true,
        message: "ADDED NOTES ",
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        addnotesSuccess: false,
        message: "ADDED NOTES FAILED",
      });
    });
};

exports.deletenote = (req, res) => {
  Notes.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      console.log(response);
      res.send({
        deleteSucces: true,
        message: "Successfully Deleted",
      });
    })

    .catch((err) => {
      console.log(err);
      res.send({
        deleteSucces: false,
        message: "UnSuccessfully Deleted",
      });
    });
};

exports.updatenotes = (req, res) => {
  console.log(req.body.heading, req.body.description, req.params.id);

  Notes.update(
    {
      heading: req.body.heading,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((response) => {
      res.send("Successfully Updated");
    })
    .catch(() => res.send("Updation Error"));
};
