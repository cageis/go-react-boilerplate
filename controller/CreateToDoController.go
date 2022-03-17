package controller

import (
	"encoding/json"
	"github.com/cageis/go-react-boilerplate/types"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

func CreateToDoController(c *gin.Context) {
	var todoList []types.ToDo
	var r types.ToDo
	_ = c.Bind(&r)

	file, err := ioutil.ReadFile("list.json")
	_ = json.Unmarshal(file, &todoList)

	// now Marshal it
	marshalled, _ := json.Marshal(append(todoList, r))

	if err != nil {
		return
	}

	_ = ioutil.WriteFile("list.json", marshalled, 0744)

	c.JSON(200, gin.H{"message": "Item saved."})
}
