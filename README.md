# _Journal_

#### By: _**Katie Pundt and Morgan Waites**_

#### _A journaling website._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _npm_
* _webpack_
* _eslint_
* _popperjs/core_
* _git_
* _GitHub_

## Description

_The user can write journal entries. The application will return the number of vowels and consonants in an entry, as well as provide a teaser sentence for each entry._

## Setup/Installation Requirements

* Navigate to https://github.com/kpundt93/journal-entry-project
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/journal-entry-project.git`
* After cloning the project, navigate into it using the command `cd journal-entry-project`
* Use the command `git remote` to confirm the creation of the new local repository
* Install project dependencies by running the command `npm install`
* If you receive errors in the terminal, try running `npm install` again, sometimes npm can be finicky
* After installing npm, run the command `npm run build`
* Then run the command `npm run start` to start the project server and view the application (use cmd + c to exit the server in the terminal)
* Open the project with the code editor of your choice

## Troubleshooting

* If you are receiving errors regrading webpack, try running the command `npm install webpack@4.39.3 --save-dev --save-exact`, then run `npm run build` again
* If you continue to have issues setting up the environment, try deleting the package-lock.json file and the node_modules folder from the project. Then rebuild the environment by running `npm install` again.

## Tests
```
Describe: Entry()

Test: New Entry object should have arguments for title, body with associated properties.
Code: 
let entry = new Entry("Journal Entry #1", "I hate journaling.");
entry;
Output: Entry {title:..., body:...}
```

## Known Bugs

* _No known bugs_

## License
_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt and Morgan Waites_
