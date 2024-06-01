import React from "react";
import './skills.css';
import UIdesign from '../../assets/UIdesign.jpeg';
import AppDesign from '../../assets/AppDesign.jpeg';
import WebDesign from '../../assets/WebDesign.jpeg';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc"> I am a skilled and passionate web designer with experience in creating visually appealing and user-frriendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS,and javascript, as well as design software such as Adobe Photoshopand Illuatrator. </span>
            <diiv className="skillBars">
                <div className="skillBar">
                    <img src={UIdesign} alt="UIdesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a Demo text, you can write</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Site Designer</h2>
                        <p>This is a Demo text,</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Designer</h2>
                        <p>This is a Demo text,</p>
                    </div>
                </div>
            </diiv>
        </section>
    )
}

export default Skills;