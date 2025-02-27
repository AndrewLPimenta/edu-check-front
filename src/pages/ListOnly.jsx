import React from "react";
import { useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import Header from "../components/Header";
import Presents from "../components/Presents";
import Footer from "../components/Footer";

export default function ListOnly() {
    const { setLoading } = useLoader(); 

    useEffect(() => {
        setLoading(true); 
        setTimeout(() => setLoading(false), 1000); 
      }, [setLoading]);

    return (
        <div>
            <Header />
            <Presents />
            <Footer />
        </div>
    );
}