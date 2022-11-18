

## Technical Architecture

## Overview

The project will consist of a backend (Express), frontend (React), mobile app (React Native) and Database (MySql).For Optical Character Recognition(OCR) Tesseract will be used. Python will used for Machine Learning.

## Tech Stack:

MySql
MongoDB
Express framework
React Native
Node.js

## UI DEsign

Use figma for prototyping
https://www.figma.com/file/OkCtNMXeltVT51ScOIphJm/DM-Prototype?node-id=15%3A591

## Cloud

The server and frontend can be hosted by a cloud provider.
Google cloud maybe be available for free via Deakin(Check this).
We can  starting out as an FaaS during the development/testing phase.

We can also use App Engine or Cloud Functions and then migrate to something like Kubernetes at a later stage.

- https://cloud.google.com/kubernetes-engine
- https://www.docker.com/
- https://medium.com/google-cloud/hosting-a-react-js-app-on-google-cloud-app-engine-6d1341b75d8c
- https://cloud.google.com/community/tutorials/run-expressjs-on-google-app-engine
- https://cloud.google.com/appengine/docs/standard/python/microservices-on-app-engine

## API

The API will also need to be secured which can be done via [JSON web tokens](https://jwt.io/) and `helmet.js`.
The data must be encrypted while being sent between different entities (e.g. backend, frontend & DB).
We use [morgan](https://www.npmjs.com/package/morgan) to log activities on the backend.

- https://medium.com/@onejohi/securing-your-express-restful-apis-using-json-web-tokens-8c2fff0f4e7f
- https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/
- https://expressjs.com/en/advanced/best-practice-security.html

## Database

- https://www.mysql.com/
- https://codeforgeek.com/encrypt-and-decrypt-data-in-node-js/
- Use MVC architecture 	 
- NoSQL to be used for image processing 

 
## OCR Engineering and ML models 

- Use Python for ML 
- Tesseract Open Source OCR Engine
 
 
## Data Capturing 

For now ask everyone to email receipt images to discountmate@gmail.com 
Ohter Mechanisms to gather receipt data to be discussed and finalised.This could include cloud drives, web-forms, API, etc 

## Testing

The [Jest](https://jestjs.io/) library allows for testing of both React and React Native applications.
For the backend [Mocha](https://www.npmjs.com/package/mocha) and [Chai](https://www.npmjs.com/package/chai) can be used for unit tests.

Tests will need to be performed on various mobile devices both via emulators and on a native devices with different OS versions and hardwares.

- https://reactnative.dev/docs/testing-overview
- https://livecodestream.dev/post/testing-in-nodejs-using-mocha-and-chai-part-1/
- https://blog.codemagic.io/how-to-build-react-native-ios-app-on-windows/
- https://vdelacou.medium.com/test-and-develop-ios-app-on-your-iphone-with-microsoft-windows-befa9e87631d

## Repository
Github: https://github.com/discountmate/dm_app

## Security Aspects need to be considered 

Login and passwords to be hashed I will be using bcrypt for this. 

Using strong certificates and signatures for web application 

If we are storing payments, then we need to secure it with proper encryption SHA512 or any other suitable encryption standard. 

As we receive receipts with payment details, we need to store those images also in a safe format.  

