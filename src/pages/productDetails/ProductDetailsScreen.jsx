import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import styles from './ProductDetailsScreen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { getProductDetail, getProductDetailReset } from '../../redux/actions/productDetailsActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import { addCartProduct} from '../../redux/actions/cartActions';
import { useHistory } from 'react-router';
import Comments from '../../components/comments/Comments';
import { Carousel } from 'react-responsive-carousel';
import uniqid from 'uniqid';

const ProductDetailsScreen = ({ product_detail, getProductDetail, getProductDetailReset, addCartProduct, cart_state, authState}) => {
    // console.log(product_detail);
    const { id } = useParams()
    const [productId, setProductId] = useState()
    const [cantidadItems, setCantidadItems] = useState(1)
    const [visible, setVisible] = useState(false)
    const history = useHistory()

    function enableEdit(){
      let user = history.location.search.split('=').slice(-1)[0].slice(1)
      if(user === authState.uid){
            setVisible(true)
      }
    }

    useEffect(() => {
        getProductDetail(id)
        setProductId(id)
        enableEdit()
        return () => { getProductDetailReset() }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id])

      function selectChange(e) {
          let num = parseInt(e.target.value)
          setCantidadItems(num)
      }

      async function addProductCart(){
        if(cart_state?.findIndex(el => el.id === product_detail.id) === -1){
        let detail = product_detail
        detail.quantity = cantidadItems    
        await addCartProduct(detail)
        
        
        }
        else{
            history.push("/cart")
        }
      }

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.mainImage}>
                <Carousel  width="400px" showThumbs={false} >
                {
                   
                    product_detail.image && product_detail.image.map(el => (
                        <div key={uniqid()} className={styles.imagen_container}>
                            <img src={el} alt="producto" className={styles.imagenSlider} />
                        </div>
                    ))
                }
            </Carousel>
                    
                </div>
                <div className={styles.detailProduct}>
                    <h1>{product_detail.name}</h1>
                    <FontAwesomeIcon className={`${styles.detailProductIcon} ${product_detail.rating>=1 && styles.star}`} icon={faWineGlass} />
                    <FontAwesomeIcon className={`${styles.detailProductIcon} ${product_detail.rating>=2 && styles.star}`} icon={faWineGlass} />
                    <FontAwesomeIcon className={`${styles.detailProductIcon} ${product_detail.rating>=3 && styles.star}`} icon={faWineGlass} />
                    <FontAwesomeIcon className={`${styles.detailProductIcon} ${product_detail.rating>=4 && styles.star}`} icon={faWineGlass} />
                    <FontAwesomeIcon className={`${styles.detailProductIcon} ${product_detail.rating>=5 && styles.star}`} icon={faWineGlass} />
                    <br />
                    <br />
                    <hr />
                    <div className={styles.description}>
                        {product_detail.description}
                          <p>${product_detail.cost}</p>
                    </div>
                    
                    <div className={styles.lineaProduct}></div>
                        <label htmlFor="" className={styles.labelCantidad}>Cantidad:</label>
                        <div className={styles.cartProductDetail}>
                            <input type="text" id="cantidad" onChange={e => selectChange(e)}  />    
                        <button onClick={addProductCart} className={styles.addProductButton}>Agregar al carrito</button>
                    </div>
                    <div>
                    <label htmlFor="" className={styles.labelStock}>Stock Disponible:{product_detail.stock}</label>
                    </div>

                </div>
            </div>
                {product_detail.reviews && <Comments idUser={authState.uid} newComment={visible} comments={product_detail.reviews} idProduct={productId}/>}
            <Footer />
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
      product_detail: state.products.product_detail,
      cart_state: state.cart.cartState,
      authState: state.auth
    };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        getProductDetail: (product) => dispatch(getProductDetail(product)),
        getProductDetailReset: () => dispatch(getProductDetailReset()),
        addCartProduct: (id) => dispatch(addCartProduct(id)),
        
        

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsScreen);
