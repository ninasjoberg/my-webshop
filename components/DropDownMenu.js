
import React from 'react';
import styled from 'styled-components'




const DropDownMenu = (variants) => {

    console.log('dropdown!!!!', variants )
    const variant = variants.map((item, index) => {
        return <li  key={index}>{item.title}</li>
    })
    return null
    // return (
    //     <div className="dropdown">
    //         <div className='dropdown-container'>
    //             <div id="myDropdown" className="dropdown-content">
    //                 <ul>
    //                     {variant}
    //                 </ul>
    //             </div>
    //         </div>
	// 	</div>
    // )
}

export default DropDownMenu
