import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import { useLoader } from "../context/LoaderContext";
import "../styles/profilePages.css";


export default function Profile() {
    const { setLoading } = useLoader(); 
    useEffect(() => {
        setLoading(true); // 
        setTimeout(() => setLoading(false), 1000); // 
      }, [setLoading]); 

    return (
        <main>
            <Header />
            <div className="line">
                <h1>Meu Perfil</h1>
                <span></span>
            </div>
            <div className="profile">
                <UserProfile />
            </div>
            <Footer></Footer>
        </main>
    );
}