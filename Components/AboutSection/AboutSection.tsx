import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GiCompanionCube } from "react-icons/gi";


const AboutSection = () => {
    return (
        <section id="about-section">
            <div className="about-left mb-5 lg:mb-0" data-aos="fade-left" data-aos-duration="3000">
                <img
                    src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=740&t=st=1682548746~exp=1682549346~hmac=481f8388d755d4f75989be6ea31f8f7ffd2e92e25b89b8f5328fcea0f5f6be91"
                    alt="About Img"
                />
            </div>

            <div className="my-10 lg:my-0 about-right" data-aos="fade-right" data-aos-duration="3000">
                <h1 className="text-secondary font-bold mt-10 lg:mt-0">About Us</h1>
                <p>
                    We are a small editorial group housed at the Programming Hero in
                    Dhaka, Bangladesh. Our collaborators include publishers, legal
                    scholars, computer scientists, government agencies, and other groups
                    and individuals that promote open access to law, worldwide. We are
                    supported by private donations, corporate sponsorships, and our
                    parent institution, the Programming Hero.
                </p>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <GiCompanionCube />
                            </span>
                            <p>Address</p>
                            <span className="saprater">:</span>
                            <p>Bonani, Dhaka, Bangladesh.</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <FiPhoneCall />
                            </span>
                            <p>Phone No</p>
                            <span className="saprater">:</span>
                            <p>+8801727951592</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <AiOutlineMail />
                            </span>
                            <p>Email ID</p>
                            <span className="saprater">:</span>
                            <p>teamwork@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default AboutSection;