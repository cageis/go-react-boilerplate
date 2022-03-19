package controller

import (
	"encoding/json"
	"github.com/cageis/go-react-boilerplate/types"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

type request struct {
	Name string
}

func DeleteToDoController(c *gin.Context) {
	var todoList []types.ToDo
	var filteredToDoList = make([]types.ToDo, 0)
	var r request
	_ = c.Bind(&r)

	file, err := ioutil.ReadFile("list.json")
	_ = json.Unmarshal(file, &todoList)

	for _, todo := range todoList {
		if todo.Name != r.Name {
			filteredToDoList = append(filteredToDoList, todo)
		}
	}

	// now Marshal it
	marshalled, _ := json.Marshal(filteredToDoList)

	if err != nil {
		return
	}

	_ = ioutil.WriteFile("list.json", marshalled, 0744)

	c.JSON(200, gin.H{"message": "Item deleted."})
}
