import { Item } from "../src/item";
import { updateQuality } from "../src/gilded-rose";
import * as fs from "fs";
import * as path from "path";

const INITAL_ITEMS = [
	{ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
	{ name: "Aged Brie", sellIn: 2, quality: 0 },
	{ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
	{ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
	{ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
	{ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 },
	{ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 },
	{ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 },
	// this conjured item does not work properly yet
	{ name: "Conjured Mana Cake", sellIn: 3, quality: 6 }
] as Array<Item>;

const FIXTURES = fs.readFileSync(path.resolve(__dirname, "fixtures.txt"), "utf8");

describe("Gilded Rose", () => {
	it("should test fixtures", () => {
		let items = [...INITAL_ITEMS];
		let days = 31;
		let output = "";
		for (let i = 0; i < days; i++) {
			output += "-------- day " + i + " --------\n";
			output += "name, sellIn, quality\n";
			items.forEach(element => {
				output += element.name + ", " + element.sellIn + ", " + element.quality + "\n";
			});
			if (i < days - 1) output += "\n";
			items = updateQuality(items);
		}

		expect(output).toBe(FIXTURES);
	});
});
