export function timeRemaining(timeclear, day) {
  const deadlineTimestamp = timeclear + day * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const distance = deadlineTimestamp - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return days;
}
