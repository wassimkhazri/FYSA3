var express = require("express");
var bodyParser = require("body-parser");
var db = require("../database-mongo");
var bcrypt = require("bcryptjs");

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/api/profs", function (req, res) {
  console.log("here");
  db.selectAllProf(function (err, data) {
    console.log(data, err);
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post("/login", (req, res) => {
  let givenPassword = req.body.password;
  console.log(req.body);
  db.selectOneWorker(req.body, (err, worker) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (!worker) {
        db.selectOneUser(req.body, (err, user) => {
          if (err) {
            res.sendStatus(500);
          } else {
            let validPass = bcrypt.compare(
              givenPassword,
              user.password,
              function (err, result) {
                if (err) {
                  console.log("compare error", err);
                } else if (result) {
                  console.log("user password matches.", result);
                  // To do: if compare true user must be redirected to feed
                }
              }
            );
            if (!validPass) return res.send("Invalid password");
            let token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.status(200).header("auth-token", token), send(token);
          }
        });
      } else {
        let validPass = bcrypt.compare(
          givenPassword,
          worker.password,
          function (err, result) {
            if (err) {
              console.log("compare error", err);
            } else {
              console.log("worker password matches", result);
              // To do: if compare true worker must be redirected to feed
            }
          }
        );
        if (!validPass) return res.send("Invalid password");
        let token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header("auth-token", token), send(token);
      }
    }
  });
});
app.put("/user/update", function (req, res) {
  db.updateUser(req.body.data, (data) => {
    console.log(data);
    res.send(data);
  });
});
app.put("/worker/update", function (req, res) {
  db.updateWorker(req.body.data, (data) => {
    console.log(data);
    res.send(data);
  });
});
app.post("/workerRegister", (req, res) => {
  console.log(req.body);
  var data = req.body.data;
  data.rate = 0;
  db.addWorker(data, (err, worker) => {
    if (err) {
      res.send("Worker not created");
    } else {
      console.log("Worker created successfully");
      res.json(worker);
    }
  });
});
app.post("/addorder", (req, res) => {
  console.log(req.body);
  var data = req.body.data;
  db.addOrder(data, (err, order) => {
    if (err) {
      res.send("Order not created");
    } else {
      console.log("order created successfully");
      res.json(order);
    }
  });
});
app.post("/userRegister", (req, res) => {
  console.log(req.body.data);
  db.addUser(req.body.data, (err, user) => {
    if (err) {
      res.send("User not created");
    } else {
      res.json(user);
    }
    console.log("User created successfully");
  });
});

app.get("/orders", function (req, res) {
  db.selectAllOrders(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.post("/api/orders/pending", function (req, res) {
  console.log(req.body.data);
  db.selectWorkerPandingOrders(req.body.data, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
app.post("/api/orders/doing", function (req, res) {
  console.log(req.body.data);
  db.selectWorkerDoingOrders(req.body.data, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
app.post("/api/orders/done", function (req, res) {
  console.log(req.body.data);
  db.selectWorkerDoneOrders(req.body.data, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.post("/api/orders/user", function (req, res) {
  console.log(req.body.data);
  db.selectUserOrders(req.body.data, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.put("/order/update", function (req, res) {
  console.log(req.body);
  db.updateOrder(req.body, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
var port = process.env.PORT || "3000";
app.listen(port, function () {
  console.log("listening on port 3000!");
});
