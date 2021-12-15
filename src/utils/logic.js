export function isHandymanForCategory(category, handymanId) {
    const isHandymanForThisCategory = category.handymen.some((handyman) => {
        return handyman.id === handymanId
    });
    return isHandymanForThisCategory


}