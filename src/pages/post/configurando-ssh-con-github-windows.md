---
title: "Tutorial - Configurando SSH con GitHub (Windows)"
date: 2021-01-15T12:20:50-03:00
draft: false
tags: ["ssh", "español", "step-by-step"]
author: "Elvis Finol"
---

Al utilizar el protocolo SSH, puedes conectar y autenticar a servidores remotos y servicios. La ventaja para el caso de GitHub es que no necesitas suministrar “username” y “personal token” en cada deploy.

## Comandos

**Paso 1: Generar llave SSH**

Asegúrate que Git Bash esta abierto. Para generar una llave SSH ejecuta este comando:

`$ ssh-keygen -t rsa -b 4096 -C "ejemplo@ejemplo.com"` 

*(NO olvides reemplazar el email “ejemplo@ejemplo.com” por tu email real)*

**Paso 2: Uso de llave**
**
Ahora que la llave esta generada, vamos a utilizarla! Primero debemos iniciar el agente de SSH ejecutando:

`$ eval $(ssh-agent -s)`

Una vez iniciado el agente, vamos a agregar la llave que hemos generado. Ten en cuenta que si seleccionas un path diferente al default, debes cambiarlo en el comando:

`$ ssh-add ~/.ssh/id_rsa`

******Paso 3: Agregar llave SSH en GitHub**

Ahora que tenemos la llave ssh configurada en nuestra PC, procedemos agregarla en GitHub. Para ello puedes ejecutar este comando para copiarla y luego pegarla en GitHub.

`$ clip < ~/.ssh/id_rsa.pub`

Ve a las **Settings** en tu GitHub, en el sidebar haz click en **“SSH and GPG Keys”**

Haz click en “New SSH Key”

![SSH Key button](https://docs.github.com/assets/images/help/settings/ssh-add-ssh-key.png)


En title puedes colocar la descripción, por ejemplo “Mi computador personal” y seguidamente vas a pegar tu llave en “Key”.

![The key field](https://docs.github.com/assets/images/help/settings/ssh-key-paste.png)


 Luego haces click en “Add SSH key”, te pedirá las credenciales de tu cuenta en GitHub. Al llegar a este punto tu llave ha sido agregada y puedes empezar a hacer push desde tu repositorio remoto a GitHub. 🙂 
