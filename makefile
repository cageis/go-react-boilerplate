dev:
	(cd resource/web && yarn watch) & (go build -o .build main.go && .build/main)