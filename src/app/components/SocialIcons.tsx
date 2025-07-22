import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="flex justify-center space-x-4 mb-6">
            <a href="/SubToCOTL" aria-label="Subscribe to Comedy on the Loose YouTube channel"><FaYoutube size={24} /></a>
            <a href="/insta" aria-label="Follow Comedy on the Loose on Instagram"><FaInstagram size={24} /></a>
            <a href="/facebook" aria-label="Follow Comedy on the Loose on Facebook"><FaFacebook size={24} /></a>
            <a href="/twitter" aria-label="Follow Comedy on the Loose on Twitter"><FaTwitter size={24} /></a>
        </div>
    );
}