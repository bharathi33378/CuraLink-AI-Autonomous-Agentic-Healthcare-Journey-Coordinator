# EXPLAINABILITY.md — Transparent Decision Framework for CuraLink AI

## Overview
CuraLink AI is an autonomous, agentic healthcare journey coordinator designed to eliminate cognitive and logistical barriers for elderly patients managing chronic conditions. The platform orchestrates clinical appointment bookings, specialized medical transportation, and emergency escalation while upholding strict clinical safety protocols.

---

## Data Source, Input Telemetry, and Data Used
CuraLink AI relies on verified medical inputs and live patient telemetry rather than unverified user assumptions. The primary data source consists of electronic health records containing longitudinal vitals, documented drug allergy arrays, active prescription lists, and laboratory panels formatted according to the HL7 FHIR R4 standard. Input signals also include spoken voice utterances transcribed via the browser Web Speech API across six South Asian languages (English, Tamil, Hindi, Telugu, Kannada, and Malayalam). Furthermore, the agent integrates verified specialist roster data, hospital suite availability, and wheelchair-accessible transport transit schedules as contextual inputs to guide all operational steps.

---

## Decision Reasoning and How It Decides
The agent executes an inspectable eight-step planning cycle that evaluates user intent against medical triage safety rules before executing any action. When a patient speaks or types a request, the reasoning engine first performs clinical triage against emergency cardiovascular and respiratory red flags defined in the clinical protocols. If emergency red flags are detected, the system immediately halts routine coordination and decides to initiate emergency responder dispatch alongside automated caregiver SMS alerts. In non-emergency scenarios, the decision logic queries the hospital scheduling directory, selects the optimal consultation slot with the assigned physician, reserves mobility transit, and generates a pre-visit clinical summary for physician sign-off. Every decision is surfaced in real time through an inspectable thought stream so patients and clinicians can verify each reasoning step before execution.

---

## Limitation, Constraint Rules, and Known Issues
CuraLink AI operates under strict boundary limitations to guarantee patient safety and zero clinical hallucination. A primary constraint is that the agent is strictly prohibited from autonomously issuing diagnostic conclusions or modifying medication dosages without attending physician sign-off. Under the segregation of duties policy, the intake triage role can only propose journeys and synthesize summaries, while prescription authorization is strictly reserved for the attending physician. Known limitations include dependency on an active internet connection for live transit booking and the necessity of patient confirmation before committing appointments. If a patient's historical vitals are missing or older than sixty days, the agent enforces a constraint that alerts clinic staff rather than extrapolating or guessing values.
