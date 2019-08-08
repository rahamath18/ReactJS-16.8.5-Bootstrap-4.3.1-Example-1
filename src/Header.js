import React from 'react';
import logo from './images/profpic.jpg';

class Header extends React.Component {
   render() {
      return (
		  <div>		    
		    <AboutMyself></AboutMyself>
		    <img src={logo} alt="logo" />
		    <div>
		        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="home.html">HOME</a>
      		    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  		<a href="#">ABOUT</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">PRODUCTS</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">SERVICES</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		        <a href="#">DOWNLOADS</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		        <a href="#">CUSTOMERS</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		        <a href="#">CONTACTS</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		        <a href="#">SIGN IN</a>
			</div>
         </div>
		 
      );
   }
}

class AboutMyself extends React.Component {
   render() {
	  var myStyle = {
         fontSize: 15,
	     textAlign: "right"
      }
      return (
         <div style={myStyle}>
            <u>Rahamath S</u> - <a href = "mailto:rahamath18@yahoo.com?subject = Feedback&body = Message">rahamath18@yahoo.com</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
      );
   }
}

export default Header;