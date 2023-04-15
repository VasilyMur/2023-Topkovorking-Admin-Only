// const constants = require('../constants');
const requestIp = require('request-ip');
const mongoose = require('mongoose');
require('../models/Token');
const Token = mongoose.model('Token');
require('../models/Space');
const Space = mongoose.model('Space');
// =====================
const path = require('path');
require('../models/User');
const User = mongoose.model('User');
const fs = require('fs');
// =====================
const userHandler = require('../handlers/user-handler');


exports.createDb = async (req, res) => {
  console.log('ABOUT TO ----- DELETE >>>>>> ')
 
  // await User.deleteMany({});
  // await Token.deleteMany({});

  // const adminUser = await User.findOne({email: "vmouravi@yandex.ru"})
  // console.log('adminUser >>>>> ', adminUser)

  // adminUser.role = 'admin';
  // await adminUser.save();

  // const allUsers = await User.find();
  // console.log('-----------allusers after delete >>> ', allUsers)
  
  // const allTokens = await Token.find();
  // console.log('-----------allTokens after delete >>> ', allTokens.length)


//   const curAssets = JSON.parse(
//     fs.readFileSync(path.resolve(__dirname, '../companies_march_12_2022.json'))
//   );
//   console.log('>>>>>>>>>>>>>>>>>>> ', curAssets.length);
//   console.log('>>>>>>>>>>>>>>>>>>> ', curAssets.slice(0, 2));

//  const finalData = curAssets.map(curAss => ({
//     slug: curAss.slug,
//     url: curAss.url,
//     name: curAss.name,
//     type: curAss.type,
//     city: curAss.city,
//     publishStatus: 'complete',
//     gallery: curAss.gallery,
//     offers: curAss.offers,
//     location: curAss.location,
//     actions: curAss.actions,
//     image: curAss.image,
//     titleImage: curAss.titleImage,
//     description: curAss.description,
//     phone: curAss.phone,
//     country: curAss.country,
//     priceDay: curAss.priceDay,
//     subway: curAss.subway,
//     schedule: curAss.schedule,
//     tags: curAss.tags,
//   }));


// await Space.insertMany(finalData);
// await Space.deleteMany({});
//  await Space.collection.dropIndexes(function (err, results) {
//   console.log(' drop result >>> ', results)
// });

  // const allCompanies = await Space.find();
  // console.log('allCompanies >> ', allCompanies.length)
  // console.log('allCompanies >> ', allCompanies)

  return res.status(200).send('ok');
}

// =====================


exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userData = await userHandler.register(email, password);
    return res.status(200).send(userData);
    
  } catch (err) {
    next(err);
  }
  };

  // Activate link
  exports.activate = async (req, res, next) => {
    try {
      const activationLink = req.params.link;
      await userHandler.activate(activationLink);

      const redirectLink = 'https://offizz.ru';
      // process.env.NODE_ENV 
      //   ? process.env.HOST_URL_DEV 
      //   : process.env.HOST_URL_PROD;
        
      return res.redirect(redirectLink);
    } catch (err) {
      next(err);
    }
  }

  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = await userHandler.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.status(200).send(userData);

    } catch(err) {
      next(err);
    }
  }

  exports.logout = async (req, res, next) => {
    try {
      console.log('controller logout >>>> ')
      const { refreshToken } = req.cookies;
      const token = await userHandler.logout(refreshToken);
      res.clearCookie('refreshToken');

      // return res.json(token);
      console.log('sending BACK FROM Lougout CONTROLLER >>> ', token)
      return res.status(200).send(token);
    } catch(err) {
      next(err);
    }
  }

  exports.refresh = async (req, res, next) => {
    try {

      const { refreshToken } = req.cookies;
      // console.log('************************* REFRESH >>> got token from request ', refreshToken)
      const userData = await userHandler.refresh(refreshToken);

     
      console.log('######## sending back user & tokens >>>>>>>>>>>>>>>>>>>>>> ', userData)
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      // return res.json(userData);
      return res.status(200).send(userData);
    } catch(err) {
      next(err);
    }
  }

  exports.getUsers = async (req, res, next) => {
    try {
      const users = await userHandler.getAllUsers();
      // const userIds = users.map(u => u._id);

      // const userSpaces = {};

      // for(const id of userIds) {
      //   const spaces = await Space.find({ admin: { $in: id } });       
      //   userSpaces[id] = spaces;
      // }

      return res.status(200).send(users);
    } catch(err) {
      next(err);
    }
  }

  exports.deleteUser = async (req, res, next) => {
    try {
      await User.findOneAndDelete({_id: new mongoose.Types.ObjectId(req.params.id)});
      return res.status(200).send('deleted');
    } catch(err) {
      next(err);
    }
  }
  exports.activateUser = async (req, res, next) => {
    try {
      const user = await User.findOne({_id: new mongoose.Types.ObjectId(req.params.id)});

      const updatedUser = await User.findOneAndUpdate(
        {_id: new mongoose.Types.ObjectId(req.params.id)}, 
        { isActivated: !user.isActivated },
        {new: true}
        );

      return res.status(200).send(updatedUser);
    } catch(err) {
      next(err);
    }
  }
  exports.toggleCanCreate = async (req, res, next) => {
    try {
      const user = await User.findOne({_id: new mongoose.Types.ObjectId(req.params.id)});

      const updatedUser = await User.findOneAndUpdate(
        {_id: new mongoose.Types.ObjectId(req.params.id)}, 
        { canCreate: !user.canCreate },
        {new: true}
        );

      return res.status(200).send(updatedUser);
    } catch(err) {
      next(err);
    }
  }


  // TEST TO DELETE
  exports.getScriptSource = async (req, res) => {
    try {


      const script = `(function() {
                        "use strict";
                        var a = window.location,
                            o = window.document,
                            r = o.currentScript,
                            s = r.getAttribute("data-api") || new URL(r.src).origin + "/api/event";

                            console.log('s   >>>> ', s);

                            const actionsData = {};

                            let complete = false;
                            let currentPage = window.location.pathname;

                            let INITIAL_WAIT = 3000;
                            let INTERVAL_WAIT = 10000;
                            let ONE_SECOND = 1000;

                            var events = [
                                "mouseup", 
                                "keydown", 
                                "scroll", 
                                "mousemove"
                            ];

                            // Metrics
                            let startTime = Date.now();
                            let endTime = startTime + INITIAL_WAIT;
                            let totalTime = 0;
                            let clickCount = 0;
                            let buttonClickCount = 0;
                            let keypressCount = 0;
                            let scrollCount = 0;
                            let linkClickCount = 0;

                            let mouseActions = {};
                            screenWidth = window.screen.width;
                            screenHeight = window.screen.height;


                            const countDown = setInterval(function () {

                                if (!o.hidden && startTime <= endTime) {
                                startTime = Date.now();
                                totalTime += ONE_SECOND;

                                } else {
                                    console.log('save  it on complete >>>>> ');
                                    clearInterval(countDown);
                                    storageSave();
                                    return;
                                }
                            }, ONE_SECOND);

                            function formatTime(ms) {
                                return Math.floor(ms / 1000);
                            }

                            function storageSave() {

                              const pageActions = {
                                  currentPage,
                                  totalTime,
                                  clickCount,
                                  buttonClickCount,
                                  linkClickCount,
                                  keypressCount,
                                  scrollCount,
                                  mouseActions,
                                  screenWidth,
                                  screenHeight
                              };
                          
                              
                              actionsData[currentPage] = pageActions;
                          
                              localStorage.setItem('activity', JSON.stringify(actionsData));
                          }
                          
                          
                          function onVisibilityChange() {
                              console.log('visibilityState  >>>>>>>>>>>>>>>.', document.visibilityState);
                              if (document.visibilityState !== 'visible') {
                                  console.log('visibilityState storage set ---  >>>>>>>>>>>>>>>.');
                                  localStorage.setItem('visibility', 'user left');
                                  
                              } 
                            }

                            document.addEventListener('visibilitychange', onVisibilityChange);

                            events.forEach(function (eventName) {

                              o.addEventListener(eventName, function (event) {
                                  endTime = Date.now() + INTERVAL_WAIT;
                      
                                  if (eventName === "mouseup") {
                                      clickCount++;
                      
                                      if (event.target.nodeName === 'BUTTON') {   
                                          buttonClickCount++;
                                      }
                                      else if (event.target.nodeName === 'A') {
                                          linkClickCount++;
                                      }
                                  }
                                  else if (eventName === "keydown") {
                                      keypressCount++;
                                  }
                                  else if (eventName === "scroll") {
                                      scrollCount++;
                                  }
                                  else if (eventName === "mousemove") {
                                      mouseActions[event.timeStamp] = {timeStamp: event.timeStamp, clientx: event.clientX, clienty: event.clientY,}
                                  }
                      
                              });
                          });

                      })()`;
  
        res.status(200).send(script);
        return; // добавил return и не протестировал!
  
    } catch (e) {
      console.log(e);
    }
  };

    // TEST TO DELETE
    exports.processTraffic = async (req, res) => {
      try {
        console.log('ready to process >>>>>>>>>>>>>>>>>>>>> ');
        const clientIp = requestIp.getClientIp(req); 
        console.log('client IP >>>>>> ', clientIp);
        console.log('req IP >>>>>> ', req.ip);
        console.log('FingerPrint ----- >>>>>> ', req.fingerprint);
        
        console.log('req.body >>>>>> ', req.body);
        console.log('req.body data >>>>>> ', req.body.data);


      } catch (e) {
        console.log(e);
      }
  }

