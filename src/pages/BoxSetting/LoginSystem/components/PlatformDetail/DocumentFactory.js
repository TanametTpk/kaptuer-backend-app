import React from 'react'
import ReactMarkdown from 'react-markdown'
import Apis from './APIs'

const DocumentFactory = ({ platform , ...props}) => {
    return (
        <div style={{paddingLeft:"24px"}}>
            <ReactMarkdown
                source={Apis.createApisDoc("email","password",["test"])}
                escapeHtml={false}
            />
        </div>
    )
}

export default DocumentFactory