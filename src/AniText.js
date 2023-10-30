import { useEffect, useState } from 'react';

const AniText=()=> {
  const content = 'If life is so blue, then select another colour from the rainbow';

  // Split the content into an array of characters
  const characters = content.split('');

  // Create an array of spans containing each character
  const elements = characters.map((char, i) => (
    <span key={i} style={{ opacity: 0 }}>{char}</span>
  ));

  const [displayedElements, setDisplayedElements] = useState([]);

  useEffect(() => {
    // When the component mounts, gradually display the characters
    elements.forEach((element, i) => {
      setTimeout(() => {
        setDisplayedElements(prev => [...prev, element]);
      }, 100 * i);
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <p>
      {displayedElements}
    </p>
  );
}

export default AniText;
