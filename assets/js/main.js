const countdown = document.querySelector("[data-countdown]");

if (countdown instanceof HTMLElement) {
  const eventDate = countdown.dataset.eventDate;

  if (eventDate) {
    const targetTime = new Date(eventDate).getTime();

    if (Number.isNaN(targetTime)) {
      countdown.textContent = "Event date to be announced";
    } else {
      let timer;

      const updateCountdown = () => {
        const remaining = targetTime - Date.now();

        if (remaining <= 0) {
          countdown.textContent = "The celebration has begun.";
          window.clearInterval(timer);
          return;
        }

        const days = Math.floor(remaining / 86_400_000);
        const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
        const minutes = Math.floor((remaining % 3_600_000) / 60_000);
        const seconds = Math.floor((remaining % 60_000) / 1_000);
        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      };

      timer = window.setInterval(updateCountdown, 1_000);
      updateCountdown();
    }
  }
}
