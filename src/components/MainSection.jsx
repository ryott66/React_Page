import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

// const birthday = new Date(2025, 5, 12); // 2025年6月12日（JST）
const birthday = new Date("2025-06-28T00:00:00"); //日本時間


function MainSection() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  const [celebrated, setCelebrated] = useState(false);

  function launchConfetti() {
    confetti({ particleCount: 300, angle: 60, spread: 100, origin: { x: 0, y: 0.5 }, colors: ['#ff69b4', '#ffd700', '#87cefa'] });
    confetti({ particleCount: 300, angle: 120, spread: 100, origin: { x: 1, y: 0.5 }, colors: ['#ff69b4', '#ffd700', '#87cefa'] });
    confetti({ particleCount: 600, angle: 90, spread: 200, startVelocity: 50, origin: { x: 0.5, y: 0 }, colors: ['#ff69b4', '#ffffff', '#ffd700'] });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const isToday = (
        now.getFullYear() === birthday.getFullYear() &&
        now.getMonth() === birthday.getMonth() &&
        now.getDate() === birthday.getDate()
      );

      if (isToday) {
        setIsBirthdayToday(true);
        setTimeLeft(null);
        if (!celebrated) {
          launchConfetti();
          setCelebrated(true);
        }
        return;
      }

      const diff = birthday - now;
      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [celebrated]);

  return (
    <div className="main">
      <h1 id="first">Ryo & Remina</h1>

      <div id="countdown">
        {isBirthdayToday ? (
          <>
            🎉 <span className="birthday-script">Happy Birthday</span> 🎉<br />
            <span className="birthday-script">　 Remina</span>
            <span className="birthday-num">23</span>
          </>
        ) : timeLeft ? (
          <>
            Countdown to Birthday:<br />
            <span className="cdtime">
              {timeLeft.days} days {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default MainSection;
