+++
author = "Elvis Finol"
date = 2021-09-04T22:00:00Z
tags = ["devops"]
title = "DevOps Concepts"

+++
![](https://miro.medium.com/max/874/1*_eJaw96xLBR-xEzlwbTOyw.png)

## **What is DevOps?**

**DevOps** is a set of practices that combines software development (_Dev_) and IT operations (_Ops_). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.

## Build Automation

### **What is Build Automation?**

* **Build automation**: automation of the process of preparing code for deployment to a live environment
* Depending on what languages are used, code needs to be compiled, linted, minified, transformed, unit tested, etc.
* Build automation means taking these steps and doing them in a consistent, automated way using a script or tool
* The tools of build automation often differ depending on what programming languages and frameworks are used, but they have one thing in common: **automation**!

### **What does Build Automation look like?**

* Usually, build automation looks like running a command-line tool that builds code using configuration files and/or scripts that are treated as part of the source code
* Build automation is independent of an IDE
* Even if you can build within the IDE, it should be able to work the same way outside the IDE
* As much as possible, build automation should be agnostic of the configuration of the machine that it is build on
* Your code should be able to build on someone else's machine the same way it builds on yours

### **Why do Build Automation?**

* **Fast** - Automation handle tasks that would otherwise need to be done manually
* **Consistency** - The build happens the same way every time, removing problems and confusion that happen with manual builds
* **Repeatable** - The build can be done multiple times with the same results. Any version of the code can always be transformed into deployable code in a consistent way
* **Portable** - The build can be done the same way on any machine. Anyone on the team can be build on their machine, as well as on a shared build server. Building code doesn't depend on specific people or machines
* **Reliable** - There will be fewer problems caused by bad builds

## Continuous Integration

### **What is Continuous Integration?**

* Continuous Integration (CI): the practice of frequently merging code done by developers
* Traditionally,  developers would work separately, perhaps for weeks at a time, and the merge all their work together at the end in one large effort
* CI means merging constantly thought out the day, usually with the execution of automated tests to detect any problems caused by the merge
* Merging all the time could be a lot of work, so to avoid that it should be automated

### **What does Continuous Integration look like?**

* Continuous integration is usually done with the help of a CI server
* When a developer commits a code change, the CI server sees the change and automatically perform the build, also executing automated tests
* This occurs multiple times a day
* If there is any problem with the build, the CI server immediately and automatically notifies the developers
* If anyone commits code that "breaks the build" they are responsible for fixing the problem or rolling back their changes immediately so that other developers can continue working

### **Why do Continuous Integration?**

* **Early detection** of certain types of bugs - If code doesn't compile or an automated test fails, the developers are notified and can fix it immediately. The sooner these bugs are detected, the easier they are to fix
* **Eliminate the scramble** to integrate just before a big release - The code is constantly merged, so there is no need to do a big merge at the end
* Make **frequent releases** possible - Code is always in a state that can be deployed to production
* Makes **continuous testing** possible - Since the code can always be run, QA testers can get their hands on it all throughout the development process, not just at the end
* Encourages **good coding practices** - Frequent commits encourages simple, modular code

## Continuous Delivery and Continuous Deployment

### **What is Continuous Delivery?**

* Continuous Delivery (CD): the practice of continuously maintaining code in a deployable state
* Regardless of whether or not the decision is made to deploy, the code is always in a state that is able to be deployed
* Some terms Continuous Delivery and Continuous Deployment interchangeably, or simply use the abbreviation CD

### **What is Continuous Deployment?**

* Continuous Deployment: the practice of frequently deploying small code changes to production
* Continuous Delivery is keeping the code in a deployable state. Continuous Delivery is actually doing the deployment frequently
* Some companies that do Continuous Deployment deploy to production multiple times a day
* There is no standard for how often you should deploy, but in general the more often you deploy the better
* With Continuous Deployment, deployments to production are routine and commonplace. They are not a big, scary event

### **What does Continuous Delivery and Continuous Deployment look like?**

* Each version of the code goes through a series of states, such as automated build, automated testing and manual acceptance testing. The result of this process is an artifact or package that is able to be deployed
* When the decision is made to deploy, the deployment is automated. What the automated deployment looks like depends on the architecture, but no matter what the architecture is, the deployment is automated
* If a deployment causes a problem, it is quickly and reliably rolled back using and automated process
* Rollbacks aren't a big deal because the developers can redeploy a fixed version as soon as they have one available
* No one grips their desk in fear during a deployment, even if the deployment does cause a problem

### **Why do Continuous Delivery and Continuous Deployment?**

* **Faster time-to-market** - Get features into the hands of customers more quickly rather than waiting for a lengthy deployment process that doesn't happen often
* **Fewer problems caused by the deployment process** - Since the deployment process is frequently used, any problems with the process are mo easily discovered
* **Lower risk** - The more changes are deployed at once, the higher the risk. Frequent deployments of only a few changes are less risky
* **Reliable rollbacks** - Robust automation means rollbacks are a reliable way to ensure stability for customers, and rollback don't hurt developers because they can roll forward with a fix as soon as they have one
* **Fearless deployments** - Robust automation plus the ability to rollback quickly means deployments are commonplace, everyday events rather than big, scary events

## Infrastructure as Code

### **What is Infrastructure as Code?**

* Infrastructure as Code (IaC): manage and provision infrastructure through code and automation
* With infrastructure as code, instead of doing things manually, you use automation and code to create and change
  * Servers
  * Instances
  * Environments
  * Containers
  * Other infrastructure

### **What does infrastructure as code look like?**

* Without infrastructure as code, you might:
  * SSH into a host
  * Issues a series of commands to perform the change
* With infrastructure as code:
  * Change some code or configuration files that can be used with an automation tool to perform changes
  * Commit them to source control
  * Use an automation tool to enact the changes defined in the code and/or configuration files
* With Infrastructure as code, provisioning new resources and changing existing resources are both done through automation

### **Why do infrastructure as code?**

* **Consistency** in creation and management of resources - The same automation will run the same way every time
* **Reusability** - Code can be used to make the same change consistently across multiple hosts and can be used again in the future
* **Scalability** - Need a new instance? You can have one configured exactly the same way as the existing instances in minutes (or seconds)
* **Self-documenting** - With IaC, changes to infrastructure documents themselves to a degree. The way a server is configured can be viewed in source control, rather than being a matter of who logged in to the server and did something
* **Simplify the complexity** - Complex infrastructures can be stood up quickly once they are defined as code. A group of several interdependent servers can be provisioned on demand

## Configuration Management

### What is Configuration Management?

* Configuration Management: maintaining and changing the state of pieces of infrastructure in a consistent, maintainable and stable way
* Changes always need to happen - configuration management is about doing them in a maintainable way
* Configuration management allows you to minimize configuration drift - the small changes that accumulate over time and make systems different from one another and harder to manage
* Infrastructure as Code is very beneficial for configuration management

### What does Configuration Management look like?

* You need to upgrade a software package on a bunch of servers:
  * Without good configuration management, you log into each server and perform the upgrade. However, this can lead to a lot of problems. Perhaps one server was missed due to poor documentation, or perhaps something doesn’t work while the versions are temporarily mismatched between servers, causing a lot of downtime while you do the upgrade
  * With good configuration management, you define the new version of the software package in a configuration file or tool and automatically roll out the change to all the servers
* Configuration Management is about managing your configuration somewhere outside the servers themselves

### Why do Configuration Management?

* **Save time** - It takes less time to change the configuration
* **Insight** - With good configuration management, you can know about the state of all pieces of a large and complex infrastructure
* **Maintainability** - A more maintainable infrastructure is easier to change in a stable way
* **Less configuration drift** - It is easier to keep a standard configuration across a multitude of hosts

## Orchestration

### What is Orchestration?

* Automation that supports processes and workflows, such as provisioning resources
* With Orchestration, managing a complex infrastructure is less like being a builder and more like conducting an orchestra
* Instead of going out and creating a piece of infrastructure, the conductor simply signals what needs to be done and be orchestra performs it:
  * The conductor does not need to control every detail
  * The musicions (automation) are able to perfrom their piece with only a little bit of guidance

### What does Orchestration look like?

* **Here is an example:**
  * A customer requests more resources for a web service that is about to see a heavy increase in usage due to a planned marketing effort
  * Instead of manually standing up new nodes, operations enginieers use an orchestration tool to request five more nodes to support the service
  * A few minutes later, the tool has five new nodes are up and running
* **A much cooler example:**
  * A monitoring tool detects an increased load on the service
  * An orchestration tool responds to this by spinning up additional resources to handle the load
  * When the load decreases again, the tool spins the additional resources back down, freeing them up to be used by something else
  * All of this happens while the engineer is getting coffee

### Why do Orchestration?

* **Scalability** - Resources can be quickly increased or decreased to meet changing needs
* **Stability** - Automation tools can automatically respond to fix problems before users see them
* **Save time** - Certain tasks and workflows can be automated, freeing up engineers' time
* **Selt-service** - Orchestration can be used to offer resources to customers in a seft-service fashion
* **Granular insight into resource usage** - Orchestration tools give greater insight into how many resources are being used by what software, services or customers

## Monitoring

### What is Monitoring?

* **Monitoring**: The collection and presentation of data about the performance and stability of services and infrastructure
* Monitoring tools collect data over things such as:
  * Usage of memory
  * CPU
  * Disk I/O
  * Other resources over time
  * Application Logs
  * Network traffic
  * etc.
* The collected data is presented in various forms, such as charts and graphs, or in the form of real-time notifications about problems.

### What does Monitoring look like?

* **Real-time notifications:**
  * Performance on the website is beginning to slow down
  * A monitoring tool detects that response times are growing
  * An administrator is immediately notified and is able to interviene before downtime occurs
* **Postmortem analysis:**
  * Something went wrong in production last night
  * It's working now, but we don't know what caused it
  * Luckily, monitoring tools collected a lot of data during the outage
  * Will the data, developers and operations engineers are able to determine the root cause (a poorly performing SQL query) and fix it

### **Why do Monitoring?**

* **Fast recovery** - The sooner a problem is detected, the sooner it can be fixed. You want to know about a problem before your customer does
* **Better root cause analysis** - The more data you have, the easier it is to determine the root cause of a problem
* **Visibility across teams** - Good monitoring tools give useful data to both developers and operations people about the performance of code in production
* **Automated response** - Monitoring data can be used alongside orchestration to provide 

## Microservices

### What are Microservices?

* A microservice architecture breaks an application up into a collection of small loosely-coupled services
* Traditionally, apps used a monolithic architecture, In a monolithic architecture, all features and services are part of one large application
* Microservices are small: each microservice implements only a small piece of an application's overall functionality
* Microservices are loosely coupled: Different microservices interact with each other using stable and well-defined APIs. this means that they are independent of one another

### What do microservices look like?

* For example, a pet shop application might have:
  * A pet inventory service
  * A customer details service
  * An authentication service
  * A pet adoption request service
  * A payment processing service
* Each of these is its own codebase and separate running process (or processes). They can all be build, deployed, and scaled separately

### Why use Microservices?

* **Modularity** - Microservices encourage modularity. In monolithic apps, individual pieces become tightly coupled, and complexity grows. Eventually, It's very hard to change anything without breaking something
* **Technological flexibility** - You don't need to use the same languages and technologies for every part of the app. You can use the best tool for each job
* **Optimized scalability** - You can scale individual parts of the app based upon resources usage and load. With monolithic, you have to scale up the entire application, even if only one aspect of the service actually needs to be scaled
* **Microservices aren't always the best choice. For small, simpler apps a monilith might be easier to manage**