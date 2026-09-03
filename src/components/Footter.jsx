import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react"; // social icons

const Footer = () => {
    return (
        <>
            <hr className="mt-8 border-amber-200/30" />
            <footer className="py-10 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 mt-12">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        {/* <h1 className="text-xl font-bold text-amber-200"> imgTaskFlow</h1> */}

                        <img
                            src="/taskflow.png"
                            alt="TaskFlow Logo"
                            className="h-16 w-16  ml-12  object-contain drop-shadow-lg"
                        />

                        <p className="text-sm text-white/60 mt-1">
                            Organize • Focus • Achieve
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex gap-6 text-sm text-white/70">
                        <a href="#features" className="hover:text-amber-200 transition">Features</a>
                        <a href="#pricing" className="hover:text-amber-200 transition">Pricing</a>
                        <a href="#about" className="hover:text-amber-200 transition">About</a>
                        <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-white/70">
                        <a href="https://github.com/alokprajapati30" target="_blank" rel="noreferrer">
                            <Github className="w-5 h-5 hover:text-amber-200 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/alok-prajapati-21404a2a7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
                            <Linkedin className="w-5 h-5 hover:text-amber-200 transition" />
                        </a>
                        <a href="https://x.com/AlokPrajapati03" target="_blank" rel="noreferrer">
                            <Twitter className="w-5 h-5 hover:text-amber-200 transition" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-xs text-white/50">
                    © {new Date().getFullYear()} TaskFlow. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
