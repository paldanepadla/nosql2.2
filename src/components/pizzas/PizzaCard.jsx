function PizzaCard ({pizza}) {
    return (
    <div className="pizza-card">
        <div className="pizza-img">
            <img src={pizza.imageUrl} alt={pizza.name}/>
        </div>
        <h3 className="pizza-name">{pizza.name}</h3>
        <h4 className="pizza-size">{pizza.size}</h4>
        <h4 className="pizza-price">{pizza.price}</h4>
    </div>
    );
}

export default PizzaCard;