import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Police Department</h1>
            <p>Your safety is our priority. We are here to serve and protect.</p>
            <h2>Featured Services</h2>
            <ul>
                <li>Emergency Services</li>
                <li>Community Outreach</li>
                <li>Crime Reporting</li>
                <li>Public Safety Tips</li>
            </ul>
        </div>
    );
};

export default Home;