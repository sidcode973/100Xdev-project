import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/Elon_musk.jpg";

const UserProfileCard = () => {
    return (
        <div className="upc">
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={profile_icon} alt="" />
                <div className="profile-title">Elon Musk</div>
                <div className="profile-description">
                    Elon Musk is a prominent entrepreneur and business magnate
                    known for his work in several high-profile companies,
                    including: <br />
                    1. Tesla, Inc.: An electric vehicle and clean energy company
                    where Musk serves as CEO and product architect. <br />
                    2. SpaceX: A private aerospace manufacturer and space
                    transportation company, founded by Musk, where he is CEO and
                    lead designer. <br />
                    3. Neuralink: A neurotechnology company developing
                    implantable brain–machine interfaces, co-founded by Musk.
                    <br />
                    4. The Boring Company: An infrastructure and tunnel
                    construction services company founded by Musk. <br />
                    5.OpenAI: An artificial intelligence research laboratory,
                    where Musk was a co-founder, although he is no longer
                    actively involved.
                </div>
                
                <div className="profile-button">
                    <a href="mailto:sidcode973@gmail.com">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;