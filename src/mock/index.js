const express = require('express');
const router = new express.Router();

let authorsList = [
  {
    'id': 1,
    'name': 'Rick Riordan',
    'bio': 'Author of several Percy Jackson books.'
  },
  {
    'id': 2,
    'name': 'Jostein Gaarder',
    'bio': 'Some good writer'
  },
  {
    'id': 3,
    'name': 'Michael McCandless',
    'bio': 'IT writer. Never heard of him.'
  },
  {
    'id': 4,
    'name': 'Erik Hatcher',
    'bio': 'Another IT writer.'
  }
];

let booksList = [
  {
    "id" : "978-0641723445",
    "cat" : ["book","hardcover"],
    "name" : "The Lightning Thief",
    "authors" : [authorsList[0]],
    "series_t" : "Percy Jackson and the Olympians",
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 12.50,
    "pages_i" : 384
  }
,
  {
    "id" : "978-1423103349",
    "cat" : ["book","paperback"],
    "name" : "The Sea of Monsters",
    "authors" : [authorsList[0]],
    "series_t" : "Percy Jackson and the Olympians",
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 6.49,
    "pages_i" : 304
  }
,
  {
    "id" : "978-1857995879",
    "cat" : ["book","paperback"],
    "name" : "Sophie's World : The Greek Philosophers",
    "authors" : [authorsList[1]],
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 3.07,
    "pages_i" : 64
  }
,
  {
    "id" : "978-1933988177",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "authors" : [authorsList[2], authorsList[3]],
    "genre_s" : "IT",
    "inStock" : true,
    "price" : 30.50,
    "pages_i" : 475
  }
];



router.get('/', (req, res) => {
  res.json({hi: 'Hello, world!'});
});

router.get('/books', (req, res) => {
  res.json(booksList);
});

router.get('/authors', (req, res) => {
  res.json(authorsList);
});

module.exports = router;
