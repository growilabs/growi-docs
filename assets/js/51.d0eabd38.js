(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{499:function(t,e,i){"use strict";i.r(e);var a=i(69),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"external-notification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#external-notification"}},[t._v("#")]),t._v(" External Notification")]),t._v(" "),i("h2",{attrs:{id:"types-of-notification-method"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#types-of-notification-method"}},[t._v("#")]),t._v(" Types of notification method")]),t._v(" "),i("h3",{attrs:{id:"slack-mattermost-incoming-webhook"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#slack-mattermost-incoming-webhook"}},[t._v("#")]),t._v(" Slack / Mattermost incoming webhook")]),t._v(" "),i("p",[t._v("GROWI allows Slack notifications using Incoming Webhooks. You can select one of the channels belonging to the workspace to be notified.")]),t._v(" "),i("h3",{attrs:{id:"ifttt"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ifttt"}},[t._v("#")]),t._v(" IFTTT")]),t._v(" "),i("p",[t._v("GROWI can use IFTTT to send notifications to other web services.")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("How to use IFTTT")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Configure the email settings from the [Application settings] of the GROWI Management page.")]),t._v(" "),i("ul",[i("li",[t._v("For details, see "),i("RouterLink",{attrs:{to:"/en/admin-guide/management-cookbook/app-settings.html#email-settings"}},[t._v("Email Settings")]),t._v(".")],1)])]),t._v(" "),i("li",[i("p",[t._v("Click [Global notification] from [External Notification] in the GROWI Management page.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/assets/images/en/ifttt-global-notification-introduction.png"),alt:"ifttt-global-notification-introduction"}})]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Add Notification Settings")]),t._v(".")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/assets/images/en/ifttt-global-notification-addition.png"),alt:"ifttt-global-notification-addition"}})]),t._v(" "),i("li",[i("p",[t._v("Set the trigger path.")])]),t._v(" "),i("li",[i("p",[t._v("Create your original IFTTT applet from the link.")])]),t._v(" "),i("li",[i("p",[t._v("Set the notification destination as "),i("strong",[t._v("Email")]),t._v(" and enter the Email that will be triggered by IFTTT.")]),t._v(" "),i("ul",[i("li",[t._v("Example: If you are using email for IFTTT, enter "),i("a",{attrs:{href:"mailto:trigger@applet.ifttt.com"}},[t._v("trigger@applet.ifttt.com")]),t._v(".")])])]),t._v(" "),i("li",[i("p",[t._v("Set the trigger event on GROWI.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/assets/images/en/ifttt-global-notification-detail-settings.png"),alt:"ifttt-global-notification-detail-settings"}})]),t._v(" "),i("li",[i("p",[t._v("Once you have entered the required information, press "),i("strong",[t._v("Update")]),t._v(" button.")])])])])]),t._v(" "),i("h2",{attrs:{id:"type-of-notification-contents-how-to-set-them"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#type-of-notification-contents-how-to-set-them"}},[t._v("#")]),t._v(" Type of notification contents / How to set them")]),t._v(" "),i("h3",{attrs:{id:"user-trigger-notification-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#user-trigger-notification-settings"}},[t._v("#")]),t._v(" User Trigger Notification Settings")]),t._v(" "),i("p",[t._v("User Trigger Notification is a feature that allows GROWI users to be selectively notified when they edit a page or post a comment. Basically, it is necessary to enter the channel to be notified each time, but it is possible to eliminate the input by setting a default pattern.")]),t._v(" "),i("h4",{attrs:{id:"how-to-set-a-default-pattern"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-a-default-pattern"}},[t._v("#")]),t._v(" How to set a default pattern")]),t._v(" "),i("ol",[i("li",[t._v("Access to the External Notification page (/admin/notification) in the Management page.")]),t._v(" "),i("li",[t._v("Open the User Trigger Notification tab.")]),t._v(" "),i("li",[t._v("Enter the pattern and channel name.")])]),t._v(" "),i("ul",[i("li",[t._v("The path to display the configuration value is called pattern. For example, if you set "),i("code",[t._v("/event/*")]),t._v(", only pages under event will show the default pattern you set.")]),t._v(" "),i("li",[t._v("If you want to display the default pattern on all pages, please type "),i("code",[t._v("/*")]),t._v(".")])]),t._v(" "),i("h4",{attrs:{id:"check-if-the-default-pattern-settings-are-reflected"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-default-pattern-settings-are-reflected"}},[t._v("#")]),t._v(" Check if the default pattern settings are reflected")]),t._v(" "),i("p",[t._v("For example, if you set the pattern to "),i("code",[t._v("/event/*")]),t._v(" and the channel to "),i("code",[t._v("general")]),t._v(", then If you create a page with the path "),i("code",[t._v("/event/announcement")]),t._v(", it will go to edit mode with "),i("code",[t._v("general")]),t._v(" set in the Slack notification form.\n")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/assets/images/en/slack2.png"),alt:"slack2"}}),t._v(" "),i("p",[t._v("If the checkbox is enabled and the page is refreshed, the "),i("code",[t._v("general")]),t._v(" channel will receive a Slack notification.")]),t._v(" "),i("h3",{attrs:{id:"global-notification-setting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#global-notification-setting"}},[t._v("#")]),t._v(" Global Notification Setting")]),t._v(" "),i("p",[t._v("You can configure Slack notifications to be sent out when a GROWI user performs a certain action.")]),t._v(" "),i("h4",{attrs:{id:"how-to-set-global-notification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-global-notification"}},[t._v("#")]),t._v(" How to set Global Notification")]),t._v(" "),i("ol",[i("li",[t._v("Access to the External Notification page (/admin/notification) in the Management page.")]),t._v(" "),i("li",[t._v("Open the Global Notification tab.")]),t._v(" "),i("li",[t._v("Click the Add Notification button on the right side of the list of notification settings.")]),t._v(" "),i("li",[t._v("Configure various settings in Notification Advanced Settings.")])]),t._v(" "),i("ul",[i("li",[t._v("The notification mechanism detects events that occur in the trigger path. For example, if you set "),i("code",[t._v("/event/*")]),t._v(", Global Notification will be enabled on the pages under "),i("code",[t._v("/event")]),t._v(".")])]),t._v(" "),i("h4",{attrs:{id:"enable-disable-notifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enable-disable-notifications"}},[t._v("#")]),t._v(" Enable/disable notifications")]),t._v(" "),i("p",[t._v("Global Notifications will usually only send notifications for events in public pages.")]),t._v(" "),i("p",[t._v("Enabling the checkbox will detect events in the following pages.")]),t._v(" "),i("ul",[i("li",[t._v("Pages that are restricted to 'Only me'.")]),t._v(" "),i("li",[t._v("Pages that are restricted to 'Only inside the group'.")])]),t._v(" "),i("p",[t._v("Pages that can only be viewed by people who know the link will always be unnotified, regardless of the setting.")])])}),[],!1,null,null,null);e.default=n.exports}}]);