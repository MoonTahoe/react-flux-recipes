import Recipie from './Recipie'
import '!style!css!sass!postcss-loader!../stylesheets/APP.scss'

const APP = ({ recipies }) => (
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipies">
            { recipies.map((recipie, i) => <Recipie key={i} {...recipie} />) }
        </div>
    </article>
);

module.exports = APP;