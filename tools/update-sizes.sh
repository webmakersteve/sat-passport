#!/bin/bash

FILES="*.png"

for f in $FILES
do
# Counselor_Question[0-9]_Option1_[a-zA-Z]+.png
	if [[ $f == *"Option1"* ]]; then
		OPTION="$OPTION1_COLOR"
	elif [[ $f == *"Option2"* ]]; then
		OPTION="$OPTION2_COLOR"
	elif [[ $f == *"Option3"* ]]; then
		OPTION="$OPTION3_COLOR"
	fi

	# echo "$OPTION"

	convert "$f" \( -clone 0 -fill "$OPTION" -draw "color 0,0 reset" \) -compose atop -composite "$f.overlay"

done

#
