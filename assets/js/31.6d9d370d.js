(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{481:function(e,t,a){"use strict";a.r(t);var r=a(69),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hackmd-codimd-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd-integration"}},[e._v("#")]),e._v(" HackMD(CodiMD) Integration")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/assets/images/hackmd-demo.gif"),alt:"HackMD Demo"}}),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hackmd.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("HackMD"),a("OutboundLink")],1),e._v(" is an excellent tool for concurrent editing on a single Markdown with multiple users.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/hackmdio/codimd",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodiMD"),a("OutboundLink")],1),e._v(" is an OSS forked from HackMD.")]),e._v(" "),a("li",[e._v("Integrating HackMD/CodiMD into GROWI allows documents managed under GROWI to simultaneously be edited by multiple people.")])]),e._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),a("ul",[a("li",[e._v("By integrating HackMD/CodiMD into GROWI allows HackMD/CodiMD editors to be borrowed and shown in iframe.")]),e._v(" "),a("li",[e._v("Page data is shared through the medium of "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("window.postMessage"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"create-a-new-hackmd-codimd-container-with-growi-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-hackmd-codimd-container-with-growi-docker-compose"}},[e._v("#")]),e._v(" Create a new HackMD(CodiMD) container with "),a("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[e._v("growi-docker-compose")])],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/tree/master/examples/integrate-with-hackmd",target:"_blank",rel:"noopener noreferrer"}},[e._v("This"),a("OutboundLink")],1),e._v(" example will be used.")]),e._v(" "),a("p",[e._v("Set up will follow these instructions "),a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/blob/master/examples/integrate-with-hackmd/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Prepare "),a("code",[e._v("examples/integrate-with-hackmd/docker-compose.override.yml")])]),e._v(" "),a("li",[e._v("Add environment variables to GROWI container\n"),a("ul",[a("li",[a("code",[e._v("HACKMD_URI")]),e._v(": HackMD server URI which can be accessed from GROWI client browser")]),e._v(" "),a("li",[a("code",[e._v("HACKMD_URI_FOR_SERVER")]),e._v(": HackMD server URI which can be accessed from GROWI server container\n"),a("ul",[a("li",[e._v("System use the same value as "),a("code",[e._v("HACKMD_URI")]),e._v(" if not set")])])])])]),e._v(" "),a("li",[e._v("Add environment variables to CodiMD container\n"),a("ul",[a("li",[a("code",[e._v("GROWI_URI")]),e._v(": GROWI server URI which can be accessed from client browser")])])]),e._v(" "),a("li",[e._v("Start the containers")]),e._v(" "),a("li",[e._v('From the GROWI Admin page "App settings", set the Site URL\n'),a("ul",[a("li",[e._v("Input GROWI server URI which can be accessed from client browser")]),e._v(" "),a("li",[e._v("Another option is to set the "),a("code",[e._v("APP_SITE_URL")]),e._v(" environment variable")])])])]),e._v(" "),a("h2",{attrs:{id:"integrate-with-an-existing-hackmd-codimd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-with-an-existing-hackmd-codimd"}},[e._v("#")]),e._v(" Integrate with an existing HackMD(CodiMD)")]),e._v(" "),a("h3",{attrs:{id:"growi-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-settings"}},[e._v("#")]),e._v(" GROWI Settings")]),e._v(" "),a("ol",[a("li",[e._v("Set the environment variables below\n"),a("ul",[a("li",[a("code",[e._v("HACKMD_URI")]),e._v(": HackMD server URI which can be accessed from GROWI client browser")]),e._v(" "),a("li",[a("code",[e._v("HACKMD_URI_FOR_SERVER")]),e._v(": HackMD server URI which can be accessed from GROWI server container\n"),a("ul",[a("li",[e._v("System use the same value as "),a("code",[e._v("HACKMD_URI")]),e._v(" if not set")])])])])]),e._v(" "),a("li",[e._v("Restart")]),e._v(" "),a("li",[e._v('From the GROWI Admin page "App settings", set the Site URL\n'),a("ul",[a("li",[e._v("Input GROWI server URI which can be accessed from client browser")]),e._v(" "),a("li",[e._v("Another option is to set the "),a("code",[e._v("APP_SITE_URL")]),e._v(" environment variable")])])])]),e._v(" "),a("h3",{attrs:{id:"hackmd-codimd-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd-settings"}},[e._v("#")]),e._v(" HackMD(CodiMD) Settings")]),e._v(" "),a("ol",[a("li",[e._v("Set the environment variables below\n"),a("ul",[a("li",[a("code",[e._v("GROWI_URI")]),e._v(": GROWI server URI which can be accessed from client browser")])])]),e._v(" "),a("li",[e._v("Edit ejs to load the GROWI agent:\n"),a("ul",[a("li",[a("p",[e._v("For HackMD/CodiMD:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Add below to the end of "),a("code",[e._v("/codimd/public/views/codimd/head.ejs")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<%= process.env.GROWI_URI %>/_hackmd/load-styles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Add below to the end of "),a("code",[e._v("/codimd/public/views/codimd/foot.ejs")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<%= process.env.GROWI_URI %>/_hackmd/load-agent"')]),e._v(" defer"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("For HedgeDoc:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Add below to the end of "),a("code",[e._v("/hedgedoc/public/views/hedgedoc/head.ejs")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<%= process.env.GROWI_URI %>/_hackmd/load-styles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Add below to the end of "),a("code",[e._v("/hedgedoc/public/views/hedgedoc/footer.ejs")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<%= process.env.GROWI_URI %>/_hackmd/load-agent"')]),e._v(" defer"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])])])])]),e._v(" "),a("li",[e._v("Restart")])]),e._v(" "),a("h2",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),a("h3",{attrs:{id:"growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi"}},[e._v("#")]),e._v(" GROWI")]),e._v(" "),a("ul",[a("li",[e._v("When showing an arbitrary editable page, check that the HackMD tab is shown.")])]),e._v(" "),a("h3",{attrs:{id:"hackmd-codimd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd"}},[e._v("#")]),e._v(" HackMD(CodiMD)")]),e._v(" "),a("ul",[a("li",[e._v("When showing an arbitrary editable page, check that the log below appears in the browser console."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[GROWI] Loading styles for HackMD is not processed because currently not in iframe\n[GROWI] Loading agent for HackMD is not processed because currently not in iframe\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"troubleshoot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot"}},[e._v("#")]),e._v(" Troubleshoot")]),e._v(" "),a("h3",{attrs:{id:"hackmd-tab-doesn-t-appear-in-growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-tab-doesn-t-appear-in-growi"}},[e._v("#")]),e._v(" HackMD tab doesn't appear in GROWI")]),e._v(" "),a("ul",[a("li",[e._v("Check whether the correct value is set in "),a("code",[e._v("HACKMD_URI")])])]),e._v(" "),a("h3",{attrs:{id:"error-when-pressing-start-to-edit-with-hackmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-when-pressing-start-to-edit-with-hackmd"}},[e._v("#")]),e._v(' Error when pressing "Start to edit with HackMD"')]),e._v(" "),a("h4",{attrs:{id:"error-connecting-to-a-non-hackmd-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-connecting-to-a-non-hackmd-server"}},[e._v("#")]),e._v(" Error: Connecting to a non-HackMD server")]),e._v(" "),a("ul",[a("li",[e._v("Check whether the correct value is set in "),a("code",[e._v("HACKMD_URI_FOR_SERVER")])]),e._v(" "),a("li",[e._v("Check the communication between the GROWI server and HackMD/CodiMD")])]),e._v(" "),a("h4",{attrs:{id:"growi-client-failed-to-connect-to-growi-agent-for-hackmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-client-failed-to-connect-to-growi-agent-for-hackmd"}},[e._v("#")]),e._v(" GROWI client failed to connect to GROWI agent for HackMD")]),e._v(" "),a("ul",[a("li",[e._v("Check whether the correct value is set for the GROWI Site URL")]),e._v(" "),a("li",[e._v("When making changes to existing HackMD/CodiMD, check whether\n"),a("ul",[a("li",[e._v("content inserted into head.ejs and foot.ejs are correct")]),e._v(" "),a("li",[e._v("the URL from the src attribute of the script tag inserted into the source code of HackMD/CodiMD can be accessed successfully (can load the CSS and JavaScript).")])])])]),e._v(" "),a("h3",{attrs:{id:"error-when-pressing-update-and-growi-session-expires-login-appears-when-you-move-to-another-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-when-pressing-update-and-growi-session-expires-login-appears-when-you-move-to-another-page"}},[e._v("#")]),e._v(' Error when pressing "Update", and GROWI session expires ("/login" appears when you move to another page)')]),e._v(" "),a("ul",[a("li",[e._v("The session cookie names "),a("code",[e._v("connect.sid")]),e._v(" are conflicting between GROWI and HackMD/CodiMD\n"),a("ul",[a("li",[e._v("Set the environment variable "),a("code",[e._v("SESSION_NAME")]),e._v(" in GROWI to change the cookie name")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);