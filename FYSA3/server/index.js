var express = require("express");
var bodyParser = require("body-parser");
var db = require("../database-mongo");

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/api/profs", function (req, res) {
  db.selectAllProf(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post("/api/workers", function (req, res) {
  db.selectWorkers(req.body.prof, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log("data", data);
      res.json(data);
    }
  });
});

app.post("/login", (req, res) => {
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
            res.send(user);
          }
        });
      } else {
        res.send(worker);
      }
    }
  });
});

app.post("/register", (req, res) => {
  console.log(req.body.data);
  var data = req.body.data;
  data.rate = 0;
  db.addWorker(data, (err, worker) => {
    if (err) {
      res.send("user not created");
    } else {
      res.json(worker);
    }
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
app.post("/api/orders/panding", function (req, res) {
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
app.listen(3000, function () {
  console.log("listening on port 3000!");
});
