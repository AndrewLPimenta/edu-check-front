import React from "react";
import Header from "../components/Header";
import Presents from "../components/Presents";
import Footer from "../components/Footer";

export default function ListOnly() {
    return (
        <div>
            <Header />
            <Presents />
            <Footer />
        </div>
    );
}