<template>
  <div>
    <h1>Show Taskgroup - id: {{ id }}</h1>

    <label for="id">Id: {{ taskgroup.id }}</label>
    <br />

    <label for="name">name: {{ taskgroup.name }}</label>
    <br />

    <label for="description">Description: {{ taskgroup.description }}</label>
    <br />

    <label for="frequence_type"
      >Frequence Type: {{ taskgroup.frequence_type }}</label
    >
    <br />
    <br />
    <button @click="back()">Back</button>
    <button @click="newTaskitem(taskgroup.id)">New Taskitem</button>
    <br />
    <br />

    <list-taskitem></list-taskitem>
  </div>
</template>

<script>
import { getTaskgroupApi } from "../../../services/api";
import ListTaskitem from "../../taskitem/list-taskitem/ListTaskitem";
import { mapState, mapMutations } from "vuex";

export default {
  props: ["id"],
  components: {
    "list-taskitem": ListTaskitem
  },
  computed: {
    ...mapState(["taskgroup"])
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.setTaskgroup(response.data.data);
    });
  },
  methods: {
    ...mapMutations(["setTaskgroup"]),
    back() {
      this.$router.back();
    },
    newTaskitem(id) {
      this.$router.push({ name: "newTaskitem", params: { id: this.id } });
    }
  }
};
</script>

<style></style>
