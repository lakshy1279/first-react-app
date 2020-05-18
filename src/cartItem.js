import React from 'react';

class CartItem extends React.Component {
    constructor()
    {
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity=()=>
    {
       this.state.qty=this.state.qty+1;
    }
    render(){
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>{price}</div>
        <div style={ { color: '#777' } }>{qty}</div>
                  <div className="cart-item-actions">
                      <img 
                       alt="decrease"
                      className="action-icons"
                      src="https://as1.ftcdn.net/jpg/02/18/10/12/500_F_218101294_MGv2XZLTju18Iv2xAQe4TY2QAideeAbr.jpg"
                      onClick={this.increaseQuantity} 
                      />
                      <img 
                      alt="increase" 
                      className="action-icons" 
                      src="https://as2.ftcdn.net/jpg/00/70/16/29/500_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg"
                       />
                      <img 
                      alt="delete"
                       className="action-icons" 
                       src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        />
                   {/* Buttons */}
                  </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;