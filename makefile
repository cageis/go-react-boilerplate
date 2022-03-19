install:
	cd resource/web && yarn install

dev:
	(cd resource/web && yarn watch) & (go build -o .build/backend main.go && .build/backend)