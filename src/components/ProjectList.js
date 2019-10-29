import React , {useState} from 'react'
import IconButton from './IconButton'
import { MdInsertDriveFile , MdMoreVert } from "react-icons/md";

import { ButtonDropdown, DropdownToggle , DropdownMenu, DropdownItem  } from 'reactstrap';

const ProjectMenu = ({onGenerate , onDelete , id , item}) => (
    <DropdownMenu>
        <DropdownItem onClick={()=> onGenerate(id , item)} >Generate</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=> onDelete(id , item)} >Delete</DropdownItem>
    </DropdownMenu>
)

const SchemaMenu = ({onDelete , id , item}) => (
    <DropdownMenu>
        <DropdownItem onClick={()=> onDelete(id , item)} >Delete</DropdownItem>
    </DropdownMenu>
)

const ProjectItem = (props) => {

    let [onDrop , setDrop] = useState(false)

    return(
        <div className={"project-list-item " + (props.active ? "active" : "")} >
            <div className="front-item" onClick={() => props.onSelect(props.id , props.item)}>
                {/* replace with icon */}
                <MdInsertDriveFile fill="#3FBF9A" size="28px" />
                <span>{props.item.title || props.item.name}</span>
            </div>
            <div className="back-item">
                <ButtonDropdown direction="right" isOpen={onDrop} toggle={() => { setDrop(!onDrop) }}>
                    <DropdownToggle 
                        tag="span"
                        data-toggle="dropdown"
                    >
                        <IconButton
                            icon={<MdMoreVert size={24} />}
                            action={() => props.onMore(props.id , props.item)}
                        />
                    </DropdownToggle>
                    {
                        props.menu === "project" ?
                            <ProjectMenu onGenerate={props.onGenerate} onDelete={props.onDelete} id={props.id} item={props.item} />
                        :
                            <SchemaMenu onDelete={props.onDelete} id={props.id} item={props.item} />
                    }
                </ButtonDropdown>
            </div>
        </div>
    )
}

const ProjectList = ({items , onSelect , onMore , title , actions , selectedItem , menu , ...props}) => (

  <div className="project-list-container">
    <div className="project-list-header">
        <div>{title}</div>
        <div>{actions}</div>
    </div>

    { 
        items && items.map((item, index) => (
            <ProjectItem 
                key={index}
                id={index}
                item={item}
                menu={menu}
                onSelect={onSelect}
                onMore={onMore}
                active={selectedItem && selectedItem._id === item._id}
                {...props}
            />
        ))
    }

  </div>

)

export default ProjectList;
