import React from "react";

class MyComponent extends React.Component {
    state= {
        address : "25 ao doi",
        x :"y"
    }
    demo(){
        console.log("xin chao");
    }
    render(){
        return (
            <div>
                fisrt component ádsad {this.state.address}
                {Math.random()}

                <button onClick={this.demo}>hello</button>
            </div>
        );
    }
}
export default MyComponent;