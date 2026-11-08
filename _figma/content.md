# Kenzie Nabeel Rivanda — Website Content

---

## Landing page

**Kenzie Nabeel Rivanda**

Slogan: I take systems apart to find where trust breaks, then write it up so someone else can use it.

Role: Security engineer  |  Location: Jakarta  |  BINUS 2026

## Navigation

Home · Work · Awards · Cases · Record · Kit · Contact

---

## 01 — Work

### Penetration Tester Intern
ITSEC Asia — Feb 2025 — Feb 2026 — Jakarta, ID

- Web, mobile and API pentesting across finance and fintech engagements.
- Reverse engineered obfuscated Android apps — API encryption, logic flow, key recovery.
- OT red teaming: malware and payload development in OT environments.

### CTF Player & Challenge Author
PETIR Cyber Security — 2023 — present — BINUS

- Reverse engineering and hardware categories, national and international.
- Authored 10+ reverse engineering challenges across 3+ competitions.

---

## 02 — Awards

- **1st** — Hack The City CTF — SATSIBER TNI — Sep 2025
- **1st** — Joints CTF — Universitas Gadjah Mada — May 2023
- **2nd** — Gemastik XVIII — Keamanan Siber — Ditmawa — Oct 2025
- **3rd** — Wreck-IT CTF — Politeknik Sandi Siber Negara — May 2023
- **10+** — CTF challenges authored — Reverse engineering category — Ongoing

---

## 03 — Cases

### Case 001 — Anti-RE
Python · Windows x86-64  |  shipped

A catalogue of anti reverse-engineering techniques — anti-debug, anti-VM and runtime integrity checks — built to see evasive payloads from both sides of the debugger.

**Target** — Windows PE binaries, x86-64. A reference implementation rather than a single payload.

**Vector**
- Anti-debug via PEB.BeingDebugged, NtQueryInformationProcess, hardware breakpoint registers.
- Anti-VM through CPUID hypervisor bits, registry artefacts and timing skew.
- Runtime integrity: checksumming its own .text section to catch patches.

**Why** — Each check abuses an assumption the analyst makes — that the debugger is invisible, that a VM looks like bare metal, that the mapped image equals the file on disk. Break one and the payload branches to a decoy path.

**Measured**
| Technique | x64dbg | Frida | Note |
|---|---|---|---|
| PEB.BeingDebugged | ✕ caught | ✕ | trivial to bypass |
| NtQueryInformationProcess | ✕ caught | ~ | needs hooking |
| Hardware breakpoints | ✓ holds | ~ | most reliable |
| Text-section checksum | ✓ holds | ✓ | catches patches |

**Outcome** — Hardened red team payloads against the same tooling used to analyse them.

Links: Source  (opens in a new tab) (https://github.com/g3ngi/Anti-RE)
Tags: reverse-engineering · evasion · windows

### Case 002 — NoTrust Agent
Swift · macOS  |  in progress

Zero-trust posture agent for macOS. Continuous attestation and conditional access, built to test the claim that a managed endpoint is trustworthy by default.

**Target** — macOS endpoints. The companion gadget targets iOS; both assume the device may already be compromised.

**Model**
- Post-compromise persistence: signing state, launch agents and daemons, TCC grants.
- Integrity drift: SIP status, unsigned kernel extensions, modified system binaries.
- Trust boundary failure: a device that passes one check once, then drifts.

**Approach** — Continuous evidence over point-in-time scoring. Signals are re-collected on an interval and aggregated into a verdict that gates access — not a single enrolment check.

**Open** — An agent cannot be trusted to police its own host — a compromised one can lie. The fix is remote attestation, which is the part still unsolved.

Links: Agent  (opens in a new tab) (https://github.com/g3ngi/NoTrust_Agent) · Gadget  (opens in a new tab) (https://github.com/g3ngi/NoTrust_Gadget)
Tags: zero-trust · macos · swift

---

## 04 — Also built

- **AI-Hoshino-Bot** (Python) — Flags malicious URLs in Discord chat.
- **NoTrust_Gadget** (Swift) — iOS posture checks.
- **ctf-challs** (Java) — Authored CTF challenges, RE and binary.
- **EDIV-LCA** (Research) — Master's thesis: life-cycle assessment.
- **wazuh_contribute** (★ 1) — Contributions to Wazuh.
- **all 32 repositories** (12 langs) — Go, Rust, Solidity, Jupyter, and the rest.

---

## 05 — Record

### BSc, Cyber Security
Bina Nusantara University — Jul 2022 — Aug 2026 — Jakarta

- Reverse Engineering · Binary Exploitation · Mobile Pentesting · Software Security.

### MSc, Computer Science
Bina Nusantara University · fast track — 2025 — 2027 — Jakarta

- Thesis project: EDIV-LCA — life-cycle assessment tooling.

### PETIR Cyber Security
Team member — 2023 — present — BINUS

- CTF team. Reverse engineering and hardware.

### UKM Band BINUS
President, Kemanggisan region — 2022 — 2025 — Jakarta

- Led the Kemanggisan chapter.

---

## 06 — Kit

**Languages** — Python · Java · Swift · C / C++ · JavaScript · Bash · Go · Rust

**Reverse eng.** — Ghidra · IDA Pro · x64dbg · radare2 · GDB · Frida

**Red team** — Burp Suite · Metasploit · Nmap · Cobalt Strike · SQLMap · Kali

**IoT / hardware** — ESP32 / Arduino · UART / JTAG · firmware extraction · PlatformIO

**Web & app** — OWASP Top 10 · JADX · MobSF · Postman · Wireshark

**Dev & infra** — Git / GitHub · Docker · Linux · CI / CD · Node-RED · MQTT

**AI / ML** — PyTorch · scikit-learn · TensorFlow · Hugging Face · YOLO

**Spoken** — Indonesian (native) · English (professional)

### Certifications

- Certified AppSec Practitioner — The SecOps Group
- ROCm Star Application Developer — AMD
- JavaScript Backend Scholarship — DBS Foundation · 2023
- Deep Learning Workshop — NVIDIA DLI

---

## 07 — Test point (TP-01)

Prompt: Find any input this accepts.

```js
// true for one shape of input function check(s) { let h = 0x2f ; for ( const c of s) h ^= c.charCodeAt( 0 ); return h === 0 && s.length === 4 ; }
```

Solution: The accumulator starts at 0x2f and XORs every byte, so you need b1 ^ b2 ^ b3 ^ b4 === 0x2f . Pick any three bytes and the fourth is forced: for abc it is 0x2f ^ 0x61 ^ 0x62 ^ 0x63 = 0x4f — the character O , so abcO passes.

---

## 08 — Contact

**Let's talk .**

Email is fastest.

Email: kenzienabeel@gmail.com
GitHub: https://github.com/g3ngi
LinkedIn: https://www.linkedin.com/in/kenzie-nabeel/

---

Footer: Kenzie Nabeel Rivanda · Jakarta · Hand-written · no framework