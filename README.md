screenshotApp
=============

A javascript app that allows you to screenshot the webpage of any URL.


# NPM modules. 
* JqueryGo
* Async
* Prompt

## Usage
Using screenshotApp is relatively straight forward.

To start the app:

#Clone this repository to your local system.

#enter the folder and run this command
``` 
npm start
```
Pretty easy right? The output from running the above command is:

``` 
> nodemon app.js

8 Nov 00:02:24 - [nodemon] v1.2.1
8 Nov 00:02:24 - [nodemon] to restart at any time, enter `rs`
8 Nov 00:02:24 - [nodemon] watching: *.*
8 Nov 00:02:24 - [nodemon] starting `node app.js`
prompt: site: 
``` 

Now supply the website url of your choice to the prompt and hit enter. e.g __http://www.google.com__ [enter]

output in this case is 

``` 
http://www.google.com
Navigating to http://www.google.com
Viewport set to: 1920x1080
we are now taking a screenshot
Capturing page at http://www.google.com.png
Closing
``` 

Now you can navigate to the __http:__ folder and in there you will see a screenshot(png) named after the siteurl.
In this example using __http://www.google.com__ , the screenshot file will be __www.google.com.png__

If you would like to take another screenshot, simply type in rs and this will restart the app because we are using __nodemon__ to run it(__npm start__ executes __nodemon app.js__ as seen in the package.json file).

I am currently working on including a json object description of the screenshot and storing both the screenshot and the description in one folder.
