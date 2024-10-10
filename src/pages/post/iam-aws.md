+++
author = "Elvis Finol"
date = 2021-12-07T23:00:00Z
tags = []
title = "IAM - AWS"

+++
Your AWS credentials let you log into the AWS management console, manage services, view and edit resources, and so on. Security in AWS begins with the foundation of identity, which is managed by the Identity and Access Management (IAM) service. Because your AWS credentials are the keys to the kingdom, the first order of business is to protect them from accidental exposure and unauthorised use. The second step is to ensure that users have only the permissions they need, and no more.

* IAM is used to securely control individual and group access to AWS resources.
* IAM makes it easy to provide multiple users secure access to AWS resources.
* IAM can be used to manage:
  * Users.
  * Groups.
  * Access policies.
  * Roles.
  * User credentials.
  * User password policies.
  * Multi-factor authentication (MFA).
  * API keys for programmatic access (CLI).
* Provides centralized control of your AWS account.
* Enables shared access to your AWS account.
* By default new users are created with NO access to any AWS services – they can only login to the AWS console.
* Permission must be explicitly granted to allow a user to access an AWS service.
* IAM users are individuals who have been granted access to an AWS account.
* Each IAM user has three main components:
  * A user-name.
  * A password.
  * Permissions to access various resources.
* You can apply granular permissions with IAM.
* You can assign users individual security credentials such as access keys, passwords, and multi-factor authentication devices.
* IAM is not used for application-level authentication.
* Identity Federation (including AD, Facebook etc.) can be configured allowing secure access to resources in an AWS account without creating an IAM user account.
* Multi-factor authentication (MFA) can be enabled/enforced for the AWS account and for individual users under the account.
* MFA uses an authentication device that continually generates random, six-digit, single-use authentication codes.
* You can authenticate using an MFA device in the following three ways:
  * Through the **AWS Management Console** – the user is prompted for a user name, password and authentication code.
  * Using the **AWS API** – restrictions are added to IAM policies and developers can request temporary security credentials and pass MFA parameters in their AWS STS API requests.
  * Using the **AWS CLI** by obtaining temporary security credentials from STS (aws sts get-session-token).
* It is a best practice to use MFA for all users and to use U2F or hardware MFA devices for all privileged users.
* IAM is universal (global) and does not apply to regions.
* IAM is eventually consistent.
* IAM replicates data across multiple data centres around the world.
* The “root account” is the account created when you setup the AWS account. It has complete Admin access and is the only account that has this access by default.
* It is a best practice to not use the root account for anything other than billing.
* Power user access allows all permissions except the management of groups and users in IAM.
* Temporary security credentials consist of the AWS access key ID, secret access key, and security token.
* IAM can assign temporary security credentials to provide users with temporary access to services/resources.
* IAM integrates with many different AWS services.
* IAM supports PCI DSS compliance.
* AWS recommend that you use the AWS SDKs to make programmatic API calls to IAM.

***

_References_

* [https://digitalcloud.training/certification-training/aws-solutions-architect-associate/security-identity-compliance/aws-iam/]()
* [AWS Certified Solutions Architect Study Guide: Associate SAA-CO2 Exam](https://www.amazon.com/-/es/Ben-Piper/dp/1119713080/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Associate+%28SAA-C02%29+Exam&qid=1631455748&sr=8-1)