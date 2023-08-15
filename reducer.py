#!/usr/bin/env python

import sys
import csv

current_category = None
current_lines = []

# Create a CSV writer that writes to stdout
writer = csv.writer(sys.stdout, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

# Write the header row
writer.writerow(['Category', 'Text'])

for line in sys.stdin:
    line = line.strip()
    parts = line.split('\t', 1)

    if len(parts) != 2:
        continue

    category, text = parts

    if current_category == category:
        current_lines.append(text)
    else:
        if current_category:
            # Write each line as a new row in the CSV
            for text_line in current_lines:
                writer.writerow([current_category, text_line])
        current_category = category
        current_lines = [text]

if current_category:
    for text_line in current_lines:
        writer.writerow([current_category, text_line])
