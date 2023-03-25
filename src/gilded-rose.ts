import { Item } from "./item";

export const updateQuality = (items: Item[]): Item[] => {
	return items.map(item => {
		switch (item.name) {
			case "Sulfuras, Hand of Ragnaros":
				return item;
			case "Backstage passes to a TAFKAL80ETC concert":
				return getUpdatedBackstagePass(item);
			case "Aged Brie":
				return getUpdatedAgedBrie(item);
			case "Conjured Mana Cake":
				return getUpdatedConjuredItem(item);
			default:
				return getUpdatedItem(item);
		}
	});
};

const getUpdatedItem = (item: Item): Item => {
	const name = item.name;
	const sellIn = item.sellIn - 1;
	const quality = sellIn < 0 ? item.quality - 2 : item.quality - 1;
	if (quality < 0) return { name, sellIn, quality: 0 };
	else return { name, sellIn, quality };
};

const getUpdatedBackstagePass = (item: Item): Item => {
	const name = item.name;
	const sellIn = item.sellIn - 1;
	const quality = sellIn >= 10 ? item.quality + 1 : sellIn >= 5 ? item.quality + 2 : item.quality + 3;

	if (sellIn < 0) return { name, sellIn, quality: 0 };
	if (quality > 50) return { name, sellIn, quality: 50 };
	else return { name, sellIn, quality };
};

const getUpdatedAgedBrie = (item: Item): Item => {
	const name = item.name;
	const sellIn = item.sellIn - 1;
	const quality = sellIn < 0 ? item.quality + 2 : item.quality + 1;
	if (quality > 50) return { name, sellIn, quality: 50 };
	else return { name, sellIn, quality };
};

const getUpdatedConjuredItem = (item: Item): Item => {
	const name = item.name;
	const sellIn = item.sellIn - 1;
	const quality = sellIn < 0 ? item.quality - 4 : item.quality - 2;
	if (quality < 0) return { name, sellIn, quality: 0 };
	else return { name, sellIn, quality };
};
