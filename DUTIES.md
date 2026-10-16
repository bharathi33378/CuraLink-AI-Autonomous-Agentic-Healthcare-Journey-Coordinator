# DUTIES.md — Segregation of Duties (SOD) Policy & Role Boundaries

## 1. Overview
In accordance with healthcare safety standards and financial/regulatory segregation of duties protocols (FINRA Rule 3110 / HIPAA / FHIR R4), CuraLink AI enforces strict multi-agent role separation. No single agent or user persona controls the end-to-end clinical workflow without checks and balances.

---

## 2. Defined Roles & Permissions

| Role ID | Role Name | Allowed Permissions | Restricted Actions |
| :--- | :--- | :--- | :--- |
| `triage_agent` | Clinical Triage & Intake Agent | `intake`, `propose_plan`, `query_records` | CANNOT sign digital prescriptions or modify verified hospital records. |
| `doctor_copilot` | Attending Physician Copilot | `verify_records`, `sign_prescription`, `review_summary` | CANNOT book transportation or schedule non-clinical logistics directly. |
| `care_coordinator` | Logistics & Care Coordinator | `book_transit`, `set_reminders`, `dispatch_caregiver_alert` | CANNOT authorize medical data or override drug contraindications. |
| `admin_auditor` | Data Completeness Auditor | `audit_records`, `dispatch_staff_alerts`, `update_vitals` | CANNOT perform patient diagnosis or prescribe treatments. |

---

## 3. Conflict Matrix

The following roles **cannot** be held by the same agent or executed in a single unsupervised step:

```
[triage_agent]       <---> [doctor_copilot]      (Intake agent cannot approve own medical orders)
[care_coordinator]   <---> [doctor_copilot]      (Logistics agent cannot alter clinical diagnoses)
[admin_auditor]      <---> [doctor_copilot]      (Auditor cannot prescribe medications)
```

---

## 4. Handoff Workflows

### Workflow 1: Doctor-Visit Summary Handoff
1. `triage_agent` retrieves authorized history and drafts clinical summary.
2. Patient reviews and grants explicit consent.
3. `doctor_copilot` receives summary for clinical review before signing off on treatment.

### Workflow 2: Digital Prescription Handoff
1. `triage_agent` / patient logs symptom check.
2. `doctor_copilot` reviews longitudinal timeline and authors prescription.
3. Digital signature is applied (`Authorized by Dr. Marcus Vance`).
4. `care_coordinator` updates patient's medication reminder alarms.
