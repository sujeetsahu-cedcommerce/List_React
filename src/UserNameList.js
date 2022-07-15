import React, { Component } from "react";

export default class UserNameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        input_value:"",
        item:[],
    };
  }
  
  Take_Value = (event) => {
      this.setState({
        input_value:event.target.value,
      })

  }

  Display_item = () => {
    if(this.state.input_value!==""){
      this.setState({
        item:[...this.state.item, this.state.input_value],
        input_value:"",
      })
    }
  }
  
  Delete_Item = (event) => {
   let index = event.target.id;
   this.state.item.splice(index,1);
   this.setState({
     item: this.state.item,
   })
  }

  render() {
    return (
      <div className="main_box">
        <div className="sub_Box1" style={{boxShadow:"20px 20px 30px black"}}>
          <input type="text" value={this.state.input_value} placeholder="Enter New Items"onChange={this.Take_Value} style={{height:"38px"}}/>
          <button onClick={this.Display_item}>Add</button>
        </div>
        <div className="sub_Box2">
            {
              this.state.item.map((item,index) => 
              <div className="sub_sub_Box1">
                <button id={index} style={{marginRight:"20px",color:"blue", backgroundColor:"blanchedalmond",border:"none",height:"1vh"}} onClick={this.Delete_Item}>X</button>
                <span id={index}>{item}</span><br/>
              </div>)
            }
        </div>
      </div>
    );
  }
}
