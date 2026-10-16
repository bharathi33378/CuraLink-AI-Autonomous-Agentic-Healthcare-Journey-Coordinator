---
name: clinical-triage
description: Autonomous clinical symptom triage and emergency red-flag detection
version: 1.0.0
---

# Clinical Triage Skill

## Purpose
Evaluates natural language patient symptoms against established cardiac and chronic disease red flags to determine clinical urgency (Emergency vs Urgent vs Routine).

## Procedure
1. Extract primary symptom tokens from user input.
2. Check against `knowledge/emergency_protocols.md` red-flag database.
3. If red flags exist:
   - Immediately halt standard appointment scheduling.
   - Trigger Emergency Escalation Protocol (ambulance dispatch 108/911 + emergency caregiver SMS).
4. If no red flags exist:
   - Grade as Routine Follow-up.
   - Hand off to `journey-coordination` skill.
