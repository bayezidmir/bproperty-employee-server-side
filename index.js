const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectID = require("mongodb").ObjectId;

//middleware
app.use(cors());
app.use(express.json());

/* DB Credential
_________________
username: bayezid;
pass:PtTKLG0lqchY5qS1
______________________
 */

//Database Setup

const uri =
  "mongodb+srv://bayezid:PtTKLG0lqchY5qS1@cluster0.s93bk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const employeeList = client.db("Bproperty").collection("employees");

    //POST or Create (C of CRUD) a new employee
    app.post("/employee", async (req, res) => {
      const newUser = req.body;
      const result = await employeeList.insertOne(newUser);
      res.send(result);
    });

    //Read (R of CRUD) employees from DB using GET
    app.get("/employee", async (req, res) => {
      const query = {};
      const cursor = employeeList.find(query);
      const employees = await cursor.toArray();
      res.send(employees);
    });

    //Update (U of CRUD)

    // Firstly: find the id about to update

    app.get("/employee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectID(id) };
      const result = await employeeList.findOne(query);
      res.send(result);
    });

    //Finally: Updating the user

    app.put("/employee/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const filter = { _id: ObjectID(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      };
      const result = await employeeList.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //Delete (D of CRUD)
    app.delete("/employee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectID(id) };
      const result = await employeeList.deleteOne(query);
      res.send(result);
    });
  } finally {
    // client.close()
  }
}

run().catch(console.dir);

//root directory
app.get("/", (req, res) => {
  res.send("Hello , people");
});

app.listen(port, () => {
  console.log("The server is up and running");
});
