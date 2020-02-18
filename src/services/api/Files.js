export default {
  downloadFiles() {
    return axios.get('/files/download')
      .then(response => {
        return response.data
      })
  },

  getTaskState(task_id) {
    return axios.get('/task_state/' + task_id)
      .then(response => {
        return response.data
      })
  }
}