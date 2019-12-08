#!/bin/sh
while inotifywait --quiet -e modify --recursive ./Sources/; do
	$HOME/Downloads/dart-sass/sass ./Sources/SASS:./
	for f in ./Sources/*.html; do
		filename=$(basename -- "$f")
		cpp -P "$f" "./$filename"
	done
done
