import About from './assets/Mario-and-Adrian.jpg'

export default function Chicago() {
return(
    <div className="chicago container">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <span>Little Lemon is a family-owned Mediterranean restaurant blending
                tradition with a modern twist. We serve fresh, flavorful dishes inspired
                by classic recipes, reimagined with contemporary techniques. Every meal
                is made with care—welcoming you like part of the family.</span>
        </div>
        <div>
            <img src={About}></img>
        </div>
    </div>
)
}