import React from 'react';

function Header(): JSX.Element {

  const handleSmoothMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');  //リンク取得（#memories等）
    if (!href) return;

    const target = document.querySelector(href);   //リンクからDOM取得
    if (!(target instanceof HTMLElement)) return; // 型チェック

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY - 80; // ヘッダー分オフセット
    const distance = endY - startY;
    const duration = 1200;   // ← ミリ秒でスクロール時間を自由に設定（例：1000 = 1秒）
    let startTime: number | null = null;


    function easeInOutQuad(t: number): number {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    //requestAnimationFrameの引数になるが、この関数内でまたrequestAnimationFrameを呼ぶことでコマ送りでアニメーションを作成
    function scrollStep(timestamp: number) {  //timestampは、実行時はブラウザが自動で呼ぶ。今は引数名
      if (startTime === null) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutQuad(percent));
      if (progress < duration) requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
  };



  return (

    <header>
      <div className="header-left">
        <a href="#first" className="fa-solid fa-cake-candles cake-icon" onClick={handleSmoothMove}></a>
      </div>
      <nav>
        <a href="#countdown" className="header-btn" onClick={handleSmoothMove}>Countdown</a>
        <a href="#memories" className="header-btn" onClick={handleSmoothMove}>Memories</a>
        <a href="#trip" className="header-btn" onClick={handleSmoothMove}>Date</a>
      </nav>
      <div className="header-right">
        <a href="#first" onClick={handleSmoothMove}>Remina's Birthday</a>
      </div>
    </header>
  );
}

export default Header;
