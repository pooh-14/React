import React from 'react'

const FormSinglestate = () => {
  return (
    <div>
        <form>
          <label>Name:</label><br/>
          <input type='text'/><br/>
          <label>Email:</label><br/>
          <input type='email'/><br/>
          <label>Password:</label><br/>
          <input type='password'/><br/>
          <input type='submit' value='Register'/>
        </form>
    </div>
  );
};

export default FormSinglestate;