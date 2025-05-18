function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // 12-hour format (optional)
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Update the clock element
    clockElement.innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call updateClock to set the initial time
updateClock();
const clockContainer = document.getElementById('clock-container');
const clock = document.getElementById('clock');
const infoP = document.createElement('p');
infoP.textContent = "klik aku jika ingin kembali";
infoP.style.color = "#03fa6e";
infoP.style.marginTop = "8px";
infoP.style.cursor = "pointer";
infoP.onclick = function() {
    window.location.href = "index.html";
};
clockContainer.appendChild(infoP);