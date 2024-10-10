+++
author = "Elvis Finol"
date = 2021-09-04T10:00:00Z
tags = ["script"]
title = "Script to install/update HUGO on your macOS"

+++
![](https://desarrolloweb.com/media/101/hugo-featured.jpg)

You can use this script to install/update HUGO (static site generator) on your macOS

**Steps**

Copy the script and save it on your machine as hugo_latest.sh

    # hugo_latest.sh
    # Find the latest Hugo from GitHub
    echo '🐹 Starting Hugo Install / Update 🐹'
    echo '      Note: Please be sure to have curl and grep installed'
    echo ''
    
    url=$(curl -s "https://api.github.com/repositories/11180687/releases/latest" | grep -o 'https://.*hugo_extended.*_macOS-64bit.tar.gz')
    echo '✅ Found latest version'
    
    curl -s $url -L -o hugo_latest.tar.gz
    echo '✅ Download complete: ' $url
    
    tar -zxf hugo_latest.tar.gz -C /usr/local/bin
    rm /usr/local/bin/README.md
    rm /usr/local/bin/LICENSE
    echo '✅ Extracted to /usr/local/bin'
    
    rm hugo_latest.tar.gz
    echo '✅ Removed downloaded artifacts'
    
    echo ''
    echo '👉 Current Version' $(hugo version)
    
    echo ''
    echo '🎉🎉🎉 Happy Hugo-ing! 🎉🎉🎉

Open the Terminal on you macOS, locate the file and run the script:

    ./hugo_latest.sh

> Do not forget run "chmod" to give read permission

Wait until it finish, it may take a while. Validate the HUGO version running the following command:

    hugo version
    hugo v0.88.0-ACC5EB5B+extended darwin/amd64 BuildDate=2021-09-02T09:27:28Z VendorInfo=gohugoio

Done! :)