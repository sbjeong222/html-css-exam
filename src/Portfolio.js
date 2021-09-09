import React, { Component } from "react";
import "./Protfolio.scss";
import "./Reset.scss";
import "./Common.scss";

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="profile_picture"></div>
                <div className="profile_content">
                    <section className="profile_header">
                        <div className="name">
                            반갑습니다 저는
                            <div className="job">
                                <ul className="job_list">
                                    <li> Tutor</li>
                                    <li> Developer</li>
                                </ul>
                            </div>
                            <h1>정재윤입니다</h1>
                        </div>
                        <p>
                            프론트엔드 개발자로 시작하여 풀스택 개발자로
                            성장하고 싶은 주니어 개발자 입니다. 빠르게 발전하는
                            IT 업계에서 호기심과 응용력을 기반으로 새로운 기술을
                            알아가는 것을 좋아하며, 더 나은 서비스를 위해 무엇을
                            해야하는지 늘 고민합니다. 또한 나 혼자 아는것에만
                            그치지 않고 그 지식을 공유하고 피드백을 나누는 것을
                            중요한 가치로 여깁니다.
                        </p>
                        <div className="social">
                            <a href="https://velog.io/@sbjeong222">Velog</a>
                            <a href="https://github.com/sbjeong222">Github</a>
                        </div>
                    </section>
                    <section className="profile_section">
                        <h2>Project Experience</h2>
                        <ul className="project_history">
                            <li>
                                <h3>1st</h3>
                                <p>Korea Green Data admin page coding</p>
                            </li>
                            <li>
                                <h3>2nd</h3>
                                <p>Market Kully site clone coding</p>
                            </li>
                            <li>
                                <h3>3rd</h3>
                                <p>Bang&Oufsen site clone coding</p>
                            </li>
                        </ul>
                    </section>
                    <section className="profile_section">
                        <h2>Skills</h2>
                        <ul className="skill_graph">
                            <li data-score="100%">
                                <h3>HTML+CSS</h3>
                            </li>
                            <li data-score="80%">
                                <h3>Git</h3>
                            </li>
                            <li data-score="50%">
                                <h3>Photoshop</h3>
                            </li>
                            <li data-score="40%">
                                <h3>Typography</h3>
                            </li>
                        </ul>
                    </section>
                    <section className="profile_section">
                        <h2>Contact</h2>
                        <ul className="contact_list">
                            <li>
                                Phone
                                <div>+82)1091591706</div>
                            </li>
                            <li>
                                Email
                                <div>sbjeong222@gmail.com</div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default Portfolio;
