const inputTask = document.querySelector("#inputTask");

const taskList = document.querySelector("#taskList");

function addTask() {
  const newTask = document.createElement("li");
  taskList.appendChild(newTask);
  newTask.textContent = inputTask.value;
  inputTask.value = "";
  deleteTask(newTask);
}
function deleteTask(newTask) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "remove";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}
