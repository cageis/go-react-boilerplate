package controller

import (
	"encoding/json"
	"github.com/cageis/go-react-boilerplate/types"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"os"
)

func CreateToDoController(c *gin.Context) {
	var todoList []types.ToDo
	var r types.ToDo
	var f *os.File

	_ = c.Bind(&r)
	f, _ = os.OpenFile("list.json", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0744)
	file, _ := ioutil.ReadAll(f)
	_ = json.Unmarshal(file, &todoList)

	// now Marshal it
	marshalled, _ := json.Marshal(append(todoList, r))

	_, _ = f.Write(marshalled)

	c.JSON(200, gin.H{"message": "Item saved."})
}
