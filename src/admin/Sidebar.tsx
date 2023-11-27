type Props = {
    text :string,
    link : string,
    icon : string,
    tabSelected : string,
    onTabChange : (e : any) => void,
}

const Sidebar = (props : Props) => {
    return (
        <li className={props.tabSelected === props.text ? 'active' : ''}>
            <a href={props.link} onClick={props.onTabChange}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={props.icon} />
            </svg>
            <div className="text">{props.text}</div>
            </a>
        </li>
    )
}

export default Sidebar;