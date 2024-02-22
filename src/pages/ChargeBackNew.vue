<template>
  <v-card>
    <FormWide
      title="Test for tree view"
      subtitle="Test"
      width="1200"
      height="100vh"
    >
      <section v-if="!isChanging">
        <InputWide
          label="Enter default Category"
          prop-name="defaultCat"
          :prop-value="defaultCat"
          type="text"
          @updateProp="updateProp"
        />
        <div style="text-align: center; margin: 10px">
          <WideGrayButton title="Go!" :onClick="startChange" />
        </div>
      </section>
      <section v-if="isChanging">
        <div class="flex">
          <div class="selectLEvel">
            <v-select :items="level1" v-model="selectedLevel1"> </v-select>
          </div>
          <div class="selectLEvel">
            <v-select :items="level2" v-model="selectedLevel2"> </v-select>
          </div>
          <div class="selectLEvel">
            <v-select :items="level3" v-model="selectedLevel3"> </v-select>
          </div>
          <div class="selectLEvel">
            <v-select :items="level4" v-model="selectedLevel4"> </v-select>
          </div>
        </div>
        <div style="text-align: center; margin: 10px; margin-left: 45px">
          <WideGrayButton title="Done!" :onClick="finishChange" />
        </div>
      </section>
    </FormWide>
  </v-card>
</template>
<script setup>
import WideGrayButton from '@/VueUILib/buttons/WideGrayButton.vue';
import InputWide from '@/VueUILib/inputLines/InputWide.vue';
import { ref, watch } from 'vue';
const selectedLevel1 = ref('L1 Category 1');
const selectedLevel2 = ref('L2 Category 1');
const selectedLevel3 = ref('L3 Category 1');
const selectedLevel4 = ref('L4 Category 1');
const level1 = ref([
  'L1 Category 1',
  'L1 Category 2',
  'L2 Category 3',
  'L2 Category 4',
]);
const level2 = ref([
  'L2 Category 1',
  'L2 Category 2',
  'L2 Category 3',
  'L2 Category 4',
]);
const level3 = ref([
  'L3 Category 1',
  'L3 Category 2',
  'L3 Category 3',
  'L3 Category 4',
]);
const level4 = ref([
  'L4 Category 1',
  'L4 Category 2',
  'L4 Category 3',
  'L4 Category 4',
]);

const fullCatName = ref('Category 1-1-1-1');
const defaultCat = ref('1-1-1-1');
const isChanging = ref(false);

const start = ref(null);
const end = ref(null);

watch(selectedLevel1, () => {
  selectedLevel2.value = 'L2 Category 1';
  selectedLevel3.value = 'L3 Category 1';
  selectedLevel4.value = 'L4 Category 1';
  changeFullName();
});
watch(selectedLevel2, () => {
  selectedLevel3.value = 'L3 Category 1';
  selectedLevel4.value = 'L4 Category 1';
  changeFullName();
});
watch(selectedLevel3, () => {
  selectedLevel4.value = 'L4 Category 1';
  changeFullName();
});
watch(selectedLevel4, () => {
  changeFullName();
});

const changeFullName = () => {
  fullCatName.value = `Category ${extractNumber(
    selectedLevel1.value
  )}-${extractNumber(selectedLevel2.value)}-${extractNumber(
    selectedLevel3.value
  )}-${extractNumber(selectedLevel4.value)}`;
};

const extractNumber = (cat) => {
  return Number(cat.split(' ')[2]);
};

const updateProp = (propName, newValue) => {
  defaultCat.value = newValue;
};

const startChange = () => {
  const numArr = defaultCat.value.split('-');
  selectedLevel1.value = level1.value[Number(numArr[0]) - 1];
  selectedLevel2.value = level2.value[Number(numArr[1]) - 1];
  selectedLevel3.value = level3.value[Number(numArr[2]) - 1];
  selectedLevel4.value = level4.value[Number(numArr[3]) - 1];
  isChanging.value = true;
  start.value = Date.now();
};
const finishChange = () => {
  end.value = Date.now();
  if (window.confirm(`${(end.value - start.value) / 1000} seconds`)) {
    isChanging.value = false;
  }
};
</script>
<style scoped lang="css">
.flex {
  display: flex;
  width: 100%;
}

.selectLEvel {
  margin: 4px;
}
</style>
