# Guilded Rose

## Description

The Guilded Rose is a quaint shop selling a great diversity of items.

-   All items have a SellIn value which denotes the number of days we have to sell the item
-   All items have a Quality value which denotes how valuable the item is
-   At the end of each day our system lowers both values for every item

The rules for updating the quality as times goes by are:

-   The Quality of an item is never negative
-   The Quality of an item is never more than 50
-   Regular items decreases its quality by 1 every day
-   Once the sell by date has passed, Quality degrades twice as fast

Quality may evolve differently depending on the type of item:

-   "Aged Brie" actually increases in Quality the older it gets
-   "Sulfuras", being a legendary item, never has to be sold or decreases in Quality. It breaks the rule of maximum quality.
-   "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
    Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
    Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

-   "Conjured" items degrade in Quality twice as fast as normal items

## Exercises

-   Part 1: Refactor the function `updateQuality` to make it readable. Don't modify the `Item` type.
-   Part 2: Modify updateQuality to address the new "Conjured" items.

## Installation

Install all the dependencies using npm

```
npm ci
```

## Scripts

```sh
npm test              # To run all tests
npm run test:watch    # To run all tests in watch mode
npm run test:coverage # To generate test coverage report
```
