import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { TimeLeft } from "../types"

// const birthday = new Date(2025, 5, 12); // 2025年6月12日（JST）


const birthday: Date = new Date("2026-06-28T00:00:00");  //日本時間
// const birthday = new Date("2025-06-28T00:00:00"); //JSX


function MainSection(): JSX.Element {

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);
  const [isBirthdayToday, setIsBirthdayToday] = useState<boolean>(false);
  const [celebrated, setCelebrated] = useState<boolean>(false);


  function launchConfetti() {
    confetti({ particleCount: 300, angle: 60, spread: 100, origin: { x: 0, y: 0.5 }, colors: ['#ff69b4', '#ffd700', '#87cefa'] });
    confetti({ particleCount: 300, angle: 120, spread: 100, origin: { x: 1, y: 0.5 }, colors: ['#ff69b4', '#ffd700', '#87cefa'] });
    confetti({ particleCount: 600, angle: 90, spread: 200, startVelocity: 50, origin: { x: 0.5, y: 0 }, colors: ['#ff69b4', '#ffffff', '#ffd700'] });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now: Date = new Date();

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
        //当日だったらカウントダウン（1秒ごとのsetInterval）から抜けていい
        return;
      }

      const diff: number = birthday.getTime() - now.getTime();
      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
        //setTimeLeft({ days: days, hours: hours, minutes: minutes, seconds: seconds });  これと同じ意味！！
      } else {
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [celebrated]);  //useEffectの第二引数は、依存値。その値が変化したら再実行

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
        ) : <>読み込み中</>}
      </div>
    </div>
  );
}

export default MainSection;
