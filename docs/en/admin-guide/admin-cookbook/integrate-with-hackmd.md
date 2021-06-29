# HackMD(CodiMD) Integration

![HackMD Demo](/assets/images/hackmd-demo.gif)

## Overview

- [HackMD](https://hackmd.io) is an excellent tool for concurrent editing on a single Markdown with multiple users.
- [CodiMD](https://github.com/hackmdio/codimd) is an OSS forked from HackMD.
- Integrating HackMD/CodiMD into Growi allows documents managed under GROWI to simultaneously be edited by multiple people.

## Structure

- By integrating HackMD/CodiMD into Growi allows HackMD/CodiMD editors to be borrowed and shown in iframe.
- Page data is shared through the medium of [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).


## Create a new HackMD(CodiMD) container with [growi-docker-compose](../getting-started/docker-compose.md)

[This](https://github.com/weseek/growi-docker-compose/tree/master/examples/integrate-with-hackmd) example will be used.

Set up will follow these instructions [README.md](https://github.com/weseek/growi-docker-compose/blob/master/examples/integrate-with-hackmd/README.md).

1. Prepare `examples/integrate-with-hackmd/docker-compose.override.yml`
2. Add environment variables to GROWI container
    - `HACKMD_URI`: HackMD server URI
which can be accessed from GROWI client browser
    - `HACKMD_URI_FOR_SERVER`: HackMD server URI
which can be accessed from GROWI server container
        - System use the same value as `HACKMD_URI` if not set
3. Add environment variables to CodiMD container
    - `GROWI_URI`: GROWI server URI
which can be accessed from client browser
4. Start the containers
5. From the GROWI Admin page "App settings", set the Site URL
    - Input GROWI server URI
which can be accessed from client browser
    - Another option is to set the `APP_SITE_URL` environment variable

## Integrate with an existing HackMD(CodiMD)

### GROWI Settings

1. Set the environment variables below
    - `HACKMD_URI`: HackMD server URI
which can be accessed from GROWI client browser
    - `HACKMD_URI_FOR_SERVER`: HackMD server URI
which can be accessed from GROWI server container
        - System use the same value as `HACKMD_URI` if not set
2. Restart
3. From the GROWI Admin page "App settings", set the Site URL
    - Input GROWI server URI
which can be accessed from client browser
    - Another option is to set the `APP_SITE_URL` environment variable

### HackMD(CodiMD) Settings

1. Set the environment variables below
    - `GROWI_URI`: GROWI server URI
which can be accessed from client browser
2. Edit ejs to load the GROWI agent:
    * For HackMD/CodiMD:
      - Add below to the end of `/codimd/public/views/codimd/head.ejs`
          ```javascript
          <script src="<%= process.env.GROWI_URI %>/_hackmd/load-styles"></script>
          ```
      - Add below to the end of `/codimd/public/views/codimd/foot.ejs`
          ```javascript
          <script src="<%= process.env.GROWI_URI %>/_hackmd/load-agent" defer></script>
          ```

    * For HedgeDoc:
      - Add below to the end of `/hedgedoc/public/views/hedgedoc/head.ejs`
          ```javascript
          <script src="<%= process.env.GROWI_URI %>/_hackmd/load-styles"></script>
          ```
      - Add below to the end of `/hedgedoc/public/views/hedgedoc/footer.ejs`
          ```javascript
          <script src="<%= process.env.GROWI_URI %>/_hackmd/load-agent" defer></script>
          ```
3. Restart

## Validation

### GROWI

- When showing an arbitrary editable page, check that the HackMD tab is shown.

### HackMD(CodiMD)

- When showing an arbitrary editable page, check that the log below appears in the browser console.
    ```
    [GROWI] Loading styles for HackMD is not processed because currently not in iframe
    [GROWI] Loading agent for HackMD is not processed because currently not in iframe
    ```

## Troubleshoot

### HackMD tab doesn't appear in GROWI

- Check whether the correct value is set in `HACKMD_URI`

### Error when pressing "Start to edit with HackMD"

#### Error: Connecting to a non-HackMD server

- Check whether the correct value is set in `HACKMD_URI_FOR_SERVER`
- Check the communication between the GROWI server and HackMD/CodiMD

#### GROWI client failed to connect to GROWI agent for HackMD

- Check whether the correct value is set for the GROWI Site URL
- When making changes to existing HackMD/CodiMD, check whether
    - content inserted into head.ejs, foot.ejs is correct
    - the URL from the src attribute of the script tag inserted into the source code of HackMD/CodiMD can be accessed successfully(can load the css, javascript).



