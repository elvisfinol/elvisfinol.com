---
title: "Linux Performance Monitoring and Debugging Tools 🔧"
date: 2021-04-05T20:56:32+02:00
draft: true
---


## Table content

- [SAR](#sar)
- [Tcpdump](#tcpdump)
- [Iostat](#iostat)
- [Vmstat](#vmstat)
- [PS Command](#ps-command)
- [Free](#free)
- [Top](#top)
- [Netstat](#netstat)
- [Lsof](#lsof)
- [w and uptime](#w-and-uptime)
- [/proc](#proc)

## SAR

- Using sar utility you can do two things: 1) Monitor system real time performance (CPU, Memory, I/O, etc) 
- Collect performance data in the background on an on-going basis and do analysis on the historical data to identify bottlenecks.

> Sar is part of the sysstat package. The following are some of the things you can do using sar utility.

- Collective CPU usage
- Individual CPU statistics
- Memory used and available
- Swap space used and available
- Overall I/O activities of the system
- Individual device I/O activities
- Context switch statistics
- Run queue and load average data
- Network statistics
- Report sar data from a specific time

The following sar command will display the system CPU statistics 3 times (with 1 second interval).

The following “sar -b” command reports I/O statistics. “1 3” indicates that the sar -b will be executed for every 1 second for a total of 3 times.

```
$ sar -b 1 3
Linux 2.6.18-194.el5PAE (dev-db)        03/26/2011      _i686_  (8 CPU)

01:56:28 PM       tps      rtps      wtps   bread/s   bwrtn/s
01:56:29 PM    346.00    264.00     82.00   2208.00    768.00
01:56:30 PM    100.00     36.00     64.00    304.00    816.00
01:56:31 PM    282.83     32.32    250.51    258.59   2537.37
Average:       242.81    111.04    131.77    925.75   1369.90
```

<sub>[⇧ back to top](#table-content)</sub>

## Tcpdump 

tcpdump command is simple command that dump traffic on a network. However, you need good understanding of TCP/IP protocol to utilize this tool. For.e.g to display traffic info about DNS, enter:

```
# tcpdump -i eth1 'udp port 53'
```

View all IPv4 HTTP packets to and from port 80, i.e. print only packets that contain data, not, for example, SYN and FIN packets and ACK-only packets, enter:

```
# tcpdump 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
```

Show all FTP session to 202.54.1.5, enter:
```
# tcpdump -i eth1 'dst 202.54.1.5 and (port 21 or 20'
```

Print all HTTP session to 192.168.1.5:
```
# tcpdump -ni eth0 'dst 192.168.1.5 and tcp and port http'
```

<sub>[⇧ back to top](#table-content)</sub>

## Iostat

iostat command report Central Processing Unit (CPU) statistics and input/output statistics for devices, partitions and network filesystems (NFS).

```
$ iostat
Linux 2.6.32-100.28.5.el6.x86_64 (dev-db)       07/09/2011

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           5.68    0.00    0.52    2.03    0.00   91.76

Device:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn
sda             194.72      1096.66      1598.70 2719068704 3963827344
sda1            178.20       773.45      1329.09 1917686794 3295354888
sda2             16.51       323.19       269.61  801326686  668472456
sdb             371.31       945.97      1073.33 2345452365 2661206408
sdb1            371.31       945.95      1073.33 2345396901 2661206408
sdc             408.03       207.05       972.42  513364213 2411023092
sdc1            408.03       207.03       972.42  513308749 2411023092
```
<sub>[⇧ back to top](#table-content)</sub>

## Vmstat 

Stands for virtual memory statistics. The vmstat command reports information about processes, memory, paging, block IO, traps, and cpu activity.

```
$ vmstat
procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0 305416 260688  29160 2356920    2    2     4     1    0    0  6  1 92  2  0

To execute vmstat every 2 seconds for 10 times, do the following. After executing 10 times, it will stop automatically.
$ vmstat 2 10
procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 537144 182736 6789320    0    0     0     0    1    1  0  0 100  0  0
 0  0      0 537004 182736 6789320    0    0     0     0   50   32  0  0 100  0  0
..
```

> iostat and vmstat are part of the sar utility. You should install sysstat package to get iostat and vmstat working.

<sub>[⇧ back to top](#table-content)</sub>


## References
- https://www.cyberciti.biz/tips/top-linux-monitoring-tools.html
- https://www.thegeekstuff.com/2011/12/linux-performance-monitoring-tools/