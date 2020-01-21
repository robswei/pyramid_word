# pyramid_word

Takes in a string and returns a boolean to indicate whether a word is a pyramid word.

A word is a ‘pyramid’ word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

# Setup

Clone repo -> `npm install` -> `npm start`

Server will startup on port 5000

# Example Requests

`GET` `localhost:5000/pyramid_word?string=banana`

Input String: `banana`
Expected Response: `true`

Input String: `bandana`
Expected Response: `false`

