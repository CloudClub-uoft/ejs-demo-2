# ejs-demo

# Starting the server

    > npm install //to install the libraries
    > node server //to start the server
    

Code-snippets
# Table Page
    app.get('/table', function(req, res) {
        res.render('pages/table');
    })

# Navbar
    <nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
    </nav>

# Random Data
    function getData() {
        return [
            {'Name': 'A', 'ID': 1, 'Date': '24/12/2021'},
            {'Name': 'B', 'ID': 2, 'Date': '24/12/2021'},
            {'Name': 'C', 'ID': 3, 'Date': '24/12/2021'},
            {'Name': 'D', 'ID': 4, 'Date': '24/12/2021'}
        ]
    } 