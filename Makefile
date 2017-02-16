all: clean compress

clean:
	rm -f dist/damnums.pk3

compress:
	zip dist/damnums.pk3 src/*
