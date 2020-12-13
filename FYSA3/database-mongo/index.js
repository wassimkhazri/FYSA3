var mongoose = require("mongoose");
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
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  prof: String,
  rate: Number,
  password: String,
  infos: String
});
var userSchema = mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  password: String
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
  Worker.findOne(
    { userName: worker.userName, password: worker.password },
    function (err, Worker) {
      if (err) {
        callback(err, null);
      } else {
        console.log(worker);
        callback(null, Worker);
      }
    }
  );
};
var selectOneUser = function (user, callback) {
  User.findOne(
    { userName: user.userName, password: user.password },
    function (err, user) {
      if (err) {
        callback(err, null);
      } else {
        console.log(user);
        callback(null, user);
      }
    }
  );
};
const addWorker = function (worker, callback) {
  var profile = new Worker(worker);
  profile.save((err, profile) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, profile);
    }
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
module.exports.addWorker = addWorker;
module.exports.updateOrder = updateOrder;
module.exports.selectOneUser = selectOneUser;
module.exports.selectAllProf = selectAllProf;
module.exports.selectWorkers = selectWorkers;
module.exports.selectOneWorker = selectOneWorker;
module.exports.selectAllOrders = selectAllOrders;
module.exports.selectWorkerPandingOrders = selectWorkerPandingOrders;
module.exports.selectWorkerDoingOrders = selectWorkerDoingOrders;
module.exports.selectWorkerDoneOrders = selectWorkerDoneOrders;
