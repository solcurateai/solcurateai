import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react'

const TypewriterEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {

        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(timer); // Stop the interval when done
            }
        }, speed);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [text, speed]);

    return (
        <div>
            <ReactMarkdown>
                {displayedText || ''}
            </ReactMarkdown>
            <span className="cursor"></span>
        </div>
    );
};

export default TypewriterEffect;
