import React from "react";
import { useParams } from "react-router-dom";

const Home: React.FC = () => {
    const { username } = useParams();

    return (
        <div>
            <h1>{username}'s resume</h1>
        </div>
    )
}

export default Home;