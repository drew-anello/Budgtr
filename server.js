const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js')

app.get('/', (req, res) => {
  res.send('bonjour')
})

app.get("/budgets", (req, res)=>{
  res.render("budget_index.ejs", {
      budget, bankAccount,
  });
});

app.get("/budgets/new", (req, res)=>{
  res.render("new.ejs");
});

app.post("/budgets", (req, res)=>{
  budget.push(req.body);
  res.redirect("/budgets");
})

app.get("/budgets/:index", (req, res)=>{
  res.render("budget_show.ejs", {
   
  });
});

app.listen(3000);