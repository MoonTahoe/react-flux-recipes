const Instructions = ({ steps }) => (
    <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((s, i) => <p key={i}>{s}</p>)}
    </section>
);

module.exports = Instructions;