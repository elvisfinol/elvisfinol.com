---
title: Managing EC2 Instances at scale - System Manager (SSM)
date: 2021-01-23T21:00:03.000-03:00

---
*How does it works AWS System Manager?*



> AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and enables you to automate operational tasks across your AWS resources.

## Table content

- [Overview](#overview)
- [Features](#features)
- [Documents Syntax](#documents-syntax)
- [Run Command](#run-command)
- [Patch Manager](#patch-manager)
- [Inventory](#inventory)
- [State Manager](#state-manager)
- [Agent](#agent)


## Overview

- Helps you manage your **EC2** and **On-Premise** systems at scale.
- Get operation insights about the state of you infraestructure.
- Easily detect problems.
- Patching automation for enhanced compliance.
- Works for both Windows and Linux OS.
- Integrated with CloudWatch metrics / dashboards.
- Integrated with AWS Config.

<sub>[⇧ back to top](#table-content)</sub>


## Features

- Resource Groups
  - Create, view or manage logical group of resources thanks to **tags**.
  - Allow creation of logical groups of resources such as:
      - Applications.
      - Different layers of an applicaton stack.
      - Production versus development environments.
  - Regional service (you need to create diffente resource groups if you are operating in differente regions).
  - Works with EC2, S3, DynamoDB, Lambda and many more.
- Insights:
  - Insights Dashboard.
  - Invertory: discovery and audit the software installed.
  - Compliance.
- Parameter Store
- Action:
  - Automation (shut down EC2, create AMIs).
  - Run Command.
  - Session Manager.
  - Patch Manager.
  - Maintenance Windows.
  - State Manager: define and maintaining configuration of OS and applications.

<sub>[⇧ back to top](#table-content)</sub>


## Documents Syntax

  - You define parameters and actions.
  - Can be apply to *State Manager*, *Patch Manager*, *Automation*, *Run Command* and *Parameter Store*.
  - Can be YAML or JSON:

  ```yaml
  DirectoryType:
    type: String
    description: "(Required) The directory type to launch."
    default: AwsMad
    allowedValues:
    - AdConnector
    - AwsMad
    - SimpleAd
  ```

  ```json
  "DirectoryType": {
    "type": "String",
    "description": "(Required) The directory type to launch.",
    "default": "AwsMad",
    "allowedValues": [
      "AdConnector",
      "AwsMad",
      "SimpleAd"
    ]
  }
  ```

<sub>[⇧ back to top](#table-content)</sub>

## Run Command

  - helps perform on-demand changes like updating applications or running Linux shell scripts and Windows PowerShell commands on a target set of dozens or hundreds of instances.
  - Execute a document (script) or just run a command
  - Run command across multiple instances (using resource groups)
  - Rate Control / Error Control
  - Integrated with IAM & CloudTrial
  - No need for SSH
  - Results in the console

<sub>[⇧ back to top](#table-content)</sub>

## Patch Manager

  - Inventory => List Software on an instance
  - Inventory + Run Command => Patch Software
  - Patch Manager + Maintenance Window => Patch OS
  - helps automate process of patching managed instances with both security related and other types of updates.
  - helps apply patches for both operating systems and applications. **(On Windows Server, application support is limited to updates for Microsoft applications.)**
  - enables scanning of instances for missing patches and applies them individually or to large groups of instances by using EC2 instance tags.
  - uses *patch baselines*, which can include rules for auto-approving patches within days of their release, as well as a list of approved and rejected patches.
  - helps install security patches on a regular basis by scheduling patching to run as a Systems Manager maintenance window task.

<sub>[⇧ back to top](#table-content)</sub>

## Inventory

- provides visibility into your Amazon EC2 and on-premises computing environment
- collect *metadata* from the managed instances about applications, files, components, patches, and more on your managed instances

<sub>[⇧ back to top](#table-content)</sub>

## State Manager

- helps automate the process of keeping the managed instances in a defined state.
- helps ensure that the instances are bootstrapped with specific software at startup, joined to a Windows domain (Windows instances only), or patched with specific software updates.

<sub>[⇧ back to top](#table-content)</sub>

## Agent
- is software that can be installed and configured on an EC2 instance, an on-premises server, or a virtual machine (VM).
- makes it possible for Systems Manager to update, manage, and configure these resources.
- must be installed on each instance to use with Systems Manager.
- usually comes preinstalled with lot of Amazon Machine Images (AMIs), while it must be installed manually on other AMIs, and on on-premises servers and virtual machines for your hybrid environment.

<sub>[⇧ back to top](#table-content)</sub>