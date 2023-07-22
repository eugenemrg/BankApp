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
                <p className='transaction-form-title'>Add New transaction</p>
                <i className={icon}></i>
            </div>
            <form id='transaction-form' className={hideStatus}>
                <label htmlFor='date'>Transaction Date</label>
                <input type='date' name='date' id='date' className='form-item' required/>
                <label htmlFor='description'>Transaction Description</label>
                <textarea rows='4' placeholder='Add a description for the transaction' name='description' className='form-item' required/>
                <label htmlFor='category'>Transaction Category</label>
                <select name='category' className='form-item' required>
                    <option value='none'>Category</option>
                </select>
                <label htmlFor='amount'>Transaction Amount</label>
                <input type='number' name='amount' placeholder='Enter amount' className='form-item' required/>
                <input type='submit' value='Save Transaction' className='form-item'/>
            </form>
        </div>
    )
}

export default Form