# EXPLAINABILITY.md — Clinical Decision-Making, Transparency & Audit Trail

## 1. Executive Summary & Purpose
This document establishes the transparency, explainability, and regulatory audit framework for **CuraLink AI** (`curalink-ai`), an autonomous agentic healthcare journey coordinator designed for elderly and vulnerable patients. 

In accordance with federal model risk governance (SR 11-7), healthcare privacy mandates (HIPAA), and algorithmic transparency standards, this specification details how the agent reasons, logs internal state transitions, verifies facts against authoritative electronic health records (EHR), and maintains zero-hallucination guardrails.

---

## 2. Agent Identity & Governance Control

| Attribute | Specification |
| :--- | :--- |
| **Agent Name** | `curalink-ai` |
| **Version** | `2.0.0` |
| **Domain** | Healthcare / Clinical Decision Support & Logistics |
| **Risk Tier** | High (Human-in-the-Loop Required) |
| **Governing Frameworks** | HIPAA, HL7 FHIR R4, FINRA Rule 3110 / Segregation of Duties |
| **Primary Model** | `gemini-1.5-flash` |
| **Fallback Model** | `claude-3-5-sonnet` |
| **Audit Retention** | 7 Years (Immutable, Git-Tracked) |

---

## 3. Decision-Making Architecture & Chain-of-Thought Traceability

CuraLink AI operates via an explicit, deterministic **8-step planning cycle**. Every step produces an inspectable reasoning trace before executing external tool calls:

```
[Patient Input / Voice Telemetry]
               │
               ▼
   [Step 1: Context Verification] ────► Reads active EHR (ID, vitals, allergy array)
               │
               ▼
     [Step 2: Red-Flag Triage]   ────► Cross-references `knowledge/emergency_protocols.md`
               │
       ┌───────┴───────┐
       ▼               ▼
[Emergency HALT]  [Step 3: Specialist Routing] ────► Queries `tools/doctor_availability.yaml`
108/911 Dispatch       │
Caregiver Alert        ▼
                  [Step 4: Slot Negotiation]
                       │
                       ▼
                  [Step 5: Clinical Briefing] ─────► Summarizes longitudinal vitals & history
                       │
                       ▼
                  [Step 6: Transit Booking]   ─────► Accessible mobility vehicle dispatch
                       │
                       ▼
                  [Step 7: Caregiver Sync]    ─────► Dispatches SMS alert to designated guardian
                       │
                       ▼
                  [Step 8: FHIR EHR Commit]   ─────► HL7 FHIR R4 Resource Bundle Export
```

### Explainability Guarantees:
1. **Source Attribution**: Every clinical recommendation explicitly cites the patient observation ID and timestamp from their FHIR R4 record.
2. **Reasoning Stream**: The user interface exposes a real-time `Agent Thought Stream`, allowing patients and physicians to view intermediate logic before any action is committed.
3. **Deterministic Halting**: Any detection of critical cardiovascular or neurological red flags immediately preempts non-urgent workflows and escalates to human emergency responders.

---

## 4. Zero-Hallucination & Clinical Safety Guardrails

To prevent dangerous hallucinations in clinical settings, CuraLink AI enforces three strict boundary layers:

1. **Closed-World Allergy & Drug Verification**:
   - The agent is strictly prohibited from inferring medication compatibility based on general knowledge alone.
   - All prescription checks query an explicit contraindication matrix (`patientsData[i].allergies` and active drug regimens).
2. **No Speculative Diagnoses**:
   - The agent cannot generate diagnostic assertions (e.g., *"You have diabetes"*).
   - It only formats structured observations (e.g., *"Fasting Blood Glucose of 142 mg/dL exceeds the reference threshold of 100 mg/dL; scheduling physician follow-up"*).
3. **Bilingual & Multilingual Semantic Consistency**:
   - Voice interactions across 6 languages (English, Tamil, Hindi, Telugu, Kannada, Malayalam) maintain semantic equivalence with the underlying FHIR R4 clinical codes.

---

## 5. Segregation of Duties (SOD) & Human-in-the-Loop (HITL)

In compliance with `DUTIES.md` and regulatory check standards:

* **Role Separation**:
  - `triage_agent`: Possesses `[create, submit]` permissions for patient intake and logistics proposals. It CANNOT approve prescriptions, edit hospital records, or override contraindications.
  - `doctor_copilot`: Possesses `[review, approve, reject]` permissions. An attending physician must cryptographically review and digitally authorize any clinical prescription or care plan change.
* **Approval Gates**:
  - All critical journey milestones (appointment confirmation, ride dispatch, caregiver notification) require explicit user or caregiver confirmation before execution.
  - Emergency dispatches trigger visual and audible countdown overrides with instant manual abort capability.

---

## 6. Audit Trail, Logging & Recordkeeping

1. **Local & Ephemeral Logging**: Runtime state transitions and reasoning steps are written to `memory/runtime/dailylog.md` and `memory/runtime/context.md`.
2. **Git-Native Version Control**: All behavioral constraints (`RULES.md`), core personas (`SOUL.md`), skill procedures (`skills/`), and tool definitions (`tools/`) are version-controlled in Git.
3. **Change Accountability**: Any modification to clinical risk rules or medication matrices produces a diff traceable via `git log` and `git blame` to a verified commit author.

---

## 7. Model Risk & Bias Mitigation

* **Demographic Equity**: Tested across diverse age groups, with specific design considerations for geriatric users (minimum 24px UI touch targets, high contrast, voice-first speech synthesis).
* **Cadence of Review**: Models and prompt weights undergo quarterly clinical validation against updated medical guidelines.
* **Kill Switch**: A global kill switch (`kill_switch: true` in `agent.yaml`) is maintained to instantly revert the platform to static rule-based operational mode if anomalous model behavior is detected.
