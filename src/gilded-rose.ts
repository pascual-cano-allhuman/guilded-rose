import { Item, ITEMS_NAME } from "./item";


export const updateQuality = (items: Item[]): Item[] => {
	items.forEach(item => {
		if (item.name != ITEMS_NAME.AGED_BRIE && item.name != ITEMS_NAME.BACKSTAGE) {
			decreaseTheQuality(item);
		} else {
			increaseTheQuality(item);
		}

		if (item.name != ITEMS_NAME.SULFURAS) {
			item.sellIn = item.sellIn - 1;
		}
		if (item.sellIn < 0) {
			calculateItemQualityForPassedDays(item);
		}
	});

	return items;
};

const increaseTheQuality = (item: Item) => {
	if (item.quality < 50) {
		item.quality = item.quality + 1;
		if (item.name == ITEMS_NAME.BACKSTAGE && item.sellIn < 11 && item.quality < 50) {
			const increment = item.sellIn < 6 ? 2 : 1;
			item.quality = item.quality + increment;
		}
	}
};

const decreaseTheQuality = (item: Item) => {
	if (item.quality > 0) {
		if (item.name != ITEMS_NAME.SULFURAS) {
			item.quality = item.quality - 1;
		}
	}
};

const calculateItemQualityForPassedDays = (item: Item) => {
	if (item.name != ITEMS_NAME.AGED_BRIE) {
		if (item.name != ITEMS_NAME.BACKSTAGE) {
			if (item.quality > 0) {
				if (item.name != ITEMS_NAME.SULFURAS) {
					item.quality = item.quality - 1;
				}
			}
		} else {
			item.quality = item.quality - item.quality;
		}
	} else {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
		}
	}
};