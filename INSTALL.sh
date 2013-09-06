#!/bin/bash
# Special Thanks to Amzad Hossain (https://www.facebook.com/tohin)
# For creating this Awesome Installer package

echo "Step 1: Installing Compass"
npm install compass

echo '*****************************************';
echo '*****     Sass/Compass Installed    *****';
echo '*****************************************';

echo "Step 2: Installing Grunt Globally"
npm install -g grunt-cli

echo '*****************************************';
echo '*****         Grunt Installed       *****';
echo '*****************************************';


echo "Step 3: Installing Bower Globally"
npm install -g bower

echo '*****************************************';
echo '*****         Bower Installed       *****';
echo '*****************************************';

echo  "Step 4: Installing Image Magick Globally"
npm install -g imagemagick

echo '*****************************************';
echo '*****     ImageMagick Installed     *****';
echo '*****************************************';

echo "Step 4: Installing All npm packages required by this projects mentioned in package.json"
npm install


echo '*****************************************';
echo '*****************************************';
echo '*********   PACKAGE SETUP DONE   ********';
echo '*****************************************';

echo 'You are now ready to start Grunt Task Manager';
echo 'type " grunt server " in your terminal';