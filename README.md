# ChineseStudyApp

MERN Stack App - App to help study chinese

Background and Overview
-I've been studying chinese off and on for about two years. I will quickly forget characters that I don't use on a daily basis. 
-I wanted to build an app where I can store all the characters I've learned and will give me an easy way to review them (flashcard system).
-Since I learn chinese using pinyin, I want to be able to search in pinyin to find the desired chinese character.
-The app also has a review game feature where random learned characters are presented to the user. The user will then have to pick the appropriate definition.
-Users can keep track of all the words they have learned.

Features
    - can look up chinese characters via pinyin
        - character display includes definition 

    - can create flashcards (one side shows chinese, other side shows pinyin, definition)

    - can view all learned characters 

    - can generate some kind of quiz (based on users learned characters)
    
Technologies

    -Backend - NodeJs express passport jsonwebtoken MongoDb Mongoose axios
        -use axios(http requests) passport(token authentication) and jsonwebtoken(create auth token) to manage user auth
        -use fetch to grab data from API (http://ccdb.hemiola.com/)

    -Frontend - React redux jsonwebtoken css 
