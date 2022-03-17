package types

type ToDo struct {
	Name        string `json:"Name"`
	Description string `json:"Description"`
	IsCompleted bool   `json:"IsCompleted"`
}
