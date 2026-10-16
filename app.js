/* ==========================================================================
   CURALINK AI - MASTER APPLICATION ENGINE (ES6 STANDALONE)
   ========================================================================== */

// --- 35 PATIENTS MASTER DEMONSTRATION DATASET ---
const patientsData = Array.from({ length: 35 }, (_, i) => {
  const num = 1001 + i;
  const id = `PAT-${num}`;
  
  const names = [
    "Eleanor Vance", "Arthur Pendelton", "Sophia Martinez", "Robert Chen", "Amara Okafor",
    "Rajesh Kumar", "Priya Sharma", "Venkatesh Rao", "Lakshmi Sundaram", "Kavitha Reddy",
    "Michael Chang", "Fatima Al-Mansoor", "David Miller", "Elena Rostova", "James Wilson",
    "Ananya Iyer", "Karthik Nair", "Srinivas Prasad", "Meenakshi Pillai", "Ganesh Gowda",
    "John Doe", "Sarah Jenkins", "Carlos Mendez", "Hassan Ali", "Ling Wei",
    "Suresh Babu", "Deepa Patel", "Vikram Singh", "Nisha Agarwal", "Manjunath Swamy",
    "Saraswathi Ammal", "Bala Murugan", "Ramesh Chander", "Divya Menon", "Ravi Teja"
  ];

  const conditions = [
    "Hypertension & Type-2 Diabetes", "Post-CABG & Hyperlipidemia", "Hypothyroidism", "Chronic Kidney Disease Stage 3",
    "COPD & Bronchial Asthma", "Essential Hypertension", "Type-2 Diabetes & Fatty Liver", "Coronary Artery Disease",
    "Rheumatoid Arthritis", "Atrial Fibrillation", "Post-PCI Stenting", "Osteoarthritis", "Chronic Migraine",
    "Gouty Arthritis", "GERD & Gastritis", "Iron Deficiency Anemia", "Benign Prostatic Hyperplasia", "Thyroiditis"
  ];

  const doctors = ["Dr. Marcus Vance", "Dr. Aravind Swamy", "Dr. Sunita Deshmukh", "Dr. Richard Thorne", "Dr. Anita Roy"];
  const caregivers = ["Sarah Vance (Daughter)", "Rahul Kumar (Son)", "Anita Sharma (Wife)", "Kavita Rao (Daughter)", "Vikram Sundaram (Son)"];

  const allergiesList = [
    ["Penicillin", "Sulfa Drugs"], ["Aspirin (Mild GI distress)"], ["Shellfish", "Iodine"], ["None Reported"], ["NSAIDs", "Codeine"]
  ];

  const lifestyleList = [
    "Non-smoker | Occasional Alcohol | Light Exercise", "Former Smoker (Quit 2018) | Non-drinker | Walking 30m/day",
    "Non-smoker | Non-drinker | Yoga 3x/week", "Social Smoker | Social Drinker | Sedentary"
  ];

  const familyHistoryList = [
    "Father: Type-2 Diabetes & HTN | Mother: Osteoporosis", "Father: CAD (Myocardial Infarction at age 62) | Mother: HTN",
    "Father: Chronic Kidney Disease | Mother: Thyroiditis", "No major hereditary conditions recorded"
  ];

  const labPanelsList = [
    { hba1c: "8.4% (Elevated)", glucose: "142 mg/dL", creatinine: "1.45 mg/dL", cholesterol: "215 mg/dL", ecg: "Normal Sinus Rhythm", xray: "Clear lungs" },
    { hba1c: "6.2% (Normal)", glucose: "108 mg/dL", creatinine: "0.95 mg/dL", cholesterol: "185 mg/dL", ecg: "Mild T-wave inversion", xray: "Post-CABG sternal wires intact" },
    { hba1c: "5.8% (Normal)", glucose: "94 mg/dL", creatinine: "0.82 mg/dL", cholesterol: "170 mg/dL", ecg: "Normal Sinus Rhythm", xray: "No active disease" }
  ];

  const surgeriesList = [
    { name: "Coronary Artery Bypass Graft (CABG)", date: "2024-03-15", hospital: "City Heart Institute", surgeon: "Dr. Marcus Vance", status: "Full Recovery - Routine Follow-up" },
    { name: "Laparoscopic Cholecystectomy", date: "2023-11-10", hospital: "Apollo Healthcare", surgeon: "Dr. Sunita Deshmukh", status: "Resolved - Post-op Stable" },
    { name: "Total Knee Arthroplasty (Right)", date: "2025-01-20", hospital: "Fortis Care", surgeon: "Dr. Richard Thorne", status: "Rehabilitation Completed" }
  ];

  const isMissingVitals = i % 4 === 1;
  const isMissingNotes = i % 5 === 2;
  const isPendingUpload = i % 3 === 0;

  return {
    id,
    name: names[i % names.length],
    age: 45 + (i * 3) % 40,
    sex: i % 2 === 0 ? "Female" : "Male",
    bloodGroup: ["A+", "B+", "O+", "AB+", "O-"][i % 5],
    mobile: `+91 9840${i + 10} 223${i % 10}0`,
    dob: `19${55 + (i % 35)}-04-12`,
    emergencyContact: `+91 9840${i + 15} 554${i % 10}2`,
    caregiver: caregivers[i % caregivers.length],
    assignedDoctor: doctors[i % doctors.length],
    primaryCondition: conditions[i % conditions.length],
    healthScore: isMissingVitals ? 64 : 85 + (i % 12),
    bp: isMissingVitals ? "" : `${120 + (i % 15)}/${78 + (i % 10)}`,
    glucose: isMissingVitals ? "" : `${95 + (i % 35)} mg/dL`,
    adherenceRate: 95 - (i % 8),
    allergies: allergiesList[i % allergiesList.length],
    lifestyle: lifestyleList[i % lifestyleList.length],
    familyHistory: familyHistoryList[i % familyHistoryList.length],
    labPanel: labPanelsList[i % labPanelsList.length],
    vaccinations: ["COVID-19 Booster (2024)", "Annual Influenza (2025)", "Pneumococcal Conjugate (2023)"],
    medications: [
      { id: 'm1', name: i % 2 === 0 ? 'Telmisartan 40mg' : 'Metformin 500mg', dosage: '1 tablet once daily after breakfast', purpose: 'Blood Pressure Control', stock: 18 - (i % 12), daysLeft: 9, refillDue: '2026-08-14', expiry: '2027-11', morningTaken: true, eveningTaken: false },
      { id: 'm2', name: 'Atorvastatin 10mg', dosage: '1 tablet nightly after dinner', purpose: 'Lipid & Cholesterol Reduction', stock: 5, daysLeft: 2, refillDue: '2026-08-07', expiry: '2027-09', morningTaken: false, eveningTaken: false }
    ],
    prescription: `Prescription Record ${num}: ${i % 2 === 0 ? 'Telmisartan 40mg' : 'Metformin 500mg'} daily`,
    surgeries: [surgeriesList[i % surgeriesList.length]],
    notes: isMissingNotes ? "" : "Patient compliant with prescribed medication regimen. Stable vitals.",
    uploadedDocs: isPendingUpload ? [
      { name: `Prescription_Scan_${num}.jpg`, date: '2026-08-04', status: 'Patient Uploaded – Pending Doctor Verification' }
    ] : [
      { name: `Verified_Lab_Panel_${num}.pdf`, date: '2026-07-28', status: 'Verified by Doctor' }
    ],
    timelineEvents: [
      { date: '2026-08-01', event: 'Routine Follow-up & BP Check', doctor: doctors[i % doctors.length], summary: 'Vitals stable. Continued active prescription regimen.', risk: 'Low' },
      { date: '2026-07-15', event: 'Diagnostic Blood Panel', doctor: 'City Labs', summary: `HbA1c: ${labPanelsList[i % labPanelsList.length].hba1c}, Glucose: ${labPanelsList[i % labPanelsList.length].glucose}`, risk: 'Moderate' },
      { date: '2024-03-15', event: surgeriesList[i % surgeriesList.length].name, doctor: surgeriesList[i % surgeriesList.length].surgeon, summary: `Procedure completed at ${surgeriesList[i % surgeriesList.length].hospital}. ${surgeriesList[i % surgeriesList.length].status}`, risk: 'Resolved' }
    ]
  };
});

// --- GLOBAL APP STATE ---
const state = {
  activePatientId: 'PAT-1001',
  currentPortal: 'patient',
  currentLang: 'en',
  isElderMode: false,
  isDarkTheme: false,
  selectedSlot: 'Tomorrow at 10:00 AM (In-Person)'
};

// --- MULTILINGUAL DICTIONARY ---
const i18n = {
  en: { patientPortal: "Patient Portal", doctorPortal: "Doctor Copilot & Timeline", adminPortal: "Admin Completeness Audit", elderMode: "Elder Mode", welcomeMsg: "Welcome back,", listenScreen: "Listen", medCheckerTitle: "AI Medicine Safety Scanner & Detailed Eating Advice" },
  ta: { patientPortal: "நோயாளி போர்டல்", doctorPortal: "மருத்துவர் உதவி (Copilot)", adminPortal: "நிர்வாக தணிக்கை", elderMode: "முதியோர் பயன்முறை", welcomeMsg: "மீண்டும் வருக,", listenScreen: "கேட்கவும்", medCheckerTitle: "AI மருந்து பாதுகாப்பு పరిசோதனை" },
  hi: { patientPortal: "मरीज़ पोर्टल", doctorPortal: "डॉक्टर कोपायलट", adminPortal: "व्यवस्थापक डेटा ऑडिट", elderMode: "बुजुर्ग मोड", welcomeMsg: "पुनः स्वागत है,", listenScreen: "स्क्रीन सुनें", medCheckerTitle: "एआई दवा सुरक्षा जांच" },
  te: { patientPortal: "పేషెంట్ పోర్టల్", doctorPortal: "డాక్టర్ కోపైలట్", adminPortal: "అడ్మిన్ ఆడిట్", elderMode: "పెద్దల మోడ్", welcomeMsg: "మళ్లీ స్వాగతం,", listenScreen: "వాయిస్ వినండి", medCheckerTitle: "AI మందుల భద్రత తనిఖీ" },
  kn: { patientPortal: "ರೋಗಿ ಪೋರ್ಟಲ್", doctorPortal: "ಡಾಕ್ಟರ್ ಕೊಪೈಲಟ್", adminPortal: "ಅಡ್ಮಿನ್ ಆಡಿಟ್", elderMode: "ಹಿರಿಯರ ಮೋಡ್", welcomeMsg: "ಮತ್ತೆ സ്വാಗತ,", listenScreen: "ಆಲಿಸಿ", medCheckerTitle: "AI ಔಷಧಿ ಸುರಕ್ಷತೆ ಪರೀಕ್ಷೆ" },
  ml: { patientPortal: "രോഗി പോർട്ടൽ", doctorPortal: "ഡോക്ടർ കോപൈലറ്റ്", adminPortal: "അഡ്മിൻ ഓഡിറ്റ്", elderMode: "മുതിർന്നവരുടെ മോഡ്", welcomeMsg: "വീണ്ടും സ്വാഗതം,", listenScreen: "ശ്രദ്ധിക്കുക", medCheckerTitle: "AI മരുന്ന് സുരക്ഷാ പരിശോധന" }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  populatePatientSelector();
  renderApp();
});

function populatePatientSelector() {
  const select = document.getElementById('patient-selector');
  select.innerHTML = patientsData.map(p => `
    <option value="${p.id}">${p.id} - ${p.name}</option>
  `).join('');
}

function getActivePatient() {
  return patientsData.find(p => p.id === state.activePatientId) || patientsData[0];
}

function changeActivePatient(patientId) {
  state.activePatientId = patientId;
  renderApp();
  showToast(`Loaded Patient Profile: ${patientId}`);
}

// --- INSTANT SEARCH ENGINE ---
function handleInstantSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  const q = query.toLowerCase().trim();

  if (!q) {
    dropdown.style.display = 'none';
    return;
  }

  const matches = patientsData.filter(p => 
    p.id.toLowerCase().includes(q) ||
    p.name.toLowerCase().includes(q) ||
    p.mobile.toLowerCase().includes(q) ||
    p.dob.toLowerCase().includes(q) ||
    p.assignedDoctor.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    dropdown.innerHTML = `<div class="search-result-item" style="color: var(--text-muted);">No matching patient records found.</div>`;
  } else {
    dropdown.innerHTML = matches.slice(0, 6).map(p => `
      <div class="search-result-item" onclick="selectSearchPatient('${p.id}')">
        <div>
          <strong style="color: var(--accent-blue);">${p.id} - ${p.name}</strong>
          <div style="font-size: 0.78rem; color: var(--text-secondary);">${p.primaryCondition} | Dr: ${p.assignedDoctor}</div>
        </div>
        <span class="badge badge-complete" style="font-size: 0.68rem;">Select</span>
      </div>
    `).join('');
  }

  dropdown.style.display = 'block';
}

function selectSearchPatient(patientId) {
  document.getElementById('search-dropdown').style.display = 'none';
  document.getElementById('global-search-input').value = '';
  document.getElementById('patient-selector').value = patientId;
  changeActivePatient(patientId);
}

// --- PORTAL SWITCHING ---
function switchPortal(portalName) {
  state.currentPortal = portalName;
  document.querySelectorAll('.portal-view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.portal-btn').forEach(el => el.classList.remove('active'));

  document.getElementById(`portal-${portalName}`).classList.add('active');
  document.getElementById(`btn-portal-${portalName}`).classList.add('active');
}

// --- MULTILINGUAL & VOICE ---
function changeLanguage(langCode) {
  state.currentLang = langCode;
  const dict = i18n[langCode] || i18n['en'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });

  // Sync with specialized AI Agent Coordinator
  if (window.curalinkAgent && curalinkAgent.language !== langCode) {
    curalinkAgent.setLanguage(langCode, false);
  }

  showToast(`Language: ${langCode.toUpperCase()}`);
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const langMap = { en: 'en-US', ta: 'ta-IN', hi: 'hi-IN', te: 'te-IN', kn: 'kn-IN', ml: 'ml-IN' };
  utterance.lang = langMap[state.currentLang] || 'en-US';
  utterance.rate = state.isElderMode ? 0.85 : 1.0;

  window.speechSynthesis.speak(utterance);
  showToast("🔊 Reading aloud...");
}

function readActiveScreenAloud() {
  const p = getActivePatient();
  const summary = `CuraLink AI report for ${p.name}. Primary condition: ${p.primaryCondition}. Health score: ${p.healthScore} out of 100. Blood pressure: ${p.bp || 'Not recorded'}.`;
  speakText(summary);
}

function toggleElderMode() {
  state.isElderMode = !state.isElderMode;
  document.body.classList.toggle('elder-mode', state.isElderMode);
  document.getElementById('btn-elder-mode').classList.toggle('active', state.isElderMode);
  showToast(state.isElderMode ? "👓 Elder Mode Activated" : "Standard Mode Restored");
}

function toggleDarkTheme() {
  state.isDarkTheme = !state.isDarkTheme;
  document.body.classList.toggle('dark-theme', state.isDarkTheme);
  showToast(state.isDarkTheme ? "Dark Mode Enabled" : "Light Mode Enabled");
}

// --- RENDER DISPATCHER ---
function renderApp() {
  renderPatientPortal();
  renderDoctorPortal();
  renderAdminPortal();
}

// --- 1. RENDER PATIENT PORTAL ---
function renderPatientPortal() {
  const p = getActivePatient();

  document.getElementById('banner-patient-name').innerText = p.name;
  document.getElementById('banner-patient-summary').innerText = 
    `ID: ${p.id} | Age: ${p.age} / ${p.sex} | Mobile: ${p.mobile} | DOB: ${p.dob} | Blood: ${p.bloodGroup} | ${p.primaryCondition}`;
  document.getElementById('patient-health-score').innerText = `${p.healthScore} / 100`;
  document.getElementById('assigned-doctor-name').innerText = p.assignedDoctor;
  document.getElementById('caregiver-name').innerText = p.caregiver;
  document.getElementById('caregiver-phone').innerText = `Emergency: ${p.emergencyContact}`;

  document.getElementById('auto-booking-specialist-title').innerHTML = 
    `<i class="fa-solid fa-user-doctor"></i> Recommended Specialist: ${p.assignedDoctor} (Cardiology)`;
  document.getElementById('adherence-badge').innerText = `Adherence Rate: ${p.adherenceRate}%`;

  const reminderGrid = document.getElementById('daily-reminder-cards-grid');
  reminderGrid.innerHTML = `
    <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); border-top: 4px solid var(--accent-blue);">
      <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 4px;"><i class="fa-solid fa-sun"></i> MORNING DOSE (08:00 AM)</div>
      <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 2px;">${p.medications[0].name}</div>
      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 10px;">${p.medications[0].dosage}</div>
      <button class="btn-primary" style="padding: 6px 12px; font-size: 0.78rem; width: 100%; justify-content: center;" onclick="markDoseTaken('morning')">
        <i class="fa-solid fa-check"></i> Mark Dose Taken
      </button>
    </div>

    <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); border-top: 4px solid var(--accent-teal);">
      <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-teal); margin-bottom: 4px;"><i class="fa-solid fa-cloud-sun"></i> AFTERNOON DOSE (02:00 PM)</div>
      <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 2px;">Vitamin D3 / Supplement</div>
      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 10px;">1 capsule with water</div>
      <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.78rem; width: 100%; justify-content: center;" onclick="snoozeDose('afternoon')">
        <i class="fa-solid fa-clock"></i> Snooze 15 Mins
      </button>
    </div>

    <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); border-top: 4px solid var(--accent-purple);">
      <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-purple); margin-bottom: 4px;"><i class="fa-solid fa-moon"></i> EVENING DOSE (08:00 PM)</div>
      <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 2px;">${p.medications[1].name}</div>
      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 10px;">${p.medications[1].dosage}</div>
      <button class="btn-primary" style="padding: 6px 12px; font-size: 0.78rem; width: 100%; justify-content: center;" onclick="markDoseTaken('evening')">
        <i class="fa-solid fa-check"></i> Mark Dose Taken
      </button>
    </div>
  `;

  const medsTbody = document.getElementById('patient-current-meds-tbody');
  medsTbody.innerHTML = p.medications.map(m => `
    <tr>
      <td><strong style="color: var(--accent-blue);">${m.name}</strong></td>
      <td>${m.dosage}</td>
      <td>${m.purpose}</td>
      <td>
        <div><strong>${m.stock} tabs remaining</strong> (${m.daysLeft} days)</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Refill Due: ${m.refillDue}</div>
      </td>
      <td>
        ${m.stock <= 5 ? `<span class="badge badge-missing">Low Stock Refill Needed</span>` : `<span class="badge badge-complete">Stock OK</span>`}
      </td>
    </tr>
  `).join('');

  const historyGrid = document.getElementById('complete-history-grid');
  historyGrid.innerHTML = `
    <div class="col-6" style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md);">
      <h4 style="font-size: 0.9rem; color: var(--accent-blue); margin-bottom: 8px;"><i class="fa-solid fa-allergies"></i> Documented Allergies</h4>
      <p style="font-size: 0.88rem;">${p.allergies.join(', ')}</p>

      <h4 style="font-size: 0.9rem; color: var(--accent-blue); margin-top: 14px; margin-bottom: 8px;"><i class="fa-solid fa-heart-pulse"></i> Lifestyle & Risk Factors</h4>
      <p style="font-size: 0.88rem;">${p.lifestyle}</p>
    </div>

    <div class="col-6" style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md);">
      <h4 style="font-size: 0.9rem; color: var(--accent-teal); margin-bottom: 8px;"><i class="fa-solid fa-vial"></i> Diagnostic Lab Test Panel</h4>
      <div style="font-size: 0.85rem; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <div><strong>HbA1c:</strong> ${p.labPanel.hba1c}</div>
        <div><strong>Glucose:</strong> ${p.labPanel.glucose}</div>
        <div><strong>Creatinine:</strong> ${p.labPanel.creatinine}</div>
        <div><strong>Cholesterol:</strong> ${p.labPanel.cholesterol}</div>
      </div>

      <h4 style="font-size: 0.9rem; color: var(--accent-teal); margin-top: 14px; margin-bottom: 8px;"><i class="fa-solid fa-syringe"></i> Immunizations</h4>
      <p style="font-size: 0.85rem;">${p.vaccinations.join(' • ')}</p>
    </div>
  `;
}

// --- DOWNLOAD HEALTH SUMMARY AS PDF ---
function downloadHealthSummaryPDF() {
  const p = getActivePatient();
  showToast(`📄 Generating Printable PDF Health Summary for ${p.name} (${p.id})...`);
  setTimeout(() => {
    window.print();
  }, 400);
}

// --- APPOINTMENT CONSULTATION BOOKING ---
function selectSlot(btnEl) {
  document.querySelectorAll('.slot-chip').forEach(el => el.classList.remove('active'));
  btnEl.classList.add('active');
  state.selectedSlot = btnEl.innerText;
}

function confirmAppointmentBooking() {
  const p = getActivePatient();
  const newEvent = {
    date: new Date().toISOString().split('T')[0],
    event: `Consultation Booked (${state.selectedSlot})`,
    doctor: p.assignedDoctor,
    summary: `Confirmed consultation with ${p.assignedDoctor} at City Heart Institute.`,
    risk: 'Low'
  };

  p.timelineEvents.unshift(newEvent);
  renderApp();

  showToast(`📅 Consultation booked for ${p.name} with ${p.assignedDoctor} on ${state.selectedSlot}!`);
  speakText(`Consultation successfully booked for ${state.selectedSlot}. Reminders sent to your caregiver.`);
}

// --- MEDICINE REMINDER ALARM FUNCTIONS ---
function markDoseTaken(timeSlot) {
  const p = getActivePatient();
  p.adherenceRate = Math.min(100, p.adherenceRate + 2);
  renderApp();
  showToast(`✅ ${timeSlot.toUpperCase()} dose marked as TAKEN! Adherence score: ${p.adherenceRate}%`);
  speakText("Dose logged as taken. Great job maintaining your medication schedule.");
}

function snoozeDose(timeSlot) {
  showToast(`⏰ ${timeSlot.toUpperCase()} dose snoozed for 15 minutes. Reminder reset.`);
}

// --- HEALTH ANALYTICS TIMEFRAME FILTER ---
function changeAnalyticsTimeframe(period, btnEl) {
  document.querySelectorAll('.card-header button.control-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const bpPath = document.getElementById('chart-bp-path');
  const glucosePath = document.getElementById('chart-glucose-path');

  if (period === '1m') {
    bpPath.setAttribute('d', 'M 10 50 L 60 48 L 110 52 L 160 45 L 210 42 L 260 40');
    glucosePath.setAttribute('d', 'M 10 45 L 60 42 L 110 40 L 160 38 L 210 35 L 260 35');
  } else if (period === '1y') {
    bpPath.setAttribute('d', 'M 10 80 L 60 75 L 110 65 L 160 60 L 210 50 L 260 45');
    glucosePath.setAttribute('d', 'M 10 70 L 60 65 L 110 55 L 160 50 L 210 45 L 260 45');
  } else {
    bpPath.setAttribute('d', 'M 10 70 L 60 65 L 110 50 L 160 55 L 210 40 L 260 45');
    glucosePath.setAttribute('d', 'M 10 55 L 60 60 L 110 40 L 160 70 L 210 50 L 260 45');
  }

  showToast(`Analytics view updated to: ${period.toUpperCase()}`);
}

// --- AI MEDICINE SCANNER WITH EATING ADVICE ---
function runMedicineCheck(pillName) {
  const p = getActivePatient();
  const verdictBanner = document.getElementById('verdict-banner-container');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictDetails = document.getElementById('verdict-details');
  const eatingInstructions = document.getElementById('verdict-eating-instructions');

  verdictBanner.style.display = 'block';

  if (pillName.includes('Telmisartan') || pillName.includes('Metformin')) {
    verdictBanner.style.background = 'rgba(16, 185, 129, 0.12)';
    verdictBanner.style.borderColor = 'var(--accent-emerald)';
    verdictTitle.style.color = 'var(--status-complete-text)';
    verdictTitle.innerText = '🟢 SAFE TO EAT / TAKE';
    verdictDetails.innerText = `${pillName} matches ${p.name}'s verified active prescription for ${p.primaryCondition}.`;
    eatingInstructions.innerHTML = `
      • <strong>Dosage & Frequency:</strong> Take 1 tablet once daily in the morning.<br>
      • <strong>Food Interaction:</strong> Take after breakfast with a full glass of water. Swallow whole; do not crush.<br>
      • <strong>Side Effects Note:</strong> Mild dizziness may occur on standing; stay hydrated.
    `;
  } else if (pillName.includes('Amoxicillin')) {
    verdictBanner.style.background = 'rgba(239, 68, 68, 0.12)';
    verdictBanner.style.borderColor = 'var(--accent-rose)';
    verdictTitle.style.color = 'var(--status-missing-text)';
    verdictTitle.innerText = '🔴 DO NOT EAT / TAKE - SEVERE ALLERGY CONFLICT';
    verdictDetails.innerText = `WARNING: Amoxicillin (Penicillin antibiotic) conflicts directly with ${p.name}'s documented allergy list (${p.allergies.join(', ')}).`;
    eatingInstructions.innerHTML = `
      • <strong>ACTION REQUIRED:</strong> DO NOT EAT THIS MEDICINE. High risk of hypersensitivity or severe allergic reaction.<br>
      • <strong>Alternative:</strong> Consult ${p.assignedDoctor} for a non-penicillin antibiotic alternative.
    `;
  } else if (pillName.includes('Aspirin')) {
    verdictBanner.style.background = 'rgba(239, 68, 68, 0.12)';
    verdictBanner.style.borderColor = 'var(--accent-rose)';
    verdictTitle.style.color = 'var(--status-missing-text)';
    verdictTitle.innerText = '🔴 DO NOT EAT / TAKE - DANGEROUS DRUG INTERACTION';
    verdictDetails.innerText = `WARNING: Aspirin interacts with ${p.name}'s active cardiac medication, escalating GI ulceration & bleeding risk.`;
    eatingInstructions.innerHTML = `
      • <strong>ACTION REQUIRED:</strong> DO NOT CONSUME WITHOUT DOCTOR SIGN-OFF.<br>
      • <strong>Risk:</strong> May cause gastric irritation or bleed when combined with active prescription.
    `;
  } else {
    verdictBanner.style.background = 'rgba(245, 158, 11, 0.12)';
    verdictBanner.style.borderColor = 'var(--accent-amber)';
    verdictTitle.style.color = 'var(--status-update-text)';
    verdictTitle.innerText = '🟡 AI VERIFICATION UNCERTAIN';
    verdictDetails.innerText = `AI could not verify "${pillName}" with complete confidence.`;
    eatingInstructions.innerHTML = `
      • <strong>INSTRUCTION:</strong> Please consult ${p.assignedDoctor} before consuming. Document tagged as "Patient Uploaded – Pending Doctor Verification".
    `;
  }

  speakText(verdictTitle.innerText + ". " + verdictDetails.innerText);
}

function handlePatientFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const p = getActivePatient();
  p.uploadedDocs.unshift({
    name: file.name,
    date: new Date().toISOString().split('T')[0],
    status: 'Patient Uploaded – Pending Doctor Verification'
  });

  renderApp();
  showToast(`File uploaded: ${file.name}. Tagged: Pending Doctor Verification`);
}

// --- SHORT & SWEET SUMMARY MODAL ---
function openQuickSummaryModal() {
  const p = getActivePatient();
  document.getElementById('quick-summary-name').innerText = `${p.name} (${p.id}) - Executive Overview`;
  
  document.getElementById('quick-summary-text1').innerText = 
    `${p.name} is a ${p.age}-year-old ${p.sex} managing ${p.primaryCondition}. Overall AI Health Score is ${p.healthScore}/100. Blood pressure: ${p.bp || '124/80 mmHg'}, Fasting Glucose: ${p.glucose || '102 mg/dL'}.`;

  document.getElementById('quick-summary-text2').innerText = 
    `Active Regimen: ${p.medications.map(m => `${m.name} (${m.dosage})`).join('; ')}. Stock status: ${p.medications[0].stock} tablets remaining. Allergies: ${p.allergies.join(', ')}.`;

  document.getElementById('quick-summary-text3').innerText = 
    `Assigned Doctor: ${p.assignedDoctor}. Caregiver: ${p.caregiver}. Next Follow-up: Routine quarterly review scheduled. Documented Surgeries: ${p.surgeries[0].name} (${p.surgeries[0].status}).`;

  document.getElementById('modal-quick-summary').classList.add('active');
}

// --- DOCTOR COPILOT & CLINICAL TIMELINE ---
function renderDoctorPortal() {
  const p = getActivePatient();

  document.getElementById('copilot-patient-headline').innerText = `${p.name} (${p.id}) | ${p.age} Yrs ${p.sex}`;
  document.getElementById('copilot-executive-summary').innerText = 
    `Executive 10-Sec Brief: Patient has ${p.primaryCondition}. Vitals: ${p.bp || '124/80'} | Fasting Glucose: ${p.glucose || '102 mg/dL'}. Allergies: ${p.allergies.join(', ')}.`;

  const timelineContainer = document.getElementById('doctor-clinical-timeline');
  timelineContainer.innerHTML = p.timelineEvents.map(e => `
    <div class="timeline-event-card">
      <div class="timeline-event-node"></div>
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; color: var(--accent-blue);">
        <span>${e.event}</span>
        <span>${e.date}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-primary); margin-top: 4px;">${e.summary}</div>
      <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">Involved: ${e.doctor}</div>
    </div>
  `).join('');

  const queue = document.getElementById('doctor-verification-queue');
  const pendingDocs = p.uploadedDocs.filter(d => d.status.includes('Pending Doctor Verification'));

  if (pendingDocs.length === 0) {
    queue.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem;">No pending verification requests for ${p.name}.</p>`;
  } else {
    queue.innerHTML = pendingDocs.map((d, idx) => `
      <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); margin-bottom: 10px; border: 1px solid var(--border-color);">
        <div style="font-size: 0.88rem; font-weight: 700; margin-bottom: 6px;"><i class="fa-solid fa-file-image"></i> ${d.name}</div>
        <button class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="authorizeDoctorDoc(${idx})">
          <i class="fa-solid fa-check"></i> Authorize & Verify
        </button>
      </div>
    `).join('');
  }
}

function authorizeDoctorDoc(docIdx) {
  const p = getActivePatient();
  const pending = p.uploadedDocs.filter(d => d.status.includes('Pending Doctor Verification'));
  if (pending[docIdx]) {
    pending[docIdx].status = `Verified by ${p.assignedDoctor}`;
    renderApp();
    showToast(`✅ Clinical report authorized by ${p.assignedDoctor}`);
  }
}

function handleDoctorPrescription(event) {
  event.preventDefault();
  const name = document.getElementById('doc-presc-name').value;
  const p = getActivePatient();
  p.prescription = `${name} (Authorized by ${p.assignedDoctor})`;
  document.getElementById('doc-presc-name').value = '';
  renderApp();
  showToast("✅ Digital prescription signed & synchronized!");
}

// --- ADMIN AUDIT PORTAL ---
function evaluateCompleteness(p) {
  const missing = [];
  if (!p.bp) missing.push('Missing BP');
  if (!p.glucose) missing.push('Missing Glucose');
  if (!p.notes) missing.push('Missing Notes');

  const hasPending = p.uploadedDocs.some(d => d.status.includes('Pending Doctor Verification'));

  if (missing.length === 0 && !hasPending) return { status: 'Record Complete & Verified', badgeClass: 'badge-complete', missing };
  if (hasPending && missing.length === 0) return { status: 'Patient Upload – Verification Pending', badgeClass: 'badge-pending', missing: ['Pending Verification'] };
  if (missing.length >= 2) return { status: 'Missing Clinical Information', badgeClass: 'badge-missing', missing };
  return { status: 'Needs Clinical Record Update', badgeClass: 'badge-update', missing };
}

function renderAdminPortal() {
  const tbody = document.getElementById('admin-master-roster-tbody');
  let missingTotal = 0;

  tbody.innerHTML = patientsData.map(p => {
    const comp = evaluateCompleteness(p);
    if (comp.status !== 'Record Complete & Verified') missingTotal++;

    return `
      <tr>
        <td><strong>${p.id}</strong> - ${p.name}</td>
        <td>${p.mobile}<br><span style="font-size: 0.78rem; color: var(--text-muted);">DOB: ${p.dob}</span></td>
        <td>${p.primaryCondition}</td>
        <td><span class="badge ${comp.badgeClass}">${comp.status}</span></td>
        <td>
          ${comp.missing.length > 0 ? 
            `<span style="color: var(--accent-rose); font-size: 0.82rem;">${comp.missing.join(', ')}</span>` : 
            `<span style="color: var(--accent-emerald); font-size: 0.82rem;">All Vitals Complete</span>`
          }
        </td>
        <td>
          <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.8rem;" onclick="openAdminUpdateModal('${p.id}')">
            <i class="fa-solid fa-pen"></i> Update
          </button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById('admin-alert-banner-text').innerText = 
    `${missingTotal} hospital patient records have missing mandatory clinical data (vitals older than 60 days or pending lab verifications).`;
}

function dispatchStaffAlerts() {
  showToast("🔔 Dispatched SMS/Push alerts to assigned doctors & patients!");
  speakText("Automated notifications sent to doctors for incomplete patient records.");
}

function openAdminUpdateModal(patientId) {
  const p = patientsData.find(pat => pat.id === patientId);
  if (!p) return;

  document.getElementById('admin-edit-patient-id').value = p.id;
  document.getElementById('admin-edit-bp').value = p.bp || '';
  document.getElementById('admin-edit-glucose').value = p.glucose || '';
  document.getElementById('admin-edit-prescription').value = p.prescription || '';
  document.getElementById('admin-edit-notes').value = p.notes || '';

  document.getElementById('admin-update-modal-title').innerText = `Admin Data Updater: ${p.name} (${p.id})`;
  document.getElementById('modal-admin-update').classList.add('active');
}

function saveAdminRecordUpdate(event) {
  event.preventDefault();
  const id = document.getElementById('admin-edit-patient-id').value;
  const p = patientsData.find(pat => pat.id === id);

  if (p) {
    p.bp = document.getElementById('admin-edit-bp').value;
    p.glucose = document.getElementById('admin-edit-glucose').value;
    p.prescription = document.getElementById('admin-edit-prescription').value;
    p.notes = document.getElementById('admin-edit-notes').value;
    p.healthScore = 92;

    closeModal('modal-admin-update');
    renderApp();
    showToast(`Saved verified record for ${p.name}. Status: Record Complete & Verified`);
  }
}

// --- DYNAMIC CONTEXT-AWARE AI CHATBOT ---
function sendPresetChat(text) {
  document.getElementById('chat-input').value = text;
  sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const box = document.getElementById('chat-messages-box');
  box.innerHTML += `<div style="background: rgba(2,132,199,0.15); padding: 8px 12px; border-radius: 10px; align-self: flex-end; max-width: 85%;">${msg}</div>`;
  input.value = '';

  const q = msg.toLowerCase();
  const p = getActivePatient();

  let botReply = "";

  if (q.includes('medicine') || q.includes('taking') || q.includes('meds') || q.includes('drug')) {
    botReply = `${p.name} is currently taking: ${p.medications.map(m => `${m.name} (${m.dosage}, stock: ${m.stock} tabs)`).join('; ')}.`;
  } else if (q.includes('lab') || q.includes('blood') || q.includes('test') || q.includes('result')) {
    botReply = `Latest blood panel for ${p.name}: HbA1c: ${p.labPanel.hba1c}, Fasting Glucose: ${p.labPanel.glucose}, Creatinine: ${p.labPanel.creatinine}, Cholesterol: ${p.labPanel.cholesterol}.`;
  } else if (q.includes('surgery') || q.includes('surgeries') || q.includes('operation')) {
    botReply = `Surgery history for ${p.name}: ${p.surgeries.map(s => `${s.name} on ${s.date} at ${s.hospital} by ${s.surgeon} (${s.status})`).join('; ')}.`;
  } else if (q.includes('allergy') || q.includes('allergies')) {
    botReply = `Documented allergies for ${p.name}: ${p.allergies.join(', ')}. Severe allergy warnings active.`;
  } else if (q.includes('doctor') || q.includes('appointment')) {
    botReply = `${p.name}'s primary assigned doctor is ${p.assignedDoctor} (Cardiology). Next routine review is scheduled within the quarter.`;
  } else {
    botReply = `CuraLink AI Assistant: ${p.name} is managing ${p.primaryCondition} under ${p.assignedDoctor}. Active vitals: BP ${p.bp || '124/80'}, Glucose ${p.glucose || '102 mg/dL'}. Health score: ${p.healthScore}/100.`;
  }

  setTimeout(() => {
    box.innerHTML += `<div style="background: rgba(20,184,166,0.12); padding: 8px 12px; border-radius: 10px; max-width: 90%;">${botReply}</div>`;
    box.scrollTop = box.scrollHeight;
  }, 500);
}

// --- NOTIFICATIONS CENTER ---
function openNotificationsModal() {
  const p = getActivePatient();
  const list = document.getElementById('notifs-modal-list');
  list.innerHTML = `
    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-md); border-left: 4px solid var(--accent-amber);">
      <strong>💊 Low Stock Alert</strong>: ${p.medications[0].name} has ${p.medications[0].stock} tablets remaining.
    </div>
    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-md); border-left: 4px solid var(--accent-blue);">
      <strong>📅 Appointment Reminder</strong>: Follow-up check-up with ${p.assignedDoctor}.
    </div>
  `;
  document.getElementById('modal-notifs').classList.add('active');
}

// --- HL7 FHIR R4 ---
function openFHIRModal() {
  const p = getActivePatient();
  const fhirPayload = {
    resourceType: "Bundle",
    type: "collection",
    timestamp: new Date().toISOString(),
    entry: [
      { resource: { resourceType: "Patient", id: p.id, name: [{ text: p.name }], gender: p.sex.toLowerCase() } },
      { resource: { resourceType: "Observation", status: "final", code: { text: "Blood Pressure" }, valueString: p.bp || "Missing" } }
    ]
  };

  document.getElementById('fhir-code-box').innerText = JSON.stringify(fhirPayload, null, 2);
  document.getElementById('modal-fhir').classList.add('active');
}

function simulateFHIRSync() {
  showToast("🔄 Connecting to Hospital Management System via HL7 FHIR R4 API...");
  setTimeout(() => {
    showToast("✅ FHIR R4 EHR Sync Complete!");
  }, 1000);
}

function copyFHIRJSON() {
  navigator.clipboard.writeText(document.getElementById('fhir-code-box').innerText);
  showToast("📋 FHIR JSON copied to clipboard!");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--accent-blue);"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}
