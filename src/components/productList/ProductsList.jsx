import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts, getFilteredProductsList } from '../../redux/actions/userActions';
import { getCategories } from '../../redux/actions/manageProductsActions';
import ProductsContainer from './productsContainer';
import './productList.css'

function ProductList({state, manageProductState, getFilteredProductsList, getProducts, getCategories}) {

    useEffect(()=>{        
        getProducts();
        getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [values, setValues] = useState({
        category: '',
        initialPrice: '',
        finalPrice: ''
    })

    function activeFilter(){
        document.getElementById('sidebar').classList.toggle('filterActive')
        document.getElementById('filter').classList.toggle('btnFilterActive')
    }

    // function handleFilter(name){
    //     let value = document.getElementById('category')
    //     let selected = value.options[value.selectedIndex].text
    //     selected!=='Clear All' ?
    //     getProductsbyCategory(selected.replace(' ','%20'))
    //     :
    //     getProducts()
    // }

    function valueFilter(e){
        console.log(e.target.value)
        console.log(typeof(e.target.value)==='number')
        if (typeof(e.target.value)==='number' && e.target.value>0) {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
            
        }
    // typeof(e.target.value)==='number' && e.target.value>0&&
    }

    function handleSubmit(e){
        e.preventDefault()
        let category = document.getElementById('category')
        category.selectedIndex = category.options[0].value

        if(values.finalPrice<values.initialPrice){
            values.finalPrice=''
        }

        getFilteredProductsList(values)
        setValues({
            category: '',
            initialPrice: '',
            finalPrice: ''
        })

    }

    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <div id='sidebar' className='filter'>
                    <span className='filterTittle'>BUSQUEDA</span>
                    <span onClick={activeFilter} id='filter' className='filterBtn'><i className="fas fa-filter"></i></span>
                    <div className='filterOptions'>
                        <select onChange={valueFilter} name='category' id='category' defaultValue={'DEFAULT'}>
                            <option disabled value='DEFAULT'>Categoria</option>
                            {
                                manageProductState.map(category=><option key={category.id}>{category.name}</option>)
                            }
                        </select><br/>
                        {/* <select name='branch' id='branch' defaultValue={'DEFAULT'}>
                            <option disabled value='DEFAULT'>Marca</option>
                        </select><br/> */}
                        <span className='priceFilter'>PRECIO $</span>
                        <div className='valuesMM'>
                            <div>
                            <span>Min $</span><input onChange={valueFilter} type="number" name="initialPrice" id="minValue" className='value' value={values.initialPrice} />
                            </div>
                            <div>
                            <span>Max $</span><input onChange={valueFilter} type="number" name="finalPrice" id="maxValue" className='value' value={values.finalPrice} />
                            </div>
                        </div>
                        <button type='submit' id='clean'>Limpiar filtros <i className="fas fa-broom"></i></button>
                        <button type='submit' id='search' >Buscar <i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        
            {state.products ? <ProductsContainer state={state}/> : <h1>Cargando...</h1>}            
        </React.Fragment>
    )
}

function MapStateToProps(state){
    return{
        state: state.products.products,
        manageProductState: state.manageProducts.categories
    }
}

export default connect(MapStateToProps, {getProducts, getFilteredProductsList, getCategories})(ProductList)