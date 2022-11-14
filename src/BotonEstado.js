import "./button.css"

export const Button = (props) => {

    return (
        <button onClick={props.onClick}>{props.value}</button>
    )
}