package main

import (
	"github.com/cageis/go-react-boilerplate/controller"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	apiRouter := gin.New()
	assetsRouter := gin.New()

	assetsRouter.Static("/", "./resource/web/.build/")
	apiRouter.POST("/api/todo/create", controller.CreateToDoController)
	apiRouter.GET("/api/todo/list", controller.ListToDoController)
	router.Any("/*any", func(context *gin.Context) {
		controller.MainController(context, apiRouter, assetsRouter)
	})

	err := router.Run()
	if err != nil {
		return
	}
}
