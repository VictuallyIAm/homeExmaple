<template>
  <v-card min-height="100vh">
    <div style="display: flex; justify-content: space-between">
      <div>
        <v-card-title tag="h1">Team</v-card-title>
        <v-card-subtitle tag="h3">Global player support</v-card-subtitle>
      </div>
      <div style="width: 20%; margin-top: 4rem; margin-right: 5rem">
        <v-text-field
          type="text"
          placeholder="Type name..."
          label="Search"
          v-model="searchValue"
          @input="
            () => {
              displayedUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchValue)
              );
            }
          "
          ><template v-slot:append-inner>
            <v-btn
              icon
              variant="plane"
              label=""
              height="30"
              width="30"
              title="Delete this report"
            >
              <svg-icon
                type="mdi"
                :path="mdiMagnify"
                size="25"
                color="gray"
              ></svg-icon>
            </v-btn> </template
        ></v-text-field>
      </div>
    </div>
    <div class="structure">
      <v-card-item>
        <v-list v-model:opened="open">
          <v-list-group value="Inhouse">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Inhouse Operations"
              ></v-list-item>
            </template>

            <v-list-group value="Billing">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Billing support"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title], i) in billing"
                :key="i"
                :title="title"
                :value="title"
              ></v-list-item>
            </v-list-group>
            <v-list-group value="Wot">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Wot Core"></v-list-item>
              </template>

              <v-list-item
                v-for="([title], i) in operations"
                :key="i"
                :title="title"
                :value="title"
              ></v-list-item>
            </v-list-group>
          </v-list-group>
          <v-list-group value=" Operations Management">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Operations Management"
              ></v-list-item>
            </template>

            <v-list-group value="4321">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="PMO"></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in billing"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>
            <v-list-group value="1234">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="QA Management"></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in operations"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Operations Management"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in operations"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              ></v-list-item>
            </v-list-group>
          </v-list-group>

          <v-list-item title="Technology & Innovation"></v-list-item>
        </v-list>
      </v-card-item>
      <div class="users">
        <v-card
          width="350px"
          height="400px"
          v-for="user in displayedUsers"
          :key="user.name"
        >
          <div class="userCard">
            <img
              src="../assets/avatar.jpg"
              height="170px"
              style="border-radius: 100%"
            />
            <v-card-title>{{ user.name }}</v-card-title>
            <v-card-subtitle>{{ user.role }}</v-card-subtitle>
            <div class="userCardActions">
              <v-btn icon height="50px" variant="tonal" width="50px">
                <svg-icon
                  size="30"
                  type="mdi"
                  :path="mdiCalendarAccount"
                ></svg-icon>
              </v-btn>
              <v-btn icon height="50px" variant="tonal" width="50px">
                <svg-icon
                  size="30"
                  type="mdi"
                  :path="mdiCalendarPlus"
                ></svg-icon>
              </v-btn>
              <v-btn icon height="50px" variant="tonal" width="50px">
                <svg-icon size="30" type="mdi" :path="mdiMenuDown"></svg-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarAccount } from "@mdi/js";
import { mdiCalendarPlus } from "@mdi/js";
import { mdiMenuDown } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";

export default {
  components: { SvgIcon },
  data() {
    return {
      open: ["InHouse"],
      billing: [["Team 1"], ["Team 2"]],
      operations: [["PMO"], ["QA Management"], ["Operational management"]],
      mdiCalendarAccount: mdiCalendarAccount,
      mdiCalendarPlus: mdiCalendarPlus,
      mdiMenuDown: mdiMenuDown,
      mdiMagnify: mdiMagnify,
      users: [
        { name: "Viktor Beketov", role: "Ceo at Wargaming" },
        { name: "Igor Skobeev", role: "Ceo at Wargaming" },
        { name: "Ekaterina Vaytekhovskaya", role: "Ceo at Wargaming" },
        { name: "Anton Irshenko", role: "Ceo at Wargaming" },
        { name: "Artem Sindalovskii", role: "Ceo at Wargaming" },
        { name: "Maksim Zahratski", role: "Ceo at Wargaming" },
        { name: "Vasiliy Safiullin", role: "Ceo at Wargaming" },
      ],
      displayedUsers: [
        { name: "Viktor Beketov", role: "Ceo at Wargaming" },
        { name: "Igor Skobeev", role: "Ceo at Wargaming" },
        { name: "Ekaterina Vaytekhovskaya", role: "Ceo at Wargaming" },
        { name: "Anton Irshenko", role: "Ceo at Wargaming" },
        { name: "Artem Sindalovskii", role: "Ceo at Wargaming" },
        { name: "Maksim Zahratski", role: "Ceo at Wargaming" },
        { name: "Vasiliy Safiullin", role: "Ceo at Wargaming" },
      ],
      searchValue: "",
    };
  },
};
</script>
<style lang="css">
.structure {
  display: flex;
  align-items: flex-start;
}
h1 {
  font-size: 40px !important;
  margin: 1rem;
}
h3 {
  font-size: 20px !important;
  margin-left: 1rem;
}
.userCard {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.users {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1rem 0 0 2rem;
}
.userCardActions {
  margin: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.v-card {
  margin: 0.8rem !important;
}
</style>
