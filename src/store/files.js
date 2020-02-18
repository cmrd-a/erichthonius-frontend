const state = {
  dl_task_id: null,
  dl_task_state: null,
  dl_task_info: {done: 0, total: 0},
};

const getters = {
  dl_task_id: state => {
    return state.dl_task_id;
  },
  dl_task_state: state => {
    return state.dl_task_state;
  },
  dl_task_info: state => {
    return state.dl_task_info;
  },
  dl_task_percent: state=>{
    return state.dl_task_info.done*100/state.dl_task_info.total
  }

};

const mutations = {
  set_dl_id: (state, payload) => {
    state.dl_task_id = payload;
  },
  set_dl_state: (state, payload) => {
    state.dl_task_state = payload;
  },
  set_dl_info: (state, payload) => {
    state.dl_task_info = payload;
  }
};

const actions = {
  set_dl_id: async (context, payload) => {
    let {data} = await axios.get('/files/download');
    context.commit('set_dl_id', data.task_id);
    context.commit('set_dl_state', "STARTED");
  },
  set_dl_state: async (context, payload) => {
    let {data} = await axios.get('/task_status/' + state.dl_task_id);
    context.commit('set_dl_state', data.state);
    context.commit('set_dl_info', data.info);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};