+++
author = "Elvis Finol"
date = 2021-09-11T22:00:00Z
tags = ["AWS"]
title = "Core AWS services"

+++
Functions of some core AWS services, organized by category.

## Compute

**Elastic Compute Cloud (EC2)**

EC2 server instances provide virtual versions of the servers you would run in your local data center. EC2 instances can be provisioned with the CPU, memory, storage, and network interface profile to meet any application need, from a simple web server to one part of a cluster of instances providing an integrated multi-tiered fleet architecture. Since EC2 instances are virtual, they’re resource-efficient and deploy nearly instantly.

**Lambda**

Serverless application architectures like the one provided by Amazon’s Lambda service allow you to provide responsive public-facing services without the need for  
a server that’s actually running 24/7. Instead, network events (like consumer requests) can trigger the execution of a predefined code-based operation. When the operation (which can currently run for as long as 15 minutes) is complete, the Lambda event ends, and all resources automatically shut down.

**Auto Scaling**

Copies of running EC2 instances can be defined as image templates and automatically launched (or scaled up) when client demand can’t be met by existing instances. As demand drops, unused instances can be terminated (or scaled down).

**Elastic Load Balancing**

Incoming network traffic can be directed between multiple web servers to ensure that a single web server isn’t overwhelmed while other servers are underused or that traffic isn’t directed to failed servers.

## Networking

**Elastic Beanstalk**

Beanstalk is a managed service that abstracts the provisioning of AWS compute and networking infrastructure. You are required to do nothing more than push your application code, and Beanstalk automatically launches and manages all the necessary services in the background.

**Virtual Private Cloud (VPC)**

VPCs are highly configurable networking environments designed to host your EC2 (and RDS) instances. You use VPC-based tools to secure and, if desired, isolate your instances by closely controlling inbound and outbound network access.

**Direct Connect**

By purchasing fast and secure network connections to AWS through a third-party provider, you can use Direct Connect to establish an enhanced direct tunnel between your local data center or office and your AWS-based VPCs.

**Route 53**

Route 53 is the AWS DNS service that lets you manage domain registration, record administration, routing protocols, and health checks, which are all fully integrated with the rest of your AWS resources.

**CloudFront**

CloudFront is Amazon’s distributed global content delivery network (CDN). When properly configured, a CloudFront distribution can store cached versions of your site’s content at edge locations around the world so that they can be delivered to customers on request with the greatest efficiency and lowest latency.

## Storage

**Simple Storage Service (S3)**

S3 offers highly versatile, reliable, and inexpensive object storage that’s great for data storage and backups. It’s also commonly used as part of larger AWS production processes, including through the storage of script, template, and log files.

**S3 Glacier**

A good choice for when you need large data archives stored cheaply over the long term and can live with retrieval delays measuring in the hours. Glacier’s lifecycle management is closely integrated with S3.

**Elastic Block Store (EBS)**

EBS provides the persistent virtual storage drives that host the operating systems and working data of an EC2 instance. They’re meant to mimic the function of the storage drives and partitions attached to physical servers.

**Storage Gateway**

Storage Gateway is a hybrid storage system that exposes AWS cloud storage as a local, on-premises appliance. Storage Gateway can be a great tool for migration and data backup and as part of disaster recovery operations.

## Database

**Relational Database Service (RDS)**

RDS is a managed service that builds you a stable, secure, and reliable database instance. You can run a variety of SQL database engines on RDS, including MySQL, Microsoft SQL Server, Oracle, and Amazon’s own Aurora.

**DynamoDB**

DynamoDB can be used for fast, flexible, highly scalable, and managed nonrelational (NoSQL) database workloads.

## Application Management

**CloudWatch**

CloudWatch can be set to monitor process performance and resource utilization and, when preset thresholds are met, either send you a message or trigger an automated response.

**CloudFormation**

This service enables you to use template files to define full and complex AWS deployments. The ability to script your use of any AWS resources makes it easier to automate, standardising and speeding up the application launch process.

**CloudTrail**

CloudTrail collects records of all your account’s API events. This history is useful for account auditing and troubleshooting purposes.

**Config**

The Config service is designed to help you with change management and compliance for your AWS account. You first define a desired configuration state, and Config evaluates any future states against that ideal. When a configuration change pushes too far from the ideal baseline, you’ll be notified.

## Security and identity

**Identity and Access Management (IAM)**

You use IAM to administrate user and programmatic access and authentication to your AWS account. Through the use of users, groups, roles, and policies, you can control exactly who and what can access and/or work with any of your AWS resources.

**Key Management Service (KMS)**

KMS is a managed service that allows you to administrate the creation and use of encryption keys to secure data used by and for any of your AWS resources.

**Directory Service**

For AWS environments that need to manage identities and relationships, Directory Service can integrate AWS resources with identity providers like Amazon Cognito and Microsoft AD domains.

## Application integration

**Simple Notification Service (SNS)**

SNS is a notification tool that can automate the publishing of alert topics to other services (to an SQS Queue or to trigger a Lambda function, for instance), to mobile devices, or to recipients using email or SMS.

**Simple Workflow (SWF)**

SWF lets you coordinate a series of tasks that must be performed using a range of AWS services or even non- digital (meaning, human) events.

**Simple Queue Service (SQS)**

SQS allows for event-driven messaging within distributed systems that can decouple while coordinating the discrete steps of a larger process. The data contained in your SQS messages will be reliably delivered, adding to the fault tolerant qualities of an application.

**API Gateway**

This service enables you to create and manage secure and reliable APIs for your AWS-based applications.

***

_References_

* [AWS Certified Solutions Architect Study Guide: Associate SAA-CO2 Exam](https://www.amazon.com/-/es/Ben-Piper/dp/1119713080/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Associate+%28SAA-C02%29+Exam&qid=1631455748&sr=8-1)