(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{485:function(a,t,e){"use strict";e.r(t);var s=e(69),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"multiple-sites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-sites"}},[a._v("#")]),a._v(" Multiple Sites")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("This cookbook supposes the usage of "),e("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[a._v("docker-compose")]),a._v(".")],1)]),a._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),e("p",[a._v("This chapter introduces how to launch three GROWI sites.")]),a._v(" "),e("h3",{attrs:{id:"build-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-image"}},[a._v("#")]),a._v(" Build Image")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/weseek/growi-docker-compose.git growi\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" growi\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" growimulti_app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),e("h3",{attrs:{id:"replace-docker-compose-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replace-docker-compose-yml"}},[a._v("#")]),a._v(" Replace docker-compose.yml")]),a._v(" "),e("p",[a._v("Edit "),e("code",[a._v("./docker-compose.yml")]),a._v(" and duplicate the app container and volumes. On this example, these GROWI apps share the use of one Mongo DB contatiner and one Elasticsearch container for saving of resources.")]),a._v(" "),e("div",{staticClass:"language-text:docker-compose.yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('...\n\nservices:\n  app-1:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3001:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-1 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-1\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_1:/data\n\n  app-2:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3002:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-2 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-2\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_2:/data\n\n  app-3:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3003:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-3 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-3\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-3\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_3:/data\n...\n\nvolumes:\n  # Write the volumes each GROWI uses\n  growi_data_1:\n  growi_data_2:\n  growi_data_3:\n\n...\n')])])]),e("h3",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[a._v("#")]),a._v(" Start")]),a._v(" "),e("p",[a._v("Execute this command and access to each site.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up\n")])])]),e("p",[a._v("and access to:")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3001"),e("OutboundLink")],1),a._v(" (app-1)")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://localhost:3002",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3002"),e("OutboundLink")],1),a._v(" (app-2)")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://localhost:3003",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3003"),e("OutboundLink")],1),a._v(" (app-3)")]),a._v(" "),e("h2",{attrs:{id:"upgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[a._v("#")]),a._v(" Upgrade")]),a._v(" "),e("h3",{attrs:{id:"stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[a._v("#")]),a._v(" Stop")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" stop\n")])])]),e("h3",{attrs:{id:"remove-app-containers-and-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-app-containers-and-images"}},[a._v("#")]),a._v(" Remove app containers and images")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-2\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-3\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi growimulti_app\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi weseek/growi:3\n")])])]),e("h3",{attrs:{id:"rebuild-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-image"}},[a._v("#")]),a._v(" Rebuild Image")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" growimulti_app "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),e("h3",{attrs:{id:"start-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-2"}},[a._v("#")]),a._v(" Start")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);