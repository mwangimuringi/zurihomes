// const express = require('express');
const dotenv = require('dotenv').config();
const app = require('express')()
const axios = require("axios");

// const swaggerHost = process.env.VUE_APP_SWAGGER_HOST;
// const swaggerHTTP = process.env.VUE_APP_SWAGGER_HTTP;

// const swaggerDocs=SwaggerJSON.create_json(swaggerHost,swaggerHTTP);
// const swaggerDocument=swaggerDocs.swaggerDocs;

class APIServices {
  
  constructor(a,b,c) {}
    
    
    static postAddressNo = function (apikey,objectQuery){
      return new Promise(function(resolve, reject){
        axios.post(process.env.VUE_APP_API_URL+'/branch/sync/?apikey='+apikey,objectQuery )
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log('error', error);
          });
      });
    }
    

    // static getAPIDocs = function (apikey){
    //   return new Promise(function(resolve, reject){
    //     // console.log('debug -->',process.env.VUE_APP_API_CLIENT_URL.replace('/v1','')+'/api-docs')
    //     // axios.get('http://localhost:6790/api-client/api-docs/' )
    //     axios.get(process.env.VUE_APP_API_CLIENT_URL.replace('/api-client/v1','')+'/api-docs' )
    //       .then(function (response) {
    //         resolve(response);
    //       })
    //       .catch(function (error) {
    //         console.log('error', error);
    //       });
    //   });
    // }
}
app.use(bodyParser.json())
// app.use('/d', app.options.sta ('public'))
app.use(function(req, res, next) { for (var key in req.query){  req.query[key.toLowerCase()] = req.query[key]; } next(); });
// app.use(serveStatic('public'))
// app.use(serveStatic(path.join(__dirname, "public")));

/*
app.get("/units", function (req, res) {
    APIServices.getUnits(req.query.apikey).then(function(response){
      res.send(response.data)
    });
});

app.get("/unit/coordinates", function (req, res) {
    APIServices.getUnits_coordinates(req.query.apikey,req.query.unit_id).then(function(response){
      res.send(response.data)
    });
});

app.get("/geofence/coordinates", function (req, res) {
    APIServices.getGeofencesIdAddress_coordinates(req.query.apikey,req.query.tnqdircode).then(function(response){
      res.send(response.data)
    });
});

app.get("/routemap/coordinates", function (req, res) {
    APIServices.getRouteMapUnitItems_coordinates(req.query.apikey,req.query.route_map_id).then(function(response){
      res.send(response.data)
    });
});

app.get("/routemap/list", function (req, res) {
    APIServices.getRouteMapList_Executed(req.query.apikey).then(function(response){
      res.send(response.data)
    });
});
app.get("/notifications", function (req, res) {
  APIServices.getNotification_RouteMap(req.query.apikey,req.query.route_map_id).then(function(response){
    res.send(response.data)
  });
});
// app.get("/alerts", function (req, res) {
//   APIServices.getAlerts(req.query.apikey,req.query).then(function(response){
//     res.send(response.data)
//   });
// });

app.get("/alerts/start", function (req, res) {
  APIServices.getAlertsStart(req.query.apikey,req.query).then(function(response){
    res.send(response.data)
  });
});

app.get("/alerts/end", function (req, res) {
  APIServices.getAlertsEnd(req.query.apikey,req.query).then(function(response){
    res.send(response.data)
  });
});

app.post("/orders/sync", function (req, res) {
  APIServices.postOrders(req.query.apikey,req.body).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
    // res.send(response.data)
  });
});

app.post("/branches/sync", function (req, res) {
  APIServices.postBranches(req.query.apikey,req.body).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
    // res.send(response.data)
  });
});

app.get("/orders/check", function (req, res) {
  APIServices.checkOrders(req.query.apikey,req.query).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
  });
});

app.get("/branches/check", function (req, res) {
  APIServices.checkBranches(req.query.apikey,req.query).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
  });
});

app.post("/branch/sync", function (req, res) {
  APIServices.postAddressNo(req.query.apikey,req.body).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
    // res.send(response.data)
  });
});

app.get("/branch/check", function (req, res) {
  APIServices.getCheckAddressNo(req.query.apikey,req.query).then(function(response){
    if(response.data.status=='400' || response.data.status=='error'){
      res.status(400).json({message:response.data.message});
    }else if(response.data.status=='error-api'){
      res.status(401).json({message:response.data.message});
    }else{
      res.send(response.data)
    }
  });
});
*/

// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.get("/api-docs", function (req, res) {
//     APIServices.getAPIDocs(req.query.apikey).then(function(response){
//       res.send(response.data)
//     });
// });


module.exports = app