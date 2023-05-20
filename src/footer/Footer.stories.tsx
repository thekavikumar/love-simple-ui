import React from "react";
import { Footer, SecondFooter,ThirdFooter } from "./Footer";



export const simpleFooter: React.FC = () => {
    const companyName = "My Company";
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <Footer companyName={companyName} year={currentYear} />
        </div>
    );
};

export const linkFooter: React.FC = () => {
    const companyName = "My Company";
    const currentYear = new Date().getFullYear();
    const links = [
        { label: "Link 1", url: "https://example.com/link1" },
        { label: "Link 2", url: "https://example.com/link2" },
        { label: "Link 3", url: "https://example.com/link3" },
    ];

    return (
        <div>
            <SecondFooter links={links} companyName={companyName} year={currentYear} />

        </div>

    )
};
export const AdditonalFooter: React.FC = () => {
    const companyName = "My Company";
    const currentYear = new Date().getFullYear();
    const links = [
        { label: "Careers", url: "https://example.com/careers" },
        { label: "Blog", url: "https://example.com/blog" },
        { label: "Terms of Service", url: "https://example.com/terms-of-service" },
        { label: "Privacy Policy", url: "https://example.com/privacy-policy" },
    ];
    return(
        <div>
            <ThirdFooter  companyName={companyName} year={currentYear} />
        </div>
    )

};



