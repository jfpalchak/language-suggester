# Programming Language Suggester

#### By _Joey Palchak_

#### A Programming Language Suggestion application via HTML, CSS, and JavaScript.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

This is a _Programming Language Suggestion_ webpage, which acts as an application for asking users a series of personal questions and providing a language suggestion based on those answers.

The homepage, or index.html, presents the user with a brief greeting and introduction to the application. Following immediately below, the user is then presented with 5 total survey questions: three of which are multiple choice radio-button-style questions, while the remaining two are drop-down selection-box-style questions. Each of the five questions allow only one answer.

The user is then presented with a Submit button at the bottom of the form. Upon completion of each question, the user may then click Submit for their immediate results. There are two possible outcomes upon clicking the submit button:
  1. The user has successfully answered each question, and the results are displayed below the form, within a new box.
  2. The user has failed to select an option for either (or both) Question 2 or Question 5, at which point an error message will display beside the respective question(s). 
          
If outcome (2.) occurs, and there is at least one error message displayed, there will be no results to display to the user until these errors are resolved and a choice is selected.

If outcome (1.) occurs, the user will find they can receive different results according to a number of different answer's they submit on the form. Each successive click of the Submit button will reset the previous form results in favor of the new answers, if new answers are given. 

  * It is possible to receive outcome (1.) on the first Submission, and receive outcome (2.) on the second, and _vice versa_.
 
Below is a cheat sheet for which results correspond to which combination of answers (assuming there are no errors):

| Result      | Form Input (Question # = Answer)                               |
| :-----------: | -----------                                                   |
| C++      | Q2 = Apps or Games & Q4 = Windows or Linux & Q3 = Yes & Q5 = No!   |
| | Q5 = C++                                                                    |
| C#   | Q5 = C#                                                                |
| JavaScript | Q2 = Web & Q3 = Yes & Q5 = No!                                   |
| | Q5 = Javascript                                                             |
| Go | Q5 = Go                                                                  |
| Python | Q2 = Cybersecurity & Q3 = Yes & Q5 = No!                             |
| | Q5 = Python                                                                 |
| Java | Q2 = Games & Q3 = Yes & Q4 = Mac & Q5 = No!                            |
| | Q5 = Java                                                                   |
| Swift | Q2 = Apps & Q3 = Yes & Q4 = Mac & Q5 = No!                            |
| | Q5 = Swift                                                                  |
| "Maybe it's not for you..." | Q3 = No & Q5 = No!                              |

## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/jfpalchak/language-suggester.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone https://github.com/jfpalchak/language-suggester.git
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

##### _Alternatively:_

1. Go to the website directly via **[GitHub Pages](#link)**.



## Known Bugs

* When the user resubmits the form with a new error and the previous result disappears, the page will snap back to the top of the form.

## License

MIT License

Copyright (c) 8/11/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.