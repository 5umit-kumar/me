let viewMode = 'week';
let anchorDate = new Date();
const TARGET_HOURS = 6;
let shuffleCount = 3;
let activePunishments = JSON.parse(localStorage.getItem('studySyncPunishments')) || [];

const punishments = [
    "No YouTube today",
    "No Instagram today",
    "No Reels/Shorts today",
    "Add 30min more study tomorrow",
    "Clean your entire desk",
    "Strict 2hr screen time today",
    "No junk food for 24h",
    "Take a cold shower",
    "Go to sleep by 10 PM",
    "Write 'I will study' 50 times",
    "No gaming for 24 hours",
];

const userNameDisplay = document.getElementById('userNameDisplay');
const dateRangeLabel = document.getElementById('dateRangeLabel');
const currentTag = document.getElementById('currentTag');
const studyForm = document.getElementById('studyForm');
const dateInput = document.getElementById('dateInput');
const hourInput = document.getElementById('hourInput');
const minuteInput = document.getElementById('minuteInput');
const totalHoursEl = document.getElementById('totalHours');
const avgHoursEl = document.getElementById('avgHours');
const daysMetEl = document.getElementById('daysMet');
const chartTitle = document.getElementById('chartTitle');
const avgLabel = document.getElementById('avgLabel');
const totalLabel = document.getElementById('totalLabel');
const progressCircle = document.getElementById('progressCircle');
const percentLabel = document.getElementById('percentLabel');
const targetMessage = document.getElementById('targetMessage');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMessage');

const punishmentAlertModal = document.getElementById('punishmentAlertModal');
const punishmentDetailModal = document.getElementById('punishmentDetailModal');
const punishmentText = document.getElementById('punishmentText');
const shuffleBtn = document.getElementById('shuffleBtn');
const shuffleCountEl = document.getElementById('shuffleCount');
const punishmentListContainer = document.getElementById('punishmentListContainer');
const emptyPunishmentMsg = document.getElementById('emptyPunishmentMsg');
const punishmentBadge = document.getElementById('punishmentBadge');

let chart;
let currentDataPoints = [];
let currentLabels = [];

function init() {
    loadUser();
    dateInput.valueAsDate = new Date();
    initChart();
    refreshDashboard();
    renderPunishments();
}

function loadUser() {
    const savedName = localStorage.getItem('studySyncUser') || 'Alex';
    userNameDisplay.textContent = savedName;
}

function changeName() {
    const newName = prompt("Enter your name:", userNameDisplay.textContent);
    if (newName && newName.trim()) {
        localStorage.setItem('studySyncUser', newName.trim());
        userNameDisplay.textContent = newName.trim();
    }
}

function setViewMode(mode) {
    viewMode = mode;
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.id.startsWith(mode)) btn.classList.add('active');
    });
    
    chartTitle.textContent = mode === 'week' ? 'Weekly Activity' : 'Monthly Activity';
    avgLabel.textContent = mode === 'week' ? 'Avg. Study' : 'Monthly Avg';
    totalLabel.textContent = mode === 'week' ? 'Total Focus' : 'Month Focus';

    refreshDashboard();
}

function navigateDate(direction) {
    if (viewMode === 'week') {
        anchorDate.setDate(anchorDate.getDate() + (direction * 7));
    } else {
        anchorDate.setMonth(anchorDate.getMonth() + direction);
    }
    refreshDashboard();
}

function getDailyData(date) {
    const key = `study_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return parseFloat(localStorage.getItem(key)) || 0;
}

function saveDailyData(dateStr, hours) {
    const date = new Date(dateStr);
    const key = `study_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    localStorage.setItem(key, hours);
}

function refreshDashboard() {
    let labels = [];
    let dataPoints = [];
    let displayLabel = "";
    let isCurrent = false;
    const today = new Date();

    if (viewMode === 'week') {
        const day = anchorDate.getDay();
        const diff = anchorDate.getDate() - day + (day === 0 ? -6 : 1);
        const startOfWeek = new Date(anchorDate);
        startOfWeek.setDate(diff);
        startOfWeek.setHours(0,0,0,0);

        for (let i = 0; i < 7; i++) {
            const d = new Date(startOfWeek);
            d.setDate(startOfWeek.getDate() + i);
            labels.push(d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }));
            dataPoints.push(getDailyData(d));
        }
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        displayLabel = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;
        if (today >= startOfWeek && today <= endOfWeek) isCurrent = true;
    } else {
        const year = anchorDate.getFullYear();
        const month = anchorDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const d = new Date(year, month, i);
            labels.push(i);
            dataPoints.push(getDailyData(d));
        }
        displayLabel = anchorDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        if (today.getMonth() === month && today.getFullYear() === year) isCurrent = true;
    }

    currentLabels = labels;
    currentDataPoints = dataPoints;
    dateRangeLabel.textContent = displayLabel;
    isCurrent ? currentTag.classList.remove('hidden') : currentTag.classList.add('hidden');

    updateStats(dataPoints);
    updateChart(labels, dataPoints);
    updateTodayProgress();
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
}

function updateStats(data) {
    const total = data.reduce((a, b) => a + b, 0);
    const avg = total / data.length;
    const metCount = data.filter(h => h >= TARGET_HOURS).length;

    totalHoursEl.textContent = total.toFixed(1);
    avgHoursEl.textContent = avg.toFixed(1);
    daysMetEl.textContent = metCount;
}

function updateTodayProgress() {
    const today = new Date();
    const hours = getDailyData(today);
    const percentage = Math.min(100, (hours / TARGET_HOURS) * 100);
    
    const circumference = 534;
    const offset = circumference - (percentage / 100) * circumference;
    
    progressCircle.style.strokeDashoffset = offset;
    percentLabel.textContent = `${Math.round(percentage)}%`;

    if (hours === 0) targetMessage.textContent = "Your potential is waiting for today.";
    else if (hours < TARGET_HOURS) targetMessage.textContent = `${(TARGET_HOURS - hours).toFixed(1)}h remaining to achieve balance.`;
    else targetMessage.textContent = "Daily standard surpassed. Outstanding discipline. 🏆";
}

function initChart() {
    const ctx = document.getElementById('studyChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Hours Studied',
                    data: [],
                    borderColor: '#6366f1',
                    borderWidth: 4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#6366f1',
                    pointBorderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.45,
                    fill: true,
                    backgroundColor: gradient,
                },
                {
                    label: 'Target',
                    data: [],
                    borderColor: 'rgba(79, 70, 229, 0.2)',
                    borderDash: [6, 6],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0f172a',
                    padding: 16,
                    titleFont: { size: 11, weight: 'bold' },
                    bodyFont: { size: 13, weight: '900' },
                    cornerRadius: 12,
                    displayColors: false,
                    callbacks: { label: (ctx) => `${ctx.raw.toFixed(1)} HOURS` }
                }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    ticks: { font: { size: 10, weight: '700' }, color: '#94a3b8', padding: 10 },
                    grid: { color: '#f1f5f9', drawBorder: false }
                },
                x: { 
                    ticks: { font: { size: 10, weight: '700' }, color: '#94a3b8', padding: 10 },
                    grid: { display: false } 
                }
            }
        }
    });
}

function updateChart(labels, data) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[1].data = Array(labels.length).fill(TARGET_HOURS);
    chart.options.scales.y.max = Math.max(8, ...data) + 1;
    chart.update();
}

async function exportDataToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
    const userName = userNameDisplay.textContent;
    const range = dateRangeLabel.textContent;
    const total = totalHoursEl.textContent + " HRS";
    const avg = avgHoursEl.textContent + " HRS";
    const goals = daysMetEl.textContent + " DAYS";

    doc.setFillColor(15, 23, 42); 
    doc.rect(0, 0, 595, 140, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text("StudySync Analytics", 40, 70);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    doc.text(`DATE GENERATED: ${new Date().toLocaleString().toUpperCase()}`, 40, 95);
    doc.text(`STUDENT PROFILE: ${userName.toUpperCase()}`, 40, 110);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(`Review Period: ${range}`, 40, 185);

    doc.setFillColor(248, 250, 252); 
    doc.roundedRect(40, 200, 515, 80, 12, 12, 'F');

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text("TOTAL TIME", 70, 230);
    doc.text("DAILY AVERAGE", 240, 230);
    doc.text("SUCCESS RATE", 410, 230);

    doc.setFontSize(22);
    doc.setTextColor(79, 70, 229); 
    doc.text(total, 70, 260);
    doc.text(avg, 240, 260);
    doc.setTextColor(16, 185, 129); 
    doc.text(goals, 410, 260);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Activity Breakdown", 40, 315);

    const tableRows = currentLabels.map((label, index) => {
        const hours = currentDataPoints[index];
        const status = hours >= TARGET_HOURS ? "SUCCESS" : "INCOMPLETE";
        return [label, `${hours.toFixed(1)} HRS`, status];
    });

    doc.autoTable({
        startY: 330,
        head: [['SESSION DATE', 'HOURS LOGGED', 'GOAL STATUS']],
        body: tableRows,
        theme: 'grid',
        headStyles: { 
            fillColor: [15, 23, 42], 
            fontSize: 10,
            halign: 'center',
            cellPadding: 10
        },
        columnStyles: {
            0: { cellWidth: 200, halign: 'left' },
            1: { halign: 'center', cellWidth: 150 },
            2: { halign: 'center' }
        },
        styles: { fontSize: 9, cellPadding: 8, font: 'helvetica' },
        didDrawCell: (data) => {
            if (data.section === 'body' && data.column.index === 2) {
                if (data.cell.raw === "SUCCESS") {
                    doc.setTextColor(16, 185, 129);
                } else {
                    doc.setTextColor(239, 68, 68);
                }
            }
        }
    });

    const finalY = doc.lastAutoTable.finalY + 50;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Accountability Log", 40, finalY);

    const punishmentRows = activePunishments.map(p => [
        p.date.toUpperCase(), 
        p.text.toUpperCase(), 
        p.done ? "RESOLVED" : "ACTIVE"
    ]);

    if (punishmentRows.length > 0) {
        doc.autoTable({
            startY: finalY + 20,
            head: [['ASSIGNED', 'CONSEQUENCE', 'CURRENT STATUS']],
            body: punishmentRows,
            theme: 'striped',
            headStyles: { fillColor: [239, 68, 68] },
            styles: { fontSize: 8 }
        });
    } else {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(148, 163, 184);
        doc.text("Integrity maintained. No active penalties recorded.", 40, finalY + 35);
    }

    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text(`PAGE ${i} OF ${pageCount}`, 500, 810);
        doc.text("STUDYSYNC PERFORMANCE REPORT - SYSTEM GENERATED", 40, 810);
    }

    doc.save(`StudySync_${userName}_Report.pdf`);
    showToast("PDF REPORT GENERATED");
}

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-32', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.add('translate-y-32', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}

function showPunishmentDetails() {
    punishmentAlertModal.classList.remove('show');
    punishmentDetailModal.classList.add('show');
    shuffleCount = 3;
    shuffleCountEl.textContent = shuffleCount;
    shuffleBtn.disabled = false;
    shuffleBtn.classList.remove('opacity-50');
    generateRandomPunishment();
}

function generateRandomPunishment() {
    const randomIndex = Math.floor(Math.random() * punishments.length);
    punishmentText.textContent = punishments[randomIndex];
}

function shufflePunishment() {
    if (shuffleCount > 0) {
        shuffleCount--;
        shuffleCountEl.textContent = shuffleCount;
        generateRandomPunishment();
        if (shuffleCount === 0) {
            shuffleBtn.disabled = true;
            shuffleBtn.classList.add('opacity-50');
        }
    }
}

function acceptPunishment() {
    const punText = punishmentText.textContent;
    const newPunishment = {
        id: Date.now(),
        text: punText,
        done: false,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
    };
    activePunishments.unshift(newPunishment); 
    savePunishments();
    renderPunishments();
    closeModals();
    showToast("CONSEQUENCE ADDED");
}

function savePunishments() {
    localStorage.setItem('studySyncPunishments', JSON.stringify(activePunishments));
}

function togglePunishment(id) {
    const index = activePunishments.findIndex(p => p.id === id);
    if (index !== -1) {
        activePunishments[index].done = !activePunishments[index].done;
        savePunishments();
        renderPunishments();
    }
}

function removePunishment(id) {
    activePunishments = activePunishments.filter(p => p.id !== id);
    savePunishments();
    renderPunishments();
}

function renderPunishments() {
    const items = punishmentListContainer.querySelectorAll('.punishment-item');
    items.forEach(item => item.remove());

    if (activePunishments.length === 0) {
        emptyPunishmentMsg.classList.remove('hidden');
        punishmentBadge.classList.add('hidden');
    } else {
        emptyPunishmentMsg.classList.add('hidden');
        punishmentBadge.classList.remove('hidden');
        const undoneCount = activePunishments.filter(p => !p.done).length;
        punishmentBadge.textContent = `${undoneCount} ACTIVE`;
        punishmentBadge.className = undoneCount > 0 ? 
            "bg-red-500 text-white shadow-red-200" : 
            "bg-emerald-500 text-white shadow-emerald-200";

        activePunishments.forEach(p => {
            const div = document.createElement('div');
            div.className = `punishment-item bg-white p-6 rounded-[24px] flex items-center justify-between gap-4 border border-slate-100 shadow-sm ${p.done ? 'done' : ''}`;
            div.innerHTML = `
                <div class="flex items-center gap-5 flex-1 overflow-hidden">
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" ${p.done ? 'checked' : ''} onchange="togglePunishment(${p.id})" class="peer sr-only">
                        <div class="w-7 h-7 border-2 border-slate-200 rounded-xl peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center shadow-inner">
                            <i class="fas fa-check text-white text-[10px] opacity-0 peer-checked:opacity-100"></i>
                        </div>
                    </label>
                    <div class="overflow-hidden">
                        <p class="text-[13px] font-black text-slate-800 leading-tight truncate uppercase tracking-tight">${p.text}</p>
                        <p class="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1.5">${p.date}</p>
                    </div>
                </div>
                <button onclick="removePunishment(${p.id})" class="text-slate-200 hover:text-red-500 transition-all p-3 hover:bg-red-50 rounded-xl">
                    <i class="fas fa-trash-alt text-[10px]"></i>
                </button>
            `;
            punishmentListContainer.appendChild(div);
        });
    }
}

function closeModals() {
    punishmentDetailModal.classList.remove('show');
    punishmentAlertModal.classList.remove('show');
}

studyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateStr = dateInput.value;
    const h = parseInt(hourInput.value) || 0;
    const m = parseInt(minuteInput.value) || 0;
    const totalHours = h + (m / 60);

    if (!dateStr || totalHours < 0 || totalHours > 24) {
        showToast("INVALID TIME ENTRY");
        return;
    }

    saveDailyData(dateStr, totalHours);
    refreshDashboard();
    
    if (totalHours < TARGET_HOURS) {
        punishmentAlertModal.classList.add('show');
    } else {
        showToast("SESSION LOGGED");
    }

    hourInput.value = '';
    minuteInput.value = '';
});

window.onload = init;
