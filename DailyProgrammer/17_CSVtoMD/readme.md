# CSV to Markdown Table

Write code that:

* Reads a CSV file
* Prints out on your console a table suitable for Markdown

## Examples

Given the following CSV file:

```
First,Last,Address
Annamarie,Romaguera,9446 Schroeder Squares
Sebastian,Hessel,114 Frederic Centers
Marlon,Hahn,307 Bradtke Grove
Duane,Schowalter,10771 Keaton Knoll
Laurence,Schuster,610 Odell Point
```

Output:

```
First     | Last       | Address               
--------- | ---------- | ----------------------
Annamarie | Romaguera  | 9446 Schroeder Squares
Sebastian | Hessel     | 114 Frederic Centers  
Marlon    | Hahn       | 307 Bradtke Grove     
Duane     | Schowalter | 10771 Keaton Knoll    
Laurence  | Schuster   | 610 Odell Point       
```

## Usage

Import the csv file:

`var csv = require('../csv')`

Run js from the terminal:

`node [yourSolution].js`
