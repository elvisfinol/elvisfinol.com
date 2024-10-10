+++
author = "Elvis Finol"
date = 2021-09-05T22:00:00Z
tags = ["Cloud Formation", "AWS"]
title = "AWS Solutions Architect - Assignment for the loop!"

+++

In May 2021, I went through an interview process at AWS for the role of Solutions Architect. Unfortunately, I did not successfully pass the interview loop. However, I did receive good feedback about my assignment. Therefore, I would like to share my experience with you regarding this process and discuss the assignment in detail. I won’t upload the Cloud Formation template for obvious reasons, but the exercise is not complicated, and it allows you to be creative on the assignment.
> Consider that you are doing this for a customer, so make sure to put in some effort.

By the way, I’m not certain if this assignment is still current, but it can be helpful for practice if you’re preparing the interview for the **AWS Solutions Architect role.**

### **Context**

So far your customer has launched an AWS Elastic Load Balancer (ELB) and an Amazon Elastic Compute Cloud (EC2) instance acting as the web server. Both are deployed in a Virtual Private Cloud (VPC) on AWS. While your customer's initial deployment aims to present a static web page to its users (demo.html located in the document root of the web server), the end solution should continue to be suitable for generating dynamic responses (your customer is currently developing the application). The customer is not sure about their future direction or requirements and are looking to you to provide expert guidance despite the ambiguity.

You are contacted and asked to:

**a) Troubleshoot the implementation by doing the minimum amount of work required to make the website operational. Your customer expects detailed written troubleshooting instructions or scripts for the in-house team.**

**Step by step to find the problem (Questions that I made)**

1. Verify the topology used on the CloudFormation template
2. Verify VPC/EC2 configuration:
* IGW is associated with the VPC?
* Route tables are associate with the instance subnets?
* Does the instance have Public IP associated?
* Validate Instance status checks.

3. Verify Elastic Load Balancer configuration
* Is the instance attached to the ELB?
* Does ELB is pointing to the correct AZ?
* How is the health check configured?
4. Verify Inbound/outbound rules configured on SecurityGroups
* Does the ELB SG have rules configured?
* Does the APP SG have rules configured?

**b) Propose short term changes you could help them implement to improve the availability, security, reliability, cost and performance before the project goes into production. Your customer expects you to explain the business and technical benefits of your proposals, with artifacts such as a design or architecture document and diagrams.**

Reviewing the Cloud Formation stack you have provided; These recommendations will help you to easy scale your application, having workloads reliable, built-in security and highly available, taking consideration on costs. You will find a few new AWS services in this proposal, however, will explain all advantages and main purposes.

I propose a three tier web application architecture (Web/Presentation, App/Logic and Data separately). Each tier will be independent of the other tiers, so updates or changes can be carried out without affecting the application as a whole.

 1. First entry service I recommend **Route53** for DNS Resolution to connects user requests to AWS infrastructure. You do not have to pay upfront fees and pay just for what you use, you will be charged for the amount resolved queries. For more information, see [https://aws.amazon.com/route53/pricing/?nc1=h_ls](https://aws.amazon.com/route53/pricing/?nc1=h_ls "https://aws.amazon.com/route53/pricing/?nc1=h_ls")
 2. Each **Route53** health check can monitor a specified resource of your architecture, being able to trigger an email alarm, so you be always up to date if something failed.
 3. The **NACLs** (Network Access Control List) on your template has default configuration allowing inbound/outbound to all type of traffic. So define the type of requests your app will receive and always ensure you do not use a wide range of ports or overly permissions to **NACLs** during configuration.
 4. Use **NACLs** in combination with your Security Groups inside your VPC to reinforce the security.
 5. As the entry point of your **VPC** there is an **Application Load Balancer** to route all requests at the application layer of your web server locate in the public subnet. **ALB** perform health checks and guarantee all petitions will be delegated only to the healthy instance. Also adding a security layer to your instances due it restricts the web servers accessible only via the **ALB**.
 6. Configure your **ALB** to listen only HTTPS instead of HTTP for secure purpose. Make sure to change your web server configuration and configure your SSL/TLS certificate.
 7. I recommend add an **auto-scaling group** (minimum 1 instance running) to your Web Server to protect the instance from interruptions, ensuring the minimum number of instances and responds to changes in load by scaling the instance pool appropriately. If your user requests increase, your web server can scale automatically and servers will manage the increase load.
 8. Same recommendation on your private subnet that your app tier (under development) will be deployed. Auto-scaling group will manage the scalability on those servers. You can try with spot instances (to reduce costs) at the logic tier until you define your workload and the integration with your Presentation Layer.
 9. Finally, at the Data tier I select a generic database. Could be a Relational or NoSQL. Not every database fits every business. If you have a schema define and data integrity is essential for you, go with [SQL database](https://aws.amazon.com/rds/?nc1=h_ls). In case, your data has no schema define, no need for joins or complex transactions and scale faster a [NoSQL database](https://aws.amazon.com/dynamodb/?trk=ps_a134p000006gXuVAAU&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_LATAMO&sc_publisher=Google&sc_category=Database&sc_country=LATAMO&sc_geo=LATAM&sc_outcome=acq&sc_detail=dynamo%20database&sc_content=DynamoDB_e&sc_matchtype=e&sc_segment=490481979011&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CDatabase%7CDynamoDB%7CLATAMO%7CEN%7CText&s_kwcid=AL!4422!3!490481979011!e!!g!!dynamo%20database&ef_id=CjwKCAjwy42FBhB2EiwAJY0yQl2W3Am5tc8t-q10XX5GvNrbgpRHTOJVvgu18KV7fnvxC-8yxwn3IBoCQVUQAvD_BwE:G:s&s_kwcid=AL!4422!3!490481979011!e!!g!!dynamo%20database) would fit better.
10. For costs, create a billing alarm based on your monthly budget. I would recommend use [AWS budget](https://aws.amazon.com/aws-cost-management/aws-budgets/?nc1=h_ls) to define custom budgets that alert you when your costs or usage exceed and use [AWS Cost Explorer](https://aws.amazon.com/es/aws-cost-management/aws-cost-explorer/) to manage your costs and usage over time providing fine-grained billing to understand your costs.

![](https://elvisfinol-website-bucket.s3.eu-west-1.amazonaws.com/short-term.png)

**c) Optionally, propose high level alternative solution(s) for the longer term as their web application becomes more successful.**

 1. Considering the short term architecture, I proposed keeping the three tier and launching infrastructure on 2 AWS Availability zones. To provide high availability. In case of issues you can route to your healthy AZ.
 2. I would recommend adding **CDN** like [CloudFront](https://aws.amazon.com/cloudfront/?nc1=h_ls) to cache the static website content from your web server (Presentation layer). Also, **CloudFront** will offer you low latency, high transfer speeds and security capabilities. You do not have to pass all the internet route, instead you are entering through the AWS backbone.
 3. In front of the **CloudFront** I suggest using a [Web Application Firewall](https://aws.amazon.com/waf/?nc1=h_ls) (**AWS WAF**) to filter malicious requests and protect from DDoS attacks.
 4. I would add an extra **ALB** to distribute load for your Web tier, and your App tier solution. It may give you an extra cost however you decouple your app reducing dependencies between and allow you to can scale faster. In the long run would be better.
 5. As mentioned above on short term (Web Server and App Servers), will keep the use of auto-scaling to automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. In case of high demand your compute resources will adapt to the amount of requests. For example, you could scale based on CPU usage. For more information, see [https://aws.amazon.com/es/autoscaling/features/](https://aws.amazon.com/es/autoscaling/features/ "https://aws.amazon.com/es/autoscaling/features/")
 6. You could use **EBS** volumes for your **EC2** instances and perform snapshots monthly to keep you OS backup.
 7. For the Data tier, if you use relational database like **RDS** you can set up Multi AZ with auto-failover or use [Aurora](https://aws.amazon.com/rds/aurora/?nc1=h_ls&aurora-whats-new.sort-by=item.additionalFields.postDateTime&aurora-whats-new.sort-order=desc) which is a MySQL and PostgreSQL-compatible relational database built for the cloud and is highly available by nature.
 8. In case of a NoSQL database I would recommend [DynamoDB](https://aws.amazon.com/dynamodb/?trk=ps_a134p000006gXuVAAU&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_LATAMO&sc_publisher=Google&sc_category=Database&sc_country=LATAMO&sc_geo=LATAM&sc_outcome=acq&sc_detail=dynamo%20database&sc_content=DynamoDB_e&sc_matchtype=e&sc_segment=490481979011&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CDatabase%7CDynamoDB%7CLATAMO%7CEN%7CText&s_kwcid=AL!4422!3!490481979011!e!!g!!dynamo%20database&ef_id=CjwKCAjwy42FBhB2EiwAJY0yQl2W3Am5tc8t-q10XX5GvNrbgpRHTOJVvgu18KV7fnvxC-8yxwn3IBoCQVUQAvD_BwE:G:s&s_kwcid=AL!4422!3!490481979011!e!!g!!dynamo%20database) providing speed, scalability and synchronously replication across availability zones.
 9. For monitoring your complete stack (applications, infrastructure, and services) and centralize your logging solution, use **CloudWatch**. It also helps you to understand the infrastructure.
10. Use [S3 (Object storage solution service](https://aws.amazon.com/s3/?nc1=h_ls)) so all the logs will be saved in one place for investigation if something fail. **S3** has several storage classes, to rotate logs and reduce costs.
11. Use [IAM](https://aws.amazon.com/iam/?nc1=h_ls) to control who is authenticated (signed in) and authorized (has permissions) to use resources. You will gain granular control and enhanced security.

![](https://elvisfinol-website-bucket.s3.eu-west-1.amazonaws.com/long-term.png)

Hope you find this useful, and good luck in your upcoming interview. 🚀
