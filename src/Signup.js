import React from 'react'


class Signup  extends React.Component{
    render(){
        return(
            <div className="mani">
                <h1 className='text'>hello Signup</h1>
                <input /> <br /> <br />
                <input /> <br /> <br />
                <input /> <br /> <br />
                {this.props.children}
            </div>
        )
    }
}

export default Signup