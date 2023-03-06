import { useEffect } from 'react';

//Cursor Idea, put in a form that has the value set as so that the cursor would change based on the user form input.


const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    
    if (!cursor || !cursor2) {
      return;
    }
    
    document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px;`);
      cursor2.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px;`);
      
    });
  }, []);


  return (
    <div>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
};

export default Cursor;