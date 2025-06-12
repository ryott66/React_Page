// import { useEffect, useRef } from 'react';
import { useRef, useState } from 'react';

function Footer(): JSX.Element {
  const [animating, setAnimating] = useState(false);  //animation中の多重クリック防止
  const heartRef = useRef<HTMLElement>(null); // i 要素を参照

  const handleHeartClick = () => {
    if (animating || !heartRef.current) return; //pass

    setAnimating(true);
    heartRef.current.classList.add("bigheart");
    setTimeout(() => heartRef.current?.classList.remove("bigheart"), 200);

    const stopId = setInterval(() => {
      heartRef.current?.classList.add("bigheart");
      setTimeout(() => heartRef.current?.classList.remove("bigheart"), 200);
    }, 600);

    setTimeout(() => {
      clearInterval(stopId);
      setAnimating(false);
    }, 1200);
  };

  return (
    <footer>
      <div className="footer-left">
        <i
          id = "heart"
          ref={heartRef}
          className="fa-solid fa-heart"
          onClick={handleHeartClick}
        ></i>
      </div>
      <div className="footer-right">
        大好きなれみちゃん、いつもありがとう😄
      </div>
      <p className="footer-end">Created by Ryo</p>
    </footer>
  );
}

export default Footer;



//useRefでaddEventListner版　

// function Footer(): JSX.Element {   
//   const heartRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const heart = heartRef.current;
//     if (!heart) return;

//     const handleClick = () => {
//       heart.classList.add("bigheart");
//       setTimeout(() => heart.classList.remove("bigheart"), 200);

//       const stopId = setInterval(() => {
//         heart.classList.add("bigheart");
//         setTimeout(() => heart.classList.remove("bigheart"), 200);
//       }, 600);

//       setTimeout(() => clearInterval(stopId), 1200);
//     };

//     heart.addEventListener("click", handleClick);

//     return () => {
//       heart.removeEventListener("click", handleClick); //クリーンアップ
//     };
//   }, []);

//   return (
//     <footer>
//       <div className="footer-left">
//         <i ref={heartRef} id="heart" className="fa-solid fa-heart"></i>
//       </div>
//       <div className="footer-right">
//         大好きなれみちゃん、いつもありがとう😄
//       </div>
//       <p className="footer-end">
//         Created by Ryo
//       </p>
//     </footer>
//   );
// }

// export default Footer;
