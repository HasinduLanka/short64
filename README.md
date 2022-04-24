# short64 : Shorter base64 encoding for integers

short64 facilitates encoding and decoding integers as shorter as possible strings.

Works on **browsers** and **nodeJS**.

## Installation

Install from NPM

```
npm i short64
```

## Usage - with ES6 modules

```javascript
import short64 from "short64";

let inputInt = 123;
let short64string = short64.From(inputInt);
let decodedInt = short64.ToInt(short64string);

console.log({
  inputInt,
  short64string,
  decodedInt,
});
```

Output

```javascript
{inputInt: 123, short64string: 'B7', decodedInt: 123}
```

## Usage - with common JS

Access the `default` property of the module.

```javascript
let short64 = require("short64").default;

let inputInt = 123;
let short64string = short64.From(inputInt);
let decodedInt = short64.ToInt(short64string);

console.log({
  inputInt,
  short64string,
  decodedInt,
});
```

Output

```javascript
{inputInt: 123, short64string: 'B7', decodedInt: 123}
```

## Usage - custom alphabet

```javascript
import short64 from "short64";

short64.SetAlphabet(
  "A~CDEFGHIJKLMNOPQRSTUVWXYZ$%^&efghijklmnopqrstuvwxyz0987654321*#"
);

let inputInt = 123;
let short64string = short64.From(inputInt);
let decodedInt = short64.ToInt(short64string);

console.log({
  inputInt,
  short64string,
  decodedInt,
});
```

Output :

```javascript
{inputInt: 123, short64string: '~3', decodedInt: 123}
```

Default alphabet is

```javascript
SetAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-");
```

Base64 friendly alphabet is

```javascript
SetAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
```

## Sample outputs

| Input integer    | digits | short64         | short64 length | base64 (btoa)              | base64 length |
| ---------------- | ------ | --------------- | -------------- | -------------------------- | ------------- |
| 0                | 1      | **'A'**         | **1**          | 'MA=='                     | 4             |
| 1                | 1      | **'B'**         | **1**          | 'MQ=='                     | 4             |
| 9                | 1      | **'J'**         | **1**          | 'OQ=='                     | 4             |
| 44               | 2      | **'s'**         | **1**          | 'NDQ='                     | 4             |
| 100              | 3      | **'Bk'**        | **2**          | 'MTAw'                     | 4             |
| 2000             | 4      | **'fQ'**        | **2**          | 'MjAwMA=='                 | 8             |
| 3135             | 4      | **'w-'**        | **2**          | 'MzEzNQ=='                 | 8             |
| 4095             | 4      | **'--'**        | **2**          | 'NDA5NQ=='                 | 8             |
| 153663           | 6      | **'lg-'**       | **3**          | 'MTUzNjYz'                 | 8             |
| 262143           | 6      | **'---'**       | **3**          | 'MjYyMTQz'                 | 8             |
| 7529535          | 7      | **'cuQ-'**      | **4**          | 'NzUyOTUzNQ=='             | 12            |
| 16777215         | 8      | **'----'**      | **4**          | 'MTY3NzcyMTU='             | 12            |
| 368947263        | 9      | **'V-bA-'**     | **5**          | 'MzY4OTQ3MjYz'             | 12            |
| 1073741823       | 10     | **'-----'**     | **5**          | 'MTA3Mzc0MTgyMw=='         | 16            |
| 18078415935      | 11     | **'Q1jrw-'**    | **6**          | 'MTgwNzg0MTU5MzU='         | 16            |
| 68719476735      | 11     | **'------'**    | **6**          | 'Njg3MTk0NzY3MzU='         | 16            |
| 885842380863     | 12     | **'M5AUgg-'**   | **7**          | 'ODg1ODQyMzgwODYz'         | 16            |
| 4398046511103    | 13     | **'-------'**   | **7**          | 'NDM5ODA0NjUxMTEwMw=='     | 20            |
| 9007199254740991 | 16     | **'f--------'** | **9**          | 'OTAwNzE5OTI1NDc0MDk5MQ==' | 24            |
