import re

s = "anagram"

print(re.sub(r'/[^a-zA-Z0-9]*/g', '', s))
