import { Header, ProgressBar, Container, Timer, Minutes, Seconds, Separator, Controllers, Button } from "./styles/App";
import { useState, useEffect } from 'react';
import GlobalStyles from "./styles/global";

export default function App() {
  const startTimeInSeconds = 60 * 25; // 25 minutos
  const [totalSeconds, setTotalSeconds] = useState(startTimeInSeconds);
  const [percentage, setPercentage] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;


  useEffect(() => {
    if (!isRunning) return;

    setTimeout(() => { updateSeconds() }, 1000)

    new Notification({ title: 'Timer', body: 'Timer is running' }).show();

    setPercentage((totalSeconds * 100 / startTimeInSeconds));

    function updateSeconds() {
      if (totalSeconds === 0) return restartTime();
      if (!isRunning) return;
      setTotalSeconds(totalSeconds - 1);
    }
  }, [totalSeconds, isRunning]);


  function toggleRunning() {
    setIsRunning(!isRunning);
  }

  function restartTime() {
    if (isRunning) setIsRunning(false);
    setTotalSeconds(startTimeInSeconds);
    setPercentage(100);
  }

  return (
    <>
      <GlobalStyles />
      <Header>
        <ProgressBar style={{ width: percentage + "%" }} />
      </Header>

      <Container>
        <Timer>
          <Minutes>{`${minutes}`.padStart(2, "0")}</Minutes>
          <Separator>:</Separator>
          <Seconds>{`${seconds}`.padStart(2, "0")}</Seconds>
        </Timer>

        <Controllers>
          <Button onClick={() => { restartTime() }} style={{ backgroundColor: "aqua" }} >Reiniciar</Button>
          <Button onClick={() => { toggleRunning() }} style={{ backgroundColor: isRunning ? "#ff0000" : "GREEN" }}>{totalSeconds === startTimeInSeconds ? "Iniciar" : isRunning ? "Pausar" : "Continuar"}</Button>
        </Controllers>
      </Container>
    </>
  );
};
