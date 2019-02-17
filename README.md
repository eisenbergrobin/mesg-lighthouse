# mesg-lighthouse

Run a [lighthouse](https://developers.google.com/web/tools/lighthouse/) audit of your website through mesg.

```bash
mesg-core service deploy https://github.com/eisenbergrobin/mesg-lighthouse
```

Request a lighthouse audit of your website by calling the `runLighthouseAudit` with yourr `url` as input.
This will launch a Chrome instance, perform the audit, and return the raw results as well as a pretty HTML report.

![lighthouse-report](https://raw.githubusercontent.com/GoogleChrome/lighthouse/443ff2c8a297dfd2297dfaca86c4966a87c8574a/assets/example_audit.png)

# Contributing

## TODO:

    - Handle toggling features
    - Extract chrome/pupeteer into mesg-chrome and base this on that
    - ...

Some repo health might be needed as well (CI, CD, tests, etc...).

# API Description

## Events

### started

Event key: **request**

This event is emitted every time when the server starts.

| **key**     | **type**  | **description**                          |
| ----------- | --------- | ---------------------------------------- |
| **success** | `boolean` | Whether the service sucessfully started. |

### audit-start

Event key: **audit-start**

This event is emitted every time an audit is requested.

| **key**    | **type** | **description**               |
| ---------- | -------- | ----------------------------- |
| **target** | `string` | The target url for the audit. |

### audit-end

Event key: **audit-end**

This event is emitted every time an audit is complete.

| **key**    | **type** | **description**               |
| ---------- | -------- | ----------------------------- |
| **target** | `string` | The target url for the audit. |

## Tasks

### runLighthouseAudit

Task key: **runLighthouseAudit**

This task will run a lighthouse audit on a website.

#### Inputs

| **key** | **type** | **description**           |
| ------- | -------- | ------------------------- |
| **url** | `String` | The url you want to audit |

#### Outputs

##### success

Output key: **success**

| **key**         | **type** | **description**                                                                                          |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| **message**     | `String` | Message detailing the execution.                                                                         |
| **htmlResults** | `String` | HTML report of the audit.                                                                                |
| **rawResults**  | `Object` | Raw lighthous result ([see here](https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts)) |
