
import "./Button.css";
function Button(props){

return <div className="Div">
    <button type={props.type} id={props.id}>
         {props.data}
    </button>
</div>

}
export default Button;