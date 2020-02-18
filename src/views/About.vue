<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{info}}
    <hr>
    <button v-on:click="GET_DL_ID">GET_DL_ID</button>
    {{DL_ID}}
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'About',
    data() {
      return {info: null}

    },
    mounted() {
      // axios
      //   .get('/files/download')
      //   .then(response => {
      //     this.info = response.data.task_id;
      //
      //   });
    },
    computed:{
      ...mapGetters(['DL_ID'])
    },
    methods: {
      ...mapActions(['GET_DL_ID'])
    }
  }
</script>