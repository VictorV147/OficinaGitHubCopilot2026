---
name: playtesting-ux-review
description: "Play-test applications as a critical user and provide structured UX/fun factor feedback. Use when: evaluating game engagement, assessing user experience, testing interactive apps, gathering critical design feedback, identifying what makes (or breaks) fun."
argument-hint: "Optional: focus area (e.g., 'engagement', 'onboarding', 'endgame')"
user-invocable: true
---

# Playtesting & UX Review Skill

Systematic evaluation of applications through direct critical usage, generating structured feedback on usability, engagement, and emotional impact.

## When to Use

- **Interactive apps**: Games, icebreakers, social tools, workflows
- **UX validation**: Need perspective on what "feels fun" vs. what falls flat
- **Design feedback**: Before/after comparison, identifying pain points
- **Engagement diagnosis**: Why isn't this engaging? What's missing?
- **Fun factor assessment**: Could this game/app improve its emotional impact?

## Procedure

### 1. Context Gathering (5 min)
Quickly understand the application's purpose and mechanics:
- [ ] Read primary component files (App.tsx, main game logic)
- [ ] Identify intended audience and use case
- [ ] Check for game rules, instructions, or flow documentation
- [ ] Note any question/content data structures
- [ ] Look for special interactions (winning conditions, state management)

**Output**: 1-2 sentence understanding of what the app does and who it's for

---

### 2. Direct Usage (10-15 min)
Experience the app as a typical user would:
- [ ] **Cold start**: Begin with no expectations, follow visible instructions
- [ ] **Onboarding flow**: Does it clearly explain how to play/use?
- [ ] **Core interaction**: Repeat 2-3 cycles (play, reset, play again)
- [ ] **Win condition**: Reach success state and observe celebration/closure
- [ ] **Second playthrough**: Does it feel different? Better or stale?

**Output**: Raw impressions and emotional responses at each stage

---

### 3. Structured Evaluation

Assess across four layers:

#### Layer 1: Strengths ✅
What works emotionally and functionally?
- Clear purpose and messaging
- Intuitive controls/UI
- Engaging moments
- Smart design choices
- State management (persistence, transitions)

#### Layer 2: Critical Problems ⚠️
What breaks immersion, fun, or clarity?
- Lack of feedback (clicks feel "mute")
- Unclear win/loss conditions
- Repetitive or stale content
- Missing emotional beats (celebration, tension, resolution)
- No sense of progression or stakes

#### Layer 3: Design Flaws 🛑
What's the reasoning disconnect?
- Onboarding vs. reality gaps
- Oversimplified or overcomplicated mechanics
- Missing multiplayer/social elements (if intended)
- Poor pacing or flow
- Anticlimactic endings

#### Layer 4: Missing Elements 💡
What would significantly boost engagement?
- **Audio/visual**: Sounds, particles, animations, confetti
- **Content variety**: Themed sets, difficulty tiers, customization
- **Progression**: Scoring, stats, achievements, unlocks
- **Social**: Multiplayer, sharing, competitive modes
- **Narrative**: Theme, story beats, persona progression

---

### 4. Diagnostic Summary

Synthesize into a one-paragraph diagnosis:
- **Core emotional state**: Does the app feel fun, flat, or frustrating?
- **Root cause**: Why? (lacking content variety, missing feedback, no social element, etc.)
- **Primary gap**: The #1 thing that would fix the engagement issue
- **Verdict**: Is this ready to enjoy, or does it need critical fixes?

---

### 5. Generate Actionable Feedback

Create structured output:

```
## 🎯 Feedback Summary

### ✅ What Works
- [Strength 1]
- [Strength 2]
- [Strength 3]

### ⚠️ Critical Problems
- **[Problem]**: Impact → [why it matters]
- **[Problem]**: Impact → [why it matters]

### 🛑 Design Gaps
- [Gap 1 with reasoning]
- [Gap 2 with reasoning]

### 💡 Missing Elements
| Element | Why | Example |
|---------|-----|---------|
| [Category] | [Rationale] | [Concrete example] |

### 🎭 Root Diagnosis
[1-2 sentence diagnosis of why engagement isn't there]

### 🔧 Quick Priorities
1. [Highest impact fix]
2. [Medium impact improvement]
3. [Nice-to-have enhancement]
```

---

## Key Evaluation Principles

1. **Emotional honesty**: Describe what you *actually* felt, not what "should" work
2. **Compare to alternatives**: "This feels [X] compared to [similar app]"
3. **Distinguish intent from execution**: Problem might not be the idea, but how it's delivered
4. **Identify cascades**: One missing element often cascades into others (no sounds → feels less responsive → feels less fun)
5. **Prioritize ruthlessly**: What's the ONE thing that, if fixed, would most improve engagement?

---

## Common Patterns to Watch For

| Pattern | Indicator | Fix |
|---------|-----------|-----|
| **Silent feedback** | Clicking feels unresponsive, no reaction | Add visual/audio cues |
| **Anticlimactic wins** | Winning feels empty, not celebrated | Animations, confetti, fanfare |
| **Content fatigue** | Fun for 1 round, stale on 2nd | Variety, themes, randomization |
| **Missing stakes** | No tension, no urgency | Scoring, competition, time limit |
| **Solo when social** | Game designed for groups but no interaction feedback | Shared state, group progress, notifications |
| **Unclear rules** | You're confused about what to do next | Onboarding, persistent UI hints |

---

## After the Review

- **For designers**: Use diagnosis as north star for next iteration
- **For developers**: Prioritize problems in order: emotional impact → mechanics → content
- **For product**: Consider if missing elements are scope creep or essential MVP features
- **For iteration**: A/B test feedback — which fix delivers highest engagement gain?
