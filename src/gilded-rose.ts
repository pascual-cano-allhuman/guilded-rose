import { Item } from "./item";

const updateQualityForRegularItems = (prevItem: Item) => {
	const item = { ...prevItem };
	if (item.quality > 0) {
		item.quality = item.quality - 1;
	}
	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0) {
		if (item.quality > 0) {
			item.quality = item.quality - 1;
		}
	}
	return item;
};

const updateAgedBrie = (prevItem: Item) => {
	const item = { ...prevItem };
	if (item.quality < 50) {
		item.quality = item.quality + 1;
	}
	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0) {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
		}
	}
	return item;
};

const updateQualityForBackstagePasses = (prevItem: Item) => {
	const item = { ...prevItem };
	if (item.quality < 50) {
		item.quality = item.quality + 1;
		if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
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
		}
	}
	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0) {
		item.quality = item.quality - item.quality;
	}
	return item;
};

export const updateQuality = (items: Item[]): Item[] => {
	return items.map(item => {
		if (item.name === "Sulfuras, Hand of Ragnaros") return item;
		if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert") {
			return updateQualityForRegularItems(item);
		} else if (item.name === "Aged Brie") {
			return updateAgedBrie(item);
		} else {
			return updateQualityForBackstagePasses(item);
		}
	});
};
