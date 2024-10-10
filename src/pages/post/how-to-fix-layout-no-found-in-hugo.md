---
title: "[Solved] How to fix the error found no layout file for HTML for page in Hugo?"
date: 2021-01-20T11:25:47-03:00
draft: false
tags: ["hugo-framework", "solved"]
author: "Elvis Finol"
---

![](https://paper-attachments.dropbox.com/s_3EA6CC7F2AE38E7F2F997BE5ED73447B1DBC1D718516A1C5A3168F4F9738D743_1610985197347_image.png)

You have a theme you added as a git submodule and you recently re-cloned your project. In order to fix this, your submodule needs to be re-downloaded as well.

Run the following commands:


    git submodule init
----------
    git submodule update
----------
    hugo server
----------

Then your project will load without errors.

![](https://paper-attachments.dropbox.com/s_3EA6CC7F2AE38E7F2F997BE5ED73447B1DBC1D718516A1C5A3168F4F9738D743_1610985940453_image.png)
