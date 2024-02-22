<template>
  <v-app-bar app color="grey-darken-4">
    <template v-slot:prepend>
      <v-btn variant="plain" to="/homeExmaple" size="x-large">
        <v-icon>mdi-blender-software</v-icon>CSMT
      </v-btn>
      <v-btn variant="plain" id="team"
        >Team <v-icon>mdi-menu-down</v-icon>
        <v-menu activator="parent" open-on-hover>
          <v-list>
            <v-list-item v-for="(item, index) in team" :key="index">
              <v-list-item-title
                ><v-btn variant="plain" :to="item.to">{{
                  item.title
                }}</v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn variant="plain"
        >Reports <v-icon>mdi-menu-down</v-icon>
        <v-menu open-on-hover activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in reports" :key="index">
              <v-list-item-title
                ><v-btn variant="plain" :to="item.to">{{
                  item.title
                }}</v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn variant="plain"
        >Tools <v-icon>mdi-menu-down</v-icon>
        <v-menu open-on-hover activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in tools" :key="index">
              <v-list-item-title
                ><v-btn variant="plain" :to="item.to">{{
                  item.title
                }}</v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn variant="plain">Autoreport</v-btn>
      <v-btn variant="plain">Report a bug</v-btn>
    </template>
    <template v-slot:append>
      <v-btn variant="plain"
        >Menu <v-icon>mdi-menu-down</v-icon>
        <v-menu open-on-hover activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in menu" :key="index">
              <v-list-item-title
                ><v-btn variant="plain" :to="item.to">{{
                  item.title
                }}</v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn variant="plain">Login</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { title: "Organisation structure", to: "/homeExmaple" },
        { title: "Organisation structure outsources", to: "/homeExmaple" },
      ],
      reports: [
        { title: "Weekly Reports", to: "/weeklyreport" },
        { title: "Monthly Reports", to: "/monthlyreport" },
        { title: "Fiscal Month Reports", to: "/fiscalreport" },
        { title: "Timesheets", to: "/timesheets" },
      ],
      tools: [
        { title: "Zendesk Comments", to: "/zdcomments" },
        { title: "Likes/Dislikes", to: "/likes" },
        { title: "Mass PRocessing Tool", to: "/massprocessingtool" },
        { title: "BS Helper", to: "/bshelper" },
      ],
      menu: [
        { title: "Admin Panel", to: "/adminpanel" },
        { title: "Common settings", to: "/commonsettings" },
        { title: "Extrema manager", to: "/extremamanager" },
      ],
    };
  },
};
</script>

<style lang=""></style>
