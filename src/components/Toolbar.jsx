export default function Toolbar (props) {

    return <div className={"toolbar-container"}>
        {props.filters.map((e,i)=>{
            return <a className={e === props.selected ? "toolbar-item-selected" : "toolbar-item"}
            key={i}
            href={"#0"}
            onClick={(ev)=>{
                ev.preventDefault()
                props.setSelected(e)
            }}
            >{e}</a>
        })}
    </div>
}