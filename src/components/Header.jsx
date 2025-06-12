import React from 'react';

function Header() {
  return (

    <header>
        <div className="header-left">
            <a href="#first" class="fa-solid fa-cake-candles cake-icon"></a>
        </div>
        <nav>
            <a href="#countdown" className="header-btn">Countdown</a>
            <a href="#memories" className="header-btn">Memories</a>
            <a href="#trip" className="header-btn">Date</a>
        </nav>
        <div className="header-right">
            <a href="#first">Remina's Birthday</a>
        </div>
    </header>
  );
}

export default Header;
