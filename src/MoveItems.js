import React, { Component } from "react";

export default class MoveItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left_items: ["AJax","JQuery","JavaScript","MooTools","ProtoType","Dojo"],
      right_items:["C","C++","Python","Django","Java","Php"],
    };
  }

  left_selectitems = (event) => {
    const arr = document.getElementById('selectleft').selectedOptions;
    // console.log(arr);
    const temp = [];
    var itemToBeRemoved = [];
    for(var i in arr)
    {
      if(arr[i].innerHTML !== undefined){
        temp.push(arr[i].innerHTML);
        console.log(arr[i].innerHTML);
        itemToBeRemoved.push(arr[i].innerHTML);
        this.setState({
            right_items:[...this.state.right_items,...temp],
        })
      }
    }
      var filteredArray = this.state.left_items.filter(item => !itemToBeRemoved.includes(item))
      // console.log(filteredArray);
      this.setState({
        left_items:filteredArray,
      })
  }
  
  right_selectitems = (event) => {
    const arr = document.getElementById('selectright').selectedOptions;
    console.log(arr);
    const temp = [];
    var itemToBeRemoved = [];
    for(var i in arr)
    {
      if(arr[i].innerHTML !== undefined){
        temp.push(arr[i].innerHTML);
        console.log(arr[i].innerHTML);
        itemToBeRemoved.push(arr[i].innerHTML);
        this.setState({
            left_items:[...this.state.left_items,...temp],
        })
      }
    }
      var filteredArray = this.state.right_items.filter(item => !itemToBeRemoved.includes(item))
      // console.log(filteredArray);
      this.setState({
        right_items:filteredArray,
      })
  }


  render() {
    return (
      <div className="Groups">
       
        <div className="group1">
        <h4>Group 1</h4>

          <select id="selectleft" multiple>
              {
                  this.state.left_items.map((data,index) => <option value={data} id={index}>{data}</option>)
              }
          </select>
        </div>

       <div className="icons">
           <i class="fa-solid fa-angle-left" onClick={this.right_selectitems} id="move_left"></i>
           <i class="fa-solid fa-angle-right" onClick={this.left_selectitems} id="move_right"style={{float:"right"}}></i>
       </div>
     
        <div className="group2">
        <h4>Group 2</h4>
        <select id="selectright" multiple>
              {
                  this.state.right_items.map((data,index) => <option value={data} id={index}>{data}</option>)
              }
          </select>
        </div>
      </div>
    );
  }
}
