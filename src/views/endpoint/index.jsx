import React, {Component} from "react";
import Modal from '../../component/modal';
//MUI
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
//redux BREAD
import {connect} from "react-redux";
import {browse, update, removed} from '../../redux/BREAD/actions'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            todo: {
                id: null,
                value: "",
            },
    };
}
    componentDidMount() {

        const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

        async function getISS(){
        const response = await fetch (api_url);
        const data = await response.json();
        const {latitude, longitude} = data;
        console.log(data);

        document.getElementById('lat').textContent = latitude;
        document.getElementById('lon').textContent = longitude;
         }
        getISS();
    }
//     componentDidMount() {
//         this.props.browse();
// }
    

    componentDidUpdate(prevProps) {
        if(prevProps.todos !== this.props?.todos) {
           this.setState({todos: this.props.todos});
        }
    }


    submitUpdate = (newList) => {
        const {todo} = this.state;
        this.props.update({id: todo.id, title: newList.text});
        this.setState({ todos: {id: null, value: ""} });
    };

    handlesTodos = (todo) => {
        this.setState({todo: {id: todo.id, text: todo.title}});
    };

render (){

    

    const {todos, todo} = this.state;

    if (todo.id) {
        return <Modal list = {todo} onSubmit = {this.submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div key = {index}>
        <div key = {todo.id}> {todo.title} </div>
        <div className = "icons">
           <TiEdit onClick = {() => this.handlesTodos(todo)} />
            <RiCloseCircleLine onClick = {() => this.props.removed(todo.id)} />    
           
        </div>
       
    </div>
        ));
    }
}


export default connect(({ query }) => ({ todos: query.todos }), {
    browse,
    update,
    removed,
  })(Index); 