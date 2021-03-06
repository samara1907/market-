import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';

const AboutPage = ()=>{
    return(
        <div>
            <Navbar/>
            <div class="wrapper row2">
                     <div id="container" class="clear">
                 <div id="about-us" class="clear">
                <section id="about-intro" class="clear">
                    <div class="three_fifth first"><img class="imgholder" src="images/demo/548x430.gif" alt=""/></div>
                    <div class="two_fifth">
                    <h2>Vivamuslibero Auguer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h2>Vivamuslibero Auguer</h2>
                    <ul>
                        <li>Aliquam venenatis leo et orci.</li>
                        <li>Pellentesque eleifend vulputate massa.</li>
                        <li>Vivamus eleifend sollicitudin eros.</li>
                        <li>Maecenas vitae nunc.</li>
                        <li>Ut pretium odio eu nisi.</li>
                        <li>Nam condimentum mi id magna.</li>
                        <li>Pellentesque consectetuer, felis vel rhoncus.</li>
                    </ul>
                    </div>
                </section>
                <section id="client_logos">
                    <ul class="clear">
                    <li class="one_fifth first"><img src="images/demo/logo.gif" alt=""/></li>
                    <li class="one_fifth"><img src="images/demo/logo.gif" alt=""/></li>
                    <li class="one_fifth"><img src="images/demo/logo.gif" alt=""/></li>
                    <li class="one_fifth"><img src="images/demo/logo.gif" alt=""/></li>
                    <li class="one_fifth"><img src="images/demo/logo.gif" alt=""/></li>
                    </ul>
                </section>
                <section id="team">
                    <h2>Vivamuslibero Auguer</h2>
                    <ul class="clear">
                    <li class="one_quarter first">
                        <figure><img src="images/demo/team-member.gif" alt=""/>
                        <figcaption>
                            <p class="team_name">Name Goes Here</p>
                            <p class="team_title">Job Title Here</p>
                        </figcaption>
                        </figure>
                    </li>
                    <li class="one_quarter">
                        <figure><img src="images/demo/team-member.gif" alt=""/>
                        <figcaption>
                            <p class="team_name">Name Goes Here</p>
                            <p class="team_title">Job Title Here</p>
                        </figcaption>
                        </figure>
                    </li>
                    <li class="one_quarter">
                        <figure><img src="images/demo/team-member.gif" alt=""/>
                        <figcaption>
                            <p class="team_name">Name Goes Here</p>
                            <p class="team_title">Job Title Here</p>
                        </figcaption>
                        </figure>
                    </li>
                    <li class="one_quarter">
                        <figure><img src="images/demo/team-member.gif" alt=""/>
                        <figcaption>
                            <p class="team_name">Name Goes Here</p>
                            <p class="team_title">Job Title Here</p>
                        </figcaption>
                        </figure>
                    </li>
                    </ul>
                </section>
                </div>
            </div>
            </div>
        </div>
    )
}


export default AboutPage;