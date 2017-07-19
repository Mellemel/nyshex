Login challenge
===============

General description
-------------------

Implement the designs for a login page that allows a user to a see their dashboard.

Setup
-----

You will need _Node_ installed to run.

To install dependencies and start a server on localhost:8000, run:
```
npm start
```

Then to actively compile your changes on save, have running:
```
npm run compile-active
```

Tasks
-----
1. Implement the login page layout (designs/1_Login_Page_Layout.png)
2. Add functionality and further styling to the login form:
	a. Require both fields (designs/2a_Login_Page_Form.png)
	b. Use the LoginFactory to check credentials (designs/2b_Login_Page_Form.png)
3. Implement the dashboard (designs/3_Dashboard.png):
	- create the layout,
	- populate the dashboard with _reusable_ 'Binding Offer' cards using data
	from the OfferFactory.

Bonus
-----
It is preferred that you stay within the 2 hour limit and complete the
above tasks, but if time permits, feel free to add additional tests.
