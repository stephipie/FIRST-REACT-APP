function ProductCard(props) {
    return (
        <div className="border p-2 shadow-lg rounded-lg">
            <img src={props.product.image} alt={props.product.name} />
            <h3 className="font-semibold m-2">{props.product.name}</h3>
            <span className="flex flex-col m-2">Preis: {props.product.price} €</span>
            <span className="m-2">Verfügbar: {props.product.available ? "Ja":"Nein"}</span>
        </div>
    )
}

export default ProductCard;