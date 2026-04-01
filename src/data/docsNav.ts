export type NavItemType = {
  label: string;
  to: string;
  icon?: string;
  children?: NavItemType[];
};

export const NAV: NavItemType[] = [
  { label: "Homepage", to: "/docs/homepage", icon: "/img/icons/home.svg" },

  {
    label: "Getting Started",
    to: "/docs/getting-started",
    icon: "/img/icons/rocket.svg",
  },

  {
    label: "Commands",
    to: "/docs/category/commands",
    icon: "/img/icons/commands.svg",
    children: [
      {
        label: "AFK Commands",
        to: "/docs/category/afk-commands",
        icon: "/img/icons/afk.svg",
        children: [
          {
            label: "/afk disable",
            to: "/docs/commands/afk-commands/afk-disable",
          },
          {
            label: "/afk enable",
            to: "/docs/commands/afk-commands/afk-enable",
          },
          {
            label: "/afk nomessage",
            to: "/docs/commands/afk-commands/afk-nomessage",
          },
        ],
      },

      {
        label: "Auto Forum Commands",
        to: "/docs/category/auto-forum-commands",
        icon: "/img/icons/forum.svg",
        children: [
          {
            label: "/auto-forum add",
            to: "/docs/commands/auto-forum-commands/auto-forum-add",
          },
          {
            label: "/auto-forum list",
            to: "/docs/commands/auto-forum-commands/auto-forum-list",
          },
          {
            label: "/auto-forum remove",
            to: "/docs/commands/auto-forum-commands/auto-forum-remove",
          },
          {
            label: "/auto-forum set",
            to: "/docs/commands/auto-forum-commands/auto-forum-set",
          },
        ],
      },

      {
        label: "Autodelete Commands",
        to: "/docs/category/autodelete-commands",
        icon: "/img/icons/delete.svg",
        children: [
          {
            label: "/autodelete list",
            to: "/docs/commands/autodelete-commands/autodelete-list",
          },
          {
            label: "/autodelete remove",
            to: "/docs/commands/autodelete-commands/autodelete-remove",
          },
          {
            label: "/autodelete set",
            to: "/docs/commands/autodelete-commands/autodelete-set",
          },
        ],
      },

      {
        label: "Autoreact Commands",
        to: "/docs/category/autoreact-commands",
        icon: "/img/icons/react.svg",
        children: [
          {
            label: "/autoreact edit",
            to: "/docs/commands/autoreact-commands/autoreact-edit",
          },
          {
            label: "/autoreact list",
            to: "/docs/commands/autoreact-commands/autoreact-list",
          },
          {
            label: "/autoreact remove",
            to: "/docs/commands/autoreact-commands/autoreact-remove",
          },
          {
            label: "/autoreact set",
            to: "/docs/commands/autoreact-commands/autoreact-set",
          },
        ],
      },

      {
        label: "Autorole Commands",
        to: "/docs/category/autorole-commands",
        icon: "/img/icons/autorole.svg",
        children: [
          {
            label: "/autorole add",
            to: "/docs/commands/autorole-commands/autorole-add",
          },
          {
            label: "/autorole remove",
            to: "/docs/commands/autorole-commands/autorole-remove",
          },
          {
            label: "/autorole view",
            to: "/docs/commands/autorole-commands/autorole-view",
          },
        ],
      },

      {
        label: "Autothread Commands",
        to: "/docs/category/autothread-commands",
        icon: "/img/icons/thread.svg",
        children: [
          {
            label: "/autothread channel",
            to: "/docs/commands/autothread-commands/autothread-channel",
          },
          {
            label: "/autothread edit",
            to: "/docs/commands/autothread-commands/autothread-edit",
          },
          {
            label: "/autothread threadname",
            to: "/docs/commands/autothread-commands/autothread-threadname",
          },
        ],
      },

      {
        label: "Bump Reminder Commands",
        to: "/docs/category/bumpreminder-commands",
        icon: "/img/icons/bremind.svg",
        children: [
          {
            label: "/breminder set-channel",
            to: "/docs/commands/bumpreminder-commands/breminder-set-channel",
          },
          {
            label: "/breminder set-desc",
            to: "/docs/commands/bumpreminder-commands/breminder-set-desc",
          },
          {
            label: "/breminder set-role",
            to: "/docs/commands/bumpreminder-commands/breminder-set-role",
          },
          {
            label: "/breminder set-title",
            to: "/docs/commands/bumpreminder-commands/breminder-set-title",
          },
          {
            label: "/bumpreminder preview",
            to: "/docs/commands/bumpreminder-commands/bumpreminder-preview",
          },
        ],
      },

      {
        label: "Confession Commands",
        to: "/docs/category/confess-commands",
        icon: "/img/icons/confess.svg",
        children: [
          {
            label: "/confession send",
            to: "/docs/commands/confess-commands/confession-send",
          },
          {
            label: "/confession setup",
            to: "/docs/commands/confess-commands/confession-setup",
          },
        ],
      },

      {
        label: "Embed Commands",
        to: "/docs/category/embed-commands",
        icon: "/img/icons/embed.svg",
        children: [
          {
            label: "/embed create",
            to: "/docs/commands/embed-commands/embed-create",
          },
          {
            label: "/embed delete",
            to: "/docs/commands/embed-commands/embed-delete",
          },
          {
            label: "/embed edit",
            to: "/docs/commands/embed-commands/embed-edit",
          },
          {
            label: "/embed list",
            to: "/docs/commands/embed-commands/embed-list",
          },
          {
            label: "/embed send",
            to: "/docs/commands/embed-commands/embed-send",
          },
          {
            label: "/embed view",
            to: "/docs/commands/embed-commands/embed-view",
          },
        ],
      },

      {
        label: "GitHub Commands",
        to: "/docs/category/github-commands",
        icon: "/img/icons/github.svg",
        children: [
          {
            label: "/github list",
            to: "/docs/commands/github-commands/github-list",
          },
          {
            label: "/github unwatch",
            to: "/docs/commands/github-commands/github-unwatch",
          },
          {
            label: "/github watch",
            to: "/docs/commands/github-commands/github-watch",
          },
        ],
      },

      {
        label: "Level Config Commands",
        to: "/docs/category/level-config-commands",
        icon: "/img/icons/lconfig.svg",
        children: [
          {
            label: "/levelconfig reset-thresholds",
            to: "/docs/commands/level-config-commands/levelconfig-reset-thresholds",
          },
          {
            label: "/levelconfig set-thresholds",
            to: "/docs/commands/level-config-commands/levelconfig-set-thresholds",
          },
          {
            label: "/levelconfig view-thresholds",
            to: "/docs/commands/level-config-commands/levelconfig-view-thresholds",
          },
        ],
      },

      {
        label: "Leveling Commands",
        to: "/docs/category/leveling-commands",
        icon: "/img/icons/level.svg",
        children: [
          {
            label: "/level profile",
            to: "/docs/commands/leveling-commands/level-profile",
          },
          {
            label: "/level reset",
            to: "/docs/commands/leveling-commands/level-reset",
          },
          {
            label: "/level role-add",
            to: "/docs/commands/leveling-commands/level-role-add",
          },
          {
            label: "/level role-list",
            to: "/docs/commands/leveling-commands/level-role-list",
          },
          {
            label: "/level role-remove",
            to: "/docs/commands/leveling-commands/level-role-remove",
          },
          {
            label: "/level set-announce",
            to: "/docs/commands/leveling-commands/level-set-announce",
          },
        ],
      },

      {
        label: "Logging Commands",
        to: "/docs/category/logging-commands",
        icon: "/img/icons/log.svg",
        children: [
          {
            label: "/log config",
            to: "/docs/commands/logging-commands/log-config",
          },
          {
            label: "/log disable",
            to: "/docs/commands/logging-commands/log-disable",
          },
          {
            label: "/log view",
            to: "/docs/commands/logging-commands/log-view",
          },
        ],
      },

      {
        label: "Moderation",
        to: "/docs/category/moderation",
        icon: "/img/icons/mod.svg",
        children: [
          {
            label: "Ban Commands",
            to: "/docs/category/ban-commands",
            children: [
              {
                label: "/ban add",
                to: "/docs/commands/moderation/ban-commands/ban-add",
              },
              {
                label: "/ban list",
                to: "/docs/commands/moderation/ban-commands/ban-list",
              },
              {
                label: "/ban remove",
                to: "/docs/commands/moderation/ban-commands/ban-remove",
              },
              {
                label: "/ban view",
                to: "/docs/commands/moderation/ban-commands/ban-view",
              },
            ],
          },
          {
            label: "Kick Commands",
            to: "/docs/category/kick-commands",
            icon: "/img/icons/kick.svg",
            children: [
              {
                label: "/kick add",
                to: "/docs/commands/moderation/kick-commands/kick-add",
              },
              {
                label: "/kick list",
                to: "/docs/commands/moderation/kick-commands/kick-list",
              },
              {
                label: "/kick remove",
                to: "/docs/commands/moderation/kick-commands/kick-remove",
              },
              {
                label: "/kick view",
                to: "/docs/commands/moderation/kick-commands/kick-view",
              },
            ],
          },
          {
            label: "Timeout Commands",
            to: "/docs/category/timeout-commands",
            icon: "/img/icons/time.svg",
            children: [
              {
                label: "/timeout add",
                to: "/docs/commands/moderation/timeout-commands/timeout-add",
              },
              {
                label: "/timeout list",
                to: "/docs/commands/moderation/timeout-commands/timeout-list",
              },
              {
                label: "/timeout remove",
                to: "/docs/commands/moderation/timeout-commands/timeout-remove",
              },
              {
                label: "/timeout view",
                to: "/docs/commands/moderation/timeout-commands/timeout-view",
              },
            ],
          },
          {
            label: "User Notes Commands",
            to: "/docs/category/user-notes-commands",
            icon: "/img/icons/notes.svg",
            children: [
              {
                label: "/note add",
                to: "/docs/commands/moderation/user-notes-commands/note-add",
              },
              {
                label: "/note remove",
                to: "/docs/commands/moderation/user-notes-commands/note-remove",
              },
              {
                label: "/note view",
                to: "/docs/commands/moderation/user-notes-commands/note-view",
              },
            ],
          },
          {
            label: "Warn Commands",
            to: "/docs/category/warn-commands",
            icon: "/img/icons/warn.svg",
            children: [
              {
                label: "/warn add",
                to: "/docs/commands/moderation/warn-commands/warn-add",
              },
              {
                label: "/warn remove",
                to: "/docs/commands/moderation/warn-commands/warn-remove",
              },
              {
                label: "/warn view",
                to: "/docs/commands/moderation/warn-commands/warn-view",
              },
            ],
          },
        ],
      },

      {
        label: "Command Permission Commands",
        to: "/docs/category/permission-commands",
        icon: "/img/icons/perms.svg",
        children: [
          {
            label: "/permissions reset",
            to: "/docs/commands/permission-commands/permissions-reset",
          },
          {
            label: "/permissions set",
            to: "/docs/commands/permission-commands/permissions-set",
          },
          {
            label: "/permissions view",
            to: "/docs/commands/permission-commands/permissions-view",
          },
        ],
      },

      {
        label: "Reaction Role Commands",
        to: "/docs/category/reaction-role-commands",
        icon: "/img/icons/role.svg",
        children: [
          {
            label: "/reactionrole add",
            to: "/docs/commands/reaction-role-commands/reactionrole-add",
          },
          {
            label: "/reactionrole create",
            to: "/docs/commands/reaction-role-commands/reactionrole-create",
          },
          {
            label: "/reactionrole delete",
            to: "/docs/commands/reaction-role-commands/reactionrole-delete",
          },
          {
            label: "/reactionrole remove",
            to: "/docs/commands/reaction-role-commands/reactionrole-remove",
          },
        ],
      },

      {
        label: "Reminder Commands",
        to: "/docs/category/reminder-commands",
        icon: "/img/icons/bell.svg",
        children: [
          {
            label: "/reminder create",
            to: "/docs/commands/reminder-commands/reminder-create",
          },
          {
            label: "/reminder delete",
            to: "/docs/commands/reminder-commands/reminder-delete",
          },
          {
            label: "/reminder edit",
            to: "/docs/commands/reminder-commands/reminder-edit",
          },
          {
            label: "/reminder list",
            to: "/docs/commands/reminder-commands/reminder-list",
          },
          {
            label: "/reminder timezone",
            to: "/docs/commands/reminder-commands/reminder-timezone",
          },
        ],
      },

      {
        label: "Role Panel Commands",
        to: "/docs/category/role-panel-commands",
        icon: "/img/icons/panel.svg",
        children: [
          {
            label: "/rolepanel add-role",
            to: "/docs/commands/role-panel-commands/rolepanel-add-role",
          },
          {
            label: "/rolepanel create",
            to: "/docs/commands/role-panel-commands/rolepanel-create",
          },
          {
            label: "/rolepanel delete",
            to: "/docs/commands/role-panel-commands/rolepanel-delete",
          },
          {
            label: "/rolepanel editembed",
            to: "/docs/commands/role-panel-commands/rolepanel-editembed",
          },
          {
            label: "/rolepanel list",
            to: "/docs/commands/role-panel-commands/rolepanel-list",
          },
          {
            label: "/rolepanel publish",
            to: "/docs/commands/role-panel-commands/rolepanel-publish",
          },
        ],
      },

      {
        label: "Starboard Commands",
        to: "/docs/category/starboard-commands",
        icon: "/img/icons/board.svg",
        children: [
          {
            label: "/sboard disable",
            to: "/docs/commands/starboard-commands/sboard-disable",
          },
          {
            label: "/sboard enable",
            to: "/docs/commands/starboard-commands/sboard-enable",
          },
          {
            label: "/sboard set-channel",
            to: "/docs/commands/starboard-commands/sboard-set-channel",
          },
          {
            label: "/sboard set-emoji",
            to: "/docs/commands/starboard-commands/sboard-set-emoji",
          },
          {
            label: "/sboard set-threshold",
            to: "/docs/commands/starboard-commands/sboard-set-threshold",
          },
        ],
      },

      {
        label: "Sticky Embed Commands",
        to: "/docs/category/sticky-embed-commands",
        icon: "/img/icons/sticky.svg",
        children: [
          {
            label: "/sticky-embed create",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-create",
          },
          {
            label: "/sticky-embed delete",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-delete",
          },
          {
            label: "/sticky-embed edit",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-edit",
          },
          {
            label: "/sticky-embed list",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-list",
          },
          {
            label: "/sticky-embed remove",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-remove",
          },
          {
            label: "/sticky-embed send",
            to: "/docs/commands/sticky-embed-commands/sticky-embed-send",
          },
        ],
      },

      {
        label: "Ticketing",
        to: "/docs/category/ticketing",
        icon: "/img/icons/ticket.svg",
        children: [
          {
            label: "/ticketpanel channel",
            to: "/docs/commands/ticketing/ticketpanel-channel",
          },
          {
            label: "/ticketpanel create",
            to: "/docs/commands/ticketing/ticketpanel-create",
          },
          {
            label: "/ticketpanel delete",
            to: "/docs/commands/ticketing/ticketpanel-delete",
          },
          {
            label: "/ticketpanel edit",
            to: "/docs/commands/ticketing/ticketpanel-edit",
          },
          {
            label: "/ticketpanel list",
            to: "/docs/commands/ticketing/ticketpanel-list",
          },
          {
            label: "/ticketpanel post",
            to: "/docs/commands/ticketing/ticketpanel-post",
          },
          {
            label: "/ticketpanel setrole",
            to: "/docs/commands/ticketing/ticketpanel-setrole",
          },
        ],
      },

      {
        label: "Utility Commands",
        to: "/docs/category/utility-commands",
        icon: "/img/icons/utility.svg",
        children: [
          { label: "/clear", to: "/docs/commands/utility-commands/clear" },
          { label: "/help", to: "/docs/commands/utility-commands/help" },
          { label: "/report", to: "/docs/commands/utility-commands/report" },
        ],
      },

      {
        label: "Verification Commands",
        to: "/docs/category/verification-commands",
        icon: "/img/icons/verify.svg",
        children: [
          {
            label: "/verify-panel edit",
            to: "/docs/commands/verification-commands/verify-panel-edit",
          },
          {
            label: "/verify-panel",
            to: "/docs/commands/verification-commands/verify-panel",
          },
        ],
      },

      {
        label: "Welcome/Leave Commands",
        to: "/docs/category/welcome-leave-commands",
        icon: "/img/icons/greet.svg",
        children: [
          {
            label: "Message Tags",
            to: "/docs/commands/welcome-leave-commands/messagetags",
          },
          {
            label: "/setleave set",
            to: "/docs/commands/welcome-leave-commands/setleave-set",
          },
          {
            label: "/setleave test",
            to: "/docs/commands/welcome-leave-commands/setleave-test",
          },
          {
            label: "/setwelcome set",
            to: "/docs/commands/welcome-leave-commands/setwelcome-set",
          },
          {
            label: "/setwelcome test",
            to: "/docs/commands/welcome-leave-commands/setwelcome-test",
          },
        ],
      },
    ],
  },

  {
    label: "Troubleshooting",
    to: "/docs/troubleshooting",
    icon: "/img/icons/tools.svg",
  },
  {
    label: "Contributing",
    to: "/docs/contributing",
    icon: "/img/icons/handheart.svg",
  },
  {
   label: "Our Mission",
   to: "/docs/mission",
   icon: "/img/icons/loveflag.svg"
  },
  { label: "Our Discord", to: "/docs/discord", icon: "/img/icons/discord.svg" },
  { label: "Terms of Service", to: "/docs/terms-of-service", icon: "/img/icons/terms.svg" },
];
