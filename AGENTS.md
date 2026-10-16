# AGENTS.md — Framework-Agnostic Agent Instructions

## Overview
This document specifies framework-agnostic runtime execution instructions for **CuraLink AI**. These instructions allow the agent definition to run seamlessly across OpenGAP CLI, Gemini CLI, Claude Code, OpenAI Agents SDK, LangChain, and browser environments.

---

## Agent Hierarchy & Orchestration

```
CuraLink Orchestrator (Single-Button Voice Interface)
│
├── 1. Triage Agent (Goal & Context Retrieval)
│   ├── Sub-task: Parse patient utterance (English / Tamil / Hindi / Telugu / Kannada / Malayalam)
│   ├── Sub-task: Match active Patient ID from HL7 FHIR store
│   └── Sub-task: Assess red-flag symptoms vs routine scheduling
│
├── 2. Care Coordinator Agent (Execution & Logistics)
│   ├── Sub-task: Query cardiologist slots (Dr. Marcus Vance)
│   ├── Sub-task: Synthesize verified doctor summary
│   ├── Sub-task: Reserve wheelchair-accessible transportation
│   └── Sub-task: Dispatch SMS alerts to designated family caregiver
│
└── 3. Doctor Copilot Agent (Clinical Scribe)
    ├── Sub-task: Ingest 6-month longitudinal timeline
    └── Sub-task: Author digital signed prescription orders
```

---

## Execution Flow

1. **Step 1: Ingest Goal**
   - Accept input from microphone (SpeechRecognition) or text box.
   - Run symptom safety check against `knowledge/emergency_protocols.md`.
2. **Step 2: Retrieve Context**
   - Query patient history (`conditions`, `medications`, `allergies`, `caregiver`).
3. **Step 3: Generate 8-Step Plan**
   - Output structured task graph with dependencies.
4. **Step 4: HITL Approval**
   - Block execution until user clicks or speaks approval.
5. **Step 5: Sequential Tool Execution**
   - Execute tools defined in `tools/*.yaml`.
6. **Step 6: Verified Journey Dashboard**
   - Display confirmed booking IDs, cab details, reminder alarms, and caregiver notifications.
