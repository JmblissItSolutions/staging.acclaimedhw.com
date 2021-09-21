class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0, totalPrice: 0 }; 
    }
    handleIncrement = () => {
      const { count, totalPrice } = this.state;
      const { price, increaseTotals } = this.props; 
      const newCount = count + 1;
      const newTotal = newCount * price;
      this.setState({ count: newCount, totalPrice: newTotal }, () => {
        increaseTotals(price);
      });
    }
    handleDecrement = () => {
      const { count, totalPrice } = this.state;
      const { price, decreaseTotals } = this.props; 
      const newCount = count - 1;
      const newTotal = newCount * price;
      this.setState({ count: newCount, totalPrice: newTotal }, () => {
        decreaseTotals(price);
      });
    }
    render() {
      const { url, name, image, price, description } = this.props;
      return (
        <div className="col-md-4 ml-auto">
          <a href="require(`${url}`)"><img className="productpic" src={require(`./${image}`)} /></a>
          <h2 className="display-6"> <a href="{url}">{name}</a></h2>
          <p className="h4">{price}</p>
          <p className="info">{description}</p>
          <div className="counter">
            <button className="btn btn-info" onClick={this.handleIncerement}>+</button>
            <div>{this.state.count}</div>
            <button className="btn btn-info" onClick={this.handleDecrement}>-</button>
          </div>
        </div>
      );
    }
  }