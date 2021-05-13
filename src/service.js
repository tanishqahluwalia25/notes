import Axios from "axios";

export const getNotes = () => {
  Axios.get("https://reminders-task.hiring.durbin.live/notes")
    .then(function (response) {
      console.log(response.data.data.notes);
      return response.data.data.notes;
    })
    .catch(function (error) {
      // handle error
      throw error;
    });
};
