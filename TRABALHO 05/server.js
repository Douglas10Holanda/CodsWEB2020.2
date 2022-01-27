const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fs = require('fs');

var port = 9999;
var hostname = "localhost";

var urlencodedParser = bodyParser.urlencoded({extended: false});

server.get('/', (req, res) => {
    res.send(`
    <style>
    body{
        background-color: rgb(39, 36, 36);
        font-family:Arial, Helvetica, sans-serif
    }
    #card{
        border: 5px solid black;
        margin: 10% 40%;
        text-align: center;
        border-radius: 0.50rem;
        background-color: rgb(253, 255, 255);
    }
    
    </style>
    <div id="card">
        <h1>Home</h1>
    </div>
    `)
})

server.post('/contato', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send(`
    <style>
    body{
        background-color: rgb(39, 36, 36);
        font-family:Arial, Helvetica, sans-serif
    }
    #card{
        border: 5px solid black;
        margin: 10% 40%;
        text-align: center;
        border-radius: 0.50rem;
        background-color: rgb(253, 255, 255);
    }
    
    </style>
    <div id="card">
        <h1>Mensagem enviada!</h1>
    </div>
    `)
})

server.post('/SalvarLogin', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send(`
    <style>
    body{
        background-color: rgb(39, 36, 36);
        font-family:Arial, Helvetica, sans-serif
    }
    #card{
        border: 5px solid black;
        margin: 10% 40%;
        text-align: center;
        border-radius: 0.50rem;
        background-color: rgb(253, 255, 255);
    }

    </style>
    <div id="card">
        <h1>Login salvo!</h1>
    </div>
    `)
})

server.get('/SalvarLogin', (req, res) => {
    res.send(`
    <style> 
    body{
        background-color: rgb(39, 36, 36);
        font-family:Arial, Helvetica, sans-serif
    }
    #card{
        border: 5px solid black;
        margin: 10% 40%;
        text-align: center;
        border-radius: 0.50rem;
        background-color: rgb(253, 255, 255);
    }
    </style>
    <div id="card">
        <h1>Salvar Login</h1>
        <form action="/SalvarLogin" method="POST">
            <label>Login:</label>
            <input type="email" name="email" id="email"/>
            <br>
            <br>
            <label>Senha:</label>
            <input type="password" name="password" id="password"/>
            <br>
            <br>
            <input type="submit" value="Salvar"/>
        </form>
    </div>    
    `)
})

server.get('/contato', (req, res) => {
    res.send(`
    <style>
    body{
        background-color: rgb(39, 36, 36);
        font-family:Arial, Helvetica, sans-serif
    }
    #card{
        border: 5px solid black;
        margin: 10% 40%;
        text-align: center;
        border-radius: 0.50rem;
        background-color: rgb(253, 255, 255);
    }
    </style>
    
    <div id="card">
        <h1>Página de Contato</h1>
        <form action="/contato" method="POST">
            <label for="email">Login: </label>
            <input type="email" name="email" id="email"/>
            <br>
            <br>
            <label for="mensagem">Mensagem: </label>
            <br>
            <br>
            <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
            <br>
            <br>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    `)
})

server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port);
    console.log('Para finalizar: ctrl + c \n');
})
