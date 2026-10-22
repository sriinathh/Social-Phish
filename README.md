# SocialPhish

```text
 ███████╗ ██████╗  ██████╗██╗ █████╗ ██╗     ██████╗ ██╗  ██╗██╗███████╗██╗  ██╗
 ██╔════╝██╔═══██╗██╔════╝██║██╔══██╗██║     ██╔══██╗██║  ██║██║██╔════╝██║  ██║
 ███████╗██║   ██║██║     ██║███████║██║     ██████╔╝███████║██║███████╗███████║
 ╚════██║██║   ██║██║     ██║██╔══██║██║     ██╔═══╝ ██╔══██║██║╚════██║██╔══██║
 ███████║╚██████╔╝╚██████╗██║██║  ██║███████╗██║     ██║  ██║██║███████║██║  ██║
 ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝

                   .:.:. Cybersecurity Research Lab by: Srinath .:.:.
```

[![Author](https://img.shields.io/badge/Author-Srinath-orange.svg)](#author)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20Kali-blue.svg)](https://www.kali.org/)
[![Bash](https://img.shields.io/badge/Language-Bash-green.svg)](https://www.gnu.org/software/bash/)
[![PHP](https://img.shields.io/badge/Dependency-PHP-777bb4.svg)](https://www.php.net/)
[![License](https://img.shields.io/badge/License-Educational-red.svg)](#legal-disclaimer)

---

## Overview

SocialPhish is an automated security research and penetration testing framework designed to demonstrate social engineering vectors and credential exposure risks within controlled lab environments.

> [!CAUTION]
> ### Legal Disclaimer
> This tool is strictly intended for authorized educational testing, internal security awareness training, and academic research in private network labs.
> Unauthorized use against systems or individuals without prior explicit written consent is illegal. Users are entirely responsible for compliance with all applicable local, national, and international cybersecurity laws.

---

## Features

- **Terminal-Driven UI**: Fast, interactive terminal menu with clean ANSI styling.
- **Multi-Service Catalog**: Pre-configured templates for awareness simulations.
- **Port Forwarding Support**: Integrated tunnel options for local testing.
- **Lightweight Dependencies**: Runs directly on standard Unix environments using Bash and PHP.

---

## Requirements

Ensure the following prerequisites are installed before launching:

| Tool | Purpose | Status Check |
| :--- | :--- | :--- |
| **Bash** | Script execution environment | `bash --version` |
| **PHP** | Local test web server | `php -v` |
| **cURL** | Data retrieval & connectivity | `curl --version` |

---

## Installation & Execution

```bash
# 1. Clone repository
git clone https://github.com/sriinathh/Social-Phish.git

# 2. Navigate to project directory
cd Social-Phish

# 3. Grant execution permissions
chmod +x socialphish.sh

# 4. Launch the interface
./socialphish.sh
```

---

## Architecture & Directory Structure

```text
Social-Phish/
├── socialphish.sh      # Main CLI launcher and controller
├── README.md           # Documentation and usage guide
└── sites/              # Simulation template modules
```

---

## Defensive Recommendations

To mitigate social engineering and credential exposure risks demonstrated by these simulations:

1. **Multi-Factor Authentication (MFA)**: Enforce hardware security keys (FIDO2 / WebAuthn) or time-based one-time passwords (TOTP).
2. **Password Managers & Passkeys**: Encourage passkeys and password managers that verify exact origin domains before autofilling credentials.
3. **Security Awareness**: Conduct regular training to help users inspect URLs, SSL certificates, and sender identities.

---

## Author

- **Maintained by**: Srinath
- **Context**: Cybersecurity Research & Educational Lab

