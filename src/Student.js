import React from 'react'


class Student  extends React.Component{
    render(){
        return(
            <div>
                hello  {this.props.name}
                {this.props.children}
            </div>
        )
    }
}

export default Student