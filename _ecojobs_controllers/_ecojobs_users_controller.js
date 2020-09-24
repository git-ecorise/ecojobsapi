const dbconfig = require("../config/dbconfig");

const userModel = require("../_ecojobs_models/_ecojobs_users_model").userModel;

const signupUser = (req, res) => {
  var user = new userModel(req.body);
  user.save((err) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true });
    }
  });
};

const signinUser = (req, res) => {
  userModel.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        res.json({ success: false, msg: err });
      } else if (user === null) {
        res.json({ success: false });
      } else {
        // delete user["password"]
        user["password"] = ''
        res.json({ success: true, data: user});
      }
    }
  );
};

// const getUser = (req, res) => {
//     userModel.findOne({ _id: req.params.userid }).exec((err, user) => {
//       if (err) {
//         res.json({ success: false, msg: err });
//       } else if (user == null) {
//         res.json({ success: false });
//       } else {
//         res.json({ success: true, data: user });
//       }
//     });
//   };
  
//   const getAllUsers = (req, res) => {
//     userModel.find().exec((err, users) => {
//       if (err) {
//         res.json({ success: false, msg: err });
//       } else if (users == null) {
//         res.json({ success: false });
//       } else {
//         res.json({ success: true, data: users });
//       }
//     });
//   };
  
// const updateUser = (req, res) => {
//   userModel.findOneAndUpdate(
//     { _id: req.params.userid },
//     req.body,
//     (err, user) => {
//       if (err) {
//         res.json({ success: false, msg: err });
//       } else {
//         res.json({ success: true });
//       }
//     }
//   );
// };

// const softDeleteUser = (req, res) => {
//   userModel.findOneAndUpdate(
//     { _id: req.params.userid },
//     { $set: { status: req.body.status } },
//     (err, data) => {
//       if (err) {
//         res.json({ success: false, msg: err });
//       } else {
//         res.json({ success: true });
//       }
//     }
//   );
// };

// const deleteUser = (req, res) => {
//   userModel.deleteOne({ _id: req.params.userid }, (err, data) => {
//     if (err) {
//       res.json({ success: false, msg: err });
//     } else if (data == null) {
//       res.json({ success: false });
//     } else {
//       res.json({ success: true });
//     }
//   });
// };

// const deleteAllUsers = (req, res) => {
//   userModel.deleteMany((err, data) => {
//     if (err) {
//       res.json({ success: false, msg: err });
//     } else if (data == null) {
//       res.json({ success: false });
//     } else {
//       res.json({ success: true });
//     }
//   });
// };

module.exports = {
  signinUser,
  signupUser
};
