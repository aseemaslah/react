import React from 'react'

const Signup = () => {
  return (
      <div>
          <h2>SignUp Form</h2>

          name:
          <input type="text" name="" id="" /><br /><br />
          email:
          <input type="email" name="" id="" /><br /><br />
          phone:
          <input type="number" name="" id="" /><br /><br />
          date of birth:
          <input type="date" name="" id="" /><br /><br />
          gender:
          <input type="radio" name="1" id="" />male
          <input type="radio" name="1" id="" />female
          <input type="radio" name="1" id="" />other <br /><br />
          create password:
          <input type="password" name="" id="" /><br /><br />
          re enter password:
          <input type="password" name="" id="" /><br /><br/>

          <input type="submit" value="submit" />
          <input type="submit" value="retry" />


        
    </div>
  )
}

export default Signup