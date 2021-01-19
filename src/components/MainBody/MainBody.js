import React, { useState, useEffect } from 'react';
import classes from './MainBody.module.scss';
import MyButton from '../UI/MyButton/MyButton';

import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';
import productsData from '../UI/productsData';

const productsState = productsData.products.map(product => ({ ...product, inCart: false }));

const MainBody = (props) => {
  const [products, setProducts] = useState(productsState);

  useEffect(()=> {
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.map(prevProduct => {
        props.cart.forEach(cartItem => {
          if (cartItem.id === prevProduct.id) prevProduct.inCart = true;
        });
        return prevProduct;
      });
      return updatedProducts;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (product) => {
    console.log('clicked');
    props.addToCartDis(product);
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id === product.id) prevProduct.inCart = true;
        return prevProduct;
      });
    })
  };

  const removeFromCart = id => {
    props.removeFromCartDis(id);
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id === id) prevProduct.inCart = false;
        return prevProduct;
      });
    });
  };

  return (
    <div className={classes.MainBody}>
      <div className={[classes.Container, 'container'].join(' ')}>

        <div className={classes.Products}>
          {products.map(product => {

            return (
              <div className={classes.Product} key={product.id}>
                <img src={product.src} alt="IMG" className={classes.Image} />
                <h3 className={classes.Title}>{product.name}</h3>
                <p className={classes.Price}>$ {product.price}</p>

                { product.inCart
                  ? <MyButton outline clicked={()=> removeFromCart(product.id)}>Remove</MyButton>
                  : <MyButton clicked={()=> addToCart(product)}>Add To Cart</MyButton>
                }
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

const mapDispatchToProps = (dispatch) => ({
  addToCartDis: data => dispatch({ type: actionTypes.ADD_TO_CART, data: data }),
  removeFromCartDis: id => dispatch({ type: actionTypes.REMOVE_FROM_CART, id: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);