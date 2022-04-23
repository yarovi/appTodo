
import { Field, Formik, Form, ErrorMessage } from "formik";
import React ,{useEffect , useState } from "react";
import moment from "moment";
import { useParams  } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import {RetriveTodo,UpdateTodo,NewTodo} from  "./TodoDataService";
import {useNavigate   } from "react-router-dom";

const initValue =
    {
        id: 0,
        username: '',
        description: 'Title Example',
        targetDate: moment(new Date()).format('YYY-MM-DD')
    }

function TodoComponent(){
    const [isLoading, setIsLoading] = useState(true);
    const [info, SetInfo] = useState(initValue); 
    let navigation = useNavigate();
    let params = useParams();   
    let username = AuthenticationService.loggedUserLoggedIn();
    useEffect (()=>{
        if(params.id ==-1){
            NewTodo(username,info)
        .then((r) =>{
            // console.log('data:',r.data)
            SetInfo(r.data);
            setIsLoading(false);
        }); 
        }
        //console.log('se ejecuto useEfect');
        RetriveTodo(username,params.id)
        .then((r) =>{
            // console.log('data:',r.data)
            SetInfo(r.data);
            setIsLoading(false);
        });

    },[]);

    function onSubmit(values){

        //if(typeof  values != 'undefined'){
            SetInfo({...info, description: values.description});
            console.log('update value',values);
            console.log('update info',info);
            UpdateTodo(username,info.id,info);
            //navigation(`/todos`);
        //} 

        
    }
    function validate(values){
        let errors = {}
        if(!values.description){
            errors.description= 'Should have at least 5 Characters'
        }else if(values.description.lenght<5){
            errors.description = 'Enter atlast 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Enter a valid target Date'
        }
        // console.log(values)
        return errors
    }

    if(isLoading){
            <h1>Cargando...</h1>    
    }
    return <div>
            Component-
            <div className="container">
             {params.id}
            </div>
            <h1>Todo</h1>
                <Formik initialValues={{
                    description: info.description,
                    targetDate: moment(info.targetDate).format('YYY-MM-DD')
                }}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                >
                    <Form>
                        <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>

                    <fieldset className="form-group">
                        <label>Description</label>
                        <Field className="form-control" type="text" name="description"></Field>
                    </fieldset>
                    <fieldset>
                        <label>Target Date</label>
                        <Field className="form-control" type="date" name="targetDate"></Field>
                    </fieldset>
                    <button className="btn btn-success" type="submit" onClick={() => onSubmit}>Save</button>

                    </Form>
                </Formik>
            
            </div>;
    }


export default TodoComponent