import React from 'react'

function Form() {
    return (
        <div>
            <div className='transaction-form-title-container'>
                <p className='transaction-form-title'>Add a transaction</p>
                <i className='transaction-form-title-logo'></i>
            </div>
            <form id='transaction-form'>
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