import React , {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'

const IdOption = ({ setOptions , options , ...props}) => {

    let [open , setOpen] = useState(false)

    const setKeyValue = (schema) => {

        setOptions({
            ...options,
            ref:schema._id,
            _schema:schema
        })
    }
    
    return(
        <div style={{padding:"12px"}}>
            <Dropdown isOpen={open} toggle={() => {setOpen(!open)}}>
                <DropdownToggle caret>
                    { options._schema ? options._schema.name : "" }
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Your Schema</DropdownItem>

                    {props.schemas.map((schema, index) => <DropdownItem key={index} onClick={() => setKeyValue(schema)} >{schema.name}</DropdownItem>)}

                </DropdownMenu>
            </Dropdown>
        </div>
    )

}

const mapStateToProps = (state) => ({
    schemas:state.schema.items
})

export default connect(mapStateToProps, null)(IdOption)