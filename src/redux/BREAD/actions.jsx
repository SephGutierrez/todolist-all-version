import axios from 'axios';

export const browse = () => (dispatch) => {
    axios.get("/api/todos").then((response) => {
        console.log(response);
        dispatch({type: "GET", payload: response.data});
    });
};

export const add = (data) => (dispatch) => {
    const newData = {
        id: data.id, 
        title: data.text,
    };  

    axios.post('/api/todos/save', newData).then((res) => {
        dispatch({type: "POST", payload:res,
     });
    });
};

export const update = (objData) => (dispatch) => {
    axios.put(`/api/todo/${objData.id}/update`, objData).then((res) => {
        dispatch({type: "PUT", payload: res.data});
    });
};

export const removed = (id) => (dispatch) => {
    axios.delete(`/api/todo/${id}/destroy`).then((res) => {
        dispatch({type: "DELETE", payload: id});
    });
};