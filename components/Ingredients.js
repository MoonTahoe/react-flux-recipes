import Ingredient from './Ingredient'

const Ingredients = ({ list }) => (
    <ul className="ingredients">
        {list.map((ingredient, i) => <Ingredient key={i} {...ingredient} />)}
    </ul>
);

module.exports = Ingredients;