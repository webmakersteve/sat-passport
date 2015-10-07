<?php

function buildname($matches) {

	$overlay = false;

	if (array_key_exists(5, $matches)) {
		$overlay = true;
	}

	return strtolower(sprintf('%s-q%s-%s%s.png', $matches[1], $matches[2], $matches[3], $overlay ? 'overlay' : ''));

}

if ($handle = opendir(__DIR__)) {

  /* This is the correct way to loop over the directory. */
  while (false !== ($entry = readdir($handle))) {
    //echo "$entry\n";
		// Student_Question2_Option3_Me.png.overlay
		if (preg_match("#^(Student|Counselor|Parent)_Question([0-9]+)_Option([1-4])_([^.]+).png(.overlay)?#i", $entry, $matches)) {
			$name = buildname($matches);
			rename($entry, $name);
		}
  }

  closedir($handle);
}
