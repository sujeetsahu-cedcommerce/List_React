import React, { Component } from 'react'

export default class Products extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       p_id:"",
       p_name:"",
       p_price:"",
       products:[],
    }
  }

  Get_Product_Id = (event) => { 
   this.setState({
        p_id: event.target.value,
   })  
  }

  Get_Product_Name = (event) => {
    this.setState({
        p_name: event.target.value,
   })
  }

   Get_Product_Price = (event) => {
    this.setState({
        p_price: event.target.value,
   })
  } 
  
  Add_Product = () => {
    let new_product
      if(this.state.p_id !=="" && this.state.p_name!=="" && this.state.p_price!==""){
        new_product = {id:this.state.p_id,name:this.state.p_name,price:this.state.p_price}
        this.setState({
            products:[...this.state.products, new_product],
          })
      }
  }

  render() {
    return (
      <div className='main_container'>
          <h3>Product List</h3>
          <table>
              <tr>
                  <td>Product Id:</td>
                  <td><input type="text" value={this.state.p_id} onChange={this.Get_Product_Id}/></td>
              </tr>
              <tr>
                  <td>Product Name:</td>
                  <td><input type="text" value={this.state.p_name} onChange={this.Get_Product_Name}/></td>
              </tr>
              <tr>
                  <td>Product Price:</td>
                  <td><input type="text" value={this.state.p_price} onChange={this.Get_Product_Price}/></td>
              </tr>
          </table>

         {/* <div> */}
             <button onClick={this.Add_Product}>Add Product</button>
         {/* </div> */}

          <div className='table_container'>
            <table className='table2'>
                <tr><th>product id</th><th>product name</th><th>product price</th></tr>
                {this.state.products.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </table>
          </div>
      </div>
    )
  }
}