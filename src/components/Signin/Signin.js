import React from 'react';
import Navbar from '../Navbar/Navbar';


const Signin =()=>{
    return (
        <div>
          <Navbar/>
        <main className="pa4 white-80">
         <form className="measure center">
         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
     </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--white bg-white grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim white db">Sign up</a>
      <a href="#0" className="f6 link dim white db">Forgot your password?</a>
    </div>
    </form>
    </main>
        </div>
    )

}

export default Signin;