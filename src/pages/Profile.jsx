import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import "../styles/profilePages.css";


export default function Profile() {
    return (
        <main>
            <Header />
            <div className="profile">
                <UserProfile />
            </div>
        </main>
    );
}