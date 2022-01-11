enum Calification {MEH, ABOVE_AVERAGE , GOOD, GOD }

type Food = '🍕'|'🍔'|'🍟'|'🌭'|'🍿'|'🥓';
type Sizes = 'econo' | 'medium' | 'large';

type FoodMenu = `${Food} ${Sizes}`
type MappedFoodMenu = {
    [key in FoodMenu]: Calification
}
const meal: FoodMenu = '🥓 large';

const valoration: MappedFoodMenu = {
    "🍕 medium": Calification.GOD,
    "🍕 econo": Calification.MEH,
    "🍕 large": Calification.MEH,
    "🍔 econo": Calification.MEH,
    "🍔 medium": Calification.MEH,
    "🍔 large": Calification.MEH,
    "🍟 econo": Calification.ABOVE_AVERAGE,
    "🍟 medium": Calification.MEH,
    "🍟 large": Calification.GOD,
    "🌭 econo": Calification.MEH,
    "🌭 medium": Calification.MEH,
    "🌭 large": Calification.MEH,
    "🍿 econo": Calification.ABOVE_AVERAGE,
    "🍿 medium": Calification.MEH,
    "🍿 large": Calification.MEH,
    "🥓 econo": Calification.GOD,
    "🥓 medium": Calification.MEH,
    "🥓 large": Calification.GOD
}