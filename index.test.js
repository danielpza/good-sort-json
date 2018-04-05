const { test } = require("ava");
const jsonSort = require(".");

test("basic json", (t) => {
    const input = {
        b: "3",
        a: 2,
    };
    const result = jsonSort(input);
    const expected = `{
  "a": 2,
  "b": "3"
}`;
    t.is(expected, result);
});

test("nested properties", (t) => {
    const input = {
        b: "3",
        c: {
            b: 2,
            a: 1,
        },
        a: 2,
    };
    const result = jsonSort(input);
    const expected = `{
  "a": 2,
  "b": "3",
  "c": {
    "a": 1,
    "b": 2
  }
}`;
    t.is(expected, result);
});
test("nested properties and array", (t) => {
    const input = {
        b: "3",
        c: [3, 1],
        a: 2,
    };
    const result = jsonSort(input);
    const expected = `{
  "a": 2,
  "b": "3",
  "c": [
    3,
    1
  ]
}`;
    t.is(expected, result);
});
test("put objects after values, and arrays after objects", (t) => {
    const input = {
        a: {},
        b: [],
        c: 3,
    };
    const result = jsonSort(input);
    const expected = `{
  "c": 3,
  "a": {},
  "b": []
}`;
    t.is(expected, result);
});
test("example", (t) => {
    const input = {
        id: "asdf",
        health: 98,
        weapons: [
            {
                type: "thrust",
                damage: 57,
            },
        ],
        alarms: ["12.30pm"],
        armor: {
            resistance: [{ type: "thrust", value: 100 }],
            type: "leather",
        },
    };
    const result = jsonSort(input);
    const expected = `{
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
}`;
    t.is(expected, result);
});

test("spaces parammeter", (t) => {
    const input = {
        b: "3",
        a: 2,
    };
    const result = jsonSort(input, { spaces: 4 });
    const expected = `{
    "a": 2,
    "b": "3"
}`;
    t.is(expected, result);
});
