package main

import (
	"github.com/gofiber/fiber/v2"
	spigot "github.com/momonaguilar/go-spigot-algo"
)

func main() {
	app := fiber.New()

	setupRoutes(app)

	spigot.Precision = 9
	pi := spigot.GetPi()
	print(pi)
	app.Listen(":9000")
}

func setupRoutes(app *fiber.App) {

	app.Get("/", status)

	app.Get("/api/bookmark", getAllBookmarks)
	app.Post("/api/bookmark", saveBookmark)
}

func status(c *fiber.Ctx) error {
	return c.SendString("Server is running! Send your request\n")
}

func getAllBookmarks(c *fiber.Ctx) error {
	return c.SendString("All Bookmarks\n")
}

func saveBookmark(c *fiber.Ctx) error {
	return c.SendString("Bookmark Saved!\n")
}
