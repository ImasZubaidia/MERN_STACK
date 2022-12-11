import React from 'react'

const TabsInfo = (props) => {
    
    const {content}=props
    return (
            <p style={{color: content.textColor}}>{ content.content}</p>
    )
}

export default TabsInfo