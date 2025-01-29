// Function to display the current UTC time
function updateCurrentTime() {
    const currentTime = new Date().toISOString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${currentTime}`;
  }
  
  // Update time on page load
  updateCurrentTime();
  
  // Optionally, you could set an interval to update the time every minute
  setInterval(updateCurrentTime, 60000);
  