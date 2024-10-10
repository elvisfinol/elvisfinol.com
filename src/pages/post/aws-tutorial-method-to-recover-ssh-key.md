---
title: "[How-to] I lost my SSH key for EC2! Steps to get into your instance back"
date: 2021-01-28T12:51:07-03:00
draft: false
tags: ["aws", "ec2", "ssh", "how-to", "sysops"]
author: "Elvis Finol"
---

*Here you will find several methods to access your EC2 if you lost you SSH key*

## If the instance is EBS backed:
  - Stop the instance, detach the root volume
  - Attach the root volume to another instance as a data volume
  - Modify the ~/.ssh/authorized_keys file with your new key
  - Move the the volume back to the stopped instance
  - Start the instance and you can SSH into it again

## If the instance is EBS (new method 🧙):
- Run the [AWSSupport-ResetAccess](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-awssupport-resetaccess.html) automation document in SSM

## Instance Store backed EC2:
  - You cannot stop the instance (otherwise data is lost) - AWS recommends termination
  - Use Session Manager access and edit the ~/.ssh/authorized_keys file directly

## *references*
- [Connect to your Linux instance if you lose your private key.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-lost-key-pair.html)
- [AWSSupport-ResetAccess](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-awssupport-resetaccess.html)

