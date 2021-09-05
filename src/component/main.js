import React from "react";
// import Form from 'react-bootstrap/Form'
// import Label from 'react-bootstrap/Label'
class Main extends React.Component{
constructor(props){
    super(props)
    this.state={
        cityName:'',

    }
}
formSubmit=(e)=>{
    e.preventDefault();
    this.setState({
        cityName:e.target.value
    })
    console.log(this.state.cityName);
}
render(){
    return(
        <div>
            <form onSubmit={this.formSubmit}>
                <h2>City name</h2>
                <input type='text' placeholder='enter the city name' />
                <input type='submit' value='Explore!' />
            </form>
    {/* <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form> */}
</div>)
}

}
export default Main