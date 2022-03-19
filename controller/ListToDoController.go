package controller

import (
	"encoding/json"
	"github.com/cageis/go-react-boilerplate/types"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

func ListToDoController(c *gin.Context) {
	var todoList = make([]types.ToDo, 0)

	file, _ := ioutil.ReadFile("list.json")
	_ = json.Unmarshal(file, &todoList)

	c.JSON(200, todoList)
}
