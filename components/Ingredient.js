const Ingredient = ({ amount, measurement, name, prep }) => (
    <li>
        <span className="amount">{amount}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>
);

module.exports = Ingredient;