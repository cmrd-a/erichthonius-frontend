<template>
  <div>
    <h1>Управление</h1>
    <v-row align="center">
      <v-col>
        <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="progress_loop"
        >
          Скачать файлы
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click=""
        >
          Опознать файлы
        </v-btn>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-progress-linear
        :active="loading"
        :value="dl_task_percent"
        rounded
        striped
        height="10"
    ></v-progress-linear>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: "Manage",
    data() {
      return {}
    },
    methods: {
      ...mapActions(['set_dl_id', 'set_dl_state']),

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      progress_loop: async function () {
        await this.set_dl_id();
        while (this.dl_task_state === 'PROGRESS' || this.dl_task_state === 'STARTED') {
          await this.set_dl_state();
          await this.sleep(1000);
        }
      },
    },
    computed: {
      ...mapGetters([
        'dl_task_id',
        'dl_task_state',
        'dl_task_info',
        'dl_task_percent'
      ]),
      loading() {
        return this.dl_task_state === 'PROGRESS' || this.dl_task_state === 'STARTED';
      }
    },
  }
</script>

<style scoped>

</style>