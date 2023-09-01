import "./Main.css";

function Main(props){


    return <div className="div" id={props.id}>
        <h1>
        {props.title}
        </h1>
       <hr></hr>
        <p>
        {props.p}
        </p>
    </div>
    
 
}
export default Main;