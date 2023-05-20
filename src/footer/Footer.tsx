import React, { HTMLAttributes } from "react";
import { styled } from "goober";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  companyName: string;
  year: number;
}
interface SecondFooter extends HTMLAttributes<HTMLDivElement> {
  companyName: string;
  year: number;
  links: { label: string; url: string }[];
}
interface ThirdFooter extends HTMLAttributes<HTMLDivElement> {
  companyName: string;
  year: number;
  links: { label: string; url: string }[];
}

const StyledFooter = styled("footer")`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;
const FooterSection = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const FooterLink = styled("a")`
  cursor: pointer;
  color: #333;
  text-decoration: none;
  margin-right: 10px;
`;

export const Footer: React.FC<FooterProps> = ({ companyName, year, ...rest }) => {
  return (
    <StyledFooter {...rest}>
      <div>
        &copy; {year} {companyName}
      </div>
    </StyledFooter>
  );
};

export const SecondFooter: React.FC<SecondFooter> = ({ companyName, year, links, ...rest }) => {
  return (
    <StyledFooter {...rest}>
      <div>&copy; {year} {companyName}</div>
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.url}>{link.label}</a>
        ))}
      </div>
    </StyledFooter>
  );
};


export const ThirdFooter: React.FC<FooterProps> = ({ companyName, year }) => {
  const links = [
    { label: "Careers", url: "/careers" },
    { label: "Blog", url: "/blog" },
    { label: "Terms of Service", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <StyledFooter>
      <FooterSection>
        <div>© {year} {companyName}</div>
        <div>
          {links.map((link, index) => (
            <FooterLink key={index} href={link.url}>{link.label}</FooterLink>
          ))}
        </div>
      </FooterSection>
    </StyledFooter>
  );
};