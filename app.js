const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.render("home");

})

///// India News /////

indiaNewsapi = "https://newsapi.org/v2/top-headlines?country=in&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaBusiness = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaEntertainment = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaHealth = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaScience = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaSports = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
indiaTechnology = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";

app.get("/india", (req, res) => {
    request(indiaNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})

// India Business //
app.get("/business", (req, res) => {
    request(indiaBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})
// Entertainment //
app.get("/entertainment", (req, res) => {
    request(indiaEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})
// Health //
app.get("/health", (req, res) => {
    request(indiaHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})
// Science //
app.get("/science", (req, res) => {
    request(indiaScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})
// Sports //
app.get("/sports", (req, res) => {
    request(indiaSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})
// India Technology</a>
app.get("/technology", (req, res) => {
    request(indiaTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("indiaNews", { data: data });
    })
})

///USA NEWS ///
usNewsapi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usBusiness = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usEntertainment = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usHealth = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usScience = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usSports = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
usTechnology = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";

app.get("/us", (req, res) => {
    request(usNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})

// USA Business //
app.get("/usbusiness", (req, res) => {
    request(usBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})
// Entertainment //
app.get("/usentertainment", (req, res) => {
    request(usEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})
// Health //
app.get("/ushealth", (req, res) => {
    request(usHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})
// Science //
app.get("/usscience", (req, res) => {
    request(usScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})
// Sports //
app.get("/ussports", (req, res) => {
    request(usSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})
// India Technology</a>
app.get("/ustechnology", (req, res) => {
    request(usTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("usNews", { data: data });
    })
})

//China //
chinaNewsapi = "https://newsapi.org/v2/top-headlines?country=cn&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaBusiness = "https://newsapi.org/v2/top-headlines?country=cn&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaEntertainment = "https://newsapi.org/v2/top-headlines?country=cn&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaHealth = "https://newsapi.org/v2/top-headlines?country=cn&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaScience = "https://newsapi.org/v2/top-headlines?country=cn&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaSports = "https://newsapi.org/v2/top-headlines?country=cn&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
chinaTechnology = "https://newsapi.org/v2/top-headlines?country=cn&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/china", (req, res) => {
    request(chinaNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})

// USA Business //
app.get("/chinabusiness", (req, res) => {
    request(chinaBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})
// Entertainment //
app.get("/chinaentertainment", (req, res) => {
    request(chinaEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})
// Health //
app.get("/chinahealth", (req, res) => {
    request(chinaHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})
// Science //
app.get("/chinascience", (req, res) => {
    request(chinaScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})
// Sports //
app.get("/chinasports", (req, res) => {
    request(chinaSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})
// China Technology</a>
app.get("/chinatechnology", (req, res) => {
    request(chinaTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("chinaNews", { data: data });
    })
})

// germany //
deNewsapi = "https://newsapi.org/v2/top-headlines?country=de&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deBusiness = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deEntertainment = "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deHealth = "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deScience = "https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deSports = "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
deTechnology = "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/germany", (req, res) => {
    request(deNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})

// USA Business //
app.get("/debusiness", (req, res) => {
    request(deBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})
// Entertainment //
app.get("/deentertainment", (req, res) => {
    request(deEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})
// Health //
app.get("/dehealth", (req, res) => {
    request(deHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})
// Science //
app.get("/descience", (req, res) => {
    request(deScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})
// Sports //
app.get("/desports", (req, res) => {
    request(deSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})
// China Technology</a>
app.get("/detechnology", (req, res) => {
    request(deTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("deNews", { data: data });
    })
})

//france //
frNewsapi = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frBusiness = "https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frEntertainment = "https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frHealth = "https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frScience = "https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frSports = "https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
frTechnology = "https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/france", (req, res) => {
    request(frNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})

// USA Business //
app.get("/frbusiness", (req, res) => {
    request(frBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})
// Entertainment //
app.get("/frentertainment", (req, res) => {
    request(frEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})
// Health //
app.get("/frhealth", (req, res) => {
    request(frHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})
// Science //
app.get("/frscience", (req, res) => {
    request(frScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})
// Sports //
app.get("/frsports", (req, res) => {
    request(frSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})
// China Technology</a>
app.get("/frtechnology", (req, res) => {
    request(frTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("frNews", { data: data });
    })
})

//isarel
ilNewsapi = "https://newsapi.org/v2/top-headlines?country=il&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilBusiness = "https://newsapi.org/v2/top-headlines?country=il&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilEntertainment = "https://newsapi.org/v2/top-headlines?country=il&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilHealth = "https://newsapi.org/v2/top-headlines?country=il&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilScience = "https://newsapi.org/v2/top-headlines?country=il&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilSports = "https://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ilTechnology = "https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/israel", (req, res) => {
    request(ilNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})

// USA Business //
app.get("/ilbusiness", (req, res) => {
    request(ilBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})
// Entertainment //
app.get("/ilentertainment", (req, res) => {
    request(ilEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})
// Health //
app.get("/ilhealth", (req, res) => {
    request(ilHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})
// Science //
app.get("/ilscience", (req, res) => {
    request(ilScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})
// Sports //
app.get("/ilsports", (req, res) => {
    request(ilSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})
// China Technology</a>
app.get("/iltechnology", (req, res) => {
    request(ilTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ilNews", { data: data });
    })
})

//Italy //
itNewsapi = "https://newsapi.org/v2/top-headlines?country=it&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itBusiness = "https://newsapi.org/v2/top-headlines?country=it&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itEntertainment = "https://newsapi.org/v2/top-headlines?country=it&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itHealth = "https://newsapi.org/v2/top-headlines?country=it&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itScience = "https://newsapi.org/v2/top-headlines?country=it&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itSports = "https://newsapi.org/v2/top-headlines?country=it&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
itTechnology = "https://newsapi.org/v2/top-headlines?country=it&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/italy", (req, res) => {
    request(itNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})

// USA Business //
app.get("/itbusiness", (req, res) => {
    request(itBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})
// Entertainment //
app.get("/itentertainment", (req, res) => {
    request(itEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})
// Health //
app.get("/ithealth", (req, res) => {
    request(itHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})
// Science //
app.get("/itscience", (req, res) => {
    request(itScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})
// Sports //
app.get("/itsports", (req, res) => {
    request(itSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})
// China Technology</a>
app.get("/ittechnology", (req, res) => {
    request(itTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("itNews", { data: data });
    })
})

//Japan
jpNewsapi = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpBusiness = "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpEntertainment = "https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpHealth = "https://newsapi.org/v2/top-headlines?country=jp&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpScience = "https://newsapi.org/v2/top-headlines?country=jp&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpSports = "https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
jpTechnology = "https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/japan", (req, res) => {
    request(jpNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})

// USA Business //
app.get("/jpbusiness", (req, res) => {
    request(jpBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})
// Entertainment //
app.get("/jpentertainment", (req, res) => {
    request(jpEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})
// Health //
app.get("/jphealth", (req, res) => {
    request(jpHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})
// Science //
app.get("/jpscience", (req, res) => {
    request(jpScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})
// Sports //
app.get("/jpsports", (req, res) => {
    request(jpSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})
// Japan Technology</a>
app.get("/jptechnology", (req, res) => {
    request(jpTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("jpNews", { data: data });
    })
})

//Russia//
ruNewsapi = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruBusiness = "https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruEntertainment = "https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruHealth = "https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruScience = "https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruSports = "https://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
ruTechnology = "https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/russia", (req, res) => {
    request(ruNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})

// USA Business //
app.get("/rubusiness", (req, res) => {
    request(ruBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})
// Entertainment //
app.get("/ruentertainment", (req, res) => {
    request(ruEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})
// Health //
app.get("/ruhealth", (req, res) => {
    request(ruHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})
// Science //
app.get("/ruscience", (req, res) => {
    request(ruScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})
// Sports //
app.get("/rusports", (req, res) => {
    request(ruSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})
// China Technology</a>
app.get("/rutechnology", (req, res) => {
    request(ruTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("ruNews", { data: data });
    })
})

//UK
gbNewsapi = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbBusiness = "https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbEntertainment = "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbHealth = "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbScience = "https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbSports = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
gbTechnology = "https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/uk", (req, res) => {
    request(gbNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})

// USA Business //
app.get("/gbbusiness", (req, res) => {
    request(gbBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})
// Entertainment //
app.get("/gbentertainment", (req, res) => {
    request(gbEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})
// Health //
app.get("/gbhealth", (req, res) => {
    request(gbHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})
// Science //
app.get("/gbscience", (req, res) => {
    request(gbScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})
// Sports //
app.get("/gbsports", (req, res) => {
    request(gbSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})
// China Technology</a>
app.get("/gbtechnology", (req, res) => {
    request(gbTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("gbNews", { data: data });
    })
})

//UK
aeNewsapi = "https://newsapi.org/v2/top-headlines?country=ae&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeBusiness = "https://newsapi.org/v2/top-headlines?country=ae&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeEntertainment = "https://newsapi.org/v2/top-headlines?country=ae&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeHealth = "https://newsapi.org/v2/top-headlines?country=ae&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeScience = "https://newsapi.org/v2/top-headlines?country=ae&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeSports = "https://newsapi.org/v2/top-headlines?country=ae&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";
aeTechnology = "https://newsapi.org/v2/top-headlines?country=ae&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc";


app.get("/uae", (req, res) => {
    request(aeNewsapi, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})

// USA Business //
app.get("/aebusiness", (req, res) => {
    request(aeBusiness, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})
// Entertainment //
app.get("/aeentertainment", (req, res) => {
    request(aeEntertainment, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})
// Health //
app.get("/aehealth", (req, res) => {
    request(aeHealth, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})
// Science //
app.get("/aescience", (req, res) => {
    request(aeScience, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})
// Sports //
app.get("/aesports", (req, res) => {
    request(aeSports, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})
// China Technology</a>
app.get("/aetechnology", (req, res) => {
    request(aeTechnology, (error, response, body) => {
        var data = JSON.parse(body);
        res.render("aeNews", { data: data });
    })
})

// server //
app.listen(process.env.PORT || 3000, () => {
    console.log("server is up");
})