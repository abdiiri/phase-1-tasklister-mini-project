const chai = require("chai");
const expect = chai.expect;

describe("Task Lister", function () {
  it("should add a task to the list", function () {
    const taskList = document.createElement("ul");
    const taskItem = document.createElement("li");
    taskItem.textContent = "Test Task";
    taskList.appendChild(taskItem);

    expect(taskList.children.length).to.equal(1);
    expect(taskList.children[0].textContent).to.equal("Test Task");
  });

  it("should delete a task from the list", function () {
    const taskList = document.createElement("ul");
    const taskItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskItem.textContent = "Test Task";
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    deleteButton.click();

    expect(taskList.children.length).to.equal(0);
  });
});
