# WorkoutTracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The live app is [available on Heroku](https://aqueous-peak-91831.herokuapp.com/).

## Table of Contents
* [Description](#Description)
  * [Challenges](#Challenges)
  * [Further Possibilities](#Further-Possibilities)
  * [Built With](#built-with)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)

## Description
A workout tracking application made to explore MongoDB and Mongoose. The application is designed to let users track their workouts, by inputting the exercises performed and statistics for each. The last 7 workouts are then summarized on a Dashboard page, with 4 charts to visualize the data.

[![Project Screenshot](./WorkoutTracker.gif)](https://aqueous-peak-91831.herokuapp.com/)

For this project, we were provided a pre-built front end and tasked with building a back end to support it. Users are able to input two kinds of exercises, Cardio or Resistance, and each takes different pieces of information. To adapt to data with different columns, our best choice is to use a document-based database like MongoDB. The database is structured to create a "workout" document when the user starts a new workout session, then add "exercise" sub-documents to it.

### Challenges
The front end provided for the assignment isn't perfect, and tailoring the back end to accommodate it was challenging. The data field labels used by the exercise submission form don't quite match the fields used on the other two pages, which had to be adjusted on the back end. The fix itself wasn't complicated, but tracking down exactly what was causing the odd errors I experienced took some time.

The charts on the summary pages were also frustrating to troubleshoot, but the problem manifesting on them was eventually determined to be a flaw in the front end. As such, the two lower charts are still not functioning correctly. Somehow, the labels are not correctly lining up with their data. This results in some of the data shown being labeled as "undefined" and all of them that aren't duplicated being incorrect. However, as we were instructed to not alter anything in the front end code, this issue persists.

### Further Possibilities
If I keep this project in my portfolio after the assignment has passed, I would like to fix the issues with the statistics page. That the line and bar graphs label each workout with a day of the week (and no further differentiating details) is not a good user experience; it looks unpolished and creates graphs with duplicated labels. This, as well as the misaligned exercise labels on the pie and donut charts, make an otherwise smooth app look clunky and awkward.

### Built With

* Node.js
    * [express](https://www.npmjs.com/package/express)
    * [morgan](https://www.npmjs.com/package/morgan)
* MongoDB
    * [mongoose](https://www.npmjs.com/package/mongoose)

## Installation
To install app dependencies, run this command in your terminal:
```
npm i
```

To add the provided seed data, run this command after installation:
```
npm run seed
```

## Usage
Before using the program, a MongoDB connection must be established. The app will create its own database without further intervention, please edit the "server.js" file to control what name it uses.

## License
This project uses the MIT license. For more details, visit [this link](https://choosealicense.com/licenses/mit/).

## Contributing
Create a fork and send a pull request, or send me an email!

## Questions
If you have questions to ask or issues to report, please visit the [GitHub repository](https://github.com/ziieng/WorkoutTracker) for this project, [my GitHub profile](https://github.com/ziieng), or send me an email at cjengelhardt@gmail.com.