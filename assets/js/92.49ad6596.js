(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{537:function(e,t,a){"use strict";a.r(t);var i=a(69),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-to-growi-v7-2-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-growi-v7-2-x"}},[e._v("#")]),e._v(" Upgrading to GROWI v7.2.x")]),e._v(" "),a("p",[e._v("In GROWI v7.2, the GROWI AI functionality introduced in v7.1 has evolved further, allowing users to freely create Knowledge Assistants specialized for selected information within GROWI.\nAdditionally, it is now capable of handling information from private Wiki pages.")]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#table-of-contents"}},[e._v("Table of Contents")])]),a("li",[a("a",{attrs:{href:"#specification-change-growi-ai-beta"}},[e._v("[Specification Change] GROWI AI (Beta)")])]),a("li",[a("a",{attrs:{href:"#for-admin"}},[e._v("For Admin")])]),a("li",[a("a",{attrs:{href:"#check-before-upgrading"}},[e._v("Check before upgrading")])]),a("li",[a("a",{attrs:{href:"#check-after-upgrading"}},[e._v("Check after upgrading")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"specification-change-growi-ai-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-change-growi-ai-beta"}},[e._v("#")]),e._v(" [Specification Change] GROWI AI (Beta)")]),e._v(" "),a("p",[e._v("You can create and use new Knowledge Assistants from the sidebar. Created Knowledge Assistants can be shared and used collaboratively with other users.")]),e._v(" "),a("p",[e._v("For more information, please see "),a("RouterLink",{attrs:{to:"/en/guide/features/ai-knowledge-assistant.html"}},[e._v("Knowledge Assistant")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"for-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-admin"}},[e._v("#")]),e._v(" For Admin")]),e._v(" "),a("h3",{attrs:{id:"specification-change-changes-in-authentication-mechanism-enable-disable-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-change-changes-in-authentication-mechanism-enable-disable-logic"}},[e._v("#")]),e._v(" [Specification Change] Changes in Authentication Mechanism Enable/Disable Logic")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This change only affects systems that have ID/Pass or SAML authentication methods enabled.")])]),e._v(" "),a("p",[e._v("The logic for determining the enable/disable status of authentication mechanisms, particularly for ID/Pass and SAML methods, has been changed.\nAs a result, under specific conditions, these authentication mechanisms may be unintentionally enabled or disabled.")]),e._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("p",[e._v("Before upgrading the system, check if you have set the following environment variables. "),a("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/env-vars.html"}},[e._v("For details about environment variables, please refer to this page.")])],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("LOCAL_STRATEGY_ENABLED")])]),e._v(" "),a("li",[a("code",[e._v("SAML_ENABLED")])])]),e._v(" "),a("p",[a("strong",[e._v("If you haven't set the above environment variables, you won't be affected by this change.")])]),e._v(" "),a("p",[e._v("If you have set the above environment variables, please proceed with the following steps:")]),e._v(" "),a("ol",[a("li",[e._v("Access "),a("code",[e._v("/login")]),e._v(" using a private browser to verify if the enable/disable status of ID/Pass and SAML authentication matches your expected configuration.")]),e._v(" "),a("li",[e._v("If they match, "),a("strong",[e._v("you won't be affected by this change.")])]),e._v(" "),a("li",[e._v("If they don't match, take one of the following measures:\n"),a("ol",[a("li",[e._v("Prioritize DB values (recommended)\n"),a("ol",[a("li",[e._v('Navigate to the "Security Settings" page in the admin panel and toggle ON/OFF to save the correct enable/disable status in the database')]),e._v(" "),a("li",[e._v("Remove the environment variables "),a("code",[e._v("LOCAL_STRATEGY_ENABLED")]),e._v(" and "),a("code",[e._v("SAML_ENABLED")])]),e._v(" "),a("li",[e._v("Restart the server")])])]),e._v(" "),a("li",[e._v("Prioritize environment variable values\n"),a("ol",[a("li",[e._v("Delete documents with "),a("code",[e._v("key: 'security:passport-local:isEnabled'")]),e._v(" and "),a("code",[e._v("key: 'security:passport-saml:isEnabled'")]),e._v(" from the configs collection in the database")]),e._v(" "),a("li",[e._v("Restart the server")])])])])])])]),e._v(" "),a("ContextualBlock",{attrs:{context:"help-growi-cloud"}},[a("p",[e._v("After upgrading the system, access "),a("code",[e._v("/login")]),e._v(" using a private browser to verify if the enable/disable status of ID/Pass and SAML authentication matches your expected configuration.")]),e._v(" "),a("p",[e._v("If they match, you won't be affected by this change.")]),e._v(" "),a("p",[a("strong",[e._v("If they don't match, please "),a("a",{attrs:{href:"https://growi.cloud/contact",target:"_blank",rel:"noopener noreferrer"}},[e._v("contact us"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("h3",{attrs:{id:"deprecated-deprecation-of-some-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-deprecation-of-some-environment-variables"}},[e._v("#")]),e._v(" [Deprecated] Deprecation of Some Environment Variables")]),e._v(" "),a("ul",[a("li",[e._v("The environment variable "),a("code",[e._v("FILE_UPLOAD_DISABLED")]),e._v(" has been deprecated\n"),a("ul",[a("li",[e._v("Role: Disable file upload functionality")]),e._v(" "),a("li",[e._v("Alternative: Set "),a("code",[e._v("FILE_UPLOAD=none")]),e._v(" to disable file upload functionality")])])]),e._v(" "),a("li",[e._v("The environment variable "),a("code",[e._v("DISABLE_LINK_SHARING")]),e._v(" has been deprecated\n"),a("ul",[a("li",[e._v("Role: Disable share link functionality")]),e._v(" "),a("li",[e._v('Alternative: You can disable share link functionality from the "Security Settings" in the admin panel')])])])])]),e._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("h3",{attrs:{id:"new-feature-opentelemetry-support-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-feature-opentelemetry-support-beta"}},[e._v("#")]),e._v(" [New Feature] OpenTelemetry Support (Beta)")]),e._v(" "),a("p",[e._v("GROWI v7.2.0 introduces beta support for sending telemetry data to OpenTelemetry collectors.\nThis data collection enables early problem detection, performance optimization, and UI improvements.\nThrough this feature, you can contribute to this open-source software as a valuable data provider supporting GROWI's evolution.")]),e._v(" "),a("p",[e._v("As this feature is in beta, it is disabled by default.\nWhen enabled, data will be sent to a secure analytics platform provided by "),a("a",{attrs:{href:"https://growi.co.jp",target:"_blank",rel:"noopener noreferrer"}},[e._v("GROWI, Inc."),a("OutboundLink")],1),e._v(",\nallowing you to participate in GROWI's continuous improvement program.\nIn future versions, we are implementing stricter anonymization of transmitted data,\nand plan to enable this feature by default once it meets our development team's quality standards.")]),e._v(" "),a("p",[e._v("To accommodate organization-specific analytics needs, administrators can configure the OpenTelemetry collector destination to their own servers.")]),e._v(" "),a("p",[e._v("We welcome feedback from the early development stage to further improve GROWI. If you'd like to help, please join this improvement program.")]),e._v(" "),a("p",[e._v("For more information, please see "),a("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/telemetry.html"}},[e._v("Telemetry")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"check-before-upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading"}},[e._v("#")]),e._v(" Check before upgrading")]),e._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if GROWI AI functionality is enabled\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if Vector Store initialization has been performed")])])]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if you are using ID/Pass or SAML authentication methods\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if your system has the following environment variables set\n"),a("ul",[a("li",[a("code",[e._v("LOCAL_STRATEGY_ENABLED")])]),e._v(" "),a("li",[a("code",[e._v("SAML_ENABLED")])])])])])]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if your system has the following deprecated environment variables set\n"),a("ul",[a("li",[a("code",[e._v("FILE_UPLOAD_DISABLED")])]),e._v(" "),a("li",[a("code",[e._v("DISABLE_LINK_SHARING")])])])])])]),e._v(" "),a("ContextualBlock",{attrs:{context:"help-growi-cloud"}},[a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if GROWI AI functionality is enabled\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if Vector Store initialization has been performed")])])])])]),e._v(" "),a("ContextualBlock",{attrs:{context:"help-growi-cloud"}},[a("h2",{attrs:{id:"check-after-upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-after-upgrading"}},[e._v("#")]),e._v(" Check after upgrading")]),e._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if the enable/disable status of ID/Pass and SAML authentication matches your expected configuration")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);