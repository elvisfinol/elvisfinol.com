---
title: "[CHEAT SHEET 📒] - AWS Application Load Balancer Error Codes"
date: 2021-01-28T16:00:43-03:00
draft: false
tags: ["aws", "cheatsheet", "alb", "sysops"]
author: "Elvis Finol"
---

*The following information can help you troubleshoot issues with your Application Load Balancer.*

## Successful request: Code 200 ✅

## Unsuccessfull at client site: 4XX code ❌

- Error 400: Bad Request
- Error 401: Unauthorized
- Error 403: Forbidden
- Error 405: Method not allowed
- Error 408: Request timeout
- Error 413: Payload too large
- Error 414: URI too long
- Error 460: Client close connection
- Error 463: X-Forwarded For header with > 30 IP (Similar to malformed request)

## Unsuccessfull at server site: 5XX code ❌

- Error 500: Internal server error would mean some error on the ELB itseft
- Error 501: Not Implemented
- Error 502 : Bad Gateway
- Error 503: Service Unavailable 
- Error 504: Gateway timeout, probably an issue within the server
- Error 505: Version not supported
- Error 561: Unauthorized

*references*
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html