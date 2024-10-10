---
title: "[CHEAT SHEET 📒] - My Linux Terminal"
date: 2021-01-21T12:14:18-03:00
draft: false
tags: ["linux", "cheatsheet", "sysops"]
author: "Elvis Finol"
---

Hey there! Here you will find this cheat sheet which I prepared to show, all linux commands which I use to day a day, in my actual role as System Engineer.

## Table content

- [Help](#help)
- [Users](#users)
- [Network](#network)
- [Files-Folders](#files-folders)
- [Remote](#remote)



*More coming soon! Stay tuned...*
- [Permissions](#permissions)
- [Editors](#editors)
- [Differences](#differences)
- [Packages](#packages)
- [Compressor](#compressor)

--------------------------
## Help

*Help commands*

- **man** manual page (wide)
- **whatis** short description
- **apropos** related help

<sub>[⇧ back to top](#table-content)</sub>


## Users👤

*Change and info*

- **whoami** current user
- **su** switch to user [root]
- **visudo** edit sudoers [vi+sudo]

*System users*

- **useradd** create/update user
  - **adduser** friendly add user
- **userdel** delete user
  - **deluser** friendly del user
- **usermod** modify user account
- **groups** group members
- **passwd** change password
- **Islogins** show known users

*Logged users*

- **who** current logged users
  - **w** current logged users & data
- **users** current logged users
- **last** last logged users & reboots
- **lastb** last bad logins
- **lastlog** recent login users

<sub>[⇧ back to top](#table-content)</sub>


## Network🌐

*Net configuration*

- **ifconfig** config ip/net features
  - **ip** new ifconfig tool
- **dhclient** DHCP client

*DNS and domains*

- **ping** send ICMP to hosts
- **nslookup** query DNS lookup
  - **dig** DNS lookup utility 
- **whois** whois domain name or ip

*Trace route*

- **traceroute print route packets**
- **tracepath** trace path
  - **mtr** network diagnostic tool

*Network tools*

- **nmap** network security scanner
- **nc** cat via network connection
- **ss** show sockets statistics

*Network monitoring*

- **bmon** bandwidth monitor
- **iftop** interface network monitor
- **nethogs** net monitor by process
- **wondershaper** bandwidth limit
- **Iptraf-ng** network monitor
- **tcpdump** network activity dump
- **netstat** print network statistics

*Mac address*

- arp show mac/ip address cache
- arping ping mac address

*Firewall*

- **iptables** ip packet filter & NAT
  - **shorewall** firewall for iptables
  - **ufw** firewall for iptables

  <sub>[⇧ back to top](#table-content)</sub>

## Files-Folders

*Folders (Directories)*

- **mkdir** create dir
  - **-p** all dirs
- **pwd** current dir
- **ls** list files & dirs
  - **-l** long data
  - **-h** human 
  - **-R** recursive
- **cd** change to dir
- **pushd / popd** directory stack
- **autojump** smart jump to dirs
- **tree** list files in tree format

*File handling*

- **file** show file type
- **touch** update/create
- **mv** move/rename files
  - **-f** force
  - **-u** update
- **cp** copy files
  - **-f** force
  - **-r** recursive
- **rm** remove files
- **ln** make link to file
- **stat** filesytem stats

*Fine files*

- **type** display command type
- **Find** search files in a dir
  - **locate** search files in database
  - **updatedb** update file database
- **whereis** locate binary/manpage
- **which** get binary file pathname

  <sub>[⇧ back to top](#table-content)</sub>

## Remote

- **telnet** telnet connection
- **ftp** file transfer connect
  - **ssh** remote connection
- **sftp** connect ftp via ssh
- **sshfs** connect disk via ssh

SCP/SSH SYNTAX

```
scp user@ip:/folder remote
```

  <sub>[⇧ back to top](#table-content)</sub>

  *More coming soon! Stay tuned...*

