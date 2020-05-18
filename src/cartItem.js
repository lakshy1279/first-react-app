import React from 'react';

class CartItem extends React.Component {
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                <div style={ { fontSize: 25 } }>Phone</div>
                 <div style={ { color: '#777' } }>Rs 999</div>
                 <div style={ { color: '#777' } }>Qty: 1</div>
                  <div className="cart-item-actions">
                      <img alt="" className="action-icons" src="https://as1.ftcdn.net/jpg/02/18/10/12/500_F_218101294_MGv2XZLTju18Iv2xAQe4TY2QAideeAbr.jpg" />
                      <img alt="" className="action-icons" src="https://as2.ftcdn.net/jpg/00/70/16/29/500_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" />
                      <img alt="" className="action-icons" src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" />
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