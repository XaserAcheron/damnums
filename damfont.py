import sys

MAX_DIGITS = 5

# [TODO] document this silly thing:

def genfonts(prefix, width, height):
	yoffset = height - 2

	for charindex in range(10):
		char = chr(65 + charindex);

		for numdigits in range(2, MAX_DIGITS+1):
			spritewidth = width * numdigits
			xoffset = int(spritewidth / 2)

			for digit in range(1, numdigits+1):
				patchwidth = spritewidth - (width * digit)

				print ('Sprite "{}{}{}{}0", {}, {} {{ Offset {}, {} Patch "{}11{}0", {}, 0 }}'.format(
					prefix
				,	numdigits
				,	digit
				,	char
				,	spritewidth
				,	height
				,	xoffset
				,	yoffset
				,	prefix
				,	char
				,	patchwidth
				))
		print ('')

if __name__ == "__main__":
	if len(sys.argv) > 3:
		try:
			prefix =     sys.argv[1]
			width  = int(sys.argv[2])
			height = int(sys.argv[3])
			if len(prefix) == 2:
				genfonts(prefix, width, height)
			else:
				print ("error: [prefix] must be exactly two characters")
		except ValueError:
			print ("error: [width] and [height] must be integers")
	else:
		print ("usage: python damfont.py [prefix] [width] [height]")
