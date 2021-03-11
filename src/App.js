import React from 'react'
import Student from './Student'
import Login from './Login'
import Signup from './Signup'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      status: true
    }
    
  }
    render(){
      return(
        <div>
          {
            this.state.status?
             <Login >
                <button onClick={()=>this.setState({status: false})}>No accaunt</button>
             </Login>:
             <Signup >
               <button onClick={()=>this.setState({status: true})}>Yes accaunt</button>
             </Signup>
          }
        </div>
      )
        
    
      
    
  }
}


 
export default App