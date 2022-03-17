package controller

import (
	"github.com/gin-gonic/gin"
	"strings"
)

func MainController(c *gin.Context, apiRouter *gin.Engine, assetsRouter *gin.Engine) {
	path := c.Param("any")

	if strings.HasPrefix(path, "/api") {
		println("matched api handlers")
		apiRouter.HandleContext(c)
	} else {
		assetsRouter.HandleContext(c)
	}
}
