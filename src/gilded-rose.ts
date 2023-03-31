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

const increaseTheQuality = (item: Item): Item => {
	if (item.quality < 50) {
		item.quality = item.quality + 1;
		if (item.name == ITEMS_NAME.BACKSTAGE) {
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

	return item;
};

const decreaseTheQuality = (item: Item): Item => {
	if (item.quality > 0) {
		if (item.name != ITEMS_NAME.SULFURAS) {
			item.quality = item.quality - 1;
		}
	}
	return item;
};

const calculateItemQualityForPassedDays = (item: Item): Item => {
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
	return item;
};