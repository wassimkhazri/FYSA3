var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
mongoose.connect(
  "mongodb+srv://user:Y0QIFKndntB1HIz3@cluster0.efioa.mongodb.net/DIGITAL-DEALERS?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//
//user
//Y0QIFKndntB1HIz3

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

var workerSchema = mongoose.Schema({
  userName: {
    type: String,
    max: 255,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  prof: String,
  rate: Number,
  password: {
    type: String,
    required: true
  },
  infos: String
});
var userSchema = mongoose.Schema({
  userName: {
    type: String,
    max: 255,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  password: {
    type: String,
    required: true
  }
});
var orderSchema = mongoose.Schema({
  userId: String,
  workerId: String,
  userName: String,
  date: String,
  state: String,
  location: String,
  img: String
});

var profSchema = mongoose.Schema({
  name: String,
  workers: Array
});

var Worker = mongoose.model("Worker", workerSchema);
var User = mongoose.model("User", userSchema);
var Prof = mongoose.model("Prof", profSchema);
var Order = mongoose.model("Order", orderSchema);

// const prof = new Prof({
//   name: "electrician",
//   workers: ["5fd21a43d7fb12085881099f"]
// });

// order.save();

var selectAllProf = function (callback) {
  Prof.find({}, function (err, prof) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, prof);
    }
  });
};

var selectWorkers = function (myWorker, callback) {
  Worker.find({ prof: myWorker }, function (err, workers) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, workers);
    }
  });
};

var selectOneWorker = function (worker, callback) {
  Worker.findOne({ userName: worker.userName }, function (err, result) {
    if (err) {
      console.log("error while searching worker");
      callback(err, null);
    } else {
      // if (result) {
      // }
      console.log("db: Worker found:");
      console.log(result);
      callback(null, result);
    }
  });
};

var selectOneUser = function (user, callback) {
  console.log("Yooo");
  User.findOne({ userName: user.userName }, function (err, result) {
    if (err) {
      console.log("error while searching user");
      callback(err, null);
    } else {
      // if (result) {
      // }
      console.log("db: User found:");
      console.log(result);
      callback(null, result);
    }
  });
};

const addWorker = function (worker, callback) {
  var profile = new Worker(worker);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(profile.password, salt, function (err, hash) {
      profile.password = hash;
      profile.save((err, profile) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, profile);
        }
      });
    });
  });
};

const addUser = function (user, callback) {
  let profile = new User(user);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(profile.password, salt, function (err, hash) {
      profile.password = hash;
      profile.save((err, profile) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, profile);
        }
      });
    });
  });
};

var selectAllOrders = function (callback) {
  Order.find({}, function (err, orders) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, orders);
    }
  });
};

var selectWorkerPandingOrders = function (data, callback) {
  Order.find({ workerId: data, state: "panding" }, function (err, orders) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, orders);
    }
  });
};
var selectWorkerDoingOrders = function (data, callback) {
  Order.find({ workerId: data, state: "doing" }, function (err, orders) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, orders);
    }
  });
};

var selectWorkerDoneOrders = function (data, callback) {
  Order.find({ workerId: data, state: "done" }, function (err, orders) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, orders);
    }
  });
};
var selectUserOrders = function (data, callback) {
  Order.find({ userId: data, state: "done" }, function (err, orders) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, orders);
    }
  });
};
var updateOrder = function (data, callback) {
  Order.findOneAndUpdate(
    { _id: data.id },
    { state: data.state },
    function (err, orders) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    }
  );
};
module.exports.selectUserOrders = selectUserOrders;
module.exports.addWorker = addWorker;
module.exports.addUser = addUser;
module.exports.updateOrder = updateOrder;
module.exports.selectOneUser = selectOneUser;
module.exports.selectAllProf = selectAllProf;
module.exports.selectWorkers = selectWorkers;
module.exports.selectOneWorker = selectOneWorker;
module.exports.selectAllOrders = selectAllOrders;
module.exports.selectWorkerPandingOrders = selectWorkerPandingOrders;
module.exports.selectWorkerDoingOrders = selectWorkerDoingOrders;
module.exports.selectWorkerDoneOrders = selectWorkerDoneOrders;
