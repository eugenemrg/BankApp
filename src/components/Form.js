import React, { useState } from 'react'

function Form() {

    const [isVisible, setVisible] = useState(false)
    const [hideStatus, setHideStatus] = useState('hide')
    const [icon, setIcon] = useState('fa-solid fa-chevron-down fa-rotate-270')

    function handleFormToggle() {
        if(isVisible){
            setVisible(isVisible => !isVisible)
            setHideStatus(hideStatus => hideStatus = 'hide')
            setIcon('fa-solid fa-chevron-down fa-rotate-270')
        }else{
            setVisible(isVisible => !isVisible)
            setHideStatus(hideStatus => hideStatus = 'show')
            setIcon('fa-solid fa-chevron-down')
        }
    }

    return (
        <div id='form'>
            <div className='transaction-form-title-container' onClick={handleFormToggle}>
                <p className='transaction-form-title'>Add a transaction</p>
                <i class={icon}></i>
            </div>
            <form id='transaction-form' className={hideStatus}>
                <input type='date' name='date' id='date' className='form-item'/>
                <textarea rows='4' placeholder='Add a description for the transaction' name='description' className='form-item'/>
                <select name='category' className='form-item'>
                    <option value='Food'>Food</option>
                </select>
                <input type='number' name='amount' placeholder='0' className='form-item'/>
                <input type='submit' value='Save' className='form-item'/>
            </form>
        </div>
    )
}

export default Form