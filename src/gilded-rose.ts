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
			default:
				return getUpdatedItem(item);
		}
	});
};

const getUpdatedItem = (item: Item): Item => {
	const name = item.name;
	const sellIn = item.sellIn - 1;
	const quality = sellIn < 0 ? item.quality - 2 : item.quality - 1;
	return {
		name,
		sellIn,
		quality: quality < 0 ? 0 : quality
	};
};

const getUpdatedBackstagePass = (prevItem: Item): Item => {
	const item = { ...prevItem };
	if (item.quality < 50) item.quality = item.quality + 1;
	if (item.sellIn < 11) {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
		}
	}
	if (item.sellIn < 6) {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
		}
	}
	item.sellIn = item.sellIn - 1;
	if (item.sellIn < 0) item.quality = 0;
	return item;
};

const getUpdatedAgedBrie = (prevItem: Item): Item => {
	const item = { ...prevItem };
	if (item.quality < 50) item.quality = item.quality + 1;
	item.sellIn = item.sellIn - 1;
	if (item.sellIn < 0 && item.quality < 50) item.quality = item.quality + 1;
	return item;
};
