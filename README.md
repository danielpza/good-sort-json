# json-sort

Sort json the good way.

json is sorted as follows: literals, objects, arrays and then alphabetically.


## Example

```js
const jsonSort = require("json-sort");
console.log(jsonSort({
    id: "asdf",
    health: 98,
    weapons: [{
        type: "thrust",
        damage: 57,
    }],
    alarms: ["12.30pm"],
    armor: {
        resistance: [{ type: "thrust", value: 100 }],
        type: "leather",
    },
}));
```

outputs

```json
{
  "health": 98,
  "id": "asdf",
  "armor": {
    "type": "leather",
    "resistance": [
      {
        "type": "thrust",
        "value": 100
      }
    ]
  },
  "alarms": [
    "12.30pm"
  ],
  "weapons": [
    {
      "damage": 57,
      "type": "thrust"
    }
  ]
}
```
