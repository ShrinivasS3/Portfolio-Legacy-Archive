import "./experience.scss"

const Experience = () => {
return (
        <div className="exp">
        <p>Bungee Tech | Internship<br/><b>Machine Learning Engineer</b> |  Jun 2023 - Jul 2023<br/></p>
        <p><b>Product matching</b> of retail Pet & Grocery products to <b>effectively price products</b> based on <b>market conditions</b>.</p>
        <ul>
                <li>The dataset was <b>5TB</b> of more than <b>100s of millions</b> of Products crawled and scrapped from public internet.
                With <b>more than 50 key attributes</b> like Product titles, Image, Description, Size, Flavor,  model number, UPC etc.</li>
                <li>Exploratory <b>analysis of Text/String</b> based token were done using <b>python libraries</b> on <b>notebook</b> and <b>SQLs</b> based by <b>AWS Athena</b></li>
                <li>The model architecture is <b>Transformer</b> based with <b>Approximate KNN</b><br/>
                </li>
                <li>The model&apos;s performance was evaluated
                        <ul><li>Bench mark <b>F1 score</b> when evaluated <b>against WDC</b> product matching benchmark <b>96%</b></li>
                        <li>Bench mark <b>F1 score</b> when evaluated <b>against internal evaluation dataset 91%</b></li></ul>
                </li>
        </ul>
        </div>
);
}

export default Experience;
