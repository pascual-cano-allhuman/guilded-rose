import { Item } from "./item";

const _updateValue = (quality: number, value: number) => {
	quality += value;
	quality = quality > 50 ? 50 : quality;
	return quality < 0 ? 0 : quality;
};

export const updateQuality = (prevItems: Item[]): Item[] => {
	const items = [...prevItems];
	items.forEach(item => {
		switch (item.name) {
			case "Aged Brie":
				item.quality = _updateValue(item.quality, 1);
				break;
			case "Backstage passes to a TAFKAL80ETC concert":
				item.quality = _updateValue(item.quality, 1);

				if (item.sellIn <= 10) {
					item.quality = _updateValue(item.quality, 1);
				}
				if (item.sellIn <= 5) {
					item.quality = _updateValue(item.quality, 1);
				}
				break;

			default:
				if (item.quality > 0) {
					if (item.name !== "Sulfuras, Hand of Ragnaros") {
						item.quality = _updateValue(item.quality, -1);
					}
				}
				break;
		}

		if (item.name !== "Sulfuras, Hand of Ragnaros") {
			item.sellIn = item.sellIn - 1;
		}

		if (item.sellIn < 0) {
			if (item.name !== "Aged Brie") {
				if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
					if (item.name !== "Sulfuras, Hand of Ragnaros") {
						item.quality = _updateValue(item.quality, -1);
					}
				} else {
					item.quality = 0;
				}
			} else {
				item.quality = _updateValue(item.quality, 1);
			}
		}
	});

	return items;
};
