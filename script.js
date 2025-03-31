const cursor = document.getElementById("cursor");
const batteryLevel = document.getElementById("batteryLevel");

// Update cursor position
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Update battery level
navigator.getBattery().then((battery) => {
    function updateBatteryLevel() {
        const level = Math.floor(battery.level * 100);
        batteryLevel.textContent = `${level}%`;
    }
    updateBatteryLevel();
    battery.addEventListener("levelchange", updateBatteryLevel);
});
