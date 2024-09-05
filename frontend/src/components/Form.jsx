import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const isValidName = name.length > 5;
    const isValidEmail = email.includes("@") && email.includes(".com");

    function signUpUpser(e) {
        e.preventDefault();

        if(isValidName && isValidEmail) {
            setIsError(false);
            setShowCard(true);
        } else{ 
            setIsError(true)
        }
    }

    const onNameChange = (e) => {
        resetValidationStates();
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        resetValidationStates();
        setEmail(e.target.value);
    }

    const resetValidationStates = () => {
        setShowCard(false);
        setIsError(false);
    }
  return (
    <>
          <div className='error'>{isError && <p style={{color:'red'}}>Error, please, try again!</p>}</div>
      <form onSubmit={signUpUpser}>
        <div>
            <input className={styles.input}
             type="text"
             placeholder='Name'
             value={name}
             onChange={onNameChange}
             onFocus={resetValidationStates} 
             />
        </div>
        <div>
            <input className={styles.input}
            type="text"
            placeholder='Email'
            value={email}
            onChange={onChangeEmail}
            onFocus={resetValidationStates} />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
      {showCard && (
        <div className={styles.card}>
            <div>Thank you {name}!!, we'll contact you by email!!! </div>
        </div>
      )}
    </>
  )
}

export default Form
