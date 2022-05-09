import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="about-img">
                    <div className="img">
                        <img src="https://i.ibb.co/L9smQwz/warehouse.jpg" alt="" />
                    </div>
                </div>
                <div className="about-text">
                    <h2>
                        At Ryder, we're transforming warehouses & distribution centers to drive value and customer satisfaction.
                    </h2>
                    <p>
                        Get ahead of challenges with flexible warehousing and distribution solutions to meet your customers’ demands. At Ryder, our industry-leading solutions include dedicated and multiclient warehousing, process engineering for continuous improvement, facility design, equipment, labor management, automation technology, and visibility tools to help you improve efficiency and optimize your operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;