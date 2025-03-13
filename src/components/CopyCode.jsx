import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Clipboard, Check } from "lucide-react";
import { Button } from "@material-tailwind/react";

export default function CopyCode({ code, language = "javascript" }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll(); 
    }, [code]);

    const copyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        } catch (err) {
        console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative w-full p-4 bg-gray-900 text-white rounded-lg">
        <pre className="overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 flex items-center gap-1 text-white bg-gray-700 hover:bg-gray-600"
            size="sm"
        >
            {copied ? <Check size={16} /> : <Clipboard size={16} />}
            {copied ? "Copied!" : "Copy"}
        </Button>
        </div>
    );
}