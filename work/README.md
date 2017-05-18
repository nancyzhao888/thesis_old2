[Preview](https://github.com/nancyzhao888/thesis/blob/master/work/test/preview.png)

### Data Collection
#### Wicked
* Broadway & world touring weekly data: Oct. 2003 - Feb. 2017

#### Ghost
* Broadway & world touring weekly data: June 2011 - Feb. 2017

### Data Structure For Tree Ring
```javascript
{
  "Ghost": {
    "Broadway": {
      "2012": {
        "12": 382,
        "13": 563,
        "14": 575,
        "15": 583,
        "16": 633,
        "17": 530,
        "18": 668,
        "19": 651,
        "20": 705,
        "21": 673,
        "22": 580,
        "23": 545,
        "24": 600,
        "25": 562,
        "26": 560,
        "27": 545,
        "28": 578,
        "29": 576,
        "30": 528,
        "31": 584,
        "32": 502,
        "33": 581,
        "34": 635
      }
    },
    "Genre": [
      "Romance", 
      "Fantasy", 
      "Mystery" 
    ],
  "Version": "English"
  }
}
```

### Data Structure For Force Layout
```javascript
{
  "nodes": [
    {"id": "Ghost", 
        "country": null,
        "group": 1},
    {"id": "Wicked", 
        "country": null,
        "group": 1},
    {"id": "New York", 
        "country": "USA",
        "group": 0}
    ],
  "links": [
    {"source": "Ghost", "target": "New York", "value": 23},
    {"source": "Wicked", "target": "New York", "value": 695},
  ]
}
```