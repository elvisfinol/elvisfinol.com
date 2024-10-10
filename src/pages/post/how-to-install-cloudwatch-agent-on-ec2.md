---
title: "Tutorial - How to install CloudWatch Agent on EC2 Instances?"
date: 2021-01-22T12:24:45-03:00
draft: false
tags: ["aws", "cloudwatch", "step-by-step", "sysops"]
author: "Elvis Finol"
---

Before start please install Apache HTTP Server on the instance > following the “****yum install httpd****” command and create a simple index.html file under path /var/www/html/index.html

After that, start httpd agent an validate accessing over the public DNS, you should see your “Hello World”. If you see that on your browser this means that your server is running properly.


![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611325323018_Screen+Shot+2021-01-22+at+11.21.52.png)


Remember we will catch the following logs. So we need to put both path on the CloudWatch wizard later.

`/var/log/httpd/access_log` &
`/var/log/httpd/error_log`

**Installing the CloudWatch Agent**
On this step we install the [Unified CloudWatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/UseCloudWatchUnifiedAgent.html) that will allows us to send metrics and logs into CloudWatch. You can store and retrieve configuration into the SSM Parameter Store and allow you to have quick setup for all your instances if you want to have them all configure the same way! 


`wget https://s3.amazonaws.com/amazoncloudwatch-agent/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm`


![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611329726023_Screen+Shot+2021-01-22+at+12.34.45.png)


`sudo rpm -U ./amazon-cloudwatch-agent.rpm`

![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611329839689_Screen+Shot+2021-01-22+at+12.37.00.png)

I had already install

**Run the wizard**


    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard


    [root@ip-172-31-55-22 ec2-user]# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard
    =============================================================
    = Welcome to the AWS CloudWatch Agent Configuration Manager =
    =============================================================
    On which OS are you planning to use the agent?
    1. linux
    2. windows
    3. darwin
    default choice: [1]:
    1
    Trying to fetch the default region based on ec2 metadata...
    Are you using EC2 or On-Premises hosts?
    1. EC2
    2. On-Premises
    default choice: [1]:
    1
    Which user are you planning to run the agent?
    1. root
    2. cwagent
    3. others
    default choice: [1]:
    1
    Do you want to turn on StatsD daemon?
    1. yes
    2. no
    default choice: [1]:
    1
    Which port do you want StatsD daemon to listen to?
    default choice: [8125]
    
    What is the collect interval for StatsD daemon?
    1. 10s
    2. 30s
    3. 60s
    default choice: [1]:
    1
    What is the aggregation interval for metrics collected by StatsD daemon?
    1. Do not aggregate
    2. 10s
    3. 30s
    4. 60s
    default choice: [4]:
    6
    The value 6 is not valid to this question.
    Please retry to answer:
    What is the aggregation interval for metrics collected by StatsD daemon?
    1. Do not aggregate
    2. 10s
    3. 30s
    4. 60s
    default choice: [4]:
    4
    Do you want to monitor metrics from CollectD?
    1. yes
    2. no
    default choice: [1]:
    1
    Do you want to monitor any host metrics? e.g. CPU, memory, etc.
    1. yes
    2. no
    default choice: [1]:
    1
    Do you want to monitor cpu metrics per core? Additional CloudWatch charges may apply.
    1. yes
    2. no
    default choice: [1]:
    1
    Do you want to add ec2 dimensions (ImageId, InstanceId, InstanceType, AutoScalingGroupName) into all of your metrics if the info is available?
    1. yes
    2. no
    default choice: [1]:
    1
    Would you like to collect your metrics at high resolution (sub-minute resolution)? This enables sub-minute resolution for all metrics, but you can customize for specific metrics in the output json file.
    1. 1s
    2. 10s
    3. 30s
    4. 60s
    default choice: [4]:
    4
    Which default metrics config do you want?
    1. Basic
    2. Standard
    3. Advanced
    4. None
    default choice: [1]:
    1
    Current config as follows:
    {
    "agent": {
    "metrics_collection_interval": 60,
    "run_as_user": "root"
    },
    "metrics": {
    "append_dimensions": {
    "AutoScalingGroupName": "${aws:AutoScalingGroupName}",
    "ImageId": "${aws:ImageId}",
    "InstanceId": "${aws:InstanceId}",
    "InstanceType": "${aws:InstanceType}"
    },
    "metrics_collected": {
    "collectd": {
    "metrics_aggregation_interval": 60
    },
    "disk": {
    "measurement": [
    "used_percent"
    ],
    "metrics_collection_interval": 60,
    "resources": [
    "*"
    ]
    },
    "mem": {
    "measurement": [
    "mem_used_percent"
    ],
    "metrics_collection_interval": 60
    },
    "statsd": {
    "metrics_aggregation_interval": 60,
    "metrics_collection_interval": 10,
    "service_address": ":8125"
    }
    }
    }
    }
    Are you satisfied with the above config? Note: it can be manually customized after the wizard completes to add additional items.
    1. yes
    2. no
    default choice: [1]:
    1
    Do you have any existing CloudWatch Log Agent (http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html) configuration file to import for migration?
    1. yes
    2. no
    default choice: [2]:
    2
    Do you want to monitor any log files?
    1. yes
    2. no
    default choice: [1]:
    1
    Log file path:
    /var/log/httpd/access_log                
    Log group name:
    default choice: [access_log]
    
    Log stream name:
    default choice: [{instance_id}]
    
    Do you want to specify any additional log files to monitor?
    1. yes
    2. no
    default choice: [1]:
    1
    Log file path:
    /var/log/httpd/error_log
    Log group name:
    default choice: [error_log]
    
    Log stream name:
    default choice: [{instance_id}]
    
    Do you want to specify any additional log files to monitor?
    1. yes
    2. no
    default choice: [1]:
    2
    Saved config file to /opt/aws/amazon-cloudwatch-agent/bin/config.json successfully.
    Current config as follows:
    {
    "agent": {
    "metrics_collection_interval": 60,
    "run_as_user": "root"
    },
    "logs": {
    "logs_collected": {
    "files": {
    "collect_list": [
    {
    "file_path": "/var/log/httpd/access_log",
    "log_group_name": "access_log",
    "log_stream_name": "{instance_id}"
    },
    {
    "file_path": "/var/log/httpd/error_log",
    "log_group_name": "error_log",
    "log_stream_name": "{instance_id}"
    }
    ]
    }
    }
    },
    "metrics": {
    "append_dimensions": {
    "AutoScalingGroupName": "${aws:AutoScalingGroupName}",
    "ImageId": "${aws:ImageId}",
    "InstanceId": "${aws:InstanceId}",
    "InstanceType": "${aws:InstanceType}"
    },
    "metrics_collected": {
    "collectd": {
    "metrics_aggregation_interval": 60
    },
    "disk": {
    "measurement": [
    "used_percent"
    ],
    "metrics_collection_interval": 60,
    "resources": [
    "*"
    ]
    },
    "mem": {
    "measurement": [
    "mem_used_percent"
    ],
    "metrics_collection_interval": 60
    },
    "statsd": {
    "metrics_aggregation_interval": 60,
    "metrics_collection_interval": 10,
    "service_address": ":8125"
    }
    }
    }
    }
    Please check the above content of the config.
    The config file is also located at /opt/aws/amazon-cloudwatch-agent/bin/config.json.
    Edit it manually if needed.
    Do you want to store the config in the SSM parameter store?
    1. yes
    2. no
    default choice: [1]:
    1
    What parameter store name do you want to use to store your config? (Use 'AmazonCloudWatch-' prefix if you use our managed AWS policy)
    default choice: [AmazonCloudWatch-linux]
    
    Trying to fetch the default region based on ec2 metadata...
    Which region do you want to store the config in the parameter store?
    default choice: [us-east-1]
    
    Which AWS credential should be used to send json config to parameter store?
    1. ASIA4ZKOFOINW3ZORZGS(From SDK)
    2. Other
    default choice: [1]:
     
    Please make sure the creds you used have the right permissions configured for SSM access.
    Which AWS credential should be used to send json config to parameter store?
    1. ASIA4ZKOFOINW3ZORZGS(From SDK)
    2. Other
    default choice: [1]:
    
    Successfully put config to parameter store AmazonCloudWatch-linux.
    Program exits now.

 You can see JSON config is already on the Parameter Store. So any other EC2 instances will bootup and fetch the value of this config.

![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611327219228_Screen+Shot+2021-01-22+at+11.53.17.png)


In order to point to the SSM Parameter you have two options:

Fetch  the config


    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-linux

Reading directly JSON file


    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json


    [root@ip-172-31-55-22 ec2-user]# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-linux
    ****** processing amazon-cloudwatch-agent ******
    /opt/aws/amazon-cloudwatch-agent/bin/config-downloader --output-dir /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d --download-source ssm:AmazonCloudWatch-linux --mode ec2 --config /opt/aws/amazon-cloudwatch-agent/etc/common-config.toml --multi-config default
    Region: us-east-1
    credsConfig: map[]
    Successfully fetched the config and saved in /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d/ssm_AmazonCloudWatch-linux.tmp
    Start configuration validation...
    /opt/aws/amazon-cloudwatch-agent/bin/config-translator --input /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json --input-dir /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d --output /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml --mode ec2 --config /opt/aws/amazon-cloudwatch-agent/etc/common-config.toml --multi-config default
    2021/01/22 15:04:52 Reading json config file path: /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d/ssm_AmazonCloudWatch-linux.tmp ...
    Valid Json input schema.
    I! Detecting run_as_user...
    No csm configuration found.
    Configuration validation first phase succeeded
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent -schematest -config /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml
    Configuration validation second phase failed
    ======== Error Log ========
    2021-01-22T15:04:52Z E! [telegraf] Error running agent: Error parsing /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml, open /usr/share/collectd/types.db: no such file or directory
    [root@ip-172-31-55-22 ec2-user]# 

We successfully fetch the config. Probably you will see an error that `/usr/share/collectd/types.db` is missing. 

To solve this create the folders/file and re-run the agent


    [root@ip-172-31-55-22 ec2-user]# mkdir -p /usr/share/collectd/
    [root@ip-172-31-55-22 ec2-user]# touch /usr/share/collectd/types.db


    [root@ip-172-31-55-22 ec2-user]# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-linux
    ****** processing amazon-cloudwatch-agent ******
    /opt/aws/amazon-cloudwatch-agent/bin/config-downloader --output-dir /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d --download-source ssm:AmazonCloudWatch-linux --mode ec2 --config /opt/aws/amazon-cloudwatch-agent/etc/common-config.toml --multi-config default
    Region: us-east-1
    credsConfig: map[]
    Successfully fetched the config and saved in /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d/ssm_AmazonCloudWatch-linux.tmp
    Start configuration validation...
    /opt/aws/amazon-cloudwatch-agent/bin/config-translator --input /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json --input-dir /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d --output /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml --mode ec2 --config /opt/aws/amazon-cloudwatch-agent/etc/common-config.toml --multi-config default
    2021/01/22 15:10:13 Reading json config file path: /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.d/ssm_AmazonCloudWatch-linux.tmp ...
    Valid Json input schema.
    I! Detecting run_as_user...
    No csm configuration found.
    Configuration validation first phase succeeded
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent -schematest -config /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml
    Configuration validation second phase succeeded
    Configuration validation succeeded
    amazon-cloudwatch-agent has already been stopped
    Created symlink from /etc/systemd/system/multi-user.target.wants/amazon-cloudwatch-agent.service to /etc/systemd/system/amazon-cloudwatch-agent.service.
    Redirecting to /bin/systemctl restart amazon-cloudwatch-agent.service
    [root@ip-172-31-55-22 ec2-user]#

Now agent is WORKING and you should start seeing CloudWatchLogs and Metrics! 💪
Go to CloudWatch and check it out:

Logs

![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611328439418_Screen+Shot+2021-01-22+at+12.12.43.png)

![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611328995602_Screen+Shot+2021-01-22+at+12.21.40.png)


Metrics

![](https://paper-attachments.dropbox.com/s_9325814064604EBD25706FDBD9C2F88362964E0D36FEE7D1E04B0AE552555C30_1611328953134_Screen+Shot+2021-01-22+at+12.19.41.png)

***references***

- [Installing and Running the CloudWatch Agent on Your Servers](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html)

